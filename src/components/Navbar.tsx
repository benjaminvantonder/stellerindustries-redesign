import { useState, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/data/constants'
import { ThemeToggle } from './ThemeToggle'
import { springSnappy } from '@/lib/motion'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const toggle = useCallback(() => {
    setMobileOpen(prev => !prev)
  }, [])

  const close = useCallback(() => {
    setMobileOpen(false)
  }, [])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-xl"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3" onClick={close}>
            <div className="relative flex h-8 w-8 items-center justify-center">
              <svg
                viewBox="0 0 256 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
              >
                <path
                  d="M128 20C68.3 20 20 68.3 20 128s48.3 108 108 108 108-48.3 108-108S187.7 20 128 20z"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="fill-transparent text-[var(--color-text)] transition-colors group-hover:text-[var(--color-gold)]"
                />
                <path
                  d="M100 80h20c33.1 0 60 26.9 60 60s-26.9 60-60 60h-20V80zm0 40h20c11 0 20-9 20-20s-9-20-20-20h-20v40z"
                  fill="currentColor"
                  className="text-[var(--color-text)] transition-colors group-hover:text-[var(--color-gold)]"
                />
                <path d="M128 116v24M128 164v4" stroke="currentColor" strokeWidth="3" className="text-[var(--color-gold)]" />
                <circle cx="128" cy="112" r="2" fill="currentColor" className="text-[var(--color-gold)]" />
              </svg>
            </div>
            <span className="font-display text-sm font-light tracking-[0.14em] uppercase text-[var(--color-text)] transition-colors group-hover:text-[var(--color-gold)]">
              Steller
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map(link => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group relative py-1"
                >
                  <span
                    className={`text-xs font-light uppercase tracking-[0.14em] transition-colors duration-300 ${
                      isActive
                        ? 'text-[var(--color-gold)]'
                        : 'text-[var(--color-muted)] group-hover:text-[var(--color-text)]'
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--color-gold)]"
                      layoutId="activeNav"
                      transition={springSnappy}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right side: theme toggle + mobile menu */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={toggle}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition-colors hover:border-[var(--color-gold)] md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--color-bg)]/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, i) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={close}
                      className={`font-display text-3xl font-extralight tracking-tight transition-colors ${
                        isActive ? 'text-[var(--color-gold)]' : 'text-[var(--color-text)]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
