import Image from "next/image";
import type { LV_MENU } from "@/lib/layout-valg/menu-data";

type ImgSrc = (typeof LV_MENU)[number]["img"];

/** Meny-kort med foto, eller ingenting (kortets egen bakgrunn synes). */
export function LvMenuCoverImage({
  img,
  sizes,
  className = "object-cover",
}: {
  img: ImgSrc;
  sizes: string;
  className?: string;
}) {
  if (img == null) {
    return null;
  }
  return (
    <Image src={img} alt="" fill sizes={sizes} className={`z-0 ${className}`} />
  );
}
