# Extraction Theatre + Gallery Expansion — Design Spec

**Date:** 2026-06-25
**Target release:** designlang 13.0.0
**Branch base:** `feat/fidelity-loop`

## Goal

Grow GitHub stars (3.3k → 5k) by giving the website a recordable, shareable
"wow in 10 seconds" moment that *proves* the product works, plus tripling the
gallery so the site has more browseable proof. Two shippable features:

1. **Live Extraction Theatre** — paste a URL and watch the *real* headless
   Chromium open the page and read its design system, live, streamed into a
   framed split stage: the live browser on the left, the design system
   assembling itself on the right as tokens "fly" off the page.
2. **Gallery expansion** — 13 → ~36 curated, recognizable sites with real
   grades, plus sort/filter and a "watch it extract" entry-point.

Constraint (project rule): **free / extraction-only, no paid AI**. The Theatre
streams what the browser already does; it adds no model calls. Stays
deterministic.

## Non-goals

- No LLM in the loop. No new paid dependency.
- Not rebuilding the studio/brand-book; the Theatre links to them, reuses them.
- Not a general video pipeline — a throttled JPEG screencast reel, capped.

## Feature 1 — Live Extraction Theatre

### Components & boundaries

- **`website/lib/screencast.js`** — wraps a Playwright CDP session.
  - `startScreencast(page, onFrame, opts)` → begins `Page.startScreencast`
    (`format:'jpeg'`, throttled fps, `maxWidth/maxHeight` downscale), acks each
    frame, calls `onFrame({ seq, t, data })`. Returns `stop()`.
  - Pure orchestration over an injected CDP client so it unit-tests without a
    real browser (inject a fake client that emits frame events).
  - Guards: max fps (default ~6), max frames / max duration cap, jpeg quality.
- **`website/app/api/extract/route.js`** — extend the existing NDJSON stream.
  - New `theatre` flag (query `?theatre=1` or body) — **off by default**, so the
    existing token-only consumers (`/api/motion`, studio, etc.) are unchanged.
  - When on, interleave `{ type:'frame', seq, t, data }` events between the
    existing `stage` / `token` / `summary` / `files` events.
  - Screencast lifecycle bound to the extraction: start after navigation, stop
    before the function returns. Failure to start a screencast must NOT fail the
    extraction — degrade to token-only.
- **`website/lib/reel.js`** — record + replay.
  - On a fresh (uncached) theatre run, collect frames + the event timeline into
    a compact reel and persist to Blob keyed by URL hash (`reel:<hash>`).
  - `loadReel(hash)` returns the timeline; `/watch` and `/x/[hash]` replay it
    with original inter-event timing so cached runs still look live.
- **Theatre UI** (`website/app/_theatre/`):
  - `Theatre.jsx` — owns the NDJSON reader + a reducer over events; tolerates
    out-of-order / missing frames and a terminal `error` event.
  - `BrowserStage.jsx` — paints the latest JPEG to a canvas inside a faux
    browser chrome (URL bar = target, traffic-light dots, scan glow).
  - `SystemRail.jsx` — `PaletteWell`, `TypeSpecimen`, `SpacingScale`,
    `MotionPulse`; each populates from real `token` events.
  - `TokenFlight.jsx` — animates a chip from the stage to its rail slot using
    the existing `motion` dependency.
  - `StageTicker.jsx` — crawl → colors → type → … progress.
  - Honors `prefers-reduced-motion` (cross-fade, no flights). If frames never
    arrive, falls back to the token-only "system lands" view — no regression.

### Data flow

`submit URL` → `POST /api/extract?theatre=1` → Chromium navigates + screencast
starts → interleaved `frame` + `stage` + `token` events stream → `Theatre`
reducer drives `BrowserStage` (live frames) and `SystemRail` (tokens fly in) →
on `files`, show the finished system + CTAs (copy tokens, open brand book,
**share link** to `/x/[hash]`). Fresh runs also record the reel to Blob.

### Placement

- **Homepage hero** becomes the Theatre. Autoplays a pre-recorded flagship reel
  (e.g. stripe.com) until the visitor submits their own URL.
- **`/watch`** — full-bleed Theatre tuned for recording/sharing; `?u=<url>`
  deep-link; replays `/x/[hash]`.

### Error handling / cost guards

- Browserless quota/CDP failure → fall back to `@sparticuz` bundled Chromium;
  if screencast still can't start → token-only degrade.
- Reuse `rate-limit.js` (add a per-IP theatre frame budget) and `url-safety.js`
  (SSRF guard) unchanged. Cap reel size + duration; stream frames only during
  active phases.

### Testing

- Unit: screencast throttle/ack/cap (fake CDP client); event interleave
  ordering; reel record→replay round-trip; reduced-motion branch selection.
- Component/reducer: out-of-order frames, missing frames, terminal error.
- E2E (Playwright, already a dep): `/watch` renders frames + rail populates +
  share link appears.

## Feature 2 — Gallery expansion

- Grow the `FEATURED` array in `website/app/gallery/page.js` from 13 → ~36
  recognizable sites. `primary/accent/bg/grade` for each comes from actually
  running `designlang grade <site>` (real, deterministic) — not invented.
- Light polish: sort/filter by grade, a few industry tags, and a "watch it
  extract" link from each card into the Theatre (`/watch?u=`).
- Keep the existing `listRecent()` live-runs section.

## Rollout — ~8 PRs, many small commits, **no Claude co-author**

| PR | Branch | Scope |
|----|--------|-------|
| PR0 | `chore/theatre-spec` | this spec + CHANGELOG scaffold |
| PR1 | `feat/theatre-capture` | `screencast.js` + unit tests |
| PR2 | `feat/theatre-stream` | interleave frame events, `theatre` flag, back-compat |
| PR3 | `feat/theatre-reel` | record reel + Blob replay |
| PR4 | `feat/theatre-ui` | BrowserStage + SystemRail + TokenFlight + StageTicker |
| PR5 | `feat/theatre-home` | homepage hero swap + autoplay reel |
| PR6 | `feat/theatre-watch` | `/watch` page + share/OG + `/x` replay |
| PR7 | `feat/gallery-expand` | +23 sites (batched) + sort/filter/tags |
| PR8 | `docs/theatre-1300` | README + site copy + CHANGELOG + bump to 13.0.0 |

Each PR branches off `feat/fidelity-loop`, merges back with a real merge commit
(commits preserved, not squashed).

## Success criteria

- `node --test` green throughout.
- Theatre renders real streamed frames on `/watch` for a fresh URL and degrades
  cleanly when screencast is unavailable.
- Homepage hero autoplays a reel; visitor URL triggers a live run.
- Gallery shows ~36 sites with real grades, sortable/filterable.
- Version is 13.0.0; plugin version in sync; CHANGELOG + README updated.
