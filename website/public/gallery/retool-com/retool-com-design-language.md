# Design Language: Retool | Build internal software better, with AI.

> Extracted from `https://retool.com` on June 25, 2026
> 2200 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#e9ebdf` | rgb(233, 235, 223) | hsl(70, 23%, 90%) | 3154 |
| Secondary | `#518dd2` | rgb(81, 141, 210) | hsl(212, 59%, 57%) | 2 |
| Accent | `#f7f8f4` | rgb(247, 248, 244) | hsl(75, 22%, 96%) | 13 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#151515` | hsl(0, 0%, 8%) | 355 |
| `#ffffff` | hsl(0, 0%, 100%) | 348 |
| `#cbccc4` | hsl(68, 7%, 78%) | 158 |
| `#242424` | hsl(0, 0%, 14%) | 45 |
| `#8b867f` | hsl(35, 5%, 52%) | 32 |
| `#b6b8af` | hsl(73, 6%, 70%) | 12 |
| `#000000` | hsl(0, 0%, 0%) | 6 |
| `#d9d9d9` | hsl(0, 0%, 85%) | 4 |
| `#433e38` | hsl(33, 9%, 24%) | 3 |

### Background Colors

Used on large-area elements: `#151515`, `#000000`, `#e9ebdf`, `#242424`

### Text Colors

Text color palette: `#ffffff`, `#e9ebdf`, `#151515`, `#f7f8f4`, `#cbccc4`, `#242424`, `#8b867f`, `#b6b8af`

### Gradients

```css
background-image: linear-gradient(90deg, rgb(35, 52, 39) 0%, rgb(56, 80, 86) 26.05%, rgb(125, 110, 165) 51.26%, rgb(180, 152, 215) 77.04%, rgb(176, 204, 234) 100%);
```

```css
background-image: radial-gradient(at 0% 100%, color(srgb 0.176471 0.298039 0.443137 / 0.75) 0%, rgba(0, 0, 0, 0) 55%), radial-gradient(at 100% 100%, color(srgb 0.47451 0.2 0.145098 / 0.65) 0%, rgba(0, 0, 0, 0) 50%), none;
```

```css
background-image: radial-gradient(80% 50% at 0% 100%, color(srgb 0.176471 0.298039 0.443137 / 0.75) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(80% 45% at 100% 100%, color(srgb 0.47451 0.2 0.145098 / 0.65) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.45) 80%);
```

```css
background-image: linear-gradient(rgb(21, 21, 21) 25%, rgba(21, 21, 21, 0.9) 31.25%, rgba(21, 21, 21, 0.8) 37.5%, rgba(21, 21, 21, 0.7) 43.75%, rgba(21, 21, 21, 0.6) 50%, rgba(21, 21, 21, 0.5) 56.25%, rgba(21, 21, 21, 0.4) 62.5%, rgba(21, 21, 21, 0.3) 68.75%, rgba(21, 21, 21, 0.22) 75%, rgba(21, 21, 21, 0.15) 81.25%, rgba(21, 21, 21, 0.09) 87.5%, rgba(21, 21, 21, 0.04) 93.75%, rgba(21, 21, 21, 0) 100%);
```

```css
background-image: linear-gradient(103deg, color(srgb 0.690196 0.8 0.917647 / 0.5) 12.9%, color(srgb 0.964706 0.839216 0.627451 / 0.5) 49.6%, color(srgb 0.909804 0.462745 0.368627 / 0.5) 84%);
```

```css
background-image: linear-gradient(90deg, rgb(21, 21, 21) 0%, rgba(21, 21, 21, 0.6) 50%, rgb(21, 21, 21) 100%);
```

```css
background-image: linear-gradient(rgb(203, 204, 196), rgb(203, 204, 196));
```

```css
background-image: linear-gradient(rgb(233, 235, 223), rgb(233, 235, 223));
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#e9ebdf` | text, border, background | 3154 |
| `#151515` | background, text, border | 355 |
| `#ffffff` | text, border | 348 |
| `#cbccc4` | text, border | 158 |
| `#242424` | background, text, border | 45 |
| `#8b867f` | border, background, text | 32 |
| `#f7f8f4` | text, border, background | 13 |
| `#b6b8af` | text, border | 12 |
| `#000000` | background | 6 |
| `#d9d9d9` | background | 4 |
| `#433e38` | border | 3 |
| `#518dd2` | background | 2 |
| `#0e352c` | background | 1 |

## Typography

### Font Families

- **saansFont** — used for all (486 elements)
- **pxGroteskFont** — used for body (394 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 68.9231px | 4.3077rem | 300 | 72.3693px | -1.51631px | h1, span |
| 56.9231px | 3.5577rem | 300 | 59.7693px | -1.13846px | h2 |
| 44.9231px | 2.8077rem | 300 | 47.1693px | -0.449231px | h2, h4 |
| 28.9231px | 1.8077rem | 300 | 30.3693px | -0.289231px | span, h2 |
| 22.4615px | 1.4038rem | 380 | 26.9538px | -0.224615px | span, svg, path, div |
| 18px | 1.125rem | 300 | 27px | 0.18px | span, svg, path, h2 |
| 16px | 1rem | 400 | 24px | normal | html, head, iframe, meta |
| 14px | 0.875rem | 300 | 21px | 0.14px | p, span |
| 13.2308px | 0.8269rem | 400 | 13.2308px | 0.132308px | span, a, button, svg |
| 12px | 0.75rem | 400 | 14.4px | 0.12px | button, svg, g, rect |
| 11.3846px | 0.7115rem | 400 | 13.6615px | 0.113846px | span |

### Heading Scale

```css
h1 { font-size: 68.9231px; font-weight: 300; line-height: 72.3693px; }
h2 { font-size: 56.9231px; font-weight: 300; line-height: 59.7693px; }
h2 { font-size: 44.9231px; font-weight: 300; line-height: 47.1693px; }
h2 { font-size: 28.9231px; font-weight: 300; line-height: 30.3693px; }
h6 { font-size: 22.4615px; font-weight: 380; line-height: 26.9538px; }
h2 { font-size: 18px; font-weight: 300; line-height: 27px; }
```

### Body Text

```css
body { font-size: 22.4615px; font-weight: 380; line-height: 26.9538px; }
```

### Font Weights in Use

`400` (1714x), `380` (443x), `300` (43x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-20 | 20px | 1.25rem |
| spacing-24 | 24px | 1.5rem |
| spacing-28 | 28px | 1.75rem |
| spacing-32 | 32px | 2rem |
| spacing-40 | 40px | 2.5rem |
| spacing-56 | 56px | 3.5rem |
| spacing-64 | 64px | 4rem |
| spacing-71 | 71px | 4.4375rem |
| spacing-80 | 80px | 5rem |
| spacing-120 | 120px | 7.5rem |
| spacing-158 | 158px | 9.875rem |
| spacing-384 | 384px | 24rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 4px | 28 |
| md | 8px | 10 |
| lg | 12px | 4 |
| lg | 16px | 5 |
| xl | 20px | 4 |
| xl | 24px | 2 |
| full | 36px | 8 |
| full | 50px | 2 |
| full | 9999px | 18 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.35) 0px 68px 116px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgb(233, 234, 231) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**xs** — blur: 2px
```css
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 2px 0px, rgb(0, 0, 0) 0px 0px 0px 0.5px;
```

## CSS Custom Properties

### Colors

```css
--raw-blue-primary: #518dd2;
--raw-gray-primary: #8b867f;
--raw-green-primary: #4d9987;
--raw-neutral-dark-black-2-primary: #151515;
--raw-neutral-light-white-2-primary: #e9ebdf;
--raw-orange-primary: #e8765e;
--raw-pink-primary: #cc64ce;
--raw-purple-primary: #9874d2;
--raw-red-primary: #ef4444;
--raw-yellow-primary: #eca438;
--raw-lime-primary: #e0d643;
--surface-accent-focused-pink: #cc64ce;
--btn-secondary-orange-default-stroke: #e8765e;
--btn-secondary-pink-active-icon: #e9ebdf;
--btn-secondary-gray-active-icon: #e9ebdf;
--btn-secondary-blue-active-icon: #e9ebdf;
--btn-secondary-green-active-icon: #e9ebdf;
--btn-secondary-orange-default-text: #e9ebdf;
--surface-accent-background-yellow: #4a2b11;
--btn-secondary-gray-default-icon: #e9ebdf;
--nav-items-inactive-stroke-accent: #e9ebdf66;
--tw-ring-color: #3b82f680;
--btn-secondary-blue-hover-text: #e9ebdf;
--btn-secondary-orange-active-text: #e9ebdf00;
--btn-secondary-gray-default-stroke: #8b867f;
--btn-secondary-orange-hover-icon: #e9ebdf;
--btn-secondary-purple-hover-stroke: #d0c1ea;
--surface-accent-muted-pink: #e8bae8;
--btn-secondary-green-default-icon: #e9ebdf;
--btn-secondary-purple-default-text: #e9ebdf;
--surface-accent-muted-orange: #f5c2b2;
--btn-primary-default-background: #e9ebdf;
--btn-secondary-green-default-stroke: #4d9987;
--btn-secondary-gray-active-text: #e9ebdf00;
--btn-secondary-yellow-hover-icon: #e9ebdf;
--surface-accent-focused-orange: #e8765e;
--btn-secondary-pink-hover-icon: #e9ebdf;
--btn-secondary-green-hover-text: #e9ebdf;
--btn-secondary-pink-active-stroke: #e8bae8;
--btn-secondary-blue-default-stroke: #518dd2;
--btn-secondary-blue-default-icon: #e9ebdf;
--subnav-default-stroke-accent: #e9ebdf1f;
--surface-accent-base-blue: #2d4c71;
--btn-secondary-yellow-default-icon: #e9ebdf;
--nav-items-default-stroke-accent: #e9ebdf66;
--surface-accent-background-blue: #1b2e44;
--surface-details-header-bg: #fff;
--surface-accent-muted-yellow: #f6d6a0;
--surface-accent-background-pink: #3d163d;
--surface-accent-muted-green: #afd1c6;
--surface-accent-background-orange: #491f16;
--surface-accent-focused-purple: #9874d2;
--btn-secondary-blue-default-text: #e9ebdf;
--subnav-inactive-stroke-accent: #e9ebdf1f;
--nav-items-active-stroke-accent: #e9ebdf66;
--subnav-hover-stroke-accent: #e9ebdf1f;
--btn-secondary-green-active-stroke: #afd1c6;
--btn-secondary-yellow-active-text: #e9ebdf00;
--footer-text-muted: #b6b8af;
--btn-primary-hover-background: #fff;
--btn-secondary-orange-active-icon: #e9ebdf;
--btn-secondary-gray-hover-icon: #e9ebdf;
--surface-accent-base-yellow: #7c481c;
--surface-accent-background-green: #0e352c;
--surface-text-primary: #e9ebdf;
--btn-secondary-green-default-text: #e9ebdf;
--btn-secondary-purple-active-text: #e9ebdf00;
--btn-secondary-green-hover-icon: #e9ebdf;
--tw-border-spacing-y: 0;
--btn-secondary-pink-default-text: #e9ebdf;
--btn-secondary-orange-default-icon: #e9ebdf;
--surface-details-neutral-muted: #cbccc4;
--btn-primary-default-text: #151515;
--surface-accent-background-gray: #282522;
--tw-ring-shadow: 0 0 #0000;
--btn-secondary-orange-active-stroke: #f5c2b2;
--surface-accent-focused-gray: #8b867f;
--btn-secondary-pink-default-icon: #e9ebdf;
--btn-secondary-purple-active-stroke: #d0c1ea;
--btn-secondary-gray-active-stroke: #c8bfb5;
--btn-secondary-purple-default-icon: #e9ebdf;
--surface-accent-muted-purple: #d0c1ea;
--btn-primary-hover-text: #151515;
--tw-border-spacing-x: 0;
--btn-secondary-purple-active-icon: #e9ebdf;
--surface-details-logo-bg: #e9ebdf;
--surface-accent-background-purple: #3f2a68;
--surface-accent-base-purple: #53397c;
--nav-items-hover-stroke-accent: #e9ebdf66;
--btn-secondary-yellow-default-stroke: #eca438;
--btn-secondary-pink-hover-text: #e9ebdf;
--btn-secondary-blue-active-stroke: #b0ccea;
--surface-accent-focused-blue: #518dd2;
--surface-accent-focused-yellow: #eca438;
--tw-ring-offset-color: #fff;
--btn-secondary-yellow-active-stroke: #f6d6a0;
--surface-accent-base-pink: #652466;
--btn-secondary-pink-active-text: #e9ebdf00;
--btn-secondary-purple-hover-text: #e9ebdf;
--btn-secondary-yellow-active-icon: #e9ebdf;
--surface-accent-muted-gray: #c8bfb5;
--tw-ring-offset-width: 0px;
--btn-secondary-blue-hover-stroke: #b0ccea;
--btn-primary-active-icon: #151515;
--tw-shadow-colored: 0 0 #0000;
--btn-secondary-purple-default-stroke: #9874d2;
--btn-secondary-green-hover-stroke: #afd1c6;
--btn-secondary-pink-hover-stroke: #e8bae8;
--btn-secondary-green-active-text: #e9ebdf00;
--btn-primary-default-icon: #151515;
--tw-ring-offset-shadow: 0 0 #0000;
--btn-secondary-gray-hover-text: #e9ebdf;
--btn-secondary-orange-hover-text: #e9ebdf;
--surface-accent-base-orange: #793325;
--surface-accent-base-gray: #433e38;
--surface-accent-muted-blue: #b0ccea;
--tw-ring-inset: ;
--btn-secondary-blue-active-text: #e9ebdf00;
--btn-primary-active-background: #fff;
--surface-background-muted: #0e0e0e;
--btn-secondary-yellow-hover-stroke: #f6d6a0;
--btn-primary-hover-icon: #151515;
--btn-primary-active-text: #15151500;
--btn-secondary-gray-default-text: #e9ebdf;
--surface-accent-focused-green: #4d9987;
--btn-secondary-blue-hover-icon: #e9ebdf;
--btn-secondary-yellow-default-text: #e9ebdf;
--btn-secondary-purple-hover-icon: #e9ebdf;
--surface-accent-base-green: #185849;
--btn-secondary-gray-hover-stroke: #c8bfb5;
--surface-text-muted: #cbccc4;
--btn-secondary-yellow-hover-text: #e9ebdf;
--btn-secondary-pink-default-stroke: #cc64ce;
--footer-border: #e9ebdf99;
--btn-secondary-orange-hover-stroke: #f5c2b2;
```

### Spacing

```css
--letter-spacing-headline-xl: -.022em;
--letter-spacing-title: .02em;
--tw-numeric-spacing: ;
--tw-contain-size: ;
--letter-spacing-headline-xxs: -.01em;
--letter-spacing-headline-xxl: -.031em;
--letter-spacing-headline-md: -.01em;
--letter-spacing-headline-xs: -.01em;
--letter-spacing-headline-lg: -.02em;
--letter-spacing-headline-sm: -.01em;
--letter-spacing-body: .01em;
```

### Typography

```css
--input-hover-error-text: #f15264;
--subnav-inactive-text: #e9ebdf66;
--nav-items-default-text: #e9ebdf;
--input-focused-value-text: #151515;
--input-default-error-text: #f15264;
--input-focused-placeholder-text: #15151599;
--cursor-hover-context-guide: #0009;
--surface-text-opacity-alpha-40: #e9ebdf66;
--btn-tertiary-default-text: #e9ebdf;
--cursor-default-text: #fff;
--cursor-default-context-guide: #fff;
--cursor-default-context-guide-stroke: #000;
--subnav-default-text: #e9ebdf;
--btn-tertiary-active-text: #e9ebdf00;
--subnav-hover-text: #e9ebdf;
--font-weight-headline: 300;
--input-default-label-text: #e9ebdf;
--footer-text: #cbccc4;
--input-hover-placeholder-text: #e9ebdf99;
--input-hover-value-text: #e9ebdf;
--eyebrow-text: #b6b8af;
--cursor-hover-context-guide-stroke: #8b867f;
--cursor-active-context-guide-stroke: #c8bfb5;
--cursor-active-context-guide: #15151599;
--font-weight-body: 300;
--cursor-active-text: #e9ebdf;
--font-weight-headline-xxs: 380;
--cursor-message-text: #fff;
--input-hover-label-text: #e9ebdf;
--cursor-hover-text: #fff;
--surface-text-opacity-alpha-60: #e9ebdf99;
--surface-text-opacity-alpha-20: #e9ebdf33;
--nav-items-inactive-text: #e9ebdf66;
--input-focused-label-text: #e9ebdf;
--nav-items-active-text: #cbccc4;
--nav-items-hover-text: #f7f8f4;
--font-weight-title: 570;
--cursor-message-context-guide: #0009;
--input-focused-error-text: #c72844;
--input-default-value-text: #e9ebdf;
--cursor-message-context-guide-stroke: #e9ebdf00;
--input-default-placeholder-text: #e9ebdfcc;
--btn-tertiary-hover-text: #e9ebdf;
```

### Shadows

```css
--tw-drop-shadow: ;
--tw-shadow: 0 0 #0000;
```

### Other

```css
--raw-dark-black-0-alpha-80: #000c;
--raw-dark-black-0-alpha-60: #0009;
--raw-dark-black-2-alpha-0: #15151500;
--raw-dark-black-2-alpha-6: #15151510;
--raw-dark-black-2-alpha-12: #1515151f;
--raw-dark-black-2-alpha-24: #1515153d;
--raw-dark-black-2-alpha-40: #15151566;
--raw-dark-black-2-alpha-60: #15151599;
--raw-light-white-2-alpha-0: #e9ebdf00;
--raw-light-white-2-alpha-6: #e9ebdf10;
--raw-light-white-2-alpha-12: #e9ebdf1f;
--raw-light-white-2-alpha-20: #e9ebdf33;
--raw-light-white-2-alpha-40: #e9ebdf66;
--raw-light-white-2-alpha-60: #e9ebdf99;
--raw-light-white-2-alpha-80: #e9ebdfcc;
--raw-light-white-1-alpha-0: #f7f8f400;
--raw-light-white-1-alpha-6: #f7f8f410;
--raw-light-white-1-alpha-12: #f7f8f41f;
--raw-light-white-1-alpha-20: #f7f8f433;
--raw-light-white-1-alpha-40: #f7f8f466;
--raw-light-white-1-alpha-60: #f7f8f499;
--raw-light-white-1-alpha-80: #f7f8f4cc;
--raw-light-white-1-alpha-90: #f7f8f4dd;
--raw-light-white-0-alpha-60: #fff9;
--raw-blue-darkest: #101e2d;
--raw-blue-darker: #1b2e44;
--raw-blue-dark: #2d4c71;
--raw-blue-light: #71a2da;
--raw-blue-lighter: #b0ccea;
--raw-blue-lightest: #d8e6f3;
--raw-gray-darkest: #282522;
--raw-gray-darkened: #433e38;
--raw-gray-lightened: #c8bfb5;
--raw-gray-lightest: #ded9d3;
--raw-green-darkest: #081e19;
--raw-green-darker: #0e352c;
--raw-green-dark: #185849;
--raw-green-light: #6eac9c;
--raw-green-lighter: #afd1c6;
--raw-green-lightest: #d7e9e0;
--raw-neutral-dark-black-0: #000;
--raw-neutral-dark-black-1: #0e0e0e;
--raw-neutral-dark-black-3: #242424;
--raw-neutral-dark-black-4: #2e2f2d;
--raw-neutral-dark-black-5: #3f403d;
--raw-neutral-light-white-0: #fff;
--raw-neutral-light-white-1: #f7f8f4;
--raw-neutral-light-white-3: #cbccc4;
--raw-neutral-light-white-4: #b6b8af;
--raw-neutral-light-white-5: #94958e;
--raw-orange-darkest: #2b1713;
--raw-orange-darker: #491f16;
--raw-orange-dark: #793325;
--raw-orange-light: #ec8f7a;
--raw-orange-lighter: #f5c2b2;
--raw-orange-lightest: #fae1d6;
--raw-pink-darkest: #280d28;
--raw-pink-darker: #3d163d;
--raw-pink-dark: #652466;
--raw-pink-light: #d581d7;
--raw-pink-lighter: #e8bae8;
--raw-pink-lightest: #f4ddf2;
--raw-purple-darkest: #271c3f;
--raw-purple-darker: #3f2a68;
--raw-purple-dark: #53397c;
--raw-purple-light: #ab8eda;
--raw-purple-lighter: #d0c1ea;
--raw-purple-lightest: #e8e1f3;
--raw-red-darkest: #2f0909;
--raw-red-darker: #531717;
--raw-red-dark: #832424;
--raw-red-light: #ff7171;
--raw-red-lighter: #fca9a9;
--raw-red-lightest: #ffcfcf;
--raw-yellow-darkest: #301a08;
--raw-yellow-darker: #4a2b11;
--raw-yellow-dark: #7c481c;
--raw-yellow-light: #efb55b;
--raw-yellow-lighter: #f6d6a0;
--raw-yellow-lightest: #fbebcc;
--raw-lime-darkest: #272502;
--raw-lime-darker: #56521e;
--raw-lime-dark: #8d8737;
--raw-lime-light: #f9ec75;
--raw-lime-lighter: #f7eda9;
--raw-lime-lightest: #fcf8de;
--raw-semantic-critical-12: #651722;
--raw-semantic-critical-11: #c72844;
--raw-semantic-critical-10: #f15264;
--raw-semantic-critical-8: #e79295;
--raw-semantic-success-12: #1a3c32;
--raw-semantic-success-11: #008163;
--raw-semantic-success-10: #11997a;
--raw-semantic-success-8: #52bb9d;
--raw-semantic-warning-12: #4b371d;
--raw-semantic-warning-11: #aa6800;
--raw-semantic-warning-10: #f1a42e;
--raw-semantic-warning-8: #e0a24e;
--dvt-nav-height: 4rem;
--dvt-sticky-offset: 2.5rem;
--dvt-grid-inner-max: 1440px;
--dvt-site-max-width: 2240px;
--dvt-banner-height: 2.5rem;
--dvt-nav-plus-sticky-offset-height: calc(var(--dvt-nav-height) + var(--dvt-sticky-offset));
--dvt-nav-plus-banner-height: calc(var(--dvt-nav-height) + var(--dvt-banner-height));
--dvt-document-width: min(100dvw, var(--dvt-site-max-width));
--dvt-grid-items: 26;
--dvt-grid-col: calc(var(--dvt-document-width,100vw) / var(--dvt-grid-items));
--dvt-grid-outer: var(--dvt-grid-col);
--dvt-grid-inner: calc(var(--dvt-grid-col) * var(--dvt-grid-items) - var(--dvt-grid-outer) * 2);
--dvt-ease-in: cubic-bezier(.12, 0, .72, 0);
--dvt-ease-in-out: cubic-bezier(.72, 0, .12, 1);
--dvt-ease-in-back: cubic-bezier(.12, 0, .72, -.4);
--dvt-ease-in-out-back: cubic-bezier(.72, -.4, .36, 1.4);
--dvt-ease-out: cubic-bezier(.12, 1, .72, 1);
--dvt-ease-out-back: cubic-bezier(.12, 1.4, .72, 1);
--dvt-ease-in-soft: cubic-bezier(.64, 0, .76, 1);
--dvt-ease-in-out-soft: cubic-bezier(.72, 0, .36, 1);
--dvt-ease-out-soft: cubic-bezier(.24, .01, .36, 1);
--dvt-linear: cubic-bezier(0, 0, 1, 1);
--dvt-sine: cubic-bezier(.36, 0, .64, 1);
--input-hover-stroke: #e9ebdf1f;
--surface-details-neutral-alpha-60: #e9ebdf99;
--nav-items-active-selected: #518dd2;
--input-default-label-required: #e9ebdf99;
--input-hover-background: #e9ebdf33;
--cursor-message-cursor-stroke: #000;
--input-focused-error-stroke: #c72844;
--btn-tertiary-default-icon: #e9ebdf;
--cursor-active-cursor-stroke: #fff;
--nav-offset: calc(5rem + 2.5rem);
--nav-items-inactive-icon: #e9ebdf66;
--nav-scrolled-background: #000c;
--btn-tertiary-active-icon: #e9ebdf;
--interface-background: #f7f8f499;
--experimental-ui-background: #fff;
--nav-default-background: #15151500;
--alert-default-background: #651722;
--surface-details-neutral: #e9ebdf;
--tw-gradient-via-position: ;
--tw-saturate: ;
--tw-grayscale: ;
--tw-gradient-to-position: ;
--transparent: transparent;
--input-focused-label-required: #e9ebdf99;
--surface-details-neutral-alpha-20: #e9ebdf33;
--cursor-default-cursor-stroke: #000;
--experimental-cursor-stroke: #fff;
--tw-pinch-zoom: ;
--footer-logo: #e9ebdf;
--input-focused-stroke: #15151500;
--input-default-stroke: #e9ebdf10;
--interface-stroke: #1515151f;
--surface-background-focused: #242424;
--btn-tertiary-hover-icon: #e9ebdf;
--tw-scale-y: 1;
--tw-backdrop-contrast: ;
--input-default-background: #e9ebdf00;
--subnav-hover-icon: #e9ebdf;
--tw-translate-y: 0;
--tw-pan-x: ;
--nav-items-active-icon: #cbccc4;
--cursor-hover-icon: #fff;
--btn-tertiary-hover-background: #2e2f2d;
--tw-translate-x: 0;
--input-focused-background: #f7f8f4;
--input-default-error-stroke: #f15264;
--alert-default-icon: #e79295;
--input-hover-label-required: #e9ebdf99;
--subnav-default-selected: #518dd2;
--subnav-inactive-icon: #e9ebdf00;
--tw-blur: ;
--tw-invert: ;
--surface-background-base: #151515;
--tw-contain-layout: ;
--tw-backdrop-sepia: ;
--cursor-active-cursor: #fff;
--tw-sepia: ;
--surface-details-neutral-alpha-6: #e9ebdf10;
--tw-ordinal: ;
--tw-contain-style: ;
--cursor-default-icon: #fff;
--tw-backdrop-invert: ;
--subnav-hover-selected: #518dd2;
--surface-lightbox-inactive: #15151500;
--tw-backdrop-grayscale: ;
--tw-hue-rotate: ;
--tw-pan-y: ;
--surface-lightbox-active: #000c;
--subnav-default-icon: #e9ebdf00;
--surface-details-neutral-alpha-12: #e9ebdf1f;
--nav-items-hover-selected: #518dd2;
--tw-rotate: 0;
--cursor-hover-cursor: #fff;
--subnav-inactive-selected: #518dd2;
--nav-items-default-selected: #518dd2;
--tw-scroll-snap-strictness: proximity;
--nav-items-inactive-selected: #518dd2;
--tw-backdrop-hue-rotate: ;
--tw-numeric-fraction: ;
--alert-default-stroke: #c72844;
--tw-skew-y: 0;
--tw-slashed-zero: ;
--cursor-default-cursor: #fff;
--footer-background: #151515;
--tw-backdrop-opacity: ;
--nav-items-hover-icon: #f7f8f4;
--tw-gradient-from-position: ;
--tw-contain-paint: ;
--experimental-cursor-fill: #000;
--tw-backdrop-saturate: ;
--cursor-active-icon: #fff;
--tw-brightness: ;
--surface-details-neutral-alpha-40: #e9ebdf66;
--tw-backdrop-brightness: ;
--surface-lightbox-scrim: #0009;
--nav-active-background: #000c;
--tw-contrast: ;
--btn-tertiary-active-background: #2e2f2d;
--input-hover-error-stroke: #f15264;
--tw-skew-x: 0;
--nav-items-default-icon: #e9ebdf;
--cursor-hover-cursor-stroke: #000;
--tw-backdrop-blur: ;
--eyebrow-background: #000;
--tw-scale-x: 1;
--cursor-message-cursor: #fff;
--tw-numeric-figure: ;
--btn-tertiary-default-background: #242424;
```

### Dependencies

```css
0: --dvt-nav-height;
1: --dvt-sticky-offset;
0: --dvt-nav-height;
1: --dvt-banner-height;
0: --dvt-site-max-width;
0: --dvt-document-width;
1: --dvt-grid-items;
0: --dvt-grid-col;
0: --dvt-grid-col;
1: --dvt-grid-items;
2: --dvt-grid-outer;
```

### Semantic

```css
--raw-green-darkest: #081e19;
--raw-green-darker: #0e352c;
--raw-green-dark: #185849;
--raw-green-primary: #4d9987;
--raw-green-light: #6eac9c;
--raw-green-lighter: #afd1c6;
--raw-green-lightest: #d7e9e0;
--raw-semantic-success-12: #1a3c32;
--raw-semantic-success-11: #008163;
--raw-semantic-success-10: #11997a;
--raw-semantic-success-8: #52bb9d;
--btn-secondary-green-active-icon: #e9ebdf;
--btn-secondary-green-default-icon: #e9ebdf;
--btn-secondary-green-default-stroke: #4d9987;
--btn-secondary-green-hover-text: #e9ebdf;
--surface-accent-muted-green: #afd1c6;
--btn-secondary-green-active-stroke: #afd1c6;
--surface-accent-background-green: #0e352c;
--btn-secondary-green-default-text: #e9ebdf;
--btn-secondary-green-hover-icon: #e9ebdf;
--btn-secondary-green-hover-stroke: #afd1c6;
--btn-secondary-green-active-text: #e9ebdf00;
--surface-accent-focused-green: #4d9987;
--surface-accent-base-green: #185849;
--raw-yellow-darkest: #301a08;
--raw-yellow-darker: #4a2b11;
--raw-yellow-dark: #7c481c;
--raw-yellow-primary: #eca438;
--raw-yellow-light: #efb55b;
--raw-yellow-lighter: #f6d6a0;
--raw-yellow-lightest: #fbebcc;
--raw-semantic-warning-12: #4b371d;
--raw-semantic-warning-11: #aa6800;
--raw-semantic-warning-10: #f1a42e;
--raw-semantic-warning-8: #e0a24e;
--surface-accent-background-yellow: #4a2b11;
--btn-secondary-yellow-hover-icon: #e9ebdf;
--btn-secondary-yellow-default-icon: #e9ebdf;
--surface-accent-muted-yellow: #f6d6a0;
--btn-secondary-yellow-active-text: #e9ebdf00;
--surface-accent-base-yellow: #7c481c;
--btn-secondary-yellow-default-stroke: #eca438;
--surface-accent-focused-yellow: #eca438;
--btn-secondary-yellow-active-stroke: #f6d6a0;
--btn-secondary-yellow-active-icon: #e9ebdf;
--btn-secondary-yellow-hover-stroke: #f6d6a0;
--btn-secondary-yellow-default-text: #e9ebdf;
--btn-secondary-yellow-hover-text: #e9ebdf;
--raw-red-darkest: #2f0909;
--raw-red-darker: #531717;
--raw-red-dark: #832424;
--raw-red-primary: #ef4444;
--raw-red-light: #ff7171;
--raw-red-lighter: #fca9a9;
--raw-red-lightest: #ffcfcf;
--input-default-label-required: #e9ebdf99;
--input-focused-error-stroke: #c72844;
--input-hover-error-text: #f15264;
--input-default-error-text: #f15264;
--input-focused-label-required: #e9ebdf99;
--input-default-error-stroke: #f15264;
--input-hover-label-required: #e9ebdf99;
--tw-shadow-colored: 0 0 #0000;
--input-hover-error-stroke: #f15264;
--input-focused-error-text: #c72844;
--raw-blue-darkest: #101e2d;
--raw-blue-darker: #1b2e44;
--raw-blue-dark: #2d4c71;
--raw-blue-primary: #518dd2;
--raw-blue-light: #71a2da;
--raw-blue-lighter: #b0ccea;
--raw-blue-lightest: #d8e6f3;
--btn-secondary-blue-active-icon: #e9ebdf;
--btn-secondary-blue-hover-text: #e9ebdf;
--btn-secondary-blue-default-stroke: #518dd2;
--btn-secondary-blue-default-icon: #e9ebdf;
--surface-accent-base-blue: #2d4c71;
--surface-accent-background-blue: #1b2e44;
--btn-secondary-blue-default-text: #e9ebdf;
--btn-secondary-blue-active-stroke: #b0ccea;
--surface-accent-focused-blue: #518dd2;
--btn-secondary-blue-hover-stroke: #b0ccea;
--surface-accent-muted-blue: #b0ccea;
--btn-secondary-blue-active-text: #e9ebdf00;
--btn-secondary-blue-hover-icon: #e9ebdf;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| 400px | 400px | min-width |
| sm | 543px | max-width |
| sm | 544px | min-width |
| sm | 640px | min-width |
| md | 767px | max-width |
| md | 768px | min-width |
| lg | 992px | max-width |
| lg | 1011px | max-width |
| lg | 1024px | min-width |
| 1120px | 1120px | max-width |
| 1200px | 1200px | max-width |
| xl | 1279px | max-width |
| xl | 1280px | min-width |
| 1440px | 1440px | min-width |
| 1441px | 1441px | min-width |
| 1920px | 1920px | min-width |
| 2240px | 2240px | min-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.72, 0, 0.12, 1)`, `cubic-bezier(0.72, 0, 0.36, 1)`, `cubic-bezier(0.24, 0.01, 0.36, 1)`, `cubic-bezier(0.12, 1, 0.72, 1)`

**Durations:** `0.4s`, `0.6s`, `0.3s`, `0.1s`, `0.2s`, `0.5s`

### Common Transitions

```css
transition: all;
transition: margin-top 0.4s cubic-bezier(0.72, 0, 0.12, 1);
transition: transform 0.6s, opacity 0.6s, color 0.6s, background-color 0.6s, border-color 0.6s, text-decoration-color 0.6s, fill 0.6s, stroke 0.6s;
transition: transform 0.4s, opacity 0.4s;
transition: transform 0.3s;
transition: opacity 0.4s;
transition: transform 0.4s cubic-bezier(0.72, 0, 0.12, 1);
transition: transform 0.4s cubic-bezier(0.72, 0, 0.12, 1) 0.1s;
transition: 0.2s cubic-bezier(0.72, 0, 0.12, 1);
transition: color 0.3s cubic-bezier(0.72, 0, 0.12, 1), background-color 0.3s cubic-bezier(0.72, 0, 0.12, 1), border-color 0.3s cubic-bezier(0.72, 0, 0.12, 1), text-decoration-color 0.3s cubic-bezier(0.72, 0, 0.12, 1), fill 0.3s cubic-bezier(0.72, 0, 0.12, 1), stroke 0.3s cubic-bezier(0.72, 0, 0.12, 1);
```

### Keyframe Animations

**HeroMadLibText-module__6slh_G__swipe-background-position**
```css
@keyframes HeroMadLibText-module__6slh_G__swipe-background-position {
  0% { background-position: 100% 0px; }
  100% { background-position: 0px 0px; }
}
```

**ShineBorder-module__-3f1va__shine-pulse**
```css
@keyframes ShineBorder-module__-3f1va__shine-pulse {
  0% { background-position: 150% 150%; }
  50% { background-position: -50% -50%; }
  100% { background-position: 150% 150%; }
}
```

**ActionLink-module__4rWgOW__slide-out-in**
```css
@keyframes ActionLink-module__4rWgOW__slide-out-in {
  0% { transform-origin: 100% center; transform: scaleX(1); }
  50% { transform-origin: 100% center; transform: scaleX(0); }
  50.01% { transform-origin: 0px center; transform: scaleX(0); }
  100% { transform-origin: 0px center; transform: scaleX(1); }
}
```

**ActionArrowLink-module__YdMS6a__slide-out-in**
```css
@keyframes ActionArrowLink-module__YdMS6a__slide-out-in {
  0% { background-position: 100% 100%; background-size: 100% 1px; }
  50% { background-position: 100% 100%; background-size: 0% 1px; }
  50.01% { background-position: 0px 100%; background-size: 0% 1px; }
  100% { background-position: 0px 100%; background-size: 100% 1px; }
}
```

**Badge-module__6_JPlG__gradient-shift**
```css
@keyframes Badge-module__6_JPlG__gradient-shift {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}
```

**Badge-module__6_JPlG__chrome-gradient-shift**
```css
@keyframes Badge-module__6_JPlG__chrome-gradient-shift {
  0% { background-position: 0% center; }
  100% { background-position: 400% center; }
}
```

**Badge-module__6_JPlG__red-light-pulse**
```css
@keyframes Badge-module__6_JPlG__red-light-pulse {
  0% { background-color: var(--raw-semantic-critical-10); }
  100% { background-color: var(--raw-semantic-critical-8); }
}
```

**GradientBorder-module__R7J64a__gradient-border-pulse**
```css
@keyframes GradientBorder-module__R7J64a__gradient-border-pulse {
  0% { background-position: -50% -50%; }
  50% { background-position: 150% 150%; }
  100% { background-position: -50% -50%; }
}
```

**PromptAction-module__BVA7-q__shimmer-text**
```css
@keyframes PromptAction-module__BVA7-q__shimmer-text {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}
```

**PromptBox-module__bBHQva__shimmer-text**
```css
@keyframes PromptBox-module__bBHQva__shimmer-text {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (58 instances)

```css
.buttons {
  background-color: rgb(233, 235, 223);
  color: rgb(233, 235, 223);
  font-size: 13.2308px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Cards (7 instances)

```css
.cards {
  background-color: rgb(21, 21, 21);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.35) 0px 68px 116px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (138 instances)

```css
.links {
  color: rgb(233, 235, 223);
  font-size: 16px;
  font-weight: 400;
}
```

### Navigation (33 instances)

```css
.navigation {
  background-color: rgb(21, 21, 21);
  color: rgb(233, 235, 223);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
}
```

### Footer (35 instances)

```css
.footer {
  background-color: rgb(21, 21, 21);
  color: rgb(203, 204, 196);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 12px;
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

### Dropdowns (31 instances)

```css
.dropdowns {
  border-radius: 0px;
  border-color: rgb(233, 235, 223);
  padding-top: 0px;
}
```

### Badges (3 instances)

```css
.badges {
  background-color: rgb(247, 248, 244);
  color: rgb(21, 21, 21);
  font-size: 12px;
  font-weight: 400;
  padding-top: 4px;
  padding-right: 8px;
  border-radius: 36px;
}
```

### Accordions (3 instances)

```css
.accordions {
  color: rgb(233, 235, 223);
  font-size: 16px;
  padding-top: 8px;
  padding-right: 0px;
  border-color: rgb(233, 235, 223);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(233, 235, 223);
  color: rgb(21, 21, 21);
  padding: 0px 0px 0px 0px;
  border-radius: 9999px;
  border: 0px solid rgb(21, 21, 21);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(233, 235, 223);
  padding: 8px 0px 8px 0px;
  border-radius: 0px;
  border: 0px solid rgb(233, 235, 223);
  font-size: 12px;
  font-weight: 400;
```

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(233, 235, 223);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(233, 235, 223);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(233, 235, 223);
  padding: 4px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(233, 235, 223);
  font-size: 13.2308px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(233, 235, 223);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 1px solid rgba(233, 235, 223, 0.12);
  font-size: 16px;
  font-weight: 400;
```

### Link — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(233, 235, 223);
  padding: 28px 0px 28px 12px;
  border-radius: 0px;
  border: 0px solid rgb(233, 235, 223);
  font-size: 16px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(233, 235, 223);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(233, 235, 223);
  font-size: 22.4615px;
  font-weight: 380;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(21, 21, 21);
  color: rgb(233, 235, 223);
  padding: 24px 0px 24px 12px;
  border-radius: 0px;
  border: 0px solid rgb(233, 235, 223);
  font-size: 16px;
  font-weight: 400;
```

### Button — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(233, 235, 223);
  padding: 2px 2px 2px 2px;
  border-radius: 9999px;
  border: 1px solid rgba(233, 235, 223, 0.12);
  font-size: 16px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(21, 21, 21, 0.063);
  color: rgb(36, 36, 36);
  padding: 4px 4px 4px 8px;
  border-radius: 8px;
  border: 1px solid rgba(21, 21, 21, 0.12);
  font-size: 13.2308px;
  font-weight: 400;
```

### Button — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgb(217, 217, 217);
  color: rgba(21, 21, 21, 0.6);
  padding: 8px 12px 8px 12px;
  border-radius: 12px;
  border: 1px solid rgba(21, 21, 21, 0.12);
  font-size: 13.2308px;
  font-weight: 400;
```

### Button — 6 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0.8);
  color: rgb(233, 235, 223);
  padding: 0px 0px 0px 0px;
  border-radius: 9999px;
  border: 1px solid rgba(233, 235, 223, 0.12);
  font-size: 16px;
  font-weight: 400;
```

**Variant 2** (5 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(233, 235, 223);
  padding: 0px 0px 0px 0px;
  border-radius: 16px;
  border: 0px solid rgb(233, 235, 223);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(233, 235, 223);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(233, 235, 223);
  font-size: 22.4615px;
  font-weight: 380;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(233, 235, 223);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(233, 235, 223);
  font-size: 22.4615px;
  font-weight: 380;
```

### Button — 8 instances, 1 variant

**Variant 1** (8 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(233, 235, 223);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(233, 235, 223);
  font-size: 22.4615px;
  font-weight: 380;
```

## Layout System

**22 grid containers** and **430 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 2240px | 0px |
| 100% | 0px |
| 1440px | 0px |
| 640px | 0px |
| 1208.89px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 44-column | 9x |
| 36-column | 4x |
| 20-column | 2x |
| 3-column | 2x |
| 1-column | 2x |
| 30-column | 2x |
| 4-column | 1x |

### Grid Templates

```css
grid-template-columns: [start-edge] 35.7031px [start-inner] 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px [start-third] 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px [center] 35.5469px 35.5469px [off-center] 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px [aside] 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px [end-inner] 35.7031px [end-edge];
grid-template-columns: subgrid [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [] [];
gap: 40px normal;
grid-template-columns: [start-edge] 35.7031px [start-inner] 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px [start-third] 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px [center] 35.5469px 35.5469px [off-center] 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px [aside] 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px [end-inner] 35.7031px [end-edge];
grid-template-columns: [start-edge] 35.7031px [start-inner] 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px [start-third] 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px [center] 35.5469px 35.5469px [off-center] 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px [aside] 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px 35.5469px [end-inner] 35.7031px [end-edge];
grid-template-columns: 402.531px 402.531px 402.531px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 320x |
| row/wrap | 6x |
| column/nowrap | 103x |
| row-reverse/nowrap | 1x |

**Gap values:** `0px normal`, `12px`, `12px normal`, `14px`, `16px normal`, `24px`, `24px normal`, `32px`, `40px`, `40px 35.5556px`, `40px normal`, `4px`, `4px 8px`, `64px normal`, `6px`, `8px`, `normal 16px`, `normal 24px`, `normal 40px`, `normal 8px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 5 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#151515` | `#f7f8f4` | 17.12:1 | AAA |
| `#e9ebdf` | `#242424` | 12.87:1 | AAA |
| `#e9ebdf` | `#0e352c` | 11.13:1 | AAA |

## Design System Score

**Overall: 90/100 (Grade: A)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 92/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 80/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Well-defined spacing scale, Clean elevation system, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 106 !important rules — prefer specificity over overrides
- 79% of CSS is unused — consider purging
- 3292 duplicate CSS declarations

## Gradients

**11 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 90deg | 5 | complex |
| radial | at 0% 100% | 2 | brand |
| radial | at 100% 100% | 2 | brand |
| radial | — | 3 | bold |
| radial | — | 3 | bold |
| linear | — | 3 | bold |
| linear | — | 13 | complex |
| linear | 103deg | 3 | bold |
| linear | 90deg | 3 | bold |
| linear | — | 2 | brand |
| linear | — | 2 | brand |

```css
background: linear-gradient(90deg, rgb(35, 52, 39) 0%, rgb(56, 80, 86) 26.05%, rgb(125, 110, 165) 51.26%, rgb(180, 152, 215) 77.04%, rgb(176, 204, 234) 100%);
background: radial-gradient(at 0% 100%, color(srgb 0.176471 0.298039 0.443137 / 0.75) 0%, rgba(0, 0, 0, 0) 55%);
background: radial-gradient(at 100% 100%, color(srgb 0.47451 0.2 0.145098 / 0.65) 0%, rgba(0, 0, 0, 0) 50%);
background: radial-gradient(80% 50% at 0% 100%, color(srgb 0.176471 0.298039 0.443137 / 0.75) 0%, rgba(0, 0, 0, 0) 100%);
background: radial-gradient(80% 45% at 100% 100%, color(srgb 0.47451 0.2 0.145098 / 0.65) 0%, rgba(0, 0, 0, 0) 100%);
```

## Z-Index Map

**14 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 1500,9999 | header.G.l.o.b.a.l.N.a.v.i.g.a.t.i.o.n.C.o.n.t.e.n.t.D.e.f.a.u.l.t.-.m.o.d.u.l.e._._.V.J.d.2.L.q._._.g.l.o.b.a.l.N.a.v.i.g.a.t.i.o.n.C.o.n.t.e.n.t. .f.i.x.e.d. .t.o.p.-.0. .z.-.n.a.v. .l.g.:.b.l.o.c.k, div.f.l.e.x. .i.t.e.m.s.-.c.e.n.t.e.r. .l.g.:.c.o.l.-.s.t.a.r.t.-.2. .l.g.:.c.o.l.-.s.p.a.n.-.4. .z.-.n.a.v. .m.i.n.-.h.-.9. .t.r.a.n.s.i.t.i.o.n.-.t.r.a.n.s.f.o.r.m.-.o.p.a.c.i.t.y. .d.u.r.a.t.i.o.n.-.4.0.0. .o.p.a.c.i.t.y.-.1.0.0. .t.r.a.n.s.f.o.r.m.-.n.o.n.e. .p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.a.u.t.o, div.s.t.i.c.k.y. .h.-.0. .f.l.e.x. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .i.t.e.m.s.-.e.n.d. .p.-.2. .b.o.t.t.o.m.-.0. .l.e.f.t.-.0. .r.i.g.h.t.-.0. .m.x.-.a.u.t.o. .w.-.f.u.l.l. .z.-.n.a.v. .p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .m.a.x.-.w.-.s.c.r.e.e.n.-.x.x.l. .m.d.:.p.-.4. .m.d.:.j.u.s.t.i.f.y.-.e.n.d. .h.i.d.d.e.n |
| sticky | 10,30 | span.r.e.l.a.t.i.v.e. .z.-.1.0. .l.e.a.d.i.n.g.-.n.o.n.e. .l.i.n.e.-.c.l.a.m.p.-.1. .p.y.-.1, span.r.e.l.a.t.i.v.e. .z.-.1.0. .l.e.a.d.i.n.g.-.n.o.n.e. .l.i.n.e.-.c.l.a.m.p.-.1. .p.y.-.1, span.r.e.l.a.t.i.v.e. .z.-.1.0. .l.e.a.d.i.n.g.-.n.o.n.e. .l.i.n.e.-.c.l.a.m.p.-.1. .p.y.-.1 |
| base | 0,7 | figure.a.b.s.o.l.u.t.e. .z.-.0. .w.-.f.u.l.l. .h.-.n.a.v.-.h.e.i.g.h.t. .t.r.a.n.s.i.t.i.o.n.-.c.o.l.o.r.s. .m.o.t.i.o.n.-.r.e.d.u.c.e.:.d.u.r.a.t.i.o.n.-.2.0.0. .o.p.a.c.i.t.y.-.0. .b.g.-.s.u.r.f.a.c.e.-.l.i.g.h.t.b.o.x.-.i.n.a.c.t.i.v.e. .t.r.a.n.s.i.t.i.o.n.-.t.r.a.n.s.f.o.r.m.-.o.p.a.c.i.t.y.-.c.o.l.o.r. .d.u.r.a.t.i.o.n.-.6.0.0, span.a.b.s.o.l.u.t.e. .i.n.v.i.s.i.b.l.e. .t.e.x.t.-.t.r.a.n.s.p.a.r.e.n.t. .z.-.0. .l.i.n.e.-.c.l.a.m.p.-.1. .p.y.-.1, span.a.b.s.o.l.u.t.e. .i.n.v.i.s.i.b.l.e. .t.e.x.t.-.t.r.a.n.s.p.a.r.e.n.t. .z.-.0. .l.i.n.e.-.c.l.a.m.p.-.1. .p.y.-.1 |

## SVG Icons

**16 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 1 |
| sm | 6 |
| md | 5 |
| lg | 3 |
| xl | 1 |

**Icon colors:** `currentColor`, `#fff`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| saansFont | self-hosted | 100 900 | normal |
| pxGroteskFont | self-hosted | 400, 700 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 87 | objectFit: cover, borderRadius: 0px, shape: square |
| general | 34 | objectFit: cover, borderRadius: 0px, shape: square |
| hero | 5 | objectFit: cover, borderRadius: 0px, shape: square |
| gallery | 1 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (38x), 3:2 (25x), 16:9 (15x), 5.3:1 (8x), 4:3 (7x), 21:9 (4x), 2.88:1 (3x), 2.81:1 (3x)

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

- **custom** (153 uses) — `cubic-bezier(0.72, 0, 0.12, 1)`, `cubic-bezier(0.72, 0, 0.36, 1)`, `cubic-bezier(0.24, 0.01, 0.36, 1)`
- **ease-out** (3 uses) — `cubic-bezier(0.12, 1, 0.72, 1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `PromptBox-module__bBHQva__shimmer-text` | custom | background-position | 2 |

## Component Anatomy

### button — 33 instances

**Slots:** label, icon
**Variants:** secondary · primary
**Sizes:** sm · lg

| variant | count | sample label |
|---|---|---|
| default | 23 | BACK |
| primary | 8 | Import apps built in other platforms |
| secondary | 2 | Search
⌘K |

### card — 3 instances

**Slots:** media
**Variants:** link

## Brand Voice

**Tone:** neutral · **Pronoun:** you-only · **Headings:** Sentence case (balanced)

### Top CTA Verbs

- **import** (3)
- **starter** (2)
- **build** (2)
- **back** (1)
- **solution** (1)
- **audience** (1)
- **resources** (1)
- **search** (1)

### Button Copy Patterns

- "starter prompts" (2×)
- "import apps built in other platforms" (2×)
- "build via mcp" (2×)
- "back" (1×)
- "solution" (1×)
- "audience" (1×)
- "resources" (1×)
- "search
⌘k" (1×)
- "resource hub
new

explore collections and more" (1×)
- "see what's new.
watch the film" (1×)

### Sample Headings

> Secure your vibe-coded apps
> Apps that mean business
> Why enterprises choose Retool
> Production-ready from day one
> From one great app to operational excellence
> Secure your vibe-coded apps
> Apps that mean business
> Why enterprises choose Retool
> Production-ready from day one
> From one great app to operational excellence

## Page Intent

**Type:** `landing` (confidence 0.57)
**Description:** Build, deploy, and manage internal tools with Retool's unified engine. Connect to any database, API, or LLM. Leverage AI throughout your business.

Alternates: docs (0.45), legal (0.4), blog-post (0.35)

## Section Roles

Reading order (top→bottom): testimonial → nav → testimonial → hero → nav → content → testimonial → testimonial → pricing-table → pricing → content → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | testimonial | — | 0.8 |
| 1 | nav | — | 0.9 |
| 2 | nav | — | 0.9 |
| 3 | testimonial | Secure your vibe-coded apps | 0.8 |
| 4 | hero | Secure your vibe-coded apps | 0.85 |
| 5 | content | Apps that mean business | 0.3 |
| 6 | testimonial | — | 0.8 |
| 7 | testimonial | Why enterprises choose Retool | 0.8 |
| 8 | pricing-table | Trusted by 10,000+ teams to generate production-ready AI applications | 0.9 |
| 9 | pricing | Start today | 0.4 |
| 10 | content | Get the latest from Retool | 0.3 |
| 11 | footer | — | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.135 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 9999px |
| backdrop-filter in use | no |
| Gradients | 11 |

## Imagery Style

**Label:** `flat-illustration` (confidence 0.118)
**Counts:** total 127, svg 59, icon 26, screenshot-like 0, photo-like 0
**Dominant aspect:** landscape
**Radius profile on images:** square

## Component Library

**Detected:** `tailwindcss` (confidence 0.564)

Evidence:
- tailwind-like class density 57%

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `saansFont` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
