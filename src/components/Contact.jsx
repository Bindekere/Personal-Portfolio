import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = 'service_ubw4ni7'
const TEMPLATE_ID = 'template_qzja5cd'
const PUBLIC_KEY  = 'nrGRLWjyFvv9SW-p2'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'
  const formRef = useRef()

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        title:   'Portfolio Contact Form',
        name:    form.name,
        email:   form.email,
        message: form.message,
      },
      { publicKey: PUBLIC_KEY }
    )
    .then(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    })
    .catch((err) => {
      console.error('EmailJS error:', err)
      setStatus('error')
    })
  }

  const inputStyle = {
    width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border)',
    borderRadius: '2px', padding: '0.875rem 1rem', color: 'var(--text-primary)',
    fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', outline: 'none',
    transition: 'border-color 0.3s ease', boxSizing: 'border-box',
  }

  const labelStyle = {
    display: 'block', color: 'var(--text-secondary)', fontSize: '0.75rem',
    letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 500,
  }

  return (
    <section id="contact" className="section-pad" style={{ background: 'var(--bg-primary)', padding: '7rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <p className="section-label" style={{ marginBottom: '0.75rem' }}>Let's Talk</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.2 }}>
          Get in <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Touch</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', marginBottom: '3.5rem', maxWidth: '480px', lineHeight: 1.8 }}>
          Open to frontend opportunities, collaborations, or just a good conversation about tech, markets, or ideas.
        </p>

        <div style={{ maxWidth: '640px' }}>
          {status === 'sent' ? (
            <div style={{ padding: '2rem', background: 'var(--bg-card)', border: '1px solid var(--accent)', borderRadius: '4px', textAlign: 'center' }}>
              <p style={{ color: 'var(--accent)', fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', marginBottom: '0.5rem' }}>Message sent.</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label style={labelStyle}>Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    style={inputStyle} required
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    style={inputStyle} required
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="6"
                  style={{ ...inputStyle, resize: 'vertical' }} required
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              {status === 'error' && (
                <p style={{ color: '#e05c5c', fontSize: '0.875rem' }}>Something went wrong. Please try again or email me directly at abindekere@gmail.com</p>
              )}
              <div>
                <button type="submit" className="btn-gold" disabled={status === 'sending'}
                  style={{ opacity: status === 'sending' ? 0.6 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
