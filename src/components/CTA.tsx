"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export default function CTA() {
  const { lang } = useLang();
  const t = content[lang].cta;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" ref={ref} className="py-12 sm:py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto bg-ink text-cream p-10 sm:p-16 md:p-24"
      >
        <p className="text-xs font-bold tracking-[0.2em] text-cream/40 mb-8">{t.badge}</p>

        <h2 className="text-[clamp(2rem,5.5vw,5rem)] font-bold leading-tight tracking-tight whitespace-pre-line mb-8">
          {t.headline}
        </h2>

        <p className="text-cream/60 text-base sm:text-lg mb-12 max-w-md">{t.body}</p>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <motion.a
            href={`mailto:${t.email}`}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            className="bg-cream text-ink text-sm font-bold tracking-widest px-8 py-4 hover:opacity-90 transition-opacity cursor-pointer"
          >
            {t.btn}
          </motion.a>
          <a
            href={`mailto:${t.email}`}
            className="text-cream/60 text-sm hover:text-cream transition-colors"
          >
            {t.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
