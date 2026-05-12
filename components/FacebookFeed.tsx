"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG, SITE } from "@/lib/constants";

function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const shots = [IMG.ig1, IMG.ig2, IMG.ig3, IMG.ig4] as const;

export function FacebookFeed() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 md:px-8">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
        Finn oss på Facebook
      </h2>
      <div className="no-scrollbar -mx-4 mt-4 flex gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-4 md:gap-3 md:overflow-visible md:px-0">
        {shots.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="relative aspect-square w-[26vw] shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 md:aspect-[4/5] md:w-auto"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 26vw, 25vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        ))}
      </div>
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
    </section>
  );
}
