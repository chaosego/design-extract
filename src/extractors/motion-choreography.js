// Motion v3 — choreography & stagger detection.
// Finds orchestrated sequences: groups of sibling-like elements that animate on
// the same trigger with a near-constant delay step between them (a stagger).
// Emits timeline-shaped recipes instead of isolated tokens. Pure functions.

function median(nums) {
  if (!nums.length) return 0;
  const s = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : Math.round((s[mid - 1] + s[mid]) / 2);
}

// A signature elements must share to be considered part of the same sequence:
// same trigger, same animated properties, same-ish duration & easing.
function groupSignature(o) {
  return `${o.trigger}|${o.properties.join(',')}|${o.durationName}|${o.easing}`;
}

// Strip the structural index from a selector so siblings collapse to one pattern.
// `card:nth-of-type(3)` -> `card:nth-of-type(*)`, `li:nth-child(2)` -> `li:nth-child(*)`.
function selectorPattern(selector) {
  return (selector || '').replace(/:nth-(of-type|child)\(\d+\)/g, ':nth-$1(*)');
}

export function detectChoreography(observations = []) {
  const groups = new Map();
  for (const o of observations) {
    if (!o || o.type === undefined) continue;
    const sig = groupSignature(o);
    if (!groups.has(sig)) groups.set(sig, []);
    groups.get(sig).push(o);
  }

  const sequences = [];
  for (const [, members] of groups) {
    if (members.length < 3) continue; // need a real sequence, not a pair
    const delays = members.map(m => m.delay).sort((a, b) => a - b);
    const deltas = [];
    for (let i = 1; i < delays.length; i++) deltas.push(delays[i] - delays[i - 1]);
    const stagger = median(deltas.filter(d => d > 0));
    if (stagger <= 0) continue; // all fire together — not a stagger

    // Consistency: most consecutive steps should be near the median step.
    const consistent = deltas.filter(d => d > 0 && Math.abs(d - stagger) <= Math.max(20, stagger * 0.5)).length;
    if (consistent < Math.max(1, deltas.filter(d => d > 0).length - 1)) continue;

    const first = members[0];
    const patterns = [...new Set(members.map(m => selectorPattern(m.selector)).filter(Boolean))];
    sequences.push({
      trigger: first.trigger,
      count: members.length,
      staggerMs: stagger,
      baseDelayMs: delays[0],
      durationMs: first.duration,
      easing: first.easing,
      properties: first.properties,
      selectorPattern: patterns.length === 1 ? patterns[0] : patterns.slice(0, 4),
    });
  }

  return sequences.sort((a, b) => b.count - a.count);
}
