import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Start' },
  { to: '/services', label: 'Online-Kurs' },
  { to: '/about', label: 'Design Beratung' },
  { to: '/work', label: "It's me, hi" },
  { to: '/testimonials', label: 'Referenzen' },
  { to: '/contact', label: 'Kontakt' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar-scurve">
      <div className="navbar-corner-right" />
      <div className="navbar-corner-right-bite" />

      <ul className="flex items-center justify-center gap-0 flex-wrap">
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
    </nav>
  )
}
