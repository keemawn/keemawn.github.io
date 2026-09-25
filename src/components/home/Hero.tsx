import { useRef, useState, type ComponentProps } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { Download, ArrowUpRight } from 'lucide-react'
import { fadeUp, stagger, springSettle } from '../../lib/motion'

function MagneticButton({ children, ...props }: ComponentProps<typeof motion.button>) {
  const ref = useRef<HTMLButtonElement>(null)
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 })

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (reduceMotion) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
      {...props}
      style={{ x: springX, y: springY, ...props.style }}
    >
      {children}
    </motion.button>
  )
}

export default function Hero() {
  const navigate = useNavigate()
  const [imgError, setImgError] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 60])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -70])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[calc(100dvh-6rem)] items-center overflow-hidden px-4 md:min-h-[calc(100dvh-7rem)]"
    >
      {/* Ambient background: accent glow + faint dot grid, asymmetric top-right */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className="absolute -right-24 -top-32 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl md:h-[36rem] md:w-[36rem]"
          style={{
            y: glowY,
            background:
              'radial-gradient(circle, rgb(var(--accent-blue-rgb) / 0.55), transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--text-muted) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'linear-gradient(to bottom, black, transparent 75%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 75%)',
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-content py-16">
        {/* Layered composition: text block sits in normal flow, the portrait is
            pinned and allowed to overlap it, so the two read as one arrangement
            rather than a 50/50 split. */}
        <motion.div
          className="relative z-10 max-w-2xl text-center md:text-left"
          variants={stagger(0.09)}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-medium uppercase tracking-[0.14em]"
            style={{ color: 'var(--accent-blue)' }}
          >
            Data Scientist
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mb-5 text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.03em]"
            style={{ color: 'var(--text-primary)' }}
          >
            Yip Kai Men
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-9 max-w-md text-lg leading-relaxed md:mx-0"
            style={{ color: 'var(--text-secondary)' }}
          >
            Building intelligent systems at the intersection of data, engineering, and product.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <MagneticButton
              onClick={() => navigate('/projects')}
              className="rounded-full px-7 py-3 text-sm font-semibold transition-colors duration-200"
              style={{ backgroundColor: 'var(--accent-blue)', color: '#ffffff' }}
            >
              <span className="flex items-center gap-1.5">
                View Projects
                <ArrowUpRight size={15} />
              </span>
            </MagneticButton>

            <a
              href="/images/Yip Kai Men_Resume_v3.15.pdf"
              download
              className="flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-semibold transition-[color,border-color] duration-200 active:scale-95"
              style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
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
        </motion.div>

        {/* Portrait: pinned to the right on desktop, rotated slightly, framed as
            a translucent material card that overlaps the text column's edge. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: reduceMotion ? 0 : -6 }}
          animate={{ opacity: 1, scale: 1, rotate: reduceMotion ? 0 : -3 }}
          transition={{ ...springSettle, delay: 0.15 }}
          style={{ y: photoY }}
          className="relative z-0 mx-auto mt-12 w-fit md:absolute md:right-0 md:top-1/2 md:mt-0 md:-translate-y-1/2"
        >
          <div
            className="absolute -inset-4 rounded-[2.5rem] opacity-60 blur-2xl"
            style={{ background: 'rgb(var(--accent-blue-rgb) / 0.3)' }}
            aria-hidden="true"
          />
          <div
            className="glass-surface relative rounded-[2rem] border p-2.5 shadow-2xl"
            style={{ borderColor: 'rgb(var(--accent-blue-rgb) / 0.25)' }}
          >
            {imgError ? (
              <div
                className="flex h-64 w-52 items-center justify-center rounded-[1.5rem] text-4xl font-bold text-white sm:h-72 sm:w-60"
                style={{ backgroundColor: 'var(--accent-blue)' }}
              >
                KM
              </div>
            ) : (
              <img
                src="/images/profile.jpg"
                alt="Kai Men Yip"
                className="h-64 w-52 rounded-[1.5rem] object-cover sm:h-72 sm:w-60"
                onError={() => setImgError(true)}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
