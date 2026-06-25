# Design Language: PostHog – We make dev tools for product engineers

> Extracted from `https://posthog.com` on June 25, 2026
> 5000 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#e1d7c2` | rgb(225, 215, 194) | hsl(41, 34%, 82%) | 17 |
| Secondary | `#eb9d2a` | rgb(235, 157, 42) | hsl(36, 83%, 54%) | 7 |
| Accent | `#eeefe9` | rgb(238, 239, 233) | hsl(70, 16%, 93%) | 18 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 7110 |
| `#4d4f46` | hsl(73, 6%, 29%) | 1332 |
| `#374151` | hsl(217, 19%, 27%) | 617 |
| `#23251d` | hsl(75, 12%, 13%) | 166 |
| `#9ea096` | hsl(72, 5%, 61%) | 111 |
| `#65675e` | hsl(73, 5%, 39%) | 62 |
| `#bfc1b7` | hsl(72, 7%, 74%) | 37 |
| `#ffffff` | hsl(0, 0%, 100%) | 31 |
| `#b6b7af` | hsl(67, 5%, 70%) | 14 |
| `#131316` | hsl(240, 7%, 8%) | 14 |
| `#d0d1c9` | hsl(67, 8%, 80%) | 11 |
| `#73756b` | hsl(72, 4%, 44%) | 8 |

### Background Colors

Used on large-area elements: `#e5e7e0`, `#e1d7c2`, `#ffffff`, `#eeefe9`, `#fdfdf8`, `#2f80fa`, `#f3f4f0`

### Text Colors

Text color palette: `#000000`, `#23251d`, `#73756b`, `#65675e`, `#4d4f46`, `#9ea096`, `#374151`, `#111827`, `#ffffff`, `#b62ad9`

### Gradients

```css
background-image: linear-gradient(rgb(255, 241, 213), rgb(218, 224, 235));
```

```css
background-image: linear-gradient(90deg, rgb(1, 67, 203), rgb(43, 111, 244) 24.04%, rgb(210, 52, 1) 46.63%, rgb(255, 101, 31) 65.87%, rgb(251, 160, 0) 83.17%, rgb(1, 67, 203));
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border | 7110 |
| `#4d4f46` | text, border | 1332 |
| `#374151` | text, border | 617 |
| `#23251d` | text, border | 166 |
| `#111827` | text, border | 156 |
| `#9ea096` | border, text | 111 |
| `#f7a501` | text, border, background | 92 |
| `#2f80fa` | background, text, border | 74 |
| `#65675e` | text, border | 62 |
| `#30abc6` | text, border | 48 |
| `#bfc1b7` | border | 37 |
| `#b62ad9` | text, border | 36 |
| `#ffffff` | background, text, border | 31 |
| `#36c46f` | text, border | 24 |
| `#6aa84f` | text, border, background | 20 |
| `#eeefe9` | background | 18 |
| `#e1d7c2` | background | 17 |
| `#29dbbb` | text, border | 16 |
| `#b17816` | border | 14 |
| `#b6b7af` | border, background | 14 |
| `#131316` | text, border | 14 |
| `#f54e00` | background, text, border | 12 |
| `#d0d1c9` | background, border | 11 |
| `#73756b` | text, border | 8 |
| `#eb9d2a` | background | 7 |
| `#e5e7e0` | background | 5 |
| `#cd8407` | background | 4 |
| `#6c47ff` | text, border | 4 |
| `#bab1ff` | text, border | 2 |

## Typography

### Font Families

- **IBM Plex Sans Variable** — used for body (3801 elements)
- **Open Runde** — used for all (1192 elements)
- **Source Code Pro** — used for body (1 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 36px | 2.25rem | 700 | 54px | normal | p |
| 24px | 1.5rem | 800 | 32px | -0.6px | h1, div, svg, path |
| 21.4286px | 1.3393rem | 700 | 30px | -0.535714px | h2 |
| 20px | 1.25rem | 700 | 28px | normal | s, span |
| 19.2857px | 1.2054rem | 600 | 30px | -0.482143px | h3 |
| 18px | 1.125rem | 700 | 27px | normal | p, br, strong |
| 16px | 1rem | 400 | 24px | normal | html, head, meta, link |
| 15px | 0.9375rem | 400 | 25.7143px | normal | article, div, p, img |
| 14px | 0.875rem | 600 | 20px | normal | button, svg, path, span |
| 13px | 0.8125rem | 500 | 13px | normal | button, div, svg, path |
| 12px | 0.75rem | 400 | 16px | normal | button, svg, path, span |

### Heading Scale

```css
h1 { font-size: 24px; font-weight: 800; line-height: 32px; }
h2 { font-size: 21.4286px; font-weight: 700; line-height: 30px; }
h3 { font-size: 19.2857px; font-weight: 600; line-height: 30px; }
```

### Body Text

```css
body { font-size: 15px; font-weight: 400; line-height: 25.7143px; }
```

### Font Weights in Use

`400` (4394x), `500` (296x), `600` (250x), `700` (32x), `800` (28x)

## Spacing

**Base unit:** 4px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-20 | 20px | 1.25rem |
| spacing-32 | 32px | 2rem |
| spacing-48 | 48px | 3rem |
| spacing-64 | 64px | 4rem |
| spacing-120 | 120px | 7.5rem |
| spacing-144 | 144px | 9rem |
| spacing-220 | 220px | 13.75rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 16 |
| sm | 5px | 2 |
| md | 8px | 2 |
| full | 9999px | 13 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 0px 6px 2px;
```

## CSS Custom Properties

### Colors

```css
--squeak-primary-color: 0,0,0;
--squeak-button-color: 245,78,0;
--swiper-pagination-color: #f54e00;
--swiper-pagination-bullet-inactive-color: #000;
--swiper-theme-color: #007aff;
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-ring-inset: ;
--tw-ring-offset-width: 0px;
--tw-border-spacing-x: 0;
--tw-shadow-colored: 0 0 #0000;
--tw-border-spacing-y: 0;
--tw-ring-color: rgba(59,130,246,.5);
--tw-ring-offset-color: #fff;
```

### Spacing

```css
--tw-contain-size: ;
--tw-numeric-spacing: ;
--viewport-padding: 25px;
```

### Shadows

```css
--tw-shadow: 0 0 #0000;
--tw-drop-shadow: ;
```

### Other

```css
--squeak-default-avatar-fill: 255,255,255;
--tw-contrast: ;
--tw-backdrop-sepia: ;
--tw-sepia: ;
--tw-skew-x: 0;
--tw-ordinal: ;
--tw-backdrop-saturate: ;
--tw-contain-style: ;
--tw-backdrop-blur: ;
--tw-translate-x: 0;
--tw-gradient-via-position: ;
--tw-backdrop-invert: ;
--tw-saturate: ;
--tw-scroll-snap-strictness: proximity;
--tw-grayscale: ;
--tw-scale-x: 1;
--tw-backdrop-hue-rotate: ;
--tw-gradient-to-position: ;
--tw-brightness: ;
--tw-numeric-fraction: ;
--tw-backdrop-grayscale: ;
--tw-hue-rotate: ;
--tw-scale-y: 1;
--tw-pan-y: ;
--tw-backdrop-contrast: ;
--tw-skew-y: 0;
--tw-backdrop-brightness: ;
--tw-slashed-zero: ;
--tw-blur: ;
--tw-invert: ;
--tw-pan-x: ;
--tw-translate-y: 0;
--tw-backdrop-opacity: ;
--tw-gradient-from-position: ;
--tw-numeric-figure: ;
--tw-rotate: 0;
--tw-pinch-zoom: ;
--tw-contain-paint: ;
--tw-contain-layout: ;
```

### Semantic

```css
--tw-shadow-colored: 0 0 #0000;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| 1px | 1px | min-width |
| sm | 425px | min-width |
| sm | 482px | min-width |
| sm | 640px | min-width |
| md | 767px | max-width |
| md | 768px | min-width |
| md | 800px | max-width |
| 900px | 900px | min-width |
| lg | 1024px | min-width |
| lg | 1076px | max-width |
| 1160px | 1160px | min-width |
| xl | 1280px | min-width |
| 2xl | 1536px | min-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.4, 0, 0.2, 1)`

**Durations:** `0.3s`, `0.15s`

### Common Transitions

```css
transition: all;
transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations

**slideRight**
```css
@keyframes slideRight {
  0% { transform: translateX(var(--radix-toast-swipe-end-x)); }
  100% { transform: translateX(100%); }
}
```

**rcSliderTooltipZoomDownIn**
```css
@keyframes rcSliderTooltipZoomDownIn {
  0% { opacity: 0; transform: scale(0); transform-origin: 50% 100%; }
  100% { transform: scale(1); transform-origin: 50% 100%; }
}
```

**rcSliderTooltipZoomDownOut**
```css
@keyframes rcSliderTooltipZoomDownOut {
  0% { transform: scale(1); transform-origin: 50% 100%; }
  100% { opacity: 0; transform: scale(0); transform-origin: 50% 100%; }
}
```

**wobble**
```css
@keyframes wobble {
  0%, 100% { transform: rotate(-2deg) translateX(-5px); }
  50% { transform: rotate(2deg) translateX(5px); }
}
```

**breathe**
```css
@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}
```

**develop**
```css
@keyframes develop {
  0% { filter: grayscale(100%) brightness(200%); opacity: 0; }
  30% { filter: grayscale(100%) brightness(150%); opacity: 1; }
  100% { filter: grayscale(0) brightness(100%); opacity: 1; }
}
```

**flash**
```css
@keyframes flash {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}
```

**float**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
}
```

**gradient-rotate**
```css
@keyframes gradient-rotate {
  0%, 100% { background-position: 0px 50%; }
  50% { background-position: 100% 50%; }
}
```

**grow**
```css
@keyframes grow {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (48 instances)

```css
.buttons {
  background-color: rgb(205, 132, 7);
  color: rgb(35, 37, 29);
  font-size: 14px;
  font-weight: 400;
  padding-top: 2px;
  padding-right: 0px;
  border-radius: 4px;
}
```

### Cards (2 instances)

```css
.cards {
  background-color: rgb(255, 255, 255);
  border-radius: 9999px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 0px 6px 2px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (100 instances)

```css
.links {
  color: rgb(77, 79, 70);
  font-size: 14px;
  font-weight: 500;
}
```

### Navigation (2 instances)

```css
.navigation {
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (1 instances)

```css
.footer {
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Tabs (4 instances)

```css
.tabs {
  background-color: rgb(47, 128, 250);
  color: rgb(101, 103, 94);
  font-size: 14px;
  font-weight: 600;
  padding-top: 10px;
  padding-right: 12px;
  border-color: rgb(101, 103, 94);
  border-radius: 6px 6px 0px 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 2px 0px 2px 0px;
  border-radius: 0px;
  border: 0px solid rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Button — 5 instances, 2 variants

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(35, 37, 29);
  padding: 2px 8px 2px 8px;
  border-radius: 4px;
  border: 0px solid rgb(35, 37, 29);
  font-size: 13px;
  font-weight: 500;
```

**Variant 2** (1 instance)

```css
  background: rgb(47, 128, 250);
  color: rgb(255, 255, 255);
  padding: 10px 12px 10px 12px;
  border-radius: 6px;
  border: 0px solid rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
```

### Button — 8 instances, 1 variant

**Variant 1** (8 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(35, 37, 29);
  padding: 2px 8px 2px 8px;
  border-radius: 4px;
  border: 0px solid rgb(35, 37, 29);
  font-size: 13px;
  font-weight: 500;
```

### Button — 18 instances, 4 variants

**Variant 1** (5 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(35, 37, 29);
  padding: 2px 8px 2px 8px;
  border-radius: 4px;
  border: 0px solid rgb(35, 37, 29);
  font-size: 13px;
  font-weight: 500;
```

**Variant 2** (2 instances)

```css
  background: rgb(229, 231, 224);
  color: rgb(101, 103, 94);
  padding: 4px 6px 4px 6px;
  border-radius: 4px;
  border: 4px 1px 1px solid rgb(191, 193, 183);
  font-size: 16px;
  font-weight: 400;
```

**Variant 3** (10 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(158, 160, 150);
  padding: 4px 5px 4px 5px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 14px;
  font-weight: 400;
```

**Variant 4** (1 instance)

```css
  background: rgb(235, 157, 42);
  color: rgb(77, 79, 70);
  padding: 0px 0px 0px 0px;
  border-radius: 5px;
  border: 1px solid rgb(177, 120, 22);
  font-size: 15px;
  font-weight: 600;
```

### Button — 5 instances, 1 variant

**Variant 1** (5 instances)

```css
  background: rgb(205, 132, 7);
  color: rgb(35, 37, 29);
  padding: 0px 0px 0px 0px;
  border-radius: 6px;
  border: 1px solid rgb(177, 120, 22);
  font-size: 16px;
  font-weight: 400;
```

### Button — 6 instances, 1 variant

**Variant 1** (6 instances)

```css
  background: rgb(235, 157, 42);
  color: rgb(0, 0, 0);
  padding: 4px 10px 4px 10px;
  border-radius: 6px;
  border: 1px solid rgb(177, 120, 22);
  font-size: 13px;
  font-weight: 700;
```

### Button — 7 instances, 2 variants

**Variant 1** (6 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(35, 37, 29);
  padding: 2px 4px 2px 4px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 13px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgba(255, 255, 255, 0.25);
  color: rgb(101, 103, 94);
  padding: 8px 8px 8px 8px;
  border-radius: 4px;
  border: 1px solid rgb(210, 211, 204);
  font-size: 15px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 2px 0px 2px 0px;
  border-radius: 0px;
  border: 0px solid rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(77, 79, 70);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(77, 79, 70);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(35, 37, 29);
  padding: 2px 6px 2px 6px;
  border-radius: 4px;
  border: 0px solid rgb(35, 37, 29);
  font-size: 13px;
  font-weight: 500;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgb(238, 239, 233);
  color: rgb(158, 160, 150);
  padding: 2px 0px 2px 8px;
  border-radius: 4px;
  border: 1px solid rgb(182, 183, 175);
  font-size: 13px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 6px 8px 6px 8px;
  border-radius: 6px;
  border: 0px solid rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(255, 255, 255);
  color: rgb(77, 79, 70);
  padding: 2px 8px 2px 8px;
  border-radius: 5px;
  border: 1px solid rgb(177, 120, 22);
  font-size: 12px;
  font-weight: 700;
```

## Layout System

**6 grid containers** and **246 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 0px |
| 896px | 32px |
| 900px | 0px |
| 496px | 0px |
| 1024px | 0px |
| 443px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 2-column | 3x |
| 4-column | 2x |
| 3-column | 1x |

### Grid Templates

```css
grid-template-columns: 384px 384px;
gap: 64px;
grid-template-columns: 416px 416px;
grid-template-columns: 50px 200px 200px 222px;
grid-template-columns: 376px 376px;
gap: 16px 32px;
grid-template-columns: 100px 742px 100px;
gap: 4px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 45x |
| row/nowrap | 197x |
| row/wrap | 4x |

**Gap values:** `12px`, `16px`, `16px 32px`, `1px`, `2px`, `4px`, `4px 16px`, `64px`, `6px`, `8px`, `8px 16px`

## Accessibility (WCAG 2.1)

**Overall Score: 96%** — 23 passing, 1 failing color pairs

### Failing Color Pairs

| Foreground | Background | Ratio | Level | Used On |
|------------|------------|-------|-------|---------|
| `#ffffff` | `#2f80fa` | 3.76:1 | FAIL | button (1x) |

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#4d4f46` | `#e1d7c2` | 5.83:1 | AA |
| `#000000` | `#eb9d2a` | 9.39:1 | AAA |
| `#4d4f46` | `#ffffff` | 8.33:1 | AAA |

## Design System Score

**Overall: 87/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 80/100 |
| Typography Consistency | 80/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 96/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 1 WCAG contrast failures
- 541 !important rules — prefer specificity over overrides
- 94% of CSS is unused — consider purging
- 7683 duplicate CSS declarations

## Gradients

**2 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |
| linear | 90deg | 6 | complex |

```css
background: linear-gradient(rgb(255, 241, 213), rgb(218, 224, 235));
background: linear-gradient(90deg, rgb(1, 67, 203), rgb(43, 111, 244) 24.04%, rgb(210, 52, 1) 46.63%, rgb(255, 101, 31) 65.87%, rgb(251, 160, 0) 83.17%, rgb(1, 67, 203));
```

## Z-Index Map

**6 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 999999,999999 | div.f.i.x.e.d. .i.n.s.e.t.-.0. .s.i.z.e.-.f.u.l.l. .z.-.[.9.9.9.9.9.9.]. .h.i.d.d.e.n |
| sticky | 10,50 | img.m.a.x.-.w.-.n.o.n.e. .m.d.:.m.a.x.-.h.-.[.6.2.8.p.x.]. .h.-.a.u.t.o. .m.d.:.h.-.f.u.l.l. .w.-.[.7.0.0.p.x.]. .m.d.:.w.-.a.u.t.o. .z.-.1.0, li.a.b.s.o.l.u.t.e. .w.-.2.8. .f.l.e.x. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .i.t.e.m.s.-.c.e.n.t.e.r. .z.-.1.0, li.a.b.s.o.l.u.t.e. .w.-.2.8. .f.l.e.x. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .i.t.e.m.s.-.c.e.n.t.e.r. .z.-.1.0 |
| base | -10,1 | div.f.i.x.e.d. .i.n.s.e.t.-.0. .-.z.-.1.0. .w.a.l.l.p.a.p.e.r.-.k.e.y.b.o.a.r.d.-.g.a.r.d.e.n.:.b.g.-.[.#.E.1.D.7.C.2.]. .d.a.r.k.:.w.a.l.l.p.a.p.e.r.-.k.e.y.b.o.a.r.d.-.g.a.r.d.e.n.:.b.g.-.[.#.3.3.3.7.3.3.]. .w.a.l.l.p.a.p.e.r.-.s.t.a.r.t.u.p.-.m.o.n.o.p.o.l.y.:.b.g.-.[.#.F.E.F.C.E.D.]. .d.a.r.k.:.w.a.l.l.p.a.p.e.r.-.s.t.a.r.t.u.p.-.m.o.n.o.p.o.l.y.:.b.g.-.[.#.1.d.1.f.2.7.]. .w.a.l.l.p.a.p.e.r.-.c.o.d.i.n.g.-.a.t.-.n.i.g.h.t.:.b.g.-.[.#.5.4.6.1.8.E.]. .d.a.r.k.:.w.a.l.l.p.a.p.e.r.-.c.o.d.i.n.g.-.a.t.-.n.i.g.h.t.:.b.g.-.[.#.5.4.6.1.8.E.], div.@.c.o.n.t.a.i.n.e.r. .a.b.s.o.l.u.t.e. .!.s.e.l.e.c.t.-.a.u.t.o. .f.l.e.x. .f.l.e.x.-.c.o.l. .b.g.-.t.r.a.n.s.p.a.r.e.n.t. .s.h.a.d.o.w.-.2.x.l. .b.o.r.d.e.r.-.p.r.i.m.a.r.y. .b.o.r.d.e.r. .r.o.u.n.d.e.d. .o.v.e.r.f.l.o.w.-.h.i.d.d.e.n |

**Issues:**
- Very high z-index values: 999999

## SVG Icons

**85 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 10 |
| sm | 30 |
| md | 8 |
| xl | 37 |

**Icon colors:** `primary`, `currentColor`, `white`, `#1D4AFF`, `#F9BD2B`, `#F54E00`, `#000`, `#FF5A00`, `#FFFEFE`, `#0500FF`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Source Code Pro | self-hosted | 400 | normal |
| IBM Plex Sans Variable | self-hosted | 100 700 | normal, italic |
| Fairytale | self-hosted | 400 | normal |
| Computer Modern | self-hosted | 400 | normal |
| Squeak | self-hosted | 700 | normal |
| Open Runde | self-hosted | 400, 500, 600, 700 | normal |
| Charter | self-hosted | 400, 700 | normal |
| swiper-icons | self-hosted | 400 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 4 | objectFit: fill, borderRadius: 0px, shape: square |
| thumbnail | 4 | objectFit: fill, borderRadius: 0px, shape: square |
| gallery | 1 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (4x), 2.05:1 (1x), 16:9 (1x), 3:2 (1x), 3:4 (1x), 21:9 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |
| `md` | `300ms` | 300 |

### Easing Families

- **custom** (43 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `grow` | scale | transform | 1 |
| `grow-sm` | scale | transform | 1 |
| `text-gradient-wizard-scroll` | custom | background-position-x | 1 |
| `hero-carousel-progress` | custom | width | 1 |
| `hero-carousel-fade-in` | fade | opacity | 1 |
| `scattered-float` | slide | transform | 30 |

## Component Anatomy

### button — 58 instances

**Slots:** label, icon
**Variants:** primary · secondary
**Sizes:** md · medium · sm · xs

| variant | count | sample label |
|---|---|---|
| primary | 41 | Product OS |
| default | 11 | Product OS
Pricing
Docs
Community
Compan |
| secondary | 6 | 1 |

## Brand Voice

**Tone:** neutral · **Pronoun:** you-only · **Headings:** Sentence case (balanced)

### Top CTA Verbs

- **get** (8)
- **product** (2)
- **install** (2)
- **shuffle** (2)
- **open** (2)
- **pricing** (1)
- **docs** (1)
- **community** (1)

### Button Copy Patterns

- "get started - free" (4×)
- "get started – free" (2×)
- "install with ai" (2×)
- "shuffle companies" (2×)
- "open customers.mdx" (2×)
- "get started" (2×)
- "1" (1×)
- "product os
pricing
docs
community
company
more" (1×)
- "product os" (1×)
- "pricing" (1×)

### Sample Headings

> The new way to build products
> Install with AI in a single prompt
> Understand what users are doing
> Who's using PostHog?

## Page Intent

**Type:** `landing` (confidence 0.31)
**Description:** All your developer tools in one place. PostHog gives engineers everything to build, test, measure, and ship successful products faster. Get started free.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): cta → footer → nav → nav → cta → feature-grid → pricing-table

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | cta | — | 0.75 |
| 1 | nav | — | 0.9 |
| 2 | cta | — | 0.75 |
| 3 | feature-grid | — | 0.8 |
| 4 | pricing-table | — | 0.9 |
| 5 | footer | — | 0.95 |
| 6 | nav | — | 0.9 |

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.415 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 9999px |
| backdrop-filter in use | no |
| Gradients | 2 |

## Imagery Style

**Label:** `mixed` (confidence 0)
**Counts:** total 9, svg 0, icon 0, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Component Library

**Detected:** `shadcn/ui` (confidence 0.65)

Evidence:
- shadcn css tokens

Also considered: tailwindcss (0.3)

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `IBM Plex Sans Variable` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
