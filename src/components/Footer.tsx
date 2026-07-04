"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export default function Footer() {
  const { lang } = useLang();
  const t = content[lang].footer;

  return (
    <footer className="py-12 px-6 border-t border-ink/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="font-bold text-lg tracking-tight mb-1">ahmet.digital</div>
          <div className="text-xs font-bold tracking-[0.15em] text-muted">{t.tagline}</div>
        </div>
        <p className="text-xs text-muted">{t.copy}</p>
      </div>
    </footer>
  );
}
