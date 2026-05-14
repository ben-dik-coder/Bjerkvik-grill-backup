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
  facebook: "https://www.facebook.com/profile.php?id=100090885527033",
  facebookLabel: "BJERKVIK GRILL",
  rating: "4,6",
  reviewCount: 266,
  tagline:
    "Vi ønsker deg velkommen til god mat og trivelig stemning på Bjerkvik Grill.",
  signature:
    "Rettene tilberedes med omtanke — fordi gode måltider smaker best lokalt.",
  aboutExtra:
    "Du finner oss på Maridalsveien i Bjerkvik — ta gjerne kontakt eller kom innom.",
  /** Øyenkast over intro på forsiden */
  forsideIntroEyebrow: "Grill • Pizza • Kebab",
  /** Brødtekst under «Velkommen til …» (før hurtigvalg-kort) */
  forsideIntro:
    "Hos oss får du saftige burgere, fersk pizza, kebab og grillretter laget med gode råvarer og ekte grillsmak. Vi ønsker å skape en hyggelig atmosfære der både familier, venner og reisende kan nyte god mat i rolige og trivelige omgivelser.",
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
  hero1: "/images/vf.png",
  /** Forside hero-bakgrunn (full bredde) — fil: `public/images/hr.png` */
  bg5: "/images/hr.png",
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

/** Bilder til Facebook-seksjonen på forsiden — filer under `public/images/fb/` */
export const FACEBOOK_FEED_IMAGES = [
  "/images/fb/470221504_532193213153525_3856166502915610737_n.jpg",
  "/images/fb/470679018_531417459897767_8879613628585552043_n-2.jpg",
  "/images/fb/470694203_530881999951313_4088534994545579139_n.jpg",
  "/images/fb/470878620_532552746450905_2517239804737990368_n.jpg",
  "/images/fb/471084584_531416076564572_8846847707284620962_n.jpg",
  "/images/fb/471144808_530868749952638_6739739968252022533_n.jpg",
  "/images/fb/471148546_531430793229767_413926474895848126_n.jpg",
  "/images/fb/471168867_533141466392033_249375006794965607_n.jpg",
  "/images/fb/471277590_534363572936489_4004966223133832789_n.jpg",
  "/images/fb/471307614_533144059725107_8475718317216794687_n.jpg",
  "/images/fb/471312744_533644403008406_3844424767344832627_n.jpg",
  "/images/fb/473533481_547430004963179_7698040687614769006_n.jpg",
  "/images/fb/474745290_555965757442937_7147903998479105149_n-2.jpg",
  "/images/fb/474747330_555965884109591_7819380671126993076_n.jpg",
  "/images/fb/475012945_558462040526642_5079605075267720690_n.jpg",
  "/images/fb/480793720_577015752004604_7150930746198936634_n.jpg",
] as const;

export const REVIEWS = [
  {
    id: "iancu-constantin",
    name: "Iancu Constantin",
    when: "For et år siden · Spiste på stedet · lunsj · Google",
    text: "Amazing tasty food, highly recommend if you like barbecue, is very tasty and with flavour, for sure I will visit more often.",
    stars: 5,
    avatar:
      "https://ui-avatars.com/api/?name=I+C&size=128&background=1b4332&color=ece7df&bold=true",
  },
  {
    id: "tj-guttormsen",
    name: "TJ Guttormsen",
    when: "For 10 måneder siden · Google",
    text: "Had a wonderful meal served by attentive and pleasant staff. Before leaving, I left my half-finished bottle of soda on the table to use the restroom, and it was accidentally (and perfectly understandably) removed when staff cleaned the table. When I asked the staff about it, they didn't just apologize for the mistake—they also gave me a new soda for my drive, free of charge. I've never experienced anything like it, and would've given their service six stars if I could!",
    stars: 5,
    avatar:
      "https://ui-avatars.com/api/?name=TJ+Guttormsen&size=128&background=294b8f&color=ece7df&bold=true",
  },
  {
    id: "prettyme-yu",
    name: "Prettyme Yu",
    when: "For 3 måneder siden · Lunsj · Google",
    text: "Nice restaurant. Good service. Food quite delicious.\n\nWe ordered Mexican stir fry beef and fish and chips..\n\nNice..",
    stars: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Prettyme+Yu&size=128&background=3d3d3d&color=ece7df&bold=true",
  },
  {
    id: "courtney-fenton",
    name: "Courtney Fenton",
    when: "For 2 måneder siden · Lunsj · Google",
    text: `Driving from our first accommodation on our trip to Norway to our second location, we stopped halfway for lunch at Bjerkvik Grill & Bar. We arrived shortly after they opened and were promptly seated. The waiter was extremely kind and attentive and very engaging.

Both my dad and I decided to order a classic American cheeseburger while my husband ordered the kebab special pizza. We were also intrigued by the «chili cheese pieces» and ordered some of those to share.

The chili cheese pieces were like deep fried cheese curds or «poppers» with chili and they were actually quite tasty. Both my dad and I enjoyed our classic American cheeseburgers and my husband was obsessed with the kebab special pizza.

Although this meal was not your traditional Norwegian food, we all enjoyed it and would recommend it to anyone passing through this town.`,
    stars: 4,
    avatar:
      "https://ui-avatars.com/api/?name=Courtney+Fenton&size=128&background=5c4a3d&color=ece7df&bold=true",
  },
  {
    id: "erhan-aslan",
    name: "Erhan Aslan",
    when: "For 3 måneder siden · Google",
    text: `It's always difficult to find nice restaurants especially at remote areas of Scandinavia including Lofoten. But when I found this restaurant with high ratings in Google, I was super happy. I was driving from Tromsø to Svolvær last year and this is a spot on place for a lunch. I ordered my food and finished it and then realized that the owner was also Turkish. As a Turkish social democrat, I criticise my country and people on many things, politics, justice, etc but one thing is clear, in food and beverage or dining sector, Turkish people are one of the most underrepresented/underrated communities.

So thanks again for all the hospitality, good food and service!`,
    stars: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Erhan+Aslan&size=128&background=c2185b&color=ece7df&bold=true",
  },
  {
    id: "liva-bendrate",
    name: "Liva Bendrate",
    when: "For 8 måneder siden · Lunsj · Google",
    text: "Meat is excellent, spices all are from bottle I guess, does not fit with the nice meat by my opinion. Very nice service, waiter very welcoming.",
    stars: 4,
    avatar:
      "https://ui-avatars.com/api/?name=Liva+Bendrate&size=128&background=5c4a3d&color=ece7df&bold=true",
  },
  {
    id: "nikhil-ranga",
    name: "Nikhil Ranga",
    when: "For 2 år siden · Spiste på stedet · lunsj · Google",
    text: "The stir fry is excellent. I had the one with the pepper sauce but without jalapenos.\n\nGreat portion size with veggies, meat and fries.",
    stars: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Nikhil+Ranga&size=128&background=1e4976&color=ece7df&bold=true",
  },
] as const;
