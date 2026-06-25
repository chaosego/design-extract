# Design Language: Raycast - Your shortcut to everything

> Extracted from `https://raycast.com` on June 25, 2026
> 3018 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#ff6363` | rgb(255, 99, 99) | hsl(0, 100%, 69%) | 5 |
| Secondary | `#8cd6ff` | rgb(140, 214, 255) | hsl(201, 100%, 77%) | 2 |
| Accent | `#56c2ff` | rgb(86, 194, 255) | hsl(202, 100%, 67%) | 1 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#ffffff` | hsl(0, 0%, 100%) | 5172 |
| `#6a6b6c` | hsl(210, 1%, 42%) | 361 |
| `#9c9c9d` | hsl(240, 1%, 61%) | 277 |
| `#434345` | hsl(240, 1%, 27%) | 125 |
| `#e6e6e6` | hsl(0, 0%, 90%) | 110 |
| `#2f3031` | hsl(210, 2%, 19%) | 44 |
| `#1b1c1e` | hsl(220, 5%, 11%) | 6 |
| `#8e8c90` | hsl(270, 2%, 56%) | 5 |
| `#111214` | hsl(220, 8%, 7%) | 1 |

### Background Colors

Used on large-area elements: `#07080a`, `#000000`, `#ffffff`, `#9ebed7`, `#111214`, `#d72a2a`

### Text Colors

Text color palette: `#ffffff`, `#9c9c9d`, `#2f3031`, `#6a6b6c`, `#e6e6e6`, `#ff6363`, `#434345`, `#8cd6ff`, `#000000`

### Gradients

```css
background-image: linear-gradient(137deg, rgba(17, 18, 20, 0.75) 4.87%, rgba(12, 13, 15, 0.9) 75.88%);
```

```css
background-image: conic-gradient(from -80deg at 0px 15px, rgba(0, 0, 0, 0) 0deg, rgb(236, 165, 167) 20%, rgba(0, 0, 0, 0) 25%), none;
```

```css
background-image: radial-gradient(85.77% 49.97% at 51% 5.12%, rgba(255, 150, 150, 0.11) 0px, rgba(222, 226, 255, 0.08) 45.83%, rgba(241, 242, 255, 0.02) 100%), none;
```

```css
background-image: linear-gradient(rgb(255, 99, 99), rgb(215, 42, 42));
```

```css
background-image: linear-gradient(135deg, rgb(86, 194, 255) 0%, rgb(19, 138, 242) 100%);
```

```css
background-image: linear-gradient(181deg, rgba(0, 0, 0, 0.1) 4.5%, rgba(255, 255, 255, 0.03) 99.51%);
```

```css
background-image: linear-gradient(137deg, rgb(17, 18, 20) 4.87%, rgb(12, 13, 15) 75.88%);
```

```css
background-image: radial-gradient(79.21% 79.21% at 42.35% 0px, rgb(120, 120, 120) 0px, rgb(40, 40, 40) 100%);
```

```css
background-image: radial-gradient(1139.98% 138.18% at 0px 0px, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0) 100%);
```

```css
background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(7, 8, 10) 50%);
```

```css
background-image: radial-gradient(75% 75% at 50% 91.9%, rgb(18, 18, 18) 0px, rgb(13, 13, 13) 100%);
```

```css
background-image: radial-gradient(51.07% 92.4% at 51% 7.61%, rgb(90, 90, 90) 0px, rgb(26, 26, 26) 100%);
```

```css
background-image: linear-gradient(138deg, rgba(32, 35, 91, 0.7) 22%, rgba(7, 9, 33, 0.7) 82%);
```

```css
background-image: linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.1));
```

```css
background-image: radial-gradient(94.21% 78.4% at 50% 29.91%, rgba(43, 94, 180, 0.7), rgba(13, 16, 35, 0.42));
```

```css
background-image: radial-gradient(30% 40% at 52% 36.91%, rgb(13, 110, 48), rgb(8, 53, 24));
```

```css
background-image: radial-gradient(94.21% 78.4% at 50% 29.91%, rgba(39, 61, 180, 0.7), rgba(15, 9, 38, 0.4));
```

```css
background-image: radial-gradient(84.35% 70.19% at 50% 38.11%, rgba(2, 96, 101, 0.57), rgba(5, 136, 178, 0.06));
```

```css
background-image: radial-gradient(90.35% 49.25% at 50% 59.06%, rgba(2, 61, 114, 0.7), rgba(5, 11, 28, 0.42));
```

```css
background-image: radial-gradient(84.6% 73.49% at 50% 26.51%, rgba(4, 63, 150, 0.7), rgba(6, 18, 37, 0.25));
```

```css
background-image: radial-gradient(99.74% 100% at 50% 0%, rgba(74, 21, 75, 0.7), rgba(29, 5, 29, 0.42));
```

```css
background-image: radial-gradient(94.21% 78.4% at 50% 29.91%, rgba(4, 63, 150, 0.7), rgba(5, 9, 29, 0.42));
```

```css
background-image: radial-gradient(94.21% 78.4% at 50% 29.91%, rgba(4, 62, 150, 0.7), rgba(16, 0, 43, 0.16));
```

```css
background-image: radial-gradient(86.88% 75.47% at 50% 24.53%, rgba(82, 48, 145, 0.7), rgba(26, 11, 51, 0.14));
```

```css
background-image: radial-gradient(126.42% 76.6% at 50% 32.26%, rgba(84, 95, 102, 0.7), rgba(0, 36, 69, 0.13));
```

```css
background-image: radial-gradient(181.77% 70.19% at 50% 38.11%, rgba(3, 91, 155, 0.7), rgba(0, 69, 150, 0.03));
```

```css
background-image: radial-gradient(13.65% 50%, rgba(245, 48, 107, 0.1) 0px, rgba(255, 103, 167, 0) 100%);
```

```css
background-image: repeating-linear-gradient(0deg, rgb(12, 13, 15), rgb(12, 13, 15) 1px, rgb(7, 8, 10) 1px, rgb(7, 8, 10));
```

```css
background-image: radial-gradient(49.41% 64.58% at 49.4% 0px, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0) 100%);
```

```css
background-image: linear-gradient(45deg, rgb(12, 13, 15) 0px, rgb(7, 8, 10) 100.67%);
```

```css
background-image: linear-gradient(90deg, rgba(86, 194, 255, 0.16) 1.41%, rgba(86, 194, 255, 0.06) 98.59%);
```

```css
background-image: radial-gradient(rgb(47, 48, 49) 0.5px, rgba(0, 0, 0, 0) 0px);
```

```css
background-image: linear-gradient(rgba(7, 8, 10, 0.8) 0.1%, rgb(7, 8, 10) 32.45%), radial-gradient(49.41% 64.58% at 49.4% 0px, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0) 100%);
```

```css
background-image: conic-gradient(from 136.95deg, rgb(2, 148, 254) -55.68deg, rgb(255, 33, 54) 113.23deg, rgb(155, 77, 255) 195deg, rgb(2, 148, 254) 304.32deg, rgb(255, 33, 54) 473.23deg);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#ffffff` | text, border, background | 5172 |
| `#6a6b6c` | text, border | 361 |
| `#9c9c9d` | text, border | 277 |
| `#434345` | border, text, background | 125 |
| `#e6e6e6` | background, text, border | 110 |
| `#2f3031` | text, border | 44 |
| `#08090c` | background, text | 15 |
| `#1b1c1e` | background, border | 6 |
| `#452324` | background | 5 |
| `#ff6363` | background, border, text | 5 |
| `#8e8c90` | border | 5 |
| `#9ebed7` | background | 3 |
| `#8cd6ff` | text, border | 2 |
| `#59d499` | background | 1 |
| `#56c2ff` | background | 1 |
| `#ffc531` | background | 1 |
| `#111214` | background | 1 |
| `#d72a2a` | background | 1 |

## Typography

### Font Families

- **Inter** — used for all (2247 elements)
- **SF Pro Text** — used for body (525 elements)
- **SF Pro** — used for body (215 elements)
- **GeistMono** — used for body (31 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 64px | 4rem | 600 | 70.4px | normal | h1 |
| 56px | 3.5rem | 400 | 65.52px | 0.2px | h3 |
| 32px | 2rem | 400 | 36.8px | normal | div, svg, path |
| 24px | 1.5rem | 600 | 28px | -0.05px | div, svg, path, h3 |
| 23.75px | 1.4844rem | 500 | 27.3125px | normal | div, svg, path |
| 22px | 1.375rem | 400 | 25.3px | normal | span |
| 20px | 1.25rem | 500 | normal | 0.2px | h2, p, span, h5 |
| 18px | 1.125rem | 400 | normal | 0.2px | p, span, script, div |
| 16px | 1rem | 400 | 18.4px | normal | html, head, meta, link |
| 14px | 0.875rem | 500 | normal | 0.2px | a, svg, path, span |
| 13px | 0.8125rem | 700 | 16px | normal | div, svg, g, path |
| 12px | 0.75rem | 400 | 19.2px | 0.2px | div, span, button, th |
| 11px | 0.6875rem | 600 | 10px | 0.8px | i, div |
| 10px | 0.625rem | 300 | normal | 0.5px | div |

### Heading Scale

```css
h1 { font-size: 64px; font-weight: 600; line-height: 70.4px; }
h3 { font-size: 56px; font-weight: 400; line-height: 65.52px; }
h3 { font-size: 24px; font-weight: 600; line-height: 28px; }
h2 { font-size: 20px; font-weight: 500; line-height: normal; }
h5 { font-size: 18px; font-weight: 400; line-height: normal; }
h5 { font-size: 14px; font-weight: 500; line-height: normal; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: 18.4px; }
```

### Font Weights in Use

`400` (1693x), `500` (912x), `700` (219x), `600` (188x), `300` (6x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-45 | 45px | 2.8125rem |
| spacing-56 | 56px | 3.5rem |
| spacing-64 | 64px | 4rem |
| spacing-72 | 72px | 4.5rem |
| spacing-80 | 80px | 5rem |
| spacing-96 | 96px | 6rem |
| spacing-102 | 102px | 6.375rem |
| spacing-120 | 120px | 7.5rem |
| spacing-128 | 128px | 8rem |
| spacing-137 | 137px | 8.5625rem |
| spacing-148 | 148px | 9.25rem |
| spacing-169 | 169px | 10.5625rem |
| spacing-200 | 200px | 12.5rem |
| spacing-212 | 212px | 13.25rem |
| spacing-217 | 217px | 13.5625rem |
| spacing-224 | 224px | 14rem |
| spacing-325 | 325px | 20.3125rem |
| spacing-370 | 370px | 23.125rem |
| spacing-400 | 400px | 25rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 6 |
| sm | 5px | 6 |
| md | 8px | 111 |
| lg | 11px | 159 |
| lg | 16px | 29 |
| xl | 19px | 1 |
| xl | 22px | 1 |
| full | 31px | 1 |
| full | 36px | 1 |
| full | 43px | 1 |
| full | 86px | 2 |
| full | 100px | 101 |
| full | 1000px | 1 |
| full | 99999px | 24 |

## Box Shadows

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 0px 2px, rgba(255, 255, 255, 0.19) 0px 0px 14px 0px, rgba(0, 0, 0, 0.2) 0px -1px 0.4px 0px inset, rgb(255, 255, 255) 0px 1px 0.4px 0px inset;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgb(27, 28, 30) 0px 0px 0px 1px, rgb(7, 8, 10) 0px 0px 0px 1px inset;
```

**xs (inset)** — blur: 1px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 1px 0px, rgba(0, 0, 0, 0.17) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 4px 3px 0px, rgba(0, 0, 0, 0.03) 0px 7px 3px 0px, rgba(0, 0, 0, 0) 0px 12px 3px 0px, rgba(0, 0, 0, 0.25) 0px 4px 4px 0px, rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(7, 13, 79, 0.05) 0px 0px 20px 3px, rgba(7, 13, 79, 0.05) 0px 0px 40px 20px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.25) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(7, 13, 79, 0.1) 0px 0px 20px 3px, rgba(85, 0, 98, 0.1) 0px 0px 40px 20px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(46, 212, 105, 0.05) 0px 0px 20px 3px, rgba(46, 212, 105, 0.05) 0px 0px 40px 20px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.4) 0px 30px 50px 0px, rgba(3, 122, 129, 0.09) 0px 4px 24px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.4) 0px 30px 50px 0px, rgba(3, 30, 129, 0.09) 0px 4px 24px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.4) 0px 30px 50px 0px, rgba(3, 15, 129, 0.09) 0px 4px 24px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.4) 0px 30px 50px 0px, rgba(51, 3, 129, 0.09) 0px 4px 24px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(7, 13, 79, 0.1) 0px 0px 20px 3px, rgba(7, 40, 79, 0.1) 0px 0px 40px 20px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.4) 0px 30px 50px 0px, rgba(3, 23, 129, 0.09) 0px 4px 24px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(215, 42, 42, 0.07) 1px 1px 0px 0px inset, rgba(255, 255, 255, 0.25) 0px 0.5px 0px 0px inset;
```

**xs (inset)** — blur: 1px
```css
box-shadow: rgba(255, 255, 255, 0.15) 0px 1px 1px 0px inset;
```

**xs (inset)** — blur: 2px
```css
box-shadow: rgba(255, 255, 255, 0.19) 0px 0px 2px 0px, rgba(255, 255, 255, 0.1) 0px 0.5px 0px 0px inset;
```

**xs (inset)** — blur: 0.5px
```css
box-shadow: rgba(0, 0, 0, 0.4) 0px 1.5px 0.5px 2.5px, rgb(0, 0, 0) 0px 0px 0.5px 1px, rgba(0, 0, 0, 0.25) 0px 2px 1px 1px inset, rgba(255, 255, 255, 0.2) 0px 1px 1px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px inset;
```

**xs (inset)** — blur: 1px
```css
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(154, 170, 255, 0.05) 0px 2px 40px 10px, rgba(154, 170, 255, 0.05) 0px 0px 16px -7px;
```

**sm** — blur: 2.377px
```css
box-shadow: rgba(0, 0, 0, 0.28) 0px 1.189px 2.377px 0px;
```

**sm** — blur: 4px
```css
box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
```

**md** — blur: 3px
```css
box-shadow: rgba(0, 0, 0, 0.03) 0px 7px 3px 0px, rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
```

**md (inset)** — blur: 3.462px
```css
box-shadow: rgba(0, 0, 0, 0.03) 0px 8.077px 3.462px 0px, rgba(0, 0, 0, 0.25) 0px 4.615px 4.615px 0px, rgba(255, 255, 255, 0.19) 0px 1.154px 0px 0px inset, rgba(255, 255, 255, 0.25) 0px 0px 6px 0px;
```

**md** — blur: 10px
```css
box-shadow: rgba(0, 0, 0, 0.11) 0px -4px 10px 0px;
```

**lg** — blur: 20px
```css
box-shadow: rgba(245, 48, 107, 0.1) 0px 0px 20px 0px;
```

**lg** — blur: 20px
```css
box-shadow: rgba(215, 201, 175, 0.05) 0px 0px 20px 5px, rgba(215, 201, 175, 0.05) 0px 0px 16px -7px;
```

**xl (inset)** — blur: 40px
```css
box-shadow: rgba(255, 255, 255, 0.03) 0px 0px 40px 20px, rgba(255, 255, 255, 0.3) 0px 0.5px 0px 0px inset;
```

**xl (inset)** — blur: 40px
```css
box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 40px 8px, rgba(0, 0, 0, 0.8) 0px 0px 0px 0.5px, rgba(255, 255, 255, 0.3) 0px 0.5px 0px 0px inset;
```

**xl (inset)** — blur: 50px
```css
box-shadow: rgba(0, 0, 0, 0.5) 0px 30px 50px 0px, rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(79, 7, 59, 0.1) 0px 0px 20px 3px, rgba(85, 0, 98, 0.1) 0px 0px 40px 20px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset;
```

**xl (inset)** — blur: 50px
```css
box-shadow: rgba(0, 0, 0, 0.5) 0px 30px 50px 0px, rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(7, 13, 79, 0.1) 0px 0px 20px 3px, rgba(85, 0, 98, 0.1) 0px 0px 40px 20px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset;
```

**xl (inset)** — blur: 50px
```css
box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 50px 0px, rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(3, 15, 129, 0.09) 0px 4px 24px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset;
```

**xl** — blur: 40px
```css
box-shadow: rgba(215, 42, 42, 0.05) -72px -50px 40px -60px;
```

## CSS Custom Properties

### Colors

```css
--font-color-rgb: 255,255,255;
--reverse-font-color-rgb: 0,0,0;
--lines-color-rgb: 255,255,255;
--color-bg: var(--grey-900);
--color-bg-100: rgb(16,17,17);
--color-bg-200: rgb(24,25,26);
--color-bg-300: rgb(49,49,51);
--color-bg-400: rgb(73,75,77);
--color-fg: hsl(240,11%,96%);
--color-fg-200: rgb(194,199,202);
--color-fg-300: #78787c;
--color-fg-400: rgb(94,99,102);
--color-yellow: hsl(43,100%,60%);
--color-yellow-transparent: hsla(43,100%,60%,0.15);
--color-red: hsl(0,100%,69%);
--color-red-transparent: hsla(0,100%,69%,0.15);
--color-blue: hsl(202,100%,67%);
--color-blue-transparent: hsla(202,100%,67%,0.15);
--color-green: hsl(151,59%,59%);
--color-green-transparent: hsla(151,59%,59%,0.15);
--color-border: hsl(195,5%,15%);
--color-button-bg: hsla(0,0%,100%,0.815);
--color-button-bg-hover: hsl(0,0%,100%);
--color-button-fg: rgb(24,25,26);
--spring-1: linear(0.000000 0%,0.005927 1%,0.022466 2%,0.047872 3%,0.080554 4%,0.119068 5%,0.162116 6%,0.208536 7.000000000000001%,0.2573 8%,0.3075 9%,0.358346 10%,0.409157 11%,0.45935 12%,0.508438 13%,0.556014 14.000000000000002%,0.601751 15%,0.645389 16%,0.686733 17%,0.72564 18%,0.762019 19%,0.795818 20%,0.827026 21%,0.855662 22%,0.881772 23%,0.905423 24%,0.926704 25%,0.945714 26%,0.962568 27%,0.977386 28.000000000000004%,0.990295 28.999999999999996%,1.001426 30%,1.010911 31%,1.018881 32%,1.025465 33%,1.030792 34%,1.034982 35%,1.038155 36%,1.040423 37%,1.041892 38%,1.042662 39%,1.042827 40%,1.042473 41%,1.04168 42%,1.040522 43%,1.039065 44%,1.037371 45%,1.035493 46%,1.03348 47%,1.031376 48%,1.029217 49%,1.027037 50%,1.024864 51%,1.022722 52%,1.020631 53%,1.018608 54%,1.016667 55.00000000000001%,1.014817 56.00000000000001%,1.013067 56.99999999999999%,1.011422 57.99999999999999%,1.009887 59%,1.008462 60%,1.007148 61%,1.005944 62%,1.004847 63%,1.003855 64%,1.002964 65%,1.002169 66%,1.001466 67%,1.000848 68%,1.000311 69%,0.999849 70%,0.999457 71%,0.999128 72%,0.998858 73%,0.99864 74%,0.99847 75%,0.998342 76%,0.998253 77%,0.998196 78%,0.998169 79%,0.998167 80%,0.998186 81%,0.998224 82%,0.998276 83%,0.998341 84%,0.998415 85%,0.998497 86%,0.998584 87%,0.998675 88%,0.998768 89%,0.998861 90%,0.998954 91%,0.999045 92%,0.999134 93%,0.99922 94%,0.999303 95%,0.999381 96%,0.999455 97%,0.999525 98%,0.999589 99%,0.99965 100%);
--key-bg-end-color: rgb(13, 13, 13);
--key-bg-start-color: rgb(18, 18, 18);
```

### Spacing

```css
--spacing-none: 0px;
--spacing-0-5: 4px;
--spacing-1: 8px;
--spacing-1-5: 12px;
--spacing-2: 16px;
--spacing-2-5: 20px;
--spacing-3: 24px;
--spacing-4: 32px;
--spacing-5: 40px;
--spacing-6: 48px;
--spacing-7: 56px;
--spacing-8: 64px;
--spacing-9: 80px;
--spacing-10: 96px;
--spacing-11: 112px;
--spacing-12: 168px;
--spacing-13: 224px;
--monospace-font: var(--font-jetbrains-mono),Menlo,Monaco,Courier,monospace;
--grid-gap: 32px;
--navbar-container-padding-top: var(--spacing-2);
--navbar-total-spacing: calc(var(--navbar-height) + (2 * var(--navbar-container-padding-top)));
--removed-body-scroll-bar-size: 0px;
```

### Typography

```css
--main-font: var(--font-inter),sans-serif;
--font-jetbrains-mono: "JetBrains Mono","JetBrains Mono Fallback";
--font-geist-mono: "GeistMono",ui-monospace,SFMono-Regular,Roboto Mono,Menlo,Monaco,Liberation Mono,DejaVu Sans Mono,Courier New,monospace;
--font-inter: "Inter","Inter Fallback";
```

### Radii

```css
--radius-md: 6px;
```

### Other

```css
--rounding-none: 0px;
--rounding-xs: 4px;
--rounding-sm: 6px;
--rounding-normal: 8px;
--rounding-md: 12px;
--rounding-lg: 16px;
--rounding-xl: 20px;
--rounding-xxl: 24px;
--rounding-full: 100%;
--Base-White: #ffffff;
--grey-50: #e6e6e6;
--grey-100: #cdcece;
--grey-200: #9c9c9d;
--grey-300: #6a6b6c;
--grey-400: #434345;
--grey-500: #2f3031;
--grey-600: #1b1c1e;
--grey-700: #111214;
--grey-800: #0c0d0f;
--grey-900: #07080a;
--Base-Black: #000000;
--container-xs-width: 746px;
--container-sm-width: 1064px;
--container-width: 1204px;
--container-lg-width: 1280px;
--navbar-width: var(--container-width);
--background: var(--grey-900);
--reverse-background: #ffffff;
--blue-dark: #56c2ff;
--red-dark: rgba(255,99,99,1);
--navbar-height: 58px;
--r2: 0deg;
--x: 0px;
```

### Dependencies

```css
0: --font-inter;
0: --font-jetbrains-mono;
0: --container-width;
0: --grey-900;
0: --grey-900;
0: --spacing-2;
0: --navbar-height;
1: --navbar-container-padding-top;
```

### Semantic

```css
--color-green: hsl(151,59%,59%);
--color-green-transparent: hsla(151,59%,59%,0.15);
--color-yellow: hsl(43,100%,60%);
--color-yellow-transparent: hsla(43,100%,60%,0.15);
--red-dark: rgba(255,99,99,1);
--color-red: hsl(0,100%,69%);
--color-red-transparent: hsla(0,100%,69%,0.15);
--blue-dark: #56c2ff;
--color-blue: hsl(202,100%,67%);
--color-blue-transparent: hsla(202,100%,67%,0.15);
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| xs | 375px | min-width |
| 400px | 400px | min-width |
| 408px | 408px | max-width |
| sm | 420px | min-width |
| sm | 480px | min-width |
| sm | 520px | min-width |
| sm | 530px | min-width |
| 548px | 548px | min-width |
| 563px | 563px | max-width |
| sm | 600px | max-width |
| sm | 640px | min-width |
| md | 720px | min-width |
| md | 767px | min-width |
| md | 768px | min-width |
| md | 784px | min-width |
| md | 800px | min-width |
| 840px | 840px | min-width |
| 880px | 880px | min-width |
| 900px | 900px | min-width |
| 920px | 920px | min-width |
| lg | 960px | min-width |
| lg | 1000px | min-width |
| lg | 1024px | min-width |
| lg | 1050px | min-width |
| lg | 1064px | min-width |
| lg | 1080px | min-width |
| 1200px | 1200px | min-width |
| 1204px | 1204px | min-width |

## Transitions & Animations

**Easing functions:** `ease`, `cubic-bezier(0.23, 1, 0.32, 1)`, `cubic-bezier(0.165, 0.84, 0.44, 1)`, `cubic-bezier(0.075, 0.82, 0.165, 1)`

**Durations:** `0.3s`, `0.2s`, `0.5s`, `0.25s`, `0.1s`, `1s`, `0.4s`, `0.15s`, `1.5s`, `2s`, `0.85s`, `0.65s`, `1.2s`, `0.9s`

### Common Transitions

```css
transition: all;
transition: height 0.3s, transform 0.3s;
transition: transform 0.2s;
transition: transform 0.5s, opacity 0.3s;
transition: transform 0.5s, opacity 0.25s;
transition: 0.2s ease-in-out;
transition: background-image 0.2s, background-color 0.2s, box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;
transition: 0.2s;
transition: 0.3s;
transition: opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1), transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), color 0.2s cubic-bezier(0.23, 1, 0.32, 1), --key-bg-start-color 0.4s cubic-bezier(0.23, 1, 0.32, 1), --key-bg-end-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
```

### Keyframe Animations

**search_nightRider__a2oGM**
```css
@keyframes search_nightRider__a2oGM {
  0%, 100% { left: 0px; transform: translateX(0px); }
  50% { left: 100%; transform: translateX(-100%); }
}
```

**Gallery_progress__FmE_S**
```css
@keyframes Gallery_progress__FmE_S {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
```

**InstallViaWinget_iconSuccess__hI9N1**
```css
@keyframes InstallViaWinget_iconSuccess__hI9N1 {
  0% { opacity: 0; transform: scale(0.8); }
  50% { transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
}
```

**RaycastWindow_loadingSweep__UKb0Y**
```css
@keyframes RaycastWindow_loadingSweep__UKb0Y {
  0% { left: 0px; opacity: 0; }
  100% { left: 26%; opacity: 1; }
}
```

**RaycastWindow_blink__2uJwJ**
```css
@keyframes RaycastWindow_blink__2uJwJ {
  50% { opacity: 0; }
}
```

**AIShowCase_progress__VqqNs**
```css
@keyframes AIShowCase_progress__VqqNs {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
```

**FeatureWall_progress__Gdb_p**
```css
@keyframes FeatureWall_progress__Gdb_p {
  0% { transform: scaleX(0); }
  5% { transform: scaleX(0.1); }
  100% { transform: scaleX(0.95); }
}
```

**HeroAnnouncement_x__3wAWd**
```css
@keyframes HeroAnnouncement_x__3wAWd {
  0% { --x: 20px; }
  32.8228% { --x: 206px; }
  50% { --x: 206px; }
  82.8228% { --x: 20px; }
  100% { --x: 20px; }
}
```

**HeroAnnouncement_rotating2__GbW_t**
```css
@keyframes HeroAnnouncement_rotating2__GbW_t {
  0% { --r2: 0deg; }
  32.8228% { --r2: 0deg; }
  50% { --r2: 180deg; }
  82.8228% { --r2: 180deg; }
  100% { --r2: 360deg; }
}
```

**ai-chat_blink__XTGtJ**
```css
@keyframes ai-chat_blink__XTGtJ {
  50% { opacity: 0; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (25 instances)

```css
.buttons {
  background-color: rgb(230, 230, 230);
  color: rgb(67, 67, 69);
  font-size: 24px;
  font-weight: 500;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Cards (225 instances)

```css
.cards {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 1.189px 2.377px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (2 instances)

```css
.inputs {
  background-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
  border-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  font-size: 14px;
  padding-top: 8px;
  padding-right: 12px;
}
```

### Links (136 instances)

```css
.links {
  color: rgb(156, 156, 157);
  font-size: 14px;
  font-weight: 500;
}
```

### Navigation (66 instances)

```css
.navigation {
  background-color: rgba(255, 255, 255, 0.9);
  color: rgb(255, 255, 255);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
  box-shadow: rgba(255, 255, 255, 0.15) 0px 1px 1px 0px inset;
}
```

### Footer (106 instances)

```css
.footer {
  color: rgb(156, 156, 157);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 14px;
}
```

### Dropdowns (9 instances)

```css
.dropdowns {
  background-color: rgba(34, 34, 34, 0.85);
  border-radius: 6px;
  border-color: rgb(255, 255, 255);
  padding-top: 0px;
}
```

### Tables (1 instances)

```css
.tables {
  border-color: rgb(255, 255, 255);
  cell-style: [object Object];
}
```

### Badges (8 instances)

```css
.badges {
  background-color: rgb(27, 28, 30);
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Avatars (24 instances)

```css
.avatars {
  border-radius: 99999px;
}
```

### Tooltips (1 instances)

```css
.tooltips {
  color: rgb(255, 255, 255);
  font-size: 14px;
  border-radius: 6px;
  padding-top: 1px;
  padding-right: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
}
```

### Switches (4 instances)

```css
.switches {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 0px;
  border-color: rgb(255, 255, 255);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 6 instances, 1 variant

**Variant 1** (6 instances)

```css
  background: rgb(230, 230, 230);
  color: rgb(47, 48, 49);
  padding: 8px 12px 8px 12px;
  border-radius: 8px;
  border: 0px none rgb(47, 48, 49);
  font-size: 14px;
  font-weight: 500;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

### Button — 3 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(156, 156, 157);
  padding: 1px 6px 1px 6px;
  border-radius: 0px;
  border: 0px none rgb(156, 156, 157);
  font-size: 12px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgb(230, 230, 230);
  color: rgb(47, 48, 49);
  padding: 2px 12px 2px 12px;
  border-radius: 4px;
  border: 0px none rgb(47, 48, 49);
  font-size: 14px;
  font-weight: 500;
```

### Card — 17 instances, 1 variant

**Variant 1** (17 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 20px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

### Button — 2 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(106, 107, 108);
  padding: 20px 20px 20px 20px;
  border-radius: 86px;
  border: 1px 1px 0px solid solid none rgba(255, 255, 255, 0.06) rgba(255, 255, 255, 0.06) rgb(106, 107, 108);
  font-size: 16px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 20px 20px 20px 20px;
  border-radius: 86px;
  border: 1px 1px 0px solid solid none rgba(255, 255, 255, 0.06) rgba(255, 255, 255, 0.06) rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

### Card — 24 instances, 1 variant

**Variant 1** (24 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 24px 24px 24px 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06) rgba(255, 255, 255, 0.06) rgba(0, 0, 0, 0);
  font-size: 16px;
  font-weight: 600;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 8px 8px 8px 8px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 16px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 16px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 16px;
  font-weight: 400;
```

## Layout System

**334 grid containers** and **839 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 818px | 16px |
| 1200px | 0px |
| 1280px | 24px |
| 1204px | 8px |
| 100% | 0px |
| 320px | 24px |
| 2000px | 0px |
| 490px | 0px |
| 400px | 0px |
| 488px | 0px |
| 362px | 0px |
| 1064px | 24px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 1-column | 289x |
| 2-column | 38x |
| 5-column | 2x |
| 3-column | 2x |
| 6-column | 1x |

### Grid Templates

```css
grid-template-columns: 81.5px 355px 355px 355px 81.5px;
gap: 1px;
grid-template-columns: 440px 679px;
gap: 85px;
grid-template-columns: 1184px 1184px 1184px 1184px 1184px;
grid-template-columns: 146.656px 146.672px 146.672px 146.656px 146.672px 146.672px;
gap: 32px;
grid-template-columns: 582px 582px;
gap: 40px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 777x |
| column/nowrap | 56x |
| row/wrap | 6x |

**Gap values:** `10px`, `12px`, `13px`, `16px`, `16px 24px`, `1px`, `20px`, `24px`, `25px`, `29px`, `2px`, `32px`, `3px`, `40px`, `48px`, `4px`, `4px 24px`, `56px`, `56px 40px`, `64px`, `6px`, `80px`, `85px`, `8px`, `96px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 10 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#2f3031` | `#e6e6e6` | 10.6:1 | AAA |
| `#ffffff` | `#1b1c1e` | 17.05:1 | AAA |

## Design System Score

**Overall: 75/100 (Grade: C)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 50/100 |
| Border Radius Consistency | 65/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 32 unique shadows — consider a 3-level elevation scale (sm/md/lg)
- 9 !important rules — prefer specificity over overrides
- 75% of CSS is unused — consider purging
- 6212 duplicate CSS declarations

## Gradients

**34 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 137deg | 2 | brand |
| conic | from -80deg at 0px 15px | 3 | bold |
| radial | — | 4 | bold |
| linear | — | 2 | brand |
| linear | 135deg | 2 | brand |
| linear | 181deg | 2 | brand |
| linear | 137deg | 2 | brand |
| radial | — | 3 | bold |
| radial | — | 3 | bold |
| linear | — | 2 | brand |
| radial | — | 3 | bold |
| radial | — | 3 | bold |
| linear | 138deg | 2 | brand |
| linear | — | 2 | brand |
| radial | — | 3 | bold |

```css
background: linear-gradient(137deg, rgba(17, 18, 20, 0.75) 4.87%, rgba(12, 13, 15, 0.9) 75.88%);
background: conic-gradient(from -80deg at 0px 15px, rgba(0, 0, 0, 0) 0deg, rgb(236, 165, 167) 20%, rgba(0, 0, 0, 0) 25%);
background: radial-gradient(85.77% 49.97% at 51% 5.12%, rgba(255, 150, 150, 0.11) 0px, rgba(222, 226, 255, 0.08) 45.83%, rgba(241, 242, 255, 0.02) 100%);
background: linear-gradient(rgb(255, 99, 99), rgb(215, 42, 42));
background: linear-gradient(135deg, rgb(86, 194, 255) 0%, rgb(19, 138, 242) 100%);
```

## Z-Index Map

**6 unique z-index values** across 2 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| dropdown | 200,200 | div.F.l.a.s.h.M.e.s.s.a.g.e._.f.l.a.s.h.C.o.n.t.a.i.n.e.r._._.P.e.E.j.m |
| base | -1,3 | div.p.a.g.e._.h.e.r.o.B.a.c.k.g.r.o.u.n.d._._.M.Q.q.b.j, div.K.e.y.b.o.a.r.d._.k.e.y.b.o.a.r.d._._.L.n.3.n.Q, img.A.I.S.h.o.w.C.a.s.e._.b.g._._.Y.Z.5.G.G |

## SVG Icons

**55 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 7 |
| sm | 13 |
| md | 30 |
| lg | 3 |
| xl | 2 |

**Icon colors:** `#FF6363`, `#E6E6E6`, `#fff`, `currentColor`, `#151515`, `white`, `url(#paint0_linear_2708_14370)`, `url(#paint0_linear_2708_2690)`, `url(#paint0_linear_2708_15051)`, `#D8D8D8`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Inter | self-hosted | 100 900 | normal |
| JetBrains Mono | self-hosted | 100 800 | normal |
| GeistMono | self-hosted | 100 900 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 53 | objectFit: fill, borderRadius: 0px, shape: square |
| general | 31 | objectFit: fill, borderRadius: 0px, shape: square |
| avatar | 24 | objectFit: cover, borderRadius: 99999px, shape: circular |
| gallery | 6 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (88x), 16:9 (20x), 21:9 (1x), 3:2 (1x), 2:1 (1x), 3:4 (1x), 4:3 (1x), 2.8:1 (1x)

## Motion Language

**Feel:** responsive · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `100ms` | 100 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `500ms` | 500 |
| `xl` | `850ms` | 850 |
| `xxl` | `1.5s` | 1500 |

### Easing Families

- **ease-in-out** (87 uses) — `ease`
- **ease-out** (200 uses) — `cubic-bezier(0.23, 1, 0.32, 1)`, `cubic-bezier(0.165, 0.84, 0.44, 1)`, `cubic-bezier(0.075, 0.82, 0.165, 1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `page_fade-in-up__Z4CQm` | slide-y | opacity, transform | 2 |
| `RaycastWindow_blink__gOQ01` | fade | opacity | 3 |
| `CalculatorTimeShowcase_blink__8cpQK` | fade | opacity | 1 |
| `ExtensionHighlight_slideIn__jf_v9` | slide-y | opacity, transform | 17 |

## Component Anatomy

### card — 44 instances

**Slots:** media

### button — 14 instances

**Slots:** label, icon

## Brand Voice

**Tone:** neutral · **Pronoun:** third-person · **Headings:** unknown (tight)

### Top CTA Verbs

- **download** (8)
- **install** (2)
- **send** (1)

### Button Copy Patterns

- "download" (2×)
- "download for mac
download for windows (beta)" (2×)
- "download for mac" (2×)
- "download for windows (beta)" (2×)
- "install via homebrew" (2×)
- "send" (1×)

## Page Intent

**Type:** `landing` (confidence 0.45)
**Description:** A collection of powerful productivity tools all within an extendable launcher.

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.299 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 99999px |
| backdrop-filter in use | no |
| Gradients | 34 |

## Imagery Style

**Label:** `photography` (confidence 0.079)
**Counts:** total 114, svg 0, icon 35, screenshot-like 0, photo-like 18
**Dominant aspect:** square-ish
**Radius profile on images:** full

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Inter` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
