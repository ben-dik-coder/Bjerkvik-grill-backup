export type ForsideTypoLayoutPreset = {
  nr: number;
  navn: string;
  /** Kort forklaring under kortet */
  beskrivelse: string;
  shellClass: string;
  tagClass: string;
  titleClass: string;
  bodyClass: string;
  ratingClass: string;
  linksRowClass: string;
  linkClass: string;
};

/**
 * 15 forslag til **font og layout** på forsiden (forhåndsvisning).
 * Samme bakgrunn/korn på alle — bare typografi og struktur varierer.
 */
export const FORSIDE_TYPO_LAYOUT_PRESETS: ForsideTypoLayoutPreset[] = [
  {
    nr: 1,
    navn: "Serif + bunntekst",
    beskrivelse: "Som typisk hero: label øverst, serif-tittel, sans brødtekst.",
    shellClass: "justify-end gap-1 p-3 text-left sm:p-4",
    tagClass: "text-[8px] font-bold uppercase tracking-[0.35em] text-accent/75 sm:text-[9px]",
    titleClass: "font-serif text-base font-semibold leading-[1.08] text-[#f5f0e8] sm:text-lg",
    bodyClass: "mt-1 font-sans text-[10px] leading-snug text-[#d7cfc4]/95 sm:text-[11px]",
    ratingClass: "mt-2 font-sans text-[9px] text-[#d7cfc4]/95 sm:text-[10px]",
    linksRowClass: "mt-2 flex flex-wrap gap-x-2 gap-y-1",
    linkClass: "text-[8px] font-semibold uppercase tracking-wide text-accent",
  },
  {
    nr: 2,
    navn: "Oswald midt",
    beskrivelse: "Alt sentrert, display-font, «plakat»-følelse.",
    shellClass: "items-center justify-center gap-2 p-4 text-center",
    tagClass: "font-display text-[9px] font-medium uppercase tracking-[0.28em] text-[#9f7346]",
    titleClass: "font-display text-[clamp(1rem,4vw,1.35rem)] font-bold uppercase leading-[1.02] tracking-[0.06em] text-[#ece7df]",
    bodyClass: "max-w-[14rem] font-sans text-[10px] leading-relaxed text-[#c9bfb4]",
    ratingClass: "font-sans text-[9px] text-[#c9bfb4]",
    linksRowClass: "mt-1 flex flex-wrap justify-center gap-x-3",
    linkClass: "font-display text-[9px] font-semibold uppercase tracking-wider text-accent",
  },
  {
    nr: 3,
    navn: "Kun Manrope",
    beskrivelse: "Moderne sans overalt, rolig og luftig.",
    shellClass: "justify-end gap-1.5 p-4 text-left",
    tagClass: "font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-accent/80",
    titleClass: "font-sans text-[1.05rem] font-semibold leading-tight tracking-tight text-[#f7f3ec] sm:text-lg",
    bodyClass: "font-sans text-[10px] font-medium leading-snug text-[#d5cdc3]/92 sm:text-[11px]",
    ratingClass: "mt-1 font-sans text-[9px] text-[#d5cdc3]/88",
    linksRowClass: "mt-2 flex gap-x-3",
    linkClass: "font-sans text-[8px] font-bold uppercase tracking-widest text-accent",
  },
  {
    nr: 4,
    navn: "Serif-redaksjon",
    beskrivelse: "«Avis»-preg: serif også på brødtekst.",
    shellClass: "justify-end gap-1 p-4 text-left",
    tagClass: "font-sans text-[8px] font-bold uppercase tracking-[0.32em] text-accent/70",
    titleClass: "font-serif text-[1.15rem] font-semibold leading-[1.06] text-[#faf6ef] sm:text-[1.25rem]",
    bodyClass: "font-serif text-[11px] leading-relaxed text-[#d8d0c8]/95",
    ratingClass: "mt-1 font-serif text-[10px] text-[#d8d0c8]/85",
    linksRowClass: "mt-2 flex gap-x-4",
    linkClass: "font-serif text-[10px] font-semibold tracking-wide text-accent underline-offset-4",
  },
  {
    nr: 5,
    navn: "Øverst / magasin",
    beskrivelse: "Innhold fra toppen ned — som magasin-cover.",
    shellClass: "justify-start gap-2 pt-5 p-4 text-left",
    tagClass: "font-display text-[10px] uppercase tracking-[0.35em] text-[#b8893d]",
    titleClass: "font-serif text-[1.2rem] font-semibold leading-[1.05] text-[#f5f0e8]",
    bodyClass: "max-w-[95%] font-sans text-[10px] leading-snug text-[#cfc7be]",
    ratingClass: "font-sans text-[9px] text-[#cfc7be]/90",
    linksRowClass: "mt-4 flex gap-x-3",
    linkClass: "text-[8px] font-bold uppercase tracking-[0.15em] text-accent",
  },
  {
    nr: 6,
    navn: "Meny-kort",
    beskrivelse: "Inter/card-kjøkken — kompakt og «menyaktig».",
    shellClass: "justify-end gap-1 p-3 text-left",
    tagClass: "font-card text-[8px] font-semibold uppercase tracking-[0.22em] text-[#9f7346]",
    titleClass: "font-display text-[1rem] font-semibold uppercase tracking-[0.05em] text-[#f2eee8]",
    bodyClass: "font-card text-[10px] leading-snug text-[#c9c1b8]",
    ratingClass: "font-card text-[9px] tabular-nums text-[#c9c1b8]",
    linksRowClass: "mt-2 flex gap-x-4",
    linkClass: "font-card text-[8px] font-bold uppercase tracking-[0.12em] text-accent",
  },
  {
    nr: 7,
    navn: "Stripe venstre",
    beskrivelse: "Accent-linje gir struktur og hierarki.",
    shellClass: "justify-end gap-1 border-l-[3px] border-accent/55 py-1 pl-3 pr-3 text-left sm:pl-4",
    tagClass: "text-[8px] font-bold uppercase tracking-[0.3em] text-accent/80",
    titleClass: "font-serif text-base font-semibold text-[#f5f0e8] sm:text-[1.05rem]",
    bodyClass: "font-sans text-[10px] text-[#d7cfc4]/93",
    ratingClass: "font-sans text-[9px] text-[#d7cfc4]/88",
    linksRowClass: "mt-2 flex gap-x-2",
    linkClass: "text-[8px] font-semibold uppercase text-accent",
  },
  {
    nr: 8,
    navn: "Tett bunnbånd",
    beskrivelse: "Mindre type, mer informasjon på liten flate.",
    shellClass: "justify-end gap-0.5 p-2.5 text-left",
    tagClass: "text-[7px] font-bold uppercase tracking-[0.28em] text-accent/70",
    titleClass: "font-display text-[0.95rem] font-bold uppercase leading-none tracking-[0.04em] text-[#ebe6df]",
    bodyClass: "font-sans text-[9px] leading-tight text-[#bdb5ad]",
    ratingClass: "font-sans text-[8px] text-[#bdb5ad]",
    linksRowClass: "mt-1.5 flex flex-wrap gap-x-2",
    linkClass: "text-[7px] font-bold uppercase tracking-wider text-accent",
  },
  {
    nr: 9,
    navn: "Luksus spor",
    beskrivelse: "Ekstra bred spor på label, elegant serif.",
    shellClass: "justify-end gap-2 p-5 text-left",
    tagClass: "text-[7px] font-medium uppercase tracking-[0.55em] text-[#a67c4a]",
    titleClass: "font-serif text-[1.15rem] font-normal italic leading-tight text-[#faf7f2]",
    bodyClass: "font-sans text-[10px] leading-relaxed text-[#d0c8bf]",
    ratingClass: "font-sans text-[9px] text-[#d0c8bf]/88",
    linksRowClass: "mt-3 flex gap-x-5",
    linkClass: "text-[8px] font-semibold uppercase tracking-[0.2em] text-accent",
  },
  {
    nr: 10,
    navn: "Oswald-stabel",
    beskrivelse: "Vertikal stabel, alt display og uppercase.",
    shellClass: "items-center justify-center gap-0.5 px-3 py-4 text-center",
    tagClass: "font-display text-[8px] font-medium uppercase tracking-[0.4em] text-[#9f7346]",
    titleClass: "font-display text-[clamp(0.95rem,3.8vw,1.2rem)] font-bold uppercase leading-[0.98] tracking-[0.08em] text-[#f2eee8]",
    bodyClass: "max-w-[13rem] font-display text-[9px] font-medium uppercase leading-snug tracking-[0.08em] text-[#b8aea4]",
    ratingClass: "font-display text-[8px] uppercase tracking-[0.12em] text-[#b8aea4]",
    linksRowClass: "mt-2 flex flex-col gap-1",
    linkClass: "font-display text-[8px] font-bold uppercase tracking-[0.18em] text-accent",
  },
  {
    nr: 11,
    navn: "Mix meny-plakat",
    beskrivelse: "Display-label + serif-tittel (som meny-plakaten).",
    shellClass: "justify-end gap-1 p-4 text-left",
    tagClass: "font-display text-[8px] font-semibold uppercase tracking-[0.28em] text-[#9f7346] sm:text-[9px]",
    titleClass: "font-serif text-[1.05rem] font-semibold leading-[1.06] text-[#f2eee8] sm:text-[1.15rem]",
    bodyClass: "font-card text-[10px] leading-snug text-[#d4cbc0]",
    ratingClass: "font-card text-[9px] text-[#d4cbc0]",
    linksRowClass: "mt-2 flex gap-x-3",
    linkClass: "font-card text-[8px] font-bold uppercase tracking-[0.14em] text-accent",
  },
  {
    nr: 12,
    navn: "Inter kompakt",
    beskrivelse: "Card-font på det meste — «tabell»-rytme.",
    shellClass: "justify-end gap-1 p-3 text-left sm:p-3.5",
    tagClass: "font-card text-[8px] font-medium uppercase tracking-[0.18em] text-accent/75",
    titleClass: "font-card text-[1rem] font-semibold leading-tight text-[#f5f0e8]",
    bodyClass: "font-card text-[10px] leading-snug text-[#cac2b9]",
    ratingClass: "font-card text-[9px] text-[#cac2b9]",
    linksRowClass: "mt-2 grid grid-cols-2 gap-x-2 gap-y-1",
    linkClass: "font-card text-[8px] font-semibold uppercase text-accent",
  },
  {
    nr: 13,
    navn: "Mono-etikett",
    beskrivelse: "Mono på label — kontrast mot sans/body.",
    shellClass: "justify-end gap-1.5 p-4 text-left",
    tagClass: "font-mono text-[7px] font-medium uppercase tracking-tight text-[#c9a45c]/85",
    titleClass: "font-sans text-[1.05rem] font-semibold tracking-tight text-[#f7f3ec]",
    bodyClass: "font-sans text-[10px] leading-snug text-[#d0c8bf]",
    ratingClass: "font-mono text-[8px] text-[#d0c8bf]",
    linksRowClass: "mt-2 flex gap-x-4",
    linkClass: "font-mono text-[8px] font-semibold uppercase text-accent",
  },
  {
    nr: 14,
    navn: "Stor overskrift",
    beskrivelse: "Display stor tittel — mest «impact».",
    shellClass: "justify-end gap-1 p-3 text-left",
    tagClass: "text-[7px] font-bold uppercase tracking-[0.38em] text-accent/75",
    titleClass: "font-display text-[clamp(1.15rem,5vw,1.65rem)] font-bold uppercase leading-[0.92] tracking-[0.05em] text-[#f2eee8]",
    bodyClass: "mt-1 max-w-[16rem] font-sans text-[10px] leading-snug text-[#cfc7be]",
    ratingClass: "font-sans text-[9px] text-[#cfc7be]",
    linksRowClass: "mt-2 flex gap-x-3",
    linkClass: "text-[8px] font-bold uppercase tracking-widest text-accent",
  },
  {
    nr: 15,
    navn: "Sentrert luft",
    beskrivelse: "Midtstilt med mer luft mellom linjer.",
    shellClass: "items-center justify-center gap-3 px-4 py-6 text-center",
    tagClass: "font-sans text-[8px] font-semibold uppercase tracking-[0.42em] text-accent/70",
    titleClass: "font-serif text-[1.1rem] font-semibold leading-snug text-[#faf6ef] sm:text-[1.2rem]",
    bodyClass: "max-w-[15rem] font-sans text-[10px] leading-[1.55] text-[#cdc5bc]",
    ratingClass: "font-sans text-[9px] text-[#cdc5bc]",
    linksRowClass: "flex gap-x-6",
    linkClass: "text-[8px] font-semibold uppercase tracking-[0.25em] text-accent",
  },
];

/**
 * Forside Hero (tekstkolonne): variant **nr. 2** «Oswald midt», skalert til ekte skjerm.
 * Ring/Kart-knappene bruker egne klasser i `Hero.tsx` og skal ikke endres herfra.
 */
export const FORSIDE_HERO_VARIANT_2 = {
  column:
    "flex flex-col items-center justify-center gap-2 px-6 py-8 text-center md:gap-2.5 lg:gap-3 lg:px-12 lg:py-10",
  tag: "font-display text-[13px] font-semibold uppercase tracking-[0.24em] text-[#eccfa4] md:text-[15px] lg:text-[17px] [text-shadow:0_0_16px_rgba(236,200,150,0.45),0_0_32px_rgba(184,137,61,0.35),0_1px_3px_rgba(0,0,0,0.55)]",
  title:
    "font-display max-w-[98%] text-balance text-[clamp(2.35rem,9vw,4.75rem)] font-bold uppercase leading-[1.01] tracking-[0.055em] text-[#ece7df] md:max-w-5xl md:text-[clamp(2.85rem,8vw,5.35rem)] lg:text-[clamp(3.15rem,7.25vw,6rem)]",
  divider: "mx-auto my-4 h-px w-full max-w-xs bg-accent/30",
  body: "max-w-2xl text-lg leading-snug text-[#c9bfb4] md:text-xl md:leading-snug lg:max-w-3xl lg:text-2xl lg:leading-snug",
  ratingRow:
    "flex flex-wrap items-center justify-center gap-2.5 text-lg md:text-xl lg:text-2xl",
  reviewMuted: "text-[#c9bfb4]/85",
  buttonsRow: "mt-5 flex flex-wrap justify-center gap-3",
} as const;
