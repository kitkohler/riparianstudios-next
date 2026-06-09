import Link from 'next/link';
import Image from 'next/image';

const WORK_LINKS = ['Documentary', 'Brand Films', 'Campaign', 'All Projects'];
const STUDIO_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="rs-footer" style={{ background: '#1A1408', padding: '72px 48px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="rs-footer-grid" style={{ marginBottom: 56 }}>

          <div>
            <Link href="/" style={{ display: 'block', marginBottom: 20 }}>
              <Image src="/assets/logo-on-dark.svg" alt="Riparian Studios" width={120} height={30} style={{ height: 30, width: 'auto' }} />
            </Link>
            <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 14, color: 'rgba(226,223,217,0.45)', lineHeight: 1.75, maxWidth: 260, margin: '0 0 24px' }}>
              Video and brand production rooted in the Sierra Nevada.
            </p>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(226,223,217,0.25)' }}>
              Nevada City, California
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(226,223,217,0.28)', marginBottom: 20 }}>Work</div>
            {WORK_LINKS.map(item => (
              <Link key={item} href="/work" style={{ display: 'block', fontFamily: '"Open Sans", sans-serif', fontSize: 14, color: 'rgba(226,223,217,0.45)', textDecoration: 'none', marginBottom: 12 }}>
                {item}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(226,223,217,0.28)', marginBottom: 20 }}>Studio</div>
            {STUDIO_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} style={{ display: 'block', fontFamily: '"Open Sans", sans-serif', fontSize: 14, color: 'rgba(226,223,217,0.45)', textDecoration: 'none', marginBottom: 12 }}>
                {label}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(226,223,217,0.28)', marginBottom: 20 }}>Contact</div>
            <a href="mailto:kit@riparianstudios.com" style={{ display: 'block', fontFamily: '"Open Sans", sans-serif', fontSize: 14, color: 'rgba(226,223,217,0.45)', textDecoration: 'none', marginBottom: 12 }}>
              kit@riparianstudios.com
            </a>
            <Link href="/contact" style={{ display: 'inline-block', marginTop: 8, fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-accent)', textDecoration: 'none' }}>
              Get in touch →
            </Link>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(226,223,217,0.08)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(226,223,217,0.2)' }}>
            © {new Date().getFullYear()} Riparian Studios LLC
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(226,223,217,0.2)' }}>
            Nevada City, CA 95959
          </div>
        </div>
      </div>
    </footer>
  );
}
