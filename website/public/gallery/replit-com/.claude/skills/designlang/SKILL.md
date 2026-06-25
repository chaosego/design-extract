---
name: designlang-tokens
description: Use when styling UI for replit.com — references the extracted design system tokens instead of inventing colors, spacing, or typography.
---

# designlang tokens
Source: https://replit.com
Extracted by designlang v7.0.0 on 2026-06-25T08:29:30.217Z

## Semantic tokens (use these)
- color.action.primary: #0051c3
- color.surface.default: #ffffff
- color.text.body: #000000
- radius.control: 2px
- typography.body.fontFamily: Times

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
