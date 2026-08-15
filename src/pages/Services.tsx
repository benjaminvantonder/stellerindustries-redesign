import { motion } from 'framer-motion'
import { Hero } from '@/components/Hero'
import { ScrollReveal } from '@/components/ScrollReveal'
import { services } from '@/data/services'
import { lightSourceHover, imageReveal } from '@/lib/motion'

export function Services() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Five Disciplines"
        titleAccent="One Standard"
        description="Every service we offer is backed by the same commitment: technical precision, creative excellence, and zero tolerance for mediocrity."
      />

      {/* ─── SERVICE LIST ─── */}
      <section className="py-section-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="space-y-0">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.05}>
                <div className="grid gap-8 border-b border-[var(--color-border)] py-12 md:grid-cols-12 md:items-center md:gap-12">
                  {/* Image */}
                  <motion.div
                    className={`md:col-span-5 ${i % 2 === 1 ? 'md:col-start-8 md:order-last' : ''}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={imageReveal}
                  >
                    <div className="glow-container aspect-[4/3] overflow-hidden rounded-sm border border-[var(--color-border)]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-600 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <div className={`flex flex-col justify-center md:col-span-6 ${i % 2 === 1 ? 'md:col-start-1 md:order-first' : 'md:col-start-7'}`}>
                    <span className="font-mono text-display-sm text-[var(--color-gold)]/20">
                      0{i + 1}
                    </span>
                    <h2 className="mt-4 font-display text-display-md font-extralight tracking-tight text-[var(--color-text)]">
                      {service.title}
                    </h2>
                    <p className="mt-6 text-body-lg font-light leading-relaxed text-[var(--color-muted)]">
                      {service.description}
                    </p>
                    <motion.div
                      className="mt-8 h-px w-16 bg-[var(--color-gold)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: 64 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAPABILITY GRID ─── */}
      <section className="py-section bg-[var(--color-surface)] transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
              Capabilities
            </p>
            <h2 className="mt-4 font-display text-display-lg font-extralight tracking-tight text-[var(--color-text)]">
              What we bring to every project
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Digital Mixing Consoles',
              'Line Array Systems',
              'LED Video Walls',
              'Intelligent Fixtures',
              'Projection Mapping',
              'Wireless Communication',
              'Signal Distribution',
              'Stage Design',
            ].map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.05}>
                <motion.div
                  className="rounded-sm border border-[var(--color-border)] p-6 text-center transition-colors hover:border-[var(--color-gold)]"
                  whileHover="hover"
                  variants={lightSourceHover}
                >
                  <p className="text-sm font-light text-[var(--color-text)]">{item}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
