import type { Metadata } from "next";
import { siteUrl, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Despre noi — Camin Cazare Muncitori Domnești",
  description:
    "BLS HOMES: camin cazare muncitori în Domnești, Ilfov. Complex construit în 2026, cu 80 de locuri în 20 de camere modern utilate, la 15 minute de București.",
  alternates: { canonical: "/despre-noi" },
  openGraph: {
    title: "Despre noi — Camin Cazare Muncitori Domnești | BLS HOMES",
    description:
      "Camin cazare muncitori în Domnești, Ilfov: 80 de locuri, 20 de camere modern utilate.",
    url: `${siteUrl}/despre-noi`,
  },
};

export default function DespreNoiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Acasă", url: "/" },
              { name: "Despre noi", url: "/despre-noi" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
