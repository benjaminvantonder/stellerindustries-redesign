import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Hero } from '@/components/Hero'
import { ScrollReveal } from '@/components/ScrollReveal'
import { services } from '@/data/services'
import { portfolio } from '@/data/portfolio'
import { testimonials } from '@/data/testimonials'
import { STATS, PROCESS_STEPS } from '@/data/constants'
import { staggerContainer, staggerItem, lightSourceHover } from '@/lib/motion'

export function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <Hero
        eyebrow="South Africa's Event Technology Partner"
        title="Precision Sound,"
        titleAccent="Lighting & Visual Production"
        description="We engineer the technical backbone of South Africa's most demanding events. Sound, lighting, photography, videography — executed with precision, zero compromise."
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-8 py-3 text-xs font-normal uppercase tracking-[0.14em] text-black transition-all hover:bg-transparent hover:text-[var(--color-gold)]"
          >
            Start a Project
            <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-8 py-3 text-xs font-normal uppercase tracking-[0.14em] text-[var(--color-muted)] transition-all hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
          >
            View Our Work
          </Link>
        </div>
      </Hero>

      {/* ─── PROBLEM → OUTCOME ─── */}
      <section className="py-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
            <ScrollReveal variant="left" className="lg:col-span-5">
              <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                The Challenge
              </p>
              <h2 className="mt-4 font-display text-display-md font-extralight tracking-tight text-[var(--color-text)]">
                Most events fail on technical execution.
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="right" className="lg:col-span-5 lg:col-start-8">
              <p className="text-body-xl font-light leading-relaxed text-[var(--color-muted)]">
                Poor sound kills atmosphere. Bad lighting kills mood. Technical failures kill momentum.
                Your audience deserves seamless. Your brand demands precision.
              </p>
              <p className="mt-6 text-body-xl font-light leading-relaxed text-[var(--color-muted)]">
                We don't just set up equipment. We engineer experiences where every cue, every light change, every mix is intentional.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STATS.map(stat => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="text-center"
              >
                <p className="font-display text-display-md font-extralight text-[var(--color-gold)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
              Disciplines
            </p>
            <h2 className="mt-4 font-display text-display-lg font-extralight tracking-tight text-[var(--color-text)]">
              Five disciplines.<br />One standard.
            </h2>
          </ScrollReveal>

          <div className="mt-16 space-y-2">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.05}>
                <motion.div
                  className="group grid gap-6 border-b border-[var(--color-border)] py-8 transition-colors hover:border-[var(--color-gold)] md:grid-cols-12 md:items-center"
                  whileHover="hover"
                  variants={lightSourceHover}
                >
                  <div className="md:col-span-1">
                    <span className="text-caption font-mono text-[var(--color-muted)]">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-display-sm font-extralight text-[var(--color-text)] transition-colors group-hover:text-[var(--color-gold)] md:col-span-5">
                    {service.title}
                  </h3>
                  <p className="text-body font-light text-[var(--color-muted)] md:col-span-5">
                    {service.description}
                  </p>
                  <div className="hidden md:col-span-1 md:flex md:justify-end">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1}
                      className="text-[var(--color-muted)] transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-gold)]"
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED WORK ─── */}
      <section className="py-section-lg bg-[var(--color-surface)] transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                  Selected Work
                </p>
                <h2 className="mt-4 font-display text-display-lg font-extralight tracking-tight text-[var(--color-text)]">
                  Recent projects
                </h2>
              </div>
              <Link
                to="/work"
                className="hidden items-center gap-2 text-xs font-light uppercase tracking-[0.14em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-gold)] md:inline-flex"
              >
                View all
                <ArrowUpRight size={14} strokeWidth={1} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {portfolio.filter(p => p.featured).map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <motion.div
                  className="group relative overflow-hidden rounded-sm border border-[var(--color-border)] transition-colors hover:border-[var(--color-gold)]"
                  whileHover="hover"
                  variants={lightSourceHover}
                >
                  {/* Glow container */}
                  <div className="glow-container aspect-[4/3] bg-[var(--color-surface-raised)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover opacity-80 transition-all duration-600 group-hover:scale-105 group-hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-extralight text-[var(--color-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
              Testimonials
            </p>
            <h2 className="mt-4 font-display text-display-lg font-extralight tracking-tight text-[var(--color-text)]">
              Trusted by the best
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.1}>
                <motion.blockquote
                  className="flex h-full flex-col rounded-sm border border-[var(--color-border)] p-8 transition-colors hover:border-[var(--color-gold)]"
                  whileHover="hover"
                  variants={lightSourceHover}
                >
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="h-px w-4 bg-[var(--color-gold)]" />
                    ))}
                  </div>
                  <p className="flex-1 text-body-lg font-light italic leading-relaxed text-[var(--color-text)]">
                    "{t.quote}"
                  </p>
                  <footer className="mt-8 border-t border-[var(--color-border)] pt-4">
                    <p className="text-sm font-light text-[var(--color-text)]">{t.name}</p>
                    <p className="text-xs font-light text-[var(--color-muted)]">{t.role}</p>
                  </footer>
                </motion.blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-section-lg bg-[var(--color-surface)] transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
              Process
            </p>
            <h2 className="mt-4 font-display text-display-lg font-extralight tracking-tight text-[var(--color-text)]">
              How we work
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <motion.div
                  className="rounded-sm border border-[var(--color-border)] p-8 transition-colors hover:border-[var(--color-gold)]"
                  whileHover="hover"
                  variants={lightSourceHover}
                >
                  <span className="font-mono text-display-sm text-[var(--color-gold)]/30">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-extralight text-[var(--color-text)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-body font-light text-[var(--color-muted)]">
                    {step.text}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden py-section-lg">
        {/* Light glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-12">
          <ScrollReveal variant="scale">
            <h2 className="font-display text-display-xl font-extralight tracking-tight text-[var(--color-text)]">
              Ready to elevate<br />your next event?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-body-xl font-light text-[var(--color-muted)]">
              Let's discuss your vision. We'll engineer the technical foundation to make it extraordinary.
            </p>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-10 py-4 text-xs font-normal uppercase tracking-[0.14em] text-black transition-all hover:bg-transparent hover:text-[var(--color-gold)]"
            >
              Get in Touch
              <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
