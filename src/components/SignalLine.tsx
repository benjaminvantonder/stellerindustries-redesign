import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useReducedMotion from '@/hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

interface SignalLineProps {
  children?: React.ReactNode
}

export default function SignalLine({ children }: SignalLineProps) {
  const lineRef = useRef<HTMLDivElement>(null)
  const pulseRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!pulseRef.current || !lineRef.current || reducedMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        pulseRef.current,
        { top: '-120px' },
        {
          top: '100%',
          duration: 2,
          ease: 'none',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
        },
      )
    }, lineRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <div ref={lineRef} className="signal-line hidden lg:block" aria-hidden="true">
      <div
        ref={pulseRef}
        className="signal-line-pulse"
        style={reducedMotion ? { opacity: 0.5, animation: 'none' } : undefined}
      />
      {children}
    </div>
  )
}
