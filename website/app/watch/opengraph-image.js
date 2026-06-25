import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'designlang — watch a real browser read any website’s design system, live.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BG = '#050505';
const FG = '#ffffff';
const FG2 = 'rgba(255,255,255,0.62)';
const RED = '#ff5757';
const SWATCHES = ['#635BFF', '#ff5757', '#1ed760', '#0071e3', '#d97757'];

export default function WatchOg() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: BG,
          color: FG,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'ui-monospace, Menlo, monospace',
            fontSize: 18,
            color: FG2,
            letterSpacing: 2,
          }}
        >
          <span>designlang · watch</span>
          <span>● live</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', fontSize: 76, lineHeight: 1.02, fontWeight: 600, maxWidth: 900 }}>
            <span>Watch the browser&nbsp;</span>
            <span style={{ color: RED }}>read</span>
            <span>&nbsp;a site.</span>
          </div>
          <div style={{ fontSize: 28, color: FG2, fontFamily: 'ui-monospace, Menlo, monospace' }}>
            real Chromium · palette · type · spacing · motion → a design system, live
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {SWATCHES.map((c) => (
            <div key={c} style={{ width: 96, height: 40, borderRadius: 8, background: c }} />
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
