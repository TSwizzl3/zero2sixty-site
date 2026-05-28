// src/components/navbar.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    label: "Products",
    href: "/#work",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "Process",
    href: "/#process",
  },
  {
    label: "FAQ",
    href: "/#client-questions",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-emerald-500/5" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          aria-label="Zero2Sixty Media"
          className="relative flex items-center overflow-visible"
          onClick={closeMenu}
        >
          <span className="pointer-events-none absolute -inset-6 rounded-2xl bg-emerald-400/10 blur-2xl" />

          <Image
            src="/brand/logo_full.png"
            alt="Zero2Sixty Media"
            width={520}
            height={180}
            priority
            className="h-[52px] w-auto select-none object-contain sm:h-[70px] md:h-[78px]"
          />
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-2 py-2 text-sm backdrop-blur md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-white/65 transition duration-300 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/start"
            className="rounded-full border border-[var(--green)]/30 bg-[var(--green)]/10 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-[var(--green)]/20 hover:text-white"
          >
            Start Project
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span>{isOpen ? "Close" : "Menu"}</span>

          <span className="flex h-5 w-5 flex-col justify-center gap-1">
            <span
              className={`h-0.5 w-5 rounded-full bg-white/75 transition ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white/75 transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white/75 transition ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="relative border-t border-white/10 bg-black/90 px-4 pb-5 pt-3 backdrop-blur-xl md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2 rounded-[2rem] border border-white/10 bg-white/[0.035] p-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/start"
              onClick={closeMenu}
              className="mt-1 rounded-2xl border border-[var(--green)]/30 bg-[var(--green)]/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--green)]/20"
            >
              Start Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}