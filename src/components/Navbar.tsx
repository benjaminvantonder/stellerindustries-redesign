import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navVariants = {
    top: {
      width: '100%',
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      paddingTop: 18,
      paddingBottom: 18,
      paddingLeft: 32,
      paddingRight: 32,
      borderRadius: 0,
      boxShadow: 'none',
    },
    scrolled: {
      width: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 16,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 24,
      paddingRight: 24,
      borderRadius: 9999,
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    },
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-surface border-2 border-ink overflow-visible"
      initial="top"
      animate={scrolled ? 'scrolled' : 'top'}
      variants={navVariants}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* S-curve corners — only visible in top state, hidden when scrolled */}
      {!scrolled && (
        <>
          {/* Top-left convex bump */}
          <div className="absolute -top-3 -left-[2px] w-6 h-6 rounded-full bg-surface border-2 border-ink border-b-0 border-r-0 z-10" />
          {/* Top-left concave bite */}
          <div className="absolute -top-3 left-[10px] w-6 h-6 rounded-full bg-cream z-20" />
          {/* Top-right convex bump */}
          <div className="absolute -top-3 -right-[2px] w-6 h-6 rounded-full bg-surface border-2 border-ink border-b-0 border-l-0 z-10" />
          {/* Top-right concave bite */}
          <div className="absolute -top-3 right-[10px] w-6 h-6 rounded-full bg-cream z-20" />
        </>
      )}

      <div className="flex items-center justify-between">
        {/* Home / Brand */}
        <Link to="/" className="font-display text-lg font-bold text-ink tracking-tight whitespace-nowrap">
          Steller Industries
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-0">
          {navLinks.map(({ to, label }, i) => (
            <li key={to} className="flex items-center">
              {i > 0 && <span className="nav-pipe mx-2">|</span>}
              <Link
                to={to}
                className={`nav-link ${location.pathname === to ? 'active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ink p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-ink/10">
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`nav-link block ${location.pathname === to ? 'active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  )
}
