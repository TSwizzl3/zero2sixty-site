// src/components/pricing-section.tsx

import Link from "next/link";

export function PricingSection() {
  return (
    <section className="section">
      <div className="container6">
        <h2 className="h2 text-center">Pricing</h2>
        <p className="p max-w-2xl mx-auto text-center">
          Clear scope. Clear price. No agency games.
        </p>

        {/* TOP 4 PACKAGES */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* MVP APP */}
          <div className="surface hover-lift">
            <div className="surface-inner p-7 text-center">
              <div className="text-lg font-semibold">MVP App</div>
              <div className="mt-2 text-3xl font-bold">
                Starting at $2,000
              </div>
              <div className="mt-3 text-sm text-white/65">
                Mobile or web MVP built for launch.
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>• UI design</li>
                <li>• Core features</li>
                <li>• Backend setup</li>
                <li>• Deployment ready</li>
              </ul>
              <Link href="/start" className="btn btn-primary mt-6 w-full">
                Start Project
              </Link>
            </div>
          </div>

          {/* PROMO VIDEO */}
          <div className="surface hover-lift">
            <div className="surface-inner p-7 text-center">
              <div className="text-lg font-semibold">Promo Video</div>
              <div className="mt-2 text-3xl font-bold">
                Starting at $250
              </div>
              <div className="mt-3 text-sm text-white/65">
                Scroll-stopping social content.
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>• 15–60 sec edits</li>
                <li>• Captions included</li>
                <li>• Platform formatted</li>
                <li>• Optimized hooks</li>
              </ul>
              <Link href="/start" className="btn btn-primary mt-6 w-full">
                Get Video
              </Link>
            </div>
          </div>

          {/* WEBSITE */}
          <div className="surface hover-lift">
            <div className="surface-inner p-7 text-center">
              <div className="text-lg font-semibold">Website</div>
              <div className="mt-2 text-3xl font-bold">
                Starting at $1,500
              </div>
              <div className="mt-3 text-sm text-white/65">
                Fast, modern, conversion-focused.
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>• Custom layout</li>
                <li>• SEO basics</li>
                <li>• Mobile optimized</li>
                <li>• Live in weeks</li>
              </ul>
              <Link href="/start" className="btn btn-primary mt-6 w-full">
                Build Site
              </Link>
            </div>
          </div>

          {/* RETAINER */}
          <div className="surface hover-lift">
            <div className="surface-inner p-7 text-center">
              <div className="text-lg font-semibold">Monthly Retainer</div>
              <div className="mt-2 text-3xl font-bold">
                Starting at $200
              </div>
              <div className="mt-3 text-sm text-white/65">
                Ongoing creative + dev support.
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>• Priority turnaround</li>
                <li>• Small edits included</li>
                <li>• Strategy support</li>
                <li>• Direct access</li>
              </ul>
              <Link href="/start" className="btn btn-primary mt-6 w-full">
                Work With Me
              </Link>
            </div>
          </div>
        </div>

        {/* CENTERED BRANDING PACKAGE */}
        <div className="mt-10 flex justify-center">
          <div className="surface hover-lift max-w-md w-full">
            <div className="surface-inner p-8 text-center">
              <div className="text-lg font-semibold">Branding Package</div>
              <div className="mt-2 text-3xl font-bold">
                Starting at $250
              </div>
              <div className="mt-3 text-sm text-white/65">
                Complete brand identity built to look established.
              </div>

              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>• Primary + secondary logo</li>
                <li>• Color palette</li>
                <li>• Typography system</li>
                <li>• Social profile kit</li>
                <li>• Brand style guide</li>
              </ul>

              <Link href="/start" className="btn btn-primary mt-6 w-full">
                Start Branding
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
