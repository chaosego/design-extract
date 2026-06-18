# Whole-Site Design System — design

**Status:** approved · **Date:** 2026-06-18

## Problem

`designlang` reads a design system off a *single* URL. The multi-page path
(`--pages <n>`, `src/multipage.js`) only emits a **diff report**
(`*-multipage.json`: pairwise Jaccard overlap, shared sets, per-page unique
colors). The real token emitters (DTCG, Tailwind, shadcn, Figma…) still run on
the **homepage alone**. So today multi-page *describes* similarity but never
*synthesizes* a system.

## Goal

Crawl a whole site and synthesize **one unified, de-duplicated design system**
across all pages: canonical tokens, a coverage map (which token is site-wide vs
page-local), a drift/consistency report with a grade, and the full standard
emitter pack generated from the **canonical** system — not one page.

100% deterministic and free. No API key, no LLM.

## Approach

**Coverage-weighted canonicalization.** Crawl N pages, run the existing
`extractDesignLanguage` per page, then merge every token by *coverage*:

```
coverage(token) = (# pages containing it) / (total pages)
```

A token used on most pages is **site-wide / canonical**; one seen on a single
page is **page-local / outlier**. Near-identical colors are merged with a small
perceptual-distance (OKLab) clustering pass so `#ffffff` and `#fefefe` don't
both survive.

This is chosen over (a) homepage-anchored reconcile (homepage-biased, misses
site-wide tokens absent from the homepage) and (b) pure clustering (heavier,
less explainable).

## Architecture

Two new modules, both thin and following the existing `multipage.js`
"orchestrate, don't re-implement" rule:

- **`src/site-synthesis.js`** — pure, browser-free, fully unit-tested. Exposes
  `synthesizeSite(pages)`. Input: `[{ url, type, design }]`. Output: canonical
  design object + coverage map + drift report + grade.
- **`src/site.js`** — orchestrator. Reuses `discoverCanonicalPages` /
  `collectLinks` from `multipage.js`, opens one browser context, crawls up to
  `maxPages` pages, runs the injected `extractDesignLanguage` per page, and
  calls `synthesizeSite`. Per-page failures never kill the run.

### Data flow

```
homepage design (already extracted by main flow)
        +
discover canonical pages → extract each → [{url,type,design}, …]
        ↓
synthesizeSite(pages)
        ↓
{ canonical, coverage, drift }
        ↓
emit *-site-system.json, *-site-coverage.md, *-site-consistency.md
   + DTCG / Tailwind / shadcn / css-vars / DESIGN.md from `canonical`
```

### Canonicalization, per category

| Category | Key | Notes |
|---|---|---|
| colors | normalized hex (OKLab-clustered) | rebuild `colors.{primary,secondary,accent,neutrals,backgrounds,text,all}` |
| typography.families | lowercased name | keep highest-count usage label |
| typography.scale | size px | union, sorted desc |
| spacing.scale | px value | union of canonical steps |
| borders.radii | value px | |
| shadows.values | label / normalized raw | |

Every token is tagged `scope ∈ {site-wide, section, page-local}`:
- `site-wide`: coverage ≥ 0.8
- `section`: 0.4 ≤ coverage < 0.8
- `page-local`: coverage < 0.4 (or present on a single page)

`canonical` is shaped like a real `design` object (homepage design is the base
for non-token fields the emitters read — `materialLanguage`, `motion`, etc. —
with colors/typography/spacing/borders/shadows replaced by the elected set) so
**every existing emitter works unchanged**.

### Consistency grade

`drift.grade` (0–100) blends mean coverage of canonical tokens against an
outlier penalty (count of page-local tokens that *should* be shared). A letter
grade and one-line summary accompany it. `drift.outliers` lists each off-system
token with the page that introduced it.

## Outputs (new, all free)

- `*-site-system.json` — canonical unified tokens + coverage + drift.
- `*-site-coverage.md` — every token, its scope, and which pages use it.
- `*-site-consistency.md` — grade, drift, outliers, per-page summary.
- Standard pack (DTCG, Tailwind, shadcn, css-vars, DESIGN.md) emitted from the
  canonical system.

## CLI surface

```
designlang site <url> [--max-pages <n>] [--out <dir>]
```

Default `--max-pages 6` (keeps it fast/free). Homepage always included.

## Plugin fix (companion workstream)

The Claude plugin is broken and must work properly:

1. Sync `.claude-plugin/plugin.json` + `marketplace.json` `12.10.1 → 12.22.0`,
   and add `scripts/check-plugin-version.mjs` + a test so it can't drift again.
2. Add missing slash commands: **`/site`** (new), **`/studio`**, **`/verify`**.
   (`/clone`, `/watch`, `/sync`, `/drift` noted as a later follow-up.)
3. Verify every command file's CLI invocation runs.

## Testing

- Unit tests for `synthesizeSite()` (no browser): coverage scoring, canonical
  election, scope tagging, OKLab color clustering, drift/grade, graceful
  handling of missing fields and `< 2` pages.
- A plugin-version-sync test (`plugin.json` === `package.json`).

## Out of scope

Conversational/AI Studio editing, hosted website `/studio` AI, deeper-fidelity
or new-format emitters. This ships the whole-site synthesizer + plugin health.
