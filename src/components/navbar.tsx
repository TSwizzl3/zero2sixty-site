// src/components/navbar.tsx
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Zero2Sixty Media"
          className="relative flex items-center overflow-visible"
        >
          {/* Glow */}
          <span className="pointer-events-none absolute -inset-6 rounded-2xl bg-emerald-400/15 blur-2xl" />

          <Image
            src="/brand/logo_full.png"
            alt="Zero2Sixty Media"
            width={520}
            height={180}
            priority
            className="
              h-[64px]
              sm:h-[80px]
              md:h-[96px]
              w-auto
              object-contain
              select-none
            "
          />
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden items-center gap-8 text-sm sm:flex">
          <Link href="/work" className="text-white/70 hover:text-white">
            Work
          </Link>
          <Link href="/#pricing" className="text-white/70 hover:text-white">
            Pricing
          </Link>
          <Link href="/start" className="text-white/70 hover:text-white">
            Start
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/start"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90"
          >
            Start a project
          </Link>
        </div>
      </div>
    </header>
  );
}