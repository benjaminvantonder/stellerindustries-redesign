import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { BokehBackground } from './atmosphere/BokehBackground'
import { MagneticCursor } from './atmosphere/MagneticCursor'
import { ScrollToTop } from './ScrollToTop'
import { pageTransition } from '@/lib/motion'

export function Layout() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] transition-colors duration-600">
      <ScrollToTop />
      <BokehBackground orbCount={6} />
      <MagneticCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative z-10 pt-16"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
