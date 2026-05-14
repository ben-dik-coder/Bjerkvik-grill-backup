"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FACEBOOK_FEED_IMAGES, SITE } from "@/lib/constants";
import {
  ScrollReveal,
  SCROLL_VIEWPORT,
  scrollRevealTransition,
} from "@/components/ScrollReveal";

function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const shots = FACEBOOK_FEED_IMAGES;

export function FacebookFeed() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (lightboxSrc == null) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxSrc]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 md:px-8">
      <ScrollReveal y={12} delay={0}>
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
          Finn oss på Facebook
        </h2>
      </ScrollReveal>
      <ScrollReveal className="-mx-4 mt-4 md:mx-0" y={18} delay={0.03}>
        <div className="no-scrollbar flex touch-pan-x gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-4 md:gap-3 md:overflow-visible md:px-0">
        {shots.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={SCROLL_VIEWPORT}
            transition={scrollRevealTransition(i * 0.045)}
            className="relative aspect-square w-[26vw] shrink-0 md:aspect-[4/5] md:w-auto"
          >
            <button
              type="button"
              onClick={() => setLightboxSrc(src)}
              className="group relative block h-full w-full overflow-hidden rounded-2xl ring-1 ring-white/10 outline-none transition focus-visible:ring-2 focus-visible:ring-accent active:brightness-110"
              aria-label="Åpne bilde i fullskjerm"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-center transition group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 26vw, 25vw"
              />
              <span
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition group-hover:from-black/25"
                aria-hidden
              />
            </button>
          </motion.div>
        ))}
        </div>
      </ScrollReveal>

      <AnimatePresence>
        {lightboxSrc != null ? (
          <motion.div
            key="fb-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Bilde i fullskjerm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/93 p-[max(0.75rem,env(safe-area-inset-left))] pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-[max(3.25rem,env(safe-area-inset-top))] pe-[max(0.75rem,env(safe-area-inset-right))] ps-[max(0.75rem,env(safe-area-inset-left))]"
            onClick={() => setLightboxSrc(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxSrc(null)}
              className="absolute right-[max(0.75rem,env(safe-area-inset-right))] top-[max(0.75rem,env(safe-area-inset-top))] z-[2] flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm transition hover:bg-white/25"
              aria-label="Lukk"
            >
              <X className="h-6 w-6" strokeWidth={2} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.22 }}
              className="relative mx-auto flex max-h-full max-w-full items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxSrc}
                alt=""
                width={1920}
                height={1440}
                className="max-h-[calc(100dvh-6rem-env(safe-area-inset-bottom)-env(safe-area-inset-top))] max-w-[calc(100vw-1.75rem-env(safe-area-inset-left)-env(safe-area-inset-right))] h-auto w-auto object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ScrollReveal y={14} delay={0.06}>
        <motion.a
          href={SITE.facebook}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.99 }}
          className="mt-4 flex w-full min-h-[52px] items-center justify-center gap-2 rounded-3xl border border-accent/60 bg-black/35 py-3 text-sm font-bold uppercase tracking-wide text-accent transition hover:bg-accent/10"
        >
          <FacebookGlyph className="h-4 w-4" />
          {SITE.facebookLabel}
        </motion.a>
      </ScrollReveal>
    </section>
  );
}
