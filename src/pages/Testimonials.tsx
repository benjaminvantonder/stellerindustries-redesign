import { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '@/components/Reveal'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]

  return (
    <>
      <Helmet>
        <title>Testimonials — Steller Industries</title>
        <meta
          name="description"
          content="What our clients say about Steller Industries — sound, lighting, and visual experiences."
        />
      </Helmet>

      <div className="pt-32">
        <section className="min-h-[80vh] flex items-center">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto w-full">
            <Reveal>
              <p className="text-xs text-mute/50 uppercase tracking-widest mb-16">Testimonials</p>
            </Reveal>

            <div className="min-h-[320px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl text-paper leading-snug max-w-4xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="mt-10 flex items-baseline gap-4">
                    <div className="w-8 h-px bg-gold/40" />
                    <div>
                      <p className="text-paper text-sm">{t.name}</p>
                      <p className="text-mute/50 text-sm mt-0.5">
                        {t.role}
                        {t.event && <span className="text-gold/30"> · {t.event}</span>}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-16 flex items-center gap-6">
              <button
                onClick={prev}
                className="text-mute/30 hover:text-paper transition-colors text-sm"
                aria-label="Previous testimonial"
              >
                &larr; Prev
              </button>
              <span className="text-xs text-mute/30">
                {current + 1} / {testimonials.length}
              </span>
              <button
                onClick={next}
                className="text-mute/30 hover:text-paper transition-colors text-sm"
                aria-label="Next testimonial"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
