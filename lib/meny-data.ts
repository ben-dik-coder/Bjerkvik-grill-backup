/** Strukturert meny fra trykt Bjerkvik-meny — brukes på `/meny`. */

export type MenyAllergenItem = {
  name: string;
  spicy?: boolean;
  subtitle?: string;
  desc?: string;
  allergens?: string;
  /** én eller flere prislapp(er) samme rekkefølge som subtitle-variant */
  prices: number[];
};

export type PizzaItem = {
  num: number;
  name: string;
  spicy?: boolean;
  toppings: string;
  medium: number;
  stor: number;
};

export const pizza: PizzaItem[] = [
  { num: 1, name: "Margherita", toppings: "Tomatsaus og ost.", medium: 170, stor: 229 },
  { num: 2, name: "Vezuvio", toppings: "Tomatsaus ost og skinke.", medium: 180, stor: 239 },
  {
    num: 3,
    name: "Caprichosa",
    toppings: "Tomatsaus, ost, skinke og champignon.",
    medium: 180,
    stor: 239,
  },
  { num: 4, name: "Hawaii", toppings: "Tomatsaus, ost, skinke og ananas.", medium: 180, stor: 239 },
  { num: 5, name: "Vernerplikten", toppings: "Tomatsaus, ost og pepperoni.", medium: 190, stor: 249 },
  { num: 6, name: "Rekrutten", toppings: "Tomatsaus, ost og kjøttdeig.", medium: 190, stor: 249 },
  {
    num: 7,
    name: "Bjerkvik spesial",
    toppings: "Tomatsaus, ost, kylling, kjøttdeig, løk, paprika, bacon og svartpepper.",
    medium: 219,
    stor: 289,
  },
  {
    num: 8,
    name: "Meatlover",
    toppings: "Tomatsaus, ost, skinke, pepperoni, kjøttdeig, biff og bacon.",
    medium: 219,
    stor: 289,
  },
  {
    num: 9,
    name: "Tacopizza",
    spicy: true,
    toppings:
      "Tomatsaus, ost, kjøttdeig, mais, jalapeños, tacosaus og salat.",
    medium: 219,
    stor: 269,
  },
  {
    num: 10,
    name: "Kebab spesial",
    spicy: true,
    toppings:
      "Tomatsaus, ost, kebabkjøtt, løk, jalapeños, hjemmelaget hvitløksdressing og salat.",
    medium: 219,
    stor: 289,
  },
  {
    num: 11,
    name: "F35",
    spicy: true,
    toppings:
      "Tomatsaus, ost, biff, bacon, løk, jalapeños, tacosaus og pepermix.",
    medium: 219,
    stor: 289,
  },
  {
    num: 12,
    name: "133 Luftving",
    toppings: "Tomatsaus, ost, kylling, ananas, løk og karri.",
    medium: 219,
    stor: 279,
  },
  {
    num: 13,
    name: "P-8",
    spicy: true,
    toppings:
      "Tomatsaus, ost, biff, kylling, paprika, champignon, løk og jalapeños.",
    medium: 219,
    stor: 279,
  },
  {
    num: 14,
    name: "Din fantasi",
    toppings: "Tomatsaus og ost, pluss opptil 5 av dine favoritter.",
    medium: 219,
    stor: 289,
  },
  {
    num: 15,
    name: "Vegetar",
    toppings: "Tomatsaus, ost, champinjon, løk, mais, paprika og tomat.",
    medium: 219,
    stor: 259,
  },
  {
    num: 16,
    name: "Calzone (innbakt)",
    toppings: "Tomatsaus, ost og skinke.",
    medium: 210,
    stor: 269,
  },
  {
    num: 17,
    name: "Ciao ciao (halvt innbakt)",
    toppings: "Tomatsaus, ost, biff, løk, svartpepper og hjemmelaget bearnaise.",
    medium: 219,
    stor: 289,
  },
];

export const kebabItems: MenyAllergenItem[] = [
  {
    name: "Kebab tallerken",
    desc: "Kebabkjøtt, pitabrød, salat og hjemmelaget hvitløksaus. Serveres med pommes frites.",
    prices: [235],
  },
  {
    name: "Kylling tallerken",
    desc: "Kyllingkjøtt, pitabrød, salat og hjemmelaget hvitløksaus. Serveres med pommes frites.",
    prices: [235],
  },
  {
    name: "Kebabmix tallerken",
    desc: "Kebabkjøtt, kyllingkjøtt, pitabrød, salat og hjemmelaget hvitløksaus. Serveres med pommes frites.",
    prices: [245],
  },
  {
    name: "Durumkebab (kebabrull)",
    desc: "Kebabkjøtt, salat og hjemmelaget hvitløksaus.",
    prices: [225],
  },
  {
    name: "Kyllingdurum (kyllingrull)",
    desc: "Kyllingkjøtt, salat og hjemmelaget hvitløksaus.",
    prices: [225],
  },
];

export const barnemenySimple: MenyAllergenItem[] = [
  { name: "Hamburger og chips", prices: [129] },
  { name: "Spaghetti bolognese", prices: [129] },
  { name: "Nuggets og chips", prices: [129] },
  { name: "Pølsebiter og chips", prices: [99] },
  { name: "Pizza med ost og skinke", prices: [129] },
];

export const kjottSnadderPastaLeft: MenyAllergenItem[] = [
  {
    name: "Biff indrefilet 200 gr med bearnaisesaus",
    desc: "Serveres med stekt grønnsaker, bearnaisesaus og valgfrie poteter.",
    allergens: "EGG, MELK OG SELLERI",
    prices: [335],
  },
  {
    name: "Biff indrefilet 200 gr med peppersaus",
    desc: "Serveres med stekt grønnsaker, peppersaus og valgfrie poteter.",
    allergens: "EGG, MELK OG SELLERI",
    prices: [335],
  },
  {
    name: "Touch 200 gr",
    desc: "Serveres med stekt grønnsaker, bacon, sjampinjong i creme rødvinsaus og valgfrie poteter.",
    allergens: "EGG, MELK OG SELLERI. Kan inneholde spor av gluten.",
    prices: [355],
  },
  {
    name: "Mexikansk biff 200 gr",
    spicy: true,
    desc: "Serveres med grønnsaksblanding (paprika, jalapeños, løk og sjampinjong) i salsasaus og valgfrie poteter.",
    allergens: "SELLERI OG SOYA",
    prices: [355],
  },
  {
    name: "Gorgonzola indrefilet 200 gr",
    desc: "Serveres med stekte grønnsaker, gorgonzolasaus og valgfrie poteter.",
    allergens: "MELK, SOYA OG SELLERI",
    prices: [355],
  },
  {
    name: "Biff med soppsaus 200 gr",
    desc: "Serveres med stekt grønnsaker, soppsaus og valgfrie poteter.",
    allergens: "EGG, MELK OG SELLERI",
    prices: [355],
  },
];

export const valgfriePoteter: MenyAllergenItem[] = [
  { name: "Pommes frites", allergens: "GLUTEN OG HVETEMEL", prices: [] },
  { name: "Søtpotet", allergens: "GLUTEN OG HVETEMEL", prices: [] },
  { name: "Fløte gratinert potet", allergens: "MELK", prices: [] },
  { name: "Bakt potet", allergens: "MELK", prices: [] },
];

export const snadderItems: MenyAllergenItem[] = [
  {
    name: "Biffsnadder",
    desc: "Biff indrefilet i terninger, paprika, løk, sopp — serveres med salat, pommes frites og hjemmelagd bearnaisesaus.",
    allergens: "EGG OG SELLERI",
    prices: [259],
  },
  {
    name: "Hvitløksnadder",
    desc: "Biff indrefilet i terninger, paprika, løk, sopp — serveres med salat, pommes frites og hjemmelaget hvitløksaus.",
    allergens: "EGG, SELLERI OG MELK",
    prices: [259],
  },
  {
    name: "Meksisnadder",
    spicy: true,
    desc: "Biff indrefilet i terninger, paprika, løk, sopp, jalapeños — serveres med salat, pommes frites og hjemmelaget peppersaus.",
    allergens:
      "EGG, SELLERI OG MELK. Kan inneholde spor av hvetemel.",
    prices: [259],
  },
  {
    name: "Kyllingsnadder",
    desc: "Kyllingfilet i terninger, paprika, løk, sopp — serveres med salat, pommes frites og hjemmelagd bearnaisesaus.",
    allergens: "EGG OG SELLERI",
    prices: [259],
  },
];

export const pastaItems: MenyAllergenItem[] = [
  {
    name: "Spaghetti bolognese",
    desc: "Spaghetti med kjøttsaus og parmesan. Serveres med brød og smør.",
    allergens: "HVETEGLUTEN, SOYA, EGG OG MELK",
    prices: [210],
  },
  {
    name: "Spaghetti carbonara",
    desc: "Spaghetti med fløtesaus, eggeplomme, bacon og parmesan. Serveres med brød og smør.",
    allergens: "HVETEGLUTEN, SOYA, EGG OG MELK",
    prices: [210],
  },
  {
    name: "Vegetarspaghetti",
    desc: "Spaghetti med fløtesaus, eggeplomme og parmesan og pesto. Serveres med brød og smør.",
    allergens: "HVETEGLUTEN, SOYA, EGG OG MELK",
    prices: [199],
  },
];

export const burgereSalaterRight: MenyAllergenItem[] = [
  {
    name: "All in beef",
    desc: "170 g beefburger med kebabkjøtt, ost, bacon, BBQ-saus, løk, tomat, salat og rømmedressing. Pommes frites, løkringer og BBQ-dip.",
    allergens: "EGG, HVETEGLUTEN, MELK, SENNEP OG SOYA",
    prices: [235],
  },
  {
    name: "Juicy lucy",
    desc: "170 g beefburger med BBQ-saus, ost og bacon, sylteagurk, mais, tomat, løk, salat og coleslaw. Pommes frites, løkringer og BBQ-dip.",
    allergens: "EGG, HVETEGLUTEN, MELK, SENNEP OG SOYA",
    prices: [235],
  },
  {
    name: "Tacoburger",
    spicy: true,
    desc: "170 g beefburger med tacokjøttdeig og tacosaus, løk, tomat, mais, jalapeño, salat og rømmedressing. Pommes frites, chili cheese nuggets og tacodip.",
    allergens: "EGG, HVETEGLUTEN, MELK, SENNEP OG SOYA",
    prices: [235],
  },
  {
    name: "All in chicken",
    desc: "Kyllingfilet med kyllingstrimler, bacon, ost, BBQ-saus, løk, tomat, salat og rømmedressing. Pommes frites, løkringer og BBQ-dip.",
    allergens: "EGG, HVETEGLUTEN, MELK, SENNEP OG SOYA",
    prices: [235],
  },
  {
    name: "Bacon cheese",
    subtitle: "160 g / 200 g / 320 g",
    desc: "Amerikansk burger med salat, løk, tomat og hamburgerdressing. Serveres med pommes frites.",
    allergens: "EGG, HVETEGLUTEN, MELK, SENNEP OG SOYA",
    prices: [215, 229, 310],
  },
  {
    name: "Cheese",
    subtitle: "160 g / 200 g / 320 g",
    desc: "Amerikansk burger med salat, løk, tomat og hamburgerdressing. Serveres med pommes frites.",
    allergens: "EGG, HVETEGLUTEN, MELK, SENNEP OG SOYA",
    prices: [205, 220, 299],
  },
  {
    name: "Vegetarburger",
    desc: "Med rødløk, tomat, rømmedressing og salat. Pommes frites og beger med rømmedressing.",
    allergens: "EGG, HVETEGLUTEN, MELK, SENNEP OG SOYA",
    prices: [219],
  },
];

export const burgerEkstra: MenyAllergenItem[] = [
  { name: "Ost", prices: [30] },
  { name: "Bacon", prices: [30] },
  { name: "Bytte til søtpotet", prices: [30] },
];

export const salater: MenyAllergenItem[] = [
  {
    name: "Kyllingsalat",
    desc: "Salat, ost, mais, ananas, tomat, agurk og dressing. Brød og smør.",
    allergens: "HVETEGLUTEN, EGG, MELK, SOYA OG SENNEP",
    prices: [210],
  },
  {
    name: "Skinkesalat",
    desc: "Salat, ost, mais, ananas, tomat, agurk og dressing. Brød og smør.",
    allergens: "HVETEGLUTEN, EGG, MELK, SOYA OG SENNEP",
    prices: [210],
  },
  {
    name: "Biffsalat",
    desc: "Salat, ost, mais, ananas, tomat, agurk og dressing. Brød og smør.",
    allergens: "HVETEGLUTEN, EGG, MELK, SOYA OG SENNEP",
    prices: [219],
  },
  {
    name: "Vegetarsalat",
    desc: "Salat, ost, mais, ananas, tomat, agurk og dressing. Brød og smør.",
    allergens: "HVETEGLUTEN, EGG, MELK, SOYA OG SENNEP",
    prices: [199],
  },
];

/** Rett med én eksplisitt prislinje */
export const smaretterEtc: MenyAllergenItem[] = [
  {
    name: "Nuggetstallerken",
    desc: "8 stk kyllingnuggets, salat og hjemmelaget bearnaisesaus. Pommes frites.",
    allergens: "EGG, MELK, SELLERI OG SOYA",
    prices: [199],
  },
  {
    name: "Halv kylling",
    desc: "Salat og hjemmelaget bearnaisesaus. Pommes frites.",
    allergens: "EGG, MELK, SELLERI OG SOYA",
    prices: [229],
  },
  {
    name: "Snack kurv",
    desc: "3 løkringer, 3 kyllingvinger, 3 chillicheese, 3 mozzarella sticks og pommes frites. BBQ og hvitløksdip.",
    allergens: "EGG, HVETEGLUTEN, MELK, SELLERI OG SOYA",
    prices: [199],
  },
  {
    name: "Ostesnitzel",
    desc: "Salat og hjemmelaget bearnaisesaus. Pommes frites.",
    allergens: "EGG, MELK, HVETEGLUTEN, SELLERI OG SOYA",
    prices: [199],
  },
  {
    name: "Fish and chips",
    desc: "Salat og hjemmelaget bearnaisesaus. Pommes frites.",
    allergens: "FISK, EGG, MELK, HVETEGLUTEN, SELLERI OG SOYA",
    prices: [199],
  },
  {
    name: "Hot wings",
    desc: "8 stk kyllingvinger, salat og dressing. Pommes frites.",
    allergens: "MELK, SELLERI OG SOYA",
    prices: [199],
  },
  {
    name: "Løkeringer, 5 stk.",
    allergens: "MELK OG HVETEGLUTEN",
    prices: [60],
  },
  {
    name: "Kyllingvinger, 5 stk.",
    allergens: "HVETEGLUTEN",
    prices: [60],
  },
  {
    name: "Chili cheese, 5 stk.",
    allergens: "HVETEGLUTEN",
    prices: [60],
  },
  {
    name: "Mozzarella sticks, 5 stk.",
    allergens: "MELK OG HVETEGLUTEN",
    prices: [60],
  },
  {
    name: "Søtpotet",
    prices: [70],
  },
  {
    name: "Chips",
    prices: [60],
  },
];

export const dessertItems: MenyAllergenItem[] = [
  {
    name: "Eplekake med is",
    allergens: "MELK, MANDLER OG HVETEGLUTEN",
    prices: [89],
  },
  {
    name: "Belgisk vaffel med is",
    allergens: "MELK OG HVETEGLUTEN",
    prices: [89],
  },
  {
    name: "Kuleis i skål",
    allergens: "MELK",
    prices: [79],
  },
];

export const drikkeLyst: MenyAllergenItem[] = [
  { name: "Kaffe / te", prices: [30] },
  { name: "Brus / kullsyrevann 0,5 L", prices: [42] },
  { name: "Flaske vann 0,5 L", prices: [40] },
  { name: "Alkoholfritt øl 0,3 L", prices: [69] },
  { name: "Redbull 0,5 L", prices: [49] },
  { name: "Iste 0,5 L", prices: [46] },
];

export const alkoholCer: MenyAllergenItem[] = [
  { name: "Øl 0,5 L", prices: [110] },
  { name: "Rusbrus 0,33 L", prices: [100] },
  { name: "Kronenbourg 1664 Blanc 0,5 L", prices: [132] },
  { name: "Corona Extra 0,35 L", prices: [110] },
  { name: "Brooklyn East IPA 0,33 L", prices: [110] },
];

export const cocktailItems: MenyAllergenItem[] = [
  { name: "Strawberry daiquiri", prices: [149] },
  { name: "Mojito", prices: [149] },
];

export const vinListe: MenyAllergenItem[] = [
  { name: "Vin, glass", allergens: "SULFITT", prices: [119] },
  { name: "Husets vin, flaske", allergens: "SULFITT", prices: [510] },
  { name: "Marqués de Cáceres Crianza 2018", allergens: "SULFITT", prices: [560] },
  { name: "Masi Campofiorin 2018", allergens: "SULFITT", prices: [740] },
  { name: "Faustino I Gran Reserva 2011", allergens: "SULFITT", prices: [990] },
  { name: "Châteauneuf-du-Pape 2018", allergens: "SULFITT", prices: [990] },
];

export const brennevinItems: MenyAllergenItem[] = [
  { name: "Cognac 4 cl", prices: [159] },
  { name: "Whiskey 4 cl", prices: [159] },
  { name: "Akevitt 4 cl", prices: [159] },
];

export const shots: MenyAllergenItem[] = [
  { name: "Vodka 4 cl", prices: [110] },
  { name: "Tequila 4 cl", prices: [110] },
  { name: "Jägermeister 4 cl", prices: [110] },
  { name: "Minttu 4 cl", prices: [110] },
  { name: "Sambuca 4 cl", prices: [110] },
];

export const drinkerMixed: MenyAllergenItem[] = [
  { name: "Gin 4 cl og tonic", prices: [149] },
  { name: "Vodka 4 cl og Redbull", prices: [149] },
  { name: "Rom 4 cl og cola", prices: [149] },
  { name: "Redbull og Jägermeister 4 cl", prices: [149] },
  { name: "Mineralvann og vodka 4 cl", prices: [149] },
  { name: "Kaffe og Baileys 4 cl", prices: [149] },
];
