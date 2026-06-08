// GET /api/pdf/[hash] — render a cached extraction's brand book as PDF.
//
// This is the permalink path: it reads the design from the Blob cache by
// hash and renders it. For a *fresh* extraction the client should POST to
// /api/pdf with the brand HTML it already holds (see lib/pdf.js) — that
// path needs no cache, so it can't 404 with "extraction not found".

import { getCachedByHash } from '../../../../lib/cache.js';
import { formatBrandBook } from '../../../../../src/formatters/brand-book.js';
import { renderBrandPdf } from '../../../../lib/pdf.js';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

function safeHost(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return 'site'; }
}

function err(status, message) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

export async function GET(_req, { params }) {
  const { hash } = await params;
  if (!hash || !/^[a-z0-9-]{4,80}$/i.test(hash)) return err(400, 'bad hash');

  const cached = await getCachedByHash(hash).catch(() => null);
  if (!cached?.design) return err(404, 'extraction not found');

  const design = cached.design;
  const host = safeHost(design?.meta?.url);
  const html = formatBrandBook(design);

  try {
    const pdfBuf = await renderBrandPdf(html, host, { trusted: true });
    return new Response(pdfBuf, {
      status: 200,
      headers: {
        'content-type': 'application/pdf',
        'content-disposition': `attachment; filename="${host}-brand.pdf"`,
        'cache-control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    });
  } catch (e) {
    return err(500, `pdf render failed: ${e.message}`);
  }
}
