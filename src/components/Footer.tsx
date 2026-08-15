import { Link } from 'react-router-dom'
import { NAV_LINKS } from '@/data/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="group inline-block">
              <h3 className="font-display text-xl font-extralight tracking-[0.08em] text-[var(--color-text)] transition-colors group-hover:text-[var(--color-gold)]">
                Steller Industries
              </h3>
            </Link>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-[var(--color-muted)]">
              South Africa's event technology partner. Precision sound, lighting, and visual production.
            </p>
            <div className="mt-6 flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-px w-8 bg-[var(--color-gold)]" style={{ opacity: 1 - i * 0.25 }} />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-light text-[var(--color-muted)] transition-colors hover:text-[var(--color-gold)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="mb-4 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Contact
            </h4>
            <ul className="space-y-2 text-sm font-light text-[var(--color-muted)]">
              <li>
                <a href="mailto:info@stellerindustries.co.za" className="transition-colors hover:text-[var(--color-gold)]">
                  info@stellerindustries.co.za
                </a>
              </li>
              <li>
                <a href="tel:+27111234567" className="transition-colors hover:text-[var(--color-gold)]">
                  +27 11 123 4567
                </a>
              </li>
              <li className="pt-2 text-xs text-[var(--color-muted)]/60">
                Johannesburg, South Africa
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row">
          <p className="text-xs font-light text-[var(--color-muted)]">
            &copy; {year} Steller Industries. All rights reserved.
          </p>
          <p className="text-xs font-light text-[var(--color-muted)]/60">
            Precision in every detail.
          </p>
        </div>
      </div>
    </footer>
  )
}
