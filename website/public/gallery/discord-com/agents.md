# Agent instructions — design system

This project follows the design system extracted from https://discord.com.
Any coding agent working here must use the tokens below and avoid inventing new ones.
Source: https://discord.com
Extracted by designlang v7.0.0 on 2026-06-25T08:27:03.141Z

## Semantic tokens (use these)
- color.action.primary: #5865f2
- color.surface.default: #1a2081
- color.text.body: #000000
- radius.control: 12px
- typography.body.fontFamily: Ggsans

## Regions
- nav
- nav
- nav
- nav
- nav
- nav
- nav
- nav
- nav
- nav
- nav
- nav
- nav
- pricing
- sidebar
- footer
- nav
- nav
- nav
- nav
- nav

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
