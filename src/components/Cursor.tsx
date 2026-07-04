"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const blobX = useSpring(mx, { stiffness: 90, damping: 22 });
  const blobY = useSpring(my, { stiffness: 90, damping: 22 });
  const dotX = useSpring(mx, { stiffness: 500, damping: 30 });
  const dotY = useSpring(my, { stiffness: 500, damping: 30 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a, button, [data-hover]"));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [visible, mx, my]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        style={{ left: blobX, top: blobY }}
        animate={{ scale: hovering ? 2.2 : 1, opacity: hovering ? 0.12 : 0.07 }}
        transition={{ duration: 0.2 }}
        className="fixed w-14 h-14 -translate-x-1/2 -translate-y-1/2 bg-ink rounded-full pointer-events-none z-[9997] mix-blend-multiply"
      />
      <motion.div
        style={{ left: dotX, top: dotY }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
        className="fixed w-[6px] h-[6px] -translate-x-1/2 -translate-y-1/2 bg-ink rounded-full pointer-events-none z-[9997]"
      />
    </>
  );
}
