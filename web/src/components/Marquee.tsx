"use client";
import { useMemo } from "react";

type MarqueeProps = {
  items?: string[];
  speedMs?: number;
};

export function Marquee({ items, speedMs = 18000 }: MarqueeProps): JSX.Element {
  const data = useMemo(
    () =>
      items ?? [
        "Perplexity",
        "Cal.com",
        "Loops",
        "Mollie",
        "Linear",
        "Vercel",
        "Figma",
        "Notion",
      ],
    [items]
  );

  return (
    <div className="marquee relative overflow-hidden py-6 border-y border-white/10">
      <div
        className="marquee-track flex items-center gap-8 will-change-transform"
        style={{ animationDuration: `${speedMs}ms` }}
      >
        {[...data, ...data].map((label, i) => (
          <div
            key={i}
            className="px-4 py-2 rounded-md bg-white/[0.04] border border-white/10 text-white/80 text-sm whitespace-nowrap"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}


