import { NavLink } from 'react-router-dom'
import { Mail, Linkedin } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t px-4 py-12" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-content mx-auto flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <NavLink
            to="/"
            className="text-base font-semibold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Kai Men<span style={{ color: 'var(--accent-blue)' }}>.</span>
          </NavLink>
          <p className="mt-2 max-w-xs text-sm" style={{ color: 'var(--text-muted)' }}>
            Data scientist building intelligent systems out of Singapore.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-blue)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)')}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:yipkaimen@yahoo.com"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-blue)'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent-blue)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
            }}
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/yipkaimen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-blue)'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent-blue)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
            }}
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      <div
        className="max-w-content mx-auto mt-8 border-t pt-6 text-xs"
        style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
      >
        © {new Date().getFullYear()} Yip Kai Men. Singapore.
      </div>
    </footer>
  )
}
