# Design Language: Cal.com | Scheduling Software for Online Bookings

> Extracted from `https://cal.com` on June 25, 2026
> 3541 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#0000ee` | rgb(0, 0, 238) | hsl(240, 100%, 47%) | 448 |
| Secondary | `#0099ff` | rgb(0, 153, 255) | hsl(204, 100%, 50%) | 6 |
| Accent | `#d6ecfe` | rgb(214, 236, 254) | hsl(207, 95%, 92%) | 1 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 5450 |
| `#242424` | hsl(0, 0%, 14%) | 384 |
| `#898989` | hsl(0, 0%, 54%) | 356 |
| `#e5e7eb` | hsl(220, 13%, 91%) | 313 |
| `#ffffff` | hsl(0, 0%, 100%) | 195 |
| `#111111` | hsl(0, 0%, 7%) | 190 |
| `#f4f4f4` | hsl(0, 0%, 96%) | 65 |
| `#374151` | hsl(217, 19%, 27%) | 58 |
| `#d3d3d3` | hsl(0, 0%, 83%) | 48 |
| `#808080` | hsl(0, 0%, 50%) | 10 |
| `#4c5a70` | hsl(217, 19%, 37%) | 9 |
| `#6b7280` | hsl(220, 9%, 46%) | 6 |

### Background Colors

Used on large-area elements: `#f4f4f4`, `#ffffff`, `#f8f9fa`

### Text Colors

Text color palette: `#000000`, `#ffffff`, `#0000ee`, `#292929`, `#111111`, `#242424`, `#898989`, `#101010`, `#6b7280`, `#9ca3af`

### Gradients

```css
background-image: linear-gradient(rgb(41, 41, 41) 0%, rgb(36, 36, 36) 100%);
```

```css
background-image: linear-gradient(rgb(247, 247, 248) 0%, rgb(234, 234, 235) 100%);
```

```css
background-image: linear-gradient(rgb(252, 252, 252) 0%, rgb(255, 255, 255) 100%);
```

```css
background-image: radial-gradient(50% 50%, rgba(255, 255, 255, 0) 87.1499%, rgb(255, 255, 255) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 5450 |
| `#0000ee` | text, border | 448 |
| `#242424` | text, border, background | 384 |
| `#898989` | background, text, border | 356 |
| `#e5e7eb` | background, border | 313 |
| `#ffffff` | text, border, background | 195 |
| `#111111` | text, border, background | 190 |
| `#f4f4f4` | background | 65 |
| `#374151` | text, border, background | 58 |
| `#d3d3d3` | background | 48 |
| `#808080` | background | 10 |
| `#4c5a70` | text | 9 |
| `#0ea5e9` | text, border | 8 |
| `#6701e6` | text | 8 |
| `#6b7280` | text, border | 6 |
| `#9ca3af` | text, border | 6 |
| `#0099ff` | text, border | 6 |
| `#7826b1` | text, border | 4 |
| `#aa61f1` | text, border | 4 |
| `#e9ddfd` | background | 2 |
| `#882c2f` | text, border | 2 |
| `#d85b5f` | text, border | 2 |
| `#0261a2` | text, border | 2 |
| `#f8d7d8` | background | 1 |
| `#d6ecfe` | background | 1 |
| `#767676` | border | 1 |

## Typography

### Font Families

- **Inter** — used for body (247 elements)
- **Cal Sans UI Variable Light** — used for all (233 elements)
- **Times** — used for body (65 elements)
- **Cal Sans** — used for all (43 elements)
- **Matter Regular** — used for body (43 elements)
- **Matter Medium** — used for body (24 elements)
- **Matter SemiBold** — used for headings (8 elements)
- **Roboto Mono** — used for body (3 elements)
- **CUSTOMV2;Cal Sans UI Regular** — used for body (2 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 64px | 4rem | 600 | 70.4px | normal | h1 |
| 48px | 3rem | 600 | 52.8px | normal | h2 |
| 24px | 1.5rem | 600 | 31.2px | normal | p |
| 20px | 1.25rem | 600 | 20px | 0.2px | p |
| 18px | 1.125rem | 300 | 23.4px | -0.2px | h3, p |
| 16px | 1rem | 400 | normal | normal | html, head, meta, title |
| 14px | 0.875rem | 300 | 19.6px | normal | p, a, h3, div |
| 12px | 0.75rem | 400 | normal | normal | body, script, noscript, button |
| 10px | 0.625rem | 400 | 14px | normal | p |
| 9.71px | 0.6069rem | 500 | 11.1px | normal | p |
| 8px | 0.5rem | 400 | 11.2px | normal | p |

### Heading Scale

```css
h1 { font-size: 64px; font-weight: 600; line-height: 70.4px; }
h2 { font-size: 48px; font-weight: 600; line-height: 52.8px; }
h3 { font-size: 18px; font-weight: 300; line-height: 23.4px; }
h2 { font-size: 16px; font-weight: 400; line-height: normal; }
h3 { font-size: 14px; font-weight: 300; line-height: 19.6px; }
h3 { font-size: 12px; font-weight: 400; line-height: normal; }
```

### Body Text

```css
body { font-size: 14px; font-weight: 300; line-height: 19.6px; }
```

### Font Weights in Use

`400` (3190x), `300` (233x), `500` (70x), `600` (48x)

## Spacing

**Base unit:** 4px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-40 | 40px | 2.5rem |
| spacing-48 | 48px | 3rem |
| spacing-80 | 80px | 5rem |
| spacing-96 | 96px | 6rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 35 |
| md | 6px | 11 |
| md | 10px | 2 |
| lg | 16px | 48 |
| full | 29px | 32 |
| full | 40px | 2 |
| full | 100px | 69 |
| full | 120px | 2 |
| full | 1000px | 4 |
| full | 1250px | 2 |
| full | 9999px | 35 |

## Box Shadows

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.15) 0px 2px 0px 0px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgb(255, 255, 255) 0px 2px 0px 0px inset;
```

**xs** — blur: 2.08163px
```css
box-shadow: rgba(0, 0, 0, 0.1) 0px 0.693878px 2.08163px 0px, rgba(0, 0, 0, 0.06) 0px 0px 1.38776px 0px;
```

**xs (inset)** — blur: 1.9px
```css
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset;
```

**sm** — blur: 3px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 1px 3px 0px, rgba(0, 0, 0, 0) 0px 0px 2px 0px;
```

**sm** — blur: 3px
```css
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 0px 2px 0px;
```

**sm** — blur: 5px
```css
box-shadow: rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px;
```

**sm** — blur: 5px
```css
box-shadow: rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.1) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px;
```

**sm** — blur: 5px
```css
box-shadow: rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px;
```

**md** — blur: 8px
```css
box-shadow: rgba(34, 42, 53, 0.05) 0px 4px 8px 0px;
```

**md** — blur: 12px
```css
box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0px;
```

## CSS Custom Properties

### Colors

```css
--sj-tw-shadow-colored: 0 0 #0000;
--sj-tw-border-spacing-x: 0;
--sj-tw-ring-inset: ;
--sj-tw-ring-color: rgba(59,130,246,.5);
--sj-tw-ring-shadow: 0 0 #0000;
--sj-tw-ring-offset-shadow: 0 0 #0000;
--sj-tw-ring-offset-width: 0px;
--sj-tw-ring-offset-color: #fff;
--sj-tw-border-spacing-y: 0;
```

### Spacing

```css
--sj-tw-numeric-spacing: ;
--sj-tw-contain-size: ;
```

### Shadows

```css
--sj-tw-shadow: 0 0 #0000;
--sj-tw-drop-shadow: ;
```

### Other

```css
--sj-tw-backdrop-brightness: ;
--sj-tw-numeric-figure: ;
--sj-tw-contain-paint: ;
--sj-tw-scale-x: 1;
--sj-tw-numeric-fraction: ;
--sj-tw-backdrop-grayscale: ;
--sj-tw-translate-x: 0;
--sj-tw-hue-rotate: ;
--sj-tw-blur: ;
--sj-tw-saturate: ;
--sj-tw-backdrop-sepia: ;
--sj-tw-gradient-via-position: ;
--sj-tw-rotate: 0;
--sj-tw-contain-style: ;
--sj-tw-scroll-snap-strictness: proximity;
--sj-tw-ordinal: ;
--sj-tw-slashed-zero: ;
--sj-tw-pan-x: ;
--sj-tw-contrast: ;
--sj-tw-sepia: ;
--sj-tw-backdrop-invert: ;
--sj-tw-pan-y: ;
--sj-tw-scale-y: 1;
--sj-tw-contain-layout: ;
--sj-tw-backdrop-hue-rotate: ;
--sj-tw-backdrop-opacity: ;
--sj-tw-backdrop-contrast: ;
--sj-tw-translate-y: 0;
--sj-tw-backdrop-saturate: ;
--one-if-corner-shape-supported: 1;
--sj-tw-brightness: ;
--sj-tw-invert: ;
--sj-tw-pinch-zoom: ;
--sj-tw-skew-y: 0;
--sj-tw-skew-x: 0;
--sj-tw-backdrop-blur: ;
--sj-tw-gradient-from-position: ;
--sj-tw-gradient-to-position: ;
--sj-tw-grayscale: ;
```

### Semantic

```css
--sj-tw-shadow-colored: 0 0 #0000;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 640px | min-width |
| md | 768px | min-width |
| md | 809px | max-width |
| md | 810px | min-width |
| lg | 1024px | min-width |
| 1199px | 1199px | max-width |
| 1200px | 1200px | max-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.4, 0, 0.2, 1)`

**Durations:** `0.3s`

### Common Transitions

```css
transition: all;
transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations

**__framer-loading-spin**
```css
@keyframes __framer-loading-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

**pulse**
```css
@keyframes pulse {
  50% { opacity: 0.5; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (4 instances)

```css
.buttons {
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 40px;
}
```

### Cards (155 instances)

```css
.cards {
  background-color: rgb(224, 224, 224);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (1 instances)

```css
.inputs {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-color: rgb(118, 118, 118);
  border-radius: 0px;
  font-size: 12px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (120 instances)

```css
.links {
  color: rgb(17, 17, 17);
  font-size: 16px;
  font-weight: 400;
}
```

### Badges (1 instances)

```css
.badges {
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Avatars (30 instances)

```css
.avatars {
  border-radius: 9999px;
  background-color: rgba(128, 128, 128, 0.14);
}
```

## Layout System

**5 grid containers** and **1263 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1200px | 12px |
| 1280px | 0px |
| 960px | 0px |
| 100% | 12px |
| 640px | 0px |
| 400px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 4-column | 3x |
| 3-column | 1x |
| 2-column | 1x |

### Grid Templates

```css
grid-template-columns: 518px 518px;
gap: 12px;
grid-template-columns: 176px 176px 176px 176px;
gap: 24px;
grid-template-columns: 341.328px 341.328px 341.344px;
gap: 12px;
grid-template-columns: 180px 180px 180px 180px;
gap: 12px;
grid-template-columns: 100px 100px 100px 100px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 748x |
| row/nowrap | 514x |
| row/wrap | 1x |

**Gap values:** `10px`, `12px`, `16px`, `24px`, `2px`, `32px`, `40px`, `48px`, `4px`, `5px`, `8px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 2 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#ffffff` | `#000000` | 21:1 | AAA |
| `#374151` | `#f8f9fa` | 9.78:1 | AAA |

## Design System Score

**Overall: 78/100 (Grade: C)**

| Category | Score |
|----------|-------|
| Color Discipline | 80/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 78/100 |
| Border Radius Consistency | 65/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Well-defined spacing scale, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 9 font families — consider limiting to 2 (heading + body)
- 13 !important rules — prefer specificity over overrides
- 75% of CSS is unused — consider purging
- 7947 duplicate CSS declarations

## Gradients

**4 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |
| linear | — | 2 | brand |
| linear | — | 2 | brand |
| radial | — | 3 | bold |

```css
background: linear-gradient(rgb(41, 41, 41) 0%, rgb(36, 36, 36) 100%);
background: linear-gradient(rgb(247, 247, 248) 0%, rgb(234, 234, 235) 100%);
background: linear-gradient(rgb(252, 252, 252) 0%, rgb(255, 255, 255) 100%);
background: radial-gradient(50% 50%, rgba(255, 255, 255, 0) 87.1499%, rgb(255, 255, 255) 100%);
```

## Z-Index Map

**9 unique z-index values** across 2 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 9999,2147483647 | button, iframe.s.t.a.t.u.s._.h.i.d.d.e.n |
| base | 0,9 | div.f.r.a.m.e.r.-.1.h.u.q.9.c.u, div.f.r.a.m.e.r.-.5.k.l.9.m.h, div.f.r.a.m.e.r.-.w.7.b.a.n.u |

**Issues:**
- Very high z-index values: 2147483647

## SVG Icons

**45 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 9 |
| sm | 12 |
| md | 7 |
| xl | 17 |

**Icon colors:** `rgb(0, 0, 0)`, `rgb(36, 36, 36)`, `rgb(137, 137, 137)`, `#FFC107`, `#FF3D00`, `#4CAF50`, `#4285F4`, `#6B7280`, `#374151`, `#343434`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Cal Sans | self-hosted | 400, 600 | normal |
| Manrope | cdn | 400 | normal |
| Public Sans | cdn | 700 | normal |
| Fragment Mono | cdn | 400 | normal |
| Roboto Mono | cdn | 600 | normal |
| Matter Regular | self-hosted | 400, normal | normal |
| Cal Sans UI Variable Light | self-hosted | 300 | normal |
| Matter SemiBold | self-hosted | 600 | normal |
| Matter Medium | self-hosted | 400, 500, normal | normal |
| Paper Mono Regular | self-hosted | 400 | normal |
| Cal Sans UI Light | self-hosted | 300 | normal |
| Matter Bold | self-hosted | 700 | normal |
| Cal Anim Graph 5 [MORF] Variable Regular | self-hosted | 400 | normal |
| Matter Bold Italic | self-hosted | 700 | italic |
| Matter Regular Italic | self-hosted | 400 | italic |
| Inter | google-fonts | 100, 200, 300, 400, 500, 600, 700, 800, 900 | normal, italic |
| Inter Variable | self-hosted | 400 | normal, italic |
| Inter Display | self-hosted | 100, 200, 300, 400, 500, 600, 700, 800, 900 | normal, italic |

**Google Fonts URL:** `https://fonts.googleapis.com/css?family=Inter:400,700&display=swap`

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 66 | objectFit: cover, borderRadius: 0px, shape: square |
| avatar | 2 | objectFit: cover, borderRadius: 100%, shape: circular |
| hero | 1 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (65x), 2:1 (2x), 2.93:1 (1x), 5.94:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `md` | `300ms` | 300 |

### Easing Families

- **custom** (11 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`

## Page Intent

**Type:** `landing` (confidence 0.45)
**Description:** A fully customizable scheduling software for individuals, businesses taking calls and developers building scheduling platforms where users meet users.

## Section Roles

Reading order (top→bottom): content → testimonial → content

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | content | — | 0.3 |
| 1 | testimonial | — | 0.8 |
| 2 | content | — | 0.3 |

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.343 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 9999px |
| backdrop-filter in use | no |
| Gradients | 4 |

## Imagery Style

**Label:** `mixed` (confidence 0)
**Counts:** total 69, svg 1, icon 27, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** soft

## Component Library

**Detected:** `vuetify` (confidence 0.9)

Evidence:
- 30 v-* classes

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Inter` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
