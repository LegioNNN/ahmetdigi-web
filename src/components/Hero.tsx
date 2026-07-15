"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { TubesBackground } from "@/components/ui/neon-flow";
import { TextScramble } from "@/components/ui/text-scramble";
import { MagneticButton } from "@/components/ui/magnetic-button";

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const words = text.split(" ");
  return (
    <span ref={ref} className="inline">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: delay + i * 0.055, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}{i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time}</span>;
}

export default function Hero() {
  const { lang } = useLang();
  const t = content[lang].hero;

  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame: number;
    const target = 50;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    const timer = setTimeout(() => { frame = requestAnimationFrame(tick); }, 800);
    return () => { clearTimeout(timer); cancelAnimationFrame(frame); };
  }, []);

  const lines = t.headline.split("\n");

  return (
    <section className="relative min-h-screen overflow-hidden">
    <TubesBackground className="absolute inset-0 opacity-60 mix-blend-multiply" />
    <div className="relative z-10 min-h-screen flex flex-col justify-end pb-24 pt-32 px-6 max-w-6xl mx-auto overflow-hidden">

      {/* Dot grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(10,10,10,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Top-left status bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="absolute top-20 left-6 flex flex-col gap-1.5"
      >
        <div className="flex items-center gap-2">
          {/* Pulsing green dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[10px] font-bold tracking-[0.25em] text-ink/50">
            {lang === "tr" ? "SİSTEM AKTİF" : "SYSTEM ONLINE"}
          </span>
        </div>
        <div className="text-[10px] font-mono tracking-[0.15em] text-ink/30 pl-4">
          <Clock />
        </div>
      </motion.div>

      {/* Top-right coordinates */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute top-20 right-6 text-right"
      >
        <div className="text-[10px] font-mono tracking-[0.12em] text-ink/25 leading-relaxed">
          <div>41°0′49″N</div>
          <div>28°57′18″E</div>
          <div className="mt-1 text-ink/15">İSTANBUL, TR</div>
        </div>
      </motion.div>

      {/* Giant decorative "DIGITAL" */}
      <div
        aria-hidden
        className="absolute right-[-4vw] top-[10%] text-[clamp(8rem,28vw,26rem)] font-bold leading-none tracking-tight text-ink/[0.03] select-none pointer-events-none whitespace-nowrap"
      >
        DIGITAL
      </div>

      {/* Badge */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-[11px] font-bold tracking-[0.28em] text-muted mb-7 uppercase"
      >
        <TextScramble text={t.badge} speed={35} />
      </motion.p>

      <div className="h-[2px] bg-ink mb-8 draw-line" style={{ maxWidth: 72 }} />

      {/* Headline */}
      <h1 className="text-[clamp(3rem,8.5vw,8rem)] font-bold leading-[0.91] tracking-tight mb-12">
        {lines.map((line, i) => (
          <span key={i} className="block">
            <WordReveal text={line} delay={0.2 + i * 0.1} />
          </span>
        ))}
      </h1>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16"
      >
        <MagneticButton>
        <a
          href="#contact"
          data-hover
          className="group relative bg-ink text-cream text-[11px] font-bold tracking-[0.22em] px-9 py-4 overflow-hidden inline-block"
        >
          <span className="relative z-10">{t.cta}</span>
          <span className="absolute inset-0 bg-cream scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          <span className="absolute inset-0 flex items-center justify-center z-20 text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-bold text-[11px] tracking-[0.22em]">
            {t.cta}
          </span>
        </a>
        </MagneticButton>
        <p className="text-sm text-muted">{t.ctaSub}</p>
      </motion.div>

      {/* Bottom row: sub + stat */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-10 sm:gap-20 items-start"
      >
        <p className="max-w-sm text-base text-muted leading-relaxed">{t.sub}</p>

        {/* Stats cluster */}
        <div className="flex gap-10 shrink-0">
          {[
            { val: `${count}+`, label: lang === "tr" ? "PROJE" : "PROJECTS" },
            { val: "3+", label: lang === "tr" ? "YIL" : "YEARS" },
            { val: "20+", label: lang === "tr" ? "MÜŞTERİ" : "CLIENTS" },
          ].map(({ val, label }) => (
            <div key={label}>
              <div className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-tight leading-none tabular-nums">
                {val}
              </div>
              <div className="text-[10px] font-bold tracking-[0.22em] text-muted mt-1.5">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom-right corner marker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 right-6 flex items-center gap-2 text-[10px] font-mono tracking-[0.15em] text-ink/20"
      >
        <span>V 1.0</span>
        <span className="w-4 h-px bg-ink/20" />
        <span>AHMET.DIGITAL</span>
      </motion.div>
    </div>
    </section>
  );
}
