import { motion } from 'framer-motion'
import { skillCategories, certifications } from '../../data/skills'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'

const clusters = [
  { title: 'Languages & engineering', categoryIds: ['languages', 'web'] },
  { title: 'AI, ML & data', categoryIds: ['ml', 'data', 'graph'] },
  { title: 'Platform & beyond', categoryIds: ['cloud', 'spoken'] },
]

function SkillTag({ name }: { name: string }) {
  return (
    <span
      className="inline-block rounded-full px-2.5 py-1 text-xs font-mono"
      style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)' }}
    >
      {name}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <motion.div variants={stagger(0.06)} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.h2
            variants={fadeUp}
            className="mb-12 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Tools & technologies
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-3 md:gap-0">
            {clusters.map(({ title, categoryIds }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className={`flex flex-col gap-7 md:px-8 ${i === 0 ? 'md:pl-0' : ''} ${
                  i === clusters.length - 1 ? 'md:pr-0' : ''
                } ${i > 0 ? 'border-t pt-8 md:border-l md:border-t-0 md:pt-0' : ''}`}
                style={{ borderColor: 'var(--border)' }}
              >
                <h3 className="text-lg font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  {title}
                </h3>

                {categoryIds.map((id) => {
                  const cat = skillCategories.find((c) => c.id === id)
                  if (!cat) return null
                  return (
                    <div key={id}>
                      <p
                        className="mb-2 text-xs font-medium uppercase tracking-wider"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {cat.title}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((s) => (
                          <SkillTag key={s} name={s} />
                        ))}
                      </div>
                    </div>
                  )
                })}

                {i === clusters.length - 1 && (
                  <div>
                    <p
                      className="mb-2 text-xs font-medium uppercase tracking-wider"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Certifications
                    </p>
                    <ul className="space-y-2">
                      {certifications.map((cert) => (
                        <li key={cert.name} className="text-sm leading-snug" style={{ color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--text-primary)' }}>{cert.name}</span>
                          {' · '}
                          {cert.issuer}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
