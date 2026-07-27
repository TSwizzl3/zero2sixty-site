import type { Metadata } from "next";
import { CarrExperience } from "@/components/carr/carr-experience";
import "./project-carr.css";

export const metadata: Metadata = {
  title: "Project Carr Court | Engineering-Backed Investment Analysis",
  description:
    "A private, engineering-backed residential investment analysis prepared for Tom Marsh by Tanner and Deidre.",
  robots: { index: false, follow: false },
};

export default function ProjectCarrPage() {
  return <CarrExperience />;
}
