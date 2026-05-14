import type { CSSProperties } from "react";

/**
 * Djup kaffe-/espresso-brun kåpe rundt menyen. Sjølva menyteksten ligge på lysare brunt papir
 * (ikkje her — sjå MenyPlakatReferanse).
 */
export const MENY_PLAKAT_BAKGRUNN_STIL: CSSProperties = {
  backgroundColor: "#231a15",
  backgroundImage:
    "radial-gradient(ellipse 95% 70% at 50% -10%, rgba(88,56,42,0.55), transparent 54%), radial-gradient(ellipse 80% 60% at 100% 100%, rgba(18,14,11,0.65), transparent 48%)",
};

/** Forside: lysere varm brun enn meny-plakat, samme glød. */
export const FORSIDE_PLAKAT_BAKGRUNN_STIL: CSSProperties = {
  backgroundColor: "#453a32",
};

/**
 * Tailwind-tema på plakat-sider: lys kremtekst, paneltoner som matcher utkanten.
 * Barn med `bg-background` (f.eks. Hero) kan bruke transparent så denne tonen synes.
 */
export const PLAKAT_SIDE_CSSVAR: CSSProperties = {
  "--background": "transparent",
  "--foreground": "#f5f1eb",
  "--raised": "#3a3530",
  "--sunken": "#302b27",
} as CSSProperties;

/** Ytre bakgrunn: samme som forsiden med plakat — brukes også på `/meny`. */
export const FORSIDE_OG_MENY_PLAKAT_UTKANT_STIL: CSSProperties = {
  ...FORSIDE_PLAKAT_BAKGRUNN_STIL,
  ...PLAKAT_SIDE_CSSVAR,
};

/** Limt topplinje på forsiden (synk med plakat-bakgrunn). */
export const FORSIDE_PLAKAT_TOPBAR_BG = "rgba(69, 58, 50, 0.9)";
