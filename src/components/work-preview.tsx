// src/components/work-preview.tsx
import Link from "next/link";

export function WorkPreview() {
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
              A quick snapshot of the types of projects we ship — built to stop scroll
              and look premium on day one.
            </p>
          </div>

          <Link href="/work" className="btn btn-secondary">
            View work
          </Link>
        </div>

        {/* Divider hairline */}
        <div className="mt-8 section-divider" />

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