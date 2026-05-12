import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { IMG, SITE } from "@/lib/constants";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Stil05Preview() {
  return (
    <div className={`${sans.className} min-h-screen bg-background text-foreground`}>
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src={IMG.hero}
            alt=""
            fill
            className="object-cover opacity-35"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-background/[0.92]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-10 md:px-10 md:pt-16">
          <div className="flex items-center justify-between border-b border-accent/25 pb-6">
            <p className={`${serif.className} text-2xl tracking-wide text-accent`}>
              Bjerkvik Grill
            </p>
            <Link
              href="/stiler"
              className="text-[10px] font-semibold uppercase tracking-[0.35em] text-accent/80 hover:text-accent"
            >
              Stilvalg
            </Link>
          </div>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.55em] text-accent/70">
              Sesong • Sjø • Salt
            </p>
            <h1
              className={`${serif.className} mt-6 text-balance text-5xl font-semibold leading-[1.05] text-[#f5f0e8] md:text-7xl`}
            >
              Et måltid i porten til nord
            </h1>
            <div className="mx-auto mt-8 h-px w-24 bg-accent/40" />
            <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-[#d7cfc4]/90 md:text-base">
              Vi tilbereder som på et lite kjøkken med store ambisjoner — med respekt
              for råvaren og glede over gjester som tar seg tid.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-px bg-accent/20 md:grid-cols-2">
            <div className="bg-sunken p-10">
              <h2 className={`${serif.className} text-3xl text-accent`}>Meny</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#d7cfc4]/85">
                Fra ild til tallerken: burgere med dybde, sushi med presisjon,
                pizza med sprø bunn.
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-8 inline-block border border-accent px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent transition hover:bg-accent hover:text-ink"
              >
                Reserver samtale
              </a>
            </div>
            <div className="relative min-h-[280px] bg-raised">
              <Image src={IMG.hero} alt="" fill className="object-cover opacity-90" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            </div>
          </div>

          <div
            id="kontakt"
            className="mx-auto mt-16 flex max-w-4xl flex-col items-center gap-6 border border-accent/20 px-8 py-10 text-center md:flex-row md:justify-between md:text-left"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-accent/70">
                Lokalisering
              </p>
              <p className="mt-2 text-sm font-medium">{SITE.address}</p>
              <p className="mt-1 text-sm text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent underline-offset-8 hover:underline"
              >
                Veiledning i kart
              </a>
              <Link href="/" className="text-xs text-[#d7cfc4]/60 hover:text-[#ece7df]">
                Til dagens nettside
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
