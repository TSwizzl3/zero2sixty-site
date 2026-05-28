// src/components/faq-section.tsx

import Image from "next/image";
import Link from "next/link";

const FAQS = [
  {
    q: "What kinds of apps do you build?",
    a:
      "I build mobile apps, SaaS platforms, AI-powered business systems, realtime dashboards, social apps, and custom backend-driven software products using Flutter, FastAPI, Firebase, and Supabase.",
    images: [
      "/pulseos/pulse-1.png",
      "/dfs-edge/dfs-1.png",
      "/hypeloop/hypeloop-1.png",
    ],
  },
  {
    q: "Do you only build the frontend?",
    a:
      "No — projects can include frontend development, backend APIs, databases, authentication, realtime systems, admin dashboards, push notifications, deployment, and launch support.",
    images: [
      "/pulseos/pulse-2.png",
      "/dfs-edge/dfs-2.png",
      "/rebound/rebound-1.png",
    ],
  },
  {
    q: "Can you help launch apps to the App Store and Google Play?",
    a:
      "Yes. I can help with app store preparation, builds, assets, testing, Play Store deployment, TestFlight, production releases, and submission guidance.",
    images: [
      "/rebound/rebound-2.png",
      "/pulseos/pulse-3.png",
      "/hypeloop/hypeloop-2.png",
    ],
  },
  {
    q: "Do you work with startups and MVPs?",
    a:
      "Yes. A large part of my work focuses on MVPs, startup-style platforms, and scalable product foundations designed to launch quickly while still looking premium.",
    images: [
      "/dfs-edge/dfs-3.png",
      "/rebound/rebound-3.png",
      "/pulseos/pulse-4.png",
    ],
  },
  {
    q: "What tech stack do you use?",
    a:
      "Most projects are built with Flutter for mobile apps and FastAPI for backend systems. I also use Firebase, Supabase, PostgreSQL, realtime systems, AI integrations, and cloud deployment workflows.",
    images: [
      "/hypeloop/hypeloop-3.png",
      "/pulseos/pulse-5.png",
      "/dfs-edge/dfs-1.png",
    ],
  },
  {
    q: "Can you redesign or improve an existing app?",
    a:
      "Yes. I can modernize UI/UX, improve app performance, rebuild architecture, add new systems, redesign branding, or expand existing apps into more scalable platforms.",
    images: [
      "/pulseos/pulse-6.png",
      "/rebound/rebound-1.png",
      "/hypeloop/hypeloop-1.png",
    ],
  },
  {
    q: "How long do projects usually take?",
    a:
      "Smaller builds and UI systems can take days to weeks. Larger SaaS platforms and full mobile ecosystems vary depending on scope, backend complexity, and launch requirements.",
    images: [
      "/dfs-edge/dfs-2.png",
      "/pulseos/pulse-7.png",
      "/rebound/rebound-2.png",
    ],
  },
  {
    q: "Do you offer branding, video editing, or marketing too?",
    a:
      "Yes — although the main focus is now app development and software systems, I also have a background in branding, promo editing, social content, and digital marketing.",
    images: [
      "/hypeloop/hypeloop-2.png",
      "/pulseos/pulse-1.png",
      "/dfs-edge/dfs-3.png",
    ],
  },
];

export function FAQSection() {
  return (
    <section
      id="client-questions"
      className="section relative scroll-mt-32 overflow-hidden border-t border-white/10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[520px] w-[620px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-[240px] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="container6 relative">
        <div className="max-w-4xl">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
            FAQ
          </div>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
            Questions clients usually ask.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Mobile app development, SaaS systems, AI workflows, backend
            architecture, launches, scaling, and product strategy — all in one
            streamlined build process.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {FAQS.map((f) => (
            <div
              key={f.q}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="flex gap-2 overflow-hidden border-b border-white/10 bg-black/30 p-4">
                {f.images.map((src) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-black"
                  >
                    <Image
                      src={src}
                      alt="Project preview"
                      width={140}
                      height={260}
                      className="h-[120px] w-auto object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>

              <div className="p-8">
                <div className="text-xl font-semibold text-white">{f.q}</div>

                <p className="mt-4 text-sm leading-8 text-white/62">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-black/35 p-7 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Still Have Questions?
              </div>

              <div className="mt-2 text-2xl font-semibold text-white">
                Let’s talk about your app, platform, or idea.
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/start" className="btn btn-primary">
                Start a Project
              </Link>

              <Link href="/work" className="btn btn-secondary">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}