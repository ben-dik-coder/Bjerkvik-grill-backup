import type { Metadata } from "next";

/** Interne og forhåndsvisnings-URL-er — ikke i søkemotorindeks */
export const INTERNAL_PREVIEW_ROBOTS: NonNullable<Metadata["robots"]> = {
  index: false,
  follow: false,
};
