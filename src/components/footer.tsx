// src/components/footer.tsx

import Image from "next/image";
import Link from "next/link";

const platformLinks = [
  {
    label: "PulseOS",
    href: "/work",
  },
  {
    label: "DFS Edge",
    href: "/work",
  },
  {
    label: "HypeLoop",
    href: "/work",
  },
  {
    label: "Rebound",
    href: "/work",
  },
];

const serviceLinks = [
  {
    label: "Mobile Apps",
    href: "/#services",
  },
  {
    label: "SaaS Platforms",
    href: "/#services",
  },
  {
    label: "AI Systems",
    href: "/#services",
  },
  {
    label: "Backend APIs",
    href: "/#services",
  },
];

const navigationLinks = [
  {
    label: "Portfolio",
    href: "/work",
  },
  {
    label: "Process",
    href: "/#process",
  },
  {
    label: "FAQ",
    href: "/#client-questions",
  },
  {
    label: "Start Project",
    href: "/start",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[700px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute right-0 top-[200px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        {/* TOP */}
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div className="max-w-2xl">
            <Link
              href="/"
              aria-label="Zero2Sixty Media"
              className="relative inline-flex overflow-visible"
            >
              <span className="pointer-events-none absolute -inset-8 rounded-3xl bg-emerald-400/10 blur-3xl" />

              <Image
                src="/brand/logo_full.png"
                alt="Zero2Sixty Media"
                width={640}
                height={220}
                className="relative h-[78px] w-auto object-contain select-none sm:h-[96px] md:h-[110px]"
              />
            </Link>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
              Zero2Sixty Media builds mobile apps, SaaS platforms, AI-powered
              systems, realtime dashboards, and modern full-stack software
              products designed for real launch and growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Flutter",
                "FastAPI",
                "Firebase",
                "Supabase",
                "AI Systems",
                "Realtime Apps",
              ].map((tag) => (
                <span key={tag} className="mini-chip">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/start" className="btn btn-primary">
                Start a Project
              </Link>

              <Link href="/work" className="btn btn-secondary">
                View Portfolio
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid gap-10 sm:grid-cols-3">
            {/* PRODUCTS */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Products
              </div>

              <div className="mt-5 space-y-4">
                {platformLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-white/65 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Services
              </div>

              <div className="mt-5 space-y-4">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-white/65 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* NAV */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Navigation
              </div>

              <div className="mt-5 space-y-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-white/65 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}

                <a
                  href="mailto:tanner@zero2sixtymedia.com"
                  className="block text-sm text-white/65 transition hover:text-white"
                >
                  Contact Directly
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE BAR */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--green)]">
                Available For
              </div>

              <div className="mt-3 text-2xl font-semibold text-white">
                Mobile app development, SaaS systems, AI tools, and full-stack
                software products.
              </div>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <span className="mini-chip">Flutter Development</span>
              <span className="mini-chip">SaaS Platforms</span>
              <span className="mini-chip">AI Systems</span>
              <span className="mini-chip">Backend APIs</span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {new Date().getFullYear()} Zero2Sixty Media LLC. All rights
              reserved.
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <span>Denver-based • Remote-friendly</span>

              <Link
                href="/privacy-policy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}