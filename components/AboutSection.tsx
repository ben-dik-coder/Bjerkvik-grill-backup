"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Heart } from "lucide-react";
import { SITE } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="om" className="mx-auto max-w-6xl px-4 py-8 md:px-8">
      <ScrollReveal
        className="overflow-hidden rounded-3xl bg-raised p-4 shadow-card ring-1 ring-accent/10 md:flex md:gap-6 md:p-5 lg:p-6"
        y={20}
        delay={0}
      >
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-2xl bg-black md:w-[44%] md:self-start">
          <Image
            src="/images/ute.jpg"
            alt="Bjerkvik Grill — utendørs"
            fill
            className="object-cover object-center md:object-contain"
            sizes="(max-width: 768px) 100vw, 40vw"
            unoptimized
          />
        </div>
        <div className="mt-4 flex flex-1 flex-col justify-center md:mt-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent/90">
            {SITE.category}
          </p>
          <h2 className="font-serif mt-2 text-2xl font-semibold leading-tight text-[#f5f0e8] md:text-3xl">
            Lokalt kjøkken{" "}
            <span className="text-accent italic">med ambisjoner</span>
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#d7cfc4]/85">
            {SITE.tagline}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-[#d7cfc4]/78">
            {SITE.signature}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-[#d7cfc4]/70">
            {SITE.aboutExtra}
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
            <Heart className="h-4 w-4 fill-accent text-accent" />
            Laget med kjærlighet i Bjerkvik
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
