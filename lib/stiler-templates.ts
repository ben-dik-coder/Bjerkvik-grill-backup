import type { Metadata } from "next";

/** Én visuell mal — metadata + kort beskrivelse for oversiktssiden */
export type StilTemplate = {
  id: number;
  navn: string;
  vibe: string;
  seoDescription: string;
};

export const STIL_TEMPLATES: readonly StilTemplate[] = [
  {
    id: 1,
    navn: "Sjøhus-blad",
    vibe: "Lyse papirtoner, serif som avis, rolig luksus.",
    seoDescription: "Lyse papirtoner, serif og redaksjonell layout.",
  },
  {
    id: 2,
    navn: "Neon-kiosk",
    vibe: "Svart bakgrunn, skarpe kontraster, gatekjøkken-puls.",
    seoDescription: "Neon kontrast, gatekjøkken energi og store typer.",
  },
  {
    id: 3,
    navn: "Nordisk luft",
    vibe: "Mye hvitt rom, tynn typografi, nesten museaktig.",
    seoDescription: "Minimal lys flate med mye luft og presis typografi.",
  },
  {
    id: 4,
    navn: "Retro diner",
    vibe: "Pastell, badges og litt høyttaler-takter.",
    seoDescription: "Pastell diner-stemning med badges og leken hierarki.",
  },
  {
    id: 5,
    navn: "Gourmet-mørkt",
    vibe: "Nærmest restaurant-meny med gull og dramatikk.",
    seoDescription: "Mørk bakgrunn, gull aksenter og klassisk restaurant dramatikk.",
  },
  {
    id: 6,
    navn: "Skogs-marked",
    vibe: "Grønt, varmt tre-stemning, håndverks-følelse.",
    seoDescription: "Grønne toner, naturtro stemning og mer «håndplukket» tekst.",
  },
  {
    id: 7,
    navn: "Brutalist stripe",
    vibe: "Gult/svart, store bokstaver, ingen dill.",
    seoDescription: "Gult og svart, brut typografi og harde kanter.",
  },
  {
    id: 8,
    navn: "Pastell takeaway",
    vibe: "Myke gradienter og runde «app-knapper».",
    seoDescription: "Myke gradienter, runde knapper og app-lignende stemning.",
  },
  {
    id: 9,
    navn: "Maritim stripe",
    vibe: "Marineblått, signalrødt, kompass og linjer.",
    seoDescription: "Marineblått, røde aksenter og sjø-relatert tekst.",
  },
  {
    id: 10,
    navn: "Collage-lek",
    vibe: "Memphis-former, livlig hierarki, litt kaos-kreativt.",
    seoDescription: "Memphis-inspirerte former og lekent hierarki.",
  },
  {
    id: 11,
    navn: "Art deco ramme",
    vibe: "Gull/krem, symmetriske rammer og kongelig ro.",
    seoDescription: "Gullrammer, symmetri og klassisk vertikal hierarki.",
  },
  {
    id: 12,
    navn: "Cyber grid",
    vibe: "Neon-grid og futuristisk kiosk-vibb.",
    seoDescription: "Neon-grid, futuristisk og «digital kiosk»-stemning.",
  },
  {
    id: 13,
    navn: "Terrakotta peis",
    vibe: "Varm stein, flamme-ikon og myke kort.",
    seoDescription: "Varm steinton, keramikk-følelse og myke hjørner.",
  },
  {
    id: 14,
    navn: "Avis-spalter",
    vibe: "Papir-grått, to kolonner, redaksjonell tekst.",
    seoDescription: "Avispapir, to kolonner og «redaksjonell» tekst.",
  },
  {
    id: 15,
    navn: "Bedrift lys",
    vibe: "Blå/hvit tillit, punktliste og tydelige CTA-er.",
    seoDescription: "Tillitsfull blå/hvit layout med punktliste og klar CTA.",
  },
  {
    id: 16,
    navn: "Sveitsisk rutenett",
    vibe: "Svart/hvit/rødt — typografi og grid først.",
    seoDescription: "Svart/hvit/rødt — typografi først og harde grid-flater.",
  },
  {
    id: 17,
    navn: "Jazz-kveld",
    vibe: "Mørk lilla scene med gull og bred panorama-hero.",
    seoDescription: "Mørk lilla scene, gull og bred hero-linje.",
  },
  {
    id: 18,
    navn: "Terminal mono",
    vibe: "Grønn monospace — «kommandolinje»-humor.",
    seoDescription: "«CLI»-estetikk med grønn monospace og kommando-knapper.",
  },
  {
    id: 19,
    navn: "Bakehus varmt",
    vibe: "Sjokolade og krem — koselig men fortsatt grill.",
    seoDescription: "Sjokolade og kremtoner — koselig men fortsatt grill.",
  },
  {
    id: 20,
    navn: "Invitasjon rosa",
    vibe: "Script, gradient og litt fest-invitasjon.",
    seoDescription: "Script-overskrifter, myke gradienter og feststemning.",
  },
];

export function getStilTemplate(id: number): StilTemplate | undefined {
  return STIL_TEMPLATES.find((t) => t.id === id);
}

/** Gyldig mal-id fra URL-segment, eller undefined */
export function parseStilTemplateId(raw: string): number | undefined {
  const id = Number.parseInt(raw, 10);
  if (!Number.isFinite(id)) return undefined;
  return getStilTemplate(id) ? id : undefined;
}

export function stilTemplateMetadata(id: number): Metadata | undefined {
  const t = getStilTemplate(id);
  if (!t) return undefined;
  return {
    title: `Stil ${t.id} — ${t.navn} | Bjerkvik Grill`,
    description: t.seoDescription,
  };
}
