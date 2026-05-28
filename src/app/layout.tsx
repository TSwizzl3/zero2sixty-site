// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";
import { CredibilityStrip } from "@/components/credibility-strip";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://zero2sixtymediallc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Zero2Sixty Media — Mobile App Development, AI Systems & SaaS Platforms",
    template: "%s — Zero2Sixty Media",
  },

  description:
    "Zero2Sixty Media builds production-ready mobile apps, AI-powered business systems, SaaS platforms, realtime dashboards, backend APIs, and full-stack software products using Flutter, FastAPI, Firebase, and Supabase.",

  keywords: [
    "mobile app developer",
    "Flutter developer",
    "Android developer",
    "AI app developer",
    "SaaS developer",
    "full stack developer",
    "FastAPI developer",
    "Firebase developer",
    "Supabase developer",
    "mobile app development",
    "AI business systems",
    "SaaS platforms",
    "backend API development",
    "realtime dashboards",
    "startup MVP development",
    "Denver app developer",
    "Colorado app developer",
    "Zero2Sixty Media",
    "PulseOS",
    "DFS Edge",
    "HypeLoop",
    "Rebound app",
  ],

  authors: [
    {
      name: "Tanner Thergesen",
      url: siteUrl,
    },
  ],

  creator: "Tanner Thergesen",
  publisher: "Zero2Sixty Media LLC",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Zero2Sixty Media — Mobile App Development, AI Systems & SaaS Platforms",
    description:
      "Production-ready mobile apps, AI-powered systems, SaaS platforms, realtime dashboards, backend APIs, and full-stack software products built for real launch.",
    url: siteUrl,
    siteName: "Zero2Sixty Media",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt:
          "Zero2Sixty Media — Mobile App Development, AI Systems, and SaaS Platforms",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Zero2Sixty Media — Mobile App Development, AI Systems & SaaS Platforms",
    description:
      "Production-ready mobile apps, AI-powered systems, SaaS platforms, realtime dashboards, backend APIs, and full-stack software products.",
    images: ["/twitter-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        <Navbar />
        <CredibilityStrip />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}