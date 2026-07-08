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
    "Zero2Sixty Media — AI Lead Recovery, Mobile Apps & Business Automation",
  description:
    "Zero2Sixty Media builds AI lead recovery systems, mobile apps, websites, and business automation tools that help companies capture leads, follow up faster, and recover missed opportunities.",
};

const cinematicProducts = [
  {
    title: "PulseOS",
    label: "AI Lead Recovery System",
    metric: "Starts at $500",
    accent: "from-emerald-400/25 to-cyan-400/10",
    screenshots: [
      "/pulseos/pulse-1.png",
      "/pulseos/pulse-2.png",
      "/pulseos/pulse-3.png",
    ],
  },
  {
    title: "Rebound",
    label: "Relationship Recovery App",
    metric: "Live Mobile App",
    accent: "from-pink-400/25 to-fuchsia-400/10",
    screenshots: [
      "/rebound/rebound-1.png",
      "/rebound/rebound-2.png",
      "/rebound/rebound-3.png",
    ],
  },
  {
    title: "HypeLoop",
    label: "Trend Intelligence Platform",
    metric: "Realtime Alerts",
    accent: "from-cyan-400/25 to-purple-400/10",
    screenshots: [
      "/hypeloop/hypeloop-1.png",
      "/hypeloop/hypeloop-2.png",
      "/hypeloop/hypeloop-3.png",
    ],
  },
  {
    title: "DFS Edge",
    label: "Sports Optimization Software",
    metric: "Data + Algorithms",
    accent: "from-lime-400/25 to-orange-400/10",
    screenshots: [
      "/dfs-edge/dfs-1.png",
      "/dfs-edge/dfs-2.png",
      "/dfs-edge/dfs-3.png",
    ],
  },
];

const leadRecoveryFeatures = [
  "Recover Lost Leads",
  "AI Follow-Up",
  "Customer Tracking",
  "Missed Call Recovery",
  "Lead Automation",
  "Business Growth",
];

const proofStats = [
  {
    title: "$500+",
    label: "AI Lead Recovery Systems",
  },
  {
    title: "Mobile First",
    label: "Manage Leads From Anywhere",
  },
  {
    title: "AI Powered",
    label: "Automated Follow-Up",
  },
];

const serviceCards = [
  {
    title: "AI Lead Recovery System",
    price: "Starting at $500",
    desc:
      "Capture leads, track conversations, follow up faster, and recover missed opportunities with AI-powered automation.",
  },
  {
    title: "Business Websites",
    price: "Starting at $500",
    desc:
      "Modern, mobile-friendly websites designed to make your business look credible and turn visitors into leads.",
  },
  {
    title: "Mobile App Development",
    price: "Custom Quote",
    desc:
      "Custom Android and iOS apps built for startups, businesses, internal tools, and SaaS products.",
  },
  {
    title: "Custom Software & Automation",
    price: "Custom Quote",
    desc:
      "Dashboards, backend systems, automations, customer portals, and tools built around your workflow.",
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
                  Helping Businesses Capture More Leads & Recover Lost Customers
                </span>
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
                Stop Losing Customers
                <span className="bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  {" "}
                  to Missed Calls{" "}
                </span>
                and Slow Follow-Up.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">
                PulseOS helps businesses automatically capture leads, follow up
                faster, recover missed opportunities, and increase revenue using
                AI-powered automation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {leadRecoveryFeatures.map((chip) => (
                  <span key={chip} className="mini-chip">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/start" className="btn btn-primary">
                  Book Free Consultation
                </Link>

                <Link href="/work" className="btn btn-secondary">
                  See PulseOS Demo
                </Link>
              </div>

              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                {proofStats.map((item) => (
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
                          Zero2Sixty Media
                        </div>
                        <div className="text-xs text-white/45">
                          Leads • AI • Apps
                        </div>
                      </div>
                    </div>

                    <div className="cinematic-pulse h-3 w-3 rounded-full bg-[var(--green)] shadow-[0_0_20px_rgba(57,255,20,0.65)]" />
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-black/45 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                        Featured System
                      </div>

                      <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-200">
                        Starts at $500
                      </div>
                    </div>

                    <div className="space-y-3">
                      {cinematicProducts.map((product, index) => (
                        <div
                          key={product.title}
                          className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${product.accent} p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 ${
                            product.title === "PulseOS"
                              ? "ring-1 ring-emerald-300/25"
                              : ""
                          }`}
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
                                Offer
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
                              style={{
                                width:
                                  product.title === "PulseOS"
                                    ? "96%"
                                    : `${68 + index * 5}%`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["Capture", "Follow Up", "Recover"].map((item) => (
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

      <section className="relative border-b border-white/10">
        <div className="container6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mini-chip mx-auto w-fit">The Real Problem</div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Most businesses do not have a lead problem.
              <span className="bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                {" "}
                They have a follow-up problem.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Every missed call, unanswered text, ignored form submission, and
              delayed reply could be costing your business money. PulseOS helps
              you respond faster, organize every opportunity, and keep leads
              from slipping away.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Lead Tracking",
              "Customer Management",
              "AI Follow-Up Suggestions",
              "Activity Dashboard",
              "Missed Opportunity Alerts",
              "Mobile Access Anywhere",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur"
              >
                <div className="mb-5 h-10 w-10 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 shadow-[0_0_30px_rgba(57,255,20,0.08)]" />
                <h3 className="text-xl font-semibold text-white">
                  {feature}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Built to help your business stay organized, respond faster,
                  and turn more conversations into customers.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10">
        <div className="container6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="mini-chip w-fit">Featured Offer</div>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                PulseOS AI Lead Recovery System
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/60">
                A mobile-first business system designed to help contractors,
                dealerships, realtors, gyms, salons, service businesses, and
                local companies capture more leads and recover missed
                opportunities.
              </p>

              <div className="mt-8 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
                <div className="text-sm uppercase tracking-[0.25em] text-emerald-200/70">
                  Starting at
                </div>
                <div className="mt-2 text-5xl font-semibold text-white">
                  $500
                </div>
                <div className="mt-3 text-sm leading-6 text-white/55">
                  Setup packages available with optional monthly management,
                  support, and automation upgrades.
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/start" className="btn btn-primary">
                  Request Free Consultation
                </Link>

                <Link href="/work" className="btn btn-secondary">
                  View Our Work
                </Link>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {serviceCards.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur"
                >
                  <div className="text-sm font-semibold text-emerald-200">
                    {service.price}
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/55">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10">
        <div className="container6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40">
                <Image
                  src="/tanner.jpg"
                  alt="Tanner Thergesen"
                  width={700}
                  height={875}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="rounded-3xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl">
                  <div className="text-2xl font-semibold text-white">
                    Tanner Thergesen
                  </div>

                  <div className="mt-1 text-sm text-emerald-300">
                    Founder • Zero2Sixty Media LLC
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="mini-chip">Flutter Developer</span>
                    <span className="mini-chip">AI Systems</span>
                    <span className="mini-chip">Mobile Apps</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mini-chip w-fit">
                Built By A Real Software Company
              </div>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Meet Tanner Thergesen
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/60">
                Founder of Zero2Sixty Media LLC. I build mobile apps, AI
                business systems, websites, and custom software for companies
                that want to grow faster and operate smarter.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/60">
                Zero2Sixty is not a template agency. It is a software company
                with real product experience across mobile apps, realtime
                dashboards, AI systems, customer platforms, and full-stack
                business tools.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["PulseOS", "Rebound Dating", "HypeLoop", "DFS Edge"].map(
                  (project) => (
                    <div
                      key={project}
                      className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                    >
                      <div className="text-lg font-semibold text-white">
                        {project}
                      </div>
                      <div className="mt-2 text-sm text-white/50">
                        Real software product built by Zero2Sixty.
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="mt-8">
                <Link href="/start" className="btn btn-primary">
                  Work With Zero2Sixty
                </Link>
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