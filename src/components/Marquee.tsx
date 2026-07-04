"use client";

const ITEMS = [
  "SOSYAL MEDYA YÖNETİMİ",
  "WEB GELİŞTİRME",
  "MARKA KİMLİĞİ",
  "DİJİTAL DÖNÜŞÜM",
  "UI/UX TASARIM",
  "SOSYAL MEDYA BÜYÜMESİ",
];

const track = ITEMS.join("  ·  ") + "  ·  ";

export default function Marquee() {
  return (
    <div className="bg-ink text-cream py-[14px] overflow-hidden select-none border-y border-ink">
      <div className="flex whitespace-nowrap">
        <span className="animate-marquee inline-flex shrink-0 gap-0">
          {[0, 1].map((i) => (
            <span key={i} className="text-[11px] font-bold tracking-[0.22em] pr-0">
              {track.repeat(4)}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
