// src/components/footer.tsx
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-start sm:justify-between">
          {/* LOGO BLOCK */}
          <div className="max-w-lg">
            <Link href="/" aria-label="Zero2Sixty Media">
              <Image
                src="/brand/logo_full.png"
                alt="Zero2Sixty Media"
                width={640}
                height={220}
                className="
                  h-[72px]
                  sm:h-[96px]
                  md:h-[112px]
                  w-auto
                  object-contain
                  select-none
                "
              />
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Premium black + neon creative for brands that want speed, polish,
              and real outcomes — without agency overhead.
            </p>

            <p className="mt-3 text-xs text-white/50">
              Founder-led • Direct collaboration • Clear scope
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="space-y-3 text-sm">
              <div className="text-xs font-semibold text-white/60">Explore</div>
              <Link href="/work" className="block text-white/70 hover:text-white transition">
                Work
              </Link>
              <Link href="/#pricing" className="block text-white/70 hover:text-white transition">
                Pricing
              </Link>
              <Link href="/start" className="block text-white/70 hover:text-white transition">
                Start
              </Link>
              <Link href="/privacy" className="block text-white/70 hover:text-white transition">
                Privacy Policy
              </Link>
            </div>

            <div className="space-y-3 text-sm">
              <div className="text-xs font-semibold text-white/60">Services</div>
              <Link href="/#pricing" className="block text-white/70 hover:text-white transition">
                Apps
              </Link>
              <Link href="/#pricing" className="block text-white/70 hover:text-white transition">
                Video
              </Link>
              <Link href="/#pricing" className="block text-white/70 hover:text-white transition">
                Branding
              </Link>
            </div>

            <div className="space-y-3 text-sm">
              <div className="text-xs font-semibold text-white/60">Contact</div>
              <Link href="/start" className="block text-white/70 hover:text-white transition">
                Start a project
              </Link>
              <a
                href="mailto:tanner@zero2sixtymedia.com"
                className="block text-white/70 hover:text-white transition"
              >
                Email directly
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {new Date().getFullYear()} Zero2Sixty Media LLC. All rights reserved.
            </div>

            <div className="flex items-center gap-4 text-white/40">
              <span>Denver-based • Remote-friendly</span>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
