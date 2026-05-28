// src/app/work/pulseos/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PulseOS Case Study",
  description:
    "PulseOS is an AI-powered business operating system built by Zero2Sixty Media for local businesses, service companies, and startup-style operations.",
};

const screenshots = [
  "/pulseos/pulse-1.png",
  "/pulseos/pulse-2.png",
  "/pulseos/pulse-3.png",
  "/pulseos/pulse-4.png",
  "/pulseos/pulse-5.png",
  "/pulseos/pulse-6.png",
  "/pulseos/pulse-7.png",
];

const features = [
  "AI-powered business dashboard",
  "Customer recovery workflows",
  "Campaign generation",
  "Realtime activity feed",
  "Analytics and revenue tracking",
  "AI calling system concepts",
  "Service-business demo flows",
  "Mobile-first SaaS UI",
];

const stack = [
  "Flutter",
  "FastAPI",
  "Firebase",
  "Supabase",
  "AI Workflows",
  "Realtime Systems",
  "Dashboard UX",
  "Business Automation",
];

export default function PulseOSPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-[0.03]" />
        <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-1/4 top-[600px] h-[700px] w-[700px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="container6 py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-[var(--green)]/25 bg-[var(--green)]/10 px-4 py-2 text-sm font-semibold text-[var(--green)]">
                AI Business Operating System
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
                PulseOS
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">
                PulseOS is an AI-powered business operating system designed for
                local businesses and service companies. It brings together AI
                calls, customer recovery, campaigns, analytics, realtime
                activity, and automation into one premium mobile-first SaaS
                experience.
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
              <div className="absolute inset-0 rounded-[3rem] bg-[var(--green)]/10 blur-3xl" />

              <div className="relative flex items-end justify-center gap-4">
                {screenshots.slice(0, 3).map((src, index) => (
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
                      alt="PulseOS screenshot"
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
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
                The Product
              </div>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                AI-powered operations for local businesses.
              </h2>
            </div>

            <p className="text-lg leading-8 text-white/68">
              PulseOS was built as a modern command center for businesses that
              need better visibility, faster follow-up, smarter campaigns, and
              automated customer recovery. The app focuses on making business
              operations feel alive with realtime feeds, AI recommendations,
              recovery opportunities, and performance dashboards.
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
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
              Screenshots
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Mobile-first SaaS interface.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              The UI was designed to feel premium, cinematic, and useful — with
              dark cards, glowing system states, clear hierarchy, and product
              flows that communicate real business value.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl"
              >
                <Image
                  src={src}
                  alt="PulseOS screen"
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
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
                Why It Matters
              </div>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Built as a real business platform, not just a mockup.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                PulseOS demonstrates full product thinking: positioning, UI/UX,
                business logic, dashboard design, automation concepts, customer
                workflows, and scalable SaaS architecture. It is one of the
                strongest examples of Zero2Sixty Media’s ability to design and
                build modern software products from scratch.
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