'use client';

// The pipeline read-out under the stage: every extraction phase, with the
// current one lit and finished ones checked. Order matches /api/extract STAGES.

const STAGES = [
  ['crawl', 'walk DOM'],
  ['colors', 'palette'],
  ['typography', 'type'],
  ['spacing', 'rhythm'],
  ['shadows', 'shadows'],
  ['borders', 'radii'],
  ['components', 'components'],
  ['regions', 'regions'],
  ['a11y', 'contrast'],
  ['score', 'score'],
];

export default function StageTicker({ stage, stagesSeen = [] }) {
  const currentIdx = STAGES.findIndex(([key]) => key === stage);
  return (
    <ol className="thtr-ticker" aria-label="extraction pipeline">
      {STAGES.map(([key, label], i) => {
        const seen = stagesSeen.includes(key);
        const active = key === stage;
        const done = seen && !active && (currentIdx === -1 || i < currentIdx);
        return (
          <li
            key={key}
            className={`thtr-tick ${active ? 'is-active' : ''} ${done ? 'is-done' : ''}`}
          >
            <span className="thtr-tick-dot" aria-hidden />
            {label}
          </li>
        );
      })}
    </ol>
  );
}
