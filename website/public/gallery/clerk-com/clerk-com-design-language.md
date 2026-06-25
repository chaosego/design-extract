# Design Language: Clerk | Authentication and User Management

> Extracted from `https://clerk.com` on June 25, 2026
> 5000 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#6c47ff` | rgb(108, 71, 255) | hsl(252, 100%, 64%) | 5 |
| Secondary | `#1cc4ff` | rgb(28, 196, 255) | hsl(196, 100%, 55%) | 2 |
| Accent | `#5de3ff` | rgb(93, 227, 255) | hsl(190, 100%, 68%) | 2 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#d9d9de` | hsl(240, 7%, 86%) | 4902 |
| `#000000` | hsl(0, 0%, 0%) | 4526 |
| `#ffffff` | hsl(0, 0%, 100%) | 176 |
| `#131316` | hsl(240, 7%, 8%) | 164 |
| `#747686` | hsl(233, 7%, 49%) | 137 |
| `#5e5f6e` | hsl(236, 8%, 40%) | 79 |
| `#2f3037` | hsl(233, 8%, 20%) | 39 |
| `#9394a1` | hsl(236, 7%, 60%) | 38 |
| `#696a78` | hsl(236, 7%, 44%) | 27 |
| `#eeeef0` | hsl(240, 6%, 94%) | 26 |
| `#212126` | hsl(240, 7%, 14%) | 21 |
| `#42434d` | hsl(235, 8%, 28%) | 12 |

### Background Colors

Used on large-area elements: `#f7f7f8`, `#f8f8f8`, `#131316`, `#ffffff`, `#212126`, `#2d2e3d`, `#29292e`, `#25252a`, `#2f3037`

### Text Colors

Text color palette: `#000000`, `#ffffff`, `#131316`, `#747686`, `#5e5f6e`, `#212126`, `#6c47ff`, `#9394a1`, `#696a78`, `#42434d`

### Gradients

```css
background-image: linear-gradient(rgba(19, 19, 22, 0) 45%, rgba(19, 19, 22, 0.03) 55%), none;
```

```css
background-image: radial-gradient(154.86% 76.83% at 50% 22.26%, color(srgb 0.968627 0.968627 0.972549 / 0.4) 8.98%, rgb(247, 247, 248) 45.99%);
```

```css
background-image: linear-gradient(to right in oklab, rgba(255, 255, 255, 0.24) 0%, rgb(255, 255, 255) 100%);
```

```css
background-image: linear-gradient(oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(to right in oklab, rgb(255, 255, 255) 0%, rgba(240, 235, 255, 0.5) 100%);
```

```css
background-image: linear-gradient(rgba(58, 212, 253, 0.08) 0%, rgba(98, 72, 246, 0.15) 50.73%);
```

```css
background-image: radial-gradient(79.87% 92.91% at 81.25% 12.5%, rgb(255, 255, 255) 0%, rgb(25, 25, 27) 100%);
```

```css
background-image: linear-gradient(to right bottom, oklab(0.999994 0.0000455678 0.0000200868 / 0.05) 0%, rgba(0, 0, 0, 0) 65%);
```

```css
background-image: radial-gradient(50% 100% at 50% 0%, color(srgb 0 0 0 / 0), color(srgb 0.129412 0.129412 0.14902 / 0.68) 61.5%, rgb(33, 33, 38));
```

```css
background-image: linear-gradient(to right top, oklab(0 0 0 / 0) 0%, oklab(0 0 0 / 0) 50%, oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 100%);
```

```css
background-image: linear-gradient(to right top, lab(84.5189 -31.4667 -23.9754 / 0.2) 0%, lab(0 0 0 / 0) 50%, lab(0 0 0 / 0) 100%);
```

```css
background-image: linear-gradient(in oklab, rgb(39, 39, 45) 0%, rgb(55, 56, 64) 100%);
```

```css
background-image: linear-gradient(to right bottom, oklab(0 0 0 / 0) 30%, oklab(0.952604 -0.0417787 -0.0206957 / 0.7) 50%, oklab(0 0 0 / 0) 70%);
```

```css
background-image: linear-gradient(oklab(0.999994 0.0000455678 0.0000200868 / 0.15) 0%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(to left, oklab(0.999994 0.0000455678 0.0000200868 / 0.08) 0%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(in oklab, rgb(94, 95, 110) 65%, rgb(66, 67, 77) 100%);
```

```css
background-image: radial-gradient(97.14% 100% at 50% 0%, rgba(33, 33, 38, 0) 42.04%, rgb(33, 33, 38) 89.82%);
```

```css
background-image: linear-gradient(oklab(0.999994 0.0000455678 0.0000200868 / 0.05) 0%, rgba(0, 0, 0, 0) 67%);
```

```css
background-image: linear-gradient(to right bottom, oklab(0.999994 0.0000455678 0.0000200868 / 0.05) 0%, rgba(0, 0, 0, 0) 64%);
```

```css
background-image: radial-gradient(111.72% 100% at 50% 0%, rgba(118, 237, 255, 0.2), rgba(118, 237, 255, 0) 53.91%);
```

```css
background-image: linear-gradient(to right bottom, oklab(0 0 0 / 0) 35%, oklab(0.999994 0.0000455678 0.0000200868 / 0.25) 50%, oklab(0 0 0 / 0) 65%);
```

```css
background-image: radial-gradient(circle at 50% 22px, rgba(33, 33, 38, 0), rgb(33, 33, 38));
```

```css
background-image: linear-gradient(rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 67.19%);
```

```css
background-image: radial-gradient(circle at 50% 0%, rgba(114, 233, 255, 0.2), rgba(114, 233, 255, 0));
```

```css
background-image: linear-gradient(to top in oklab, rgb(33, 33, 38) 0%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: radial-gradient(172px 152px, rgba(33, 33, 38, 0), rgb(33, 33, 38));
```

```css
background-image: radial-gradient(98.23% 104.12% at 50% -4.12%, rgba(255, 255, 255, 0.05) 6.12%, rgba(255, 255, 255, 0) 55.4%);
```

```css
background-image: linear-gradient(in oklab, rgb(47, 48, 55) 0%, rgb(39, 39, 45) 100%);
```

```css
background-image: linear-gradient(rgb(39, 39, 45) 0%, oklab(0.310988 0.00201792 -0.012381 / 0.5) 100%);
```

```css
background-image: repeating-radial-gradient(oklab(0 0 0 / 0.2) 2px, rgba(0, 0, 0, 0) 4px);
```

```css
background-image: linear-gradient(90deg, rgba(0, 0, 0, 0), oklab(0.999994 0.0000455678 0.0000200868 / 0.5) 30%, rgb(255, 255, 255), oklab(0.999994 0.0000455678 0.0000200868 / 0.5) 70%, rgba(0, 0, 0, 0));
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#d9d9de` | border, text | 4902 |
| `#000000` | text, border, background | 4526 |
| `#ffffff` | background, text, border | 176 |
| `#131316` | background, text | 164 |
| `#747686` | text, background | 137 |
| `#5e5f6e` | text, background, border | 79 |
| `#2f3037` | background, text | 39 |
| `#9394a1` | text | 38 |
| `#696a78` | text | 27 |
| `#eeeef0` | background, border | 26 |
| `#212126` | text, background | 21 |
| `#42434d` | background, text | 12 |
| `#b7b8c2` | text | 8 |
| `#ef4444` | text, background | 6 |
| `#6c47ff` | background, text | 5 |
| `#1cc4ff` | background | 2 |
| `#5de3ff` | text, background | 2 |
| `#9785ff` | text | 1 |
| `#4a4c5b` | background | 1 |
| `#0ba8fa` | background | 1 |
| `#3ad4fd` | border | 1 |

## Typography

### Font Families

- **geistNumbers** — used for all (3943 elements)
- **soehneMono** — used for body (51 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 64px | 4rem | 700 | 72px | -1.6px | h1 |
| 32px | 2rem | 600 | 40px | -0.48px | p |
| 24px | 1.5rem | 700 | 32px | normal | span, number-flow-react |
| 18px | 1.125rem | 400 | 28px | normal | p |
| 17px | 1.0625rem | 700 | 24px | -0.17px | h2, p, h1 |
| 16px | 1rem | 400 | 24px | normal | html, head, style, meta |
| 15px | 0.9375rem | 450 | 24px | normal | p |
| 14px | 0.875rem | 700 | 20px | -0.14px | h2 |
| 13px | 0.8125rem | 500 | 24px | normal | a, span, svg, path |
| 12px | 0.75rem | 600 | 24px | 1.2px | button, span, svg, path |
| 11px | 0.6875rem | 400 | 16px | -0.11px | div, p, span |
| 10px | 0.625rem | 500 | 14px | normal | p, div, svg, g |
| 9px | 0.5625rem | 500 | 12px | normal | p |

### Heading Scale

```css
h1 { font-size: 64px; font-weight: 700; line-height: 72px; }
h2 { font-size: 17px; font-weight: 700; line-height: 24px; }
h3 { font-size: 16px; font-weight: 400; line-height: 24px; }
h2 { font-size: 14px; font-weight: 700; line-height: 20px; }
h2 { font-size: 13px; font-weight: 500; line-height: 24px; }
```

### Body Text

```css
body { font-size: 13px; font-weight: 500; line-height: 24px; }
```

### Font Weights in Use

`400` (4569x), `500` (317x), `700` (68x), `600` (45x), `450` (1x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-46 | 46px | 2.875rem |
| spacing-56 | 56px | 3.5rem |
| spacing-76 | 76px | 4.75rem |
| spacing-94 | 94px | 5.875rem |
| spacing-128 | 128px | 8rem |
| spacing-140 | 140px | 8.75rem |
| spacing-151 | 151px | 9.4375rem |
| spacing-158 | 158px | 9.875rem |
| spacing-167 | 167px | 10.4375rem |
| spacing-172 | 172px | 10.75rem |
| spacing-192 | 192px | 12rem |
| spacing-220 | 220px | 13.75rem |
| spacing-259 | 259px | 16.1875rem |
| spacing-272 | 272px | 17rem |
| spacing-302 | 302px | 18.875rem |
| spacing-320 | 320px | 20rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 9 |
| sm | 5px | 2 |
| md | 8px | 25 |
| lg | 12px | 3 |
| lg | 16px | 12 |
| full | 38px | 1 |
| full | 44px | 1 |
| full | 50px | 4 |

## Box Shadows

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(66, 67, 77) 0px 0px 0px 0.5px, oklab(0.999994 0.0000455678 0.0000200868 / 0.07) 0px 1px 0px 0px inset, oklab(0.249859 0.00254738 -0.00901626 / 0.2) 0px 1px 3px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.9) 0px 0px 0px 0.5px inset, rgba(19, 19, 22, 0.15) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.04) 0px 2px 3px 0px, rgba(34, 42, 53, 0.04) 0px 4px 6px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.08) 0px 2px 3px -1px, oklab(0.188081 0.0016512 -0.00579907 / 0.18) 0px 0px 0px 0.5px, oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0px 1px 0px 0px inset;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(108, 71, 255) 0px 0px 0px 0.5px, oklab(0.999994 0.0000455678 0.0000200868 / 0.07) 0px 1px 0px 0px inset, oklab(0.249859 0.00254738 -0.00901626 / 0.2) 0px 1px 3px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.08) 0px 2px 3px -1px, oklab(0.188081 0.0016512 -0.00579907 / 0.1) 0px 0px 0px 0.5px, oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0px 1px 0px 0px inset;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px -9px 11px -10px, rgba(0, 0, 0, 0.05) 0px -0.25px 0px 0.25px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(147, 148, 161) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.188081 0.0016512 -0.00579907 / 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.04) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(47, 48, 55, 0.2) 0px 15px 35px -5px, rgba(34, 42, 53, 0.04) 0px 4px 6px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgb(217, 217, 222) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 3px -1px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 16px 36px -6px, rgba(0, 0, 0, 0.08) 0px 8px 16px -3px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 0.82px 1.64px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1.64px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0.11) 0px 0px 0px 1px, rgba(0, 0, 0, 0.07) 0px 0px 1px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 1px, rgba(0, 0, 0, 0.07) 0px 0px 1px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0.82px, rgba(0, 0, 0, 0.08) 0px 0px 1.64px 0px, rgba(0, 0, 0, 0.06) 0px 0.82px 1.64px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(238, 238, 240) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 0px -1px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0.28) 0px 0px 0px 1px, rgba(0, 0, 0, 0.28) 0px 0px 1px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(217, 217, 222) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.025) 0px 1px 0px 0px inset, oklab(0.999994 0.0000455678 0.0000200868 / 0.025) 0px 0px 0px 1px inset;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.188081 0.0016512 -0.00579907 / 0.5) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.03) 0px 1px 0px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.5) 0px 2px 12px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.05) 0px 1px 1px 0px inset, rgba(0, 0, 0, 0.2) 0px 2px 13px 0px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.75) 0px 0px 0px 2px inset;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.05) 0px 1px 0px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0px 1px 0px 0px inset;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(39, 39, 45) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, lab(84.5189 -31.4667 -23.9754 / 0.08) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.07) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 4px 4px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(239, 68, 68, 0.12) 0px 0px 0px 1px inset, rgba(239, 68, 68, 0.12) 0px 0px 10px 2px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.15) 0px 0px 1px 0px inset;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.08) 0px 1px 0px 0px inset;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.02) 0px 1px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.06) 0px -1px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.02) 0px -2px 4px 0px, oklab(0 0 0 / 0.2) 0px 1px 1px 0px inset;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.08) 2.5px -2.5px 0px -2px inset;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.08) -2.5px 2.5px 0px -2px inset;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.2) 0px 0px 0px 1px, oklab(0 0 0 / 0.1) 0px 4px 6px -1px, oklab(0 0 0 / 0.1) 0px 2px 4px -2px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.809096 -0.102602 -0.0875665 / 0.1) 0px 0px 6px 3px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.06) 0px 1px 0px 0px, rgba(0, 0, 0, 0.15) 0px 2px 5px 0px inset;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(107, 231, 255, 0.3) 0px 0px 9px 0px;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.4) 0px 2px 5px 0px;
```

**xs** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.05) 0px 1px 0px 0px;
```

**xs (inset)** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset;
```

**xs (inset)** — blur: 1px
```css
box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 1px 0px, rgba(0, 0, 0, 0.2) 0px 2px 3px 0px, rgba(255, 255, 255, 0.07) 0px 1px 1px 0px inset, rgb(47, 48, 55) 0px 0px 0px 1px;
```

**xs (inset)** — blur: 1px
```css
box-shadow: rgba(255, 255, 255, 0.05) 0px 1px 1px 0px inset, rgba(0, 0, 0, 0.2) 0px 2px 13px 0px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(19, 19, 22, 0.5) 0px 0px 0px 3px;
```

**xs** — blur: 3px
```css
box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 3px 1px;
```

**xs (inset)** — blur: 2px
```css
box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 2px 0px, rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset;
```

**sm (inset)** — blur: 8px
```css
box-shadow: rgba(107, 231, 255, 0.3) 0px 0px 8px 1px, rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset;
```

**lg (inset)** — blur: 12px
```css
box-shadow: rgba(19, 19, 22, 0.6) 0px 6px 12px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset;
```

**lg** — blur: 19px
```css
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 19px 4px, rgba(255, 255, 255, 0.04) 0px -10px 16px -4px, rgba(255, 255, 255, 0.01) 0px 0px 0px 1px, rgba(255, 255, 255, 0.02) 0px 1px 0px 0px;
```

## CSS Custom Properties

### Colors

```css
--color-purple-200: #d7d4ff;
--color-slate-200: lab(91.7353% -.998765 -4.76968);
--color-sky-500: #00aee3;
--color-pink-500: lab(56.9303% 76.8162 -8.07021);
--color-orange-600: #ea520c;
--color-red-900: #7f1d1d;
--color-orange-800: #9a2f12;
--color-blue-700: #1d4ed8;
--color-purple-800: #4818bf;
--color-orange-900: #7c2912;
--tw-inset-ring-shadow: 0 0 #0000;
--color-orange-50: #fff6ed;
--color-blue-300: #93c5fd;
--color-neutral-200: lab(90.952% 0 -.0000119209);
--color-gray-300: #b7b8c2;
--color-yellow-400: #efd420;
--color-amber-300: lab(86.4156% 6.13147 78.3961);
--color-gray-500: #747686;
--color-green-500: #22c543;
--color-white: #fff;
--color-sky-600: #0089be;
--color-gray-400: #9394a1;
--color-blue-400: #60a5fa;
--color-pink-50: lab(96.4459% 4.53997 -1.49434);
--color-yellow-300: #fde047;
--color-gray-100: #eeeef0;
--color-purple-600: #6430f7;
--color-sky-50: #ebfdff;
--typography-color: #42434d;
--color-green-900: #145323;
--color-blue-800: #1e40af;
--color-neutral-100: lab(96.52% -.0000298023 .0000119209);
--color-blue-100: #dbeafe;
--color-green-600: #16a332;
--color-green-950: #052e0f;
--color-gray-25: #fafafb;
--color-yellow-950: #422006;
--color-red-300: #fca5a5;
--color-sky-300: #5de3ff;
--color-orange-500: #f36b16;
--color-sky-400: #3ad4fd;
--typography-tbody-border: #eeeef0;
--color-green-400: #4ade68;
--color-yellow-50: #fefce8;
--color-gray-950: #131316;
--color-amber-900: lab(31.2288% 30.2627 40.0378);
--color-gray-600: #5e5f6e;
--color-indigo-500: lab(48.295% 38.3129 -81.9673);
--color-orange-100: #ffebd5;
--color-purple-400: #9785ff;
--color-yellow-200: #fef18a;
--color-blue-600: #2563eb;
--color-green-200: #bbf7c6;
--tw-border-style: solid;
--shiki-light-token-string-expression: #00aee3;
--color-red-600: #dc2626;
--color-blue-50: #eff6ff;
--shiki-token-string: #5de3ff;
--color-indigo-700: lab(32.4486% 49.2217 -84.6695);
--color-black: #000;
--color-gray-850: #27272d;
--tw-border-spacing-y: 0px;
--color-stone-800: lab(15.0353% 1.96067 1.53427);
--typography-link-icon-bg: #eeeef0;
--color-orange-200: #fed1aa;
--tw-ring-shadow: 0 0 #0000;
--color-purple-500: #6c47ff;
--typography-link-icon-bg-hover: #131316;
--color-yellow-600: #ca8a04;
--typography-code-border: #d9d9de;
--color-yellow-800: #854d0e;
--shiki-light-token-string: #00aee3;
--color-green-100: #dcfce2;
--tw-border-spacing-x: 0px;
--color-red-200: #fecaca;
--color-purple-900: #3c169c;
--color-sky-800: #0e597c;
--color-gray-50: #f7f7f8;
--color-stone-950: lab(2.86037% .455312 .568903);
--color-violet-400: lab(62.8239% 34.9159 -60.0512);
--color-purple-100: #eae8ff;
--tw-ring-offset-color: #fff;
--color-red-400: #f87171;
--color-red-800: #991b1b;
--color-red-500: #ef4444;
--tw-ring-offset-width: 0px;
--color-purple-950: #230b6a;
--root-bg: #f7f7f8;
--color-indigo-600: lab(38.4009% 52.6132 -92.3857);
--color-sky-700: #056d99;
--color-slate-50: lab(98.1434% -.369519 -1.05966);
--color-orange-300: #fdb674;
--typography-thead-border: #d9d9de;
--color-yellow-100: #fef9c3;
--tw-ring-offset-shadow: 0 0 #0000;
--shiki-foreground: #fff;
--color-gray-800: #2f3037;
--color-stone-100: lab(96.5286% -.0991821 .364268);
--color-orange-700: #c23a0c;
--color-green-50: #f0fdf2;
--color-sky-100: #ccf9ff;
--color-orange-950: #431207;
--color-amber-500: lab(72.7183% 31.8672 97.9407);
--color-orange-400: #f98c49;
--color-sky-900: #104a69;
--color-gray-150: #e3e3e7;
--color-yellow-700: #a16207;
--color-green-800: #166527;
--color-red-700: #b91c1c;
--color-slate-100: lab(96.286% -.852436 -2.46847);
--color-blue-500: #3b82f6;
--color-gray-900: #212126;
--color-sky-950: #043048;
--color-blue-900: #1e3a8a;
--color-yellow-900: #713f12;
--color-gray-700: #42434d;
--color-gray-750: #373840;
--typography-code-bg: #fff;
--color-purple-50: #f4f2ff;
--color-red-100: #fef2f2;
--color-amber-950: lab(15.8111% 20.9107 23.3752);
--color-stone-200: lab(91.055% .663072 .865579);
--shiki-token-string-expression: #5de3ff;
--color-green-300: #86ef9b;
--color-blue-200: #bfdbfe;
--color-red-50: #fef2f2;
--color-gray-200: #d9d9de;
--color-red-950: #450a0a;
--color-green-700: #15802a;
--color-purple-700: #561ee3;
--shiki-light-foreground: #131316;
--color-neutral-800: lab(15.204% 0 -.00000596046);
--color-yellow-500: #eab308;
--color-sky-200: #9ff1ff;
--color-blue-950: #0e1a3a;
--color-amber-50: lab(98.6252% -.635922 8.42309);
--color-amber-200: lab(91.7203% -.505269 49.9084);
--color-purple-300: #bab1ff;
```

### Spacing

```css
--text-5_5xl--letter-spacing: -.035em;
--text-6xl--letter-spacing: -.035em;
--text-4_5xl--letter-spacing: -.035em;
--tw-space-x-reverse: 0;
--spacing: .25rem;
--text-5xl--letter-spacing: -.025em;
--tw-space-y-reverse: 0;
--text-4xl--letter-spacing: -.015em;
--cl-collapsible-mask-size: 0px;
```

### Typography

```css
--text-base--line-height: 1.75rem;
--tracking-wider: .05em;
--font-mono: "soehneMono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
--animate-letter-reveal: letter-reveal .3s ease-out both;
--font-weight-bold: 700;
--text-2xs: .6875rem;
--text-xs--line-height: 1.25rem;
--text-2xs--line-height: 1.25rem;
--text-xl: 1.25rem;
--text-5_5xl: 3.5rem;
--leading-snug: 1.375;
--text-6xl--font-weight: 700;
--text-2xl--line-height: 2rem;
--font-suisse: "suisse", "suisse Fallback";
--text-xl--line-height: 1.75rem;
--text-sm: .8125rem;
--leading-tight: 1.25;
--font-weight-book: 450;
--text-4xl--line-height: 2.5rem;
--text-5_5xl--line-height: 4rem;
--tracking-tight: -.025em;
--text-2xl: 1.5rem;
--text-lg: 1.125rem;
--font-geist-numbers: "geistNumbers";
--text-4xl--font-weight: 600;
--text-5xl--line-height: 3.5rem;
--leading-normal: 1.5;
--text-5xl--font-weight: 600;
--text-lg--line-height: 1.75rem;
--font-sans: "geistNumbers", "suisse", "suisse Fallback";
--text-5_5xl--font-weight: 700;
--text-6xl: 4rem;
--default-font-family: "geistNumbers", "suisse", "suisse Fallback";
--text-4_5xl: 2.5rem;
--text-4_5xl--line-height: 3rem;
--font-soehne-mono: "soehneMono";
--tracking-tighter: -.05em;
--font-weight-semibold: 600;
--tracking-wide: .025em;
--font-weight-extrabold: 800;
--text-4xl: 2.25rem;
--tracking-normal: 0em;
--text-sm--line-height: 1.5rem;
--text-3xl--line-height: 2.5rem;
--text-5xl: 3rem;
--text-xs: .75rem;
--text-3xl: 2rem;
--font-weight-medium: 500;
--font-weight-normal: 400;
--tracking-widest: .1em;
--text-6xl--line-height: 4.5rem;
--leading-loose: 2;
--font-mosaic: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--text-base: .9375rem;
--text-4_5xl--font-weight: 700;
--default-mono-font-family: "soehneMono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

### Shadows

```css
--tw-inset-shadow-alpha: 100%;
--tw-inset-shadow: 0 0 #0000;
--tw-shadow-alpha: 100%;
--drop-shadow-sm: 0 1px 2px #00000026;
--tw-drop-shadow-alpha: 100%;
--drop-shadow-2xl: 0 25px 25px #00000026;
--drop-shadow-md: 0 3px 3px #0000001f;
--tw-shadow: 0 0 #0000;
```

### Radii

```css
--radius-4xl: 2rem;
--radius-sm: .25rem;
--radius-2xl: 1rem;
--radius-md: .375rem;
--radius-lg: .5rem;
--radius-3xl: 1.5rem;
--radius-xs: .125rem;
--radius-xl: .75rem;
```

### Other

```css
--header-mt: 3rem;
--container-md: 28rem;
--typography-link: #131316;
--aspect-video: 16 / 9;
--blur-lg: 16px;
--typography-heavy: #131316;
--tw-outline-style: solid;
--ease-in: cubic-bezier(.4, 0, 1, 1);
--typography-underline: #d9d9de;
--shiki-light-token-comment: #9394a1;
--post-0-active: 1;
--shiki-light-token-link: #22c543;
--tw-gradient-from: rgba(0, 0, 0, 0);
--shiki-light-token-function: #6c47ff;
--tw-gradient-to: rgba(0, 0, 0, 0);
--shiki-light-token-keyword: #6c47ff;
--blur-2xl: 40px;
--_number-flow-d-opacity: 0;
--tw-gradient-via-position: 50%;
--tw-gradient-to-position: 100%;
--default-transition-duration: .15s;
--animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;
--container-xs: 20rem;
--shiki-token-function: #bab1ff;
--light: ;
--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
--_number-flow-d: 0;
--tw-translate-z: 0;
--tw-gradient-via: rgba(0, 0, 0, 0);
--tw-scale-y: 1;
--container-6xl: 72rem;
--breakpoint-lg: 64em;
--container-3xl: 48rem;
--blur-xs: 4px;
--tw-translate-y: 0;
--ease-out: cubic-bezier(0, 0, .2, 1);
--tw-content: "";
--tw-translate-x: 0;
--typography-underline-hover: #131316;
--typography-link-indicator: #eeeef0;
--container-3xs: 16rem;
--container-xl: 36rem;
--tw-scrollbar-track: rgba(0, 0, 0, 0);
--_number-flow-dx: 0px;
--breakpoint-xl: 80em;
--shiki-token-keyword: #bab1ff;
--shiki-light-token-punctuation: #747686;
--blur-xl: 24px;
--breakpoint-2xl: 96em;
--tw-scale-z: 1;
--container-sm: 24rem;
--typography-code: #131316;
--tw-scroll-snap-strictness: proximity;
--typography-heading: #131316;
--container-lg: 32rem;
--_number-flow-d-width: 0;
--tw-gradient-from-position: 0%;
--ease-in-out: cubic-bezier(.4, 0, .2, 1);
--root-pr: 0px;
--typography-link-indicator-hover: #131316;
--shiki-token-parameter: #86ef9b;
--container-5xl: 64rem;
--typography-link-hover: #131316;
--shiki-token-constant: #86ef9b;
--typography-strong: #131316;
--blur-md: 12px;
--shiki-light-token-parameter: #22c543;
--typography-link-icon-hover: #fff;
--shiki-token-comment: #9394a1;
--animate-spin: spin 1s linear infinite;
--container-4xl: 56rem;
--animate-fade-in: fade-in .3s linear both;
--shiki-light-token-constant: #22c543;
--tw-divide-y-reverse: 0;
--breakpoint-md: 48em;
--container-2xl: 42rem;
--dark: ;
--tw-scrollbar-thumb: rgba(0, 0, 0, 0);
--shiki-token-link: #86ef9b;
--tw-scale-x: 1;
--typography-link-icon: #9394a1;
--shiki-token-punctuation: #b7b8c2;
--animate-blink: blink 1s step-end infinite;
--breakpoint-sm: 40em;
--container-7xl: 80rem;
--blur-sm: 8px;
```

### Semantic

```css
--color-green-500: #22c543;
--color-green-900: #145323;
--color-green-600: #16a332;
--color-green-950: #052e0f;
--color-green-400: #4ade68;
--color-green-200: #bbf7c6;
--color-green-100: #dcfce2;
--color-green-50: #f0fdf2;
--color-green-800: #166527;
--color-green-300: #86ef9b;
--color-green-700: #15802a;
--color-yellow-400: #efd420;
--color-amber-300: lab(86.4156% 6.13147 78.3961);
--color-yellow-300: #fde047;
--color-yellow-950: #422006;
--color-yellow-50: #fefce8;
--color-amber-900: lab(31.2288% 30.2627 40.0378);
--color-yellow-200: #fef18a;
--color-yellow-600: #ca8a04;
--color-yellow-800: #854d0e;
--color-yellow-100: #fef9c3;
--color-amber-500: lab(72.7183% 31.8672 97.9407);
--color-yellow-700: #a16207;
--color-yellow-900: #713f12;
--color-amber-950: lab(15.8111% 20.9107 23.3752);
--color-yellow-500: #eab308;
--color-amber-50: lab(98.6252% -.635922 8.42309);
--color-amber-200: lab(91.7203% -.505269 49.9084);
--color-red-900: #7f1d1d;
--color-red-300: #fca5a5;
--color-red-600: #dc2626;
--color-red-200: #fecaca;
--color-red-400: #f87171;
--color-red-800: #991b1b;
--color-red-500: #ef4444;
--color-red-700: #b91c1c;
--color-red-100: #fef2f2;
--color-red-50: #fef2f2;
--color-red-950: #450a0a;
--color-blue-700: #1d4ed8;
--color-blue-300: #93c5fd;
--color-blue-400: #60a5fa;
--color-blue-800: #1e40af;
--color-blue-100: #dbeafe;
--color-blue-600: #2563eb;
--color-blue-50: #eff6ff;
--color-blue-500: #3b82f6;
--color-blue-900: #1e3a8a;
--color-blue-200: #bfdbfe;
--color-blue-950: #0e1a3a;
```

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.4, 0.36, 0, 1)`, `cubic-bezier(0.33, 1, 0.68, 1)`, `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0, 0, 0.2, 1)`

**Durations:** `0.3s`, `0.45s`, `0.2s`, `0.15s`, `1s`, `0.5s`

### Common Transitions

```css
transition: all;
transition: color 0.3s cubic-bezier(0.4, 0.36, 0, 1), background-color 0.3s cubic-bezier(0.4, 0.36, 0, 1), border-color 0.3s cubic-bezier(0.4, 0.36, 0, 1), outline-color 0.3s cubic-bezier(0.4, 0.36, 0, 1), text-decoration-color 0.3s cubic-bezier(0.4, 0.36, 0, 1), fill 0.3s cubic-bezier(0.4, 0.36, 0, 1), stroke 0.3s cubic-bezier(0.4, 0.36, 0, 1), --tw-gradient-from 0.3s cubic-bezier(0.4, 0.36, 0, 1), --tw-gradient-via 0.3s cubic-bezier(0.4, 0.36, 0, 1), --tw-gradient-to 0.3s cubic-bezier(0.4, 0.36, 0, 1), opacity 0.3s cubic-bezier(0.4, 0.36, 0, 1), box-shadow 0.3s cubic-bezier(0.4, 0.36, 0, 1), transform 0.3s cubic-bezier(0.4, 0.36, 0, 1), translate 0.3s cubic-bezier(0.4, 0.36, 0, 1), scale 0.3s cubic-bezier(0.4, 0.36, 0, 1), rotate 0.3s cubic-bezier(0.4, 0.36, 0, 1), filter 0.3s cubic-bezier(0.4, 0.36, 0, 1), -webkit-backdrop-filter 0.3s cubic-bezier(0.4, 0.36, 0, 1), backdrop-filter 0.3s cubic-bezier(0.4, 0.36, 0, 1), display 0.3s cubic-bezier(0.4, 0.36, 0, 1), content-visibility 0.3s cubic-bezier(0.4, 0.36, 0, 1), overlay 0.3s cubic-bezier(0.4, 0.36, 0, 1), pointer-events 0.3s cubic-bezier(0.4, 0.36, 0, 1);
transition: color 0.45s cubic-bezier(0.33, 1, 0.68, 1), background-color 0.45s cubic-bezier(0.33, 1, 0.68, 1), border-color 0.45s cubic-bezier(0.33, 1, 0.68, 1), text-decoration-color 0.45s cubic-bezier(0.33, 1, 0.68, 1), fill 0.45s cubic-bezier(0.33, 1, 0.68, 1), stroke 0.45s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.45s cubic-bezier(0.33, 1, 0.68, 1), background 0.45s cubic-bezier(0.33, 1, 0.68, 1);
transition: color 0.45s cubic-bezier(0.33, 1, 0.68, 1), background-color 0.45s cubic-bezier(0.33, 1, 0.68, 1), fill 0.45s cubic-bezier(0.33, 1, 0.68, 1), stroke 0.45s cubic-bezier(0.33, 1, 0.68, 1), transform 0.2s cubic-bezier(0.33, 1, 0.68, 1), opacity 0.2s cubic-bezier(0.33, 1, 0.68, 1);
transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), fill 0.3s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.3s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.3s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), translate 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1), rotate 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 0.3s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.3s cubic-bezier(0.4, 0, 0.2, 1), display 0.3s cubic-bezier(0.4, 0, 0.2, 1), content-visibility 0.3s cubic-bezier(0.4, 0, 0.2, 1), overlay 0.3s cubic-bezier(0.4, 0, 0.2, 1), pointer-events 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: padding 0.2s cubic-bezier(0, 0, 0.2, 1);
transition: grid-template-rows 0.2s cubic-bezier(0, 0, 0.2, 1), opacity 0.2s cubic-bezier(0, 0, 0.2, 1);
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 1s cubic-bezier(0.4, 0, 0.2, 1), background-color 1s cubic-bezier(0.4, 0, 0.2, 1), border-color 1s cubic-bezier(0.4, 0, 0.2, 1), outline-color 1s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 1s cubic-bezier(0.4, 0, 0.2, 1), fill 1s cubic-bezier(0.4, 0, 0.2, 1), stroke 1s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 1s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 1s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1), translate 1s cubic-bezier(0.4, 0, 0.2, 1), scale 1s cubic-bezier(0.4, 0, 0.2, 1), rotate 1s cubic-bezier(0.4, 0, 0.2, 1), filter 1s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 1s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 1s cubic-bezier(0.4, 0, 0.2, 1), display 1s cubic-bezier(0.4, 0, 0.2, 1), content-visibility 1s cubic-bezier(0.4, 0, 0.2, 1), overlay 1s cubic-bezier(0.4, 0, 0.2, 1), pointer-events 1s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), fill 0.5s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.5s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.5s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.5s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), translate 0.5s cubic-bezier(0.4, 0, 0.2, 1), scale 0.5s cubic-bezier(0.4, 0, 0.2, 1), rotate 0.5s cubic-bezier(0.4, 0, 0.2, 1), filter 0.5s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 0.5s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.5s cubic-bezier(0.4, 0, 0.2, 1), display 0.5s cubic-bezier(0.4, 0, 0.2, 1), content-visibility 0.5s cubic-bezier(0.4, 0, 0.2, 1), overlay 0.5s cubic-bezier(0.4, 0, 0.2, 1), pointer-events 0.5s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations

**fade-in**
```css
@keyframes fade-in {
  0% { opacity: var(--fade-in-from,0); }
  100% { opacity: var(--fade-in-to,1); }
}
```

**letter-reveal**
```css
@keyframes letter-reveal {
  0% { opacity: 0; filter: blur(2px); }
  100% { opacity: 1; filter: blur(); }
}
```

**blink**
```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

**spin**
```css
@keyframes spin {
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

### Buttons (22 instances)

```css
.buttons {
  background-color: rgba(19, 19, 22, 0);
  color: rgb(19, 19, 22);
  font-size: 12px;
  font-weight: 600;
  padding-top: 6px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Cards (120 instances)

```css
.cards {
  background-color: rgb(47, 48, 55);
  border-radius: 3.35544e+07px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (10 instances)

```css
.links {
  color: rgb(255, 255, 255);
  font-size: 13px;
  font-weight: 500;
}
```

### Navigation (13 instances)

```css
.navigation {
  color: rgb(19, 19, 22);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Modals (8 instances)

```css
.modals {
  background-color: rgb(108, 71, 255);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(108, 71, 255) 0px 0px 0px 0.5px, oklab(0.999994 0.0000455678 0.0000200868 / 0.07) 0px 1px 0px 0px inset, oklab(0.249859 0.00254738 -0.00901626 / 0.2) 0px 1px 3px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Badges (8 instances)

```css
.badges {
  background-color: rgb(255, 255, 255);
  color: rgb(19, 19, 22);
  font-size: 13px;
  font-weight: 500;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 5 instances, 1 variant

**Variant 1** (5 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(19, 19, 22);
  padding: 0px 8px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(217, 217, 222);
  font-size: 16px;
  font-weight: 400;
```

### Button — 5 instances, 3 variants

**Variant 1** (1 instance)

```css
  background: rgb(255, 255, 255);
  color: rgb(19, 19, 22);
  padding: 0px 12px 0px 12px;
  border-radius: 6px;
  border: 0px solid rgb(217, 217, 222);
  font-size: 13px;
  font-weight: 500;
```

**Variant 2** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(19, 19, 22);
  padding: 16px 0px 8px 0px;
  border-radius: 0px;
  border: 1px 0px 0px solid oklab(0.188081 0.0016512 -0.00579907 / 0.05);
  font-size: 12px;
  font-weight: 600;
```

**Variant 3** (1 instance)

```css
  background: rgb(33, 33, 38);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 3.35544e+07px;
  border: 0px solid rgb(217, 217, 222);
  font-size: 16px;
  font-weight: 400;
```

### Button — 11 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(108, 71, 255);
  padding: 6px 0px 6px 0px;
  border-radius: 0px;
  border: 0px solid rgb(217, 217, 222);
  font-size: 12px;
  font-weight: 600;
```

**Variant 2** (10 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(19, 19, 22);
  padding: 6px 0px 6px 0px;
  border-radius: 0px;
  border: 0px solid rgb(217, 217, 222);
  font-size: 12px;
  font-weight: 600;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(19, 19, 22);
  padding: 6px 0px 6px 0px;
  border-radius: 0px;
  border: 0px solid rgb(217, 217, 222);
  font-size: 12px;
  font-weight: 600;
```

### Button — 7 instances, 1 variant

**Variant 1** (7 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(116, 118, 134);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(217, 217, 222);
  font-size: 12px;
  font-weight: 500;
```

## Layout System

**14 grid containers** and **367 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 0px |
| 1280px | 32px |
| 896px | 0px |
| 512px | 0px |
| 720px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 1-column | 7x |
| 2-column | 5x |
| 3-column | 1x |
| 12-column | 1x |

### Grid Templates

```css
grid-template-columns: 400px 400px 400px;
gap: 8px;
grid-template-columns: 384px 832px;
gap: 24px 0px;
grid-template-columns: 352px 352.016px;
gap: normal 2.22222%;
grid-template-columns: 352px 352.016px;
gap: normal 2.22222%;
grid-template-columns: 352px 352.016px;
gap: normal 2.22222%;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 86x |
| row/nowrap | 270x |
| row/wrap | 11x |

**Gap values:** `12px`, `12px 16px`, `14px`, `16px`, `16px 8px`, `1px`, `20px`, `24px`, `24px 0px`, `32px`, `4px`, `6px`, `8px`, `normal 12px`, `normal 16px`, `normal 2.22222%`, `normal 8px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 3 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#ffffff` | `#6c47ff` | 5.27:1 | AA |
| `#ffffff` | `#42434d` | 9.81:1 | AAA |

## Design System Score

**Overall: 85/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 90/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 50/100 |
| Border Radius Consistency | 80/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Well-defined spacing scale, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 57 unique shadows — consider a 3-level elevation scale (sm/md/lg)
- 96 !important rules — prefer specificity over overrides
- 6012 duplicate CSS declarations

## Gradients

**31 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |
| radial | — | 3 | bold |
| linear | to right in oklab | 2 | brand |
| linear | — | 2 | brand |
| linear | to right in oklab | 2 | brand |
| linear | — | 2 | brand |
| radial | — | 3 | bold |
| linear | to right bottom | 2 | brand |
| radial | — | 4 | bold |
| linear | to right top | 3 | bold |
| linear | to right top | 3 | bold |
| linear | — | 3 | bold |
| linear | to right bottom | 3 | bold |
| linear | — | 2 | brand |
| linear | to left | 2 | brand |

```css
background: linear-gradient(rgba(19, 19, 22, 0) 45%, rgba(19, 19, 22, 0.03) 55%);
background: radial-gradient(154.86% 76.83% at 50% 22.26%, color(srgb 0.968627 0.968627 0.972549 / 0.4) 8.98%, rgb(247, 247, 248) 45.99%);
background: linear-gradient(to right in oklab, rgba(255, 255, 255, 0.24) 0%, rgb(255, 255, 255) 100%);
background: linear-gradient(oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0%, rgba(0, 0, 0, 0) 100%);
background: linear-gradient(to right in oklab, rgb(255, 255, 255) 0%, rgba(240, 235, 255, 0.5) 100%);
```

## Z-Index Map

**12 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| dropdown | 100,100 | div.a.b.s.o.l.u.t.e. .b.o.t.t.o.m.-.0. .z.-.1.0.0. .o.r.i.g.i.n.-.b.o.t.t.o.m.-.l.e.f.t. .s.c.a.l.e.-.[.1...3.]. .p.l.-.2.8. .s.m.:.p.l.-.2.4. .l.g.:.p.l.-.8 |
| sticky | 10,50 | a.g.r.o.u.p. .a.b.s.o.l.u.t.e. .t.o.p.-.0. .z.-.1.0. .m.t.-.0. .f.l.e.x. .w.-.f.u.l.l. .g.a.p.-.x.-.4. .b.g.-.g.r.a.y.-.9.5.0. .p.y.-.2. .t.e.x.t.-.s.m. .f.o.n.t.-.m.e.d.i.u.m. .w.h.i.t.e.s.p.a.c.e.-.n.o.w.r.a.p. .t.e.x.t.-.w.h.i.t.e. .o.u.t.l.i.n.e.-.n.o.n.e, div.a.b.s.o.l.u.t.e. .i.n.s.e.t.-.0. .z.-.1.0. .f.l.e.x. .i.t.e.m.s.-.c.e.n.t.e.r. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .o.v.e.r.f.l.o.w.-.h.i.d.d.e.n. .[.m.a.s.k.:.r.a.d.i.a.l.-.g.r.a.d.i.e.n.t.(.5.0.%._.5.0.%._.a.t._.5.0.%._.5.0.%.,.r.g.b.a.(.0.,.0.,.0.,.0...6.)._.3.2...7.1.%.,.t.r.a.n.s.p.a.r.e.n.t.).]. .s.m.:.[.m.a.s.k.:.r.a.d.i.a.l.-.g.r.a.d.i.e.n.t.(.3.0.%._.4.5.%._.a.t._.5.0.%._.5.0.%.,.r.g.b.a.(.0.,.0.,.0.,.0...6.)._.3.2...7.1.%.,.t.r.a.n.s.p.a.r.e.n.t.).]. .m.d.:.[.m.a.s.k.:.r.a.d.i.a.l.-.g.r.a.d.i.e.n.t.(.5.0.%._.5.0.%._.a.t._.5.0.%._.5.0.%.,.r.g.b.a.(.0.,.0.,.0.,.0...6.)._.3.2...7.1.%.,.t.r.a.n.s.p.a.r.e.n.t.).], div.p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .a.b.s.o.l.u.t.e. .i.n.s.e.t.-.x.-.0. .t.o.p.-.[.c.a.l.c.(.-.6.7.3./.1.6.*.1.r.e.m.).]. .z.-.1.0. .o.v.e.r.f.l.o.w.-.h.i.d.d.e.n. .m.i.x.-.b.l.e.n.d.-.o.v.e.r.l.a.y |
| base | -10,5 | div.p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .a.b.s.o.l.u.t.e. .i.n.s.e.t.-.0. .t.o.p.-.[.-.0...5.r.e.m.]. .-.z.-.1.0, div.a.b.s.o.l.u.t.e. .i.n.s.e.t.-.0. .-.z.-.1.0, div.p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .a.b.s.o.l.u.t.e. .i.n.s.e.t.-.x.-.0. .t.o.p.-.0. .b.o.t.t.o.m.-.[.c.a.l.c.(.-.7.0.2./.1.6.*.1.r.e.m.).]. .-.z.-.1.0. .b.g.-.[.r.a.d.i.a.l.-.g.r.a.d.i.e.n.t.(.1.5.4...8.6.%._.7.6...8.3.%._.a.t._.5.0.%._.2.2...2.6.%.,.c.o.l.o.r.-.m.i.x.(.i.n._.s.r.g.b.,.v.a.r.(.-.-.c.o.l.o.r.-.g.r.a.y.-.5.0.)._.4.0.%.,.t.r.a.n.s.p.a.r.e.n.t.)._.8...9.8.%.,.v.a.r.(.-.-.c.o.l.o.r.-.g.r.a.y.-.5.0.)._.4.5...9.9.%.).] |

## SVG Icons

**104 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 28 |
| sm | 22 |
| md | 23 |
| lg | 14 |
| xl | 17 |

**Icon colors:** `var(--logo-fill)`, `url(#logomark-center-gradient)`, `url(#logomark-bottom-gradient)`, `url(#logomark-arc-gradient)`, `url(#text-gradient)`, `currentColor`, `rgb(0, 0, 0)`, `rgb(94, 95, 110)`, `#5E5F6E`, `#747686`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| geistSans | self-hosted | 400, normal | normal |
| geistMono | self-hosted | 400, normal | normal |
| geistNumbers | self-hosted | 400, normal | normal |
| suisse | self-hosted | 400, 450, 500, 600, 700 | normal, italic |
| soehneMono | self-hosted | 400, 500 | normal, italic |
| Inter | self-hosted | 100 900 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 61 | objectFit: fill, borderRadius: 0px, shape: square |
| general | 24 | objectFit: fill, borderRadius: 3.33333% / 2.35294%, shape: rounded |
| avatar | 7 | objectFit: fill, borderRadius: 3.35544e+07px, shape: circular |
| gallery | 6 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (42x), 21:9 (18x), 4.5:1 (15x), 3:4 (12x), 2:3 (5x), 9:16 (4x), 3:2 (2x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `450ms` | 450 |
| `xl` | `1s` | 1000 |

### Easing Families

- **custom** (65 uses) — `cubic-bezier(0.4, 0.36, 0, 1)`, `cubic-bezier(0.4, 0, 0.2, 1)`
- **ease-out** (46 uses) — `cubic-bezier(0.33, 1, 0.68, 1)`, `cubic-bezier(0, 0, 0.2, 1)`

## Component Anatomy

### button — 30 instances

**Slots:** label, icon
**Variants:** solid · outline
**Sizes:** md · xs · medium

| variant | count | sample label |
|---|---|---|
| outline | 15 | Build with agents |
| default | 14 | Products |
| solid | 1 | Sign in |

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Title Case (tight)

### Top CTA Verbs

- **secured** (7)
- **userprofile** (2)
- **organizationprofile** (2)
- **products** (1)
- **docs** (1)
- **changelog** (1)
- **company** (1)
- **sign** (1)

### Button Copy Patterns

- "secured by" (7×)
- "products" (1×)
- "docs" (1×)
- "changelog" (1×)
- "company" (1×)
- "sign in" (1×)
- "build with agents" (1×)
- "user authentication" (1×)
- "<signup />" (1×)
- "<signin />" (1×)

### Sample Headings

> More than authentication, Complete User Management
> Clerk Components
> USER AUTHENTICATION
> B2B AUTHENTICATION
> BILLING

## Page Intent

**Type:** `landing` (confidence 0.29)
**Description:** The easiest way to add authentication and user management to your application. Purpose-built for React, Next.js, Remix, and “The Modern Web”.

Alternates: legal (0.4), blog-post (0.35)

## Section Roles

Reading order (top→bottom): nav → nav → pricing-table → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.4 |
| 1 | nav | — | 0.9 |
| 2 | pricing-table | More than authentication, Complete User Management | 0.9 |
| 3 | footer | — | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.309 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 50px |
| backdrop-filter in use | no |
| Gradients | 31 |

## Imagery Style

**Label:** `photography` (confidence 0.031)
**Counts:** total 98, svg 0, icon 29, screenshot-like 0, photo-like 6
**Dominant aspect:** square-ish
**Radius profile on images:** full

## Component Library

**Detected:** `tailwindcss` (confidence 0.63)

Evidence:
- tailwind-like class density 63%

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `geistNumbers` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
