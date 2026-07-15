"use client";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  colorFrom?: string;
  colorTo?: string;
  duration?: number;
}

export function BorderBeam({
  className,
  colorFrom = "#f967fb",
  colorTo = "#6958d5",
  duration = 5,
}: BorderBeamProps) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:1px_solid_transparent]",
        "![mask-clip:padding-box,border-box]",
        "![mask-composite:intersect]",
        "[mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        "after:absolute after:aspect-square after:w-[160px]",
        "after:animate-border-beam",
        "after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)]",
        "after:[offset-anchor:90%_50%]",
        "after:[offset-path:rect(0_auto_auto_0_round_0px)]",
        className
      )}
      style={
        {
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--duration": `${duration}s`,
        } as React.CSSProperties
      }
    />
  );
}
