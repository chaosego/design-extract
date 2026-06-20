# Brand Essence — design

**Status:** approved (autopilot)
**Date:** 2026-06-20
**Surface:** npm CLI (`designlang brand`) — the editorial brand book

## Problem

The brand book documents *what* a site's design system is (colour, type, motion,
voice) but never synthesizes *who the brand is*. A reader gets 13 chapters of
accurate measurements and has to form the gestalt themselves. Every real brand
book opens with an essence/positioning page — the one paragraph that tells you
the personality before the spec. We have all the raw signals; we never combine
them.

## Goal

Add a synthesized **Brand Essence** as the opening chapter (Chapter 00) of the
book: a positioning statement, 3–5 personality adjectives, and a brand archetype
— each one **traceable to extracted numbers**, not LLM vibes. The whole tool's
credibility is "values come from real extraction"; the essence must hold that
line, so it is deterministic and shows its evidence.

## Non-goals

- No LLM. Derivation is rule-based and reproducible.
- No new browser extraction. Pure synthesis over the already-assembled `design`.
- Not a separate command. It rides inside `brand` (html / md / json outputs).

## Architecture

A single pure module, `src/extractors/brand-essence.js`, exporting
`deriveBrandEssence(design) -> essence`. It follows the existing pure-synthesizer
pattern (`pairDarkMode(design)` in `dark-mode-pair.js`). No Playwright, no async,
no I/O — given a `design` object it returns an `essence` object. Missing inputs
degrade to neutral (axis 0), never throw.

Integration:
- `formatBrandBook` / `formatBrandBookMarkdown` compute `design.essence ||
  deriveBrandEssence(design)` so HTML + MD always render it regardless of caller.
- The `brand` command attaches `design.essence` before writing, and adds it to
  the `brand.json` payload for programmatic consumers.

## The `essence` object

```js
{
  axes: {
    // each -1..+1, with the human-readable readings that moved it
    warmth: { value, reading },  // warm (+) ↔ cool (−)
    energy: { value, reading },  // playful/kinetic (+) ↔ calm/serious (−)
    weight: { value, reading },  // bold/assertive (+) ↔ subtle/quiet (−)
    era:    { value, reading },  // modern (+) ↔ classic (−)
  },
  archetype: { name, confidence, runnerUp },  // nearest of 12 Jungian archetypes
  adjectives: [ 'string', ... ],              // 3–5, from axis poles + archetype
  positioning: 'one sentence with real values filled in',
  evidence: [ 'Sharp 2px radii + 900-weight display → bold, modern', ... ],
}
```

## Axis formulas (deterministic)

All inputs already exist on `design`. Each axis is the mean of its component
sub-scores, clamped to [-1, 1]. Components default to 0 when their signal is
absent.

- **warmth** — from the brand hue (primary → accent fallback), weighted by
  saturation so near-greys read neutral. `cos(hue − 40°)` peaks warm at orange
  (~40°), coolest at azure (~220°).
- **energy** — mean of: tempo (faster median motion duration → +), roundness
  (median border radius: 0px → −1, ≥24px → +1), saturation of brand colours,
  bounce (spring/bounce/elastic easings or playful `motion.feel` → +).
- **weight** — mean of: max font weight (≥800 → +1, ≤400 → −1), brand-vs-surface
  luminance contrast, saturation.
- **era** — mean of: typeface class (serif → classic, sans → modern, mono/
  geometric → most modern), `materialLanguage.label` mapping (glass/gradient/
  aurora → +, editorial/print/vintage → −).

## Archetype selection

12 Jungian archetypes each carry a canonical `[warmth, energy, weight, era]`
fingerprint. Compute Euclidean distance from the brand's fingerprint to each;
nearest = `name`, second = `runnerUp`, `confidence = clamp(1 − dist / maxDist)`.
Deterministic, explainable, and the `evidence[]` array narrates which signals
pushed which axis.

## Rendering

- **HTML**: `buildEssence(design, accent)` renders Chapter 00 before About —
  large positioning statement set in the display face, an archetype line with
  confidence, the adjective set as chips, a four-axis meter strip, and the
  evidence list. TOC gains a `00 · Essence` entry; chapters 01–13 keep their
  numbers (no renumber).
- **Markdown**: a compact essence block at the top of the document.
- **JSON**: `essence` added to the `brand.json` payload.

## Testing (the gate)

`tests/brand-essence.test.js`, Node's built-in runner, covering:
1. A warm/playful/bold mock lands warm+, energy+, and a fitting archetype.
2. A cool/restrained/serif mock lands cool−, era−, low energy.
3. Archetype selection returns a name from the 12 with a 0..1 confidence.
4. An empty `{}` design degrades to neutral axes and never throws.
5. `formatBrandBook` output contains the Essence chapter + positioning text.

Plus the existing `npm test` suite stays green.
