import type { MetadataRoute } from "next";

/**
 * Offentlige sider (/ og /meny osv.) tillates.
 * Workshop-/forhåndsvisnings-URL-er stenges også for crawlere (som backup til noindex-metadata).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/stiler/",
        "/layout-valg/",
        "/hero-valg",
        "/hero-30-varianter/",
        "/hurtigvalg-boks-valg",
        "/forside-plakat-varianter",
        "/layout-stil-15",
        "/bg-preview",
        "/meny/forhandsvisning/",
        "/meny/varianter/",
      ],
    },
  };
}
