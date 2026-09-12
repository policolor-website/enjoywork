import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promoții — Enjoy Residence Cazare",
  description:
    "Beneficiază de oferte speciale pentru cazarea angajaților. Verifică promoțiile active și solicită o ofertă personalizată.",
};

export default function PromotiiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
