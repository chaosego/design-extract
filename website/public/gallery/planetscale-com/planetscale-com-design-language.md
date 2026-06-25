# Design Language: PlanetScale - the world’s fastest and most scalable cloud hosting for Vitess and Postgres

> Extracted from `https://planetscale.com` on June 25, 2026
> 562 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#f2b600` | rgb(242, 182, 0) | hsl(45, 100%, 47%) | 1 |
| Secondary | `#f35815` | rgb(243, 88, 21) | hsl(18, 90%, 52%) | 2 |
| Accent | `#0b6ec5` | rgb(11, 110, 197) | hsl(208, 89%, 41%) | 76 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#414141` | hsl(0, 0%, 25%) | 986 |
| `#c1c1c1` | hsl(0, 0%, 76%) | 25 |
| `#737373` | hsl(0, 0%, 45%) | 16 |
| `#ffffff` | hsl(0, 0%, 100%) | 14 |
| `#000000` | hsl(0, 0%, 0%) | 10 |
| `#111111` | hsl(0, 0%, 7%) | 3 |
| `#ebebeb` | hsl(0, 0%, 92%) | 1 |

### Background Colors

Used on large-area elements: `#fafafa`, `#111111`

### Text Colors

Text color palette: `#414141`, `#ffffff`, `#111111`, `#c1c1c1`, `#000000`, `#0b6ec5`, `#737373`, `#fafafa`

### Gradients

```css
background-image: repeating-linear-gradient(0deg, rgb(65, 65, 65), rgb(65, 65, 65) 12px, rgba(0, 0, 0, 0) 12px, rgba(0, 0, 0, 0) 16px), repeating-linear-gradient(90deg, rgb(65, 65, 65), rgb(65, 65, 65) 12px, rgba(0, 0, 0, 0) 12px, rgba(0, 0, 0, 0) 16px), repeating-linear-gradient(rgb(65, 65, 65), rgb(65, 65, 65) 12px, rgba(0, 0, 0, 0) 12px, rgba(0, 0, 0, 0) 16px), repeating-linear-gradient(270deg, rgb(65, 65, 65), rgb(65, 65, 65) 12px, rgba(0, 0, 0, 0) 12px, rgba(0, 0, 0, 0) 16px);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#414141` | text, border | 986 |
| `#0b6ec5` | text | 76 |
| `#c1c1c1` | text, border | 25 |
| `#737373` | text | 16 |
| `#ffffff` | background, text | 14 |
| `#000000` | text | 10 |
| `#111111` | background, text | 3 |
| `#f35815` | background, border | 2 |
| `#f2b600` | background | 1 |
| `#ebebeb` | background | 1 |

## Typography

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 16px | 1rem | 400 | 24px | normal | html, head, meta, title |
| 12px | 0.75rem | 500 | 16px | normal | pre |

### Heading Scale

```css
h1 { font-size: 16px; font-weight: 400; line-height: 24px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: 24px; }
```

### Font Weights in Use

`400` (512x), `600` (28x), `500` (11x), `700` (11x)

## Spacing

**Base unit:** 4px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-4 | 4px | 0.25rem |
| spacing-80 | 80px | 5rem |
| spacing-96 | 96px | 6rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| full | 9999px | 2 |

## CSS Custom Properties

### Colors

```css
--bg-primary: #fafafa;
--tw-ring-shadow: 0 0 #0000;
--bg-focus: 235 235 235;
--tw-border-spacing-x: 0;
--tw-ring-color: rgb(30 157 231 / .5);
--bg-secondary: #ebebeb;
--bg-purple-secondary: #b7a5fb;
--tw-ring-offset-color: #fff;
--tw-ring-offset-width: 0px;
--tw-shadow-colored: 0 0 #0000;
--bg-inverted: #111111;
--tw-ring-offset-shadow: 0 0 #0000;
--text-secondary: #737373;
--border-primary: #414141;
--tw-ring-inset: ;
--bg-green-light: #effff3;
--bg-purple-tertiary: #d4c9fe;
--text-primary: #414141;
--tw-border-spacing-y: 0;
--bg-purple: #a18bf5;
--bg-green: #13862e;
```

### Spacing

```css
--tw-numeric-spacing: ;
--tw-contain-size: ;
```

### Typography

```css
--text-disabled: #a1a1a1;
--text-postgres: #336791;
--text-blue: #0b6ec5;
--text-red: #d92038;
--text-purple: #5e49af;
--text-green: #13862e;
--text-orange: #f35815;
--text-contrast: rgba(0, 0, 0, 1);
--text-decoration: #c1c1c1;
```

### Shadows

```css
--tw-drop-shadow: ;
--tw-shadow: 0 0 #0000;
```

### Other

```css
--green-900: #0a2b13;
--tw-backdrop-sepia: ;
--blue-400: #47b7f8;
--purple-200: #d4c9fe;
--orange-600: #b83a05;
--yellow-900: #281e03;
--tw-sepia: ;
--tw-ordinal: ;
--blue-500: #1e9de7;
--tw-contain-style: ;
--tw-backdrop-invert: ;
--orange-700: #962d00;
--blue-800: #0e3682;
--blue-100: #ddf2ff;
--orange-800: #672002;
--tw-backdrop-grayscale: ;
--tw-hue-rotate: ;
--yellow-950: #171101;
--tw-pan-y: ;
--blue-600: #0b6ec5;
--purple-50: #f9f8ff;
--orange-200: #ffc59b;
--gray-600: #616161;
--blue-900: #08204e;
--blue-200: #a9dffe;
--gray-700: #414141;
--yellow-200: #fed54a;
--purple-500: #8467f3;
--tw-rotate: 0;
--orange-100: #ffe8d8;
--purple-700: #4b3990;
--purple-400: #a18bf5;
--yellow-700: #5c4716;
--orange-400: #fd812d;
--orange-50: #fff8f3;
--orange-500: #f35815;
--black: rgba(0, 0, 0, 1);
--yellow-50: #fffbe4;
--yellow-300: #f2b600;
--yellow-100: #fff1a8;
--blue-50: #f3fbff;
--gray-100: #ebebeb;
--tw-gradient-via-position: ;
--tw-saturate: ;
--tw-scroll-snap-strictness: proximity;
--red-100: #ffe5e9;
--tw-grayscale: ;
--green-100: #d7fbdf;
--gray-550: #737373;
--red-400: #ff7082;
--tw-backdrop-hue-rotate: ;
--yellow-600: #7d5903;
--gray-50: #fafafa;
--tw-gradient-to-position: ;
--tw-numeric-fraction: ;
--red-950: #200A0D;
--tw-skew-y: 0;
--tw-slashed-zero: ;
--tw-backdrop-opacity: ;
--tw-gradient-from-position: ;
--tw-pinch-zoom: ;
--tw-contain-paint: ;
--purple-300: #b7a5fb;
--blue-700: #144eb6;
--green-300: #75db8c;
--gray-900: #111111;
--yellow-800: #41320c;
--tw-backdrop-saturate: ;
--white: rgba(255, 255, 255, 1);
--green-800: #10481d;
--red-800: #8f0718;
--green-950: #041A0A;
--purple-950: #180636;
--tw-brightness: ;
--green-50: #effff3;
--green-200: #a9ecb8;
--blue-950: #04122E;
--tw-scale-y: 1;
--green-400: #40d763;
--tw-backdrop-contrast: ;
--green-700: #19652a;
--tw-backdrop-brightness: ;
--red-900: #341418;
--red-500: #ff455d;
--tw-pan-x: ;
--tw-translate-y: 0;
--gray-300: #c1c1c1;
--purple-800: #3e1f75;
--gray-500: #818181;
--tw-contrast: ;
--red-50: #fffafa;
--blue-300: #73c7f9;
--tw-skew-x: 0;
--red-300: #ff909f;
--red-600: #d92038;
--green-600: #13862e;
--tw-backdrop-blur: ;
--tw-translate-x: 0;
--green-500: #27b648;
--orange-950: #240B00;
--gray-400: #a1a1a1;
--purple-100: #eeeaff;
--purple-900: #27124a;
--yellow-500: #a78103;
--gray-800: #2b2b2b;
--red-700: #c11027;
--gray-200: #e1e1e1;
--tw-scale-x: 1;
--orange-900: #3c1403;
--gray-850: #1a1a1a;
--yellow-400: #d19f03;
--purple-600: #5e49af;
--tw-blur: ;
--tw-invert: ;
--red-200: #fbbfc7;
--orange-300: #fc9c66;
--tw-numeric-figure: ;
--tw-contain-layout: ;
```

### Semantic

```css
--green-900: #0a2b13;
--green-100: #d7fbdf;
--green-300: #75db8c;
--text-green: #13862e;
--green-800: #10481d;
--green-950: #041A0A;
--green-50: #effff3;
--green-200: #a9ecb8;
--green-400: #40d763;
--green-700: #19652a;
--bg-green-light: #effff3;
--green-600: #13862e;
--green-500: #27b648;
--bg-green: #13862e;
--yellow-900: #281e03;
--yellow-950: #171101;
--yellow-200: #fed54a;
--yellow-700: #5c4716;
--yellow-50: #fffbe4;
--yellow-300: #f2b600;
--yellow-100: #fff1a8;
--yellow-600: #7d5903;
--yellow-800: #41320c;
--yellow-500: #a78103;
--yellow-400: #d19f03;
--red-100: #ffe5e9;
--red-400: #ff7082;
--tw-shadow-colored: 0 0 #0000;
--red-950: #200A0D;
--text-red: #d92038;
--red-800: #8f0718;
--red-900: #341418;
--red-500: #ff455d;
--red-50: #fffafa;
--red-300: #ff909f;
--red-600: #d92038;
--red-700: #c11027;
--red-200: #fbbfc7;
--blue-400: #47b7f8;
--blue-500: #1e9de7;
--blue-800: #0e3682;
--blue-100: #ddf2ff;
--blue-600: #0b6ec5;
--blue-900: #08204e;
--blue-200: #a9dffe;
--blue-50: #f3fbff;
--text-blue: #0b6ec5;
--blue-700: #144eb6;
--blue-950: #04122E;
--blue-300: #73c7f9;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 640px | min-width |
| md | 768px | min-width |
| lg | 1024px | min-width |
| xl | 1280px | min-width |
| 2xl | 1536px | min-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.4, 0, 0.2, 1)`

**Durations:** `0.15s`

### Common Transitions

```css
transition: all;
transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), filter 0.15s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.15s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations

**banner-red-light**
```css
@keyframes banner-red-light {
  0%, 66% { fill: currentcolor; opacity: 0.3; }
  67%, 100% { fill: rgb(193, 16, 39); opacity: 1; }
}
```

**banner-yellow-light**
```css
@keyframes banner-yellow-light {
  0%, 33% { fill: currentcolor; opacity: 0.3; }
  34%, 66% { fill: rgb(245, 166, 35); opacity: 1; }
  67%, 100% { fill: currentcolor; opacity: 0.3; }
}
```

**banner-green-light**
```css
@keyframes banner-green-light {
  0%, 33% { fill: rgb(34, 166, 82); opacity: 1; }
  34%, 100% { fill: currentcolor; opacity: 0.3; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (8 instances)

```css
.buttons {
  background-color: rgb(243, 88, 21);
  color: rgb(65, 65, 65);
  font-size: 16px;
  font-weight: 600;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Links (96 instances)

```css
.links {
  color: rgb(11, 110, 197);
  font-size: 16px;
  font-weight: 400;
}
```

### Navigation (3 instances)

```css
.navigation {
  color: rgb(65, 65, 65);
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
  color: rgb(65, 65, 65);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Tabs (3 instances)

```css
.tabs {
  background-color: rgb(17, 17, 17);
  color: rgb(65, 65, 65);
  font-size: 16px;
  font-weight: 600;
  padding-top: 16px;
  padding-right: 0px;
  border-color: rgb(65, 65, 65);
  border-radius: 0px;
}
```

### Accordions (2 instances)

```css
.accordions {
  color: rgb(65, 65, 65);
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(65, 65, 65);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(243, 88, 21);
  color: rgb(255, 255, 255);
  padding: 0px 8px 0px 8px;
  border-radius: 0px;
  border: 0px solid rgb(65, 65, 65);
  font-size: 16px;
  font-weight: 600;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(65, 65, 65);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(65, 65, 65);
  font-size: 16px;
  font-weight: 600;
```

### Button — 3 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgb(17, 17, 17);
  color: rgb(250, 250, 250);
  padding: 16px 0px 16px 0px;
  border-radius: 0px;
  border: 0px solid rgb(65, 65, 65);
  font-size: 16px;
  font-weight: 600;
```

**Variant 2** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(65, 65, 65);
  padding: 16px 0px 16px 0px;
  border-radius: 0px;
  border: 0px 0px 0px 1px solid rgb(65, 65, 65);
  font-size: 16px;
  font-weight: 600;
```

## Layout System

**4 grid containers** and **63 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1280px | 96px |
| 100% | 16px |
| 800px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 5-column | 2x |
| 2-column | 1x |
| 3-column | 1x |

### Grid Templates

```css
grid-template-columns: 217.594px 217.594px 217.609px 217.594px 217.609px;
grid-template-columns: 217.594px 217.594px 217.609px 217.594px 217.609px;
grid-template-columns: 362px 362px 362px;
grid-template-columns: 609.719px 566.281px;
gap: 24px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 4x |
| row/nowrap | 59x |

**Gap values:** `12px`, `24px`, `24px normal`, `4px`, `8px`, `normal 24px`, `normal 8px`

## Accessibility (WCAG 2.1)

**Overall Score: 86%** — 6 passing, 1 failing color pairs

### Failing Color Pairs

| Foreground | Background | Ratio | Level | Used On |
|------------|------------|-------|-------|---------|
| `#ffffff` | `#f35815` | 3.38:1 | FAIL | a (1x) |

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#000000` | `#fafafa` | 20.12:1 | AAA |
| `#111111` | `#f2b600` | 10.31:1 | AAA |
| `#fafafa` | `#111111` | 18.09:1 | AAA |
| `#000000` | `#ebebeb` | 17.62:1 | AAA |

## Design System Score

**Overall: 90/100 (Grade: A)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 90/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 85/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 86/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Well-defined spacing scale, Clean elevation system, Consistent border radii, Good CSS variable tokenization

**Issues:**
- 1 WCAG contrast failures
- 35 !important rules — prefer specificity over overrides
- 80% of CSS is unused — consider purging
- 1046 duplicate CSS declarations

## Gradients

**4 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| repeating-linear | 0deg | 4 | bold |
| repeating-linear | 90deg | 4 | bold |
| repeating-linear | — | 4 | bold |
| repeating-linear | 270deg | 4 | bold |

```css
background: repeating-linear-gradient(0deg, rgb(65, 65, 65), rgb(65, 65, 65) 12px, rgba(0, 0, 0, 0) 12px, rgba(0, 0, 0, 0) 16px);
background: repeating-linear-gradient(90deg, rgb(65, 65, 65), rgb(65, 65, 65) 12px, rgba(0, 0, 0, 0) 12px, rgba(0, 0, 0, 0) 16px);
background: repeating-linear-gradient(rgb(65, 65, 65), rgb(65, 65, 65) 12px, rgba(0, 0, 0, 0) 12px, rgba(0, 0, 0, 0) 16px);
background: repeating-linear-gradient(270deg, rgb(65, 65, 65), rgb(65, 65, 65) 12px, rgba(0, 0, 0, 0) 12px, rgba(0, 0, 0, 0) 16px);
```

## SVG Icons

**52 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| md | 1 |
| lg | 1 |
| xl | 50 |

**Icon colors:** `currentColor`, `rgb(0, 0, 0)`

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| gallery | 1 | objectFit: contain, borderRadius: 0px, shape: square |

**Aspect ratios:** 16:9 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |

### Easing Families

- **custom** (15 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `banner-red-light` | fade | fill, opacity | 1 |
| `banner-yellow-light` | fade | fill, opacity | 1 |
| `banner-green-light` | fade | fill, opacity | 1 |

## Component Anatomy

### button — 6 instances

**Slots:** label
**Variants:** primary

| variant | count | sample label |
|---|---|---|
| default | 4 | Get in touch |
| primary | 2 | Platform▾ |

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Sentence case (tight)

### Top CTA Verbs

- **get** (1)
- **platform** (1)
- **resources** (1)
- **vitess** (1)
- **postgres** (1)
- **neki** (1)

### Button Copy Patterns

- "get in touch" (1×)
- "platform▾" (1×)
- "resources▾" (1×)
- "vitess" (1×)
- "postgres" (1×)
- "neki" (1×)

### Sample Headings

> The world’s fastest and most scalable cloud databases
> Performance
> Uptime
> Cost
> Security
> The world’s fastest and most scalable cloud databases
> Performance
> Uptime
> Cost
> Security

## Page Intent

**Type:** `landing` (confidence 0.31)
**Description:** PlanetScale offers the world’s fastest and most scalable cloud hosting for Vitess and Postgres.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): nav → cta → nav → testimonial → testimonial → footer → nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | cta | — | 0.75 |
| 1 | nav | — | 0.9 |
| 2 | nav | — | 0.9 |
| 3 | testimonial | The world’s fastest and most scalable cloud databases | 0.8 |
| 4 | testimonial | The world’s fastest and most scalable cloud databases | 0.8 |
| 5 | footer | Company | 0.95 |
| 6 | nav | Company | 0.9 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.286 |
| Shadow profile | none |
| Avg shadow blur | 0px |
| Max radius | 9999px |
| backdrop-filter in use | no |
| Gradients | 4 |

## Imagery Style

**Label:** `photography` (confidence 0.05)
**Counts:** total 1, svg 0, icon 0, screenshot-like 0, photo-like 0
**Dominant aspect:** landscape
**Radius profile on images:** square

## Component Library

**Detected:** `tailwindcss` (confidence 0.811)

Evidence:
- tailwind-like class density 78%

## Quick Start

To recreate this design in a new project:

2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
