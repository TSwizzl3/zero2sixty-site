// src/components/credibility-strip.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function CredibilityStrip() {
  const pathname = usePathname() || "/";

  const isWork = pathname.startsWith("/work");
  const isStart = pathname.startsWith("/start");

  const leftPrimary = isWork
    ? "Real examples • Real scopes • Clean delivery"
    : isStart
      ? "Quick intake • Clear scope • Fast quote"
      : "Fast turnarounds • Clean delivery • No fluff";

  const leftSecondary = "Apps • Video • Branding • Web";

  const rightPrompt = isWork
    ? "Like what you see?"
    : isStart
      ? "Want a clean quote?"
      : "Need proof fast?";

  const ctaHref = isWork ? "/start" : "/work";
  const ctaLabel = isWork ? "Start a project" : "See recent work";

  return (
    <div className="w-full border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/70">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" />
            {leftPrimary}
          </span>

          <span className="hidden sm:inline text-white/30">|</span>

          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />
            {leftSecondary}
          </span>

          <span className="hidden sm:inline text-white/30">|</span>

          <span>Denver-based • Remote-friendly</span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="text-white/50">{rightPrompt}</span>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            {ctaLabel}
            <span aria-hidden className="text-white/40">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}