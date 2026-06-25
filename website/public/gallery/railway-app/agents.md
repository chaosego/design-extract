# Agent instructions — design system

This project follows the design system extracted from https://railway.app.
Any coding agent working here must use the tokens below and avoid inventing new ones.
Source: https://railway.app
Extracted by designlang v7.0.0 on 2026-06-25T08:29:38.182Z

## Semantic tokens (use these)
- color.action.primary: #59497a
- color.surface.default: #13111c
- color.text.body: #ffffff
- radius.control: 4px
- typography.body.fontFamily: Inter

## Regions
- nav
- hero
- testimonials
- content
- content
- testimonials
- testimonials
- pricing
- pricing
- nav
- footer

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
