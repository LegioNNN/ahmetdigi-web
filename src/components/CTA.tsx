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
            href="https://wa.me/905551712526"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 bg-cream text-ink text-sm font-bold tracking-widest px-8 py-4 hover:opacity-90 transition-opacity cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.103 1.523 5.824L.057 23.882a.5.5 0 0 0 .612.612l6.058-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.518-5.17-1.418l-.37-.22-3.833.927.944-3.748-.242-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp&apos;tan Yaz
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
