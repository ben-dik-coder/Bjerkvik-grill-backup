import type { Metadata } from "next";

import { MenyHeaderStyleSamples } from "@/components/meny/MenyHeaderStyleSamples";

export const metadata: Metadata = {
  title: "Meny header-stiler · Bjerkvik Grill",
  description: "Fem varianter av toppsstripe på meny-siden.",
  robots: { index: false, follow: false },
};

export default function MenyHeaderStilerPage() {
  return <MenyHeaderStyleSamples />;
}
