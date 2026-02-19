// src/app/start/page.tsx
import type { Metadata } from "next";
import { StartProjectForm } from "@/components/start-project-form";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Tell us what you’re building and get a clear quote + recommended scope. Direct with Tanner. No fluff.",
  alternates: {
    canonical: "/start",
  },
  openGraph: {
    title: "Start a project — Zero2Sixty Media",
    description:
      "Tell us what you’re building and get a clear quote + recommended scope. No fluff.",
    url: "https://zero2sixtymedia.com/start",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zero2Sixty Media — Start a project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image"],
  },
};

export default function StartPage() {
  return (
    <main className="section">
      <div className="container6 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Start a project
        </h1>
        <p className="p">
          Fill this out and you’ll get a clear quote + recommended scope. Direct
          with Tanner. No fluff.
        </p>

        <div className="mt-10 surface">
          <div className="surface-inner p-7 sm:p-8">
            <StartProjectForm />
          </div>
        </div>

        <p className="mt-6 text-xs text-white/55">
          By submitting, you agree to be contacted about your project. Your info
          is never sold. Typical reply time: same day.
        </p>
      </div>
    </main>
  );
}