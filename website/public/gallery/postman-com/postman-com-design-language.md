# Design Language: Postman: The World's Leading API Platform | Sign Up for Free

> Extracted from `https://postman.com` on June 25, 2026
> 1198 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#e05320` | rgb(224, 83, 32) | hsl(16, 76%, 50%) | 25 |
| Secondary | `#007bff` | rgb(0, 123, 255) | hsl(211, 100%, 50%) | 5 |
| Accent | `#ff6c37` | rgb(255, 108, 55) | hsl(16, 100%, 61%) | 1 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#212121` | hsl(0, 0%, 13%) | 737 |
| `#000000` | hsl(0, 0%, 0%) | 156 |
| `#707070` | hsl(0, 0%, 44%) | 139 |
| `#ffffff` | hsl(0, 0%, 100%) | 61 |
| `#5c5c5c` | hsl(0, 0%, 36%) | 42 |
| `#e6e6e6` | hsl(0, 0%, 90%) | 15 |
| `#09070d` | hsl(260, 30%, 4%) | 10 |
| `#8a8a8a` | hsl(0, 0%, 54%) | 4 |
| `#cfcfcf` | hsl(0, 0%, 81%) | 4 |

### Background Colors

Used on large-area elements: `#ffffff`, `#f9f8f7`, `#ff6c37`, `#140b1e`, `#09070d`

### Text Colors

Text color palette: `#000000`, `#212121`, `#0265d2`, `#6b6b6b`, `#e05320`, `#5c5c5c`, `#ffffff`, `#707070`, `#007bff`

### Gradients

```css
background-image: linear-gradient(99deg, rgb(255, 204, 252) 0%, rgba(207, 207, 207, 0) 100%);
```

```css
background-image: linear-gradient(275deg, rgba(161, 161, 161, 0) 0%, rgba(255, 108, 55, 0.2) 100%);
```

```css
background-image: linear-gradient(275deg, rgba(207, 207, 207, 0) 0%, rgba(255, 216, 117, 0.2) 100%);
```

```css
background-image: linear-gradient(275deg, rgba(207, 207, 207, 0) 0%, rgba(179, 135, 245, 0.2) 100%);
```

```css
background-image: linear-gradient(9.34deg, rgb(20, 11, 30) 0%, rgb(20, 11, 30) 70%, rgb(73, 21, 145) 85%, rgb(130, 44, 102) 92%, rgb(224, 83, 31) 100%);
```

```css
background-image: linear-gradient(353deg, rgb(255, 111, 57) 13.05%, rgb(179, 135, 245) 125.14%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#212121` | text, background, border | 737 |
| `#000000` | text, border, background | 156 |
| `#707070` | text, background, border | 139 |
| `#ffffff` | background, text | 61 |
| `#0265d2` | text | 51 |
| `#5c5c5c` | text | 42 |
| `#e05320` | text, background | 25 |
| `#e6e6e6` | border | 15 |
| `#09070d` | background | 10 |
| `#140b1e` | background | 7 |
| `#007bff` | text, border | 5 |
| `#8a8a8a` | background | 4 |
| `#cfcfcf` | border | 4 |
| `#ff6c37` | background | 1 |
| `#b387f5` | border | 1 |

## Typography

### Font Families

- **inter** — used for all (774 elements)
- **ibmPlexMono** — used for body (21 elements)
- **degular** — used for headings (3 elements)
- **Times** — used for body (1 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 55px | 3.4375rem | 600 | 49.5px | 0.6px | h1, h2 |
| 36px | 2.25rem | 600 | 42.0001px | 0.48px | h2 |
| 22px | 1.375rem | 400 | 35.75px | -0.16px | p |
| 20px | 1.25rem | 400 | 24px | -0.16px | p |
| 16px | 1rem | 400 | 18.4px | -0.16px | body, div, a, nav |
| 14px | 0.875rem | 600 | 21px | normal | button, span, div, svg |
| 12px | 0.75rem | 400 | 19.5px | -0.16px | p |
| 10px | 0.625rem | 400 | 11.5px | normal | html, head, meta, link |

### Heading Scale

```css
h1 { font-size: 55px; font-weight: 600; line-height: 49.5px; }
h2 { font-size: 36px; font-weight: 600; line-height: 42.0001px; }
h2 { font-size: 16px; font-weight: 400; line-height: 18.4px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: 18.4px; }
```

### Font Weights in Use

`400` (1012x), `600` (186x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-20 | 20px | 1.25rem |
| spacing-24 | 24px | 1.5rem |
| spacing-40 | 40px | 2.5rem |
| spacing-50 | 50px | 3.125rem |
| spacing-60 | 60px | 3.75rem |
| spacing-64 | 64px | 4rem |
| spacing-80 | 80px | 5rem |
| spacing-120 | 120px | 7.5rem |
| spacing-224 | 224px | 14rem |
| spacing-252 | 252px | 15.75rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 3px | 3 |
| md | 10px | 28 |
| lg | 15px | 4 |
| xl | 20px | 1 |
| full | 9999px | 1 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgb(255, 108, 55) 0px 0px 0px 1px inset;
```

**lg** — blur: 24px
```css
box-shadow: rgb(179, 135, 245) 0px 4px 24px 0px;
```

## CSS Custom Properties

### Colors

```css
--demo-content-primary: #212121;
--demo-content-secondary: #6b6b6b;
--demo-content-muted: #e6e6e6;
--demo-bg-primary: #fff;
--demo-bg-secondary: #f9f9f9;
--demo-bg-tertiary: #f2f2f2;
--demo-bg-brand: #fff1eb;
--demo-bg-success: #e5fff1;
--demo-bg-error: #ffebe7;
--demo-bg-purple: #f7f2ff;
--demo-border-subdued: #f2f2f2;
--demo-border-default: #ededed;
--demo-border-strong: #e6e6e6;
--v12-border: #e6e6e6;
--v12-border-light: #ededed;
--v12-response-bg: #fafafa;
--monaco-light-editor-bg: #fff;
--monaco-light-line-highlight-bg: #f9f9f9;
--monaco-light-gutter-bg: #f9f9f9;
--monaco-light-gutter-border: #ededed;
--monaco-light-string: #2a00ff;
--demo-highlight-bg-subtle: #fff8f5;
--demo-highlight-bg: #fff4ef;
--demo-highlight-bg-hover: #ffede6;
--demo-highlight-accent: var(--demo-brand,#ff6c37);
--demo-highlight-accent-width: 2px;
--color-orange-600: lab(57.1026% 64.2584 89.8886);
--color-blue-700: lab(36.9089% 35.0961 -85.6872);
--tw-inset-ring-shadow: 0 0 #0000;
--color-blue-300: lab(77.5052% -6.4629 -36.42);
--color-gray-300: lab(85.1236% -.612259 -3.7138);
--color-gray-500: lab(47.7841% -.393182 -10.0268);
--card_shadow_2: 0 8px 16px -4px #00000014;
--color-white: #fff;
--color-gray-400: lab(65.9269% -.832707 -8.17473);
--color-yellow-300: lab(89.7033% -.480294 84.4917);
--color-gray-100: lab(96.1596% -.0823438 -1.13575);
--color-blue-800: lab(30.2514% 27.7853 -70.2699);
--color-green-600: lab(59.0978% -58.6621 41.2579);
--color-red-300: lab(76.5514% 36.422 15.5335);
--color-orange-500: lab(64.272% 57.1788 90.3583);
--border-radius-medium: 10px;
--content-color-primary: #212121;
--secondary-button-grey: #8a8a8a1a;
--color-gray-600: lab(35.6337% -1.58697 -10.8425);
--color-orange-100: lab(94.7127% 3.58394 14.3151);
--color-blue-600: lab(44.0605% 29.0279 -86.0352);
--tw-border-style: solid;
--color-red-600: lab(48.4493% 77.4328 61.5452);
--border-radius-large: 20px;
--color-black: #000;
--card_shadow: 0 8px 16px -4px #00000014;
--tw-ring-shadow: 0 0 #0000;
--color-purple-500: lab(52.0183% 66.11 -78.2316);
--color-yellow-600: lab(62.7799% 22.4197 86.1544);
--color-gray-50: lab(98.2596% -.247031 -.706708);
--tw-ring-offset-color: #fff;
--content-color-tertiary: #707070;
--color-red-500: lab(55.4814% 75.0732 48.8528);
--tw-ring-offset-width: 0px;
--tw-ring-offset-shadow: 0 0 #0000;
--color-gray-800: lab(16.1051% -1.18239 -11.7533);
--color-yellow-700: lab(47.8202% 25.2426 66.5015);
--color-red-700: lab(40.4273% 67.2623 53.7441);
--color-slate-100: lab(96.286% -.852436 -2.46847);
--color-blue-500: lab(54.1736% 13.3369 -74.6839);
--color-gray-900: lab(8.11897% .811279 -12.254);
--border-angle: 0deg;
--color-blue-900: lab(26.1542% 15.7545 -51.5504);
--bs-nav-link-color: #0056b3;
--color-gray-700: lab(27.1134% -.956401 -12.3224);
--border-radius-small: 5px;
--color-green-300: lab(86.9953% -47.2691 25.0054);
--color-red-50: lab(96.5005% 4.18508 1.52328);
--color-gray-200: lab(91.6229% -.159115 -2.26791);
--color-green-700: lab(47.0329% -47.0239 31.4788);
--content-color-secondary: #303030;
```

### Spacing

```css
--tw-space-x-reverse: 0;
--spacing-4: 32px;
--spacing-1: 8px;
--spacing-6: 48px;
--spacing: .25rem;
--spacing-0: 0;
--tw-space-y-reverse: 0;
--spacing-8: 64px;
--spacing-3: 24px;
--spacing-2: 16px;
--spacing-16: 128px;
```

### Typography

```css
--demo-font: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", Helvetica, Arial, sans-serif;
--demo-font-code: "IBMPlexMono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
--demo-text-xs: 10px;
--demo-text-s: 11px;
--demo-text-m: 12px;
--demo-text-l: 14px;
--font-degular: "degular", "degular Fallback";
--text-base--line-height: calc(1.5 / 1);
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
--font-weight-bold: 700;
--text-xs--line-height: calc(1 / .75);
--text-xl: 1.25rem;
--font-inter-semibold: "inter", "inter Fallback";
--leading-relaxed: 1.625;
--text-2xl--line-height: calc(2 / 1.5);
--font-ibm-pm: "ibmPlexMono", "ibmPlexMono Fallback";
--text-xl--line-height: calc(1.75 / 1.25);
--text-sm: .875rem;
--leading-tight: 1.25;
--text-2xl: 1.5rem;
--text-7xl: 4.5rem;
--text-lg: 1.125rem;
--font-default: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica, Arial, sans-serif;
--text-5xl--line-height: 1;
--leading-normal: 1.5;
--text-lg--line-height: calc(1.75 / 1.125);
--font-degular-display-bold: "degular", "degular Fallback";
--font-degular-display-semibold: "degular", "degular Fallback";
--font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--default-font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--font-inter: "inter", "inter Fallback";
--text-7xl--line-height: 1;
--font-weight-semibold: 600;
--text-sm--line-height: calc(1.25 / .875);
--text-3xl--line-height: calc(2.25 / 1.875);
--text-5xl: 3rem;
--text-3xl: 1.875rem;
--text-xs: .75rem;
--font-weight-medium: 500;
--font-weight-normal: 400;
--text-base: 1rem;
--default-mono-font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

### Shadows

```css
--tw-inset-shadow-alpha: 100%;
--tw-inset-shadow: 0 0 #0000;
--tw-shadow-alpha: 100%;
--tw-drop-shadow-alpha: 100%;
--screenshot_shadow: 0px 0px 8px 5px #0000000d;
--tw-shadow: 0 0 #0000;
--form_shadow: 0px 5px 8px #1c272b0d;
```

### Radii

```css
--demo-radius-default: 4px;
--radius-2xl: 1rem;
```

### Other

```css
--demo-content-tertiary: #a6a6a6;
--demo-content-brand: #d23f0e;
--demo-content-success: #007f31;
--demo-content-warning: #ad7a03;
--demo-content-error: #8e1a10;
--demo-content-purple: #4c207d;
--demo-brand: #ff6c37;
--demo-active-green: #0cbb52;
--v12-sidebar: #f7f7f7;
--v12-titlebar: #f3f3f3;
--v12-tab-active: #ff6c37;
--v12-row-active: #e3e3e3;
--v12-url-var: #9263d9;
--monaco-light-gutter-fg: #a6a6a6;
--monaco-light-comment: #5f8fbf;
--monaco-light-keyword: #800555;
--monaco-light-function: #000;
--monaco-light-support: #642880;
--monaco-light-number: #f0a;
--monaco-light-plain: #333;
--monaco-light-type: #800555;
--monaco-light-prop: #333;
--demo-highlight-outline: #ff6c3780;
--aspect-video: 16 / 9;
--grey-15: #f8f9fa;
--grey-30: #e6e6e6;
--tw-outline-style: solid;
--ease-in: cubic-bezier(.4, 0, 1, 1);
--blue-100: #0d1629;
--grey-60: #3b3b3b;
--grey-90: #212121;
--link-hover: #0056b3;
--orange-80: #a12700;
--yellow-30: #ffe47e;
--tw-gradient-from: rgba(0, 0, 0, 0);
--grey-55: #6b6b6b;
--tw-gradient-to: rgba(0, 0, 0, 0);
--blue-90: #002d70;
--orange-50: #ff6c37;
--purple-dark: #210b30;
--blue-50: #097bed;
--tw-gradient-via-position: 50%;
--blue-80: #00439d;
--yellow-70: #ad7a03;
--tw-gradient-to-position: 100%;
--default-transition-duration: .15s;
--animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;
--orange-55: #ff6c37;
--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
--grey-03: #e6e6e6;
--purple-20: #ede1ff;
--grey-25: #dadada;
--orange-70: #d23f0e;
--blue-10: #e7f0ff;
--tw-translate-z: 0;
--blue-8: #e6eafd;
--tw-gradient-via: rgba(0, 0, 0, 0);
--tw-scale-y: 1;
--tw-translate-y: 0;
--purple-55: #623497;
--ease-out: cubic-bezier(0, 0, .2, 1);
--tw-content: "";
--grey-70: #303030;
--orange-20: #ffd1be;
--tw-translate-x: 0;
--purple-30: #f7f2ff;
--orange-15: #fcdecf;
--grey-06: #cfcfcf;
--grey-40: #a6a6a6;
--blue-30: #74aef6;
--dark-orange: #a12700;
--form_field_focus: 0 0 0 .2rem #007bff40;
--purple-15: #e8d6ff;
--yellow-90: #886000;
--grey-80: #2b2b2b;
--blue-enterprise: #0b162a;
--grey-85: #262626;
--orange-60: #e05320;
--blue-05: #f5f8fb;
--purple-40: #710eed;
--purple-60: #ccacfc;
--blue-5: #f5f8fb;
--orange-90: #553326;
--grey-20: #ededed;
--blue-92: #012a7a;
--yellow-10: #fff9e0;
--grey-10: #f2f2f2;
--purple-50: #c0a8e1;
--orange-10: #fff1eb;
--yellow-40: #ffcf3f;
--yellow-05: #fffef9;
--max-width: 1100px;
--blur-3xl: 64px;
--blue-15: #d1daff;
--tw-scale-z: 1;
--yellow-50: #ffb400;
--blue-20: #adcdfb;
--grey-02: #fdfdfe;
--orange-40: #ff8e64;
--purple-10: #e4d8f6;
--grey-05: #f9f9f9;
--orange-30: #ffb091;
--blue-60: #0265d2;
--blue-95: #01213c;
--tw-gradient-from-position: 0%;
--blue-12: #d5e4ff;
--ease-in-out: cubic-bezier(.4, 0, .2, 1);
--purple-05: #eee3ff;
--orange-12: #fff2eb;
--yellow-60: #de9c00;
--grey-00: #fff;
--grey-95: #11061f;
--orange-65: #e0531f;
--grey-50: #707070;
--top-nav-height: 54px;
--blue-40: #3e92f2;
--animate-spin: spin 1s linear infinite;
--yellow-20: #fff4be;
--orange-5: #faefeb;
--container-4xl: 56rem;
--blue-4: #f5f8fb;
--tw-divide-y-reverse: 0;
--blue-70: #0053b8;
--blue-55: #556cf2;
--container-2xl: 42rem;
--tw-scale-x: 1;
--yellow-80: #523a03;
--purple-80: #210b30;
--container-7xl: 80rem;
--red-error: #b70700;
--transition-all: all .2s ease-in-out;
--blur-sm: 8px;
--grey-100: #000;
```

### Dependencies

```css
0: --demo-brand;
```

### Semantic

```css
--demo-content-success: #007f31;
--demo-bg-success: #e5fff1;
--demo-active-green: #0cbb52;
--color-green-600: lab(59.0978% -58.6621 41.2579);
--color-green-300: lab(86.9953% -47.2691 25.0054);
--color-green-700: lab(47.0329% -47.0239 31.4788);
--demo-content-warning: #ad7a03;
--yellow-30: #ffe47e;
--color-yellow-300: lab(89.7033% -.480294 84.4917);
--yellow-70: #ad7a03;
--yellow-90: #886000;
--color-yellow-600: lab(62.7799% 22.4197 86.1544);
--yellow-10: #fff9e0;
--yellow-40: #ffcf3f;
--yellow-05: #fffef9;
--yellow-50: #ffb400;
--yellow-60: #de9c00;
--color-yellow-700: lab(47.8202% 25.2426 66.5015);
--yellow-20: #fff4be;
--yellow-80: #523a03;
--demo-content-error: #8e1a10;
--demo-bg-error: #ffebe7;
--color-red-300: lab(76.5514% 36.422 15.5335);
--color-red-600: lab(48.4493% 77.4328 61.5452);
--color-red-500: lab(55.4814% 75.0732 48.8528);
--color-red-700: lab(40.4273% 67.2623 53.7441);
--color-red-50: lab(96.5005% 4.18508 1.52328);
--red-error: #b70700;
--color-blue-700: lab(36.9089% 35.0961 -85.6872);
--blue-100: #0d1629;
--color-blue-300: lab(77.5052% -6.4629 -36.42);
--blue-90: #002d70;
--blue-50: #097bed;
--blue-80: #00439d;
--color-blue-800: lab(30.2514% 27.7853 -70.2699);
--blue-10: #e7f0ff;
--blue-8: #e6eafd;
--color-blue-600: lab(44.0605% 29.0279 -86.0352);
--blue-30: #74aef6;
--blue-enterprise: #0b162a;
--blue-05: #f5f8fb;
--blue-5: #f5f8fb;
--blue-92: #012a7a;
--blue-15: #d1daff;
--blue-20: #adcdfb;
--blue-60: #0265d2;
--blue-95: #01213c;
--blue-12: #d5e4ff;
--blue-40: #3e92f2;
--color-blue-500: lab(54.1736% 13.3369 -74.6839);
--color-blue-900: lab(26.1542% 15.7545 -51.5504);
--blue-4: #f5f8fb;
--blue-70: #0053b8;
--blue-55: #556cf2;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| xs | 300px | max-width |
| 410px | 410px | max-width |
| sm | 480px | max-width |
| sm | 481px | min-width |
| 565px | 565px | max-width |
| 567px | 567px | max-width |
| 572px | 572px | max-width |
| sm | 576px | max-width |
| sm | 600px | max-width |
| sm | 639px | max-width |
| sm | 640px | min-width |
| md | 767px | max-width |
| md | 768px | max-width |
| md | 769px | min-width |
| lg | 991px | max-width |
| lg | 992px | max-width |
| lg | 993px | min-width |
| lg | 1023px | max-width |
| lg | 1024px | min-width |
| lg | 1068px | min-width |
| 1165px | 1165px | max-width |
| 1199px | 1199px | min-width |
| 1200px | 1200px | min-width |
| 2000px | 2000px | min-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.4, 0, 0.2, 1)`, `ease`

**Durations:** `0.15s`, `0.3s`, `0.2s`, `0.1s`

### Common Transitions

```css
transition: all;
transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), translate 0.15s cubic-bezier(0.4, 0, 0.2, 1), scale 0.15s cubic-bezier(0.4, 0, 0.2, 1), rotate 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: width 0.2s ease-in-out;
transition: opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);
transition: none 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations

**Marquee-module__7pCiiG__scroll**
```css
@keyframes Marquee-module__7pCiiG__scroll {
  0% { transform: translate(0px); }
  100% { transform: translate(-50%); }
}
```

**LogoWallRotation-module__jUX6-q__scroll**
```css
@keyframes LogoWallRotation-module__jUX6-q__scroll {
  0% { transform: translate(0px, 0px); }
  100% { transform: translate3d(var(--scroll-distance-px), 0, 0); }
}
```

**AgentModeDemo-module__VACLbW__blink**
```css
@keyframes AgentModeDemo-module__VACLbW__blink {
  50% { opacity: 0; }
}
```

**AgentModeDemo-module__VACLbW__sparklePulse**
```css
@keyframes AgentModeDemo-module__VACLbW__sparklePulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
```

**AgentModeDemo-module__VACLbW__fadeSlideIn**
```css
@keyframes AgentModeDemo-module__VACLbW__fadeSlideIn {
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

**TestAutoDemo-module__eI-gfq__resultFadeIn**
```css
@keyframes TestAutoDemo-module__eI-gfq__resultFadeIn {
  0% { opacity: 0; transform: translateY(3px); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

**AgentModeTemplateCard-module__JsxtZq__cardHighlight**
```css
@keyframes AgentModeTemplateCard-module__JsxtZq__cardHighlight {
  0% { background-color: rgba(0, 0, 0, 0); }
  15% { background-color: rgba(95, 18, 184, 0.08); }
  35% { background-color: rgba(0, 0, 0, 0); }
  50% { background-color: rgba(95, 18, 184, 0.08); }
  70% { background-color: rgba(0, 0, 0, 0); }
  100% { background-color: rgba(0, 0, 0, 0); }
}
```

**fadeTabIn**
```css
@keyframes fadeTabIn {
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

**anchorToast**
```css
@keyframes anchorToast {
  0% { opacity: 0; transform: translateY(calc(-100% + 10px)); }
  25% { opacity: 1; transform: translateY(calc(-100% + 5px)); }
  75% { opacity: 1; transform: translateY(calc(-100% - 5px)); }
  100% { opacity: 0; transform: translateY(calc(-100% - 10px)); }
}
```

**anchorToastDown**
```css
@keyframes anchorToastDown {
  0% { opacity: 0; transform: translateY(0px); }
  25% { opacity: 1; transform: translateY(5px); }
  75% { opacity: 1; transform: translateY(10px); }
  100% { opacity: 0; transform: translateY(15px); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (16 instances)

```css
.buttons {
  background-color: rgba(138, 138, 138, 0.1);
  color: rgb(107, 107, 107);
  font-size: 14px;
  font-weight: 600;
  padding-top: 0px;
  padding-right: 15px;
  border-radius: 5px;
}
```

### Cards (8 instances)

```css
.cards {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  padding-top: 20px;
  padding-right: 20px;
}
```

### Links (155 instances)

```css
.links {
  color: rgb(33, 33, 33);
  font-size: 16px;
  font-weight: 400;
}
```

### Navigation (59 instances)

```css
.navigation {
  background-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (103 instances)

```css
.footer {
  background-color: rgb(255, 255, 255);
  color: rgb(112, 112, 112);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 14px;
}
```

### Dropdowns (48 instances)

```css
.dropdowns {
  background-color: rgb(33, 33, 33);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  border-color: lab(91.6229 -0.159115 -2.26791);
  padding-top: 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(107, 107, 107);
  padding: 0px 15px 0px 15px;
  border-radius: 0px;
  border: 0px solid lab(91.6229 -0.159115 -2.26791);
  font-size: 14px;
  font-weight: 600;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 123, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 5px;
  border: 0px none lab(91.6229 -0.159115 -2.26791);
  font-size: 14px;
  font-weight: 400;
```

## Layout System

**9 grid containers** and **339 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 1.1px |
| 1224px | 24px |
| 1140px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 12-column | 3x |
| 3-column | 2x |
| 5-column | 2x |
| 2-column | 1x |
| 6-column | 1x |

### Grid Templates

```css
grid-template-columns: 173.328px 173.328px 173.328px 173.328px 173.328px 173.328px;
gap: 20px;
grid-template-columns: 212px 212px 212px 212px 212px;
gap: 20px;
grid-template-columns: 212px 212px 212px 212px 212px;
gap: 20px;
grid-template-columns: 62px 62px 62px 62px 62px 62px 62px 62px 62px 62px 62px 62px;
gap: 40px;
grid-template-columns: 61.3281px 61.3281px 61.3281px 61.3281px 61.3281px 61.3281px 61.3281px 61.3281px 61.3281px 61.3281px 61.3281px 61.3281px;
gap: 40px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 213x |
| column/nowrap | 113x |
| row/wrap | 5x |
| column/wrap | 8x |

**Gap values:** `0px 40px`, `10px`, `10px normal`, `120px`, `20px`, `30px`, `40px`, `4px`, `8px`

## Accessibility (WCAG 2.1)

**Overall Score: 0%** — 0 passing, 1 failing color pairs

### Failing Color Pairs

| Foreground | Background | Ratio | Level | Used On |
|------------|------------|-------|-------|---------|
| `#ffffff` | `#e0531f` | 3.87:1 | FAIL | a (1x) |

## Design System Score

**Overall: 69/100 (Grade: D)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 0/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Good CSS variable tokenization

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 1 WCAG contrast failures
- 443 !important rules — prefer specificity over overrides
- 54% of CSS is unused — consider purging
- 4955 duplicate CSS declarations

## Gradients

**6 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 99deg | 2 | brand |
| linear | 275deg | 2 | brand |
| linear | 275deg | 2 | brand |
| linear | 275deg | 2 | brand |
| linear | 9.34deg | 5 | complex |
| linear | 353deg | 2 | brand |

```css
background: linear-gradient(99deg, rgb(255, 204, 252) 0%, rgba(207, 207, 207, 0) 100%);
background: linear-gradient(275deg, rgba(161, 161, 161, 0) 0%, rgba(255, 108, 55, 0.2) 100%);
background: linear-gradient(275deg, rgba(207, 207, 207, 0) 0%, rgba(255, 216, 117, 0.2) 100%);
background: linear-gradient(275deg, rgba(207, 207, 207, 0) 0%, rgba(179, 135, 245, 0.2) 100%);
background: linear-gradient(9.34deg, rgb(20, 11, 30) 0%, rgb(20, 11, 30) 70%, rgb(73, 21, 145) 85%, rgb(130, 44, 102) 92%, rgb(224, 83, 31) 100%);
```

## Z-Index Map

**7 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2147483647,2147483647 | div.z.-.2.1.4.7.4.8.3.6.4.7. .m.t.-.[.0...8.r.e.m.]. .w.-.f.u.l.l. .b.o.r.d.e.r.-.[.#.e.6.e.6.e.6.]. .p.-.[.1.0.p.x.]. .x.l.:.a.b.s.o.l.u.t.e. .x.l.:.l.e.f.t.-.[.-.1.4.p.x.]. .x.l.:.w.-.m.a.x. .x.l.:.r.o.u.n.d.e.d.-.[.1.0.p.x.]. .x.l.:.b.o.r.d.e.r. .x.l.:.s.h.a.d.o.w.-.[.0._.2.p.x._.8.p.x._.0._.r.g.b.a.(.0.,.0.,.0.,.0...2.0.).]. .b.g.-.w.h.i.t.e. .x.l.:.b.g.-.[.#.F.9.F.8.F.7.]. .x.l.:.p.-.0, div.z.-.2.1.4.7.4.8.3.6.4.7. .m.t.-.[.0...8.r.e.m.]. .w.-.f.u.l.l. .b.o.r.d.e.r.-.[.#.e.6.e.6.e.6.]. .p.-.[.1.0.p.x.]. .x.l.:.a.b.s.o.l.u.t.e. .x.l.:.l.e.f.t.-.[.-.1.4.p.x.]. .x.l.:.w.-.m.a.x. .x.l.:.r.o.u.n.d.e.d.-.[.1.0.p.x.]. .x.l.:.b.o.r.d.e.r. .x.l.:.s.h.a.d.o.w.-.[.0._.2.p.x._.8.p.x._.0._.r.g.b.a.(.0.,.0.,.0.,.0...2.0.).]. .b.g.-.w.h.i.t.e. .x.l.:.p.-.[.2.0.p.x.], div.z.-.2.1.4.7.4.8.3.6.4.7. .m.t.-.[.0...8.r.e.m.]. .w.-.f.u.l.l. .b.o.r.d.e.r.-.[.#.e.6.e.6.e.6.]. .p.-.[.1.0.p.x.]. .x.l.:.a.b.s.o.l.u.t.e. .x.l.:.l.e.f.t.-.[.-.1.4.p.x.]. .x.l.:.w.-.m.a.x. .x.l.:.r.o.u.n.d.e.d.-.[.1.0.p.x.]. .x.l.:.b.o.r.d.e.r. .x.l.:.s.h.a.d.o.w.-.[.0._.2.p.x._.8.p.x._.0._.r.g.b.a.(.0.,.0.,.0.,.0...2.0.).]. .b.g.-.w.h.i.t.e. .x.l.:.p.-.[.2.0.p.x.] |
| sticky | 10,60 | a.r.e.l.a.t.i.v.e. .z.-.1.0. .f.l.e.x. .f.l.e.x.-.c.o.l. .b.o.r.d.e.r.-.b.-.0. .n.o.-.u.n.d.e.r.l.i.n.e. .h.o.v.e.r.:.b.o.r.d.e.r.-.b.-.0. .h.o.v.e.r.:.n.o.-.u.n.d.e.r.l.i.n.e. .f.o.c.u.s.:.o.u.t.l.i.n.e.-.[.#.2.1.2.1.2.1.], a.r.e.l.a.t.i.v.e. .z.-.1.0. .f.l.e.x. .f.l.e.x.-.c.o.l. .b.o.r.d.e.r.-.b.-.0. .n.o.-.u.n.d.e.r.l.i.n.e. .h.o.v.e.r.:.b.o.r.d.e.r.-.b.-.0. .h.o.v.e.r.:.n.o.-.u.n.d.e.r.l.i.n.e. .f.o.c.u.s.:.o.u.t.l.i.n.e.-.[.#.2.1.2.1.2.1.], a.r.e.l.a.t.i.v.e. .z.-.1.0. .f.l.e.x. .f.l.e.x.-.c.o.l. .b.o.r.d.e.r.-.b.-.0. .n.o.-.u.n.d.e.r.l.i.n.e. .h.o.v.e.r.:.b.o.r.d.e.r.-.b.-.0. .h.o.v.e.r.:.n.o.-.u.n.d.e.r.l.i.n.e. .f.o.c.u.s.:.o.u.t.l.i.n.e.-.[.#.2.1.2.1.2.1.] |
| base | 0,2 | div.p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .a.b.s.o.l.u.t.e. .i.n.s.e.t.-.0. .z.-.0, div.p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .a.b.s.o.l.u.t.e. .i.n.s.e.t.-.0. .z.-.0. .b.g.-.v.1.2.-.d.a.r.k, div.p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .a.b.s.o.l.u.t.e. .i.n.s.e.t.-.0. .z.-.0. .b.g.-.v.1.2.-.d.a.r.k |

**Issues:**
- Very high z-index values: 2147483647

## SVG Icons

**2 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 2 |

**Icon colors:** `#6b6b6b`, `lab(35.6337 -1.58697 -10.8425)`, `currentColor`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| inter | self-hosted | 400, 600 | normal |
| degular | self-hosted | 600, 700 | normal |
| ibmPlexMono | self-hosted | 400 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 35 | objectFit: fill, borderRadius: 0px, shape: square |
| general | 1 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 21:9 (24x), 1:1 (11x), 4:3 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `100ms` | 100 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |

### Easing Families

- **custom** (108 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`
- **ease-in-out** (10 uses) — `ease`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `LogoWallRotation-module__jUX6-q__scroll` | slide | transform | 1 |
| `pulse` | fade | opacity | 9 |

## Component Anatomy

### button — 4 instances

**Slots:** label, icon
**Variants:** outline
**Sizes:** xl · sm

| variant | count | sample label |
|---|---|---|
| default | 3 | Product |
| outline | 1 | Cookie Preferences |

## Brand Voice

**Tone:** neutral · **Pronoun:** you-only · **Headings:** Title Case (tight)

### Top CTA Verbs

- **product** (1)
- **solutions** (1)
- **resources** (1)
- **cookie** (1)

### Button Copy Patterns

- "product" (1×)
- "solutions" (1×)
- "resources" (1×)
- "cookie preferences" (1×)

### Sample Headings

> The AI-native API Platform
> Meet the AI Engineer
> The world's APIs are built and shipped on Postman.
> The AI-native API Platform
> Meet the AI Engineer
> The world's APIs are built and shipped on Postman.
> Product
> API Network
> Resources
> Legal and Security

## Page Intent

**Type:** `auth` (confidence 0.32)
**Description:** Accelerate API development with Postman's all-in-one platform. Streamline collaboration and simplify the API lifecycle for faster, better results. Learn more.

Alternates: landing (0.45), legal (0.4)

## Section Roles

Reading order (top→bottom): nav → nav → content → content → content → sidebar → testimonials → sidebar → pricing → content → content → content → testimonials → content → content → content → pricing → footer → nav → nav → nav → nav → nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | content | — | 0.3 |
| 2 | content | — | 0.3 |
| 3 | content | — | 0.3 |
| 4 | sidebar | — | 0.4 |
| 5 | testimonials | — | 0.4 |
| 6 | nav | — | 0.4 |
| 7 | content | — | 0.3 |
| 8 | content | — | 0.3 |
| 9 | content | — | 0.3 |
| 10 | sidebar | — | 0.4 |
| 11 | testimonials | — | 0.4 |
| 12 | pricing | The AI-native API Platform | 0.4 |
| 13 | content | The AI-native API Platform | 0.3 |
| 14 | content | — | 0.3 |
| 15 | content | Meet the AI Engineer | 0.3 |
| 16 | pricing | The world's APIs are built and shipped on Postman. | 0.4 |
| 17 | footer | Product | 0.95 |
| 18 | nav | Product | 0.9 |
| 19 | nav | API Network | 0.9 |

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.345 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 9999px |
| backdrop-filter in use | no |
| Gradients | 6 |

## Imagery Style

**Label:** `flat-illustration` (confidence 0.398)
**Counts:** total 36, svg 36, icon 44, screenshot-like 0, photo-like 0
**Dominant aspect:** ultra-wide
**Radius profile on images:** square

## Component Library

**Detected:** `tailwindcss` (confidence 0.704)

Evidence:
- tailwind-like class density 69%

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `inter` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
