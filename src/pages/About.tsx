import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { ScrollReveal, ParallaxSection } from '@/components/atmosphere/ScrollReveal'
import { GlassCard } from '@/components/atmosphere/GlassCard'
import { STATS } from '@/data/constants'
import { staggerOrganic, staggerChild } from '@/lib/motion'

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
      {/* ─── HERO: Center-aligned with floating bokeh ─── */}
      <Hero
        eyebrow="About"
        title="Engineering Experiences"
        titleAccent="Since 2012"
        description="Steller Industries was founded on a single principle: technical excellence is not optional. We are the invisible force behind South Africa's most memorable events."
        layout="center"
      />

      {/* ─── PHILOSOPHY: Asymmetric floating cards ─── */}
      <section className="relative py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal variant="fade">
            <p className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Philosophy
            </p>
            <h2 className="font-display text-display-lg font-thin tracking-tight text-[var(--color-text)]">
              What drives us
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {philosophyItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <GlassCard glow>
                  <h3 className="font-display text-xl font-thin text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-body font-light leading-relaxed text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORY: Parallax floating columns ─── */}
      <ParallaxSection speed={0.1}>
        <section className="relative py-section-lg">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid gap-20 lg:grid-cols-12 lg:gap-8">
              <ScrollReveal variant="drift-left" className="lg:col-span-5">
                <p className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Our Story
                </p>
                <h2 className="font-display text-display-md font-thin tracking-tight text-[var(--color-text)]">
                  From a single speaker to full-scale production
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="drift-right" className="lg:col-span-5 lg:col-start-8">
                <p className="text-body-xl font-light leading-relaxed text-[var(--color-muted)]">
                  Steller Industries started in a Johannesburg garage in 2012 with one speaker system and an obsession with sound quality. Today, we're South Africa's go-to partner for events that demand technical perfection.
                </p>
                <p className="mt-8 text-body-xl font-light leading-relaxed text-[var(--color-muted)]">
                  From intimate corporate gatherings to 15,000-capacity festivals, we bring the same meticulous attention to every project. We don't do "good enough." We do exceptional.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* ─── STATS: Glass pills floating in space ─── */}
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

      {/* ─── TEAM: Floating organic portraits ─── */}
      <section className="relative py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Team
            </p>
            <h2 className="font-display text-display-lg font-thin tracking-tight text-[var(--color-text)]">
              The people behind the precision
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <GlassCard>
                  {/* Avatar: organic blob shape with glow */}
                  <div className="glow-container mb-8 aspect-square w-full overflow-hidden rounded-[42%_58%_70%_30%/45%_45%_55%_55%] bg-white/[0.03]" />
                  <h3 className="font-display text-xl font-thin text-[var(--color-text)]" data-magnetic>
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                    {member.role}
                  </p>
                  <p className="mt-4 text-body font-light leading-relaxed text-[var(--color-muted)]">
                    {member.bio}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
