import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { experiences } from '../../data/experience'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ExperienceList() {
  return (
    <div className="py-16 px-4" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono uppercase tracking-widest mb-2"
            style={{ color: 'var(--accent-blue)' }}
          >
            Career
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Experience
          </motion.h1>
        </motion.div>

        {/* Cards */}
        <div className="space-y-5">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="p-6 border"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
                borderLeft: '3px solid var(--accent-blue)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-0.5">
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

              <p className="text-sm font-medium mb-1" style={{ color: 'var(--accent-blue)' }}>
                {exp.role}
              </p>

              <div className="flex items-center gap-1 mb-4">
                <MapPin size={12} style={{ color: 'var(--text-muted)' }} />
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {exp.location}
                </span>
              </div>

              <ul className="space-y-1.5">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm flex items-start gap-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span
                      className="mt-2 flex-shrink-0 w-1 h-1 rounded-full"
                      style={{ backgroundColor: 'var(--accent-blue)' }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
