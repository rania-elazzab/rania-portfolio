import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["services", "Services"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"]
];

function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 200 && !menuOpen);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line-soft bg-white/80 backdrop-blur-xl shadow-[0_6px_24px_rgba(61,16,36,0.06)]"
          : "border-b border-transparent bg-transparent",
        hidden && "-translate-y-full"
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-berry to-plum-700 font-serif text-xl font-bold text-white shadow-[0_8px_20px_rgba(86,24,48,0.3)] transition-transform group-hover:-rotate-6">
            R
          </span>
          <span className="font-serif text-lg font-bold tracking-wide text-ink">
            RANIA<span className="text-berry">EL</span> AZZAB
          </span>
        </a>

        <nav
          id="site-menu"
          aria-label="Primary"
          className={cn(
            "fixed inset-x-0 top-0 z-40 flex h-full flex-col items-center justify-center gap-3 bg-cream transition-all duration-500 lg:static lg:h-auto lg:flex-row lg:gap-1 lg:bg-transparent lg:backdrop-blur-none",
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 lg:translate-y-0 lg:opacity-100"
          )}
        >
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className={cn(
                "rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors",
                activeSection === id
                  ? "bg-gradient-to-br from-berry to-plum-700 text-white shadow-md"
                  : "text-ink-soft hover:text-berry"
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="relative z-50 flex items-center gap-3">
          <a
            href="#contact"
            onClick={closeMenu}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-br from-berry to-plum-700 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(86,24,48,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(86,24,48,0.4)] sm:inline-flex"
          >
            Let's talk
            <ArrowUpRight className="size-3.5" />
          </a>

          <button
            className={cn(
              "relative flex size-11 flex-col items-center justify-center gap-2 rounded-xl border border-line bg-white lg:hidden"
            )}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
          >
            <span
              className={cn(
                "block h-0.5 w-5 rounded bg-ink transition-transform",
                menuOpen && "translate-y-1.5 rotate-45"
              )}
            ></span>
            <span
              className={cn(
                "block h-0.5 w-5 rounded bg-ink transition-transform",
                menuOpen && "-translate-y-1.5 -rotate-45"
              )}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
