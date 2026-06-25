---
name: designlang-tokens
description: Use when styling UI for planetscale.com — references the extracted design system tokens instead of inventing colors, spacing, or typography.
---

# designlang tokens
Source: https://planetscale.com
Extracted by designlang v7.0.0 on 2026-06-25T08:31:33.183Z

## Semantic tokens (use these)
- color.action.primary: #f2b600
- color.surface.default: #fafafa
- color.text.body: #414141
- radius.control: 9999px
- typography.body.fontFamily: system-ui

## Regions
- nav
- nav
- nav
- content
- content
- footer
- nav

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
