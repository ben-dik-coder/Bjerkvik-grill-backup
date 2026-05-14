# Bjerkvik Grill — nettside

Offentlig nettside for **Bjerkvik Grill**, bygd med **Next.js 15** (App Router), **Tailwind CSS** og **Framer Motion**.

## Innhold du oppdaterer ved behov

- **`lib/constants.ts`** — telefon, adresse, sosiale lenker, åpningstider, gjennomsnittsscore og antall Google-anmeldelser (som vist på siden).
- **`public/images/`** — bilder til forsiden, meny og Facebook-galleriet (`images/fb/`).

## Lokalt kjøring

```bash
npm install
npm run dev
```

Applikasjonen starter på [http://localhost:3002](http://localhost:3002) (port er definert i `package.json`).

## Produksjonsbygg

```bash
npm run build
npm run start
```

Alternativt: `npm run demo` bygger og starter på port 3002.

## Lint

```bash
npm run lint
```

## Deploy

Typisk **[Vercel](https://vercel.com)** koblet til prosjektets Git-repository. Bruk samme kommando som over for bygg på server (`next build`).

## Interne sider

Prosjektet har egne «verksted»-ruter (layout-stiler, menyforhåndsvisninger m.m.). De er satt til **ingen indeksering** i søkemotorer og listet i **`app/robots.ts`**. Den vanlige besøkendes opplevelse er **`/`** (forside) og **`/meny`**.
