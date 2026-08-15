import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { ScrollReveal } from '@/components/ScrollReveal'
import { testimonials } from '@/data/testimonials'
import { lightSourceHover, staggerContainer, staggerItem } from '@/lib/motion'

export function Testimonials() {
  const featured = testimonials[0]
  const rest = testimonials.slice(1)

  return (
    <>
      <Hero
        eyebrow="Testimonials"
        title="Words That"
        titleAccent="Speak Volumes"
        description="Our reputation is built on the trust of the people we work with. Here's what they have to say."
      />

      {/* ─── FEATURED TESTIMONIAL ─── */}
      <section className="py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal variant="scale">
            <motion.blockquote
              className="relative rounded-sm border border-[var(--color-border)] p-12 transition-colors hover:border-[var(--color-gold)] md:p-16"
              whileHover="hover"
              variants={lightSourceHover}
            >
              {/* Decorative quote mark */}
              <span className="absolute left-8 top-8 font-display text-[8rem] leading-none text-[var(--color-gold)]/10 select-none">
                &ldquo;
              </span>

              <div className="relative z-10">
                <div className="mb-8 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-px w-6 bg-[var(--color-gold)]" />
                  ))}
                </div>

                <p className="max-w-3xl font-display text-display-md font-extralight italic leading-relaxed text-[var(--color-text)]">
                  {featured.quote}
                </p>

                <footer className="mt-10 border-t border-[var(--color-border)] pt-6">
                  <p className="text-body font-light text-[var(--color-text)]">
                    {featured.name}
                  </p>
                  <p className="text-sm font-light text-[var(--color-muted)]">
                    {featured.role}
                    {featured.event && <span className="text-[var(--color-gold)]"> — {featured.event}</span>}
                  </p>
                </footer>
              </div>
            </motion.blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── ALL TESTIMONIALS ─── */}
      <section className="py-section bg-[var(--color-surface)] transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
              More Testimonials
            </p>
            <h2 className="mt-4 font-display text-display-lg font-extralight tracking-tight text-[var(--color-text)]">
              From our clients
            </h2>
          </ScrollReveal>

          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {rest.map(t => (
              <motion.blockquote
                key={t.id}
                variants={staggerItem}
                className="flex h-full flex-col rounded-sm border border-[var(--color-border)] p-8 transition-colors hover:border-[var(--color-gold)]"
                whileHover="hover"
              >
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="h-px w-3 bg-[var(--color-gold)]" />
                  ))}
                </div>
                <p className="flex-1 text-body font-light italic leading-relaxed text-[var(--color-text)]">
                  "{t.quote}"
                </p>
                <footer className="mt-8 border-t border-[var(--color-border)] pt-4">
                  <p className="text-sm font-light text-[var(--color-text)]">{t.name}</p>
                  <p className="text-xs font-light text-[var(--color-muted)]">
                    {t.role}
                    {t.event && <span className="text-[var(--color-gold)]"> — {t.event}</span>}
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
