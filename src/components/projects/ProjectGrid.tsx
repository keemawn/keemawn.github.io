import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../../data/projects'
import { fadeUp, stagger, viewportOnce, springTouch } from '../../lib/motion'

const tintedBg = 'linear-gradient(150deg, var(--bg-card), rgb(var(--accent-blue-rgb) / 0.1))'

function TechTag({ name }: { name: string }) {
  return (
    <span
      className="inline-block rounded-full px-2.5 py-1 text-xs font-mono"
      style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
    >
      {name}
    </span>
  )
}

function ProjectLinks({ githubUrl, liveUrl }: { githubUrl: string; liveUrl?: string }) {
  const linkStyle = { color: 'var(--text-muted)' }
  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-blue)'
  }
  const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'
  }
  return (
    <div className="flex shrink-0 gap-3">
      <a href={githubUrl} aria-label="GitHub" className="transition-colors duration-200" style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <Github size={19} />
      </a>
      {liveUrl && (
        <a href={liveUrl} aria-label="Live demo" className="transition-colors duration-200" style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <ExternalLink size={19} />
        </a>
      )}
    </div>
  )
}

export default function ProjectGrid() {
  const featured = projects.find((p) => p.size === 'large')
  const rest = projects.filter((p) => p.size !== 'large')

  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-content px-4">
        <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="mb-16">
          <motion.h1 variants={fadeUp} className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Projects
          </motion.h1>
        </motion.div>

        {/* Featured spotlight */}
        {featured && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            whileHover={{ y: -4, transition: springTouch }}
            className="mb-6 flex flex-col gap-5 rounded-card p-7 md:p-9"
            style={{ background: tintedBg, boxShadow: '0 4px 24px -6px hsl(var(--shadow-color) / 0.16)' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.14em]" style={{ color: 'var(--accent-blue)' }}>
                  Featured Project
                </span>
                <h2 className="mt-1 text-2xl font-bold md:text-3xl" style={{ color: 'var(--text-primary)' }}>
                  {featured.title}
                </h2>
                <p className="mt-1 text-sm font-medium" style={{ color: 'var(--accent-blue)' }}>
                  {featured.tagline}
                </p>
              </div>
              <ProjectLinks githubUrl={featured.githubUrl} liveUrl={featured.liveUrl} />
            </div>

            <p className="max-w-2xl text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {featured.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {featured.techTags.map((tag) => (
                <TechTag key={tag} name={tag} />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Remaining projects: horizontal, snap-scrolling rail (bleeds to the
          viewport edge so it reads as a scrollable shelf, not a cut-off grid) */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.08)}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-[max(1rem,calc((100vw-1240px)/2))]"
      >
        {rest.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            whileHover={{ y: -4, transition: springTouch }}
            className="flex w-[82vw] shrink-0 snap-start flex-col gap-4 rounded-card border p-6 sm:w-[360px]"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border)',
              boxShadow: '0 2px 16px -4px hsl(var(--shadow-color) / 0.12)',
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <p className="mt-0.5 text-sm font-medium" style={{ color: 'var(--accent-blue)' }}>
                  {project.tagline}
                </p>
                {project.period && (
                  <p className="mt-1 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    {project.period}
                  </p>
                )}
              </div>
              <ProjectLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
            </div>

            <p className="flex-1 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
  )
}
