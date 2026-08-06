import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-md border-b border-signal/10">
      <nav className="max-w-content mx-auto px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold text-paper tracking-tight">
          Steller
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                  location.pathname === to
                    ? 'text-signal'
                    : 'text-mute hover:text-paper'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-paper p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-ink/95 backdrop-blur-lg border-t border-signal/10">
          <ul className="flex flex-col px-8 py-6 gap-4">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={`font-mono text-xs tracking-widest uppercase block py-2 transition-colors duration-200 ${
                    location.pathname === to
                      ? 'text-signal'
                      : 'text-mute hover:text-paper'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
