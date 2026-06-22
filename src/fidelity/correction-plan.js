// Correction plan — turn measured fidelity gaps into ranked, actionable fixes.
//
// Competitors stop at "here's your clone" (and at best one visual diff). The
// wedge is the loop: measure → explain → *prescribe the next edit*. This module
// is the prescribe step. It consumes a `verify` result (static visual fidelity,
// with per-token-family attribution) and a `scoreMotionFidelity` result, and
// emits directives a builder agent — or a human — can act on, hardest-hitting
// first.
//
// Pure function. Each directive carries an `expectedGain` heuristic so the loop
// driver can spend its budget on the edits that move the score most.

// Concrete fix copy per motion aspect. Kept declarative so the planner stays
// a mapping, not a pile of branches.
function motionFix(aspect, detail) {
  switch (aspect.aspect) {
    case 'feel':
      return `Shift the clone's motion feel toward "${detail.original}" — adjust easing and duration tokens so transitions read ${detail.original}, not ${detail.clone}.`;
    case 'durations':
      return detail.original?.length
        ? `Add transitions/animations near ${detail.original.slice(0, 4).join(', ')}ms — the clone is ${detail.clone?.length ? 'mistimed' : 'frozen'} where the original moves.`
        : `Remove invented motion — the original animates less than the clone.`;
    case 'easings': {
      const want = uniqShort(detail.original);
      const have = uniqShort(detail.clone);
      return `Apply the original's easing families (${want || 'n/a'}) via transition-timing-function instead of ${have || 'defaults'}.`;
    }
    case 'springs':
      return `Use a spring/overshoot curve (e.g. cubic-bezier(.2,1.4,.4,1)) on the primary interactions — the original overshoots, the clone eases flat.`;
    case 'keyframes':
      return `Author @keyframes for the missing motion kinds (${(detail.original || []).join(', ') || 'n/a'}) and wire them to the elements that animate on the source.`;
    case 'scrollLinked':
      return `Wire scroll/view-timeline reveals — the original drives motion from scroll position; the clone has none.`;
    case 'choreography':
      return `Stagger the repeated sequence instead of animating it as one block — match the source's per-item delay step.`;
    default:
      return `Improve motion aspect "${aspect.aspect}".`;
  }
}

// De-dupe and cap a value list so fix copy stays readable (raw extractions can
// repeat the same easing family dozens of times).
function uniqShort(list, max = 4) {
  if (!Array.isArray(list)) return list == null ? '' : String(list);
  const uniq = [...new Set(list.map(String))];
  return uniq.slice(0, max).join(', ') + (uniq.length > max ? ', …' : '');
}

function priorityLabel(gain) {
  if (gain >= 6) return 'high';
  if (gain >= 3) return 'medium';
  return 'low';
}

/**
 * @param {object} args
 * @param {object} [args.verify]  verifyDesign() result
 * @param {object} [args.motion]  scoreMotionFidelity() result
 * @param {number} [args.motionThreshold] aspects scoring below this get a directive (default 0.75)
 * @returns {{ directives: Array, counts: object }}
 */
export function buildCorrectionPlan({ verify, motion, motionThreshold = 0.75 } = {}) {
  const directives = [];

  // ── visual gaps (from token-family attribution) ───────────────
  for (const comp of verify?.components || []) {
    if (comp.status !== 'ok') continue;
    for (const fam of comp.attribution || []) {
      if (fam.unmapped > 0) {
        const gain = fam.unmapped * 3;
        directives.push({
          area: 'visual',
          target: comp.component,
          aspect: fam.family,
          issue: `${comp.component} uses ${fam.unmapped} ${fam.family} value(s) with no matching extracted token.`,
          fix: `Extract or define ${fam.family} tokens so the ${comp.component} resolves to the system instead of a neutral default.`,
          expectedGain: gain,
          priority: priorityLabel(gain),
        });
      }
      if (fam.moves > 0) {
        const gain = fam.moves;
        directives.push({
          area: 'visual',
          target: comp.component,
          aspect: fam.family,
          issue: `${comp.component} snaps ${fam.moves} ${fam.family} value(s) far from the nearest token.`,
          fix: `Densify the ${fam.family} token scale near the ${comp.component}'s real values to cut the snap distance.`,
          expectedGain: gain,
          priority: priorityLabel(gain),
        });
      }
    }
  }

  // ── motion gaps (from aspect scores) ──────────────────────────
  for (const aspect of motion?.aspects || []) {
    if (aspect.score >= motionThreshold) continue;
    const gain = +(aspect.weight * (1 - aspect.score)).toFixed(2);
    directives.push({
      area: 'motion',
      target: aspect.aspect,
      aspect: aspect.aspect,
      issue: aspect.gap || `motion aspect "${aspect.aspect}" diverges from the original (score ${aspect.score.toFixed(2)}).`,
      fix: motionFix(aspect, { original: aspect.original, clone: aspect.clone }),
      expectedGain: gain,
      priority: priorityLabel(gain),
    });
  }

  directives.sort((a, b) => b.expectedGain - a.expectedGain);

  const counts = directives.reduce(
    (c, d) => { c[d.priority]++; c[d.area]++; return c; },
    { high: 0, medium: 0, low: 0, visual: 0, motion: 0 },
  );

  return { directives, counts };
}
