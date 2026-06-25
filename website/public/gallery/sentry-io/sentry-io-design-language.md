# Design Language: Application Performance Monitoring & Error Tracking Software | Sentry

> Extracted from `https://sentry.io` on June 25, 2026
> 3239 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#150f23` | rgb(21, 15, 35) | hsl(258, 40%, 10%) | 164 |
| Secondary | `#9ecbff` | rgb(158, 203, 255) | hsl(212, 100%, 81%) | 220 |
| Accent | `#2d2340` | rgb(45, 35, 64) | hsl(261, 29%, 19%) | 2 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#ffffff` | hsl(0, 0%, 100%) | 3650 |
| `#d4d4d4` | hsl(0, 0%, 83%) | 675 |
| `#e1e4e8` | hsl(214, 13%, 90%) | 622 |
| `#6a737d` | hsl(212, 8%, 45%) | 144 |
| `#000000` | hsl(0, 0%, 0%) | 120 |
| `#1a1a1a` | hsl(0, 0%, 10%) | 9 |
| `#efefef` | hsl(0, 0%, 94%) | 6 |
| `#584674` | hsl(263, 25%, 36%) | 1 |
| `#c1c1c1` | hsl(0, 0%, 76%) | 1 |

### Background Colors

Used on large-area elements: `#1f1633`, `#150f23`, `#422082`

### Text Colors

Text color palette: `#000000`, `#ffffff`, `#1a1a1a`, `#6a5fc1`, `#1f1633`, `#03060a`, `#4e2a9a`, `#010205`, `#090d16`, `#efefef`

### Gradients

```css
background-image: linear-gradient(120deg, rgb(200, 56, 82), rgb(180, 64, 146), rgb(106, 95, 193) 50%, rgb(69, 38, 80) 55%, rgb(69, 38, 80) 100%);
```

```css
background-image: linear-gradient(120deg, rgb(200, 56, 82) 0%, rgb(180, 64, 146) 25%, rgb(106, 95, 193) 50%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(120deg, rgb(250, 127, 170), rgb(255, 150, 145), rgb(255, 178, 135) 50%, rgb(255, 255, 255) 55%, rgb(255, 255, 255) 100%);
```

```css
background-image: linear-gradient(120deg, rgb(250, 127, 170) 0%, rgb(255, 150, 145) 25%, rgb(255, 178, 135) 50%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(rgb(31, 22, 51) 0%, rgb(48, 20, 95) 52.4%, rgb(48, 20, 95) 75%, rgb(48, 20, 95) 100%), url("https://sentry.io/_astro/middle-bg-texture.Bj4JNsdD.webp");
```

```css
background-image: linear-gradient(to right in oklab, rgb(253, 68, 176) 0%, rgb(194, 239, 78) 100%);
```

```css
background-image: linear-gradient(in oklab, rgb(253, 68, 176) 0%, rgb(194, 239, 78) 100%);
```

```css
background-image: radial-gradient(50% 50%, rgba(173, 108, 170, 0.15) 0%, rgb(31, 22, 51) 65%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#ffffff` | text, border, background | 3650 |
| `#d4d4d4` | text, border | 675 |
| `#e1e4e8` | text, border | 622 |
| `#f97583` | text, border | 296 |
| `#9ecbff` | text, border | 220 |
| `#6a5fc1` | text, border | 179 |
| `#b392f0` | text, border | 170 |
| `#150f23` | background | 164 |
| `#79b8ff` | text, border | 146 |
| `#6a737d` | text, border | 144 |
| `#000000` | text, border | 120 |
| `#4e2a9a` | text, border | 92 |
| `#85e89d` | text, border | 36 |
| `#1f1633` | background, text, border | 34 |
| `#fd44b0` | text, border | 24 |
| `#c2ef4e` | text, border | 22 |
| `#dbedff` | text, border | 16 |
| `#1a1a1a` | text, border | 9 |
| `#efefef` | background, text, border | 6 |
| `#7553ff` | background | 6 |
| `#ffab70` | text, border | 6 |
| `#362d59` | border, text | 5 |
| `#090d16` | text, border | 2 |
| `#2d2340` | background | 2 |
| `#422082` | background | 2 |
| `#fdaeb7` | text, border | 2 |
| `#79628c` | background | 1 |
| `#584674` | border | 1 |
| `#c1c1c1` | border | 1 |

## Typography

### Font Families

- **Rubik** — used for all (2000 elements)
- **Monaco** — used for body (1165 elements)
- **IBM Plex Mono** — used for body (57 elements)
- **Dammit Sans** — used for all (17 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 88px | 5.5rem | 700 | 105.6px | normal | h1, span |
| 60px | 3.75rem | 500 | 66px | normal | h2, span |
| 30px | 1.875rem | 400 | 36px | normal | p |
| 27px | 1.6875rem | 500 | 33.75px | normal | div, p, a, em |
| 24px | 1.5rem | 500 | 30px | normal | h3, span |
| 20px | 1.25rem | 600 | 25px | normal | h3, div |
| 16px | 1rem | 400 | 24px | normal | html, head, meta, script |
| 15px | 0.9375rem | 500 | 21px | normal | label, span |
| 14px | 0.875rem | 500 | 18px | 0.2px | button, span, div, svg |
| 12px | 0.75rem | 400 | 24px | normal | div, span, svg, path |
| 10px | 0.625rem | 600 | 18px | 0.25px | span |

### Heading Scale

```css
h1 { font-size: 88px; font-weight: 700; line-height: 105.6px; }
h2 { font-size: 60px; font-weight: 500; line-height: 66px; }
h3 { font-size: 27px; font-weight: 500; line-height: 33.75px; }
h3 { font-size: 24px; font-weight: 500; line-height: 30px; }
h3 { font-size: 20px; font-weight: 600; line-height: 25px; }
h3 { font-size: 16px; font-weight: 400; line-height: 24px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: 24px; }
```

### Font Weights in Use

`400` (2848x), `500` (257x), `700` (106x), `600` (28x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-2 | 2px | 0.125rem |
| spacing-16 | 16px | 1rem |
| spacing-20 | 20px | 1.25rem |
| spacing-24 | 24px | 1.5rem |
| spacing-32 | 32px | 2rem |
| spacing-35 | 35px | 2.1875rem |
| spacing-40 | 40px | 2.5rem |
| spacing-44 | 44px | 2.75rem |
| spacing-56 | 56px | 3.5rem |
| spacing-64 | 64px | 4rem |
| spacing-72 | 72px | 4.5rem |
| spacing-83 | 83px | 5.1875rem |
| spacing-160 | 160px | 10rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 1 |
| md | 6px | 1 |
| md | 10px | 40 |
| lg | 13px | 1 |
| lg | 16px | 3 |
| full | 50px | 1 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
```

**sm (inset)** — blur: 3px
```css
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px inset;
```

**sm** — blur: 3px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px;
```

**sm** — blur: 5px
```css
box-shadow: rgb(128, 128, 128) 0px 0px 5px 0px;
```

**sm** — blur: 8px
```css
box-shadow: rgb(21, 15, 35) 0px 0px 8px 6px;
```

**md** — blur: 8px
```css
box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px 0px;
```

**md (inset)** — blur: 10px
```css
box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px 0px inset;
```

## CSS Custom Properties

### Colors

```css
--bg-primary: #fff;
--bg-secondary: #f6f6f8;
--text-primary: #362d59;
--text-secondary: #9093c1;
--border-color: #ececf1;
--tw-ring-shadow: 0 0 #0000;
--color-dk-violet: #362d59;
--color-pink-500: oklch(65.6% .241 354.308);
--color-orange-800: oklch(47% .157 37.304);
--color-md-pink: #e1567c;
--color-md-orange: #f4834f;
--color-yellow-800: oklch(47.6% .114 61.907);
--color-neutral-300: oklch(87% 0 0);
--color-hot-pink: #fd44b0;
--tw-inset-ring-shadow: 0 0 #0000;
--color-orange-50: oklch(98% .016 73.684);
--color-red-200: oklch(88.5% .062 18.334);
--color-neutral-200: oklch(92.2% 0 0);
--color-gray-300: oklch(87.2% .01 258.338);
--color-gray-3: #cfcfdb;
--color-gray-500: oklch(55.1% .027 264.364);
--color-gray-2: #ececf1;
--color-green-500: oklch(72.3% .219 149.579);
--color-gray-50: oklch(98.5% .002 247.839);
--color-blurple: #6a5fc1;
--tw-ring-offset-color: #fff;
--color-white: #fff;
--color-gray-400: oklch(70.7% .022 261.325);
--color-dk-pink: #c73852;
--color-lt-orange: #ffb287;
--color-dk-purple: #452650;
--color-md-violet: #584674;
--color-v-lt-purple: #e2abe0;
--color-gray-100: oklch(96.7% .003 264.542);
--color-red-800: oklch(44.4% .177 26.899);
--color-red-500: oklch(63.7% .237 25.331);
--tw-ring-offset-width: 0px;
--color-dk-blurple: #4e2a9a;
--color-blue-800: oklch(42.4% .199 265.638);
--color-orange-300: oklch(83.7% .128 66.29);
--color-lt-violet: #79628c;
--tw-ring-offset-shadow: 0 0 #0000;
--color-neutral-100: oklch(97% 0 0);
--color-green-600: oklch(62.7% .194 149.214);
--color-gray-800: oklch(27.8% .033 256.848);
--color-lt-yellow: #ffdb4a;
--color-red-300: oklch(80.8% .114 19.571);
--color-dk-violet-alt: #36166b;
--color-blue-500: oklch(62.3% .214 259.815);
--color-gray-900: oklch(21% .034 264.665);
--color-yellow-50: oklch(98.7% .026 102.212);
--color-gray-700: oklch(37.3% .034 259.733);
--color-alt-dk-blurple: #422082;
--color-gray-600: oklch(44.6% .03 256.802);
--color-utility-black: #181225;
--color-yellow-200: oklch(94.5% .129 101.54);
--color-blue-600: oklch(54.6% .245 262.881);
--tw-border-style: solid;
--color-md-yellow: #f2b712;
--color-red-50: oklch(97.1% .013 17.38);
--color-blue-200: oklch(88.2% .059 254.128);
--color-lt-pink: #fa7faa;
--color-blue-50: oklch(97% .014 254.604);
--color-border: #ececf1;
--color-gray-200: oklch(92.8% .006 264.531);
--color-rich-black: #1f1633;
--color-color-text: #362d59;
--color-black: #000;
--color-neutral-400: oklch(70.8% 0 0);
--color-md-purple: #8c5393;
--color-amber-200: oklch(92.4% .12 95.746);
```

### Spacing

```css
--tw-space-x-reverse: 0;
--spacing: .25rem;
--tw-space-y-reverse: 0;
```

### Typography

```css
--text-2xl: 1.5rem;
--text-hero-h2--line-height: 1.1;
--text-7xl: 4.5rem;
--text-lg: 1.125rem;
--text-hero-h1-mobile: 3.13688rem;
--text-5xl--line-height: 1;
--leading-normal: 1.5;
--text-base--line-height: 1.5rem;
--font-mono: "IBM Plex Mono", Consolas, "Liberation Mono", Menlo, Courier, monospace;
--tracking-wider: .05em;
--text-hero-h2-mobile: 2.8125rem;
--text-lg--line-height: 1.75rem;
--font-sans: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
--font-weight-bold: 700;
--text-hero-h2-mobile--line-height: 1.15;
--text-hero-h1: 5.5rem;
--text-6xl: 3.75rem;
--default-font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
--text-xs--line-height: 1rem;
--text-hero-h1--line-height: 1.2;
--text-7xl--line-height: 1;
--text-xl: 1.25rem;
--leading-relaxed: 1.625;
--leading-snug: 1.375;
--font-dammit-sans: "Dammit Sans", sans-serif;
--text-2xl--line-height: 2rem;
--text-hero-h1-mobile--line-height: 1.2;
--tracking-wide: .025em;
--text-xl--line-height: 1.75rem;
--font-weight-semibold: 600;
--text-sm: .875rem;
--leading-tight: 1.25;
--text-4xl: 2.25rem;
--text-sm--line-height: 1.25rem;
--text-5xl: 3rem;
--text-3xl--line-height: 2.25rem;
--text-3xl: 1.875rem;
--text-xs: .75rem;
--font-weight-medium: 500;
--font-weight-normal: 400;
--text-6xl--line-height: 1;
--text-4xl--line-height: 2.5rem;
--leading-loose: 2;
--text-base: 1rem;
--default-mono-font-family: "IBM Plex Mono", Consolas, "Liberation Mono", Menlo, Courier, monospace;
--text-hero-h2: 3.75rem;
--tracking-tight: -.025em;
```

### Shadows

```css
--tw-inset-shadow-alpha: 100%;
--tw-drop-shadow-alpha: 100%;
--tw-inset-shadow: 0 0 #0000;
--tw-shadow-alpha: 100%;
--tw-shadow: 0 0 #0000;
```

### Radii

```css
--radius-sm: .25rem;
--radius-2xl: 1rem;
--radius-md: .375rem;
--radius-lg: .5rem;
--radius-xl: .75rem;
```

### Other

```css
--background-image-gradient-gold: linear-gradient(45deg, #ffb287 0%, #ffc36a 50%, #fedb4b 100%);
--container-md: 28rem;
--aspect-video: 16 / 9;
--breakpoint-xs: 0px;
--tw-outline-style: solid;
--breakpoint-xl: 1152px;
--tw-gradient-from: rgba(0, 0, 0, 0);
--tw-gradient-to: rgba(0, 0, 0, 0);
--background-image-gradient-purple-descent: linear-gradient(149deg, #36166b 18.17%, #422082 56.94%, #4e2a9a 95.71%);
--tw-scale-z: 1;
--container-sm: 24rem;
--tw-gradient-via-position: 50%;
--tw-scroll-snap-strictness: proximity;
--tw-gradient-to-position: 100%;
--default-transition-duration: .15s;
--tw-gradient-from-position: 0%;
--ease-in-out: cubic-bezier(.4, 0, .2, 1);
--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
--container-5xl: 64rem;
--tw-translate-z: 0;
--tw-gradient-via: rgba(0, 0, 0, 0);
--tw-scale-y: 1;
--container-6xl: 72rem;
--breakpoint-lg: 992px;
--container-3xl: 48rem;
--tw-translate-y: 0;
--ease-out: cubic-bezier(0, 0, .2, 1);
--container-4xl: 56rem;
--tw-content: "";
--animate-fade-in: fade-in 1s ease-in-out;
--tw-divide-y-reverse: 0;
--breakpoint-md: 768px;
--container-2xl: 42rem;
--tw-translate-x: 0;
--tw-scale-x: 1;
--breakpoint-sm: 576px;
--container-xl: 36rem;
--container-7xl: 80rem;
--blur-sm: 8px;
```

### Semantic

```css
--color-green-500: oklch(72.3% .219 149.579);
--color-green-600: oklch(62.7% .194 149.214);
--color-yellow-800: oklch(47.6% .114 61.907);
--color-lt-yellow: #ffdb4a;
--color-yellow-50: oklch(98.7% .026 102.212);
--color-yellow-200: oklch(94.5% .129 101.54);
--color-md-yellow: #f2b712;
--color-amber-200: oklch(92.4% .12 95.746);
--color-red-200: oklch(88.5% .062 18.334);
--color-red-800: oklch(44.4% .177 26.899);
--color-red-500: oklch(63.7% .237 25.331);
--color-red-300: oklch(80.8% .114 19.571);
--color-red-50: oklch(97.1% .013 17.38);
--color-blue-800: oklch(42.4% .199 265.638);
--color-blue-500: oklch(62.3% .214 259.815);
--color-blue-600: oklch(54.6% .245 262.881);
--color-blue-200: oklch(88.2% .059 254.128);
--color-blue-50: oklch(97% .014 254.604);
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 576px | min-width |
| sm | 640px | max-width |
| md | 767px | max-width |
| md | 768px | min-width |
| lg | 991px | max-width |
| lg | 992px | min-width |
| lg | 1024px | min-width |
| 1151px | 1151px | max-width |
| 1152px | 1152px | min-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.4, 0, 0.2, 1)`, `ease`, `cubic-bezier(0, 0, 0.2, 1)`

**Durations:** `0.2s`, `0.3s`, `0.8s`, `0.6s`, `0.4s`, `0.15s`

### Common Transitions

```css
transition: all;
transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), fill 0.2s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.2s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.2s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.2s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.2s cubic-bezier(0.4, 0, 0.2, 1);
transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
transition: 0.2s;
transition: margin-right 0.2s, margin-left 0.2s;
transition: background 0.2s ease-out;
transition: background-position 0.2s, outline-width 0.2s;
transition: box-shadow 0.2s, background 0.2s;
transition: background-color 0.3s;
transition: left 0.2s ease-in-out;
```

### Keyframe Animations

**fade-in**
```css
@keyframes fade-in {
  0% { opacity: 0; }
  35% { opacity: 1; }
}
```

**float**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-0.75rem); }
}
```

**logo-rock**
```css
@keyframes logo-rock {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(0.5deg); }
  25% { transform: rotate(1deg); }
  50% { transform: rotate(-1deg); }
  75% { transform: rotate(-1deg); }
  90% { transform: rotate(-0.5deg); }
  100% { transform: rotate(0deg); }
}
```

**scroll-x**
```css
@keyframes scroll-x {
  0% { transform: translateZ(0px); }
  100% { transform: translate3d(calc(-50% - (var(--row-gap, 3.5rem) / 2)),0,0); }
}
```

**expandSnippet**
```css
@keyframes expandSnippet {
  0% { max-height: 0px; opacity: 0; }
  100% { max-height: 100rem; opacity: 1; }
}
```

**shrinkSnippet**
```css
@keyframes shrinkSnippet {
  0% { max-height: 100rem; opacity: 1; }
  100% { max-height: 0px; opacity: 0; }
}
```

**swingDown**
```css
@keyframes swingDown {
  0% { transform: rotate(0deg); }
  60% { transform: rotate(0deg); }
  70% { transform: rotate(-8deg); }
  75% { transform: rotate(-7deg); }
  80% { transform: rotate(-7.8deg); }
  85% { transform: rotate(-7.2deg); }
  90% { transform: rotate(-7.5deg); }
  95% { transform: rotate(-7.4deg); }
  100% { transform: rotate(-7.5deg); }
}
```

**pushUp**
```css
@keyframes pushUp {
  0% { transform: rotate(-7.5deg); }
  100% { transform: rotate(0deg); }
}
```

**_spin_1vwuf_1**
```css
@keyframes _spin_1vwuf_1 {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
```

**_thumbRotation_1vwuf_1**
```css
@keyframes _thumbRotation_1vwuf_1 {
  0% { transform: rotate(-20deg); }
  100% { transform: rotate(15deg); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (88 instances)

```css
.buttons {
  background-color: rgb(21, 15, 35);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Cards (6 instances)

```css
.cards {
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (7 instances)

```css
.inputs {
  background-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  border-color: rgb(255, 255, 255);
  border-radius: 0px;
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (210 instances)

```css
.links {
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
}
```

### Navigation (32 instances)

```css
.navigation {
  color: rgb(255, 255, 255);
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
}
```

### Footer (1 instances)

```css
.footer {
  background-color: rgb(31, 22, 51);
  color: rgb(255, 255, 255);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Dropdowns (1 instances)

```css
.dropdowns {
  border-radius: 8px;
  padding-top: 12px;
}
```

### Badges (16 instances)

```css
.badges {
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 700;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Tabs (30 instances)

```css
.tabs {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(255, 255, 255);
  border-radius: 0px;
}
```

### Accordions (2 instances)

```css
.accordions {
  color: rgb(255, 255, 255);
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(255, 255, 255);
}
```

### Switches (5 instances)

```css
.switches {
  background-color: rgba(255, 255, 255, 0.18);
  border-radius: 0px;
  border-color: rgb(255, 255, 255);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 12px 16px 12px 16px;
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0);
  font-size: 14px;
  font-weight: 500;
```

### Button — 7 instances, 2 variants

**Variant 1** (6 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 16px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgb(255, 255, 255);
  color: rgb(31, 22, 51);
  padding: 12px 16px 12px 16px;
  border-radius: 8px;
  border: 0px none rgb(31, 22, 51);
  font-size: 14px;
  font-weight: 500;
```

### Button — 41 instances, 1 variant

**Variant 1** (41 instances)

```css
  background: rgb(21, 15, 35);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

### Input — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(255, 255, 255);
  color: rgb(31, 22, 51);
  padding: 8px 12px 8px 12px;
  border-radius: 6px;
  border: 1px solid rgb(207, 207, 219);
  font-size: 16px;
  font-weight: 400;
```

## Layout System

**29 grid containers** and **457 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1152px | 32px |
| 100% | 0px |
| 949px | 0px |
| 656px | 0px |
| 802.886px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 1-column | 7x |
| 2-column | 1x |

### Grid Templates

```css
grid-template-columns: 520px 520px;
gap: 48px;
grid-template-columns: 287.891px;
gap: 20px normal;
grid-template-columns: 218.703px;
gap: 20px normal;
grid-template-columns: 218.703px;
gap: 20px normal;
grid-template-columns: 608px;
gap: 16px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 86x |
| row/nowrap | 363x |
| row/wrap | 8x |

**Gap values:** `12px`, `16px`, `20px`, `20px normal`, `24px`, `32px`, `36px`, `40px`, `48px`, `4px`, `56px`, `64px`, `8px`, `normal 6px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 81/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 80/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 90/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 141 !important rules — prefer specificity over overrides
- 51% of CSS is unused — consider purging
- 3354 duplicate CSS declarations

## Gradients

**8 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 120deg | 5 | complex |
| linear | 120deg | 5 | complex |
| linear | 120deg | 5 | complex |
| linear | 120deg | 5 | complex |
| linear | — | 4 | bold |
| linear | to right in oklab | 2 | brand |
| linear | — | 3 | bold |
| radial | — | 3 | bold |

```css
background: linear-gradient(120deg, rgb(200, 56, 82), rgb(180, 64, 146), rgb(106, 95, 193) 50%, rgb(69, 38, 80) 55%, rgb(69, 38, 80) 100%);
background: linear-gradient(120deg, rgb(200, 56, 82) 0%, rgb(180, 64, 146) 25%, rgb(106, 95, 193) 50%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%);
background: linear-gradient(120deg, rgb(250, 127, 170), rgb(255, 150, 145), rgb(255, 178, 135) 50%, rgb(255, 255, 255) 55%, rgb(255, 255, 255) 100%);
background: linear-gradient(120deg, rgb(250, 127, 170) 0%, rgb(255, 150, 145) 25%, rgb(255, 178, 135) 50%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%);
background: linear-gradient(rgb(31, 22, 51) 0%, rgb(48, 20, 95) 52.4%, rgb(48, 20, 95) 75%, rgb(48, 20, 95) 100%);
```

## Z-Index Map

**8 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 1000,9999 | div.t.o.g.g.l.e.-.c.o.n.t.a.i.n.e.r, div.h.i.d.d.e.n. .b.l.o.c.k. .x.l.:.a.b.s.o.l.u.t.e. .x.l.:.t.o.p.-.1.2. .x.l.:.l.e.f.t.-.0. .b.g.-.r.i.c.h.-.b.l.a.c.k. .x.l.:.b.g.-.w.h.i.t.e. .x.l.:.s.h.a.d.o.w.-.l.g. .r.o.u.n.d.e.d.-.x.l. .o.v.e.r.f.l.o.w.-.h.i.d.d.e.n. .x.l.:.r.o.u.n.d.e.d.-.x.l. .x.l.:.o.v.e.r.f.l.o.w.-.v.i.s.i.b.l.e. .z.-.[.9.9.9.9.]. .x.l.:.z.-.[.9.9.9.9.]. .t.r.a.n.s.i.t.i.o.n.-.a.l.l. .d.u.r.a.t.i.o.n.-.2.0.0. .e.a.s.e.-.i.n.-.o.u.t. .w.-.f.u.l.l. .x.l.:.w.-.a.u.t.o. .x.l.:.m.t.-.0, div.h.i.d.d.e.n. .b.l.o.c.k. .x.l.:.a.b.s.o.l.u.t.e. .x.l.:.t.o.p.-.1.2. .x.l.:.l.e.f.t.-.0. .b.g.-.r.i.c.h.-.b.l.a.c.k. .x.l.:.b.g.-.w.h.i.t.e. .x.l.:.s.h.a.d.o.w.-.l.g. .r.o.u.n.d.e.d.-.x.l. .o.v.e.r.f.l.o.w.-.h.i.d.d.e.n. .x.l.:.r.o.u.n.d.e.d.-.x.l. .x.l.:.o.v.e.r.f.l.o.w.-.v.i.s.i.b.l.e. .z.-.[.9.9.9.9.]. .x.l.:.z.-.[.9.9.9.9.]. .t.r.a.n.s.i.t.i.o.n.-.a.l.l. .d.u.r.a.t.i.o.n.-.2.0.0. .e.a.s.e.-.i.n.-.o.u.t. .w.-.f.u.l.l. .x.l.:.w.-.a.u.t.o. .x.l.:.m.t.-.0 |
| sticky | 10,50 | div.r.e.l.a.t.i.v.e. .z.-.1.0. .f.l.e.x. .f.l.e.x.-.c.o.l, div.r.e.l.a.t.i.v.e. .z.-.1.0. .f.l.e.x. .f.l.e.x.-.c.o.l, div.r.e.l.a.t.i.v.e. .z.-.1.0. .f.l.e.x. .f.l.e.x.-.c.o.l |
| base | -1,2 | div.c.l.i.p.-.c.o.n.t.a.i.n.e.r. .c.l.i.p.-.t.o.p.-.f.l.u.s.h. .c.l.i.p.-.b.o.t.t.o.m.-.f.l.u.s.h, a.b.t.n.-.n.e.w. .s.e.c.o.n.d.a.r.y.-.d.a.r.k. .d.a.r.k.-.m.o.d.e. .w.-.f.u.l.l. .x.l.:.w.-.a.u.t.o. .m.b.-.2. .x.l.:.m.b.-.0. .p.l.a.u.s.i.b.l.e.-.e.v.e.n.t.-.n.a.m.e.=.N.a.v.+.C.l.i.c.k.+.D.e.m.o. .p.l.a.u.s.i.b.l.e.-.e.v.e.n.t.-.c.u.r.r.e.n.t.U.r.l.=.h.t.t.p.s.:././.s.e.n.t.r.y...i.o./.w.e.l.c.o.m.e./, a.b.t.n.-.n.e.w. .s.e.c.o.n.d.a.r.y.-.l.i.g.h.t |

## SVG Icons

**30 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 1 |
| md | 1 |
| lg | 1 |
| xl | 27 |

**Icon colors:** `currentColor`, `rgb(0, 0, 0)`, `rgb(255, 255, 255)`, `#ffffff`, `#A48977`, `currentcolor`, `white`

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 14 | objectFit: fill, borderRadius: 0px, shape: square |
| thumbnail | 14 | objectFit: contain, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (9x), 3:2 (6x), 16:9 (5x), 3:1 (4x), 3:4 (1x), 1.16:1 (1x), 2:3 (1x), 21:9 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `600ms` | 600 |
| `xl` | `800ms` | 800 |

### Easing Families

- **custom** (193 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`
- **ease-in-out** (61 uses) — `ease`
- **ease-out** (1 uses) — `cubic-bezier(0, 0, 0.2, 1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `scroll-x` | slide | transform | 1 |
| `swingDown` | rotate | transform | 1 |

## Component Anatomy

### button — 51 instances

**Slots:** label, icon
**Variants:** primary
**Sizes:** xl

| variant | count | sample label |
|---|---|---|
| default | 50 | PLATFORM |
| primary | 1 | SIGN UP |

## Brand Voice

**Tone:** neutral · **Pronoun:** you-only · **Headings:** Sentence case (tight)

### Top CTA Verbs

- **ship** (2)
- **platform** (1)
- **solutions** (1)
- **resources** (1)
- **debug** (1)
- **request** (1)
- **map** (1)
- **analyzes** (1)

### Button Copy Patterns

- "platform" (1×)
- "solutions" (1×)
- "resources" (1×)
- "debug 500's, trace slow requests, replay fetch() failures, and fix the broken code that caused it." (1×)
- "catch slow queries, n+1s, and request timeouts before the ‘why is this so slow?’ posts fill up your feed." (1×)
- "map every incident to the release, pr, and owner -- automatically." (1×)
- "analyzes every signal to explain why your code failed, not just where." (1×)
- "fixes what’s broken while you ship what’s next – generating precise, merge-ready patches." (1×)
- "stops bad code before it starts bad days. correlating prs against real error and performance history to catch regressions before they ship." (1×)
- "sign up" (1×)

### Sample Headings

>  Solutions 
>  Products 
>  Products 
>  AI Debugging 
>  AI Debugging 
>  Solutions 
>  Products 
>  Products 
>  AI Debugging 
>  AI Debugging 

## Page Intent

**Type:** `landing` (confidence 0.27)
**Description:** Application performance monitoring for developers & software teams to see errors clearer, solve issues faster & continue learning continuously. Get started at sentry.io.

Alternates: docs (0.45), legal (0.4), blog-post (0.35)

## Section Roles

Reading order (top→bottom): cta → nav → testimonial → testimonials → content → testimonials → testimonial → testimonial → feature-grid → feature-grid → testimonial → testimonial → content → cta → pricing → footer → content → nav → nav → nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | cta |  Solutions  | 0.75 |
| 1 | nav |  Solutions  | 0.9 |
| 2 | testimonial | Code breaks, fix it faster | 0.8 |
| 3 | testimonials | Code breaks, fix it faster | 0.4 |
| 4 | content | — | 0.3 |
| 5 | testimonials | Developer first.
Always. | 0.4 |
| 6 | testimonial | Everything’s
connected | 0.8 |
| 7 | testimonial | Everything’s
connected | 0.8 |
| 8 | feature-grid | Debugging needs context— 
with or without AI | 0.8 |
| 9 | feature-grid | Debugging needs context— 
with or without AI | 0.8 |
| 10 | testimonial | Loved by developers
worldwide | 0.8 |
| 11 | testimonial | Get started
in minutes | 0.8 |
| 12 | content | Built to be secure,
Designed to not get in your way | 0.3 |
| 13 | cta | Get monthly product updates 
from our newsletter | 0.75 |
| 14 | pricing | Fix It | 0.4 |
| 15 | footer | Company | 0.95 |
| 16 | content | Company | 0.3 |
| 17 | nav | Company | 0.9 |
| 18 | nav | — | 0.9 |
| 19 | nav | — | 0.9 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.376 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 50px |
| backdrop-filter in use | no |
| Gradients | 8 |

## Imagery Style

**Label:** `photography` (confidence 0.054)
**Counts:** total 28, svg 0, icon 7, screenshot-like 0, photo-like 3
**Dominant aspect:** landscape
**Radius profile on images:** square

## Component Library

**Detected:** `tailwindcss` (confidence 0.784)

Evidence:
- tailwind-like class density 75%

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Rubik` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
