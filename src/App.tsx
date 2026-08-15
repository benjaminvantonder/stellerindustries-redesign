import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'

const Home = lazy(() => import('@/pages/Home').then(m => ({ default: m.Home })))
const About = lazy(() => import('@/pages/About').then(m => ({ default: m.About })))
const Services = lazy(() => import('@/pages/Services').then(m => ({ default: m.Services })))
const Work = lazy(() => import('@/pages/Work').then(m => ({ default: m.Work })))
const Testimonials = lazy(() => import('@/pages/Testimonials').then(m => ({ default: m.Testimonials })))
const Contact = lazy(() => import('@/pages/Contact').then(m => ({ default: m.Contact })))

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-gold)]" />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
