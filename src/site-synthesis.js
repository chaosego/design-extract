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

// ── canonical election ─────────────────────────────────────────────────────

// Classify a token by how broadly it is used across the site.
export function scopeForCoverage(coverage) {
  if (coverage >= 0.8) return 'site-wide';
  if (coverage >= 0.4) return 'section';
  return 'page-local';
}

// Turn a tally into a sorted coverage list. Each row carries the elected value,
// the fraction of pages that used it, its scope, and the contributing pages.
function coverageRows(tally, totalPages) {
  const rows = [];
  for (const entry of tally.values()) {
    const coverage = totalPages ? entry.pages.size / totalPages : 0;
    rows.push({
      key: entry.key,
      value: entry.value,
      pages: [...entry.pages],
      pageCount: entry.pages.size,
      count: entry.count,
      coverage: Math.round(coverage * 100) / 100,
      scope: scopeForCoverage(coverage),
    });
  }
  // Most-covered first, then most-used — the canonical ordering.
  return rows.sort((a, b) => b.coverage - a.coverage || b.count - a.count);
}

// Merge near-identical colours so a single canonical swatch represents a
// perceptual cluster. The highest-count member becomes the cluster's value;
// its coverage is the union of every member's pages.
export function clusterColorRows(rows, threshold = 0.04) {
  const clusters = [];
  for (const row of rows) {
    const hit = clusters.find((c) => colorDistance(c.key, row.key) <= threshold);
    if (hit) {
      hit.members.push(row);
      for (const p of row.pages) hit.pageSet.add(p);
      if (row.count > hit.count) {
        hit.key = row.key;
        hit.value = row.value;
        hit.count = row.count;
      } else {
        hit.count += 0; // representative stays; counts merged below
      }
      hit.totalCount += row.count;
    } else {
      clusters.push({
        key: row.key,
        value: row.value,
        count: row.count,
        totalCount: row.count,
        pageSet: new Set(row.pages),
        members: [row],
      });
    }
  }
  return clusters;
}

// Apply colour clustering to a coverage list and re-derive coverage/scope from
// the merged page sets.
function canonicalColors(rows, totalPages, threshold) {
  const clusters = clusterColorRows(rows, threshold);
  return clusters
    .map((c) => {
      const coverage = totalPages ? c.pageSet.size / totalPages : 0;
      return {
        key: c.key,
        value: c.value,
        pages: [...c.pageSet],
        pageCount: c.pageSet.size,
        count: c.totalCount,
        coverage: Math.round(coverage * 100) / 100,
        scope: scopeForCoverage(coverage),
        merged: c.members.length,
      };
    })
    .sort((a, b) => b.coverage - a.coverage || b.count - a.count);
}

// ── drift + grade ──────────────────────────────────────────────────────────

function letterGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

// A category is "consistent" when most of its token *usage* lands on site-wide
// tokens. Returns 0..1 (1 = every use is on a shared token).
function categoryConsistency(rows) {
  const total = rows.reduce((s, r) => s + r.count, 0);
  if (!total) return 1;
  const shared = rows
    .filter((r) => r.scope === 'site-wide')
    .reduce((s, r) => s + r.count, 0);
  return shared / total;
}

// Page-introduced tokens worth surfacing: anything not site-wide that still
// saw real use. These are the off-system choices a design lead would flag.
function collectOutliers(coverage) {
  const out = [];
  for (const [category, rows] of Object.entries(coverage)) {
    for (const r of rows) {
      if (r.scope !== 'site-wide' && r.pageCount === 1 && r.count >= 2) {
        out.push({
          category,
          token: r.key,
          pages: r.pages,
          count: r.count,
          coverage: r.coverage,
        });
      }
    }
  }
  return out.sort((a, b) => b.count - a.count).slice(0, 25);
}

// ── main ───────────────────────────────────────────────────────────────────

// synthesizeSite(pages) — pages: [{ url, type, design }]. The first page is
// treated as the base (homepage) for non-token fields so every emitter works
// on the returned `canonical`. Pages without a `design` are ignored.
export function synthesizeSite(pages, options = {}) {
  const colorThreshold = options.colorThreshold ?? 0.04;
  const valid = (pages || []).filter((p) => p && p.design);
  const totalPages = valid.length;

  const colorTally = makeTally();
  const primaryVote = makeTally();
  const bgTally = makeTally();
  const textTally = makeTally();
  const familyTally = makeTally();
  const typeScaleTally = makeTally();
  const spacingTally = makeTally();
  const radiiTally = makeTally();
  const shadowTally = makeTally();

  valid.forEach((page, idx) => {
    const pid = pageId(page, idx);
    const d = page.design || {};
    const c = d.colors || {};
    for (const sw of c.all || []) {
      const hex = normalizeHex(sw.hex);
      if (hex) record(colorTally, hex, { hex, count: sw.count || 1 }, pid, sw.count || 1);
    }
    if (c.primary?.hex) {
      const hex = normalizeHex(c.primary.hex);
      record(primaryVote, hex, { ...c.primary, hex }, pid, c.primary.count || 1);
    }
    for (const bg of c.backgrounds || []) {
      const hex = normalizeHex(bg);
      if (hex) record(bgTally, hex, hex, pid);
    }
    for (const t of c.text || []) {
      const hex = normalizeHex(t);
      if (hex) record(textTally, hex, hex, pid);
    }
    for (const fam of d.typography?.families || []) {
      if (fam?.name) record(familyTally, fam.name.toLowerCase(), fam, pid, fam.count || 1);
    }
    for (const s of d.typography?.scale || []) {
      if (s?.size != null) record(typeScaleTally, s.size, s, pid, s.count || 1);
    }
    for (const v of d.spacing?.scale || []) {
      if (v != null) record(spacingTally, v, v, pid);
    }
    for (const r of d.borders?.radii || []) {
      if (r?.value != null) record(radiiTally, r.value, r, pid, r.count || 1);
    }
    for (const sh of d.shadows?.values || []) {
      const key = sh?.label || sh?.raw;
      if (key) record(shadowTally, key, sh, pid);
    }
  });

  const coverage = {
    colors: canonicalColors(coverageRows(colorTally, totalPages), totalPages, colorThreshold),
    backgrounds: canonicalColors(coverageRows(bgTally, totalPages), totalPages, colorThreshold),
    text: canonicalColors(coverageRows(textTally, totalPages), totalPages, colorThreshold),
    typography: coverageRows(familyTally, totalPages),
    typeScale: coverageRows(typeScaleTally, totalPages),
    spacing: coverageRows(spacingTally, totalPages),
    borders: coverageRows(radiiTally, totalPages),
    shadows: coverageRows(shadowTally, totalPages),
  };

  // Build a canonical design object from the base page, overriding token fields
  // with the elected set so emitters produce a whole-site system.
  const base = valid[0]?.design || {};
  const primaryRows = canonicalColors(coverageRows(primaryVote, totalPages), totalPages, colorThreshold);
  const canonical = structuredClone(base);
  canonical.meta = { ...(base.meta || {}), pagesAnalyzed: totalPages, whoseSystem: 'site-wide-canonical' };
  canonical.colors = {
    ...(base.colors || {}),
    primary: primaryRows[0]?.value || base.colors?.primary || null,
    backgrounds: coverage.backgrounds.slice(0, 6).map((r) => r.key),
    text: coverage.text.slice(0, 10).map((r) => r.key),
    all: coverage.colors.map((r) => r.value),
  };
  canonical.typography = {
    ...(base.typography || {}),
    families: coverage.typography.map((r) => r.value),
    scale: coverage.typeScale.map((r) => r.value).sort((a, b) => (b.size || 0) - (a.size || 0)),
  };
  canonical.spacing = {
    ...(base.spacing || {}),
    scale: coverage.spacing.map((r) => r.value).sort((a, b) => a - b),
  };
  canonical.borders = {
    ...(base.borders || {}),
    radii: coverage.borders.map((r) => r.value).sort((a, b) => (a.value || 0) - (b.value || 0)),
  };
  canonical.shadows = {
    ...(base.shadows || {}),
    values: coverage.shadows.map((r) => r.value),
  };

  // Grade: weighted blend of per-category consistency.
  const weights = { colors: 0.35, typography: 0.25, spacing: 0.2, borders: 0.2 };
  let scoreAcc = 0;
  let weightAcc = 0;
  const categoryScores = {};
  for (const [cat, w] of Object.entries(weights)) {
    const cons = categoryConsistency(coverage[cat] || []);
    categoryScores[cat] = Math.round(cons * 100);
    scoreAcc += cons * w;
    weightAcc += w;
  }
  const grade = totalPages < 2 ? null : Math.round((scoreAcc / weightAcc) * 100);
  const outliers = collectOutliers({
    colors: coverage.colors,
    typography: coverage.typography,
    spacing: coverage.spacing,
    borders: coverage.borders,
  });

  return {
    pagesAnalyzed: totalPages,
    pages: valid.map((p, i) => ({ url: p.url, type: p.type || `page-${i}` })),
    canonical,
    coverage,
    drift: {
      grade,
      letter: grade == null ? null : letterGrade(grade),
      categoryScores,
      outliers,
      summary:
        grade == null
          ? 'Need at least 2 pages to assess site consistency.'
          : `${grade}/100 (${letterGrade(grade)}) — ${outliers.length} off-system token${outliers.length === 1 ? '' : 's'} across ${totalPages} pages.`,
    },
  };
}
