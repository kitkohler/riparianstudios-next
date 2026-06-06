import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JOURNAL_POSTS, getJournalPostBySlug } from '@/lib/journal-posts';

export async function generateStaticParams() {
  return JOURNAL_POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getJournalPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Riparian Studios`,
    description: post.excerpt,
  };
}

export default function JournalPostPage({ params }: { params: { slug: string } }) {
  const post = getJournalPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div style={{ background: '#fff' }}>
      <div style={{ background: '#1A1408', padding: '88px 48px 72px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Link href="/journal" style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.4)', textDecoration: 'none', display: 'inline-block', marginBottom: 24 }}>
            ← Field notes
          </Link>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--rs-accent)', marginBottom: 16 }}>
            {post.category} · {post.date} · Kit Kohler
          </div>
          <h1 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#E2DFD9', margin: 0, maxWidth: 800 }}>
            {post.title}
          </h1>
        </div>
      </div>

      {post.videoId && (
        <div style={{ background: '#0A0804' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
            <div style={{ aspectRatio: '16/9', width: '100%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${post.videoId}?rel=0`}
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <section style={{ padding: '72px 48px 96px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          {post.body.split('\n\n').filter(Boolean).map((para, i) => {
            const embedMatch = para.trim().match(/^\[embed:([a-zA-Z0-9_-]+)\]$/);
            if (embedMatch) {
              return (
                <div key={i} style={{ aspectRatio: '16/9', width: '100%', margin: '8px 0 36px' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${embedMatch[1]}?rel=0`}
                    style={{ width: '100%', height: '100%', border: 'none', display: 'block', borderRadius: 4 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              );
            }
            return (
              <p key={i} style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 17, lineHeight: 1.85, color: '#6B6B6E', margin: '0 0 28px' }}>
                {para.trim()}
              </p>
            );
          })}
        </div>
      </section>

      <div style={{ borderTop: '1px solid rgba(55,57,66,0.1)', padding: '40px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Link href="/journal" style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-teal)', textDecoration: 'none' }}>
            ← Back to field notes
          </Link>
        </div>
      </div>
    </div>
  );
}
