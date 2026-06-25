---
name: designlang-tokens
description: Use when styling UI for framer.com — references the extracted design system tokens instead of inventing colors, spacing, or typography.
---

# designlang tokens
Source: https://framer.com
Extracted by designlang v7.0.0 on 2026-06-25T08:25:38.646Z

## Semantic tokens (use these)
- color.action.primary: #0066ff
- color.surface.default: #000000
- color.text.body: #000000
- radius.control: 1px
- typography.body.fontFamily: Inter

## Regions
- nav
- pricing
- hero
- nav
- testimonials
- nav
- content
- nav
- testimonials
- nav
- hero
- nav
- content
- nav
- nav
- footer

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
