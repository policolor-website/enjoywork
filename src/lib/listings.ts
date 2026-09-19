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
    title: "Camin modern",
    text: "Camin de cazare construit în 2026, proiectat pentru a găzdui eficient 80 de persoane cu standarde ridicate de confort și siguranță.",
  },
  {
    icon: "bed",
    title: "Camere complet mobilate",
    text: "Camere cu 2 sau 4 paturi, mobilier nou, televizor, conexiune internet de mare viteză, aer condiționat, frigider cu congelator, baie privată, dulap.",
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
  "Camere cu 2 sau 4 paturi",
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
  { q: "Câte persoane pot fi cazate simultan?", a: "Căminul nostru dispune de 80 de locuri de cazare distribuite în 20 de camere moderne, fiecare cu baie proprie." },
  { q: "Există o perioadă minimă de contract?", a: "Da, lucrăm cu contracte de minim o lună, dar oferim condiții mai avantajoase pentru contracte de durată (3, 6 sau 12 luni)." },
  { q: "Se oferă servicii de curățenie?", a: "Da, includem curățenia zonelor comune și, la cerere, servicii de curățenie a camerelor individual." },
  { q: "Cum se face plata?", a: "Plata se efectuează lunar, prin factură. Lucrăm exclusiv cu persoane juridice (companii) care cazează angajați." },
  { q: "Există parcare pentru angajați?", a: "Da, parcul auto al căminului oferă locuri de parcare gratuite pentru toți oaspeții." },
  { q: "Zona are acces la transport public?", a: "Da, căminul din Domnești are acces facil la transport public și legături directe către București." },
];

// FAQ-uri specifice fiecărei pagini (folosite și pentru schema FAQPage)
export const despreFAQ = [
  { q: "Când a fost construit căminul BLS HOMES?", a: "Căminul a fost construit în 2026 și este complet nou — de la infrastructură și instalații, până la mobilier și dotări." },
  { q: "Cine se poate caza la BLS HOMES?", a: "Căminul este destinat exclusiv companiilor care doresc cazare pentru angajații lor — muncitori din țară sau veniți de peste hotare. Nu lucrăm cu persoane fizice." },
  { q: "Unde este localizat căminul?", a: "În Domnești, Ilfov, pe Strada Baboi 73 — la aproximativ 15 minute de București, cu acces la transport public și legături rapide către oraș." },
  { q: "Câte persoane poate găzdui căminul?", a: "Căminul are 80 de locuri de cazare, distribuite în 20 de camere moderne cu 2 sau 4 paturi, fiecare cu baie proprie." },
];

export const dotariFAQ = [
  { q: "Câte paturi are fiecare cameră?", a: "Camerele au 2 sau 4 paturi, astfel încât echipele pot fi distribuite flexibil, în funcție de nevoile companiei." },
  { q: "Sunt incluse utilitățile în preț?", a: "Da, tariful include curentul, apa, căldura și internetul Wi-Fi de mare viteză. Nu există costuri suplimentare ascunse." },
  { q: "Pot găti locatarii la cămin?", a: "Da, căminul dispune de bucătării comune complet utilate, iar fiecare cameră are frigider mare cu congelator." },
  { q: "Cum funcționează spălătoria?", a: "Spălătoria și uscătoria sunt self-service, disponibile în complex pentru toți locatarii." },
  { q: "Este complexul supravegheat?", a: "Da, căminul are sistem de supraveghere video 24/7 și acces controlat la clădire, pentru siguranța angajaților." },
];

export const galerieFAQ = [
  { q: "Pot vedea camerele înainte de a semna contractul?", a: "Da, organizăm vizionări la fața locului în care puteți vedea camerele, bucătăriile comune și toate facilitățile căminului." },
  { q: "Arată camerele ca în imaginile prezentate?", a: "Camerele sunt mobilate și utilate conform standardului prezentat — mobilier nou, baie proprie, TV, Wi-Fi și aer condiționat." },
  { q: "Cum programez o vizionare?", a: "Ne puteți suna la 0785 598 779 sau completa formularul de contact — stabilim împreună ziua și ora vizitei." },
];

export const promotiiFAQ = [
  { q: "Există reduceri pentru contracte de durată?", a: "Da, oferim condiții mai avantajoase pentru contractele de 3, 6 sau 12 luni față de perioada minimă de o lună." },
  { q: "Prețul depinde de numărul de angajați cazați?", a: "Da, tariful se stabilește în funcție de numărul de persoane și durata contractului — cu cât echipa e mai mare, cu atât oferta e mai bună." },
  { q: "Cum primesc o ofertă personalizată?", a: "Ne contactați cu numărul de angajați și perioada dorită, iar în 24 de ore primiți o propunere de preț adaptată." },
];

export const contactFAQ = [
  { q: "În cât timp primim oferta personalizată?", a: "Răspundem în maximum 24 de ore lucrătoare de la primirea cererii, cu o propunere adaptată numărului de angajați și perioadei." },
  { q: "Ce informații sunt necesare pentru o ofertă?", a: "Ne ajută să știm numărul de angajați, perioada estimată de cazare și eventuale cerințe specifice ale echipei." },
  { q: "Lucrați și cu persoane fizice?", a: "Nu, serviciile noastre sunt dedicate exclusiv persoanelor juridice — companii care cazează angajați." },
  { q: "Se poate programa o vizionare a căminului?", a: "Da, ne puteți suna la 0785 598 779 sau completa formularul și stabilim o vizită la complexul din Domnești." },
];

// Date pentru galeria foto
export const galerieCazare = [
  { src: "/caminmuncitori/1.jpg", alt: "Camin cazare muncitori Domnești — fațadă complex BLS HOMES" },
  { src: "/caminmuncitori/2.jpg", alt: "Camin muncitori Ilfov — intrare principală" },
  { src: "/caminmuncitori/3.jpg", alt: "Cazare muncitori lângă București — curte interioară" },
  { src: "/caminmuncitori/4.jpg", alt: "Camin cazare muncitori — cameră modernă" },
  { src: "/caminmuncitori/5.webp", alt: "Camin muncitori Domnești — facilități comune" },
];
