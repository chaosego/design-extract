import { SITE_URL } from '../seo-config';
import Theatre from '../components/theatre/Theatre';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Watch — see designlang read a website, live',
  description:
    'Paste any URL and watch a real headless browser open the page and read its whole design system in real time — palette, type, spacing and motion lifting off the page into a design system as it goes. Share the result; the link unfurls the number.',
  alternates: { canonical: `${SITE_URL}/watch` },
  openGraph: {
    title: 'designlang · watch it read a site',
    description: 'A real browser opens any URL and reads its design system, live. Then share it.',
    url: `${SITE_URL}/watch`,
  },
};

export default async function WatchPage({ searchParams }) {
  const sp = (await searchParams) || {};
  const raw = typeof sp.u === 'string' ? sp.u : '';
  const initial = sanitize(raw);

  return (
    <main>
      <section className="section" style={{ paddingTop: 72, paddingBottom: 24 }}>
        <div className="wrap">
          <p className="eyebrow">watch · live</p>
          <h1 className="h1" style={{ fontSize: 'clamp(38px, 6vw, 68px)', maxWidth: '16ch' }}>
            Watch the browser <em style={{ fontStyle: 'normal', color: 'var(--red-3)' }}>read</em> a site.
          </h1>
          <p className="lede" style={{ marginTop: 18, maxWidth: '52ch' }}>
            Real headless Chromium opens the page and reads its design system in real time. No
            install, no account. Then share the result.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <Theatre autoStart={initial || null} live big />
        </div>
      </section>
    </main>
  );
}

// Only let http(s) URLs through to autoplay; anything else falls back to idle.
function sanitize(raw) {
  if (!raw) return '';
  try {
    const u = new URL(raw.startsWith('http') ? raw : `https://${raw}`);
    return u.protocol === 'http:' || u.protocol === 'https:' ? u.toString() : '';
  } catch {
    return '';
  }
}
