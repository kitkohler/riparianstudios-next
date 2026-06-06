import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Riparian Studios',
  description: 'Get in touch with Riparian Studios. Based in Nevada City, California.',
};

export default function ContactPage() {
  return (
    <div style={{ background: '#fff' }}>
      <div style={{ background: '#1A1408', padding: '88px 48px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.4)', marginBottom: 14 }}>Get in touch</div>
          <h1 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 'clamp(38px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#E2DFD9', margin: 0, maxWidth: 560 }}>
            Let's talk about<br /><em style={{ color: 'var(--rs-accent)', fontStyle: 'italic' }}>your project.</em>
          </h1>
        </div>
      </div>

      <section style={{ padding: '88px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 16, lineHeight: 1.85, color: '#6B6B6E', margin: '0 0 48px' }}>
              For commissions, collaborations, field production inquiries, and anything else. Riparian responds within one business day.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
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
          </div>

          <div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#6B6B6E', marginBottom: 8 }}>Email directly</div>
              <a href="mailto:kit@riparianstudios.com" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 22, color: 'var(--rs-teal)', textDecoration: 'none' }}>
                kit@riparianstudios.com
              </a>
            </div>

            <div style={{ marginTop: 48, padding: '32px', background: '#F4EFE6', borderRadius: 4 }}>
              <div style={{ fontFamily: '"Roboto Slab", serif', fontSize: 18, fontWeight: 700, color: '#373942', marginBottom: 12 }}>What to include</div>
              <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, lineHeight: 1.8, color: '#6B6B6E', margin: '0 0 16px' }}>
                A quick description of your organization, what you're trying to communicate, and a rough sense of timeline and budget is enough to get a useful conversation started. We'll take it from there.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
