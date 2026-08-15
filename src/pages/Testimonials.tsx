import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { ScrollReveal, ParallaxSection } from '@/components/atmosphere/ScrollReveal'
import { GlassCard } from '@/components/atmosphere/GlassCard'
import { testimonials } from '@/data/testimonials'
import { staggerOrganic, staggerChild } from '@/lib/motion'

export function Testimonials() {
  const featured = testimonials[0]
  const rest = testimonials.slice(1)

  return (
    <>
      {/* ─── HERO: Center-aligned with dramatic glow ─── */}
      <Hero
        eyebrow="Testimonials"
        title="Words That"
        titleAccent="Speak Volumes"
        description="Our reputation is built on the trust of the people we work with. Here's what they have to say."
        layout="center"
      />

      {/* ─── FEATURED: Full-width atmospheric quote ─── */}
      <section className="relative py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal variant="emerge">
            <GlassCard glow className="relative p-12 md:p-20">
              {/* Decorative bokeh behind quote */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06)_0%,transparent_70%)] blur-[40px]" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,185,94,0.04)_0%,transparent_70%)] blur-[30px]" />
              </div>

              {/* Decorative quote mark */}
              <span className="absolute left-8 top-6 font-display text-[10rem] leading-none text-[var(--color-gold)]/5 select-none">
                &ldquo;
              </span>

              <div className="relative z-10">
                <div className="mb-10 flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-px rounded-full bg-[var(--color-gold)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: 28 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08, type: 'spring', stiffness: 80 }}
                    />
                  ))}
                </div>

                <p className="max-w-3xl font-display text-display-md font-thin italic leading-relaxed text-[var(--color-text)]">
                  {featured.quote}
                </p>

                <div className="mt-12">
                  <p className="text-body font-light text-[var(--color-text)]">{featured.name}</p>
                  <p className="mt-1 text-sm font-extralight text-[var(--color-muted)]">
                    {featured.role}
                    {featured.event && <span className="text-[var(--color-gold)]"> — {featured.event}</span>}
                  </p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── ALL TESTIMONIALS: Floating staggered grid ─── */}
      <ParallaxSection speed={0.08}>
        <section className="relative py-section-lg">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal>
              <p className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[var(--color-gold)]">
                More Testimonials
              </p>
              <h2 className="font-display text-display-lg font-thin tracking-tight text-[var(--color-text)]">
                From our clients
              </h2>
            </ScrollReveal>

            <motion.div
              className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerOrganic}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {rest.map(t => (
                <motion.blockquote key={t.id} variants={staggerChild}>
                  <GlassCard className="flex h-full flex-col">
                    <div className="mb-6 flex gap-1.5">
                      {[...Array(5)].map((_, j) => (
                        <div key={j} className="h-px w-3 rounded-full bg-[var(--color-gold)]" />
                      ))}
                    </div>
                    <p className="flex-1 text-body font-light italic leading-relaxed text-[var(--color-text)]">
                      "{t.quote}"
                    </p>
                    <div className="mt-8">
                      <p className="text-sm font-light text-[var(--color-text)]">{t.name}</p>
                      <p className="text-xs font-extralight text-[var(--color-muted)]">
                        {t.role}
                        {t.event && <span className="text-[var(--color-gold)]"> — {t.event}</span>}
                      </p>
                    </div>
                  </GlassCard>
                </motion.blockquote>
              ))}
            </motion.div>
          </div>
        </section>
      </ParallaxSection>
    </>
  )
}
