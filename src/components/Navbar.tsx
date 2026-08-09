import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const NOTCH = 32;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        marginLeft: scrolled ? 24 : 0,
        marginRight: scrolled ? 24 : 0,
        marginTop: scrolled ? 16 : 0,
        paddingLeft: scrolled ? 24 : 40,
        paddingRight: scrolled ? 24 : 40,
        borderTopLeftRadius: scrolled ? 999 : 0,
        borderTopRightRadius: scrolled ? 999 : 0,
        borderBottomLeftRadius: scrolled ? 999 : NOTCH,
        borderBottomRightRadius: scrolled ? 999 : NOTCH,
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
      {!scrolled && (
        <>
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0"
            style={{
              width: NOTCH,
              height: NOTCH,
              transform: "translateY(100%)",
              background: `radial-gradient(circle at top left, transparent ${NOTCH - 1}px, var(--color-cream) ${NOTCH}px)`,
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0"
            style={{
              width: NOTCH,
              height: NOTCH,
              transform: "translateY(100%) scaleX(-1)",
              background: `radial-gradient(circle at top left, transparent ${NOTCH - 1}px, var(--color-cream) ${NOTCH}px)`,
            }}
          />
        </>
      )}

      <Link to="/" className="text-lg font-bold" style={{ color: "var(--color-ink)" }}>
        Steller Industries
      </Link>

      <div className="flex items-center gap-6" style={{ color: "var(--color-ink)" }}>
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
    </motion.nav>
  );
}
