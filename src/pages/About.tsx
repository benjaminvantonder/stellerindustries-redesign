import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { ScrollReveal } from '@/components/ScrollReveal'
import { STATS } from '@/data/constants'
import { staggerContainer, staggerItem, lightSourceHover } from '@/lib/motion'

const philosophyItems = [
  {
    title: 'Precision Over Volume',
    description: 'We believe in the power of restraint. Every element we deploy serves a purpose. No excess, no compromise.',
  },
  {
    title: 'Light as Material',
    description: 'Light is not decoration — it is architecture. We sculpt with photons the way others sculpt with steel.',
  },
  {
    title: 'Technical Rigour',
    description: 'Behind every seamless moment is hours of calibration. We obsess over the details so your audience experiences perfection.',
  },
]

const team = [
  { name: 'Marco Steller', role: 'Founder & Technical Director', bio: '15 years in event technology. Former head of audio for one of SA\'s largest production companies.' },
  { name: 'Lerato Mokoena', role: 'Head of Lighting Design', bio: 'Award-winning lighting designer. Specialises in architectural and concert lighting.' },
  { name: 'Pieter van der Westhuizen', role: 'Operations Director', bio: 'Ensures every project runs on time, on budget, and above expectations.' },
]

export function About() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="Engineering Experiences"
        titleAccent="Since 2012"
        description="Steller Industries was founded on a single principle: technical excellence is not optional. We are the invisible force behind South Africa's most memorable events."
      />

      {/* ─── PHILOSOPHY ─── */}
      <section className="py-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
              Philosophy
            </p>
            <h2 className="mt-4 font-display text-display-lg font-extralight tracking-tight text-[var(--color-text)]">
              What drives us
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {philosophyItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  className="rounded-sm border border-[var(--color-border)] p-8 transition-colors hover:border-[var(--color-gold)]"
                  whileHover="hover"
                  variants={lightSourceHover}
                >
                  <h3 className="font-display text-xl font-extralight text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-body font-light leading-relaxed text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-section bg-[var(--color-surface)] transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
            <ScrollReveal variant="left" className="lg:col-span-5">
              <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                Our Story
              </p>
              <h2 className="mt-4 font-display text-display-md font-extralight tracking-tight text-[var(--color-text)]">
                From a single speaker to full-scale production
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="right" className="lg:col-span-5 lg:col-start-8">
              <p className="text-body-xl font-light leading-relaxed text-[var(--color-muted)]">
                Steller Industries started in a Johannesburg garage in 2012 with one speaker system and an obsession with sound quality. Today, we're South Africa's go-to partner for events that demand technical perfection.
              </p>
              <p className="mt-6 text-body-xl font-light leading-relaxed text-[var(--color-muted)]">
                From intimate corporate gatherings to 15,000-capacity festivals, we bring the same meticulous attention to every project. We don't do "good enough." We do exceptional.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="border-y border-[var(--color-border)] py-16">
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

      {/* ─── TEAM ─── */}
      <section className="py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
              Team
            </p>
            <h2 className="mt-4 font-display text-display-lg font-extralight tracking-tight text-[var(--color-text)]">
              The people behind the precision
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <motion.div
                  className="rounded-sm border border-[var(--color-border)] p-8 transition-colors hover:border-[var(--color-gold)]"
                  whileHover="hover"
                  variants={lightSourceHover}
                >
                  {/* Avatar placeholder — glow container */}
                  <div className="glow-container mb-6 aspect-square w-full rounded-sm bg-[var(--color-surface-raised)]" />
                  <h3 className="font-display text-xl font-extralight text-[var(--color-text)]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                    {member.role}
                  </p>
                  <p className="mt-4 text-body font-light leading-relaxed text-[var(--color-muted)]">
                    {member.bio}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
