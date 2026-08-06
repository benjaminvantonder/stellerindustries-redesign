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
    <footer className="border-t border-white/5">
      <div className="max-w-content mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="font-display text-xl font-semibold text-paper">
              Steller
            </Link>
            <p className="mt-4 text-sm text-mute leading-relaxed max-w-xs">
              Excellence in sound, lighting, and visual experiences for events across South Africa.
            </p>
          </div>

          <div>
            <p className="text-xs text-mute/60 uppercase tracking-widest mb-4">Navigate</p>
            <ul className="space-y-2">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-mute hover:text-paper transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs text-mute/60 uppercase tracking-widest mb-4">Get in Touch</p>
            <ul className="space-y-3">
              <li className="text-sm text-mute">info@stellerindustries.co.za</li>
              <li className="text-sm text-mute">+27 XX XXX XXXX</li>
              <li className="text-sm text-mute">South Africa</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-xs text-mute/40">
            &copy; {new Date().getFullYear()} Steller Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
