"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export default function About() {
  const { lang } = useLang();
  const t = content[lang].about;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 px-6 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-xs font-bold tracking-[0.2em] text-muted mb-6"
      >
        {t.badge}
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight whitespace-pre-line mb-8">
            {t.headline}
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">{t.body}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid grid-cols-3 gap-6 lg:pt-4"
        >
          {t.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div className="text-4xl sm:text-6xl font-bold tracking-tight leading-none mb-2">
                {s.value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold tracking-[0.12em] text-muted uppercase leading-tight">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
