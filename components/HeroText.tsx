'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const item = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay },
});

export default function HeroText() {
  return (
    <div style={{ maxWidth: 720 }}>
      <motion.div {...item(0.2)} style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.5)', marginBottom: 28 }}>
        Nevada City, California · Video &amp; Brand Production
      </motion.div>
      <motion.h1 {...item(0.4)} style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 'clamp(42px, 5.5vw, 82px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#E2DFD9', margin: '0 0 28px' }}>
        Films worthy<br />of the work.
      </motion.h1>
      <motion.p {...item(0.55)} style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 17, lineHeight: 1.7, color: 'rgba(244,239,230,0.7)', maxWidth: 520, margin: '0 0 44px' }}>
        A video production company based in Nevada City, CA. We make brand films, campaign videos, and documentary work for nonprofits, health systems, public agencies, and businesses doing meaningful work across Northern California.
      </motion.p>
      <motion.div {...item(0.7)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Link href="/work" style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, fontWeight: 500, color: 'rgba(244,239,230,0.75)', background: 'transparent', border: '1.5px solid rgba(226,223,217,0.25)', padding: '12px 28px', borderRadius: 3, textDecoration: 'none' }}>
          View the work
        </Link>
        <Link href="/contact" style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, fontWeight: 600, color: '#1A1408', background: 'var(--rs-accent)', padding: '13px 28px', borderRadius: 3, textDecoration: 'none' }}>
          Get to work
        </Link>
      </motion.div>
    </div>
  );
}
