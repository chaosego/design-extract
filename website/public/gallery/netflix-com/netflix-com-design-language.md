# Design Language: Netflix United Arab Emirates - Watch TV Shows Online, Watch Movies Online

> Extracted from `https://netflix.com` on June 25, 2026
> 926 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#e50914` | rgb(229, 9, 20) | hsl(357, 92%, 47%) | 16 |
| Secondary | `#3860be` | rgb(56, 96, 190) | hsl(222, 54%, 48%) | 14 |
| Accent | `#468254` | rgb(70, 130, 84) | hsl(134, 30%, 39%) | 2 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#ffffff` | hsl(0, 0%, 100%) | 1109 |
| `#000000` | hsl(0, 0%, 0%) | 557 |
| `#333333` | hsl(0, 0%, 20%) | 133 |
| `#232323` | hsl(0, 0%, 14%) | 26 |
| `#414141` | hsl(0, 0%, 25%) | 22 |
| `#555555` | hsl(0, 0%, 33%) | 21 |
| `#f4f4f4` | hsl(0, 0%, 96%) | 5 |
| `#161616` | hsl(0, 0%, 9%) | 4 |
| `#808080` | hsl(0, 0%, 50%) | 4 |
| `#c1c1c1` | hsl(0, 0%, 76%) | 3 |
| `#707070` | hsl(0, 0%, 44%) | 1 |
| `#d8d8d8` | hsl(0, 0%, 85%) | 1 |

### Background Colors

Used on large-area elements: `#000000`, `#2d2d2d`

### Text Colors

Text color palette: `#000000`, `#ffffff`, `#e50914`, `#414141`, `#333333`, `#555555`, `#3860be`

### Gradients

```css
background-image: radial-gradient(11% 56% at 17% 50%, rgb(70, 21, 24) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(11% 56% at 83% 50%, rgb(70, 21, 24) 0%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(111, 24, 29) 50%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.79) 8.333%, rgba(0, 0, 0, 0.757) 16.67%, rgba(0, 0, 0, 0.7) 25%, rgba(0, 0, 0, 0.624) 33.33%, rgba(0, 0, 0, 0.52) 41.67%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.28) 58.33%, rgba(0, 0, 0, 0.176) 66.67%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.043) 83.33%, rgba(0, 0, 0, 0.01) 91.67%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(7deg, rgba(0, 0, 0, 0.85) 10%, rgba(0, 0, 0, 0.847) 17.25%, rgba(0, 0, 0, 0.835) 24.5%, rgba(0, 0, 0, 0.82) 31.75%, rgba(0, 0, 0, 0.796) 39%, rgba(0, 0, 0, 0.765) 46.25%, rgba(0, 0, 0, 0.725) 53.5%, rgba(0, 0, 0, 0.686) 60.75%, rgba(0, 0, 0, 0.655) 68%, rgba(0, 0, 0, 0.63) 75.25%, rgba(0, 0, 0, 0.616) 82.5%, rgba(0, 0, 0, 0.604) 89.75%, rgba(0, 0, 0, 0.6) 97%);
```

```css
background-image: radial-gradient(50% 500% at 50% -420%, rgba(64, 97, 231, 0.4) 80%, rgba(0, 0, 0, 0.1) 100%), none;
```

```css
background-image: linear-gradient(149deg, rgb(25, 34, 71) 0%, rgb(33, 14, 23) 96.86%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#ffffff` | text, border, background | 1109 |
| `#000000` | text, background, border | 557 |
| `#333333` | background, text, border | 133 |
| `#232323` | background | 26 |
| `#414141` | text, border, background | 22 |
| `#555555` | text, border | 21 |
| `#e50914` | text, border, background | 16 |
| `#3860be` | text, border, background | 14 |
| `#f4f4f4` | background | 5 |
| `#161616` | background | 4 |
| `#808080` | border | 4 |
| `#c1c1c1` | border | 3 |
| `#468254` | background | 2 |
| `#32ae88` | border | 1 |
| `#707070` | border | 1 |
| `#d8d8d8` | border | 1 |

## Typography

### Font Families

- **Netflix Sans** — used for all (572 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 100px | 6.25rem | 400 | normal | normal | span |
| 56px | 3.5rem | 700 | 70px | normal | h1 |
| 24px | 1.5rem | 500 | 24px | normal | button, div, svg, path |
| 21.92px | 1.37rem | 600 | 26.304px | normal | h2 |
| 20px | 1.25rem | 500 | normal | normal | p |
| 16px | 1rem | 400 | normal | normal | html, head, meta, title |
| 14.4px | 0.9rem | 400 | 38px | 0.144px | button, svg, title, g |
| 14px | 0.875rem | 500 | 14px | normal | a, div, ul, li |
| 13.6px | 0.85rem | 400 | 27.2px | normal | div, svg, path, span |
| 13.008px | 0.813rem | 400 | normal | normal | p, br, a, div |
| 13px | 0.8125rem | 400 | normal | normal | p, span |
| 12.8px | 0.8rem | 400 | normal | normal | input, span |
| 12px | 0.75rem | 400 | 14px | normal | span |
| 10px | 0.625rem | 400 | 16px | normal | div, svg, path |
| 0px | 0rem | 400 | normal | normal | div, button, svg, title |

### Heading Scale

```css
h1 { font-size: 56px; font-weight: 700; line-height: 70px; }
h2 { font-size: 24px; font-weight: 500; line-height: 24px; }
h2 { font-size: 21.92px; font-weight: 600; line-height: 26.304px; }
h3 { font-size: 16px; font-weight: 400; line-height: normal; }
h3 { font-size: 14px; font-weight: 500; line-height: 14px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (865x), `700` (31x), `500` (17x), `600` (13x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-10 | 10px | 0.625rem |
| spacing-12 | 12px | 0.75rem |
| spacing-20 | 20px | 1.25rem |
| spacing-22 | 22px | 1.375rem |
| spacing-24 | 24px | 1.5rem |
| spacing-27 | 27px | 1.6875rem |
| spacing-30 | 30px | 1.875rem |
| spacing-32 | 32px | 2rem |
| spacing-34 | 34px | 2.125rem |
| spacing-64 | 64px | 4rem |
| spacing-96 | 96px | 6rem |
| spacing-100 | 100px | 6.25rem |
| spacing-128 | 128px | 8rem |
| spacing-148 | 148px | 9.25rem |
| spacing-314 | 314px | 19.625rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 31 |
| md | 8px | 44 |
| lg | 16px | 4 |
| xl | 20px | 2 |
| full | 50px | 2 |

## Box Shadows

**sm** — blur: 5px
```css
box-shadow: rgb(128, 128, 128) 0px 0px 5px 0px;
```

**sm** — blur: 4px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px;
```

**md** — blur: 5px
```css
box-shadow: rgb(199, 197, 199) -3px -3px 5px -2px;
```

**md** — blur: 12px
```css
box-shadow: rgb(199, 197, 199) 0px 0px 12px 2px;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| 400px | 400px | min-width |
| sm | 425px | max-width |
| sm | 426px | min-width |
| sm | 530px | max-width |
| sm | 532px | max-width |
| 550px | 550px | max-width |
| sm | 600px | max-width |
| sm | 640px | max-width |
| md | 767px | max-width |
| md | 768px | min-width |
| md | 769px | min-width |
| 890px | 890px | min-width |
| 896px | 896px | max-width |
| 897px | 897px | min-width |
| lg | 960px | min-width |
| lg | 1023px | max-width |
| lg | 1024px | min-width |
| xl | 1280px | min-width |
| 2xl | 1600px | min-width |
| 1920px | 1920px | min-width |
| 2560px | 2560px | min-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.32, 0.94, 0.6, 1)`, `cubic-bezier(0.4, 0, 0.68, 0.06)`, `ease`

**Durations:** `0.25s`, `0.2s`, `0.4s`, `0.3s`, `0.1s`

### Common Transitions

```css
transition: all;
transition: top 0.25s cubic-bezier(0.32, 0.94, 0.6, 1), font-size 0.25s cubic-bezier(0.32, 0.94, 0.6, 1), line-height 0.25s cubic-bezier(0.32, 0.94, 0.6, 1);
transition: background-color 0.25s cubic-bezier(0.4, 0, 0.68, 0.06), border-color 0.25s cubic-bezier(0.4, 0, 0.68, 0.06);
transition: top 0.25s cubic-bezier(0.4, 0, 0.68, 0.06), font-size 0.25s cubic-bezier(0.4, 0, 0.68, 0.06), line-height 0.25s cubic-bezier(0.4, 0, 0.68, 0.06);
transition: transform 0.2s ease-in-out;
transition: transform 0.4s ease-in-out;
transition: opacity 0.4s ease-in-out;
transition: background-color 0.25s cubic-bezier(0.4, 0, 0.68, 0.06), border-radius 0.25s cubic-bezier(0.4, 0, 0.68, 0.06);
transition: transform 0.25s cubic-bezier(0.32, 0.94, 0.6, 1);
transition: 0.25s cubic-bezier(0.32, 0.94, 0.6, 1);
```

### Keyframe Animations

**animation-1o3pzgb-autofillStart**
```css
@keyframes animation-1o3pzgb-autofillStart {
}
```

**animation-1o3pzgb-autofillStart**
```css
@keyframes animation-1o3pzgb-autofillStart {
}
```

**animation-1o3pzgb-autofillStart**
```css
@keyframes animation-1o3pzgb-autofillStart {
}
```

**animation-1o3pzgb-autofillStart**
```css
@keyframes animation-1o3pzgb-autofillStart {
}
```

**animation-1o3pzgb-autofillStart**
```css
@keyframes animation-1o3pzgb-autofillStart {
}
```

**animation-1o3pzgb-autofillStart**
```css
@keyframes animation-1o3pzgb-autofillStart {
}
```

**animation-und0r9-autofillEnd**
```css
@keyframes animation-und0r9-autofillEnd {
}
```

**animation-und0r9-autofillEnd**
```css
@keyframes animation-und0r9-autofillEnd {
}
```

**loading**
```css
@keyframes loading {
  0% { background-color: rgb(35, 35, 35); }
  40% { background-color: rgb(35, 35, 35); }
  70% { background-color: rgb(65, 65, 65); }
  90% { background-color: rgb(35, 35, 35); }
}
```

**loading**
```css
@keyframes loading {
  0% { background-color: rgb(35, 35, 35); }
  40% { background-color: rgb(35, 35, 35); }
  70% { background-color: rgb(65, 65, 65); }
  90% { background-color: rgb(35, 35, 35); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (30 instances)

```css
.buttons {
  background-color: rgb(35, 35, 35);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 8px;
}
```

### Cards (2 instances)

```css
.cards {
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (13 instances)

```css
.inputs {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  border-radius: 0px;
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (26 instances)

```css
.links {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 400;
}
```

### Navigation (7 instances)

```css
.navigation {
  background-color: rgb(0, 0, 0);
  color: rgb(51, 51, 51);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (3 instances)

```css
.footer {
  background-color: rgb(244, 244, 244);
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (1 instances)

```css
.modals {
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Dropdowns (5 instances)

```css
.dropdowns {
  background-color: rgb(244, 244, 244);
  border-radius: 0px;
  border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(215, 215, 215) rgba(0, 0, 0, 0);
  padding-top: 12px;
}
```

### Tabs (8 instances)

```css
.tabs {
  background-color: rgb(244, 244, 244);
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
  padding-top: 12px;
  padding-right: 5px;
  border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(215, 215, 215) rgba(0, 0, 0, 0);
  border-radius: 0px;
}
```

### Switches (11 instances)

```css
.switches {
  background-color: rgb(244, 244, 244);
  border-radius: 0px;
  border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(215, 215, 215) rgba(0, 0, 0, 0);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Input — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 24px 16px 8px 16px;
  border-radius: 0px;
  border: 0px solid rgba(0, 0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgb(229, 9, 20);
  color: rgb(255, 255, 255);
  padding: 12px 24px 12px 24px;
  border-radius: 4px;
  border: 0px none rgb(255, 255, 255);
  font-size: 24px;
  font-weight: 500;
```

### Button — 10 instances, 1 variant

**Variant 1** (10 instances)

```css
  background: rgb(35, 35, 35);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 8px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  padding: 0px 0px 0px 0px;
  border-radius: 8px;
  border: 0px none rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-weight: 400;
```

### Button — 6 instances, 1 variant

**Variant 1** (6 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 24px 24px 24px 24px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 24px;
  font-weight: 400;
```

## Layout System

**0 grid containers** and **117 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 0px |
| 1920px | 148px |
| 588px | 0px |

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 8x |
| row/wrap | 49x |
| row/nowrap | 53x |
| column/wrap | 7x |

**Gap values:** `2px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 6 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#ffffff` | `#e50914` | 4.79:1 | AAA |

## Design System Score

**Overall: 87/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 82/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance

**Issues:**
- 49 !important rules — prefer specificity over overrides
- 86% of CSS is unused — consider purging
- 2295 duplicate CSS declarations

## Gradients

**7 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| radial | — | 3 | bold |
| radial | — | 3 | bold |
| linear | 0deg | 3 | bold |
| linear | — | 13 | complex |
| linear | 7deg | 13 | complex |
| radial | — | 3 | bold |
| linear | 149deg | 2 | brand |

```css
background: radial-gradient(11% 56% at 17% 50%, rgb(70, 21, 24) 0%, rgba(0, 0, 0, 0) 100%);
background: radial-gradient(11% 56% at 83% 50%, rgb(70, 21, 24) 0%, rgba(0, 0, 0, 0) 100%);
background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(111, 24, 29) 50%, rgba(0, 0, 0, 0) 100%);
background: linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.79) 8.333%, rgba(0, 0, 0, 0.757) 16.67%, rgba(0, 0, 0, 0.7) 25%, rgba(0, 0, 0, 0.624) 33.33%, rgba(0, 0, 0, 0.52) 41.67%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.28) 58.33%, rgba(0, 0, 0, 0.176) 66.67%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.043) 83.33%, rgba(0, 0, 0, 0.01) 91.67%, rgba(0, 0, 0, 0) 100%);
background: linear-gradient(7deg, rgba(0, 0, 0, 0.85) 10%, rgba(0, 0, 0, 0.847) 17.25%, rgba(0, 0, 0, 0.835) 24.5%, rgba(0, 0, 0, 0.82) 31.75%, rgba(0, 0, 0, 0.796) 39%, rgba(0, 0, 0, 0.765) 46.25%, rgba(0, 0, 0, 0.725) 53.5%, rgba(0, 0, 0, 0.686) 60.75%, rgba(0, 0, 0, 0.655) 68%, rgba(0, 0, 0, 0.63) 75.25%, rgba(0, 0, 0, 0.616) 82.5%, rgba(0, 0, 0, 0.604) 89.75%, rgba(0, 0, 0, 0.6) 97%);
```

## Z-Index Map

**8 unique z-index values** across 2 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 1002,2147483647 | div.d.e.f.a.u.l.t.-.l.t.r.-.i.q.c.d.e.f.-.c.a.c.h.e.-.1.v.h.g.g.h.0. .e.1.i.h.j.o.f.o.0, div.o.n.e.t.r.u.s.t.-.p.c.-.d.a.r.k.-.f.i.l.t.e.r. .o.t.-.h.i.d.e. .o.t.-.f.a.d.e.-.i.n, section |
| base | -1,3 | div.d.e.f.a.u.l.t.-.l.t.r.-.i.q.c.d.e.f.-.c.a.c.h.e.-.1.i.8.l.f.i.h, div.d.e.f.a.u.l.t.-.l.t.r.-.i.q.c.d.e.f.-.c.a.c.h.e.-.w.s.p.s.y.b, div.d.e.f.a.u.l.t.-.l.t.r.-.i.q.c.d.e.f.-.c.a.c.h.e.-.w.s.p.s.y.b |

**Issues:**
- Very high z-index values: 2147483646, 2147483647

## SVG Icons

**9 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| sm | 2 |
| md | 1 |
| lg | 1 |
| xl | 5 |

**Icon colors:** `rgb(229, 9, 20)`, `currentColor`, `url(#paint0_radial_5179_1308)`, `url(#paint1_radial_5179_1308)`, `url(#paint2_linear_5179_1308)`, `url(#paint3_radial_5179_1308)`, `url(#paint4_radial_5179_1308)`, `url(#paint5_radial_5179_1308)`, `url(#paint0_radial_5179_7940)`, `url(#paint1_radial_5179_7940)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| NKufi | self-hosted | 400, 500 | normal |
| GraphikTH | self-hosted | 400, 500 | normal |
| Netflix Sans | self-hosted | 100, 300, 400, 500, 700, 900 | normal |
| Netflix Sans JA | self-hosted | 400, normal | normal |
| Netflix Sans Variable | self-hosted | 100 900 | normal |
| Netflix Sans Debug | self-hosted | 100 900 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 16 | objectFit: fill, borderRadius: 0px, shape: square |
| hero | 1 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (15x), 3.7:1 (1x), 3:2 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `100ms` | 100 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |

### Easing Families

- **ease-out** (20 uses) — `cubic-bezier(0.32, 0.94, 0.6, 1)`
- **ease-in** (11 uses) — `cubic-bezier(0.4, 0, 0.68, 0.06)`
- **ease-in-out** (14 uses) — `ease`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `animation-und0r9-autofillEnd` | custom |  | 4 |
| `animation-und0r9-autofillEnd` | custom |  | 4 |
| `loading` | custom | background-color | 10 |
| `loading` | custom | background-color | 10 |
| `onetrust-fade-in` | fade | opacity | 2 |

## Component Anatomy

### button — 19 instances

**Slots:** label, icon

### input — 2 instances


## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Title Case (tight)

### Top CTA Verbs

- **get** (2)
- **how** (2)
- **watch** (2)
- **teach** (1)
- **the** (1)
- **bhooth** (1)
- **dhurandhar** (1)
- **i** (1)

### Button Copy Patterns

- "get started" (2×)
- "teach you a lesson
1
1" (1×)
- "the polygamist
2
2" (1×)
- "bhooth bangla
3
3" (1×)
- "dhurandhar the revenge (raw & undekha)
4
4" (1×)
- "i will find you
5
5" (1×)
- "sex/life
6
6" (1×)
- "berlin and the lady with an ermine
7
7" (1×)
- "office romance
8
8" (1×)
- "voicemails for isabelle
9
9" (1×)

### Sample Headings

> Privacy Preference Center
> General Description
> Essential Cookies
> First Party Performance and Functionality Cookies
> Third Party Performance and Functionality Cookies
> Cookie List

## Page Intent

**Type:** `landing` (confidence 0.29)
**Description:** Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.

Alternates: legal (0.4), blog-post (0.35)

## Section Roles

Reading order (top→bottom): nav → nav → content → content → content → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.4 |
| 1 | footer | — | 0.95 |
| 2 | nav | Privacy Preference Center | 0.4 |
| 3 | content | Cookie List | 0.3 |
| 4 | content | — | 0.3 |
| 5 | content | — | 0.3 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.178 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 50px |
| backdrop-filter in use | no |
| Gradients | 7 |

## Imagery Style

**Label:** `mixed` (confidence 0.118)
**Counts:** total 17, svg 14, icon 15, screenshot-like 0, photo-like 1
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Netflix Sans` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
