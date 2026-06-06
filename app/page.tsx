import Image from 'next/image';
import Link from 'next/link';
import { getPlaylistVideos } from '@/lib/youtube';
import RecentWork from '@/components/RecentWork';
import HeroScene from '@/components/HeroScene';

export default async function HomePage() {
  const videos = await getPlaylistVideos();

  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'absolute', inset: 0 }}><HeroScene /></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,8,4,0.55) 0%, rgba(10,8,4,0.2) 40%, rgba(10,8,4,0.65) 100%)' }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, transparent, var(--rs-accent) 20%, var(--rs-accent) 80%, transparent)' }} />

        <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'flex-end', maxWidth: 1200, width: '100%', margin: '0 auto', padding: '0 48px 80px' }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.5)', marginBottom: 28 }}>
              Nevada City, California · Video &amp; Brand Production
            </div>
            <h1 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 'clamp(42px, 5.5vw, 82px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#E2DFD9', margin: '0 0 28px' }}>
              Films worthy<br />of the work.
            </h1>
            <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 17, lineHeight: 1.7, color: 'rgba(244,239,230,0.7)', maxWidth: 520, margin: '0 0 44px' }}>
              Riparian Studios makes brand films, campaign videos, and documentary work for health systems, community organizations, public agencies, and small businesses doing meaningful work.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/work" style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, fontWeight: 500, color: 'rgba(244,239,230,0.75)', background: 'transparent', border: '1.5px solid rgba(226,223,217,0.25)', padding: '12px 28px', borderRadius: 3, textDecoration: 'none' }}>
                View the work
              </Link>
              <Link href="/contact" style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, fontWeight: 600, color: '#1A1408', background: 'var(--rs-accent)', padding: '13px 28px', borderRadius: 3, textDecoration: 'none' }}>
                Get to work
              </Link>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 28, right: 48, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.3)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>Scroll</span>
          <span style={{ display: 'block', width: 24, height: 1, background: 'rgba(244,239,230,0.25)' }} />
        </div>
      </section>

      {/* Recent Work — server-fetched, client interactive */}
      <RecentWork videos={videos.slice(0, 3)} />

      {/* About teaser */}
      <section style={{ background: '#F4EFE6', padding: '100px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6B6E', marginBottom: 14 }}>The studio</div>
            <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 40, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#373942', margin: '0 0 8px' }}>
              Small by design.<br /><em style={{ fontStyle: 'italic', color: 'var(--rs-teal)' }}>Built to scale.</em>
            </h2>
            <div style={{ width: 36, height: 2, background: 'var(--rs-accent)', margin: '20px 0 28px' }} />
            <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 16, lineHeight: 1.8, color: '#6B6B6E', margin: '0 0 20px' }}>
              Kit Kohler founded Riparian Studios in Nevada City after nearly a decade making ads for national brand campaigns in San Francisco. The move was deliberate: toward clients whose work matters to this specific place, and away from distance-produced content that never quite lands.
            </p>
            <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 16, lineHeight: 1.8, color: '#6B6B6E', margin: '0 0 36px' }}>
              The studio runs lean on purpose. A tight core that keeps quality high and overhead low, with a trusted Sierra Foothills-based bench that scales to fit what the project actually needs.
            </p>
            <Link href="/about" style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 14, fontWeight: 600, color: 'var(--rs-teal)', border: '1.5px solid var(--rs-teal)', padding: '11px 24px', borderRadius: 3, textDecoration: 'none', display: 'inline-block' }}>
              About the Team →
            </Link>
          </div>
          <div style={{ position: 'relative' }}>
            <Image
              src="https://res.cloudinary.com/drpr93xmp/image/upload/q_auto/f_auto/v1780701901/kohler_kit_headshot_w90iez_smaller.jpg"
              alt="Kit Kohler"
              width={420}
              height={525}
              style={{ width: '100%', maxWidth: 420, height: 'auto', objectFit: 'cover', borderRadius: 4, display: 'block' }}
            />
            <div style={{ position: 'absolute', bottom: -20, right: -20, background: '#fff', padding: '20px 24px', borderRadius: 3, boxShadow: '0 4px 24px rgba(26,20,8,0.1)' }}>
              <div style={{ fontFamily: '"Roboto Slab", serif', fontSize: 13, fontStyle: 'italic', color: 'var(--rs-accent)', marginBottom: 4 }}>"If I'm doing my job right, the story outshines us."</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6B6E' }}>Kit Kohler, Founder</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: 'var(--rs-teal)', padding: '88px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.45)', marginBottom: 24 }}>Taking on new projects</div>
          <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 42, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#E2DFD9', margin: '0 0 20px' }}>
            Working on something<br />worth documenting?
          </h2>
          <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 16, lineHeight: 1.75, color: 'rgba(226,223,217,0.65)', margin: '0 0 40px' }}>
            Riparian takes on a limited number of projects each year. The work is deliberate — not high-volume, but high-quality.
          </p>
          <Link href="/contact" style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, fontWeight: 600, color: '#1A1408', background: 'var(--rs-accent)', padding: '14px 32px', borderRadius: 3, textDecoration: 'none', display: 'inline-block' }}>
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
