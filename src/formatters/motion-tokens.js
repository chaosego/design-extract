// Emits a DTCG-flavored motion tokens JSON.
export function formatMotionTokens(motion) {
  if (!motion) return '{}';
  const out = {
    $description: 'Motion tokens extracted by designlang',
    duration: {},
    easing: {},
    spring: {},
  };
  for (const d of motion.durations || []) {
    out.duration[d.name] = { $value: d.css, $type: 'duration', ms: d.ms };
  }
  for (const e of motion.easings || []) {
    const slug = e.family + (e.raw.includes('cubic-bezier') ? `-${Math.abs(e.raw.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % 1000}` : '');
    out.easing[slug] = { $value: e.raw, $type: 'cubicBezier', family: e.family };
  }
  (motion.springs || []).forEach((s, i) => {
    out.spring[`spring-${i + 1}`] = { $value: s.raw, $type: 'cubicBezier', overshoot: true };
  });
  out.$meta = { feel: motion.feel, scrollLinked: !!motion.scrollLinked?.present };

  // Motion v3: runtime-observed motion (only present with --motion-runtime).
  // Real durations override declared ones; choreography + scroll recipes are
  // emitted as first-class tokens so consumers reproduce the actual sequencing.
  const rt = motion.runtime;
  if (rt) {
    for (const d of rt.durations || []) {
      out.duration[d.name] = { $value: d.css, $type: 'duration', ms: d.ms, $extensions: { 'designlang.observed': true } };
    }
    out.choreography = {};
    (rt.choreography || []).forEach((c, i) => {
      out.choreography[`stagger-${i + 1}`] = {
        $type: 'designlang.choreography',
        trigger: c.trigger,
        staggerMs: c.staggerMs,
        count: c.count,
        durationMs: c.durationMs,
        easing: c.easing,
        properties: c.properties,
        selectorPattern: c.selectorPattern,
      };
    });
    out.scroll = {};
    (rt.scrollRecipes || []).forEach((r, i) => {
      out.scroll[`${r.kind}-${i + 1}`] = {
        $type: 'designlang.scrollRecipe',
        kind: r.kind,
        properties: r.properties,
        durationMs: r.durationMs,
        easing: r.easing,
        selector: r.selector,
      };
    });
    out.$meta.runtime = { triggers: rt.triggers, observed: rt.stats?.observed || 0 };
  }
  return JSON.stringify(out, null, 2);
}
