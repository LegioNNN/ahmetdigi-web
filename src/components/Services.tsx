"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export default function Services() {
  const { lang } = useLang();
  const t = content[lang].services;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-24 sm:py-36 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-baseline justify-between mb-16 border-b border-ink pb-6"
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">{t.title}</h2>
        <span className="text-xs font-bold tracking-[0.2em] text-muted">0{t.items.length}</span>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
        {t.items.map((item, i) => (
          <motion.div
            key={item.no}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-cream p-8 sm:p-10 group hover:bg-ink hover:text-cream transition-colors duration-300 overflow-hidden cursor-default"
          >
            {/* Giant background number */}
            <div
              aria-hidden
              className="absolute right-3 bottom-2 text-[7rem] font-bold leading-none tracking-tight text-ink/[0.05] group-hover:text-cream/[0.07] transition-colors duration-300 select-none pointer-events-none"
            >
              {item.no.replace("0", "")}
            </div>

            <div className="relative z-10">
              <p className="text-[11px] font-bold tracking-[0.22em] text-muted group-hover:text-cream/50 mb-8 transition-colors duration-300">
                {item.no}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">{item.name}</h3>
              <p className="text-sm leading-relaxed text-muted group-hover:text-cream/65 transition-colors duration-300">
                {item.desc}
              </p>

              {/* Arrow that slides in */}
              <div className="mt-8 flex items-center gap-2 overflow-hidden">
                <motion.div
                  className="flex items-center gap-2 text-cream opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300"
                >
                  <div className="h-px w-6 bg-cream" />
                  <span className="text-[11px] font-bold tracking-[0.2em]">
                    {lang === "tr" ? "KEŞFET" : "EXPLORE"}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
