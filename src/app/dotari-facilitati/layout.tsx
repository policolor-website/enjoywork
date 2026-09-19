import type { Metadata } from "next";
import { siteUrl, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dotări și facilități — Camin Cazare Muncitori Ilfov",
  description:
    "Camin cazare muncitori cu camere de 2 sau 4 paturi, baie proprie, Wi-Fi, aer condiționat, frigider, TV, mobilier nou. Bucătării comune, spălătorie, parcare, supraveghere video 24/7.",
  alternates: { canonical: "/dotari-facilitati" },
  openGraph: {
    title: "Dotări și facilități — Camin Cazare Muncitori Ilfov | BLS HOMES",
    description:
      "Camere de 2 sau 4 paturi, baie proprie, Wi-Fi, aer condiționat, bucătării comune, parcare, supraveghere 24/7.",
    url: `${siteUrl}/dotari-facilitati`,
  },
};

export default function DotariLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Acasă", url: "/" },
              { name: "Dotări și facilități", url: "/dotari-facilitati" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
