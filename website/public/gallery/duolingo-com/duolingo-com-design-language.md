# Design Language: Duolingo - The world’s most popular way to learn

> Extracted from `https://duolingo.com` on June 25, 2026
> 4295 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#d7ffb8` | rgb(215, 255, 184) | hsl(94, 100%, 86%) | 14 |
| Secondary | `#0000ee` | rgb(0, 0, 238) | hsl(240, 100%, 47%) | 4 |
| Accent | `#ddf4ff` | rgb(221, 244, 255) | hsl(199, 100%, 93%) | 1 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#3c3c3c` | hsl(0, 0%, 24%) | 7859 |
| `#777777` | hsl(0, 0%, 47%) | 268 |
| `#000000` | hsl(0, 0%, 0%) | 214 |
| `#4b4b4b` | hsl(0, 0%, 29%) | 34 |
| `#afafaf` | hsl(0, 0%, 69%) | 14 |
| `#ffffff` | hsl(0, 0%, 100%) | 9 |
| `#e5e5e5` | hsl(0, 0%, 90%) | 1 |
| `#808080` | hsl(0, 0%, 50%) | 1 |
| `#c1c1c1` | hsl(0, 0%, 76%) | 1 |

### Background Colors

Used on large-area elements: `#ffffff`, `#ddf4ff`, `#100f3e`, `#58cc02`, `#000000`

### Text Colors

Text color palette: `#000000`, `#3c3c3c`, `#0000ee`, `#afafaf`, `#4b4b4b`, `#ffffff`, `#1cb0f6`, `#777777`, `#58cc02`, `#042c60`

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#3c3c3c` | text, border | 7859 |
| `#777777` | text, border | 268 |
| `#000000` | text, border, background | 214 |
| `#a5ed6e` | text, border | 129 |
| `#4b4b4b` | text, border | 34 |
| `#58cc02` | text, border, background | 24 |
| `#afafaf` | text, border | 14 |
| `#1cb0f6` | text, border | 14 |
| `#d7ffb8` | text, border | 14 |
| `#ffffff` | background, text, border | 9 |
| `#0000ee` | text, border | 4 |
| `#000437` | text, border | 3 |
| `#042c60` | text, border | 2 |
| `#e5e5e5` | border | 1 |
| `#ddf4ff` | background | 1 |
| `#100f3e` | background | 1 |
| `#808080` | text | 1 |
| `#c1c1c1` | border | 1 |

## Typography

### Font Families

- **duolingo-sans** — used for all (4283 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 64px | 4rem | 700 | normal | -1.28px | h1 |
| 48px | 3rem | 700 | normal | normal | h2, span |
| 32px | 2rem | 700 | normal | normal | h1 |
| 19px | 1.1875rem | 700 | 26.6px | normal | div |
| 17px | 1.0625rem | 500 | 20px | normal | body, noscript, div, script |
| 16px | 1rem | 400 | 18.4px | normal | html, head, meta, noscript |
| 15px | 0.9375rem | 700 | 17.25px | 0.8px | button, span, img, a |
| 14px | 0.875rem | 700 | 17px | normal | span |
| 13px | 0.8125rem | 700 | 16px | normal | a |

### Heading Scale

```css
h1 { font-size: 64px; font-weight: 700; line-height: normal; }
h2 { font-size: 48px; font-weight: 700; line-height: normal; }
h1 { font-size: 32px; font-weight: 700; line-height: normal; }
```

### Body Text

```css
body { font-size: 17px; font-weight: 500; line-height: 20px; }
```

### Font Weights in Use

`500` (4029x), `700` (160x), `400` (106x)

## Spacing

**Base unit:** 4px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-8 | 8px | 0.5rem |
| spacing-23 | 23px | 1.4375rem |
| spacing-40 | 40px | 2.5rem |
| spacing-48 | 48px | 3rem |
| spacing-64 | 64px | 4rem |
| spacing-80 | 80px | 5rem |
| spacing-96 | 96px | 6rem |
| spacing-140 | 140px | 8.75rem |
| spacing-185 | 185px | 11.5625rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 2px | 1 |
| lg | 12px | 9 |

## Box Shadows

**sm** — blur: 5px
```css
box-shadow: rgb(128, 128, 128) 0px 0px 5px 0px;
```

## CSS Custom Properties

### Colors

```css
--color-koala-always-dark: 72, 90, 98;
--color-unknown-935051: 147, 80, 81;
--color-narwhal: 20, 83, 163;
--color-unknown-131757: 19, 23, 87;
--color-walking-fish: 255, 223, 224;
--color-unknown-172071: 23, 32, 113;
--color-ocean: 0, 124, 143;
--color-wolf-always-light: 119, 119, 119;
--color-humpback: 43, 112, 201;
--color-tree-frog-always-light: 88, 167, 0;
--color-snow-always-light: 255, 255, 255;
--color-adventurer: 96, 12, 199;
--color-max-dark: 39, 10, 61;
--color-half-branded-outline-green: 38, 206, 155;
--color-twitter: 29, 161, 242;
--color-facebook-dark: 45, 67, 115;
--color-guinea-pig-always-light: 205, 121, 0;
--color-unknown-26ff55: 38, 255, 85;
--color-ether: 60, 89, 141;
--color-lily-radio: 144, 91, 179;
--color-half-branded-outline-blue: 42, 136, 255;
--color-adventurer-progress-bar: 122, 13, 199;
--color-streak-panel-frozen-text: 132, 216, 255;
--color-cloud-light: 221, 221, 221;
--color-diamond-tournament-purple: 161, 161, 238;
--color-seafoam: 158, 224, 233;
--color-streak-panel-milestone-gradient-start: 255, 147, 58;
--color-nyp-gradient-purple: 201, 98, 255;
--color-unknown-262472: 38, 36, 114;
--color-eddy-shine: 255, 105, 105;
--color-discoverer-progress-bar: 131, 50, 65;
--color-diamond-stat: 86, 219, 226;
--color-half-branded-background-purple-end: 140, 61, 186;
--color-duck: 251, 229, 109;
--color-unknown-048fd1: 4, 143, 209;
--color-canary: 255, 245, 211;
--color-rookie-progress-bar: 0, 198, 150;
--color-trailblazer: 154, 143, 232;
--color-turtle-always-light: 165, 237, 110;
--color-unknown-013047: 1, 48, 71;
--color-polar: 247, 247, 247;
--color-half-branded-background-blue-middle: 6, 27, 75;
--color-fox-always-light: 255, 150, 0;
--color-falstaff-secondary: 150, 90, 58;
--color-unknown-e3e3e3: 227, 227, 227;
--color-unknown-696cee: 105, 108, 238;
--color-friends-quest-friend-incomplete: 145, 145, 145;
--color-wolf: 119, 119, 119;
--color-iguana-always-light: 221, 244, 255;
--color-streak-panel-frozen-background: 221, 244, 255;
--color-super-gradient-neutral-purple: 95, 60, 172;
--color-starling: 92, 108, 252;
--color-dark-mode-locked-path-section-text-color: 82, 101, 109;
--color-grizzly-lite: 220, 143, 71;
--color-beluga: 187, 242, 255;
--color-cardinal-always-dark: 238, 85, 85;
--color-unknown-a4dffb: 164, 223, 251;
--color-oscar-shine: 63, 217, 181;
--color-unknown-f3484e: 243, 72, 78;
--color-kiwi: 122, 199, 12;
--color-explorer: 255, 100, 191;
--color-cardinal-always-light: 255, 75, 75;
--color-black-text: 60, 60, 60;
--color-unknown-a2a2a2: 162, 162, 162;
--color-koala: 215, 215, 215;
--color-polar-always-light: 247, 247, 247;
--color-eel-always-light: 75, 75, 75;
--color-unknown-de8029: 222, 128, 41;
--color-macaw-always-light: 28, 176, 246;
--color-eclipse: 0, 4, 55;
--color-unknown-959595: 149, 149, 149;
--color-streak-panel-extended-background: 255, 150, 0;
--color-max-button-purple: 97, 33, 194;
--color-unknown-aaa: 170, 170, 170;
--color-cheetah: 255, 206, 142;
--color-super-gradient-purple-variant1: 17, 34, 181;
--color-lily-shine: 214, 150, 255;
--color-nebula: 63, 34, 236;
--color-hv-orange: 204, 121, 0;
--color-zari-radio: 179, 94, 146;
--color-lin-lucy-shine: 255, 168, 44;
--color-macaw-shadow: 0, 150, 221;
--color-monkey: 229, 162, 89;
--color-yir-page3-shadow: 187, 172, 252;
--color-duo-shine: 114, 214, 39;
--color-tree-frog: 88, 167, 0;
--color-zari-secondary: 204, 107, 166;
--color-unknown-423a9c: 66, 58, 156;
--color-unknown-e4ffff: 228, 255, 255;
--color-guinea-pig: 205, 121, 0;
--color-juicy-blue-space-light: 35, 83, 144;
--color-discoverer: 111, 44, 57;
--color-flamingo: 255, 178, 178;
--color-sea-sponge: 215, 255, 184;
--color-crab: 255, 120, 120;
--color-lion: 255, 177, 0;
--color-nyp-gradient-green-header: 38, 203, 160;
--color-owl-always-light: 88, 204, 2;
--color-iguana: 221, 244, 255;
--color-orca: 51, 51, 51;
--color-bluebird: 3, 144, 211;
--color-cotinga: 121, 58, 227;
--color-unknown-fafafa: 250, 250, 250;
--color-unknown-f4fafe: 244, 250, 254;
--color-black-white: 0, 0, 0;
--color-max-light-purple: 221, 140, 254;
--color-blueberry: 17, 82, 167;
--color-unknown-001e2d: 0, 30, 45;
--color-max-ad82e6: 173, 130, 230;
--color-unknown-ddd: 221, 221, 221;
--color-whale: 24, 153, 214;
--color-ultra-violet: 97, 33, 194;
--color-kiwi-dark: 93, 151, 9;
--color-navigator: 9, 47, 119;
--color-champion-progress-bar: 255, 129, 80;
--color-eel-always-dark: 241, 247, 251;
--color-duo-radio: 62, 143, 1;
--color-vikram-secondary: 163, 42, 113;
--color-sea-sponge-always-light: 215, 255, 184;
--color-snow: 255, 255, 255;
--color-celestia: 255, 255, 255;
--color-friends-quest-own-incomplete: 175, 175, 175;
--color-unknown-fbdec5: 251, 222, 197;
--color-fox: 255, 150, 0;
--color-manta-ray: 4, 44, 96;
--color-unknown-fff2aa: 255, 242, 170;
--color-super-gradient-top-halo: 12, 76, 70;
--color-black-text-always-light: 60, 60, 60;
--color-unknown-cf17c9: 207, 23, 201;
--color-gold-shine: 255, 231, 0;
--color-traveler: 255, 145, 83;
--color-cosmos: 60, 77, 255;
--color-falstaff-radio: 131, 79, 51;
--color-cowbird: 174, 104, 2;
--color-fox-shadow: 205, 121, 0;
--color-gold: 250, 169, 25;
--color-half-branded-background-blue-end: 22, 55, 140;
--color-unknown-fffbef: 255, 251, 239;
--color-bea-junior-shine: 67, 190, 248;
--color-unknown-655ebb: 101, 94, 187;
--color-unknown-ffc700: 255, 199, 0;
--color-beetle: 206, 130, 255;
--color-orca-always-light: 51, 51, 51;
--color-zari-shine: 255, 158, 217;
--color-black: 0, 0, 0;
--color-nova: 207, 23, 200;
--color-unknown-3ebbf6: 62, 187, 246;
--color-cloud: 207, 207, 207;
--color-learning-progress-bar: 0, 148, 255;
--color-snow-dark-swan: 255, 255, 255;
--color-swan: 229, 229, 229;
--color-max-button-dark-purple: 58, 27, 123;
--color-daredevil-progress-bar: 54, 98, 165;
--color-streak-panel-milestone-gradient-end: 255, 200, 0;
--color-eddy-radio: 179, 53, 53;
--color-max-shadow: 20, 208, 225;
--color-super-gradient-blue-variant1: 38, 139, 255;
--color-sabrewing: 165, 112, 255;
--color-orca-always-dark: 55, 70, 79;
--color-macaw: 28, 176, 246;
--color-pig: 245, 164, 164;
--color-swan-always-light: 229, 229, 229;
--color-unknown-0e3d79: 14, 61, 121;
--color-grackle: 167, 160, 255;
--color-hare-always-light: 175, 175, 175;
--color-gamma: 38, 246, 99;
--color-betta: 144, 105, 205;
--color-diamond: 56, 208, 208;
--color-blue-space: 11, 62, 113;
--color-streak-panel-unextended-topbar-text: 235, 195, 127;
--color-camel: 231, 166, 1;
--color-traveler-progress-bar: 255, 167, 106;
--color-polar-always-dark: 32, 47, 54;
--color-streak-panel-friend-background: 255, 95, 0;
--color-super-background-secondary: 26, 30, 76;
--color-fire-ant-always-light: 234, 43, 43;
--color-unknown-d9d9d9: 217, 217, 217;
--color-explorer-progress-bar: 255, 138, 207;
--color-unknown-280378: 40, 3, 120;
--color-navigator-progress-bar: 12, 57, 141;
--color-bea-radio: 20, 123, 172;
--color-koala-always-light: 215, 215, 215;
--color-hv-peach: 219, 186, 131;
--color-oscar-secondary: 0, 164, 125;
--color-unknown-00aff9: 0, 175, 249;
--color-course-complete-cta: 120, 219, 224;
--color-owl: 88, 204, 2;
--color-wolf-always-dark: 220, 230, 236;
--color-streak-panel-unextended-heading-text: 235, 195, 127;
--color-yir-page4-shadow: 143, 219, 255;
--color-hv-brown: 140, 90, 17;
--color-course-complete-cta-border: 94, 201, 204;
--color-moon-jelly: 122, 240, 242;
--color-blue-tang: 0, 141, 207;
--color-lily-secondary: 165, 104, 204;
--color-nyp-gradient-blue: 38, 138, 255;
--color-bea-secondary: 24, 153, 214;
--color-vikram-radio: 143, 36, 99;
--color-unknown-6e00cf: 110, 0, 207;
--color-roseate: 223, 75, 162;
--color-martin: 71, 85, 223;
--web-ui_button-border-radius: 16px;
--color-ice: 225, 253, 255;
--color-unknown-d087ff: 208, 135, 255;
--color-daily_refresh-progress-bar: 28, 160, 255;
--color-bee-always-dark: 255, 199, 0;
--color-orange: 255, 157, 0;
--color-walking-fish-always-light: 255, 223, 224;
--color-diamond-tournament-reaction: 118, 163, 231;
--color-quasar: 252, 85, 255;
--color-kiwi-light: 142, 224, 0;
--color-daredevil: 46, 83, 138;
--color-eel: 75, 75, 75;
--color-falstaff-shine: 227, 165, 108;
--color-yir-page5-shadow: 255, 183, 80;
--color-mask-green: 137, 226, 25;
--color-yir-page0: 221, 244, 255;
--color-blue-jay: 132, 216, 255;
--color-diamond-highlight: 231, 251, 251;
--color-unknown-7c0000: 124, 0, 0;
--color-freetail: 85, 85, 85;
--color-freetail-always-light: 85, 85, 85;
--color-yir-page1: 227, 255, 235;
--color-owl-always-dark: 147, 211, 51;
--color-fire-ant: 234, 43, 43;
--color-super-gradient-background: 12, 47, 113;
--color-swan-always-dark: 55, 70, 79;
--color-hare-always-dark: 82, 101, 109;
--color-banana: 255, 176, 32;
--color-streak-panel-frozen-subtitle: 28, 176, 246;
--color-starfish: 255, 134, 208;
--color-vikram-shine: 214, 90, 162;
--color-snow-always-dark: 19, 31, 36;
--color-juicy-blue-space: 10, 74, 130;
--color-freetail-always-dark: 82, 101, 109;
--color-streak-panel-streak-society-text: 205, 121, 0;
--color-streak-society-light-orange: 255, 179, 1;
--color-aqua: 56, 238, 255;
--color-pearl-stat: 255, 170, 222;
--color-super-gradient-pink-variant1: 252, 85, 255;
--color-starlight: 38, 138, 255;
--color-eddy-secondary: 234, 43, 43;
--color-super-gradient-green-variant1: 38, 255, 85;
--color-honeycreeper: 193, 187, 255;
--color-grizzly: 187, 113, 73;
--color-rosefinch: 180, 28, 117;
--color-unknown-353575: 53, 53, 117;
--color-unknown-051d3c: 5, 29, 60;
--color-nyp-gradient-blue-header: 38, 143, 248;
--color-yir-page1-shadow: 19, 31, 36;
--color-rookie: 0, 175, 133;
--color-anchovy: 210, 228, 232;
--color-macaw-always-dark: 73, 192, 248;
--color-aqua-always-light: 56, 238, 255;
--color-hv-light-peach: 241, 218, 179;
--color-turtle: 165, 237, 110;
--color-half-branded-outline-purple: 140, 82, 255;
--color-streak-panel-streak-society-background-always-dark: 215, 148, 51;
--color-nyp-gradient-green: 38, 207, 155;
--color-super-gradient-neutral-blue: 21, 82, 167;
--color-unknown-030d42: 3, 13, 66;
--color-super-gradient-bottom-halo: 76, 29, 115;
--color-deep-starling: 34, 33, 81;
--color-unknown-0087d0: 0, 135, 208;
--color-facebook: 59, 89, 152;
--color-streak-society-dark-orange: 255, 151, 1;
--color-cardinal: 255, 75, 75;
--color-streak-revival-background: 37, 9, 87;
--color-legendary-foreground: 140, 65, 3;
--color-max-purple: 66, 2, 106;
--color-butterfly: 111, 78, 161;
--color-streak-panel-unextended-heading-background: 255, 245, 211;
--color-lin-lucy-radio: 179, 105, 0;
--color-unknown-a3dbeb: 163, 219, 235;
--color-oscar-radio: 0, 144, 109;
--color-hare: 175, 175, 175;
--color-super-gradient-neutral: 24, 61, 142;
--color-trailblazer-progress-bar: 169, 157, 254;
--color-unknown-89e219: 137, 226, 25;
--color-champion: 255, 110, 53;
--color-stardust: 199, 255, 254;
--color-legendary-dark-background: 24, 24, 24;
--color-google: 66, 133, 244;
--color-gilded-secondary: 231, 166, 1;
--color-unknown-0e0f10: 14, 15, 16;
--color-unknown-000437: 0, 4, 55;
--color-hv-light-orange: 255, 177, 64;
--color-streak-panel-frozen-flair-background: 132, 216, 255;
--color-squid: 235, 227, 227;
--color-unknown-0047a4: 0, 71, 164;
--color-cloud-lightest: 240, 240, 240;
--color-daily_refresh: 0, 148, 255;
--color-deep-martin: 16, 15, 62;
--color-dragon: 204, 52, 141;
--color-bee: 255, 200, 0;
--color-unknown-ed8c01: 237, 140, 1;
--color-gray-text: 153, 153, 153;
--color-streak-panel-streak-society-background: 255, 200, 0;
--color-streak-panel-frozen-topbar-text: 24, 153, 214;
--color-peacock: 0, 205, 156;
```

### Spacing

```css
--text-body-letter-spacing: 0;
--text-caption-size: 1rem;
--text-heading-size-small: 1.25rem;
--text-heading-letter-spacing-medium: 0;
--text-heading-letter-spacing-xsmall: 0;
--text-label-size-large: 1.5rem;
--text-label-letter-spacing-large: 0.04em;
--text-heading-size-large: 1.75rem;
--text-body-size: 1.25rem;
--text-heading-size-medium: 1.5rem;
--text-label-letter-spacing-medium: 0.04em;
--text-pageTitle-letter-spacing-large: 0;
--text-body-letter-spacing-spacious: 0;
--text-heading-size-xsmall: 1rem;
--text-body-size-spacious: 1.25rem;
--text-label-size-medium: 1rem;
--text-pageTitle-size-small: 2rem;
--text-pageTitle-letter-spacing-small: 0;
--text-heading-letter-spacing-small: 0;
--text-caption-letter-spacing: 0;
--text-pageTitle-size-large: 2.5rem;
--text-heading-letter-spacing-large: 0;
```

### Typography

```css
--text-heading-weight-medium: 700;
--text-heading-line-height-medium: 2rem;
--text-label-weight-large: 700;
--text-caption-line-height: 1.5rem;
--text-body-casing-spacious: none;
--text-label-line-height-medium: 1rem;
--text-body-line-height: 1.75rem;
--text-heading-line-height-small: 1.5rem;
--text-pageTitle-line-height-large: 2.75rem;
--text-heading-weight-xsmall: 700;
--text-body-casing: none;
--text-heading-weight-small: 700;
--text-pageTitle-casing-large: none;
--text-heading-line-height-xsmall: 1.25rem;
--text-heading-line-height-large: 2rem;
--text-body-weight-bold: 700;
--text-caption-casing: none;
--text-caption-weight-bold: 700;
--text-body-line-height-spacious: 2rem;
--text-body-weight-spacious-bold: 700;
--text-pageTitle-casing-small: none;
--text-body-weight-spacious: 500;
--text-label-weight-medium: 700;
--text-pageTitle-weight-large: 700;
--text-label-casing-large: uppercase;
--text-heading-weight-large: 700;
--text-label-casing-medium: uppercase;
--text-label-line-height-large: 1.5rem;
--text-heading-casing-large: none;
--text-heading-casing-xsmall: none;
--text-heading-casing-small: none;
--text-pageTitle-line-height-small: 2.25rem;
--text-body-weight: 500;
--text-caption-weight: 500;
--text-heading-casing-medium: none;
--text-pageTitle-weight-small: 700;
```

### Other

```css
--rtl-sign: 1;
--viewport-height: 100dvh;
```

### Semantic

```css
--color-half-branded-outline-green: 38, 206, 155;
--color-nyp-gradient-green-header: 38, 203, 160;
--color-mask-green: 137, 226, 25;
--color-super-gradient-green-variant1: 38, 255, 85;
--color-nyp-gradient-green: 38, 207, 155;
--color-daredevil-progress-bar: 54, 98, 165;
--color-daredevil: 46, 83, 138;
--color-half-branded-outline-blue: 42, 136, 255;
--color-half-branded-background-blue-middle: 6, 27, 75;
--color-juicy-blue-space-light: 35, 83, 144;
--color-bluebird: 3, 144, 211;
--color-blueberry: 17, 82, 167;
--color-half-branded-background-blue-end: 22, 55, 140;
--color-super-gradient-blue-variant1: 38, 139, 255;
--color-blue-space: 11, 62, 113;
--color-blue-tang: 0, 141, 207;
--color-nyp-gradient-blue: 38, 138, 255;
--color-blue-jay: 132, 216, 255;
--color-juicy-blue-space: 10, 74, 130;
--color-nyp-gradient-blue-header: 38, 143, 248;
--color-super-gradient-neutral-blue: 21, 82, 167;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| 400px | 400px | min-width |
| sm | 426px | min-width |
| sm | 530px | max-width |
| 550px | 550px | min-width |
| sm | 600px | max-width |
| 896px | 896px | max-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.22, 1, 0.36, 1)`, `ease`

**Durations:** `0.3s`, `0.4s`, `0.2s`, `0.5s`

### Common Transitions

```css
transition: all;
transition: border-color 0.3s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
transition: filter 0.2s;
transition: transform 0.5s ease-in-out;
transition: right 0.3s;
```

### Keyframe Animations

**onetrust-fade-in**
```css
@keyframes onetrust-fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (3 instances)

```css
.buttons {
  color: rgb(175, 175, 175);
  font-size: 15px;
  font-weight: 700;
  padding-top: 0px;
  padding-right: 16px;
  border-radius: 12px;
}
```

### Inputs (1 instances)

```css
.inputs {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-color: rgb(193, 193, 193);
  border-radius: 0px;
  font-size: 17px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (115 instances)

```css
.links {
  color: rgb(165, 237, 110);
  font-size: 17px;
  font-weight: 700;
}
```

### Navigation (2 instances)

```css
.navigation {
  color: rgb(60, 60, 60);
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
  background-color: rgb(88, 204, 2);
  color: rgb(60, 60, 60);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 17px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(175, 175, 175);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(175, 175, 175);
  font-size: 15px;
  font-weight: 700;
```

### Button — 2 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(28, 176, 246);
  padding: 0px 16px 0px 16px;
  border-radius: 12px;
  border: 2px 2px 4px solid rgba(0, 0, 0, 0);
  font-size: 15px;
  font-weight: 700;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 4, 55);
  padding: 0px 16px 0px 16px;
  border-radius: 12px;
  border: 0px 0px 4px solid rgba(0, 0, 0, 0);
  font-size: 15px;
  font-weight: 700;
```

## Layout System

**10 grid containers** and **92 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1728px | 0px |
| 100% | 0px |
| 1440px | 0px |
| 988px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 1-column | 8x |
| 3-column | 1x |
| 5-column | 1x |

### Grid Templates

```css
grid-template-columns: 2000px;
grid-template-columns: 178px 178px 178px 178px 178px;
gap: 24px;
grid-template-columns: 14px 1002px 14px;
gap: 30px;
grid-template-columns: 178px;
gap: 32px;
grid-template-columns: 178px;
gap: 32px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 23x |
| row/nowrap | 66x |
| row-reverse/nowrap | 3x |

**Gap values:** `101px`, `10px`, `12px`, `23px`, `24px`, `30px`, `32px`, `40px`, `48px`, `80px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 89/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 92/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 70 !important rules — prefer specificity over overrides
- 91% of CSS is unused — consider purging
- 3676 duplicate CSS declarations

## Z-Index Map

**6 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2147483646,2147483646 | div.o.n.e.t.r.u.s.t.-.p.c.-.d.a.r.k.-.f.i.l.t.e.r. .o.t.-.h.i.d.e. .o.t.-.f.a.d.e.-.i.n |
| dropdown | 300,322 | div._.1.A.T.O.C. ._.1.F.n.e.m, div._.1.A.T.O.C. ._.2.z.x.Q.8 |
| base | -1,2 | div._.1.N.J.U.B. ._.1.T.x.i.q, div._.1.6.Y.y.p, div._.3.L.2.F.E. ._.1.J.E.F.f |

**Issues:**
- Very high z-index values: 2147483646

## SVG Icons

**4 unique SVG icons** detected. Dominant style: **outlined**.

| Size Class | Count |
|------------|-------|
| xs | 2 |
| lg | 2 |

**Icon colors:** `currentColor`

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 45 | objectFit: fill, borderRadius: 0px, shape: square |
| gallery | 10 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 4:3 (42x), 1:1 (9x), 4.26:1 (1x), 16:9 (1x), 6.89:1 (1x), 3:2 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `500ms` | 500 |

### Easing Families

- **ease-out** (1 uses) — `cubic-bezier(0.22, 1, 0.36, 1)`
- **ease-in-out** (1 uses) — `ease`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `onetrust-fade-in` | fade | opacity | 1 |

## Component Anatomy

### button — 3 instances

**Slots:** label, icon

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** all-lowercase (tight)

### Top CTA Verbs

- **site** (1)
- **i** (1)
- **try** (1)

### Button Copy Patterns

- "site language: english" (1×)
- "i already have an account" (1×)
- "try 1 week free" (1×)

### Sample Headings

> The free, fun, and effective way to learn a language!
> free. fun. effective.
> backed by science
> stay motivated
> personalized learning
> learn anytime, anywhere
> free. fun. effective.
> backed by science
> stay motivated
> personalized learning

## Page Intent

**Type:** `landing` (confidence 0.31)
**Description:** Free, fun, and effective courses in languages and more. Learn with quick, science-based lessons personalized to you.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): hero → nav → nav → testimonial → pricing → pricing → content → content → content → content → pricing → testimonial → testimonial → pricing → pricing → cta → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | hero | The free, fun, and effective way to learn a language! | 0.85 |
| 1 | nav | — | 0.9 |
| 2 | nav | — | 0.9 |
| 3 | testimonial | free. fun. effective. | 0.8 |
| 4 | pricing | free. fun. effective. | 0.4 |
| 5 | pricing | free. fun. effective. | 0.4 |
| 6 | content | backed by science | 0.3 |
| 7 | content | stay motivated | 0.3 |
| 8 | content | personalized learning | 0.3 |
| 9 | content | learn anytime, anywhere | 0.3 |
| 10 | pricing | — | 0.4 |
| 11 | testimonial | duolingo english test | 0.8 |
| 12 | testimonial | duolingo english test | 0.8 |
| 13 | pricing | duolingo for schools | 0.4 |
| 14 | pricing | duolingo abc | 0.4 |
| 15 | cta | learn a language with duolingo | 0.4 |
| 16 | footer | — | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.363 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 12px |
| backdrop-filter in use | no |
| Gradients | 0 |

## Imagery Style

**Label:** `flat-illustration` (confidence 0.133)
**Counts:** total 55, svg 55, icon 43, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `duolingo-sans` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
