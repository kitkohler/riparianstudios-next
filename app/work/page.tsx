import type { Metadata } from 'next';
import { getPlaylistVideos } from '@/lib/youtube';
import WorkGrid from '@/components/WorkGrid';

export const metadata: Metadata = {
  title: 'Work — Riparian Studios | Brand Film & Video Production, Northern California',
  description: 'Brand films, documentary, and campaign video work by Riparian Studios, Nevada City CA.',
  openGraph: {
    title: 'Work — Riparian Studios',
    description: 'Brand films, documentary, and campaign video production based in Nevada City, CA.',
    type: 'website',
  },
};

export default async function WorkPage() {
  const videos = await getPlaylistVideos();

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <div style={{ background: '#1A1408', padding: '88px 48px 72px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.4)', marginBottom: 14 }}>Video production, Nevada City CA</div>
          <h1 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#E2DFD9', margin: 0 }}>
            The work.
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 48px 96px' }}>
        <div style={{ marginBottom: 32, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(107,107,110,0.5)' }}>
          {videos.length} film{videos.length !== 1 ? 's' : ''}
        </div>
        <WorkGrid videos={videos} />
      </div>
    </div>
  );
}
