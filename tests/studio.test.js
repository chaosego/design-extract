import { test } from 'node:test';
import assert from 'node:assert/strict';
import { deriveTokens, studioHtml } from '../src/studio.js';
import { contrastRatio } from '../src/studio-tokens.js';

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

test('studioHtml includes the polish: contrast readouts, edit count, backdrop, specimen', () => {
  const html = studioHtml(fixture);
  assert.match(html, /id="contrast"/);
  assert.match(html, /id="editcount"/);
  assert.match(html, /class="bd"/);
  assert.match(html, /pv-specimen/);
});

test('contrastRatio matches known WCAG values', () => {
  // black on white is the maximum, 21:1
  assert.equal(Math.round(contrastRatio('#000000', '#ffffff')), 21);
  // identical colors are 1:1
  assert.equal(contrastRatio('#ff4800', '#ff4800'), 1);
  // symmetric
  assert.equal(contrastRatio('#101010', '#ffffff'), contrastRatio('#ffffff', '#101010'));
});
