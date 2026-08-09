import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={false}
      animate={{
        marginLeft: scrolled ? 24 : 0,
        marginRight: scrolled ? 24 : 0,
        marginTop: scrolled ? 16 : 4,
        marginBottom: scrolled ? 0 : 4,
        paddingLeft: scrolled ? 24 : 40,
        paddingRight: scrolled ? 24 : 40,
        borderTopLeftRadius: scrolled ? 999 : 0,
        borderTopRightRadius: scrolled ? 999 : 0,
        borderBottomLeftRadius: scrolled ? 999 : 0,
        borderBottomRightRadius: scrolled ? 999 : 0,
        boxShadow: scrolled ? "0 8px 24px rgba(0,0,0,0.12)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 flex h-[72px] items-center justify-between"
      style={{
        background: "var(--color-surface)",
        borderBottom: "2px solid var(--color-ink)",
        borderLeft: scrolled ? "2px solid var(--color-ink)" : "none",
        borderRight: scrolled ? "2px solid var(--color-ink)" : "none",
        borderTop: scrolled ? "2px solid var(--color-ink)" : "none",
      }}
    >
      <Link to="/" className="text-lg font-bold" style={{ color: "var(--color-ink)" }}>
        Steller Industries
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-6" style={{ color: "var(--color-ink)" }}>
        {NAV_LINKS.map((link, i) => (
          <span key={link.path} className="flex items-center gap-6">
            <Link
              to={link.path}
              className={`transition-opacity hover:opacity-70 ${location.pathname === link.path ? "font-semibold" : ""}`}
            >
              {link.label}
            </Link>
            {i < NAV_LINKS.length - 1 && <span className="opacity-30">|</span>}
          </span>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-5 h-0.5 bg-ink transition-transform" style={{ transform: mobileOpen ? "rotate(45deg) translateY(4px)" : "none" }} />
        <span className="block w-5 h-0.5 bg-ink transition-opacity" style={{ opacity: mobileOpen ? 0 : 1 }} />
        <span className="block w-5 h-0.5 bg-ink transition-transform" style={{ transform: mobileOpen ? "rotate(-45deg) translateY(-4px)" : "none" }} />
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[72px] left-0 right-0 bg-surface border-b-2 border-ink md:hidden z-50"
          >
            <div className="flex flex-col px-10 py-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base transition-opacity hover:opacity-70 ${location.pathname === link.path ? "font-semibold" : ""}`}
                  style={{ color: "var(--color-ink)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
