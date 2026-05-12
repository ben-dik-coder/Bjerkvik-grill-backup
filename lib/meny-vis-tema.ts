import type { CSSProperties } from "react";

/** Felles klasse-sett for menyinnhold — byttes per visuell variant. */
export type MenyVisTema = {
  menyHeroTitleStyle?: CSSProperties;
  heroTitle: string;
  headerBrand: string;
  headerTagline: string;
  headerTaglineRule: string;
  navBar: string;
  navLink: string;
  navLinkHover: string;
  heroEyebrow: string;
  heroDivider: string;
  sectionDetails: string;
  sectionSummary: string;
  chevron: string;
  sectionTitle: string;
  sectionRule: string;
  sectionPanel: string;
  underTittel: string;
  listDivide: string;
  dishTitle: string;
  dishSubtitle: string;
  dishDesc: string;
  allergens: string;
  price: string;
  priceSuffix: string;
  dashEmpty: string;
  pizzaNum: string;
  pizzaToppings: string;
  pizzaLabel: string;
  pizzaPrice: string;
  infoBox: string;
  infoBoxLead: string;
  infoBoxBullet: string;
  infoBoxStrong: string;
  kompaktListe: string;
  kompaktName: string;
  kompaktPrice: string;
  kompaktAllergen: string;
  potetListe: string;
  potetNavn: string;
  potetAllergen: string;
  litenOverskrift: string;
  barnemenyNote: string;
  footerWrap: string;
  footerLegend: string;
  footerSub: string;
  footerNote: string;
  footerHome: string;
};

const T1: MenyVisTema = {
  menyHeroTitleStyle: {
    textShadow:
      "0 2px 0 rgba(0,0,0,0.5), 0 -1px 0 rgba(255,255,255,0.05), 1px 2px 0 rgba(0,0,0,0.25), 0 0 24px rgba(0,0,0,0.35)",
  },
  heroTitle:
    "font-display text-[clamp(3.25rem,17vw,7rem)] font-bold uppercase leading-[0.88] tracking-[0.03em] text-[#ece5db]",
  headerBrand: "font-display text-[1.35rem] font-semibold uppercase tracking-[0.12em] text-[#f2eee8] sm:text-[2.2rem]",
  headerTagline:
    "mt-2 flex items-center justify-center gap-2 font-card text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#9f7346] sm:text-[0.78rem]",
  headerTaglineRule: "h-px w-6 bg-[rgba(183,137,86,0.35)] sm:w-10",
  navBar:
    "relative z-[2] mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-b border-white/[0.06] pb-6 font-card text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#9f7346] sm:mt-8 sm:gap-x-6 sm:text-[0.65rem]",
  navLink: "transition hover:text-[#c9a45c] hover:underline",
  navLinkHover: "",
  heroEyebrow: "mt-5 font-card text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#9f7346] sm:mt-6 sm:text-[0.72rem]",
  heroDivider: "mx-auto mt-5 h-px w-16 bg-[rgba(183,137,86,0.35)] sm:mt-6",
  sectionDetails:
    "group rounded-2xl border-y border-y-white/[0.1] border-l-0 border-r-0 bg-[rgba(22,18,15,0.55)] open:border-t-[rgba(183,137,86,0.38)] open:border-b-white/[0.08]",
  sectionSummary:
    "flex w-full cursor-pointer list-none items-center gap-3 rounded-2xl px-4 py-4 marker:content-none outline-none transition hover:bg-white/[0.05] sm:px-5 [&::-webkit-details-marker]:hidden",
  chevron: "h-5 w-5 shrink-0 text-[#9f7346] transition-transform duration-200 group-open:rotate-180",
  sectionTitle:
    "whitespace-nowrap text-left font-display text-[1rem] font-medium uppercase tracking-[0.18em] text-[#c9a45c] sm:text-[1.1rem]",
  sectionRule: "min-h-px flex-1 bg-[rgba(183,137,86,0.22)]",
  sectionPanel: "border-t border-white/[0.06] px-4 pb-5 pt-3 sm:px-5 sm:pb-6 sm:pt-4",
  underTittel:
    "mb-3 mt-6 font-card text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#9f7346] first:mt-0 sm:mt-7 sm:text-[0.72rem]",
  listDivide: "divide-y divide-white/[0.06]",
  dishTitle:
    "font-display text-[1rem] font-semibold uppercase leading-snug tracking-[0.04em] text-[#f2eee8] sm:text-[1.35rem]",
  dishSubtitle: "mt-1 font-card text-[0.65rem] font-medium uppercase tracking-[0.1em] text-[#9f978d]",
  dishDesc:
    "mt-1.5 max-w-[98%] font-card text-[0.78rem] font-light leading-[1.65] text-[#d4cbc0] sm:mt-2 sm:max-w-[95%] sm:text-[0.9rem] sm:leading-[1.7]",
  allergens: "mt-2 font-card text-[0.55rem] font-bold uppercase leading-relaxed tracking-wide text-red-400/90 sm:text-[0.58rem]",
  price:
    "shrink-0 pt-0.5 font-display text-[1.45rem] font-medium leading-none tracking-tight text-[#b78956] sm:text-[1.85rem]",
  priceSuffix: "ml-0.5 align-top text-[0.6rem] font-medium sm:text-sm",
  dashEmpty: "shrink-0 self-start pt-1 font-card text-[0.7rem] text-[#7a6f62] sm:self-end",
  pizzaNum: "mr-2 font-card text-[0.75em] font-normal text-[#9f978d]",
  pizzaToppings: "mt-1.5 font-card text-[0.78rem] font-light leading-relaxed text-[#d4cbc0] sm:text-[0.9rem]",
  pizzaLabel: "font-card block text-[0.38rem] font-bold uppercase tracking-[0.14em] text-[#9f7346]",
  pizzaPrice: "font-display text-[1.35rem] font-semibold tabular-nums text-[#b78956] sm:text-[1.65rem]",
  infoBox:
    "mt-6 space-y-3 rounded-2xl border border-[rgba(183,137,86,0.2)] bg-[rgba(18,15,12,0.45)] p-4 font-card text-[0.78rem] leading-relaxed text-[#d4cbc0] sm:p-5 sm:text-[0.82rem]",
  infoBoxLead: "font-bold uppercase tracking-[0.12em] text-[#f2eee8]",
  infoBoxBullet: "list-inside list-disc space-y-1 marker:text-[#9f7346]/70",
  infoBoxStrong: "font-semibold tabular-nums text-[#b78956]",
  kompaktListe:
    "space-y-2.5 border-t border-dotted border-white/12 pt-3 font-card text-[0.78rem] text-[#d4cbc0] sm:text-[0.82rem]",
  kompaktName: "min-w-0 font-semibold uppercase tracking-wide text-[#f2eee8]",
  kompaktPrice: "shrink-0 font-display text-[1.05rem] font-medium tabular-nums text-[#b78956] sm:text-[1.15rem]",
  kompaktAllergen: "w-full text-[0.55rem] font-bold uppercase tracking-wide text-red-400/85",
  potetListe:
    "mt-2 space-y-2 border-t border-dotted border-white/12 pt-3 font-card text-[0.76rem] text-[#d4cbc0] sm:text-[0.8rem]",
  potetNavn: "font-semibold uppercase tracking-wide text-[#f2eee8]",
  potetAllergen: "mt-0.5 block text-[0.55rem] font-bold uppercase tracking-wide text-red-400/85",
  litenOverskrift: "mb-1 mt-4 font-card text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#9f7346]",
  barnemenyNote: "mt-4 font-card text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#9f978d]",
  footerWrap: "relative z-[2] mt-10 border-t border-white/[0.06] pt-8 text-center sm:mt-12 sm:pt-8",
  footerLegend:
    "flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-card text-[0.68rem] font-medium uppercase tracking-[0.12em] text-[#9f978d] sm:gap-x-7 sm:text-[0.76rem]",
  footerSub: "mt-6 font-display text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#9f7346] sm:text-[0.72rem]",
  footerNote:
    "mx-auto mt-5 max-w-prose font-card text-[0.62rem] leading-relaxed text-[#7a6f62] sm:text-[0.65rem]",
  footerHome:
    "mt-6 inline-block font-card text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#7a6f62] underline-offset-4 transition hover:text-[#9f7346] hover:underline",
};

const T2: MenyVisTema = {
  heroTitle:
    "font-sans text-[clamp(2.5rem,12vw,5rem)] font-light tracking-[-0.04em] text-neutral-900",
  headerBrand: "font-sans text-[0.75rem] font-medium uppercase tracking-[0.45em] text-neutral-500",
  headerTagline: "mt-3 font-sans text-[0.65rem] font-normal tracking-[0.35em] text-neutral-400 uppercase",
  headerTaglineRule: "hidden",
  navBar:
    "mt-8 flex justify-center gap-10 border-y border-neutral-900 py-4 font-sans text-[0.6rem] uppercase tracking-[0.3em] text-neutral-600",
  navLink: "hover:text-neutral-900",
  navLinkHover: "",
  heroEyebrow: "mt-8 font-sans text-[0.55rem] uppercase tracking-[0.4em] text-neutral-400",
  heroDivider: "mx-auto mt-6 h-[2px] w-24 bg-neutral-900",
  sectionDetails: "group border-b border-neutral-200 open:bg-neutral-50",
  sectionSummary:
    "flex w-full cursor-pointer list-none items-center gap-4 px-0 py-5 marker:content-none outline-none [&::-webkit-details-marker]:hidden",
  chevron: "h-4 w-4 shrink-0 text-neutral-400 transition group-open:rotate-180",
  sectionTitle: "font-sans text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-900",
  sectionRule: "hidden",
  sectionPanel: "border-t border-neutral-100 px-0 pb-6 pt-4",
  underTittel: "mb-2 mt-6 font-sans text-[0.55rem] font-bold uppercase tracking-[0.2em] text-neutral-500 first:mt-0",
  listDivide: "divide-y divide-neutral-100",
  dishTitle: "font-sans text-[0.95rem] font-medium leading-snug text-neutral-900 sm:text-[1.05rem]",
  dishSubtitle: "mt-0.5 font-sans text-[0.6rem] uppercase tracking-wider text-neutral-500",
  dishDesc: "mt-1.5 max-w-prose font-sans text-[0.8rem] leading-relaxed text-neutral-600",
  allergens: "mt-2 font-sans text-[0.55rem] font-semibold uppercase text-red-600/90",
  price: "shrink-0 font-sans text-[1.1rem] font-semibold tabular-nums text-neutral-900 sm:text-[1.25rem]",
  priceSuffix: "ml-0.5 text-[0.55rem] font-normal",
  dashEmpty: "shrink-0 font-sans text-[0.75rem] text-neutral-300",
  pizzaNum: "mr-2 font-mono text-[0.7rem] text-neutral-400",
  pizzaToppings: "mt-1 font-sans text-[0.78rem] leading-relaxed text-neutral-600",
  pizzaLabel: "font-sans block text-[0.5rem] uppercase tracking-[0.2em] text-neutral-400",
  pizzaPrice: "font-sans text-[1.1rem] font-semibold tabular-nums text-neutral-900",
  infoBox: "mt-5 space-y-2 border border-neutral-200 bg-white p-4 font-sans text-[0.78rem] text-neutral-700",
  infoBoxLead: "text-[0.6rem] font-bold uppercase tracking-wider text-neutral-900",
  infoBoxBullet: "list-inside list-disc text-neutral-600",
  infoBoxStrong: "font-semibold text-neutral-900",
  kompaktListe: "space-y-2 border-t border-neutral-100 pt-3 font-sans text-[0.78rem] text-neutral-700",
  kompaktName: "font-medium text-neutral-900",
  kompaktPrice: "shrink-0 font-sans text-[0.95rem] font-semibold tabular-nums text-neutral-900",
  kompaktAllergen: "w-full text-[0.55rem] font-semibold uppercase text-red-600/85",
  potetListe: "mt-2 space-y-1.5 border-t border-neutral-100 pt-3 font-sans text-[0.76rem] text-neutral-700",
  potetNavn: "font-medium text-neutral-900",
  potetAllergen: "mt-0.5 block text-[0.55rem] font-semibold uppercase text-red-600/85",
  litenOverskrift: "mb-1 mt-4 font-sans text-[0.55rem] font-bold uppercase tracking-wider text-neutral-500",
  barnemenyNote: "mt-4 font-sans text-[0.6rem] text-neutral-500",
  footerWrap: "mt-12 border-t border-neutral-200 pt-8 text-center",
  footerLegend: "flex flex-wrap justify-center gap-6 font-sans text-[0.6rem] uppercase tracking-wider text-neutral-500",
  footerSub: "mt-6 font-sans text-[0.55rem] uppercase tracking-[0.35em] text-neutral-400",
  footerNote: "mx-auto mt-4 max-w-md font-sans text-[0.65rem] leading-relaxed text-neutral-500",
  footerHome: "mt-6 inline-block font-sans text-[0.6rem] uppercase tracking-widest text-neutral-400 hover:text-neutral-900",
};

const T3: MenyVisTema = {
  heroTitle:
    "font-mono text-[clamp(2.2rem,10vw,4.5rem)] font-bold uppercase tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-amber-300",
  headerBrand: "font-mono text-sm font-bold uppercase tracking-[0.5em] text-cyan-300/90",
  headerTagline: "mt-2 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-fuchsia-400/80",
  headerTaglineRule: "hidden",
  navBar: "mt-6 flex flex-wrap justify-center gap-6 border border-cyan-500/30 bg-black/40 py-3 font-mono text-[0.55rem] uppercase text-cyan-200/80",
  navLink: "hover:text-fuchsia-300 hover:underline",
  navLinkHover: "",
  heroEyebrow: "mt-6 font-mono text-[0.55rem] uppercase tracking-[0.35em] text-slate-400",
  heroDivider: "mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent",
  sectionDetails:
    "group rounded-lg border border-cyan-500/25 bg-slate-950/70 shadow-[0_0_20px_rgba(34,211,238,0.08)] open:border-fuchsia-500/40",
  sectionSummary:
    "flex w-full cursor-pointer list-none items-center gap-3 px-4 py-3 marker:content-none outline-none hover:bg-cyan-500/5 sm:px-5 [&::-webkit-details-marker]:hidden",
  chevron: "h-4 w-4 shrink-0 text-fuchsia-400 transition group-open:rotate-180",
  sectionTitle: "font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cyan-200",
  sectionRule: "min-h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent",
  sectionPanel: "border-t border-cyan-500/20 px-4 pb-5 pt-3 sm:px-5",
  underTittel: "mb-2 mt-5 font-mono text-[0.55rem] font-bold uppercase tracking-widest text-fuchsia-400/90 first:mt-0",
  listDivide: "divide-y divide-cyan-900/40",
  dishTitle: "font-mono text-[0.85rem] font-bold uppercase tracking-wide text-slate-100 sm:text-[0.95rem]",
  dishSubtitle: "mt-0.5 font-mono text-[0.55rem] uppercase text-slate-500",
  dishDesc: "mt-1.5 font-mono text-[0.72rem] leading-relaxed text-slate-300",
  allergens: "mt-2 font-mono text-[0.5rem] font-bold uppercase text-rose-400",
  price: "shrink-0 font-mono text-[1.1rem] font-bold tabular-nums text-cyan-300 sm:text-[1.2rem]",
  priceSuffix: "ml-0.5 text-[0.5rem]",
  dashEmpty: "shrink-0 font-mono text-[0.65rem] text-slate-600",
  pizzaNum: "mr-2 font-mono text-[0.65rem] text-fuchsia-400/80",
  pizzaToppings: "mt-1 font-mono text-[0.7rem] text-slate-400",
  pizzaLabel: "font-mono block text-[0.45rem] uppercase text-cyan-500/80",
  pizzaPrice: "font-mono text-[1rem] font-bold tabular-nums text-cyan-300",
  infoBox:
    "mt-5 space-y-2 rounded-lg border border-fuchsia-500/25 bg-black/50 p-4 font-mono text-[0.72rem] text-slate-300",
  infoBoxLead: "text-fuchsia-300 uppercase text-[0.6rem]",
  infoBoxBullet: "list-inside list-disc marker:text-cyan-500",
  infoBoxStrong: "text-cyan-200 font-bold",
  kompaktListe: "space-y-2 border-t border-cyan-900/50 pt-3 font-mono text-[0.72rem] text-slate-300",
  kompaktName: "font-bold uppercase text-slate-100",
  kompaktPrice: "shrink-0 font-mono text-[0.95rem] font-bold text-cyan-300",
  kompaktAllergen: "w-full text-[0.5rem] font-bold uppercase text-rose-400",
  potetListe: "mt-2 space-y-1.5 border-t border-cyan-900/50 pt-3 font-mono text-[0.7rem] text-slate-300",
  potetNavn: "font-bold uppercase text-slate-100",
  potetAllergen: "mt-0.5 block text-[0.5rem] font-bold uppercase text-rose-400",
  litenOverskrift: "mb-1 mt-4 font-mono text-[0.55rem] font-bold uppercase text-fuchsia-400/80",
  barnemenyNote: "mt-4 font-mono text-[0.55rem] text-slate-500",
  footerWrap: "mt-10 border-t border-cyan-900/40 pt-8 text-center",
  footerLegend: "flex flex-wrap justify-center gap-5 font-mono text-[0.55rem] uppercase text-slate-500",
  footerSub: "mt-5 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-cyan-600/80",
  footerNote: "mx-auto mt-4 max-w-prose font-mono text-[0.6rem] text-slate-500",
  footerHome: "mt-5 inline-block font-mono text-[0.55rem] uppercase text-fuchsia-400/70 hover:text-fuchsia-300",
};

const T4: MenyVisTema = {
  heroTitle:
    "font-serif text-[clamp(2.8rem,11vw,5rem)] font-black leading-none tracking-tight text-neutral-900",
  headerBrand: "font-serif text-2xl font-bold italic text-neutral-900 sm:text-3xl",
  headerTagline: "mt-2 font-serif text-sm text-neutral-600 not-italic",
  headerTaglineRule: "hidden",
  navBar:
    "mt-6 flex justify-center gap-8 border-y-2 border-double border-neutral-800 py-3 font-serif text-xs uppercase tracking-widest text-neutral-700",
  navLink: "underline-offset-4 hover:underline",
  navLinkHover: "",
  heroEyebrow: "mt-6 font-serif text-xs uppercase tracking-[0.2em] text-neutral-500",
  heroDivider: "mx-auto mt-4 h-1 w-full max-w-xs bg-neutral-900",
  sectionDetails: "group border-b-2 border-neutral-800 open:bg-neutral-100/50",
  sectionSummary:
    "flex w-full cursor-pointer list-none items-center gap-3 py-4 marker:content-none [&::-webkit-details-marker]:hidden",
  chevron: "h-4 w-4 shrink-0 text-neutral-600 group-open:rotate-180 transition",
  sectionTitle: "font-serif text-lg font-bold text-neutral-900",
  sectionRule: "min-h-px flex-1 border-t border-dotted border-neutral-400",
  sectionPanel: "border-t-2 border-neutral-800 pt-4 pb-6",
  underTittel: "mb-2 mt-6 font-serif text-xs font-bold uppercase tracking-widest text-neutral-600 first:mt-0",
  listDivide: "divide-y divide-neutral-300",
  dishTitle: "font-serif text-base font-bold leading-snug text-neutral-900 sm:text-lg",
  dishSubtitle: "mt-0.5 font-serif text-xs italic text-neutral-600",
  dishDesc: "mt-1.5 font-serif text-sm leading-relaxed text-neutral-800",
  allergens: "mt-2 font-serif text-[0.55rem] font-bold uppercase text-red-800",
  price: "shrink-0 font-serif text-xl font-bold tabular-nums text-neutral-900 sm:text-2xl",
  priceSuffix: "ml-0.5 text-xs",
  dashEmpty: "shrink-0 font-serif text-neutral-400",
  pizzaNum: "mr-2 font-mono text-sm text-neutral-500",
  pizzaToppings: "mt-1 font-serif text-sm text-neutral-700",
  pizzaLabel: "font-serif block text-[0.5rem] uppercase tracking-widest text-neutral-500",
  pizzaPrice: "font-serif text-lg font-bold tabular-nums text-neutral-900",
  infoBox: "mt-5 border-2 border-neutral-800 bg-neutral-50 p-4 font-serif text-sm text-neutral-800",
  infoBoxLead: "font-bold uppercase text-xs",
  infoBoxBullet: "list-disc list-inside",
  infoBoxStrong: "font-bold",
  kompaktListe: "space-y-2 border-t-2 border-dashed border-neutral-400 pt-3 font-serif text-sm",
  kompaktName: "font-bold text-neutral-900",
  kompaktPrice: "shrink-0 font-serif text-base font-bold tabular-nums",
  kompaktAllergen: "w-full text-[0.55rem] font-bold uppercase text-red-800",
  potetListe: "mt-2 space-y-1 border-t-2 border-dashed border-neutral-400 pt-3 font-serif text-sm",
  potetNavn: "font-bold text-neutral-900",
  potetAllergen: "mt-0.5 block text-[0.55rem] font-bold uppercase text-red-800",
  litenOverskrift: "mb-1 mt-4 font-serif text-xs font-bold uppercase text-neutral-700",
  barnemenyNote: "mt-4 font-serif text-xs text-neutral-600",
  footerWrap: "mt-12 border-t-4 border-neutral-900 pt-8 text-center",
  footerLegend: "flex flex-wrap justify-center gap-6 font-serif text-xs uppercase text-neutral-700",
  footerSub: "mt-5 font-serif text-xs font-bold uppercase tracking-widest",
  footerNote: "mx-auto mt-4 max-w-lg font-serif text-xs leading-relaxed text-neutral-600",
  footerHome: "mt-5 inline-block font-serif text-xs uppercase underline",
};

const T5: MenyVisTema = {
  heroTitle:
    "font-sans text-[clamp(2.4rem,10vw,4.2rem)] font-semibold tracking-tight text-teal-900",
  headerBrand: "font-sans text-xl font-medium text-teal-800 sm:text-2xl",
  headerTagline: "mt-2 flex items-center justify-center gap-2 font-sans text-xs text-rose-400/90",
  headerTaglineRule: "h-px w-8 rounded-full bg-rose-300",
  navBar: "mt-6 flex flex-wrap justify-center gap-6 rounded-full bg-white/60 px-4 py-3 text-xs font-medium text-teal-700 shadow-sm backdrop-blur",
  navLink: "hover:text-rose-500",
  navLinkHover: "",
  heroEyebrow: "mt-6 font-sans text-xs text-teal-600/80",
  heroDivider: "mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-teal-200 via-rose-200 to-sky-200",
  sectionDetails:
    "group overflow-hidden rounded-3xl border border-white/80 bg-white/70 shadow-lg shadow-teal-900/5 backdrop-blur open:ring-2 open:ring-rose-200/60",
  sectionSummary:
    "flex w-full cursor-pointer list-none items-center gap-3 px-5 py-4 marker:content-none hover:bg-white/50 [&::-webkit-details-marker]:hidden",
  chevron: "h-5 w-5 shrink-0 text-teal-500 transition group-open:rotate-180",
  sectionTitle: "font-sans text-sm font-semibold tracking-wide text-teal-900",
  sectionRule: "min-h-px flex-1 rounded-full bg-gradient-to-r from-teal-200/80 to-transparent",
  sectionPanel: "border-t border-teal-100/80 bg-white/40 px-5 pb-5 pt-3",
  underTittel: "mb-2 mt-5 font-sans text-[0.65rem] font-bold uppercase tracking-wider text-rose-400 first:mt-0",
  listDivide: "divide-y divide-teal-100/80",
  dishTitle: "font-sans text-base font-semibold text-teal-950 sm:text-lg",
  dishSubtitle: "mt-0.5 font-sans text-[0.6rem] uppercase tracking-wide text-teal-600/80",
  dishDesc: "mt-1.5 font-sans text-sm leading-relaxed text-teal-800/90",
  allergens: "mt-2 font-sans text-[0.55rem] font-bold uppercase text-red-500",
  price: "shrink-0 font-sans text-lg font-semibold tabular-nums text-rose-500 sm:text-xl",
  priceSuffix: "ml-0.5 text-xs",
  dashEmpty: "shrink-0 text-sm text-teal-300",
  pizzaNum: "mr-2 font-sans text-sm text-teal-500",
  pizzaToppings: "mt-1 font-sans text-sm text-teal-800/85",
  pizzaLabel: "font-sans block text-[0.45rem] font-bold uppercase text-teal-500",
  pizzaPrice: "font-sans text-lg font-semibold tabular-nums text-rose-500",
  infoBox: "mt-5 rounded-2xl border border-teal-100 bg-teal-50/80 p-4 font-sans text-sm text-teal-900",
  infoBoxLead: "font-bold text-teal-900",
  infoBoxBullet: "list-disc list-inside marker:text-rose-400",
  infoBoxStrong: "font-semibold text-rose-600",
  kompaktListe: "space-y-2 border-t border-teal-100 pt-3 font-sans text-sm text-teal-900",
  kompaktName: "font-semibold text-teal-950",
  kompaktPrice: "shrink-0 font-sans text-base font-semibold text-rose-500",
  kompaktAllergen: "w-full text-[0.55rem] font-bold uppercase text-red-500",
  potetListe: "mt-2 space-y-1.5 border-t border-teal-100 pt-3 font-sans text-sm",
  potetNavn: "font-semibold text-teal-950",
  potetAllergen: "mt-0.5 block text-[0.55rem] font-bold uppercase text-red-500",
  litenOverskrift: "mb-1 mt-4 font-sans text-[0.6rem] font-bold uppercase text-teal-600",
  barnemenyNote: "mt-4 font-sans text-xs text-teal-600",
  footerWrap: "mt-10 rounded-3xl border border-white/60 bg-white/50 py-8 text-center backdrop-blur",
  footerLegend: "flex flex-wrap justify-center gap-5 font-sans text-xs text-teal-700",
  footerSub: "mt-4 font-sans text-xs font-semibold uppercase tracking-wider text-rose-400",
  footerNote: "mx-auto mt-3 max-w-md font-sans text-xs text-teal-700/80",
  footerHome: "mt-5 inline-block font-sans text-xs text-teal-600 hover:text-rose-500 hover:underline",
};

const T6: MenyVisTema = {
  heroTitle:
    "font-mono text-[clamp(2.5rem,14vw,5.5rem)] font-black uppercase leading-none tracking-tighter text-neutral-900",
  headerBrand: "font-mono text-sm font-black uppercase tracking-[0.2em] bg-neutral-900 px-2 py-1 text-yellow-300",
  headerTagline: "mt-3 font-mono text-xs font-bold uppercase text-neutral-900",
  headerTaglineRule: "hidden",
  navBar:
    "mt-6 flex flex-wrap justify-center gap-4 border-4 border-neutral-900 bg-yellow-300 px-2 py-3 font-mono text-[0.55rem] font-bold uppercase",
  navLink: "hover:bg-neutral-900 hover:text-yellow-300 px-2 py-1",
  navLinkHover: "",
  heroEyebrow: "mt-6 font-mono text-[0.55rem] font-bold uppercase text-neutral-700",
  heroDivider: "mx-auto mt-4 h-2 w-full max-w-xs bg-neutral-900",
  sectionDetails: "group border-4 border-neutral-900 bg-white open:shadow-[8px_8px_0_0_#171717]",
  sectionSummary:
    "flex w-full cursor-pointer list-none items-center gap-2 border-b-4 border-neutral-900 bg-yellow-300 px-3 py-3 marker:content-none hover:bg-yellow-200 [&::-webkit-details-marker]:hidden",
  chevron: "h-5 w-5 shrink-0 text-neutral-900 group-open:rotate-180 transition",
  sectionTitle: "font-mono text-xs font-black uppercase tracking-widest text-neutral-900",
  sectionRule: "hidden",
  sectionPanel: "border-t-4 border-neutral-900 px-3 pb-5 pt-4",
  underTittel: "mb-2 mt-5 font-mono text-[0.55rem] font-black uppercase first:mt-0",
  listDivide: "divide-y-4 divide-neutral-900",
  dishTitle: "font-mono text-sm font-bold uppercase text-neutral-900 sm:text-base",
  dishSubtitle: "mt-0.5 font-mono text-[0.55rem] uppercase text-neutral-600",
  dishDesc: "mt-1.5 font-mono text-[0.72rem] leading-relaxed text-neutral-800",
  allergens: "mt-2 font-mono text-[0.5rem] font-black uppercase text-red-600",
  price: "shrink-0 font-mono text-lg font-black tabular-nums text-neutral-900",
  priceSuffix: "ml-0.5 text-xs",
  dashEmpty: "shrink-0 font-mono text-neutral-400",
  pizzaNum: "mr-2 font-mono text-xs",
  pizzaToppings: "mt-1 font-mono text-[0.7rem] uppercase text-neutral-700",
  pizzaLabel: "font-mono block text-[0.45rem] font-black uppercase",
  pizzaPrice: "font-mono text-base font-black tabular-nums",
  infoBox: "mt-5 border-4 border-neutral-900 bg-neutral-100 p-3 font-mono text-[0.72rem]",
  infoBoxLead: "font-black uppercase",
  infoBoxBullet: "list-disc list-inside",
  infoBoxStrong: "font-black",
  kompaktListe: "space-y-2 border-t-4 border-neutral-900 pt-3 font-mono text-[0.72rem]",
  kompaktName: "font-black uppercase",
  kompaktPrice: "shrink-0 font-mono font-black",
  kompaktAllergen: "w-full text-[0.5rem] font-black uppercase text-red-600",
  potetListe: "mt-2 space-y-1 border-t-4 border-neutral-900 pt-3 font-mono text-[0.7rem]",
  potetNavn: "font-black uppercase",
  potetAllergen: "mt-0.5 block text-[0.5rem] font-black uppercase text-red-600",
  litenOverskrift: "mb-1 mt-4 font-mono text-[0.55rem] font-black uppercase",
  barnemenyNote: "mt-4 font-mono text-[0.55rem] font-bold",
  footerWrap: "mt-10 border-4 border-neutral-900 bg-yellow-300 py-6 text-center",
  footerLegend: "flex flex-wrap justify-center gap-4 font-mono text-[0.55rem] font-bold uppercase",
  footerSub: "mt-4 font-mono text-[0.55rem] font-black uppercase",
  footerNote: "mx-auto mt-3 max-w-md font-mono text-[0.6rem]",
  footerHome: "mt-4 inline-block font-mono text-[0.55rem] font-black uppercase underline",
};

const T7: MenyVisTema = {
  heroTitle:
    "font-serif text-[clamp(2.6rem,10vw,4.8rem)] font-light italic tracking-wide text-amber-100/95",
  headerBrand: "font-serif text-2xl font-light tracking-[0.35em] text-amber-200/90 sm:text-3xl",
  headerTagline: "mt-3 font-serif text-xs uppercase tracking-[0.5em] text-amber-600/80",
  headerTaglineRule: "h-px w-12 bg-gradient-to-r from-transparent via-amber-600/50 to-transparent",
  navBar: "mt-8 flex justify-center gap-12 border-b border-amber-900/40 pb-4 font-serif text-[0.6rem] uppercase tracking-[0.35em] text-amber-700/90",
  navLink: "hover:text-amber-200",
  navLinkHover: "",
  heroEyebrow: "mt-6 font-serif text-xs italic text-amber-800/70",
  heroDivider: "mx-auto mt-5 h-px w-40 bg-gradient-to-r from-transparent via-amber-600/40 to-transparent",
  sectionDetails:
    "group border border-amber-900/30 bg-gradient-to-b from-neutral-950/90 to-black/90 open:border-amber-700/40",
  sectionSummary:
    "flex w-full cursor-pointer list-none items-center gap-4 px-5 py-4 marker:content-none hover:bg-amber-950/20 [&::-webkit-details-marker]:hidden",
  chevron: "h-4 w-4 shrink-0 text-amber-600 group-open:rotate-180 transition",
  sectionTitle: "font-serif text-sm font-normal uppercase tracking-[0.25em] text-amber-200",
  sectionRule: "min-h-px flex-1 bg-amber-900/25",
  sectionPanel: "border-t border-amber-900/25 px-5 pb-6 pt-4",
  underTittel: "mb-2 mt-6 font-serif text-[0.6rem] uppercase tracking-[0.2em] text-amber-600 first:mt-0",
  listDivide: "divide-y divide-amber-950/40",
  dishTitle: "font-serif text-base font-normal text-stone-100 sm:text-lg",
  dishSubtitle: "mt-0.5 font-serif text-[0.6rem] uppercase tracking-wider text-amber-800/80",
  dishDesc: "mt-1.5 font-serif text-sm font-light leading-relaxed text-stone-300",
  allergens: "mt-2 font-serif text-[0.55rem] uppercase tracking-wide text-red-400/90",
  price: "shrink-0 font-serif text-xl font-light tabular-nums text-amber-400 sm:text-2xl",
  priceSuffix: "ml-0.5 text-xs",
  dashEmpty: "shrink-0 font-serif text-amber-900/50",
  pizzaNum: "mr-2 font-serif text-sm text-amber-700/80",
  pizzaToppings: "mt-1 font-serif text-sm text-stone-400",
  pizzaLabel: "font-serif block text-[0.45rem] uppercase tracking-widest text-amber-700",
  pizzaPrice: "font-serif text-lg font-light tabular-nums text-amber-300",
  infoBox:
    "mt-5 border border-amber-900/30 bg-black/40 p-4 font-serif text-sm text-stone-300",
  infoBoxLead: "text-amber-200/90 uppercase text-xs tracking-widest",
  infoBoxBullet: "list-disc list-inside marker:text-amber-700",
  infoBoxStrong: "text-amber-300",
  kompaktListe: "space-y-2 border-t border-amber-900/30 pt-3 font-serif text-sm text-stone-300",
  kompaktName: "text-stone-100",
  kompaktPrice: "shrink-0 font-serif text-base text-amber-300",
  kompaktAllergen: "w-full text-[0.55rem] uppercase text-red-400/90",
  potetListe: "mt-2 space-y-1 border-t border-amber-900/30 pt-3 font-serif text-sm text-stone-300",
  potetNavn: "text-stone-100",
  potetAllergen: "mt-0.5 block text-[0.55rem] uppercase text-red-400/90",
  litenOverskrift: "mb-1 mt-4 font-serif text-xs uppercase tracking-widest text-amber-700",
  barnemenyNote: "mt-4 font-serif text-xs text-amber-900/70",
  footerWrap: "mt-12 border-t border-amber-900/30 pt-8 text-center",
  footerLegend: "flex flex-wrap justify-center gap-6 font-serif text-xs uppercase tracking-wider text-amber-800/80",
  footerSub: "mt-5 font-serif text-xs uppercase tracking-[0.4em] text-amber-700",
  footerNote: "mx-auto mt-4 max-w-lg font-serif text-xs text-stone-500",
  footerHome: "mt-5 inline-block font-serif text-xs uppercase tracking-widest text-amber-700 hover:text-amber-400",
};

const T8: MenyVisTema = {
  heroTitle:
    "font-sans text-[clamp(2rem,8vw,3.5rem)] font-extrabold tracking-tight text-indigo-950",
  headerBrand: "font-sans text-lg font-bold text-sky-600 sm:text-xl",
  headerTagline: "mt-2 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800",
  headerTaglineRule: "hidden",
  navBar: "mt-6 flex flex-wrap justify-center gap-3",
  navLink:
    "rounded-xl bg-white px-4 py-2 text-xs font-semibold text-indigo-900 shadow-md ring-1 ring-indigo-100 hover:bg-indigo-50",
  navLinkHover: "",
  heroEyebrow: "mt-6 font-sans text-xs font-medium text-indigo-500",
  heroDivider: "mx-auto mt-4 h-2 w-28 rounded-full bg-gradient-to-r from-orange-400 via-violet-400 to-sky-400",
  sectionDetails:
    "group rounded-2xl bg-gradient-to-br from-sky-50 to-violet-50 p-1 shadow-md open:ring-2 open:ring-orange-200",
  sectionSummary:
    "flex w-full cursor-pointer list-none items-center gap-3 rounded-xl bg-white/90 px-4 py-3 marker:content-none hover:bg-white [&::-webkit-details-marker]:hidden",
  chevron: "h-5 w-5 shrink-0 text-indigo-400 group-open:rotate-180 transition",
  sectionTitle: "font-sans text-sm font-bold text-indigo-950",
  sectionRule: "min-h-px flex-1 rounded-full bg-indigo-100",
  sectionPanel: "rounded-b-xl bg-white/95 px-4 pb-5 pt-3 sm:px-5",
  underTittel: "mb-2 mt-4 font-sans text-[0.6rem] font-bold uppercase text-violet-600 first:mt-0",
  listDivide: "divide-y divide-indigo-100",
  dishTitle: "font-sans text-[0.95rem] font-bold text-indigo-950 sm:text-[1.05rem]",
  dishSubtitle: "mt-0.5 font-sans text-[0.6rem] font-semibold uppercase text-sky-600",
  dishDesc: "mt-1.5 font-sans text-sm text-indigo-900/80",
  allergens: "mt-2 font-sans text-[0.55rem] font-bold uppercase text-red-500",
  price: "shrink-0 font-sans text-lg font-bold tabular-nums text-orange-600",
  priceSuffix: "ml-0.5 text-xs",
  dashEmpty: "shrink-0 text-indigo-200",
  pizzaNum: "mr-2 font-sans text-sm text-sky-500",
  pizzaToppings: "mt-1 font-sans text-sm text-indigo-800/85",
  pizzaLabel: "font-sans block text-[0.45rem] font-bold uppercase text-indigo-400",
  pizzaPrice: "font-sans text-lg font-bold tabular-nums text-orange-600",
  infoBox: "mt-4 rounded-xl bg-sky-50 p-4 font-sans text-sm text-indigo-900 ring-1 ring-sky-100",
  infoBoxLead: "font-bold text-indigo-950",
  infoBoxBullet: "list-disc list-inside",
  infoBoxStrong: "text-orange-600 font-bold",
  kompaktListe: "space-y-2 border-t border-indigo-100 pt-3 font-sans text-sm text-indigo-900",
  kompaktName: "font-semibold text-indigo-950",
  kompaktPrice: "shrink-0 font-bold text-orange-600",
  kompaktAllergen: "w-full text-[0.55rem] font-bold uppercase text-red-500",
  potetListe: "mt-2 space-y-1 border-t border-indigo-100 pt-3 font-sans text-sm",
  potetNavn: "font-semibold text-indigo-950",
  potetAllergen: "mt-0.5 block text-[0.55rem] font-bold uppercase text-red-500",
  litenOverskrift: "mb-1 mt-4 font-sans text-[0.6rem] font-bold uppercase text-sky-600",
  barnemenyNote: "mt-4 font-sans text-xs text-indigo-500",
  footerWrap: "mt-10 rounded-2xl bg-gradient-to-r from-orange-50 to-violet-50 py-8 text-center ring-1 ring-orange-100",
  footerLegend: "flex flex-wrap justify-center gap-4 font-sans text-xs font-medium text-indigo-800",
  footerSub: "mt-4 font-sans text-xs font-bold uppercase text-orange-600",
  footerNote: "mx-auto mt-3 max-w-md font-sans text-xs text-indigo-700/80",
  footerHome: "mt-4 inline-block font-sans text-xs font-semibold text-sky-600 hover:underline",
};

const T9: MenyVisTema = {
  heroTitle:
    "font-sans text-[clamp(2.8rem,12vw,5rem)] font-black uppercase italic tracking-tight text-red-700 drop-shadow-sm",
  headerBrand: "font-sans text-2xl font-black uppercase text-slate-900 sm:text-3xl",
  headerTagline: "mt-2 font-sans text-sm font-bold uppercase tracking-widest text-blue-800",
  headerTaglineRule: "hidden",
  navBar:
    "mt-6 flex flex-wrap justify-center gap-6 rounded-lg border-4 border-slate-900 bg-white py-3 font-sans text-xs font-bold uppercase text-slate-900 shadow-[4px_4px_0_0_#1e293b]",
  navLink: "hover:text-red-600",
  navLinkHover: "",
  heroEyebrow: "mt-6 font-sans text-xs font-bold uppercase tracking-widest text-slate-600",
  heroDivider: "mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-red-600 via-white to-blue-700 ring-2 ring-slate-900",
  sectionDetails:
    "group rounded-lg border-4 border-slate-900 bg-white shadow-[6px_6px_0_0_#0f172a] open:translate-x-0.5 open:translate-y-0.5 open:shadow-[3px_3px_0_0_#0f172a]",
  sectionSummary:
    "flex w-full cursor-pointer list-none items-center gap-3 bg-red-600 px-4 py-3 marker:content-none text-white [&::-webkit-details-marker]:hidden",
  chevron: "h-5 w-5 shrink-0 text-white group-open:rotate-180 transition",
  sectionTitle: "font-sans text-sm font-black uppercase tracking-wider",
  sectionRule: "min-h-px flex-1 bg-white/30",
  sectionPanel: "border-t-4 border-slate-900 bg-amber-50/40 px-4 pb-5 pt-4",
  underTittel: "mb-2 mt-5 font-sans text-xs font-black uppercase text-blue-900 first:mt-0",
  listDivide: "divide-y-2 divide-slate-200",
  dishTitle: "font-sans text-base font-extrabold uppercase text-slate-900 sm:text-lg",
  dishSubtitle: "mt-0.5 font-sans text-[0.6rem] font-bold uppercase text-red-700",
  dishDesc: "mt-1.5 font-sans text-sm text-slate-800",
  allergens: "mt-2 font-sans text-[0.55rem] font-black uppercase text-red-600",
  price: "shrink-0 font-sans text-xl font-black tabular-nums text-red-700",
  priceSuffix: "ml-0.5 text-sm",
  dashEmpty: "shrink-0 text-slate-400",
  pizzaNum: "mr-2 font-mono text-sm text-blue-800",
  pizzaToppings: "mt-1 font-sans text-sm text-slate-700",
  pizzaLabel: "font-sans block text-[0.45rem] font-black uppercase text-blue-800",
  pizzaPrice: "font-sans text-lg font-black tabular-nums text-red-700",
  infoBox: "mt-5 border-4 border-slate-900 bg-white p-3 font-sans text-sm text-slate-800 shadow-[4px_4px_0_0_#1e293b]",
  infoBoxLead: "font-black uppercase text-red-700",
  infoBoxBullet: "list-disc list-inside",
  infoBoxStrong: "font-black text-blue-800",
  kompaktListe: "space-y-2 border-t-2 border-slate-900 pt-3 font-sans text-sm",
  kompaktName: "font-bold uppercase text-slate-900",
  kompaktPrice: "shrink-0 font-black text-red-700",
  kompaktAllergen: "w-full text-[0.55rem] font-black uppercase text-red-600",
  potetListe: "mt-2 space-y-1 border-t-2 border-slate-900 pt-3 font-sans text-sm",
  potetNavn: "font-bold uppercase",
  potetAllergen: "mt-0.5 block text-[0.55rem] font-black uppercase text-red-600",
  litenOverskrift: "mb-1 mt-4 font-sans text-xs font-black uppercase text-blue-900",
  barnemenyNote: "mt-4 font-sans text-xs font-bold text-slate-600",
  footerWrap: "mt-10 border-t-4 border-slate-900 bg-red-600 py-6 text-center text-white",
  footerLegend: "flex flex-wrap justify-center gap-5 font-sans text-xs font-bold uppercase",
  footerSub: "mt-4 font-sans text-xs font-black uppercase tracking-widest text-amber-200",
  footerNote: "mx-auto mt-3 max-w-md font-sans text-xs text-red-100/90",
  footerHome: "mt-4 inline-block font-sans text-xs font-bold uppercase text-white underline",
};

const T10: MenyVisTema = {
  heroTitle:
    "font-serif text-[clamp(2.4rem,11vw,4.5rem)] text-amber-950/90 [text-shadow:1px_1px_0_rgba(255,255,255,0.3)]",
  headerBrand: "font-serif text-2xl text-amber-950 sm:text-3xl",
  headerTagline: "mt-2 font-serif text-sm italic text-amber-900/70",
  headerTaglineRule: "hidden",
  navBar: "mt-6 flex flex-wrap justify-center gap-8 border-b border-amber-900/20 pb-4 font-serif text-sm text-amber-900/80",
  navLink: "hover:underline decoration-wavy",
  navLinkHover: "",
  heroEyebrow: "mt-6 font-serif text-sm italic text-amber-800/70",
  heroDivider: "mx-auto mt-4 h-0.5 w-48 bg-amber-900/15",
  sectionDetails:
    "group rounded-sm border border-amber-900/15 bg-[#faf6ed]/90 shadow-sm open:shadow-md",
  sectionSummary:
    "flex w-full cursor-pointer list-none items-center gap-3 px-4 py-3 marker:content-none hover:bg-amber-50/80 [&::-webkit-details-marker]:hidden",
  chevron: "h-4 w-4 shrink-0 text-amber-800/60 group-open:rotate-180 transition",
  sectionTitle: "font-serif text-lg text-amber-950",
  sectionRule: "min-h-px flex-1 border-b border-dashed border-amber-900/20",
  sectionPanel: "border-t border-amber-900/10 px-4 pb-5 pt-3",
  underTittel: "mb-2 mt-5 font-serif text-sm font-semibold italic text-amber-900/80 first:mt-0",
  listDivide: "divide-y divide-amber-900/10",
  dishTitle: "font-serif text-base leading-snug text-amber-950 sm:text-lg",
  dishSubtitle: "mt-0.5 font-serif text-xs italic text-amber-800/70",
  dishDesc: "mt-1.5 font-serif text-sm leading-relaxed text-amber-950/85",
  allergens: "mt-2 font-serif text-[0.55rem] uppercase tracking-wide text-red-800/90",
  price: "shrink-0 font-serif text-xl tabular-nums text-amber-900 sm:text-2xl",
  priceSuffix: "ml-0.5 text-sm",
  dashEmpty: "shrink-0 font-serif text-amber-700/40",
  pizzaNum: "mr-2 font-serif text-sm text-amber-800/60",
  pizzaToppings: "mt-1 font-serif text-sm text-amber-950/80",
  pizzaLabel: "font-serif block text-xs italic text-amber-800/70",
  pizzaPrice: "font-serif text-lg tabular-nums text-amber-900",
  infoBox: "mt-5 border border-amber-900/20 bg-[#f5eeda] p-4 font-serif text-sm text-amber-950",
  infoBoxLead: "font-semibold",
  infoBoxBullet: "list-disc list-inside",
  infoBoxStrong: "font-semibold",
  kompaktListe: "space-y-2 border-t border-dashed border-amber-900/20 pt-3 font-serif text-sm",
  kompaktName: "font-medium text-amber-950",
  kompaktPrice: "shrink-0 font-serif text-base text-amber-900",
  kompaktAllergen: "w-full text-[0.55rem] uppercase text-red-800/90",
  potetListe: "mt-2 space-y-1 border-t border-dashed border-amber-900/20 pt-3 font-serif text-sm",
  potetNavn: "font-medium text-amber-950",
  potetAllergen: "mt-0.5 block text-[0.55rem] uppercase text-red-800/90",
  litenOverskrift: "mb-1 mt-4 font-serif text-xs font-semibold italic text-amber-900/70",
  barnemenyNote: "mt-4 font-serif text-xs italic text-amber-800/80",
  footerWrap: "mt-10 border-t border-amber-900/20 pt-8 text-center",
  footerLegend: "flex flex-wrap justify-center gap-6 font-serif text-sm text-amber-900/75",
  footerSub: "mt-5 font-serif text-sm italic text-amber-800/80",
  footerNote: "mx-auto mt-4 max-w-lg font-serif text-xs leading-relaxed text-amber-900/70",
  footerHome: "mt-5 inline-block font-serif text-sm text-amber-900/70 hover:text-amber-950 hover:underline",
};

/** Ti forskjellige visuelle uttrykk (indeks 0 = variant 1). */
export const MENY_VIS_TEMA: MenyVisTema[] = [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10];

export const MENY_VIS_TEMA_NAVN: string[] = [
  "Mørk grill & gull",
  "Minimal svart/hvit",
  "Neon natt",
  "Avis / magasin",
  "Skandi pastell",
  "Brutalist gul/svart",
  "Luksus mørk & gull",
  "Bento pastellkort",
  "Amerikansk diner",
  "Pergament & blekk",
];
