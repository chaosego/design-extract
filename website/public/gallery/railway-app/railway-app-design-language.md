# Design Language: Railway | The all-in-one intelligent cloud provider

> Extracted from `https://railway.app` on June 25, 2026
> 5000 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#59497a` | rgb(89, 73, 122) | hsl(260, 25%, 38%) | 4 |
| Secondary | `#291839` | rgb(41, 24, 57) | hsl(271, 41%, 16%) | 1 |
| Accent | `#1f132a` | rgb(31, 19, 42) | hsl(271, 38%, 12%) | 1 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#33323e` | hsl(245, 11%, 22%) | 5004 |
| `#f7f7f8` | hsl(240, 7%, 97%) | 4888 |
| `#545260` | hsl(249, 8%, 35%) | 47 |
| `#a1a0ab` | hsl(245, 6%, 65%) | 12 |
| `#609f89` | hsl(159, 25%, 50%) | 12 |
| `#878593` | hsl(249, 6%, 55%) | 9 |
| `#dcdce0` | hsl(240, 6%, 87%) | 5 |
| `#000000` | hsl(0, 0%, 0%) | 2 |

### Background Colors

Used on large-area elements: `#13111c`, `#000000`, `#180d43`, `#1f132a`, `#0d0c14`, `#1b2132`, `#1f2b2e`

### Text Colors

Text color palette: `#ffffff`, `#13111c`, `#a667e4`, `#f7f7f8`, `#dcdce0`, `#a1a0ab`, `#545260`, `#878593`, `#853bce`, `#bf93ec`

### Gradients

```css
background-image: linear-gradient(rgb(24, 13, 67) 40px, rgba(24, 13, 67, 0) 100%);
```

```css
background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05));
```

```css
background-image: linear-gradient(to top, rgb(49, 60, 60), rgba(40, 52, 52, 0));
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#33323e` | border, background | 5004 |
| `#f7f7f8` | text, border, background | 4888 |
| `#545260` | text | 47 |
| `#13111c` | background, text, border | 35 |
| `#a1a0ab` | text | 12 |
| `#609f89` | text | 12 |
| `#c67839` | text | 12 |
| `#878593` | text | 9 |
| `#a667e4` | text | 6 |
| `#dcdce0` | text | 5 |
| `#3d2259` | background | 5 |
| `#59497a` | background | 4 |
| `#853bce` | text | 3 |
| `#42946e` | background, text | 3 |
| `#000000` | background | 2 |
| `#1b2132` | background | 2 |
| `#180d43` | background | 1 |
| `#1f132a` | background | 1 |
| `#291839` | background | 1 |
| `#bf93ec` | text | 1 |
| `#9c7016` | background | 1 |
| `#eab38a` | text | 1 |
| `#ed852f` | background | 1 |

## Typography

### Font Families

- **Inter** — used for body (4769 elements)
- **JetBrains Mono** — used for body (186 elements)
- **Helvetica** — used for body (38 elements)
- **IBM Plex Serif** — used for headings (7 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 54px | 3.375rem | 500 | 60.48px | -1.96px | h1 |
| 40px | 2.5rem | 700 | 65px | -0.8px | text, tspan |
| 36px | 2.25rem | 400 | 48px | -0.72px | h3, br |
| 24px | 1.5rem | 400 | 32px | normal | div, svg, path, circle |
| 20px | 1.25rem | 700 | 30px | normal | span, p, a, text |
| 18px | 1.125rem | 400 | 27px | normal | div, svg, path, rect |
| 16px | 1rem | 400 | 24px | normal | html, head, style, title |
| 14px | 0.875rem | 500 | 20px | normal | p, a, button, span |
| 13.3333px | 0.8333rem | 600 | 21.6666px | normal | text, tspan |
| 12px | 0.75rem | 400 | 19.5px | normal | text, tspan |
| 11.6667px | 0.7292rem | 400 | 18.9584px | normal | text, tspan |

### Heading Scale

```css
h1 { font-size: 54px; font-weight: 500; line-height: 60.48px; }
h3 { font-size: 36px; font-weight: 400; line-height: 48px; }
```

### Body Text

```css
body { font-size: 14px; font-weight: 500; line-height: 20px; }
```

### Font Weights in Use

`400` (4792x), `500` (133x), `600` (63x), `700` (10x), `800` (2x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-4 | 4px | 0.25rem |
| spacing-60 | 60px | 3.75rem |
| spacing-80 | 80px | 5rem |
| spacing-96 | 96px | 6rem |
| spacing-128 | 128px | 8rem |
| spacing-159 | 159px | 9.9375rem |
| spacing-235 | 235px | 14.6875rem |
| spacing-262 | 262px | 16.375rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 4px | 3 |
| md | 8px | 22 |
| lg | 16px | 4 |
| full | 50px | 2 |
| full | 9999px | 1 |

## Box Shadows

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.2) 0px 0px 0px 1.5px inset;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(62, 45, 45, 0.24) 0px 100px 191px 0px, rgba(62, 45, 45, 0.165) 0px 36.5016px 69.7181px 0px, rgba(62, 45, 45, 0.133) 0px 17.7209px 33.8469px 0px, rgba(62, 45, 45, 0.106) 0px 8.6871px 16.5924px 0px, rgba(62, 45, 45, 0.075) 0px 3.43489px 6.56065px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
```

**xs** — blur: 2px
```css
box-shadow: rgb(204, 204, 204) 0px 0px 2px 2px;
```

**xl** — blur: 127px
```css
box-shadow: rgba(65, 78, 166, 0.1) 0px -12px 127px 0px, rgba(65, 78, 166, 0.07) 0px -4.38px 46.357px 0px, rgba(65, 78, 166, 0.06) 0px -2.127px 22.506px 0px, rgba(65, 78, 166, 0.04) 0px -1.042px 11.033px 0px, rgba(65, 78, 166, 0.03) 0px -0.412px 4.362px 0px;
```

## CSS Custom Properties

### Colors

```css
--osano-button-border-color: #33323e;
--osano-button-background-color: #59497a;
--osano-button-foreground-color: #FFFFFF;
--osano-dialog-background-color: #13111c;
--osano-dialog-foreground-color: #FFFFFF;
--osano-info-dialog-overlay-color: rgba(0,0,0,0.45);
--osano-link-color: #ffffff;
--osano-toggle-off-track-color: #535361;
--osano-toggle-off-thumb-color: #FFFFFF;
--osano-toggle-on-track-color: #13111c;
--osano-toggle-on-thumb-color: #13111c;
--osano-widget-color: #37cd8f;
--osano-widget-outline-color: #29246a;
--osano-widget-fill-color: #fff;
--osano-button-close-color: #13111c;
--osano-button-accept-background-color: var(--osano-button-background-color);
--osano-button-accept-border-color: var(--osano-button-border-color, var(--osano-button-foreground-color));
--osano-button-accept-foreground-color: var(--osano-button-foreground-color);
--osano-button-deny-background-color: #20202e;
--osano-button-deny-border-color: #34343d;
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
--osano-info-dialog-background-color: #180D43;
--osano-info-dialog-foreground-color: #FFFFFF;
--osano-toggle-off-background-color: #d2cfff;
--osano-toggle-button-off-color: #ffffff;
--osano-toggle-on-background-color: #37cd8f;
--osano-toggle-button-on-color: #f4f4f4;
--osano-button-background-color-contrast: #6d5d8e;
--osano-button-foreground-color-contrast: #ebebeb;
--osano-button-deny-background-color-contrast: #343442;
--osano-button-deny-foreground-color-contrast: #ebebeb;
--osano-dialog-background-color-contrast: #272530;
--osano-dialog-foreground-color-contrast: #ebebeb;
--osano-link-color-contrast: #ebebeb;
--osano-toggle-off-track-color-contrast: #676775;
--osano-toggle-off-track-color-disabled: #9393a1;
--osano-toggle-off-thumb-color-contrast: #ebebeb;
--osano-toggle-off-thumb-color-disabled: #bfbfbf;
--osano-toggle-on-track-color-contrast: #272530;
--osano-toggle-on-track-color-disabled: #53515c;
--osano-toggle-on-thumb-color-contrast: #272530;
--osano-toggle-on-thumb-color-disabled: #53515c;
--osano-gpc-background-color-contrast: #ebebeb;
--osano-button-background-color-hover: var(--osano-button-background-color-contrast, #6d5d8e);
--osano-button-foreground-color-hover: var(--osano-button-foreground-color-contrast, #ebebeb);
--osano-button-background-color-focus: var(--osano-button-foreground-color-hover, var(--osano-button-foreground-color-contrast));
--osano-button-foreground-color-focus: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-toggle-off-track-color-hover: var(--osano-toggle-off-track-color-contrast, #676775);
--osano-toggle-off-thumb-color-hover: var(--osano-toggle-off-thumb-color-contrast, #ebebeb);
--osano-toggle-off-track-color-focus: var(--osano-toggle-off-thumb-color-hover, var(--osano-toggle-off-thumb-color-contrast));
--osano-toggle-off-thumb-color-focus: var(--osano-toggle-off-track-color-hover, var(--osano-toggle-off-track-color-contrast));
--osano-toggle-on-track-color-hover: var(--osano-toggle-on-track-color-contrast, #272530);
--osano-toggle-on-thumb-color-hover: var(--osano-toggle-on-thumb-color-contrast, #272530);
--osano-toggle-on-track-color-focus: var(--osano-toggle-on-thumb-color-hover, var(--osano-toggle-on-thumb-color-contrast));
--osano-toggle-on-thumb-color-focus: var(--osano-toggle-on-track-color-hover, var(--osano-toggle-on-track-color-contrast));
--osano-button-accept-background-color-contrast: var(--osano-button-background-color-contrast, #6d5d8e);
--osano-button-accept-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #ebebeb);
--osano-button-accept-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-button-accept-foreground-color-hover: var(--osano-button-accept-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-button-accept-background-color-focus: var(--osano-button-accept-foreground-color-hover, var(--osano-button-accept-foreground-color-contrast));
--osano-button-accept-foreground-color-focus: var(--osano-button-accept-background-color-hover, var(--osano-button-background-color-hover));
--osano-button-deny-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-button-deny-foreground-color-hover: var(--osano-button-deny-foreground-color-contrast, #ebebeb);
--osano-button-deny-background-color-focus: var(--osano-button-deny-foreground-color-hover, var(--osano-button-deny-foreground-color-contrast));
--osano-button-deny-foreground-color-focus: var(--osano-button-deny-background-color-hover, var(--osano-button-background-color-hover));
--osano-button-reject-all-background-color-contrast: var(--osano-button-background-color-contrast, #6d5d8e);
--osano-button-reject-all-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #ebebeb);
--osano-button-reject-all-foreground-color-hover: var(--osano-button-reject-all-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-button-reject-all-background-color-focus: var(--osano-button-reject-all-foreground-color-hover, var(--osano-button-reject-all-foreground-color-contrast));
--osano-button-reject-all-foreground-color-focus: var(--osano-button-reject-all-background-color-hover, var(--osano-button-background-color-hover));
--osano-button-manage-background-color-contrast: var(--osano-button-background-color-contrast, #6d5d8e);
--osano-button-manage-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #ebebeb);
--osano-button-manage-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-button-manage-foreground-color-hover: var(--osano-button-manage-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-button-manage-background-color-focus: var(--osano-button-manage-foreground-color-hover, var(--osano-button-manage-foreground-color-contrast));
--osano-button-manage-foreground-color-focus: var(--osano-button-manage-background-color-hover, var(--osano-button-background-color-hover));
--osano-info-dialog-button-background-color-contrast: var(--osano-button-background-color-contrast, #6d5d8e);
--osano-info-dialog-button-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #ebebeb);
--osano-info-dialog-button-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-info-dialog-button-foreground-color-hover: var(--osano-info-dialog-button-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-info-dialog-button-background-color-focus: var(--osano-info-dialog-button-foreground-color-hover, var(--osano-info-dialog-button-foreground-color-contrast));
--osano-info-dialog-button-foreground-color-focus: var(--osano-info-dialog-button-background-color-hover, var(--osano-button-background-color-hover));
--osano-info-dialog-toggle-off-track-color-contrast: var(--osano-toggle-off-track-color-contrast, #676775);
--osano-info-dialog-toggle-off-thumb-color-contrast: var(--osano-toggle-off-thumb-color-contrast, #ebebeb);
--osano-info-dialog-toggle-off-track-color-hover: var(--osano-info-dialog-toggle-off-track-color-contrast, var(--osano-toggle-off-track-color-contrast));
--osano-info-dialog-toggle-off-thumb-color-hover: var(--osano-info-dialog-toggle-off-thumb-color-contrast, var(--osano-toggle-off-thumb-color-contrast));
--osano-info-dialog-toggle-off-track-color-focus: var(--osano-info-dialog-toggle-off-thumb-color-hover, var(--osano-info-dialog-toggle-off-thumb-color-contrast));
--osano-info-dialog-toggle-off-thumb-color-focus: var(--osano-info-dialog-toggle-off-track-color-hover, var(--osano-info-dialog-toggle-off-track-color-contrast));
--osano-info-dialog-toggle-off-track-color-disabled: var(--osano-toggle-off-track-color-disabled, #9393a1);
--osano-info-dialog-toggle-off-thumb-color-disabled: var(--osano-toggle-off-thumb-color-disabled, #bfbfbf);
--osano-info-dialog-toggle-on-track-color-contrast: var(--osano-toggle-on-track-color-contrast, #272530);
--osano-info-dialog-toggle-on-thumb-color-contrast: var(--osano-toggle-on-thumb-color-contrast, #272530);
--osano-info-dialog-toggle-on-track-color-hover: var(--osano-info-dialog-toggle-on-track-color-contrast, var(--osano-toggle-on-track-color-contrast));
--osano-info-dialog-toggle-on-thumb-color-hover: var(--osano-info-dialog-toggle-on-thumb-color-contrast, var(--osano-toggle-on-thumb-color-contrast));
--osano-info-dialog-toggle-on-track-color-focus: var(--osano-info-dialog-toggle-on-thumb-color-hover, var(--osano-info-dialog-toggle-on-thumb-color-contrast));
--osano-info-dialog-toggle-on-thumb-color-focus: var(--osano-info-dialog-toggle-on-track-color-hover, var(--osano-info-dialog-toggle-on-track-color-contrast));
--osano-info-dialog-toggle-on-track-color-disabled: var(--osano-toggle-on-track-color-disabled, #53515c);
--osano-info-dialog-toggle-on-thumb-color-disabled: var(--osano-toggle-on-thumb-color-disabled, #53515c);
--osano-info-dialog-link-color-contrast: var(--osano-link-color-contrast, #ebebeb);
--foreground: hsl(0, 0%, 100%);
--secondaryBg: hsl(250, 21%, 11%);
--tw-ring-color: #93c5fd80;
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
--tw-numeric-spacing: ;
--tw-contain-size: ;
```

### Typography

```css
--font-inter: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-inter-tight: 'Inter Tight', var(--font-inter);
--font-jetbrains-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
--font-ibm-plex-serif: 'IBM Plex Serif', Georgia, Cambria, 'Times New Roman', serif;
```

### Shadows

```css
--spreadShadow: 0 0 30px hsla(0,0%,30%,.25);
--shadow-opacity: 0.07;
--tw-drop-shadow: ;
--tw-shadow: 0 0 #0000;
```

### Other

```css
--osano-clear-dialog-background: rgba(24,13,67,0);
--osano-dialog-type: bar;
--osano-display-position: bottom;
--osano-info-dialog-position: right;
--osano-widget-position: right;
--osano-opt-out-widget-position: left;
--background: hsl(250, 24%, 9%);
--blue-50: hsl(220, 55%, 10%);
--blue-100: hsl(220, 55%, 13%);
--blue-200: hsl(220, 62%, 25%);
--blue-300: hsl(220, 68%, 35%);
--blue-400: hsl(220, 72%, 45%);
--blue-500: hsl(220, 80%, 55%);
--blue-600: hsl(220, 80%, 65%);
--blue-700: hsl(220, 80%, 75%);
--blue-800: hsl(220, 80%, 85%);
--blue-900: hsl(220, 80%, 95%);
--blue-950: hsl(220, 55%, 97%);
--cyan-50: hsl(180, 25%, 10%);
--cyan-100: hsl(180, 36%, 11%);
--cyan-200: hsl(180, 45%, 16%);
--cyan-300: hsl(180, 50%, 28%);
--cyan-400: hsl(180, 50%, 38%);
--cyan-500: hsl(180, 50%, 44%);
--cyan-600: hsl(180, 50%, 62%);
--cyan-700: hsl(180, 50%, 72%);
--cyan-800: hsl(180, 50%, 80%);
--cyan-900: hsl(180, 58%, 91%);
--cyan-950: hsl(180, 40%, 97%);
--gray-50: hsl(248, 21%, 13%);
--gray-100: hsl(246, 18%, 15%);
--gray-200: hsl(246, 11%, 22%);
--gray-300: hsl(246,  8%, 35%);
--gray-400: hsl(246,  7%, 45%);
--gray-500: hsl(246,  6%, 55%);
--gray-600: hsl(246,  6%, 65%);
--gray-700: hsl(246,  6%, 78%);
--gray-800: hsl(246,  6%, 87%);
--gray-900: hsl(246,  6%, 95%);
--gray-950: hsl(246,  4%, 97%);
--red-50: hsl(1, 35%, 10%);
--red-100: hsl(1, 45%, 12%);
--red-200: hsl(1, 55%, 20%);
--red-300: hsl(1, 62%, 28%);
--red-400: hsl(1, 62%, 35%);
--red-500: hsl(1, 62%, 44%);
--red-600: hsl(1, 62%, 60%);
--red-700: hsl(1, 62%, 76%);
--red-800: hsl(1, 64%, 85%);
--red-900: hsl(1, 68%, 95%);
--red-950: hsl(1, 55%, 98%);
--pink-50: hsl(270, 38%, 12%);
--pink-100: hsl(270, 40%, 16%);
--pink-200: hsl(270, 45%, 24%);
--pink-300: hsl(270, 50%, 32%);
--pink-400: hsl(270, 55%, 43%);
--pink-500: hsl(270, 60%, 52%);
--pink-600: hsl(270, 70%, 65%);
--pink-700: hsl(270, 70%, 75%);
--pink-800: hsl(270, 70%, 85%);
--pink-900: hsl(270, 70%, 95%);
--pink-950: hsl(270, 70%, 98%);
--green-50: hsl(152, 15%, 10%);
--green-100: hsl(152, 26%, 11%);
--green-200: hsl(152, 32%, 16%);
--green-300: hsl(152, 38%, 24%);
--green-400: hsl(152, 38%, 34%);
--green-500: hsl(152, 38%, 42%);
--green-600: hsl(152, 38%, 60%);
--green-700: hsl(152, 38%, 70%);
--green-800: hsl(152, 38%, 80%);
--green-900: hsl(152, 38%, 91%);
--green-950: hsl(152, 40%, 97%);
--yellow-50: hsl(44, 40%, 08%);
--yellow-100: hsl(44, 40%, 10%);
--yellow-200: hsl(44, 50%, 16%);
--yellow-300: hsl(44, 62%, 25%);
--yellow-400: hsl(44, 70%, 40%);
--yellow-500: hsl(44, 74%, 52%);
--yellow-600: hsl(44, 78%, 62%);
--yellow-700: hsl(44, 78%, 72%);
--yellow-800: hsl(44, 78%, 80%);
--yellow-900: hsl(44, 78%, 90%);
--yellow-950: hsl(44, 75%, 97%);
--heroGradient: linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C;
--kickbackHerokGradient-900: t;
--kickbackHerokGradient-undefined: ;
--partnerProjectsGradient: linear-gradient(108.94deg, #16093B 18.43%, #221228 52.22%);
--submitPartnerProjectGradient: linear-gradient(97.9deg, rgba(24, 0, 77, 0.4) 5.96%, rgba(104, 3, 88, 0.4) 81.62%, rgba(9, 251, 251, 0.4) 95.18%), linear-gradient(59.12deg, #2C0A5C 45.19%, #5E084D 68.24%);
--kickbackHeroGradient: linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(186.67deg, rgba(56, 0, 169, 0.2) 17.55%, rgba(56, 0, 169, 0.2) 21.02%, rgba(58, 19, 255, 0) 91.62%), #13111C;
--ai-angle: 0deg;
--tw-gradient-via-position: ;
--tw-saturate: ;
--tw-grayscale: ;
--tw-gradient-to-position: ;
--tw-pinch-zoom: ;
--tw-scale-y: 1;
--tw-backdrop-contrast: ;
--tw-pan-x: ;
--tw-translate-y: 0;
--tw-translate-x: 0;
--tw-blur: ;
--tw-invert: ;
--tw-contain-layout: ;
--tw-backdrop-sepia: ;
--tw-sepia: ;
--tw-ordinal: ;
--tw-contain-style: ;
--tw-backdrop-invert: ;
--lightningcss-dark: ;
--tw-backdrop-grayscale: ;
--tw-hue-rotate: ;
--tw-pan-y: ;
--tw-rotate: 0;
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
--lightningcss-light: ;
--tw-skew-x: 0;
--tw-backdrop-blur: ;
--tw-scale-x: 1;
--tw-numeric-figure: ;
```

### Dependencies

```css
0: --osano-button-background-color;
0: --osano-button-border-color;
1: --osano-button-foreground-color;
0: --osano-button-foreground-color;
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
0: --font-inter;
```

### Semantic

```css
--green-50: hsl(152, 15%, 10%);
--green-100: hsl(152, 26%, 11%);
--green-200: hsl(152, 32%, 16%);
--green-300: hsl(152, 38%, 24%);
--green-400: hsl(152, 38%, 34%);
--green-500: hsl(152, 38%, 42%);
--green-600: hsl(152, 38%, 60%);
--green-700: hsl(152, 38%, 70%);
--green-800: hsl(152, 38%, 80%);
--green-900: hsl(152, 38%, 91%);
--green-950: hsl(152, 40%, 97%);
--yellow-50: hsl(44, 40%, 08%);
--yellow-100: hsl(44, 40%, 10%);
--yellow-200: hsl(44, 50%, 16%);
--yellow-300: hsl(44, 62%, 25%);
--yellow-400: hsl(44, 70%, 40%);
--yellow-500: hsl(44, 74%, 52%);
--yellow-600: hsl(44, 78%, 62%);
--yellow-700: hsl(44, 78%, 72%);
--yellow-800: hsl(44, 78%, 80%);
--yellow-900: hsl(44, 78%, 90%);
--yellow-950: hsl(44, 75%, 97%);
--red-50: hsl(1, 35%, 10%);
--red-100: hsl(1, 45%, 12%);
--red-200: hsl(1, 55%, 20%);
--red-300: hsl(1, 62%, 28%);
--red-400: hsl(1, 62%, 35%);
--red-500: hsl(1, 62%, 44%);
--red-600: hsl(1, 62%, 60%);
--red-700: hsl(1, 62%, 76%);
--red-800: hsl(1, 64%, 85%);
--red-900: hsl(1, 68%, 95%);
--red-950: hsl(1, 55%, 98%);
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
--osano-info-dialog-background-color: #180D43;
--osano-info-dialog-foreground-color: #FFFFFF;
--osano-info-dialog-button-background-color-contrast: var(--osano-button-background-color-contrast, #6d5d8e);
--osano-info-dialog-button-foreground-color-contrast: var(--osano-button-foreground-color-contrast, #ebebeb);
--osano-info-dialog-button-background-color-hover: var(--osano-button-background-color-hover, var(--osano-button-background-color-contrast));
--osano-info-dialog-button-foreground-color-hover: var(--osano-info-dialog-button-foreground-color-contrast, var(--osano-button-foreground-color-contrast));
--osano-info-dialog-button-background-color-focus: var(--osano-info-dialog-button-foreground-color-hover, var(--osano-info-dialog-button-foreground-color-contrast));
--osano-info-dialog-button-foreground-color-focus: var(--osano-info-dialog-button-background-color-hover, var(--osano-button-background-color-hover));
--osano-info-dialog-toggle-off-track-color-contrast: var(--osano-toggle-off-track-color-contrast, #676775);
--osano-info-dialog-toggle-off-thumb-color-contrast: var(--osano-toggle-off-thumb-color-contrast, #ebebeb);
--osano-info-dialog-toggle-off-track-color-hover: var(--osano-info-dialog-toggle-off-track-color-contrast, var(--osano-toggle-off-track-color-contrast));
--osano-info-dialog-toggle-off-thumb-color-hover: var(--osano-info-dialog-toggle-off-thumb-color-contrast, var(--osano-toggle-off-thumb-color-contrast));
--osano-info-dialog-toggle-off-track-color-focus: var(--osano-info-dialog-toggle-off-thumb-color-hover, var(--osano-info-dialog-toggle-off-thumb-color-contrast));
--osano-info-dialog-toggle-off-thumb-color-focus: var(--osano-info-dialog-toggle-off-track-color-hover, var(--osano-info-dialog-toggle-off-track-color-contrast));
--osano-info-dialog-toggle-off-track-color-disabled: var(--osano-toggle-off-track-color-disabled, #9393a1);
--osano-info-dialog-toggle-off-thumb-color-disabled: var(--osano-toggle-off-thumb-color-disabled, #bfbfbf);
--osano-info-dialog-toggle-on-track-color-contrast: var(--osano-toggle-on-track-color-contrast, #272530);
--osano-info-dialog-toggle-on-thumb-color-contrast: var(--osano-toggle-on-thumb-color-contrast, #272530);
--osano-info-dialog-toggle-on-track-color-hover: var(--osano-info-dialog-toggle-on-track-color-contrast, var(--osano-toggle-on-track-color-contrast));
--osano-info-dialog-toggle-on-thumb-color-hover: var(--osano-info-dialog-toggle-on-thumb-color-contrast, var(--osano-toggle-on-thumb-color-contrast));
--osano-info-dialog-toggle-on-track-color-focus: var(--osano-info-dialog-toggle-on-thumb-color-hover, var(--osano-info-dialog-toggle-on-thumb-color-contrast));
--osano-info-dialog-toggle-on-thumb-color-focus: var(--osano-info-dialog-toggle-on-track-color-hover, var(--osano-info-dialog-toggle-on-track-color-contrast));
--osano-info-dialog-toggle-on-track-color-disabled: var(--osano-toggle-on-track-color-disabled, #53515c);
--osano-info-dialog-toggle-on-thumb-color-disabled: var(--osano-toggle-on-thumb-color-disabled, #53515c);
--osano-info-dialog-link-color-contrast: var(--osano-link-color-contrast, #ebebeb);
--blue-50: hsl(220, 55%, 10%);
--blue-100: hsl(220, 55%, 13%);
--blue-200: hsl(220, 62%, 25%);
--blue-300: hsl(220, 68%, 35%);
--blue-400: hsl(220, 72%, 45%);
--blue-500: hsl(220, 80%, 55%);
--blue-600: hsl(220, 80%, 65%);
--blue-700: hsl(220, 80%, 75%);
--blue-800: hsl(220, 80%, 85%);
--blue-900: hsl(220, 80%, 95%);
--blue-950: hsl(220, 55%, 97%);
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| xs | 376px | min-width |
| md | 768px | min-width |
| 1200px | 1200px | max-width |

## Transitions & Animations

**Easing functions:** `ease`, `linear`, `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0.4, 0, 1, 1)`, `cubic-bezier(0, 0, 0.2, 1)`

**Durations:** `0.7s`, `0.2s`, `0.1s`, `0s`, `0.4s`, `0.05s`, `0.15s`

### Common Transitions

```css
transition: all;
transition: opacity 0.7s, visibility;
transition: transform 0.2s ease-out, color 0.2s ease-out, background-color 0.2s ease-out, stroke 0.2s ease-out, stroke-width 0.2s ease-out;
transition: color 0.2s ease-out;
transition: background-color 0.2s ease-out;
transition: transform 0.1s linear, opacity 0.2s linear, visibility linear;
transition: opacity 0.2s, visibility 0s 0.2s;
transition: transform 0.4s;
transition: transform 0.05s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.15s cubic-bezier(0.4, 0, 1, 1);
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

**logos**
```css
@keyframes logos {
  0% { transform: translate(0px); }
  100% { transform: translate(calc(-50% - 8px)); }
}
```

**tweets**
```css
@keyframes tweets {
  0% { transform: translate(0px); }
  100% { transform: translate(calc(-50% - 8px)); }
}
```

**bounce**
```css
@keyframes bounce {
  0%, 100% { animation-timing-function: cubic-bezier(0.8, 0, 1, 1); transform: translateY(-25%); }
  50% { animation-timing-function: cubic-bezier(0, 0, 0.2, 1); transform: none; }
}
```

**flash**
```css
@keyframes flash {
  0% { background-color: var(--flash-bg-color-start,var(--blue-100)); opacity: 0.6; }
  100% { background-color: var(--flash-bg-color-end,transparent); opacity: 1; }
}
```

**ping**
```css
@keyframes ping {
  75%, 100% { opacity: 0; transform: scale(2); }
}
```

**pulse**
```css
@keyframes pulse {
  50% { opacity: 0.5; }
}
```

**pulse-station**
```css
@keyframes pulse-station {
  0% { opacity: 1; transform: scale(0); }
  45% { opacity: 1; }
  100% { opacity: 0.1; transform: scale(1); }
}
```

**rotate-blob**
```css
@keyframes rotate-blob {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (18 instances)

```css
.buttons {
  background-color: rgb(89, 73, 122);
  color: rgb(247, 247, 248);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 6px;
}
```

### Cards (5 instances)

```css
.cards {
  background-color: rgb(19, 17, 28);
  border-radius: 16px;
  box-shadow: rgba(65, 78, 166, 0.1) 0px -12px 127px 0px, rgba(65, 78, 166, 0.07) 0px -4.38px 46.357px 0px, rgba(65, 78, 166, 0.06) 0px -2.127px 22.506px 0px, rgba(65, 78, 166, 0.04) 0px -1.042px 11.033px 0px, rgba(65, 78, 166, 0.03) 0px -0.412px 4.362px 0px;
  padding-top: 0px;
  padding-right: 4px;
}
```

### Links (11 instances)

```css
.links {
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
}
```

### Navigation (4 instances)

```css
.navigation {
  color: rgb(255, 255, 255);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: sticky;
}
```

### Modals (10 instances)

```css
.modals {
  background-color: rgb(19, 17, 28);
  border-radius: 0px;
  box-shadow: rgb(204, 204, 204) 0px 0px 2px 2px;
  padding-top: 0px;
  padding-right: 0px;
  max-width: 384px;
}
```

### Tabs (5 instances)

```css
.tabs {
  background-color: rgb(41, 24, 57);
  color: rgb(247, 247, 248);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(51, 50, 62);
  border-radius: 8px;
}
```

### ProgressBars (5 instances)

```css
.progressBars {
  color: rgb(247, 247, 248);
  border-radius: 8px;
  font-size: 16px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 2 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgb(19, 17, 28);
  color: rgb(19, 17, 28);
  padding: 0px 0px 0px 0px;
  border-radius: 50%;
  border: 2px solid rgb(19, 17, 28);
  font-size: 16px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(51, 50, 62);
  font-size: 16px;
  font-weight: 400;
```

### Button — 5 instances, 2 variants

**Variant 1** (3 instances)

```css
  background: rgb(89, 73, 122);
  color: rgb(255, 255, 255);
  padding: 8px 12px 8px 12px;
  border-radius: 4px;
  border: 1px solid rgb(51, 50, 62);
  font-size: 16px;
  font-weight: 700;
```

**Variant 2** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(247, 247, 248);
  padding: 0px 12px 0px 12px;
  border-radius: 6px;
  border: 0px solid rgb(51, 50, 62);
  font-size: 14px;
  font-weight: 500;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 6px 0px 6px 0px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 14px;
  font-weight: 400;
```

### Button — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(247, 247, 248);
  padding: 6px 12px 6px 12px;
  border-radius: 6px;
  border: 0px solid rgb(51, 50, 62);
  font-size: 16px;
  font-weight: 400;
```

### Button — 5 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgb(41, 24, 57);
  color: rgb(247, 247, 248);
  padding: 0px 0px 0px 0px;
  border-radius: 8px;
  border: 0px solid rgb(51, 50, 62);
  font-size: 16px;
  font-weight: 400;
```

**Variant 2** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(247, 247, 248);
  padding: 0px 0px 0px 0px;
  border-radius: 8px;
  border: 0px solid rgb(51, 50, 62);
  font-size: 16px;
  font-weight: 400;
```

## Layout System

**9 grid containers** and **101 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 320px | 0px |
| 1696px | 0px |
| 100% | 0px |
| 1160px | 0px |
| 544px | 0px |
| 550px | 24px |
| 600px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 12-column | 5x |
| 3-column | 2x |
| 6-column | 1x |
| 1-column | 1x |

### Grid Templates

```css
grid-template-columns: 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3438px;
gap: normal 32px;
grid-template-columns: 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3438px;
gap: normal 32px;
grid-template-columns: 44px 1160px 44px;
grid-template-columns: 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px;
gap: normal 32px;
grid-template-columns: 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px 67.3281px;
gap: normal 32px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 93x |
| row/wrap | 5x |
| row-reverse/nowrap | 1x |
| column/nowrap | 2x |

**Gap values:** `12px`, `16px`, `24px`, `32px`, `8px`, `normal 32px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 4 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#ffffff` | `#59497a` | 7.9:1 | AAA |
| `#ffffff` | `#553f83` | 8.66:1 | AAA |

## Design System Score

**Overall: 81/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 232 !important rules — prefer specificity over overrides
- 88% of CSS is unused — consider purging
- 3694 duplicate CSS declarations

## Gradients

**3 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |
| linear | — | 2 | brand |
| linear | to top | 2 | brand |

```css
background: linear-gradient(rgb(24, 13, 67) 40px, rgba(24, 13, 67, 0) 100%);
background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05));
background: linear-gradient(to top, rgb(49, 60, 60), rgba(40, 52, 52, 0));
```

## Z-Index Map

**9 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 9999,2147483638 | div.s.t.i.c.k.y. .t.o.p.-.0. .z.-.[.9.9.9.9.]. .p.y.-.4. .p.x.-.4. .x.l.:.p.x.-.0. .b.g.-.o.a.t.m.e.a.l. .d.a.r.k.:.b.g.-.b.a.c.k.g.r.o.u.n.d, button.o.s.a.n.o.-.c.m.-.w.i.n.d.o.w._._.w.i.d.g.e.t. .o.s.a.n.o.-.c.m.-.w.i.d.g.e.t. .o.s.a.n.o.-.c.m.-.w.i.d.g.e.t.-.-.h.i.d.d.e.n. .o.s.a.n.o.-.c.m.-.w.i.d.g.e.t.-.-.p.o.s.i.t.i.o.n._.r.i.g.h.t, div.o.s.a.n.o.-.c.m.-.w.i.n.d.o.w._._.d.i.a.l.o.g. .o.s.a.n.o.-.c.m.-.d.i.a.l.o.g. .o.s.a.n.o.-.c.m.-.d.i.a.l.o.g.-.-.p.o.s.i.t.i.o.n._.b.o.t.t.o.m. .o.s.a.n.o.-.c.m.-.d.i.a.l.o.g.-.-.t.y.p.e._.b.a.r |
| sticky | 10,50 | div.f.l.e.x. .p.-.3. .i.t.e.m.s.-.c.e.n.t.e.r. .b.g.-.p.r.i.m.a.r.y.-.s.u.r.f.a.c.e. .t.e.x.t.-.p.r.i.m.a.r.y. .b.a.n.n.e.r.-.a.g.e.n.t.s.-.w.e.e.k. .p.y.-.4. .r.e.l.a.t.i.v.e. .p.r.-.8. .r.o.u.n.d.e.d.-.n.o.n.e. .z.-.1.0, div.r.e.l.a.t.i.v.e. .z.-.1.0. .m.d.:.p.t.-.3.2. .p.t.-.2.4. .m.d.:.p.b.-.2.4. .p.b.-.1.2. .p.x.-.4. .l.g.:.p.x.-.[.1.5.9.p.x.]. .f.l.e.x. .f.l.e.x.-.c.o.l. .i.t.e.m.s.-.c.e.n.t.e.r. .t.e.x.t.-.c.e.n.t.e.r, div.r.e.l.a.t.i.v.e. .m.x.-.a.u.t.o. .m.a.x.-.w.-.f.u.l.l. .w.-.f.i.t. .h.i.d.d.e.n. .m.d.:.f.l.e.x. .g.a.p.-.2. .i.t.e.m.s.-.c.e.n.t.e.r. .h.i.d.e.-.s.c.r.o.l.l.b.a.r. .z.-.1.0. .f.l.e.x.-.n.o.w.r.a.p. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .o.v.e.r.f.l.o.w.-.x.-.a.u.t.o. .p.-.1. .r.o.u.n.d.e.d.-.l.g. .b.g.-.b.a.c.k.g.r.o.u.n.d. .d.a.r.k.:.b.o.r.d.e.r. .d.a.r.k.:.b.o.r.d.e.r.-.w.h.i.t.e./.0.5. .-.t.r.a.n.s.l.a.t.e.-.y.-.6. .[.b.o.x.-.s.h.a.d.o.w.:.0._.-.1.2.p.x._.1.2.7.p.x._.0._.r.g.b.a.(.6.5.,.7.8.,.1.6.6.,.0...1.0.).,.0._.-.4...3.8.p.x._.4.6...3.5.7.p.x._.0._.r.g.b.a.(.6.5.,.7.8.,.1.6.6.,.0...0.7.).,.0._.-.2...1.2.7.p.x._.2.2...5.0.6.p.x._.0._.r.g.b.a.(.6.5.,.7.8.,.1.6.6.,.0...0.6.).,.0._.-.1...0.4.2.p.x._.1.1...0.3.3.p.x._.0._.r.g.b.a.(.6.5.,.7.8.,.1.6.6.,.0...0.4.).,.0._.-.0...4.1.2.p.x._.4...3.6.2.p.x._.0._.r.g.b.a.(.6.5.,.7.8.,.1.6.6.,.0...0.3.).]. .i.n.v.i.s.i.b.l.e |
| base | 1,2 | div.o.s.a.n.o.-.c.m.-.i.n.f.o._._.i.n.f.o.-.d.i.a.l.o.g.-.h.e.a.d.e.r. .o.s.a.n.o.-.c.m.-.i.n.f.o.-.d.i.a.l.o.g.-.h.e.a.d.e.r, p.o.s.a.n.o.-.c.m.-.i.n.f.o.-.d.i.a.l.o.g.-.h.e.a.d.e.r._._.h.e.a.d.e.r. .o.s.a.n.o.-.c.m.-.h.e.a.d.e.r, button.o.s.a.n.o.-.c.m.-.d.i.a.l.o.g._._.c.l.o.s.e. .o.s.a.n.o.-.c.m.-.c.l.o.s.e |

**Issues:**
- Very high z-index values: 2147483636, 2147483637, 2147483638

## SVG Icons

**24 unique SVG icons** detected. Dominant style: **outlined**.

| Size Class | Count |
|------------|-------|
| xs | 1 |
| sm | 5 |
| md | 11 |
| lg | 2 |
| xl | 5 |

**Icon colors:** `rgb(0, 0, 0)`, `rgb(19, 17, 28)`, `rgb(255, 255, 255)`, `currentColor`, `white`, `#000`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Inter Tight | google-fonts | 100, 100 900, 900 | normal |
| JetBrains Mono | google-fonts | 100, 100 800, 800 | normal |
| Inter | google-fonts | 300, 300 800, 800 | normal |
| IBM Plex Serif | google-fonts | 400, 500, 600, 700 | italic, normal |

**Google Fonts URL:** `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100..900&display=swap`

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 38 | objectFit: fill, borderRadius: 0px, shape: square |
| avatar | 15 | objectFit: cover, borderRadius: 9999px, shape: circular |
| hero | 4 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (36x), 21:9 (2x), 2.76:1 (2x), 0.17:1 (2x), 4:3 (2x), 3:4 (1x), 6.52:1 (1x), 5.71:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `instant` | `50ms` | 50 |
| `xs` | `100ms` | 100 |
| `sm` | `200ms` | 200 |
| `md` | `400ms` | 400 |
| `lg` | `700ms` | 700 |

### Easing Families

- **ease-in-out** (10 uses) — `ease`
- **linear** (1 uses) — `linear`
- **custom** (5 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`
- **ease-in** (4 uses) — `cubic-bezier(0.4, 0, 1, 1)`
- **ease-out** (1 uses) — `cubic-bezier(0, 0, 0.2, 1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `delay-overflow` | custom | overflow | 1 |
| `pulse-station` | reveal | opacity, transform | 3 |

## Component Anatomy

### button — 18 instances

**Slots:** label, icon
**Variants:** outline
**Sizes:** md · lg · sm

| variant | count | sample label |
|---|---|---|
| default | 12 | Close this dialog |
| outline | 6 | Deploy |

## Brand Voice

**Tone:** neutral · **Pronoun:** you-only · **Headings:** Sentence case (balanced)

### Top CTA Verbs

- **close** (2)
- **manage** (2)
- **accept** (1)
- **reject** (1)
- **product** (1)
- **developers** (1)
- **enterprise** (1)
- **company** (1)

### Button Copy Patterns

- "close this dialog" (1×)
- "manage preferences
accept all
reject non-essential" (1×)
- "manage preferences" (1×)
- "accept all" (1×)
- "reject non-essential" (1×)
- "close cookie preferences" (1×)
- "product" (1×)
- "developers" (1×)
- "enterprise" (1×)
- "company" (1×)

### Sample Headings

> Ship software peacefully
> Deploy anything
without the complexity
> Instant networking.
Zero setup.
> Grow big
without the growing pains
> Logs, metrics, and alerts in one place. Clarity without the chaos.
> Finally, a development workflow that actually flows.
> Trusted by the best in business
> 0+ deploys per month (and counting)
> 0+ deploys per month (and counting)

## Page Intent

**Type:** `landing` (confidence 0.45)
**Description:** Railway is a full-stack cloud for deploying web apps, servers, databases, and more with automatic scaling, monitoring, and security.

## Section Roles

Reading order (top→bottom): nav → hero → testimonials → content → content → testimonial → testimonials → testimonial → pricing-table → nav → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | hero | Ship software peacefully | 0.85 |
| 2 | testimonials | Deploy anything
without the complexity | 0.4 |
| 3 | content | Instant networking.
Zero setup. | 0.3 |
| 4 | content | Grow big
without the growing pains | 0.3 |
| 5 | testimonial | Logs, metrics, and alerts in one place. Clarity without the chaos. | 0.8 |
| 6 | testimonials | Finally, a development workflow that actually flows. | 0.4 |
| 7 | testimonial | Trusted by the best in business | 0.8 |
| 8 | pricing-table | 0+ deploys per month (and counting) | 0.9 |
| 9 | nav | 0+ deploys per month (and counting) | 0.4 |
| 10 | footer | — | 0.95 |

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.422 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 9999px |
| backdrop-filter in use | no |
| Gradients | 3 |

## Imagery Style

**Label:** `flat-illustration` (confidence 0.129)
**Counts:** total 57, svg 39, icon 55, screenshot-like 0, photo-like 3
**Dominant aspect:** square-ish
**Radius profile on images:** rounded

## Component Library

**Detected:** `shadcn/ui` (confidence 0.65)

Evidence:
- shadcn css tokens

Also considered: tailwindcss (0.3)

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Inter` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
