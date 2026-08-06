import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'

export default function Philosophy() {
  return (
    <section className="relative py-24 md:py-32 border-t border-signal/10">
      <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
        <Reveal>
          <SectionHeading
            timecode="00:42"
            label="Philosophy"
            heading="Every Cue Matters"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 max-w-2xl space-y-6">
            <p className="text-mute text-lg leading-relaxed">
              Events are sequences of moments, each one building on the last. A lighting cue that
              arrives half a beat late. A sound transition that doesn't land. These are the things
              guests remember — not as details, but as feelings.
            </p>
            <p className="text-mute text-lg leading-relaxed">
              We approach every production as a signal chain: input, processing, output. Every link
              in that chain has to be clean. Every transition has to be intentional. That's not
              perfectionism — it's the baseline.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-wrap gap-4">
            <div className="data-chip">PRECISION</div>
            <div className="data-chip">INTENTIONAL</div>
            <div className="data-chip">CHAIN INTEGRITY</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
