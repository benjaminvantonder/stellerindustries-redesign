import { Helmet } from 'react-helmet-async'
import Hero from '../sections/hero/Hero'
import ServicesOverview from '../sections/home/ServicesOverview'
import FeaturedWork from '../sections/home/FeaturedWork'
import TrustBar from '../sections/home/TrustBar'
import CTASection from '../sections/home/CTASection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Steller Industries — Excellence in Sound, Light, and Vision</title>
        <meta
          name="description"
          content="South Africa's premier sound, lighting, and visual experiences for events of every scale."
        />
      </Helmet>
      <Hero />
      <ServicesOverview />
      <FeaturedWork />
      <TrustBar />
      <CTASection />
    </>
  )
}
