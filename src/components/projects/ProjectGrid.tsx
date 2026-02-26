import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

function TechTag({ name }: { name: string }) {
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

export default function ProjectGrid() {
  const featured = projects.find((p) => p.size === 'large')
  const medium = projects.filter((p) => p.size === 'medium')

  return (
    <div className="py-16 px-4" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono uppercase tracking-widest mb-2"
            style={{ color: 'var(--accent-blue)' }}
          >
            Work
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Projects
          </motion.h1>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Featured — full width */}
          {featured && (
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="md:col-span-2 p-7 border flex flex-col gap-5"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
                borderLeft: '3px solid var(--accent-blue)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span
                    className="text-xs font-mono uppercase tracking-widest"
                    style={{ color: 'var(--accent-blue)' }}
                  >
                    Featured Project
                  </span>
                  <h2
                    className="text-2xl font-bold mt-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-sm font-medium mt-1" style={{ color: 'var(--accent-blue)' }}>
                    {featured.tagline}
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={featured.githubUrl}
                    aria-label="GitHub"
                    className="transition-colors duration-200"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-blue)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)')
                    }
                  >
                    <Github size={20} />
                  </a>
                  {featured.liveUrl && (
                    <a
                      href={featured.liveUrl}
                      aria-label="Live demo"
                      className="transition-colors duration-200"
                      style={{ color: 'var(--text-muted)' }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-blue)')
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)')
                      }
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {featured.techTags.map((tag) => (
                  <TechTag key={tag} name={tag} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Medium projects */}
          {medium.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 border flex flex-col gap-4"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent-blue)' }}>
                    {project.tagline}
                  </p>
                  {project.period && (
                    <p className="text-xs font-mono mt-1" style={{ color: 'var(--text-muted)' }}>
                      {project.period}
                    </p>
                  )}
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <a
                    href={project.githubUrl}
                    aria-label="GitHub"
                    className="transition-colors duration-200"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-blue)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)')
                    }
                  >
                    <Github size={18} />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      aria-label="Live demo"
                      className="transition-colors duration-200"
                      style={{ color: 'var(--text-muted)' }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-blue)')
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)')
                      }
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techTags.map((tag) => (
                  <TechTag key={tag} name={tag} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
