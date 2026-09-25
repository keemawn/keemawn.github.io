import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Linkedin, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { fadeUp, stagger, easeOut, springTouch } from '../../lib/motion'

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

const fieldStyle = {
  backgroundColor: 'var(--bg-primary)',
  borderColor: 'var(--border)',
  color: 'var(--text-primary)',
  outline: 'none',
}

function onFieldFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = 'var(--accent-blue)'
  e.currentTarget.style.boxShadow = '0 0 0 3px rgb(var(--accent-blue-rgb) / 0.18)'
}

function onFieldBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = 'var(--border)'
  e.currentTarget.style.boxShadow = 'none'
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <div className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div variants={stagger(0.08)} initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            className="mb-2 text-sm font-medium uppercase tracking-[0.14em]"
            style={{ color: 'var(--accent-blue)' }}
          >
            Contact
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Get in touch
          </motion.h1>
          <motion.p variants={fadeUp} className="mb-12 text-base" style={{ color: 'var(--text-secondary)' }}>
            Open to new opportunities, collaborations, or just a conversation.
          </motion.p>

          {/* Contact cards */}
          <motion.div variants={fadeUp} className="mb-12 grid gap-4 sm:grid-cols-3">
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                whileHover={{ y: -3, transition: springTouch }}
                className="rounded-card border p-5"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  boxShadow: '0 2px 16px -4px hsl(var(--shadow-color) / 0.12)',
                }}
              >
                <Icon size={18} style={{ color: 'var(--accent-blue)', marginBottom: 8 }} />
                <p className="mb-1 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium transition-colors duration-200"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-blue)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)')}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {value}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            className="rounded-card border p-7"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              boxShadow: '0 2px 16px -4px hsl(var(--shadow-color) / 0.12)',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <CheckCircle2 size={32} style={{ color: 'var(--accent-blue)', marginBottom: 12 }} />
                  <p className="mb-2 text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Message received
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Thanks for reaching out. I will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        className="mb-2 block text-xs font-medium uppercase tracking-wider"
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
                        className="w-full rounded-control border px-4 py-2.5 text-sm transition-[border-color,box-shadow] duration-200"
                        style={fieldStyle}
                        onFocus={onFieldFocus}
                        onBlur={onFieldBlur}
                      />
                    </div>
                    <div>
                      <label
                        className="mb-2 block text-xs font-medium uppercase tracking-wider"
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
                        className="w-full rounded-control border px-4 py-2.5 text-sm transition-[border-color,box-shadow] duration-200"
                        style={fieldStyle}
                        onFocus={onFieldFocus}
                        onBlur={onFieldBlur}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-xs font-medium uppercase tracking-wider"
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
                      className="w-full resize-none rounded-control border px-4 py-2.5 text-sm transition-[border-color,box-shadow] duration-200"
                      style={fieldStyle}
                      onFocus={onFieldFocus}
                      onBlur={onFieldBlur}
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-transform duration-150 ease-out active:scale-95"
                    style={{ backgroundColor: 'var(--accent-blue)', color: '#ffffff' }}
                  >
                    <Send size={15} />
                    Send message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
