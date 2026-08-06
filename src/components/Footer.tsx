import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-signal/10 bg-ink/40 backdrop-blur-sm">
      <div className="max-w-content mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-xl font-semibold text-paper">
              Steller
            </Link>
            <p className="mt-3 text-sm text-mute leading-relaxed max-w-xs">
              Excellence in sound, lighting, and visual experiences for events across South Africa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label">Navigate</p>
            <ul className="mt-4 space-y-2">
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

          {/* Contact */}
          <div>
            <p className="section-label">Get in Touch</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-mute">
                <Mail size={14} className="text-signal/60" />
                info@stellerindustries.co.za
              </li>
              <li className="flex items-center gap-2 text-sm text-mute">
                <Phone size={14} className="text-signal/60" />
                +27 XX XXX XXXX
              </li>
              <li className="flex items-center gap-2 text-sm text-mute">
                <MapPin size={14} className="text-signal/60" />
                South Africa
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-signal/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] tracking-wider text-mute/60">
            &copy; {new Date().getFullYear()} Steller Industries. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-wider text-mute/40">
            SIGNAL CHAIN v1.0
          </p>
        </div>
      </div>
    </footer>
  )
}
