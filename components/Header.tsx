'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const dark = isHome;
  const bg = dark ? (scrolled ? 'rgba(26,20,12,0.96)' : 'transparent') : '#ffffff';
  const borderColor = dark ? (scrolled ? 'rgba(255,255,255,0.08)' : 'transparent') : 'rgba(55,57,66,0.12)';
  const iconColor = dark ? 'rgba(244,239,230,0.85)' : '#373942';

  return (
    <>
      <header style={{
        position: isHome ? 'fixed' : 'sticky',
        top: 0, left: 0, right: 0,
        width: '100%',
        zIndex: 100,
        background: menuOpen ? 'rgba(26,20,12,0.98)' : bg,
        borderBottom: `1px solid ${borderColor}`,
        backdropFilter: (scrolled && dark) || menuOpen ? 'blur(12px)' : 'none',
        transition: 'background 0.35s, border-color 0.35s',
        boxSizing: 'border-box',
      }}>
        <div className="rs-header-inner">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image
              src={dark || menuOpen ? '/assets/logo-on-dark.svg' : '/assets/logo-on-light.svg'}
              alt="Riparian Studios"
              width={120}
              height={32}
              style={{ height: 32, width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="rs-nav">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              const color = dark
                ? (active ? '#ffffff' : 'rgba(244,239,230,0.65)')
                : (active ? '#373942' : '#6B6B6E');
              return (
                <Link key={href} href={href} style={{ position: 'relative', fontFamily: '"Open Sans", sans-serif', fontSize: 14, fontWeight: 500, color, textDecoration: 'none' }}>
                  {label}
                  {active && (
                    <span style={{ position: 'absolute', left: 0, bottom: -4, width: '100%', height: 1.5, background: dark ? 'var(--rs-accent)' : 'var(--rs-teal)', borderRadius: 1, display: 'block' }} />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link href="/contact" className="rs-nav-cta" style={{
            fontFamily: '"Open Sans", sans-serif', fontSize: 13.5, fontWeight: 600,
            color: dark ? '#1A1408' : '#ffffff',
            background: dark ? 'var(--rs-accent)' : 'var(--rs-teal)',
            padding: '8px 18px', borderRadius: 4, textDecoration: 'none',
            letterSpacing: '0.01em',
          }}>
            Get in touch
          </Link>

          {/* Hamburger */}
          <button
            className="rs-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{ color: menuOpen ? 'rgba(244,239,230,0.85)' : iconColor }}
          >
            {menuOpen ? (
              // X icon
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger icon
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`rs-mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: 32,
            display: 'inline-block',
            fontFamily: '"Open Sans", sans-serif',
            fontSize: 16,
            fontWeight: 600,
            color: '#1A1408',
            background: 'var(--rs-accent)',
            padding: '14px 28px',
            borderRadius: 4,
            textDecoration: 'none',
            textTransform: 'none',
            letterSpacing: '0.01em',
            border: 'none',
          }}
        >
          Get in touch
        </Link>
      </div>
    </>
  );
}
