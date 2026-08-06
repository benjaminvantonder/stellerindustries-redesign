import { Helmet } from 'react-helmet-async'
import SignalLine from '@/components/SignalLine'
import SignalChip from '@/components/SignalChip'
import NameSection from '@/sections/about/NameSection'
import Philosophy from '@/sections/about/Philosophy'
import Story from '@/sections/about/Story'
import Values from '@/sections/about/Values'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Steller Industries</title>
        <meta
          name="description"
          content="The story behind Steller Industries — a name that embodies excellence in sound, lighting, and visual experiences."
        />
      </Helmet>
      <div className="pt-24">
        <SignalLine>
          <SignalChip label="00:00" top="15%" />
          <SignalChip label="THE NAME" top="20%" />
          <SignalChip label="00:42" top="35%" />
          <SignalChip label="PHILOSOPHY" top="40%" />
          <SignalChip label="01:15" top="55%" />
          <SignalChip label="STORY" top="60%" />
          <SignalChip label="01:58" top="75%" />
          <SignalChip label="VALUES" top="80%" />
        </SignalLine>
        <NameSection />
        <Philosophy />
        <Story />
        <Values />
      </div>
    </>
  )
}
