"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Cursor from "@/components/Cursor";
import { useLang } from "@/lib/LanguageContext";
import { Globe } from "@/components/ui/globe";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const SKILLS = [
  "Next.js",
  "React",
  "PostgreSQL",
  "JavaScript",
  "TypeScript",
  "Dijital Reklamcılık",
  "Yerel SEO",
  "Performans Pazarlaması",
  "Kurumsal Kimlik",
  "Sosyal Medya Yönetimi",
  "Full-Stack Geliştirme",
  "UI/UX Tasarım",
];

const EXPERIENCE = [
  {
    company: "HCA Motors",
    role: "Dijital Pazarlama & SEO Uzmanı",
    sector: "Otomotiv",
    desc: "Yerel SEO, performans pazarlaması ve potansiyel müşterileri doğrudan satış kanallarına çekme operasyonlarını uçtan uca yönettim. Marka tescil süreçleri ve kurumsal kimlik çalışmalarını koordine ettim.",
  },
  {
    company: "E-Lidya",
    role: "Dijital Dönüşüm Sorumlusu",
    sector: "E-Dönüşüm",
    desc: "İşletmelerin dijital dönüşüm süreçlerini yönettim. Geleneksel iş akışlarını dijitalleştirerek ölçülebilir ticari değer yaratan sistemler kurdum.",
  },
];

export default function HakkimdaPage() {
  const { lang } = useLang();
  return (
    <>
      <Cursor />

      <div className="bg-ink text-cream min-h-screen font-sans antialiased">
        {/* Back link */}
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          data-hover
          className="fixed top-7 left-7 z-50 flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-cream/50 hover:text-cream transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          AHMET.DIGITAL
        </motion.a>

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 sm:px-12 max-w-[1400px] mx-auto overflow-hidden">
          {/* Globe */}
          <div className="absolute right-[-10%] top-[5%] w-[55vw] max-w-[700px] aspect-square opacity-30 pointer-events-none select-none">
            <Globe />
          </div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-[11px] font-bold tracking-[0.28em] text-cream/40 mb-6 uppercase"
          >
            Full-Stack Developer & Dijital Stratejist
          </motion.p>

          {/* Draw line cream */}
          <div
            className="h-[2px] bg-cream mb-8 draw-line"
            style={{ maxWidth: 72 }}
          />

          {/* Name */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(4rem,16vw,16rem)] font-bold leading-[0.88] tracking-tight"
            >
              AHMET
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.5rem,5vw,5rem)] font-bold leading-none tracking-tight text-cream/30"
            >
              ÖZCAN
            </motion.h2>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.65 }}
            className="max-w-xl text-base sm:text-lg leading-relaxed text-cream/60"
          >
            Modern kod mimarisi ile gerçek dünya iş mantığı arasındaki köprüyü kuruyorum.
          </motion.p>
        </section>

        {/* ── BIO ── */}
        <section className="border-t border-cream/10 px-6 sm:px-12 py-24 sm:py-32 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
            <Reveal>
              <p className="text-[11px] font-bold tracking-[0.25em] text-cream/35 uppercase">
                Hakkımda
              </p>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.05}>
                <p className="text-xl sm:text-2xl leading-[1.65] text-cream/85">
                  Bilgisayar Programcılığı eğitimimle kazandığım güçlü altyapıyı,{" "}
                  <span className="text-cream font-semibold">Next.js, TypeScript ve PostgreSQL</span> gibi
                  modern teknolojilerle birleştirerek işletmeler için sadece web sitesi değil;
                  hızlı, SEO dostu ve yüksek performanslı{" "}
                  <span className="text-cream font-semibold">dijital ekosistemler</span> inşa ediyorum.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base sm:text-lg leading-[1.8] text-cream/55">
                  Benim odak noktam, geleneksel iş akışlarını dijitalleştirerek firmalara
                  ölçülebilir ticari değer ve kazanç sağlamak. Bugüne kadar otomotiv ve e-dönüşüm
                  sektörlerinde aktif roller üstlenerek; performans pazarlaması, yerel SEO, marka
                  tescil süreçleri ve potansiyel müşterileri doğrudan satış kanallarına çekme
                  operasyonlarını uçtan uca yönettim.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-base sm:text-lg leading-[1.8] text-cream/55">
                  ahmet.digital çatısı altında esnafların dijital dönüşüm süreçlerine esnek ve
                  yenilikçi çözümler üretmeye devam ediyorum. Kodun gücünü, ticari zekayla
                  birleştirmek en büyük motivasyonum.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="border-t border-cream/10 px-6 sm:px-12 py-24 sm:py-32 max-w-[1400px] mx-auto">
          <Reveal className="mb-16">
            <div className="flex items-baseline justify-between border-b border-cream/10 pb-6">
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Deneyim</h3>
              <span className="text-[11px] font-bold tracking-[0.2em] text-cream/30">0{EXPERIENCE.length}</span>
            </div>
          </Reveal>

          <div className="space-y-px bg-cream/[0.06]">
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.1}>
                <div className="group bg-ink hover:bg-cream/[0.04] transition-colors duration-300 p-8 sm:p-10 relative overflow-hidden">
                  {/* Ghost company name behind */}
                  <div
                    aria-hidden
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[clamp(3rem,8vw,7rem)] font-bold text-cream/[0.035] leading-none select-none pointer-events-none whitespace-nowrap"
                  >
                    {exp.company}
                  </div>

                  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 sm:gap-16 items-start">
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.22em] text-cream/35 mb-2">{exp.sector}</p>
                      <h4 className="text-2xl sm:text-3xl font-bold leading-tight">{exp.company}</h4>
                    </div>
                    <div>
                      <p className="text-sm font-bold tracking-[0.1em] text-cream/50 mb-3">{exp.role}</p>
                      <p className="text-base leading-relaxed text-cream/60">{exp.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="border-t border-cream/10 px-6 sm:px-12 py-24 sm:py-32 max-w-[1400px] mx-auto">
          <Reveal className="mb-16">
            <p className="text-[11px] font-bold tracking-[0.25em] text-cream/35 uppercase mb-4">Uzmanlıklar</p>
          </Reveal>

          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, i) => (
              <Reveal key={skill} delay={i * 0.04}>
                <div className="border border-cream/20 px-5 py-3 text-sm sm:text-base font-bold tracking-wide hover:bg-cream hover:text-ink transition-colors duration-200 cursor-default">
                  {skill}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-cream/10 px-6 sm:px-12 py-24 sm:py-36 max-w-[1400px] mx-auto">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
              <div>
                <p className="text-[11px] font-bold tracking-[0.25em] text-cream/35 mb-4 uppercase">Birlikte Çalışalım</p>
                <h3 className="text-[clamp(2rem,7vw,7rem)] font-bold leading-[0.92] tracking-tight">
                  Projen için<br />
                  <span className="text-cream/30">hazırım.</span>
                </h3>
              </div>
              <a
                href="https://wa.me/905551712526"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="group flex items-center gap-4 bg-cream text-ink px-8 py-5 font-bold text-[11px] tracking-[0.22em] hover:gap-8 transition-all duration-300 shrink-0"
              >
                {lang === "tr" ? "WhatsApp'tan Yaz" : "Message on WhatsApp"}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </Reveal>
        </section>

        {/* Footer */}
        <footer className="border-t border-cream/10 px-6 sm:px-12 py-8 max-w-[1400px] mx-auto flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-[0.2em] text-cream/25">AHMET.DIGITAL</span>
          <span className="text-[11px] text-cream/25">© {new Date().getFullYear()}</span>
        </footer>
      </div>
    </>
  );
}
