import type { Metadata } from "next";
import ZuluchyProposal from "@/components/zuluchy-proposal";
import "./proposal.css";

export const metadata: Metadata = {
  title: "ZULUCHY Technical Assessment | Zero2Sixty Media",
  description:
    "FlutterFlow and Supabase technical assessment, completion plan, timeline, and fixed-price proposal prepared by Zero2Sixty Media LLC.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "ZULUCHY Technical Assessment",
    description:
      "FlutterFlow + Supabase completion plan and fixed-price proposal by Zero2Sixty Media LLC.",
    images: [
      {
        url: "/proposals/zuluchy/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZULUCHY Technical Assessment",
    description: "Prepared by Zero2Sixty Media LLC.",
    images: ["/proposals/zuluchy/og.png"],
  },
};

export default function ZuluchyProposalPage() {
  return <ZuluchyProposal />;
}
