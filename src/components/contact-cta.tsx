// src/components/contact-cta.tsx

import Link from "next/link";

const services = [
  "Mobile App Development",
  "Flutter Development",
  "Android Apps",
  "SaaS Platforms",
  "AI-Powered Systems",
  "Backend APIs",
  "Realtime Applications",
  "Startup MVPs",
];

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden pb-24">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[500px] w-[700px] rounded-full bg-[var(--green)]/10 blur-3xl" />

        <div className="absolute right-0 top-[200px] h-[500px] w-[500px] rounded-full bg-[var(--blue)]/10 blur-3xl" />
      </div>

      <div className="container6 relative">
        <div className="section-divider mb-12" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur">
          {/* GLOW */}
          <div className="pointer-events-none absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-[var(--green)]/10 blur-3xl" />

          <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--blue)]/10 blur-3xl" />

          <div className="relative p-8 sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
              {/* LEFT */}
              <div className="max-w-4xl">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--green)]">
                  Let’s Build Something Real
                </div>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                  Need A Mobile App,
                  <span className="text-[var(--blue)] drop-shadow-[0_0_18px_rgba(79,209,255,0.28)]">
                    {" "}
                    SaaS Platform,
                  </span>{" "}
                  Or Full-Stack System?
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
                  I work with startups, creators, founders, and businesses to
                  build production-ready software systems using Flutter,
                  FastAPI, Firebase, Supabase, and modern backend architecture.
                  From MVPs to scalable platforms, the goal is building products
                  that actually launch and grow.
                </p>

                {/* SERVICES */}
                <div className="mt-10 flex flex-wrap gap-3">
                  {services.map((service) => (
                    <span key={service} className="mini-chip">
                      {service}
                    </span>
                  ))}
                </div>

                {/* CTA BUTTONS */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/start" className="btn btn-primary">
                    Start a Project
                  </Link>

                  <Link href="/work" className="btn btn-secondary">
                    View Portfolio
                  </Link>
                </div>

                {/* FOOTER */}
                <div className="mt-8 flex items-center gap-3 text-sm text-white/55">
                  <span className="h-2 w-2 rounded-full bg-[var(--green)] shadow-[0_0_18px_rgba(57,255,20,0.35)]" />

                  Built for real launches, scalable systems, and modern product
                  development.
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* OUTER GLOW */}
                  <div className="absolute inset-0 rounded-[3rem] bg-[var(--blue)]/10 blur-3xl" />

                  {/* DEVICE */}
                  <div className="relative flex h-[620px] w-[310px] flex-col rounded-[3rem] border border-white/10 bg-zinc-950 p-4 shadow-2xl">
                    {/* NOTCH */}
                    <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-white/20" />

                    {/* SCREEN */}
                    <div className="flex flex-1 flex-col rounded-[2.4rem] border border-white/10 bg-black p-5">
                      {/* HERO */}
                      <div className="rounded-3xl border border-[var(--blue)]/20 bg-[var(--blue)]/10 p-5">
                        <div className="text-sm font-semibold text-white/90">
                          Production Systems
                        </div>

                        <div className="mt-3 h-2 w-full rounded-full bg-white/20" />

                        <div className="mt-2 h-2 w-4/5 rounded-full bg-white/15" />
                      </div>

                      {/* CARDS */}
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="rounded-3xl bg-white/10 p-4">
                          <div className="h-10 rounded-2xl bg-white/10" />

                          <div className="mt-3 h-2 rounded-full bg-white/20" />

                          <div className="mt-2 h-2 w-2/3 rounded-full bg-white/15" />
                        </div>

                        <div className="rounded-3xl bg-white/10 p-4">
                          <div className="h-10 rounded-2xl bg-white/10" />

                          <div className="mt-3 h-2 rounded-full bg-white/20" />

                          <div className="mt-2 h-2 w-2/3 rounded-full bg-white/15" />
                        </div>
                      </div>

                      {/* GRAPH */}
                      <div className="mt-6 rounded-3xl bg-white/10 p-5">
                        <div className="h-24 rounded-2xl bg-white/10" />
                      </div>

                      {/* LIST */}
                      <div className="mt-6 space-y-3">
                        <div className="h-12 rounded-2xl bg-white/10" />

                        <div className="h-12 rounded-2xl bg-white/10" />

                        <div className="h-12 rounded-2xl bg-white/10" />
                      </div>

                      {/* BUTTONS */}
                      <div className="mt-auto space-y-3">
                        <div className="h-12 rounded-2xl border border-[var(--green)]/20 bg-[var(--green)]/10" />

                        <div className="h-12 rounded-2xl bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}