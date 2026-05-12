export const SITE = {
  name: "Bjerkvik Grill",
  /** Google Bedriftsprofil — kategori (oppdater ved behov) */
  category: "Grill / fast food",
  /** Prisindikasjon (eksempel) */
  priceRangeKr: "200–300",
  phoneDisplay: "91 92 31 41",
  phoneHref: "tel:+4791923141",
  address: "Maridalsveien 1, 8530 Bjerkvik",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Maridalsveien+1,+8530+Bjerkvik,+Norway",
  /** Tekst på kart-marker (over kartet) */
  mapPinLabel: "Bjerkvik Grill",
  instagram: "https://www.instagram.com/bjerkvikgrill/",
  instagramHandle: "@bjerkvikgrill",
  /** Facebook-side — oppdater URL om den avviker */
  facebook: "https://www.facebook.com/bjerkvikgrill",
  facebookLabel: "BJERKVIK GRILL",
  rating: "4,6",
  reviewCount: 266,
  tagline:
    "Vi ønsker deg velkommen til god mat og trivelig stemning på Bjerkvik Grill.",
  signature:
    "Rettene tilberedes med omtanke — fordi gode måltider smaker best lokalt.",
  aboutExtra:
    "Du finner oss på Maridalsveien i Bjerkvik — ta gjerne kontakt eller kom innom.",
} as const;

/** Åpningstider — som på Google Bedriftsprofil (helligdager kan avvike) */
export const OPENING_WEEK = [
  { day: "Mandag", hours: "12–21" },
  { day: "Tirsdag", hours: "12–21" },
  { day: "Onsdag", hours: "12–21" },
  { day: "Torsdag", hours: "12–21" },
  { day: "Fredag", hours: "12–21" },
  { day: "Lørdag", hours: "12–21" },
  { day: "Søndag", hours: "12–21" },
] as const;

/** Lokale bilder under `public/images/` — bytt filer uten å endre konstantnavn */
export const IMG = {
  hero: "/images/hero.png",
  /** Brukt i forsiden (delt hero) */
  hero1: "/images/hero1.png",
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
    id: "courtney-fenton",
    name: "Courtney Fenton",
    when: "For 2 måneder siden · Lunsj · Google",
    text: "Driving from our first accommodation on our trip to Norway to our second location, we stopped halfway for lunch at Bjerkvik Grill & Bar. We arrived shortly after they opened and were promptly seated. The waiter was extremely kind and …",
    stars: 4,
    avatar:
      "https://ui-avatars.com/api/?name=Courtney+Fenton&size=128&background=5c4a3d&color=ece7df&bold=true",
  },
  {
    id: "erhan-aslan",
    name: "Erhan Aslan",
    when: "For 2 måneder siden · Google",
    text: "It's always difficult to find nice restaurants especially at remote areas of Scandinavia including Lofoten. But when I found this restaurant with high ratings in Google, I was super happy. I was driving from Tromsø to Svolvær last year and …",
    stars: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Erhan+Aslan&size=128&background=5c4a3d&color=ece7df&bold=true",
  },
] as const;
