import { test } from 'node:test';
import assert from 'node:assert/strict';
import { startScreencast, SCREENCAST_DEFAULTS } from '../src/screencast.js';

// A fake CDP session: records sent methods, lets the test emit frames, and can
// be told to fail on startScreencast.
class FakeCDP {
  constructor({ failStart = false } = {}) {
    this.handlers = {};
    this.sent = [];
    this.failStart = failStart;
  }
  on(ev, fn) {
    (this.handlers[ev] ||= []).push(fn);
  }
  off(ev, fn) {
    this.handlers[ev] = (this.handlers[ev] || []).filter((h) => h !== fn);
  }
  async send(method, params) {
    this.sent.push({ method, params });
    if (method === 'Page.startScreencast' && this.failStart) throw new Error('cannot start cast');
    return {};
  }
  async emitFrame(params) {
    for (const h of this.handlers['Page.screencastFrame'] || []) await h(params);
  }
  count(method) {
    return this.sent.filter((s) => s.method === method).length;
  }
}

const frame = (sessionId, data = 'AAAA') => ({
  data,
  metadata: { deviceWidth: 200, deviceHeight: 120 },
  sessionId,
});

test('starts the cast with jpeg + downscale options', async () => {
  const cdp = new FakeCDP();
  await startScreencast(cdp, () => {}, { now: () => 0 });
  const start = cdp.sent.find((s) => s.method === 'Page.startScreencast');
  assert.ok(start, 'sent Page.startScreencast');
  assert.equal(start.params.format, 'jpeg');
  assert.equal(start.params.maxWidth, SCREENCAST_DEFAULTS.maxWidth);
});

test('acks every frame even when throttled, emits at most one per interval', async () => {
  const cdp = new FakeCDP();
  let clock = 0;
  const frames = [];
  await startScreencast(cdp, (f) => frames.push(f), { fps: 10, now: () => clock });

  await cdp.emitFrame(frame(1)); // t=0   -> emit
  clock = 50;
  await cdp.emitFrame(frame(2)); // +50ms -> within 100ms gap, dropped
  clock = 120;
  await cdp.emitFrame(frame(3)); // +120  -> emit

  assert.equal(frames.length, 2, 'two frames emitted');
  assert.equal(cdp.count('Page.screencastFrameAck'), 3, 'all three acked');
  assert.deepEqual(
    frames.map((f) => f.seq),
    [0, 1],
    'seq increments only on emitted frames',
  );
  assert.equal(frames[0].width, 200);
});

test('stops after maxFrames and ignores later frames', async () => {
  const cdp = new FakeCDP();
  const frames = [];
  await startScreencast(cdp, (f) => frames.push(f), { fps: 0, maxFrames: 2, now: () => 0 });

  await cdp.emitFrame(frame(1));
  await cdp.emitFrame(frame(2)); // hits cap -> stop()
  await cdp.emitFrame(frame(3)); // ignored

  assert.equal(frames.length, 2);
  assert.equal(cdp.count('Page.stopScreencast'), 1, 'stopped exactly once');
});

test('stops after maxDurationMs', async () => {
  const cdp = new FakeCDP();
  let clock = 0;
  const frames = [];
  await startScreencast(cdp, (f) => frames.push(f), {
    fps: 0,
    maxDurationMs: 100,
    now: () => clock,
  });

  await cdp.emitFrame(frame(1)); // t=0
  clock = 150;
  await cdp.emitFrame(frame(2)); // t=150 >= 100 -> emit then stop
  await cdp.emitFrame(frame(3)); // ignored

  assert.equal(frames.length, 2);
  assert.equal(cdp.count('Page.stopScreencast'), 1);
});

test('stop() detaches the listener and is idempotent', async () => {
  const cdp = new FakeCDP();
  const frames = [];
  const { stop } = await startScreencast(cdp, (f) => frames.push(f), { fps: 0, now: () => 0 });

  await stop();
  await stop(); // second call is a no-op
  await cdp.emitFrame(frame(1)); // detached -> nothing

  assert.equal(frames.length, 0);
  assert.equal(cdp.count('Page.stopScreencast'), 1, 'stopScreencast sent once');
  assert.equal((cdp.handlers['Page.screencastFrame'] || []).length, 0, 'listener removed');
});

test('a startScreencast failure throws and removes the listener', async () => {
  const cdp = new FakeCDP({ failStart: true });
  await assert.rejects(() => startScreencast(cdp, () => {}, { now: () => 0 }));
  assert.equal((cdp.handlers['Page.screencastFrame'] || []).length, 0, 'no dangling listener');
});

test('rejects bad arguments', async () => {
  await assert.rejects(() => startScreencast(null, () => {}));
  await assert.rejects(() => startScreencast(new FakeCDP(), 'not-a-fn'));
});
