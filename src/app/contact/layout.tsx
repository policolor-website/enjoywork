import type { Metadata } from "next";
import { siteUrl, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Camin Cazare Muncitori București",
  description:
    "Contactează BLS HOMES pentru camin cazare muncitori în Domnești, Ilfov, lângă București. Telefon: 0785 598 779. Solicită ofertă personalizată pentru compania ta — răspundem în 24 de ore.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Camin Cazare Muncitori București | BLS HOMES",
    description:
      "Solicită ofertă personalizată pentru camin cazare muncitori în Domnești, Ilfov. Răspundem în 24 de ore.",
    url: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Acasă", url: "/" },
              { name: "Contact", url: "/contact" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
