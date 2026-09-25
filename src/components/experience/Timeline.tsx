import { useRef } from 'react'
import { motion, useScroll, useReducedMotion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { experiences } from '../../data/experience'
import { fadeUp, stagger, viewportOnce, easeOut, springTouch } from '../../lib/motion'

export default function ExperienceList() {
  const listRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 0.2', 'end 0.85'],
  })

  return (
    <div className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.08)}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="mb-2 text-sm font-medium uppercase tracking-[0.14em]"
            style={{ color: 'var(--accent-blue)' }}
          >
            Career
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Experience
          </motion.h1>
        </motion.div>

        {/* Timeline */}
        <div ref={listRef} className="relative">
          <div
            className="absolute left-[7px] top-1 bottom-1 w-px"
            style={{ backgroundColor: 'var(--border)' }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-[7px] top-1 w-px origin-top"
            style={{
              backgroundColor: 'var(--accent-blue)',
              scaleY: reduceMotion ? 1 : scrollYProgress,
              bottom: '0.25rem',
            }}
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease: easeOut, delay: (idx % 4) * 0.05 }}
                className="relative pl-9"
              >
                <span
                  className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px]"
                  style={{ borderColor: 'var(--accent-blue)', backgroundColor: 'var(--bg-primary)' }}
                  aria-hidden="true"
                />

                <motion.div
                  whileHover={{ y: -3, transition: springTouch }}
                  className="rounded-card border p-6"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                    boxShadow: '0 2px 16px -4px hsl(var(--shadow-color) / 0.12)',
                  }}
                >
                  <div className="mb-0.5 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} style={{ color: 'var(--text-muted)' }} />
                      <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="mb-1 text-sm font-medium" style={{ color: 'var(--accent-blue)' }}>
                    {exp.role}
                  </p>

                  <div className="mb-4 flex items-center gap-1">
                    <MapPin size={12} style={{ color: 'var(--text-muted)' }} />
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: 'var(--accent-blue)' }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
