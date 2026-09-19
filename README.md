# BLS HOMES

Site de prezentare pentru **BLS HOMES** — cazare pentru muncitori în Domnești, Ilfov, lângă București. Complex construit în 2026, cu 80 de locuri în 20 de camere modern utilate. Ofertă B2B pentru companii.

## Pagini

- `/` — landing: hero 3D (living room cu asamblare la scroll), statistici, beneficii, dotări, locație, proces, galerie, FAQ, formular ofertă
- `/despre-noi` — despre complex
- `/promotii` — oferte pentru contracte de durată
- `/dotari-facilitati` — dotări camere + facilități complex
- `/galerie-foto` — galerie imagini
- `/contact` — date contact + formular

## Tehnologii

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- Framer Motion (animații)
- Three.js (hero 3D `living-room.glb` + widget telefon `phone.glb`)

## Structură date

- `src/lib/brand.ts` — date companie (telefon, email, adresă, tagline)
- `src/lib/listings.ts` — conținut: stats, beneficii, dotări, facilități, proces, FAQ, galerie

## Contact

- **Telefon:** 0785 598 779
- **Email:** contact@blshomes.ro
- **Adresă:** Strada Baboi 73, Domnești, Ilfov
- **Program:** Zilnic, 08:00 – 18:00

## Dezvoltare

```bash
npm run dev      # dev server (http://localhost:3000)
npm run build    # build producție
npm run start    # rulează build-ul
npm run lint     # ESLint
```
