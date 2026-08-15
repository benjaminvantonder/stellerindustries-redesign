import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { ScrollReveal, ParallaxSection } from '@/components/atmosphere/ScrollReveal'
import { GlassCard } from '@/components/atmosphere/GlassCard'
import { services } from '@/data/services'
import { staggerOrganic, staggerChild, bokehShift } from '@/lib/motion'

export function Services() {
  return (
    <>
      {/* ─── HERO: Right-aligned asymmetric ─── */}
      <Hero
        eyebrow="Services"
        title="Five Disciplines"
        titleAccent="One Standard"
        description="Every service we offer is backed by the same commitment: technical precision, creative excellence, and zero tolerance for mediocrity."
        layout="right"
      />

      {/* ─── SERVICE GALLERY: Full-bleed staggered floats ─── */}
      <section className="relative py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="space-y-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.06}>
                <motion.div
                  className={`grid gap-10 py-8 md:grid-cols-12 md:items-center md:gap-14 ${
                    i % 2 === 1 ? 'md:direction-rtl' : ''
                  }`}
                  whileHover="hover"
                  variants={bokehShift}
                >
                  {/* Image — organic blob shape */}
                  <motion.div
                    className={`${i % 2 === 1 ? 'md:col-start-8 md:order-last' : 'md:col-span-5'}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={bokehShift}
                  >
                    <div className="glow-container aspect-[4/3] overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-white/[0.02]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover opacity-60 transition-all duration-700 hover:scale-110 hover:opacity-90"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>

                  {/* Text — floating offset */}
                  <div className={`flex flex-col justify-center md:col-span-6 ${
                    i % 2 === 1 ? 'md:col-start-1 md:order-first' : 'md:col-start-7'
                  }`}>
                    <span className="font-mono text-4xl text-[var(--color-gold)]/10">0{i + 1}</span>
                    <h2 className="mt-4 font-display text-display-md font-thin tracking-tight text-[var(--color-text)]" data-magnetic>
                      {service.title}
                    </h2>
                    <p className="mt-6 text-body-lg font-light leading-relaxed text-[var(--color-muted)]">
                      {service.description}
                    </p>
                    <motion.div
                      className="mt-8 h-px rounded-full bg-gradient-to-r from-[var(--color-gold)] to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: 80 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, type: 'spring', stiffness: 60, damping: 20 }}
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES: Floating glass grid ─── */}
      <ParallaxSection speed={0.1}>
        <section className="relative py-section-lg">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal>
              <p className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[var(--color-gold)]">
                Capabilities
              </p>
              <h2 className="font-display text-display-lg font-thin tracking-tight text-[var(--color-text)]">
                What we bring to every project
              </h2>
            </ScrollReveal>

            <motion.div
              className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              variants={staggerOrganic}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                'Digital Mixing Consoles',
                'Line Array Systems',
                'LED Video Walls',
                'Intelligent Fixtures',
                'Projection Mapping',
                'Wireless Communication',
                'Signal Distribution',
                'Stage Design',
              ].map(item => (
                <motion.div key={item} variants={staggerChild}>
                  <GlassCard className="text-center">
                    <p className="text-sm font-light text-[var(--color-text)]" data-magnetic>{item}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </ParallaxSection>
    </>
  )
}
