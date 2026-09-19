import type { Metadata } from "next";
import { siteUrl, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Galerie foto — Camin Cazare Muncitori Domnești",
  description:
    "Imagini ale căminului de cazare muncitori BLS HOMES din Domnești, Ilfov: camere, facilități comune, curte, parcare. Vezi condițiile reale înainte de a solicita oferta.",
  alternates: { canonical: "/galerie-foto" },
  openGraph: {
    title: "Galerie foto — Camin Cazare Muncitori Domnești | BLS HOMES",
    description:
      "Imagini ale căminului de cazare muncitori din Domnești, Ilfov: camere, facilități comune, curte, parcare.",
    url: `${siteUrl}/galerie-foto`,
  },
};

export default function GalerieLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Acasă", url: "/" },
              { name: "Galerie foto", url: "/galerie-foto" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
