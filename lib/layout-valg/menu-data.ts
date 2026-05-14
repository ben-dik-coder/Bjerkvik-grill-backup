/** Felles innhold til layout-eksempler (samme gourmet-palett, ulik presentasjon). */
export const LV_MENU = [
  {
    key: "burger",
    label: "Burgere",
    sub: "Saftige burgere med ekte grillkjøtt",
    img: "/images/burgerbbb.png",
    /** Anker på `/meny` (PremiumMenyPage) */
    menyHref: "/meny#hovedretter",
    heroEyebrow: "Burgermeny",
    heroTitle1: "Saftige",
    heroTitle2: "burgeropplevelser",
  },
  {
    key: "kebab",
    label: "Kebab",
    sub: "Kebab med saftig kjøtt og ferskt tilbehør",
    img: "/images/kebabbb.png",
    menyHref: "/meny#kebab",
    heroEyebrow: "Kebabmeny",
    heroTitle1: "Smakrike",
    heroTitle2: "kebabretter",
  },
  {
    key: "pizza",
    label: "Pizza",
    sub: "Klassisk pizza med fersk topping og sprø bunn",
    img: "/images/pizzab.png",
    menyHref: "/meny#pizza",
    heroEyebrow: "Pizzameny",
    heroTitle1: "Klassisk",
    heroTitle2: "pizza & topping",
  },
] as const;

/** Ekstra forsidesbanner under kebab/pizza — ikke med i LV_MENU-map (variant-sider og favoritter forblir uendret). */
export const HURTIGVALG_BIFF_BANNER = {
  key: "biff",
  label: "Biff",
  sub: "Møre kjøtt, klassiske biffer og smaker fra grill — for deg som vil ha litt ekstra på tallerkenen.",
  img: "/images/biff.png",
  menyHref: "/meny#hovedretter",
  heroEyebrow: "Biffmeny",
  heroTitle1: "Klassisk",
  heroTitle2: "biffer & kjøtt",
} as const;

export type MenuKortCoverImgSrc =
  | (typeof LV_MENU)[number]["img"]
  | (typeof HURTIGVALG_BIFF_BANNER)["img"];
