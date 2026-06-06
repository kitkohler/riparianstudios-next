'use client';

import { useState } from 'react';

// Replace with your Formspree form ID: https://formspree.io/forms
const FORMSPREE_ID = 'mbdegrrd';

type Status = 'idle' | 'sending' | 'success' | 'error';

const inputStyle = {
  width: '100%',
  fontFamily: '"Open Sans", sans-serif',
  fontSize: 15,
  color: '#373942',
  background: '#F9F7F4',
  border: '1px solid rgba(55,57,66,0.15)',
  borderRadius: 4,
  padding: '12px 14px',
  outline: 'none',
  boxSizing: 'border-box' as const,
  display: 'block',
};

const labelStyle = {
  fontFamily: "'DM Mono', monospace",
  fontSize: 10,
  letterSpacing: '0.13em',
  textTransform: 'uppercase' as const,
  color: '#6B6B6E',
  display: 'block',
  marginBottom: 6,
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '48px 0' }}>
        <div style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 700, fontSize: 22, color: '#373942', marginBottom: 12 }}>
          Message sent.
        </div>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 15, lineHeight: 1.8, color: '#6B6B6E', margin: 0 }}>
          Thanks for reaching out. We'll be in touch as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input id="name" name="name" type="text" required style={inputStyle} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="organization" style={labelStyle}>Organization</label>
          <input id="organization" name="organization" type="text" style={inputStyle} placeholder="Optional" />
        </div>
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email</label>
        <input id="email" name="email" type="email" required style={inputStyle} placeholder="you@example.com" />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
          placeholder="A quick description of your organization, what you're trying to communicate, and a rough sense of timeline and budget is enough to get started."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          style={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: 14,
            fontWeight: 600,
            color: '#fff',
            background: status === 'sending' ? '#888' : 'var(--rs-teal)',
            border: 'none',
            borderRadius: 4,
            padding: '13px 28px',
            cursor: status === 'sending' ? 'default' : 'pointer',
            letterSpacing: '0.01em',
            transition: 'background 0.2s',
          }}
        >
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>
        {status === 'error' && (
          <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 13, color: '#c0392b', marginTop: 10 }}>
            Something went wrong. Try emailing us directly at kit@riparianstudios.com.
          </p>
        )}
      </div>

      <div style={{ padding: '24px', background: '#F4EFE6', borderRadius: 4, marginTop: 8 }}>
        <div style={{ fontFamily: '"Roboto Slab", serif', fontSize: 16, fontWeight: 700, color: '#373942', marginBottom: 8 }}>What to include</div>
        <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: 14, lineHeight: 1.8, color: '#6B6B6E', margin: 0 }}>
          A quick description of your organization, what you're trying to communicate, and a rough sense of timeline and budget is enough to get a useful conversation started. We'll take it from there.
        </p>
      </div>
    </form>
  );
}
