# designlang — Interview Prep (Plain English)

---

## What is it, in one sentence

You give it any website URL. It opens a real browser, reads every style off the page, and spits out 17+ files — design tokens, Tailwind config, Figma variables, a full brand book — everything you'd need to recreate or match that design.

---

## How it actually works — step by step

### 1. Opens a real browser

It uses Playwright (basically headless Chrome) and loads the actual live website — not the source code, not a screenshot. The real thing, fully rendered, fonts loaded, dark mode checked, hover states triggered.

> **Say this:** *"We're reading the computed styles off the live DOM — what the browser actually rendered, not what someone wrote in a CSS file. That means it catches inline styles, CSS variables, third-party component libraries, everything."*

### 2. Pulls every style off the page

Once the page is loaded, it walks up to 5,000 elements and reads their computed styles — colors, fonts, spacing, shadows, borders, z-index, animations. It also grabs CSS variables, media queries, and keyframe animations separately.

### 3. Runs 30+ extractors in parallel

Each piece gets its own focused extractor — one for colors, one for typography, one for spacing, one for motion, one for accessibility contrast, and so on. They all run on the same raw data. If one crashes, the others keep going (`safeExtract` wraps each one, so a broken extractor returns `null` instead of killing the whole run).

> **Say this:** *"Each extractor is isolated. The whole thing can't blow up because one extractor failed on a weird site."*

### 4. Does the smart stuff

A few things are more interesting than just reading values:

- **Colors** — clusters similar colors together (so 40 near-identical blues become "primary blue") and figures out which one is the brand color based on how often it shows up on buttons and CTAs
- **Interactions** — actually hovers over elements, opens menus, triggers modals, and diffs the styles before and after to capture hover states and transitions
- **Scoring** — grades the design system (color discipline, typography consistency, spacing system) against real production benchmarks like Stripe and Linear
- **Accessibility** — checks every foreground/background color pair against WCAG, and suggests the nearest passing color as a fix

### 5. Writes 17+ output files

Each formatter takes the extracted data and writes a specific file. Tailwind config, Figma variables JSON, DTCG tokens, a big markdown doc for feeding into AI tools, CSS variables, typed React component stubs, a graded report card HTML, and more.

---

## The interesting features to talk about

**Interaction states** — most extractors just read static CSS. designlang actually *does things* to the page: scrolls, hovers buttons, opens dropdowns, clicks modals. Then it captures what changed. That's how you get real hover colors and transition details, not just the default state.

**The grading system** — it scores the design on things like "how many unique colors does this site use?" (≤12 gets 100, >100 gets 35 with a warning). It has real calibration data from sites like Stripe, Vercel, GitHub. So when it says a site scores 80/100 for typography consistency, that's against a real benchmark, not made up.

**Remix / vocabulary** — you can say "restyle this site as brutalist" or "cyberpunk" and it rewrites the tokens into that vocabulary. There are 6 vocabulary modules (brutalist, swiss, art-deco, cyberpunk, soft-ui, editorial), each with its own rules for color, type, spacing.

**Pair** — point it at two sites (e.g. `designlang pair stripe.com linear.app`) and it fuses them: takes the visual identity of one and the brand voice/tone of the other.

**MCP server** — the extracted data can be served over MCP so any AI tool that speaks MCP can query the design tokens directly, without re-crawling.

---

## How it handles dark mode

It loads the page twice — once with `colorScheme: light`, once with `colorScheme: dark`. Both passes run the color and variable extractors. The output has a `darkMode` section with its own palette and CSS variable overrides.

---

## What makes it different from other design extraction tools

> **Say this:** *"Most tools give you the colors and fonts. designlang reads the architecture — the layout system, the responsive behavior across 4 breakpoints, what changes on hover, how the motion feels. The diff between a color picker and a design system reverse-engineer."*

The things no one else does:
- Hover/focus/active state capture (actually simulates interaction)
- Motion fingerprint — figures out if the site feels "springy", "smooth", "mechanical" based on the easing curves
- Multi-page consistency — crawls internal links and reconciles which tokens are shared vs per-route
- Accessibility remediation — not just "this fails WCAG" but "here's the nearest color that would pass"
- Brand voice — reads button labels and headings to figure out tone, pronoun posture, CTA verb patterns

---

## The whole thing in one breath

> "It opens a real browser, renders the site, walks every element, and runs 30+ extractors on the computed styles. Colors get clustered into a palette, interactions get simulated to capture hover states, the design gets graded against real benchmarks, and everything formats out into whatever you need — Tailwind config, Figma variables, DTCG tokens, an AI prompt pack."

---

## Quick answers for common questions

**Why use a headless browser instead of fetching the CSS?**
CSS files only tell you what was written. The browser tells you what was actually applied — after cascade, after JS, after third-party components inject their own styles. The computed styles are the ground truth.

**What if the site uses React or loads content lazily?**
The crawler waits for `networkidle` and `fonts.ready` before extracting. For interaction states, it also scrolls and clicks to trigger lazy-loaded content.

**How does it know which color is the "primary" brand color?**
It clusters all colors by visual similarity, then looks at which cluster appears most on interactive elements — buttons, links, CTAs. The one with the highest interactive-background score wins.

**How accurate is the grade?**
It's calibrated against real production design systems (Stripe, Linear, Vercel, GitHub, Apple). Not perfect, but it's a relative signal — a 90 means "this is as tight as Stripe," not "this passed a spec."

**What's the hardest part technically?**
Color clustering. You can't just bucket by hex — hover states and opacity variants create hundreds of near-identical colors. The clustering groups them by perceptual distance so the output is readable instead of noise.
