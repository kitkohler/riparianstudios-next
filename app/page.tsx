import Image from 'next/image';
import Link from 'next/link';
import { getPlaylistVideos } from '@/lib/youtube';
import { getRecentJournalPosts } from '@/lib/journal-posts';
import { getPlaceReviews } from '@/lib/reviews';
import RecentWork from '@/components/RecentWork';
import HeroScene from '@/components/HeroScene';
import HeroText from '@/components/HeroText';
import Reviews from '@/components/Reviews';
import FadeUp from '@/components/FadeUp';

export default async function HomePage() {
  const [videos, recentPosts, reviewData] = await Promise.all([
    getPlaylistVideos(),
    Promise.resolve(getRecentJournalPosts(4)),
    getPlaceReviews(),
  ]);

  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'absolute', inset: 0 }}><HeroScene /></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,8,4,0.55) 0%, rgba(10,8,4,0.2) 40%, rgba(10,8,4,0.65) 100%)' }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, transparent, var(--rs-accent) 20%, var(--rs-accent) 80%, transparent)' }} />

        <div className="rs-hero-content" style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'flex-end', maxWidth: 1200, width: '100%', margin: '0 auto' }}>
          <HeroText />
        </div>

        <div className="rs-scroll-hint" style={{ position: 'absolute', bottom: 28, right: 48, fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.3)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>Scroll</span>
          <span style={{ display: 'block', width: 24, height: 1, background: 'rgba(244,239,230,0.25)' }} />
        </div>
      </section>

      {/* Recent Work */}
      <RecentWork videos={videos.slice(0, 3)} />

      {/* Field Notes strip */}
      {recentPosts.length > 0 && (
        <section className="rs-section" style={{ background: '#F4EFE6' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <FadeUp>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
                <div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6B6E', marginBottom: 14 }}>From the studio</div>
                  <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 34, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#373942', margin: 0 }}>Field notes</h2>
                </div>
                <Link href="/journal" style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6B6E', textDecoration: 'none' }}>
                  All posts →
                </Link>
              </div>
            </FadeUp>

            {/* Featured post — large treatment for the top entry */}
            {(() => {
              const featured = recentPosts[0];
              const thumbnail = featured.videoId
                ? `https://i.ytimg.com/vi/${featured.videoId}/maxresdefault.jpg`
                : null;
              return (
                <FadeUp>
                  <Link href={`/journal/${featured.slug}`} className="rs-field-notes-featured" style={{ textDecoration: 'none', display: 'grid', marginBottom: 64 }}>
                    <div style={{ overflow: 'hidden', borderRadius: 4, aspectRatio: '16/9', background: '#1A1408' }}>
                      {thumbnail && (
                        <Image
                          src={thumbnail}
                          alt={featured.title}
                          width={720}
                          height={405}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      )}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--rs-accent)', marginBottom: 14 }}>
                        {featured.category} · {featured.date}
                      </div>
                      <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 26, lineHeight: 1.2, letterSpacing: '-0.01em', color: '#373942', margin: '0 0 16px' }}>{featured.title}</h3>
                      <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15.5, lineHeight: 1.75, color: '#6B6B6E', margin: '0 0 24px' }}>{featured.excerpt}</p>
                      <span style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 14, fontWeight: 600, color: 'var(--rs-teal)' }}>Read the story →</span>
                    </div>
                  </Link>
                </FadeUp>
              );
            })()}

            {/* Remaining posts — smaller card row */}
            <div className="rs-grid-3 rs-field-notes-grid" style={{ gap: 28 }}>
              {recentPosts.slice(1).map((post, i) => (
                <FadeUp key={post.slug} delay={i * 0.08}>
                  <Link href={`/journal/${post.slug}`} style={{ textDecoration: 'none', display: 'block', paddingTop: 24, borderTop: '1px solid rgba(55,57,66,0.15)' }}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-accent)', marginBottom: 10 }}>{post.category}</div>
                    <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 16, lineHeight: 1.4, color: '#373942', margin: '0 0 12px' }}>{post.title}</h3>
                    <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 13.5, lineHeight: 1.65, color: '#6B6B6E', margin: '0 0 14px' }}>{post.excerpt}</p>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.08em', color: 'rgba(107,107,110,0.6)' }}>{post.date}</div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About teaser */}
      <section className="rs-section" style={{ background: '#fff' }}>
        <div className="rs-grid-2" style={{ maxWidth: 1200, margin: '0 auto', gap: 80, alignItems: 'center' }}>
          <FadeUp>
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
                The studio runs lean on purpose. A tight core that keeps quality high and overhead low, with a trusted Nevada County-based production bench that scales to fit what the project actually needs.
              </p>
              <Link href="/about" style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 14, fontWeight: 600, color: 'var(--rs-teal)', border: '1.5px solid var(--rs-teal)', padding: '11px 24px', borderRadius: 3, textDecoration: 'none', display: 'inline-block' }}>
                About the Team →
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ position: 'relative' }}>
              <Image
                src="https://res.cloudinary.com/drpr93xmp/image/upload/q_auto/f_auto/v1780701901/kohler_kit_headshot_w90iez_smaller.jpg"
                alt="Kit Kohler"
                width={420}
                height={525}
                style={{ width: '100%', maxWidth: 420, height: 'auto', objectFit: 'cover', borderRadius: 4, display: 'block' }}
              />
              <div className="rs-quote-float" style={{ position: 'absolute', bottom: -20, right: -20, background: '#fff', padding: '20px 24px', borderRadius: 3, boxShadow: '0 4px 24px rgba(26,20,8,0.1)' }}>
                <div style={{ fontFamily: '"Roboto Slab", serif', fontSize: 13, fontStyle: 'italic', color: 'var(--rs-accent)', marginBottom: 4 }}>"If I'm doing my job right, the story outshines us."</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6B6E' }}>Kit Kohler, Founder</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {reviewData && <Reviews data={reviewData} />}

      {/* CTA band */}
      <section className="rs-section" style={{ background: 'var(--rs-teal)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <FadeUp>
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
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
