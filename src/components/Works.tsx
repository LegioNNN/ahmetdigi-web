"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export default function Works() {
  const { lang } = useLang();
  const t = content[lang].works;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="works" ref={ref} className="py-24 sm:py-36 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-baseline justify-between mb-16 sm:mb-20 border-b border-ink pb-6"
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">{t.title}</h2>
        <span className="text-xs font-bold tracking-[0.2em] text-muted tabular-nums">
          0{t.items.length} {lang === "tr" ? "PROJE" : "PROJECTS"}
        </span>
      </motion.div>

      <div className="space-y-16 sm:space-y-24">
        {t.items.map((item, i) => {
          const imageInner = (
            <div className="relative aspect-[16/10] overflow-hidden border border-ink/15 bg-ink/[0.04]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* Status badge */}
              <span
                className={
                  "absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] " +
                  (item.live
                    ? "bg-emerald-500 text-ink"
                    : "bg-ink/80 text-cream backdrop-blur-sm")
                }
              >
                {item.live && <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse" />}
                {item.live ? t.liveLabel : t.showcaseLabel}
              </span>
            </div>
          );

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
            >
              {/* Image */}
              <div className={"group " + (i % 2 === 1 ? "lg:order-2" : "")}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" data-hover className="block">
                    {imageInner}
                  </a>
                ) : (
                  imageInner
                )}
              </div>

              {/* Info */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-bold tracking-[0.25em] text-ink/40 tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted">
                    {item.sector}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-2">
                  {item.name}
                </h3>
                <p className="text-sm font-bold tracking-[0.08em] text-ink/60 mb-5">
                  {item.role}
                </p>

                <p className="text-base leading-relaxed text-muted mb-7 max-w-md">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-ink/20 px-3 py-1.5 text-[11px] font-bold tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover
                    className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] hover:gap-5 transition-all duration-300"
                  >
                    {t.visit}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                      <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
