export const LAYOUT_VALG = [
  {
    id: 1,
    title: "Midttårn",
    blurb: "Alt sentrert vertikalt, runde knapper, meny i perfekt 2×2-rutenett.",
  },
  {
    id: 2,
    title: "Delt skjerm",
    blurb: "Hero i to kolonner (bilde / tekst). Horisontal meny-strip med piller.",
  },
  {
    id: 3,
    title: "Magasin-forside",
    blurb: "Smal tekstkolonne + stort bilde som «skyver». Meny som liste med miniatyr.",
  },
  {
    id: 4,
    title: "Regnskapsark",
    blurb: "Tabell-lignende meny-rader. Knapper er kvadratiske og harde kanter.",
  },
  {
    id: 5,
    title: "Vekslende kort",
    blurb: "Kort som «glir» venstre/høyre. CTA-er stablet på full bredde.",
  },
  {
    id: 6,
    title: "Meny-bånd først",
    blurb: "Fire brede horisontale bånd øverst; hero komprimeres under.",
  },
  {
    id: 7,
    title: "Bento-rutenett",
    blurb: "Irregulært rutenett — ulik størrelse på celler og hero.",
  },
  {
    id: 8,
    title: "Høyre dokk",
    blurb: "Fast vertikal stripe med handlinger; innhold skroller til venstre.",
  },
  {
    id: 9,
    title: "Sikksakk meny",
    blurb: "Hver kategori veksler bilde høyre/venstre — forteller-layout.",
  },
  {
    id: 10,
    title: "Kolonner med ikoner",
    blurb: "Fire like kolonner, store sirkler, meny som «dashboard».",
  },
  {
    id: 11,
    title: "Overlapp-redaksjon",
    blurb: "Fullbredde bilde med tittel som flyter opp fra kanten — ovale CTA-er.",
  },
  {
    id: 12,
    title: "Bunn-toolbar",
    blurb: "Diskret topp; hero minimalt — tykk fast rad med tre hovedvalg nederst.",
  },
  {
    id: 13,
    title: "Miks-kollasj",
    blurb: "Kombinasjon av tilbud, meny og sitat i samme ujevne rutenett.",
  },
  {
    id: 14,
    title: "Linjer & luft",
    blurb: "Nesten ingen bilder i meny — kun typografi, linjer og luft.",
  },
  {
    id: 15,
    title: "Horisontal snap",
    blurb: "Menykategorier som fullbredde paneler du sveiper sideveis.",
  },
] as const;

export type LayoutValgId = (typeof LAYOUT_VALG)[number]["id"];
