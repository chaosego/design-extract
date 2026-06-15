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
import { deriveTokens, deriveDark } from './studio-tokens.js';

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
    --paper: #f5f3ec; --paper-2: #eceadf; --paper-3: #ddd9cb; --line: #cfcab9;
    --ink: #14120e; --ink-2: #524d42; --ink-3: #918b7c;
    --hi: #ff4800;
    --mono: 'JetBrains Mono', ui-monospace, monospace;
    --display: 'Fraunces', Georgia, serif;
    --body: 'Instrument Sans', -apple-system, system-ui, sans-serif;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; background: var(--paper); color: var(--ink); font-family: var(--body); font-size: 14px; line-height: 1.5; -webkit-font-smoothing: antialiased; }
  .app { display: grid; grid-template-columns: 304px 1fr; grid-template-rows: auto 1fr; height: 100vh; }

  /* ── editor chrome — quiet, consistent 30px controls, hairline rules ── */
  .topbar { grid-column: 1 / -1; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 0 18px; height: 52px; border-bottom: 1px solid var(--line); background: var(--paper); }
  .mark { font-family: var(--mono); font-size: 12.5px; letter-spacing: 0.01em; white-space: nowrap; color: var(--ink-2); }
  .mark b { color: var(--ink); font-weight: 500; }
  .mark em { color: var(--hi); font-style: italic; font-family: var(--display); }
  .tabs { display: flex; gap: 2px; background: var(--paper-2); border: 1px solid var(--line); border-radius: 8px; padding: 2px; }
  .tab { font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 13px; border: 0; border-radius: 6px; background: transparent; color: var(--ink-3); cursor: pointer; transition: all .15s ease; }
  .tab:hover { color: var(--ink); }
  .tab[aria-selected="true"] { background: var(--ink); color: var(--paper); }
  .actions { display: flex; gap: 8px; align-items: center; }
  .btn { font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.08em; text-transform: uppercase; height: 30px; padding: 0 12px; border: 1px solid var(--line); border-radius: 7px; background: var(--paper); color: var(--ink-2); cursor: pointer; transition: all .15s ease; }
  .btn:hover { color: var(--ink); border-color: var(--ink-3); }
  .btn.hi { background: var(--hi); border-color: var(--hi); color: #fff; }
  .btn.hi:hover { filter: brightness(1.07); color: #fff; }
  .menu { position: relative; }
  .menu-list { position: absolute; right: 0; top: calc(100% + 6px); background: var(--paper); border: 1px solid var(--line); border-radius: 9px; min-width: 210px; z-index: 20; display: none; overflow: hidden; box-shadow: 0 12px 32px -12px rgba(0,0,0,0.28); }
  .menu-list.open { display: block; }
  .menu-list button { display: block; width: 100%; text-align: left; padding: 10px 14px; border: 0; border-bottom: 1px solid var(--paper-2); background: transparent; font-family: var(--mono); font-size: 11px; letter-spacing: 0.02em; cursor: pointer; color: var(--ink-2); }
  .menu-list button:last-child { border-bottom: 0; }
  .menu-list button:hover { background: var(--paper-2); color: var(--ink); }

  .inspector { border-right: 1px solid var(--line); overflow-y: auto; padding: 4px 0 48px; }
  .grp { border-bottom: 1px solid var(--paper-2); padding: 18px 18px; }
  .grp h3 { font-family: var(--mono); font-size: 9.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 14px; }
  .field { display: grid; grid-template-columns: 60px 1fr auto; align-items: center; gap: 10px; margin-bottom: 11px; }
  .field:last-child { margin-bottom: 0; }
  .field label { font-family: var(--mono); font-size: 11px; color: var(--ink-2); letter-spacing: 0.01em; }
  .field input[type="color"] { grid-column: 2 / -1; width: 100%; height: 30px; border: 1px solid var(--line); border-radius: 7px; background: none; padding: 3px; cursor: pointer; }
  .field input[type="color"]::-webkit-color-swatch { border: 0; border-radius: 4px; }
  .field input[type="color"]::-webkit-color-swatch-wrapper { padding: 0; }
  .field input[type="range"] { width: 100%; accent-color: var(--ink); height: 4px; }
  .field select { grid-column: 2 / -1; width: 100%; font-family: var(--mono); font-size: 11px; height: 30px; padding: 0 8px; border: 1px solid var(--line); border-radius: 7px; background: var(--paper); color: var(--ink); }
  .field .val { font-family: var(--mono); font-size: 10.5px; color: var(--ink-3); text-align: right; min-width: 38px; }
  .swatches { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 12px; grid-column: 1 / -1; }
  .swatches button { width: 20px; height: 20px; border: 1px solid var(--line); border-radius: 5px; cursor: pointer; padding: 0; transition: transform .12s ease; }
  .swatches button:hover { transform: scale(1.12); }

  .stage-wrap { overflow: auto; background: var(--paper-2); }
  #stage { min-height: 100%; padding: clamp(28px, 4vw, 56px) clamp(20px, 5vw, 72px) 80px; }
  .panel { display: none; max-width: 960px; margin: 0 auto; }
  .panel.show { display: block; }

  /* ── live preview — an editorial design-system specimen, all --p-* driven ── */
  .preview { color: var(--p-fg); font-family: var(--p-font); }
  .pv { display: flex; flex-direction: column; gap: calc(var(--p-space) * 3); }
  .pv-block { display: flex; flex-direction: column; gap: calc(var(--p-space) * 1.1); }
  .pv-eyebrow { font-family: var(--p-font); font-size: calc(var(--p-fs) * 0.7); font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--p-muted); display: flex; align-items: center; gap: 12px; }
  .pv-eyebrow::after { content: ''; flex: 1; height: 1px; background: var(--p-border); }

  .pv-nav { display: flex; align-items: center; gap: calc(var(--p-space) * 1.5); padding: calc(var(--p-space) * 0.9) calc(var(--p-space) * 1.3); border: 1px solid var(--p-border); border-radius: var(--p-radius); background: var(--p-card); }
  .pv-brand { font-family: var(--p-font-display); font-weight: 600; font-size: calc(var(--p-fs) * 1.15); letter-spacing: -0.01em; }
  .pv-nav .links { display: flex; gap: calc(var(--p-space) * 1.2); margin-left: auto; font-size: calc(var(--p-fs) * 0.92); color: var(--p-muted); }
  .pv-nav .links span:hover { color: var(--p-fg); cursor: default; }

  .pv-hero { text-align: center; padding: calc(var(--p-space) * 2) 0 calc(var(--p-space) * 1); display: flex; flex-direction: column; align-items: center; gap: calc(var(--p-space) * 1.1); }
  .pv-kicker { font-size: calc(var(--p-fs) * 0.8); letter-spacing: 0.12em; text-transform: uppercase; color: var(--p-accent); font-weight: 600; }
  .pv-h { font-family: var(--p-font-display); font-size: clamp(28px, calc(var(--p-fs) * 3.2), 64px); line-height: 1.04; letter-spacing: -0.025em; max-width: 18ch; font-weight: 600; }
  .pv-h em { font-style: italic; color: var(--p-accent); }
  .pv-lede { font-size: calc(var(--p-fs) * 1.1); color: var(--p-muted); max-width: 52ch; line-height: 1.55; }
  .pv-cta-row { display: flex; flex-wrap: wrap; gap: calc(var(--p-space) * 0.7); justify-content: center; margin-top: calc(var(--p-space) * 0.4); }

  .pv-btn { font-family: var(--p-font); font-size: var(--p-fs); font-weight: 500; padding: calc(var(--p-space) * 0.66) calc(var(--p-space) * 1.25); border-radius: var(--p-radius); border: 1px solid var(--p-accent); background: var(--p-accent); color: var(--p-accent-fg); cursor: pointer; transition: transform var(--p-dur) var(--p-ease), filter var(--p-dur) var(--p-ease); }
  .pv-btn:hover { filter: brightness(1.06); transform: translateY(-1px); }
  .pv-btn.secondary { background: var(--p-card); color: var(--p-fg); border-color: var(--p-border); }
  .pv-btn.ghost { background: transparent; color: var(--p-fg); border-color: transparent; }
  .pv-btn.ghost:hover { background: var(--p-card); transform: none; filter: none; }
  .pv-btn[disabled] { opacity: 0.45; cursor: not-allowed; }
  .pv-btn.sm { font-size: calc(var(--p-fs) * 0.85); padding: calc(var(--p-space) * 0.45) calc(var(--p-space) * 0.9); }

  .pv-2col { display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--p-space) * 2); }
  .pv-swatches { display: flex; flex-direction: column; gap: 8px; }
  .pv-sw { display: flex; align-items: center; gap: calc(var(--p-space) * 0.9); }
  .pv-sw .chip { width: 40px; height: 40px; border-radius: calc(var(--p-radius) * 0.7); border: 1px solid var(--p-border); flex: none; }
  .pv-sw .meta { display: flex; flex-direction: column; }
  .pv-sw .meta b { font-weight: 500; font-size: calc(var(--p-fs) * 0.95); }
  .pv-sw .meta code { font-family: var(--mono); font-size: calc(var(--p-fs) * 0.78); color: var(--p-muted); }

  .pv-scale { display: flex; flex-direction: column; gap: calc(var(--p-space) * 0.9); }
  .pv-scale-row { display: flex; align-items: baseline; gap: calc(var(--p-space) * 1.2); }
  .pv-scale-row .tag { font-family: var(--mono); font-size: calc(var(--p-fs) * 0.72); color: var(--p-muted); letter-spacing: 0.08em; text-transform: uppercase; min-width: 64px; }
  .pv-scale-row .sample { font-family: var(--p-font-display); line-height: 1.1; letter-spacing: -0.02em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  .pv-field { display: flex; flex-direction: column; gap: 6px; }
  .pv-field label { font-size: calc(var(--p-fs) * 0.82); color: var(--p-muted); font-weight: 500; }
  .pv-input, .pv-select { font-family: var(--p-font); font-size: var(--p-fs); padding: calc(var(--p-space) * 0.6) calc(var(--p-space) * 0.85); border-radius: var(--p-radius); border: 1px solid var(--p-border); background: var(--p-bg); color: var(--p-fg); width: 100%; }
  .pv-input::placeholder { color: var(--p-muted); }

  .pv-pills { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
  .pv-badge { display: inline-flex; align-items: center; gap: 5px; font-size: calc(var(--p-fs) * 0.76); font-family: var(--p-font); font-weight: 500; letter-spacing: 0.02em; padding: 4px 11px; border-radius: 999px; background: var(--p-accent); color: var(--p-accent-fg); }
  .pv-badge.soft { background: transparent; color: var(--p-accent); border: 1px solid var(--p-accent); }
  .pv-badge.neutral { background: var(--p-card); color: var(--p-muted); border: 1px solid var(--p-border); }
  .pv-dot { width: 6px; height: 6px; border-radius: 999px; background: currentColor; }

  .pv-alert { display: flex; gap: calc(var(--p-space) * 0.9); align-items: flex-start; border: 1px solid var(--p-border); border-left: 3px solid var(--p-accent); background: var(--p-card); padding: calc(var(--p-space) * 1.1) calc(var(--p-space) * 1.2); border-radius: var(--p-radius); }
  .pv-alert b { font-weight: 600; }
  .pv-alert p { font-size: calc(var(--p-fs) * 0.92); color: var(--p-muted); margin-top: 3px; }

  .pv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--p-space); }
  .pv-card { display: flex; flex-direction: column; gap: calc(var(--p-space) * 0.6); background: var(--p-card); border: 1px solid var(--p-border); border-radius: var(--p-radius); padding: calc(var(--p-space) * 1.3); box-shadow: var(--p-shadow); }
  .pv-card .ic { width: 34px; height: 34px; border-radius: calc(var(--p-radius) * 0.7); background: var(--p-accent); color: var(--p-accent-fg); display: grid; place-items: center; font-family: var(--p-font-display); font-weight: 600; }
  .pv-card h4 { font-family: var(--p-font-display); font-size: calc(var(--p-fs) * 1.12); font-weight: 600; }
  .pv-card p { font-size: calc(var(--p-fs) * 0.9); color: var(--p-muted); line-height: 1.5; }
  .pv-card .lnk { font-size: calc(var(--p-fs) * 0.88); color: var(--p-accent); font-weight: 500; margin-top: auto; }

  .pv-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--p-space); border: 1px solid var(--p-border); border-radius: var(--p-radius); overflow: hidden; }
  .pv-stat { padding: calc(var(--p-space) * 1.2); border-left: 1px solid var(--p-border); }
  .pv-stat:first-child { border-left: 0; }
  .pv-stat .n { font-family: var(--p-font-display); font-size: calc(var(--p-fs) * 2); font-weight: 600; letter-spacing: -0.02em; }
  .pv-stat .l { font-size: calc(var(--p-fs) * 0.82); color: var(--p-muted); margin-top: 2px; }

  .pv-foot { display: flex; align-items: center; gap: var(--p-space); padding-top: calc(var(--p-space) * 1.2); border-top: 1px solid var(--p-border); color: var(--p-muted); font-size: calc(var(--p-fs) * 0.85); }
  .pv-foot .links { display: flex; gap: var(--p-space); margin-left: auto; }

  /* rebuilt-page tab keeps a lighter sectioned rhythm */
  .pv-section { background: var(--p-card); border: 1px solid var(--p-border); border-radius: var(--p-radius); padding: calc(var(--p-space) * 1.8); box-shadow: var(--p-shadow); }
  .pv-h2 { font-family: var(--p-font-display); font-size: calc(var(--p-fs) * 1.6); font-weight: 600; letter-spacing: -0.015em; margin-bottom: var(--p-space); }
  .pv-p { font-size: var(--p-fs); color: var(--p-muted); max-width: 56ch; line-height: 1.55; }
  .pv-row { display: flex; flex-wrap: wrap; gap: calc(var(--p-space) * 0.7); align-items: center; }

  .info { max-width: 720px; margin: 0 auto; font-family: var(--mono); }
  .info dl { display: grid; grid-template-columns: 150px 1fr; gap: 9px 22px; font-size: 12px; line-height: 1.7; }
  .info dt { color: var(--ink-3); letter-spacing: 0.04em; }
  .info dd em { color: var(--hi); font-style: normal; }
  .info pre { margin-top: 26px; font-size: 11px; background: var(--ink); color: var(--paper); padding: 18px; border-radius: 10px; overflow-x: auto; }
  .toast { position: fixed; bottom: 22px; left: 50%; transform: translateX(-50%) translateY(20px); background: var(--ink); color: var(--paper); font-family: var(--mono); font-size: 12px; letter-spacing: 0.03em; padding: 10px 18px; border-radius: 8px; opacity: 0; transition: all .25s ease; pointer-events: none; z-index: 50; }
  .toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

  /* smooth restyle as tokens change */
  .preview, .preview * { transition: background-color var(--p-dur, .2s) var(--p-ease, ease), border-color var(--p-dur, .2s) var(--p-ease, ease), color var(--p-dur, .2s) var(--p-ease, ease), border-radius .2s ease; }

  /* contrast readouts */
  .contrast { grid-column: 1 / -1; display: flex; flex-direction: column; gap: 7px; margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--paper-2); }
  .contrast .c-row { display: flex; align-items: center; justify-content: space-between; font-family: var(--mono); font-size: 10px; letter-spacing: 0.02em; color: var(--ink-2); }
  .contrast .c-row b { font-weight: 500; color: var(--ink); }
  .grade { font-size: 8.5px; letter-spacing: 0.08em; text-transform: uppercase; padding: 2px 6px; border: 1px solid currentColor; border-radius: 4px; margin-left: 8px; }
  .grade.aaa, .grade.aa { color: #2e7d32; } .grade.large { color: #b26a00; } .grade.fail { color: #c0341d; }
  .count { display: none; margin-left: 7px; min-width: 16px; height: 16px; padding: 0 4px; border-radius: 999px; background: var(--hi); color: #fff; font-size: 9.5px; line-height: 16px; text-align: center; }
  .count.show { display: inline-block; }
  #reset { display: inline-flex; align-items: center; }

  .stage-wrap[data-bd="white"] { background: #ffffff; }
  .stage-wrap[data-bd="dark"] { background: #15120f; }
  .seg { display: flex; background: var(--paper-2); border: 1px solid var(--line); border-radius: 7px; padding: 2px; }
  .seg button { font-family: var(--mono); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; padding: 5px 10px; border: 0; border-radius: 5px; background: transparent; color: var(--ink-3); cursor: pointer; transition: all .15s ease; }
  .seg button[aria-pressed="true"] { background: var(--ink); color: var(--paper); }
  .bd { display: flex; border: 1px solid var(--line); border-radius: 7px; overflow: hidden; }
  .bd button { width: 28px; height: 30px; border: 0; border-left: 1px solid var(--line); cursor: pointer; padding: 0; }
  .bd button:first-child { border-left: 0; }
  .bd button[aria-pressed="true"] { outline: 2px solid var(--ink); outline-offset: -2px; }
  .bd .b-paper { background: var(--paper-2); } .bd .b-white { background: #fff; } .bd .b-dark { background: #15120f; }
  @media (max-width: 880px) { .app { grid-template-columns: 1fr; grid-template-rows: auto auto 1fr; } .inspector { border-right: 0; border-bottom: 1px solid var(--line); max-height: 40vh; } .pv-2col, .pv-grid, .pv-stats { grid-template-columns: 1fr; } }
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

// A small, considered set of "in context" cards — honest product labels that
// read as real UI rather than lorem, so the specimen never feels arbitrary.
const CONTEXT_CARDS = [
  { ic: 'O', h: 'Overview', p: 'One calm place for your team to see where things stand.', lnk: 'Open dashboard' },
  { ic: 'I', h: 'Insights', p: 'Numbers that update the moment something changes.', lnk: 'View report' },
  { ic: 'S', h: 'Settings', p: 'Fine-grained control, sensible defaults out of the box.', lnk: 'Configure' },
];

function navBar(ctx) {
  return `<nav class="pv-nav">
      <span class="pv-brand">${esc(ctx.brand)}</span>
      <span class="links"><span>Product</span><span>Pricing</span><span>Docs</span><span>Changelog</span></span>
      <button class="pv-btn sm">${esc(ctx.cta)}</button>
    </nav>`;
}

function wallHtml(ctx) {
  const sw = (role, v) => `<div class="pv-sw"><span class="chip" style="background:var(${v})"></span><span class="meta"><b>${esc(role)}</b><code>${esc(v)}</code></span></div>`;
  const scale = (tag, mult, text) => `<div class="pv-scale-row"><span class="tag">${esc(tag)}</span><span class="sample" style="font-size:calc(var(--p-fs) * ${mult})">${esc(text)}</span></div>`;
  return `<div class="panel preview" id="panel-wall" data-panel="wall">
    <div class="pv">
      ${navBar(ctx)}

      <header class="pv-hero">
        <span class="pv-kicker">${esc(ctx.kicker)}</span>
        <h1 class="pv-h">${esc(ctx.heading)}</h1>
        <p class="pv-lede">${esc(ctx.lede)}</p>
        <div class="pv-cta-row">
          <button class="pv-btn">${esc(ctx.cta)}</button>
          <button class="pv-btn secondary">${esc(ctx.cta2)}</button>
        </div>
      </header>

      <div class="pv-2col">
        <section class="pv-block">
          <div class="pv-eyebrow">Color</div>
          <div class="pv-swatches">
            ${sw('Surface', '--p-bg')}
            ${sw('Card', '--p-card')}
            ${sw('Text', '--p-fg')}
            ${sw('Muted', '--p-muted')}
            ${sw('Border', '--p-border')}
            ${sw('Accent', '--p-accent')}
          </div>
        </section>
        <section class="pv-block">
          <div class="pv-eyebrow">Type · ${esc(ctx.fontName)}</div>
          <div class="pv-scale">
            ${scale('Display', 2.6, ctx.brand)}
            ${scale('Title', 1.6, 'The quick brown fox')}
            ${scale('Body', 1.0, 'Jumps over the lazy dog, twice over.')}
            ${scale('Caption', 0.82, 'Small print and supporting metadata.')}
          </div>
        </section>
      </div>

      <section class="pv-block">
        <div class="pv-eyebrow">Buttons</div>
        <div class="pv-pills">
          <button class="pv-btn">${esc(ctx.cta)}</button>
          <button class="pv-btn secondary">Secondary</button>
          <button class="pv-btn ghost">Ghost</button>
          <button class="pv-btn" disabled>Disabled</button>
          <button class="pv-btn sm">Small</button>
        </div>
      </section>

      <div class="pv-2col">
        <section class="pv-block">
          <div class="pv-eyebrow">Inputs</div>
          <div class="pv-field"><label>Email</label><input class="pv-input" placeholder="you@${esc(ctx.domain)}" /></div>
          <div class="pv-field"><label>Plan</label><select class="pv-select"><option>Starter</option><option>Growth</option><option>Enterprise</option></select></div>
        </section>
        <section class="pv-block">
          <div class="pv-eyebrow">Status</div>
          <div class="pv-pills">
            <span class="pv-badge"><span class="pv-dot"></span>Live</span>
            <span class="pv-badge soft">Beta</span>
            <span class="pv-badge neutral">Draft</span>
          </div>
          <div class="pv-alert"><div><b>Heads up.</b><p>Inline notices inherit the accent and surface — no extra styling.</p></div></div>
        </section>
      </div>

      <section class="pv-block">
        <div class="pv-eyebrow">In context</div>
        <div class="pv-grid">
          ${CONTEXT_CARDS.map(c => `<article class="pv-card"><span class="ic">${esc(c.ic)}</span><h4>${esc(c.h)}</h4><p>${esc(c.p)}</p><span class="lnk">${esc(c.lnk)} →</span></article>`).join('\n          ')}
        </div>
      </section>

      <section class="pv-block">
        <div class="pv-eyebrow">Metrics</div>
        <div class="pv-stats">
          <div class="pv-stat"><div class="n">99.9%</div><div class="l">Uptime</div></div>
          <div class="pv-stat"><div class="n">12k</div><div class="l">Teams onboard</div></div>
          <div class="pv-stat"><div class="n">4.9</div><div class="l">Avg. rating</div></div>
        </div>
      </section>

      <footer class="pv-foot">
        <span>© ${esc(ctx.brand)}</span>
        <span class="links"><span>Privacy</span><span>Terms</span><span>Status</span></span>
      </footer>
    </div>
  </div>`;
}

function pageHtml(ctx, intent) {
  const order = (intent && intent.sectionRoles && intent.sectionRoles.readingOrder) || ['hero', 'features', 'cta'];
  const sectionFor = (role) => {
    const r = String(role).toLowerCase();
    if (/hero|header|intro|masthead/.test(r)) {
      return `<section class="pv-section" style="text-align:center"><span class="pv-kicker">${esc(role)}</span><h1 class="pv-h" style="margin:calc(var(--p-space) * 0.6) auto">${esc(ctx.heading)}</h1><p class="pv-p" style="margin:0 auto">${esc(ctx.lede)}</p><div class="pv-row" style="justify-content:center;margin-top:var(--p-space)"><button class="pv-btn">${esc(ctx.cta)}</button><button class="pv-btn ghost">${esc(ctx.cta2)}</button></div></section>`;
    }
    if (/feature|grid|card|benefit|product/.test(r)) {
      return `<section class="pv-section"><div class="pv-eyebrow" style="margin-bottom:var(--p-space)">${esc(role)}</div><div class="pv-grid">${CONTEXT_CARDS.map(c => `<article class="pv-card"><span class="ic">${esc(c.ic)}</span><h4>${esc(c.h)}</h4><p>${esc(c.p)}</p></article>`).join('')}</div></section>`;
    }
    if (/stat|metric|number|proof|logo/.test(r)) {
      return `<section class="pv-section"><div class="pv-stats" style="border:0"><div class="pv-stat" style="border:0"><div class="n">99.9%</div><div class="l">Uptime</div></div><div class="pv-stat"><div class="n">12k</div><div class="l">Teams</div></div><div class="pv-stat"><div class="n">4.9</div><div class="l">Rating</div></div></div></section>`;
    }
    if (/cta|footer|sign|contact|subscribe/.test(r)) {
      return `<section class="pv-section" style="text-align:center"><h2 class="pv-h2">${esc(ctx.heading)}</h2><div class="pv-row" style="justify-content:center"><input class="pv-input" style="max-width:260px" placeholder="you@${esc(ctx.domain)}" /><button class="pv-btn">${esc(ctx.cta)}</button></div></section>`;
    }
    return `<section class="pv-section"><h2 class="pv-h2">${esc(role)}</h2><p class="pv-p">${esc(ctx.lede)}</p></section>`;
  };
  return `<div class="panel preview" id="panel-page" data-panel="page">
    <div class="pv">
      ${navBar(ctx)}
      ${order.slice(0, 7).map(sectionFor).join('\n      ')}
    </div>
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

// Motion panel — renders the extracted motion language as something you can
// SEE and PLAY: easing curves drawn as SVG, duration chips, and (when
// --motion-runtime captured them) choreography + scroll recipes with live demos.
function bezierSvgPath(raw) {
  const m = String(raw || '').match(/cubic-bezier\(\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*\)/i);
  const named = { linear: [0, 0, 1, 1], ease: [0.25, 0.1, 0.25, 1], 'ease-in': [0.42, 0, 1, 1], 'ease-out': [0, 0, 0.58, 1], 'ease-in-out': [0.42, 0, 0.58, 1] };
  const pts = m ? [+m[1], +m[2], +m[3], +m[4]] : (named[String(raw).trim()] || [0.25, 0.1, 0.25, 1]);
  const [x1, y1, x2, y2] = pts;
  // 0..100 box, y flipped (CSS y grows down, curves read up). Overshoot shows
  // outside the 0..100 band — the viewBox has headroom for springs.
  const Y = v => 100 - v * 100;
  return { d: `M0,${Y(0)} C${x1 * 100},${Y(y1)} ${x2 * 100},${Y(y2)} 100,${Y(1)}`, raw: m ? raw : `cubic-bezier(${pts.join(',')})` };
}

function motionHtml(data) {
  const m = data.motion || {};
  const easings = Object.entries(m.easing || {});
  const durations = Object.entries(m.duration || {}).sort((a, b) => (a[1].ms || 0) - (b[1].ms || 0));
  const springs = Object.entries(m.spring || {});
  const choreo = Object.entries(m.choreography || {});
  const scroll = Object.entries(m.scroll || {});
  const feel = m.$meta?.feel || 'unknown';
  const runtime = m.$meta?.runtime;

  const curveCard = ([name, def], isSpring) => {
    const { d, raw } = bezierSvgPath(def.$value);
    const dur = durations[Math.min(2, durations.length - 1)]?.[1]?.ms || 320;
    return `<figure class="mo-curve" data-ease="${esc(def.$value)}" data-dur="${dur}">
      <svg viewBox="-12 -28 124 156" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <line class="mo-grid" x1="0" y1="100" x2="100" y2="100" /><line class="mo-grid" x1="0" y1="0" x2="0" y2="100" />
        <line class="mo-diag" x1="0" y1="100" x2="100" y2="0" />
        <path class="mo-path${isSpring ? ' spring' : ''}" d="${d}" />
      </svg>
      <figcaption><b>${esc(name)}</b><code>${esc(raw)}</code></figcaption>
      <div class="mo-demo"><span class="mo-dot"></span></div>
    </figure>`;
  };

  const choreoCard = ([name, c]) => `<article class="mo-recipe" data-stagger="${c.staggerMs}" data-dur="${c.durationMs}" data-count="${c.count}">
    <header><b>${esc(name)}</b><span class="mo-pill">${esc(c.trigger)}</span></header>
    <dl><dt>stagger</dt><dd>${c.staggerMs}ms</dd><dt>elements</dt><dd>${c.count}</dd><dt>duration</dt><dd>${c.durationMs}ms</dd></dl>
    <div class="mo-stage">${Array.from({ length: Math.min(c.count, 6) }, () => '<i></i>').join('')}</div>
    <button class="mo-play" type="button">▶ play sequence</button>
  </article>`;

  const scrollRow = ([name, r]) => `<tr><td><code>${esc(name)}</code></td><td><span class="mo-pill">${esc(r.kind)}</span></td><td>${esc((r.properties || []).join(', '))}</td><td>${r.durationMs || 0}ms</td></tr>`;

  const empty = !easings.length && !durations.length && !choreo.length;

  return `<div class="panel motion" id="panel-motion" data-panel="motion">
    <style>
      .panel.motion { font-family: var(--mono); color: var(--ink); }
      .mo-head { display:flex; align-items:baseline; gap:14px; margin-bottom:18px; }
      .mo-head h2 { font-family: var(--mono); font-size:12px; letter-spacing:.12em; text-transform:uppercase; margin:0; }
      .mo-feel { font-size:11px; color:var(--ink-3); } .mo-feel b { color:var(--ink); }
      .mo-sec { margin: 26px 0; }
      .mo-sec > h3 { font-size:10.5px; letter-spacing:.14em; text-transform:uppercase; color:var(--ink-3); margin:0 0 12px; }
      .mo-grid-wrap { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:14px; }
      .mo-curve { margin:0; border:1px solid var(--line); border-radius:10px; padding:12px; background:var(--paper-2); cursor:pointer; transition:border-color .15s ease; }
      .mo-curve:hover { border-color:var(--ink-3); }
      .mo-curve svg { width:100%; height:78px; display:block; }
      .mo-grid { stroke:var(--line); stroke-width:1; } .mo-diag { stroke:var(--line); stroke-width:1; stroke-dasharray:3 3; }
      .mo-path { fill:none; stroke:var(--ink); stroke-width:3; vector-effect:non-scaling-stroke; } .mo-path.spring { stroke:#c2410c; }
      .mo-curve figcaption { display:flex; flex-direction:column; gap:2px; margin-top:8px; }
      .mo-curve figcaption b { font-size:11px; } .mo-curve figcaption code { font-size:9.5px; color:var(--ink-3); word-break:break-all; }
      .mo-demo { margin-top:9px; height:6px; border-radius:3px; background:var(--line); position:relative; }
      .mo-dot { position:absolute; top:-3px; left:0; width:12px; height:12px; border-radius:50%; background:var(--ink); }
      .mo-curve.run .mo-dot { left:calc(100% - 12px); }
      .mo-chips { display:flex; flex-wrap:wrap; gap:8px; }
      .mo-chip { border:1px solid var(--line); border-radius:999px; padding:4px 11px; font-size:11px; background:var(--paper-2); }
      .mo-chip b { color:var(--ink); } .mo-chip span { color:var(--ink-3); }
      .mo-recipes { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:14px; }
      .mo-recipe { border:1px solid var(--line); border-radius:10px; padding:14px; background:var(--paper-2); }
      .mo-recipe header { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
      .mo-recipe header b { font-size:11.5px; }
      .mo-pill { font-size:9px; letter-spacing:.1em; text-transform:uppercase; padding:2px 7px; border-radius:4px; background:var(--ink); color:var(--paper); }
      .mo-recipe dl { display:grid; grid-template-columns:auto 1fr; gap:3px 10px; margin:0 0 12px; font-size:10.5px; }
      .mo-recipe dt { color:var(--ink-3); } .mo-recipe dd { margin:0; text-align:right; }
      .mo-stage { display:flex; gap:6px; height:34px; align-items:flex-end; margin-bottom:11px; }
      .mo-stage i { flex:1; height:100%; border-radius:4px 4px 0 0; background:var(--ink); opacity:0; transform:translateY(10px); }
      .mo-recipe.run .mo-stage i { opacity:1; transform:none; }
      .mo-play { font-family:var(--mono); font-size:10px; letter-spacing:.08em; text-transform:uppercase; border:1px solid var(--line); background:transparent; color:var(--ink); border-radius:6px; padding:6px 11px; cursor:pointer; width:100%; }
      .mo-play:hover { background:var(--ink); color:var(--paper); }
      .mo-table { width:100%; border-collapse:collapse; font-size:10.5px; }
      .mo-table th { text-align:left; color:var(--ink-3); font-weight:500; padding:6px 8px; border-bottom:1px solid var(--line); text-transform:uppercase; letter-spacing:.1em; font-size:9px; }
      .mo-table td { padding:7px 8px; border-bottom:1px solid var(--line); }
      .mo-empty { color:var(--ink-3); font-size:12px; padding:40px 0; text-align:center; }
      .mo-note { font-size:10px; color:var(--ink-3); margin-top:6px; }
    </style>
    <div class="mo-head"><h2>Motion language</h2><span class="mo-feel">feel · <b>${esc(feel)}</b>${runtime ? ` · runtime: ${runtime.observed} observed` : ''}</span></div>
    ${empty ? '<div class="mo-empty">No motion tokens in this extraction. Re-run with <code>--motion-runtime</code> for live capture.</div>' : ''}
    ${easings.length ? `<section class="mo-sec"><h3>Easing curves · click to preview</h3><div class="mo-grid-wrap">${easings.map(e => curveCard(e, false)).join('')}${springs.map(s => curveCard(s, true)).join('')}</div></section>` : ''}
    ${durations.length ? `<section class="mo-sec"><h3>Durations</h3><div class="mo-chips">${durations.map(([n, d]) => `<span class="mo-chip"><b>${esc(n)}</b> <span>${d.ms}ms${d.$extensions?.['designlang.observed'] ? ' · observed' : ''}</span></span>`).join('')}</div></section>` : ''}
    ${choreo.length ? `<section class="mo-sec"><h3>Choreography · runtime stagger</h3><div class="mo-recipes">${choreo.map(choreoCard).join('')}</div></section>` : ''}
    ${scroll.length ? `<section class="mo-sec"><h3>Scroll recipes</h3><table class="mo-table"><thead><tr><th>name</th><th>kind</th><th>properties</th><th>duration</th></tr></thead><tbody>${scroll.map(scrollRow).join('')}</tbody></table></section>` : ''}
    ${!choreo.length && !scroll.length && !empty ? '<p class="mo-note">Tip: re-run with <code>--motion-runtime</code> to capture choreography &amp; scroll recipes from the live page.</p>' : ''}
  </div>`;
}

// Build the human-facing context for the specimen from the extraction: a brand
// name from the prefix, the site's own strongest heading, its top CTA verbs,
// and a single honest supporting line — so the preview reads as intentional.
function buildContext(data, derived) {
  const voice = data.voice || {};
  const intent = data.intent || {};
  const prefix = String(data.prefix || 'site');
  const firstSeg = prefix.replace(/^https?-?/, '').split(/[-.]/)[0] || 'Brand';
  const brand = firstSeg.charAt(0).toUpperCase() + firstSeg.slice(1);
  const domain = prefix.replace(/-/g, '.');
  const heading = (voice.sampleHeadings && voice.sampleHeadings.find(h => h && h.length > 6))
    || 'A design system, extracted and editable.';
  const ctas = (voice.ctaVerbs || []).map(c => c && c.value).filter(Boolean);
  const cta = ctas[0] || 'Get started';
  const cta2 = ctas.find(c => c !== cta) || 'Learn more';
  const intentType = intent.pageIntent && intent.pageIntent.type;
  const kicker = intentType && intentType !== 'unknown' ? `${brand} · ${intentType}` : `${brand} design system`;
  const fontName = String(derived.vars['--p-font'] || '').replace(/['"]/g, '').split(',')[0].trim() || 'System';
  const lede = `Every element here is rendered live from ${brand}'s own tokens. Edit a value on the left and the whole system moves with it.`;
  return { brand, domain, heading, cta, cta2, kicker, fontName, lede };
}

export function studioHtml(data) {
  const derived = deriveTokens(data);
  const ctx = buildContext(data, derived);
  const meta = (data.tokens && data.tokens.$metadata) || {};
  const boot = {
    prefix: data.prefix,
    base: derived.vars,
    dark: deriveDark(derived.vars),
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
      <div class="mark"><b>designlang</b> <em>studio</em> · ${esc(ctx.brand)}</div>
      <div class="tabs" role="tablist">
        <button class="tab" role="tab" data-tab="wall" aria-selected="true">Components</button>
        <button class="tab" role="tab" data-tab="page" aria-selected="false">Page</button>
        <button class="tab" role="tab" data-tab="motion" aria-selected="false">Motion</button>
        <button class="tab" role="tab" data-tab="info" aria-selected="false">Info</button>
      </div>
      <div class="actions">
        <div class="seg" role="group" aria-label="theme">
          <button data-theme="light" aria-pressed="true">Light</button>
          <button data-theme="dark" aria-pressed="false">Dark</button>
        </div>
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
        ${wallHtml(ctx)}
        ${pageHtml(ctx, data.intent || {})}
        ${motionHtml(data)}
        ${infoHtml(data)}
      </div>
    </div>
  </div>
  <div class="toast" id="toast"></div>

<script id="__boot" type="application/json">${json}</script>
<script>
  var BOOT = JSON.parse(document.getElementById('__boot').textContent);
  var BASE = BOOT.base;
  var DARK = BOOT.dark || BOOT.base;
  var theme = 'light';
  var activeBase = BASE;        // BASE (light) or DARK, edits layer on top
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
    for (var k in activeBase) out[k] = (edits[k] != null ? edits[k] : activeBase[k]);
    return out;
  }
  function setTheme(t) {
    theme = (t === 'dark') ? 'dark' : 'light';
    activeBase = (theme === 'dark') ? DARK : BASE;
    document.querySelectorAll('.seg button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-theme') === theme ? 'true' : 'false');
    });
    clean(); apply(); syncControls();
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
    var payload = {};
    for (var k in edits) payload[k] = edits[k];
    if (theme === 'dark') payload.__theme = 'dark';
    if (!Object.keys(payload).length) { history.replaceState(null, '', location.pathname); return; }
    try { history.replaceState(null, '', '#' + btoa(JSON.stringify(payload))); } catch (e) {}
  }
  function scheduleHash() { clearTimeout(hashTimer); hashTimer = setTimeout(writeHash, 250); }
  function readHash() {
    try {
      if (location.hash.length > 1) {
        var o = JSON.parse(atob(location.hash.slice(1)));
        if (o && typeof o === 'object') {
          if (o.__theme === 'dark') theme = 'dark';
          delete o.__theme;
          edits = o;
        }
      }
    } catch (e) {}
  }

  function clean() { for (var k in edits) if (edits[k] === activeBase[k]) delete edits[k]; }

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

  // ── Motion panel: play easing curves + choreography sequences ──
  (function () {
    var panel = document.getElementById('panel-motion');
    if (!panel) return;
    panel.addEventListener('click', function (e) {
      var curve = e.target.closest('.mo-curve');
      if (curve) {
        var dot = curve.querySelector('.mo-dot');
        var dur = +curve.getAttribute('data-dur') || 320;
        var ease = curve.getAttribute('data-ease') || 'ease';
        curve.classList.remove('run');
        dot.style.transition = 'none'; dot.style.left = '0';
        void dot.offsetWidth; // reflow so the reset takes
        dot.style.transition = 'left ' + dur + 'ms ' + ease;
        requestAnimationFrame(function () { curve.classList.add('run'); });
        return;
      }
      var play = e.target.closest('.mo-play');
      if (play) {
        var recipe = play.closest('.mo-recipe');
        var stagger = +recipe.getAttribute('data-stagger') || 80;
        var rdur = +recipe.getAttribute('data-dur') || 400;
        var bars = recipe.querySelectorAll('.mo-stage i');
        recipe.classList.remove('run');
        bars.forEach(function (b) { b.style.transition = 'none'; b.style.opacity = '0'; b.style.transform = 'translateY(10px)'; });
        void recipe.offsetWidth;
        bars.forEach(function (b, i) { b.style.transition = 'opacity ' + rdur + 'ms ease, transform ' + rdur + 'ms cubic-bezier(0.16,1,0.3,1)'; b.style.transitionDelay = (i * stagger) + 'ms'; });
        requestAnimationFrame(function () { recipe.classList.add('run'); });
      }
    });
  })();

  // ── Theme (light / generated dark) ──
  document.querySelector('.seg').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    setTheme(b.getAttribute('data-theme')); scheduleHash();
  });

  // ── Backdrop ──
  var stageWrap = document.querySelector('.stage-wrap');
  document.querySelector('.bd').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    stageWrap.setAttribute('data-bd', b.getAttribute('data-bd'));
    document.querySelectorAll('.bd button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
  });

  // ── Actions ──
  document.getElementById('reset').addEventListener('click', function () {
    edits = {}; setTheme('light'); writeHash(); toast('Reset to extracted tokens');
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
  readHash(); setTheme(theme);
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
