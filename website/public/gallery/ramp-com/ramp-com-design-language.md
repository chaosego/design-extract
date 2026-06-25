# Design Language: Unknown Site

> Extracted from `https://ramp.com` on June 25, 2026
> 5 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 10 |

### Text Colors

Text color palette: `#000000`

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border | 10 |

## Typography

### Font Families

- **Times** — used for body (4 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 16px | 1rem | 400 | normal | normal | html, head, meta, body |
| 13px | 0.8125rem | 400 | normal | normal | pre |

### Font Weights in Use

`400` (5x)

## Spacing

| Token | Value | Rem |
|-------|-------|-----|
| spacing-8 | 8px | 0.5rem |
| spacing-13 | 13px | 0.8125rem |

## Transitions & Animations

### Common Transitions

```css
transition: all;
```

## Layout System

**0 grid containers** and **0 flex containers** detected.

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 85/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 85/100 |
| Typography Consistency | 100/100 |
| Spacing System | 55/100 |
| Shadow Consistency | 85/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Clean elevation system, Consistent border radii, Strong accessibility compliance

**Issues:**
- No clear primary brand color detected
- No consistent spacing base unit detected — values appear arbitrary

## Page Intent

**Type:** `landing` (confidence 0.45)

## Material Language

**Label:** `flat` (confidence 0.55)

| Metric | Value |
|--------|-------|
| Avg saturation | 0 |
| Shadow profile | none |
| Avg shadow blur | 0px |
| Max radius | 0px |
| backdrop-filter in use | no |
| Gradients | 0 |

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Times` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
