import {
  type LucideIcon,
  Code2,
  Brain,
  BarChart3,
  Network,
  Cloud,
  Globe,
  Languages,
  GraduationCap,
  CheckCircle2,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { skillCategories, certifications } from '../../data/skills'

const categoryIcons: Record<string, LucideIcon> = {
  languages: Code2,
  ml: Brain,
  data: BarChart3,
  graph: Network,
  cloud: Cloud,
  web: Globe,
  spoken: Languages,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

function SkillTag({ name }: { name: string }) {
  return (
    <span
      className="inline-block px-2 py-0.5 text-xs font-mono border"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border)',
        color: 'var(--text-secondary)',
      }}
    >
      {name}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono uppercase tracking-widest mb-2"
            style={{ color: 'var(--accent-blue)' }}
          >
            Skills
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-12"
            style={{ color: 'var(--text-primary)' }}
          >
            Tools & Technologies
          </motion.h2>

          {/* Bento grid — magazine-style, non-uniform */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
            {/* Core Languages — large hero cell, col-span-2 row-span-2 */}
            {skillCategories
              .filter((c) => c.id === 'languages')
              .map((cat) => {
                const Icon = categoryIcons[cat.id]
                return (
                  <motion.div
                    key={cat.id}
                    variants={fadeUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="lg:col-span-2 lg:row-span-2 p-6 border flex flex-col gap-4"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div>
                      <Icon size={28} style={{ color: 'var(--accent-blue)', marginBottom: '8px' }} />
                      <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {cat.title}
                      </h3>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                        Primary stack
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {cat.skills.map((s) => (
                        <SkillTag key={s} name={s} />
                      ))}
                    </div>
                  </motion.div>
                )
              })}

            {/* AI / ML Frameworks — large cell, col-span-2 row-span-2 */}
            {skillCategories
              .filter((c) => c.id === 'ml')
              .map((cat) => {
                const Icon = categoryIcons[cat.id]
                return (
                  <motion.div
                    key={cat.id}
                    variants={fadeUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="lg:col-span-2 lg:row-span-2 p-6 border flex flex-col gap-4"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                      borderLeft: '3px solid var(--accent-blue)',
                    }}
                  >
                    <div>
                      <Icon size={28} style={{ color: 'var(--accent-blue)', marginBottom: '8px' }} />
                      <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {cat.title}
                      </h3>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                        Core specialisation
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {cat.skills.map((s) => (
                        <SkillTag key={s} name={s} />
                      ))}
                    </div>
                  </motion.div>
                )
              })}

            {/* Data & Viz — col-span-2 */}
            {skillCategories
              .filter((c) => c.id === 'data')
              .map((cat) => {
                const Icon = categoryIcons[cat.id]
                return (
                  <motion.div
                    key={cat.id}
                    variants={fadeUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="lg:col-span-2 p-5 border flex flex-col gap-3"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={16} style={{ color: 'var(--accent-blue)' }} />
                      <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {cat.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((s) => (
                        <SkillTag key={s} name={s} />
                      ))}
                    </div>
                  </motion.div>
                )
              })}

            {/* Graph & Networks — col-span-2 */}
            {skillCategories
              .filter((c) => c.id === 'graph')
              .map((cat) => {
                const Icon = categoryIcons[cat.id]
                return (
                  <motion.div
                    key={cat.id}
                    variants={fadeUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="lg:col-span-2 p-5 border flex flex-col gap-3"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={16} style={{ color: 'var(--accent-blue)' }} />
                      <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {cat.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((s) => (
                        <SkillTag key={s} name={s} />
                      ))}
                    </div>
                  </motion.div>
                )
              })}

            {/* Cloud & DB, Web & Dev, Spoken — col-span-1 each */}
            {skillCategories
              .filter((c) => ['cloud', 'web', 'spoken'].includes(c.id))
              .map((cat) => {
                const Icon = categoryIcons[cat.id]
                return (
                  <motion.div
                    key={cat.id}
                    variants={fadeUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="p-5 border flex flex-col gap-3"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={16} style={{ color: 'var(--accent-blue)' }} />
                      <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {cat.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((s) => (
                        <SkillTag key={s} name={s} />
                      ))}
                    </div>
                  </motion.div>
                )
              })}

            {/* Certifications — col-span-1 */}
            <motion.div
              variants={fadeUp}
              className="p-5 border flex flex-col gap-3"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                borderLeft: '3px solid var(--accent-blue)',
              }}
            >
              <div className="flex items-center gap-2">
                <GraduationCap size={16} style={{ color: 'var(--accent-blue)' }} />
                <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Certifications
                </h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '3px' }}
                    />
                    <div>
                      <p
                        className="text-xs font-medium leading-snug"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {cert.name}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {cert.issuer}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
