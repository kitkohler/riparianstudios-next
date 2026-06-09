import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/FadeUp';

export const metadata: Metadata = {
  title: 'About — Riparian Studios | Video Production, Nevada City CA',
  description: 'Meet the team behind Riparian Studios, a video production company in Nevada City, CA. Brand films, documentary, and campaign video for nonprofits and businesses across Northern California.',
  openGraph: {
    title: 'About Riparian Studios',
    description: 'Nevada City talent. National-caliber work. A video production company based in the Sierra Nevada foothills.',
    type: 'website',
  },
};

const CREW = [
  {
    name: 'Val Camp',
    title: 'Cinematographer',
    location: 'Grass Valley',
    photo: 'https://res.cloudinary.com/drpr93xmp/image/upload/q_auto/f_auto/v1780702648/val-headshot_small_nkonkd.jpg',
    bio: 'Val is a filmmaker and photographer with 20+ years of feature, commercial, music video, and independent film work across Los Angeles and the Bay Area. Based in Nevada County for over 15 years, he\'s the product photographer and video producer for AJA Video Systems in Grass Valley. Current clients include Microsoft, Ford, and Sierra Harvest.',
  },
  {
    name: 'Sofia Grace',
    title: 'Production Manager',
    location: 'Nevada City',
    photo: 'https://res.cloudinary.com/drpr93xmp/image/upload/q_auto/f_auto/v1780703380/sofia-grace_flqy48.png',
    bio: 'Sofia grew up in Nevada City and built her career on both sides of the camera, working as an actor in Los Angeles and New York before returning home. She now manages production at Riparian Studios.',
  },
  {
    name: 'Jon Cooksey',
    title: 'Motion Graphics Designer & Animator',
    location: 'Grass Valley',
    photo: 'https://res.cloudinary.com/drpr93xmp/image/upload/q_auto/f_auto/v1780719799/jonathan_cooksey_SQsmmmm_iyysif.jpg',
    bio: "Jon turned his troublesome penchant for drawing in class into a successful career designing eye-catching, story-motivating motion graphics and animation. With almost 20 years of professional experience working with brands both big and small, he received his degree in Motion Graphics and Design from Ex'pressions College for Digital Arts in Emeryville, CA.",
  },
];

const VALUES = [
  { name: 'Editorial rigor', desc: 'Story structure drives everything. The "why" is established before a frame is shot, so that when we get to set, we already know what we\'re making.' },
  { name: 'A refined process', desc: "You're the subject matter expert on your story. We're the subject matter experts on how to tell it. We'll ask the questions we need, surface what matters, and handle the production so you can stay focused on your work." },
  { name: 'Clear accountability', desc: 'Every project has a clear point of contact and a consistent creative lead from first call through final delivery. You always know who to talk to and where things stand.' },
  { name: 'Built to last', desc: 'The work is made for the long term, for donor archives, campaign libraries, and the communities it documents. We shoot and edit accordingly.' },
];

export default function AboutPage() {
  return (
    <div style={{ background: '#fff' }}>
      {/* Hero */}
      <div className="rs-page-hero" style={{ background: '#1A1408', padding: '88px 48px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp delay={0.1}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.4)', marginBottom: 14 }}>About the studio</div>
          </FadeUp>
          <FadeUp delay={0.25}>
            <h1 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 'clamp(38px, 5vw, 66px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#E2DFD9', margin: 0, maxWidth: 600 }}>
              Nevada City talent.<br /><em style={{ color: 'var(--rs-accent)', fontStyle: 'italic' }}>National-caliber work.</em>
            </h1>
          </FadeUp>
        </div>
      </div>

      {/* Bio */}
      <section className="rs-section">
        <div className="rs-grid-2" style={{ maxWidth: 1200, margin: '0 auto', gap: 80, alignItems: 'start' }}>
          <FadeUp>
            <div>
              <Image
                src="https://res.cloudinary.com/drpr93xmp/image/upload/q_auto/f_auto/v1780701901/kohler_kit_headshot_w90iez_smaller.jpg"
                alt="Kit Kohler"
                width={480}
                height={600}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 4, display: 'block' }}
              />
              <div style={{ marginTop: 20, borderTop: '1px solid rgba(55,57,66,0.1)', paddingTop: 20 }}>
                <div style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', color: '#373942', marginBottom: 6 }}>Kit Kohler</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--rs-accent)' }}>Founder &amp; Director · Nevada City</div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div>
              <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 32, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#373942', margin: '0 0 28px' }}>Nevada County's film crew.</h2>
              <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 16, lineHeight: 1.85, color: '#6B6B6E', margin: '0 0 20px' }}>
                Kit Kohler founded Riparian Studios in Nevada City after nearly a decade making ads for national brand campaigns in San Francisco. The move was deliberate: toward clients whose work matters to this specific place, and away from distance-produced content that never quite lands.
              </p>
              <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 16, lineHeight: 1.85, color: '#6B6B6E', margin: '0 0 20px' }}>
                The name comes from the riparian zone, the interface between river and land, a place of transition and resilience. Nevada City sits at the confluence of the three forks of the Yuba River. The studio is rooted in that geography and in the organizations sustaining it.
              </p>
              <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 16, lineHeight: 1.85, color: '#6B6B6E', margin: '0 0 20px' }}>
                Riparian is a director-led studio that runs lean on purpose. Kit directs every project. The crew scales to fit — a trusted Northern California bench of cinematographers, editors, animators, and production support that assembles around what the work actually needs. Small enough to move fast. Experienced enough to handle anything.
              </p>
              <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 16, lineHeight: 1.85, color: '#6B6B6E', margin: '0 0 40px' }}>
                Current clients include nonprofits, health systems, conservation districts, fire coalitions, and small businesses. Most video production work happens across Nevada County and the Sierra Foothills, with select projects in Sacramento, the Bay Area, and beyond.
              </p>
              <blockquote style={{ margin: '0 0 40px', padding: '24px 28px', borderLeft: '3px solid var(--rs-accent)', background: '#F4EFE6' }}>
                <p style={{ fontFamily: '"Roboto Slab", serif', fontSize: 20, fontStyle: 'italic', fontWeight: 500, lineHeight: 1.6, color: '#373942', margin: 0 }}>
                  "If I'm doing my job right, the story outshines us. When I screen a film and all the questions are for the client, I know I've done the work right."
                </p>
              </blockquote>
              <Link href="/work" style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 14, fontWeight: 600, color: 'var(--rs-teal)', border: '1.5px solid var(--rs-teal)', padding: '11px 24px', borderRadius: 3, textDecoration: 'none', display: 'inline-block' }}>
                See the work →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Crew */}
      <section className="rs-section" style={{ borderTop: '1px solid rgba(55,57,66,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6B6E', marginBottom: 14 }}>Sierra Foothills production crew</div>
            <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 34, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#373942', margin: '14px 0 24px' }}>Frequent collaborators</h2>
            <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 16, lineHeight: 1.8, color: '#6B6B6E', margin: '0 0 56px', maxWidth: 680 }}>
              Each project assembles the right team from a trusted Sierra Foothills-based bench. These are the people Riparian works with most often.
            </p>
          </FadeUp>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {CREW.map((person, i) => (
              <FadeUp key={person.name} delay={i * 0.08}>
                <div className="rs-crew-card" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 48, alignItems: 'start' }}>
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={280}
                    height={350}
                    style={{ width: '100%', height: 'auto', aspectRatio: '4/5', objectFit: 'cover', borderRadius: 4, display: 'block' }}
                  />
                  <div>
                    <div style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 26, letterSpacing: '-0.01em', color: '#373942', marginBottom: 6 }}>{person.name}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--rs-accent)', marginBottom: 24 }}>{person.title} · {person.location}</div>
                    <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15.5, lineHeight: 1.8, color: '#6B6B6E', margin: 0 }}>{person.bio}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="rs-section" style={{ background: '#F4EFE6' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6B6E', marginBottom: 14 }}>Approach</div>
            <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 34, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#373942', margin: '14px 0 56px' }}>How the work gets made</h2>
          </FadeUp>
          <div className="rs-grid-4" style={{ gap: 32 }}>
            {VALUES.map((v, i) => (
              <FadeUp key={v.name} delay={i * 0.08}>
                <div>
                  <div style={{ width: 32, height: 2, background: 'var(--rs-accent)', marginBottom: 20 }} />
                  <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 18, color: '#373942', marginBottom: 12 }}>{v.name}</h3>
                  <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 14.5, lineHeight: 1.7, color: '#6B6B6E', margin: 0 }}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
