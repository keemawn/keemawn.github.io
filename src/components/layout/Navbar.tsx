import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useThemeStore } from '../../stores/themeStore'
import { easeOut } from '../../lib/motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 12)
  })

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <motion.header
        animate={{
          boxShadow: scrolled
            ? '0 12px 32px -12px hsl(var(--shadow-color) / 0.28)'
            : '0 4px 16px -12px hsl(var(--shadow-color) / 0.12)',
        }}
        transition={{ duration: 0.3, ease: easeOut }}
        className="glass-surface pointer-events-auto w-full max-w-3xl rounded-full border"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="flex h-14 items-center justify-between gap-4 px-4 sm:px-5">
          {/* Logo */}
          <NavLink
            to="/"
            className="shrink-0 text-base font-semibold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Kai Men<span style={{ color: 'var(--accent-blue)' }}>.</span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => {
              const active = isActive(to)
              return (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className="relative px-3 py-1.5 text-sm font-medium transition-colors duration-200"
                  style={{ color: active ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: 'var(--bg-secondary)' }}
                      transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </NavLink>
              )
            })}
          </nav>

          {/* Theme toggle + mobile hamburger */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-[background-color,transform] duration-150 ease-out active:scale-90"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--bg-secondary)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -60, scale: 0.9 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 60, scale: 0.9 }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  className="flex"
                >
                  {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                </motion.span>
              </AnimatePresence>
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-150 ease-out active:scale-90 md:hidden"
              style={{ color: 'var(--text-secondary)' }}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="overflow-hidden border-t md:hidden"
              style={{ borderColor: 'var(--border)' }}
            >
              <nav className="flex flex-col gap-1 px-3 py-3">
                {navLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
                    style={{
                      color: isActive(to) ? 'var(--text-primary)' : 'var(--text-secondary)',
                      backgroundColor: isActive(to) ? 'var(--bg-secondary)' : 'transparent',
                    }}
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  )
}
