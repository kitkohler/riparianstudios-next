'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  distance = 24,
  style,
  className,
}: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}
