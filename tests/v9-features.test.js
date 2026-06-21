import { describe, it } from 'node:test';
import assert from 'node:assert';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { extractMotion } from '../src/extractors/motion.js';
import { extractComponentAnatomy, formatAnatomyStubs } from '../src/extractors/component-anatomy.js';
import { extractVoice } from '../src/extractors/voice.js';
import { lintTokens } from '../src/lint.js';
import { formatMotionTokens } from '../src/formatters/motion-tokens.js';
import { extractMediaDarkColors, mergeDarkColors } from '../src/extractors/dark-mode-pair.js';

describe('v9: motion extractor', () => {
  it('buckets durations into named tokens', () => {
    const styles = [
      { transition: 'opacity 200ms ease-out', animation: 'none' },
      { transition: 'transform 400ms cubic-bezier(0.2, 0, 0, 1.4)', animation: 'none' },
      { transition: 'color 80ms linear', animation: 'none' },
    ];
    const m = extractMotion(styles, []);
    const names = m.durations.map(d => d.name);
    assert.ok(names.includes('sm'));
    assert.ok(names.includes('md'));
    assert.ok(m.springs.length >= 1, 'detects overshoot cubic-bezier as spring');
  });

  it('detects scroll-linked signals', () => {
    const styles = [{ transition: 'none', animation: 'none', animationTimeline: 'view()' }];
    const m = extractMotion(styles, []);
    assert.equal(m.scrollLinked.present, true);
  });

  it('emits DTCG-ish motion tokens JSON', () => {
    const m = extractMotion([{ transition: 'opacity 250ms ease-out' }], []);
    const json = JSON.parse(formatMotionTokens(m));
    assert.ok(json.duration);
    assert.ok(json.easing);
  });
});

describe('v9: component anatomy', () => {
  const candidates = [
    { kind: 'button', variantHint: 'primary', sizeHint: 'md', text: 'Get started', slots: [{ role: 'icon' }, { role: 'content' }], structuralHash: 'button>svg>span', styleVector: [], css: {} },
    { kind: 'button', variantHint: 'primary', sizeHint: 'md', text: 'Start free trial', slots: [{ role: 'icon' }, { role: 'content' }], structuralHash: 'button>svg>span', styleVector: [], css: {} },
    { kind: 'button', variantHint: 'secondary', sizeHint: 'sm', text: 'Learn more', slots: [{ role: 'content' }], structuralHash: 'button>span', styleVector: [], css: {} },
    { kind: 'button', variantHint: '', sizeHint: '', disabled: true, text: '', slots: [], structuralHash: 'button', styleVector: [], css: {} },
  ];

  it('collapses instances to variant × size matrix', () => {
    const a = extractComponentAnatomy(candidates);
    assert.equal(a.length, 1);
    assert.equal(a[0].kind, 'button');
    assert.ok(a[0].variants.length >= 2);
    assert.ok(a[0].props.variant.includes('primary'));
  });

  it('formats typed React stubs', () => {
    const a = extractComponentAnatomy(candidates);
    const src = formatAnatomyStubs(a);
    assert.match(src, /export interface ButtonProps/);
    assert.match(src, /variant\?:/);
  });
});

describe('v9: voice extractor', () => {
  it('picks tone + top CTA verbs', () => {
    const data = {
      componentCandidates: [
        { kind: 'button', text: 'Get started free' },
        { kind: 'button', text: 'Get the docs' },
        { kind: 'link', text: 'Learn more about our API' },
      ],
      sections: [
        { headings: ['Ship faster with our platform'], text: "You'll love how we handle the hard stuff." },
      ],
    };
    const v = extractVoice(data);
    assert.ok(v.ctaVerbs.some(c => c.value === 'get'));
    assert.notEqual(v.tone, 'unknown');
  });
});

describe('v9: token lint', () => {
  it('flags color sprawl + contrast fails in a flat token file', () => {
    const dir = mkdtempSync(join(tmpdir(), 'designlang-lint-'));
    const file = join(dir, 'tokens.json');
    const tokens = {
      colors: {
        'primary': '#0A0908',
        'primary-2': '#0A0909', // near-duplicate
        'text': '#888888',
        'bg': '#999999', // fails AA
      },
      spacing: { xs: '2px', sm: '4px', md: '8px', lg: '16px' },
      radii: { sm: '4px', md: '8px' },
    };
    writeFileSync(file, JSON.stringify(tokens));
    const r = lintTokens(file);
    assert.ok(r.findings.some(f => f.rule === 'color-sprawl'));
    assert.ok(r.findings.some(f => f.rule === 'contrast-wcag-aa'));
    assert.ok(typeof r.score === 'number');
  });
});

describe('issue #110: prefers-color-scheme dark detection', () => {
  it('emulates prefers-color-scheme: dark on a fake page and extracts colours', async () => {
    const media = [];
    // A fake Playwright page: records emulateMedia() calls and returns the
    // computed styles a media-query dark theme would expose.
    const fakePage = {
      async emulateMedia(opts) { media.push(opts); },
      async evaluate() {
        return [
          { tag: 'body', classList: '', role: '', area: 800000, color: 'rgb(243, 241, 234)', backgroundColor: 'rgb(10, 9, 8)', backgroundImage: 'none', borderColor: 'rgb(10, 9, 8)' },
          { tag: 'a', classList: 'btn', role: '', area: 4000, color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(77, 155, 255)', backgroundImage: 'none', borderColor: 'rgb(77, 155, 255)' },
        ];
      },
    };
    const colors = await extractMediaDarkColors(fakePage);
    assert.ok(media.some(m => m.colorScheme === 'dark'), 'emulated prefers-color-scheme: dark');
    assert.ok(colors && colors.all.length > 0, 'returns a non-empty dark colour set');
  });

  it('returns null for a page without emulateMedia support', async () => {
    assert.equal(await extractMediaDarkColors({}), null);
    assert.equal(await extractMediaDarkColors(null), null);
  });

  it('prefers the class-based dark colours but fills gaps from the media pass', () => {
    const classBased = { primary: { hex: '#111111' }, secondary: null, accent: null, neutrals: [], backgrounds: ['#0a0908'], text: [], gradients: [], all: [{ hex: '#111111' }, { hex: '#0a0908' }] };
    const mediaColors = { primary: { hex: '#4d9bff' }, secondary: null, accent: null, neutrals: [], backgrounds: [], text: ['#f3f1ea'], gradients: [], all: [{ hex: '#4d9bff' }, { hex: '#f3f1ea' }] };
    const merged = mergeDarkColors(classBased, mediaColors);
    assert.equal(merged.primary.hex, '#111111', 'class-based role wins');
    assert.deepEqual(merged.text, ['#f3f1ea'], 'missing list filled from media pass');
    assert.ok(merged.all.length >= 3, 'all colours are unioned across both passes');
  });

  it('falls back to the media pass when the class-based dark set is empty', () => {
    const mediaColors = { primary: { hex: '#4d9bff' }, all: [{ hex: '#4d9bff' }] };
    assert.equal(mergeDarkColors(null, mediaColors), mediaColors);
    assert.equal(mergeDarkColors({ all: [] }, mediaColors).all.length, 1);
    assert.equal(mergeDarkColors(classOnly(), null).primary.hex, '#111111');
  });

  // Regression for #157: the media-dark capture runs on the shared `page`
  // before the --depth crawl navigates it elsewhere. It MUST restore the
  // scheme to light afterwards, or the subsequent crawl reads dark colours
  // off internal pages. These guard the restore invariant the fix relies on.
  it('restores prefers-color-scheme to light after a successful capture', async () => {
    const media = [];
    const fakePage = {
      async emulateMedia(opts) { media.push(opts); },
      async evaluate() {
        return [
          { tag: 'body', classList: '', role: '', area: 800000, color: 'rgb(243, 241, 234)', backgroundColor: 'rgb(10, 9, 8)', backgroundImage: 'none', borderColor: 'rgb(10, 9, 8)' },
        ];
      },
    };
    await extractMediaDarkColors(fakePage);
    assert.equal(media.at(-1)?.colorScheme, 'light', 'page left in light after capture');
  });

  it('restores prefers-color-scheme to light even if the page evaluate throws', async () => {
    const media = [];
    const fakePage = {
      async emulateMedia(opts) { media.push(opts); },
      async evaluate() { throw new Error('navigation interrupted the evaluate'); },
    };
    let threw = false;
    try {
      await extractMediaDarkColors(fakePage);
    } catch {
      threw = true;
    }
    assert.equal(threw, true, 'the evaluate error propagates');
    assert.equal(media.at(-1)?.colorScheme, 'light', 'finally still restored light');
  });
});

function classOnly() {
  return { primary: { hex: '#111111' }, all: [{ hex: '#111111' }] };
}
