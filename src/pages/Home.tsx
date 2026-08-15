import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Hero } from '@/components/Hero'
import { ScrollReveal, ParallaxSection } from '@/components/atmosphere/ScrollReveal'
import { GlassCard } from '@/components/atmosphere/GlassCard'
import { services } from '@/data/services'
import { portfolio } from '@/data/portfolio'
import { testimonials } from '@/data/testimonials'
import { STATS, PROCESS_STEPS } from '@/data/constants'
import { staggerOrganic, staggerChild } from '@/lib/motion'

export function Home() {
  return (
    <>
      {/* ─── HERO: Asymmetric split with bokeh ─── */}
      <Hero
        eyebrow="South Africa's Event Technology Partner"
        title="Precision Sound,"
        titleAccent="Lighting & Visual Production"
        description="We engineer the technical backbone of South Africa's most demanding events. Sound, lighting, photography, videography — executed with precision, zero compromise."
      >
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-10 py-4 text-xs font-normal uppercase tracking-[0.14em] text-black transition-all duration-500 hover:bg-[var(--color-gold-light)] hover:shadow-[0_0_40px_rgba(201,168,76,0.2)]"
            data-magnetic
          >
            Start a Project
            <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-10 py-4 text-xs font-extralight uppercase tracking-[0.14em] text-[var(--color-muted)] backdrop-blur-lg transition-all duration-500 hover:bg-white/[0.08] hover:text-[var(--color-gold)]"
            data-magnetic
          >
            View Our Work
          </Link>
        </div>
      </Hero>

      {/* ─── PROBLEM → OUTCOME: Floating asymmetric columns ─── */}
      <section className="relative py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-20 lg:grid-cols-12 lg:gap-8">
            <ScrollReveal variant="drift-left" className="lg:col-span-5">
              <p className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[var(--color-gold)]">
                The Challenge
              </p>
              <h2 className="font-display text-display-lg font-thin tracking-tight text-[var(--color-text)]">
                Most events fail on technical execution.
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="drift-right" className="lg:col-span-5 lg:col-start-8">
              <p className="text-body-xl font-light leading-relaxed text-[var(--color-muted)]">
                Poor sound kills atmosphere. Bad lighting kills mood. Technical failures kill momentum.
                Your audience deserves seamless. Your brand demands precision.
              </p>
              <p className="mt-8 text-body-xl font-light leading-relaxed text-[var(--color-muted)]">
                We don't just set up equipment. We engineer experiences where every cue, every light change, every mix is intentional.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── STATS: Floating glass pills ─── */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
            variants={staggerOrganic}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STATS.map(stat => (
              <motion.div key={stat.label} variants={staggerChild}>
                <GlassCard className="text-center">
                  <p className="font-display text-display-md font-thin text-[var(--color-gold)]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    {stat.label}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES: Stacked floating rows ─── */}
      <section className="relative py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Disciplines
            </p>
            <h2 className="font-display text-display-lg font-thin tracking-tight text-[var(--color-text)]">
              Five disciplines.<br />One standard.
            </h2>
          </ScrollReveal>

          <div className="mt-16 space-y-4">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.06}>
                <GlassCard glow>
                  <div className="grid gap-6 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-1">
                      <span className="font-mono text-lg text-[var(--color-gold)]/20">0{i + 1}</span>
                    </div>
                    <h3 className="font-display text-display-sm font-thin text-[var(--color-text)] md:col-span-5" data-magnetic>
                      {service.title}
                    </h3>
                    <p className="text-body font-light text-[var(--color-muted)] md:col-span-5">
                      {service.description}
                    </p>
                    <div className="hidden md:col-span-1 md:flex md:justify-end">
                      <ArrowUpRight size={16} strokeWidth={1} className="text-[var(--color-muted)]/40 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-gold)]" />
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED WORK: Floating asymmetric gallery ─── */}
      <ParallaxSection speed={0.15}>
        <section className="relative py-section-lg">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal>
              <div className="flex items-end justify-between">
                <div>
                  <p className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[var(--color-gold)]">
                    Selected Work
                  </p>
                  <h2 className="font-display text-display-lg font-thin tracking-tight text-[var(--color-text)]">
                    Recent projects
                  </h2>
                </div>
                <Link
                  to="/work"
                  className="hidden items-center gap-2 text-xs font-extralight uppercase tracking-[0.14em] text-[var(--color-muted)] transition-colors duration-300 hover:text-[var(--color-gold)] md:inline-flex"
                >
                  View all
                  <ArrowUpRight size={14} strokeWidth={1} />
                </Link>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid gap-10 md:grid-cols-2">
              {portfolio.filter(p => p.featured).map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 0.1}>
                  <GlassCard glow>
                    <div className="glow-container aspect-[4/3] overflow-hidden rounded-xl bg-white/[0.02]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover opacity-70 transition-all duration-700 hover:scale-105 hover:opacity-100"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-thin text-[var(--color-text)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-light text-[var(--color-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* ─── TESTIMONIALS: Floating organic quotes ─── */}
      <section className="relative py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Testimonials
            </p>
            <h2 className="font-display text-display-lg font-thin tracking-tight text-[var(--color-text)]">
              Trusted by the best
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.1}>
                <GlassCard>
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="h-px w-4 rounded-full bg-[var(--color-gold)]" />
                    ))}
                  </div>
                  <p className="flex-1 text-body-lg font-light italic leading-relaxed text-[var(--color-text)]">
                    "{t.quote}"
                  </p>
                  <div className="mt-8">
                    <p className="text-sm font-light text-[var(--color-text)]">{t.name}</p>
                    <p className="text-xs font-extralight text-[var(--color-muted)]">{t.role}</p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS: Floating orbs ─── */}
      <section className="relative py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Process
            </p>
            <h2 className="font-display text-display-lg font-thin tracking-tight text-[var(--color-text)]">
              How we work
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <GlassCard glow>
                  <span className="font-mono text-display-sm text-[var(--color-gold)]/20">{step.step}</span>
                  <h3 className="mt-6 font-display text-xl font-thin text-[var(--color-text)]">{step.title}</h3>
                  <p className="mt-4 text-body font-light text-[var(--color-muted)]">{step.text}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA: Centered atmospheric glow ─── */}
      <section className="relative overflow-hidden py-section-xl">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)] blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-12">
          <ScrollReveal variant="emerge">
            <h2 className="font-display text-display-xl font-thin tracking-tight text-[var(--color-text)]">
              Ready to elevate<br />your next event?
            </h2>
            <p className="mx-auto mt-8 max-w-lg text-body-xl font-light text-[var(--color-muted)]">
              Let's discuss your vision. We'll engineer the technical foundation to make it extraordinary.
            </p>
            <Link
              to="/contact"
              className="group mt-12 inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-12 py-5 text-xs font-normal uppercase tracking-[0.14em] text-black transition-all duration-500 hover:bg-[var(--color-gold-light)] hover:shadow-[0_0_60px_rgba(201,168,76,0.25)]"
              data-magnetic
            >
              Get in Touch
              <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
