import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/catalog', label: 'Catalog' },
  { to: '/authors', label: 'Authors' },
  { to: '/journal', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md">
      <nav className="max-w-content mx-auto px-8 h-20 flex items-center justify-between border-b border-ink/10">
        <Link to="/" className="font-display text-xl font-semibold text-ink tracking-editorial uppercase">
          Meridian
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-sm tracking-editorial transition-colors duration-200 ${
                  location.pathname === to
                    ? 'text-terracotta'
                    : 'text-warmgray hover:text-ink'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-ink p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-lg border-b border-ink/10">
          <ul className="flex flex-col px-8 py-4 gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm tracking-editorial block py-3 transition-colors duration-200 ${
                    location.pathname === to
                      ? 'text-terracotta'
                      : 'text-warmgray hover:text-ink'
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
