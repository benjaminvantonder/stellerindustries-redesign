import { Helmet } from 'react-helmet-async'
import SignalLine from '@/components/SignalLine'
import SignalChip from '@/components/SignalChip'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import TestimonialsGrid from '@/sections/testimonials/TestimonialsGrid'

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Testimonials — Steller Industries</title>
        <meta
          name="description"
          content="What our clients say about Steller Industries — sound, lighting, and visual experiences."
        />
      </Helmet>
      <div className="pt-24">
        <SignalLine>
          <SignalChip label="00:00" top="15%" />
          <SignalChip label="TESTIMONIALS" top="20%" />
        </SignalLine>

        <section className="py-16 md:py-24">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
            <Reveal>
              <SectionHeading
                timecode="00:00"
                label="Testimonials"
                heading="Client Voices"
              />
            </Reveal>

            <div className="mt-16">
              <TestimonialsGrid />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
