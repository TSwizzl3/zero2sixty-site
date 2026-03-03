// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";
import { CredibilityStrip } from "@/components/credibility-strip";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://zero2sixtyllc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zero2Sixty Media — Apps, Video, Branding",
    template: "%s — Zero2Sixty Media",
  },
  description:
    "Premium apps, high-impact video, and clean branding built for speed and real results.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zero2Sixty Media",
    description:
      "Premium apps, high-impact video, and clean branding built for speed and real results.",
    url: siteUrl,
    siteName: "Zero2Sixty Media",
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
    title: "Zero2Sixty Media",
    description:
      "Premium apps, high-impact video, and clean branding built for speed and real results.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white">
        <Navbar />
        <CredibilityStrip />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}