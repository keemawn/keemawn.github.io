import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, Send } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yipkaimen@yahoo.com',
    href: 'mailto:yipkaimen@yahoo.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yipkaimen',
    href: 'https://www.linkedin.com/in/yipkaimen',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Singapore',
    href: null,
  },
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xblkzoyw'

interface FormState {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: new FormData(e.currentTarget),
      headers: { Accept: 'application/json' },
    })
    setSubmitted(true)
  }

  const inputStyle = {
    backgroundColor: 'var(--bg-card)',
    borderColor: 'var(--border)',
    color: 'var(--text-primary)',
    outline: 'none',
  }

  return (
    <div className="py-16 px-4" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono uppercase tracking-widest mb-2"
            style={{ color: 'var(--accent-blue)' }}
          >
            Contact
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-base mb-12"
            style={{ color: 'var(--text-secondary)' }}
          >
            I'm open to new opportunities, collaborations, or just a conversation.
          </motion.p>

          {/* Contact cards */}
          <motion.div
            variants={fadeUp}
            className="grid sm:grid-cols-3 gap-4 mb-12"
          >
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="p-5 border"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}
              >
                <Icon size={18} style={{ color: 'var(--accent-blue)', marginBottom: '8px' }} />
                <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium transition-colors duration-200"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-blue)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)')
                    }
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {value}
                  </p>
                )}
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            className="p-7 border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Message received!
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-mono uppercase tracking-wider mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 text-sm border transition-colors duration-200"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-blue)'
                        e.currentTarget.style.boxShadow = '0 0 0 2px color-mix(in srgb, var(--accent-blue) 20%, transparent)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-mono uppercase tracking-wider mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 text-sm border transition-colors duration-200"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-blue)'
                        e.currentTarget.style.boxShadow = '0 0 0 2px color-mix(in srgb, var(--accent-blue) 20%, transparent)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-xs font-mono uppercase tracking-wider mb-2"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-2.5 text-sm border resize-none transition-colors duration-200"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-blue)'
                      e.currentTarget.style.boxShadow = '0 0 0 2px color-mix(in srgb, var(--accent-blue) 20%, transparent)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold border-2 transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--accent-blue)',
                    borderColor: 'var(--accent-blue)',
                    color: '#ffffff',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      'var(--accent-blue-light)'
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                      'var(--accent-blue-light)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      'var(--accent-blue)'
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent-blue)'
                  }}
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
