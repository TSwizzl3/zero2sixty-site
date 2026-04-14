// src/components/pricing-section.tsx

import Link from "next/link";

export function PricingSection() {
  return (
    <section className="section">
      <div className="container6">
        <h2 className="h2 text-center">Pricing</h2>
        <p className="p max-w-2xl mx-auto text-center">
          Offers built to make your brand look bigger, sound better, and convert faster.
        </p>

        <p className="text-center text-sm text-white/50 mt-2">
          No contracts. No fluff. Just results that scale your brand.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="surface hover-lift">
            <div className="surface-inner p-7 text-center">
              <div className="text-lg font-semibold">MVP App</div>
              <div className="mt-2 text-3xl font-bold">Starting at $500</div>
              <div className="mt-3 text-sm text-white/65">
                Launch fast with a clean, functional app built to grow.
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>• UI design</li>
                <li>• Core features</li>
                <li>• Backend setup</li>
                <li>• Launch-ready build</li>
              </ul>
              <Link href="/start" className="btn btn-primary mt-6 w-full">
                Start Project
              </Link>
            </div>
          </div>

          <div className="surface hover-lift">
            <div className="surface-inner p-7 text-center">
              <div className="text-lg font-semibold">Video Production</div>
              <div className="mt-2 text-3xl font-bold">Starting at $100</div>
              <div className="mt-3 text-sm text-white/65">
                High-impact video for any platform, built to grab attention and convert.
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>• Logo reveals</li>
                <li>• TikTok, Reels, Shorts</li>
                <li>• Viral business content</li>
                <li>• Commercial-style edits</li>
                <li>• Any video style, any platform</li>
              </ul>
              <Link href="/start" className="btn btn-primary mt-6 w-full">
                Create Video
              </Link>
            </div>
          </div>

          <div className="surface hover-lift">
            <div className="surface-inner p-7 text-center">
              <div className="text-lg font-semibold">Ultimate Branding Package</div>
              <div className="mt-2 text-3xl font-bold">Starting at $300</div>
              <div className="mt-3 text-sm text-white/65">
                Full branding plus a custom website or landing page to give your business a polished, conversion-ready presence.
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>• Logo package</li>
                <li>• Color palette</li>
                <li>• Typography system</li>
                <li>• Social/profile visuals</li>
                <li>• Cohesive brand identity</li>
                <li>• Custom website or landing page</li>
              </ul>
              <Link href="/start" className="btn btn-primary mt-6 w-full">
                Build Brand
              </Link>
            </div>
          </div>

          <div className="surface hover-lift">
            <div className="surface-inner p-7 text-center">
              <div className="text-lg font-semibold">Monthly Retainer</div>
              <div className="mt-2 text-3xl font-bold">Starting at $50</div>
              <div className="mt-3 text-sm text-white/65">
                Ongoing creative support for brands that need consistent content and momentum.
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>• Priority turnaround</li>
                <li>• Ongoing edits & content</li>
                <li>• Fast support access</li>
                <li>• Built for growth</li>
              </ul>
              <Link href="/start" className="btn btn-primary mt-6 w-full">
                Work With Me
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="surface hover-lift max-w-md w-full border border-[var(--blue)]/20 shadow-[0_0_40px_rgba(79,209,255,0.15)]">
            <div className="surface-inner p-8 text-center">
              <div className="text-lg font-semibold">
                StoreSound Retail Radio Sponsorship
              </div>
              <div className="mt-2 text-3xl font-bold">Starting at $20/month</div>
              <div className="mt-3 text-sm text-white/65">
                StoreSound is free to listen to and free to use in your store. Find it on Live365 under StoreSound.
              </div>

              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>• $20/month to sponsor the station</li>
                <li>• Includes a business shoutout on-air</li>
                <li>• Additional $25/month for a full 30-second commercial</li>
                <li>• Built for retail and small business exposure</li>
                <li>• Ready-to-air station placement</li>
              </ul>

              <Link href="/start" className="btn btn-primary mt-6 w-full">
                Sponsor The Station
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}