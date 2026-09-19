// ============================================
// SEO CONFIG + JSON-LD BUILDERS
// ============================================

import { brand } from "@/lib/brand";

export const siteUrl = "https://caminmuncitori.ro";
export const siteName = "BLS HOMES";
export const ogImagePath = "/caminmuncitori/4.jpg";
export const ogImageUrl = `${siteUrl}${ogImagePath}`;

export const keywords = [
  "camin cazare muncitori",
  "camin muncitori bucuresti",
  "cazare muncitori bucuresti",
  "camin muncitori ilfov",
  "cazare muncitori ilfov",
  "camin muncitori domnesti",
  "cazare angajati bucuresti",
  "cazare echipe muncitori",
  "camin muncitori pentru firme",
  "cazare muncitori termen lung",
];

// --------------------------------------------
// LodgingBusiness — schema principală (global)
// --------------------------------------------
export function lodgingBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${siteUrl}/#business`,
    name: `${siteName} — Camin Cazare Muncitori`,
    description: brand.description,
    url: siteUrl,
    telephone: "+40785598779",
    email: brand.email,
    image: ogImageUrl,
    logo: `${siteUrl}/logoblshome.png`,
    priceRange: "€€",
    currenciesAccepted: "RON",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Baboi 73",
      addressLocality: "Domnești",
      addressRegion: "Ilfov",
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.3989,
      longitude: 25.927584,
    },
    hasMap: "https://www.google.com/maps/search/?api=1&query=44.3989,25.927584",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    numberOfRooms: {
      "@type": "QuantitativeValue",
      value: 20,
    },
    amenityFeature: [
      "Wi-Fi gratuit",
      "Aer condiționat",
      "Baie proprie",
      "Televizor",
      "Frigider cu congelator",
      "Bucătării comune utilate",
      "Spălătorie self-service",
      "Parcare gratuită",
      "Supraveghere video 24/7",
      "Curățenie zone comune",
    ].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    areaServed: ["Domnești", "Ilfov", "București"],
  };
}

// --------------------------------------------
// WebSite — schema site (global)
// --------------------------------------------
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: `${siteName} — Camin Cazare Muncitori București & Ilfov`,
    url: siteUrl,
    inLanguage: "ro-RO",
    publisher: { "@id": `${siteUrl}/#business` },
  };
}

// --------------------------------------------
// FAQPage — pentru homepage
// --------------------------------------------
export function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

// --------------------------------------------
// BreadcrumbList — per pagină
// --------------------------------------------
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}
