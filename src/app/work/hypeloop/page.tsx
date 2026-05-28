// src/app/work/hypeloop/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HypeLoop Case Study",
  description:
    "HypeLoop is a realtime trend discovery platform built by Zero2Sixty Media with feeds, alerts, analytics, source tracking, and social trend monitoring.",
};

const screenshots = [
  "/hypeloop/hypeloop-1.png",
  "/hypeloop/hypeloop-2.png",
  "/hypeloop/hypeloop-3.png",
];

const features = [
  "Realtime trend feed",
  "Push notification architecture",
  "Trend scoring concepts",
  "Source tracking",
  "Analytics dashboard",
  "Social discovery workflows",
  "Admin-style tools",
  "Startup product UX",
];

const stack = [
  "Flutter",
  "Supabase",
  "Firebase",
  "Realtime Feeds",
  "Push Notifications",
  "Analytics",
  "Trend Intelligence",
  "Mobile UX",
];

export default function HypeLoopPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-[0.03]" />
        <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-[500px] h-[700px] w-[700px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="container6 py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                Realtime Trend Discovery Platform
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
                HypeLoop
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">
                HypeLoop is a realtime trend intelligence platform built around
                live feeds, source discovery, push alerts, trend scoring,
                analytics, and startup-style social monitoring workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {stack.map((item) => (
                  <span key={item} className="mini-chip">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/start" className="btn btn-primary">
                  Build Something Similar
                </Link>

                <Link href="/work" className="btn btn-secondary">
                  Back To Portfolio
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 rounded-[3rem] bg-cyan-400/10 blur-3xl" />

              <div className="relative flex items-end justify-center gap-4">
                {screenshots.map((src, index) => (
                  <div
                    key={src}
                    className={`overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl ${
                      index === 1
                        ? "z-20 w-[36%]"
                        : "z-10 hidden w-[30%] translate-y-8 opacity-80 sm:block"
                    }`}
                  >
                    <Image
                      src={src}
                      alt="HypeLoop screenshot"
                      width={420}
                      height={900}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 bg-black/35">
        <div className="container6 py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                The Product
              </div>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Realtime social intelligence in a mobile product.
              </h2>
            </div>

            <p className="text-lg leading-8 text-white/68">
              HypeLoop was built as a startup-style product for discovering,
              tracking, and understanding what is gaining momentum online. The
              platform focuses on trend feeds, alerting, discovery workflows,
              source examples, and analytics-driven product UX.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-white/70"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10">
        <div className="container6 py-24">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Technical Highlights
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Feeds, alerts, analytics, and realtime platform logic.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              HypeLoop demonstrates the ability to build mobile products that
              feel alive: realtime content systems, push notification flows,
              trend discovery logic, source tracking, admin-style thinking, and
              analytics-centered UI.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Realtime Feed UX",
                desc:
                  "Designed around constantly updating trend cards, source examples, momentum signals, and discovery behavior.",
              },
              {
                title: "Notification Systems",
                desc:
                  "Built with push-alert product thinking so users can discover relevant trends without manually watching feeds all day.",
              },
              {
                title: "Trend Intelligence",
                desc:
                  "Structured around scoring, examples, categories, and analytics-style product experiences for emerging content.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/62">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10">
        <div className="container6 py-24">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Screenshots
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Trend discovery with a cinematic dark interface.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              HypeLoop uses a dark neon social intelligence aesthetic with
              analytics cards, feed layouts, momentum indicators, and
              startup-style product polish.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl"
              >
                <Image
                  src={src}
                  alt="HypeLoop screen"
                  width={420}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="container6 py-24">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-10">
            <div className="max-w-4xl">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Why It Matters
              </div>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Proof of realtime product architecture.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                HypeLoop shows the ability to design and build startup-style
                products with realtime UX, alerts, analytics, social discovery,
                source tracking, and scalable backend-driven product thinking.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/start" className="btn btn-primary">
                  Start a Project
                </Link>

                <Link href="/work" className="btn btn-secondary">
                  View More Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}