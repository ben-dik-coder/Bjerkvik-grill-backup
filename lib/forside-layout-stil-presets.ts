/**
 * 15 helhetlige «mini-forside»-stiler til forhåndsvisning (/layout-stil-15).
 * Slås sammen med BASE — kun felt som skal endres trenger være satt i hvert steg.
 */
export type ForsideLayoutStil = {
  name: string;
  blurb: string;
  root: string;
  headerRow: string;
  menuBtn: string;
  logoScale: string;
  heroStack: string;
  heroImgShell: string;
  heroImg: string;
  heroVignette: string;
  heroCtaWrap: string;
  heroCta: string;
  copyBlock: string;
  eyebrow: string;
  h1: string;
  rule: string;
  body: string;
  starsRow: string;
  quickLinksRow: string;
  ringBtn: string;
  kartBtn: string;
  solidRingBtn: string;
  solidKartBtn: string;
  quickSection: string;
  quickCard: (i: number) => string;
  quickOverlay: string;
  quickEyebrow: string;
  quickTitle: string;
  quickSub: string;
  quickChevron: string;
};

const BASE: ForsideLayoutStil = {
  name: "Basis (rustikk)",
  blurb: "Som dagens side — varm brun, gull, skygge.",
  root: "bg-[#4a3c33] text-[#ece7df]",
  headerRow:
    "flex items-center justify-between gap-2 border-b border-accent/25 bg-[#4a3c33] px-3 py-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.2)]",
  menuBtn:
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-[#544539] text-[#ece7df]",
  logoScale: "scale-[0.82] origin-left",
  heroStack: "border-y border-accent/10",
  heroImgShell: "relative aspect-[5/3] w-full bg-black",
  heroImg: "object-cover object-center",
  heroVignette: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent",
  heroCtaWrap: "absolute inset-x-0 bottom-4 z-[1] flex justify-center px-3",
  heroCta:
    "inline-flex h-9 w-[8.5rem] items-center justify-center gap-1.5 rounded-md border border-accent bg-accent px-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#3d2e24] shadow-[0_8px_20px_rgba(0,0,0,0.4),0_0_16px_rgba(184,137,61,0.2)]",
  copyBlock: "px-4 py-5",
  eyebrow: "text-[9px] uppercase tracking-[0.45em] text-accent/80",
  h1: "font-serif mt-2 text-balance text-xl font-semibold leading-tight text-[#f5f0e8]",
  rule: "my-3 h-px w-24 bg-accent/30",
  body: "text-[11px] leading-relaxed text-[#d7cfc4]/92",
  starsRow: "mt-2 flex items-center gap-1.5 text-[11px]",
  quickLinksRow: "mt-3 flex flex-wrap gap-4 border-l-2 border-accent pl-3",
  ringBtn: "text-[10px] font-semibold uppercase tracking-wide text-accent",
  kartBtn: "text-[10px] font-semibold uppercase tracking-wide text-[#d7cfc4]",
  solidRingBtn:
    "inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-accent bg-accent py-2 text-[9px] font-bold uppercase tracking-wider text-[#3d2e24]",
  solidKartBtn:
    "inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-white/15 bg-white/[0.04] py-2 text-[9px] font-bold uppercase tracking-wider text-[#ece7df]",
  quickSection: "space-y-2 px-3 py-3",
  quickCard: (i) =>
    `relative flex min-h-[72px] items-center overflow-hidden rounded-2xl border border-accent/35 px-3 py-3 shadow-md ring-1 ring-black/40 ${
      i % 2 === 0 ? "bg-[#5f5045]" : "bg-[#544539]"
    }`,
  quickOverlay:
    "pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-gradient-to-r from-black/60 to-transparent",
  quickEyebrow: "text-[8px] font-semibold uppercase tracking-[0.4em] text-accent",
  quickTitle: "font-serif mt-0.5 text-base font-semibold text-[#f5f0e8]",
  quickSub: "mt-0.5 max-w-[11rem] text-[10px] leading-snug text-[#ece7df]/92",
  quickChevron: "h-6 w-6 shrink-0 text-accent",
};

function merge(p: Partial<ForsideLayoutStil> & Pick<ForsideLayoutStil, "name" | "blurb">): ForsideLayoutStil {
  return { ...BASE, ...p };
}

export const FORSIDE_LAYOUT_STILER: ForsideLayoutStil[] = [
  merge({
    name: "1 · Rustikk (nå)",
    blurb: "Referanse — nær dagens produksjon.",
  }),
  merge({
    name: "2 · Flat nordisk",
    blurb: "Tynne linjer, nesten uten skygge, rolig.",
    headerRow:
      "flex items-center justify-between gap-2 border-b border-white/10 bg-[#42362f] px-3 py-2.5",
    menuBtn:
      "flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-transparent text-[#ece7df]",
    heroStack: "border-y border-white/10",
    heroVignette:
      "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent",
    heroCta:
      "inline-flex h-9 w-[8.5rem] items-center justify-center gap-1.5 rounded-md border border-accent/60 bg-transparent text-[9px] font-bold uppercase tracking-[0.16em] text-accent",
    copyBlock: "bg-[#42362f] px-4 py-6",
    rule: "my-4 h-px w-full max-w-[10rem] bg-white/10",
    quickSection: "space-y-2 bg-[#42362f] px-3 py-3",
    quickCard: (i) =>
      `relative flex min-h-[72px] items-center overflow-hidden rounded-lg border border-white/12 px-3 py-3 ${
        i % 2 === 0 ? "bg-[#4a3e36]" : "bg-[#453a32]"
      }`,
    quickOverlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-lg bg-gradient-to-r from-black/45 to-transparent",
  }),
  merge({
    name: "3 · Glass mørk",
    blurb: "Blur, lys kant, kjølig premium.",
    root: "bg-[#2a2420] text-[#f0ebe3]",
    headerRow:
      "flex items-center justify-between gap-2 border-b border-white/10 bg-white/[0.04] px-3 py-2.5 backdrop-blur-md",
    menuBtn:
      "flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-sm",
    heroStack: "border-y border-white/10",
    heroImgShell: "relative aspect-[5/3] w-full bg-zinc-900",
    heroVignette:
      "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/30",
    heroCta:
      "inline-flex h-9 w-[8.5rem] items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md shadow-lg",
    copyBlock: "bg-white/[0.03] px-4 py-6 backdrop-blur-sm",
    rule: "my-3 h-px w-16 bg-white/15",
    quickSection: "space-y-2 bg-white/[0.03] px-3 py-3 backdrop-blur-sm",
    quickCard: () =>
      "relative flex min-h-[72px] items-center overflow-hidden rounded-2xl border border-white/12 bg-white/[0.05] px-3 py-3 shadow-lg backdrop-blur-md",
    quickOverlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-gradient-to-r from-black/40 to-transparent",
    quickEyebrow: "text-[8px] uppercase tracking-[0.35em] text-white/60",
    quickTitle: "font-serif mt-0.5 text-base font-medium text-white",
    quickSub: "mt-0.5 max-w-[11rem] text-[10px] text-white/70",
  }),
  merge({
    name: "4 · Industri",
    blurb: "Skarpe hjørner, sans, kompakt.",
    headerRow:
      "flex items-center justify-between gap-2 border-b-2 border-accent/40 bg-[#352d28] px-2.5 py-2",
    menuBtn:
      "flex h-8 w-8 items-center justify-center rounded-sm border border-accent/50 bg-[#2c2521] text-accent",
    heroStack: "border-y-2 border-accent/20",
    heroImgShell: "relative aspect-[5/3] w-full bg-black",
    heroCta:
      "inline-flex h-8 w-[7.5rem] items-center justify-center rounded-sm border-2 border-accent bg-accent text-[8px] font-black uppercase tracking-widest text-[#2c1810]",
    copyBlock: "bg-[#352d28] px-3 py-4",
    h1: "font-sans mt-1.5 text-lg font-black uppercase tracking-wide text-[#f5f0e8]",
    eyebrow: "text-[8px] font-bold uppercase tracking-[0.2em] text-accent",
    rule: "my-2 h-0.5 w-20 bg-accent",
    quickSection: "space-y-1.5 bg-[#352d28] px-2 py-2",
    quickCard: (i) =>
      `relative flex min-h-[68px] items-center overflow-hidden rounded-sm border border-accent/30 px-2.5 py-2 ${
        i % 2 === 0 ? "bg-[#3d342c]" : "bg-[#342c27]"
      }`,
    quickOverlay:
      "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/55 to-transparent",
    quickTitle: "font-sans mt-0.5 text-sm font-bold uppercase tracking-wide text-[#f5f0e8]",
    quickChevron: "h-5 w-5 shrink-0 text-accent",
  }),
  merge({
    name: "5 · Myk luksus",
    blurb: "Store radius, mye luft, myk skygge.",
    headerRow:
      "flex items-center justify-between gap-2 rounded-b-2xl border-b border-accent/15 bg-[#52453d] px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.25)]",
    menuBtn:
      "flex h-9 w-9 items-center justify-center rounded-2xl border border-accent/20 bg-[#5c4e44] shadow-inner",
    heroStack: "overflow-hidden rounded-b-3xl border-x border-b border-accent/10",
    heroImgShell: "relative aspect-[5/3] w-full bg-black",
    heroCtaWrap: "absolute inset-x-0 bottom-5 z-[1] flex justify-center px-4",
    heroCta:
      "inline-flex h-10 w-[9rem] items-center justify-center gap-2 rounded-2xl border border-accent/30 bg-accent text-[9px] font-bold uppercase tracking-[0.2em] text-[#3d2e24] shadow-xl",
    copyBlock: "bg-[#4e4239] px-5 py-7",
    h1: "font-serif mt-3 text-2xl font-semibold leading-tight text-[#faf6ef]",
    rule: "my-4 h-px w-32 bg-accent/25",
    quickSection: "space-y-3 bg-[#4e4239] px-4 py-4",
    quickCard: () =>
      "relative flex min-h-[76px] items-center overflow-hidden rounded-3xl border border-accent/25 bg-[#55483e] px-4 py-4 shadow-lg",
    quickOverlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-3xl bg-gradient-to-r from-black/50 to-transparent",
    quickTitle: "font-serif mt-1 text-lg font-semibold text-[#faf6ef]",
  }),
  merge({
    name: "6 · Cinematic",
    blurb: "Nesten svart, tynn gull, dramatisk foto.",
    root: "bg-[#12100e] text-[#e8e2da]",
    headerRow:
      "flex items-center justify-between gap-2 border-b border-white/5 bg-black px-3 py-2.5",
    menuBtn:
      "flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black text-white/80",
    heroStack: "border-y border-white/5",
    heroVignette:
      "pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/85",
    heroCta:
      "inline-flex h-8 w-[6.5rem] items-center justify-center rounded-sm border border-accent/70 bg-black/60 text-[8px] font-bold uppercase tracking-[0.28em] text-accent backdrop-blur-sm",
    copyBlock: "bg-black px-4 py-6",
    rule: "my-3 h-px w-12 bg-accent/40",
    body: "text-[11px] leading-relaxed text-white/55",
    quickSection: "space-y-2 bg-black px-3 py-3",
    quickCard: () =>
      "relative flex min-h-[72px] items-center overflow-hidden rounded-xl border border-white/10 bg-[#1a1816] px-3 py-3",
    quickOverlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-xl bg-gradient-to-t from-black/80 to-transparent",
    quickEyebrow: "text-[8px] uppercase tracking-[0.45em] text-accent/70",
    quickTitle: "font-serif mt-1 text-base text-[#f5f0e8]",
    quickSub: "mt-0.5 max-w-[11rem] text-[10px] text-white/50",
    solidRingBtn:
      "inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-accent bg-transparent py-2 text-[9px] font-bold uppercase tracking-wider text-accent",
    solidKartBtn:
      "inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-white/20 bg-transparent py-2 text-[9px] font-bold uppercase tracking-wider text-white/80",
  }),
  merge({
    name: "7 · Champagne",
    blurb: "Varmere panel, lysere gullfølelse.",
    root: "bg-[#4f4238] text-[#faf3e8]",
    headerRow:
      "flex items-center justify-between gap-2 border-b border-[#c9a55c]/25 bg-[#4f4238] px-3 py-2.5",
    menuBtn:
      "flex h-8 w-8 items-center justify-center rounded-xl border border-[#c9a55c]/35 bg-[#5a4c41] text-[#faf3e8]",
    heroVignette:
      "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a221c]/75 via-transparent to-[#4f4238]/30",
    heroCta:
      "inline-flex h-9 w-[8.5rem] items-center justify-center gap-1.5 rounded-lg border border-[#c9a55c] bg-[#c9a55c] text-[9px] font-bold uppercase tracking-[0.16em] text-[#2f241c] shadow-md",
    copyBlock: "bg-[#52453c] px-4 py-6",
    eyebrow: "text-[9px] uppercase tracking-[0.4em] text-[#e8d4a8]",
    quickSection: "space-y-2 bg-[#52453c] px-3 py-3",
    quickCard: (i) =>
      `relative flex min-h-[72px] items-center overflow-hidden rounded-xl border border-[#c9a55c]/25 px-3 py-3 ${
        i % 2 === 0 ? "bg-[#5c4e44]" : "bg-[#55483f]"
      }`,
    quickOverlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-xl bg-gradient-to-r from-black/45 to-transparent",
    quickChevron: "h-6 w-6 shrink-0 text-[#e8d4a8]",
  }),
  merge({
    name: "8 · Venstrestripe",
    blurb: "Gull-linje som binder header + innhold.",
    headerRow:
      "flex items-center justify-between gap-2 border-b border-accent/20 border-l-4 border-l-accent bg-[#453a32] pl-2 pr-3 py-2.5",
    copyBlock: "border-l-4 border-l-accent/80 bg-[#4a3c33] py-5 pl-3 pr-4",
    quickSection: "space-y-2 border-l-4 border-l-accent/50 bg-[#4a3c33] py-3 pl-2 pr-3",
    quickCard: (i) =>
      `relative flex min-h-[72px] items-center overflow-hidden rounded-r-xl rounded-l-sm border border-accent/25 border-l-4 border-l-accent px-3 py-3 shadow-md ${
        i % 2 === 0 ? "bg-[#55483e]" : "bg-[#4e4239]"
      }`,
  }),
  merge({
    name: "9 · Kontrast",
    blurb: "Lysere tekstfelt, tydelig lesbarhet.",
    root: "bg-[#3d322b] text-[#fffaf5]",
    copyBlock: "bg-[#2f2822] px-4 py-6 ring-1 ring-white/10",
    body: "text-[11px] leading-relaxed text-[#e5ddd4]",
    quickSection: "space-y-2 bg-[#2f2822] px-3 py-3 ring-1 ring-white/10",
    quickCard: () =>
      "relative flex min-h-[72px] items-center overflow-hidden rounded-xl border border-white/10 bg-[#3a322c] px-3 py-3",
    quickOverlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-xl bg-gradient-to-r from-black/50 to-transparent",
  }),
  merge({
    name: "10 · Editorial",
    blurb: "Stor overskrift, tynn dekor, «magasin».",
    copyBlock: "px-5 py-7",
    h1: "font-serif mt-2 text-[1.35rem] font-medium italic leading-[1.15] text-[#f5f0e8]",
    eyebrow: "text-[9px] font-medium uppercase tracking-[0.55em] text-accent/70",
    rule: "my-4 h-px w-10 bg-accent/50",
    ringBtn: "text-[10px] font-medium uppercase tracking-[0.2em] text-accent underline decoration-accent/40 underline-offset-4",
    kartBtn: "text-[10px] font-medium uppercase tracking-[0.2em] text-[#d7cfc4] underline decoration-white/15 underline-offset-4",
    quickTitle: "font-serif mt-0.5 text-base font-medium text-[#f5f0e8]",
    quickEyebrow: "text-[8px] font-medium uppercase tracking-[0.5em] text-accent/75",
  }),
  merge({
    name: "11 · Kompakt",
    blurb: "Mindre luft — mer informasjon per skjerm.",
    headerRow:
      "flex items-center justify-between gap-2 border-b border-accent/20 bg-[#453a32] px-2 py-1.5",
    menuBtn: "flex h-7 w-7 items-center justify-center rounded border border-accent/25 bg-[#544539] text-[#ece7df]",
    logoScale: "scale-[0.72] origin-left",
    heroImgShell: "relative aspect-[16/9] w-full bg-black",
    copyBlock: "px-3 py-3",
    h1: "font-serif mt-1 text-lg font-semibold text-[#f5f0e8]",
    body: "text-[10px] leading-snug text-[#d7cfc4]/88",
    quickSection: "space-y-1.5 px-2 py-2",
    quickCard: (i) =>
      `relative flex min-h-[60px] items-center overflow-hidden rounded-lg border border-accent/30 px-2 py-2 ${
        i % 2 === 0 ? "bg-[#5f5045]" : "bg-[#544539]"
      }`,
    quickTitle: "font-serif mt-0.5 text-sm font-semibold text-[#f5f0e8]",
    quickSub: "mt-0.5 max-w-[10rem] text-[9px] text-[#ece7df]/85",
    quickChevron: "h-5 w-5 shrink-0 text-accent",
  }),
  merge({
    name: "12 · Inset",
    blurb: "Lett innfelt følelse på kort.",
    menuBtn:
      "flex h-8 w-8 items-center justify-center rounded-lg border border-black/20 bg-[#483d35] shadow-[inset_0_2px_6px_rgba(0,0,0,0.35)]",
    heroCta:
      "inline-flex h-9 w-[8.5rem] items-center justify-center gap-1.5 rounded-lg border border-black/20 bg-accent text-[9px] font-bold uppercase tracking-[0.16em] text-[#3d2e24] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_6px_16px_rgba(0,0,0,0.35)]",
    quickCard: (i) =>
      `relative flex min-h-[72px] items-center overflow-hidden rounded-2xl border border-black/25 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_20px_rgba(0,0,0,0.35)] ${
        i % 2 === 0 ? "bg-[#52453c]" : "bg-[#4a3f37]"
      }`,
  }),
  merge({
    name: "13 · Outline-first",
    blurb: "Gull som linje mer enn fyll.",
    heroCta:
      "inline-flex h-9 w-[8.5rem] items-center justify-center gap-1.5 rounded-md border-2 border-accent bg-transparent text-[9px] font-bold uppercase tracking-[0.16em] text-accent shadow-none",
    ringBtn:
      "rounded-full border border-accent/50 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-accent",
    kartBtn:
      "rounded-full border border-white/20 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-[#d7cfc4]",
    solidRingBtn:
      "inline-flex flex-1 items-center justify-center gap-1 rounded-full border-2 border-accent bg-transparent py-2 text-[9px] font-bold uppercase tracking-wider text-accent",
    solidKartBtn:
      "inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-white/25 bg-transparent py-2 text-[9px] font-bold uppercase tracking-wider text-[#ece7df]",
    quickCard: () =>
      "relative flex min-h-[72px] items-center overflow-hidden rounded-2xl border-2 border-accent/35 bg-transparent px-3 py-3",
    quickOverlay:
      "pointer-events-none absolute inset-0 z-[1] rounded-2xl bg-gradient-to-r from-black/35 to-transparent",
  }),
  merge({
    name: "14 · Split tone",
    blurb: "Annet panel under hero enn over.",
    copyBlock: "bg-[#3f3530] px-4 py-6",
    quickSection: "space-y-2 bg-[#52453c] px-3 py-4 ring-1 ring-inset ring-white/5",
    quickCard: (i) =>
      `relative flex min-h-[72px] items-center overflow-hidden rounded-xl border border-white/8 px-3 py-3 ${
        i % 2 === 0 ? "bg-[#5a4c42]" : "bg-[#4e433c]"
      }`,
  }),
  merge({
    name: "15 · Swiss minimal",
    blurb: "Rutenett-følelse, nesten uten pynt.",
    root: "bg-[#3a322c] text-[#f2ebe3]",
    headerRow:
      "flex items-center justify-between gap-2 border-b border-white/10 bg-[#3a322c] px-3 py-2",
    menuBtn:
      "flex h-8 w-8 items-center justify-center border border-white/15 bg-transparent text-[#f2ebe3]",
    heroStack: "border-y border-white/10",
    heroVignette: "pointer-events-none absolute inset-0 bg-black/35",
    heroCta:
      "inline-flex h-9 w-[8.5rem] items-center justify-center border border-white/25 bg-[#f2ebe3] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#2c2420]",
    copyBlock: "border-b border-white/10 px-4 py-6",
    h1: "font-sans mt-2 text-lg font-semibold tracking-tight text-[#faf6ef]",
    rule: "my-3 hidden",
    quickSection: "grid grid-cols-1 gap-1.5 bg-[#3a322c] p-2",
    quickCard: () =>
      "relative flex min-h-[68px] items-center overflow-hidden border border-white/10 bg-[#42362f] px-3 py-2.5",
    quickOverlay: "pointer-events-none absolute inset-0 z-[1] bg-black/40",
    quickTitle: "font-sans mt-0.5 text-sm font-semibold tracking-tight text-white",
    quickEyebrow: "text-[7px] font-semibold uppercase tracking-[0.35em] text-white/45",
    quickChevron: "h-5 w-5 shrink-0 text-white/50",
    solidRingBtn:
      "inline-flex flex-1 items-center justify-center gap-1 border border-[#2c2420] bg-[#f2ebe3] py-2 text-[9px] font-semibold uppercase tracking-wider text-[#2c2420]",
    solidKartBtn:
      "inline-flex flex-1 items-center justify-center gap-1 border border-white/20 bg-transparent py-2 text-[9px] font-semibold uppercase tracking-wider text-[#f2ebe3]",
  }),
];
