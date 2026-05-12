import type { Metadata } from "next";

import { MenyForhandsvisningGrid } from "@/components/meny/MenyForhandsvisningGrid";

export const metadata: Metadata = {
  title: "Meny-stiler · Bjerkvik Grill",
  description:
    "Forhåndsvisning av 15 ulike layout- og stilretninger for meny-siden.",
  robots: { index: false, follow: false },
};

export default function MenyForhandsvisningPage() {
  return <MenyForhandsvisningGrid />;
}
