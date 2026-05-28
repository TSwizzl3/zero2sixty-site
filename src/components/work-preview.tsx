// src/components/work-preview.tsx

import Image from "next/image";
import Link from "next/link";

type ProductPreview = {
  title: string;
  category: string;
  description: string;
  href: string;
  screenshots: string[];
  tags: string[];
  accent: "green" | "blue" | "purple" | "pink";
};

const products: ProductPreview[] = [
  {
    title: "PulseOS",
    category: "AI Business Operating System",
    description:
      "AI-powered business platform featuring calls, campaigns, analytics, customer recovery, live activity, and business automation.",
    href: "/work/pulseos",
    screenshots: [
      "/pulseos/pulse-1.png",
      "/pulseos/pulse-2.png",
      "/pulseos/pulse-3.png",
    ],
    tags: ["Flutter", "AI Systems", "SaaS", "Analytics"],
    accent: "green",
  },

  {
    title: "DFS Edge",
    category: "Fantasy Sports Optimization",
    description:
      "Realtime DFS app ecosystem with lineup generation, simulations, projections, ownership tools, and multi-sport optimization.",
    href: "/work/dfs-edge",
    screenshots: [
      "/dfs-edge/dfs-1.png",
      "/dfs-edge/dfs-2.png",
      "/dfs-edge/dfs-3.png",
    ],
    tags: ["FastAPI", "Python", "Algorithms", "Sports Data"],
    accent: "blue",
  },

  {
    title: "Rebound",
    category: "Social & Matchmaking App",
    description:
      "Modern dating and social platform with profiles, matches, events, giveaways, chat systems, and admin moderation tools.",
    href: "/work/rebound",
    screenshots: [
      "/rebound/rebound-1.png",
      "/rebound/rebound-2.png",
      "/rebound/rebound-3.png",
    ],
    tags: ["Flutter", "Firebase", "Messaging", "Social UX"],
    accent: "pink",
  },

  {
    title: "HypeLoop",
    category: "Realtime Trend Discovery",
    description:
      "Trend intelligence platform with realtime feeds, alerts, analytics, source tracking, and social discovery systems.",
    href: "/work/hypeloop",
    screenshots: [
      "/hypeloop/hypeloop-1.png",
      "/hypeloop/hypeloop-2.png",
      "/hypeloop/hypeloop-3.png",
    ],
    tags: ["Supabase", "Firebase", "Realtime Feeds", "Analytics"],
    accent: "purple",
  },
];

function accentClasses(accent: ProductPreview["accent"]) {
  switch (accent) {
    case "green":
      return {
        glow: "bg-[var(--green)]/15",
        text: "text-[var(--green)]",
        border: "border-[var(--green)]/25",
      };

    case "blue":
      return {
        glow: "bg-[var(--blue)]/15",
        text: "text-[var(--blue)]",
        border: "border-[var(--blue)]/25",
      };

    case "purple":
      return {
        glow: "bg-fuchsia-400/15",
        text: "text-fuchsia-300",
        border: "border-fuchsia-300/25",
      };

    case "pink":
      return {
        glow: "bg-pink-400/15",
        text: "text-pink-300",
        border: "border-pink-300/25",
      };
  }
}

export function WorkPreview() {
  return (
    <section
      id="work"
      className="section relative overflow-hidden border-y border-white/10 bg-black/40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[600px] w-[700px] rounded-full bg-[var(--blue)]/10 blur-3xl" />

        <div className="absolute right-0 top-[420px] h-[500px] w-[500px] rounded-full bg-[var(--green)]/10 blur-3xl" />
      </div>

      <div className="container6 relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--green)]">
              Software Portfolio
            </div>

            <h2 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              Production-ready apps & platforms.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Mobile apps, SaaS systems, realtime platforms, AI workflows,
              startup ecosystems, and scalable backend-driven products built
              for real launch.
            </p>
          </div>

          <Link href="/work" className="btn btn-secondary">
            View full portfolio
          </Link>
        </div>

        <div className="mt-16 grid gap-8">
          {products.map((product, index) => {
            const styles = accentClasses(product.accent);

            const reverse = index % 2 === 1;

            return (
              <Link
                key={product.title}
                href={product.href}
                className="group block"
              >
                <article className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 lg:p-8">
                  <div
                    className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full ${styles.glow} blur-3xl`}
                  />

                  <div
                    className={`grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative">
                      <div
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${styles.border} ${styles.text} bg-white/5`}
                      >
                        {product.category}
                      </div>

                      <h3 className="mt-6 text-4xl font-semibold tracking-tight">
                        {product.title}
                      </h3>

                      <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                        {product.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <span key={tag} className="mini-chip">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-10 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85">
                        Explore case study
                        <span className="text-white/45">→</span>
                      </div>
                    </div>

                    <div className="relative">
                      <div
                        className={`absolute inset-0 rounded-[3rem] ${styles.glow} blur-3xl`}
                      />

                      <div className="relative flex items-end justify-center gap-4">
                        {product.screenshots.map((src, screenIndex) => (
                          <div
                            key={src}
                            className={`overflow-hidden rounded-[1.8rem] border border-white/10 bg-black shadow-2xl transition duration-300 group-hover:border-white/20 ${
                              screenIndex === 1
                                ? "z-20 w-[34%] translate-y-0"
                                : "z-10 hidden w-[28%] translate-y-6 opacity-80 sm:block"
                            }`}
                          >
                            <Image
                              src={src}
                              alt={`${product.title} screenshot`}
                              width={360}
                              height={760}
                              className="h-auto w-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}