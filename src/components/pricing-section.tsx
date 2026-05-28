// src/components/pricing-section.tsx

import Link from "next/link";

const services = [
  {
    title: "Mobile App Development",
    subtitle: "Flutter • Android • Cross-Platform",
    description:
      "Custom mobile applications built with scalable architecture, modern UI/UX, backend systems, authentication, APIs, and production deployment in mind.",
    features: [
      "Flutter app development",
      "Android deployment",
      "Authentication systems",
      "Realtime functionality",
      "API integrations",
      "Production-ready architecture",
    ],
    cta: "Build an App",
  },
  {
    title: "Full-Stack SaaS Platforms",
    subtitle: "FastAPI • Firebase • Supabase",
    description:
      "Modern SaaS and business systems designed for startups, creators, and companies looking to launch scalable digital platforms.",
    features: [
      "Backend API systems",
      "Dashboards & admin tools",
      "Cloud integrations",
      "Realtime databases",
      "Subscription systems",
      "Scalable infrastructure",
    ],
    cta: "Launch a Platform",
  },
  {
    title: "AI & Automation Systems",
    subtitle: "Automation • AI Tools • Workflow",
    description:
      "AI-powered systems and workflow automation tools built to streamline operations, improve efficiency, and create smarter digital products.",
    features: [
      "AI-assisted features",
      "Business automation",
      "Realtime processing",
      "Custom workflows",
      "Internal tool systems",
      "Productivity integrations",
    ],
    cta: "Build AI Systems",
  },
  {
    title: "Creative & Brand Support",
    subtitle: "Branding • Video • Web",
    description:
      "Additional creative services available for startups and businesses needing polished visuals, launch assets, and promotional content.",
    features: [
      "Brand identity design",
      "Promo video editing",
      "Landing pages",
      "Social content",
      "Marketing visuals",
      "Launch assets",
    ],
    cta: "Creative Services",
  },
];

export function PricingSection() {
  return (
    <section
      id="services"
      className="section relative overflow-hidden border-y border-white/10 bg-black/40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[500px] w-[700px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-[300px] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="container6 relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
            Services
          </div>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
            Full-stack product development.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Mobile apps, SaaS platforms, AI systems, backend APIs, realtime
            tools, and polished product experiences built for real launch.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[var(--green)]">
                  {service.subtitle}
                </div>

                <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-white/65">
                  {service.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/70"
                    >
                      <span className="h-2 w-2 rounded-full bg-[var(--green)] shadow-[0_0_14px_rgba(57,255,20,0.35)]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/start" className="btn btn-primary inline-flex">
                    {service.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-black/35 p-8 text-center backdrop-blur">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
            Built For Real Launches
          </div>

          <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Production apps over mockups.
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
            The focus is building software that actually ships — mobile apps,
            SaaS systems, AI-powered tools, realtime platforms, and scalable
            products that can grow in the real world.
          </p>
        </div>
      </div>
    </section>
  );
}