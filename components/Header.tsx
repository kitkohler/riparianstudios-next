'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const dark = isHome;
  const bg = dark ? (scrolled ? 'rgba(26,20,12,0.96)' : 'transparent') : '#ffffff';
  const borderColor = dark ? (scrolled ? 'rgba(255,255,255,0.08)' : 'transparent') : 'rgba(55,57,66,0.12)';

  return (
    <header
      style={{
        position: isHome ? 'fixed' : 'sticky',
        top: 0, left: 0, right: 0,
        width: '100%',
        zIndex: 100,
        background: bg,
        borderBottom: `1px solid ${borderColor}`,
        backdropFilter: scrolled && dark ? 'blur(12px)' : 'none',
        transition: 'background 0.35s, border-color 0.35s',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src={dark ? '/assets/logo-on-dark.svg' : '/assets/logo-on-light.svg'}
            alt="Riparian Studios"
            width={120}
            height={32}
            style={{ height: 32, width: 'auto' }}
            priority
          />
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
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

        <Link href="/contact" style={{
          fontFamily: '"Open Sans", sans-serif', fontSize: 13.5, fontWeight: 600,
          color: dark ? '#1A1408' : '#ffffff',
          background: dark ? 'var(--rs-accent)' : 'var(--rs-teal)',
          padding: '8px 18px', borderRadius: 4, textDecoration: 'none',
          letterSpacing: '0.01em',
        }}>
          Get in touch
        </Link>
      </div>
    </header>
  );
}
