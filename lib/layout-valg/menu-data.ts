/** Felles innhold til layout-eksempler (samme gourmet-palett, ulik presentasjon). */
export const LV_MENU = [
  {
    key: "burger",
    label: "Burgere",
    sub: "Saftige burgere med ekte grillkjøtt",
    img: "/images/bg1.PNG",
    /** Anker på `/meny` (PremiumMenyPage) */
    menyHref: "/meny#hovedretter",
  },
  {
    key: "kebab",
    label: "Kebab",
    sub: "Kebab med saftig kjøtt og ferskt tilbehør",
    img: "/images/kebab.png",
    menyHref: "/meny#kebab",
  },
  {
    key: "pizza",
    label: "Pizza",
    sub: "Klassisk pizza med fersk topping og sprø bunn",
    img: "/images/pizza.png",
    menyHref: "/meny#pizza",
  },
] as const;
