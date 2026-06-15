import { test } from 'node:test';
import assert from 'node:assert/strict';
import { deriveTokens, studioHtml } from '../src/studio.js';
import { contrastRatio, deriveDark, deriveTokens as derive } from '../src/studio-tokens.js';

const fixture = {
  prefix: 'example-com',
  tokens: {
    $metadata: { source: 'https://example.com', version: '7.0.0' },
    color: {
      brand: { primary: { $value: '#ff4800', $type: 'color' } },
      background: { bg0: { $value: '#ffffff', $type: 'color' } },
      text: { text0: { $value: '#101010', $type: 'color' } },
    },
    radius: { md: { $value: '12px', $type: 'dimension' } },
    font: { family: { sans: { $value: 'Sohne', $type: 'fontFamily' } } },
  },
  intent: { pageIntent: { type: 'marketing', confidence: 0.9 }, sectionRoles: { readingOrder: ['hero', 'features', 'cta'] } },
  visualDna: { materialLanguage: { label: 'flat' }, imageryStyle: { label: 'photographic' } },
  library: { library: 'custom', confidence: 0.5 },
  voice: { tone: 'confident', ctaVerbs: [{ value: 'Start now', count: 4 }], sampleHeadings: ['Payments for the internet'] },
  motion: { duration: { base: '180ms' }, easing: { standard: 'cubic-bezier(0.2,0,0,1)' } },
};

test('deriveTokens picks brand/background/text colors into preview vars', () => {
  const { vars } = deriveTokens(fixture);
  assert.equal(vars['--p-accent'], '#ff4800');
  assert.equal(vars['--p-bg'], '#ffffff');
  assert.equal(vars['--p-fg'], '#101010');
  assert.equal(vars['--p-radius'], '12px');
  assert.match(vars['--p-font'], /Sohne/);
});

test('deriveTokens computes a readable accent foreground', () => {
  const { vars } = deriveTokens(fixture);
  // #ff4800 is mid-luminance → white text
  assert.equal(vars['--p-accent-fg'], '#ffffff');
});

test('deriveTokens falls back cleanly on an empty extraction', () => {
  const { vars, palette } = deriveTokens({ prefix: 'x', tokens: {} });
  assert.ok(vars['--p-bg'] && vars['--p-fg'] && vars['--p-accent']);
  assert.equal(vars['--p-radius'], '10px');
  assert.deepEqual(palette, []);
});

test('studioHtml renders the live preview surface and inspector', () => {
  const html = studioHtml(fixture);
  assert.match(html, /class="inspector"/);
  assert.match(html, /data-panel="wall"/);
  assert.match(html, /data-panel="page"/);
  assert.match(html, /pv-btn/);
  assert.match(html, /data-export="tokens"/);
  // boot payload carries the derived base + palette
  assert.match(html, /"--p-accent":"#ff4800"/);
});

test('studioHtml escapes the prefix into the title and never breaks the data island', () => {
  const html = studioHtml({ ...fixture, prefix: '<script>x</script>' });
  assert.ok(!html.includes('<title>designlang studio · <script>'));
  assert.match(html, /&lt;script&gt;/);
});

test('studioHtml includes the polish: contrast readouts, edit count, backdrop, type scale', () => {
  const html = studioHtml(fixture);
  assert.match(html, /id="contrast"/);
  assert.match(html, /id="editcount"/);
  assert.match(html, /class="bd"/);
  assert.match(html, /pv-scale/);
});

test('studioHtml composes an intentional specimen from the extraction context', () => {
  const html = studioHtml(fixture);
  // brand derived from prefix, real heading + CTA from voice, honest eyebrows
  assert.match(html, /pv-brand/);
  assert.match(html, /Payments for the internet/); // fixture sampleHeading
  assert.match(html, /Start now/);                  // fixture ctaVerb
  assert.match(html, /pv-eyebrow/);
  assert.match(html, /pv-stats/);
});

test('deriveDark flips surface to dark and keeps the brand accent legible', () => {
  const { vars } = derive(fixture);
  const dark = deriveDark(vars);
  // surface must become dark, text light
  assert.ok(contrastRatio(dark['--p-bg'], '#000000') < contrastRatio(vars['--p-bg'], '#000000'));
  assert.ok(contrastRatio(dark['--p-fg'], '#ffffff') < contrastRatio(vars['--p-fg'], '#ffffff'));
  // text/surface contrast stays readable in dark
  assert.ok(contrastRatio(dark['--p-fg'], dark['--p-bg']) >= 4.5);
  // non-color tokens carry over untouched
  assert.equal(dark['--p-radius'], vars['--p-radius']);
  assert.equal(dark['--p-font'], vars['--p-font']);
});

test('deriveDark lightens an accent that would vanish on dark', () => {
  const dark = deriveDark({ '--p-accent': '#101015', '--p-bg': '#ffffff', '--p-fg': '#101010' });
  // a near-black accent must be lifted so it is visible against the dark surface
  assert.ok(contrastRatio(dark['--p-accent'], dark['--p-bg']) > contrastRatio('#101015', dark['--p-bg']));
});

test('studioHtml includes the theme (light/dark) control and ships a dark base', () => {
  const html = studioHtml(fixture);
  assert.match(html, /class="seg"/);
  assert.match(html, /data-theme="dark"/);
  assert.match(html, /"dark":\{/); // boot payload carries the generated dark vars
});

test('contrastRatio matches known WCAG values', () => {
  // black on white is the maximum, 21:1
  assert.equal(Math.round(contrastRatio('#000000', '#ffffff')), 21);
  // identical colors are 1:1
  assert.equal(contrastRatio('#ff4800', '#ff4800'), 1);
  // symmetric
  assert.equal(contrastRatio('#101010', '#ffffff'), contrastRatio('#ffffff', '#101010'));
});

test('studioHtml renders a Motion tab with easing curves and runtime choreography', () => {
  const html = studioHtml({
    ...fixture,
    motion: {
      $meta: { feel: 'springy', runtime: { triggers: ['load'], observed: 8 } },
      duration: { md: { $value: '300ms', ms: 300, $extensions: { 'designlang.observed': true } } },
      easing: { 'ease-out': { $value: 'cubic-bezier(0.16, 1, 0.3, 1)', family: 'ease-out' } },
      spring: { 'spring-1': { $value: 'cubic-bezier(0.34, 1.56, 0.64, 1)' } },
      choreography: { 'stagger-1': { trigger: 'load', staggerMs: 120, count: 4, durationMs: 400, easing: 'ease-out', properties: ['opacity'], selectorPattern: '.item' } },
      scroll: { 'reveal-1': { kind: 'reveal', properties: ['opacity', 'transform'], durationMs: 500 } },
    },
  });
  assert.match(html, />Motion<\/button>/);
  assert.match(html, /id="panel-motion"/);
  assert.match(html, /class="mo-path/);          // easing curve drawn as SVG
  assert.match(html, /mo-path spring/);            // overshoot spring styled distinctly
  assert.match(html, /data-stagger="120"/);        // choreography wired for playback
  assert.match(html, /play sequence/);
  assert.match(html, /· observed/);                // runtime-observed duration flagged
});

test('studioHtml Motion tab degrades to a prompt when no motion tokens', () => {
  const html = studioHtml({ ...fixture, motion: {} });
  assert.match(html, /id="panel-motion"/);
  assert.match(html, /--motion-runtime/);          // nudge toward live capture
});
