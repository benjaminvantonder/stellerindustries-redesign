import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/data/constants'
import { ScrollReveal } from './atmosphere/ScrollReveal'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 bg-[var(--color-bg)] transition-colors duration-600">
      {/* Wavy top transition */}
      <div className="pointer-events-none relative -mb-px w-full overflow-hidden" style={{ height: '80px' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path
            d="M0,64 C200,120 400,0 600,60 C800,120 1000,20 1200,64 L1200,120 L0,120 Z"
            fill="var(--color-bg)"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-12">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <ScrollReveal variant="fade" className="md:col-span-5">
            <Link to="/" className="group inline-block">
              <h3 className="font-display text-2xl font-thin tracking-[0.06em] text-[var(--color-text)] transition-colors duration-500 group-hover:text-[var(--color-gold)]">
                Steller Industries
              </h3>
            </Link>
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-[var(--color-muted)]">
              South Africa's event technology partner. Precision sound, lighting, and visual production.
            </p>
            <motion.div
              className="mt-8 flex gap-2"
              initial={{ width: 0 }}
              whileInView={{ width: 'auto' }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: 'spring', stiffness: 60 }}
            >
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-px rounded-full bg-[var(--color-gold)]" style={{ width: 32 - i * 8, opacity: 1 - i * 0.25 }} />
              ))}
            </motion.div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal variant="fade" delay={0.1} className="md:col-span-3">
            <h4 className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-light text-[var(--color-muted)] transition-colors duration-300 hover:text-[var(--color-gold)]"
                    data-magnetic
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal variant="fade" delay={0.2} className="md:col-span-4">
            <h4 className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-light text-[var(--color-muted)]">
              <li>
                <a href="mailto:info@stellerindustries.co.za" className="transition-colors duration-300 hover:text-[var(--color-gold)]">
                  info@stellerindustries.co.za
                </a>
              </li>
              <li>
                <a href="tel:+27111234567" className="transition-colors duration-300 hover:text-[var(--color-gold)]">
                  +27 11 123 4567
                </a>
              </li>
              <li className="pt-4 text-xs text-[var(--color-muted)]/60">
                Johannesburg, South Africa
              </li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-xs font-light text-[var(--color-muted)]">
            &copy; {year} Steller Industries. All rights reserved.
          </p>
          <p className="text-xs font-light italic text-[var(--color-muted)]/50">
            Precision in every detail.
          </p>
        </div>
      </div>
    </footer>
  )
}
