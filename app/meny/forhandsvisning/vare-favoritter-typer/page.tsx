import type { Metadata } from "next";

import { VareFavoritterOrdSamples } from "@/components/meny/VareFavoritterOrdSamples";

export const metadata: Metadata = {
  title: "Våre favoritter — typografi · Bjerkvik Grill",
  description: "Femten visuelle varianter av overskriften «Våre favoritter» på forsiden.",
  robots: { index: false, follow: false },
};

export default function VareFavoritterTyperPage() {
  return <VareFavoritterOrdSamples />;
}
