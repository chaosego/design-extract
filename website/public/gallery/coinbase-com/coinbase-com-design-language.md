# Design Language: Just a moment...

> Extracted from `https://coinbase.com` on June 25, 2026
> 46 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#0000ee` | rgb(0, 0, 238) | hsl(240, 100%, 47%) | 4 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#313131` | hsl(0, 0%, 19%) | 84 |
| `#000000` | hsl(0, 0%, 0%) | 2 |
| `#d9d9d9` | hsl(0, 0%, 85%) | 2 |

### Text Colors

Text color palette: `#313131`, `#000000`, `#0000ee`

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#313131` | text, border | 84 |
| `#0000ee` | text, border | 4 |
| `#000000` | text, border | 2 |
| `#d9d9d9` | border | 2 |

## Typography

### Font Families

- **Arial** — used for all (1 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 40px | 2.5rem | 600 | 50px | normal | h1 |
| 24px | 1.5rem | 600 | 30px | normal | h2 |
| 16px | 1rem | 400 | 18.4px | normal | html, head, title, meta |
| 13.3333px | 0.8333rem | 400 | normal | normal | input |
| 12px | 0.75rem | 400 | 18px | normal | div, code, span, a |

### Heading Scale

```css
h1 { font-size: 40px; font-weight: 600; line-height: 50px; }
h2 { font-size: 24px; font-weight: 600; line-height: 30px; }
```

### Body Text

```css
body { font-size: 12px; font-weight: 400; line-height: 18px; }
```

### Font Weights in Use

`400` (43x), `600` (3x)

## Spacing

| Token | Value | Rem |
|-------|-------|-----|
| spacing-8 | 8px | 0.5rem |
| spacing-128 | 128px | 8rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| full | 50px | 4 |

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| xs | 350px | max-width |

## Transitions & Animations

### Common Transitions

```css
transition: all;
```

### Keyframe Animations

**spin**
```css
@keyframes spin {
  100% { transform: rotate(360deg); }
}
```

**scale**
```css
@keyframes scale {
  0%, 100% { transform: none; }
  50% { transform: scale3d(1, 1, 1); }
}
```

**stroke**
```css
@keyframes stroke {
  100% { stroke-dashoffset: 0; }
}
```

**scale-up-center**
```css
@keyframes scale-up-center {
  0% { transform: scale(0.01); }
  100% { transform: scale(1); }
}
```

**fade-in**
```css
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**fireworks**
```css
@keyframes fireworks {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.5); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}
```

**firework**
```css
@keyframes firework {
  0% { opacity: 0; stroke-dashoffset: 8; }
  30% { opacity: 1; }
  100% { stroke-dashoffset: -8; }
}
```

**unspin**
```css
@keyframes unspin {
  40% { stroke-width: 1px; stroke-linecap: square; stroke-dashoffset: 192; }
  100% { stroke-width: 0; }
}
```

**fade-in-animation**
```css
@keyframes fade-in-animation {
  0% { fill: rgb(178, 15, 3); stroke: rgb(178, 15, 3); }
  100% { fill: rgb(242, 242, 242); stroke: rgb(242, 242, 242); }
}
```

**dots**
```css
@keyframes dots {
  0% { content: ""; }
  25% { content: "."; }
  50% { content: ".."; }
  75% { content: "..."; }
  100% { content: ""; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Inputs (1 instances)

```css
.inputs {
  color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  border-radius: 0px;
  font-size: 13.3333px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (2 instances)

```css
.links {
  color: rgb(0, 0, 238);
  font-size: 12px;
  font-weight: 400;
}
```

### Footer (7 instances)

```css
.footer {
  color: rgb(49, 49, 49);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 12px;
}
```

## Layout System

**1 grid containers** and **5 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 960px | 32px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 1-column | 1x |

### Grid Templates

```css
grid-template-columns: 896px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 2x |
| row/nowrap | 3x |

**Gap values:** `16px`, `8px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 86/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 100/100 |
| Spacing System | 55/100 |
| Shadow Consistency | 85/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Clean elevation system, Consistent border radii, Strong accessibility compliance

**Issues:**
- No consistent spacing base unit detected — values appear arbitrary
- 63% of CSS is unused — consider purging

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 1 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `lds-ring` | rotate | transform | 4 |

## Page Intent

**Type:** `landing` (confidence 0.31)

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | footer | — | 0.4 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.25 |
| Shadow profile | none |
| Avg shadow blur | 0px |
| Max radius | 50px |
| backdrop-filter in use | no |
| Gradients | 0 |

## Imagery Style

**Label:** `icon-only` (confidence 0.6)
**Counts:** total 1, svg 0, icon 1, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Arial` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
