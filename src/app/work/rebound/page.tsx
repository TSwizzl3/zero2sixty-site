// src/app/work/rebound/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rebound Case Study",
  description:
    "Rebound is a modern social and dating platform built by Zero2Sixty Media featuring profiles, matching, messaging, events, and mobile-first UX.",
};

const screenshots = [
  "/rebound/rebound-1.png",
  "/rebound/rebound-2.png",
  "/rebound/rebound-3.png",
];

const features = [
  "Profile and account systems",
  "Mobile-first social UX",
  "Modern dating-style interface",
  "Messaging concepts",
  "Events and giveaways",
  "Authentication workflows",
  "Realtime user interactions",
  "Google Play deployment",
];

const stack = [
  "Flutter",
  "Firebase",
  "Supabase",
  "Authentication",
  "Messaging",
  "Social UX",
  "Realtime Systems",
  "Android Deployment",
];

export default function ReboundPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-[0.03]" />

        <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="absolute left-0 top-[500px] h-[700px] w-[700px] rounded-full bg-rose-500/10 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="container6 py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-pink-300/25 bg-pink-300/10 px-4 py-2 text-sm font-semibold text-pink-300">
                Social & Dating Platform
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
                Rebound
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">
                Rebound is a modern social and dating platform designed around
                profiles, matching, mobile interaction, events, and community
                engagement with a polished startup-style user experience.
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
              <div className="absolute inset-0 rounded-[3rem] bg-pink-400/10 blur-3xl" />

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
                      alt="Rebound screenshot"
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
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">
                The Product
              </div>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Consumer-facing social product design.
              </h2>
            </div>

            <p className="text-lg leading-8 text-white/68">
              Rebound was built as a mobile-first social experience focused on
              profiles, interaction, events, messaging concepts, and community
              engagement. The product emphasizes modern UI/UX, onboarding
              experience, and consumer-style product polish.
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
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">
              Technical Highlights
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Authentication, interaction systems, and social UX.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              Rebound demonstrates experience building consumer-facing mobile
              products with account systems, realtime thinking, onboarding
              flows, mobile UX hierarchy, and scalable social-style
              architecture.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Mobile-First UX",
                desc:
                  "Built around smooth onboarding, profiles, discovery flows, and modern interaction patterns for consumer users.",
              },
              {
                title: "Social Product Thinking",
                desc:
                  "Structured around engagement systems, matching concepts, messaging flows, and community-style interaction.",
              },
              {
                title: "Launch-Oriented Architecture",
                desc:
                  "Designed with production deployment, authentication systems, and scalable mobile infrastructure in mind.",
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
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">
              Screenshots
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Modern social app interface design.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              Rebound uses a polished mobile-first interface with profile
              layouts, event systems, onboarding flows, and startup-style
              consumer product aesthetics.
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
                  alt="Rebound screen"
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
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">
                Why It Matters
              </div>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Proof of consumer product design capability.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Rebound demonstrates the ability to build polished,
                consumer-facing mobile products with onboarding flows, account
                systems, social UX, profile experiences, interaction design,
                and scalable mobile architecture.
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