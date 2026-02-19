// src/components/contact-cta.tsx
import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="container6 pb-24">
      <div className="section-divider mb-10" />

      <div className="surface hover-lift">
        <div className="surface-inner sheen-hover p-8 sm:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Ready to build{" "}
                <span className="text-[var(--blue)] drop-shadow-[0_0_18px_rgba(79,209,255,0.28)]">
                  something premium
                </span>
                ?
              </h2>
              <p className="mt-3 text-[var(--muted)] max-w-2xl leading-relaxed">
                Tell us what you’re trying to accomplish — we’ll recommend the
                best scope, or price a custom build.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/start" className="btn btn-primary">
                Start a project
              </Link>
              <Link href="/work" className="btn btn-secondary">
                See work
              </Link>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-white/55">
            <span className="h-2 w-2 rounded-full bg-[var(--green)] shadow-[0_0_18px_rgba(57,255,20,0.35)]" />
            Clean delivery. Clear scope. Tight turnaround.
          </div>
        </div>
      </div>
    </section>
  );
}
