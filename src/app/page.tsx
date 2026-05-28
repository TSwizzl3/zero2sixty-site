// src/app/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ProcessSection } from "@/components/process-section";
import { PricingSection } from "@/components/pricing-section";
import { WorkPreview } from "@/components/work-preview";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { ContactCTA } from "@/components/contact-cta";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://zero2sixtymediallc.com";

export const metadata: Metadata = {
  title:
    "Zero2Sixty Media — AI-Powered Apps & Full-Stack Mobile Development",
  description:
    "Production-ready mobile apps, SaaS platforms, AI systems, realtime dashboards, and full-stack business software built with Flutter, FastAPI, Firebase, and Supabase.",
};

const cinematicProducts = [
  {
    title: "PulseOS",
    label: "AI Business Systems",
    metric: "AI + SaaS",
    accent: "from-emerald-400/25 to-cyan-400/10",
    screenshots: [
      "/pulseos/pulse-1.png",
      "/pulseos/pulse-2.png",
      "/pulseos/pulse-3.png",
    ],
  },
  {
    title: "DFS Edge",
    label: "Sports Optimization",
    metric: "Data + Algorithms",
    accent: "from-lime-400/25 to-orange-400/10",
    screenshots: [
      "/dfs-edge/dfs-1.png",
      "/dfs-edge/dfs-2.png",
      "/dfs-edge/dfs-3.png",
    ],
  },
  {
    title: "Rebound",
    label: "Social Mobile Platform",
    metric: "Realtime UX",
    accent: "from-pink-400/25 to-fuchsia-400/10",
    screenshots: [
      "/rebound/rebound-1.png",
      "/rebound/rebound-2.png",
      "/rebound/rebound-3.png",
    ],
  },
  {
    title: "HypeLoop",
    label: "Trend Intelligence",
    metric: "Feeds + Alerts",
    accent: "from-cyan-400/25 to-purple-400/10",
    screenshots: [
      "/hypeloop/hypeloop-1.png",
      "/hypeloop/hypeloop-2.png",
      "/hypeloop/hypeloop-3.png",
    ],
  },
];

const products = [
  {
    title: "PulseOS",
    subtitle: "AI Business Operating System",
    desc:
      "AI-powered platform built for local businesses featuring lead recovery, campaigns, analytics, realtime activity feeds, AI calling systems, and operational intelligence.",
  },
  {
    title: "DFS Edge",
    subtitle: "Realtime DFS Optimization Platform",
    desc:
      "Fantasy sports ecosystem with lineup optimization, simulations, ownership analysis, and multi-sport realtime systems.",
  },
  {
    title: "Rebound",
    subtitle: "Social & Matchmaking Platform",
    desc:
      "Modern dating and social application featuring messaging, events, giveaways, moderation systems, and realtime user engagement.",
  },
  {
    title: "HypeLoop",
    subtitle: "Realtime Trend Discovery Platform",
    desc:
      "Trend intelligence platform featuring realtime feeds, push notifications, analytics systems, and social monitoring tools.",
  },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes cinematicFloat {
              0%, 100% { transform: translateY(0px) rotate(-1deg); }
              50% { transform: translateY(-10px) rotate(1deg); }
            }

            @keyframes cinematicScan {
              0% { transform: translateX(-120%); opacity: 0; }
              15% { opacity: .65; }
              50% { opacity: .22; }
              100% { transform: translateX(120%); opacity: 0; }
            }

            @keyframes cinematicPulse {
              0%, 100% { opacity: .55; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.04); }
            }

            .cinematic-float {
              animation: cinematicFloat 7s ease-in-out infinite;
            }

            .cinematic-scan {
              animation: cinematicScan 5s ease-in-out infinite;
            }

            .cinematic-pulse {
              animation: cinematicPulse 4s ease-in-out infinite;
            }
          `,
        }}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-[0.03]" />
        <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-1/4 top-[500px] h-[700px] w-[700px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-0 top-[200px] h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="container6 py-20 sm:py-28">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[var(--green)] shadow-[0_0_16px_rgba(57,255,20,0.45)]" />
                <span className="text-sm font-medium text-white/70">
                  Flutter • FastAPI • AI Systems • SaaS Platforms
                </span>
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
                Building
                <span className="bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  {" "}
                  AI-powered{" "}
                </span>
                apps & modern business platforms.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">
                Zero2Sixty Media develops premium mobile applications,
                realtime SaaS systems, AI-powered business software, and
                scalable digital platforms built for real-world launch and
                growth.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Flutter Development",
                  "AI Systems",
                  "Realtime Platforms",
                  "FastAPI Backends",
                  "Mobile SaaS",
                  "Business Automation",
                ].map((chip) => (
                  <span key={chip} className="mini-chip">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/work" className="btn btn-primary">
                  View Products
                </Link>

                <Link href="/start" className="btn btn-secondary">
                  Start a Project
                </Link>
              </div>

              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                {[
                  { title: "4", label: "Production Apps" },
                  { title: "Full Stack", label: "Mobile + Backend Systems" },
                  { title: "AI + SaaS", label: "Realtime Product Ecosystems" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
                  >
                    <div className="text-2xl font-semibold text-white">
                      {item.title}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-white/55">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 rounded-[3rem] bg-cyan-500/10 blur-3xl" />

              <div className="cinematic-float relative w-full max-w-[380px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
                <div className="cinematic-scan pointer-events-none absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-white/10 bg-black/40 p-2">
                        <Image
                          src="/brand/logo_mark.png"
                          alt="Zero2Sixty Media"
                          width={38}
                          height={38}
                          className="h-8 w-8 object-contain"
                          priority
                        />
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-white">
                          Zero2Sixty Studio
                        </div>
                        <div className="text-xs text-white/45">
                          Apps • AI • SaaS
                        </div>
                      </div>
                    </div>

                    <div className="cinematic-pulse h-3 w-3 rounded-full bg-[var(--green)] shadow-[0_0_20px_rgba(57,255,20,0.65)]" />
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-black/45 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                        Product Reel
                      </div>

                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/50">
                        Live Work
                      </div>
                    </div>

                    <div className="space-y-3">
                      {cinematicProducts.map((product, index) => (
                        <div
                          key={product.title}
                          className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${product.accent} p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20`}
                        >
                          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

                          <div className="relative flex items-center justify-between gap-4">
                            <div>
                              <div className="text-xl font-semibold text-white">
                                {product.title}
                              </div>

                              <div className="mt-1 text-xs text-white/60">
                                {product.label}
                              </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-right">
                              <div className="text-[9px] uppercase tracking-[0.18em] text-white/35">
                                Stack
                              </div>
                              <div className="mt-1 text-[11px] font-semibold text-white/75">
                                {product.metric}
                              </div>
                            </div>
                          </div>

                          <div className="relative mt-4 flex gap-2 overflow-hidden">
                            {product.screenshots.map((src) => (
                              <div
                                key={src}
                                className="h-20 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/60"
                              >
                                <Image
                                  src={src}
                                  alt={`${product.title} mini preview`}
                                  width={100}
                                  height={200}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            ))}
                          </div>

                          <div className="relative mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-white/55"
                              style={{ width: `${72 + index * 6}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["Frontend", "Backend", "Launch"].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center"
                      >
                        <div className="text-xs font-semibold text-white/70">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingSection />
      <ProcessSection />
      <WorkPreview />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
    </main>
  );
}