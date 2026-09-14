// ============================================
// ENJOY RESIDENCE — Date serviciu cazare muncitori
// ============================================

export interface CazareFeature {
  icon: string;
  title: string;
  text: string;
}

export const cazareStats = [
  { value: "80", label: "Locuri de cazare" },
  { value: "20", label: "Camere moderne" },
  { value: "2026", label: "An construcție" },
  { value: "NOU", label: "Mobilier" },
];

export const cazareBeneficii: CazareFeature[] = [
  {
    icon: "building",
    title: "Complex modern",
    text: "Complex construit în 2026, proiectat pentru a găzdui eficient 80 de persoane cu standarde ridicate de confort și siguranță.",
  },
  {
    icon: "bed",
    title: "Camere complet mobilate",
    text: "Camere cu 2, 3 sau 4 paturi, mobilier nou, televizor, conexiune internet de mare viteză, aer condiționat, frigider cu congelator, baie privată, dulap.",
  },
  {
    icon: "tag",
    title: "Tarife flexibile",
    text: "Prețul se stabilește în funcție de numărul de angajați cazați și durata contractului. Oferim pachete personalizate pentru companii, indiferent de dimensiune.",
  },
  {
    icon: "map",
    title: "Locație strategică",
    text: "Domnești, Ilfov — acces facil la București, cu legături directe la transport public și magazine în imediata vecinătate.",
  },
];

export const cazareDotari = [
  "Camere cu 2, 3 sau 4 paturi",
  "Baie proprie în fiecare cameră",
  "Mobilier nou",
  "Spații de depozitare generoase",
  "Televizor și Wi-Fi gratuit",
  "Frigider mare cu congelator",
  "Lenjerie completă (pernă + pilotă)",
  "Aer condiționat",
];

export const cazareFacilitati = [
  "Bucătării complet utilate (zone comune)",
  "Spălătorie și uscătorie self-service",
  "Curte interioară spațioasă",
  "Parcare gratuită pentru oaspeți",
  "Sistem de supraveghere video 24/7",
  "Servicii de curățenie camere și zone comune",
  "Acces controlat la clădire",
  "Administrare pe loc a problemelor tehnice",
];

export const cazareProces = [
  { num: "01", title: "Discuție inițială", text: "Ne contactezi cu detaliile: număr de angajați, perioada estimată de cazare și cerințe specifice. Răspundem în 24 de ore." },
  { num: "02", title: "Ofertă personalizată", text: "Primești o propunere de preț adaptată volumului și duratei contractului, cu toate dotările și serviciile incluse." },
  { num: "03", title: "Vizionare", text: "Organizăm o vizită la complex pentru a vedea camerele, facilitățile comune și zona. Te convingi pe loc de standarde." },
  { num: "04", title: "Contract și cazare", text: "Semnăm contractul și pregătim camerele. Angajații se mută imediat, cu suport administrativ pe toată perioada." },
];

export const cazareFAQ = [
  { q: "Câte persoane pot fi cazate simultan?", a: "Complexul dispune de 80 de locuri de cazare distribuite în 20 de camere moderne, fiecare cu baie proprie." },
  { q: "Există o perioadă minimă de contract?", a: "Da, lucrăm cu contracte de minim o lună, dar oferim condiții mai avantajoase pentru contracte de durată (3, 6 sau 12 luni)." },
  { q: "Se oferă servicii de curățenie?", a: "Da, includem curățenia zonelor comune și, la cerere, servicii de curățenie a camerelor individual." },
  { q: "Cum se face plata?", a: "Plata se efectuează lunar, prin factură. Lucrăm exclusiv cu persoane juridice (companii) care cazează angajați." },
  { q: "Există parcare pentru angajați?", a: "Da, parcul auto al complexului oferă locuri de parcare gratuite pentru toți oaspeții." },
  { q: "Zona are acces la transport public?", a: "Da, complexul din Domnești are acces facil la transport public și legături directe către București." },
];

// Date pentru galeria foto
export const galerieCazare = [
  { src: "/belsamen/1.jpg", alt: "Fațadă complex cazare" },
  { src: "/belsamen/2.jpg", alt: "Intrare principală" },
  { src: "/belsamen/3.jpg", alt: "Curte interioară" },
  { src: "/belsamen/4.jpg", alt: "Cameră modernă" },
  { src: "/belsamen/5.webp", alt: "Facilități comune" },
];
