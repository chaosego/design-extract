import { test } from 'node:test';
import assert from 'node:assert/strict';
import { wantsTheatre, frameEvent, THEATRE_SCREENCAST_OPTS } from './theatre.js';

test('wantsTheatre reads the body flag', () => {
  assert.equal(wantsTheatre({ theatre: true }), true);
  assert.equal(wantsTheatre({ theatre: 1 }), true);
  assert.equal(wantsTheatre({ theatre: '1' }), true);
  assert.equal(wantsTheatre({ theatre: false }), false);
  assert.equal(wantsTheatre({}), false);
  assert.equal(wantsTheatre(null), false);
});

test('wantsTheatre reads the query param', () => {
  assert.equal(wantsTheatre(null, 'https://x.test/api/extract?theatre=1'), true);
  assert.equal(wantsTheatre(null, 'https://x.test/api/extract?theatre=true'), true);
  assert.equal(wantsTheatre(null, 'https://x.test/api/extract'), false);
  assert.equal(wantsTheatre(null, 'not a url'), false);
});

test('frameEvent shapes the wire format', () => {
  const ev = frameEvent({ seq: 3, t: 1200, data: 'AAAA', width: 1100, height: 700 });
  assert.deepEqual(ev, { type: 'frame', seq: 3, t: 1200, data: 'AAAA', w: 1100, h: 700 });
});

test('frameEvent omits absent dimensions', () => {
  const ev = frameEvent({ seq: 0, t: 0, data: 'B' });
  assert.deepEqual(ev, { type: 'frame', seq: 0, t: 0, data: 'B' });
});

test('theatre screencast caps are bounded for the hosted demo', () => {
  assert.ok(THEATRE_SCREENCAST_OPTS.maxDurationMs <= 30_000);
  assert.ok(THEATRE_SCREENCAST_OPTS.fps <= 10);
});
