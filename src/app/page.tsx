// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSection } from "@/components/process-section";
import { FAQSection } from "@/components/faq-section";
import { WorkPreview } from "@/components/work-preview";
import { ContactCTA } from "@/components/contact-cta";
import { PortfolioCarouselCard } from "@/components/portfolio_carousel_card";
import { TestimonialsSection } from "@/components/testimonials-section";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://zero2sixtyllc.com";

export const metadata: Metadata = {
  title: "Zero2Sixty Media — Apps, Video, Branding",
  description:
    "Premium apps, high-impact video, and clean branding — delivered fast with clear scope and clean pricing.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Zero2Sixty Media",
    description:
      "Premium apps, high-impact video, and clean branding — delivered fast with clear scope and clean pricing.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zero2Sixty Media — Apps, Video, Branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image"],
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="bg-grid absolute inset-0" />
          <div className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[var(--blue)]/12 blur-3xl" />
          <div className="absolute top-10 left-1/4 h-[480px] w-[760px] rounded-full bg-[var(--green)]/10 blur-3xl" />
        </div>

        <div className="container6 relative py-24 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}
            <div>
              <div className="kicker hint-chip">
                <span className="h-2 w-2 rounded-full bg-[var(--green)] shadow-[0_0_18px_rgba(57,255,20,0.35)]" />
                Direct with Tanner • Fast turnaround • Clear pricing
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
                Apps. Video. Branding.
                <span className="text-white/95"> Built to convert.</span>{" "}
                <span className="text-[var(--blue)] drop-shadow-[0_0_18px_rgba(79,209,255,0.28)]">
                  No fluff.
                </span>
              </h1>

              <p className="p max-w-xl">
                Zero2Sixty helps founders, small businesses, and creators launch faster and look
                legit — with real deliverables that drive action: MVP apps, scroll-stopping video,
                and clean brand assets.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="mini-chip">MVP apps (Flutter / Web)</span>
                <span className="mini-chip">Promo + ads + reels</span>
                <span className="mini-chip">Logos + brand kits</span>
                <span className="mini-chip">Landing pages</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/start" className="btn btn-primary">
                  Start a project
                </Link>
                <Link href="/work" className="btn btn-secondary">
                  See work
                </Link>
              </div>

              <div className="mt-4 text-xs text-white/55">
                Clear scope. Clear price. Clean delivery. No surprises.
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { k: "Fast delivery", v: "week-level timelines" },
                  { k: "Direct builder", v: "no middlemen" },
                  { k: "Outcome-first", v: "assets made to convert" },
                ].map((x) => (
                  <div key={x.k} className="surface">
                    <div className="surface-inner p-5">
                      <div className="text-white/90 font-semibold">{x.k}</div>
                      <div className="mt-1 text-sm text-white/65">{x.v}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-sm text-white/70">
                ⚡ Need something quick? Ask about <span className="text-white/90 font-semibold">24-hour turnaround</span>{" "}
                options for select deliverables.
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <PortfolioCarouselCard />
              <div className="pointer-events-none absolute -right-12 -top-10 h-32 w-32 rounded-full bg-[var(--green)]/12 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
      <ProcessSection />

      {/* Testimonials */}
      <TestimonialsSection />

      <WorkPreview />
      <FAQSection />
      <ContactCTA />
    </main>
  );
}