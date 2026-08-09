import { Link, useLocation } from 'react-router-dom'

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

  return (
    <nav className="navbar-scurve">
      <div className="navbar-corner-right" />
      <div className="navbar-corner-right-bite" />

      <div className="flex items-center justify-between">
        {/* Home / Brand */}
        <Link to="/" className="font-display text-lg font-bold text-ink tracking-tight whitespace-nowrap">
          Steller Industries
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-0 flex-wrap">
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
          onClick={() => {
            const menu = document.getElementById('mobile-menu')
            menu?.classList.toggle('hidden')
          }}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden mt-4 pt-4 border-t border-ink/10">
        <ul className="flex flex-col gap-2">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
                className={`nav-link block ${location.pathname === to ? 'active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
