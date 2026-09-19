import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BLS HOMES — Camin Cazare Muncitori București & Ilfov",
    short_name: "BLS HOMES",
    description:
      "Camin cazare muncitori în Domnești, Ilfov — 80 locuri, 20 camere modern utilate. Soluție B2B pentru companii.",
    start_url: "/",
    display: "browser",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: "ro",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
