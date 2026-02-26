import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useThemeStore } from '../../stores/themeStore'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const getLinkClass = (to: string) => {
    const isActive =
      to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)
    return [
      'relative text-sm font-medium transition-colors duration-200 pb-1',
      isActive
        ? 'text-accent-blue border-b-2 border-accent-blue'
        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
    ].join(' ')
  }

  return (
    <header
      className="sticky top-0 z-50 h-16 backdrop-blur-sm border-b"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--bg-primary) 85%, transparent)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-lg font-bold tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          Kai Men
          <span className="text-accent-blue">.</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} className={getLinkClass(to)} end={to === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Theme toggle + mobile hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-none transition-colors duration-200 hover:bg-[var(--bg-secondary)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2 transition-colors duration-200 hover:bg-[var(--bg-secondary)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderColor: 'var(--border)',
            }}
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      'px-3 py-2 text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'text-accent-blue bg-[var(--bg-secondary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]',
                    ].join(' ')
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
