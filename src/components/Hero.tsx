import { type ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ScrollReveal } from './atmosphere/ScrollReveal'

interface HeroProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  description?: string
  children?: ReactNode
  layout?: 'left' | 'center' | 'right' | 'asymmetric'
}

export function Hero({ eyebrow, title, titleAccent, description, children, layout = 'asymmetric' }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="atmo-section relative">
      {/* Bokeh orbs specific to this hero */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ scale: bgScale }}
      >
        <div className="absolute -top-1/4 left-[20%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,185,94,0.05)_0%,transparent_70%)] blur-[60px]" />
        <div className="absolute left-[60%] top-[40%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(154,123,48,0.04)_0%,transparent_70%)] blur-[50px]" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-12">
        <div className={`grid gap-16 lg:grid-cols-12 lg:gap-8 ${layout === 'center' ? 'text-center' : ''}`}>
          {/* Main text */}
          <motion.div
            className={`flex flex-col justify-center ${
              layout === 'asymmetric' ? 'lg:col-span-8' :
              layout === 'center' ? 'lg:col-span-10 lg:col-start-2 text-center' :
              layout === 'right' ? 'lg:col-span-7 lg:col-start-6' :
              'lg:col-span-7'
            }`}
            style={{ y: titleY, opacity: titleOpacity }}
          >
            {eyebrow && (
              <ScrollReveal variant="fade">
                <p className="mb-8 text-[0.6875rem] font-normal uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  {eyebrow}
                </p>
              </ScrollReveal>
            )}

            <ScrollReveal variant="rise" delay={0.1}>
              <h1 className="font-display text-display-xl font-thin leading-[0.88] tracking-tight text-[var(--color-text)]">
                {title}
                {titleAccent && (
                  <span className="block text-[var(--color-gold)]">{titleAccent}</span>
                )}
              </h1>
            </ScrollReveal>

            {description && (
              <ScrollReveal variant="rise" delay={0.2}>
                <p className="mt-10 max-w-lg text-body-xl font-light leading-relaxed text-[var(--color-muted)]">
                  {description}
                </p>
              </ScrollReveal>
            )}

            {children && (
              <ScrollReveal variant="rise" delay={0.3}>
                {children}
              </ScrollReveal>
            )}
          </motion.div>

          {/* Decorative bokeh element */}
          {layout === 'asymmetric' && (
            <div className="hidden items-center justify-center lg:col-span-4 lg:flex">
              <ScrollReveal variant="emerge" delay={0.3}>
                <motion.div
                  className="relative h-72 w-72"
                  animate={{
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Concentric organic rings */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-[42%_58%_70%_30%/45%_45%_55%_55%] border border-[var(--color-gold)]/10"
                      style={{ inset: `${i * 24}px` }}
                      animate={{
                        scale: [1, 1.04, 1],
                        opacity: [0.12 - i * 0.02, 0.18 - i * 0.02, 0.12 - i * 0.02],
                      }}
                      transition={{
                        duration: 5,
                        delay: i * 0.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                  {/* Center glow */}
                  <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-gold)]/40 shadow-[0_0_40px_rgba(201,168,76,0.3)]" />
                </motion.div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </div>

      {/* Bottom atmospheric fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  )
}
