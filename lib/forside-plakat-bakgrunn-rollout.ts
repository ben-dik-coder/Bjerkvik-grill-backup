/**
 * Forsiden (`/`): samme ytre bakgrunn som `/meny` (eksperimentell meny).
 *
 * **Angre / tilbake til vanlig** `bg-background` fra temaet:
 * sett `NEXT_PUBLIC_FORSIDE_PLAKAT_BAKGRUNN=0` (eller `false` / `off`) i `.env.local` eller Vercel.
 */
export function forsidePlakatBakgrunnAktivert(): boolean {
  const v = process.env.NEXT_PUBLIC_FORSIDE_PLAKAT_BAKGRUNN?.trim().toLowerCase();
  if (v === "0" || v === "false" || v === "off") return false;
  return true;
}
