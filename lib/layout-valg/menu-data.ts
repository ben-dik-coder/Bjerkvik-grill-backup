/** Felles innhold til layout-eksempler (samme gourmet-palett, ulik presentasjon). */
export const LV_MENU = [
  {
    key: "burger",
    label: "Burgere",
    sub: "Saftig kjøtt, sprø tilbehør",
    img: "/images/bu.png",
    /** Anker på `/meny` (PremiumMenyPage) */
    menyHref: "/meny#hovedretter",
  },
  {
    key: "kebab",
    label: "Kebab",
    sub: "Rulle, tallerken og saftig kjøtt",
    img: "/images/kebab.png",
    menyHref: "/meny#kebab",
  },
  {
    key: "pizza",
    label: "Pizza",
    sub: "Sprø bunn, rike toppingvalg",
    img: "/images/pizza.png",
    menyHref: "/meny#pizza",
  },
] as const;
