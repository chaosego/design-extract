import { test } from 'node:test';
import assert from 'node:assert/strict';
import { capFrames, buildReplayTimeline } from './reel.js';

const mkFrames = (n, span) =>
  Array.from({ length: n }, (_, i) => ({ seq: i, t: Math.round((i / (n - 1)) * span), data: `f${i}` }));

test('capFrames keeps first and last and subsamples the middle', () => {
  const frames = mkFrames(100, 10000);
  const capped = capFrames(frames, 10);
  assert.equal(capped.length, 10);
  assert.equal(capped[0].seq, 0);
  assert.equal(capped[capped.length - 1].seq, 99);
});

test('capFrames is a no-op under the cap', () => {
  const frames = mkFrames(5, 1000);
  assert.equal(capFrames(frames, 10), frames);
});

test('buildReplayTimeline sorts events by time and emits non-negative delays', () => {
  const { steps } = buildReplayTimeline({
    frames: mkFrames(5, 5000),
    tokens: [{ category: 'color', path: 'color.primary', value: '#000', $type: 'color' }],
    stages: ['crawl', 'colors'],
  });
  assert.ok(steps.length >= 6);
  assert.ok(steps.every((s) => s.delayMs >= 0));
  const frameSteps = steps.filter((s) => s.event.type === 'frame');
  assert.equal(frameSteps.length, 5);
});

test('buildReplayTimeline compresses to maxDurationMs', () => {
  const { durationMs } = buildReplayTimeline({
    frames: mkFrames(20, 40_000),
    maxDurationMs: 10_000,
  });
  assert.ok(durationMs <= 10_000, `expected <= 10000, got ${durationMs}`);
});

test('buildReplayTimeline appends summary and files at the end', () => {
  const { steps } = buildReplayTimeline({
    frames: mkFrames(3, 3000),
    summary: { colors: 4 },
    files: { 'a.json': '{}' },
  });
  const last = steps[steps.length - 1];
  const penultimate = steps[steps.length - 2];
  assert.equal(penultimate.event.type, 'summary');
  assert.equal(last.event.type, 'files');
});

test('buildReplayTimeline tolerates an empty reel', () => {
  const { steps, durationMs } = buildReplayTimeline({});
  assert.deepEqual(steps, []);
  assert.equal(durationMs, 0);
});
