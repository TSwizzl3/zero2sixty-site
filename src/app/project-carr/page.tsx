import type { Metadata } from "next";
import { CarrExperience } from "@/components/carr/carr-experience";
import "./project-carr.css";

export const metadata: Metadata = {
  title: "Project Carr Court | Residential Development Proposal",
  description:
    "A private residential development proposal prepared for Tom Marsh by Tanner and Deidre.",
  robots: { index: false, follow: false },
};

export default function ProjectCarrPage() {
  return <CarrExperience />;
}
