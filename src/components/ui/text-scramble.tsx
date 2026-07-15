"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TextScramble({ text, className, speed = 28 }: TextScrambleProps) {
  const [display, setDisplay] = useState(() => text.replace(/[^ ]/g, CHARS[0]));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    let iteration = 0;
    const id = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " " || char === "\n") return char;
            if (i < iteration) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration += 0.6;
      if (iteration >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [inView, text, speed]);

  return (
    <span ref={ref} className={cn("font-mono", className)} aria-label={text}>
      {display}
    </span>
  );
}
