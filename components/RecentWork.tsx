'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { YTVideo } from '@/lib/youtube';

function VideoModal({ video, onClose }: { video: YTVideo; onClose: () => void }) {
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(10,8,4,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, backdropFilter: 'blur(4px)' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: 6, maxWidth: 880, width: '100%', maxHeight: '90vh', overflow: 'auto', boxShadow: '0 24px 80px rgba(0,0,0,0.4)' }}>
        <div style={{ width: '100%', aspectRatio: '16/7', background: '#000' }}>
          <iframe src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`} style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <div style={{ padding: '32px 40px 36px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 28, lineHeight: 1.15, color: '#373942', margin: 0 }}>{video.title}</h2>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6B6E', padding: '4px 0', flexShrink: 0, marginLeft: 24 }}>Close ×</button>
          </div>
          <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, lineHeight: 1.8, color: '#6B6B6E', margin: 0, whiteSpace: 'pre-line' }}>{video.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function RecentWork({ videos }: { videos: YTVideo[] }) {
  const [selected, setSelected] = useState<YTVideo | null>(null);

  return (
    <section style={{ background: '#fff', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6B6E', marginBottom: 14 }}>Selected work</div>
            <h2 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#373942', margin: 0 }}>Recent projects</h2>
          </div>
          <Link href="/work" style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6B6E', textDecoration: 'none' }}>
            View all →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {videos.map(v => (
            <div key={v.videoId} onClick={() => setSelected(v)} style={{ cursor: 'pointer', borderRadius: 4, overflow: 'hidden', boxShadow: '0 1px 3px rgba(26,20,8,0.06), 0 4px 16px rgba(26,20,8,0.05)' }}>
              <div style={{ overflow: 'hidden', aspectRatio: '16/10', position: 'relative' }}>
                <Image src={v.thumbnail || `https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`} alt={v.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px 22px 24px', background: '#fff' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B6B6E', marginBottom: 8 }}>{v.year}</div>
                <div style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 18, lineHeight: 1.3, color: '#373942', marginBottom: 10 }}>{v.title}</div>
                <div style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 13.5, lineHeight: 1.65, color: '#6B6B6E', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{v.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && <VideoModal video={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
