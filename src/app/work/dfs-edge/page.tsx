// src/app/work/dfs-edge/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DFS Edge Case Study",
  description:
    "DFS Edge is a fantasy sports optimization platform built by Zero2Sixty Media with lineup generation, simulations, ownership tools, and realtime slate systems.",
};

const screenshots = [
  "/dfs-edge/dfs-1.png",
  "/dfs-edge/dfs-2.png",
  "/dfs-edge/dfs-3.png",
];

const features = [
  "Lineup optimization engine",
  "Multi-sport architecture",
  "Tournament simulation logic",
  "Ownership and leverage tools",
  "DraftKings-style roster rules",
  "Slate upload systems",
  "Subscription-ready app structure",
  "Realtime sports data concepts",
];

const stack = [
  "Flutter",
  "FastAPI",
  "Python",
  "Algorithms",
  "Simulation Systems",
  "Realtime Data",
  "Sports Analytics",
  "Mobile SaaS",
];

export default function DFSEdgePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-[0.03]" />
        <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-lime-500/10 blur-3xl" />
        <div className="absolute right-0 top-[500px] h-[700px] w-[700px] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="container6 py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-sm font-semibold text-lime-300">
                Fantasy Sports Optimization Platform
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
                DFS Edge
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">
                DFS Edge is a fantasy sports optimization ecosystem built for
                serious DFS players. It combines lineup generation, simulations,
                ownership logic, slate controls, and multi-sport architecture
                into a polished mobile-first product experience.
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
              <div className="absolute inset-0 rounded-[3rem] bg-lime-400/10 blur-3xl" />

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
                      alt="DFS Edge screenshot"
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
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
                The Product
              </div>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Data-heavy sports tools built for mobile.
              </h2>
            </div>

            <p className="text-lg leading-8 text-white/68">
              DFS Edge was designed as a serious fantasy sports product, not a
              simple calculator. The app focuses on generating optimized
              lineups, displaying player pools, handling roster constraints,
              and presenting advanced strategy tools in a mobile-first format.
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
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
              Technical Highlights
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Algorithms, simulations, and backend-driven app logic.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              This project demonstrates more than UI polish. DFS Edge includes
              complex product logic around player selection, lineup quality,
              roster constraints, slate management, tournament-style strategy,
              and backend-powered optimization workflows.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Optimization Logic",
                desc:
                  "Lineup construction based on salary, position rules, roster limits, projections, and user-selected strategy.",
              },
              {
                title: "Simulation Thinking",
                desc:
                  "Tournament-style outputs and strategic metrics designed to help users compare upside, leverage, and lineup quality.",
              },
              {
                title: "Multi-Sport System",
                desc:
                  "Built as an expandable ecosystem capable of supporting different sports, rules, colors, and optimizer logic.",
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
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
              Screenshots
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Polished fantasy sports product UI.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              DFS Edge uses a dark neon sports aesthetic with bold data cards,
              lineup views, optimizer controls, and high-contrast mobile UI
              built for fast decision-making.
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
                  alt="DFS Edge screen"
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
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
                Why It Matters
              </div>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                A strong technical proof piece.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                DFS Edge shows the ability to build backend-heavy products with
                real logic, strategy systems, mobile UI, product design,
                advanced data presentation, and a scalable architecture for
                multiple sports and future monetization.
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