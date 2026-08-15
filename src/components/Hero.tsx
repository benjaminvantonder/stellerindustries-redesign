import { motion } from 'framer-motion'
import { ScrollReveal } from './ScrollReveal'

interface HeroProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  description?: string
  children?: React.ReactNode
}

export function Hero({ eyebrow, title, titleAccent, description, children }: HeroProps) {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* Light source glow — the hero's defining visual element */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/4 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.03)_0%,transparent_70%)]" />
      </div>

      {/* Grid lines — subtle structural element */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute left-[25%] top-0 h-full w-px bg-[var(--color-text)]" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-[var(--color-text)]" />
        <div className="absolute left-[75%] top-0 h-full w-px bg-[var(--color-text)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left column — text */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {eyebrow && (
              <ScrollReveal variant="fade">
                <p className="mb-6 text-[0.6875rem] font-normal uppercase tracking-[0.14em] text-[var(--color-gold)]">
                  {eyebrow}
                </p>
              </ScrollReveal>
            )}

            <ScrollReveal variant="up" delay={0.1}>
              <h1 className="font-display text-display-xl font-extralight leading-[0.92] tracking-tight text-[var(--color-text)]">
                {title}
                {titleAccent && (
                  <span className="block text-[var(--color-gold)]">{titleAccent}</span>
                )}
              </h1>
            </ScrollReveal>

            {description && (
              <ScrollReveal variant="up" delay={0.2}>
                <p className="mt-8 max-w-lg text-body-xl font-light leading-relaxed text-[var(--color-muted)]">
                  {description}
                </p>
              </ScrollReveal>
            )}

            {children && (
              <ScrollReveal variant="up" delay={0.3}>
                {children}
              </ScrollReveal>
            )}
          </div>

          {/* Right column — decorative light element */}
          <div className="hidden items-center justify-center lg:col-span-5 lg:flex">
            <motion.div
              className="relative h-80 w-80"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Concentric light rings */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-[var(--color-gold)]"
                  style={{
                    inset: `${i * 32}px`,
                    opacity: 0.15 - i * 0.025,
                  }}
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.15 - i * 0.025, 0.2 - i * 0.025, 0.15 - i * 0.025],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
              {/* Center dot */}
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-gold)]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  )
}
