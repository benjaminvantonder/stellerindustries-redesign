import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import SignalLine from '@/components/SignalLine'
import SignalChip from '@/components/SignalChip'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import GalleryGrid from '@/sections/work/GalleryGrid'
import { portfolio } from '@/data/portfolio'

const categories = ['All', ...new Set(portfolio.map((p) => p.category))]

export default function Work() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? portfolio : portfolio.filter((p) => p.category === active)

  return (
    <>
      <Helmet>
        <title>Work — Steller Industries</title>
        <meta
          name="description"
          content="See our portfolio of events — sound, lighting, and visual experiences delivered across South Africa."
        />
      </Helmet>
      <div className="pt-24">
        <SignalLine>
          <SignalChip label="00:00" top="15%" />
          <SignalChip label="PORTFOLIO" top="20%" />
        </SignalLine>

        <section className="py-16 md:py-24">
          <div className="pl-8 md:pl-24 lg:pl-32 pr-8 max-w-content mx-auto">
            <Reveal>
              <SectionHeading
                timecode="00:00"
                label="Work"
                heading="Portfolio"
              />
              <p className="mt-6 text-mute text-lg max-w-2xl">
                A selection of productions we've delivered — from intimate corporate events
                to large-scale festival stages.
              </p>
            </Reveal>

            {/* Filter tabs */}
            <Reveal delay={0.15}>
              <div className="mt-12 flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
                      active === cat
                        ? 'border-signal text-signal bg-signal/5'
                        : 'border-signal/15 text-mute hover:border-signal/30 hover:text-paper'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Grid */}
            <div className="mt-12">
              <GalleryGrid items={filtered} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
