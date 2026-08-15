import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { ScrollReveal } from '@/components/ScrollReveal'
import { portfolio } from '@/data/portfolio'
import { lightSourceHover, staggerContainer, staggerItem } from '@/lib/motion'

export function Work() {
  const featured = portfolio.filter(p => p.featured)
  const rest = portfolio.filter(p => !p.featured)

  return (
    <>
      <Hero
        eyebrow="Work"
        title="Projects That"
        titleAccent="Define Standards"
        description="Every event is a technical puzzle. We solve it with precision engineering, creative problem-solving, and relentless attention to detail."
      />

      {/* ─── FEATURED ─── */}
      <section className="py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
              Featured
            </p>
            <h2 className="mt-4 font-display text-display-lg font-extralight tracking-tight text-[var(--color-text)]">
              Selected projects
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {featured.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <motion.article
                  className="group relative overflow-hidden rounded-sm border border-[var(--color-border)] transition-colors hover:border-[var(--color-gold)]"
                  whileHover="hover"
                  variants={lightSourceHover}
                >
                  <div className="glow-container aspect-[4/3] bg-[var(--color-surface-raised)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover opacity-80 transition-all duration-600 group-hover:scale-105 group-hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                        {item.category}
                      </p>
                      <span className="font-mono text-xs text-[var(--color-muted)]">{item.year}</span>
                    </div>
                    <h3 className="mt-3 font-display text-display-sm font-extralight text-[var(--color-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-body font-light text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALL PROJECTS GRID ─── */}
      <section className="py-section bg-[var(--color-surface)] transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
              Archive
            </p>
            <h2 className="mt-4 font-display text-display-lg font-extralight tracking-tight text-[var(--color-text)]">
              All projects
            </h2>
          </ScrollReveal>

          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {rest.map(item => (
              <motion.article
                key={item.id}
                variants={staggerItem}
                className="group overflow-hidden rounded-sm border border-[var(--color-border)] transition-colors hover:border-[var(--color-gold)]"
                whileHover="hover"
              >
                <div className="glow-container aspect-[3/2] bg-[var(--color-surface-raised)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-80 transition-all duration-600 group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                      {item.category}
                    </p>
                    <span className="font-mono text-xs text-[var(--color-muted)]">{item.year}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-extralight text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
