import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'

export default function NameSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
        <Reveal>
          <SectionHeading
            timecode="00:00"
            label="The Name"
            heading="Steller"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 max-w-2xl">
            <p className="text-mute text-lg leading-relaxed">
              The double "L" is deliberate. Spoken, it sounds like{' '}
              <em className="text-paper not-italic font-medium">stellar</em> — representing
              excellence. Written, it's more visually distinctive — just like our photography and
              videography. A name that embodies our commitment to top-tier sound, lighting, and
              visual experiences.
            </p>

            <blockquote className="mt-10 pl-6 border-l-2 border-signal/30">
              <p className="font-display text-xl md:text-2xl text-paper leading-relaxed">
                "Recognised for our quality, memorable for our character."
              </p>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
