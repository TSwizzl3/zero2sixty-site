// src/components/process-section.tsx

const steps = [
  {
    number: "01",
    title: "Discovery & Product Strategy",
    description:
      "Define the vision, users, core features, technical requirements, and long-term scalability goals before development starts.",
    points: ["Product planning", "Feature priority", "Architecture", "Scale path"],
  },
  {
    number: "02",
    title: "UI/UX & System Design",
    description:
      "Design modern mobile-first interfaces and product flows that feel premium, usable, and production-ready.",
    points: ["Mobile UX", "User flows", "Visual system", "Product structure"],
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Build the frontend, backend, APIs, realtime features, authentication, databases, automation, and integrations.",
    points: ["Flutter frontend", "FastAPI backend", "Realtime data", "Database systems"],
  },
  {
    number: "04",
    title: "Launch & Iterate",
    description:
      "Prepare production builds, test, deploy, refine, and improve the product based on real usage and business goals.",
    points: ["Deployment", "Testing", "Optimization", "Launch support"],
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[700px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-0 top-[420px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="container6 relative">
        <div className="max-w-4xl">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
            Process
          </div>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
            From idea to production launch.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
            A clean product development workflow for mobile apps, AI systems,
            SaaS platforms, realtime dashboards, and scalable backend products.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[var(--green)]/10 blur-3xl" />

              <div className="relative">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[var(--green)]">
                  Step {step.number}
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/62">
                  {step.description}
                </p>

                <div className="mt-7 space-y-3">
                  {step.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm text-white/70"
                    >
                      <span className="h-2 w-2 rounded-full bg-[var(--green)] shadow-[0_0_14px_rgba(57,255,20,0.35)]" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-black/35 p-8 backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Startup-Speed Execution
              </div>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Modern product development without the agency bloat.
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">
                Built around rapid iteration, scalable architecture, strong
                UI/UX, and production-ready systems — focused on launching
                software instead of endless meetings and mockups.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:max-w-[320px] lg:justify-end">
              <span className="mini-chip">Flutter</span>
              <span className="mini-chip">FastAPI</span>
              <span className="mini-chip">Firebase</span>
              <span className="mini-chip">Supabase</span>
              <span className="mini-chip">AI Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}