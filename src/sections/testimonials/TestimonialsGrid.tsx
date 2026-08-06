import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsGrid() {
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
    <div>
      {/* Large quote */}
      <div className="min-h-[300px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl text-paper leading-snug max-w-3xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Lower-third credit */}
            <div className="mt-8 flex items-baseline gap-4">
              <div className="w-8 h-px bg-signal/40" />
              <div>
                <p className="font-mono text-sm text-paper">{t.name}</p>
                <p className="font-mono text-[11px] text-mute/60 mt-0.5">
                  {t.role}
                  {t.event && <span className="text-signal/40"> · {t.event}</span>}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center gap-6">
        <button
          onClick={prev}
          className="text-mute/40 hover:text-signal transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="font-mono text-[11px] text-mute/40">
          {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
        </span>
        <button
          onClick={next}
          className="text-mute/40 hover:text-signal transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Running list of other clients */}
      <Reveal delay={0.3}>
        <div className="mt-16 pt-8 border-t border-signal/10">
          <p className="section-label mb-4">Also Trusted By</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {testimonials
              .filter((_, i) => i !== current)
              .map((item) => (
                <span key={item.id} className="font-mono text-[11px] text-mute/30">
                  {item.name}
                </span>
              ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
