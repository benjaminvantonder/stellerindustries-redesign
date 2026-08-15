import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { ScrollReveal, ParallaxSection } from '@/components/atmosphere/ScrollReveal'
import { GlassCard } from '@/components/atmosphere/GlassCard'
import { portfolio } from '@/data/portfolio'
import { staggerOrganic, staggerChild } from '@/lib/motion'

export function Work() {
  const featured = portfolio.filter(p => p.featured)
  const rest = portfolio.filter(p => !p.featured)

  return (
    <>
      {/* ─── HERO: Asymmetric offset ─── */}
      <Hero
        eyebrow="Work"
        title="Projects That"
        titleAccent="Define Standards"
        description="Every event is a technical puzzle. We solve it with precision engineering, creative problem-solving, and relentless attention to detail."
      />

      {/* ─── FEATURED: Full-bleed floating gallery ─── */}
      <section className="relative py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Featured
            </p>
            <h2 className="font-display text-display-lg font-thin tracking-tight text-[var(--color-text)]">
              Selected projects
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {featured.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.12}>
                <GlassCard glow>
                  <div className="glow-container aspect-[4/3] overflow-hidden rounded-2xl bg-white/[0.02]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover opacity-65 transition-all duration-700 hover:scale-105 hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                        {item.category}
                      </p>
                      <span className="font-mono text-xs text-[var(--color-muted)]/50">{item.year}</span>
                    </div>
                    <h3 className="mt-3 font-display text-display-sm font-thin text-[var(--color-text)]" data-magnetic>
                      {item.title}
                    </h3>
                    <p className="mt-3 text-body font-light text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ARCHIVE: Staggered organic grid ─── */}
      <ParallaxSection speed={0.08}>
        <section className="relative py-section-lg">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal>
              <p className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[var(--color-gold)]">
                Archive
              </p>
              <h2 className="font-display text-display-lg font-thin tracking-tight text-[var(--color-text)]">
                All projects
              </h2>
            </ScrollReveal>

            <motion.div
              className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerOrganic}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {rest.map(item => (
                <motion.article key={item.id} variants={staggerChild}>
                  <GlassCard>
                    <div className="glow-container aspect-[3/2] overflow-hidden rounded-xl bg-white/[0.02]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover opacity-60 transition-all duration-700 hover:scale-105 hover:opacity-100"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-5">
                      <div className="flex items-center justify-between">
                        <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                          {item.category}
                        </p>
                        <span className="font-mono text-xs text-[var(--color-muted)]/50">{item.year}</span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-thin text-[var(--color-text)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-light text-[var(--color-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </ParallaxSection>
    </>
  )
}
