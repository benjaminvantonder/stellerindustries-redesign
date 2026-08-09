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

  // Pill mode only when scrolled AND mobile menu is closed
  const pill = scrolled && !mobileOpen;

  return (
    <motion.nav
      initial={false}
      animate={{
        marginLeft: pill ? 24 : 0,
        marginRight: pill ? 24 : 0,
        marginTop: pill ? 16 : 4,
        marginBottom: pill ? 0 : 4,
        paddingLeft: pill ? 24 : 32,
        paddingRight: pill ? 24 : 32,
        borderTopLeftRadius: pill ? 999 : 0,
        borderTopRightRadius: pill ? 999 : 0,
        borderBottomLeftRadius: pill ? 999 : 0,
        borderBottomRightRadius: pill ? 999 : 0,
        boxShadow: pill ? "0 8px 24px rgba(0,0,0,0.12)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 flex h-[64px] md:h-[72px] items-center justify-between overflow-visible"
      style={{
        background: "var(--color-surface)",
        borderBottom: "2px solid var(--color-ink)",
        borderLeft: pill ? "2px solid var(--color-ink)" : "none",
        borderRight: pill ? "2px solid var(--color-ink)" : "none",
        borderTop: pill ? "2px solid var(--color-ink)" : "none",
      }}
    >
      <Link to="/" className="text-base md:text-lg font-bold shrink-0" style={{ color: "var(--color-ink)" }}>
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
        className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 shrink-0"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className="block w-5 h-[2px] bg-ink absolute transition-transform duration-200"
          style={{
            transform: mobileOpen ? "rotate(45deg)" : "translateY(-4px)",
          }}
        />
        <span
          className="block w-5 h-[2px] bg-ink absolute transition-opacity duration-200"
          style={{ opacity: mobileOpen ? 0 : 1 }}
        />
        <span
          className="block w-5 h-[2px] bg-ink absolute transition-transform duration-200"
          style={{
            transform: mobileOpen ? "rotate(-45deg)" : "translateY(4px)",
          }}
        />
      </button>

      {/* Mobile dropdown — spans full viewport width regardless of nav margins */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[64px] md:hidden z-50"
            style={{ background: "var(--color-surface)", borderBottom: "2px solid var(--color-ink)" }}
          >
            <div className="px-6 py-5 flex flex-col gap-3">
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
