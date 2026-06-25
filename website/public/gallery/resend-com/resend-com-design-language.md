# Design Language: Resend · Email for developers

> Extracted from `https://resend.com` on June 25, 2026
> 2915 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#d6ebfd` | rgb(214, 235, 253) | hsl(208, 91%, 92%) | 121 |
| Secondary | `#00a3ff` | rgb(0, 163, 255) | hsl(202, 100%, 50%) | 1 |
| Accent | `#44ffa4` | rgb(68, 255, 164) | hsl(151, 100%, 63%) | 78 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#f0f0f0` | hsl(0, 0%, 94%) | 2604 |
| `#a1a4a5` | hsl(195, 2%, 64%) | 1171 |
| `#ffffff` | hsl(0, 0%, 100%) | 765 |
| `#f1f7fe` | hsl(212, 87%, 97%) | 504 |
| `#464a4d` | hsl(206, 5%, 29%) | 168 |
| `#6c6c6c` | hsl(0, 0%, 42%) | 132 |
| `#000000` | hsl(0, 0%, 0%) | 60 |
| `#e5edfd` | hsl(220, 86%, 95%) | 31 |
| `#70757e` | hsl(219, 6%, 47%) | 16 |
| `#262a2d` | hsl(206, 8%, 16%) | 2 |
| `#cccccc` | hsl(0, 0%, 80%) | 1 |

### Background Colors

Used on large-area elements: `#000000`, `#ffffff`

### Text Colors

Text color palette: `#ffffff`, `#f0f0f0`, `#f1f7fe`, `#a1a4a5`, `#ffc446`, `#fcfdff`, `#ebeced`, `#464a4d`, `#6c6c6c`, `#a0a0a0`

### Gradients

```css
background-image: linear-gradient(104deg, rgba(253, 253, 253, 0.05) 5%, rgba(240, 240, 228, 0.1) 100%);
```

```css
background-image: linear-gradient(236.561deg, rgba(2, 252, 239, 0.44) 0%, rgba(255, 181, 43, 0.44) 50%, rgba(160, 43, 254, 0.44) 100%);
```

```css
background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.5));
```

```css
background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: conic-gradient(from 90deg, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, rgba(0, 0, 0, 0) 80%);
```

```css
background-image: linear-gradient(to right bottom in oklab, rgb(255, 196, 70) 0%, rgba(254, 109, 21, 0.97) 100%);
```

```css
background-image: linear-gradient(oklab(0.999994 0.0000455678 0.0000200868 / 0.03) 0%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0) 0%, rgba(232, 232, 232, 0.2) 33.02%, rgba(143, 143, 143, 0.67) 64.41%, rgba(236, 72, 153, 0) 98.93%);
```

```css
background-image: linear-gradient(in oklab, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(in oklab, rgba(214, 235, 253, 0.19) 0%, rgba(211, 237, 248, 0.114) 100%);
```

```css
background-image: linear-gradient(in oklab, rgba(216, 244, 246, 0.035) 0%, rgb(0, 0, 0) 100%);
```

```css
background-image: linear-gradient(to top in oklab, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 100%);
```

```css
background-image: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 100%);
```

```css
background-image: radial-gradient(70% 80% at 50% 0%, rgba(255, 255, 255, 0.06) 3%, rgba(98, 255, 179, 0) 70%, rgba(98, 255, 179, 0) 100%);
```

```css
background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0));
```

```css
background-image: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)), conic-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 95%, rgb(0, 0, 0) 100%);
```

```css
background-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 80%, rgb(0, 0, 0) 100%);
```

```css
background-image: linear-gradient(rgb(27, 27, 27), rgb(3, 3, 3));
```

```css
background-image: linear-gradient(in oklab, rgba(217, 237, 254, 0.145) 0%, rgba(221, 234, 248, 0.08) 50%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%, rgb(0, 0, 0) 100%);
```

```css
background-image: radial-gradient(41.07% 8.33% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(rgb(16, 16, 16) 0%, rgba(0, 0, 0, 0.8) 100%);
```

```css
background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 100%);
```

```css
background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(155, 124, 255) 50%, rgba(255, 255, 255, 0) 100%);
```

```css
background-image: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: radial-gradient(100% 50% at 50% 0%, rgba(0, 163, 255, 0.13) 0%, rgba(0, 163, 255, 0) 50%, rgba(0, 163, 255, 0) 100%);
```

```css
background-image: radial-gradient(rgba(200, 200, 200, 0.15) 0%, rgb(0, 0, 0) 90%);
```

```css
background-image: linear-gradient(oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(oklab(0.999994 0.0000455678 0.0000200868 / 0.03) 0%, oklab(0.999994 0.0000455678 0.0000200868 / 0.00999999) 50%, rgb(0, 0, 0) 100%);
```

```css
background-image: linear-gradient(to left bottom, oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(to left bottom, oklab(0.999994 0.0000455678 0.0000200868 / 0.06) 0%, rgba(0, 0, 0, 0) 100%);
```

```css
background-image: linear-gradient(rgba(80, 80, 80, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
```

```css
background-image: linear-gradient(rgba(0, 0, 0, 0) 60%, rgb(0, 0, 0) 100%, rgb(0, 0, 0) 100%);
```

```css
background-image: linear-gradient(rgba(255, 255, 255, 0) 60%, rgb(255, 255, 255) 100%, rgb(255, 255, 255) 100%);
```

```css
background-image: linear-gradient(42deg, rgb(20, 21, 23), rgb(25, 27, 30)), linear-gradient(42deg, rgba(24, 25, 28, 0.88) 45%, rgba(215, 239, 248, 0.28));
```

```css
background-image: radial-gradient(100px, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
```

```css
background-image: linear-gradient(to top, oklab(0.999994 0.0000455678 0.0000200868 / 0.4) 0%, oklab(0.999994 0.0000455677 0.0000200868 / 0.8) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#f0f0f0` | text, border, background | 2604 |
| `#a1a4a5` | text, border | 1171 |
| `#ffffff` | text, border, background | 765 |
| `#f1f7fe` | text, border | 504 |
| `#464a4d` | text, border | 168 |
| `#6c6c6c` | text, border | 132 |
| `#d6ebfd` | border, background | 121 |
| `#44ffa4` | text, border, background | 78 |
| `#000000` | background, text, border | 60 |
| `#e5edfd` | text, border | 31 |
| `#ffc446` | text, border | 30 |
| `#70757e` | text, border | 16 |
| `#ff9592` | text, border | 9 |
| `#3b9eff` | text, border | 8 |
| `#baa7ff` | text, border | 5 |
| `#70b8ff` | text, border | 5 |
| `#ffca16` | text, border | 5 |
| `#22ff99` | background | 2 |
| `#262a2d` | border | 2 |
| `#0b0e14` | background | 1 |
| `#8354fe` | background | 1 |
| `#0077ff` | background | 1 |
| `#fa8200` | background | 1 |
| `#ff173f` | background | 1 |
| `#cccccc` | background | 1 |
| `#ff6465` | background | 1 |
| `#ffd60a` | background | 1 |
| `#00a3ff` | background | 1 |

## Typography

### Font Families

- **inter** — used for body (2021 elements)
- **commitMono** — used for body (814 elements)
- **aBCFavorit** — used for all (31 elements)
- **Helvetica** — used for all (25 elements)
- **domaine** — used for headings (4 elements)
- **Arial** — used for body (3 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 96px | 6rem | 400 | 96px | -0.96px | h1, br |
| 76.8px | 4.8rem | 400 | 76.8px | -0.768px | h2, br |
| 56px | 3.5rem | 400 | 67.2px | -2.8px | h2, span, br |
| 24px | 1.5rem | 400 | 33.6px | normal | h2, strong, span |
| 20px | 1.25rem | 400 | 26px | normal | h2, h4 |
| 18px | 1.125rem | 400 | 27px | normal | p, span, script, br |
| 16px | 1rem | 400 | 24px | normal | html, head, meta, link |
| 14px | 0.875rem | 500 | 20px | normal | button, svg, path, a |
| 12px | 0.75rem | 400 | 16px | normal | a, span, svg, path |

### Heading Scale

```css
h1 { font-size: 96px; font-weight: 400; line-height: 96px; }
h2 { font-size: 76.8px; font-weight: 400; line-height: 76.8px; }
h2 { font-size: 56px; font-weight: 400; line-height: 67.2px; }
h2 { font-size: 24px; font-weight: 400; line-height: 33.6px; }
h2 { font-size: 20px; font-weight: 400; line-height: 26px; }
h4 { font-size: 16px; font-weight: 400; line-height: 24px; }
```

### Body Text

```css
body { font-size: 12px; font-weight: 400; line-height: 16px; }
```

### Font Weights in Use

`400` (2702x), `500` (187x), `600` (24x), `700` (2x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-20 | 20px | 1.25rem |
| spacing-24 | 24px | 1.5rem |
| spacing-28 | 28px | 1.75rem |
| spacing-40 | 40px | 2.5rem |
| spacing-48 | 48px | 3rem |
| spacing-62 | 62px | 3.875rem |
| spacing-80 | 80px | 5rem |
| spacing-96 | 96px | 6rem |
| spacing-104 | 104px | 6.5rem |
| spacing-144 | 144px | 9rem |
| spacing-150 | 150px | 9.375rem |
| spacing-221 | 221px | 13.8125rem |
| spacing-380 | 380px | 23.75rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 4px | 20 |
| md | 8px | 33 |
| lg | 12px | 3 |
| lg | 16px | 72 |
| xl | 24px | 10 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
```

**sm** — blur: 0px
```css
box-shadow: rgb(0, 0, 0) 0px 0px 0px 8px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(176, 199, 217, 0.145) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(255, 255, 255) 0px 1px 1px 0px inset;
```

## CSS Custom Properties

### Colors

```css
--editor-accent: 59 130 246;
--color-orange-4: #ff590039;
--color-orange-10: #ff801f;
--color-green-4: #11ff992d;
--color-zinc-200: lab(90.6853% .399232 -1.45452);
--color-green-3: #22ff991e;
--color-pink-500: lab(56.9303% 76.8162 -8.07021);
--color-yellow-9: #ffc53d;
--color-neutral-300: lab(84.92% 0 -.0000119209);
--tw-inset-ring-shadow: 0 0 #0000;
--color-gray-a3: #b0c7d925;
--color-neutral-200: lab(90.952% 0 -.0000119209);
--color-blue-5: #0081fd6b;
--color-gray-12: #f0f0f0;
--color-gray-300: lab(85.1236% -.612259 -3.7138);
--color-light-slate-3: #0000330f;
--color-slate-300: lab(84.7652% -1.94535 -7.93337);
--color-gray-500: lab(47.7841% -.393182 -10.0268);
--color-gray-2: #191b1e;
--color-blue-4: #0075ff57;
--color-green-500: lab(70.5521% -66.5147 45.8073);
--color-blue-10: #3b9eff;
--color-orange-11: #ffa057;
--color-white: #fff;
--color-black-12: #000000f2;
--color-light-gray-a3: #d9d9d9;
--color-yellow-300: lab(89.7033% -.480294 84.4917);
--color-zinc-950: lab(2.51107% .242703 -.886115);
--color-gray-100: lab(96.1596% -.0823438 -1.13575);
--color-red-5: #ff204756;
--color-black-6: #0006;
--color-violet-500: lab(49.9355% 55.1776 -81.8963);
--text-on-accent: #000;
--color-gray-11: #a1a4a5;
--color-orange-7: #ff832c75;
--color-light-gray-1: #f0f0f0;
--color-gray-a8: #d8eaf161;
--color-green-6: #44ffaa4b;
--color-light-gray-7: #656565;
--color-gray-10: #878d8f;
--color-gray-5: #333b3e;
--animate-disco-border: disco 6s linear infinite;
--color-violet-3: #8354fe36;
--color-cyan-500: lab(67.805% -35.3952 -30.2018);
--color-orange-500: lab(64.272% 57.1788 90.3583);
--color-yellow-4: #fc820032;
--color-yellow-5: #fd8b0041;
--color-black-2: #0000001a;
--color-black-8: #0009;
--ai-border-speed: 3s;
--color-gray-a9: #dceff673;
--color-blue-7: #2a91fe98;
--color-slate-10: #e5edfd7b;
--bg-accent: #fff;
--color-yellow-12: #ffe7b3;
--color-emerald-500: lab(66.9756% -58.27 19.5419);
--color-gray-8: #52595b;
--color-gray-950: lab(1.90334% .278696 -5.48866);
--color-gray-4: #293034;
--scroll-shadow-line-color: #212629;
--color-red-9: #fe4e54e4;
--color-yellow-10: #ffd60a;
--color-gray-600: lab(35.6337% -1.58697 -10.8425);
--color-light-gray-4: #bebebe;
--color-slate-8: #d9edff5d;
--color-blue-600: lab(44.0605% 29.0279 -86.0352);
--tw-border-style: solid;
--color-red-600: lab(48.4493% 77.4328 61.5452);
--color-gray-1: #141517;
--color-blue-12: #c2e6ff;
--color-green-8: #54ffad73;
--color-violet-7: #9879ff83;
--color-violet-6: #8f6cfd6d;
--color-black: #000;
--color-slate-5: #d9edfe25;
--color-red-12: #ffd1d9;
--tw-border-spacing-y: 0px;
--color-orange-3: #fb6a0025;
--color-sand-4: #fefef31b;
--color-green-9: #44ffa49e;
--color-slate-9: #dfebfd6d;
--color-yellow-3: #fa820022;
--color-gray-a4: #caecff33;
--tw-ring-shadow: 0 0 #0000;
--color-slate-4: #d3edf81d;
--color-red-11: #ff9592;
--color-red-3: #ff173f2d;
--bg-overlay: #000000f2;
--color-orange-9: #fe6d15f7;
--color-gray-7: #434a4d;
--color-light-gray-5: #989898;
--color-violet-9: #8668ffcc;
--ring-accent: #caecff33;
--color-blue-8: #3094feb9;
--color-green-100: lab(96.1861% -13.8464 6.52365);
--color-slate-2: #d8f4f609;
--tw-border-spacing-x: 0px;
--color-slate-11: #f1f7feb5;
--color-gray-6: #3b4345;
--color-gray-3: #212629;
--color-red-4: #fe0a3b44;
--color-violet-4: #7d51fd50;
--color-orange-8: #fe84389d;
--color-red-10: #ff6465eb;
--color-blue-9: #0090ff;
--color-gray-a2: #18191ce0;
--color-gray-a10: #e8f4f880;
--color-sand-3: #f6f6f513;
--color-red-7: #ff536184;
--tw-ring-offset-color: #fff;
--color-black-9: #000000b3;
--color-light-slate-7: #00062e32;
--color-slate-7: #d9edff40;
--color-light-gray-3: #d7d7d7;
--color-green-12: #bbffd7f0;
--color-yellow-6: #fd9b0051;
--color-red-1: #f4121209;
--color-background: #000;
--color-red-500: lab(55.4814% 75.0732 48.8528);
--color-sand-9: #fffae965;
--tw-ring-offset-width: 0px;
--color-zinc-300: lab(84.9837% .601262 -2.17986);
--color-blue-3: #0077ff3a;
--color-slate-1: #0000;
--color-sand-10: #fffdee73;
--color-black-5: #0000004d;
--color-gray-a12: #fdfdfded;
--color-orange-6: #fd75045c;
--color-red-6: #ff3e5668;
--color-fuchsia-500: lab(56.4256% 83.132 -64.639);
--color-gray-a1: #16171aeb;
--color-lime-500: lab(75.3197% -46.6547 86.1778);
--color-black-3: #00000026;
--color-violet-8: #977dfea8;
--color-slate-3: #ddeaf814;
--color-slate-50: lab(98.1434% -.369519 -1.05966);
--tw-ring-offset-shadow: 0 0 #0000;
--color-green-5: #2bffa23c;
--color-slate-6: #d6ebfd30;
--color-light-gray-a2: #ebebeb;
--color-zinc-500: lab(47.8878% 1.65477 -5.77283);
--color-green-11: #46fea5d4;
--color-yellow-1: #e63c0006;
--color-sand-11: #fffcf4b0;
--color-light-gray-2: #eee;
--color-amber-500: lab(72.7183% 31.8672 97.9407);
--color-orange-400: lab(70.0429% 42.5156 75.8207);
--color-green-800: lab(37.4616% -36.7971 22.9692);
--color-yellow-7: #ffab2567;
--color-yellow-11: #ffca16;
--bg-accent-hover: #f0f0f0;
--color-slate-100: lab(96.286% -.852436 -2.46847);
--color-green-1: #00de4505;
--color-blue-500: lab(54.1736% 13.3369 -74.6839);
--color-zinc-400: lab(65.6464% 1.53497 -5.42429);
--color-gray-a5: #d2f3ff3d;
--color-red-8: #ff5d61b0;
--color-gray-a11: #fdfeffa6;
--color-green-300: lab(86.9953% -47.2691 25.0054);
--color-gray-200: lab(91.6229% -.159115 -2.26791);
--color-gray-9: #6e7679;
--color-violet-10: #9176fed7;
--color-emerald-400: lab(75.0771% -60.7313 19.4147);
--color-slate-12: #fcfdffef;
--animate-webgl-scale-in-fade: webgl-scale-in-fade 1s ease-in-out;
--color-canvas: #14151799;
--color-blue-11: #70b8ff;
--color-yellow-500: lab(76.3898% 14.5258 98.4589);
--color-green-7: #50fdac5e;
--color-violet-11: #baa7ff;
--color-green-10: #43fea4ab;
```

### Spacing

```css
--tw-space-x-reverse: 0;
--spacing: .25rem;
--tw-space-y-reverse: 0;
```

### Typography

```css
--text-placeholder: #52595b;
--font-abc-favorit: "aBCFavorit";
--text-base--line-height: calc(1.5 / 1);
--tracking-wider: .05em;
--font-mono: "commitMono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
--font-domaine-src: "domaine";
--text-9xl--line-height: 1;
--font-weight-bold: 700;
--text-2xs: .625rem;
--text-xs--line-height: calc(1 / .75);
--font-domaine: "domaine", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--text-xl: 1.25rem;
--animate-ai-shimmer-text: ai-shimmer-text 2.5s linear infinite;
--leading-relaxed: 1.625;
--leading-snug: 1.375;
--text-9xl: 8rem;
--font-univers: ;
--text-2xl--line-height: calc(2 / 1.5);
--text-xl--line-height: calc(1.75 / 1.25);
--text-sm: .875rem;
--leading-tight: 1.25;
--text-4xl--line-height: calc(2.5 / 2.25);
--tracking-tight: -.025em;
--text-2xl: 1.5rem;
--text-7xl: 4.5rem;
--text-lg: 1.125rem;
--text-5xl--line-height: 1;
--leading-normal: 1.5;
--text-lg--line-height: calc(1.75 / 1.125);
--animate-hero-text-slide-up-fade: hero-text-slide-up-fade 1s ease-in-out;
--font-sans: "inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--text-6xl: 3.75rem;
--default-font-family: "inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--font-weight-light: 300;
--font-inter: "inter";
--font-commit-mono: "commitMono";
--text-7xl--line-height: 1;
--tracking-tighter: -.05em;
--tracking-wide: .025em;
--font-weight-semibold: 600;
--text-4xl: 2.25rem;
--tracking-normal: 0em;
--text-sm--line-height: calc(1.25 / .875);
--text-3xl--line-height: calc(2.25 / 1.875);
--text-5xl: 3rem;
--text-3xl: 1.875rem;
--text-xs: .75rem;
--tracking-widest: .1em;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-display: "aBCFavorit", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--text-6xl--line-height: 1;
--leading-loose: 2;
--text-base: 1rem;
--default-mono-font-family: "commitMono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

### Shadows

```css
--tw-inset-shadow-alpha: 100%;
--tw-inset-shadow: 0 0 #0000;
--tw-shadow-alpha: 100%;
--shadow-4xl: 2px 13px 68px 7px #0000001a;
--shadow-button: 0px 0px 4px #ffffff0f, 0px 1px 14px #ffffff1f, 0px 3px 32px #ffffff2e;
--tw-drop-shadow-alpha: 100%;
--shadow-3xl: 0 0 60px 30px #f2f2f2;
--tw-shadow: 0 0 #0000;
```

### Radii

```css
--radius-4xl: 2rem;
--radius-sm: .25rem;
--radius-2xl: 1rem;
--radius-md: .375rem;
--radius-lg: .5rem;
--radius-3xl: 1.5rem;
--radius-xs: .125rem;
--radius-xl: .75rem;
```

### Other

```css
--black-a1: #0000000d;
--black-a2: #0000001a;
--black-a3: #00000026;
--black-a4: #0003;
--black-a5: #0000004d;
--black-a6: #0006;
--black-a7: #00000080;
--black-a8: #0009;
--black-a9: #000000b3;
--black-a10: #000c;
--black-a11: #000000e6;
--black-a12: #000000f2;
--editor-topbar-height: 0px;
--container-md: 28rem;
--violet-a6: #8f6cfd6d;
--red-a7: #ff536184;
--ai-shimmer-speed: 2s;
--aspect-video: 16 / 9;
--green-a11: #46fea5d4;
--blur-lg: 16px;
--rainbow-purple: #611c9870;
--red-a9: #fe4e54e4;
--tw-outline-style: solid;
--ease-in: cubic-bezier(.4, 0, 1, 1);
--edge-fade-start: #ffffff3d;
--slate-a11: #f1f7feb5;
--violet-a3: #8354fe36;
--slate-a9: #dfebfd6d;
--edge-fade-end: #fff0;
--green-a9: #44ffa49e;
--orange-a2: #fe6d000e;
--amber-a12: #ffe7b3;
--animate-fade-out: fade-out .2s ease;
--cyan-a9: #00cfffc3;
--sand-a6: #fffaed2d;
--slate-a10: #e5edfd7b;
--animate-header-slide-down-fade: header-slide-down-fade 1s ease-in-out;
--tw-gradient-from: rgba(0, 0, 0, 0);
--amber-a8: #ffae3587;
--slate-a3: #ddeaf814;
--cyan-a11: #52e1fee5;
--tw-gradient-to: rgba(0, 0, 0, 0);
--red-a4: #fe0a3b44;
--orange-a1: #ec360007;
--gray-a9: #dceff673;
--orange-a11: #ffa057;
--blur-2xl: 40px;
--tw-gradient-via-position: 50%;
--gray-a5: #d2f3ff3d;
--gray-a2: #18191ce0;
--cyan-a4: #00baff3b;
--cyan-a7: #14cdff75;
--violet-a12: #e3defffe;
--blue-a12: #c2e6ff;
--blue-a8: #3094feb9;
--tw-gradient-to-position: 100%;
--amber-a3: #fa820022;
--default-transition-duration: .15s;
--mauve-a12: #fdfdffef;
--violet-a4: #7d51fd50;
--gray-10: #878d8f;
--animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;
--violet-a10: #9176fed7;
--container-xs: 20rem;
--cyan-a10: #28d6ffcd;
--sand-a1: #0000;
--sand-a11: #fffcf4b0;
--amber-a2: #fd9b000d;
--green-a5: #2bffa23c;
--gray-11: #a1a4a5;
--animate-open-scale-in-fade: open-scale-in-fade .2s ease-in-out;
--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
--violet-a8: #977dfea8;
--blue-a10: #3b9eff;
--blue-a4: #0075ff57;
--slate-a1: #0000;
--slate-a4: #d3edf81d;
--mauve-a10: #ece9fd7c;
--green-a6: #44ffaa4b;
--background: #000;
--tw-translate-z: 0;
--mauve-a9: #eae6fd6e;
--tw-gradient-via: rgba(0, 0, 0, 0);
--tw-scale-y: 1;
--mauve-a7: #eee9ff40;
--gray-12: #f0f0f0;
--red-a2: #f22f3e11;
--container-6xl: 72rem;
--breakpoint-lg: 64rem;
--container-3xl: 48rem;
--slate-a12: #fcfdffef;
--blur-xs: 4px;
--tw-translate-y: 0;
--ease-out: cubic-bezier(0, 0, .2, 1);
--gray-5: #333b3e;
--slate-a7: #d9edff40;
--canvas: #14151799;
--tw-content: "";
--green-a8: #54ffad73;
--animate-close-scale-out-fade: close-scale-out-fade .2s ease-in-out;
--amber-a6: #fd9b0051;
--animate-close-slide-up-fade: close-slide-up-fade .2s;
--orange-a6: #fd75045c;
--sand-a3: #f6f6f513;
--amber-a11: #ffca16;
--sand-a12: #fffffded;
--tw-translate-x: 0;
--sand-a9: #fffae965;
--red-a6: #ff3e5668;
--cyan-a5: #00befd4d;
--container-3xs: 16rem;
--mauve-a2: #f5f4f609;
--animate-open-slide-down-fade: open-slide-down-fade .2s;
--canvas-grid: #191b1e;
--animate-open-scale-up-fade: open-scale-up-fade .2s ease-in-out;
--animate-shine: shine 1s ease .8s;
--blue-a7: #2a91fe98;
--container-xl: 36rem;
--animate-caret-blink: caret-blink 1.2s ease-out infinite;
--rainbow-cyan: #00d1c670;
--gray-9: #6e7679;
--gray-a3: #b0c7d925;
--orange-a10: #ff801f;
--green-a4: #11ff992d;
--mauve-a8: #eee7ff5d;
--animate-plop3: plop 1s ease-in-out .4s infinite;
--mauve-a1: #0000;
--slate-a6: #d6ebfd30;
--gray-7: #434a4d;
--blue-a2: #1166fb18;
--gray-a11: #fdfeffa6;
--violet-a11: #baa7ff;
--gray-4: #293034;
--orange-a8: #fe84389d;
--animate-plop2: plop 1s ease-in-out .2s infinite;
--green-a12: #bbffd7f0;
--gray-2: #191b1e;
--violet-a5: #845ffd5f;
--angle: 0deg;
--red-a10: #ff6465eb;
--gray-3: #212629;
--orange-a3: #fb6a0025;
--slate-a2: #d8f4f609;
--gray-a4: #caecff33;
--red-a5: #ff204756;
--blur-xl: 24px;
--violet-a7: #9879ff83;
--tw-divide-x-reverse: 0;
--violet-a2: #853ff916;
--mauve-a3: #ebeaf814;
--blur-3xl: 64px;
--sand-a5: #fbfbeb23;
--orange-a9: #fe6d15f7;
--tw-scale-z: 1;
--mauve-a5: #efe6fe25;
--gray-a12: #fdfdfded;
--container-sm: 24rem;
--rainbow-amber: #e9ac4870;
--amber-a9: #ffc53d;
--green-a1: #00de4505;
--red-a12: #ffd1d9;
--tw-scroll-snap-strictness: proximity;
--container-lg: 32rem;
--red-a3: #ff173f2d;
--green-a10: #43fea4ab;
--orange-a12: #ffe0c2;
--blue-a3: #0077ff3a;
--gray-6: #3b4345;
--cyan-a2: #02a7f211;
--mauve-a6: #f1e6fd30;
--highlight-shine: #fff9;
--red-a8: #ff5d61b0;
--gray-a7: #e2f5fe4d;
--orange-a4: #ff590039;
--tw-gradient-from-position: 0%;
--ease-in-out: cubic-bezier(.4, 0, .2, 1);
--sand-a7: #fffbed3c;
--amber-a4: #fc820032;
--cyan-a12: #bbf3fef7;
--violet-a9: #8668ffcc;
--amber-a10: #ffd60a;
--animate-scroll-x: scroll-x 180s linear infinite;
--gray-8: #52595b;
--mauve-a11: #f5f1ffb7;
--cyan-a3: #00befd28;
--gray-1: #141517;
--violet-a1: #4422ff0f;
--gray-a1: #16171aeb;
--orange-a7: #ff832c75;
--blue-a11: #70b8ff;
--container-5xl: 64rem;
--gray-a8: #d8eaf161;
--blue-a9: #0090ff;
--sand-a8: #fff9eb57;
--green-a3: #22ff991e;
--red-a1: #f4121209;
--green-a7: #50fdac5e;
--orange-a5: #ff61004a;
--animate-plop: plop 1s ease-in-out .1s infinite;
--blur-md: 12px;
--red-a11: #ff9592;
--animate-spin: spin 1s linear infinite;
--container-4xl: 56rem;
--animate-fade-in: fade-in .2s ease;
--amber-a7: #ffab2567;
--amber-a5: #fd8b0041;
--tw-divide-y-reverse: 0;
--cyan-a8: #11cfff95;
--blue-a5: #0081fd6b;
--container-2xl: 42rem;
--animate-open-slide-up-fade: open-slide-up-fade .2s;
--slate-a5: #d9edfe25;
--blue-a1: #004df211;
--blue-a6: #0f89fd7f;
--gray-a6: #d7eff847;
--green-a2: #29f99d0b;
--tw-scale-x: 1;
--cyan-a6: #00c7fd5e;
--cyan-a1: #0091f70a;
--mauve-a4: #eee5f81d;
--animate-scroll-broadcast-x: scroll-x 48s linear infinite;
--animate-close-slide-down-fade: close-slide-down-fade .2s;
--sand-a2: #f4f4f309;
--gray-a10: #e8f4f880;
--amber-a1: #e63c0006;
--sand-a10: #fffdee73;
--sand-a4: #fefef31b;
--container-7xl: 80rem;
--blur-sm: 8px;
--slate-a8: #d9edff5d;
```

### Semantic

```css
--color-green-4: #11ff992d;
--green-a11: #46fea5d4;
--color-green-3: #22ff991e;
--green-a9: #44ffa49e;
--color-green-500: lab(70.5521% -66.5147 45.8073);
--color-green-6: #44ffaa4b;
--green-a5: #2bffa23c;
--green-a6: #44ffaa4b;
--green-a8: #54ffad73;
--color-green-8: #54ffad73;
--color-green-9: #44ffa49e;
--green-a4: #11ff992d;
--color-green-100: lab(96.1861% -13.8464 6.52365);
--green-a12: #bbffd7f0;
--color-green-12: #bbffd7f0;
--green-a1: #00de4505;
--green-a10: #43fea4ab;
--color-green-5: #2bffa23c;
--color-green-11: #46fea5d4;
--green-a3: #22ff991e;
--green-a7: #50fdac5e;
--color-green-800: lab(37.4616% -36.7971 22.9692);
--color-green-1: #00de4505;
--color-green-300: lab(86.9953% -47.2691 25.0054);
--green-a2: #29f99d0b;
--color-green-7: #50fdac5e;
--color-green-10: #43fea4ab;
--color-yellow-9: #ffc53d;
--amber-a12: #ffe7b3;
--amber-a8: #ffae3587;
--color-yellow-300: lab(89.7033% -.480294 84.4917);
--amber-a3: #fa820022;
--amber-a2: #fd9b000d;
--color-yellow-4: #fc820032;
--color-yellow-5: #fd8b0041;
--color-yellow-12: #ffe7b3;
--color-yellow-10: #ffd60a;
--amber-a6: #fd9b0051;
--amber-a11: #ffca16;
--color-yellow-3: #fa820022;
--color-yellow-6: #fd9b0051;
--rainbow-amber: #e9ac4870;
--amber-a9: #ffc53d;
--amber-a4: #fc820032;
--amber-a10: #ffd60a;
--color-yellow-1: #e63c0006;
--color-amber-500: lab(72.7183% 31.8672 97.9407);
--color-yellow-7: #ffab2567;
--color-yellow-11: #ffca16;
--amber-a7: #ffab2567;
--amber-a5: #fd8b0041;
--color-yellow-500: lab(76.3898% 14.5258 98.4589);
--amber-a1: #e63c0006;
--red-a7: #ff536184;
--red-a9: #fe4e54e4;
--red-a4: #fe0a3b44;
--color-red-5: #ff204756;
--red-a2: #f22f3e11;
--color-red-9: #fe4e54e4;
--color-red-600: lab(48.4493% 77.4328 61.5452);
--red-a6: #ff3e5668;
--color-red-12: #ffd1d9;
--color-red-11: #ff9592;
--color-red-3: #ff173f2d;
--color-red-4: #fe0a3b44;
--red-a10: #ff6465eb;
--color-red-10: #ff6465eb;
--red-a5: #ff204756;
--color-red-7: #ff536184;
--color-red-1: #f4121209;
--color-red-500: lab(55.4814% 75.0732 48.8528);
--red-a12: #ffd1d9;
--red-a3: #ff173f2d;
--color-red-6: #ff3e5668;
--red-a8: #ff5d61b0;
--red-a1: #f4121209;
--red-a11: #ff9592;
--color-red-8: #ff5d61b0;
--color-blue-5: #0081fd6b;
--color-blue-4: #0075ff57;
--color-blue-10: #3b9eff;
--blue-a12: #c2e6ff;
--blue-a8: #3094feb9;
--blue-a10: #3b9eff;
--blue-a4: #0075ff57;
--color-blue-7: #2a91fe98;
--color-blue-600: lab(44.0605% 29.0279 -86.0352);
--color-blue-12: #c2e6ff;
--blue-a7: #2a91fe98;
--blue-a2: #1166fb18;
--color-blue-8: #3094feb9;
--color-blue-9: #0090ff;
--color-blue-3: #0077ff3a;
--blue-a3: #0077ff3a;
--blue-a11: #70b8ff;
--blue-a9: #0090ff;
--color-blue-500: lab(54.1736% 13.3369 -74.6839);
--blue-a5: #0081fd6b;
--blue-a1: #004df211;
--blue-a6: #0f89fd7f;
--color-blue-11: #70b8ff;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 600px | max-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0.4, 0, 1, 1)`, `ease`, `cubic-bezier(0.36, 0.66, 0.6, 1)`, `cubic-bezier(0, 0, 0.2, 1)`, `linear`

**Durations:** `0.2s`, `0.15s`, `0.5s`, `0.3s`, `1s`, `0.6s`

### Common Transitions

```css
transition: all;
transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), fill 0.2s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.2s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.2s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.2s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), translate 0.2s cubic-bezier(0.4, 0, 0.2, 1), scale 0.2s cubic-bezier(0.4, 0, 0.2, 1), rotate 0.2s cubic-bezier(0.4, 0, 0.2, 1), filter 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 0.2s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.2s cubic-bezier(0.4, 0, 0.2, 1), display 0.2s cubic-bezier(0.4, 0, 0.2, 1), content-visibility 0.2s cubic-bezier(0.4, 0, 0.2, 1), overlay 0.2s cubic-bezier(0.4, 0, 0.2, 1), pointer-events 0.2s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), translate 0.15s cubic-bezier(0.4, 0, 0.2, 1), scale 0.15s cubic-bezier(0.4, 0, 0.2, 1), rotate 0.15s cubic-bezier(0.4, 0, 0.2, 1), filter 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 0.15s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.15s cubic-bezier(0.4, 0, 0.2, 1), display 0.15s cubic-bezier(0.4, 0, 0.2, 1), content-visibility 0.15s cubic-bezier(0.4, 0, 0.2, 1), overlay 0.15s cubic-bezier(0.4, 0, 0.2, 1), pointer-events 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), fill 0.5s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.5s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.5s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.5s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), translate 0.5s cubic-bezier(0.4, 0, 0.2, 1), scale 0.5s cubic-bezier(0.4, 0, 0.2, 1), rotate 0.5s cubic-bezier(0.4, 0, 0.2, 1), filter 0.5s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 0.5s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.5s cubic-bezier(0.4, 0, 0.2, 1), display 0.5s cubic-bezier(0.4, 0, 0.2, 1), content-visibility 0.5s cubic-bezier(0.4, 0, 0.2, 1), overlay 0.5s cubic-bezier(0.4, 0, 0.2, 1), pointer-events 0.5s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.2s cubic-bezier(0.4, 0, 1, 1), translate 0.2s cubic-bezier(0.4, 0, 1, 1), scale 0.2s cubic-bezier(0.4, 0, 1, 1), rotate 0.2s cubic-bezier(0.4, 0, 1, 1);
transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
transition: 0.2s ease-out;
transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations

**spin**
```css
@keyframes spin {
  100% { transform: rotate(360deg); }
}
```

**pulse**
```css
@keyframes pulse {
  50% { opacity: 0.5; }
}
```

**ai-shimmer-text**
```css
@keyframes ai-shimmer-text {
  0% { background-position: 100% center; }
  100% { background-position: 0% center; }
}
```

**scroll-x**
```css
@keyframes scroll-x {
  0% { transform: translate(0px); }
  100% { transform: translate(calc(-100% - 32px)); }
}
```

**shine**
```css
@keyframes shine {
  0% { background-position: 0% center; }
  100% { background-position: 100% center; }
}
```

**disco**
```css
@keyframes disco {
  0% { transform: translateY(-50%) rotate(0deg); }
  100% { transform: translateY(-50%) rotate(360deg); }
}
```

**fade-in**
```css
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**fade-out**
```css
@keyframes fade-out {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
```

**open-slide-down-fade**
```css
@keyframes open-slide-down-fade {
  0% { opacity: 0; transform: translateY(-4px); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

**close-slide-up-fade**
```css
@keyframes close-slide-up-fade {
  0% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateY(-4px); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (52 instances)

```css
.buttons {
  background-color: rgba(214, 235, 253, 0.19);
  color: rgba(241, 247, 254, 0.71);
  font-size: 14px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Inputs (3 instances)

```css
.inputs {
  color: rgb(240, 240, 240);
  border-color: rgb(240, 240, 240);
  border-radius: 0px;
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (55 instances)

```css
.links {
  color: rgba(241, 247, 254, 0.71);
  font-size: 14px;
  font-weight: 400;
}
```

### Navigation (1 instances)

```css
.navigation {
  color: rgb(255, 255, 255);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
}
```

### Footer (2 instances)

```css
.footer {
  color: rgb(240, 240, 240);
  padding-top: 20px;
  padding-bottom: 12px;
  font-size: 16px;
}
```

### Modals (6 instances)

```css
.modals {
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Tables (3 instances)

```css
.tables {
  border-color: rgba(252, 253, 255, 0.937);
  cell-style: [object Object];
}
```

### Badges (96 instances)

```css
.badges {
  color: rgb(171, 171, 171);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Tabs (29 instances)

```css
.tabs {
  background-color: rgba(214, 235, 253, 0.19);
  color: rgba(241, 247, 254, 0.71);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgba(241, 247, 254, 0.71);
  border-radius: 0px;
}
```

### Switches (2 instances)

```css
.switches {
  border-radius: 0px;
  border-color: rgb(240, 240, 240);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 12 instances, 3 variants

**Variant 1** (10 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(161, 164, 165);
  padding: 4px 12px 4px 12px;
  border-radius: 0px;
  border: 0px solid rgb(161, 164, 165);
  font-size: 14px;
  font-weight: 500;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(240, 240, 240);
  padding: 5px 12px 5px 12px;
  border-radius: 3.35544e+07px;
  border: 1px solid rgba(214, 235, 253, 0.19);
  font-size: 14px;
  font-weight: 400;
```

**Variant 3** (1 instance)

```css
  background: rgb(204, 204, 204);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 4px;
  border: 0px solid rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 16px 0px 16px;
  border-radius: 16px;
  border: 2px solid oklab(0.999994 0.0000455678 0.0000200868 / 0.05);
  font-size: 14px;
  font-weight: 600;
```

### Button — 13 instances, 1 variant

**Variant 1** (13 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgba(241, 247, 254, 0.71);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgba(241, 247, 254, 0.71);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgba(252, 253, 255, 0.937);
  padding: 1px 1px 1px 1px;
  border-radius: 8px;
  border: 0px solid rgba(252, 253, 255, 0.937);
  font-size: 14px;
  font-weight: 400;
```

### Button — 8 instances, 1 variant

**Variant 1** (8 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgba(241, 247, 254, 0.71);
  padding: 1px 1px 1px 1px;
  border-radius: 8px;
  border: 0px solid rgba(241, 247, 254, 0.71);
  font-size: 14px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(161, 164, 165);
  padding: 0px 0px 0px 0px;
  border-radius: 8px;
  border: 1px solid rgba(214, 235, 253, 0.19);
  font-size: 16px;
  font-weight: 400;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(240, 240, 240);
  padding: 0px 0px 0px 0px;
  border-radius: 4px;
  border: 0px solid rgb(240, 240, 240);
  font-size: 16px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 20px 0px 20px;
  border-radius: 16px;
  border: 2px solid oklab(0.999994 0.0000455678 0.0000200868 / 0.05);
  font-size: 16px;
  font-weight: 600;
```

### Button — 8 instances, 1 variant

**Variant 1** (8 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgba(252, 253, 255, 0.937);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgba(252, 253, 255, 0.937);
  font-size: 14px;
  font-weight: 400;
```

### Button — 3 instances, 1 variant

**Variant 1** (3 instances)

```css
  background: rgba(214, 235, 253, 0.19);
  color: rgb(240, 240, 240);
  padding: 0px 0px 0px 0px;
  border-radius: 16px;
  border: 0px solid rgb(240, 240, 240);
  font-size: 16px;
  font-weight: 400;
```

## Layout System

**7 grid containers** and **463 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 0px |
| 1280px | 24px |
| 768px | 64px |
| 1024px | 0px |
| 200px | 8px |
| calc(100% - 200px) | 0px |
| 380px | 10px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 6-column | 2x |
| 2-column | 2x |
| 3-column | 2x |
| 5-column | 1x |

### Grid Templates

```css
grid-template-columns: 357.328px 357.328px 357.344px;
gap: 80px;
grid-template-columns: 600px 600px;
gap: 32px;
grid-template-columns: 600px 600px;
gap: 32px;
grid-template-columns: 154.391px 154.406px 154.391px 154.406px 154.391px;
gap: 32px;
grid-template-columns: 389.328px 389.328px 389.344px;
gap: 32px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 355x |
| column/nowrap | 103x |
| column-reverse/nowrap | 2x |
| row/wrap | 3x |

**Gap values:** `12px`, `16px`, `32px`, `40px`, `48px`, `4px`, `6px`, `80px`, `8px`, `normal 10px`, `normal 16px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 1 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#f0f0f0` | `#0b0e14` | 16.95:1 | AAA |

## Design System Score

**Overall: 84/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 80/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 6 font families — consider limiting to 2 (heading + body)
- 551 !important rules — prefer specificity over overrides
- 7113 duplicate CSS declarations

## Gradients

**42 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 104deg | 2 | brand |
| linear | 236.561deg | 3 | bold |
| linear | to right bottom | 2 | brand |
| linear | 90deg | 4 | bold |
| conic | from 90deg | 2 | brand |
| radial | — | 2 | brand |
| linear | to right bottom in oklab | 2 | brand |
| linear | — | 2 | brand |
| linear | 90deg | 5 | complex |
| linear | — | 3 | bold |
| linear | — | 3 | bold |
| linear | — | 3 | bold |
| linear | to top in oklab | 3 | bold |
| linear | — | 3 | bold |
| linear | — | 3 | bold |

```css
background: linear-gradient(104deg, rgba(253, 253, 253, 0.05) 5%, rgba(240, 240, 228, 0.1) 100%);
background: linear-gradient(236.561deg, rgba(2, 252, 239, 0.44) 0%, rgba(255, 181, 43, 0.44) 50%, rgba(160, 43, 254, 0.44) 100%);
background: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.5));
background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%);
background: conic-gradient(from 90deg, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%);
```

## Z-Index Map

**7 unique z-index values** across 2 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| sticky | 10,50 | div.m.x.-.a.u.t.o. .w.-.f.u.l.l. .m.a.x.-.w.-.5.x.l. .p.x.-.6. .m.d.:.m.a.x.-.w.-.7.x.l. .r.e.l.a.t.i.v.e. .z.-.1.0, div.a.b.s.o.l.u.t.e. .r.i.g.h.t.-.0. .t.o.p.-.0. .z.-.1.0. .h.-.p.x. .w.-.[.3.0.0.p.x.]. .h.i.d.d.e.n. .d.a.r.k.:.b.l.o.c.k, div.a.b.s.o.l.u.t.e. .b.o.t.t.o.m.-.0. .l.e.f.t.-.0. .z.-.1.0. .h.-.p.x. .w.-.[.3.0.0.p.x.]. .h.i.d.d.e.n. .d.a.r.k.:.b.l.o.c.k |
| base | 0,1 | div.a.b.s.o.l.u.t.e. .l.e.f.t.-.[.2...5.6.3.r.e.m.]. .t.o.p.-.1.2. .z.-.0. .h.-.4./.5. .w.-.0...5. .b.g.-.s.l.a.t.e.-.6. .m.d.:.l.e.f.t.-.[.3...0.6.3.r.e.m.], span.a.b.s.o.l.u.t.e. .i.n.s.e.t.-.0. .z.-.0. .s.c.a.l.e.-.x.-.[.1...5.]. .b.l.u.r.-.x.s. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.a.b.s.o.l.u.t.e. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.f.r.o.m.-.0.%. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.i.n.s.e.t.-.0. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.t.o.p.-.1./.2. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.w.-.[.4.0.0.p.x.]. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.a.n.i.m.a.t.e.-.d.i.s.c.o.-.b.o.r.d.e.r. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.b.g.-.c.o.n.i.c. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.v.i.a.-.t.r.a.n.s.p.a.r.e.n.t. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.t.o.-.t.r.a.n.s.p.a.r.e.n.t. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.f.r.o.m.-.g.r.e.e.n.-.5.0.0, span.a.b.s.o.l.u.t.e. .i.n.s.e.t.-.0. .z.-.0. .s.c.a.l.e.-.x.-.[.1...5.]. .b.l.u.r.-.x.s. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.a.b.s.o.l.u.t.e. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.f.r.o.m.-.0.%. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.i.n.s.e.t.-.0. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.t.o.p.-.1./.2. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.w.-.[.4.0.0.p.x.]. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.a.n.i.m.a.t.e.-.d.i.s.c.o.-.b.o.r.d.e.r. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.b.g.-.c.o.n.i.c. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.v.i.a.-.t.r.a.n.s.p.a.r.e.n.t. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.t.o.-.t.r.a.n.s.p.a.r.e.n.t. .g.r.o.u.p.-.d.a.t.a.-.a.c.t.i.v.e.:.b.e.f.o.r.e.:.f.r.o.m.-.g.r.e.e.n.-.5.0.0 |

## SVG Icons

**78 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 10 |
| sm | 12 |
| md | 29 |
| lg | 14 |
| xl | 13 |

**Icon colors:** `currentColor`, `white`, `black`, `#777777`, `#999999`, `#BBBBBB`, `#DDDDDD`, `#fff`, `url(#paint0_linear_677_2)`, `url(#paint1_linear_677_2)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| inter | self-hosted | 100 900 | normal |
| aBCFavorit | self-hosted | 400, 500 | normal |
| domaine | self-hosted | 400, 500, 700 | normal |
| commitMono | self-hosted | 400 | normal, italic |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| avatar | 78 | objectFit: fill, borderRadius: 3.35544e+07px, shape: circular |
| thumbnail | 30 | objectFit: fill, borderRadius: 0px, shape: square |
| general | 5 | objectFit: fill, borderRadius: 0px, shape: square |
| gallery | 2 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (95x), 3:2 (2x), 5.64:1 (2x), 21:9 (2x), 4.65:1 (1x), 4.38:1 (1x), 4.63:1 (1x), 3.88:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `500ms` | 500 |
| `xl` | `1s` | 1000 |

### Easing Families

- **custom** (128 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`
- **ease-in** (6 uses) — `cubic-bezier(0.4, 0, 1, 1)`
- **ease-in-out** (2 uses) — `ease`
- **ease-out** (7 uses) — `cubic-bezier(0.36, 0.66, 0.6, 1)`, `cubic-bezier(0, 0, 0.2, 1)`
- **linear** (1 uses) — `linear`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `scroll-x` | slide | transform | 3 |
| `open-scale-up-fade` | slide-y | opacity, transform | 1 |
| `plop` | fade | opacity | 3 |
| `hero-text-slide-up-fade` | slide-y | opacity, transform | 1 |
| `webgl-scale-in-fade` | reveal | opacity, transform | 1 |
| `scroll-x` | slide | transform | 3 |
| `open-scale-up-fade` | slide-y | opacity, transform | 1 |
| `plop` | fade | opacity | 3 |
| `hero-text-slide-up-fade` | slide-y | opacity, transform | 1 |
| `webgl-scale-in-fade` | reveal | opacity, transform | 1 |
| `rotate` | custom | --angle | 1 |

## Component Anatomy

### button — 51 instances

**Slots:** label, icon
**Variants:** outline
**Sizes:** sm · lg · md

| variant | count | sample label |
|---|---|---|
| outline | 42 | Features |
| default | 9 | DNSBLs |

## Brand Voice

**Tone:** neutral · **Pronoun:** you-only · **Headings:** Sentence case (tight)

### Top CTA Verbs

- **get** (4)
- **node** (2)
- **user** (2)
- **features** (1)
- **company** (1)
- **resources** (1)
- **help** (1)
- **docs** (1)

### Button Copy Patterns

- "get started" (4×)
- "node.js" (2×)
- "features" (1×)
- "company" (1×)
- "resources" (1×)
- "help" (1×)
- "docs" (1×)
- "ai" (1×)
- "serverless" (1×)
- "ruby" (1×)

### Sample Headings

> Email for
developers
> Integrate this afternoon
> First-class
developer experience
> Test mode
> Modular webhooks
> Write using a delightful editor
> Go beyond editing
> Contact management
> Broadcast analytics
> Develop emails using React

## Page Intent

**Type:** `landing` (confidence 0.31)
**Description:** The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): feature-grid → hero → content → hero → nav → footer → testimonial → hero → content → testimonial → nav → sidebar → hero → feature-grid → testimonial → cta → footer → content

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | feature-grid | — | 0.8 |
| 1 | hero | Email for
developers | 0.85 |
| 2 | content | — | 0.3 |
| 3 | hero | Integrate this afternoon | 0.4 |
| 4 | nav | — | 0.4 |
| 5 | footer | — | 0.95 |
| 6 | testimonial | First-class
developer experience | 0.8 |
| 7 | hero | Write using a delightful editor | 0.4 |
| 8 | content | Go beyond editing | 0.3 |
| 9 | testimonial | Develop emails using React | 0.8 |
| 10 | nav | — | 0.4 |
| 11 | sidebar | — | 0.4 |
| 12 | hero | Reach humans, not spam folders | 0.4 |
| 13 | feature-grid | Everything in your control | 0.8 |
| 14 | testimonial | Beyond expectations | 0.8 |
| 15 | cta | Email reimagined.
Available today. | 0.75 |
| 16 | footer | — | 0.95 |
| 17 | content | — | 0.3 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.451 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 24px |
| backdrop-filter in use | no |
| Gradients | 42 |

## Imagery Style

**Label:** `flat-illustration` (confidence 0.043)
**Counts:** total 115, svg 23, icon 55, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** full

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
