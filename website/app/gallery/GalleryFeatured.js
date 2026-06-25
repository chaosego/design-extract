'use client';

import { useMemo, useState } from 'react';

const GRADE_RANK = { 'A+': 0, A: 1, 'A-': 2, B: 3, 'B-': 4, C: 5, 'C-': 6, D: 7, F: 8, '—': 9 };

function gradeClass(grade) {
  const g = (grade || '').charAt(0);
  if (g === 'A') return 'gal-g-a';
  if (g === 'B') return 'gal-g-b';
  if (g === 'C') return 'gal-g-c';
  return 'gal-g-d';
}

export default function GalleryFeatured({ items }) {
  const [tag, setTag] = useState('all');
  const [byGrade, setByGrade] = useState(false);

  const tags = useMemo(() => {
    const set = new Set(items.map((i) => i.tag).filter(Boolean));
    return ['all', ...[...set].sort()];
  }, [items]);

  const shown = useMemo(() => {
    let list = tag === 'all' ? items : items.filter((i) => i.tag === tag);
    if (byGrade) {
      list = [...list].sort(
        (a, b) => (GRADE_RANK[a.grade] ?? 9) - (GRADE_RANK[b.grade] ?? 9) || a.host.localeCompare(b.host),
      );
    }
    return list;
  }, [items, tag, byGrade]);

  return (
    <>
      <div className="gal-filters">
        <div className="gal-filter-tags">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              className={`gal-filter-chip ${tag === t ? 'is-on' : ''}`}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <button
          type="button"
          className={`gal-filter-chip ${byGrade ? 'is-on' : ''}`}
          onClick={() => setByGrade((v) => !v)}
        >
          {byGrade ? '↓ by grade' : 'sort: A→Z'}
        </button>
      </div>

      <div className="gallery-grid">
        {shown.map((g) => (
          <a key={g.host} href={`/gallery/${g.slug}`} className="gal-card gal-real">
            <span className={`gal-grade-pill ${gradeClass(g.grade)}`}>{g.grade}</span>
            <div
              className="gal-swatch"
              style={{
                background: `linear-gradient(135deg, ${g.primary} 0%, ${g.accent} 65%, ${g.bg === '#ffffff' ? '#1a1a1a' : g.bg} 100%)`,
              }}
            />
            <div className="gal-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://icon.horse/icon/${g.host}`} alt="" loading="lazy" width={64} height={64} />
            </div>
            <div className="gal-meta">
              <span className="gal-host">{g.host}</span>
              <span
                className="gal-watch"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/watch?u=${encodeURIComponent('https://' + g.host)}`;
                }}
              >
                ▶ watch
              </span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
