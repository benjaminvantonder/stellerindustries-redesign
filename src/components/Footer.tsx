import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink/10">
      <div className="max-w-content mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div>
            <Link to="/" className="font-display text-xl font-bold text-ink tracking-tight">
              Steller
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              Sound. Light. Vision. Excellence in event production across South Africa.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <ul className="space-y-2.5">
                {footerLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-muted hover:text-ink transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:info@stellerindustries.co.za"
                    className="text-sm text-muted hover:text-ink transition-colors duration-200"
                  >
                    info@stellerindustries.co.za
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/27000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-ink transition-colors duration-200"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="text-sm text-muted/50">South Africa</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs text-muted/40">
            &copy; {new Date().getFullYear()} Steller Industries
          </p>
        </div>
      </div>
    </footer>
  )
}
