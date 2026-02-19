// src/app/work/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A snapshot of recent-style deliverables: promo video, motion, app UI, and brand assets — shipped fast and clean.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work — Zero2Sixty Media",
    description:
      "Promo video, motion, app UI, and brand assets — shipped fast and clean.",
    url: "https://zero2sixtymedia.com/work",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zero2Sixty Media — Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image"],
  },
};

type WorkCategory = "All" | "Video" | "Motion" | "App" | "Design";

type WorkItem = {
  title: string;
  category: Exclude<WorkCategory, "All">;
  summary: string;
  bullets: string[];
  outcome?: string;
  href?: string; // optional, swap in later
};

const ITEMS: WorkItem[] = [
  {
    title: "Sports Promo",
    category: "Video",
    summary: "High-energy edit built to hit hard in the first 2 seconds.",
    bullets: ["Hook + pacing", "Captions + punch-ins", "Social-ready exports"],
    outcome: "Designed to stop scroll and drive clicks.",
  },
  {
    title: "Fashion Show Teaser",
    category: "Video",
    summary: "Clean, premium pacing with tight cutdowns for socials.",
    bullets: ["Vertical + widescreen versions", "Beat-synced edits", "Ad-ready cutdowns"],
    outcome: "Premium look without over-editing.",
  },
  {
    title: "Music Video Cut",
    category: "Video",
    summary: "Story-forward cuts with color + motion accents where it matters.",
    bullets: ["Color polish", "Motion accents", "Performance + story balance"],
    outcome: "Feels intentional — not random cuts.",
  },
  {
    title: "Logo Reveal",
    category: "Motion",
    summary: "Short, clean brand punch built for intros and ads.",
    bullets: ["1–3 second reveal options", "Audio-ready timing", "Multiple aspect ratios"],
    outcome: "A quick hit that looks expensive.",
  },
  {
    title: "App UI Demo",
    category: "App",
    summary: "MVP flow walkthrough for pitching or early users.",
    bullets: ["Core screens only", "Clear UX path", "Fast iteration changes"],
    outcome: "Show the product without a full build-out.",
  },
  {
    title: "Brand Kit",
    category: "Design",
    summary: "Logo + palette + basic assets to look established fast.",
    bullets: ["Primary + secondary marks", "Color + type direction", "Social starter assets"],
    outcome: "Instant upgrade in credibility.",
  },
];

const CATEGORIES: WorkCategory[] = ["All", "Video", "Motion", "App", "Design"];

function buildHrefWithCategory(category: WorkCategory) {
  if (category === "All") return "/work";
  return `/work?cat=${encodeURIComponent(category)}`;
}

function readCategory(searchParams: { [key: string]: string | string[] | undefined }): WorkCategory {
  const raw = searchParams.cat;
  const v = Array.isArray(raw) ? raw[0] : raw;

  if (!v) return "All";
  const normalized = String(v).trim();

  if (CATEGORIES.includes(normalized as WorkCategory)) return normalized as WorkCategory;
  return "All";
}

export default function WorkPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const active = readCategory(searchParams);

  const visible =
    active === "All" ? ITEMS : ITEMS.filter((x) => x.category === active);

  return (
    <main className="section">
      <div className="container6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Work
            </h1>
            <p className="p max-w-2xl">
              A snapshot of the kinds of deliverables we ship — clean execution,
              premium look, and built for outcomes. As you send links, we’ll swap
              these tiles into real embeds and case-style cards.
            </p>
          </div>

          <Link href="/start" className="btn btn-primary">
            Start a project
          </Link>
        </div>

        {/* Filter */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((c) => {
            const isActive = c === active;
            return (
              <Link
                key={c}
                href={buildHrefWithCategory(c)}
                className={[
                  "rounded-full border px-3 py-1 text-xs font-semibold transition",
                  isActive
                    ? "border-white/25 bg-white/10 text-white"
                    : "border-white/12 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/8 hover:text-white",
                ].join(" ")}
              >
                {c}
              </Link>
            );
          })}

          <div className="ml-auto hidden md:block text-xs text-white/45">
            Tip: click a category to focus the grid.
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((it) => (
            <div key={it.title} className="surface hover-lift">
              <div className="surface-inner sheen-hover p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-semibold">{it.title}</h3>
                    <div className="mt-1 text-sm text-white/65 leading-relaxed">
                      {it.summary}
                    </div>
                  </div>
                  <span className="tag text-white/75">{it.category}</span>
                </div>

                {/* Placeholder media block (no images required yet) */}
                <div className="mt-4 aspect-video w-full rounded-2xl border border-white/10 bg-black/30">
                  <div className="h-full w-full rounded-2xl bg-white/5" />
                </div>

                <div className="mt-4 grid gap-2 text-sm text-white/78">
                  {it.bullets.map((b) => (
                    <div key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--blue)] shadow-[0_0_12px_rgba(79,209,255,0.22)]" />
                      <span className="leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>

                {it.outcome ? (
                  <p className="mt-4 text-xs text-white/55">{it.outcome}</p>
                ) : null}

                {it.href ? (
                  <div className="mt-5">
                    <Link
                      href={it.href}
                      className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                    >
                      View
                      <span aria-hidden className="text-white/40">
                        →
                      </span>
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 surface hover-lift">
          <div className="surface-inner sheen-hover p-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold">
                  Want your Work page stacked fast?
                </div>
                <p className="mt-2 text-sm text-white/65 leading-relaxed max-w-2xl">
                  Send 6–12 links (YouTube/Vimeo/Drive) and we’ll format this page
                  with real embeds, categories, and clean thumbnails — still on
                  brand with your black + neon look.
                </p>
                <div className="mt-3 text-xs text-white/55">
                  If you don’t have links yet, send raw files — we’ll handle export
                  sizes and platform-ready versions.
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/start" className="btn btn-primary">
                  Start a project
                </Link>
                <a
                  href="mailto:tanner@zero2sixtymedia.com"
                  className="btn btn-secondary"
                >
                  Email links
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-white/55">
              <span className="h-2 w-2 rounded-full bg-[var(--green)] shadow-[0_0_18px_rgba(57,255,20,0.35)]" />
              Clean delivery. Clear scope. Tight turnaround.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}