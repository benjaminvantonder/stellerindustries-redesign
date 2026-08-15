import { useState, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/data/constants'
import { ThemeToggle } from './ThemeToggle'
import { springFluid } from '@/lib/motion'

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
        className="fixed top-0 left-0 right-0 z-50 glass"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 60, damping: 20 }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3" onClick={close}>
            <div className="relative flex h-8 w-8 items-center justify-center">
              <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path
                  d="M128 20C68.3 20 20 68.3 20 128s48.3 108 108 108 108-48.3 108-108S187.7 20 128 20z"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="fill-transparent text-[var(--color-text)] transition-colors duration-500 group-hover:text-[var(--color-gold)]"
                />
                <path
                  d="M100 80h20c33.1 0 60 26.9 60 60s-26.9 60-60 60h-20V80zm0 40h20c11 0 20-9 20-20s-9-20-20-20h-20v40z"
                  fill="currentColor"
                  className="text-[var(--color-text)] transition-colors duration-500 group-hover:text-[var(--color-gold)]"
                />
                <path d="M128 116v24M128 164v4" stroke="currentColor" strokeWidth="3" className="text-[var(--color-gold)]" />
                <circle cx="128" cy="112" r="2" fill="currentColor" className="text-[var(--color-gold)]" />
              </svg>
            </div>
            <span className="font-display text-sm font-extralight tracking-[0.14em] uppercase text-[var(--color-text)] transition-colors duration-500 group-hover:text-[var(--color-gold)]">
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
                  data-magnetic
                >
                  <span
                    className={`text-xs font-extralight uppercase tracking-[0.14em] transition-colors duration-500 ${
                      isActive
                        ? 'text-[var(--color-gold)]'
                        : 'text-[var(--color-muted)] group-hover:text-[var(--color-text)]'
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent"
                      layoutId="activeNav"
                      transition={springFluid}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={toggle}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-[var(--color-text)] backdrop-blur-lg transition-all duration-300 hover:bg-white/[0.1] md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} strokeWidth={1} /> : <Menu size={16} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--color-bg)]/95 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(20px)' }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 60, damping: 20 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-10">
              {NAV_LINKS.map((link, i) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                    transition={{ delay: i * 0.06, type: 'spring', stiffness: 80, damping: 20 }}
                  >
                    <Link
                      to={link.path}
                      onClick={close}
                      className={`font-display text-4xl font-thin tracking-tight transition-colors duration-500 ${
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
