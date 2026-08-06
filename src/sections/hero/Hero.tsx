import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.8 + i * 0.15, ease },
  }),
}

export default function Hero() {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section className="relative min-h-screen flex items-center spotlight">
      <div className="relative z-10 pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-paper leading-[0.95] tracking-tight"
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
        >
          Sound.
          <br />
          Light.
          <br />
          Vision.
        </motion.h1>

        <motion.p
          className="mt-8 text-mute text-lg md:text-xl max-w-lg leading-relaxed"
          initial={prefersReduced ? false : 'hidden'}
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          Excellence in sound, lighting, and visual experiences for events across South Africa.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={prefersReduced ? false : 'hidden'}
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold text-void text-sm font-medium px-6 py-3 hover:bg-gold/90 transition-colors duration-200"
          >
            Start a Project
          </a>
          <a
            href="/work"
            className="inline-flex items-center gap-2 border border-white/15 text-paper text-sm px-6 py-3 hover:border-white/30 transition-colors duration-200"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  )
}
