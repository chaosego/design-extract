// studio — a local, interactive design studio for the latest extraction.
//
// Launches a tiny zero-dep HTTP server on localhost that serves a living
// playground over the last extraction: edit a token in the inspector and a
// wall of real components (plus a rebuilt page) restyles instantly. Export
// the edited system back out as DTCG tokens, CSS variables, and a Tailwind
// theme — or copy a shareable link that encodes your edits in the URL.
//
// Usage: designlang studio [--dir ./design-extract-output] [--port 4837]

import { createServer } from 'http';
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, join, extname } from 'path';
import { deriveTokens } from './studio-tokens.js';

// Re-export so existing importers (and tests) can keep reaching it here.
export { deriveTokens } from './studio-tokens.js';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
};

function pickLatest(dir) {
  if (!existsSync(dir)) return null;
  const files = readdirSync(dir).filter(f => f.endsWith('-design-tokens.json'));
  if (!files.length) return null;
  const picked = files
    .map(f => ({ f, t: statSync(join(dir, f)).mtimeMs }))
    .sort((a, b) => b.t - a.t)[0];
  return picked.f.replace(/-design-tokens\.json$/, '');
}

function loadExtraction(dir, prefix) {
  const read = (name) => {
    const p = join(dir, name);
    if (!existsSync(p)) return null;
    try { return JSON.parse(readFileSync(p, 'utf-8')); } catch { return null; }
  };
  return {
    prefix,
    tokens: read(`${prefix}-design-tokens.json`),
    intent: read(`${prefix}-intent.json`),
    visualDna: read(`${prefix}-visual-dna.json`),
    library: read(`${prefix}-library.json`),
    voice: read(`${prefix}-voice.json`),
    motion: read(`${prefix}-motion-tokens.json`),
    mcp: read(`${prefix}-mcp.json`),
  };
}

// HTML-escape everything that lands in the template. The data is from
// the user's own extraction on their own machine, but keep discipline.
function esc(v) {
  if (v == null) return '';
  return String(v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ── HTML fragments ────────────────────────────────────────────────────

function styleBlock() {
  return `<style>
  :root {
    --paper: #f3f1ea; --paper-2: #ece8dd; --paper-3: #d8d3c5;
    --ink: #0a0908; --ink-2: #403c34; --ink-3: #8b8778;
    --hi: #ff4800;
    --mono: 'JetBrains Mono', ui-monospace, monospace;
    --display: 'Fraunces', Georgia, serif;
    --body: 'Instrument Sans', -apple-system, system-ui, sans-serif;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; background: var(--paper); color: var(--ink); font-family: var(--body); font-size: 14px; line-height: 1.5; }
  .app { display: grid; grid-template-columns: 320px 1fr; grid-template-rows: auto 1fr; height: 100vh; }
  .topbar { grid-column: 1 / -1; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 12px 20px; border-bottom: 1px solid var(--ink); background: var(--paper); }
  .mark { font-family: var(--mono); font-size: 13px; letter-spacing: 0.02em; white-space: nowrap; }
  .mark em { color: var(--hi); font-style: italic; font-family: var(--display); }
  .tabs { display: flex; gap: 4px; }
  .tab { font-family: var(--mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; padding: 6px 12px; border: 1px solid var(--ink); background: transparent; color: var(--ink); cursor: pointer; }
  .tab[aria-selected="true"] { background: var(--ink); color: var(--paper); }
  .actions { display: flex; gap: 8px; align-items: center; }
  .btn { font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; padding: 7px 12px; border: 1px solid var(--ink); background: var(--paper); color: var(--ink); cursor: pointer; }
  .btn:hover { background: var(--ink); color: var(--paper); }
  .btn.hi { background: var(--hi); border-color: var(--hi); color: #fff; }
  .btn.hi:hover { filter: brightness(1.08); }
  .menu { position: relative; }
  .menu-list { position: absolute; right: 0; top: calc(100% + 6px); background: var(--paper); border: 1px solid var(--ink); min-width: 200px; z-index: 20; display: none; }
  .menu-list.open { display: block; }
  .menu-list button { display: block; width: 100%; text-align: left; padding: 9px 14px; border: 0; border-bottom: 1px solid var(--paper-3); background: transparent; font-family: var(--mono); font-size: 11px; letter-spacing: 0.04em; cursor: pointer; color: var(--ink); }
  .menu-list button:last-child { border-bottom: 0; }
  .menu-list button:hover { background: var(--paper-2); }

  .inspector { border-right: 1px solid var(--ink); overflow-y: auto; padding: 8px 0 40px; }
  .grp { border-bottom: 1px solid var(--paper-3); padding: 16px 20px; }
  .grp h3 { font-family: var(--mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 14px; }
  .field { display: grid; grid-template-columns: 70px 1fr; align-items: center; gap: 12px; margin-bottom: 12px; }
  .field:last-child { margin-bottom: 0; }
  .field label { font-family: var(--mono); font-size: 11px; color: var(--ink-2); letter-spacing: 0.02em; }
  .field input[type="color"] { width: 100%; height: 28px; border: 1px solid var(--ink); background: none; padding: 2px; cursor: pointer; }
  .field input[type="range"] { width: 100%; accent-color: var(--hi); }
  .field select { width: 100%; font-family: var(--mono); font-size: 11px; padding: 5px; border: 1px solid var(--ink); background: var(--paper); }
  .field .val { font-family: var(--mono); font-size: 10px; color: var(--ink-3); text-align: right; }
  .swatches { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px; grid-column: 1 / -1; }
  .swatches button { width: 18px; height: 18px; border: 1px solid var(--ink-3); cursor: pointer; padding: 0; }

  .stage-wrap { overflow: auto; background: repeating-conic-gradient(var(--paper-2) 0% 25%, var(--paper) 0% 50%) 50% / 22px 22px; }
  #stage { min-height: 100%; padding: 40px clamp(20px, 4vw, 64px); }
  .panel { display: none; max-width: 1080px; margin: 0 auto; }
  .panel.show { display: block; }

  /* ── live preview surface (driven entirely by --p-* vars) ── */
  .preview { color: var(--p-fg); font-family: var(--p-font); }
  .pv-section { background: var(--p-bg); border: 1px solid var(--p-border); border-radius: var(--p-radius); padding: calc(var(--p-space) * 2); margin-bottom: var(--p-space); box-shadow: var(--p-shadow); }
  .pv-h { font-family: var(--p-font-display); font-size: calc(var(--p-fs) * 2.4); line-height: 1.05; letter-spacing: -0.02em; margin-bottom: calc(var(--p-space) * 0.75); }
  .pv-h2 { font-family: var(--p-font-display); font-size: calc(var(--p-fs) * 1.5); letter-spacing: -0.01em; margin-bottom: var(--p-space); }
  .pv-p { font-size: var(--p-fs); color: var(--p-muted); max-width: 56ch; margin-bottom: var(--p-space); }
  .pv-row { display: flex; flex-wrap: wrap; gap: var(--p-space); align-items: center; }
  .pv-btn { font-family: var(--p-font); font-size: var(--p-fs); padding: calc(var(--p-space) * 0.6) calc(var(--p-space) * 1.1); border-radius: var(--p-radius); border: 1px solid var(--p-accent); background: var(--p-accent); color: var(--p-accent-fg); cursor: pointer; transition: transform var(--p-dur) var(--p-ease), filter var(--p-dur) var(--p-ease); }
  .pv-btn:hover { filter: brightness(1.06); transform: translateY(-1px); }
  .pv-btn.ghost { background: transparent; color: var(--p-fg); border-color: var(--p-border); }
  .pv-input { font-family: var(--p-font); font-size: var(--p-fs); padding: calc(var(--p-space) * 0.55) calc(var(--p-space) * 0.8); border-radius: var(--p-radius); border: 1px solid var(--p-border); background: var(--p-card); color: var(--p-fg); width: 240px; }
  .pv-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--p-space); }
  .pv-card { background: var(--p-card); border: 1px solid var(--p-border); border-radius: var(--p-radius); padding: calc(var(--p-space) * 1.2); box-shadow: var(--p-shadow); }
  .pv-card h4 { font-family: var(--p-font-display); font-size: calc(var(--p-fs) * 1.15); margin-bottom: calc(var(--p-space) * 0.5); }
  .pv-card p { font-size: calc(var(--p-fs) * 0.92); color: var(--p-muted); }
  .pv-badge { display: inline-block; font-size: calc(var(--p-fs) * 0.75); font-family: var(--p-font); letter-spacing: 0.04em; text-transform: uppercase; padding: 3px 9px; border-radius: 999px; background: var(--p-accent); color: var(--p-accent-fg); }
  .pv-badge.soft { background: transparent; color: var(--p-accent); border: 1px solid var(--p-accent); }
  .pv-alert { display: flex; gap: var(--p-space); align-items: flex-start; border-left: 3px solid var(--p-accent); background: var(--p-card); padding: var(--p-space); border-radius: var(--p-radius); }
  .pv-nav { display: flex; align-items: center; justify-content: space-between; padding: calc(var(--p-space) * 0.8) var(--p-space); border: 1px solid var(--p-border); border-radius: var(--p-radius); background: var(--p-card); margin-bottom: var(--p-space); }
  .pv-nav .links { display: flex; gap: var(--p-space); font-size: calc(var(--p-fs) * 0.9); color: var(--p-muted); }
  .pv-swatch-row { display: flex; gap: 0; border-radius: var(--p-radius); overflow: hidden; border: 1px solid var(--p-border); }
  .pv-swatch-row > div { flex: 1; height: 44px; }
  .lab { font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-3); margin: 28px 0 12px; }
  .lab:first-child { margin-top: 0; }

  .info { max-width: 760px; margin: 0 auto; font-family: var(--mono); }
  .info dl { display: grid; grid-template-columns: 160px 1fr; gap: 8px 20px; font-size: 12px; line-height: 1.7; }
  .info dt { color: var(--ink-3); letter-spacing: 0.04em; }
  .info dd em { color: var(--hi); font-style: normal; }
  .info pre { margin-top: 24px; font-size: 11px; background: var(--ink); color: var(--paper); padding: 16px; overflow-x: auto; }
  .toast { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%) translateY(20px); background: var(--ink); color: var(--paper); font-family: var(--mono); font-size: 12px; letter-spacing: 0.04em; padding: 10px 18px; opacity: 0; transition: all .25s ease; pointer-events: none; z-index: 50; }
  .toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

  /* polish — smooth restyle, contrast readouts, edited counter, backdrops */
  .preview, .preview * { transition: background-color var(--p-dur, .2s) var(--p-ease, ease), border-color var(--p-dur, .2s) var(--p-ease, ease), color var(--p-dur, .2s) var(--p-ease, ease), border-radius .2s ease; }
  .contrast { grid-column: 1 / -1; display: flex; flex-direction: column; gap: 5px; margin-top: 12px; }
  .contrast .c-row { display: flex; align-items: center; justify-content: space-between; font-family: var(--mono); font-size: 10px; letter-spacing: 0.02em; color: var(--ink-2); }
  .contrast .c-row b { font-weight: 500; }
  .grade { font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; padding: 2px 6px; border: 1px solid currentColor; border-radius: 3px; }
  .grade.aaa { color: #2e7d32; } .grade.aa { color: #2e7d32; } .grade.large { color: #b26a00; } .grade.fail { color: #c0341d; }
  .count { display: none; margin-left: 6px; min-width: 16px; height: 16px; padding: 0 4px; border-radius: 999px; background: var(--hi); color: #fff; font-size: 10px; line-height: 16px; text-align: center; }
  .count.show { display: inline-block; }
  #reset { display: inline-flex; align-items: center; }
  .stage-wrap[data-bd="white"] { background: #ffffff; }
  .stage-wrap[data-bd="dark"] { background: #14110e; }
  .bd { display: flex; gap: 0; border: 1px solid var(--ink); }
  .bd button { width: 26px; height: 28px; border: 0; border-left: 1px solid var(--ink); background: var(--paper); cursor: pointer; padding: 0; }
  .bd button:first-child { border-left: 0; }
  .bd button[aria-pressed="true"] { outline: 2px solid var(--hi); outline-offset: -2px; }
  .bd .b-paper { background: repeating-conic-gradient(#ece8dd 0% 25%, #f3f1ea 0% 50%) 50% / 10px 10px; }
  .bd .b-white { background: #fff; } .bd .b-dark { background: #14110e; }
  .pv-specimen { padding: calc(var(--p-space) * 1.2) 0; border-top: 1px solid var(--p-border); border-bottom: 1px solid var(--p-border); }
  .pv-specimen .aa { font-family: var(--p-font-display); font-size: calc(var(--p-fs) * 4); line-height: 1; letter-spacing: -0.03em; }
  .pv-specimen .ln { font-family: var(--p-font); font-size: var(--p-fs); color: var(--p-muted); margin-top: calc(var(--p-space) * 0.5); }
  @media (max-width: 860px) { .app { grid-template-columns: 1fr; grid-template-rows: auto auto 1fr; } .inspector { border-right: 0; border-bottom: 1px solid var(--ink); max-height: 38vh; } }
</style>`;
}

function inspectorHtml() {
  // Controls are generic: each carries data-var (+ optional data-unit). The
  // client wires them all through one handler.
  const colorField = (key, label) =>
    `<div class="field"><label>${esc(label)}</label><input type="color" data-var="${esc(key)}" /></div>`;
  const range = (key, label, min, max, step, unit) =>
    `<div class="field"><label>${esc(label)}</label><input type="range" data-var="${esc(key)}" data-unit="${esc(unit)}" min="${min}" max="${max}" step="${step}" /><span class="val" data-for="${esc(key)}"></span></div>`;

  return `<aside class="inspector">
    <div class="grp">
      <h3>Color</h3>
      ${colorField('--p-bg', 'surface')}
      ${colorField('--p-fg', 'text')}
      ${colorField('--p-accent', 'accent')}
      ${colorField('--p-muted', 'muted')}
      ${colorField('--p-border', 'border')}
      <div class="swatches" id="palette"></div>
      <div class="contrast" id="contrast">
        <div class="c-row"><span>text on surface</span><span><b id="c-text">—</b> <span class="grade" id="g-text">—</span></span></div>
        <div class="c-row"><span>accent on surface</span><span><b id="c-accent">—</b> <span class="grade" id="g-accent">—</span></span></div>
        <div class="c-row"><span>label on accent</span><span><b id="c-onacc">—</b> <span class="grade" id="g-onacc">—</span></span></div>
      </div>
    </div>
    <div class="grp">
      <h3>Type</h3>
      <div class="field"><label>body</label><select data-var="--p-font" id="font-body"></select></div>
      <div class="field"><label>display</label><select data-var="--p-font-display" id="font-display"></select></div>
      ${range('--p-fs', 'size', 13, 21, 1, 'px')}
    </div>
    <div class="grp">
      <h3>Shape</h3>
      ${range('--p-radius', 'radius', 0, 32, 1, 'px')}
    </div>
    <div class="grp">
      <h3>Spacing</h3>
      ${range('--p-space', 'unit', 8, 32, 1, 'px')}
    </div>
    <div class="grp">
      <h3>Motion</h3>
      ${range('--p-dur', 'duration', 80, 600, 20, 'ms')}
      <div class="field"><label>easing</label><select data-var="--p-ease" id="ease-sel">
        <option value="cubic-bezier(0.2, 0, 0, 1)">standard</option>
        <option value="cubic-bezier(0.4, 0, 1, 1)">accelerate</option>
        <option value="cubic-bezier(0, 0, 0.2, 1)">decelerate</option>
        <option value="cubic-bezier(0.34, 1.56, 0.64, 1)">spring</option>
        <option value="linear">linear</option>
      </select></div>
    </div>
  </aside>`;
}

function wallHtml(voice) {
  const cta = (voice && voice.ctaVerbs && voice.ctaVerbs[0] && voice.ctaVerbs[0].value) || 'Get started';
  const heading = (voice && voice.sampleHeadings && voice.sampleHeadings[0]) || 'Components, restyled live.';
  return `<div class="panel preview" id="panel-wall" data-panel="wall">
    <div class="pv-nav"><strong>brand</strong><div class="links"><span>Product</span><span>Pricing</span><span>Docs</span></div><button class="pv-btn">${esc(cta)}</button></div>
    <div class="lab">Type</div>
    <div class="pv-specimen"><div class="aa">Ag</div><div class="ln">${esc(heading)} — the quick brown fox jumps over the lazy dog.</div></div>
    <div class="lab">Buttons</div>
    <div class="pv-row"><button class="pv-btn">${esc(cta)}</button><button class="pv-btn ghost">Learn more</button><span class="pv-badge">New</span><span class="pv-badge soft">Beta</span></div>
    <div class="lab">Form</div>
    <div class="pv-row"><input class="pv-input" placeholder="you@company.com" /><button class="pv-btn">Subscribe</button></div>
    <div class="lab">Cards</div>
    <div class="pv-grid">
      <div class="pv-card"><span class="pv-badge soft">Plan</span><h4>${esc(heading)}</h4><p>Tweak a token on the left and watch every element here restyle in real time.</p></div>
      <div class="pv-card"><h4>Tokens, not screenshots</h4><p>Everything renders off CSS variables derived from the live extraction.</p></div>
      <div class="pv-card"><h4>Export anywhere</h4><p>Ship your edits as DTCG tokens, CSS variables, or a Tailwind theme.</p></div>
    </div>
    <div class="lab">Alert</div>
    <div class="pv-alert"><span class="pv-badge">!</span><div><strong>Heads up.</strong><div class="pv-p" style="margin:4px 0 0">This is what an inline notice looks like in this system.</div></div></div>
    <div class="lab">Palette</div>
    <div class="pv-swatch-row"><div style="background:var(--p-accent)"></div><div style="background:var(--p-fg)"></div><div style="background:var(--p-muted)"></div><div style="background:var(--p-border)"></div><div style="background:var(--p-card)"></div></div>
  </div>`;
}

function pageHtml(intent, voice) {
  const order = (intent && intent.sectionRoles && intent.sectionRoles.readingOrder) || ['hero', 'features', 'cta'];
  const heading = (voice && voice.sampleHeadings && voice.sampleHeadings[0]) || 'The design language, rebuilt from its own tokens.';
  const cta = (voice && voice.ctaVerbs && voice.ctaVerbs[0] && voice.ctaVerbs[0].value) || 'Start now';
  const sectionFor = (role) => {
    const r = String(role).toLowerCase();
    if (/hero|header|intro/.test(r)) {
      return `<section class="pv-section"><span class="pv-badge soft">${esc(role)}</span><h1 class="pv-h">${esc(heading)}</h1><p class="pv-p">An approximate rebuild of the scraped page's reading order, restyled entirely by the tokens on the left.</p><div class="pv-row"><button class="pv-btn">${esc(cta)}</button><button class="pv-btn ghost">Docs</button></div></section>`;
    }
    if (/feature|grid|card|benefit/.test(r)) {
      return `<section class="pv-section"><h2 class="pv-h2">${esc(role)}</h2><div class="pv-grid"><div class="pv-card"><h4>One</h4><p>Driven by the extracted system.</p></div><div class="pv-card"><h4>Two</h4><p>Driven by the extracted system.</p></div><div class="pv-card"><h4>Three</h4><p>Driven by the extracted system.</p></div></div></section>`;
    }
    if (/cta|footer|sign|contact/.test(r)) {
      return `<section class="pv-section" style="text-align:center"><h2 class="pv-h2">${esc(heading)}</h2><div class="pv-row" style="justify-content:center"><button class="pv-btn">${esc(cta)}</button></div></section>`;
    }
    return `<section class="pv-section"><h2 class="pv-h2">${esc(role)}</h2><p class="pv-p">Section content placeholder, styled by the live token set.</p></section>`;
  };
  return `<div class="panel preview" id="panel-page" data-panel="page">
    <div class="pv-nav"><strong>brand</strong><div class="links"><span>Product</span><span>Pricing</span><span>Docs</span></div><button class="pv-btn">${esc(cta)}</button></div>
    ${order.slice(0, 8).map(sectionFor).join('\n    ')}
  </div>`;
}

function infoHtml(data) {
  const intent = data.intent || {};
  const visualDna = data.visualDna || {};
  const library = data.library || {};
  const voice = data.voice || {};
  const readingOrder = (intent.sectionRoles?.readingOrder || []).join(' → ');
  const ctaList = (voice.ctaVerbs || []).slice(0, 5).map(c => `${c.value} (${c.count})`).join(' · ');
  const motionJson = JSON.stringify(data.motion || {}, null, 2);
  return `<div class="panel info" id="panel-info" data-panel="info">
    <dl>
      <dt>page intent</dt><dd>${intent.pageIntent?.type ? `<em>${esc(intent.pageIntent.type)}</em> · ${esc(intent.pageIntent.confidence ?? '')}` : '—'}</dd>
      <dt>reading order</dt><dd>${esc(readingOrder) || '—'}</dd>
      <dt>material</dt><dd>${esc(visualDna.materialLanguage?.label) || '—'}</dd>
      <dt>imagery</dt><dd>${esc(visualDna.imageryStyle?.label) || '—'}</dd>
      <dt>component library</dt><dd>${library.library ? `${esc(library.library)} · ${esc(library.confidence ?? '')}` : '—'}</dd>
      <dt>tone</dt><dd><em>${esc(voice.tone) || '—'}</em></dd>
      <dt>pronoun</dt><dd>${esc(voice.pronoun) || '—'}</dd>
      <dt>top CTAs</dt><dd>${esc(ctaList) || '—'}</dd>
    </dl>
    <pre>${esc(motionJson)}</pre>
  </div>`;
}

export function studioHtml(data) {
  const derived = deriveTokens(data);
  const meta = (data.tokens && data.tokens.$metadata) || {};
  const boot = {
    prefix: data.prefix,
    base: derived.vars,
    palette: derived.palette,
    fonts: derived.fonts,
    source: meta.source || '',
    version: meta.version || '',
  };
  const json = JSON.stringify(boot).replace(/</g, '\\u003c');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>designlang studio · ${esc(data.prefix)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Instrument+Sans:wght@400;500;600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
${styleBlock()}
</head>
<body>
  <div class="app">
    <div class="topbar">
      <div class="mark">designlang <em>studio</em> · ${esc(data.prefix)}</div>
      <div class="tabs" role="tablist">
        <button class="tab" role="tab" data-tab="wall" aria-selected="true">Components</button>
        <button class="tab" role="tab" data-tab="page" aria-selected="false">Page</button>
        <button class="tab" role="tab" data-tab="info" aria-selected="false">Info</button>
      </div>
      <div class="actions">
        <div class="bd" role="group" aria-label="preview backdrop">
          <button class="b-paper" data-bd="paper" aria-pressed="true" title="Paper"></button>
          <button class="b-white" data-bd="white" aria-pressed="false" title="White"></button>
          <button class="b-dark" data-bd="dark" aria-pressed="false" title="Dark"></button>
        </div>
        <button class="btn" id="reset">Reset<span class="count" id="editcount"></span></button>
        <button class="btn" id="copylink">Copy link</button>
        <div class="menu">
          <button class="btn hi" id="exportbtn">Export ▾</button>
          <div class="menu-list" id="exportmenu">
            <button data-export="tokens">DTCG tokens · .json</button>
            <button data-export="css">CSS variables · .css</button>
            <button data-export="tailwind">Tailwind theme · .js</button>
          </div>
        </div>
      </div>
    </div>
    ${inspectorHtml()}
    <div class="stage-wrap" data-bd="paper">
      <div id="stage">
        ${wallHtml(data.voice || {})}
        ${pageHtml(data.intent || {}, data.voice || {})}
        ${infoHtml(data)}
      </div>
    </div>
  </div>
  <div class="toast" id="toast"></div>

<script id="__boot" type="application/json">${json}</script>
<script>
  var BOOT = JSON.parse(document.getElementById('__boot').textContent);
  var BASE = BOOT.base;
  var edits = {};
  var stage = document.getElementById('stage');

  // Map preview vars to friendly token names for export.
  var VARMAP = {
    '--p-bg': ['color', 'surface', 'color'],
    '--p-card': ['color', 'card', 'color'],
    '--p-fg': ['color', 'text', 'color'],
    '--p-muted': ['color', 'muted', 'color'],
    '--p-border': ['color', 'border', 'color'],
    '--p-accent': ['color', 'accent', 'color'],
    '--p-accent-fg': ['color', 'accentForeground', 'color'],
    '--p-radius': ['radius', 'DEFAULT', 'dimension'],
    '--p-fs': ['fontSize', 'base', 'dimension'],
    '--p-space': ['spacing', 'unit', 'dimension'],
    '--p-shadow': ['boxShadow', 'DEFAULT', 'shadow'],
    '--p-font': ['fontFamily', 'sans', 'fontFamily'],
    '--p-font-display': ['fontFamily', 'display', 'fontFamily'],
    '--p-dur': ['motion', 'duration', 'duration'],
    '--p-ease': ['motion', 'easing', 'cubicBezier']
  };

  function effective() {
    var out = {};
    for (var k in BASE) out[k] = (edits[k] != null ? edits[k] : BASE[k]);
    return out;
  }
  function apply() {
    var e = effective();
    for (var k in e) stage.style.setProperty(k, e[k]);
    updateBadges(e);
    updateCount();
  }
  function stripUnit(v) { return String(v == null ? '' : v).replace(/(px|ms)$/,''); }

  // ── WCAG contrast readouts (live) ──
  function ratio(a, b) {
    function hx(h){ h=String(h||'').replace('#',''); if(h.length===3) h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]; return [parseInt(h.slice(0,2),16)||0,parseInt(h.slice(2,4),16)||0,parseInt(h.slice(4,6),16)||0]; }
    function L(rgb){ var s=rgb.map(function(c){c/=255;return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);}); return 0.2126*s[0]+0.7152*s[1]+0.0722*s[2]; }
    var l1=L(hx(a)), l2=L(hx(b)); var hi=Math.max(l1,l2), lo=Math.min(l1,l2);
    return (hi+0.05)/(lo+0.05);
  }
  function grade(r) {
    if (r >= 7) return ['AAA', 'aaa'];
    if (r >= 4.5) return ['AA', 'aa'];
    if (r >= 3) return ['AA large', 'large'];
    return ['fail', 'fail'];
  }
  function setBadge(valId, gradeId, r) {
    var g = grade(r);
    var v = document.getElementById(valId), gel = document.getElementById(gradeId);
    if (v) v.textContent = r.toFixed(2);
    if (gel) { gel.textContent = g[0]; gel.className = 'grade ' + g[1]; }
  }
  function updateBadges(e) {
    setBadge('c-text', 'g-text', ratio(e['--p-fg'], e['--p-bg']));
    setBadge('c-accent', 'g-accent', ratio(e['--p-accent'], e['--p-bg']));
    setBadge('c-onacc', 'g-onacc', ratio(e['--p-accent-fg'], e['--p-accent']));
  }
  function updateCount() {
    var n = Object.keys(edits).length;
    var el = document.getElementById('editcount');
    if (!el) return;
    el.textContent = n; el.classList.toggle('show', n > 0);
  }

  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._h); t._h = setTimeout(function(){ t.classList.remove('show'); }, 1600);
  }

  // ── URL state (only deltas are encoded) ──
  var hashTimer = null;
  function writeHash() {
    var keys = Object.keys(edits);
    if (!keys.length) { history.replaceState(null, '', location.pathname); return; }
    try { history.replaceState(null, '', '#' + btoa(JSON.stringify(edits))); } catch (e) {}
  }
  function scheduleHash() { clearTimeout(hashTimer); hashTimer = setTimeout(writeHash, 250); }
  function readHash() {
    try {
      if (location.hash.length > 1) {
        var o = JSON.parse(atob(location.hash.slice(1)));
        if (o && typeof o === 'object') edits = o;
      }
    } catch (e) {}
  }

  function clean() { for (var k in edits) if (edits[k] === BASE[k]) delete edits[k]; }

  // ── Inspector wiring ──
  function syncControls() {
    var ctrls = document.querySelectorAll('[data-var]');
    for (var i = 0; i < ctrls.length; i++) {
      var el = ctrls[i];
      var v = effective()[el.getAttribute('data-var')];
      if (v == null) continue;
      if (el.type === 'range') {
        el.value = stripUnit(v);
        var out = document.querySelector('[data-for="' + el.getAttribute('data-var') + '"]');
        if (out) out.textContent = v;
      } else if (el.type === 'color') {
        if (/^#[0-9a-f]{6}$/i.test(v)) el.value = v;
      } else {
        el.value = v;
      }
    }
  }
  function onInput(e) {
    var el = e.target;
    if (!el.hasAttribute('data-var')) return;
    var unit = el.getAttribute('data-unit');
    var v = el.value;
    if (unit) v = v + unit;
    edits[el.getAttribute('data-var')] = v;
    clean(); apply(); scheduleHash();
    var out = document.querySelector('[data-for="' + el.getAttribute('data-var') + '"]');
    if (out) out.textContent = effective()[el.getAttribute('data-var')];
  }
  document.querySelector('.inspector').addEventListener('input', onInput);

  // Font dropdowns
  function fillFonts(sel, varName) {
    var cur = effective()[varName];
    BOOT.fonts.forEach(function (f) {
      var o = document.createElement('option');
      o.value = "'" + f + "', system-ui, sans-serif";
      o.textContent = f;
      sel.appendChild(o);
    });
    // mark current
    for (var i = 0; i < sel.options.length; i++) {
      if (cur && cur.indexOf(sel.options[i].textContent) !== -1) sel.selectedIndex = i;
    }
  }
  fillFonts(document.getElementById('font-body'), '--p-font');
  fillFonts(document.getElementById('font-display'), '--p-font-display');

  // Palette quick-pick → applies to whichever color field was last focused (default accent)
  var lastColorVar = '--p-accent';
  document.querySelectorAll('input[type="color"]').forEach(function (el) {
    el.addEventListener('focus', function () { lastColorVar = el.getAttribute('data-var'); });
  });
  var pal = document.getElementById('palette');
  (BOOT.palette || []).forEach(function (hex) {
    var b = document.createElement('button');
    b.style.background = hex; b.title = hex;
    b.addEventListener('click', function () {
      edits[lastColorVar] = hex; clean(); apply(); syncControls(); scheduleHash();
    });
    pal.appendChild(b);
  });

  // ── Tabs ──
  document.querySelector('.tabs').addEventListener('click', function (e) {
    var t = e.target.closest('.tab'); if (!t) return;
    var name = t.getAttribute('data-tab');
    document.querySelectorAll('.tab').forEach(function (x) { x.setAttribute('aria-selected', x === t ? 'true' : 'false'); });
    document.querySelectorAll('.panel').forEach(function (p) { p.classList.toggle('show', p.getAttribute('data-panel') === name); });
  });
  document.getElementById('panel-wall').classList.add('show');

  // ── Backdrop ──
  var stageWrap = document.querySelector('.stage-wrap');
  document.querySelector('.bd').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    stageWrap.setAttribute('data-bd', b.getAttribute('data-bd'));
    document.querySelectorAll('.bd button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
  });

  // ── Actions ──
  document.getElementById('reset').addEventListener('click', function () {
    edits = {}; apply(); syncControls(); writeHash(); toast('Reset to extracted tokens');
  });
  document.getElementById('copylink').addEventListener('click', function () {
    writeHash();
    navigator.clipboard.writeText(location.href).then(function () { toast('Shareable link copied'); });
  });

  // ── Export ──
  var menu = document.getElementById('exportmenu');
  document.getElementById('exportbtn').addEventListener('click', function (e) {
    e.stopPropagation(); menu.classList.toggle('open');
  });
  document.addEventListener('click', function () { menu.classList.remove('open'); });
  function download(name, text, mime) {
    var blob = new Blob([text], { type: mime });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  }
  function buildTokens() {
    var e = effective();
    var out = { $metadata: { generator: 'designlang studio', source: BOOT.source, editedAt: new Date().toISOString() } };
    for (var k in VARMAP) {
      var m = VARMAP[k];
      if (!out[m[0]]) out[m[0]] = {};
      out[m[0]][m[1]] = { $value: e[k], $type: m[2] };
    }
    return JSON.stringify(out, null, 2);
  }
  function buildCss() {
    var e = effective();
    var lines = [':root {'];
    for (var k in VARMAP) { lines.push('  --' + VARMAP[k][1].replace(/[A-Z]/g, function(c){return '-'+c.toLowerCase();}) + ': ' + e[k] + ';'); }
    lines.push('}');
    return lines.join('\\n');
  }
  function buildTailwind() {
    var e = effective();
    var theme = {
      colors: {
        surface: e['--p-bg'], card: e['--p-card'], text: e['--p-fg'],
        muted: e['--p-muted'], border: e['--p-border'],
        accent: e['--p-accent'], 'accent-fg': e['--p-accent-fg']
      },
      borderRadius: { DEFAULT: e['--p-radius'] },
      fontFamily: { sans: e['--p-font'], display: e['--p-font-display'] },
      boxShadow: { DEFAULT: e['--p-shadow'] }
    };
    return '/** Generated by designlang studio */\\nmodule.exports = {\\n  theme: { extend: ' + JSON.stringify(theme, null, 2) + ' }\\n};\\n';
  }
  menu.addEventListener('click', function (e) {
    var b = e.target.closest('[data-export]'); if (!b) return;
    var kind = b.getAttribute('data-export');
    var p = BOOT.prefix || 'studio';
    if (kind === 'tokens') download(p + '.studio.tokens.json', buildTokens(), 'application/json');
    if (kind === 'css') download(p + '.studio.css', buildCss(), 'text/css');
    if (kind === 'tailwind') download(p + '.studio.tailwind.js', buildTailwind(), 'text/javascript');
    menu.classList.remove('open'); toast('Exported ' + kind);
  });

  // ── Boot ──
  readHash(); clean(); apply(); syncControls();
</script>
</body>
</html>`;
}

export async function runStudio(opts) {
  const dir = resolve(opts.dir || './design-extract-output');
  const port = parseInt(opts.port) || 4837;

  if (!existsSync(dir)) {
    throw new Error(`No extraction directory found at ${dir}. Run \`designlang <url>\` first.`);
  }
  const prefix = opts.prefix || pickLatest(dir);
  if (!prefix) {
    throw new Error(`No *-design-tokens.json found in ${dir}. Run \`designlang <url>\` first.`);
  }

  const server = createServer((req, res) => {
    try {
      const url = new URL(req.url, `http://localhost:${port}`);
      const pathname = url.pathname;

      if (pathname === '/' || pathname === '/index.html') {
        const data = loadExtraction(dir, prefix);
        const html = studioHtml(data);
        res.writeHead(200, { 'content-type': MIME['.html'] });
        res.end(html);
        return;
      }
      if (pathname === '/raw') {
        const data = loadExtraction(dir, prefix);
        res.writeHead(200, { 'content-type': MIME['.json'] });
        res.end(JSON.stringify(data, null, 2));
        return;
      }
      if (pathname === '/api/prefix') {
        res.writeHead(200, { 'content-type': MIME['.json'] });
        res.end(JSON.stringify({ prefix, dir }));
        return;
      }

      // Static passthrough — screenshots, preview.html, etc.
      const safe = pathname.replace(/\.\./g, '').replace(/^\//, '');
      const filePath = join(dir, safe);
      // Path-traversal guard: must stay inside dir.
      if (!filePath.startsWith(dir)) {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('not found');
        return;
      }
      // Race-free read — let readFileSync surface ENOENT / EISDIR / EACCES
      // in one syscall instead of a stat→read pair (which would TOCTOU).
      try {
        const body = readFileSync(filePath);
        const ext = extname(filePath).toLowerCase();
        res.writeHead(200, { 'content-type': MIME[ext] || 'application/octet-stream' });
        res.end(body);
        return;
      } catch {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('not found');
        return;
      }
    } catch (e) {
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end(`error: ${e.message}`);
    }
  });

  await new Promise((resolveP) => server.listen(port, resolveP));
  return { port, dir, prefix, server };
}
