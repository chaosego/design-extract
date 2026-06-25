# Agent instructions — design system

This project follows the design system extracted from https://loom.com.
Any coding agent working here must use the tokens below and avoid inventing new ones.
Source: https://loom.com
Extracted by designlang v7.0.0 on 2026-06-25T08:28:20.943Z

## Semantic tokens (use these)
- color.action.primary: #1868db
- color.surface.default: #ffffff
- color.text.body: #000000
- radius.control: 1px
- typography.body.fontFamily: Charlie Text

## Regions
- nav
- nav
- pricing
- pricing
- nav
- pricing
- hero
- nav
- testimonials
- nav
- nav
- content
- nav
- nav
- nav
- nav
- testimonials
- nav
- testimonials
- nav
- testimonials
- nav
- nav
- nav
- nav
- features
- nav
- content
- nav
- content
- nav
- nav
- hero
- nav
- testimonials
- sidebar
- footer
- content
- content
- content
- content

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
