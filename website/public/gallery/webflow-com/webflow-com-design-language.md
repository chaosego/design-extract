# Design Language: Webflow: The agentic web platform for modern businesses

> Extracted from `https://webflow.com` on June 25, 2026
> 3891 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#146ef5` | rgb(20, 110, 245) | hsl(216, 92%, 52%) | 43 |
| Secondary | `#6ca7ff` | rgb(108, 167, 255) | hsl(216, 100%, 71%) | 194 |
| Accent | `#3b82f6` | rgb(59, 130, 246) | hsl(217, 91%, 60%) | 3 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#080808` | hsl(0, 0%, 3%) | 4914 |
| `#ffffff` | hsl(0, 0%, 100%) | 2099 |
| `#5a5a5a` | hsl(0, 0%, 35%) | 517 |
| `#d8d8d8` | hsl(0, 0%, 85%) | 91 |
| `#f0f0f0` | hsl(0, 0%, 94%) | 25 |
| `#1a1a1a` | hsl(0, 0%, 10%) | 17 |
| `#6b7280` | hsl(220, 9%, 46%) | 8 |
| `#292929` | hsl(0, 0%, 16%) | 6 |
| `#464646` | hsl(0, 0%, 27%) | 6 |
| `#808080` | hsl(0, 0%, 50%) | 5 |
| `#171717` | hsl(0, 0%, 9%) | 4 |
| `#363636` | hsl(0, 0%, 21%) | 1 |

### Background Colors

Used on large-area elements: `#ffffff`, `#146ef5`, `#080808`, `#222222`, `#171717`

### Text Colors

Text color palette: `#000000`, `#080808`, `#ffffff`, `#5a5a5a`, `#808080`, `#ffa666`, `#6ca7ff`, `#60ed76`, `#146ef5`, `#1a1a1a`

### Gradients

```css
background-image: linear-gradient(90deg, rgb(255, 255, 255) 30%, rgba(0, 0, 0, 0));
```

```css
background-image: linear-gradient(90deg, rgb(8, 8, 8) 30%, rgba(0, 0, 0, 0));
```

```css
background-image: linear-gradient(rgb(255, 255, 255) 0%, color(srgb 1 1 1 / 0.85) 30%, color(srgb 1 1 1 / 0.4) 65%, color(srgb 1 1 1 / 0.1) 90%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(color(srgb 1 1 1 / 0.6), color(srgb 1 1 1 / 0.33));
```

```css
background-image: linear-gradient(rgb(8, 8, 8), rgb(8, 8, 8));
```

```css
background-image: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255));
```

```css
background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(0, 0, 0, 0.25) 59%, rgba(0, 0, 0, 0.5));
```

```css
background-image: radial-gradient(circle farthest-side at 0% 0%, rgb(202, 177, 255) 5%, rgb(20, 110, 245) 10%, rgb(8, 8, 8) 20%);
```

```css
background-image: linear-gradient(170deg, color(srgb 0.0313726 0.0313726 0.0313726 / 0.7), color(srgb 0.0313726 0.0313726 0.0313726 / 0.05) 75%);
```

```css
background-image: linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(8, 8, 8));
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#080808` | text, border, background | 4914 |
| `#ffffff` | background, text, border | 2099 |
| `#5a5a5a` | text, border, background | 517 |
| `#6ca7ff` | text, border | 194 |
| `#d8d8d8` | border, background | 91 |
| `#ffa666` | text, border | 84 |
| `#146ef5` | background, text, border | 43 |
| `#f0f0f0` | background | 25 |
| `#60ed76` | text, border | 24 |
| `#1a1a1a` | text, border | 17 |
| `#6b7280` | text, border | 8 |
| `#292929` | background | 6 |
| `#464646` | background | 6 |
| `#808080` | text | 5 |
| `#171717` | background | 4 |
| `#3b82f6` | text, border, background | 3 |
| `#363636` | border | 1 |

## Typography

### Font Families

- **WF Visual Sans Variable** — used for all (3400 elements)
- **WFVisualSans-Mono** — used for body (374 elements)
- **Times** — used for body (8 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 74.8571px | 4.6786rem | 600 | 77.8514px | -0.748571px | h1 |
| 52.5714px | 3.2857rem | 600 | 54.6743px | normal | h2, div, svg, path |
| 42.0571px | 2.6286rem | 600 | 43.7394px | normal | a |
| 38.2857px | 2.3929rem | 600 | 45.9429px | normal | div |
| 30.8571px | 1.9286rem | 400 | 43.2px | normal | div, p |
| 30.5714px | 1.9107rem | 500 | 39.7429px | normal | h2, div |
| 28.1143px | 1.7571rem | 400 | 44.9829px | -0.281143px | a |
| 24px | 1.5rem | 400 | 38.4px | normal | div |
| 23.4286px | 1.4643rem | 500 | 30.4571px | normal | h2, h3 |
| 20px | 1.25rem | 500 | 32px | normal | div |
| 19.7143px | 1.2321rem | 500 | 27.6px | normal | h2, br, div, h3 |
| 19.6571px | 1.2286rem | 400 | 29.4857px | normal | div, p |
| 19.4286px | 1.2143rem | 500 | 27.2px | normal | div |
| 16px | 1rem | 400 | normal | normal | html, head, style, iframe |
| 15px | 0.9375rem | 500 | 19.5px | 1.5px | div |

### Heading Scale

```css
h1 { font-size: 74.8571px; font-weight: 600; line-height: 77.8514px; }
h2 { font-size: 52.5714px; font-weight: 600; line-height: 54.6743px; }
h2 { font-size: 30.5714px; font-weight: 500; line-height: 39.7429px; }
h2 { font-size: 23.4286px; font-weight: 500; line-height: 30.4571px; }
h2 { font-size: 19.7143px; font-weight: 500; line-height: 27.6px; }
```

### Body Text

```css
body { font-size: 12px; font-weight: 500; line-height: 12px; }
```

### Font Weights in Use

`400` (3383x), `500` (453x), `600` (53x), `550` (2x)

## Spacing

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-23 | 23px | 1.4375rem |
| spacing-31 | 31px | 1.9375rem |
| spacing-37 | 37px | 2.3125rem |
| spacing-40 | 40px | 2.5rem |
| spacing-46 | 46px | 2.875rem |
| spacing-56 | 56px | 3.5rem |
| spacing-64 | 64px | 4rem |
| spacing-73 | 73px | 4.5625rem |
| spacing-80 | 80px | 5rem |
| spacing-88 | 88px | 5.5rem |
| spacing-91 | 91px | 5.6875rem |
| spacing-99 | 99px | 6.1875rem |
| spacing-111 | 111px | 6.9375rem |
| spacing-184 | 184px | 11.5rem |
| spacing-192 | 192px | 12rem |
| spacing-197 | 197px | 12.3125rem |
| spacing-215 | 215px | 13.4375rem |
| spacing-229 | 229px | 14.3125rem |
| spacing-248 | 248px | 15.5rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 21 |
| md | 6px | 2 |
| full | 50px | 31 |
| full | 1280px | 1 |

## Box Shadows

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 100px inset;
```

**lg** — blur: 24px
```css
box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 24px 0px, rgba(0, 0, 0, 0.08) 0px 1px 4px 0px;
```

**xl** — blur: 24px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 84px 24px 0px, rgba(0, 0, 0, 0.01) 0px 54px 22px 0px, rgba(0, 0, 0, 0.04) 0px 30px 18px 0px, rgba(0, 0, 0, 0.08) 0px 13px 13px 0px, rgba(0, 0, 0, 0.09) 0px 3px 7px 0px;
```

**xl** — blur: 30px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 105px 30px 0px, rgba(0, 0, 0, 0.02) 0px 67px 27px 0px, rgba(0, 0, 0, 0.06) 0px 38px 23px 0px, rgba(0, 0, 0, 0.1) 0px 17px 17px 0px, rgba(0, 0, 0, 0.12) 0px 4px 9px 0px;
```

**xl** — blur: 42px
```css
box-shadow: rgba(0, 0, 0, 0.01) 0px 148px 42px 0px, rgba(0, 0, 0, 0.04) 0px 95px 38px 0px, rgba(0, 0, 0, 0.15) 0px 53px 32px 0px, rgba(0, 0, 0, 0.26) 0px 24px 24px 0px, rgba(0, 0, 0, 0.29) 0px 6px 13px 0px;
```

## CSS Custom Properties

### Colors

```css
--colors--background: var(--_color---neutral--white);
--_color---neutral--black: #080808;
--colors--primary-accent: var(--_color---primary--webflow-blue);
--colors--text: var(--_color---neutral--black);
--colors--border: var(--_color---neutral--gray-200);
--colors--secondary-background: var(--_color---neutral--gray-100);
--_color---secondary--purple: #7a3dff;
--_color---secondary--pink: #ed52cb;
--_components---button--border-radius: .25rem;
--_color---neutral--white: white;
--_color---primary--webflow-blue: #146ef5;
--colors--text-secondary: var(--_color---neutral--gray-600);
--_color---neutral--gray-700: #363636;
--_components---card--border-radius: .5rem;
--_components---card--padding: clamp(1*1rem,((1 - ((1.5 - 1)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((1.5 - 1)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),1.5*1rem);
--_color---neutral--gray-400: #898989;
--_components---input--border-radius: .25rem;
--_color---neutral--gray-100: #f0f0f0;
--colors--primary-accent-text: color-mix(in hsl,var(--colors--primary-accent)92%,var(--colors--text)8%);
--colors--primary-accent-background: color-mix(in hsl,var(--colors--primary-accent)10%,transparent 90%);
--_color---neutral--gray-600: #5a5a5a;
--_color---neutral--gray-800: #222;
--_color---neutral--gray-900: #171717;
--_color---neutral--gray-500: #757575;
--_color---neutral--gray-300: #ababab;
--_color---neutral--gray-200: #d8d8d8;
--_color---secondary--orange: #ff6b00;
--_color---secondary--green: #00d722;
--_color---primary--blue-600: #0055d4;
--_color---secondary--red: #ee1d36;
--_typography---fonts--primary-font: "WF Visual Sans Variable",Arial,sans-serif;
--_color---primary--blue-400: #3b89ff;
--_color---secondary--yellow: #ffae13;
--_color---blue-300: #006acc;
--mkto-embed-color-button-hover: #0055d4;
--mkto-embed-checkbox-border: #d8d8d8;
--swiper-theme-color: #007aff;
--mkto-embed-color-border-hover: #898989;
--mkto-embed-color-button: #146ef5;
--mkto-embed-color-border: #d8d8d8;
--mkto-embed-color-error: #146ef5;
--mkto-embed-color-placeholder: #757575;
--mkto-embed-color-link: #080808;
--mkto-embed-color-text: #080808;
--mkto-embed-color-background: #ffffff;
```

### Spacing

```css
--_typography---paragraph-body--font-size: 1rem;
--_typography---paragraph-body--letter-spacing: 0em;
--_typography---h1--bottom-margin: var(--_layout---spacing--margin-md);
--_typography---h1--font-size: clamp(2.75*1rem,((2.75 - ((5 - 2.75)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((5 - 2.75)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),5*1rem);
--_typography---h1--letter-spacing: -.01em;
--_typography---h2--bottom-margin: var(--_layout---spacing--margin-md);
--_typography---h2--font-size: clamp(2*1rem,((2 - ((3.5 - 2)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((3.5 - 2)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),3.5*1rem);
--_typography---h2--letter-spacing: 0em;
--_typography---h3--bottom-margin: var(--_layout---spacing--margin-sm);
--_typography---h3--font-size: clamp(1.75*1rem,((1.75 - ((2.5 - 1.75)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((2.5 - 1.75)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),2.5*1rem);
--_typography---h3--letter-spacing: 0em;
--_typography---h4--bottom-margin: var(--_layout---spacing--margin-xs);
--_typography---h4--font-size: clamp(1.375*1rem,((1.375 - ((2 - 1.375)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((2 - 1.375)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),2*1rem);
--_typography---h4--letter-spacing: 0em;
--_typography---h5--bottom-margin: var(--_layout---spacing--margin-sm);
--_typography---h5--font-size: clamp(1.25*1rem,((1.25 - ((1.5 - 1.25)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((1.5 - 1.25)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),1.5*1rem);
--_typography---h5--letter-spacing: 0em;
--_typography---h6--bottom-margin: var(--_layout---spacing--margin-xs);
--_typography---h6--font-size: clamp(1.125*1rem,((1.125 - ((1.25 - 1.125)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((1.25 - 1.125)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),1.25*1rem);
--_typography---h6--letter-spacing: 0em;
--_typography---paragraph-body--bottom-margin: var(--_layout---spacing--margin-sm);
--_layout---section-spacing--small: clamp(3*1rem,((3 - ((5 - 3)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((5 - 3)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),5*1rem);
--_layout---spacing--margin-xl: clamp(2.25*1rem,((2.25 - ((3 - 2.25)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((3 - 2.25)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),3*1rem);
--_layout---spacing--margin-md: clamp(1.25*1rem,((1.25 - ((1.5 - 1.25)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((1.5 - 1.25)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),1.5*1rem);
--_layout---section-spacing--medium: clamp(3*1rem,((3 - ((9 - 3)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((9 - 3)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),9*1rem);
--_layout---spacing--margin-sm: clamp(.625*1rem,((.625 - ((1 - .625)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((1 - .625)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),1*1rem);
--_layout---section-spacing--extra-large: clamp(10*1rem,((10 - ((28 - 10)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((28 - 10)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),28*1rem);
--_layout---spacing--margin-lg: clamp(1.75*1rem,((1.75 - ((2 - 1.75)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((2 - 1.75)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),2*1rem);
--_layout---grid--gap-md: var(--_layout---spacing--margin-md);
--_layout---grid--gap-main: var(--_layout---spacing--margin-lg);
--_layout---grid--gap-sm: var(--_layout---spacing--margin-sm);
--_layout---grid--gap-lg: var(--_layout---spacing--margin-xl);
--_layout---grid--gap-xs: var(--_layout---spacing--margin-xs);
--_layout---grid--gap-xl: clamp(2.5*1rem,((2.5 - ((5 - 2.5)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((5 - 2.5)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),5*1rem);
--_components---button--vertical-padding: 1em;
--_components---button--horizontal-padding: 1.5em;
--_components---button--font-size: 1rem;
--_components---button--letter-spacing: -.01em;
--_components---input--bottom-margin: var(--_layout---grid--gap-md);
--_size---0-5rem<deleted|variable-70a8c3ac-c656-f79e-479c-716ec38165c2>: .5rem;
--_components---input--font-size: 1rem;
--_components---input--letter-spacing: 0em;
--_layout---spacing--margin-xs: clamp(.375*1rem,((.375 - ((.5 - .375)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((.5 - .375)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),.5*1rem);
--_components---input-label--font-size: .9rem;
--_typography---caption--letter-spacing: 0em;
--_typography---eyebrow--bottom-margin: var(--_layout---spacing--margin-sm);
--_typography---eyebrow--font-size: clamp(1*1rem,((1 - ((1.25 - 1)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((1.25 - 1)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),1.25*1rem);
--_typography---eyebrow--letter-spacing: 0em;
--_typography---paragraph-sm--bottom-margin: var(--_layout---spacing--margin-sm);
--_typography---paragraph-sm--font-size: .875rem;
--_typography---paragraph-sm--letter-spacing: 0em;
--_typography---paragraph-lg--bottom-margin: var(--_layout---spacing--margin-sm);
--_typography---paragraph-lg--font-size: clamp(1.1*1rem,((1.1 - ((1.25 - 1.1)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((1.25 - 1.1)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),1.25*1rem);
--_typography---paragraph-lg--letter-spacing: 0em;
--_typography---paragraph-xl--bottom-margin: var(--_layout---spacing--margin-md);
--_typography---paragraph-xl--font-size: clamp(1.5*1rem,((1.5 - ((2 - 1.5)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((2 - 1.5)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),2*1rem);
--_typography---type-paragraph-lg--font-size-md<deleted|variable-cdbe9950-9272-2284-ccf6-60cab96acd5f>: 1.25rem;
--_typography---type-paragraph-lg--font-size-sm<deleted|variable-841c9cf1-74b8-7850-db1d-b82cdc8d3013>: 1.1rem;
--_typography---type-paragraph-lg--font-size-xs<deleted|variable-dab72a89-1875-a2f7-1d85-bd05f81dd817>: 1.1rem;
--_typography---type-paragraph-sm--font-size-md<deleted|variable-94c5336e-6e13-9026-329b-a7b4ba64e183>: .9rem;
--_typography---type-paragraph-sm--font-size-sm<deleted|variable-dce65071-f183-75c5-98aa-d8afc83560a0>: .9rem;
--_typography---type-paragraph-sm--font-size-xs<deleted|variable-5ffbcc90-83d8-60d2-b7ba-601684d03f16>: .9rem;
--_typography---subheading-xl--font-size: var(--_typography---h4--font-size);
--_size---0-25rem<deleted|variable-2d47388d-3251-c56b-03c9-35dfc0a59c39>: .25rem;
--_size---1rem<deleted|variable-461c7c57-ec3c-d23c-768b-c6de52a540e5>: 1rem;
--_size---0-75rem<deleted|variable-51df6ead-a71c-263d-332f-348c569f6d5f>: .75rem;
--_size---5rem<deleted|variable-ff14b77f-fe78-09a6-d1f0-e9e7c84aae7c>: 5rem;
--_typography---caption--bottom-margin: var(--_layout---spacing--margin-sm);
--_typography---caption--font-size: .8rem;
--_typography---paragraph-xxl--font-size: clamp(2*1rem,((2 - ((3.5 - 2)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((3.5 - 2)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),3.5*1rem);
--_typography---paragraph-xxl--letter-spacing: 0em;
--_layout---section-spacing--large: clamp(3*1rem,((3 - ((15 - 3)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((15 - 3)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),15*1rem);
--_typography---h0--bottom-margin: var(--_layout---spacing--margin-md);
--_typography---h0--font-size: clamp(3*1rem,((3 - ((7 - 3)/(var(--_layout---fluid--max) - var(--_layout---fluid--min))*var(--_layout---fluid--min)))*1rem + ((7 - 3)/(var(--_layout---fluid--max) - var(--_layout---fluid--min)))*100vw),7*1rem);
--_typography---h0--letter-spacing: 0em;
--_typography---subheading-xxl--font-size: var(--_typography---h3--font-size);
--_typography---subheading-xxl--letter-spacing: 0em;
--_typography---subheading-lg--font-size: var(--_typography---h5--font-size);
--_typography---subheading-lg--letter-spacing: 0em;
--_typography---subheading--font-size: var(--_typography---h6--font-size);
--_typography---subheading--letter-spacing: 0px;
--_typography---paragraph-xs--font-size: .75rem;
--_typography---paragraph-xs--letter-spacing: 0em;
--_typography---subheading-xxl--bottom-margin: var(--_layout---spacing--margin-sm);
--_typography---subheading-xl--bottom-margin: var(--_layout---spacing--margin-xs);
--_typography---subheading-xl--letter-spacing: 0em;
--_typography---subheading-lg--bottom-margin: var(--_layout---spacing--margin-xs);
--_typography---subheading--bottom-margin: var(--_layout---spacing--margin-xs);
--_components---image--float-size: max(-2vw,-3.5rem);
--_typography---paragraph-xs--bottom-margin: var(--_layout---spacing--margin-sm);
--_components---input-label--letter-spacing: 0em;
--_typography---paragraph-xxl--bottom-margin: var(--_layout---spacing--margin-md);
--_typography---paragraph-xl--letter-spacing: 0em;
--swiper-navigation-size: 44px;
```

### Typography

```css
--_typography---paragraph-body--font: var(--_typography---fonts--primary-font);
--_typography---paragraph-body--line-height: 1.6;
--_typography---paragraph-body--font-weight: 400;
--_typography---h1--font: var(--_typography---fonts--primary-font);
--_typography---h1--line-height: 1.04;
--_typography---h1--font-weight: 600;
--_typography---h2--font: var(--_typography---fonts--primary-font);
--_typography---h2--line-height: 1.04;
--_typography---h2--font-weight: 600;
--_typography---h3--font: var(--_typography---fonts--primary-font);
--_typography---h3--line-height: 1.2;
--_typography---h3--font-weight: 600;
--_typography---h4--font: var(--_typography---fonts--primary-font);
--_typography---h4--line-height: 1.2;
--_typography---h4--font-weight: 600;
--_typography---h5--font: var(--_typography---fonts--primary-font);
--_typography---h5--line-height: 1.3;
--_typography---h5--font-weight: 600;
--_typography---h6--font: var(--_typography---fonts--primary-font);
--_typography---h6--line-height: 1.4;
--_typography---h6--font-weight: 600;
--_components---button--font: var(--_typography---fonts--primary-font);
--_components---button--line-height: 1.2em;
--_components---button--font-weight: 500;
--_components---input--font: var(--_typography---fonts--primary-font);
--_components---input--line-height: 1.5em;
--_components---input--font-weight: 400;
--_components---input-label--font: var(--_typography---fonts--primary-font);
--_components---input-label--line-height: 1.4em;
--_components---input-label--font-weight: 500;
--_typography---eyebrow--font: var(--_typography---fonts--primary-font);
--_typography---eyebrow--line-height: 1.4;
--_typography---eyebrow--font-weight: 500;
--_typography---paragraph-sm--font: var(--_typography---fonts--primary-font);
--_typography---paragraph-sm--line-height: 1.6;
--_typography---paragraph-sm--font-weight: 400;
--_typography---paragraph-lg--font: var(--_typography---fonts--primary-font);
--_typography---paragraph-lg--line-height: 1.5;
--_typography---paragraph-lg--font-weight: 400;
--_typography---paragraph-xl--font: var(--_typography---fonts--primary-font);
--_typography---paragraph-xl--line-height: 1.4;
--_typography---paragraph-xl--font-weight: 400;
--_typography---caption--font: var(--_typography---fonts--primary-font);
--_typography---caption--line-height: 1.2;
--_typography---caption--font-weight: 550;
--_typography---paragraph-xxl--font: var(--_typography---fonts--primary-font);
--_typography---paragraph-xxl--line-height: 1.2;
--_typography---paragraph-xxl--font-weight: 400;
--_typography---h0--font: var(--_typography---fonts--primary-font);
--_typography---h0--line-height: 1.04;
--_typography---h0--font-weight: 600;
--_typography---subheading-xxl--font: var(--_typography---fonts--primary-font);
--_typography---subheading-xxl--line-height: 1.2;
--_typography---subheading-xxl--font-weight: 500;
--_typography---subheading-lg--font: var(--_typography---fonts--primary-font);
--_typography---subheading-lg--line-height: 1.3;
--_typography---subheading-lg--font-weight: 500;
--_typography---subheading--font: var(--_typography---fonts--primary-font);
--_typography---subheading--line-height: 1.4;
--_typography---subheading--font-weight: 500;
--_typography---paragraph-xs--font: var(--_typography---fonts--primary-font);
--_typography---paragraph-xs--line-height: 1.6;
--_typography---paragraph-xs--font-weight: 400;
--_typography---subheading-xl--font: var(--_typography---fonts--primary-font);
--_typography---subheading-xl--line-height: 1.3;
--_typography---subheading-xl--font-weight: 500;
--mkto-embed-font-family: "WF Visual Sans Variable",sans-serif;
```

### Other

```css
--_components---nav--height: 4.25rem;
--_layout---container--max-width: calc(var(--_layout---fluid--max)*1rem);
--_layout---fluid--max: 90;
--_layout---fluid--min: 20;
--transition-duration-1: 150ms;
--transition-duration-2: 300ms;
--transition-duration-3: 450ms;
--transition-duration-4: 750ms;
--transition-duration-5: 1200ms;
--transition-duration-6: 1950ms;
--transition-duration-7: 3150ms;
--transition-timing-inoutquad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
--transition-timing-inoutcubic: cubic-bezier(0.645, 0.045, 0.355, 1);
--transition-timing-inoutquart: cubic-bezier(0.77, 0, 0.175, 1);
--animation-duration-1: 0.3s;
--animation-duration-2: 0.45s;
--animation-duration-3: 0.75s;
--animation-duration-4: 1.2s;
--animation-delay-d0: 0s;
--animation-delay-d1: 0.3s;
--animation-delay-d2: 0.45s;
--animation-delay-d3: 0.75s;
--animation-delay-d4: 1.2s;
--animation-delay-d5: 1.95s;
--animation-delay-d6: 2.7s;
--animation-delay-d7: 3.45s;
--mkto-embed-checkbox-background: #ffffff;
--mkto-embed-checkbox-checked: #080808;
--sa-uid: '';
```

### Dependencies

```css
0: --_color---neutral--white;
0: --_typography---fonts--primary-font;
0: --_layout---spacing--margin-md;
0: --_typography---fonts--primary-font;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---spacing--margin-md;
0: --_typography---fonts--primary-font;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---spacing--margin-sm;
0: --_typography---fonts--primary-font;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---spacing--margin-xs;
0: --_typography---fonts--primary-font;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---spacing--margin-sm;
0: --_typography---fonts--primary-font;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---spacing--margin-xs;
0: --_typography---fonts--primary-font;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---spacing--margin-sm;
0: --_color---primary--webflow-blue;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_color---neutral--black;
0: --_color---neutral--gray-200;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_color---neutral--gray-100;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---fluid--max;
0: --_layout---spacing--margin-md;
0: --_layout---spacing--margin-lg;
0: --_layout---spacing--margin-sm;
0: --_layout---spacing--margin-xl;
0: --_layout---spacing--margin-xs;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_typography---fonts--primary-font;
0: --_color---neutral--gray-600;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---grid--gap-md;
0: --_typography---fonts--primary-font;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_typography---fonts--primary-font;
0: --_layout---spacing--margin-sm;
0: --_typography---fonts--primary-font;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---spacing--margin-sm;
0: --_typography---fonts--primary-font;
0: --_layout---spacing--margin-sm;
0: --_typography---fonts--primary-font;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---spacing--margin-md;
0: --_typography---fonts--primary-font;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --colors--primary-accent;
1: --colors--text;
0: --colors--primary-accent;
0: --_typography---h4--font-size;
0: --_layout---spacing--margin-sm;
0: --_typography---fonts--primary-font;
0: --_typography---fonts--primary-font;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_layout---spacing--margin-md;
0: --_typography---fonts--primary-font;
0: --_layout---fluid--max;
1: --_layout---fluid--min;
2: --_layout---fluid--min;
3: --_layout---fluid--max;
4: --_layout---fluid--min;
0: --_typography---fonts--primary-font;
0: --_typography---h3--font-size;
0: --_typography---fonts--primary-font;
0: --_typography---h5--font-size;
0: --_typography---fonts--primary-font;
0: --_typography---h6--font-size;
0: --_typography---fonts--primary-font;
0: --_layout---spacing--margin-sm;
0: --_layout---spacing--margin-xs;
0: --_typography---fonts--primary-font;
0: --_layout---spacing--margin-xs;
0: --_layout---spacing--margin-xs;
0: --_layout---spacing--margin-sm;
0: --_layout---spacing--margin-md;
```

### Semantic

```css
--_color---secondary--green: #00d722;
--_color---secondary--yellow: #ffae13;
--_color---secondary--red: #ee1d36;
--mkto-embed-color-error: #146ef5;
--_color---primary--webflow-blue: #146ef5;
--_color---primary--blue-600: #0055d4;
--_color---primary--blue-400: #3b89ff;
--_color---blue-300: #006acc;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 479px | max-width |
| sm | 480px | max-width |
| md | 767px | max-width |
| md | 768px | min-width |
| lg | 991px | max-width |
| lg | 992px | max-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.165, 0.84, 0.44, 1)`, `cubic-bezier(0.455, 0.03, 0.515, 0.955)`, `cubic-bezier(0.645, 0.045, 0.355, 1)`

**Durations:** `0.3s`, `0.45s`, `0.15s`, `1.2s`

### Common Transitions

```css
transition: all;
transition: background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
transition: box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
transition: opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
transition: opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), transform 0.45s cubic-bezier(0.645, 0.045, 0.355, 1);
transition: border 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
transition: background-color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
transition: opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
transition: background-color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955), color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
```

### Keyframe Animations

**spin**
```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

**fadein**
```css
@keyframes fadein {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**marquee_1_timeline**
```css
@keyframes marquee_1_timeline {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
```

**moveGradientRight**
```css
@keyframes moveGradientRight {
  0% { background-position: 0% 20%; }
  50% { background-position: 15% 0%; }
  100% { background-position: 0% 20%; }
}
```

**moveGradientLeft**
```css
@keyframes moveGradientLeft {
  0% { background-position: 0% 20%; }
  50% { background-position: 15% 0%; }
  100% { background-position: 0% 20%; }
}
```

**scale**
```css
@keyframes scale {
  0% { opacity: 0; transform: scale(1.015) translateZ(0px); }
  100% { opacity: 1; transform: scale(1) translateZ(0px); }
}
```

**fade**
```css
@keyframes fade {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**noise-animation**
```css
@keyframes noise-animation {
  0% { transform: translate(0px, 0px); }
  10% { transform: translate(-2%, -3%); }
  20% { transform: translate(-4%, 2%); }
  30% { transform: translate(2%, -4%); }
  40% { transform: translate(-2%, 5%); }
  50% { transform: translate(-4%, 2%); }
  60% { transform: translate(3%, 0px); }
  70% { transform: translate(0px, 3%); }
  80% { transform: translate(-3%, 0px); }
  90% { transform: translate(2%, 2%); }
  100% { transform: translate(1%, 0px); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (58 instances)

```css
.buttons {
  background-color: rgb(255, 255, 255);
  color: rgb(8, 8, 8);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 4px;
}
```

### Cards (105 instances)

```css
.cards {
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (1 instances)

```css
.inputs {
  background-color: rgb(255, 255, 255);
  color: rgb(26, 26, 26);
  border-color: rgb(209, 213, 219);
  border-radius: 6px;
  font-size: 14px;
  padding-top: 8px;
  padding-right: 12px;
}
```

### Links (260 instances)

```css
.links {
  color: rgb(8, 8, 8);
  font-size: 16px;
  font-weight: 400;
}
```

### Navigation (203 instances)

```css
.navigation {
  background-color: rgb(255, 255, 255);
  color: rgb(8, 8, 8);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 100px inset;
}
```

### Footer (214 instances)

```css
.footer {
  background-color: rgb(255, 255, 255);
  color: rgb(8, 8, 8);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (139 instances)

```css
.modals {
  background-color: rgb(240, 240, 240);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0) 0px 105px 30px 0px, rgba(0, 0, 0, 0.02) 0px 67px 27px 0px, rgba(0, 0, 0, 0.06) 0px 38px 23px 0px, rgba(0, 0, 0, 0.1) 0px 17px 17px 0px, rgba(0, 0, 0, 0.12) 0px 4px 9px 0px;
  padding-top: 0px;
  padding-right: 0px;
  max-width: 100%;
}
```

### Dropdowns (147 instances)

```css
.dropdowns {
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  border-color: rgb(8, 8, 8);
  padding-top: 0px;
}
```

### Badges (8 instances)

```css
.badges {
  background-color: color(srgb 0.0784313 0.431373 0.960784 / 0.1);
  color: color(srgb 0.0745341 0.399346 0.886564);
  font-size: 10px;
  font-weight: 500;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Avatars (1 instances)

```css
.avatars {
  border-radius: 2px;
}
```

### Tabs (36 instances)

```css
.tabs {
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(255, 255, 255);
  border-radius: 0px;
}
```

### Accordions (201 instances)

```css
.accordions {
  background-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(255, 255, 255);
}
```

### ProgressBars (3 instances)

```css
.progressBars {
  background-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
  border-radius: 0px;
  font-size: 16px;
}
```

### Switches (7 instances)

```css
.switches {
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  border-color: rgb(216, 216, 216);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(255, 255, 255, 0);
  color: rgb(8, 8, 8);
  padding: 19.2982px 0px 17.8138px 0px;
  border-radius: 0px;
  border: 0px 0px 2px none none solid rgb(8, 8, 8) rgb(8, 8, 8) rgba(0, 0, 0, 0);
  font-size: 14.8448px;
  font-weight: 500;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(20, 110, 245);
  color: rgb(255, 255, 255);
  padding: 16px 24px 16px 24px;
  border-radius: 4px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Button — 39 instances, 2 variants

**Variant 1** (18 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

**Variant 2** (21 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(8, 8, 8);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(8, 8, 8);
  font-size: 16px;
  font-weight: 500;
```

### Button — 39 instances, 2 variants

**Variant 1** (18 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

**Variant 2** (21 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(8, 8, 8);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(8, 8, 8);
  font-size: 16px;
  font-weight: 500;
```

### Button — 9 instances, 3 variants

**Variant 1** (5 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(8, 8, 8);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(8, 8, 8);
  font-size: 16px;
  font-weight: 500;
```

**Variant 2** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

**Variant 3** (1 instance)

```css
  background: rgb(20, 110, 245);
  color: rgb(255, 255, 255);
  padding: 16px 24px 16px 24px;
  border-radius: 4px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Button — 18 instances, 2 variants

**Variant 1** (14 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(8, 8, 8);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(8, 8, 8);
  font-size: 16px;
  font-weight: 500;
```

**Variant 2** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
```

### Button — 7 instances, 1 variant

**Variant 1** (7 instances)

```css
  background: rgb(255, 255, 255);
  color: rgb(8, 8, 8);
  padding: 0px 0px 0px 0px;
  border-radius: 4px;
  border: 0px none rgb(8, 8, 8);
  font-size: 16px;
  font-weight: 400;
```

### Card — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgb(20, 110, 245);
  color: rgb(255, 255, 255);
  padding: 12px 8px 12px 16px;
  border-radius: 4px;
  border: 0px none rgb(216, 216, 216);
  font-size: 16px;
  font-weight: 400;
```

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgb(8, 8, 8);
  color: rgb(255, 255, 255);
  padding: 4px 0px 4px 4px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

### Other — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

### Button — 7 instances, 3 variants

**Variant 1** (2 instances)

```css
  background: rgb(8, 8, 8);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 50%;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

**Variant 2** (3 instances)

```css
  background: rgba(239, 239, 239, 0);
  color: rgb(8, 8, 8);
  padding: 1px 6px 1px 6px;
  border-radius: 0px;
  border: 0px none rgb(8, 8, 8);
  font-size: 16px;
  font-weight: 400;
```

**Variant 3** (2 instances)

```css
  background: rgb(255, 255, 255);
  color: rgb(8, 8, 8);
  padding: 0px 0px 0px 0px;
  border-radius: 50%;
  border: 0px none rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Card — 6 instances, 1 variant

**Variant 1** (6 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgb(20, 110, 245);
  color: rgb(255, 255, 255);
  padding: 16px 24px 16px 24px;
  border-radius: 4px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

## Layout System

**4 grid containers** and **809 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1920px | 0px |
| 1440px | 0px |
| 1040px | 0px |
| 820.625px | 0px |
| 100% | 0px |
| 768px | 64px |
| 66.6667% | 15.7143px |
| 33.3333% | 15.7143px |
| 708.947px | 0px |
| 960px | 0px |
| 41.66% | 15.7143px |
| 25% | 15.7143px |
| 672px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 1-column | 3x |
| 2-column | 1x |

### Grid Templates

```css
grid-template-columns: 1fr 1fr;
gap: 16px 0px;
grid-template-columns: 0px;
grid-template-columns: 0px;
grid-template-columns: 0px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 288x |
| row/nowrap | 469x |
| row/wrap | 52x |

**Gap values:** `0px normal`, `12px`, `15.1429px`, `15.1429px normal`, `16px`, `16px 0px`, `23.4286px`, `23.4286px normal`, `24px`, `31.4286px normal`, `32px`, `4.45344px`, `4.8px`, `40px normal`, `4px`, `5.25714px 13.1429px`, `5.6px`, `6.4px`, `7.71429px`, `7.71429px normal`, `8.43429px`, `80px`, `8px`, `8px 16px`, `normal 6.4px`

## Accessibility (WCAG 2.1)

**Overall Score: 95%** — 20 passing, 1 failing color pairs

### Failing Color Pairs

| Foreground | Background | Ratio | Level | Used On |
|------------|------------|-------|-------|---------|
| `#ffffff` | `#3b82f6` | 3.68:1 | FAIL | button (1x) |

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#080808` | `#ffffff` | 20.03:1 | AAA |
| `#ffffff` | `#146ef5` | 4.59:1 | AA |

## Design System Score

**Overall: 82/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 70/100 |
| Spacing System | 70/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 95/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 21 distinct font sizes — consider a tighter type scale
- 1 WCAG contrast failures
- 192 !important rules — prefer specificity over overrides
- 77% of CSS is unused — consider purging
- 4782 duplicate CSS declarations

## Gradients

**10 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 90deg | 2 | brand |
| linear | 90deg | 2 | brand |
| linear | — | 5 | complex |
| linear | — | 2 | brand |
| linear | — | 2 | brand |
| linear | — | 2 | brand |
| linear | — | 3 | bold |
| radial | circle farthest-side at 0% 0% | 3 | bold |
| linear | 170deg | 2 | brand |
| linear | — | 2 | brand |

```css
background: linear-gradient(90deg, rgb(255, 255, 255) 30%, rgba(0, 0, 0, 0));
background: linear-gradient(90deg, rgb(8, 8, 8) 30%, rgba(0, 0, 0, 0));
background: linear-gradient(rgb(255, 255, 255) 0%, color(srgb 1 1 1 / 0.85) 30%, color(srgb 1 1 1 / 0.4) 65%, color(srgb 1 1 1 / 0.1) 90%, rgba(0, 0, 0, 0) 100%);
background: linear-gradient(color(srgb 1 1 1 / 0.6), color(srgb 1 1 1 / 0.33));
background: linear-gradient(rgb(8, 8, 8), rgb(8, 8, 8));
```

## Z-Index Map

**17 unique z-index values** across 4 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 9998,2147483647 | a.n.a.v.-.s.k.i.p.-.l.i.n.k. .w.-.-.c.u.r.r.e.n.t, img.g.-.m.o.d.a.l.-.i.m.a.g.e.-.i.m.g, img.g.-.m.o.d.a.l.-.i.m.a.g.e.-.i.m.g. .c.c.-.t.a.b.l.e.t |
| dropdown | 900,999 | div.p.e.r.s.o.n.a.-.s.e.l.e.c.t._.d.r.o.p.d.o.w.n. .w.-.d.r.o.p.d.o.w.n, div.n.a.v. .w.-.n.a.v |
| sticky | 10,50 | div.h.o.m.e.-.u.i, div.c.o.n.t.a.i.n.e.r. .u.-.p.o.s.i.t.i.o.n.-.r.e.l.a.t.i.v.e. .u.-.z.-.i.n.d.e.x.-.1.0, img.p.r.e.f.o.o.t.e.r._.s.l.i.d.e.r.-.i.m.g. .u.-.i.m.g.-.c.o.v.e.r |
| base | -1000,4 | span.s.w.i.p.e.r.-.n.o.t.i.f.i.c.a.t.i.o.n, img.p.r.e.f.o.o.t.e.r.-.s.l.i.d.e.r._.b.g.-.i.m.g, img.p.r.e.f.o.o.t.e.r.-.s.l.i.d.e.r._.b.g.-.i.m.g |

**Issues:**
- Very high z-index values: 2147483647

## SVG Icons

**15 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 1 |
| sm | 7 |
| md | 4 |
| lg | 1 |
| xl | 2 |

**Icon colors:** `#146EF5`, `currentColor`, `white`, `#ffffff`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| webflow-icons | self-hosted | 400 | normal |
| WF Visual Sans Variable | self-hosted | 100 900 | normal |
| WFVisualSans-Mono | self-hosted | 200, 300, 400, 500, 600, 700, 800, 900 | normal |
| Inconsolata | google-fonts | 400, 700 | normal |
| swiper-icons | self-hosted | 400 | normal |

**Google Fonts URL:** `https://fonts.googleapis.com/`

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 60 | objectFit: cover, borderRadius: 2px 2px 0px 0px, shape: rounded |
| hero | 23 | objectFit: cover, borderRadius: 0px, shape: square |
| gallery | 22 | objectFit: cover, borderRadius: 0px, shape: square |
| general | 4 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 5:1 (31x), 1:1 (23x), 16:9 (14x), 3:4 (6x), 2:3 (6x), 3:2 (5x), 3.75:1 (2x), 4.29:1 (2x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |
| `md` | `300ms` | 300 |
| `lg` | `450ms` | 450 |
| `xl` | `1.2s` | 1200 |

### Easing Families

- **ease-out** (31 uses) — `cubic-bezier(0.165, 0.84, 0.44, 1)`
- **custom** (629 uses) — `cubic-bezier(0.455, 0.03, 0.515, 0.955)`, `cubic-bezier(0.645, 0.045, 0.355, 1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `marquee_1_timeline` | slide-x | transform | 1 |
| `moveGradientLeft` | pulse | background-position | 1 |
| `scale` | slide | opacity, transform | 11 |

## Component Anatomy

### button — 128 instances

**Slots:** label
**Variants:** link
**Sizes:** sm

| variant | count | sample label |
|---|---|---|
| default | 125 | Start for free |
| link | 3 | Platform |

### card — 9 instances

**Slots:** media
**Variants:** link

| variant | count | sample label |
|---|---|---|
| default | 6 | Read customer story
32
global sites laun |
| link | 3 | Optimize your site for machines
Explore  |

### other — 3 instances


## Brand Voice

**Tone:** neutral · **Pronoun:** you-only · **Headings:** Sentence case (tight)

### Top CTA Verbs

- **read** (14)
- **play** (6)
- **start** (4)
- **get** (3)
- **explore** (3)
- **view** (3)
- **machine** (3)
- **select** (3)

### Button Copy Patterns

- "→" (59×)
- "read story
→" (14×)
- "↗" (14×)
- "play" (6×)
- "explore webflow aeo
→" (3×)
- "view full schema
→
view full schema" (3×)
- "machine mode" (3×)
- "←" (3×)
- "select tab" (3×)
- "↑" (3×)

### Sample Headings

> Platform
> Build
> Manage
> Optimize
> Extend
> Platform
> Build
> Manage
> Optimize
> Extend

## Page Intent

**Type:** `landing` (confidence 0.75)
**Description:** Design, build, optimize, and rank in AI search — all in Webflow. Enterprise-grade security, CMS, hosting, and AEO built in. Trusted by over 300k teams.

## Section Roles

Reading order (top→bottom): nav → nav → nav → nav → nav → nav → nav → nav → nav → nav → pricing-table → pricing-table → pricing-table → testimonial → content → pricing-table → testimonial → content → testimonial → cta → footer → nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | nav | Platform | 0.9 |
| 2 | nav | Platform | 0.9 |
| 3 | nav | — | 0.9 |
| 4 | nav | — | 0.9 |
| 5 | nav | — | 0.9 |
| 6 | nav | Site Settings | 0.9 |
| 7 | nav | — | 0.9 |
| 8 | nav | — | 0.9 |
| 9 | pricing-table | Make your website a growth engine | 0.9 |
| 10 | pricing-table | Make your website a growth engine | 0.9 |
| 11 | pricing-table | Make your website a growth engine | 0.9 |
| 12 | testimonial | Webflow is the agentic web marketing platform for high-performing brands | 0.8 |
| 13 | content | — | 0.3 |
| 14 | pricing-table | 300,000+ brands move  the needle with Webflow | 0.9 |
| 15 | testimonial | From idea to impact, faster | 0.8 |
| 16 | content | Build | 0.3 |
| 17 | testimonial | Everything marketing teams love about webflow | 0.8 |
| 18 | nav | — | 0.9 |
| 19 | cta | Make your website your competitive edge | 0.75 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.213 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 1280px |
| backdrop-filter in use | no |
| Gradients | 10 |

## Imagery Style

**Label:** `photography` (confidence 0.268)
**Counts:** total 109, svg 46, icon 0, screenshot-like 7, photo-like 56
**Dominant aspect:** ultra-wide
**Radius profile on images:** square

## Component Library

**Detected:** `bootstrap` (confidence 0.7)

Evidence:
- bootstrap utility hits: 4

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `WF Visual Sans Variable` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
