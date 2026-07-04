"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export default function Process() {
  const { lang } = useLang();
  const t = content[lang].process;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="py-24 sm:py-32 px-6 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-xs font-bold tracking-[0.2em] text-muted mb-6"
      >
        {t.badge}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-bold tracking-tight mb-16"
      >
        {t.title}
      </motion.h2>

      {/* Vertical connecting line + steps */}
      <div className="relative">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
          className="absolute left-0 top-0 bottom-0 w-px bg-ink/15 hidden sm:block"
        />

        <div className="divide-y divide-ink/10">
          {t.steps.map((step, i) => (
            <motion.div
              key={step.no}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-[48px_1fr] sm:grid-cols-[80px_1fr_2fr] gap-4 sm:gap-6 py-8 sm:pl-6 group hover:bg-ink hover:-mx-6 hover:px-6 hover:text-cream transition-all duration-200"
            >
              {/* Dot on line */}
              <div className="relative flex items-start pt-1">
                <span className="text-xs font-bold tracking-[0.2em] text-muted group-hover:text-cream/50">
                  {step.no}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">{step.title}</h3>
              <p className="col-span-2 sm:col-span-1 text-muted group-hover:text-cream/70 leading-relaxed text-sm sm:text-base">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
