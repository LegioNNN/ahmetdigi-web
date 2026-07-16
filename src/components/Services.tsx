"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Services() {
  const { lang } = useLang();
  const t = content[lang].services;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const total = t.categories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <section id="services" ref={ref} className="py-24 sm:py-36 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-baseline justify-between mb-20 border-b border-ink pb-6"
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">{t.title}</h2>
        <span className="text-xs font-bold tracking-[0.2em] text-muted">
          {total} {lang === "tr" ? "HİZMET" : "SERVICES"}
        </span>
      </motion.div>

      <div className="space-y-20">
        {t.categories.map((cat, ci) => (
          <div key={cat.label}>
            {/* Category header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-[11px] font-bold tracking-[0.25em] text-ink/40 tabular-nums">
                0{ci + 1}
              </span>
              <span className="text-sm font-bold tracking-[0.15em] uppercase">
                {cat.label}
              </span>
              <div className="flex-1 h-px bg-ink/10" />
              <span className="text-[11px] font-bold text-muted tabular-nums">
                {cat.items.length}
              </span>
            </motion.div>

            {/* Category items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: ci * 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="relative bg-cream p-8 sm:p-9 group hover:bg-ink hover:text-cream transition-colors duration-300 overflow-hidden cursor-default [&:hover>span]:opacity-100"
                >
                  <BorderBeam className="opacity-0 transition-opacity duration-300" colorFrom="#f967fb" colorTo="#6958d5" duration={4} />
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 leading-tight">{item.name}</h3>
                    <p className="text-sm leading-relaxed text-muted group-hover:text-cream/65 transition-colors duration-300">
                      {item.desc}
                    </p>

                    {/* Arrow that slides in */}
                    <div className="mt-6 flex items-center gap-2 overflow-hidden">
                      <div className="flex items-center gap-2 text-cream opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                        <div className="h-px w-6 bg-cream" />
                        <span className="text-[11px] font-bold tracking-[0.2em]">
                          {lang === "tr" ? "KEŞFET" : "EXPLORE"}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
