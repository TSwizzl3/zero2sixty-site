"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type PortfolioItem = {
  title: string;
  subtitle: string;
  href: string;
  status: string;
  stack: string[];
  highlights: string[];
  accent: "green" | "blue" | "purple" | "orange";
  ctaLabel: string;
};

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

function accentClasses(accent: PortfolioItem["accent"]) {
  switch (accent) {
    case "green":
      return {
        glow: "bg-[var(--green)]/20",
        text: "text-[var(--green)]",
        border: "border-[var(--green)]/30",
      };
    case "blue":
      return {
        glow: "bg-[var(--blue)]/20",
        text: "text-[var(--blue)]",
        border: "border-[var(--blue)]/30",
      };
    case "purple":
      return {
        glow: "bg-fuchsia-400/20",
        text: "text-fuchsia-300",
        border: "border-fuchsia-300/30",
      };
    case "orange":
      return {
        glow: "bg-orange-400/20",
        text: "text-orange-300",
        border: "border-orange-300/30",
      };
  }
}

export function PortfolioCarouselCard() {
  const items: PortfolioItem[] = useMemo(
    () => [
      {
        title: "PulseOS",
        subtitle: "Business operating system for service-based companies.",
        href: "/#pulseos",
        status: "Flagship business app",
        stack: ["Flutter", "SaaS", "Dashboards", "Client Ops"],
        highlights: ["CRM-style workflow", "Business tools", "Built for real clients"],
        accent: "green",
        ctaLabel: "View PulseOS",
      },
      {
        title: "DFS Edge",
        subtitle: "Fantasy sports optimizer with simulations and lineup logic.",
        href: "/work",
        status: "Live app ecosystem",
        stack: ["Flutter", "FastAPI", "Python", "Algorithms"],
        highlights: ["MLB/NFL/NBA/NHL", "Lineup optimizer", "Subscription-ready"],
        accent: "blue",
        ctaLabel: "View DFS Edge",
      },
      {
        title: "HypeLoop",
        subtitle: "Trend discovery platform with feeds, alerts, and analytics.",
        href: "/work",
        status: "Startup product",
        stack: ["Flutter", "Supabase", "Firebase", "APIs"],
        highlights: ["Realtime feeds", "Push alerts", "Admin analytics"],
        accent: "purple",
        ctaLabel: "View HypeLoop",
      },
      {
        title: "Rebound",
        subtitle: "Intent-first dating app built and launched on Android.",
        href: "/work/rebound",
        status: "Google Play launch",
        stack: ["Flutter", "Supabase", "Firebase", "Auth"],
        highlights: ["User accounts", "Messaging flow", "Production deployment"],
        accent: "orange",
        ctaLabel: "View Rebound",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  pausedRef.current = paused;

  const len = items.length;
  const current = items[clampIndex(index, len)];
  const styles = accentClasses(current.accent);

  useEffect(() => {
    if (len <= 1) return;

    const timer = setInterval(() => {
      if (!pausedRef.current) {
        setIndex((i) => i + 1);
      }
    }, 6500);

    return () => clearInterval(timer);
  }, [len]);

  return (
    <div
      className="surface"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="surface-inner relative overflow-hidden p-6">
        <div className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full ${styles.glow} blur-3xl`} />
        <div className={`pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full ${styles.glow} blur-3xl`} />

        <div className="pointer-events-none absolute right-4 top-3 opacity-90">
          <Image
            src="/brand/logo_mark.png"
            alt="Zero2Sixty Media"
            width={600}
            height={600}
            priority
            className="h-24 w-auto select-none object-contain sm:h-28 md:h-32"
          />
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-black/40 p-5">
          <div className="flex items-center justify-between gap-4">
            <span className={`rounded-full border ${styles.border} bg-white/5 px-3 py-1 text-xs font-semibold ${styles.text}`}>
              {current.status}
            </span>

            <span className="text-xs text-white/45">
              {clampIndex(index, len) + 1} / {len}
            </span>
          </div>

          <Link href={current.href} className="mt-8 block">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.03] to-black p-6">
              <div className={`absolute inset-x-8 top-8 h-24 rounded-full ${styles.glow} blur-3xl`} />

              <div className="relative">
                <div className="mx-auto flex h-[340px] max-w-[230px] flex-col rounded-[2.2rem] border border-white/15 bg-black p-3 shadow-2xl">
                  <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />

                  <div className="flex flex-1 flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-zinc-950 p-4">
                    <div className={`mb-4 h-20 rounded-2xl border ${styles.border} ${styles.glow}`} />

                    <div className="space-y-2">
                      <div className="h-3 w-24 rounded-full bg-white/70" />
                      <div className="h-2 w-full rounded-full bg-white/20" />
                      <div className="h-2 w-4/5 rounded-full bg-white/15" />
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <div className="h-16 rounded-2xl bg-white/10" />
                      <div className="h-16 rounded-2xl bg-white/10" />
                    </div>

                    <div className="mt-auto space-y-2">
                      <div className={`h-10 rounded-2xl ${styles.glow} border ${styles.border}`} />
                      <div className="h-10 rounded-2xl bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {current.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/70">
                {current.subtitle}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {current.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 space-y-2">
                {current.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <span className={`h-1.5 w-1.5 rounded-full ${styles.glow}`} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/85">
                {current.ctaLabel}
                <span className="text-white/45">→</span>
              </div>
            </div>
          </Link>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={() => setIndex((i) => i - 1)}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
              aria-label="Previous project"
            >
              Prev
            </button>

            <div className="flex items-center gap-1.5">
              {items.map((_, i) => {
                const active = clampIndex(index, len) === i;

                return (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full transition ${
                      active ? "bg-white/90" : "bg-white/25 hover:bg-white/40"
                    }`}
                    aria-label={`Go to project ${i + 1}`}
                  />
                );
              })}
            </div>

            <button
              onClick={() => setIndex((i) => i + 1)}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
              aria-label="Next project"
            >
              Next
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs text-white/55">
          Built products, not just mockups. Swipe through launched and in-progress app systems.
        </p>
      </div>
    </div>
  );
}