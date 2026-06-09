'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import type { YTVideo } from '@/lib/youtube';

function VideoModal({ video, onClose }: { video: YTVideo; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(10,8,4,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, backdropFilter: 'blur(4px)' }}
    >
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: 6, maxWidth: 880, width: '100%', maxHeight: '90vh', overflow: 'auto', boxShadow: '0 24px 80px rgba(0,0,0,0.4)' }}>
        <div style={{ width: '100%', aspectRatio: '16/7', background: '#000' }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div style={{ padding: '36px 40px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--rs-accent)', marginBottom: 10 }}>Film · {video.year}</div>
              <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 32, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#373942', margin: 0 }}>{video.title}</h2>
            </div>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6B6E', padding: '8px 0', flexShrink: 0 }}>
              Close ×
            </button>
          </div>
          <div style={{ width: 36, height: 2, background: 'var(--rs-accent)', margin: '0 0 24px' }} />
          <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 16, lineHeight: 1.8, color: '#6B6B6E', margin: '0 0 24px', whiteSpace: 'pre-line' }}>{video.description}</p>
          <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-accent)', textDecoration: 'none' }}>
            Watch on YouTube ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video, large }: { video: YTVideo; large?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <>
      <div
        onClick={() => setSelected(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          cursor: 'pointer', borderRadius: 4, overflow: 'hidden', background: '#fff',
          boxShadow: hovered ? '0 8px 32px rgba(26,20,8,0.14)' : '0 1px 3px rgba(26,20,8,0.06), 0 4px 16px rgba(26,20,8,0.05)',
          transform: hovered ? 'translateY(-3px)' : 'none',
          transition: 'box-shadow 0.25s, transform 0.25s',
        }}
      >
        <div style={{ overflow: 'hidden', aspectRatio: large ? '21/9' : '16/10', position: 'relative' }}>
          <Image
            src={video.thumbnail || `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
            alt={video.title}
            fill
            style={{ objectFit: 'cover', transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.5s ease' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,4,0.55) 0%, transparent 50%)', opacity: hovered ? 1 : 0, transition: 'opacity 0.3s' }} />
          <div style={{ position: 'absolute', bottom: 18, left: 22, opacity: hovered ? 1 : 0, transition: 'opacity 0.3s', fontFamily: '"Open Sans", sans-serif', fontSize: 13, fontWeight: 500, color: '#E2DFD9' }}>
            Watch film →
          </div>
        </div>
        <div style={{ padding: large ? '22px 28px 26px' : '18px 20px 22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-accent)' }}>Film</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: 'rgba(107,107,110,0.6)' }}>{video.year}</div>
          </div>
          <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: large ? 22 : 17, lineHeight: 1.3, color: '#373942', margin: '0 0 8px' }}>{video.title}</h3>
          <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 13.5, lineHeight: 1.6, color: '#6B6B6E', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{video.description}</p>
        </div>
      </div>
      {selected && <VideoModal video={video} onClose={() => setSelected(false)} />}
    </>
  );
}

export default function WorkGrid({ videos }: { videos: YTVideo[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  return (
    <div ref={ref} className="rs-grid-3 rs-work-grid" style={{ gap: 24 }}>
      {videos.map((v, i) => (
        <motion.div
          key={v.videoId}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.4) }}
          style={{ gridColumn: i === 0 ? 'span 2' : 'span 1' }}
        >
          <VideoCard video={v} large={i === 0} />
        </motion.div>
      ))}
    </div>
  );
}
