import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, MessageCircle, MapPin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stats = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'NUS Mechanical Engineering (Hons), 2025',
  },
  {
    icon: Briefcase,
    label: 'Current Role',
    value: 'Data Scientist @ AgileAlgo',
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
    <section
      id="about"
      className="py-20 px-4"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono uppercase tracking-widest mb-2"
            style={{ color: 'var(--accent-blue)' }}
          >
            About Me
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-12"
            style={{ color: 'var(--text-primary)' }}
          >
            A bit about who I am
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio */}
            <motion.div variants={fadeUp} className="space-y-4">
              <p style={{ color: 'var(--text-secondary)' }}>
                I'm Kai Men, a data scientist based in Singapore who started out in mechanical
                engineering and found his true calling at the intersection of AI, data, and product
                thinking.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                My engineering foundation from NUS gave me a systems-level way of thinking that I
                now apply to building intelligent, data-driven solutions. From CNNs for
                manufacturing defect detection at Bosch to multi-agent LLM workflows at AgileAlgo,
                I enjoy tackling problems where domain knowledge and cutting-edge ML converge.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Outside of work, I'm drawn to financial markets, fitness, and building side
                projects that scratch my own itch. I believe great data science isn't just about
                models, it's about translating complexity into clarity.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="p-4 border"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <Icon size={18} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                        {label}
                      </p>
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        {value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
