import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Riparian Studios | Video Production, Nevada City CA',
  description: 'Get in touch with Riparian Studios, a video production company in Nevada City, CA. Serving nonprofits, health systems, and businesses across Nevada County and Northern California.',
  openGraph: {
    title: 'Contact Riparian Studios',
    description: 'Get in touch about your video production project.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div style={{ background: '#fff' }}>
      <div className="rs-page-hero" style={{ background: '#1A1408', padding: '88px 48px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.4)', marginBottom: 14 }}>Get in touch</div>
          <h1 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 'clamp(38px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#E2DFD9', margin: '0 0 24px', maxWidth: 560 }}>
            Let's talk about<br /><em style={{ color: 'var(--rs-accent)', fontStyle: 'italic' }}>your project.</em>
          </h1>
          <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 16, lineHeight: 1.75, color: 'rgba(244,239,230,0.55)', maxWidth: 560, margin: 0 }}>
            For video production inquiries, collaborations, field production, and anything else. We work with nonprofits, health systems, public agencies, and businesses across Nevada County and Northern California.
          </p>
        </div>
      </div>

      {/* Form — full width, max 760 centered */}
      <section className="rs-section">
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <ContactForm />
        </div>
      </section>

      {/* Contact details — below the form */}
      <section style={{ borderTop: '1px solid rgba(55,57,66,0.08)', padding: '56px 48px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', gap: 64, flexWrap: 'wrap' }}>
          {[
            ['Location', 'Nevada City, California 95959'],
            ['Studio', 'Riparian Studios LLC'],
            ['Region', 'Sierra Nevada · Northern California'],
          ].map(([label, val]) => (
            <div key={label}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#6B6B6E', marginBottom: 6 }}>{label}</div>
              <div style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, color: '#373942' }}>{val}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
