// Shared HTML→PDF rendering for brand books.
//
// Used by the permalink GET (/api/pdf/[hash]) and the cache-free POST
// (/api/pdf). Centralising the Playwright browser path means a fresh
// extraction can render its PDF straight from the brand HTML the client
// already holds — no Blob round-trip — so a just-finished extraction
// can never fail with "extraction not found".

async function getLocalBrowserOptions() {
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    const chromium = (await import('@sparticuz/chromium')).default;
    return {
      executablePath: await chromium.executablePath(),
      browserArgs: chromium.args,
    };
  }
  return {};
}

async function getBrowserOptions() {
  if (process.env.BROWSERLESS_TOKEN) {
    const region = process.env.BROWSERLESS_REGION || 'production-sfo';
    return { wsEndpoint: `wss://${region}.browserless.io/?token=${process.env.BROWSERLESS_TOKEN}` };
  }
  return getLocalBrowserOptions();
}

// Open a browser from options; never let a dead remote browser win.
async function openBrowser(chromium, opts) {
  if (opts.wsEndpoint) return chromium.connect(opts.wsEndpoint);
  if (opts.executablePath) return chromium.launch({ executablePath: opts.executablePath, args: opts.browserArgs || [] });
  return chromium.launch();
}

// Subresource allowlist for the untrusted POST path. The brand book is
// self-contained inline CSS plus Google Fonts, so we allow only data:
// URIs and the two font hosts and abort everything else — client-supplied
// HTML can't be used to fetch internal or arbitrary URLs (SSRF).
const FONT_HOSTS = new Set(['fonts.googleapis.com', 'fonts.gstatic.com']);
function isAllowedSubresource(url) {
  if (url.startsWith('data:')) return true;
  try { return FONT_HOSTS.has(new URL(url).hostname); } catch { return false; }
}

function footerTemplate(host) {
  return `<div style="font-family: -apple-system, sans-serif; font-size: 9px; color: #888; width: 100%; padding: 0 18mm; display: flex; justify-content: space-between;"><span>designlang · ${host} brand guidelines</span><span><span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`;
}

// Render brand-book HTML to a PDF Buffer. `trusted` (server-generated
// HTML from the cache) renders as-is; untrusted client HTML gets the
// subresource allowlist above. Falls back from a dead Browserless to the
// bundled Chromium so a remote outage never breaks the download.
export async function renderBrandPdf(html, host, { trusted = false } = {}) {
  const { chromium } = await import('playwright-core');
  const opts = await getBrowserOptions();
  let browser;
  try {
    browser = await openBrowser(chromium, opts);
  } catch (e) {
    if (opts.wsEndpoint) browser = await openBrowser(chromium, await getLocalBrowserOptions());
    else throw e;
  }

  try {
    const page = await browser.newPage();
    if (!trusted) {
      await page.route('**', (route) => {
        const url = route.request().url();
        return isAllowedSubresource(url) ? route.continue() : route.abort();
      });
    }
    await page.setContent(html, { waitUntil: 'networkidle' });
    return await page.pdf({
      format: 'a4',
      printBackground: true,
      margin: { top: '24mm', right: '18mm', bottom: '20mm', left: '18mm' },
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: footerTemplate(host),
    });
  } finally {
    try { await browser.close(); } catch { /* ignore */ }
  }
}
