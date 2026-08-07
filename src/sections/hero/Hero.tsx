import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as const

export default function Hero() {
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    setPrefersReduced(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  }, [])

  return (
    <section className="relative min-h-screen flex items-center spotlight overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/50" />
      </div>

      <div className="relative z-10 pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
        <motion.h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold text-paper leading-[0.9] tracking-tight"
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        >
          Sound.
          <br />
          Light.
          <br />
          Vision.
        </motion.h1>

        <motion.p
          className="mt-8 text-mute text-lg md:text-xl max-w-lg leading-relaxed"
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease }}
        >
          Excellence in sound, lighting, and visual experiences for events across South Africa.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-void text-sm font-medium px-7 py-3.5 hover:bg-gold/90 transition-colors duration-200"
          >
            Start a Project
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 border border-white/15 text-paper text-sm px-7 py-3.5 hover:border-white/30 transition-colors duration-200"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
