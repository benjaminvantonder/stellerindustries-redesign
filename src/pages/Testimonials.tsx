import { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
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
            <div className="min-h-[320px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl text-ink leading-snug max-w-4xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="mt-10 flex items-baseline gap-4">
                    <div className="w-8 h-px bg-ink/20" />
                    <div>
                      <p className="text-ink text-sm font-medium">{t.name}</p>
                      <p className="text-muted/50 text-sm mt-0.5">
                        {t.role}
                        {t.event && <span className="text-accent/30"> &middot; {t.event}</span>}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot navigation */}
            <div className="mt-16 flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-ink scale-125' : 'bg-ink/15 hover:bg-ink/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
