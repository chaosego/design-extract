// Motion v3 — runtime motion model.
// Turns raw `document.getAnimations()` observations (captured in-browser while
// the page is driven through hover / focus / scroll) into a structured model:
// what ACTUALLY animates, per trigger, with real durations — plus scroll recipes.
// Pure functions only; the browser-side capture lives in the crawler.

const TRIGGERS = ['load', 'hover', 'focus', 'active', 'scroll'];

const DURATION_NAMES = [
  { max: 80, name: 'instant' },
  { max: 150, name: 'xs' },
  { max: 250, name: 'sm' },
  { max: 400, name: 'md' },
  { max: 700, name: 'lg' },
  { max: 1200, name: 'xl' },
  { max: Infinity, name: 'xxl' },
];

export function nameDuration(ms) {
  return DURATION_NAMES.find(d => ms <= d.max).name;
}

function num(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

// Normalize one raw observation from the browser into a stable shape.
function normalize(obs) {
  if (!obs || typeof obs !== 'object') return null;
  const trigger = TRIGGERS.includes(obs.trigger) ? obs.trigger : 'load';
  const duration = Math.max(0, Math.round(num(obs.duration)));
  const delay = Math.max(0, Math.round(num(obs.delay)));
  const properties = Array.isArray(obs.properties)
    ? [...new Set(obs.properties.map(p => String(p).trim()).filter(Boolean))].sort()
    : [];
  const selector = typeof obs.selector === 'string' ? obs.selector.slice(0, 200) : '';
  if (!selector && !properties.length && !obs.name) return null;
  return {
    trigger,
    selector,
    tag: typeof obs.tag === 'string' ? obs.tag.toLowerCase().slice(0, 32) : '',
    type: obs.type === 'transition' ? 'transition' : 'animation',
    name: typeof obs.name === 'string' ? obs.name.slice(0, 128) : '',
    duration,
    delay,
    easing: typeof obs.easing === 'string' ? obs.easing.slice(0, 80) : 'linear',
    iterations: obs.iterations === 'Infinity' || obs.iterations === Infinity
      ? 'infinite'
      : Math.max(1, Math.round(num(obs.iterations) || 1)),
    properties,
    durationName: nameDuration(duration),
  };
}

function dedupeKey(o) {
  return `${o.trigger}|${o.selector}|${o.name}|${o.duration}|${o.properties.join(',')}`;
}

// Build the structured runtime model from raw browser capture.
export function processRuntimeMotion(raw) {
  const list = Array.isArray(raw) ? raw : (raw && Array.isArray(raw.observations) ? raw.observations : []);
  const seen = new Set();
  const observations = [];
  for (const item of list) {
    const o = normalize(item);
    if (!o) continue;
    const key = dedupeKey(o);
    if (seen.has(key)) continue;
    seen.add(key);
    observations.push(o);
  }

  const byTrigger = {};
  for (const t of TRIGGERS) byTrigger[t] = [];
  for (const o of observations) byTrigger[o.trigger].push(o);

  const durations = [...new Set(observations.map(o => o.duration).filter(d => d > 0))].sort((a, b) => a - b);
  const triggers = TRIGGERS.filter(t => byTrigger[t].length > 0);
  const targets = new Set(observations.map(o => o.selector).filter(Boolean));

  return {
    observations,
    byTrigger,
    durations: durations.map(ms => ({ name: nameDuration(ms), ms, css: ms >= 1000 ? `${ms / 1000}s` : `${ms}ms` })),
    triggers,
    scrollRecipes: detectScrollRecipes(observations),
    stats: {
      observed: observations.length,
      uniqueTargets: targets.size,
      byTrigger: Object.fromEntries(triggers.map(t => [t, byTrigger[t].length])),
    },
  };
}

// Scroll-driven motion: observations that fire on scroll. Classify each into a
// reusable recipe kind (parallax / reveal / pin) from the properties touched.
export function detectScrollRecipes(observations = []) {
  const scrollObs = observations.filter(o => o.trigger === 'scroll');
  const recipes = [];
  const seen = new Set();
  for (const o of scrollObs) {
    const props = new Set(o.properties);
    let kind = 'reveal';
    if (props.has('transform') && !props.has('opacity')) kind = 'parallax';
    else if (props.has('position') || o.name?.includes('pin')) kind = 'pin';
    else if (props.has('opacity')) kind = 'reveal';
    const key = `${o.selector}|${kind}`;
    if (seen.has(key)) continue;
    seen.add(key);
    recipes.push({
      selector: o.selector,
      kind,
      properties: o.properties,
      durationMs: o.duration,
      easing: o.easing,
    });
  }
  return recipes;
}
