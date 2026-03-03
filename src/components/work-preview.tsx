// src/components/work-preview.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type WorkVideo = {
  title: string;
  note: string;
  href: string;
  src: string;
  poster?: string;
  tags?: string[];
};

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

export function WorkPreview() {
  /**
   * Put files in /public/work/
   * Example:
   * - /public/work/video-01.mp4
   * - /public/work/video-01-poster.jpg
   */
  const videos: WorkVideo[] = useMemo(
    () => [
      {
        title: "Sports Hype Promo",
        note: "Fast-cut edit with punchy motion, built for Reels/TikTok/Shorts.",
        href: "/work",
        src: "/work/video-01.mp4",
        poster: "/work/video-01-poster.jpg",
        tags: ["Motion", "Hype", "Short-form"],
      },
      {
        title: "Fashion Launch Reel",
        note: "Clean pacing, premium text overlays, and product-first storytelling.",
        href: "/work",
        src: "/work/video-02.mp4",
        poster: "/work/video-02-poster.jpg",
        tags: ["Premium", "Brand", "Reels"],
      },
      {
        title: "Music Video Teaser",
        note: "Cinematic cut with color polish and a strong payoff in seconds.",
        href: "/work",
        src: "/work/video-03.mp4",
        poster: "/work/video-03-poster.jpg",
        tags: ["Cinematic", "Color", "Story"],
      },
    ],
    []
  );

  const len = videos.length;
  const [index, setIndex] = useState(0);
  const current = videos[clampIndex(index, len)];

  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  pausedRef.current = paused;

  useEffect(() => {
    if (len <= 1) return;
    const t = setInterval(() => {
      if (pausedRef.current) return;
      setIndex((i) => i + 1);
    }, 7000);
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

  const tiles = [
    { title: "Sports Promos", note: "High-energy edits + motion" },
    { title: "Fashion Promos", note: "Clean, premium pacing" },
    { title: "Music Videos", note: "Cuts, color, story" },
    { title: "Logo Reveals", note: "Brand punch in seconds" },
  ];

  return (
    <section className="section">
      <div className="container6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="h2">Featured work</h2>
            <p className="p max-w-2xl">
              Quick previews of real deliverable styles — motion, pacing, polish, and
              conversion-first edits.
            </p>
          </div>

          <Link href="/work" className="btn btn-secondary">
            View work
          </Link>
        </div>

        {/* Video Carousel */}
        <div
          className="mt-8 surface"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="surface-inner p-5">
            <div
              className="rounded-2xl border border-white/10 bg-black/30 overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <Link href={current.href} className="block">
                <div className="relative aspect-video w-full">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={current.src}
                    poster={current.poster}
                    muted
                    playsInline
                    loop
                    autoPlay
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-xs text-white/70">
                      Video preview • Click to view
                    </div>
                    <div className="mt-1 text-xl font-semibold leading-tight">
                      {current.title}
                    </div>
                    <div className="mt-1 text-sm text-white/75">{current.note}</div>

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

                    <div className="mt-3 inline-flex items-center gap-2">
                      <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/85">
                        View more work
                      </span>
                      <span className="text-xs text-white/55">→</span>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex items-center justify-between px-3 py-2">
                <button
                  onClick={() => setIndex((i) => i - 1)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
                  aria-label="Previous video"
                >
                  Prev
                </button>

                <div className="flex items-center gap-1">
                  {videos.map((_, i) => {
                    const active = clampIndex(index, len) === i;
                    return (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-2 w-2 rounded-full ${
                          active ? "bg-white/85" : "bg-white/25 hover:bg-white/40"
                        }`}
                        aria-label={`Go to video ${i + 1}`}
                      />
                    );
                  })}
                </div>

                <button
                  onClick={() => setIndex((i) => i + 1)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
                  aria-label="Next video"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="mt-3 text-xs text-white/55">
              Swap the file paths above with your real clips in{" "}
              <span className="text-white/75">/public/work/</span>.
            </div>
          </div>
        </div>

        {/* Divider hairline */}
        <div className="mt-10 section-divider" />

        {/* Category tiles */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => (
            <div key={t.title} className="surface hover-lift">
              <div className="surface-inner sheen-hover p-6">
                <div className="preview-tile aspect-video w-full rounded-2xl" />
                <div className="mt-4 font-semibold">{t.title}</div>
                <div className="mt-1 text-sm text-white/65">{t.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-white/55">
          Want something similar? We’ll recommend scope + pricing after a quick intake.
        </div>
      </div>
    </section>
  );
}