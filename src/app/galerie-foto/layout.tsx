import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie foto — Belsamen Work Cazare",
  description:
    "Imagini ale complexului de cazare Belsamen Work: camere, facilități comune, curte, parcare. Vezi condițiile reale înainte de a solicita oferta.",
};

export default function GalerieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
