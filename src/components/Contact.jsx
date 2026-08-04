import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTheme } from '../ThemeContext'

const SERVICE_ID  = 'service_ubw4ni7'
const TEMPLATE_ID = 'template_qzja5cd'
const PUBLIC_KEY  = 'nrGRLWjyFvv9SW-p2'

export default function Contact() {
  const { theme } = useTheme()
  const isTerminal = theme === 'terminal'

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      title:   'Portfolio Contact Form',
      name:    form.name,
      email:   form.email,
      message: form.message,
    }, { publicKey: PUBLIC_KEY })
    .then(() => { setStatus('sent'); setForm({ name: '', email: '', message: '' }) })
    .catch(err => { console.error('EmailJS error:', err); setStatus('error') })
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: isTerminal ? '0' : '2px',
    padding: '0.875rem 1rem',
    color: 'var(--text-primary)',
    fontFamily: 'var(--body-font)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
  }

  const labelStyle = {
    display: 'block',
    color: 'var(--text-secondary)',
    fontSize: '0.75rem',
    letterSpacing: isTerminal ? '0.15em' : '0.1em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
    fontWeight: 500,
    fontFamily: 'var(--mono-font)',
  }

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: 'var(--bg-primary)', padding: '7rem 0', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <p className="section-label" style={{ marginBottom: '0.75rem' }}>
          {isTerminal ? 'contact --new-message' : "Let's Talk"}
        </p>

        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--text-primary)',
            fontWeight: isTerminal ? 700 : 600,
            marginBottom: '1rem',
            lineHeight: 1.2,
            fontFamily: 'var(--display-font)',
          }}
        >
          {isTerminal ? (
            <><span style={{ color: 'var(--accent)' }}>{'>'}</span> Get in <span style={{ color: 'var(--accent)' }}>Touch</span></>
          ) : (
            <>Get in <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Touch</span></>
          )}
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', marginBottom: '3.5rem', maxWidth: '480px', lineHeight: 1.8, fontFamily: 'var(--body-font)' }}>
          {isTerminal
            ? '> Open to frontend opportunities, collaborations, or just a good conversation about tech, markets, or ideas.'
            : 'Open to frontend opportunities, collaborations, or just a good conversation about tech, markets, or ideas.'
          }
        </p>

        <div style={{ maxWidth: '640px' }}>
          {status === 'sent' ? (
            <div style={{
              padding: '2rem',
              background: 'var(--bg-card)',
              border: `1px solid var(--accent)`,
              borderRadius: isTerminal ? '0' : '4px',
              textAlign: 'center',
            }}>
              <p style={{ color: 'var(--accent)', fontFamily: 'var(--display-font)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                {isTerminal ? '✓ Message transmitted.' : 'Message sent.'}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontFamily: 'var(--body-font)' }}>
                {isTerminal ? '// I\'ll get back to you soon.' : "I'll get back to you soon."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label style={labelStyle}>{isTerminal ? 'name:' : 'Name'}</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    style={inputStyle} required
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>{isTerminal ? 'email:' : 'Email'}</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    style={inputStyle} required
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>{isTerminal ? 'message:' : 'Message'}</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="6"
                  style={{ ...inputStyle, resize: 'vertical' }} required
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              {status === 'error' && (
                <p style={{ color: '#e05c5c', fontSize: '0.875rem', fontFamily: 'var(--mono-font)' }}>
                  {isTerminal ? 'ERROR: Send failed. Try again or email abindekere@gmail.com' : 'Something went wrong. Please try again or email me directly at abindekere@gmail.com'}
                </p>
              )}
              <div>
                <button
                  type="submit"
                  className="btn-gold"
                  disabled={status === 'sending'}
                  style={{ opacity: status === 'sending' ? 0.6 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'sending'
                    ? (isTerminal ? 'Transmitting...' : 'Sending...')
                    : (isTerminal ? 'Send Message' : 'Send Message')
                  }
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
