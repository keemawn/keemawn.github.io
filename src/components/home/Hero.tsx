import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Download } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Hero() {
  const navigate = useNavigate()
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-64px)] flex items-center px-4"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto w-full py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Left: text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-mono uppercase tracking-widest mb-3"
              style={{ color: 'var(--accent-blue)' }}
            >
              Data Scientist
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Yip Kai Men
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Building intelligent systems at the intersection of data, engineering, and product.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-8"
            >
              <button
                onClick={() => navigate('/projects')}
                className="px-6 py-2.5 text-sm font-semibold border-2 transition-all duration-200"
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
                View Projects
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-2.5 text-sm font-semibold border-2 transition-all duration-200"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: 'var(--accent-blue)',
                  color: 'var(--accent-blue)',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    'var(--bg-secondary)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                }}
              >
                Get in Touch
              </button>
              <a
                href="/images/Yip Kai Men_Resume_v3.11.pdf"
                download
                className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold border-2 transition-all duration-200"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent-blue)'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-blue)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'
                }}
              >
                <Download size={15} />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="flex gap-4 justify-center md:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/yipkaimen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-blue)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)')
                }
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="mailto:yipkaimen@yahoo.com"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-blue)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)')
                }
              >
                <Mail size={16} />
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* Right: profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            {imgError ? (
              <div
                className="w-44 h-44 md:w-52 md:h-52 rounded-full flex items-center justify-center text-white text-4xl font-bold ring-4 ring-accent-blue"
                style={{ backgroundColor: 'var(--accent-blue)' }}
              >
                KM
              </div>
            ) : (
              <img
                src="/images/profile.jpg"
                alt="Kai Men Yip"
                className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover ring-4 ring-accent-blue"
                onError={() => setImgError(true)}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
