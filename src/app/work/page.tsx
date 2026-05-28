// src/app/work/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio — Zero2Sixty Media",
  description:
    "Production-ready mobile apps, SaaS platforms, and full-stack systems built with Flutter, FastAPI, Firebase, and modern backend infrastructure.",
};

const projects = [
  {
    title: "PulseOS",
    category: "AI Business Operating System",
    status: "Flagship SaaS Platform",
    description:
      "AI-powered business operating system featuring automation, campaigns, analytics, live dashboards, AI workflows, customer management, and scalable operational systems.",
    stack: [
      "Flutter",
      "FastAPI",
      "Firebase",
      "Realtime Systems",
      "AI Workflows",
      "SaaS",
    ],
    screenshots: [
      "/pulseos/pulse-1.png",
      "/pulseos/pulse-2.png",
      "/pulseos/pulse-3.png",
    ],
    accent: "green",
  },

  {
    title: "DFS Edge",
    category: "Fantasy Sports Optimization",
    status: "Live Multi-Sport Platform",
    description:
      "Advanced DFS ecosystem with lineup generation, tournament simulations, ownership analysis, realtime slate systems, and multi-sport optimization tools.",
    stack: [
      "Flutter",
      "FastAPI",
      "Python",
      "Algorithms",
      "Simulation Systems",
      "Realtime Data",
    ],
    screenshots: [
      "/dfs-edge/dfs-1.png",
      "/dfs-edge/dfs-2.png",
      "/dfs-edge/dfs-3.png",
    ],
    accent: "blue",
  },

  {
    title: "HypeLoop",
    category: "Realtime Trend Discovery",
    status: "Startup Product",
    description:
      "Realtime trend intelligence platform with live feeds, push notifications, analytics, ingestion systems, and social monitoring infrastructure.",
    stack: [
      "Flutter",
      "Supabase",
      "Firebase",
      "Realtime APIs",
      "Push Notifications",
      "Analytics",
    ],
    screenshots: [
      "/hypeloop/hypeloop-1.png",
      "/hypeloop/hypeloop-2.png",
      "/hypeloop/hypeloop-3.png",
    ],
    accent: "purple",
  },

  {
    title: "Rebound",
    category: "Dating & Social App",
    status: "Google Play Launch",
    description:
      "Modern social and dating platform featuring authentication, profiles, messaging systems, mobile-first UX, and production Android deployment.",
    stack: [
      "Flutter",
      "Firebase",
      "Supabase",
      "Authentication",
      "Messaging",
      "Android",
    ],
    screenshots: [
      "/rebound/rebound-1.png",
      "/rebound/rebound-2.png",
      "/rebound/rebound-3.png",
    ],
    accent: "pink",
  },
];

function accentClasses(accent: string) {
  switch (accent) {
    case "green":
      return {
        glow: "bg-[var(--green)]/15",
        text: "text-[var(--green)]",
        border: "border-[var(--green)]/25",
      };

    case "blue":
      return {
        glow: "bg-[var(--blue)]/15",
        text: "text-[var(--blue)]",
        border: "border-[var(--blue)]/25",
      };

    case "purple":
      return {
        glow: "bg-fuchsia-400/15",
        text: "text-fuchsia-300",
        border: "border-fuchsia-300/25",
      };

    case "pink":
      return {
        glow: "bg-pink-400/15",
        text: "text-pink-300",
        border: "border-pink-300/25",
      };

    default:
      return {
        glow: "bg-white/10",
        text: "text-white",
        border: "border-white/10",
      };
  }
}

export default function WorkPage() {
  return (
    <main className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-[0.03]" />

        <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute left-1/3 top-[700px] h-[600px] w-[700px] rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute right-0 top-[1200px] h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="container6 py-24 sm:py-32">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[var(--green)] shadow-[0_0_16px_rgba(57,255,20,0.45)]" />

              <span className="text-sm font-medium text-white/70">
                Mobile Apps • SaaS Platforms • AI Systems • Full-Stack Products
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
              Software
              <span className="bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                {" "}
                Portfolio
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-white/68">
              Production-ready applications, realtime systems, startup
              platforms, and scalable SaaS ecosystems designed and developed
              using Flutter, FastAPI, Firebase, Supabase, and modern cloud
              architecture.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="relative py-24">
        <div className="container6 space-y-12">
          {projects.map((project, index) => {
            const styles = accentClasses(project.accent);

            const reverse = index % 2 === 1;

            return (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition duration-300 hover:border-white/20 lg:p-10"
              >
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full ${styles.glow} blur-3xl`}
                />

                <div
                  className={`grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* LEFT */}
                  <div className="relative">
                    <div
                      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${styles.border} ${styles.text} bg-white/5`}
                    >
                      {project.status}
                    </div>

                    <h2 className="mt-6 text-5xl font-semibold tracking-tight">
                      {project.title}
                    </h2>

                    <div className="mt-3 text-sm uppercase tracking-[0.2em] text-white/40">
                      {project.category}
                    </div>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
                      {project.description}
                    </p>

                    {/* STACK */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <span key={tag} className="mini-chip">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-10 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85">
                      Production-ready system
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="relative flex justify-center">
                    <div
                      className={`absolute inset-0 rounded-[3rem] ${styles.glow} blur-3xl`}
                    />

                    <div className="relative flex items-end justify-center gap-4">
                      {project.screenshots.map((src, screenIndex) => (
                        <div
                          key={src}
                          className={`overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl transition duration-500 group-hover:-translate-y-1 group-hover:border-white/20 ${
                            screenIndex === 1
                              ? "z-20 w-[36%]"
                              : "z-10 hidden w-[30%] translate-y-8 opacity-80 sm:block"
                          }`}
                        >
                          <Image
                            src={src}
                            alt={`${project.title} screenshot`}
                            width={400}
                            height={900}
                            className="h-auto w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HIRE SECTION */}
      <section className="relative border-t border-white/10 bg-black/40">
        <div className="container6 py-24">
          <div className="max-w-5xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
              Available For
            </div>

            <h2 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              App development, SaaS systems, and full-stack product builds.
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-white/65">
              Available for startup MVPs, SaaS products, AI-powered systems,
              mobile apps, backend platforms, realtime systems, and scalable
              software development projects.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Flutter Development",
                "Android Development",
                "SaaS Platforms",
                "AI Systems",
                "Backend APIs",
                "Realtime Applications",
                "MVP Development",
                "Startup Products",
                "Cross-Platform Apps",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/start" className="btn btn-primary">
                Start a Project
              </Link>

              <Link href="/" className="btn btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}