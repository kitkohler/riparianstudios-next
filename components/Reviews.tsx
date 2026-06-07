import type { PlaceReviewsResult } from '@/lib/reviews';
import FadeUp from '@/components/FadeUp';

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
      {[1, 2, 3, 4, 5].map(n => (
        <svg key={n} width="14" height="14" viewBox="0 0 24 24" fill={n <= rating ? '#B8935A' : 'rgba(184,147,90,0.25)'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews({ data }: { data: PlaceReviewsResult }) {
  // Filter to reviews with meaningful text (>30 chars) and show up to 3
  const featured = data.reviews
    .filter(r => r.text.length > 30)
    .slice(0, 3);

  if (!featured.length) return null;

  return (
    <section style={{ background: '#1A1408', padding: '88px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 56 }}>
          <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 42px)', letterSpacing: '-0.02em', color: '#E2DFD9', margin: 0 }}>
            What clients say
          </h2>
          <a
            href="https://www.google.com/maps/place/Riparian+Studios/@39.2592359,-121.0172489,16z"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--rs-accent)', textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            {data.rating} stars · {data.totalReviews} reviews on Google ↗
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
          {featured.map((review, i) => (
            <FadeUp key={i} delay={i * 0.1}>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <Stars rating={review.rating} />
              <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(226,223,217,0.8)', margin: '0 0 16px', flex: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                "{review.text}"
              </p>
              {review.googleMapsUri && (
                <a href={review.googleMapsUri} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-accent)', textDecoration: 'none', display: 'inline-block', marginBottom: 20 }}>
                  Read on Google ↗
                </a>
              )}
              <div>
                <div style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 13, color: '#E2DFD9' }}>{review.author}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.1em', color: 'rgba(226,223,217,0.4)', textTransform: 'uppercase', marginTop: 2 }}>{review.relativeTime}</div>
              </div>
            </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
