export const SITE = {
  name: "Bjerkvik Grill",
  /** Google Bedriftsprofil — kategori (oppdater ved behov) */
  category: "Grill / fast food",
  /** Prisindikasjon (eksempel) */
  priceRangeKr: "200–300",
  /** Legg inn ekte telefon når dere har den */
  phoneDisplay: "Se kontakt nedenfor",
  phoneHref: "#kontakt",
  /** Full gateadresse når dere er klare */
  address: "Bjerkvik — adresse legges inn",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Bjerkvik+Norway",
  /** Tekst på kart-marker (over kartet) */
  mapPinLabel: "Bjerkvik",
  instagram: "https://www.instagram.com/",
  instagramHandle: "@bjerkvikgrill",
  rating: "4.9",
  reviewCount: 12,
  tagline:
    "Vi ønsker deg velkommen til god mat og trivelig stemning ved sjøen i Bjerkvik.",
  signature:
    "Rettene tilberedes med omtanke — fordi gode måltider smaker best lokalt.",
  aboutExtra:
    "Ny nettside for Bjerkvik Grill — oppdater adresse, åpningstider og bilder etter dere har det klart.",
} as const;

/** Åpningstider — erstatt med faktiske tider */
export const OPENING_WEEK = [
  { day: "Mandag", hours: "Oppdateres" },
  { day: "Tirsdag", hours: "Oppdateres" },
  { day: "Onsdag", hours: "Oppdateres" },
  { day: "Torsdag", hours: "Oppdateres" },
  { day: "Fredag", hours: "Oppdateres" },
  { day: "Lørdag", hours: "Oppdateres" },
  { day: "Søndag", hours: "Oppdateres" },
] as const;

/** Lokalt bilde: `public/images/hero.png` — bytt filer uten å endre denne konstanten */
export const IMG = {
  hero: "/images/hero.png",
  burgerCat:
    "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=85&auto=format&fit=crop",
  sushiCat:
    "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=85&auto=format&fit=crop",
  pizzaCat:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=85&auto=format&fit=crop",
  comboCat:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=85&auto=format&fit=crop",
  dealBurger:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=85&auto=format&fit=crop",
  dishBurger:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=85&auto=format&fit=crop",
  dishSushi:
    "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=85&auto=format&fit=crop",
  dishPizza:
    "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=85&auto=format&fit=crop",
  dishFries:
    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=85&auto=format&fit=crop",
  familyCombo:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1000&q=85&auto=format&fit=crop",
  ig1:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=85&auto=format&fit=crop",
  ig2:
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=85&auto=format&fit=crop",
  ig3:
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=85&auto=format&fit=crop",
  ig4:
    "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400&q=85&auto=format&fit=crop",
} as const;

export const REVIEWS = [
  {
    id: "1",
    name: "Ole L.",
    when: "nylig",
    text: "Kjempegod grillmat og bra service. Anbefaler å stikke innom!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&q=80&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Magnus R.",
    when: "nylig",
    text: "Saftige burgere og rask tilberedning — vi kommer tilbake.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&q=80&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Sara K.",
    when: "nylig",
    text: "Trivelig sted ved sjøen, god stemning.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&q=80&auto=format&fit=crop",
  },
] as const;
