# Design Language: Mintlify - The Knowledge Platform Built for Agents

> Extracted from `https://mintlify.com` on June 25, 2026
> 1964 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#faf8f5` | rgb(250, 248, 245) | hsl(36, 33%, 97%) | 39 |
| Secondary | `#004cff` | rgb(0, 76, 255) | hsl(222, 100%, 50%) | 2 |
| Accent | `#ff7a59` | rgb(255, 122, 89) | hsl(12, 100%, 67%) | 2 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 1280 |
| `#ffffff` | hsl(0, 0%, 100%) | 246 |
| `#121715` | hsl(156, 12%, 8%) | 127 |
| `#969e9b` | hsl(157, 4%, 60%) | 66 |
| `#485450` | hsl(160, 8%, 31%) | 42 |
| `#717d79` | hsl(160, 5%, 47%) | 8 |
| `#cfcdca` | hsl(36, 5%, 80%) | 8 |

### Background Colors

Used on large-area elements: `#f9f6f3`, `#ef6333`, `#004cff`, `#ff7a59`, `#00a8e0`, `#faf8f5`, `#fefdfb`

### Text Colors

Text color palette: `#000000`, `#0c8c5e`, `#121715`, `#717d79`, `#ffffff`, `#969e9b`, `#485450`, `#cfcdca`

### Gradients

```css
background-image: linear-gradient(106deg, rgba(68, 174, 255, 0.5) 0%, rgba(24, 226, 153, 0.5) 35%, rgba(186, 255, 36, 0.5) 65%, rgba(24, 226, 153, 0.5) 100%);
```

```css
background-image: linear-gradient(rgba(0, 0, 0, 0) 55%, lab(100 0 0) 96%);
```

```css
background-image: linear-gradient(to right, lab(100 0 0) 0%, rgba(0, 0, 0, 0) 71%);
```

```css
background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, lab(100 0 0) 71%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 1280 |
| `#ffffff` | background, text, border | 246 |
| `#121715` | text, border | 127 |
| `#969e9b` | text, border | 66 |
| `#485450` | text, border | 42 |
| `#faf8f5` | border, background | 39 |
| `#0c8c5e` | text, border, background | 14 |
| `#1fa77a` | background, border | 12 |
| `#717d79` | text, border | 8 |
| `#cfcdca` | text, border | 8 |
| `#16a34a` | background | 4 |
| `#ef6333` | background | 2 |
| `#004cff` | background | 2 |
| `#ff7a59` | background | 2 |
| `#00a8e0` | background | 2 |

## Typography

### Font Families

- **inter** — used for all (1121 elements)
- **paperMono** — used for body (779 elements)
- **arizonaFlare** — used for headings (2 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 50px | 3.125rem | 400 | 52px | -2px | h1 |
| 44px | 2.75rem | 400 | 48px | -0.88px | p |
| 36px | 2.25rem | 500 | 40px | -0.72px | h2, span, p |
| 35px | 2.1875rem | 500 | 40px | -0.35px | h3, span |
| 24px | 1.5rem | 500 | 28px | -0.24px | h2, strong |
| 18px | 1.125rem | 400 | 24px | normal | p, span |
| 16px | 1rem | 400 | 24px | normal | html, head, meta, link |
| 14px | 0.875rem | 500 | 16px | normal | button, svg, path, a |
| 12px | 0.75rem | 500 | 16px | 0.24px | span |

### Heading Scale

```css
h1 { font-size: 50px; font-weight: 400; line-height: 52px; }
h2 { font-size: 36px; font-weight: 500; line-height: 40px; }
h3 { font-size: 35px; font-weight: 500; line-height: 40px; }
h2 { font-size: 24px; font-weight: 500; line-height: 28px; }
h3 { font-size: 16px; font-weight: 400; line-height: 24px; }
h3 { font-size: 14px; font-weight: 500; line-height: 16px; }
```

### Body Text

```css
body { font-size: 12px; font-weight: 500; line-height: 16px; }
```

### Font Weights in Use

`500` (1017x), `400` (947x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-4 | 4px | 0.25rem |
| spacing-40 | 40px | 2.5rem |
| spacing-48 | 48px | 3rem |
| spacing-64 | 64px | 4rem |
| spacing-80 | 80px | 5rem |
| spacing-93 | 93px | 5.8125rem |
| spacing-104 | 104px | 6.5rem |
| spacing-128 | 128px | 8rem |
| spacing-160 | 160px | 10rem |
| spacing-266 | 266px | 16.625rem |
| spacing-290 | 290px | 18.125rem |
| spacing-298 | 298px | 18.625rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 12 |
| md | 6px | 47 |
| lg | 12px | 20 |
| xl | 24px | 1 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 169px 47px 0px, rgba(0, 0, 0, 0.01) 0px 108px 43px 0px, rgba(0, 0, 0, 0.02) 0px 61px 37px 0px, rgba(0, 0, 0, 0.03) 0px 27px 27px 0px, rgba(0, 0, 0, 0.04) 0px 7px 15px 0px;
```

## CSS Custom Properties

### Colors

```css
--twoslash-border-color: #dbdfde;
--twoslash-underline-color: currentColor;
--twoslash-popup-bg: #f3f7f6;
--twoslash-popup-color: inherit;
--twoslash-matched-color: inherit;
--twoslash-highlighted-border: rgba(195,125,13,.314);
--twoslash-highlighted-bg: rgba(195,125,13,.125);
--twoslash-unmatched-color: #888;
--twoslash-cursor-color: rgba(136,136,136,.533);
--twoslash-error-color: #d45656;
--twoslash-error-bg: rgba(212,86,86,.125);
--twoslash-warn-color: #c37d0d;
--twoslash-warn-bg: rgba(195,125,13,.125);
--twoslash-tag-color: #3772cf;
--twoslash-tag-bg: rgba(55,114,207,.125);
--twoslash-tag-warn-color: var(--twoslash-warn-color);
--twoslash-tag-warn-bg: var(--twoslash-warn-bg);
--twoslash-tag-annotate-color: #1ba673;
--twoslash-tag-annotate-bg: rgba(27,166,115,.125);
--accordion-background-color: var(--c15t-surface);
--accordion-background-color-dark: var(--c15t-surface);
--accordion-border-color: var(--c15t-border);
--accordion-border-color-dark: var(--c15t-border);
--accordion-text-color: var(--c15t-text);
--accordion-text-color-dark: var(--c15t-text);
--accordion-icon-color: var(--c15t-text-muted);
--accordion-icon-color-dark: var(--c15t-text-muted);
--accordion-arrow-color: var(--c15t-text-muted);
--accordion-arrow-color-dark: var(--c15t-text-muted);
--accordion-content-color: var(--c15t-text-muted);
--accordion-content-color-dark: var(--c15t-text-muted);
--accordion-focus-ring: var(--c15t-primary);
--accordion-focus-ring-dark: var(--c15t-primary);
--button-primary: var(--c15t-primary);
--button-primary-dark: var(--c15t-primary);
--button-primary-hover: var(--c15t-primary-hover);
--button-primary-hover-dark: var(--c15t-primary-hover);
--button-focus-ring: var(--c15t-primary);
--button-focus-ring-dark: var(--c15t-primary);
--button-background-color: var(--c15t-surface);
--button-background-color-dark: var(--c15t-surface);
--button-border: var(--c15t-border);
--button-border-dark: var(--c15t-border);
--button-primary-hover-tint: var(--c15t-primary);
--button-border-width: 1px;
--button-border-style: solid;
--button-border-color: var(--c15t-border);
--button-border-radius: var(--c15t-radius-md);
--button-hover-transition-color: background-color var(--c15t-duration-fast)var(--c15t-easing);
--button-shadow-primary-focus: 0 0 0 2px var(--button-focus-ring);
--button-shadow-primary-focus-dark: 0 0 0 2px var(--button-focus-ring-dark);
--button-shadow-primary: var(--button-shadow),inset 0 0 0 1px var(--button-primary);
--button-shadow-primary-dark: var(--button-shadow-dark),inset 0 0 0 1px var(--button-primary-dark);
--button-shadow-primary-hover: none;
--button-shadow-primary-hover-dark: none;
--collapsible-content-color: var(--c15t-text-muted);
--legal-links-color: #476cff;
--legal-links-focus-color: #476cff;
--legal-links-focus-color-dark: #2547d0;
--preference-item-content-color: var(--c15t-text-muted);
--preference-item-focus-ring: var(--c15t-primary);
--tabs-list-border: var(--c15t-border);
--tabs-trigger-color: var(--c15t-text-muted);
--tabs-trigger-active-color: var(--c15t-text);
--tabs-focus-ring: var(--c15t-primary);
--consent-banner-border-radius-sm: var(--c15t-radius-sm);
--consent-banner-border-radius: var(--c15t-radius-lg);
--consent-banner-border-width: 1px;
--consent-banner-border-width-hairline: .5px;
--consent-banner-background-color: var(--c15t-surface);
--consent-banner-background-color-dark: var(--c15t-surface);
--consent-banner-footer-background-color: var(--c15t-surface-hover);
--consent-banner-footer-background-color-dark: var(--c15t-surface-hover);
--consent-banner-text-color: var(--c15t-text);
--consent-banner-text-color-dark: var(--c15t-text);
--consent-banner-border-color: var(--c15t-border);
--consent-banner-border-color-dark: var(--c15t-border);
--consent-banner-title-color: var(--c15t-text);
--consent-banner-title-color-dark: var(--c15t-text);
--consent-banner-description-color: var(--c15t-text-muted);
--consent-banner-description-color-dark: var(--c15t-text-muted);
--consent-banner-overlay-background-color: var(--c15t-overlay);
--consent-banner-overlay-background-color-dark: var(--c15t-overlay);
--consent-dialog-stroke-color: var(--c15t-border);
--consent-dialog-stroke-color-dark: var(--c15t-border);
--consent-dialog-branding-focus-color: var(--c15t-primary);
--consent-dialog-branding-focus-color-dark: var(--c15t-primary);
--consent-dialog-link-text-color: var(--c15t-text);
--consent-dialog-link-text-color-dark: var(--c15t-text);
--consent-dialog-border-color: var(--c15t-border);
--consent-dialog-border-color-dark: var(--c15t-border);
--consent-dialog-background-color: var(--c15t-surface);
--consent-dialog-background-color-dark: var(--c15t-surface);
--consent-dialog-foreground-color: var(--c15t-text);
--consent-dialog-foreground-color-dark: var(--c15t-text);
--consent-dialog-muted-color: var(--c15t-text-muted);
--consent-dialog-muted-color-dark: var(--c15t-text-muted);
--consent-dialog-overlay-background-color: var(--c15t-overlay);
--consent-dialog-overlay-background-color-dark: var(--c15t-overlay);
--consent-dialog-card-padding: var(--c15t-space-lg);
--consent-dialog-card-padding-mobile: var(--c15t-space-md);
--consent-dialog-card-gap: var(--c15t-space-xs);
--consent-dialog-card-radius: var(--c15t-radius-lg);
--consent-dialog-card-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
--consent-dialog-border-width: 1px;
--consent-dialog-border-width-hairline: .5px;
--consent-dialog-border-style: solid;
--consent-widget-background-color: var(--c15t-surface);
--consent-widget-background-color-dark: var(--c15t-surface);
--consent-widget-border-color: var(--c15t-border);
--consent-widget-border-color-dark: var(--c15t-border);
--consent-widget-text-color: var(--c15t-text);
--consent-widget-text-color-dark: var(--c15t-text);
--consent-widget-text-muted-color: var(--c15t-text-muted);
--consent-widget-text-muted-color-dark: var(--c15t-text-muted);
--consent-widget-footer-background-color: transparent;
--consent-widget-footer-background-color-dark: transparent;
--consent-widget-link-text-color: var(--c15t-text);
--consent-widget-link-text-color-dark: var(--c15t-text);
--consent-widget-branding-link-color: var(--c15t-primary);
--consent-widget-border-width: 0;
--consent-widget-accordion-background-color: var(--c15t-surface);
--consent-widget-accordion-background-color-dark: var(--c15t-surface);
--consent-widget-accordion-border-color: var(--c15t-border);
--consent-widget-accordion-border-color-dark: var(--c15t-border);
--consent-widget-accordion-text-color: var(--c15t-text);
--consent-widget-accordion-text-color-dark: var(--c15t-text);
--consent-widget-accordion-icon-color: var(--c15t-text-muted);
--consent-widget-accordion-icon-color-dark: var(--c15t-text-muted);
--consent-widget-accordion-arrow-color: #a3a3a3;
--consent-widget-accordion-arrow-color-dark: #ccc;
--consent-widget-accordion-content-color: #5c5c5c;
--consent-widget-accordion-content-color-dark: #999;
--consent-widget-accordion-focus-ring: #476cff;
--consent-widget-accordion-focus-ring-dark: #2547d0;
--frame-placeholder-border-radius: 1.25rem;
--frame-placeholder-border-width: 1px;
--frame-placeholder-border-color: #ebebeb;
--frame-placeholder-border-color-dark: #333;
--frame-placeholder-background-color: #fff;
--frame-placeholder-background-color-dark: #171717;
--frame-placeholder-text-color: #171717;
--frame-placeholder-text-color-dark: #e6e6e6;
--frame-placeholder-title-color: #171717;
--frame-placeholder-title-color-dark: #e6e6e6;
--color-background-main: #fff;
--color-background-invert: #08090a;
--color-text-main: #08090a;
--color-text-invert: #fff;
--color-text-soft: rgba(8,9,10,.8);
--color-text-sub: rgba(8,9,10,.6);
--color-muted: rgba(8,9,10,.5);
--color-text-base-tertiary: rgba(8,9,10,.4);
--color-border-sub: rgba(8,9,10,.07);
--color-rail-dot: rgba(0,0,0,.12);
--color-background-soft: rgba(8,9,10,.03);
--color-border-surface: rgba(8,9,10,.05);
--color-border-soft: rgba(8,9,10,.15);
--color-brand: #0c8c5e;
--color-brand-light: #0c8c5e;
--color-border-solid: #08090a;
--color-muted-invert: rgba(255,255,255,.5);
--color-background-gray-emphasis: #e6e5e3;
--color-background-gray-subtle: #f9f8f7;
--color-foreground-gray-subtle: #554b42;
--color-neutral-0: #fefdfb;
--color-neutral-100: #faf8f5;
--color-neutral-200: #ebe9e6;
--color-neutral-250: #d9d7d4;
--color-neutral-300: #cfcdca;
--color-neutral-400: #969e9b;
--color-neutral-500: #717d79;
--color-neutral-700: #485450;
--color-neutral-800: #121715;
--color-orange: #eb9411;
--color-orange-2: #ffa723;
--color-light-orange: #ffeee0;
--color-blue-2: #44aeff;
--color-pink-2: #ffa3d3;
--color-purple: #d87cff;
--color-speedy-mint: #18e299;
--color-light-mint: #d2f7ea;
--color-green-new: #16a34a;
--color-midnight-green: #0e1d18;
--color-new-green: #003723;
--color-grass: #1b4637;
--color-mint-dark: #17cf85;
--color-blue-dark: #2992e3;
--color-black-rich: #0a0b0f;
--color-white-0: rgba(255,255,255,0);
--color-white-5: rgba(255,255,255,.05);
--color-white-8: rgba(255,255,255,.08);
--color-white-10: rgba(255,255,255,.1);
--color-white-35: rgba(255,255,255,.35);
--color-white-70: rgba(255,255,255,.7);
--color-black-0: transparent;
--color-black-2: rgba(0,0,0,.02);
--color-black-4: rgba(0,0,0,.04);
--color-black-6: rgba(0,0,0,.06);
--color-black-8: rgba(0,0,0,.08);
--color-black-50: rgba(0,0,0,.5);
--color-gradient-green-1: #18e299;
--color-gradient-green-2: #58e97f;
--color-gradient-green-3: #6dee6b;
--color-gradient-green-4: #81f25a;
--color-gradient-green-5: #95f648;
--color-gradient-green-6: #a8fb36;
--color-base-default: #fff;
--color-base-invert: #0a0b0f;
--color-base-white: #fff;
--color-base-black: #0a0b0f;
--color-background-primary: #fefdfb;
--color-background-secondary: #faf8f5;
--color-background-tertiary: #ebe9e6;
--color-background-tertiary-invert: #485450;
--color-background-transparent: rgba(255,255,255,0);
--color-background-transparent-invert: transparent;
--color-foreground-primary: #121715;
--color-foreground-invert: #faf8f5;
--color-foreground-secondary: #485450;
--color-foreground-tertiary: #717d79;
--color-foreground-muted: #969e9b;
--color-border-transparent: transparent;
--color-border-primary: rgba(0,0,0,.04);
--color-border-secondary: rgba(0,0,0,.06);
--color-border-tertiary: rgba(0,0,0,.08);
--color-border-muted: rgba(0,0,0,.5);
--color-border-line: #f1f0ee;
--color-brand-base: #0c8c5e;
--color-brand-8: rgba(12,140,94,.08);
--color-brand-10: rgba(12,140,94,.1);
--color-brand-20: rgba(12,140,94,.2);
--color-brand-vivid: #1fa77a;
--tw-mask-bottom-from-color: black;
--tw-inset-ring-shadow: 0 0 transparent;
--color-white: #fff;
--color-gray-100: lab(96.1596% -.0823438 -1.13575);
--tw-mask-right-from-color: black;
--c15t-easing-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--tw-mask-right-to-color: transparent;
--tw-ring-shadow: 0 0 transparent;
--tw-ring-offset-width: 0px;
--tw-mask-top-from-color: black;
--tw-ring-offset-shadow: 0 0 transparent;
--c15t-border: rgba(0,0,0,.06);
--tw-mask-radial-to-color: transparent;
--c15t-primary: #0c8c5e;
--color-green-800: lab(37.4616% -36.7971 22.9692);
--tw-mask-bottom-to-color: transparent;
--tw-mask-left-from-color: black;
--c15t-text-on-primary: #ffffff;
--c15t-text-muted: #485450;
--color-gray-600: lab(35.6337% -1.58697 -10.8425);
--tw-mask-top-to-color: transparent;
--tw-border-style: solid;
--color-red-600: lab(48.4493% 77.4328 61.5452);
--color-black: #000;
--c15t-border-hover: rgba(0,0,0,.08);
--tw-mask-radial-from-color: black;
--tw-ring-offset-color: #fff;
--color-red-400: lab(63.7053% 60.745 31.3109);
--color-gray-800: lab(16.1051% -1.18239 -11.7533);
--color-blue-500: lab(54.1736% 13.3369 -74.6839);
--tw-mask-left-to-color: transparent;
--c15t-primary-hover: color-mix(in oklab, #0c8c5e 85%, transparent);
--color-gray-200: lab(91.6229% -.159115 -2.26791);
```

### Spacing

```css
--twoslash-code-font-size: 1em;
--twoslash-text-size: .8rem;
--accordion-padding: var(--c15t-space-md);
--accordion-icon-size: 1.25rem;
--button-font-size: var(--c15t-font-size-sm);
--collapsible-gap: 0;
--legal-links-gap: .75rem;
--legal-links-font-size: .875rem;
--preference-item-gap: .75rem;
--preference-item-leading-gap: .5rem;
--consent-banner-text-size-adjust: 100%;
--consent-banner-tab-size: 4;
--consent-dialog-title-font-size: var(--c15t-font-size-sm);
--consent-dialog-title-letter-spacing: -.025em;
--consent-dialog-description-font-size: var(--c15t-font-size-base);
--consent-dialog-footer-gap: var(--c15t-space-sm);
--consent-dialog-footer-font-size: 14px;
--consent-dialog-branding-font-size: var(--c15t-font-size-base);
--consent-dialog-branding-letter-spacing: -.01em;
--consent-dialog-header-gap: var(--c15t-space-xs);
--consent-dialog-content-gap: var(--c15t-space-md);
--consent-dialog-footer-padding-y: var(--c15t-space-md);
--consent-dialog-branding-gap: .5rem;
--consent-dialog-branding-label-size: .6875rem;
--consent-widget-padding: 0;
--consent-widget-gap: var(--c15t-space-xs);
--consent-widget-footer-padding: var(--c15t-space-lg)0 0 0;
--consent-widget-title-size: var(--c15t-font-size-sm);
--consent-widget-accordion-padding: var(--c15t-space-sm);
--consent-widget-accordion-stack-gap: .75rem;
--consent-widget-accordion-icon-size: 1.25rem;
--frame-placeholder-gap: 1rem;
--grid-gap: 16px;
--grid-margin: 16px;
--c15t-space-md: 1rem;
--tw-space-y-reverse: 0;
--tw-mask-radial-size: farthest-corner;
--c15t-font-size-sm: 0.875rem;
--c15t-font-size-base: 1rem;
--spacing: .25rem;
--c15t-space-xs: 0.25rem;
--c15t-space-lg: 1.5rem;
--c15t-font-size-lg: 1.125rem;
--c15t-space-xl: 2rem;
--c15t-space-sm: 0.5rem;
```

### Typography

```css
--twoslash-code-font: inherit;
--button-text: var(--c15t-text);
--button-text-dark: var(--c15t-text);
--button-text-hover: var(--c15t-text);
--button-text-hover-dark: var(--c15t-text);
--button-font: var(--c15t-font-family);
--button-font-weight: var(--c15t-font-weight-medium);
--button-line-height: var(--c15t-line-height-tight);
--legal-links-text-decoration: none;
--legal-links-text-decoration-hover: underline;
--consent-banner-font-family: var(--c15t-font-family);
--consent-banner-line-height: var(--c15t-line-height-normal);
--consent-dialog-font-family: var(--c15t-font-family);
--consent-dialog-line-height: var(--c15t-line-height-tight);
--consent-dialog-title-font-weight: var(--c15t-font-weight-semibold);
--consent-dialog-description-font-weight: var(--c15t-font-weight-normal);
--consent-dialog-description-line-height: var(--c15t-line-height-normal);
--consent-dialog-branding-font-weight: var(--c15t-font-weight-medium);
--consent-dialog-branding-line-height: var(--c15t-line-height-relaxed);
--consent-widget-title-line-height: var(--c15t-line-height-tight);
--consent-widget-title-tracking: -.006em;
--consent-widget-font-family: system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
--consent-widget-line-height: 1.15;
--frame-font-family: system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
--frame-line-height: 1.5;
--text-base--line-height: calc(1.5/1);
--c15t-font-weight-normal: 400;
--text-sm: .875rem;
--c15t-line-height-tight: 1.25;
--text-lg: 1.125rem;
--c15t-line-height-normal: 1.5;
--default-font-family: ;
--text-sm--line-height: calc(1.25/.875);
--text-3xl--line-height: calc(2.25/1.875);
--text-3xl: 1.875rem;
--text-xs: .75rem;
--tracking-widest: .1em;
--font-weight-medium: 500;
--font-weight-normal: 400;
--text-base: 1rem;
--default-mono-font-family: ;
--c15t-font-weight-medium: 500;
--c15t-font-weight-semibold: 600;
--font-weight-bold: 700;
--c15t-text: #121715;
--text-xs--line-height: calc(1/.75);
--text-xl: 1.25rem;
--leading-relaxed: 1.625;
--text-2xl--line-height: calc(2/1.5);
--text-xl--line-height: calc(1.75/1.25);
--leading-tight: 1.25;
--tracking-tight: -.025em;
--text-2xl: 1.5rem;
--text-lg--line-height: calc(1.75/1.125);
--c15t-font-family: ;
--c15t-line-height-relaxed: 1.75;
--tracking-wide: .025em;
--font-weight-semibold: 600;
```

### Shadows

```css
--twoslash-popup-shadow: rgba(0,0,0,.08) 0px 1px 4px;
--accordion-focus-shadow: 0 0 0 2px var(--accordion-focus-ring);
--accordion-focus-shadow-dark: 0 0 0 2px var(--accordion-focus-ring-dark);
--button-shadow: var(--c15t-shadow-sm);
--button-shadow-dark: var(--c15t-shadow-sm);
--button-shadow-neutral-focus: 0 0 0 2px var(--button-focus-ring);
--button-shadow-neutral-focus-dark: 0 0 0 2px var(--button-focus-ring-dark);
--button-shadow-neutral: var(--button-shadow),inset 0 0 0 1px var(--button-neutral-soft);
--button-shadow-neutral-dark: var(--button-shadow-dark),inset 0 0 0 1px var(--button-neutral-soft-dark);
--button-shadow-neutral-hover: none;
--button-shadow-neutral-hover-dark: none;
--consent-banner-shadow: var(--c15t-shadow-lg);
--consent-banner-shadow-dark: var(--c15t-shadow-lg);
--consent-widget-accordion-focus-shadow: 0 0 0 2px #476cff;
--consent-widget-accordion-focus-shadow-dark: 0 0 0 2px #2547d0;
--frame-placeholder-shadow: 0 16px 32px -12px rgba(14,18,27,.1);
--frame-placeholder-shadow-dark: 0 16px 32px -12px rgba(14,18,27,.1);
--tw-inset-shadow: 0 0 transparent;
--tw-shadow-alpha: 100%;
--tw-drop-shadow-alpha: 100%;
--tw-shadow: 0 0 transparent;
--tw-inset-shadow-alpha: 100%;
--c15t-shadow-sm: 0 1px 2px hsla(0, 0%, 0%, 0.05);
--c15t-shadow-lg: 0 8px 24px hsla(0, 0%, 0%, 0.12);
--c15t-shadow-md: 0 4px 12px hsla(0, 0%, 0%, 0.08);
```

### Radii

```css
--accordion-radius: var(--c15t-radius-md);
--consent-widget-radius: 0;
--consent-widget-accordion-radius: var(--c15t-radius-md);
--radius-4xl: 2rem;
--c15t-radius-sm: 4px;
--radius-sm: .25rem;
--radius-md: .375rem;
--radius-lg: .5rem;
--c15t-radius-lg: 12px;
--c15t-radius-md: 8px;
--c15t-radius-full: 9999px;
--radius-2xl: 1rem;
--radius-3xl: 1.5rem;
--radius-xl: .75rem;
```

### Other

```css
--twoslash-docs-tag-style: italic;
--accordion-duration: var(--c15t-duration-normal);
--accordion-ease: var(--c15t-easing);
--accordion-background-hover: var(--c15t-surface-hover);
--accordion-background-hover-dark: var(--c15t-surface-hover);
--button-neutral: var(--c15t-text-muted);
--button-neutral-dark: var(--c15t-text-muted);
--button-neutral-hover: var(--c15t-text);
--button-neutral-hover-dark: var(--c15t-text);
--button-neutral-soft: var(--c15t-surface-hover);
--button-neutral-soft-dark: var(--c15t-surface-hover);
--button-hover-overlay: var(--c15t-surface-hover);
--button-hover-overlay-dark: var(--c15t-surface-hover);
--button-neutral-hover-tint: var(--c15t-text);
--button-transition: opacity var(--c15t-duration-fast)var(--c15t-easing),transform var(--c15t-duration-fast)var(--c15t-easing);
--button-hover-transition-full: background-color var(--c15t-duration-fast)var(--c15t-easing),box-shadow var(--c15t-duration-fast)var(--c15t-easing),color var(--c15t-duration-fast)var(--c15t-easing);
--button-cursor: pointer;
--collapsible-duration: var(--c15t-duration-normal);
--collapsible-ease: var(--c15t-easing);
--legal-links-transition: text-decoration .2s ease;
--legal-links-outline: 2px solid currentColor;
--legal-links-outline-offset: 2px;
--preference-item-duration: var(--c15t-duration-normal);
--preference-item-ease: var(--c15t-easing);
--tabs-list-background: var(--c15t-surface);
--tabs-trigger-active-background: var(--c15t-surface-hover);
--consent-banner-max-width: 440px;
--consent-banner-branding-tag-offset: 2rem;
--consent-banner-animation-duration: var(--c15t-duration-fast);
--consent-banner-animation-timing: var(--c15t-easing);
--consent-banner-entry-animation: c15t-ui-enter-EoZFn var(--c15t-duration-fast)var(--c15t-easing);
--consent-banner-exit-animation: c15t-ui-exit-Z4gI_ var(--c15t-duration-fast)var(--c15t-easing);
--consent-dialog-max-width: 28rem;
--consent-dialog-height: 100%;
--consent-dialog-z-index: 1000000000;
--consent-dialog-overlay-z-index: 1000000000;
--consent-dialog-animation-duration: var(--c15t-duration-normal);
--consent-dialog-animation-timing: ease-out;
--consent-dialog-branding-icon-height: 1.25rem;
--consent-dialog-branding-icon-width: auto;
--consent-widget-max-width: 32rem;
--consent-widget-z-index: 50;
--consent-widget-title-weight: var(--c15t-font-weight-semibold);
--consent-widget-entry-animation: c15t-ui-enter-oqaf_ var(--c15t-duration-fast)var(--c15t-easing);
--consent-widget-exit-animation: c15t-ui-exit-Yh5ig var(--c15t-duration-fast)var(--c15t-easing);
--consent-widget-accordion-duration: var(--c15t-duration-normal);
--consent-widget-accordion-ease: var(--c15t-easing);
--consent-widget-accordion-background-hover: var(--c15t-surface-hover);
--consent-widget-accordion-background-hover-dark: var(--c15t-surface-hover);
--frame-placeholder-opacity: 0;
--frame-placeholder-animation: c15t-ui-fadeIn-moBzd .15s cubic-bezier(.165,.84,.44,1)forwards;
--grid-columns: 4;
--grid-max-width: 1024px;
--ease-out-soft: cubic-bezier(.22,1,.36,1);
--ease-out-expo: cubic-bezier(.16,1,.3,1);
--ease-in-out-smooth: cubic-bezier(.4,0,.2,1);
--blur-lg: 16px;
--tw-mask-conic: linear-gradient(#fff,#fff);
--tw-mask-top-to-position: 100%;
--tw-mask-right: linear-gradient(#fff,#fff);
--tw-gradient-to-position: 100%;
--c15t-duration-slow: 200ms;
--tw-scale-y: 1;
--tw-mask-radial: linear-gradient(#fff,#fff);
--c15t-easing: cubic-bezier(0.4, 0, 0.2, 1);
--tw-mask-right-from-position: 0%;
--container-xl: 36rem;
--c15t-duration-fast: 280ms;
--c15t-overlay: color-mix(in oklab, #0a0b0f 50%, transparent);
--tw-divide-x-reverse: 0;
--tw-gradient-from-position: 0%;
--tw-mask-radial-position: center;
--tw-mask-right-to-position: 100%;
--blur-md: 12px;
--container-4xl: 56rem;
--tw-mask-top-from-position: 0%;
--c15t-switch-track: lab(90.9058% .404745 1.13158);
--c15t-easing-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
--container-md: 28rem;
--tw-mask-left-to-position: 100%;
--aspect-video: 16/9;
--c15t-surface-hover: lab(2.42579% -.165291 -.470081/.03);
--tw-outline-style: solid;
--tw-gradient-from: rgba(0, 0, 0, 0);
--tw-gradient-to: rgba(0, 0, 0, 0);
--blur-2xl: 40px;
--tw-gradient-via-position: 50%;
--default-transition-duration: .15s;
--c15t-switch-thumb: #ffffff;
--ease-out-strong: cubic-bezier(.23,1,.32,1);
--default-transition-timing-function: cubic-bezier(.4,0,.2,1);
--tw-translate-z: 0;
--tw-gradient-via: rgba(0, 0, 0, 0);
--container-3xl: 48rem;
--tw-translate-y: 0;
--ease-out: cubic-bezier(0,0,.2,1);
--tw-content: "";
--tw-mask-top: linear-gradient(#fff,#fff);
--ease-in-out-strong: cubic-bezier(.77,0,.175,1);
--tw-translate-x: 0;
--tw-mask-radial-shape: ellipse;
--tw-mask-linear: linear-gradient(#fff,#fff);
--c15t-surface: #fefdfb;
--tw-mask-left-from-position: 0%;
--tw-mask-bottom-to-position: 100%;
--tw-scale-z: 1;
--c15t-switch-track-active: #0c8c5e;
--ease-in-out: cubic-bezier(.4,0,.2,1);
--tw-mask-radial-from-position: 0%;
--c15t-duration-normal: 150ms;
--container-5xl: 64rem;
--tw-mask-radial-to-position: 100%;
--animate-spin: spin 1s linear infinite;
--tw-mask-left: linear-gradient(#fff,#fff);
--tw-mask-bottom-from-position: 0%;
--tw-divide-y-reverse: 0;
--c15t-easing-out: cubic-bezier(0.215, 0.61, 0.355, 1);
--tw-scale-x: 1;
--tw-mask-bottom: linear-gradient(#fff,#fff);
--blur-sm: 8px;
```

### Dependencies

```css
0: --twoslash-warn-color;
0: --twoslash-warn-bg;
0: --c15t-space-md;
0: --c15t-radius-md;
0: --c15t-duration-normal;
0: --c15t-easing;
0: --c15t-surface;
0: --c15t-surface;
0: --c15t-surface-hover;
0: --c15t-surface-hover;
0: --c15t-border;
0: --c15t-border;
0: --c15t-text;
0: --c15t-text;
0: --c15t-text-muted;
0: --c15t-text-muted;
0: --c15t-text-muted;
0: --c15t-text-muted;
0: --c15t-text-muted;
0: --c15t-text-muted;
0: --c15t-primary;
0: --c15t-primary;
0: --accordion-focus-ring;
0: --accordion-focus-ring-dark;
0: --c15t-primary;
0: --c15t-primary;
0: --c15t-primary-hover;
0: --c15t-primary-hover;
0: --c15t-text-muted;
0: --c15t-text-muted;
0: --c15t-text;
0: --c15t-text;
0: --c15t-surface-hover;
0: --c15t-surface-hover;
0: --c15t-primary;
0: --c15t-primary;
0: --c15t-text;
0: --c15t-text;
0: --c15t-text;
0: --c15t-text;
0: --c15t-surface;
0: --c15t-surface;
0: --c15t-border;
0: --c15t-border;
0: --c15t-surface-hover;
0: --c15t-surface-hover;
0: --c15t-primary;
0: --c15t-text;
0: --c15t-font-family;
0: --c15t-border;
0: --c15t-radius-md;
0: --c15t-font-weight-medium;
0: --c15t-font-size-sm;
0: --c15t-line-height-tight;
0: --c15t-duration-fast;
1: --c15t-easing;
2: --c15t-duration-fast;
3: --c15t-easing;
0: --c15t-duration-fast;
1: --c15t-easing;
0: --c15t-duration-fast;
1: --c15t-easing;
2: --c15t-duration-fast;
3: --c15t-easing;
4: --c15t-duration-fast;
5: --c15t-easing;
0: --c15t-shadow-sm;
0: --c15t-shadow-sm;
0: --button-focus-ring;
0: --button-focus-ring;
0: --button-focus-ring-dark;
0: --button-focus-ring-dark;
0: --button-shadow;
1: --button-primary;
0: --button-shadow-dark;
1: --button-primary-dark;
0: --button-shadow;
1: --button-neutral-soft;
0: --button-shadow-dark;
1: --button-neutral-soft-dark;
0: --c15t-duration-normal;
0: --c15t-easing;
0: --c15t-text-muted;
0: --c15t-text-muted;
0: --c15t-duration-normal;
0: --c15t-easing;
0: --c15t-primary;
0: --c15t-surface;
0: --c15t-border;
0: --c15t-text-muted;
0: --c15t-text;
0: --c15t-surface-hover;
0: --c15t-primary;
0: --c15t-font-family;
0: --c15t-line-height-normal;
0: --c15t-radius-sm;
0: --c15t-radius-lg;
0: --c15t-duration-fast;
0: --c15t-easing;
0: --c15t-duration-fast;
1: --c15t-easing;
0: --c15t-duration-fast;
1: --c15t-easing;
0: --c15t-shadow-lg;
0: --c15t-shadow-lg;
0: --c15t-surface;
0: --c15t-surface;
0: --c15t-surface-hover;
0: --c15t-surface-hover;
0: --c15t-text;
0: --c15t-text;
0: --c15t-border;
0: --c15t-border;
0: --c15t-text;
0: --c15t-text;
0: --c15t-text-muted;
0: --c15t-text-muted;
0: --c15t-overlay;
0: --c15t-overlay;
0: --c15t-font-family;
0: --c15t-line-height-tight;
0: --c15t-font-size-sm;
0: --c15t-font-weight-semibold;
0: --c15t-font-size-base;
0: --c15t-font-weight-normal;
0: --c15t-line-height-normal;
0: --c15t-space-sm;
0: --c15t-font-size-base;
0: --c15t-font-weight-medium;
0: --c15t-line-height-relaxed;
0: --c15t-border;
0: --c15t-border;
0: --c15t-primary;
0: --c15t-primary;
0: --c15t-text;
0: --c15t-text;
0: --c15t-border;
0: --c15t-border;
0: --c15t-surface;
0: --c15t-surface;
0: --c15t-text;
0: --c15t-text;
0: --c15t-text-muted;
0: --c15t-text-muted;
0: --c15t-overlay;
0: --c15t-overlay;
0: --c15t-space-lg;
0: --c15t-space-md;
0: --c15t-space-xs;
0: --c15t-space-xs;
0: --c15t-space-md;
0: --c15t-space-md;
0: --c15t-radius-lg;
0: --c15t-duration-normal;
0: --c15t-surface;
0: --c15t-surface;
0: --c15t-border;
0: --c15t-border;
0: --c15t-text;
0: --c15t-text;
0: --c15t-text-muted;
0: --c15t-text-muted;
0: --c15t-text;
0: --c15t-text;
0: --c15t-primary;
0: --c15t-space-xs;
0: --c15t-space-lg;
0: --c15t-font-size-sm;
0: --c15t-line-height-tight;
0: --c15t-font-weight-semibold;
0: --c15t-duration-fast;
1: --c15t-easing;
0: --c15t-duration-fast;
1: --c15t-easing;
0: --c15t-space-sm;
0: --c15t-radius-md;
0: --c15t-duration-normal;
0: --c15t-easing;
0: --c15t-surface;
0: --c15t-surface;
0: --c15t-surface-hover;
0: --c15t-surface-hover;
0: --c15t-border;
0: --c15t-border;
0: --c15t-text;
0: --c15t-text;
0: --c15t-text-muted;
0: --c15t-text-muted;
```

### Semantic

```css
--color-green-new: #16a34a;
--color-midnight-green: #0e1d18;
--color-new-green: #003723;
--color-gradient-green-1: #18e299;
--color-gradient-green-2: #58e97f;
--color-gradient-green-3: #6dee6b;
--color-gradient-green-4: #81f25a;
--color-gradient-green-5: #95f648;
--color-gradient-green-6: #a8fb36;
--color-green-800: lab(37.4616% -36.7971 22.9692);
--twoslash-warn-color: #c37d0d;
--twoslash-warn-bg: rgba(195,125,13,.125);
--twoslash-tag-warn-color: var(--twoslash-warn-color);
--twoslash-tag-warn-bg: var(--twoslash-warn-bg);
--twoslash-error-color: #d45656;
--twoslash-error-bg: rgba(212,86,86,.125);
--color-red-600: lab(48.4493% 77.4328 61.5452);
--color-red-400: lab(63.7053% 60.745 31.3109);
--color-blue-2: #44aeff;
--color-blue-dark: #2992e3;
--color-blue-500: lab(54.1736% 13.3369 -74.6839);
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| md | 768px | min-width |
| lg | 1024px | min-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0, 0, 0.2, 1)`, `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0.23, 1, 0.32, 1)`, `cubic-bezier(0.22, 1, 0.36, 1)`, `cubic-bezier(0, 0, 0, 1)`, `cubic-bezier(0.34, 1.56, 0.64, 1)`

**Durations:** `0.15s`, `0.3s`, `0.2s`, `0.1s`, `0.7s`, `0.5s`, `0.055s`, `0.11s`, `0.165s`, `0.22s`, `0.28s`

### Common Transitions

```css
transition: all;
transition: opacity 0.15s cubic-bezier(0, 0, 0.2, 1);
transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: rotate 0.2s cubic-bezier(0.23, 1, 0.32, 1), color 0.2s cubic-bezier(0.23, 1, 0.32, 1);
transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1), color 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.1s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.1s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.15s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.15s cubic-bezier(0.23, 1, 0.32, 1);
transition: color 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.1s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.1s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.1s cubic-bezier(0.4, 0, 0.2, 1), -webkit-text-decoration-color 0.1s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.1s cubic-bezier(0.4, 0, 0.2, 1), fill 0.1s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.1s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.1s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.1s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.1s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), translate 0.7s cubic-bezier(0.22, 1, 0.36, 1), scale 0.7s cubic-bezier(0.22, 1, 0.36, 1), rotate 0.7s cubic-bezier(0.22, 1, 0.36, 1);
transition: transform 0.15s cubic-bezier(0, 0, 0.2, 1), translate 0.15s cubic-bezier(0, 0, 0.2, 1);
transition: color 0.1s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.1s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.1s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations

**enterFromRight**
```css
@keyframes enterFromRight {
  0% { opacity: 0; transform: translate(200px); }
  100% { opacity: 1; transform: translate(0px); }
}
```

**enterFromLeft**
```css
@keyframes enterFromLeft {
  0% { opacity: 0; transform: translate(-200px); }
  100% { opacity: 1; transform: translate(0px); }
}
```

**exitToRight**
```css
@keyframes exitToRight {
  0% { opacity: 1; transform: translate(0px); }
  100% { opacity: 0; transform: translate(200px); }
}
```

**exitToLeft**
```css
@keyframes exitToLeft {
  0% { opacity: 1; transform: translate(0px); }
  100% { opacity: 0; transform: translate(-200px); }
}
```

**scaleIn**
```css
@keyframes scaleIn {
  0% { opacity: 0; transform: rotateX(-10deg) scale(0.96); }
  100% { opacity: 1; transform: rotateX(0deg) scale(1); }
}
```

**scaleOut**
```css
@keyframes scaleOut {
  0% { opacity: 1; transform: rotateX(0deg) scale(1); }
  100% { opacity: 0; transform: rotateX(-10deg) scale(0.96); }
}
```

**navContentIn**
```css
@keyframes navContentIn {
  0% { opacity: 0; transform: translateY(6px); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

**loader-spin**
```css
@keyframes loader-spin {
  100% { transform: rotate(1turn); }
}
```

**digit-in**
```css
@keyframes digit-in {
  0% { opacity: 0; transform: translateY(100%); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

**stats-scroll**
```css
@keyframes stats-scroll {
  0% { transform: translate(0px); }
  100% { transform: translate(-50%); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (16 instances)

```css
.buttons {
  background-color: rgb(254, 253, 251);
  color: rgb(18, 23, 21);
  font-size: 16px;
  font-weight: 400;
  padding-top: 12px;
  padding-right: 12px;
  border-radius: 4px;
}
```

### Cards (22 instances)

```css
.cards {
  background-color: rgb(250, 248, 245);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 169px 47px 0px, rgba(0, 0, 0, 0.01) 0px 108px 43px 0px, rgba(0, 0, 0, 0.02) 0px 61px 37px 0px, rgba(0, 0, 0, 0.03) 0px 27px 27px 0px, rgba(0, 0, 0, 0.04) 0px 7px 15px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (69 instances)

```css
.links {
  color: rgb(0, 0, 0);
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
  position: relative;
}
```

### Footer (4 instances)

```css
.footer {
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (1 instances)

```css
.modals {
  background-color: rgb(254, 253, 251);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 169px 47px 0px, rgba(0, 0, 0, 0.01) 0px 108px 43px 0px, rgba(0, 0, 0, 0.02) 0px 61px 37px 0px, rgba(0, 0, 0, 0.03) 0px 27px 27px 0px, rgba(0, 0, 0, 0.04) 0px 7px 15px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Dropdowns (1 instances)

```css
.dropdowns {
  border-radius: 0px;
  border-color: rgb(0, 0, 0);
  padding-top: 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 12 instances, 3 variants

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: lab(2.42579 -0.165291 -0.470081);
  padding: 4px 10px 4px 10px;
  border-radius: 0px;
  border: 0px solid lab(2.42579 -0.165291 -0.470081);
  font-size: 14px;
  font-weight: 500;
```

**Variant 2** (7 instances)

```css
  background: rgb(254, 253, 251);
  color: rgb(18, 23, 21);
  padding: 12px 12px 12px 12px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 16px;
  font-weight: 400;
```

**Variant 3** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Card — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgb(250, 248, 245);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  font-size: 16px;
  font-weight: 400;
```

### Card — 8 instances, 1 variant

**Variant 1** (8 instances)

```css
  background: oklab(0 0 0 / 0.02);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Card — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgb(250, 248, 245);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  font-size: 16px;
  font-weight: 400;
```

### Card — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(254, 253, 251);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 12px;
  border: 0px solid rgba(0, 0, 0, 0.06);
  font-size: 16px;
  font-weight: 400;
```

### Button — 3 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgb(254, 253, 251);
  color: rgb(18, 23, 21);
  padding: 12px 16px 12px 16px;
  border-radius: 4px;
  border: 1px solid oklab(0 0 0 / 0.05);
  font-size: 14px;
  font-weight: 500;
```

**Variant 2** (1 instance)

```css
  background: lab(2.42579 -0.165291 -0.470081);
  color: lab(100 0 0);
  padding: 12px 16px 12px 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 14px;
  font-weight: 500;
```

## Layout System

**33 grid containers** and **1043 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1920px | 0px |
| 1024px | 0px |
| 100% | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 24-column | 25x |
| 3-column | 6x |
| 4-column | 1x |
| 5-column | 1x |

### Grid Templates

```css
grid-template-columns: 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px;
gap: normal 16px;
grid-template-columns: 319.328px 319.328px 319.344px;
gap: 16px;
grid-template-columns: 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3438px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px;
gap: 0px 16px;
grid-template-columns: 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px 27.25px;
gap: normal 16px;
grid-template-columns: 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px 27.3281px;
gap: normal 16px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 859x |
| column/nowrap | 183x |
| row/wrap | 1x |

**Gap values:** `0px 16px`, `12px`, `16px`, `20px`, `24px`, `28px`, `32px`, `40px`, `40px 16px`, `48px`, `4px`, `6px`, `8px`, `normal 16px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 7 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#121715` | `#fefdfb` | 17.82:1 | AAA |

## Design System Score

**Overall: 92/100 (Grade: A)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 80/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 118 !important rules — prefer specificity over overrides
- 3329 duplicate CSS declarations

## Gradients

**4 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 106deg | 4 | bold |
| linear | — | 2 | brand |
| linear | to right | 2 | brand |
| linear | to right | 2 | brand |

```css
background: linear-gradient(106deg, rgba(68, 174, 255, 0.5) 0%, rgba(24, 226, 153, 0.5) 35%, rgba(186, 255, 36, 0.5) 65%, rgba(24, 226, 153, 0.5) 100%);
background: linear-gradient(rgba(0, 0, 0, 0) 55%, lab(100 0 0) 96%);
background: linear-gradient(to right, lab(100 0 0) 0%, rgba(0, 0, 0, 0) 71%);
background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, lab(100 0 0) 71%);
```

## Z-Index Map

**8 unique z-index values** across 4 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 999999998,999999998 | div.c.1.5.t.-.u.i.-.r.o.o.t.-.h.E.9.K.z. .c.1.5.t.-.u.i.-.b.o.t.t.o.m.L.e.f.t.-.C.b.y.q.H. .c.1.5.t.-.u.i.-.b.a.n.n.e.r.V.i.s.i.b.l.e.-.p.Y.Y.Y.9 |
| dropdown | 100,110 | header.s.t.i.c.k.y. .t.o.p.-.0. .z.-.[.1.0.0.]. .h.i.d.d.e.n. .w.-.f.u.l.l. .b.o.r.d.e.r.-.b. .b.o.r.d.e.r.-.b.o.r.d.e.r.-.l.i.n.e. .b.g.-.b.a.c.k.g.r.o.u.n.d.-.m.a.i.n. .l.g.:.b.l.o.c.k, header.s.t.i.c.k.y. .t.o.p.-.0. .z.-.[.1.0.0.]. .w.-.f.u.l.l. .b.g.-.n.e.u.t.r.a.l.-.0. .d.a.r.k.:.b.g.-.b.a.c.k.g.r.o.u.n.d.-.m.a.i.n. .l.g.:.h.i.d.d.e.n, div.r.e.l.a.t.i.v.e. .z.-.[.1.1.0.]. .f.l.e.x. .h.-.1.6. .i.t.e.m.s.-.c.e.n.t.e.r. .j.u.s.t.i.f.y.-.b.e.t.w.e.e.n. .b.o.r.d.e.r.-.b. .b.o.r.d.e.r.-.b.o.r.d.e.r.-.l.i.n.e. .b.g.-.n.e.u.t.r.a.l.-.0. .p.x.-.5. .d.a.r.k.:.b.g.-.b.a.c.k.g.r.o.u.n.d.-.m.a.i.n |
| sticky | 10,50 | button.g.r.o.u.p. .w.-.m.a.x. .o.u.t.l.i.n.e.-.o.f.f.s.e.t.-.2. .f.o.c.u.s.-.v.i.s.i.b.l.e.:.o.u.t.l.i.n.e.-.2. .f.o.c.u.s.-.v.i.s.i.b.l.e.:.o.u.t.l.i.n.e.-.b.r.a.n.d. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .p.y.-.1. .c.u.r.s.o.r.-.p.o.i.n.t.e.r. .f.o.n.t.-.m.e.d.i.u.m. .t.r.a.n.s.i.t.i.o.n.-.[.b.a.c.k.g.r.o.u.n.d.-.c.o.l.o.r.]. .d.u.r.a.t.i.o.n.-.3.0.0. .a.f.t.e.r.:.c.o.n.t.e.n.t.-.[.'.'.]. .a.f.t.e.r.:.a.b.s.o.l.u.t.e. .a.f.t.e.r.:.i.n.s.e.t.-.[.-.2.p.x.]. .r.e.l.a.t.i.v.e. .z.-.1.0. .f.l.e.x. .h.-.1.6. .i.t.e.m.s.-.c.e.n.t.e.r. .g.a.p.-.1. .r.o.u.n.d.e.d.-.n.o.n.e. .b.g.-.t.r.a.n.s.p.a.r.e.n.t. .p.x.-.2...5. .t.e.x.t.-.s.m./.4. .t.e.x.t.-.t.e.x.t.-.m.a.i.n. .o.u.t.l.i.n.e.-.n.o.n.e. .h.o.v.e.r.:.b.g.-.t.r.a.n.s.p.a.r.e.n.t. .d.a.t.a.-.[.s.t.a.t.e.=.o.p.e.n.].:.b.g.-.t.r.a.n.s.p.a.r.e.n.t. .b.e.f.o.r.e.:.p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .b.e.f.o.r.e.:.a.b.s.o.l.u.t.e. .b.e.f.o.r.e.:.i.n.s.e.t.-.x.-.0. .b.e.f.o.r.e.:.t.o.p.-.1./.2. .b.e.f.o.r.e.:.h.-.8. .b.e.f.o.r.e.:.-.t.r.a.n.s.l.a.t.e.-.y.-.1./.2. .b.e.f.o.r.e.:.r.o.u.n.d.e.d. .b.e.f.o.r.e.:.c.o.n.t.e.n.t.-.[.'.'.]. .f.o.c.u.s.-.v.i.s.i.b.l.e.:.b.e.f.o.r.e.:.o.u.t.l.i.n.e.-.2. .f.o.c.u.s.-.v.i.s.i.b.l.e.:.b.e.f.o.r.e.:.o.u.t.l.i.n.e.-.b.r.a.n.d, button.g.r.o.u.p. .w.-.m.a.x. .o.u.t.l.i.n.e.-.o.f.f.s.e.t.-.2. .f.o.c.u.s.-.v.i.s.i.b.l.e.:.o.u.t.l.i.n.e.-.2. .f.o.c.u.s.-.v.i.s.i.b.l.e.:.o.u.t.l.i.n.e.-.b.r.a.n.d. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .p.y.-.1. .c.u.r.s.o.r.-.p.o.i.n.t.e.r. .f.o.n.t.-.m.e.d.i.u.m. .t.r.a.n.s.i.t.i.o.n.-.[.b.a.c.k.g.r.o.u.n.d.-.c.o.l.o.r.]. .d.u.r.a.t.i.o.n.-.3.0.0. .a.f.t.e.r.:.c.o.n.t.e.n.t.-.[.'.'.]. .a.f.t.e.r.:.a.b.s.o.l.u.t.e. .a.f.t.e.r.:.i.n.s.e.t.-.[.-.2.p.x.]. .r.e.l.a.t.i.v.e. .z.-.1.0. .f.l.e.x. .h.-.1.6. .i.t.e.m.s.-.c.e.n.t.e.r. .g.a.p.-.1. .r.o.u.n.d.e.d.-.n.o.n.e. .b.g.-.t.r.a.n.s.p.a.r.e.n.t. .p.x.-.2...5. .t.e.x.t.-.s.m./.4. .t.e.x.t.-.t.e.x.t.-.m.a.i.n. .o.u.t.l.i.n.e.-.n.o.n.e. .h.o.v.e.r.:.b.g.-.t.r.a.n.s.p.a.r.e.n.t. .d.a.t.a.-.[.s.t.a.t.e.=.o.p.e.n.].:.b.g.-.t.r.a.n.s.p.a.r.e.n.t. .b.e.f.o.r.e.:.p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .b.e.f.o.r.e.:.a.b.s.o.l.u.t.e. .b.e.f.o.r.e.:.i.n.s.e.t.-.x.-.0. .b.e.f.o.r.e.:.t.o.p.-.1./.2. .b.e.f.o.r.e.:.h.-.8. .b.e.f.o.r.e.:.-.t.r.a.n.s.l.a.t.e.-.y.-.1./.2. .b.e.f.o.r.e.:.r.o.u.n.d.e.d. .b.e.f.o.r.e.:.c.o.n.t.e.n.t.-.[.'.'.]. .f.o.c.u.s.-.v.i.s.i.b.l.e.:.b.e.f.o.r.e.:.o.u.t.l.i.n.e.-.2. .f.o.c.u.s.-.v.i.s.i.b.l.e.:.b.e.f.o.r.e.:.o.u.t.l.i.n.e.-.b.r.a.n.d, button.g.r.o.u.p. .w.-.m.a.x. .o.u.t.l.i.n.e.-.o.f.f.s.e.t.-.2. .f.o.c.u.s.-.v.i.s.i.b.l.e.:.o.u.t.l.i.n.e.-.2. .f.o.c.u.s.-.v.i.s.i.b.l.e.:.o.u.t.l.i.n.e.-.b.r.a.n.d. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .p.y.-.1. .c.u.r.s.o.r.-.p.o.i.n.t.e.r. .f.o.n.t.-.m.e.d.i.u.m. .t.r.a.n.s.i.t.i.o.n.-.[.b.a.c.k.g.r.o.u.n.d.-.c.o.l.o.r.]. .d.u.r.a.t.i.o.n.-.3.0.0. .a.f.t.e.r.:.c.o.n.t.e.n.t.-.[.'.'.]. .a.f.t.e.r.:.a.b.s.o.l.u.t.e. .a.f.t.e.r.:.i.n.s.e.t.-.[.-.2.p.x.]. .r.e.l.a.t.i.v.e. .z.-.1.0. .f.l.e.x. .h.-.1.6. .i.t.e.m.s.-.c.e.n.t.e.r. .g.a.p.-.1. .r.o.u.n.d.e.d.-.n.o.n.e. .b.g.-.t.r.a.n.s.p.a.r.e.n.t. .p.x.-.2...5. .t.e.x.t.-.s.m./.4. .t.e.x.t.-.t.e.x.t.-.m.a.i.n. .o.u.t.l.i.n.e.-.n.o.n.e. .h.o.v.e.r.:.b.g.-.t.r.a.n.s.p.a.r.e.n.t. .d.a.t.a.-.[.s.t.a.t.e.=.o.p.e.n.].:.b.g.-.t.r.a.n.s.p.a.r.e.n.t. .b.e.f.o.r.e.:.p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .b.e.f.o.r.e.:.a.b.s.o.l.u.t.e. .b.e.f.o.r.e.:.i.n.s.e.t.-.x.-.0. .b.e.f.o.r.e.:.t.o.p.-.1./.2. .b.e.f.o.r.e.:.h.-.8. .b.e.f.o.r.e.:.-.t.r.a.n.s.l.a.t.e.-.y.-.1./.2. .b.e.f.o.r.e.:.r.o.u.n.d.e.d. .b.e.f.o.r.e.:.c.o.n.t.e.n.t.-.[.'.'.]. .f.o.c.u.s.-.v.i.s.i.b.l.e.:.b.e.f.o.r.e.:.o.u.t.l.i.n.e.-.2. .f.o.c.u.s.-.v.i.s.i.b.l.e.:.b.e.f.o.r.e.:.o.u.t.l.i.n.e.-.b.r.a.n.d |
| base | -10,0 | div.p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .a.b.s.o.l.u.t.e. .i.n.s.e.t.-.[.1.5.p.x.]. .b.o.t.t.o.m.-.[.7.2.p.x.]. .-.z.-.1.0. .r.o.u.n.d.e.d.-.t.-.x.l. .b.l.u.r.-.[.2.4.p.x.]. .d.a.r.k.:.h.i.d.d.e.n, canvas.p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .a.b.s.o.l.u.t.e. .l.e.f.t.-.0. .t.o.p.-.0. .-.z.-.1.0, canvas.p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .a.b.s.o.l.u.t.e. .l.e.f.t.-.0. .t.o.p.-.0. .-.z.-.1.0 |

**Issues:**
- Very high z-index values: 999999998

## SVG Icons

**22 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| sm | 5 |
| md | 9 |
| xl | 8 |

**Icon colors:** `#18E299`, `#0C8C5E`, `var(--color-text-main)`, `currentColor`, `#4285F4`, `#34A853`, `#FBBC05`, `#EA4335`, `rgb(0, 0, 0)`, `#F1511B`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Geist Mono | self-hosted | 100 900 | normal |
| inter | self-hosted | 400, normal | normal |
| paperMono | self-hosted | 400, normal | normal |
| arizonaFlare | self-hosted | 400, normal | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 15 | objectFit: fill, borderRadius: 0px, shape: square |
| general | 11 | objectFit: cover, borderRadius: 0px, shape: square |
| gallery | 2 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (21x), 16:9 (2x), 5:1 (2x), 3.35:1 (1x), 4.23:1 (1x), 21:9 (1x)

## Motion Language

**Feel:** springy · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `instant` | `55ms` | 55 |
| `xs` | `100ms` | 100 |
| `sm` | `165ms` | 165 |
| `md` | `280ms` | 280 |
| `lg` | `500ms` | 500 |

### Easing Families

- **ease-out** (179 uses) — `cubic-bezier(0, 0, 0.2, 1)`, `cubic-bezier(0.23, 1, 0.32, 1)`, `cubic-bezier(0.22, 1, 0.36, 1)`
- **custom** (103 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`
- **spring** (1 uses) — `cubic-bezier(0.34, 1.56, 0.64, 1)`

### Spring / Overshoot Easings

- `cubic-bezier(0.34, 1.56, 0.64, 1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `stats-scroll` | slide | transform | 1 |
| `signal-ping` | reveal | opacity, transform | 2 |
| `signal-flicker` | fade | opacity | 2 |

## Component Anatomy

### card — 22 instances

**Slots:** media
**Variants:** primary · secondary
**Sizes:** lg · xl

| variant | count | sample label |
|---|---|---|
| default | 13 |  |
| primary | 8 |  |
| secondary | 1 | We value your privacy
This site uses coo |

### button — 15 instances

**Slots:** label, icon
**Variants:** outline · secondary · ghost · primary
**Sizes:** medium · small

| variant | count | sample label |
|---|---|---|
| outline | 6 | Products |
| secondary | 6 |  |
| ghost | 2 | Reject All |
| primary | 1 | Accept All |

## Brand Voice

**Tone:** neutral · **Pronoun:** you-only · **Headings:** Sentence case (balanced)

### Top CTA Verbs

- **products** (1)
- **solutions** (1)
- **resources** (1)
- **reject** (1)
- **accept** (1)
- **customize** (1)

### Button Copy Patterns

- "products" (1×)
- "solutions" (1×)
- "resources" (1×)
- "reject all" (1×)
- "accept all" (1×)
- "customize" (1×)

### Sample Headings

> The knowledge infrastructure agents build on
> Join 20,000+ of the world's most ambitious companies building for agents.
> One platform for your entire knowledge stack.
Agents that keep work moving 24/7.
> Agent-native platform
> Self-updating knowledge
> The knowledge infrastructure agents build on
> Join 20,000+ of the world's most ambitious companies building for agents.
> One platform for your entire knowledge stack.
Agents that keep work moving 24/7.
> Agent-native platform
> Self-updating knowledge

## Page Intent

**Type:** `landing` (confidence 0.31)
**Description:** Self-updating documentation for startups, enterprises, and agents.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): cta → nav → nav → steps → cta → testimonials → steps → nav → content → nav → content → nav → hero → nav → comparison → logo-wall → pricing-table → nav → cta → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | cta | — | 0.75 |
| 1 | nav | — | 0.9 |
| 2 | nav | — | 0.4 |
| 3 | steps | The knowledge infrastructure agents build on | 0.75 |
| 4 | cta | The knowledge infrastructure agents build on | 0.4 |
| 5 | testimonials | Join 20,000+ of the world's most ambitious companies building for agents. | 0.4 |
| 6 | steps | One platform for your entire knowledge stack.
Agents that keep work moving 24/7. | 0.75 |
| 7 | nav | One platform for your entire knowledge stack.
Agents that keep work moving 24/7. | 0.4 |
| 8 | content | Powering businesses of all sizes.
Run your business on a reliable platform that  | 0.3 |
| 9 | nav | Powering businesses of all sizes.
Run your business on a reliable platform that  | 0.4 |
| 10 | content | Built to scale with the agent web.
Built for scale with enterprise-grade reliabi | 0.3 |
| 11 | nav | Built to scale with the agent web.
Built for scale with enterprise-grade reliabi | 0.4 |
| 12 | hero | Enabling the next generation of startups.
Powering a quarter of the last YC batc | 0.4 |
| 13 | nav | Enabling the next generation of startups.
Powering a quarter of the last YC batc | 0.4 |
| 14 | comparison | Trusted by teams building for agents. | 0.7 |
| 15 | logo-wall | Trusted by teams building for agents. | 0.85 |
| 16 | pricing-table | Latest updates | 0.9 |
| 17 | nav | Latest updates | 0.4 |
| 18 | cta | The knowledge platform built for agents | 0.4 |
| 19 | footer | Explore | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.439 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 24px |
| backdrop-filter in use | no |
| Gradients | 4 |

## Imagery Style

**Label:** `flat-illustration` (confidence 0.071)
**Counts:** total 28, svg 6, icon 0, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Component Library

**Detected:** `shadcn/ui` (confidence 0.65)

Evidence:
- shadcn css tokens

Also considered: tailwindcss (0.3)

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `inter` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
