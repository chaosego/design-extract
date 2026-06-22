---
description: Build a static, shareable gallery from your fidelity reports — an index of score cards plus a permalink page (with an OG card) per clone.
argument-hint: [dir] [--out <dir>] [--title <title>] [--base-url <url>]
---

Run **designlang gallery** to turn the fidelity reports you've generated into a
deployable static site. It scans a directory for `fidelity.json` files (one per
clone), then writes an index grid of score cards plus a permalink page for each
clone — every page embeds the SVG score card and OG/Twitter tags, so a shared
link unfurls the measured number.

```bash
npx designlang gallery $ARGUMENTS
```

If no directory is given it scans `./design-extract-output`. Generate the
reports first with `/fidelity <original> --clone <clone>`.

Outputs (under `--out`, default `./gallery`):

| Path | What it is |
|---|---|
| `index.html` | the gallery grid, best-score first, with summary stats |
| `<slug>/index.html` | a clone's permalink page (card + motion table + correction plan) |
| `<slug>/card.svg` | the shareable score card |

Useful flags via `$ARGUMENTS`:

| Flag | Effect |
|---|---|
| `--out <dir>` | where to write the static site |
| `--title <title>` | gallery heading |
| `--base-url <url>` | absolute base URL so OG image links resolve when deployed |

Deploy the output folder to any static host (Vercel, Netlify, GitHub Pages).
Pair with `/fidelity` to keep the gallery fresh.

Full reference: https://github.com/Manavarya09/design-extract#full-cli-reference
