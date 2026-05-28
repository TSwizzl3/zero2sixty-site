// src/components/testimonials-section.tsx

const strengths = [
  {
    title: "Product-First Thinking",
    desc:
      "I build apps like real products, not throwaway screens — with user flow, business value, scalability, and launch strategy in mind.",
  },
  {
    title: "Full-Stack Execution",
    desc:
      "Frontend, backend, APIs, databases, authentication, realtime systems, and deployment are planned together instead of treated like separate pieces.",
  },
  {
    title: "Design + Development",
    desc:
      "My background in branding, video, and digital media gives each app a polished identity while still being built on real technical systems.",
  },
  {
    title: "Built To Launch",
    desc:
      "The focus is always production-ready execution: clean UI, working features, stable architecture, and a path toward users, clients, or revenue.",
  },
];

const proofPoints = [
  "Flutter mobile apps",
  "FastAPI backends",
  "Firebase + Supabase",
  "Realtime data systems",
  "AI-powered workflows",
  "Admin dashboards",
  "Authentication",
  "Push notifications",
  "SaaS-style platforms",
  "Production app launches",
];

export function TestimonialsSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[520px] w-[720px] rounded-full bg-[var(--blue)]/10 blur-3xl" />
        <div className="absolute right-0 top-[260px] h-[520px] w-[520px] rounded-full bg-[var(--green)]/10 blur-3xl" />
      </div>

      <div className="container6 relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
              Why Zero2Sixty
            </div>

            <h2 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              Built like software. Presented like a brand.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Zero2Sixty combines mobile development, backend systems, product
              strategy, UI/UX, branding, and launch-focused execution into one
              streamlined build process.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {proofPoints.slice(0, 6).map((point) => (
                <span key={point} className="mini-chip">
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="text-xl font-semibold text-white">
                  {item.title}
                </div>

                <p className="mt-4 text-sm leading-7 text-white/62">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-black/35 p-6 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Technical Proof
              </div>

              <div className="mt-2 text-2xl font-semibold text-white">
                Mobile apps, AI systems, SaaS platforms, and realtime products.
              </div>
            </div>

            <div className="flex max-w-2xl flex-wrap gap-2">
              {proofPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}