---
name: designlang-tokens
description: Use when styling UI for sentry.io — references the extracted design system tokens instead of inventing colors, spacing, or typography.
---

# designlang tokens
Source: https://sentry.io
Extracted by designlang v7.0.0 on 2026-06-25T08:30:25.790Z

## Semantic tokens (use these)
- color.action.primary: #150f23
- color.surface.default: #1f1633
- color.text.body: #000000
- radius.control: 2px
- typography.body.fontFamily: Rubik

## Regions
- nav
- nav
- testimonials
- testimonials
- content
- testimonials
- features
- features
- features
- features
- content
- testimonials
- content
- cta
- pricing
- footer
- content
- nav
- nav
- nav

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
