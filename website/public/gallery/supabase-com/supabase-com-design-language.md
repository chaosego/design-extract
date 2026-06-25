# Design Language: Supabase | The Postgres Development Platform.

> Extracted from `https://supabase.com` on June 25, 2026
> 2866 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#72e3ad` | rgb(114, 227, 173) | hsl(151, 67%, 67%) | 5 |
| Secondary | `#00bb68` | rgb(0, 187, 104) | hsl(153, 100%, 37%) | 1 |
| Accent | `#a9f1ca` | rgb(169, 241, 202) | hsl(147, 72%, 80%) | 1 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#dfdfdf` | hsl(0, 0%, 87%) | 2738 |
| `#171717` | hsl(0, 0%, 9%) | 1418 |
| `#525252` | hsl(0, 0%, 32%) | 504 |
| `#707070` | hsl(0, 0%, 44%) | 463 |
| `#ffffff` | hsl(0, 0%, 100%) | 267 |
| `#b2b2b2` | hsl(0, 0%, 70%) | 262 |
| `#000000` | hsl(0, 0%, 0%) | 183 |
| `#c7c7c7` | hsl(0, 0%, 78%) | 73 |
| `#ededed` | hsl(0, 0%, 93%) | 12 |
| `#d4d4d4` | hsl(0, 0%, 83%) | 9 |
| `#292929` | hsl(0, 0%, 16%) | 1 |

### Background Colors

Used on large-area elements: `#fcfcfc`, `#f8f8f8`, `#ffffff`, `#fdfdfd`

### Text Colors

Text color palette: `#000000`, `#171717`, `#525252`, `#707070`, `#3fcf8e`, `#b2b2b2`, `#00bb68`

### Gradients

```css
background-image: linear-gradient(rgb(223, 223, 223) 0px, oklab(0.904028 0.0000411272 0.0000180602 / 0.5) 100%);
```

```css
background-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 50%, rgb(255, 255, 255) 85%);
```

```css
background-image: radial-gradient(50% 100% at 50% 0px, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 50%, rgb(252, 252, 252) 100%);
```

```css
background-image: linear-gradient(to right in oklab, rgba(0, 0, 0, 0) 0px, rgb(223, 223, 223) 50%, rgba(0, 0, 0, 0) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#dfdfdf` | border, background | 2738 |
| `#171717` | text, border | 1418 |
| `#525252` | text, border | 504 |
| `#707070` | text, background | 463 |
| `#ffffff` | background | 267 |
| `#b2b2b2` | text, border | 262 |
| `#000000` | text, background | 183 |
| `#c7c7c7` | border | 73 |
| `#ededed` | border | 12 |
| `#d4d4d4` | border | 9 |
| `#3fcf8e` | text, border, background | 7 |
| `#72e3ad` | background | 5 |
| `#02772d` | border | 5 |
| `#292929` | border | 1 |
| `#a9f1ca` | background | 1 |
| `#00bb68` | text | 1 |

## Typography

### Font Families

- **Circular** — used for all (2865 elements)
- **Source Code Pro** — used for body (1 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 72px | 4.5rem | 400 | 72px | normal | h1, span |
| 36px | 2.25rem | 400 | 45px | normal | div, span, h3, br |
| 24px | 1.5rem | 400 | 32px | -0.16px | p, span |
| 18px | 1.125rem | 400 | 28px | normal | p, br, h4 |
| 16px | 1rem | 400 | 24px | normal | html, head, meta, link |
| 14px | 0.875rem | 500 | 20px | normal | li, button, svg, path |
| 12px | 0.75rem | 400 | 16px | normal | a, span, svg, path |

### Heading Scale

```css
h1 { font-size: 72px; font-weight: 400; line-height: 72px; }
h3 { font-size: 36px; font-weight: 400; line-height: 45px; }
h4 { font-size: 18px; font-weight: 400; line-height: 28px; }
h2 { font-size: 16px; font-weight: 400; line-height: 24px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: 24px; }
```

### Font Weights in Use

`400` (2765x), `500` (101x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-40 | 40px | 2.5rem |
| spacing-48 | 48px | 3rem |
| spacing-64 | 64px | 4rem |
| spacing-90 | 90px | 5.625rem |
| spacing-112 | 112px | 7rem |
| spacing-128 | 128px | 8rem |
| spacing-157 | 157px | 9.8125rem |
| spacing-208 | 208px | 13rem |
| spacing-246 | 246px | 15.375rem |
| spacing-304 | 304px | 19rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| md | 6px | 44 |
| lg | 11px | 52 |
| lg | 16px | 73 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
```

## CSS Custom Properties

### Colors

```css
--colors-slate-light-alpha-200: #05294d08;
--colors-slate-dark-300: 192deg 7.2% 13.5%;
--color-pink-500: #f9d8ec;
--color-orange-600: #ffcca7;
--secondary-400: 248.3deg 54.5% 25.9%;
--color-neutral-600: oklch(43.9% 0 0);
--color-orange-800: #fa934e;
--color-violet-1100: #5746af;
--color-blue-700: #96c7f2;
--colors-slate-light-alpha-1000: #00101b82;
--color-neutral-300: oklch(87% 0 0);
--color-purple-800: #be93e4;
--color-brand-600: hsl(156.5deg 86.5% 26.1%);
--tw-inset-ring-shadow: 0 0 #0000;
--colors-gray-dark-alpha-200: #ffffff08;
--color-gray-300: #f3f3f3;
--color-amber-300: #fff4d5;
--color-gray-500: #e8e8e8;
--colors-gray-light-alpha-200: #00000008;
--colors-slate-dark-800: 206.7deg 5.6% 31.6%;
--color-brand-300: hsl(147.5deg 72% 80.4%);
--color-green-500: #ccebd7;
--color-white: #fff;
--borderradius-lg: 8px;
--color-gray-400: #ededed;
--colors-gray-light-900: 0deg 0% 56.1%;
--borderwidth-md: 4px;
--color-blue-400: #e1f0ff;
--color-slate-400: #eceef0;
--colors-gray-light-400: 0deg 0% 92.9%;
--color-crimson-900: #e93d82;
--color-slate-1100: #687076;
--color-gray-100: #fcfcfc;
--colors-gray-dark-alpha-1000: #ffffff73;
--color-gold-100: #fdfdfc;
--color-purple-600: #e3ccf4;
--color-pink-1100: #cd1d8d;
--borderradius-sm: 4px;
--color-violet-500: #e4defc;
--colors-slate-light-400: 210deg 11.8% 93.3%;
--colors-slate-light-alpha-1200: #00080ced;
--color-crimson-1200: #3d0d1d;
--color-green-900: #30a46c;
--color-crimson-100: #fffcfd;
--color-blue-1000: #0081f1;
--color-pink-100: #fffcfe;
--color-neutral-900: oklch(20.5% 0 0);
--colors-gray-light-alpha-700: #00000024;
--color-neutral-100: oklch(97% 0 0);
--color-gold-400: #eeeadd;
--color-amber-1000: #ffa01c;
--colors-gray-light-alpha-800: #00000038;
--color-gold-200: #fbf9f2;
--color-red-1200: #381316;
--color-purple-1000: #8445bc;
--colors-gray-dark-600: 0deg 0% 20.4%;
--colors-gray-dark-200: 0deg 0% 11%;
--colors-gray-dark-400: 0deg 0% 15.7%;
--color-violet-300: #f5f2ff;
--color-scale-1000: #7e868c;
--destructive-300: 7.1deg 100% 96.7%;
--color-brand-200: hsl(147.6deg 72.5% 90%);
--colors-gray-light-1000: 0deg 0% 52.2%;
--color-emerald-900: oklch(37.8% .077 168.94);
--color-slate-600: #dfe3e6;
--color-crimson-1100: #d31e66;
--colors-gray-light-1100: 0deg 0% 43.5%;
--color-pink-600: #f3c6e2;
--colors-gray-light-700: 0deg 0% 85.9%;
--foreground-light: 0deg 0% 32.2%;
--destructive-500: 10.4deg 77.1% 79.4%;
--color-brand-1100: #2b825b;
--color-green-400: #ddf3e4;
--color-gold-1100: #776750;
--colors-slate-light-300: 210deg 16.7% 95.3%;
--color-emerald-50: oklch(97.9% .021 166.113);
--color-indigo-500: #d9e2fc;
--color-purple-400: #f3e7fc;
--color-scale-200: #f8f9fa;
--color-gray-1200: #171717;
--colors-gray-dark-alpha-1100: #ffffff96;
--color-border: hsl(0deg 0% 87.5%);
--color-indigo-700: #aec0f5;
--color-yellow-1100: #946800;
--colors-black: 0deg 0% 0%;
--card-padding-x-md: 1.5rem;
--colors-slate-light-1200: 201.8deg 24.4% 8.8%;
--colors-slate-light-900: 205.7deg 6.3% 56.1%;
--color-amber-100: #fefdfb;
--colors-gray-light-alpha-1100: #0000008f;
--colors-slate-light-700: 210deg 11.1% 85.9%;
--color-indigo-100: #fdfdfe;
--color-red-1100: #cd2b31;
--color-gold-1000: #8c795d;
--color-orange-200: #fef8f4;
--tw-ring-shadow: 0 0 #0000;
--foreground-contrast: 0deg 0% 98.4%;
--color-yellow-600: #f9e68c;
--border-muted: 0deg 0% 92.9%;
--color-gold-500: #e5dfd0;
--colors-gray-light-alpha-1200: #000000e8;
--colors-gray-dark-800: 0deg 0% 31.4%;
--color-neutral-500: oklch(55.6% 0 0);
--color-amber-600: #ffd386;
--color-yellow-800: #ebbc00;
--color-slate-900: #889096;
--color-green-100: #fbfefc;
--colors-slate-dark-alpha-1000: #e7f3ff78;
--colors-slate-light-alpha-100: #05448205;
--secondary-default: 247.8deg 100% 70%;
--color-gold-300: #f5f2e9;
--color-indigo-800: #8da4ef;
--colors-gray-light-300: 0deg 0% 95.3%;
--color-yellow-1000: #f7ce00;
--color-tomato-200: #fff8f7;
--colors-gray-dark-alpha-300: #ffffff0f;
--colors-gray-light-alpha-1000: #0000007a;
--color-violet-900: #6e56cf;
--colors-slate-dark-1100: 207.3deg 5.8% 62.9%;
--colors-slate-light-alpha-700: #001a3329;
--colors-gray-light-alpha-300: #0000000d;
--color-emerald-600: oklch(59.6% .145 163.225);
--color-orange-1200: #451e11;
--color-brand-700: #8ed2af;
--color-purple-100: #fefcfe;
--colors-gray-light-100: 0deg 0% 98.8%;
--color-tomato-900: #e54d2e;
--colors-slate-dark-alpha-100: #0000;
--color-red-800: #eb9091;
--color-red-500: #fdd8d8;
--colors-slate-dark-700: 202.5deg 6.5% 24.3%;
--tw-ring-offset-width: 0px;
--colors-gray-light-200: 0deg 0% 97.3%;
--auth-ui-card-height: 50vh;
--color-green-1200: #153226;
--color-amber-800: #ee9d2b;
--borderradius-xs: 2px;
--background-muted: 0deg 0% 96.9%;
--color-crimson-400: #fce5f0;
--border-button-hover: 0deg 0% 85.9%;
--color-violet-700: #c4b8f3;
--tw-ring-offset-shadow: 0 0 #0000;
--colors-slate-dark-400: 204deg 6.2% 15.9%;
--color-yellow-1200: #35290f;
--color-orange-700: #ffb381;
--border-overlay: 0deg 0% 91%;
--color-amber-500: #ffe3a2;
--color-pink-1000: #d23197;
--color-yellow-700: #efd36c;
--color-violet-100: #fdfcfe;
--colors-gray-light-1200: 0deg 0% 9%;
--colors-slate-light-600: 205.7deg 12.3% 88.8%;
--color-green-800: #5bb98c;
--color-red-700: #f3aeaf;
--color-green-1000: #299764;
--colors-slate-dark-alpha-800: #e5f2fe42;
--color-indigo-200: #f8faff;
--color-gray-900: #8f8f8f;
--color-blue-900: #0090ff;
--colors-slate-light-alpha-300: #0025490d;
--animate-fade-in-overlay-bg: fadeInOverlayBg .3s;
--borderradius-xl: 16px;
--color-gray-700: #dbdbdb;
--color-tomato-1100: #ca3214;
--color-scale-1100: #687076;
--border-default: 0deg 0% 87.5%;
--color-scale-500: #e6e8eb;
--colors-gray-light-alpha-600: #0000001c;
--colors-gray-light-500: 0deg 0% 91%;
--color-green-300: #e9f9ee;
--colors-slate-dark-900: 205.7deg 6.3% 43.9%;
--color-orange-1100: #bd4b00;
--colors-slate-dark-alpha-700: #e0f3ff2e;
--color-indigo-900: #3e63dd;
--color-blue-1100: #006adc;
--color-purple-700: #d3b4ed;
--colors-gray-dark-1000: 0deg 0% 49.4%;
--color-teal-500: oklch(70.4% .14 182.503);
--foreground-lighter: 0deg 0% 43.9%;
--color-yellow-500: #fef2a4;
--colors-gray-dark-alpha-400: #ffffff14;
--color-gray-1100: #6f6f6f;
--color-amber-200: #fff9ed;
--color-purple-200: #fdfaff;
--animate-fade-out-overlay-bg: fadeOutOverlayBg .3s;
--colors-slate-light-alpha-900: #00111e78;
--color-slate-200: #f8f9fa;
--colors-gray-dark-alpha-500: #ffffff1a;
--color-violet-600: #d7cff9;
--color-red-900: #e5484d;
--colors-slate-light-100: 210deg 33.3% 98.8%;
--color-slate-500: #e6e8eb;
--color-tomato-800: #ea9280;
--color-orange-900: #f76808;
--colors-gray-light-alpha-900: #00000070;
--color-brand-1000: #40bf86;
--color-indigo-1100: #3451b2;
--color-blue-300: #edf6ff;
--color-neutral-200: oklch(92.2% 0 0);
--color-green-1100: #18794e;
--color-yellow-400: #fff8bb;
--color-slate-300: #f1f3f5;
--color-brand-400: hsl(151.3deg 66.9% 66.9%);
--color-purple-1100: #793aaf;
--color-scale-100: #fbfcfd;
--color-tomato-600: #fac7be;
--colors-slate-light-800: 205deg 10.7% 78%;
--variables-colors-brand-primary: 153.1deg 60.2% 52.7%;
--color-tomato-1200: #341711;
--colors-slate-dark-1200: 210deg 5.6% 92.9%;
--colors-slate-dark-alpha-1100: #eff7ff9e;
--color-scale-400: #eceef0;
--color-yellow-300: #fffbd1;
--color-brand-100: #fafefd;
--color-emerald-200: oklch(90.5% .093 164.15);
--color-violet-800: #aa99ec;
--colors-gray-light-alpha-400: #00000012;
--color-gold-900: #978365;
--colors-gray-dark-300: 0deg 0% 13.7%;
--color-neutral-700: oklch(37.1% 0 0);
--colors-gray-dark-100: 0deg 0% 8.6%;
--color-blue-800: #5eb0ef;
--color-tomato-400: #ffe6e2;
--destructive-400: 7.1deg 91.3% 91%;
--border-button-default: 0deg 0% 88.6%;
--color-scale-700: #d7dbdf;
--color-gold-800: #b8a383;
--color-indigo-1000: #3a5ccc;
--colors-gray-dark-alpha-900: #ffffff63;
--color-blue-100: #fbfdff;
--color-green-600: #b4dfc4;
--colors-slate-dark-alpha-400: #e2f0fd14;
--color-blue-1200: #00254d;
--color-gold-600: #dad1bd;
--colors-slate-dark-alpha-200: #d5feff08;
--color-red-300: #ffefef;
--color-cyan-500: oklch(71.5% .143 215.221);
--color-orange-500: #ffdcc3;
--color-slate-800: #c1c8cd;
--colors-slate-light-alpha-400: #021c3714;
--borderwidth-xs: 1px;
--color-crimson-500: #f9d8e7;
--color-pink-200: #fff7fc;
--colors-gray-light-alpha-100: #00000003;
--border-secondary: 0deg 0% 92.9%;
--card-padding-x: 1rem;
--color-amber-1100: #ad5700;
--color-brand-500: hsl(155.3deg 78.4% 40%);
--color-violet-1200: #20134b;
--color-emerald-500: oklch(69.6% .17 162.48);
--color-gold-1200: #3b352b;
--color-amber-700: #f3ba63;
--colors-slate-light-1100: 205.7deg 6.3% 43.5%;
--color-amber-900: #ffb224;
--color-violet-200: #fbfaff;
--color-gray-600: #e2e2e2;
--color-orange-100: #fefcfb;
--color-yellow-200: #fffce8;
--color-blue-600: #b7d9f8;
--borderradius-tableheader: 4px;
--tw-border-style: solid;
--color-green-200: #f2fcf5;
--colors-gray-light-600: 0deg 0% 88.6%;
--color-red-600: #f9c6c6;
--border-strong: 0deg 0% 83.1%;
--colors-slate-light-alpha-1100: #000e1896;
--colors-gray-dark-alpha-700: #ffffff2b;
--borderwidth-lg: 8px;
--color-red-1000: #dc3d43;
--color-black: #000;
--color-purple-1200: #2b0e44;
--color-neutral-400: oklch(70.8% 0 0);
--color-violet-1000: #644fc1;
--destructive-200: 0deg 100% 99.4%;
--colors-gray-dark-alpha-100: #0000;
--colors-slate-dark-alpha-300: #d6fbfc0f;
--destructive-default: 10.2deg 77.9% 53.9%;
--colors-white: 0deg 0% 100%;
--color-scale-1200: #11181c;
--color-crimson-800: #e58fb1;
--borderwidth-sm: 2px;
--color-indigo-300: #f0f4ff;
--color-amber-400: #ffecbc;
--color-indigo-400: #e6edfe;
--color-crimson-200: #fff7fb;
--color-purple-500: #eddbf9;
--colors-gray-dark-1100: 0deg 0% 62.7%;
--color-emerald-300: oklch(84.5% .143 164.978);
--color-pink-300: #feeef8;
--destructive-600: 9.9deg 82% 43.5%;
--secondary-200: 248deg 53.6% 11%;
--color-slate-700: #d7dbdf;
--color-pink-400: #fce5f3;
--colors-slate-dark-alpha-500: #dff3fd1c;
--color-crimson-700: #edadc8;
--colors-slate-light-500: 216deg 11.1% 91.2%;
--colors-slate-dark-500: 200deg 6.5% 18%;
--color-emerald-700: oklch(50.8% .118 165.612);
--color-crimson-300: #feeff6;
--color-red-200: #fff8f8;
--border-control: 0deg 0% 78%;
--color-brand-1200: #122b20;
--color-purple-900: #8e4ec6;
--colors-slate-dark-100: 200deg 6.7% 8.8%;
--colors-slate-light-1000: 205.7deg 5.7% 52.2%;
--color-gray-1000: #858585;
--color-pink-800: #e38ec3;
--swiper-theme-color: #007aff;
--colors-gray-light-alpha-500: #00000017;
--color-violet-400: #ede9fe;
--colors-slate-dark-alpha-600: #dfeffe24;
--color-pink-900: #d6409f;
--tw-ring-offset-color: #fff;
--colors-gray-dark-900: 0deg 0% 43.9%;
--color-red-400: #ffe5e5;
--borderwidth-none: 0;
--color-amber-1200: #4e2009;
--color-slate-1200: #11181c;
--color-tomato-700: #f3b0a2;
--colors-slate-dark-600: 205.7deg 6.7% 20.6%;
--border-alternative: 0deg 0% 91%;
--color-gold-700: #cbbda4;
--color-indigo-600: #c6d4f9;
--color-neutral-50: oklch(98.5% 0 0);
--color-crimson-1000: #e03177;
--color-pink-1200: #3b0a2a;
--color-orange-300: #fff1e7;
--color-yellow-100: #fdfdf9;
--color-indigo-1200: #101d46;
--colors-slate-light-alpha-500: #0217351a;
--colors-slate-dark-alpha-900: #e1f1ff69;
--foreground-default: 0deg 0% 9%;
--color-gray-800: #c7c7c7;
--colors-slate-dark-alpha-1200: #fdfeffed;
--colors-gray-dark-alpha-1200: #ffffffeb;
--color-scale-600: #dfe3e6;
--color-scale-300: #f1f3f5;
--variables-colors-brand-accent: 152.9deg 56.1% 46.5%;
--colors-gray-dark-alpha-600: #ffffff21;
--colors-gray-dark-500: 0deg 0% 18%;
--colors-slate-dark-1000: 207.7deg 5.1% 49.6%;
--color-scale-800: #c1c8cd;
--color-stone-500: oklch(55.3% .013 58.071);
--lw-secondary-color: #8a8f98;
--color-emerald-950: oklch(26.2% .051 172.552);
--colors-slate-light-alpha-800: #011e323d;
--border-stronger: 0deg 0% 56.1%;
--color-tomato-1000: #db4324;
--color-orange-400: #ffe8d7;
--color-scale-900: #889096;
--color-brand-900: #3fcf8e;
--color-tomato-100: #fffcfc;
--color-slate-100: #fbfcfd;
--color-brand-800: #34b27b;
--color-blue-500: #cee7fe;
--color-pink-700: #ecadd4;
--foreground-muted: 0deg 0% 69.8%;
--color-yellow-900: #f5d90a;
--color-red-100: #fffcfc;
--colors-gray-dark-1200: 0deg 0% 92.9%;
--color-orange-1000: #ed5f00;
--color-blue-200: #f5faff;
--color-gray-200: #f8f8f8;
--color-tomato-300: #fff0ee;
--colors-gray-dark-alpha-800: #ffffff40;
--color-slate-1000: #7e868c;
--color-crimson-600: #f4c6db;
--color-emerald-400: oklch(76.5% .177 163.223);
--colors-slate-dark-200: 195deg 7.1% 11%;
--color-green-700: #92ceac;
--colors-slate-light-alpha-600: #01213921;
--color-neutral-800: oklch(26.9% 0 0);
--colors-slate-light-200: 210deg 16.7% 97.6%;
--colors-gray-light-800: 0deg 0% 78%;
--color-tomato-500: #fdd8d3;
--colors-gray-dark-700: 0deg 0% 24.3%;
--color-purple-300: #f9f1fe;
```

### Spacing

```css
--spacing-scale: 2px;
--tw-space-x-reverse: 0;
--spacing-lg: 32px;
--tw-space-y-reverse: 0;
--spacing-xl: 64px;
--padding-x-md: 1.5rem;
--spacing-sm: 8px;
--padding-x-sm: 1rem;
--spacing: .25rem;
--spacing-md: 16px;
--spacing-xs: 4px;
```

### Typography

```css
--font-family-body: Inter;
--text-base--line-height: calc(1.5 / 1);
--tracking-wider: .05em;
--text-8xl: 6rem;
--text-sm: .875rem;
--text-lg: 1.125rem;
--text-8xl--line-height: 1;
--text-6xl: 3.75rem;
--default-font-family: Circular,custom-font,Helvetica Neue,Helvetica,Arial,sans-serif;
--tracking-tighter: -.05em;
--font-weight-extrabold: 800;
--text-sm--line-height: calc(1.25 / .875);
--text-3xl--line-height: calc(2.25 / 1.875);
--text-3xl: 1.875rem;
--text-xs: .75rem;
--tracking-widest: .1em;
--font-weight-medium: 500;
--font-weight-normal: 400;
--text-base: 1rem;
--default-mono-font-family: Source Code Pro,Office Code Pro,Menlo,monospace;
--font-weight-bold: 700;
--text-xs--line-height: calc(1 / .75);
--text-xl: 1.25rem;
--leading-relaxed: 1.625;
--leading-snug: 1.375;
--text-2xl--line-height: calc(2 / 1.5);
--text-xl--line-height: calc(1.75 / 1.25);
--leading-tight: 1.25;
--text-4xl--line-height: calc(2.5 / 2.25);
--tracking-tight: -.025em;
--text-2xl: 1.5rem;
--text-7xl: 4.5rem;
--text-5xl--line-height: 1;
--leading-normal: 1.5;
--text-lg--line-height: calc(1.75 / 1.125);
--font-weight-light: 300;
--text-7xl--line-height: 1;
--tracking-wide: .025em;
--font-weight-semibold: 600;
--text-4xl: 2.25rem;
--tracking-normal: 0em;
--text-5xl: 3rem;
--text-6xl--line-height: 1;
```

### Shadows

```css
--tw-inset-shadow: 0 0 #0000;
--tw-shadow-alpha: 100%;
--tw-drop-shadow-alpha: 100%;
--drop-shadow-xs: 0 1px 1px #0000000d;
--tw-shadow: 0 0 #0000;
--tw-inset-shadow-alpha: 100%;
--drop-shadow-lg: 0 4px 4px #00000026;
--drop-shadow-md: 0 3px 3px #0000001f;
```

### Radii

```css
--radius-sm: .25rem;
--radius-md: .375rem;
--radius-lg: .5rem;
--radius-2xl: 1rem;
--radius-3xl: 1.5rem;
--radius-xs: .125rem;
--radius-xl: .75rem;
```

### Other

```css
--animate-spinner: spinner 1s both infinite;
--ch-17: #add6ff;
--animate-dropdown-content-show: overlayContentShow .1s cubic-bezier(.16,1,.3,1);
--blur-lg: 16px;
--background-dialog-default: 0deg 0% 100%;
--ease-in: cubic-bezier(.4,0,1,1);
--tw-enter-scale: 1;
--brand-link: 153.4deg 100% 36.7%;
--ch-0: light;
--ch-25: #eaeef280;
--animate-slide-down: slideDown .3s cubic-bezier(.87,0,.13,1);
--background-overlay-hover: 0deg 0% 95.3%;
--animate-dropdown-content-hide: overlayContentHide .1s cubic-bezier(.16,1,.3,1);
--animate-panel-slide-right-out: panelSlideRightOut .2s cubic-bezier(.87,0,.13,1);
--background-surface-75: 0deg 0% 100%;
--tw-exit-translate-y: 0;
--ch-16: #eeeeee;
--warning-300: 44.3deg 100% 91.8%;
--tw-gradient-to-position: 100%;
--animate-line-loading-slower: lineLoading 2.3s infinite;
--datatable-headericon: 16px;
--ch-13: #ffd8b5;
--animate-marquee-vertical: marquee-vertical 180s linear infinite both;
--background-surface-200: 0deg 0% 95.3%;
--icon-xs: 12px;
--sizing-sm: 6px;
--ch-23: #fd8c73;
--tw-scale-y: 1;
--container-6xl: 72rem;
--tw-exit-translate-x: 0;
--brand-400: 151.3deg 66.9% 66.9%;
--warning-200: 40deg 81.8% 97.8%;
--ch-14: #eaeef2;
--animate-collapsible-down: collapsible-down .1s ease-out;
--background-alternative-default: 0deg 0% 99.2%;
--tw-enter-blur: 0;
--brand-300: 147.5deg 72% 80.4%;
--animate-slide-up: slideUp .3s cubic-bezier(.87,0,.13,1);
--container-xl: 36rem;
--brand-600: 156.5deg 86.5% 26.1%;
--ch-7: #cf222e;
--ch-3: #953800;
--tw-animation-direction: normal;
--code-block-3: 83.8deg 61.6% 48%;
--ch-1: #6e7781;
--animate-panel-slide-left-in: panelSlideLeftIn .25s cubic-bezier(.87,0,.13,1);
--background-default: 0deg 0% 98.8%;
--animate-slide-up-normal: slideUpNormal .3s cubic-bezier(.87,0,.13,1);
--ch-4: #24292f;
--tw-divide-x-reverse: 0;
--breakpoint-2xl: 96rem;
--content-width-screen-xl: 1128px;
--xxl: 128px;
--animate-slide-in: slideIn .25s ease-in both;
--ch-9: #82071e;
--tw-exit-rotate: 0;
--container-sm: 24rem;
--rotate: 132deg;
--background-200: 0deg 0% 97.3%;
--tw-gradient-from-position: 0px;
--sizing-md: 9px;
--ch-21: #f6f8fa;
--tw-animation-fill-mode: none;
--tw-exit-blur: 0;
--input-sm-height: 28px;
--ch-22: #d0d7de;
--warning-default: 30.3deg 80.3% 47.8%;
--ch-24: #afb8c133;
--blur-md: 12px;
--tw-enter-translate-x: 0;
--container-4xl: 56rem;
--animate-fade-in: fadeIn .3s both;
--background-dash-canvas: 0deg 0% 97.3%;
--animate-panel-slide-right-in: panelSlideRightIn .25s cubic-bezier(.87,0,.13,1);
--tw-enter-opacity: 1;
--container-md: 28rem;
--aspect-video: 16/9;
--sizing-xs: 4px;
--tw-animation-delay: 0s;
--animate-marquee: marquee 35s linear infinite;
--ch-19: #fdff0033;
--tw-outline-style: solid;
--background-alternative-200: 0deg 0% 100%;
--background-dash-sidebar: 0deg 0% 98.8%;
--tw-gradient-from: rgba(0, 0, 0, 0);
--tw-gradient-to: rgba(0, 0, 0, 0);
--code-block-1: 170.6deg 43.2% 51%;
--ch-8: hsl(152.9deg 60% 52.9%);
--blur-2xl: 40px;
--brand-200: 147.6deg 72.5% 90%;
--tw-gradient-via-position: 50%;
--warning-400: 41.9deg 100% 81.8%;
--panel2: 4px;
--default-transition-duration: .15s;
--brand-default: 152.9deg 60% 52.9%;
--ch-11: #ffebe9;
--animate-pulse: pulse 2s cubic-bezier(.4,0,.6,1) infinite;
--container-xs: 20rem;
--datatable-rowheight: 28px;
--code-block-4: 276.3deg 60% 52.9%;
--ch-2: #0550ae;
--default-transition-timing-function: cubic-bezier(.4,0,.2,1);
--tw-animation-iteration-count: 1;
--tw-exit-opacity: 1;
--background-button-default: 0deg 0% 98.8%;
--helpers-os-appearance: Light;
--tw-translate-z: 0;
--tw-gradient-via: rgba(0, 0, 0, 0);
--animate-collapsible-up: collapsible-up .1s ease-out;
--options-icon: 18px;
--warning-500: 36.3deg 85.7% 67.1%;
--animate-overlay-show: overlayContentShow .3s cubic-bezier(.16,1,.3,1);
--breakpoint-lg: 64rem;
--container-3xl: 48rem;
--blur-xs: 4px;
--tw-translate-y: 0;
--ease-out: cubic-bezier(0,0,.2,1);
--tw-content: "";
--background-overlay-default: 0deg 0% 98.8%;
--ch-12: #dafbe1;
--icon-sm: 16px;
--tw-translate-x: 0;
--tw-enter-rotate: 0;
--sizing-scale: 1.5px;
--iconwidth-default: 1px;
--animate-bounce: bounce 1s infinite;
--sizing-lg: 13.5px;
--brand-500: 155.3deg 78.4% 40%;
--ch-10: #f6f8fa;
--ch-6: hsl(156.5deg 86.5% 26.1%);
--blur-xl: 24px;
--animate-overlay-hide: overlayContentHide .3s cubic-bezier(.16,1,.3,1);
--animate-accordion-down: accordion-down .15s ease-out;
--tw-scale-z: 1;
--background-surface-300: 0deg 0% 92.9%;
--tw-scroll-snap-strictness: proximity;
--container-lg: 32rem;
--ch-15: #57606a;
--warning-600: 30.3deg 80.3% 47.8%;
--code-block-2: 33.1deg 80% 52.9%;
--animate-panel-slide-left-out: panelSlideLeftOut .2s cubic-bezier(.87,0,.13,1);
--ease-in-out: cubic-bezier(.4,0,.2,1);
--code-block-5: 14deg 80.4% 58%;
--icon-md: 18px;
--animate-accordion-up: accordion-up .15s ease-out;
--background-selection: 0deg 0% 92.9%;
--ch-18: #1a85ff;
--background-surface-100: 0deg 0% 98.8%;
--panel: 2px;
--container-5xl: 64rem;
--perspective-distant: 1200px;
--background-control: 0deg 0% 95.3%;
--animate-spin: spin 1s linear infinite;
--animate-slide-down-normal: slideDownNormal .3s cubic-bezier(.87,0,.13,1);
--ch-5: #8250df;
--tw-divide-y-reverse: 0;
--container-2xl: 42rem;
--tw-exit-scale: 1;
--ch-20: #8c959f;
--sizing-xl: 20.25px;
--tw-enter-translate-y: 0;
--tw-scale-x: 1;
--background-surface-400: 0deg 0% 89.8%;
--container-7xl: 80rem;
```

### Semantic

```css
--color-green-500: #ccebd7;
--color-green-900: #30a46c;
--color-green-400: #ddf3e4;
--color-green-100: #fbfefc;
--color-green-1200: #153226;
--color-green-800: #5bb98c;
--color-green-1000: #299764;
--color-green-300: #e9f9ee;
--color-green-1100: #18794e;
--color-green-600: #b4dfc4;
--color-green-200: #f2fcf5;
--color-green-700: #92ceac;
--color-amber-300: #fff4d5;
--warning-300: 44.3deg 100% 91.8%;
--color-amber-1000: #ffa01c;
--warning-200: 40deg 81.8% 97.8%;
--color-yellow-1100: #946800;
--color-amber-100: #fefdfb;
--color-yellow-600: #f9e68c;
--color-amber-600: #ffd386;
--color-yellow-800: #ebbc00;
--color-yellow-1000: #f7ce00;
--color-amber-800: #ee9d2b;
--color-yellow-1200: #35290f;
--color-amber-500: #ffe3a2;
--color-yellow-700: #efd36c;
--warning-default: 30.3deg 80.3% 47.8%;
--color-yellow-500: #fef2a4;
--color-amber-200: #fff9ed;
--color-yellow-400: #fff8bb;
--color-yellow-300: #fffbd1;
--warning-400: 41.9deg 100% 81.8%;
--warning-500: 36.3deg 85.7% 67.1%;
--color-amber-1100: #ad5700;
--color-amber-700: #f3ba63;
--color-amber-900: #ffb224;
--color-yellow-200: #fffce8;
--color-amber-400: #ffecbc;
--color-amber-1200: #4e2009;
--warning-600: 30.3deg 80.3% 47.8%;
--color-yellow-100: #fdfdf9;
--color-yellow-900: #f5d90a;
--color-red-1200: #381316;
--destructive-300: 7.1deg 100% 96.7%;
--destructive-500: 10.4deg 77.1% 79.4%;
--color-red-1100: #cd2b31;
--color-red-800: #eb9091;
--color-red-500: #fdd8d8;
--color-red-700: #f3aeaf;
--color-red-900: #e5484d;
--destructive-400: 7.1deg 91.3% 91%;
--color-red-300: #ffefef;
--color-red-600: #f9c6c6;
--color-red-1000: #dc3d43;
--destructive-200: 0deg 100% 99.4%;
--destructive-default: 10.2deg 77.9% 53.9%;
--destructive-600: 9.9deg 82% 43.5%;
--color-red-200: #fff8f8;
--color-red-400: #ffe5e5;
--color-red-100: #fffcfc;
--color-blue-700: #96c7f2;
--color-blue-400: #e1f0ff;
--color-blue-1000: #0081f1;
--color-blue-900: #0090ff;
--color-blue-1100: #006adc;
--color-blue-300: #edf6ff;
--color-blue-800: #5eb0ef;
--color-blue-100: #fbfdff;
--color-blue-1200: #00254d;
--color-blue-600: #b7d9f8;
--color-blue-500: #cee7fe;
--color-blue-200: #f5faff;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 480px | min-width |
| sm | 520px | max-width |
| 560px | 560px | min-width |
| sm | 600px | min-width |
| sm | 640px | min-width |
| md | 720px | max-width |
| md | 768px | min-width |
| md | 769px | max-width |
| lg | 960px | min-width |
| lg | 1024px | min-width |
| xl | 1280px | min-width |
| 2xl | 1535px | min-width |
| 2xl | 1536px | min-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0, 0, 0.2, 1)`, `ease`

**Durations:** `0.3s`, `0.2s`, `0s`, `0.15s`, `0.75s`, `1s`, `0.075s`

### Common Transitions

```css
transition: all;
transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: 0.2s cubic-bezier(0, 0, 0.2, 1);
transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), fill 0.2s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.2s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.2s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.2s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), translate 0.2s cubic-bezier(0.4, 0, 0.2, 1), scale 0.2s cubic-bezier(0.4, 0, 0.2, 1), rotate 0.2s cubic-bezier(0.4, 0, 0.2, 1), filter 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 0.2s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.2s cubic-bezier(0.4, 0, 0.2, 1), display 0.2s cubic-bezier(0.4, 0, 0.2, 1), content-visibility 0.2s cubic-bezier(0.4, 0, 0.2, 1), overlay 0.2s cubic-bezier(0.4, 0, 0.2, 1), pointer-events 0.2s cubic-bezier(0.4, 0, 0.2, 1);
transition: 0s 0.3s;
transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), translate 0.15s cubic-bezier(0.4, 0, 0.2, 1), scale 0.15s cubic-bezier(0.4, 0, 0.2, 1), rotate 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.75s ease-out;
```

### Keyframe Animations

**swipe-out**
```css
@keyframes swipe-out {
  0% { transform: translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount))); opacity: 1; }
  100% { transform: translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%)); opacity: 0; }
}
```

**sonner-fade-in**
```css
@keyframes sonner-fade-in {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}
```

**sonner-fade-out**
```css
@keyframes sonner-fade-out {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.8); }
}
```

**sonner-spin**
```css
@keyframes sonner-spin {
  0% { opacity: 1; }
  100% { opacity: 0.15; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (30 instances)

```css
.buttons {
  background-color: rgb(253, 253, 253);
  color: rgb(23, 23, 23);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 6px;
}
```

### Cards (127 instances)

```css
.cards {
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  padding-top: 24px;
  padding-right: 24px;
}
```

### Inputs (1 instances)

```css
.inputs {
  background-color: oklab(0.204404 0.00000931323 0.00000409782 / 0.026);
  color: rgb(23, 23, 23);
  border-color: rgb(199, 199, 199);
  border-radius: 6px;
  font-size: 14px;
  padding-top: 8px;
  padding-right: 8px;
}
```

### Links (212 instances)

```css
.links {
  color: rgb(23, 23, 23);
  font-size: 16px;
  font-weight: 400;
}
```

### Navigation (3 instances)

```css
.navigation {
  color: rgb(23, 23, 23);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}
```

### Footer (1 instances)

```css
.footer {
  background-color: rgb(253, 253, 253);
  color: rgb(23, 23, 23);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (2 instances)

```css
.modals {
  border-radius: 6px;
  padding-top: 8px;
  padding-right: 8px;
}
```

### Dropdowns (6 instances)

```css
.dropdowns {
  border-radius: 6px;
  border-color: rgb(223, 223, 223);
  padding-top: 8px;
}
```

### Tabs (3 instances)

```css
.tabs {
  background-color: rgb(253, 253, 253);
  color: rgb(23, 23, 23);
  font-size: 14px;
  font-weight: 400;
  padding-top: 8px;
  padding-right: 32px;
  border-color: rgb(223, 223, 223);
  border-radius: 3.35544e+07px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(23, 23, 23);
  padding: 8px 8px 8px 8px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 14px;
  font-weight: 500;
```

### Button — 5 instances, 1 variant

**Variant 1** (5 instances)

```css
  background: rgb(253, 253, 253);
  color: rgb(23, 23, 23);
  padding: 4px 10px 4px 10px;
  border-radius: 6px;
  border: 1px solid rgb(212, 212, 212);
  font-size: 12px;
  font-weight: 400;
```

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgb(253, 253, 253);
  color: rgb(23, 23, 23);
  padding: 8px 12px 8px 12px;
  border-radius: 6px;
  border: 1px solid rgb(212, 212, 212);
  font-size: 14px;
  font-weight: 400;
```

### Button — 6 instances, 1 variant

**Variant 1** (6 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(112, 112, 112);
  padding: 0px 0px 0px 0px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0);
  font-size: 12px;
  font-weight: 400;
```

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgb(253, 253, 253);
  color: rgb(23, 23, 23);
  padding: 8px 32px 8px 32px;
  border-radius: 3.35544e+07px;
  border: 1px solid rgb(23, 23, 23);
  font-size: 14px;
  font-weight: 400;
```

### Link — 54 instances, 1 variant

**Variant 1** (54 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(23, 23, 23);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(223, 223, 223);
  font-size: 16px;
  font-weight: 400;
```

### Card — 54 instances, 1 variant

**Variant 1** (54 instances)

```css
  background: rgb(255, 255, 255);
  color: rgb(23, 23, 23);
  padding: 24px 24px 24px 24px;
  border-radius: 16px;
  border: 1px solid rgb(223, 223, 223);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: oklab(0.204404 0.00000931323 0.00000409782 / 0.026);
  color: rgb(23, 23, 23);
  padding: 8px 8px 8px 8px;
  border-radius: 6px;
  border: 1px solid rgb(199, 199, 199);
  font-size: 14px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(114, 227, 173);
  color: rgb(23, 23, 23);
  padding: 4px 10px 4px 10px;
  border-radius: 6px;
  border: 1px solid oklab(0.685565 -0.144466 0.057858 / 0.75);
  font-size: 12px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(23, 23, 23);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(223, 223, 223);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(82, 82, 82);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(223, 223, 223);
  font-size: 16px;
  font-weight: 400;
```

## Layout System

**7 grid containers** and **591 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1280px | 96px |
| 672px | 0px |
| 100% | 0px |
| 1152px | 8px |
| 1400px | 0px |
| 1600px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 12-column | 3x |
| 10-column | 1x |
| 7-column | 1x |
| 1-column | 1x |
| 6-column | 1x |

### Grid Templates

```css
grid-template-columns: 79.6562px 79.6562px 79.6562px 79.6562px 79.6562px 79.6562px 79.6562px 79.6562px 79.6562px 79.6562px 79.6562px 79.6562px;
gap: 12px;
grid-template-columns: 72.3281px 72.3281px 72.3281px 72.3281px 72.3281px 72.3281px 72.3281px 72.3281px 72.3281px 72.3281px 72.3281px 72.3281px;
gap: 20px;
grid-template-columns: 141.703px 141.703px 141.703px 141.703px 141.703px 141.703px 141.703px;
gap: 16px;
grid-template-columns: 81.3281px 81.3281px 81.3281px 81.3281px 81.3281px 81.3281px 81.3281px 81.3281px 81.3281px 81.3281px 81.3281px 81.3281px;
gap: 16px;
grid-template-columns: 772.578px;
gap: 32px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 468x |
| column/nowrap | 122x |
| row/wrap | 1x |

**Gap values:** `112px`, `12px`, `16px`, `20px`, `24px`, `32px`, `48px`, `48px 16px`, `4px`, `8px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 3 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#171717` | `#fdfdfd` | 17.62:1 | AAA |

## Design System Score

**Overall: 96/100 (Grade: A)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 100/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 433 !important rules — prefer specificity over overrides
- 4482 duplicate CSS declarations

## Gradients

**4 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |
| linear | to top | 3 | bold |
| radial | — | 4 | bold |
| linear | to right in oklab | 3 | bold |

```css
background: linear-gradient(rgb(223, 223, 223) 0px, oklab(0.904028 0.0000411272 0.0000180602 / 0.5) 100%);
background: linear-gradient(to top, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 50%, rgb(255, 255, 255) 85%);
background: radial-gradient(50% 100% at 50% 0px, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 50%, rgb(252, 252, 252) 100%);
background: linear-gradient(to right in oklab, rgba(0, 0, 0, 0) 0px, rgb(223, 223, 223) 50%, rgba(0, 0, 0, 0) 100%);
```

## Z-Index Map

**6 unique z-index values** across 2 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| sticky | 10,40 | nav.r.e.l.a.t.i.v.e. .z.-.1.0. .f.l.e.x.-.1. .i.t.e.m.s.-.c.e.n.t.e.r. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .h.i.d.d.e.n. .p.l.-.8. .s.m.:.s.p.a.c.e.-.x.-.4. .l.g.:.f.l.e.x. .h.-.1.6, div.r.e.l.a.t.i.v.e. .z.-.1.0. .l.g.:.h.-.a.u.t.o. .p.t.-.[.9.0.p.x.]. .l.g.:.p.t.-.[.9.0.p.x.]. .l.g.:.m.i.n.-.h.-.[.3.0.0.p.x.]. .f.l.e.x. .f.l.e.x.-.c.o.l. .i.t.e.m.s.-.c.e.n.t.e.r. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .s.m.:.m.x.-.a.u.t.o. .m.d.:.w.-.3./.4. .l.g.:.m.x.-.0. .l.g.:.w.-.f.u.l.l. .g.a.p.-.4. .l.g.:.g.a.p.-.8, div.z.-.1.0. .r.o.u.n.d.e.d.-.[.7.p.x.]. .m.d.:.r.o.u.n.d.e.d.-.[.1.1.p.x.]. .r.e.l.a.t.i.v.e. .o.v.e.r.f.l.o.w.-.h.i.d.d.e.n. .f.l.e.x.-.1. .f.l.e.x. .f.l.e.x.-.r.o.w. .s.m.:.f.l.e.x.-.c.o.l. .g.a.p.-.4. .i.t.e.m.s.-.s.t.a.r.t. .s.m.:.i.t.e.m.s.-.c.e.n.t.e.r. .l.g.:.i.t.e.m.s.-.s.t.a.r.t. .j.u.s.t.i.f.y.-.b.e.t.w.e.e.n. .b.g.-.s.u.r.f.a.c.e.-.7.5. .w.-.f.u.l.l. .h.-.f.u.l.l. .t.e.x.t.-.f.o.r.e.g.r.o.u.n.d.-.l.i.g.h.t.e.r. .[.&._.s.t.r.o.n.g.].:.f.o.n.t.-.n.o.r.m.a.l.!. .[.&._.s.t.r.o.n.g.].:.t.e.x.t.-.f.o.r.e.g.r.o.u.n.d.!. .p.-.4. .s.m.:.p.y.-.6 |
| base | 0,1 | figure.a.b.s.o.l.u.t.e. .i.n.s.e.t.-.0. .z.-.0. .h.i.d.d.e.n. .s.m.:.b.l.o.c.k, img.h.i.d.d.e.n. .d.a.r.k.:.b.l.o.c.k. .a.b.s.o.l.u.t.e. .a.n.t.i.a.l.i.a.s.e.d. .i.n.s.e.t.-.0. .o.b.j.e.c.t.-.c.o.n.t.a.i.n. .o.b.j.e.c.t.-.c.e.n.t.e.r. .z.-.0. .w.-.f.u.l.l. .m.d.:.w.-.a.u.t.o. .h.-.f.u.l.l. .t.r.a.n.s.i.t.i.o.n.-.o.p.a.c.i.t.y. .g.r.o.u.p.-.h.o.v.e.r.:.o.p.a.c.i.t.y.-.8.0, img.d.a.r.k.:.h.i.d.d.e.n. .a.b.s.o.l.u.t.e. .a.n.t.i.a.l.i.a.s.e.d. .i.n.s.e.t.-.0. .o.b.j.e.c.t.-.c.o.n.t.a.i.n. .o.b.j.e.c.t.-.c.e.n.t.e.r. .z.-.0. .w.-.f.u.l.l. .m.d.:.w.-.a.u.t.o. .h.-.f.u.l.l. .t.r.a.n.s.i.t.i.o.n.-.o.p.a.c.i.t.y. .g.r.o.u.p.-.h.o.v.e.r.:.o.p.a.c.i.t.y.-.8.0 |

## SVG Icons

**47 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 4 |
| sm | 10 |
| md | 12 |
| lg | 2 |
| xl | 19 |

**Icon colors:** `currentColor`, `url(#_R_3amela6_-paint0)`, `url(#_R_3amela6_-paint1)`, `#3ECF8E`, `hsl(var(--background-surface-200))`, `hsl(var(--foreground-lighter))`, `white`, `url(#_R_2nula6_-paint0)`, `url(#_R_2nula6_-paint1)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| custom-font | self-hosted | 400, 500 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 151 | objectFit: fill, borderRadius: 0px, shape: square |
| general | 16 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (70x), 21:9 (20x), 16:9 (12x), 2:3 (9x), 3:2 (8x), 4.39:1 (6x), 4:3 (5x), 2.03:1 (4x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `instant` | `75ms` | 75 |
| `xs` | `150ms` | 150 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `xl` | `750ms` | 750 |

### Easing Families

- **custom** (309 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`
- **ease-out** (29 uses) — `cubic-bezier(0, 0, 0.2, 1)`
- **ease-in-out** (2 uses) — `ease`

## Component Anatomy

### link — 54 instances

**Sizes:** md

### card — 54 instances

**Slots:** description, media
**Sizes:** xs

### button — 24 instances

**Slots:** label, icon
**Variants:** outline
**Sizes:** md · lg

| variant | count | sample label |
|---|---|---|
| outline | 19 | Product |
| default | 5 | Table Editor |

## Brand Voice

**Tone:** neutral · **Pronoun:** third-person · **Headings:** Sentence case (tight)

### Top CTA Verbs

- **view** (8)
- **nerdburn** (3)
- **patrickc** (3)
- **aliahsan** (3)
- **yatsiv** (3)
- **create** (3)
- **tyronbache** (3)
- **minimeditor** (3)

### Button Copy Patterns

- "view template" (6×)
- "@nerdburn

it’s fun, feels lightweight, and really quick to spin up user auth and a few tables. almost too easy! highly recommend." (3×)
- "@patrickc

very impressed by @supabase's growth. for new startups, they seem to have gone from "promising" to "standard" in remarkably short order." (3×)
- "@aliahsan_sfv

okay, i finally tried supabase today and wow... why did i wait so long? 😅 went from 'how do i even start' to having auth + database + real-time" (3×)
- "@yatsiv_yuriy

supabase is the best product experience i've had in years.
not just tech - taste.
from docs to latency to the url structure that makes you think" (3×)
- "@adeelibr

@supabase shout out, their mcp is awesome. it's helping me create better row securities and telling me best practises for setting up a supabase app" (3×)
- "@tyronbache

really impressed with @supabase's assistant.

it has helped me troubleshoot and solve complex cors configuration issues on pinger." (3×)
- "@minimeditor

i’ve always used supabase just as a database.

yesterday, i helped debug a founder’s vibe-coding project built with react + react router — no back" (3×)
- "@orlandopedro_

love @supabase custom domains

makes the auth so much better" (3×)
- "@sdusteric

loving #supabase mcp. claude code would not only plan what data we should save but also figure out a migration script by checking what the schema lo" (3×)

### Sample Headings

> Build in a weekend
Scale to millions
> Postgres Database
> Authentication
> Edge Functions
> Storage
> Footer

## Page Intent

**Type:** `landing` (confidence 0.29)
**Description:** Build production-grade applications with a Postgres database, Authentication, instant APIs, Realtime, Functions, Storage and Vector embeddings. Start for free.

Alternates: legal (0.4), blog-post (0.35)

## Section Roles

Reading order (top→bottom): nav → nav → testimonials → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | nav | — | 0.9 |
| 2 | testimonials | Build in a weekend
Scale to millions | 0.4 |
| 3 | footer | Footer | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.217 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 16px |
| backdrop-filter in use | no |
| Gradients | 4 |

## Imagery Style

**Label:** `flat-illustration` (confidence 0.129)
**Counts:** total 167, svg 84, icon 55, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Component Library

**Detected:** `shadcn/ui` (confidence 0.65)

Evidence:
- shadcn css tokens

Also considered: tailwind-ui (0.54), tailwindcss (0.3)

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Circular` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
