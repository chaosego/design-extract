# Design Language: Framer: AI website builder for professional sites

> Extracted from `https://framer.com` on June 25, 2026
> 3672 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#0066ff` | rgb(0, 102, 255) | hsl(216, 100%, 50%) | 1 |
| Secondary | `#0000ee` | rgb(0, 0, 238) | hsl(240, 100%, 47%) | 746 |
| Accent | `#0099ff` | rgb(0, 153, 255) | hsl(204, 100%, 50%) | 56 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 5598 |
| `#ffffff` | hsl(0, 0%, 100%) | 622 |
| `#999999` | hsl(0, 0%, 60%) | 370 |
| `#242424` | hsl(0, 0%, 14%) | 75 |
| `#666666` | hsl(0, 0%, 40%) | 54 |
| `#111111` | hsl(0, 0%, 7%) | 30 |
| `#cccccc` | hsl(0, 0%, 80%) | 24 |
| `#303030` | hsl(0, 0%, 19%) | 11 |
| `#878787` | hsl(0, 0%, 53%) | 3 |
| `#444444` | hsl(0, 0%, 27%) | 2 |
| `#1a1a1a` | hsl(0, 0%, 10%) | 1 |
| `#eeeeee` | hsl(0, 0%, 93%) | 1 |

### Background Colors

Used on large-area elements: `#000000`, `#111111`, `#171717`, `#0099ff`, `#ffffff`

### Text Colors

Text color palette: `#000000`, `#0000ee`, `#ffffff`, `#999999`, `#9a9997`, `#666666`, `#444444`, `#cccccc`, `#0099ff`, `#00bb88`

### Gradients

```css
background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);
```

```css
background-image: linear-gradient(90deg, rgb(230, 243, 255) 0%, rgb(0, 153, 255) 72.274%, rgb(0, 102, 255) 99.5706%);
```

```css
background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 96.7656%);
```

```css
background-image: linear-gradient(173deg, rgb(255, 255, 255) 32%, rgba(0, 0, 0, 0.1) 74%);
```

```css
background-image: linear-gradient(90deg, rgba(0, 153, 255, 0.1) 0%, rgba(28, 28, 28, 0.5) 61%);
```

```css
background-image: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 5598 |
| `#0000ee` | text, border | 746 |
| `#ffffff` | text, border, background | 622 |
| `#999999` | text, border, background | 370 |
| `#242424` | background, text, border | 75 |
| `#0099ff` | background, border, text | 56 |
| `#666666` | background, text, border | 54 |
| `#111111` | background | 30 |
| `#00bb88` | background, text, border | 30 |
| `#cccccc` | text, border | 24 |
| `#303030` | background | 11 |
| `#d67a5c` | text, border | 10 |
| `#9869fd` | background, text, border | 5 |
| `#4cd963` | background, text, border | 4 |
| `#878787` | background | 3 |
| `#444444` | text, border | 2 |
| `#8856ff` | text, border | 2 |
| `#3a92fd` | background | 2 |
| `#ff0022` | background | 1 |
| `#ffbb00` | background | 1 |
| `#0066ff` | background | 1 |
| `#1a1a1a` | background | 1 |
| `#eeeeee` | background | 1 |

## Typography

### Font Families

- **Inter** — used for all (304 elements)
- **Inter Variable** — used for all (169 elements)
- **Times** — used for body (61 elements)
- **Input Mono Regular** — used for body (32 elements)
- **GT Walsheim Medium** — used for all (10 elements)
- **Input Mono Bold** — used for body (8 elements)
- **Inter Medium** — used for body (4 elements)
- **JetBrains Mono** — used for body (1 elements)
- **Inter Framer Regular** — used for body (1 elements)
- **Inter Framer SemiBold** — used for body (1 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 68px | 4.25rem | 500 | 68px | -3.4px | h3 |
| 54px | 3.375rem | 500 | 54px | -2.16px | h1, h4, span |
| 44px | 2.75rem | 500 | 48.4px | -1.76px | h2 |
| 20px | 1.25rem | 400 | 24px | -0.6px | p, h6 |
| 18px | 1.125rem | 400 | 23.4px | -0.01px | h3, p, mark, span |
| 17px | 1.0625rem | 400 | 20.4px | -0.6px | p |
| 16px | 1rem | 400 | normal | normal | html, head, meta, title |
| 15px | 0.9375rem | 400 | 19.5px | -0.01px | p |
| 14px | 0.875rem | 400 | 14px | -0.01px | p, a, span, br |
| 13px | 0.8125rem | 500 | 20.8px | normal | p, span |
| 12px | 0.75rem | 400 | normal | normal | body, script, div, style |
| 10px | 0.625rem | 500 | 14px | normal | p |
| 9px | 0.5625rem | 700 | 10.8px | normal | p |
| 7px | 0.4375rem | 400 | 7px | 0.21px | p |
| 6px | 0.375rem | 400 | 6px | normal | p |

### Heading Scale

```css
h3 { font-size: 68px; font-weight: 500; line-height: 68px; }
h1 { font-size: 54px; font-weight: 500; line-height: 54px; }
h2 { font-size: 44px; font-weight: 500; line-height: 48.4px; }
h6 { font-size: 20px; font-weight: 400; line-height: 24px; }
h3 { font-size: 18px; font-weight: 400; line-height: 23.4px; }
```

### Body Text

```css
body { font-size: 12px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (3352x), `500` (273x), `600` (31x), `700` (16x)

## Spacing

**Base unit:** 5px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-20 | 20px | 1.25rem |
| spacing-25 | 25px | 1.5625rem |
| spacing-30 | 30px | 1.875rem |
| spacing-40 | 40px | 2.5rem |
| spacing-45 | 45px | 2.8125rem |
| spacing-50 | 50px | 3.125rem |
| spacing-55 | 55px | 3.4375rem |
| spacing-60 | 60px | 3.75rem |
| spacing-64 | 64px | 4rem |
| spacing-100 | 100px | 6.25rem |
| spacing-120 | 120px | 7.5rem |
| spacing-160 | 160px | 10rem |
| spacing-200 | 200px | 12.5rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 1px | 4 |
| sm | 4px | 26 |
| md | 7px | 1 |
| md | 10px | 13 |
| lg | 14px | 2 |
| xl | 18px | 7 |
| xl | 21px | 1 |
| full | 25px | 10 |
| full | 30px | 1 |
| full | 50px | 4 |
| full | 100px | 19 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgb(17, 17, 17) 0px 0px 0px 2px;
```

**sm** — blur: 0px
```css
box-shadow: rgb(17, 17, 17) 0px 0px 0px 1.5px;
```

**xs** — blur: 2px
```css
box-shadow: rgba(0, 153, 255, 0.15) 0px 1px 2px 0px, rgba(0, 153, 255, 0.2) 0px 2px 4px 0px;
```

**xs** — blur: 2px
```css
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
```

**sm** — blur: 4px
```css
box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
```

**sm** — blur: 6px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
```

**md** — blur: 5px
```css
box-shadow: rgba(0, 153, 255, 0.2) 0px 5px 5px 0px;
```

**md** — blur: 8px
```css
box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 8px 0px;
```

**lg (inset)** — blur: 20px
```css
box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px 0px, rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset;
```

**lg (inset)** — blur: 20px
```css
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset;
```

**lg** — blur: 19.2px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 19.2px 0px;
```

**xl** — blur: 25.7333px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 16.0833px 25.7333px 0px;
```

**xl** — blur: 25.7884px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 16.1177px 25.7884px 0px;
```

**xl** — blur: 41.5611px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 25.9757px 41.5611px 0px;
```

**xl** — blur: 41.6389px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 26.0243px 41.6389px 0px;
```

**xl** — blur: 57.4116px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 35.8823px 57.4116px 0px;
```

**xl** — blur: 57.4667px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 35.9167px 57.4667px 0px;
```

**xl** — blur: 64px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 40px 64px 0px;
```

## CSS Custom Properties

### Other

```css
--one-if-corner-shape-supported: 1;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| md | 809px | max-width |
| md | 810px | max-width |
| 1199px | 1199px | max-width |
| 1200px | 1200px | max-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0, 0, 1, 1)`, `ease`

**Durations:** `0.3s`

### Common Transitions

```css
transition: all;
transition: color cubic-bezier(0, 0, 1, 1);
transition: 0.3s ease-in-out;
```

### Keyframe Animations

**__framer-blink-input**
```css
@keyframes __framer-blink-input {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**shimmer-R5demalaaklop**
```css
@keyframes shimmer-R5demalaaklop {
  0%, 0% { background-position: 200% center; }
  100% { background-position: -100% center; }
}
```

**__framer-loading-spin**
```css
@keyframes __framer-loading-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (6 instances)

```css
.buttons {
  background-color: rgba(34, 34, 34, 0.8);
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 8px;
}
```

### Cards (11 instances)

```css
.cards {
  background-color: rgb(0, 153, 255);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (3 instances)

```css
.inputs {
  background-color: rgb(238, 238, 238);
  color: rgb(255, 255, 255);
  border-color: rgb(0, 0, 0);
  border-radius: 0px;
  font-size: 12px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (131 instances)

```css
.links {
  color: rgb(0, 0, 238);
  font-size: 12px;
  font-weight: 400;
}
```

### Navigation (1 instances)

```css
.navigation {
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
}
```

### Footer (1 instances)

```css
.footer {
  background-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 12px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Input — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgba(0, 0, 0, 0);
  font-size: 12px;
  font-weight: 500;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(0, 102, 255);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Button — 4 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgba(34, 34, 34, 0.8);
  color: rgb(0, 0, 0);
  padding: 0px 2px 0px 0px;
  border-radius: 8px;
  border: 0px outset rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
```

**Variant 2** (2 instances)

```css
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 0px 10px 0px 10px;
  border-radius: 8px;
  border: 0px outset rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(34, 34, 34, 0.8);
  color: rgb(0, 0, 0);
  padding: 5px 5px 5px 5px;
  border-radius: 8px;
  border: 0px outset rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(238, 238, 238);
  color: rgb(0, 0, 0);
  padding: 10px 10px 10px 10px;
  border-radius: 8px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 600;
```

## Layout System

**3 grid containers** and **1343 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1200px | 0px |
| 100% | 0px |
| 1000px | 10px |
| 1400px | 0px |
| 1500px | 0px |
| 1240px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 4-column | 1x |
| 3-column | 1x |
| 6-column | 1x |

### Grid Templates

```css
grid-template-columns: 400px 400px 400px;
grid-template-columns: 147.328px 147.328px 147.328px 147.344px 147.328px 147.328px;
gap: 0px 40px;
grid-template-columns: 135px 135px 135px 135px;
gap: 40px 20px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 724x |
| row/nowrap | 619x |

**Gap values:** `0px 40px`, `1.6px 0.3px`, `100px`, `10px`, `10px 15px`, `11px`, `12px`, `15px`, `20px`, `25px`, `2px`, `30px`, `3px`, `40px`, `40px 20px`, `4px`, `55px`, `5px`, `60px`, `6px`, `7px`, `8px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 78/100 (Grade: C)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 78/100 |
| Border Radius Consistency | 65/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Strong accessibility compliance

**Issues:**
- 10 font families — consider limiting to 2 (heading + body)
- 16 !important rules — prefer specificity over overrides
- 50% of CSS is unused — consider purging
- 12508 duplicate CSS declarations

## Gradients

**6 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 90deg | 2 | brand |
| linear | 90deg | 3 | bold |
| linear | 90deg | 2 | brand |
| linear | 173deg | 2 | brand |
| linear | 90deg | 2 | brand |
| linear | 270deg | 2 | brand |

```css
background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);
background: linear-gradient(90deg, rgb(230, 243, 255) 0%, rgb(0, 153, 255) 72.274%, rgb(0, 102, 255) 99.5706%);
background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 96.7656%);
background: linear-gradient(173deg, rgb(255, 255, 255) 32%, rgba(0, 0, 0, 0.1) 74%);
background: linear-gradient(90deg, rgba(0, 153, 255, 0.1) 0%, rgba(28, 28, 28, 0.5) 61%);
```

## Z-Index Map

**18 unique z-index values** across 4 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 1000,2147483647 | div, iframe.s.t.a.t.u.s._.h.i.d.d.e.n |
| dropdown | 100,854 | div, div, div |
| sticky | 10,99 | div.f.r.a.m.e.r.-.1.w.3.9.5.5.6.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.m.h.x.k.v.s, div.f.r.a.m.e.r.-.1.s.5.l.r.p.g |
| base | 0,8 | div, div.f.r.a.m.e.r.-.1.g.y.v.5.v.7, div.f.r.a.m.e.r.-.2.q.j.8.3.h |

**Issues:**
- Very high z-index values: 2147483647

## SVG Icons

**59 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 30 |
| sm | 9 |
| md | 16 |
| lg | 4 |

**Icon colors:** `rgb(0, 0, 0)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| EB Garamond | cdn | 400 | normal |
| Geist | cdn | 400, 500, 600 | normal |
| Inter Tight | cdn | 700 | normal |
| Mona Sans | cdn | 500 | normal |
| Space Grotesk | cdn | 400, 700 | normal |
| JetBrains Mono | self-hosted | 400, 500 | normal |
| VT323 | cdn | 400 | normal |
| Geist Variable | cdn | 400 | normal |
| Luxurious Script | cdn | 400 | normal |
| Inter Medium | self-hosted | 500 | normal |
| GT Walsheim Medium | self-hosted | 400, 500, normal | normal |
| GT Walsheim Bold | self-hosted | 400, 700, normal | normal |
| GT Walsheim Bold Oblique | self-hosted | 400, 700, normal | italic, normal |
| GT Walsheim Medium Oblique | self-hosted | 400, 500, normal | italic, normal |
| GT Walsheim Framer Medium | self-hosted | 400, 500, normal | normal |
| Inter Framer SemiBold | self-hosted | 600 | normal |
| Inter Framer Regular | self-hosted | 400 | normal |
| GT Walsheim Regular | self-hosted | 400 | normal |
| Inter SemiBold | self-hosted | 600 | normal |
| Lazzer Variable | self-hosted | 400 | normal |
| T1 Korium 5Kg | self-hosted | 400 | normal |
| Inter Marketing Medium | self-hosted | 500 | normal |
| Mono Spec Variable | self-hosted | 500 | normal |
| GT Walsheim Black | self-hosted | 800 | normal |
| Söhne Breit Fett | self-hosted | 800 | normal |
| Universal Sans Text 400 | self-hosted | 400 | normal |
| Inter Framer SemiBold Italic | self-hosted | 600 | italic |
| Inter Framer Italic | self-hosted | 400 | italic |
| Input Mono Regular | self-hosted | 400 | normal |
| Input Mono Bold | self-hosted | 700 | normal |
| Input Mono Black | self-hosted | 800 | normal |
| Inter | self-hosted | 100, 200, 300, 400, 500, 600, 700, 800, 900 | normal, italic |
| Inter Variable | self-hosted | 400 | normal, italic |
| Inter Display | self-hosted | 100, 200, 300, 400, 500, 600, 700, 800, 900 | normal, italic |
| Azeret Mono | self-hosted | 400 | normal |
| Satoshi | self-hosted | 400, 500, 700 | normal, italic |
| Switzer | self-hosted | 500, 600, 700 | normal |
| Chillax | self-hosted | 600, 700 | normal |
| Panchang | self-hosted | 700, 800 | normal |
| Manrope | self-hosted | 500 | normal |
| Azeret Mono Variable | self-hosted | 400 | normal |
| Libre Caslon Condensed | self-hosted | 400 | normal |
| Open Runde | self-hosted | 600 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 58 | objectFit: cover, borderRadius: 8px, shape: rounded |
| general | 33 | objectFit: cover, borderRadius: 0px, shape: square |
| hero | 7 | objectFit: cover, borderRadius: 15px, shape: rounded |

**Aspect ratios:** 1:1 (23x), 3:4 (15x), 21:9 (12x), 2:3 (9x), 4:3 (7x), 3:2 (6x), 9:16 (6x), 7:1 (4x)

## Motion Language

**Feel:** smooth · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `md` | `300ms` | 300 |

### Easing Families

- **ease-in-out** (2 uses) — `cubic-bezier(0, 0, 1, 1)`, `ease`

## Component Anatomy

### button — 7 instances

**Slots:** label

### input — 2 instances


## Brand Voice

**Tone:** neutral · **Pronoun:** you-only · **Headings:** Sentence case (balanced)

### Top CTA Verbs

- **copy** (2)

### Button Copy Patterns

- "copy" (2×)

### Sample Headings

> Framer is the AI website builder for standout sites
> Shipped with Framer
> Agents that work alongside you, not instead of you
> Design with an agent
> Run your CMS with an agent
> Framer is the AI website builder for standout sites
> Framer is the AI website builder for standout sites
> Shipped with Framer
> Shipped with Framer
> Agents that work alongside you, not instead of you

## Page Intent

**Type:** `landing` (confidence 0.61)
**Description:** Create a professional website with Framer’s no-code AI website builder. Design freely, manage CMS content, optimize SEO, collaborate, and publish fast.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): nav → testimonial → hero → nav → logo-wall → nav → testimonial → nav → testimonials → nav → hero → nav → logo-wall → nav → nav → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | testimonial | Framer is the AI website builder for standout sites | 0.8 |
| 2 | hero | Framer is the AI website builder for standout sites | 0.85 |
| 3 | nav | Framer is the AI website builder for standout sites | 0.4 |
| 4 | logo-wall | Shipped with Framer | 0.85 |
| 5 | nav | Shipped with Framer | 0.4 |
| 6 | testimonial | Agents that work alongside you, not instead of you | 0.8 |
| 7 | nav | Agents that work alongside you, not instead of you | 0.4 |
| 8 | testimonials | Not just vibes, a full platform | 0.4 |
| 9 | nav | Not just vibes, a full platform | 0.4 |
| 10 | hero | Built on a community that isn’t going anywhere | 0.4 |
| 11 | nav | Built on a community that isn’t going anywhere | 0.4 |
| 12 | logo-wall | Trusted by teams shipping big sites | 0.85 |
| 13 | nav | Trusted by teams shipping big sites | 0.4 |
| 14 | nav | Get started with Framer | 0.4 |
| 15 | footer | — | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.402 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 100px |
| backdrop-filter in use | no |
| Gradients | 6 |

## Imagery Style

**Label:** `photography` (confidence 0.133)
**Counts:** total 98, svg 0, icon 18, screenshot-like 0, photo-like 26
**Dominant aspect:** square-ish
**Radius profile on images:** soft

## Component Library

**Detected:** `vuetify` (confidence 0.9)

Evidence:
- 31 v-* classes

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Inter` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
