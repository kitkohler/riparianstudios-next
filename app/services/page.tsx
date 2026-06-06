import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — Riparian Studios',
  description: 'Brand films, campaign video, and documentary production. A clear process from kickoff to final delivery.',
};

const PROCESS = [
  {
    phase: 'Pre-Production',
    tagline: 'Where the work actually starts.',
    body: "We open with a kickoff call to get clear on the story, the audience, and the right people to tell it. From there we write interview questions, review them with you, flag who should and shouldn't be asked what, and handle all subject booking. You arrive on shoot day knowing exactly what's going to happen.",
    includes: ['Story development and kickoff', 'Interview question writing and client review', 'Subject identification and scheduling', 'Production logistics'],
  },
  {
    phase: 'Production',
    tagline: 'Shoot day.',
    body: "We show up, run the interviews, and direct b-roll. Our crew scales to what the project needs — sometimes that's two people, sometimes more. The standard of work is the same either way.",
    includes: ['Interview direction', 'B-roll production', 'Location sound', 'On-set production management'],
  },
  {
    phase: 'Post-Production',
    tagline: 'From raw footage to finished film.',
    body: "We transcribe everything, build a rough assembly of the interviews for your review, then layer in b-roll, music, and graphics through to a polished final cut. You'll have clear review points along the way.",
    includes: ['Transcription', 'Rough assembly and client review', 'Full picture and sound edit', 'Color, mix, and final delivery'],
  },
];

const ADDONS = [
  { name: 'Custom score', desc: 'Original music composition tailored to the film.' },
  { name: 'Motion graphics & animation', desc: 'Title cards, data visualization, and animated sequences with Jon Cooksey.' },
  { name: 'Social and short-form cuts', desc: 'Additional edits optimized for Instagram, YouTube, and other platforms.' },
  { name: 'Broadcast and event formats', desc: 'Delivery in any format your venue or network requires.' },
];

export default function ServicesPage() {
  return (
    <div style={{ background: '#fff' }}>
      {/* Hero */}
      <div style={{ background: 'var(--rs-teal)', padding: '88px 48px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.4)', marginBottom: 14 }}>What we do</div>
          <h1 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 'clamp(38px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#E2DFD9', margin: '0 0 24px', maxWidth: 640 }}>
            A clear process.<br />A finished film.
          </h1>
          <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 17, lineHeight: 1.7, color: 'rgba(244,239,230,0.65)', maxWidth: 560, margin: 0 }}>
            Most clients come to us with a story and a rough sense of what they want. Some come with just the story. Either way, we know how to get from that first conversation to a finished film — and we can step in at any point in that process.
          </p>
        </div>
      </div>

      {/* Process */}
      <section style={{ padding: '88px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 80 }}>
          {PROCESS.map((step, i) => (
            <div key={step.phase} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start', paddingBottom: 80, borderBottom: i < PROCESS.length - 1 ? '1px solid rgba(55,57,66,0.08)' : 'none' }}>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--rs-accent)', marginBottom: 12 }}>0{i + 1}</div>
                <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 32, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#373942', margin: '0 0 12px' }}>{step.phase}</h2>
                <div style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 14, fontStyle: 'italic', color: '#6B6B6E' }}>{step.tagline}</div>
              </div>
              <div>
                <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 16, lineHeight: 1.85, color: '#6B6B6E', margin: '0 0 32px' }}>{step.body}</p>
                <div style={{ borderTop: '1px solid rgba(55,57,66,0.1)', paddingTop: 24 }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#6B6B6E', marginBottom: 16 }}>Included</div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {step.includes.map(item => (
                      <li key={item} style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, color: '#373942', display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ display: 'block', width: 16, height: 1.5, background: 'var(--rs-accent)', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section style={{ background: '#F4EFE6', padding: '88px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6B6E', marginBottom: 14 }}>Optional</div>
          <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 34, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#373942', margin: '14px 0 48px' }}>When the project calls for more</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {ADDONS.map(a => (
              <div key={a.name}>
                <div style={{ width: 32, height: 2, background: 'var(--rs-accent)', marginBottom: 20 }} />
                <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 18, color: '#373942', marginBottom: 12 }}>{a.name}</h3>
                <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 14.5, lineHeight: 1.7, color: '#6B6B6E', margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '88px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 36, lineHeight: 1.15, color: '#373942', margin: '0 0 20px' }}>Want to talk through your project?</h2>
          <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 16, lineHeight: 1.75, color: '#6B6B6E', margin: '0 0 36px' }}>
            We'll tell you exactly what it would take.
          </p>
          <Link href="/contact" style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, fontWeight: 600, color: '#fff', background: 'var(--rs-teal)', padding: '14px 32px', borderRadius: 3, textDecoration: 'none', display: 'inline-block' }}>
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
