import type { Metadata } from "next";
import { siteUrl, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Promoții — Camin Cazare Muncitori Ilfov",
  description:
    "Oferte speciale pentru camin cazare muncitori în Domnești, Ilfov. Tarife avantajoase pentru contracte de durată și echipe mari. Solicită o ofertă personalizată.",
  alternates: { canonical: "/promotii" },
  openGraph: {
    title: "Promoții — Camin Cazare Muncitori Ilfov | BLS HOMES",
    description:
      "Oferte speciale pentru camin cazare muncitori: tarife avantajoase pentru contracte de durată.",
    url: `${siteUrl}/promotii`,
  },
};

export default function PromotiiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Acasă", url: "/" },
              { name: "Promoții", url: "/promotii" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
