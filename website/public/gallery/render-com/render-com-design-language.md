# Design Language: Render | The cloud for builders

> Extracted from `https://render.com` on June 25, 2026
> 2686 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#8a05ff` | rgb(138, 5, 255) | hsl(272, 100%, 51%) | 58 |
| Secondary | `#e7dbff` | rgb(231, 219, 255) | hsl(260, 100%, 93%) | 36 |
| Accent | `#e0f4ff` | rgb(224, 244, 255) | hsl(201, 100%, 94%) | 4 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#e3e3e3` | hsl(0, 0%, 89%) | 2677 |
| `#0d0d0d` | hsl(0, 0%, 5%) | 1977 |
| `#ffffff` | hsl(0, 0%, 100%) | 316 |
| `#000000` | hsl(0, 0%, 0%) | 254 |
| `#6b6b6b` | hsl(0, 0%, 42%) | 47 |
| `#4d4d4d` | hsl(0, 0%, 30%) | 40 |
| `#fce9ea` | hsl(357, 76%, 95%) | 2 |
| `#272727` | hsl(0, 0%, 15%) | 2 |
| `#8f8f8f` | hsl(0, 0%, 56%) | 1 |
| `#f4f0ff` | hsl(256, 100%, 97%) | 1 |

### Background Colors

Used on large-area elements: `#ffffff`, `#000000`, `#141414`

### Text Colors

Text color palette: `#000000`, `#ffffff`, `#0d0d0d`, `#4d4d4d`, `#6b6b6b`, `#8a05ff`, `#009e7a`, `#d67f2e`, `#f680ff`, `#0088e5`

### Gradients

```css
background-image: linear-gradient(to right, rgb(28, 0, 55), rgb(42, 0, 82), rgb(226, 166, 110));
```

```css
background-image: linear-gradient(to right, rgb(138, 5, 255), rgb(214, 127, 46));
```

```css
background-image: linear-gradient(to top, rgba(55, 49, 69, 0.16), rgba(55, 49, 69, 0.04));
```

```css
background-image: linear-gradient(120deg, rgb(255, 255, 255) 17.4%, rgb(231, 219, 255) 36.67%);
```

```css
background-image: linear-gradient(177deg, rgb(231, 219, 255) 56.49%, rgb(240, 240, 240) 12.68%);
```

```css
background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(255, 255, 255));
```

```css
background-image: linear-gradient(78deg, rgb(255, 255, 255) 46.26%, rgb(244, 240, 255) 141.79%);
```

```css
background-image: linear-gradient(177deg, rgb(0, 31, 22) 56.49%, rgb(28, 0, 55) 12.68%);
```

```css
background-image: linear-gradient(to right, rgb(157, 102, 255), rgb(251, 206, 255));
```

```css
background-image: linear-gradient(90deg, rgb(227, 227, 227) 1px, rgba(0, 0, 0, 0) 0px), repeating-linear-gradient(rgb(227, 227, 227), rgb(227, 227, 227) 1px, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 80px);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#e3e3e3` | border, background | 2677 |
| `#0d0d0d` | text, background, border | 1977 |
| `#ffffff` | background, text | 316 |
| `#000000` | text, border, background | 254 |
| `#8a05ff` | background, text | 58 |
| `#6b6b6b` | text | 47 |
| `#4d4d4d` | text | 40 |
| `#e7dbff` | background | 36 |
| `#33acff` | text | 19 |
| `#006d4c` | text | 13 |
| `#d67f2e` | text | 12 |
| `#f347ff` | text | 9 |
| `#e96770` | text | 7 |
| `#48008c` | text | 5 |
| `#9b52fb` | text | 5 |
| `#faefe5` | background | 4 |
| `#dffeed` | background | 4 |
| `#e0f4ff` | background | 4 |
| `#fce2fe` | background | 3 |
| `#009e7a` | text | 2 |
| `#fce9ea` | background | 2 |
| `#272727` | border | 2 |
| `#180d43` | background | 1 |
| `#f680ff` | text | 1 |
| `#0088e5` | text | 1 |
| `#c29800` | text | 1 |
| `#5dc70a` | text | 1 |
| `#8f8f8f` | text | 1 |
| `#c2eaff` | background | 1 |
| `#f4f0ff` | background | 1 |

## Typography

### Font Families

- **PPNeueMontreal** — used for body (2384 elements)
- **Roobert** — used for all (47 elements)
- **Helvetica** — used for body (22 elements)
- **PPNeueMontrealMono** — used for body (8 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 80px | 5rem | 300 | 80px | -2.4px | h1, div, span |
| 64px | 4rem | 300 | 67.2px | -1.28px | h2, h3, span |
| 56px | 3.5rem | 300 | 60px | -1.12px | div |
| 48px | 3rem | 300 | 52px | -0.96px | div |
| 40px | 2.5rem | 300 | 44px | -0.6px | h3, span |
| 32px | 2rem | 400 | 36.8px | -0.8px | h3 |
| 24px | 1.5rem | 400 | 30px | normal | p, span, div |
| 20px | 1.25rem | 400 | 30px | 0.2px | span, a, svg, rect |
| 18px | 1.125rem | 400 | 24.84px | 0.18px | div, p, a, span |
| 16px | 1rem | 400 | 24px | normal | html, head, style, meta |
| 14px | 0.875rem | 500 | 16.94px | -0.14px | div, p, a, span |
| 12px | 0.75rem | 500 | 15px | 0.24px | div |
| 11px | 0.6875rem | 500 | 14px | 0.275px | div, span, br |

### Heading Scale

```css
h1 { font-size: 80px; font-weight: 300; line-height: 80px; }
h2 { font-size: 64px; font-weight: 300; line-height: 67.2px; }
h3 { font-size: 40px; font-weight: 300; line-height: 44px; }
h3 { font-size: 32px; font-weight: 400; line-height: 36.8px; }
h3 { font-size: 20px; font-weight: 400; line-height: 30px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: 24px; }
```

### Font Weights in Use

`400` (2622x), `500` (34x), `300` (30x)

## Spacing

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-48 | 48px | 3rem |
| spacing-56 | 56px | 3.5rem |
| spacing-72 | 72px | 4.5rem |
| spacing-80 | 80px | 5rem |
| spacing-86 | 86px | 5.375rem |
| spacing-120 | 120px | 7.5rem |
| spacing-160 | 160px | 10rem |
| spacing-166 | 166px | 10.375rem |
| spacing-201 | 201px | 12.5625rem |
| spacing-213 | 213px | 13.3125rem |
| spacing-270 | 270px | 16.875rem |
| spacing-287 | 287px | 17.9375rem |
| spacing-295 | 295px | 18.4375rem |
| spacing-305 | 305px | 19.0625rem |
| spacing-312 | 312px | 19.5rem |
| spacing-323 | 323px | 20.1875rem |
| spacing-460 | 460px | 28.75rem |
| spacing-467 | 467px | 29.1875rem |
| spacing-481 | 481px | 30.0625rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 1 |
| full | 50px | 2 |
| full | 937px | 2 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

## CSS Custom Properties

### Colors

```css
--osano-button-border-color: #fff;
--osano-button-background-color: #7A3FF1;
--osano-button-foreground-color: #FFFFFF;
--osano-dialog-background-color: #180D43;
--osano-dialog-foreground-color: #FFFFFF;
--osano-info-dialog-overlay-color: rgba(0,0,0,0.45);
--osano-link-color: #37CD8F;
--osano-toggle-off-track-color: #382d50;
--osano-toggle-off-thumb-color: #FFFFFF;
--osano-toggle-on-track-color: #37CD8F;
--osano-toggle-on-thumb-color: #FFFFFF;
--osano-widget-color: #37cd8f;
--osano-widget-outline-color: #29246a;
--osano-widget-fill-color: #fff;
--osano-focus-outline-color: Highlight;
--osano-button-close-color: var(--osano-dialog-foreground-color);
--osano-button-accept-background-color: var(--osano-button-background-color);
--osano-button-accept-border-color: var(--osano-button-border-color, var(--osano-button-foreground-color));
--osano-button-accept-foreground-color: var(--osano-button-foreground-color);
--osano-button-deny-background-color: #7A3FF1;
--osano-button-deny-border-color: var(--osano-button-border-color, var(--osano-button-foreground-color));
--osano-button-deny-foreground-color: #FFFFFF;
--osano-button-reject-all-background-color: var(--osano-button-background-color);
--osano-button-reject-all-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-button-reject-all-border-color: var(--osano-button-border-color, var(--osano-button-foreground-color));
--osano-button-reject-all-foreground-color: var(--osano-button-foreground-color);
--osano-button-manage-background-color: var(--osano-button-background-color);
--osano-button-manage-border-color: var(--osano-button-border-color, var(--osano-button-foreground-color));
--osano-button-manage-foreground-color: var(--osano-button-foreground-color);
--osano-info-dialog-link-color: var(--osano-link-color);
--osano-info-dialog-button-close-color: var(--osano-info-dialog-foreground-color, var(--osano-dialog-foreground-color));
--osano-info-dialog-toggle-off-track-color: var(--osano-toggle-off-track-color);
--osano-info-dialog-toggle-off-thumb-color: var(--osano-toggle-off-thumb-color);
--osano-info-dialog-toggle-on-track-color: var(--osano-toggle-on-track-color);
--osano-info-dialog-toggle-on-thumb-color: var(--osano-toggle-on-thumb-color);
--osano-info-dialog-button-background-color: var(--osano-button-background-color);
--osano-info-dialog-button-border-color: var(--osano-info-dialog-button-foreground-color, var(--osano-button-foreground-color));
--osano-info-dialog-button-foreground-color: var(--osano-button-foreground-color);
--osano-dialog-gpc-background-color: var(--osano-dialog-background-color);
--osano-dialog-gpc-border-color: var(--osano-dialog-foreground-color);
--osano-dialog-gpc-foreground-color: var(--osano-dialog-foreground-color);
--osano-dialog-gpc-color: #37cd84;
--osano-info-dialog-gpc-background-color: var(--osano-info-dialog-background-color, var(--osano-dialog-background-color));
--osano-info-dialog-gpc-border-color: var(--osano-info-dialog-foreground-color, var(--osano-dialog-foreground-color));
--osano-info-dialog-gpc-foreground-color: var(--osano-info-dialog-foreground-color, var(--osano-dialog-foreground-color));
--osano-info-dialog-gpc-color: var(--osano-dialog-gpc-color);
--osano-gpc-background-color: #ffffff;
--osano-gpc-border-color: #058a5e;
--osano-gpc-foreground-color: #058a5e;
--osano-gpc-color: #37cd84;
--osano-gpc-background-color-hover: #ffffff;
--osano-info-dialog-background-color: #ffffff;
--osano-info-dialog-foreground-color: #000000;
--osano-toggle-off-background-color: #d2cfff;
--osano-toggle-button-off-color: #ffffff;
--osano-toggle-on-background-color: #37cd8f;
--osano-toggle-button-on-color: #f4f4f4;
--osano-button-background-color-contrast: #8e53ff;
--osano-button-foreground-color-contrast: #ebebeb;
--osano-button-deny-background-color-contrast: #8e53ff;
--osano-button-deny-foreground-color-contrast: #ebebeb;
--osano-dialog-background-color-contrast: #2c2157;
--osano-dialog-foreground-color-contrast: #ebebeb;
--osano-link-color-contrast: #23b97b;
--osano-toggle-off-track-color-contrast: #4c4164;
--osano-toggle-off-track-color-disabled: #786d90;
--osano-toggle-off-thumb-color-contrast: #ebebeb;
--osano-toggle-off-thumb-color-disabled: #bfbfbf;
--osano-toggle-on-track-color-contrast: #23b97b;
--osano-toggle-on-track-color-disabled: #008d4f;
--osano-toggle-on-thumb-color-contrast: #ebebeb;
--osano-toggle-on-thumb-color-disabled: #bfbfbf;
--osano-gpc-background-color-contrast: #ebebeb;
--osano-button-background-color-hover: var(--osano-button-background-color-contrast, #8e53ff);
--osano-button-foreground-color-hover: var(--osano-button-foreground-color-contrast, #ebebeb);
--osano-button-background-color-focus: var(--osano-button-foreground-color-hover, var(--osano-button-foreground-color-contrast));
--osano-button-foreground-color-focus: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-toggle-off-track-color-hover: var(--osano-toggle-off-track-color-contrast, #4c4164);
--osano-toggle-off-thumb-color-hover: var(--osano-toggle-off-thumb-color-contrast, #ebebeb);
--osano-toggle-off-track-color-focus: var(--osano-toggle-off-thumb-color-hover, var(--osano-toggle-off-thumb-color-contrast));
--osano-toggle-off-thumb-color-focus: var(--osano-toggle-off-track-color-hover, var(--osano-toggle-off-track-color-contrast));
--osano-toggle-on-track-color-hover: var(--osano-toggle-on-track-color-contrast, #23b97b);
--osano-toggle-on-thumb-color-hover: var(--osano-toggle-on-thumb-color-contrast, #ebebeb);
--osano-toggle-on-track-color-focus: var(--osano-toggle-on-thumb-color-hover, var(--osano-toggle-on-thumb-color-contrast));
--osano-toggle-on-thumb-color-focus: var(--osano-toggle-on-track-color-hover, var(--osano-toggle-on-track-color-contrast));
--osano-button-accept-background-color-contrast: var(--osano-button-background-color-contrast, #8e53ff);
--osano-button-accept-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #ebebeb);
--osano-button-accept-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-button-accept-foreground-color-hover: var(--osano-button-accept-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-button-accept-background-color-focus: var(--osano-button-accept-foreground-color-hover, var(--osano-button-accept-foreground-color-contrast));
--osano-button-accept-foreground-color-focus: var(--osano-button-accept-background-color-hover, var(--osano-button-background-color-hover));
--osano-button-deny-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-button-deny-foreground-color-hover: var(--osano-button-deny-foreground-color-contrast, #ebebeb);
--osano-button-deny-background-color-focus: var(--osano-button-deny-foreground-color-hover, var(--osano-button-deny-foreground-color-contrast));
--osano-button-deny-foreground-color-focus: var(--osano-button-deny-background-color-hover, var(--osano-button-background-color-hover));
--osano-button-reject-all-background-color-contrast: var(--osano-button-background-color-contrast, #8e53ff);
--osano-button-reject-all-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #ebebeb);
--osano-button-reject-all-foreground-color-hover: var(--osano-button-reject-all-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-button-reject-all-background-color-focus: var(--osano-button-reject-all-foreground-color-hover, var(--osano-button-reject-all-foreground-color-contrast));
--osano-button-reject-all-foreground-color-focus: var(--osano-button-reject-all-background-color-hover, var(--osano-button-background-color-hover));
--osano-button-manage-background-color-contrast: var(--osano-button-background-color-contrast, #8e53ff);
--osano-button-manage-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #ebebeb);
--osano-button-manage-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-button-manage-foreground-color-hover: var(--osano-button-manage-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-button-manage-background-color-focus: var(--osano-button-manage-foreground-color-hover, var(--osano-button-manage-foreground-color-contrast));
--osano-button-manage-foreground-color-focus: var(--osano-button-manage-background-color-hover, var(--osano-button-background-color-hover));
--osano-info-dialog-button-background-color-contrast: var(--osano-button-background-color-contrast, #8e53ff);
--osano-info-dialog-button-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #ebebeb);
--osano-info-dialog-button-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-info-dialog-button-foreground-color-hover: var(--osano-info-dialog-button-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-info-dialog-button-background-color-focus: var(--osano-info-dialog-button-foreground-color-hover, var(--osano-info-dialog-button-foreground-color-contrast));
--osano-info-dialog-button-foreground-color-focus: var(--osano-info-dialog-button-background-color-hover, var(--osano-button-background-color-hover));
--osano-info-dialog-toggle-off-track-color-contrast: var(--osano-toggle-off-track-color-contrast, #4c4164);
--osano-info-dialog-toggle-off-thumb-color-contrast: var(--osano-toggle-off-thumb-color-contrast, #ebebeb);
--osano-info-dialog-toggle-off-track-color-hover: var(--osano-info-dialog-toggle-off-track-color-contrast, var(--osano-toggle-off-track-color-contrast));
--osano-info-dialog-toggle-off-thumb-color-hover: var(--osano-info-dialog-toggle-off-thumb-color-contrast, var(--osano-toggle-off-thumb-color-contrast));
--osano-info-dialog-toggle-off-track-color-focus: var(--osano-info-dialog-toggle-off-thumb-color-hover, var(--osano-info-dialog-toggle-off-thumb-color-contrast));
--osano-info-dialog-toggle-off-thumb-color-focus: var(--osano-info-dialog-toggle-off-track-color-hover, var(--osano-info-dialog-toggle-off-track-color-contrast));
--osano-info-dialog-toggle-off-track-color-disabled: var(--osano-toggle-off-track-color-disabled, #786d90);
--osano-info-dialog-toggle-off-thumb-color-disabled: var(--osano-toggle-off-thumb-color-disabled, #bfbfbf);
--osano-info-dialog-toggle-on-track-color-contrast: var(--osano-toggle-on-track-color-contrast, #23b97b);
--osano-info-dialog-toggle-on-thumb-color-contrast: var(--osano-toggle-on-thumb-color-contrast, #ebebeb);
--osano-info-dialog-toggle-on-track-color-hover: var(--osano-info-dialog-toggle-on-track-color-contrast, var(--osano-toggle-on-track-color-contrast));
--osano-info-dialog-toggle-on-thumb-color-hover: var(--osano-info-dialog-toggle-on-thumb-color-contrast, var(--osano-toggle-on-thumb-color-contrast));
--osano-info-dialog-toggle-on-track-color-focus: var(--osano-info-dialog-toggle-on-thumb-color-hover, var(--osano-info-dialog-toggle-on-thumb-color-contrast));
--osano-info-dialog-toggle-on-thumb-color-focus: var(--osano-info-dialog-toggle-on-track-color-hover, var(--osano-info-dialog-toggle-on-track-color-contrast));
--osano-info-dialog-toggle-on-track-color-disabled: var(--osano-toggle-on-track-color-disabled, #008d4f);
--osano-info-dialog-toggle-on-thumb-color-disabled: var(--osano-toggle-on-thumb-color-disabled, #bfbfbf);
--osano-info-dialog-link-color-contrast: var(--osano-link-color-contrast, #23b97b);
--color-white: #ffffff;
--color-black: #000000;
--color-purple-25: #fbfaff;
--color-purple-50: #f4f0ff;
--color-purple-100: #e7dbff;
--color-purple-200: #d1b8ff;
--color-purple-300: #c29eff;
--color-purple-400: #aa77fd;
--color-purple-500: #9b52fb;
--color-purple-600: #8a05ff;
--color-purple-700: #48008c;
--color-purple-800: #2a0052;
--color-purple-900: #1c0037;
--color-blue-25: #f5fbff;
--color-blue-50: #e0f4ff;
--color-blue-100: #c2eaff;
--color-blue-200: #8ad6ff;
--color-blue-300: #70c5ff;
--color-blue-400: #33acff;
--color-blue-500: #0088e5;
--color-blue-600: #005e9e;
--color-blue-700: #002c6f;
--color-blue-800: #00183e;
--color-blue-900: #00102a;
--color-pink-25: #fef5ff;
--color-pink-50: #fce2fe;
--color-pink-100: #fac7ff;
--color-pink-200: #f79ffe;
--color-pink-300: #f680ff;
--color-pink-400: #f347ff;
--color-pink-500: #e615f2;
--color-pink-600: #b500bf;
--color-pink-700: #5c0056;
--color-pink-800: #3b0026;
--color-pink-900: #2c001d;
--color-green-25: #f5fff9;
--color-green-50: #dffeed;
--color-green-100: #b8ffd7;
--color-green-200: #5cffb8;
--color-green-300: #1efe9d;
--color-green-400: #00db7c;
--color-green-500: #009e7a;
--color-green-600: #006d4c;
--color-green-700: #003924;
--color-green-800: #001f16;
--color-green-900: #001913;
--color-lime-25: #f4ffeb;
--color-lime-50: #e6fed2;
--color-lime-100: #c6fb9d;
--color-lime-200: #96f64c;
--color-lime-300: #75ec18;
--color-lime-400: #5dc70a;
--color-lime-500: #449108;
--color-lime-600: #306605;
--color-lime-700: #193503;
--color-lime-800: #0b1801;
--color-lime-900: #070f01;
--color-yellow-25: #fffeeb;
--color-yellow-50: #fffbc2;
--color-yellow-100: #faf1a3;
--color-yellow-200: #ecd60e;
--color-yellow-300: #e0bf00;
--color-yellow-400: #c29800;
--color-yellow-500: #8f6d00;
--color-yellow-600: #614e00;
--color-yellow-700: #2e2600;
--color-yellow-800: #171503;
--color-yellow-900: #0f0c00;
--color-orange-25: #fdfaf6;
--color-orange-50: #faefe5;
--color-orange-100: #f5dfcc;
--color-orange-200: #eabe95;
--color-orange-300: #e2a66e;
--color-orange-400: #d67f2e;
--color-orange-500: #a25e20;
--color-orange-600: #6f4116;
--color-orange-700: #351e09;
--color-orange-800: #1f1105;
--color-orange-900: #0d0702;
--color-gray-25: #fafafa;
--color-gray-50: #f0f0f0;
--color-gray-100: #e3e3e3;
--color-gray-200: #c7c7c7;
--color-gray-300: #b3b3b3;
--color-gray-400: #8f8f8f;
--color-gray-500: #6b6b6b;
--color-gray-600: #4d4d4d;
--color-gray-700: #272727;
--color-gray-800: #141414;
--color-gray-900: #0d0d0d;
--color-red-25: #fef8f9;
--color-red-50: #fce9ea;
--color-red-100: #fad1d3;
--color-red-200: #f4b3b7;
--color-red-300: #f0989e;
--color-red-400: #e96770;
--color-red-500: #e23642;
--color-red-600: #af1d27;
--color-red-700: #63080e;
--color-red-800: #390508;
--color-red-900: #210305;
--color-background: var(--color-white);
--color-background--inverted: var(--color-gray-900);
--color-border: var(--color-gray-100);
--color-border-input: var(--color-gray-200);
--color-text-primary: var(--color-gray-900);
--color-text-primary--inverted: var(--color-white);
--color-text-secondary: var(--color-gray-600);
--color-link-background--hover: var(--color-purple-100);
--tw-ring-color: rgb(59 130 246/0.5);
--tw-border-spacing-y: 0;
--tw-ring-shadow: 0 0 #0000;
--tw-border-spacing-x: 0;
--tw-ring-offset-color: #fff;
--tw-ring-offset-width: 0px;
--tw-shadow-colored: 0 0 #0000;
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-inset: ;
```

### Spacing

```css
--column-size: calc(var(--column-scale) / var(--column-count));
--tw-numeric-spacing: ;
--tw-contain-size: ;
```

### Typography

```css
--font-neue-montreal-mono: "PPNeueMontrealMono","PPNeueMontrealMono Fallback";
--font-roobert: "Roobert","Roobert Fallback";
--font-neue-montreal: "PPNeueMontreal","PPNeueMontreal Fallback";
```

### Shadows

```css
--tw-drop-shadow: ;
--tw-shadow: 0 0 #0000;
```

### Other

```css
--osano-clear-dialog-background: rgba(255,255,255,0);
--osano-dialog-type: bar;
--osano-display-position: bottom;
--osano-info-dialog-position: right;
--osano-widget-position: left;
--osano-opt-out-widget-position: left;
--global-ease: cubic-bezier(0.9,0.1,0.1,0.9);
--global-transition: 350ms var(--global-ease);
--column-count: 8;
--column-scale: calc(var(--vw, 1vw) * 100);
--tw-gradient-via-position: ;
--tw-saturate: ;
--tw-grayscale: ;
--tw-gradient-to-position: ;
--tw-pinch-zoom: ;
--vw: 12.8px;
--tw-scale-y: 1;
--tw-backdrop-contrast: ;
--tw-translate-y: 0;
--tw-pan-x: ;
--nav-bar-height: 66px;
--tw-translate-x: 0;
--tw-blur: ;
--tw-invert: ;
--tw-contain-layout: ;
--tw-backdrop-sepia: ;
--tw-sepia: ;
--tw-ordinal: ;
--tw-contain-style: ;
--tw-backdrop-invert: ;
--tw-backdrop-grayscale: ;
--tw-hue-rotate: ;
--tw-pan-y: ;
--tw-rotate: 0;
--vh: 8px;
--tw-scroll-snap-strictness: proximity;
--tw-backdrop-hue-rotate: ;
--tw-numeric-fraction: ;
--tw-skew-y: 0;
--tw-slashed-zero: ;
--tw-backdrop-opacity: ;
--tw-gradient-from-position: ;
--tw-contain-paint: ;
--tw-backdrop-saturate: ;
--tw-brightness: ;
--tw-backdrop-brightness: ;
--tw-contrast: ;
--tw-skew-x: 0;
--tw-backdrop-blur: ;
--tw-scale-x: 1;
--tw-numeric-figure: ;
```

### Dependencies

```css
0: --osano-dialog-foreground-color;
0: --osano-button-background-color;
0: --osano-button-border-color;
1: --osano-button-foreground-color;
0: --osano-button-foreground-color;
0: --osano-button-border-color;
1: --osano-button-foreground-color;
0: --osano-button-background-color;
0: --osano-button-background-color-hover;
1: --osano-button-background-color-contrast;
0: --osano-button-border-color;
1: --osano-button-foreground-color;
0: --osano-button-foreground-color;
0: --osano-button-background-color;
0: --osano-button-border-color;
1: --osano-button-foreground-color;
0: --osano-button-foreground-color;
0: --osano-link-color;
0: --osano-info-dialog-foreground-color;
1: --osano-dialog-foreground-color;
0: --osano-toggle-off-track-color;
0: --osano-toggle-off-thumb-color;
0: --osano-toggle-on-track-color;
0: --osano-toggle-on-thumb-color;
0: --osano-button-background-color;
0: --osano-info-dialog-button-foreground-color;
1: --osano-button-foreground-color;
0: --osano-button-foreground-color;
0: --osano-dialog-background-color;
0: --osano-dialog-foreground-color;
0: --osano-dialog-foreground-color;
0: --osano-info-dialog-background-color;
1: --osano-dialog-background-color;
0: --osano-info-dialog-foreground-color;
1: --osano-dialog-foreground-color;
0: --osano-info-dialog-foreground-color;
1: --osano-dialog-foreground-color;
0: --osano-dialog-gpc-color;
0: --osano-button-background-color-contrast;
0: --osano-button-foreground-color-contrast;
0: --osano-button-foreground-color-hover;
1: --osano-button-foreground-color-contrast;
0: --osano-button-background-color-hover;
1: --osano-button-background-color-contrast;
0: --osano-toggle-off-track-color-contrast;
0: --osano-toggle-off-thumb-color-contrast;
0: --osano-toggle-off-thumb-color-hover;
1: --osano-toggle-off-thumb-color-contrast;
0: --osano-toggle-off-track-color-hover;
1: --osano-toggle-off-track-color-contrast;
0: --osano-toggle-on-track-color-contrast;
0: --osano-toggle-on-thumb-color-contrast;
0: --osano-toggle-on-thumb-color-hover;
1: --osano-toggle-on-thumb-color-contrast;
0: --osano-toggle-on-track-color-hover;
1: --osano-toggle-on-track-color-contrast;
0: --osano-button-background-color-contrast;
0: --osano-button-foreground-color-contrast;
0: --osano-button-background-color-hover;
1: --osano-button-background-color-contrast;
0: --osano-button-accept-foreground-color-contrast;
1: --osano-button-foreground-color-contrast;
0: --osano-button-accept-foreground-color-hover;
1: --osano-button-accept-foreground-color-contrast;
0: --osano-button-accept-background-color-hover;
1: --osano-button-background-color-hover;
0: --osano-button-background-color-hover;
1: --osano-button-background-color-contrast;
0: --osano-button-deny-foreground-color-contrast;
0: --osano-button-deny-foreground-color-hover;
1: --osano-button-deny-foreground-color-contrast;
0: --osano-button-deny-background-color-hover;
1: --osano-button-background-color-hover;
0: --osano-button-background-color-contrast;
0: --osano-button-foreground-color-contrast;
0: --osano-button-reject-all-foreground-color-contrast;
1: --osano-button-foreground-color-contrast;
0: --osano-button-reject-all-foreground-color-hover;
1: --osano-button-reject-all-foreground-color-contrast;
0: --osano-button-reject-all-background-color-hover;
1: --osano-button-background-color-hover;
0: --osano-button-background-color-contrast;
0: --osano-button-foreground-color-contrast;
0: --osano-button-background-color-hover;
1: --osano-button-background-color-contrast;
0: --osano-button-manage-foreground-color-contrast;
1: --osano-button-foreground-color-contrast;
0: --osano-button-manage-foreground-color-hover;
1: --osano-button-manage-foreground-color-contrast;
0: --osano-button-manage-background-color-hover;
1: --osano-button-background-color-hover;
0: --osano-button-background-color-contrast;
0: --osano-button-foreground-color-contrast;
0: --osano-button-background-color-hover;
1: --osano-button-background-color-contrast;
0: --osano-info-dialog-button-foreground-color-contrast;
1: --osano-button-foreground-color-contrast;
0: --osano-info-dialog-button-foreground-color-hover;
1: --osano-info-dialog-button-foreground-color-contrast;
0: --osano-info-dialog-button-background-color-hover;
1: --osano-button-background-color-hover;
0: --osano-toggle-off-track-color-contrast;
0: --osano-toggle-off-thumb-color-contrast;
0: --osano-info-dialog-toggle-off-track-color-contrast;
1: --osano-toggle-off-track-color-contrast;
0: --osano-info-dialog-toggle-off-thumb-color-contrast;
1: --osano-toggle-off-thumb-color-contrast;
0: --osano-info-dialog-toggle-off-thumb-color-hover;
1: --osano-info-dialog-toggle-off-thumb-color-contrast;
0: --osano-info-dialog-toggle-off-track-color-hover;
1: --osano-info-dialog-toggle-off-track-color-contrast;
0: --osano-toggle-off-track-color-disabled;
0: --osano-toggle-off-thumb-color-disabled;
0: --osano-toggle-on-track-color-contrast;
0: --osano-toggle-on-thumb-color-contrast;
0: --osano-info-dialog-toggle-on-track-color-contrast;
1: --osano-toggle-on-track-color-contrast;
0: --osano-info-dialog-toggle-on-thumb-color-contrast;
1: --osano-toggle-on-thumb-color-contrast;
0: --osano-info-dialog-toggle-on-thumb-color-hover;
1: --osano-info-dialog-toggle-on-thumb-color-contrast;
0: --osano-info-dialog-toggle-on-track-color-hover;
1: --osano-info-dialog-toggle-on-track-color-contrast;
0: --osano-toggle-on-track-color-disabled;
0: --osano-toggle-on-thumb-color-disabled;
0: --osano-link-color-contrast;
0: --global-ease;
0: --vw;
0: --column-scale;
1: --column-count;
0: --color-white;
0: --color-gray-900;
0: --color-gray-100;
0: --color-gray-200;
0: --color-gray-900;
0: --color-white;
0: --color-gray-600;
0: --color-purple-100;
```

### Semantic

```css
--color-green-25: #f5fff9;
--color-green-50: #dffeed;
--color-green-100: #b8ffd7;
--color-green-200: #5cffb8;
--color-green-300: #1efe9d;
--color-green-400: #00db7c;
--color-green-500: #009e7a;
--color-green-600: #006d4c;
--color-green-700: #003924;
--color-green-800: #001f16;
--color-green-900: #001913;
--color-yellow-25: #fffeeb;
--color-yellow-50: #fffbc2;
--color-yellow-100: #faf1a3;
--color-yellow-200: #ecd60e;
--color-yellow-300: #e0bf00;
--color-yellow-400: #c29800;
--color-yellow-500: #8f6d00;
--color-yellow-600: #614e00;
--color-yellow-700: #2e2600;
--color-yellow-800: #171503;
--color-yellow-900: #0f0c00;
--color-red-25: #fef8f9;
--color-red-50: #fce9ea;
--color-red-100: #fad1d3;
--color-red-200: #f4b3b7;
--color-red-300: #f0989e;
--color-red-400: #e96770;
--color-red-500: #e23642;
--color-red-600: #af1d27;
--color-red-700: #63080e;
--color-red-800: #390508;
--color-red-900: #210305;
--tw-shadow-colored: 0 0 #0000;
--osano-info-dialog-position: right;
--osano-info-dialog-overlay-color: rgba(0,0,0,0.45);
--osano-info-dialog-link-color: var(--osano-link-color);
--osano-info-dialog-button-close-color: var(--osano-info-dialog-foreground-color, var(--osano-dialog-foreground-color));
--osano-info-dialog-toggle-off-track-color: var(--osano-toggle-off-track-color);
--osano-info-dialog-toggle-off-thumb-color: var(--osano-toggle-off-thumb-color);
--osano-info-dialog-toggle-on-track-color: var(--osano-toggle-on-track-color);
--osano-info-dialog-toggle-on-thumb-color: var(--osano-toggle-on-thumb-color);
--osano-info-dialog-button-background-color: var(--osano-button-background-color);
--osano-info-dialog-button-border-color: var(--osano-info-dialog-button-foreground-color, var(--osano-button-foreground-color));
--osano-info-dialog-button-foreground-color: var(--osano-button-foreground-color);
--osano-info-dialog-gpc-background-color: var(--osano-info-dialog-background-color, var(--osano-dialog-background-color));
--osano-info-dialog-gpc-border-color: var(--osano-info-dialog-foreground-color, var(--osano-dialog-foreground-color));
--osano-info-dialog-gpc-foreground-color: var(--osano-info-dialog-foreground-color, var(--osano-dialog-foreground-color));
--osano-info-dialog-gpc-color: var(--osano-dialog-gpc-color);
--osano-info-dialog-background-color: #ffffff;
--osano-info-dialog-foreground-color: #000000;
--osano-info-dialog-button-background-color-contrast: var(--osano-button-background-color-contrast, #8e53ff);
--osano-info-dialog-button-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #ebebeb);
--osano-info-dialog-button-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-info-dialog-button-foreground-color-hover: var(--osano-info-dialog-button-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-info-dialog-button-background-color-focus: var(--osano-info-dialog-button-foreground-color-hover, var(--osano-info-dialog-button-foreground-color-contrast));
--osano-info-dialog-button-foreground-color-focus: var(--osano-info-dialog-button-background-color-hover, var(--osano-button-background-color-hover));
--osano-info-dialog-toggle-off-track-color-contrast: var(--osano-toggle-off-track-color-contrast, #4c4164);
--osano-info-dialog-toggle-off-thumb-color-contrast: var(--osano-toggle-off-thumb-color-contrast, #ebebeb);
--osano-info-dialog-toggle-off-track-color-hover: var(--osano-info-dialog-toggle-off-track-color-contrast, var(--osano-toggle-off-track-color-contrast));
--osano-info-dialog-toggle-off-thumb-color-hover: var(--osano-info-dialog-toggle-off-thumb-color-contrast, var(--osano-toggle-off-thumb-color-contrast));
--osano-info-dialog-toggle-off-track-color-focus: var(--osano-info-dialog-toggle-off-thumb-color-hover, var(--osano-info-dialog-toggle-off-thumb-color-contrast));
--osano-info-dialog-toggle-off-thumb-color-focus: var(--osano-info-dialog-toggle-off-track-color-hover, var(--osano-info-dialog-toggle-off-track-color-contrast));
--osano-info-dialog-toggle-off-track-color-disabled: var(--osano-toggle-off-track-color-disabled, #786d90);
--osano-info-dialog-toggle-off-thumb-color-disabled: var(--osano-toggle-off-thumb-color-disabled, #bfbfbf);
--osano-info-dialog-toggle-on-track-color-contrast: var(--osano-toggle-on-track-color-contrast, #23b97b);
--osano-info-dialog-toggle-on-thumb-color-contrast: var(--osano-toggle-on-thumb-color-contrast, #ebebeb);
--osano-info-dialog-toggle-on-track-color-hover: var(--osano-info-dialog-toggle-on-track-color-contrast, var(--osano-toggle-on-track-color-contrast));
--osano-info-dialog-toggle-on-thumb-color-hover: var(--osano-info-dialog-toggle-on-thumb-color-contrast, var(--osano-toggle-on-thumb-color-contrast));
--osano-info-dialog-toggle-on-track-color-focus: var(--osano-info-dialog-toggle-on-thumb-color-hover, var(--osano-info-dialog-toggle-on-thumb-color-contrast));
--osano-info-dialog-toggle-on-thumb-color-focus: var(--osano-info-dialog-toggle-on-track-color-hover, var(--osano-info-dialog-toggle-on-track-color-contrast));
--osano-info-dialog-toggle-on-track-color-disabled: var(--osano-toggle-on-track-color-disabled, #008d4f);
--osano-info-dialog-toggle-on-thumb-color-disabled: var(--osano-toggle-on-thumb-color-disabled, #bfbfbf);
--osano-info-dialog-link-color-contrast: var(--osano-link-color-contrast, #23b97b);
--color-blue-25: #f5fbff;
--color-blue-50: #e0f4ff;
--color-blue-100: #c2eaff;
--color-blue-200: #8ad6ff;
--color-blue-300: #70c5ff;
--color-blue-400: #33acff;
--color-blue-500: #0088e5;
--color-blue-600: #005e9e;
--color-blue-700: #002c6f;
--color-blue-800: #00183e;
--color-blue-900: #00102a;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| xs | 376px | min-width |
| 400px | 400px | min-width |
| sm | 420px | min-width |
| sm | 500px | min-width |
| sm | 600px | min-width |
| sm | 640px | min-width |
| md | 768px | min-width |
| lg | 1024px | min-width |
| 1180px | 1180px | min-width |
| 1200px | 1200px | max-width |
| xl | 1300px | min-width |
| 1440px | 1440px | min-width |
| 2xl | 1575px | min-width |
| 2xl | 1600px | min-width |
| 1760px | 1760px | min-width |
| 1920px | 1920px | min-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.4, 0, 0.2, 1)`, `ease`, `linear`, `cubic-bezier(0.8, 0.01, 0.11, 0.98)`

**Durations:** `0.7s`, `0s`, `0.15s`, `0.2s`, `0.1s`, `0.4s`, `0.5s`, `0.35s`, `0.3s`

### Common Transitions

```css
transition: all;
transition: opacity 0.7s, visibility 0s 0.7s;
transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.2s ease-out;
transition: transform 0.1s linear, opacity 0.2s linear, visibility linear;
transition: opacity 0.2s, visibility 0s 0.2s;
transition: transform 0.4s;
transition: transform 0.5s cubic-bezier(0.8, 0.01, 0.11, 0.98);
transition: transform 0.35s cubic-bezier(0.8, 0.01, 0.11, 0.98);
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations

**delay-overflow**
```css
@keyframes delay-overflow {
  0% { overflow: hidden auto; }
}
```

**osano-load-scale**
```css
@keyframes osano-load-scale {
  0% { transform: translate(0px, -50%) scale(0); }
  100% { transform: translate(0px, -50%) scale(1); opacity: 0; }
}
```

**fadeIn**
```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**accordion-slide-down**
```css
@keyframes accordion-slide-down {
  0% { height: 0px; }
  100% { height: var(--radix-accordion-content-height); }
}
```

**accordion-slide-up**
```css
@keyframes accordion-slide-up {
  0% { height: var(--radix-accordion-content-height); }
  100% { height: 0px; }
}
```

**tooltip-slide-up-in**
```css
@keyframes tooltip-slide-up-in {
  0% { opacity: 0; transform: translateY(2px); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

**tooltip-slide-up-out**
```css
@keyframes tooltip-slide-up-out {
  0% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateY(2px); }
}
```

**tooltip-slide-down-in**
```css
@keyframes tooltip-slide-down-in {
  0% { opacity: 0; transform: translateY(0px); }
  100% { opacity: 1; transform: translateY(2px); }
}
```

**tooltip-slide-down-out**
```css
@keyframes tooltip-slide-down-out {
  0% { opacity: 1; transform: translateY(2px); }
  100% { opacity: 0; transform: translateY(0px); }
}
```

**tooltip-slide-left-in**
```css
@keyframes tooltip-slide-left-in {
  0% { opacity: 0; transform: translateX(0px); }
  100% { opacity: 1; transform: translateX(-2px); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (17 instances)

```css
.buttons {
  background-color: rgb(13, 13, 13);
  color: rgb(13, 13, 13);
  font-size: 16px;
  font-weight: 400;
  padding-top: 10px;
  padding-right: 15px;
  border-radius: 0px;
}
```

### Links (103 instances)

```css
.links {
  color: rgb(107, 107, 107);
  font-size: 16px;
  font-weight: 400;
}
```

### Navigation (13 instances)

```css
.navigation {
  background-color: rgb(255, 255, 255);
  color: rgb(13, 13, 13);
  padding-top: 23px;
  padding-bottom: 23px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
}
```

### Footer (1 instances)

```css
.footer {
  color: rgb(13, 13, 13);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (8 instances)

```css
.modals {
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  padding-top: 0px;
  padding-right: 0px;
  max-width: 480px;
}
```

### Dropdowns (4 instances)

```css
.dropdowns {
  border-radius: 0px;
  border-color: rgb(227, 227, 227);
  padding-top: 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Button — 5 instances, 2 variants

**Variant 1** (4 instances)

```css
  background: rgb(13, 13, 13);
  color: rgb(255, 255, 255);
  padding: 20px 24px 20px 24px;
  border-radius: 0px;
  border: 0px solid rgb(227, 227, 227);
  font-size: 20px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(13, 13, 13);
  padding: 10px 15px 10px 15px;
  border-radius: 0px;
  border: 1px solid rgb(13, 13, 13);
  font-size: 18px;
  font-weight: 400;
```

### Button — 6 instances, 2 variants

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(227, 227, 227);
  font-size: 20px;
  font-weight: 400;
```

**Variant 2** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(13, 13, 13);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(227, 227, 227);
  font-size: 20px;
  font-weight: 400;
```

### Other — 5 instances, 2 variants

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(227, 227, 227);
  font-size: 20px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(13, 13, 13);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(227, 227, 227);
  font-size: 18px;
  font-weight: 400;
```

### Button — 5 instances, 1 variant

**Variant 1** (5 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(13, 13, 13);
  padding: 16px 30px 16px 30px;
  border-radius: 0px;
  border: 0px solid rgb(227, 227, 227);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(255, 255, 255);
  color: rgb(13, 13, 13);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 1px solid rgb(13, 13, 13);
  font-size: 16px;
  font-weight: 400;
```

## Layout System

**23 grid containers** and **231 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 480px | 0px |
| 1280px | 0px |
| 972px | 0px |
| 100% | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 16-column | 8x |
| 2-column | 7x |
| 3-column | 3x |
| 14-column | 2x |
| 5-column | 1x |
| 4-column | 1x |
| 6-column | 1x |

### Grid Templates

```css
grid-template-columns: 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px;
grid-template-columns: 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px;
grid-template-columns: 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px;
grid-template-columns: 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px;
grid-template-columns: 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 161x |
| row-reverse/nowrap | 1x |
| column/nowrap | 52x |
| row/wrap | 17x |

**Gap values:** `0px 40px`, `10px`, `12px`, `15px`, `160px`, `16px`, `20px`, `24px`, `32px`, `40px`, `50px`, `56px`, `60px 40px`, `8px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 1 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#0d0d0d` | `#c2eaff` | 15.28:1 | AAA |

## Design System Score

**Overall: 77/100 (Grade: C)**

| Category | Score |
|----------|-------|
| Color Discipline | 80/100 |
| Typography Consistency | 50/100 |
| Spacing System | 70/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 76 !important rules — prefer specificity over overrides
- 85% of CSS is unused — consider purging
- 2697 duplicate CSS declarations

## Gradients

**11 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | to right | 3 | bold |
| linear | to right | 2 | brand |
| linear | to top | 2 | brand |
| linear | 120deg | 2 | brand |
| linear | 177deg | 2 | brand |
| linear | — | 2 | brand |
| linear | 78deg | 2 | brand |
| linear | 177deg | 2 | brand |
| linear | to right | 2 | brand |
| linear | 90deg | 2 | brand |
| repeating-linear | — | 4 | bold |

```css
background: linear-gradient(to right, rgb(28, 0, 55), rgb(42, 0, 82), rgb(226, 166, 110));
background: linear-gradient(to right, rgb(138, 5, 255), rgb(214, 127, 46));
background: linear-gradient(to top, rgba(55, 49, 69, 0.16), rgba(55, 49, 69, 0.04));
background: linear-gradient(120deg, rgb(255, 255, 255) 17.4%, rgb(231, 219, 255) 36.67%);
background: linear-gradient(177deg, rgb(231, 219, 255) 56.49%, rgb(240, 240, 240) 12.68%);
```

## Z-Index Map

**7 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2147483636,2147483638 | button.o.s.a.n.o.-.c.m.-.w.i.n.d.o.w._._.w.i.d.g.e.t. .o.s.a.n.o.-.c.m.-.w.i.d.g.e.t. .o.s.a.n.o.-.c.m.-.w.i.d.g.e.t.-.-.p.o.s.i.t.i.o.n._.l.e.f.t, div.o.s.a.n.o.-.c.m.-.w.i.n.d.o.w._._.d.i.a.l.o.g. .o.s.a.n.o.-.c.m.-.d.i.a.l.o.g. .o.s.a.n.o.-.c.m.-.d.i.a.l.o.g.-.-.p.o.s.i.t.i.o.n._.b.o.t.t.o.m. .o.s.a.n.o.-.c.m.-.d.i.a.l.o.g.-.-.t.y.p.e._.b.a.r. .o.s.a.n.o.-.c.m.-.d.i.a.l.o.g.-.-.h.i.d.d.e.n, div.o.s.a.n.o.-.c.m.-.w.i.n.d.o.w |
| dropdown | 100,100 | header.s.t.i.c.k.y. .t.o.p.-.0. .z.-.[.1.0.0.]. .b.o.r.d.e.r.-.g.r.a.y.-.9.0.0. .b.o.r.d.e.r.-.b.-.1. .b.g.-.b.a.c.k.g.r.o.u.n.d. .t.e.x.t.-.[.1.5.p.x.]. .t.e.x.t.-.t.e.x.t.-.p.r.i.m.a.r.y. .l.e.a.d.i.n.g.-.[.1.1.2.%.]. .l.g.:.t.e.x.t.-.[.1.6.p.x.]. .d.a.r.k.:.b.o.r.d.e.r.-.g.r.a.y.-.1.0.0. .[.-.-.n.a.v.-.b.a.r.-.p.x.:.6.p.x.]. .[.-.-.n.a.v.-.b.a.r.-.p.y.:.1.3...5.p.x.]. .l.g.:.[.-.-.n.a.v.-.b.a.r.-.p.y.:.2.3.p.x.]. .x.l.:.[.-.-.n.a.v.-.b.a.r.-.p.x.:.1.0.p.x.]. .2.x.l.:.[.-.-.n.a.v.-.b.a.r.-.p.x.:.2.0.p.x.]. .p.r.i.n.t.:.h.i.d.d.e.n, button.f.i.x.e.d. .r.i.g.h.t.-.2.0. .b.o.t.t.o.m.-.2.0. .z.-.[.1.0.0.]. .g.r.i.d. .s.i.z.e.-.[.4.5.p.x.]. .g.r.i.d.-.c.o.l.s.-.2. .o.v.e.r.f.l.o.w.-.h.i.d.d.e.n. .b.o.r.d.e.r.-.1. .b.o.r.d.e.r.-.g.r.a.y.-.9.0.0. .t.r.a.n.s.i.t.i.o.n.-.c.o.l.o.r.s. .e.a.s.e.-.g.l.o.b.a.l. .m.o.t.i.o.n.-.s.a.f.e.:.d.u.r.a.t.i.o.n.-.3.5.0. .m.o.t.i.o.n.-.r.e.d.u.c.e.:.d.u.r.a.t.i.o.n.-.0. .m.d.:.r.i.g.h.t.-.3.0. .m.d.:.b.o.t.t.o.m.-.3.0. .d.a.r.k.:.b.o.r.d.e.r.-.w.h.i.t.e. .b.g.-.w.h.i.t.e. .t.e.x.t.-.g.r.a.y.-.9.0.0 |
| base | 0,2 | span.a.b.s.o.l.u.t.e. .z.-.[.0.]. .o.r.i.g.i.n.-.r.i.g.h.t. .s.c.a.l.e.-.x.-.[.0.]. .b.g.-.p.u.r.p.l.e.-.1.0.0. .t.r.a.n.s.i.t.i.o.n.-.t.r.a.n.s.f.o.r.m. .e.a.s.e.-.g.l.o.b.a.l. .m.o.t.i.o.n.-.s.a.f.e.:.d.u.r.a.t.i.o.n.-.3.0.0. .m.o.t.i.o.n.-.r.e.d.u.c.e.:.d.u.r.a.t.i.o.n.-.0. .l.g.:.g.r.o.u.p.-.f.o.c.u.s.-.v.i.s.i.b.l.e.:.o.r.i.g.i.n.-.l.e.f.t. .l.g.:.g.r.o.u.p.-.h.o.v.e.r.:.o.r.i.g.i.n.-.l.e.f.t. .d.a.r.k.:.b.g.-.p.u.r.p.l.e.-.7.0.0. .-.t.o.p.-.4. .-.l.e.f.t.-.4. .h.-.[.c.a.l.c.(.1.0.0.%.+.8.p.x.).]. .w.-.[.c.a.l.c.(.1.0.0.%.+.8.p.x.).]. .l.g.:.g.r.o.u.p.-.f.o.c.u.s.-.v.i.s.i.b.l.e.:.s.c.a.l.e.-.x.-.[.1.]. .l.g.:.g.r.o.u.p.-.h.o.v.e.r.:.s.c.a.l.e.-.x.-.[.1.], span.a.b.s.o.l.u.t.e. .z.-.[.0.]. .o.r.i.g.i.n.-.r.i.g.h.t. .s.c.a.l.e.-.x.-.[.0.]. .b.g.-.p.u.r.p.l.e.-.1.0.0. .t.r.a.n.s.i.t.i.o.n.-.t.r.a.n.s.f.o.r.m. .e.a.s.e.-.g.l.o.b.a.l. .m.o.t.i.o.n.-.s.a.f.e.:.d.u.r.a.t.i.o.n.-.3.0.0. .m.o.t.i.o.n.-.r.e.d.u.c.e.:.d.u.r.a.t.i.o.n.-.0. .l.g.:.g.r.o.u.p.-.f.o.c.u.s.-.v.i.s.i.b.l.e.:.o.r.i.g.i.n.-.l.e.f.t. .l.g.:.g.r.o.u.p.-.h.o.v.e.r.:.o.r.i.g.i.n.-.l.e.f.t. .d.a.r.k.:.b.g.-.p.u.r.p.l.e.-.7.0.0. .-.t.o.p.-.4. .-.l.e.f.t.-.4. .h.-.[.c.a.l.c.(.1.0.0.%.+.8.p.x.).]. .w.-.[.c.a.l.c.(.1.0.0.%.+.8.p.x.).]. .l.g.:.g.r.o.u.p.-.f.o.c.u.s.-.v.i.s.i.b.l.e.:.s.c.a.l.e.-.x.-.[.1.]. .l.g.:.g.r.o.u.p.-.h.o.v.e.r.:.s.c.a.l.e.-.x.-.[.1.], span.a.b.s.o.l.u.t.e. .z.-.[.0.]. .o.r.i.g.i.n.-.r.i.g.h.t. .s.c.a.l.e.-.x.-.[.0.]. .b.g.-.p.u.r.p.l.e.-.1.0.0. .t.r.a.n.s.i.t.i.o.n.-.t.r.a.n.s.f.o.r.m. .e.a.s.e.-.g.l.o.b.a.l. .m.o.t.i.o.n.-.s.a.f.e.:.d.u.r.a.t.i.o.n.-.3.0.0. .m.o.t.i.o.n.-.r.e.d.u.c.e.:.d.u.r.a.t.i.o.n.-.0. .l.g.:.g.r.o.u.p.-.f.o.c.u.s.-.v.i.s.i.b.l.e.:.o.r.i.g.i.n.-.l.e.f.t. .l.g.:.g.r.o.u.p.-.h.o.v.e.r.:.o.r.i.g.i.n.-.l.e.f.t. .d.a.r.k.:.b.g.-.p.u.r.p.l.e.-.7.0.0. .-.t.o.p.-.4. .-.l.e.f.t.-.4. .h.-.[.c.a.l.c.(.1.0.0.%.+.8.p.x.).]. .w.-.[.c.a.l.c.(.1.0.0.%.+.8.p.x.).]. .l.g.:.g.r.o.u.p.-.f.o.c.u.s.-.v.i.s.i.b.l.e.:.s.c.a.l.e.-.x.-.[.1.]. .l.g.:.g.r.o.u.p.-.h.o.v.e.r.:.s.c.a.l.e.-.x.-.[.1.] |

**Issues:**
- Very high z-index values: 2147483636, 2147483637, 2147483638

## SVG Icons

**37 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 2 |
| md | 2 |
| lg | 1 |
| xl | 32 |

**Icon colors:** `rgb(0, 0, 0)`, `white`, `currentColor`, `#8A05FF`, `#E6DAFF`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| PPNeueMontrealMono | self-hosted | 400, 500, 700 | normal |
| PPNeueMontreal | self-hosted | 400, 500, 600 | normal, italic |
| Roobert | self-hosted | 300, 400, 600 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 74 | objectFit: contain, borderRadius: 0px, shape: square |
| general | 7 | objectFit: contain, borderRadius: 0px, shape: square |
| gallery | 1 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 4:3 (46x), 1:1 (18x), 4.6:1 (10x), 2.5:1 (2x), 2.49:1 (2x), 21:9 (1x), 3.35:1 (1x), 7.64:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `100ms` | 100 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `500ms` | 500 |

### Easing Families

- **custom** (216 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0.8, 0.01, 0.11, 0.98)`
- **ease-in-out** (1 uses) — `ease`
- **linear** (1 uses) — `linear`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `delay-overflow` | custom | overflow | 1 |
| `scroll` | slide-x | transform | 4 |

## Component Anatomy

### button — 18 instances

**Slots:** label, icon
**Variants:** primary
**Sizes:** lg · md

| variant | count | sample label |
|---|---|---|
| default | 13 | Fermer les préférences de cookies |
| primary | 5 | Start for free |

### other — 5 instances


## Brand Voice

**Tone:** neutral · **Pronoun:** you-only · **Headings:** Sentence case (tight)

### Top CTA Verbs

- **start** (2)
- **view** (2)
- **trust** (2)
- **hipaa** (2)
- **deploy** (2)
- **fermer** (1)
- **migrate** (1)

### Button Copy Patterns

- "start for free" (2×)
- "view templates" (2×)
- "trust center" (2×)
- "hipaa on render" (2×)
- "deploy your app for free" (2×)
- "fermer les préférences de cookies" (1×)
- "migrate to render" (1×)

### Sample Headings

> Your fastest path to production for
> Click, click, done.
> Select a service
> Deploy your code
> Render does the rest
> Your fastest path to production for
> Click, click, done.
> Select a service
> Deploy your code
> Render does the rest

## Page Intent

**Type:** `landing` (confidence 0.29)
**Description:** Deploy and scale any app or agent from your first user to your billionth. Build faster on intuitive cloud infrastructure for the modern web.

Alternates: legal (0.4)

## Section Roles

Reading order (top→bottom): pricing-table → feature-grid → nav → hero → testimonial → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | pricing-table | Your fastest path to production for | 0.9 |
| 1 | feature-grid | — | 0.8 |
| 2 | nav | — | 0.9 |
| 3 | hero | Your fastest path to production for | 0.85 |
| 4 | testimonial | Click, click, done. | 0.8 |
| 5 | footer | — | 0.95 |

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.424 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 937px |
| backdrop-filter in use | no |
| Gradients | 11 |

## Imagery Style

**Label:** `mixed` (confidence 0)
**Counts:** total 82, svg 45, icon 9, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Component Library

**Detected:** `shadcn/ui` (confidence 0.65)

Evidence:
- shadcn css tokens

Also considered: tailwindcss (0.3)

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `PPNeueMontreal` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
