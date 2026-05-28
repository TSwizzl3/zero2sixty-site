// src/app/about/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Tanner Thergesen",
  description:
    "About Tanner Thergesen, founder of Zero2Sixty Media LLC — a mobile app developer and full-stack product builder focused on Flutter, AI systems, SaaS platforms, and production-ready apps.",
};

const skills = [
  "Flutter",
  "Dart",
  "FastAPI",
  "Python",
  "Firebase",
  "Supabase",
  "REST APIs",
  "Realtime Systems",
  "Android Development",
  "SaaS Platforms",
  "AI Workflows",
  "UI/UX Design",
  "Branding",
  "Video Editing",
  "Product Strategy",
];

const products = [
  {
    name: "PulseOS",
    desc:
      "AI-powered business operating system for local businesses, service companies, campaigns, analytics, and automation.",
  },
  {
    name: "DFS Edge",
    desc:
      "Fantasy sports optimizer ecosystem with lineup generation, simulations, backend logic, and multi-sport architecture.",
  },
  {
    name: "HypeLoop",
    desc:
      "Realtime trend discovery platform with feeds, alerts, analytics, and social intelligence systems.",
  },
  {
    name: "Rebound",
    desc:
      "Modern social and dating platform with profiles, matching concepts, messaging, events, and mobile-first UX.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-[0.03]" />
        <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-1/4 top-[600px] h-[700px] w-[700px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-0 top-[1000px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="container6 py-24 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-[var(--green)]/25 bg-[var(--green)]/10 px-4 py-2 text-sm font-semibold text-[var(--green)]">
                Founder • Mobile App Developer • Product Builder
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
                I build apps like products, not portfolio fillers.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/68">
                I’m Tanner Thergesen, founder of Zero2Sixty Media LLC. I build
                mobile apps, AI-powered business systems, SaaS platforms,
                realtime dashboards, and full-stack software products with a
                strong focus on launch-ready design, product strategy, and
                real-world usability.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/work" className="btn btn-primary">
                  View Portfolio
                </Link>

                <Link href="/start" className="btn btn-secondary">
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
                Current Focus
              </div>

              <div className="mt-5 space-y-4">
                {[
                  "Flutter mobile apps",
                  "AI-powered SaaS platforms",
                  "Realtime backend systems",
                  "Startup-style product development",
                  "Production-ready app launches",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 bg-black/35">
        <div className="container6 py-24">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
                My Story
              </div>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Self-taught, product-driven, and built through shipping.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-white/68">
              <p>
                My background started in digital media, video editing, branding,
                and creative production. Over time, that evolved into mobile app
                development because I wanted to build complete products — not
                just visuals around them.
              </p>

              <p>
                Instead of learning through small tutorial projects, I focused
                on building real apps with actual product systems: dashboards,
                feeds, subscriptions, authentication, backend APIs, realtime
                logic, admin tools, AI workflows, and mobile-first UX.
              </p>

              <p>
                That combination of design, development, product thinking, and
                launch strategy is what makes Zero2Sixty different. I can build
                the app, shape the brand, understand the user experience, and
                present it like a real startup product.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10">
        <div className="container6 py-24">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
              Apps Built
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              A portfolio built around real product systems.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              Each project is designed to prove a different part of modern app
              development — SaaS systems, AI workflows, realtime feeds, backend
              logic, social UX, and consumer-facing mobile products.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <h3 className="text-3xl font-semibold text-white">
                  {product.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/62">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 bg-black/35">
        <div className="container6 py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
                Skills
              </div>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Development, design, and product execution.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="mini-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="container6 py-24">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-10">
            <div className="max-w-4xl">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
                Work With Me
              </div>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Available for app development, SaaS builds, AI systems, and
                mobile product work.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                I’m focused on building software that looks premium, works
                cleanly, and can actually launch. Whether you need a mobile app,
                MVP, SaaS platform, backend system, or AI-powered business tool,
                the goal is simple: build something real.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/start" className="btn btn-primary">
                  Start a Project
                </Link>

                <Link href="/work" className="btn btn-secondary">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}