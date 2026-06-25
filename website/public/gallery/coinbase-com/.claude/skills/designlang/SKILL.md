---
name: designlang-tokens
description: Use when styling UI for coinbase.com — references the extracted design system tokens instead of inventing colors, spacing, or typography.
---

# designlang tokens
Source: https://coinbase.com
Extracted by designlang v7.0.0 on 2026-06-25T08:28:07.567Z

## Semantic tokens (use these)
- color.action.primary: #0000ee
- color.surface.default: #ffffff
- color.text.body: #313131
- radius.control: 50px
- typography.body.fontFamily: Arial

## Regions
- footer

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
