import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { WORK_POSTS, getPostBySlug } from '@/lib/work-posts';

export async function generateStaticParams() {
  return WORK_POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Riparian Studios`,
    description: post.body.split('\n')[0].slice(0, 160),
  };
}

export default function WorkPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div style={{ background: '#fff' }}>
      {/* Header */}
      <div style={{ background: '#1A1408', padding: '88px 48px 72px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Link href="/work" style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.4)', textDecoration: 'none', display: 'inline-block', marginBottom: 24 }}>
            ← All work
          </Link>
          {post.date && (
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--rs-accent)', marginBottom: 16 }}>
              {post.date}
            </div>
          )}
          <h1 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#E2DFD9', margin: 0, maxWidth: 800 }}>
            {post.title}
          </h1>
        </div>
      </div>

      {/* Video embed */}
      {post.videoId && !post.needsVideo && (
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

      {/* Body */}
      <section style={{ padding: '72px 48px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {post.body.split('\n\n').filter(Boolean).map((para, i) => (
            <p key={i} style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 17, lineHeight: 1.85, color: '#6B6B6E', margin: '0 0 24px' }}>
              {para.trim()}
            </p>
          ))}

          {/* Video placeholder if no match found */}
          {post.needsVideo && !post.videoId && (
            <div style={{ margin: '40px 0', padding: '32px', background: '#F4EFE6', borderRadius: 4, borderLeft: '3px solid var(--rs-accent)' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--rs-accent)', marginBottom: 8 }}>Video — needs attention</div>
              <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, color: '#6B6B6E', margin: 0 }}>No video embed found for this case study. Add a YouTube or Vimeo URL manually.</p>
            </div>
          )}

          {/* Video from page (not in playlist) */}
          {post.videoId && post.needsVideo && (
            <div style={{ margin: '40px 0' }}>
              <div style={{ aspectRatio: '16/9', width: '100%', background: '#0A0804' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${post.videoId}?rel=0`}
                  style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div style={{ marginTop: 8, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(107,107,110,0.5)' }}>
                Note: video sourced from original post — confirm this is the correct embed
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer nav */}
      <div style={{ borderTop: '1px solid rgba(55,57,66,0.1)', padding: '40px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Link href="/work" style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-teal)', textDecoration: 'none' }}>
            ← Back to all work
          </Link>
        </div>
      </div>
    </div>
  );
}
