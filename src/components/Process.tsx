"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

/** Numbered treasure-map pin */
function Pin({ no, inView, delay }: { no: string; inView: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: -8 }}
      animate={inView ? { scale: 1, opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className="relative shrink-0"
    >
      <svg width="38" height="46" viewBox="0 0 24 30" className="text-ink" aria-hidden>
        <path
          d="M12 1C6.5 1 2 5.3 2 10.4 2 17.6 12 29 12 29s10-11.4 10-18.6C22 5.3 17.5 1 12 1z"
          fill="currentColor"
        />
      </svg>
      <span className="absolute inset-x-0 top-[6px] text-center text-[11px] font-bold text-cream tabular-nums">
        {no}
      </span>
    </motion.div>
  );
}

/** Dashed curved trail connecting the steps */
function Trail({ inView, delay }: { inView: boolean; delay: number }) {
  const d = "M20 0 C 37 28, 3 68, 20 100";
  return (
    <div className="flex-1 w-full relative min-h-[44px]">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 40 100"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
      >
        {/* faint static route */}
        <path
          d={d}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 7"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="text-ink/15"
        />
        {/* animated progress path drawing in */}
        <motion.path
          d={d}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 7"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="text-ink/45"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.9, delay, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

/** Destination marker — flag inside a slowly rotating dashed compass ring */
function Goal({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className="relative w-12 h-12 shrink-0"
    >
      <motion.svg
        className="absolute inset-0 text-ink/30"
        viewBox="0 0 48 48"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 6" />
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-ink" fill="none" aria-hidden>
          <path d="M6 22V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 4h12l-2.5 3.5L18 11H6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="currentColor" fillOpacity="0.12" />
        </svg>
      </div>
    </motion.div>
  );
}

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

      {/* Treasure-map trail */}
      <div className="relative pl-1">
        {t.steps.map((step, i) => (
          <div key={step.no} className="flex gap-5 sm:gap-8">
            {/* Left rail: pin + trail */}
            <div className="flex flex-col items-center shrink-0 w-10">
              <Pin no={step.no} inView={inView} delay={0.25 + i * 0.18} />
              <Trail inView={inView} delay={0.4 + i * 0.18} />
            </div>

            {/* Step content */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.35 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="pb-10 sm:pb-12 pt-1.5 min-h-[92px]"
            >
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">{step.title}</h3>
              <p className="mt-2 text-muted leading-relaxed text-sm sm:text-base max-w-md">
                {step.desc}
              </p>
            </motion.div>
          </div>
        ))}

        {/* Destination */}
        <div className="flex gap-5 sm:gap-8 items-center">
          <div className="flex flex-col items-center shrink-0 w-10">
            <Goal inView={inView} delay={0.35 + t.steps.length * 0.18} />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.45 + t.steps.length * 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="pt-1"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] text-muted mb-1">{t.goal.label}</p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{t.goal.title}</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
