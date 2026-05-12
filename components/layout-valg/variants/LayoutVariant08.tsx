import Image from "next/image";
import Link from "next/link";
import { BookOpen, MapPin, Phone } from "lucide-react";
import { LvMenuCoverImage } from "@/components/LvMenuCoverImage";
import { IMG, SITE } from "@/lib/constants";
import { LV_MENU } from "@/lib/layout-valg/menu-data";

export default function LayoutVariant08() {
  return (
    <div className="flex min-h-screen bg-background text-[#ece7df]">
      <div className="min-w-0 flex-1 pb-10 pt-6 md:pr-[5.5rem]">
        <header className="px-6 md:px-12">
          <h1 className="font-serif text-4xl font-semibold text-[#f5f0e8] md:text-5xl">Innhold til venstre</h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#d7cfc4]/85">
            Dokken til høyre er alltid synlig på skrivebord — handlingene følger deg mens du leser om menyen.
          </p>
        </header>

        <section className="mt-12 px-6 md:px-12">
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.4em] text-accent">Meny</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {LV_MENU.map((c) => (
              <div key={c.key} className="overflow-hidden border border-accent/12">
                <div className="relative aspect-[16/10]">
                  <LvMenuCoverImage img={c.img} sizes="(max-width:640px) 100vw, 40vw" />
                </div>
                <div className="space-y-1 p-4">
                  <p className="font-serif text-xl text-[#f5f0e8]">{c.label}</p>
                  <p className="text-xs text-[#d7cfc4]/75">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="relative mx-6 mt-10 aspect-video overflow-hidden border border-accent/15 md:mx-12">
          <Image src={IMG.hero} alt="" fill className="object-cover" sizes="800px" />
        </div>

        <footer id="kontakt" className="mt-16 px-6 md:px-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Kontakt</p>
          <p className="mt-2 text-sm">{SITE.address}</p>
          <p className="text-sm text-[#d7cfc4]/75">{SITE.phoneDisplay}</p>
          <Link href="/layout-valg" className="mt-6 inline-block text-xs text-accent underline underline-offset-4">
            Se andre layout-varianter
          </Link>
        </footer>
      </div>

      <aside className="fixed bottom-0 right-0 top-0 z-20 hidden w-[4.5rem] flex-col justify-center gap-4 border-l border-accent/20 bg-sunken/98 py-8 backdrop-blur-md md:flex">
        <a href={SITE.phoneHref} className="flex flex-col items-center gap-2 px-2 text-[9px] font-bold uppercase tracking-wider text-accent">
          <span className="flex h-12 w-12 rotate-0 items-center justify-center rounded-full border border-accent bg-accent/10">
            <Phone className="h-5 w-5" />
          </span>
          Ring
        </a>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 px-2 text-[9px] font-bold uppercase tracking-wider text-[#d7cfc4]"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ece7df]/20">
            <MapPin className="h-5 w-5" />
          </span>
          Kart
        </a>
        <Link href="/layout-valg" className="flex flex-col items-center gap-2 px-2 text-[9px] font-bold uppercase tracking-wider text-[#d7cfc4]/70">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ece7df]/15">
            <BookOpen className="h-5 w-5" />
          </span>
          Valg
        </Link>
      </aside>

      <div className="fixed bottom-0 left-0 right-0 z-30 flex gap-2 border-t border-accent/20 bg-sunken/95 p-3 backdrop-blur md:hidden">
        <a href={SITE.phoneHref} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent py-3 text-xs font-bold uppercase text-ink">
          <Phone className="h-4 w-4" />
          Ring
        </a>
        <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-accent/40 py-3 text-xs font-bold uppercase">
          Kart
        </a>
      </div>
    </div>
  );
}
