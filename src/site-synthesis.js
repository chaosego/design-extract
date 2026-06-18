// site-synthesis — fuse N per-page extractions into ONE canonical design system.
//
// Pure and browser-free so it is fully unit-testable. Given the per-page
// `design` objects produced by `extractDesignLanguage`, it elects a canonical
// token set by *coverage* (how many pages use a token), tags every token
// site-wide / section / page-local, flags drift, and scores a consistency
// grade. The orchestrator (`src/site.js`) feeds it crawled pages; every
// existing emitter can consume `result.canonical` unchanged because it is
// shaped like a normal `design` object.

// ── colour maths ───────────────────────────────────────────────────────────
// A small OKLab conversion lets us merge perceptually-identical colours
// (#ffffff vs #fefefe) instead of letting both survive as separate tokens.

function hexToRgb(hex) {
  if (typeof hex !== 'string') return null;
  let h = hex.trim().replace(/^#/, '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  if (h.length === 8) h = h.slice(0, 6); // drop alpha for distance
  if (h.length !== 6 || /[^0-9a-f]/i.test(h)) return null;
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function srgbToLinear(c) {
  const x = c / 255;
  return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

// Convert an sRGB hex to OKLab (Björn Ottosson). Returns [L, a, b] or null.
export function hexToOklab(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const r = srgbToLinear(rgb[0]);
  const g = srgbToLinear(rgb[1]);
  const b = srgbToLinear(rgb[2]);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

// Perceptual distance between two hexes in OKLab. ~0.02 is "barely
// distinguishable"; we cluster below ~0.04 by default.
export function colorDistance(a, b) {
  const la = hexToOklab(a);
  const lb = hexToOklab(b);
  if (!la || !lb) return Infinity;
  return Math.hypot(la[0] - lb[0], la[1] - lb[1], la[2] - lb[2]);
}

function normalizeHex(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  return '#' + rgb.map((c) => c.toString(16).padStart(2, '0')).join('');
}

// ── per-category tallying ──────────────────────────────────────────────────
// A tally records, for one token key, how many distinct pages used it, the
// total usage count across pages, and which page urls/types touched it.

function makeTally() {
  return new Map(); // key -> { key, value, pages:Set, count }
}

function record(tally, key, value, pageId, count = 1) {
  if (key == null) return;
  let entry = tally.get(key);
  if (!entry) {
    entry = { key, value, pages: new Set(), count: 0 };
    tally.set(key, entry);
  }
  entry.pages.add(pageId);
  entry.count += count;
  // Keep the richest value seen (prefer objects with the highest count).
  if (value && (!entry.value || count > (entry._best || 0))) {
    entry.value = value;
    entry._best = count;
  }
}

function pageId(page, idx) {
  return page.type || page.url || `page-${idx}`;
}
