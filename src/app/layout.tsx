import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Phone3D from "@/components/phone-3d";
import {
  siteUrl,
  siteName,
  ogImageUrl,
  keywords,
  lodgingBusinessJsonLd,
  webSiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Camin Cazare Muncitori București & Ilfov | BLS HOMES",
    template: "%s | BLS HOMES",
  },
  description:
    "Camin cazare muncitori în Domnești, Ilfov, lângă București. Complex construit în 2026: 80 de locuri, 20 de camere modern utilate cu baie proprie, Wi-Fi, aer condiționat. Ofertă personalizată B2B. Telefon: 0785 598 779.",
  keywords,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: siteUrl,
    siteName: `${siteName} — Camin Cazare Muncitori`,
    title: "Camin Cazare Muncitori București & Ilfov | BLS HOMES",
    description:
      "Complex cu 80 de locuri, 20 de camere modern utilate în Domnești, Ilfov. Soluție cazare B2B pentru companii.",
    images: [
      {
        url: ogImageUrl,
        width: 1600,
        height: 1066,
        alt: "Camin cazare muncitori BLS HOMES Domnești, Ilfov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camin Cazare Muncitori București & Ilfov | BLS HOMES",
    description:
      "Complex cu 80 de locuri, 20 de camere modern utilate în Domnești, Ilfov.",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..700&family=Inter:wght@300..700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              lodgingBusinessJsonLd(),
              webSiteJsonLd(),
            ]),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-section-gradient text-white font-body relative">
        <Header />
        <div className="relative z-10 flex flex-col flex-1">
          {children}
        </div>
        <Footer />
        <Phone3D />
      </body>
    </html>
  );
}
