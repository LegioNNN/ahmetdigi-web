"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "./content";

const LangCtx = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "tr", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("tr");
  return (
    <LangCtx.Provider value={{ lang, toggle: () => setLang((l) => (l === "tr" ? "en" : "tr")) }}>
      {children}
    </LangCtx.Provider>
  );
}

export const useLang = () => useContext(LangCtx);
