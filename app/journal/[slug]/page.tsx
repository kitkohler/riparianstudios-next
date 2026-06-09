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
          <h1 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#E2DFD9', margin: '0 0 20px', maxWidth: 800 }}>
            {post.title}
          </h1>
          {(post.runtime || post.client) && (
            <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, lineHeight: 1.6, color: 'rgba(244,239,230,0.55)', margin: 0 }}>
              {[post.runtime, post.client && `Produced for ${post.client}`].filter(Boolean).join(' · ')}
            </p>
          )}
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

      {/* Premiere CTA strip */}
      {post.eventbriteUrl && (
        <div style={{ background: '#F4EFE6', padding: '56px 48px' }}>
          <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--rs-accent)', marginBottom: 14 }}>Premiere</div>
            {post.premiereDate && <div style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 24, lineHeight: 1.25, color: '#373942', margin: '0 0 6px' }}>{post.premiereDate}</div>}
            {post.premiereLocation && <div style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, lineHeight: 1.6, color: '#6B6B6E', margin: '0 0 28px' }}>{post.premiereLocation}</div>}
            <a href={post.eventbriteUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', fontFamily: '"Open Sans", sans-serif', fontSize: 15, fontWeight: 600, color: '#1A1408', background: 'var(--rs-accent)', textDecoration: 'none', padding: '13px 28px', borderRadius: 3, letterSpacing: '0.01em' }}>
              Reserve free tickets →
            </a>
          </div>
        </div>
      )}

      <section style={{ padding: '72px 48px 96px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          {post.body.split('\n\n').filter(Boolean).map((para, i) => {
            const trimmed = para.trim();

            // [embed:VIDEO_ID] — YouTube inline embed
            const embedMatch = trimmed.match(/^\[embed:([a-zA-Z0-9_-]+)\]$/);
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

            // [img:URL|caption] — inline image with caption
            const imgMatch = trimmed.match(/^\[img:([^\|]+)\|(.+)\]$/);
            if (imgMatch) {
              return (
                <figure key={i} style={{ margin: '40px 0 48px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgMatch[1]} alt={imgMatch[2]} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }} />
                  <figcaption style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 13.5, fontStyle: 'italic', lineHeight: 1.65, color: '#6B6B6E', marginTop: 14 }}>{imgMatch[2]}</figcaption>
                </figure>
              );
            }

            // **Heading** — bold section heading
            const headingMatch = trimmed.match(/^\*\*(.+)\*\*$/);
            if (headingMatch) {
              return (
                <h2 key={i} style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 24, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#373942', margin: '48px 0 20px' }}>{headingMatch[1]}</h2>
              );
            }

            return (
              <p key={i} style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 17, lineHeight: 1.85, color: '#373942', margin: '0 0 28px' }}>
                {trimmed}
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
