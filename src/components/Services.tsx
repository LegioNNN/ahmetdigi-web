"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export default function Services() {
  const { lang } = useLang();
  const t = content[lang].services;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState(0);

  const total = t.categories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <section id="services" ref={ref} className="py-24 sm:py-36 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-baseline justify-between mb-12 sm:mb-16 border-b border-ink pb-6"
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">{t.title}</h2>
        <span className="text-xs font-bold tracking-[0.2em] text-muted tabular-nums">
          {total} {lang === "tr" ? "HİZMET" : "SERVICES"}
        </span>
      </motion.div>

      {/* Accordion panels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="border-t border-ink/15"
      >
        {t.categories.map((cat, ci) => {
          const isOpen = open === ci;
          return (
            <div key={cat.label} className="border-b border-ink/15">
              {/* Panel header */}
              <button
                onClick={() => setOpen(isOpen ? -1 : ci)}
                data-hover
                className="w-full flex items-center gap-4 py-5 sm:py-6 text-left cursor-pointer group"
                aria-expanded={isOpen}
              >
                <span className="text-[11px] font-bold tracking-[0.25em] text-ink/40 tabular-nums">
                  0{ci + 1}
                </span>
                <span className="flex-1 text-sm sm:text-base font-bold tracking-[0.15em] uppercase group-hover:text-ink transition-colors">
                  {cat.label}
                </span>
                <span className="text-[11px] font-bold text-muted tabular-nums">
                  {cat.items.length}
                </span>
                <motion.svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="shrink-0 text-ink/50"
                  aria-hidden
                >
                  <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </button>

              {/* Panel content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 mb-6">
                      {cat.items.map((item) => (
                        <div
                          key={item.name}
                          className="bg-cream p-5 sm:p-6 group/item hover:bg-ink hover:text-cream transition-colors duration-300 cursor-default"
                        >
                          <h3 className="text-base sm:text-lg font-bold mb-2 leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-sm leading-relaxed text-muted group-hover/item:text-cream/65 transition-colors duration-300">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
