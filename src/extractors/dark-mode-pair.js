// v10.2 — Dark Mode Pairing
//
// When the user passes --dark the crawler runs a second pass under
// `color-scheme: dark` and the main extractor emits `design.darkMode` with
// parallel colors + CSS variable maps. This module joins the two halves into
// *semantic pairs* — same role in light mode ↔ same role in dark mode — so
// downstream consumers (prompt pack, Tailwind darkMode config, agents) can
// author a single `[data-theme="dark"]` override block without guessing.
//
// Pure function. No Page handle, no side effects — takes the finished design
// object and returns a plain JSON structure.

import { extractColors } from './colors.js';

// Issue #110 — many sites ship dark mode *only* through
// `@media (prefers-color-scheme: dark)` and never toggle a class, so the
// class/context dark pass yields no delta for them. This emulates just the
// media feature on the already-loaded page (no reload) via Playwright's
// `page.emulateMedia({ colorScheme: 'dark' })`, re-reads the computed styles
// and pulls the dark colours out of them. Returns null when the page can't be
// emulated (e.g. a stub without the API) or produced no styles.
export async function extractMediaDarkColors(page) {
  if (!page || typeof page.emulateMedia !== 'function') return null;
  await page.emulateMedia({ colorScheme: 'dark' });
  let styles;
  try {
    styles = await page.evaluate(() =>
      Array.from(document.querySelectorAll('*')).slice(0, 5000).map(el => {
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          tag: el.tagName.toLowerCase(),
          classList: Array.from(el.classList).join(' '),
          role: el.getAttribute('role') || '',
          area: r.width * r.height,
          color: cs.color,
          backgroundColor: cs.backgroundColor,
          backgroundImage: cs.backgroundImage,
          borderColor: cs.borderColor,
        };
      }),
    );
  } finally {
    // Restore the original scheme so the depth crawl and any later pass on this
    // page see light, even if the evaluate above throws.
    try { await page.emulateMedia({ colorScheme: 'light' }); } catch { /* ignore */ }
  }
  if (!Array.isArray(styles) || styles.length === 0) return null;
  return extractColors(styles);
}

function colorKey(c) {
  return (typeof c === 'string' ? c : (c && c.hex) || '').toLowerCase();
}

// Merge the prefers-color-scheme dark colours into the class/context dark
// colours. The class-based pass is usually the more deliberate theme, so it
// wins whenever it already has a value; the media pass only fills the gaps.
// `all` is unioned so a media-only dark theme still yields a non-empty set.
export function mergeDarkColors(classBased, media) {
  if (!media) return classBased || null;
  if (!classBased) return media;
  const out = { ...classBased };
  for (const role of ['primary', 'secondary', 'accent']) {
    if (!out[role] && media[role]) out[role] = media[role];
  }
  for (const key of ['neutrals', 'backgrounds', 'text', 'gradients']) {
    if (!(classBased[key] || []).length && (media[key] || []).length) out[key] = media[key];
  }
  const base = classBased.all || [];
  const seen = new Set(base.map(colorKey));
  out.all = [...base, ...(media.all || []).filter(c => !seen.has(colorKey(c)))];
  return out;
}

function hexOf(c) {
  if (!c) return null;
  if (typeof c === 'string') return c.toLowerCase();
  return (c.hex || '').toLowerCase();
}

function pairRoleColors(light = {}, dark = {}) {
  const pairs = {};
  for (const role of ['primary', 'secondary', 'accent']) {
    const l = hexOf(light[role]);
    const d = hexOf(dark[role]);
    if (l || d) pairs[role] = { light: l, dark: d };
  }
  const bgPair = {
    light: (light.backgrounds?.[0]?.hex || null),
    dark: (dark.backgrounds?.[0]?.hex || null),
  };
  if (bgPair.light || bgPair.dark) pairs.background = bgPair;
  const textPair = {
    light: (light.text?.[0]?.hex || null),
    dark: (dark.text?.[0]?.hex || null),
  };
  if (textPair.light || textPair.dark) pairs.text = textPair;
  return pairs;
}

function pairVariables(lightVars = {}, darkVars = {}) {
  // Walk the union of keys; emit light/dark only when values differ.
  const keys = new Set([...Object.keys(lightVars || {}), ...Object.keys(darkVars || {})]);
  const out = {};
  for (const k of keys) {
    const l = lightVars[k];
    const d = darkVars[k];
    if (l == null && d == null) continue;
    if (typeof l === 'string' && typeof d === 'string' && l === d) continue;
    out[k] = { light: l ?? null, dark: d ?? null };
  }
  return out;
}

export function pairDarkMode(design = {}) {
  if (!design.darkMode) {
    return { available: false, reason: 'no --dark pass captured' };
  }
  const lightColors = design.colors || {};
  const darkColors = design.darkMode.colors || {};
  const roles = pairRoleColors(lightColors, darkColors);
  const variables = pairVariables(design.variables || {}, design.darkMode.variables || {});
  const pairedVarCount = Object.keys(variables).length;

  // Light colors that don't appear in dark (and vice versa) signal tokens the
  // site forgot to theme — useful for an audit.
  const lightSet = new Set((lightColors.all || []).map(c => (c.hex || '').toLowerCase()).filter(Boolean));
  const darkSet = new Set((darkColors.all || []).map(c => (c.hex || '').toLowerCase()).filter(Boolean));
  const missingInDark = [...lightSet].filter(x => !darkSet.has(x)).slice(0, 20);
  const missingInLight = [...darkSet].filter(x => !lightSet.has(x)).slice(0, 20);

  // Tailwind-ready config snippet.
  const tailwind = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: Object.fromEntries(
          Object.entries(roles)
            .filter(([, v]) => v.light && v.dark)
            .map(([role, v]) => [role, { DEFAULT: v.light, dark: v.dark }]),
        ),
      },
    },
  };

  return {
    available: true,
    roles,
    variables,
    pairedVarCount,
    audit: {
      missingInDark,
      missingInLight,
      coverage: pairedVarCount > 0 ? 'paired' : 'light-only-vars',
    },
    tailwind,
  };
}
