# Design Language: Free screen recorder for Mac and PC | Loom

> Extracted from `https://loom.com` on June 25, 2026
> 1283 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#1868db` | rgb(24, 104, 219) | hsl(215, 80%, 48%) | 125 |
| Secondary | `#ffab00` | rgb(255, 171, 0) | hsl(40, 100%, 50%) | 9 |
| Accent | `#e9f2fe` | rgb(233, 242, 254) | hsl(214, 91%, 95%) | 43 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#292a2e` | hsl(228, 6%, 17%) | 1119 |
| `#000000` | hsl(0, 0%, 0%) | 407 |
| `#ffffff` | hsl(0, 0%, 100%) | 161 |
| `#696969` | hsl(0, 0%, 41%) | 63 |
| `#555555` | hsl(0, 0%, 33%) | 29 |
| `#f8f8f8` | hsl(0, 0%, 97%) | 7 |
| `#7d818a` | hsl(222, 5%, 52%) | 2 |
| `#d8d8d8` | hsl(0, 0%, 85%) | 2 |
| `#bbbbbb` | hsl(0, 0%, 73%) | 1 |

### Background Colors

Used on large-area elements: `#ffffff`, `#101214`, `#1868db`, `#eed7fc`, `#efffd6`, `#f8eefe`, `#e9f2fe`, `#fff5d4`, `#123263`, `#1558bc`, `#292a2e`

### Text Colors

Text color palette: `#000000`, `#292a2e`, `#7d818a`, `#101214`, `#ffffff`, `#ff613d`, `#1868db`, `#bf63f3`, `#c97cf4`, `#48245d`

### Gradients

```css
background-image: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0));
```

```css
background-image: linear-gradient(to top, rgb(179, 223, 114), rgba(255, 255, 255, 0));
```

```css
background-image: linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 55%, rgb(233, 242, 254) 55%, rgb(233, 242, 254) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#292a2e` | text, border, background | 1119 |
| `#101214` | text, border, background | 616 |
| `#000000` | text, border, background | 407 |
| `#ffffff` | background, text, border | 161 |
| `#1868db` | background, text, border | 125 |
| `#696969` | text, border | 63 |
| `#e9f2fe` | background, text, border | 43 |
| `#555555` | text, border | 29 |
| `#bf63f3` | text, border | 10 |
| `#3860be` | text, border, background | 10 |
| `#ff613d` | background, text, border | 9 |
| `#ffab00` | background, border | 9 |
| `#27455c` | background | 8 |
| `#f8f8f8` | background | 7 |
| `#48245d` | background, text, border | 5 |
| `#172b4d` | text | 5 |
| `#82b536` | background | 3 |
| `#7d818a` | text, border | 2 |
| `#c97cf4` | text, border | 2 |
| `#123263` | background | 2 |
| `#1558bc` | background | 2 |
| `#0052cc` | text, border | 2 |
| `#d8d8d8` | border | 2 |
| `#eed7fc` | background | 1 |
| `#efffd6` | background | 1 |
| `#fff5d4` | background | 1 |
| `#32ae88` | border | 1 |
| `#bbbbbb` | border | 1 |

## Typography

### Font Families

- **Charlie Text** — used for all (1057 elements)
- **Charlie Display** — used for all (30 elements)
- **Times** — used for body (4 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 56.5385px | 3.5337rem | 700 | 58.1781px | normal | h1, h2 |
| 40.3077px | 2.5192rem | 700 | 46.0717px | normal | h2, p |
| 30px | 1.875rem | 700 | 38.19px | normal | h2, h3 |
| 25.3077px | 1.5817rem | 400 | 38.5689px | normal | div, p |
| 24px | 1.5rem | 400 | normal | normal | div, span |
| 23.5385px | 1.4712rem | 700 | 31.3768px | normal | p, h3, blockquote |
| 18.4px | 1.15rem | 400 | 27.6px | normal | text, tspan |
| 18.2462px | 1.1404rem | 400 | 30.0514px | normal | div, p, a, br |
| 18px | 1.125rem | 500 | 27px | normal | svg, rect, path, line |
| 16px | 1rem | 400 | 24px | normal | html, head, meta, script |
| 15.2308px | 0.9519rem | 400 | 26.1055px | normal | a, span, svg, path |
| 15px | 0.9375rem | 400 | 22.5px | normal | a, span |
| 14.4px | 0.9rem | 600 | 14.4px | 0.144px | button, svg, title, g |
| 14px | 0.875rem | 600 | 21px | normal | h4 |
| 13.6px | 0.85rem | 400 | 27.2px | normal | div, svg, path, span |

### Heading Scale

```css
h1 { font-size: 56.5385px; font-weight: 700; line-height: 58.1781px; }
h2 { font-size: 40.3077px; font-weight: 700; line-height: 46.0717px; }
h2 { font-size: 30px; font-weight: 700; line-height: 38.19px; }
h3 { font-size: 23.5385px; font-weight: 700; line-height: 31.3768px; }
h3 { font-size: 16px; font-weight: 400; line-height: 24px; }
h4 { font-size: 14px; font-weight: 600; line-height: 21px; }
h4 { font-size: 12.2308px; font-weight: 700; line-height: 17.7958px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: 24px; }
```

### Font Weights in Use

`400` (1104x), `700` (104x), `500` (51x), `600` (24x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-15 | 15px | 0.9375rem |
| spacing-23 | 23px | 1.4375rem |
| spacing-30 | 30px | 1.875rem |
| spacing-35 | 35px | 2.1875rem |
| spacing-40 | 40px | 2.5rem |
| spacing-48 | 48px | 3rem |
| spacing-56 | 56px | 3.5rem |
| spacing-64 | 64px | 4rem |
| spacing-80 | 80px | 5rem |
| spacing-84 | 84px | 5.25rem |
| spacing-103 | 103px | 6.4375rem |
| spacing-154 | 154px | 9.625rem |
| spacing-192 | 192px | 12rem |
| spacing-269 | 269px | 16.8125rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 1px | 8 |
| md | 6px | 2 |
| lg | 12px | 4 |
| lg | 16px | 2 |
| xl | 24px | 1 |
| full | 39px | 18 |
| full | 50px | 4 |
| full | 66px | 20 |
| full | 9999px | 58 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 4.34077px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(255, 255, 255, 0.4) 0px 0px 0px 5px, rgba(0, 0, 0, 0.17) 0px 45.612px 86.879px 0px, rgba(0, 0, 0, 0.11) 0px 13.751px 26.192px 0px, rgba(0, 0, 0, 0.09) 0px 5.71104px 10.879px 0px, rgba(0, 0, 0, 0.06) 0px 2.06592px 3.93504px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 2px 6px 0px, rgba(0, 0, 0, 0.06) 0px 5px 18px 0px, rgba(0, 0, 0, 0.1) 0px 24px 83px 0px;
```

**sm** — blur: 3.24px
```css
box-shadow: rgba(0, 0, 0, 0.25) 0px 3.24px 3.24px 0px;
```

**sm** — blur: 6px
```css
box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 6px 0px, rgba(0, 0, 0, 0.06) 0px 5px 18px 0px, rgba(0, 0, 0, 0.1) 0px 24px 83px 0px;
```

**md** — blur: 5px
```css
box-shadow: rgb(199, 197, 199) -3px -3px 5px -2px;
```

**md** — blur: 6.4px
```css
box-shadow: rgba(0, 0, 0, 0.03) 0px 4px 6.4px 0px, rgba(0, 0, 0, 0.05) 0px 3px 9.6px 0px, rgba(0, 0, 0, 0.07) 0px 8px 32px 0px, rgba(0, 0, 0, 0.1) 0px 32px 96px 0px;
```

**md** — blur: 6px
```css
box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px 3px;
```

**md** — blur: 10px
```css
box-shadow: rgb(153, 153, 153) 0px 2px 10px -3px;
```

**md** — blur: 12px
```css
box-shadow: rgb(199, 197, 199) 0px 0px 12px 2px;
```

**xl** — blur: 50px
```css
box-shadow: rgba(0, 0, 0, 0.25) 0px 15px 50px 0px;
```

## CSS Custom Properties

### Colors

```css
--lns-color-body: var(--lns-themeLight-color-body);
--lns-color-bodyDimmed: var(--lns-themeLight-color-bodyDimmed);
--lns-color-background: var(--lns-themeLight-color-background);
--lns-color-backgroundHover: var(--lns-themeLight-color-backgroundHover);
--lns-color-backgroundActive: var(--lns-themeLight-color-backgroundActive);
--lns-color-overlay: var(--lns-themeLight-color-overlay);
--lns-color-primary: var(--lns-themeLight-color-primary);
--lns-color-primaryHover: var(--lns-themeLight-color-primaryHover);
--lns-color-primaryActive: var(--lns-themeLight-color-primaryActive);
--lns-color-focusRing: var(--lns-themeLight-color-focusRing);
--lns-color-record: var(--lns-themeLight-color-record);
--lns-color-recordHover: var(--lns-themeLight-color-recordHover);
--lns-color-recordActive: var(--lns-themeLight-color-recordActive);
--lns-color-border: var(--lns-themeLight-color-border);
--lns-color-disabledContent: var(--lns-themeLight-color-disabledContent);
--lns-color-disabledBackground: var(
    --lns-themeLight-color-disabledBackground
  );
--lns-color-backdrop: var(--lns-themeLight-color-backdrop);
--lns-color-formFieldBorder: var(--lns-themeLight-color-formFieldBorder);
--lns-color-formFieldBackground: var(
    --lns-themeLight-color-formFieldBackground
  );
--thd-color-grey-10: #f8f8f8;
--thd-color-grey-20: #f0f1f2;
--thd-color-grey-30: #dddee1;
--thd-color-grey-40: #b7b9be;
--thd-color-grey-50: #8c8f97;
--thd-color-grey-50-50: #8c8f9780;
--thd-color-grey-60: #7d818a;
--thd-color-grey-70: #6c6f77;
--thd-color-grey-80: #505258;
--thd-color-grey-90: #3b3d42;
--thd-color-grey-100: #292a2e;
--thd-color-grey-light-border: #e4e2e7;
--thd-color-blue-0: #1868db00;
--thd-color-blue-10: #e9f2fe;
--thd-color-blue-20: #cfe1fd;
--thd-color-blue-30: #8fb8f6;
--thd-color-blue-40: #669df1;
--thd-color-blue-50: #4d8ced;
--thd-color-blue-60: #357de8;
--thd-color-blue-70: #1868db;
--thd-color-blue-70-50: #1868db80;
--thd-color-blue-80: #1558bc;
--thd-color-blue-90: #123263;
--thd-color-blue-100: #1c2b42;
--thd-color-blue-gradient: linear-gradient(135deg,var(--thd-color-blue-50) 0%,var(--thd-color-blue-70) 100%);
--thd-color-violet-0: #f8eefe00;
--thd-color-violet-10: #f8eefe;
--thd-color-violet-20: #eed7fc;
--thd-color-violet-30: #d8a0f7;
--thd-color-violet-30-50: #d8a0f780;
--thd-color-violet-40: #c97cf4;
--thd-color-violet-50: #bf63f3;
--thd-color-violet-50-80: #bf63f3cc;
--thd-color-violet-60: #af59e1;
--thd-color-violet-60-40: #af59e166;
--thd-color-violet-70: #964ac0;
--thd-color-violet-80: #803fa5;
--thd-color-violet-80-80: #803fa5cc;
--thd-color-violet-90: #48245d;
--thd-color-violet-90-80: #48245dcc;
--thd-color-violet-100: #35243f;
--thd-color-violet-100-60: #35243f99;
--thd-color-yellow-10: #fff5d4;
--thd-color-yellow-20: #ffe48f;
--thd-color-yellow-30: #ffc716;
--thd-color-yellow-40: #ffa900;
--thd-color-yellow-50: #eb9100;
--thd-color-yellow-50-20: #eb910033;
--thd-color-yellow-60: #c77b00;
--thd-color-yellow-70: #a36700;
--thd-color-yellow-80: #8a5700;
--thd-color-yellow-90: #5c3900;
--thd-color-yellow-100: #372d1d;
--thd-color-green-10: #efffd6;
--thd-color-green-20: #d3f1a7;
--thd-color-green-30: #b3df72;
--thd-color-green-40: #94c748;
--thd-color-green-50: #82b536;
--thd-color-green-50-50: #82b53680;
--thd-color-green-50-80: #82b536cc;
--thd-color-green-60: #6a9a23;
--thd-color-green-60-40: #6a9a2366;
--thd-color-green-70: #5b7f24;
--thd-color-green-80: #4c6b1f;
--thd-color-green-90: #37471f;
--thd-color-green-100: #28311b;
--thd-color-record: #ff613d;
--thd-color-record-20: #ff613d20;
--thd-color-white: #fff;
--thd-color-black-0: transparent;
--thd-color-black: #101214;
--thd-color-black-50: #10121480;
--thd-color-black-neutral: #1e1f21;
--thd-color-border-grey: #f1f0f3;
--thd-color-rovo-gradient: conic-gradient(from 180deg at 50% 50%,var(--thd-color-blue-70,#1868db) 55.38461744785309deg,var(--thd-color-green-400,#94c748) 145.80000042915344deg,var(--thd-color-purple-70,#bf63f3) 228.46153020858765deg,var(--thd-color-yellow-70,#ffa900) 337.5deg);
--thd-color-button-ol: #a3c3f1;
--thd-color-button-fr: #1868db;
--thd-color-button-sh: #1868db80;
--thd-color-overlay: rgba(0,0,0,.5);
--thd-border-radius-md: clamp(1.5rem,5vw,2rem);
--thd-border-radius-lg: clamp(2rem,6vw,2.75rem);
--lns-themeLight-color-backdropDark: hsla(228,6%,17%,0.9);
--lns-color-buttonBorder: hsla(252,13%,46%,0.25);
--lns-color-info: hsla(215,80.25%,47.65%,1);
--lns-themeDark-color-highlightActive: hsla(215.4,80%,47.65%,0.45);
--lns-themeLight-color-upgrade: hsla(277.5,89%,96.5%,1);
--lns-themeDark-color-highlightHover: hsla(215.4,80%,47.65%,0.3);
--lns-color-backdropDark: hsla(228,6%,17%,0.9);
--lns-themeDark-color-background: hsla(240,3%,12.5%,1);
--lns-themeLight-color-overlayHover: hsla(210,7%,94.5%,1);
--lns-themeLight-color-discoveryBackground: hsla(278.6,48.4%,52.2%,1);
--lns-themeDark-color-overlay: hsla(225,4%,17.6%,1);
--lns-color-blurpleLight: hsla(214.3,91.3%,95.5%,1);
--lns-themeLight-color-discoveryHighlight: hsla(277.5,89%,96.5%,1);
--lns-themeDark-color-record: hsla(11,100%,62.2%,1);
--lns-themeLight-color-highlightActive: hsla(215.4,80%,47.65%,0.45);
--lns-themeDark-color-backdrop: hsla(210,11%,7%,0.6);
--lns-color-grey4: hsla(223,5%,73%,1);
--lns-formFieldBorderWidth: 1px;
--lns-themeLight-color-formFieldBorder: hsla(223.6,5%,57%,1);
--lns-themeLight-color-primaryActive: hsla(216.3,69.2%,22.9%,1);
--lns-themeLight-color-backgroundSecondary2: hsla(0,0%,97.25%,1);
--tw-ring-color: rgba(59,130,246,.5);
--lns-themeDark-color-backgroundNeutral: hsla(240,12.6%,83%,0.07);
--lns-themeLight-color-upgradeActive: hsla(278.6,84.5%,79.8%,1);
--lns-themeLight-color-body: hsla(228,6%,17%,1);
--lns-themeLight-color-backgroundNeutral: hsla(209,76%,8%,0.08);
--lns-themeLight-color-bodyDimmed: hsla(224,5%,44%,1);
--lns-formFieldBorderShadow: inset 0 0 0 1px hsla(223.6,5%,57%,1);
--lns-themeLight-color-bodyInverse: hsla(0,0%,100%,1);
--lns-themeDark-color-recordActive: hsla(11,100%,42.2%,1);
--lns-color-white: hsla(0,0%,100%,1);
--lns-color-yellowLight: hsla(43,93%,82%,1);
--lns-color-upgrade: hsla(277.5,89%,96.5%,1);
--lns-themeDark-color-overlayActive: hsla(225,4.69%,25.1%,1);
--lns-color-backgroundNeutral: hsla(209,76%,8%,0.08);
--lns-color-upgradeActive: hsla(278.6,84.5%,79.8%,1);
--lns-themeDark-color-disabledContent: hsla(225,5%,33%,1);
--lns-themeDark-color-dangerHover: hsla(4,96%,78%,1);
--lns-color-magenta: hsla(323,42%,48%,1);
--lns-themeDark-color-upgradeActive: hsla(278,45%,44.7%,1);
--lns-themeDark-color-highlight: hsla(215.4,80%,47.65%,0.15);
--lns-color-backgroundSecondary: hsla(0,0%,97.25%,1);
--lns-color-tabBackground: hsla(209,75.6%,8%,0.06);
--lns-themeLight-color-backgroundSecondary: hsla(0,0%,97.25%,1);
--lns-color-blurpleMedium: hsla(216.5,92%,90.2%,1);
--lns-themeDark-color-primaryActive: hsla(216.5,92%,90.2%,1);
--lns-themeDark-color-backgroundHover: hsla(240,12.6%,83%,0.07);
--lns-themeDark-color-backgroundActive: hsla(236,36.6%,92%,0.12);
--lns-themeLight-color-buttonBorder: hsla(252,13%,46%,0.25);
--lns-color-red: hsla(4,64%,48%,1);
--lns-themeDark-color-primaryHover: hsla(216.1,85.1%,76.3%,1);
--lns-color-discoveryHighlight: hsla(277.5,89%,96.5%,1);
--lns-color-grey3: hsla(225,6%,87.5%,1);
--lns-color-blurpleDark: hsla(215.9,79.9%,41%,1);
--lns-formFieldBorderShadowFocus: inset 0 0 0 2px hsla(215.4,80%,47.65%,1),
    0 0 0 2px hsla(216.1,81.4%,60%,1);
--lns-color-blueDark: hsla(216.3,69.2%,23%,1);
--lns-color-upgradeHover: hsla(277,86%,91.6%,1);
--lns-color-success: hsla(155,62%,32%,1);
--lns-themeLight-color-tabBackground: hsla(209,75.6%,8%,0.06);
--lns-color-orangeDark: hsla(10.9,100%,42.2%,1);
--lns-themeDark-color-success: hsla(155,57%,55%,1);
--lns-themeLight-color-recordActive: hsla(11,100%,42.2%,1);
--lns-themeLight-color-primaryHover: hsla(215.9,79.9%,41%,1);
--lns-themeLight-color-backdrop: hsla(224,72%,7%,0.46);
--lns-color-overlayHover: hsla(210,7%,94.5%,1);
--lns-themeLight-color-backgroundNeutralHover: hsla(226,57%,1%,0.14);
--lns-color-tealDark: hsla(155,55%,19%,1);
--lns-color-warning: hsla(45.5,96%,57%,1);
--lns-color-offWhite: hsla(0,0%,97.25%,1);
--lns-color-blue: hsla(215.4,80%,47.65%,1);
--lns-themeLight-color-backgroundInverse: hsla(228,6%,17%,1);
--lns-themeDark-color-formFieldBackground: hsla(225,5%,15%,1);
--lns-color-backgroundSecondary2: hsla(0,0%,97.25%,1);
--lns-color-danger: hsla(4,64%,48%,1);
--lns-themeDark-color-discoveryTitle: hsla(225,4.3%,81.6%,1);
--lns-themeLight-color-backdropTwilight: hsla(216.3,69.2%,22.9%,0.8);
--lns-color-highlightActive: hsla(215.4,80%,47.65%,0.45);
--lns-themeDark-color-discoveryHighlight: hsla(277.8,27.3%,19.4%,1);
--lns-themeDark-color-dangerActive: hsla(4,100%,91.2%,1);
--tw-border-spacing-y: 0;
--lns-themeDark-color-warning: hsla(45.5,96%,57%,1);
--lns-color-tealLight: hsla(155,70%,84%,1);
--lns-color-highlightHover: hsla(215.4,80%,47.65%,0.3);
--lns-color-magentaDark: hsla(324,37%,23%,1);
--lns-themeDark-color-danger: hsla(3.75,91%,69%,1);
--lns-themeDark-color-overlayHover: hsla(225,4%,19.61%,1);
--lns-themeDark-color-info: hsla(216.3,83%,67.25%,1);
--lns-color-grey6: hsla(224,5%,44%,1);
--tw-ring-shadow: 0 0 #0000;
--lns-color-teal: hsla(155,62%,32%,1);
--lns-themeLight-color-dangerActive: hsla(4.5,56.3%,23.3%,1);
--lns-themeLight-color-backgroundHover: hsla(209,75.6%,8%,0.08);
--lns-themeDark-color-discoveryLightBackground: hsla(277.8,27.3%,19.4%,1);
--lns-color-yellowDark: hsla(39.8,100%,49.4%,1);
--lns-color-grey8: hsla(228,6%,17%,1);
--lns-color-orangeLight: hsla(4,100%,91.2%,1);
--lns-themeLight-color-dangerHover: hsla(4.3,65.7%,41.2%,1);
--lns-color-dangerActive: hsla(4.5,56.3%,23.3%,1);
--tw-border-spacing-x: 0;
--lns-themeDark-color-backgroundSecondary2: hsla(210,4%,9.8%,1);
--lns-color-orange: hsla(11,100%,62.2%,1);
--lns-themeLight-color-primary: hsla(215.4,80%,47.65%,1);
--lns-themeDark-color-discoveryBackground: hsla(278.5,84.5%,72.2%,1);
--lns-themeDark-color-tabBackground: hsla(240,12.6%,83%,0.07);
--lns-color-discoveryBackground: hsla(278.6,48.4%,52.2%,1);
--lns-color-highlight: hsla(215.4,80%,47.65%,0.15);
--lns-themeDark-color-formFieldBorder: hsla(222,4%,51.4%,1);
--tw-ring-offset-color: #fff;
--lns-themeLight-color-success: hsla(155,62%,32%,1);
--lns-themeLight-color-recordHover: hsla(11,100%,52.2%,1);
--lns-themeLight-color-focusRing: hsla(216.1,81.4%,60%,1);
--lns-color-bodyInverse: hsla(0,0%,100%,1);
--lns-themeDark-color-bodyDimmed: hsla(217.5,4%,60.4%,1);
--lns-color-grey7: hsla(223,6%,24.5%,1);
--lns-themeLight-color-highlightHover: hsla(215.4,80%,47.65%,0.3);
--lns-themeDark-color-upgradeHover: hsla(278,44.2%,25.3%,1);
--lns-color-redDark: hsla(4,56%,23%,1);
--lns-color-grey5: hsla(224,5%,57%,1);
--lns-gradient-ai-secondary: radial-gradient(138.41% 100% at 100% 100%, #E9F2FE 0%, #FFF 100%);
--lns-themeLight-color-record: hsla(11,100%,62.2%,1);
--lns-color-backgroundInverse: hsla(228,6%,17%,1);
--lns-themeDark-color-upgrade: hsla(277.8,27.3%,19.4%,1);
--tw-ring-offset-width: 0px;
--lns-themeLight-color-upgradeHover: hsla(277,86%,91.6%,1);
--lns-color-blurple: hsla(215.4,80%,47.65%,1);
--lns-themeDark-color-backdropTwilight: hsla(216.3,69.2%,22.9%,0.8);
--lns-themeDark-color-disabledBackground: hsla(0,0%,1%,0.46);
--lns-themeDark-color-primary: hsla(216.3,83.2%,67.3%,1);
--lns-themeDark-color-buttonBorder: hsla(0,0%,100%,0.25);
--tw-shadow-colored: 0 0 #0000;
--lns-themeDark-color-body: hsla(225,4.3%,81.6%,1);
--lns-themeLight-color-highlight: hsla(215.4,80%,47.65%,0.15);
--lns-themeLight-color-discoveryLightBackground: hsla(277.5,89%,96.5%,1);
--lns-themeLight-color-overlay: hsla(0,0%,100%,1);
--lns-gradient-ai-primary: conic-gradient(from 270deg, #0469FF 90deg, #BF63F3 180deg, #FFA900 270deg, #0065FF 360deg);
--lns-themeDark-color-bodyInverse: hsla(240,3%,12.5%,1);
--tw-ring-offset-shadow: 0 0 #0000;
--lns-themeLight-color-backgroundNeutralActive: hsla(223,61%,8%,0.28);
--lns-themeLight-color-info: hsla(215,80.25%,47.65%,1);
--lns-color-backgroundNeutralActive: hsla(223,61%,8%,0.28);
--lns-themeDark-color-focusRing: hsla(216.1,85.1%,76.3%,1);
--lns-themeLight-color-border: hsla(225.5,57%,10%,0.14);
--tw-ring-inset: ;
--lns-color-grey1: hsla(0,0%,97.25%,1);
--lns-themeLight-color-formFieldBackground: hsla(0,0%,100%,1);
--lns-color-grey2: hsla(210,7%,94.5%,1);
--focus-ring-offset: 0.375rem;
--lns-color-backdropTwilight: hsla(216.3,69.2%,22.9%,0.8);
--lns-themeLight-color-overlayActive: hsla(225,6%,87.5%,1);
--lns-color-discoveryLightBackground: hsla(277.5,89%,96.5%,1);
--lns-color-backgroundNeutralHover: hsla(226,57%,1%,0.14);
--lns-themeDark-color-recordHover: hsla(11,100%,52.2%,1);
--lns-formFieldBorderShadowError: inset 0 0 0 2px hsla(4,64%,48%,1),
    0 0 0 2px hsla(4,100%,91.2%,1);
--lns-themeDark-color-backgroundNeutralActive: hsla(226,49%,93%,0.25);
--lns-themeDark-color-backgroundInverse: hsla(225,4.3%,81.6%,1);
--lns-formFieldBorderWidthFocus: 2px;
--lns-themeLight-color-disabledContent: hsla(223,5%,73%,1);
--lns-color-discoveryTitle: hsla(228,6%,17%,1);
--focus-ring-color: currentColor;
--lns-color-overlayActive: hsla(225,6%,87.5%,1);
--lns-themeLight-color-background: hsla(0,0%,100%,1);
--lns-color-blurpleStrong: hsla(216.3,69.2%,22.9%,1);
--lns-color-magentaLight: hsla(323,92%,90%,1);
--lns-color-yellow: hsla(45.5,96%,57%,1);
--lns-themeLight-color-backgroundActive: hsla(225.5,56.9%,10%,0.14);
--lns-themeDark-color-backgroundNeutralHover: hsla(236,36.6%,92%,0.12);
--lns-color-dangerHover: hsla(4.3,65.7%,41.2%,1);
--lns-themeLight-color-warning: hsla(45.5,96%,57%,1);
--lns-themeDark-color-backdropDark: hsla(228,6%,17%,0.9);
--lns-themeLight-color-disabledBackground: hsla(0,0%,9%,0.03);
--lns-color-blueLight: hsla(216.5,92%,90.2%,1);
--lns-themeLight-color-danger: hsla(4,64%,48%,1);
--lns-themeLight-color-discoveryTitle: hsla(228,6%,17%,1);
--lns-themeDark-color-backgroundSecondary: hsla(210,4%,9.8%,1);
--lns-themeDark-color-border: hsla(236,36.6%,92%,0.12);
```

### Spacing

```css
--thd-space-fluid-xs-min: 2;
--thd-space-fluid-xs-max: 3;
--thd-space-fluid-sm-min: 3;
--thd-space-fluid-sm-max: 5;
--thd-space-fluid-md-min: 4;
--thd-space-fluid-md-max: 7;
--thd-space-fluid-lg-min: 5;
--thd-space-fluid-lg-max: 9;
--thd-space-fixed-sm: 0.5rem;
--thd-space-fixed-md: 1rem;
--thd-space-fixed-lg: 1.5rem;
--thd-space-fixed-xl: 2rem;
--thd-space-fixed-2xl: 2.5rem;
--thd-space-fixed-3xl: 3rem;
--thd-space-fixed-4xl: 3.5rem;
--thd-space-fixed-5xl: 5rem;
--thd-space-fluid-vw-start: 46.785;
--thd-space-fluid-vw-end: 120;
--lns-fontSize-heading-lg: calc(6 * 0.5rem);
--lns-letterSpacing-xlarge: -0.2px;
--lns-letterSpacing-large: -0.2px;
--lns-letterSpacing-body-sm: normal;
--lns-formFieldHorizontalPadding: calc(2 * 0.5rem);
--lns-letterSpacing-xxxlarge: -1.2px;
--lns-space-xsmall: calc(0.5 * 0.5rem);
--lns-fontSize-heading-sm: calc(3 * 0.5rem);
--lns-letterSpacing-xxlarge: -0.5px;
--tw-numeric-spacing: ;
--lns-letterSpacing-heading-sm: -0.2px;
--lns-letterSpacing-medium: normal;
--lns-letterSpacing-small: normal;
--lns-letterSpacing-body-lg: -0.2px;
--lns-fontSize-small: calc(1.5 * 0.5rem);
--lns-fontSize-xxlarge: calc(4 * 0.5rem);
--lns-fontSize-medium: calc(1.75 * 0.5rem);
--lns-fontSize-xlarge: calc(3 * 0.5rem);
--lns-fontSize-body-sm: calc(1.5 * 0.5rem);
--lns-fontSize-body-md: calc(1.75 * 0.5rem);
--lns-fontSize-body-lg: calc(2.25 * 0.5rem);
--lns-fontSize-large: calc(2.25 * 0.5rem);
--lns-letterSpacing-body-md: normal;
--lns-letterSpacing-heading-lg: -1.2px;
--lns-space-xxlarge: calc(8 * 0.5rem);
--lns-space-xlarge: calc(5 * 0.5rem);
--lns-fontSize-heading-md: calc(4 * 0.5rem);
--lns-letterSpacing-heading-md: -0.5px;
--lns-space-large: calc(3 * 0.5rem);
--lns-fontSize-xxxlarge: calc(6 * 0.5rem);
--lns-space-medium: calc(2 * 0.5rem);
--lns-space-small: calc(1 * 0.5rem);
```

### Typography

```css
--lns-fontWeight-medium: 500;
--lns-fontWeight-regular: 400;
--lns-fontWeight-bold: 653;
--lns-fontWeight-book: 400;
--lns-fontSetting-normal: 'normal';
--lns-fontSetting-tnum: 'tnum';
```

### Shadows

```css
--thd-shadow: 0 0.125rem 0.375rem 0px rgba(0,0,0,.04),0px 0.3125rem 1.125rem 0 rgba(0,0,0,.06),0 1.5rem 5.1875rem 0 rgba(0,0,0,.1);
--thd-shadow-nav: 0 0.125rem 0.375rem 0px rgba(0,0,0,.04),0px 0.3125rem 1.125rem 0 rgba(0,0,0,.06),0 1.5rem 5.1875rem 0 rgba(0,0,0,.1);
--lns-shadow-small: 0 calc(0.5 * 0.5rem) calc(1.25 * 0.5rem) hsla(0, 0%, 0%, 0.05);
--lns-shadow-medium: 0 calc(0.5 * 0.5rem) calc(1.25 * 0.5rem) hsla(0, 0%, 0%, 0.1);
--tw-drop-shadow: ;
--lns-shadow-large: 0 calc(0.75 * 0.5rem) calc(3 * 0.5rem) hsla(0, 0%, 0%, 0.1);
--tw-shadow: 0 0 #0000;
```

### Radii

```css
--thd-rounded-fluid-ext-min: 3.5;
--thd-rounded-fluid-ext-max: 4.5;
--thd-rounded-fluid-int-min: 2;
--thd-rounded-fluid-int-max: 2.75;
--lns-radius-250: calc(2.5 * 0.5rem);
--lns-radius-none: 0;
--lns-radius-175: calc(1.75 * 0.5rem);
--lns-radius-xlarge: calc(3 * 0.5rem);
--lns-formFieldRadius: calc(1.75 * 0.5rem);
--lns-radius-300: calc(3 * 0.5rem);
--lns-radius-100: calc(1 * 0.5rem);
--lns-radius-large: calc(2 * 0.5rem);
--lns-radius-50: calc(0.5 * 0.5rem);
--lns-radius-medium: calc(1 * 0.5rem);
--lns-radius-200: calc(2 * 0.5rem);
--lns-radius-150: calc(1.5 * 0.5rem);
--lns-radius-full: calc(999 * 0.5rem);
--lns-radius-round: calc(999 * 0.5rem);
```

### Other

```css
--reach-tabs: 1;
--thd-nav-h: 5.625rem;
--thd-nav-sm-h-logged-in: 37.5rem;
--thd-nav-sm-h-logged-out: 10rem;
--thd-screen-xs: 23.4375rem;
--thd-screen-sm: 40rem;
--thd-screen-md: 48rem;
--thd-screen-lg: 64rem;
--thd-screen-xl: 80rem;
--thd-screen-2xl: 84.875rem;
--thd-screen-3xl: 100rem;
--thd-screen-4xl: 120rem;
--thd-screen-5xl: 142.75rem;
--thd-fluid-vw-start: 48;
--thd-fluid-vw-end: 100;
--thd-gradient-nav: linear-gradient(180deg,rgba(0,0,0,.07),transparent);
--thd-focus-thick: 0 0 0 0.125rem var(--thd-color-blue-80);
--thd-focus-thin: 0 0 0 0.1875rem var(--thd-color-blue-80);
--thd-base-ff-heading: "ss01","ss02","ss08";
--thd-base-ff-body: "ss08";
--thd-base-ls: 0;
--thd-base-max-w: 65ch;
--thd-base-fw-heading: 700;
--thd-base-fw-body: 400;
--thd-label-fs-min: 0.5;
--thd-label-fs-max: 0.625;
--thd-label-lh: 1.455;
--thd-label-ls: 0;
--thd-caption-fs-min: 0.6875;
--thd-caption-fs-max: 0.8125;
--thd-caption-lh: 1.455;
--thd-caption-ls: 0;
--thd-overline-fs-min: 0.6875;
--thd-overline-fs-max: 0.8125;
--thd-overline-lg-fs-min: 1.375;
--thd-overline-lg-fs-max: 1.625;
--thd-overline-lh: 1.455;
--thd-overline-ls: 0;
--thd-body-sm-fs-min: 0.875;
--thd-body-sm-fs-max: 1;
--thd-body-sm-lh: 1.714;
--thd-body-sm-ls: 0;
--thd-body-md-fs-min: 1.065;
--thd-body-md-fs-max: 1.1875;
--thd-body-md-lh: 1.647;
--thd-body-md-ls: 0;
--thd-body-lg-fs-min: 1.3125;
--thd-body-lg-fs-max: 1.75;
--thd-body-lg-lh: 1.524;
--thd-body-lg-ls: 0;
--thd-heading-xs-fs-min: 1.125;
--thd-heading-xs-fs-max: 1.6875;
--thd-heading-xs-lh: 1.333;
--thd-heading-xs-ls: 0;
--thd-heading-sm-fs-min: 1.375;
--thd-heading-sm-fs-max: 2.1875;
--thd-heading-sm-lh: 1.273;
--thd-heading-sm-ls: 0;
--thd-heading-md-fs-min: 1.75;
--thd-heading-md-fs-max: 3;
--thd-heading-md-lh: 1.143;
--thd-heading-md-ls: 0;
--thd-heading-lg-fs-min: 2.1875;
--thd-heading-lg-fs-max: 4.375;
--thd-heading-lg-lh: 1.029;
--thd-heading-lg-ls: 0;
--thd-heading-xl-fs-min: 3;
--thd-heading-xl-fs-max: 5.625;
--thd-heading-xl-lh: 1;
--thd-heading-xl-ls: 0;
--thd-heading-xl-alt-fs-min: 3;
--thd-heading-xl-alt-fs-max: 11.25;
--thd-heading-xl-alt-lh: 1;
--thd-heading-xl-alt-ls: 0;
--thd-gradient-white: linear-gradient(180deg,hsla(0,0%,100%,0),#fff 31.77%);
--lns-lineHeight-medium: 1.57;
--lns-lineHeight-heading-sm: 1.16;
--tw-saturate: ;
--tw-grayscale: ;
--lns-lineHeight-xxxlarge: 1.16;
--tw-pinch-zoom: ;
--tw-scale-y: 1;
--tw-backdrop-contrast: ;
--tw-pan-x: ;
--tw-translate-y: 0;
--lns-unit: 0.5rem;
--tw-translate-x: 0;
--lns-formFieldHeight: calc(4.5 * 0.5rem);
--lns-lineHeight-body-lg: 1.44;
--tw-blur: ;
--tw-invert: ;
--tw-backdrop-sepia: ;
--tw-sepia: ;
--tw-ordinal: ;
--tw-backdrop-invert: ;
--tw-backdrop-grayscale: ;
--tw-hue-rotate: ;
--tw-pan-y: ;
--lns-lineHeight-small: 1.5;
--tw-rotate: 0;
--lns-lineHeight-xlarge: 1.16;
--tw-scroll-snap-strictness: proximity;
--tw-backdrop-hue-rotate: ;
--tw-numeric-fraction: ;
--tw-skew-y: 0;
--tw-slashed-zero: ;
--lns-lineHeight-heading-lg: 1.16;
--tw-backdrop-opacity: ;
--tw-backdrop-saturate: ;
--lns-lineHeight-xxlarge: 1.125;
--tw-brightness: ;
--tw-backdrop-brightness: ;
--lns-lineHeight-body-md: 1.57;
--lns-lineHeight-heading-md: 1.125;
--tw-contrast: ;
--tw-skew-x: 0;
--lns-lineHeight-body-sm: 1.5;
--tw-backdrop-blur: ;
--tw-scale-x: 1;
--lns-lineHeight-large: 1.44;
--tw-numeric-figure: ;
```

### Dependencies

```css
0: --lns-themeLight-color-body;
0: --lns-themeLight-color-bodyDimmed;
0: --lns-themeLight-color-background;
0: --lns-themeLight-color-backgroundHover;
0: --lns-themeLight-color-backgroundActive;
0: --lns-themeLight-color-overlay;
0: --lns-themeLight-color-primary;
0: --lns-themeLight-color-primaryHover;
0: --lns-themeLight-color-primaryActive;
0: --lns-themeLight-color-focusRing;
0: --lns-themeLight-color-record;
0: --lns-themeLight-color-recordHover;
0: --lns-themeLight-color-recordActive;
0: --lns-themeLight-color-border;
0: --lns-themeLight-color-disabledContent;
0: --lns-themeLight-color-backdrop;
0: --lns-themeLight-color-formFieldBorder;
0: --thd-color-blue-50;
1: --thd-color-blue-70;
0: --thd-color-blue-70;
1: --thd-color-green-400;
2: --thd-color-purple-70;
3: --thd-color-yellow-70;
0: --thd-color-blue-80;
0: --thd-color-blue-80;
```

### Semantic

```css
--thd-color-green-10: #efffd6;
--thd-color-green-20: #d3f1a7;
--thd-color-green-30: #b3df72;
--thd-color-green-40: #94c748;
--thd-color-green-50: #82b536;
--thd-color-green-50-50: #82b53680;
--thd-color-green-50-80: #82b536cc;
--thd-color-green-60: #6a9a23;
--thd-color-green-60-40: #6a9a2366;
--thd-color-green-70: #5b7f24;
--thd-color-green-80: #4c6b1f;
--thd-color-green-90: #37471f;
--thd-color-green-100: #28311b;
--lns-color-success: hsla(155,62%,32%,1);
--lns-themeDark-color-success: hsla(155,57%,55%,1);
--lns-themeLight-color-success: hsla(155,62%,32%,1);
--thd-color-yellow-10: #fff5d4;
--thd-color-yellow-20: #ffe48f;
--thd-color-yellow-30: #ffc716;
--thd-color-yellow-40: #ffa900;
--thd-color-yellow-50: #eb9100;
--thd-color-yellow-50-20: #eb910033;
--thd-color-yellow-60: #c77b00;
--thd-color-yellow-70: #a36700;
--thd-color-yellow-80: #8a5700;
--thd-color-yellow-90: #5c3900;
--thd-color-yellow-100: #372d1d;
--lns-color-yellowLight: hsla(43,93%,82%,1);
--lns-color-warning: hsla(45.5,96%,57%,1);
--lns-themeDark-color-warning: hsla(45.5,96%,57%,1);
--lns-color-yellowDark: hsla(39.8,100%,49.4%,1);
--lns-color-yellow: hsla(45.5,96%,57%,1);
--lns-themeLight-color-warning: hsla(45.5,96%,57%,1);
--lns-themeDark-color-dangerHover: hsla(4,96%,78%,1);
--lns-color-red: hsla(4,64%,48%,1);
--lns-color-danger: hsla(4,64%,48%,1);
--lns-themeDark-color-dangerActive: hsla(4,100%,91.2%,1);
--lns-themeDark-color-danger: hsla(3.75,91%,69%,1);
--lns-themeLight-color-dangerActive: hsla(4.5,56.3%,23.3%,1);
--lns-themeLight-color-dangerHover: hsla(4.3,65.7%,41.2%,1);
--lns-color-dangerActive: hsla(4.5,56.3%,23.3%,1);
--lns-color-redDark: hsla(4,56%,23%,1);
--tw-shadow-colored: 0 0 #0000;
--lns-formFieldBorderShadowError: inset 0 0 0 2px hsla(4,64%,48%,1),
    0 0 0 2px hsla(4,100%,91.2%,1);
--lns-color-dangerHover: hsla(4.3,65.7%,41.2%,1);
--lns-themeLight-color-danger: hsla(4,64%,48%,1);
--thd-color-blue-0: #1868db00;
--thd-color-blue-10: #e9f2fe;
--thd-color-blue-20: #cfe1fd;
--thd-color-blue-30: #8fb8f6;
--thd-color-blue-40: #669df1;
--thd-color-blue-50: #4d8ced;
--thd-color-blue-60: #357de8;
--thd-color-blue-70: #1868db;
--thd-color-blue-70-50: #1868db80;
--thd-color-blue-80: #1558bc;
--thd-color-blue-90: #123263;
--thd-color-blue-100: #1c2b42;
--thd-color-blue-gradient: linear-gradient(135deg,var(--thd-color-blue-50) 0%,var(--thd-color-blue-70) 100%);
--lns-color-info: hsla(215,80.25%,47.65%,1);
--lns-color-blueDark: hsla(216.3,69.2%,23%,1);
--lns-color-blue: hsla(215.4,80%,47.65%,1);
--lns-themeDark-color-info: hsla(216.3,83%,67.25%,1);
--lns-themeLight-color-info: hsla(215,80.25%,47.65%,1);
--lns-color-blueLight: hsla(216.5,92%,90.2%,1);
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| xs | 360px | max-width |
| xs | 375px | min-width |
| 400px | 400px | min-width |
| sm | 425px | min-width |
| sm | 426px | min-width |
| sm | 500px | max-width |
| sm | 530px | max-width |
| 550px | 550px | max-width |
| sm | 600px | max-width |
| sm | 640px | min-width |
| md | 752px | max-width |
| md | 767px | max-width |
| md | 768px | min-width |
| md | 769px | min-width |
| md | 820px | min-width |
| 890px | 890px | min-width |
| 896px | 896px | max-width |
| 897px | 897px | min-width |
| lg | 1023px | max-width |
| lg | 1024px | min-width |
| lg | 1025px | min-width |
| xl | 1280px | min-width |
| 1358px | 1358px | min-width |
| 2xl | 1600px | min-width |
| 1650px | 1650px | min-width |
| 1920px | 1920px | min-width |
| 2384px | 2384px | min-width |
| 2884px | 2884px | min-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.4, 0, 0.2, 1)`, `ease`, `cubic-bezier(0.4, 0, 1, 1)`, `cubic-bezier(0.455, 0.03, 0.515, 0.955)`

**Durations:** `1s`, `0.5s`, `0.1s`, `0.3s`, `0.15s`, `0.2s`, `0.25s`

### Common Transitions

```css
transition: all;
transition: color 1s cubic-bezier(0.4, 0, 0.2, 1), background-color 1s cubic-bezier(0.4, 0, 0.2, 1), border-color 1s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 1s cubic-bezier(0.4, 0, 0.2, 1), fill 1s cubic-bezier(0.4, 0, 0.2, 1), stroke 1s cubic-bezier(0.4, 0, 0.2, 1);
transition: box-shadow 0.5s;
transition: transform 0.1s ease-in-out, background-color 0.1s ease-in-out;
transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: opacity 0.5s, transform 0.5s;
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), fill 0.3s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.1s cubic-bezier(0.4, 0, 1, 1), background-color 0.1s cubic-bezier(0.4, 0, 1, 1), border-color 0.1s cubic-bezier(0.4, 0, 1, 1), text-decoration-color 0.1s cubic-bezier(0.4, 0, 1, 1), fill 0.1s cubic-bezier(0.4, 0, 1, 1), stroke 0.1s cubic-bezier(0.4, 0, 1, 1), opacity 0.1s cubic-bezier(0.4, 0, 1, 1), box-shadow 0.1s cubic-bezier(0.4, 0, 1, 1), transform 0.1s cubic-bezier(0.4, 0, 1, 1), filter 0.1s cubic-bezier(0.4, 0, 1, 1), backdrop-filter 0.1s cubic-bezier(0.4, 0, 1, 1);
transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
```

### Keyframe Animations

**SanityMarkdown_spin__2GSOd**
```css
@keyframes SanityMarkdown_spin__2GSOd {
  100% { transform: rotate(1turn); }
}
```

**StandardHeroAccent_button__UB7R5**
```css
@keyframes StandardHeroAccent_button__UB7R5 {
  90% { background-color: var(--lns-color-orange); transform: translateY(0px); }
  93% { background-color: rgb(220, 104, 77); }
  95% { transform: translateY(0.375rem); }
  97% { background-color: rgb(220, 104, 77); }
  100% { background-color: var(--lns-color-orange); transform: translateY(0px); }
}
```

**StandardHeroAccent_cursor__d4akH**
```css
@keyframes StandardHeroAccent_cursor__d4akH {
  50% { transform: translate(12.5rem, 12.5rem); }
  80% { transform: translate(5.5rem, 0.8125rem); }
  90% { transform: translate(5.3125rem, 0.625rem) scale(2); }
  95% { transform: translate(5.3125rem, 0.625rem) scale(1.5); }
  100% { transform: translate(5.3125rem, 0.625rem) scale(2); }
}
```

**StandardHeroAccent_desktop__l8Ggr**
```css
@keyframes StandardHeroAccent_desktop__l8Ggr {
  80% { transform: translateY(-100%); }
  100% { transform: translateY(0px); }
}
```

**StandardHeroAccent_opacity__FqEXT**
```css
@keyframes StandardHeroAccent_opacity__FqEXT {
  90% { opacity: 0; }
  100% { opacity: 1; }
}
```

**StandardHeroAccent_window__1sDEW**
```css
@keyframes StandardHeroAccent_window__1sDEW {
  80% { transform: translateX(100vw); }
  100% { transform: translateX(0px); }
}
```

**Hero_radialShift__k0fg2**
```css
@keyframes Hero_radialShift__k0fg2 {
  0% { background-position: 100% 100%; background-size: 100%; }
  33% { background-position: 50% 50%; background-size: 300%; }
  69% { background-position: 0px 0px; background-size: 200%; }
  100% { background-position: 100% 100%; background-size: 100%; }
}
```

**RecordScreenSchedule_remove__eF4du**
```css
@keyframes RecordScreenSchedule_remove__eF4du {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
```

**CommentsConversationAnimation_fill__6JMyH**
```css
@keyframes CommentsConversationAnimation_fill__6JMyH {
  0%, 10% { transform: scaleX(0); }
  80% { transform: scaleX(1); }
}
```

**animation-w7dv0m**
```css
@keyframes animation-w7dv0m {
  50% { transform: scale(1); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (31 instances)

```css
.buttons {
  background-color: rgb(24, 104, 219);
  color: rgb(255, 255, 255);
  font-size: 15.2308px;
  font-weight: 600;
  padding-top: 12px;
  padding-right: 30px;
  border-radius: 9999px;
}
```

### Cards (6 instances)

```css
.cards {
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 6px 0px, rgba(0, 0, 0, 0.06) 0px 5px 18px 0px, rgba(0, 0, 0, 0.1) 0px 24px 83px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (5 instances)

```css
.inputs {
  background-color: rgb(255, 255, 255);
  color: rgb(41, 42, 46);
  border-color: rgb(41, 42, 46);
  border-radius: 0px;
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (86 instances)

```css
.links {
  color: rgb(16, 18, 20);
  font-size: 15.2308px;
  font-weight: 400;
}
```

### Navigation (11 instances)

```css
.navigation {
  background-color: rgb(248, 238, 254);
  color: rgb(41, 42, 46);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 4.34077px;
}
```

### Footer (4 instances)

```css
.footer {
  background-color: rgb(233, 242, 254);
  color: rgb(41, 42, 46);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (4 instances)

```css
.modals {
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Avatars (13 instances)

```css
.avatars {
  border-radius: 9999px;
}
```

### Accordions (4 instances)

```css
.accordions {
  color: rgb(41, 42, 46);
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(41, 42, 46) rgb(216, 216, 216) rgb(216, 216, 216);
}
```

### Switches (1 instances)

```css
.switches {
  border-radius: 0px;
  border-color: rgb(41, 42, 46);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 8 instances, 1 variant

**Variant 1** (8 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(41, 42, 46);
  padding: 8px 16px 8px 16px;
  border-radius: 9999px;
  border: 0px solid rgb(41, 42, 46);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(41, 42, 46);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(41, 42, 46);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgb(233, 242, 254);
  color: rgb(0, 0, 0);
  padding: 15.2308px 22.8462px 15.2308px 22.8462px;
  border-radius: 9999px;
  border: 0px solid rgb(0, 0, 0);
  font-size: 15.2308px;
  font-weight: 700;
```

### Button — 4 instances, 1 variant

**Variant 1** (4 instances)

```css
  background: rgb(16, 18, 20);
  color: rgb(255, 255, 255);
  padding: 15.2308px 22.8462px 15.2308px 22.8462px;
  border-radius: 9999px;
  border: 0px solid rgb(255, 255, 255);
  font-size: 15.2308px;
  font-weight: 700;
```

### Button — 4 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(41, 42, 46);
  padding: 0px 0px 0px 0px;
  border-radius: 6px;
  border: 0px solid rgb(41, 42, 46);
  font-size: 16px;
  font-weight: 400;
```

**Variant 2** (2 instances)

```css
  background: rgb(255, 255, 255);
  color: rgb(41, 42, 46);
  padding: 0px 0px 0px 0px;
  border-radius: 9999px;
  border: 0px solid rgb(41, 42, 46);
  font-size: 16px;
  font-weight: 400;
```

## Layout System

**19 grid containers** and **171 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1280px | 0px |
| 1600px | 0px |
| 100% | 0px |
| 640px | 0px |
| 666.908px | 0px |
| 1039.59px | 0px |
| 540px | 56px |
| 1024px | 0px |
| 896px | 0px |
| 576.956px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 2-column | 7x |
| 1-column | 3x |
| 13-column | 2x |
| 6-column | 2x |
| 7-column | 2x |
| 4-column | 2x |
| 8-column | 1x |

### Grid Templates

```css
grid-template-columns: 1280px;
grid-template-columns: 187.141px 196.688px 123.891px 130.453px;
gap: 103.04px normal;
grid-template-columns: 474.422px 474.422px;
gap: 56px;
grid-template-columns: 1141.81px;
gap: 65.92px;
grid-template-columns: 1141.81px;
gap: 65.92px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 120x |
| column/nowrap | 49x |
| row/wrap | 2x |

**Gap values:** `103.04px`, `103.04px normal`, `15.2308px`, `16px`, `24px`, `24px 65.92px`, `32px 16px`, `32px normal`, `56px`, `65.92px`, `7.61538px`, `8px 24px`, `normal 16px`

## Accessibility (WCAG 2.1)

**Overall Score: 94%** — 17 passing, 1 failing color pairs

### Failing Color Pairs

| Foreground | Background | Ratio | Level | Used On |
|------------|------------|-------|-------|---------|
| `#7d818a` | `#f8eefe` | 3.47:1 | FAIL | a (1x) |

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#ffffff` | `#1868db` | 5.2:1 | AA |
| `#172b4d` | `#ffab00` | 7.44:1 | AAA |
| `#000000` | `#e9f2fe` | 18.6:1 | AAA |
| `#ffffff` | `#101214` | 18.77:1 | AAA |
| `#292a2e` | `#e9f2fe` | 12.69:1 | AAA |
| `#172b4d` | `#ffffff` | 14.1:1 | AAA |

## Design System Score

**Overall: 80/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 80/100 |
| Typography Consistency | 80/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 78/100 |
| Border Radius Consistency | 80/100 |
| Accessibility | 94/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Well-defined spacing scale, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 1 WCAG contrast failures
- 228 !important rules — prefer specificity over overrides
- 92% of CSS is unused — consider purging
- 8167 duplicate CSS declarations

## Gradients

**3 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |
| linear | to top | 2 | brand |
| linear | — | 4 | bold |

```css
background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0));
background: linear-gradient(to top, rgb(179, 223, 114), rgba(255, 255, 255, 0));
background: linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 55%, rgb(233, 242, 254) 55%, rgb(233, 242, 254) 100%);
```

## Z-Index Map

**7 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2147483646,2147483647 | div.o.n.e.t.r.u.s.t.-.p.c.-.d.a.r.k.-.f.i.l.t.e.r. .o.t.-.h.i.d.e. .o.t.-.f.a.d.e.-.i.n, div, div.o.t.P.c.C.e.n.t.e.r. .o.t.-.h.i.d.e. .o.t.-.f.a.d.e.-.i.n. .o.t.-.t.g.l.-.w.i.t.h.-.l.a.b.e.l |
| sticky | 10,30 | nav.p.x.-.f.l.u.i.d.-.b.a.s.e. .4.x.l.:.p.x.-.0. .m.y.-.a.u.t.o. .r.e.l.a.t.i.v.e. .z.-.1.0. .h.-.[.v.a.r.(.-.-.t.h.d.-.n.a.v.-.h.).], div.m.a.x.-.w.-.s.c.r.e.e.n.-.3.x.l. .m.x.-.a.u.t.o. .f.l.e.x. .f.l.e.x.-.c.o.l. .h.-.f.u.l.l. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .i.t.e.m.s.-.s.t.a.r.t. .m.d.:.i.t.e.m.s.-.c.e.n.t.e.r. .l.g.:.t.e.x.t.-.c.e.n.t.e.r. .p.x.-.f.l.u.i.d.-.b.a.s.e. .r.e.l.a.t.i.v.e. .z.-.1.0. .m.b.-.f.l.u.i.d.-.s.m, div.f.l.e.x. .f.l.e.x.-.c.o.l. .i.t.e.m.s.-.c.e.n.t.e.r. .r.e.l.a.t.i.v.e. .z.-.1.0. .m.b.-.f.l.u.i.d.-.m.d |
| base | 1,3 | div.r.f.m.-.m.a.r.q.u.e.e, div.r.f.m.-.m.a.r.q.u.e.e, div.r.f.m.-.m.a.r.q.u.e.e |

**Issues:**
- Very high z-index values: 2147483646, 2147483647

## SVG Icons

**23 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| sm | 10 |
| md | 7 |
| xl | 6 |

**Icon colors:** `#101214`, `#1868DB`, `white`, `currentcolor`, `rgb(41, 42, 46)`, `currentColor`, `rgb(0, 0, 0)`, `#fff`, `#000`, `url(#paint0_linear_625_7592)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Charlie Display | self-hosted | 100, 200, 400, 500, 700, 800, 900 | normal, italic |
| Charlie Text | self-hosted | 100, 200, 400, 500, 700, 800 | normal, italic |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 64 | objectFit: fill, borderRadius: 0px, shape: square |
| avatar | 11 | objectFit: fill, borderRadius: 9999px, shape: circular |
| general | 4 | objectFit: fill, borderRadius: 39.3846px, shape: pill |
| gallery | 2 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (18x), 4:3 (6x), 21:9 (5x), 16:9 (3x), 3.32:1 (3x), 3.36:1 (2x), 6.6:1 (2x), 6:1 (2x)

## Motion Language

**Feel:** smooth · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `100ms` | 100 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `500ms` | 500 |
| `xl` | `1s` | 1000 |

### Easing Families

- **custom** (8 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0.455, 0.03, 0.515, 0.955)`
- **ease-in-out** (16 uses) — `ease`
- **ease-in** (6 uses) — `cubic-bezier(0.4, 0, 1, 1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `CommentsConversationAnimation_fill__6JMyH` | scale | transform | 1 |
| `scroll` | slide-x | transform | 6 |
| `onetrust-fade-in` | fade | opacity | 2 |

## Component Anatomy

### button — 18 instances

**Slots:** label
**Variants:** secondary · primary
**Sizes:** xs · md · lg

| variant | count | sample label |
|---|---|---|
| primary | 9 | Get Loom for free |
| default | 6 | Sign In |
| secondary | 3 | Get Loom for free |

## Brand Voice

**Tone:** neutral · **Pronoun:** you-only · **Headings:** Sentence case (balanced)

### Top CTA Verbs

- **get** (4)
- **learn** (3)
- **sign** (1)
- **contact** (1)
- **toggle** (1)
- **install** (1)
- **download** (1)
- **see** (1)

### Button Copy Patterns

- "get loom for free" (4×)
- "learn more" (2×)
- "sign in" (1×)
- "contact sales" (1×)
- "toggle menu close" (1×)
- "install chrome extension
open in new window" (1×)
- "learn more
open in new window" (1×)
- "download now" (1×)
- "see all use cases" (1×)
- "explore our blog
open in new window" (1×)

### Sample Headings

> One video is worth a thousand words
> Millions of people across 400,000 companies choose Loom
> Ship faster with AI bug reports
> The easiest screen recorder you’ll ever use
> Lightning fast screen recording
> One video is worth a thousand words
> One video is worth a thousand words
> Millions of people across 400,000 companies choose Loom
> Ship faster with AI bug reports
> Ship faster with AI bug reports

## Page Intent

**Type:** `landing` (confidence 0.31)
**Description:** Best free online screen recording tool with advanced video editing and video storage trusted by over 22 million people and easy sharing from Loom.com.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): cta → nav → content → content → content → content → pricing → logo-wall → nav → pricing → cta → nav → testimonials → nav → nav → content → nav → nav → nav → nav → cta → nav → testimonials → nav → testimonials → nav → nav → nav → nav → feature-grid → nav → comparison → nav → comparison → nav → nav → cta → nav → gallery → sidebar → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | cta | — | 0.75 |
| 1 | nav | — | 0.9 |
| 2 | pricing | One video is worth a thousand words | 0.4 |
| 3 | logo-wall | One video is worth a thousand words | 0.85 |
| 4 | nav | One video is worth a thousand words | 0.4 |
| 5 | pricing | Millions of people across 400,000 companies choose Loom | 0.4 |
| 6 | cta | Ship faster with AI bug reports | 0.75 |
| 7 | nav | Ship faster with AI bug reports | 0.4 |
| 8 | testimonials | The easiest screen recorder you’ll ever use | 0.4 |
| 9 | nav | The easiest screen recorder you’ll ever use | 0.4 |
| 10 | nav | Lightning fast screen recording | 0.4 |
| 11 | content | So much more than a screen recorder | 0.3 |
| 12 | nav | So much more than a screen recorder | 0.4 |
| 13 | nav | Edit your videos like a pro | 0.4 |
| 14 | nav | Share or embed video anywhere you work | 0.4 |
| 15 | nav | Engage and connect with video | 0.4 |
| 16 | cta | Keep your content safe | 0.75 |
| 17 | nav | Keep your content safe | 0.4 |
| 18 | testimonials | Video messaging for all use cases | 0.4 |
| 19 | nav | Video messaging for all use cases | 0.4 |

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.408 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 9999px |
| backdrop-filter in use | no |
| Gradients | 3 |

## Imagery Style

**Label:** `flat-illustration` (confidence 0.282)
**Counts:** total 81, svg 59, icon 6, screenshot-like 0, photo-like 0
**Dominant aspect:** ultra-wide
**Radius profile on images:** rounded

## Component Library

**Detected:** `tailwindcss` (confidence 0.723)

Evidence:
- tailwind-like class density 70%

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Charlie Text` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
