"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export default function Nav() {
  const { lang, toggle } = useLang();
  const t = content[lang].nav;

  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 60);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  // close menu on route change / scroll
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = (["services", "about", "process", "contact"] as const);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-ink/10 transition-transform duration-300"
        style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="text-lg font-bold tracking-tight">ahmet.digital</span>
            <span className="hidden sm:flex items-center gap-1.5 border border-ink/20 px-2 py-0.5 text-[9px] font-bold tracking-[0.2em] text-ink/35 group-hover:border-ink/40 transition-colors duration-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              HQ
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((key) => (
              <a
                key={key}
                href={key === "about" ? "/hakkimda" : `#${key}`}
                className="text-sm font-medium text-muted hover:text-ink transition-colors duration-150 cursor-pointer"
              >
                {t[key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="text-xs font-bold tracking-widest border border-ink px-3 py-1.5 hover:bg-ink hover:text-cream transition-colors duration-150 cursor-pointer"
            >
              {lang === "tr" ? "EN" : "TR"}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer"
              aria-label="Menu"
            >
              <span
                className="block h-[2px] bg-ink transition-all duration-300"
                style={{
                  transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-[2px] bg-ink transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-[2px] bg-ink transition-all duration-300"
                style={{
                  transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 bg-cream flex flex-col justify-center px-8 md:hidden transition-all duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
        }}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-bold tracking-tight hover:opacity-60 transition-opacity cursor-pointer"
            >
              {t[key]}
            </a>
          ))}
        </nav>
        <button
          onClick={toggle}
          className="mt-12 self-start text-xs font-bold tracking-widest border border-ink px-4 py-2 hover:bg-ink hover:text-cream transition-colors cursor-pointer"
        >
          {lang === "tr" ? "EN" : "TR"}
        </button>
      </div>
    </>
  );
}
