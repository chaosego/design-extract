// studio-tokens — pure, dependency-free token derivation for the studio.
//
// No node built-ins are imported here, so this module is safe to bundle into
// a browser/React context (the website studio) as well as the CLI server.
// It reduces an arbitrary DTCG token tree into the small set of high-impact
// CSS variables that drive the live preview, with sane fallbacks throughout.

export function hexToRgb(hex) {
  const h = String(hex || '').replace('#', '');
  if (h.length === 3) {
    return { r: parseInt(h[0] + h[0], 16), g: parseInt(h[1] + h[1], 16), b: parseInt(h[2] + h[2], 16) };
  }
  return { r: parseInt(h.slice(0, 2), 16) || 0, g: parseInt(h.slice(2, 4), 16) || 0, b: parseInt(h.slice(4, 6), 16) || 0 };
}

export function luminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  return r * 0.299 + g * 0.587 + b * 0.114; // perceptual, 0..255
}

export function saturation(hex) {
  const { r, g, b } = hexToRgb(hex);
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  return max === 0 ? 0 : (max - min) / max;
}

export function blend(a, b, t) {
  const ca = hexToRgb(a), cb = hexToRgb(b);
  const mix = (x, y) => Math.round(x + (y - x) * t);
  const to2 = (n) => n.toString(16).padStart(2, '0');
  return '#' + to2(mix(ca.r, cb.r)) + to2(mix(ca.g, cb.g)) + to2(mix(ca.b, cb.b));
}

// WCAG 2.x relative-luminance contrast ratio between two hex colors.
export function contrastRatio(a, b) {
  const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
  const rl = (hex) => { const { r, g, b } = hexToRgb(hex); return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b); };
  const l1 = rl(a), l2 = rl(b);
  const hi = Math.max(l1, l2), lo = Math.min(l1, l2);
  return (hi + 0.05) / (lo + 0.05);
}

// Walk a token tree collecting { hex, path } for every color leaf, plus the
// first dimension / family / shadow values found under helpful keys.
export function collectTokens(tokens) {
  const colors = [];
  const seen = new Set();
  let radius = null, shadow = null, space = null;
  const families = [];

  const isHex = (v) => typeof v === 'string' && /^#[0-9a-f]{3,8}$/i.test(v);
  const isDim = (v) => typeof v === 'string' && /^-?\d+(\.\d+)?(px|rem|em)$/i.test(v);

  const walk = (obj, path) => {
    if (!obj || typeof obj !== 'object') return;
    if ('$value' in obj && typeof obj.$value !== 'object') {
      const v = obj.$value;
      const key = path.join('.').toLowerCase();
      if (isHex(v)) {
        const h = v.toLowerCase();
        if (!seen.has(h)) { seen.add(h); colors.push({ hex: h, path: key }); }
      } else if (typeof v === 'string') {
        if (!radius && /radius|rounded/.test(key) && isDim(v)) radius = v;
        if (!space && /space|spacing|gap/.test(key) && isDim(v)) space = v;
        if (!shadow && /shadow|elevation/.test(key) && /\d/.test(v)) shadow = v;
        if (/font.*family|family.*sans|fontfamily|typeface/.test(key) && !isDim(v) && !isHex(v)) {
          families.push(v);
        }
      }
      return;
    }
    // Typography composite leaves carry fontFamily inside $value objects.
    if (obj.$value && typeof obj.$value === 'object' && typeof obj.$value.fontFamily === 'string') {
      families.push(obj.$value.fontFamily);
    }
    for (const k of Object.keys(obj)) walk(obj[k], path.concat(k));
  };
  walk(tokens || {}, []);
  return { colors, radius, shadow, space, families };
}

function pickColor(colors, re, fallbackFn) {
  const hit = colors.find(c => re.test(c.path));
  if (hit) return hit.hex;
  return fallbackFn ? fallbackFn() : null;
}

export function deriveTokens(data) {
  const tokens = (data && data.tokens) || {};
  const { colors, radius, shadow, space, families } = collectTokens(tokens);

  const byLum = colors.slice().sort((a, b) => luminance(a.hex) - luminance(b.hex));
  const lightest = byLum.length ? byLum[byLum.length - 1].hex : '#ffffff';
  const darkest = byLum.length ? byLum[0].hex : '#0a0908';

  // Surface + text: prefer semantically-named tokens, then *guarantee* the pair
  // is actually legible — real extractions sometimes mislabel near-equal colors,
  // which is what made the preview look arbitrary.
  let bg = pickColor(colors, /background|surface|\bbg\b|paper|canvas/, () => lightest);
  let fg = pickColor(colors, /text|ink|foreground|\bfg\b|body|heading/, () => darkest);
  if (contrastRatio(bg, fg) < 3.5) {
    fg = luminance(bg) > 140 ? '#16161a' : '#f6f5f3';
  }

  // Accent: a *saturated* brand color that isn't the surface or text. Filtering
  // out greys means we never promote a neutral to "accent" (a common source of
  // the washed-out, random feel).
  const isVivid = (h) => saturation(h) > 0.18 && h !== bg && h !== fg;
  let accent =
    (colors.find(c => /brand|primary|accent|action|cta|link/.test(c.path) && isVivid(c.hex)) || {}).hex ||
    (colors.filter(c => isVivid(c.hex)).sort((a, b) => saturation(b.hex) - saturation(a.hex))[0] || {}).hex ||
    pickColor(colors, /brand|primary|accent|action/, () => fg);
  // If the accent would barely register on the surface, deepen it toward the
  // text color until buttons read clearly — without throwing away its hue.
  let guard = 0;
  while (contrastRatio(accent, bg) < 2.4 && guard++ < 6) accent = blend(accent, fg, 0.12);

  // White on the accent unless the accent is genuinely light — matches how
  // designers actually treat saturated brand colors (white on orange, etc.),
  // not raw WCAG-max which would flip warm accents to black text.
  const accentFg = luminance(accent) > 150 ? '#0a0908' : '#ffffff';

  // Secondary text that stays legible; a quiet border; a faint card tint.
  let muted = blend(fg, bg, 0.42);
  if (contrastRatio(muted, bg) < 3) muted = blend(fg, bg, 0.26);
  const border = blend(fg, bg, 0.86);
  const card = blend(bg, fg, 0.04);

  const family = (families.find(Boolean) || '').replace(/['"]/g, '').split(',')[0].trim();
  const fontSans = family || 'Instrument Sans';
  const displayFamily = families.length > 1 ? families[1].replace(/['"]/g, '').split(',')[0].trim() : fontSans;

  const motion = (data && data.motion) || {};
  const dur = motion.duration?.base || motion.durations?.base || '200ms';
  const ease = motion.easing?.standard || motion.easings?.standard || 'cubic-bezier(0.2, 0, 0, 1)';

  const vars = {
    '--p-bg': bg,
    '--p-card': card,
    '--p-fg': fg,
    '--p-muted': muted,
    '--p-border': border,
    '--p-accent': accent,
    '--p-accent-fg': accentFg,
    '--p-radius': radius || '10px',
    '--p-fs': '16px',
    '--p-space': space || '16px',
    '--p-shadow': shadow || '0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08)',
    '--p-font': "'" + fontSans + "', system-ui, sans-serif",
    '--p-font-display': "'" + displayFamily + "', " + "'" + fontSans + "', serif",
    '--p-dur': dur,
    '--p-ease': ease,
  };

  const palette = colors.slice(0, 24).map(c => c.hex);
  const fonts = Array.from(new Set([fontSans, displayFamily,
    'Inter', 'Instrument Sans', 'Fraunces', 'Georgia', 'system-ui', 'JetBrains Mono'].filter(Boolean)));
  return { vars, palette, fonts };
}

// Generate a tasteful dark variant from a light token set. Surface goes to a
// near-black tinted slightly toward the accent hue; text to near-white; the
// brand accent is preserved (lightened only if it would vanish on dark), and
// muted/border/card are recomputed so the system stays coherent. Type, shape,
// spacing and motion carry over unchanged.
export function deriveDark(vars) {
  const accent0 = vars['--p-accent'] || '#ff4800';
  const accent = luminance(accent0) < 64 ? blend(accent0, '#ffffff', 0.34) : accent0;
  const bg = blend('#0b0b0d', accent, 0.05);
  const fg = blend('#ffffff', accent, 0.04);
  return {
    ...vars,
    '--p-bg': bg,
    '--p-fg': fg,
    '--p-accent': accent,
    '--p-accent-fg': luminance(accent) > 150 ? '#0a0908' : '#ffffff',
    '--p-muted': blend(fg, bg, 0.5),
    '--p-border': blend(fg, bg, 0.82),
    '--p-card': blend(bg, fg, 0.06),
    '--p-shadow': '0 1px 2px rgba(0,0,0,0.5), 0 12px 32px rgba(0,0,0,0.55)',
  };
}
