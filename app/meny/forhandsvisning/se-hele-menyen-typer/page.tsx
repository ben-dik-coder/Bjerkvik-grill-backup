import type { Metadata } from "next";

import { SeHeleMenyenKortSamples } from "@/components/meny/SeHeleMenyenKortSamples";

export const metadata: Metadata = {
  title: "Se hele menyen — kort-stiler · Bjerkvik Grill",
  description: "Femten visuelle varianter av meny-snarveien på forsiden.",
  robots: { index: false, follow: false },
};

export default function SeHeleMenyenTyperPage() {
  return <SeHeleMenyenKortSamples />;
}
