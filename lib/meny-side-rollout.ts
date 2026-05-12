/**
 * Meny-siden (`/meny`): plakat-/eksperimentell meny er **standard** overalt
 * (dev og produksjon) med mindre den skrus av eksplisitt.
 *
 * Skru **av** plakat-meny og tilbake til klassisk tabell-meny:
 * `NEXT_PUBLIC_MENY_EXPERIMENTAL=0` (eller `false` / `off`) i miljø, f.eks. `.env.local` eller Vercel.
 */
export function menyExperimentalAktivert(): boolean {
  const v = process.env.NEXT_PUBLIC_MENY_EXPERIMENTAL?.trim().toLowerCase();
  if (v === "0" || v === "false" || v === "off") return false;
  return true;
}
