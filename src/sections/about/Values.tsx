import { Shield, Target, Users, Sparkles } from 'lucide-react'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'

const values = [
  {
    icon: <Shield size={20} />,
    title: 'Reliability',
    description:
      'When the show starts, there are no second chances. We show up prepared, on time, and ready for anything.',
  },
  {
    icon: <Target size={20} />,
    title: 'Precision',
    description:
      "Every cue, every transition, every level is intentional. We don't approximate — we calibrate.",
  },
  {
    icon: <Users size={20} />,
    title: 'Partnership',
    description:
      "We don't just take briefs — we collaborate. Your vision is the input; our expertise is the processing.",
  },
  {
    icon: <Sparkles size={20} />,
    title: 'Craft',
    description:
      'Sound, light, and visuals are our medium. We take pride in the craft because the craft is the product.',
  },
]

export default function Values() {
  return (
    <section className="relative py-24 md:py-32 border-t border-signal/10">
      <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
        <Reveal>
          <SectionHeading
            timecode="01:58"
            label="Values"
            heading="What We Stand On"
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.1}>
              <div className="flex gap-4">
                <div className="text-signal/50 mt-1 shrink-0">{value.icon}</div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-paper mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-mute leading-relaxed">{value.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
