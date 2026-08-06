import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'
import SignalLine from '@/components/SignalLine'
import SignalChip from '@/components/SignalChip'
import useReducedMotion from '@/hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!heroRef.current || !contentRef.current || reducedMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Signal line */}
      <SignalLine>
        <SignalChip label="00:00" top="20%" />
        <SignalChip label="LEVEL 94dB" top="40%" />
        <SignalChip label="SCENE 1" top="60%" />
      </SignalLine>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-signal/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pulse/3 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className={`relative z-10 pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full ${reducedMotion ? '' : 'opacity-0'}`}
      >
        <motion.p
          className="timecode text-sm mb-6"
          initial={reducedMotion ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.4 }}
        >
          00:00
        </motion.p>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-paper leading-[0.95] tracking-tight"
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: reducedMotion ? 0 : 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Sound.
          <br />
          Light.
          <br />
          <span className="text-signal">Vision.</span>
        </motion.h1>

        <motion.p
          className="mt-8 text-mute text-lg md:text-xl max-w-lg leading-relaxed"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reducedMotion ? 0 : 0.8 }}
        >
          Excellence in sound, lighting, and visual experiences for events across South Africa.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reducedMotion ? 0 : 1.0 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-signal text-void font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-signal-300 transition-colors duration-200"
          >
            Start a Project
          </a>
          <a
            href="/work"
            className="inline-flex items-center gap-2 border border-signal/30 text-paper font-mono text-xs tracking-widest uppercase px-6 py-3 hover:border-signal/60 transition-colors duration-200"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reducedMotion ? 0 : 1.5, duration: 0.6 }}
      >
        <a href="#next" className="flex flex-col items-center gap-2 text-mute/50 hover:text-mute transition-colors">
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className={reducedMotion ? '' : 'animate-bounce'} />
        </a>
      </motion.div>
    </section>
  )
}
