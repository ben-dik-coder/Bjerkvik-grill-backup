import type { CSSProperties } from "react";

/** Samme atmosfære som eksperimentell meny (`/meny`). */
export const MENY_PLAKAT_BAKGRUNN_STIL: CSSProperties = {
  backgroundColor: "#12100e",
  backgroundImage:
    "radial-gradient(ellipse 100% 58% at 50% 0%, rgba(110, 78, 48, 0.34), transparent 62%)",
};

/** Forside: samme «varme glød» som menyen, men et hakk lysere bunnfarge. */
export const FORSIDE_PLAKAT_BAKGRUNN_STIL: CSSProperties = {
  backgroundColor: "#221e19",
  backgroundImage:
    "radial-gradient(ellipse 100% 58% at 50% 0%, rgba(125, 92, 58, 0.26), transparent 62%)",
};

/** Limt topplinje på forsiden (synk med plakat-bakgrunn). */
export const FORSIDE_PLAKAT_TOPBAR_BG = "rgba(34, 30, 25, 0.88)";
