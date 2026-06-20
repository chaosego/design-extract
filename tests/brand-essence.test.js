import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { deriveBrandEssence } from '../src/extractors/brand-essence.js';
import { formatBrandBook, formatBrandBookMarkdown } from '../src/formatters/brand-book.js';

const ARCHETYPES = [
  'Innocent', 'Everyman', 'Hero', 'Outlaw', 'Explorer', 'Creator',
  'Ruler', 'Magician', 'Lover', 'Caregiver', 'Jester', 'Sage',
];

// Warm, kinetic, bold, modern: orange brand, round corners, fast springy
// motion, heavy weights, gradient material.
const warmDesign = {
  meta: { url: 'https://example-warm.com', timestamp: Date.now() },
  colors: { primary: { hex: '#ff5a1f' }, accent: { hex: '#ffb020' }, backgrounds: ['#ffffff'] },
  typography: { families: [{ name: 'Inter' }], scale: [{ size: 48 }], weights: [{ weight: 400 }, { weight: 900 }] },
  borders: { radii: [{ value: 20 }, { value: 28 }] },
  motion: { feel: 'bouncy', durations: [{ ms: 150 }], easings: ['cubic-bezier(.2,1.4,.4,1)'] },
  materialLanguage: { label: 'gradient' },
};

// Cool, composed, classic: navy brand, sharp corners, slow motion, serif
// display, editorial material.
const coolDesign = {
  meta: { url: 'https://example-cool.com', timestamp: Date.now() },
  colors: { primary: { hex: '#13294b' }, backgrounds: ['#fefefe'] },
  typography: { families: [{ name: 'Playfair Display' }], scale: [{ size: 40 }], weights: [{ weight: 400 }, { weight: 700 }] },
  borders: { radii: [{ value: 0 }, { value: 2 }] },
  motion: { feel: 'subtle', durations: [{ ms: 500 }], easings: ['ease'] },
  materialLanguage: { label: 'editorial' },
};

describe('deriveBrandEssence — axes', () => {
  it('reads a warm/kinetic/bold/modern site on the positive poles', () => {
    const { axes } = deriveBrandEssence(warmDesign);
    assert.ok(axes.warmth.value > 0.3, `warmth ${axes.warmth.value} should be warm`);
    assert.ok(axes.energy.value > 0.3, `energy ${axes.energy.value} should be kinetic`);
    assert.ok(axes.weight.value > 0, `weight ${axes.weight.value} should be bold`);
    assert.ok(axes.era.value > 0, `era ${axes.era.value} should be modern`);
  });

  it('reads a cool/serif/editorial site on the negative poles', () => {
    const { axes } = deriveBrandEssence(coolDesign);
    assert.ok(axes.warmth.value < -0.3, `warmth ${axes.warmth.value} should be cool`);
    assert.ok(axes.era.value < 0, `era ${axes.era.value} should be classic`);
    assert.ok(axes.energy.value < 0.2, `energy ${axes.energy.value} should be composed`);
  });

  it('clamps every axis to [-1, 1] with a reading string', () => {
    for (const d of [warmDesign, coolDesign]) {
      for (const axis of Object.values(deriveBrandEssence(d).axes)) {
        assert.ok(axis.value >= -1 && axis.value <= 1, `axis ${axis.value} out of range`);
        assert.equal(typeof axis.reading, 'string');
        assert.ok(axis.reading.length > 0);
      }
    }
  });
});

describe('deriveBrandEssence — archetype', () => {
  it('picks one of the twelve archetypes with a 0..1 confidence and a runner-up', () => {
    const { archetype } = deriveBrandEssence(warmDesign);
    assert.ok(ARCHETYPES.includes(archetype.name), `${archetype.name} not a known archetype`);
    assert.ok(ARCHETYPES.includes(archetype.runnerUp));
    assert.notEqual(archetype.name, archetype.runnerUp);
    assert.ok(archetype.confidence >= 0 && archetype.confidence <= 1);
  });

  it('distinguishes a playful brand from an authoritative one', () => {
    const warm = deriveBrandEssence(warmDesign).archetype.name;
    const cool = deriveBrandEssence(coolDesign).archetype.name;
    assert.notEqual(warm, cool);
  });
});

describe('deriveBrandEssence — copy', () => {
  it('produces 3-5 adjectives, a positioning sentence, and evidence', () => {
    const e = deriveBrandEssence(warmDesign);
    assert.ok(e.adjectives.length >= 3 && e.adjectives.length <= 5);
    assert.ok(e.positioning.includes('example-warm.com'));
    assert.ok(e.positioning.endsWith('.'));
    assert.ok(e.evidence.length >= 1);
  });

  it('does not leave a dangling em-dash when anchors are missing', () => {
    const e = deriveBrandEssence({ meta: { url: 'https://bare.com' } });
    assert.ok(!e.positioning.includes('—.'), e.positioning);
    assert.ok(e.positioning.endsWith('.'));
  });
});

describe('deriveBrandEssence — robustness', () => {
  it('degrades an empty design to neutral axes without throwing', () => {
    const e = deriveBrandEssence({});
    for (const axis of Object.values(e.axes)) assert.equal(axis.value, 0);
    assert.ok(ARCHETYPES.includes(e.archetype.name));
    assert.equal(typeof e.positioning, 'string');
  });

  it('handles null/undefined input', () => {
    assert.doesNotThrow(() => deriveBrandEssence(null));
    assert.doesNotThrow(() => deriveBrandEssence(undefined));
  });

  it('tolerates string-form durations and weights', () => {
    const e = deriveBrandEssence({
      meta: { url: 'https://x.com' },
      colors: { primary: { hex: '#cc0000' }, backgrounds: ['#fff'] },
      typography: { families: [{ name: 'Arial' }], weights: ['400', '700'] },
      motion: { durations: ['0.2s', '0.4s'] },
    });
    assert.ok(Number.isFinite(e.axes.energy.value));
    assert.ok(Number.isFinite(e.axes.weight.value));
  });
});

describe('brand book renders the Essence chapter', () => {
  it('emits Chapter 00 in the HTML book with the positioning text', () => {
    const html = formatBrandBook(warmDesign, { version: 'test' });
    assert.ok(html.includes('id="essence"'));
    assert.ok(html.includes('Chapter 00'));
    assert.ok(html.includes('href="#essence"'));
    assert.ok(html.includes('axis-dot'));
    assert.ok(html.includes('example-warm.com is'));
  });

  it('emits a 00 · Essence block in the markdown', () => {
    const md = formatBrandBookMarkdown(warmDesign);
    assert.ok(md.includes('## 00 · Essence'));
    assert.ok(md.includes('- Archetype:'));
  });

  it('reuses a precomputed design.essence when present', () => {
    const tagged = { ...warmDesign, essence: { ...deriveBrandEssence(warmDesign), positioning: 'SENTINEL positioning.' } };
    const html = formatBrandBook(tagged, { version: 'test' });
    assert.ok(html.includes('SENTINEL positioning.'));
  });
});
