---
name: designlang-tokens
description: Use when styling UI for mintlify.com — references the extracted design system tokens instead of inventing colors, spacing, or typography.
---

# designlang tokens
Source: https://mintlify.com
Extracted by designlang v7.0.0 on 2026-06-25T08:30:14.469Z

## Semantic tokens (use these)
- color.action.primary: #faf8f5
- color.surface.default: #f9f6f3
- color.text.body: #000000
- radius.control: 2px
- typography.body.fontFamily: inter

## Regions
- nav
- nav
- nav
- testimonials
- cta
- testimonials
- cta
- nav
- content
- nav
- content
- nav
- hero
- nav
- features
- nav
- content
- nav
- cta
- footer

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
