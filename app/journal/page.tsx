import type { Metadata } from 'next';
import Link from 'next/link';
import { JOURNAL_POSTS } from '@/lib/journal-posts';
import FadeUp from '@/components/FadeUp';

export const metadata: Metadata = {
  title: 'Field Notes — Video Production Journal | Riparian Studios',
  description: 'Dispatches from production. Notes on the work, the process, and the organizations we make films for.',
  openGraph: {
    title: 'Field Notes — Riparian Studios',
    description: 'Dispatches from production. Notes on the work, the process, and the organizations we make films for.',
    type: 'website',
  },
};

export default function JournalPage() {
  const posts = [...JOURNAL_POSTS].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  return (
    <div style={{ background: '#fff' }}>
      <div style={{ background: '#1A1408', padding: '88px 48px 72px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp delay={0.1}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.4)', marginBottom: 14 }}>From the studio</div>
          </FadeUp>
          <FadeUp delay={0.25}>
            <h1 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#E2DFD9', margin: 0 }}>
              Field notes.
            </h1>
          </FadeUp>
        </div>
      </div>

      <section style={{ padding: '72px 48px 96px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {posts.map((post, i) => (
              <FadeUp key={post.slug} delay={Math.min(i * 0.04, 0.3)}>
              <Link href={`/journal/${post.slug}`} style={{ textDecoration: 'none', display: 'block', padding: '40px 0', borderTop: '1px solid rgba(55,57,66,0.1)', borderBottom: i === posts.length - 1 ? '1px solid rgba(55,57,66,0.1)' : 'none' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'start' }}>
                  <div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--rs-accent)', marginBottom: 8 }}>{post.category}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.1em', color: 'rgba(107,107,110,0.6)' }}>{post.date}</div>
                  </div>
                  <div>
                    <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 22, lineHeight: 1.25, color: '#373942', margin: '0 0 12px' }}>{post.title}</h2>
                    <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, lineHeight: 1.7, color: '#6B6B6E', margin: 0 }}>{post.excerpt}</p>
                  </div>
                </div>
              </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
