import { SITE_URL } from '../seo-config';
import StudioPlayground from './StudioPlayground';

export const metadata = {
  title: 'Studio — edit a website’s design system live, then export',
  description:
    'Paste any URL and get a living design studio: edit the extracted tokens in an inspector and watch a wall of real components — and a rebuilt page — restyle in real time. Live WCAG contrast grading, paper/white/dark backdrops, then export DTCG tokens, CSS variables, or a Tailwind theme. Share your variant as a link.',
  alternates: { canonical: `${SITE_URL}/studio` },
  openGraph: {
    title: 'Studio — edit a website’s design system live',
    description: 'Extract any site, edit its tokens in an inspector, watch real components restyle instantly, and export DTCG / CSS / Tailwind.',
    url: `${SITE_URL}/studio`,
  },
};

export default function StudioPage() {
  return <StudioPlayground />;
}
