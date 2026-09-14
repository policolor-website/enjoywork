import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Phone3D from "@/components/phone-3d";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLS HOMES | Cazare muncitori lângă București",
  description: "Cazare pentru muncitori în Domnești, Ilfov. Complex construit în 2026, cu 80 de locuri, 20 de camere modern utilate. Ofertă personalizată B2B. Telefon: 0785 598 779.",
  keywords: [
    "cazare muncitori", "cazare angajati Bucuresti", "cazare Domnesti",
    "complex cazare Ilfov", "cazare B2B", "dormitoare muncitori",
  ],
  openGraph: {
    title: "BLS HOMES | Cazare muncitori Domnești, Ilfov",
    description: "Complex cu 80 de locuri, 20 de camere modern utilate. Soluție cazare B2B în Domnești, Ilfov.",
    locale: "ro_RO",
    type: "website",
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
