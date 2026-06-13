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
  const mostSaturated = colors.slice().sort((a, b) => saturation(b.hex) - saturation(a.hex))[0];

  const bg = pickColor(colors, /background|surface|\bbg\b|paper|canvas/, () => lightest);
  const fg = pickColor(colors, /text|ink|foreground|\bfg\b|body|heading/, () => darkest);
  const accent = pickColor(colors, /brand|primary|accent|action|cta|link/, () =>
    (mostSaturated && mostSaturated.hex) || darkest);

  const accentFg = luminance(accent) > 150 ? '#0a0908' : '#ffffff';
  const muted = blend(fg, bg, 0.55);
  const border = blend(fg, bg, 0.82);
  const card = blend(bg, fg, 0.03);

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
