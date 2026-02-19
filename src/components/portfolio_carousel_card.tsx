"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type PortfolioItem = {
  title: string;
  subtitle?: string;
  href: string;
  imageSrc?: string;
  videoSrc?: string;
  tags?: string[];
};

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

export function PortfolioCarouselCard() {
  /**
   * ADD YOUR REAL FILES IN:
   * /public/work/
   */

  const items: PortfolioItem[] = useMemo(
    () => [
      // 🔥 1) REBOUND DATING APP (FLAGSHIP)
      {
        title: "Rebound — Intent-First Dating App",
        subtitle:
          "Flutter • Supabase • Match Roulette • Ghost-Proof Messaging",
        href: "/work/rebound",
        imageSrc: "/work/rebound-01.png",
        tags: ["Mobile App", "Startup", "Product", "UX"],
      },

      // 🎨 2) BRANDING PROJECT A
      {
        title: "Brand Identity — Project A",
        subtitle: "Logo • Color system • Social kit",
        href: "/work/branding-a",
        imageSrc: "/work/brand-01.png",
        tags: ["Branding", "Design"],
      },

      // 🎨 3) BRANDING PROJECT B
      {
        title: "Brand Refresh — Project B",
        subtitle: "Identity overhaul • Asset system",
        href: "/work/branding-b",
        imageSrc: "/work/brand-02.png",
        tags: ["Branding", "Identity"],
      },

      // 🎬 4) PROMO VIDEO 1
      {
        title: "Promo Video — Social Cut 1",
        subtitle: "High-impact hook • Short-form ad",
        href: "/work/video-1",
        videoSrc: "/work/video-01.mp4",
        imageSrc: "/work/video-01-poster.jpg",
        tags: ["Video", "Promo"],
      },

      // 🎬 5) PROMO VIDEO 2
      {
        title: "Promo Video — Vertical Cut",
        subtitle: "Caption-ready • Mobile-first",
        href: "/work/video-2",
        videoSrc: "/work/video-02.mp4",
        imageSrc: "/work/video-02-poster.jpg",
        tags: ["Video", "Ads"],
      },

      // 🎬 6) PROMO VIDEO 3
      {
        title: "Promo Video — Cinematic Cut",
        subtitle: "Brand-forward • High production",
        href: "/work/video-3",
        videoSrc: "/work/video-03.mp4",
        imageSrc: "/work/video-03-poster.jpg",
        tags: ["Video", "Creative"],
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const len = items.length;
  const current = items[clampIndex(index, len)];

  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  pausedRef.current = paused;

  useEffect(() => {
    if (len <= 1) return;
    const t = setInterval(() => {
      if (pausedRef.current) return;
      setIndex((i) => i + 1);
    }, 6500);
    return () => clearInterval(t);
  }, [len]);

  const startX = useRef<number | null>(null);

  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0]?.clientX ?? null;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (startX.current == null) return;
    const endX = e.changedTouches[0]?.clientX ?? startX.current;
    const dx = endX - startX.current;
    startX.current = null;

    if (Math.abs(dx) < 45) return;
    if (dx < 0) setIndex((i) => i + 1);
    else setIndex((i) => i - 1);
  }

  return (
    <div
      className="surface"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="surface-inner relative px-6 pt-2 pb-6">

        {/* Floating Logo */}
        <div className="pointer-events-none absolute right-3 sm:right-4 top-2">
          <Image
            src="/brand/logo_mark.png"
            alt="Zero2Sixty Media"
            width={600}
            height={600}
            priority
            className="h-24 sm:h-28 md:h-32 w-auto object-contain select-none"
          />
        </div>

        {/* Carousel */}
        <div
          className="mt-1 rounded-2xl border border-white/10 bg-black/30 overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <Link href={current.href} className="block">
            <div className="relative aspect-[16/10] w-full">

              {current.videoSrc ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={current.videoSrc}
                  poster={current.imageSrc}
                  muted
                  playsInline
                  loop
                  autoPlay
                />
              ) : current.imageSrc ? (
                <Image
                  src={current.imageSrc}
                  alt={current.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-white/10" />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-xs text-white/65">Click to view</div>
                <div className="mt-1 text-lg font-semibold leading-tight">
                  {current.title}
                </div>
                {current.subtitle && (
                  <div className="mt-1 text-sm text-white/70">
                    {current.subtitle}
                  </div>
                )}

                {current.tags && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {current.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Link>

          {/* Controls */}
          <div className="flex items-center justify-between px-3 py-2">
            <button
              onClick={() => setIndex((i) => i - 1)}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
            >
              Prev
            </button>

            <div className="flex items-center gap-1">
              {items.map((_, i) => {
                const active = clampIndex(index, len) === i;
                return (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full ${
                      active ? "bg-white/85" : "bg-white/25 hover:bg-white/40"
                    }`}
                  />
                );
              })}
            </div>

            <button
              onClick={() => setIndex((i) => i + 1)}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
            >
              Next
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs text-white/55">
          Swipe to browse. Click to view full case study.
        </p>
      </div>
    </div>
  );
}
