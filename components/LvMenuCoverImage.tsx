import Image from "next/image";
import type { MenuKortCoverImgSrc } from "@/lib/layout-valg/menu-data";

/** Meny-kort med foto, eller ingenting (kortets egen bakgrunn synes). */
export function LvMenuCoverImage({
  img,
  sizes,
  className = "object-cover",
}: {
  img: MenuKortCoverImgSrc;
  sizes: string;
  className?: string;
}) {
  if (img == null) {
    return null;
  }
  return (
    <Image src={img} alt="" fill sizes={sizes} className={`z-0 ${className}`} unoptimized />
  );
}
