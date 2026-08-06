import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'

export default function Story() {
  return (
    <section className="relative py-24 md:py-32 border-t border-signal/10">
      <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
        <Reveal>
          <SectionHeading
            timecode="01:15"
            label="Story"
            heading="How We Started"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 max-w-2xl space-y-6">
            <p className="text-mute text-lg leading-relaxed">
              Steller Industries began with a single lighting rig and a conviction that production
              quality shouldn't be a luxury reserved for the biggest budgets. We started small —
              local events, private functions, community festivals — and built our reputation one
              clean cue at a time.
            </p>
            <p className="text-mute text-lg leading-relaxed">
              Today, we handle full-scale event production across South Africa: sound engineering,
              lighting design, visual experiences, photography, and videography. The scale changed.
              The standard didn't.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Events Produced' },
              { number: '50+', label: 'Corporate Clients' },
              { number: '5', label: 'Service Disciplines' },
              { number: '100%', label: 'South African' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-bold text-signal">
                  {stat.number}
                </p>
                <p className="mt-2 font-mono text-[10px] tracking-wider text-mute/60 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
