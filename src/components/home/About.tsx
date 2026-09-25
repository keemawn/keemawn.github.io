import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, MessageCircle, MapPin } from 'lucide-react'
import { fadeUp, stagger, viewportOnce, springTouch } from '../../lib/motion'

const stats = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'NUS Mechanical Engineering (Hons), 2025',
  },
  {
    icon: Briefcase,
    label: 'Current Role',
    value: 'AI Engineer @ TOFFs Technologies',
  },
  {
    icon: MessageCircle,
    label: 'Languages',
    value: 'English · Mandarin · Cantonese',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Singapore',
  },
]

export default function About() {
  return (
    <section id="about" className="px-4 py-20 md:py-28" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="mx-auto max-w-content">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-12 md:grid-cols-12 md:gap-8"
        >
          <motion.div variants={fadeUp} className="md:col-span-5">
            <h2
              className="text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Engineering foundations, <span className="inline-block pb-1 italic">applied to data.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4 md:col-span-7">
            <p style={{ color: 'var(--text-secondary)' }}>
              I'm Kai Men, a data scientist based in Singapore who started out in mechanical
              engineering and found his true calling at the intersection of AI, data, and product
              thinking.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              My engineering foundation from NUS gave me a systems-level way of thinking that I
              now apply to building intelligent, data-driven solutions. From CNNs for
              manufacturing defect detection at Bosch to multi-agent LLM workflows at TOFFs
              Technologies, I enjoy tackling problems where domain knowledge and cutting-edge ML
              converge.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Outside of work, I'm drawn to financial markets, fitness, and building side projects
              that scratch my own itch. I believe great data science isn't just about models, it's
              about translating complexity into clarity.
            </p>
          </motion.div>

          {/* Spec strip: hairline dividers, no card chrome, values do the talking */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-x-6 gap-y-8 border-t pt-8 sm:grid-cols-4 md:col-span-12"
            style={{ borderColor: 'var(--border)' }}
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                whileHover={{ y: -3, transition: springTouch }}
                className="border-l pl-4"
                style={{ borderColor: 'var(--border)' }}
              >
                <Icon size={17} style={{ color: 'var(--accent-blue)', marginBottom: 10 }} />
                <p
                  className="mb-1 text-xs font-medium uppercase tracking-wider"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {label}
                </p>
                <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
