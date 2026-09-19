# Plan SEO — BLS HOMES
## Keyword principal: „Camin Cazare Muncitori" (+ București & Ilfov)

Document de lucru pentru configurarea SEO. Generat: sept 2026.

**Decizie strategică:** keyword-ul țintă este fraza completă **„camin cazare muncitori"** — acoperă simultan căutările „camin muncitori" ȘI „cazare muncitori" (cele două pattern-uri dominante din nișă). Se folosește literal în title tags, H1, meta descriptions și body copy, împreună cu modifienti geografici (București, Ilfov, Domnești).

---

## 1. Audit stare actuală

### Ce există ✅
- Metadata (title + description) pe: `/`, `/despre-noi`, `/promotii`, `/dotari-facilitati`, `/galerie-foto`
- `lang="ro"` pe `<html>`
- Open Graph parțial pe homepage (fără imagine)
- Site static, rapid, Next.js 16
- FAQ pe homepage (conținut bun pentru SEO + posibil FAQ rich snippet)

### Ce lipsește ❌
| Problemă | Impact | Prioritate |
|---|---|---|
| **Cuvântul „cămin" nu apare NICĂIERI în site** | Keyword-ul țintă principal e absent din tot conținutul | CRITIC |
| Pagina `/contact` fără metadata | Nu are title/description în SERP | Mare |
| Fără `sitemap.ts` | Indexare mai lentă/incompletă | Mare |
| Fără `robots.ts` | Fără control crawl | Medie |
| Fără `metadataBase` + `canonical` | Risc duplicate content (http/https/www) | Mare |
| Fără JSON-LD structured data | Fără rich results, fără LocalBusiness în Knowledge Graph | Mare |
| Fără OG image | Previzualizări slabe la share pe Facebook/WhatsApp | Medie |
| Fără Twitter card | Idem | Mică |
| H1 homepage = „Cazare pentru muncitori" | Nu include „cămin" + zona geografică | Mare |
| Imagini fără alt-uri cu keywords | SEO imagine slab | Mică |
| Google Maps embed cu coordonate aproximative | Hartă posibil greșită + local SEO slab | Medie |
| Fără Google Business Profile | Invizibil în Local Pack / Maps | CRITIC (off-site) |

---

## 2. Cercetare cuvinte cheie (piața RO)

Extras din analiza competitorilor care rank-ează pe prima pagină.

### Primary keywords (volum + intenție directă)
- **camin cazare muncitori bucuresti** ← ținta principală (frază completă)
- **camin cazare muncitori ilfov**
- **camin cazare muncitori domnesti**
- camin muncitori bucuresti / ilfov *(variante acoperite de fraza principală)*
- cazare muncitori bucuresti / ilfov *(variante acoperite de fraza principală)*

### Secondary (intenție B2B)
- cazare angajati bucuresti / cazare angajati ilfov
- cazare echipe muncitori bucuresti
- camin muncitori pentru firme / companii
- cazare muncitori santier / constructii
- cazare muncitori termen lung
- cazare muncitori grupuri
- relocare temporara angajati
- cazare personal bucuresti

### Long-tail / modifienti de valoare
- camin muncitori ieftin bucuresti
- camin muncitori cu parcare / cu bucatarie / utilitati incluse
- camin muncitori pret / tarif lunar
- cazare muncitori langa bucuresti
- camin muncitori sector 4/5/6 (Domnești ≈ marginea S4/S5)

### Notă semantică
Google.ro tratează „camin", „cazare", „dormitor", „hostel muncitori" ca variante, dar **„camin muncitori" e termenul dominant în nișă** (toți competitorii îl folosesc). Site-ul trebuie să-l conțină literal în title, H1, meta description și body — nu doar „cazare".

---

## 3. Peisaj competitiv

| Competitor | Locație | Capacitate | Observații |
|---|---|---|---|
| **kmine.ro** | Bragadiru, Ilfov | 400+ locuri, nou 2025 | Cel mai direct competitor — tot Ilfov, tot complex nou |
| **komitat.ro** | 3 campusuri București (S3, S4, S6) | 2.500 locuri | Jucător mare, „standard hotelier 3*" |
| **cazaredodoc.ro** | Joita/Bâcu, Ilfov | 5 unități | Ilfov, dar zonă mai izolată |
| **caminmuncitori.com.ro** | Sector 5, București | hotel Zenix | Poziționare centrală |
| **caminuldemuncitoribucuresti.ro** | Sector 5 | 28 camere | Vilă, small |
| **cazaremuncitori-bucuresti.ro** | S1 + S6 | — | Menționează preț: de la 500 lei/pers/lună |

### Insight-uri de la competiție
- **Kmine** rank-ează pe exact poziționarea noastră (Ilfov, complex nou, lângă București). Diferențiatori ai noștri: Domnești vs Bragadiru, 80 locuri (mai intim, nu dormitor industrial), camere 2/4 paturi.
- Prețul de referință pe piață: ~6€/persoană/zi (anunț Kmine pe anuntul.ro), 500 lei/lună low-end.
- Toți competitorii menționează explicit: baie proprie, Wi-Fi, bucătărie, spălătorie, parcare, supraveghere 24/7 — avem deja toate în copy, dar fără keyword „camin".
- Nimeni nu pare să aibă structured data serios → oportunitate de rich results.

---

## 4. Plan de implementare

### Faza 1 — Technical SEO (cod)

1. **`metadataBase` + canonical** în `src/app/layout.tsx`
   ```ts
   metadataBase: new URL("https://caminmuncitori.ro"),
   alternates: { canonical: "/" },
   ```
2. **`src/app/sitemap.ts`** — toate cele 6 rute, lastModified, priority
3. **`src/app/robots.ts`** — allow all + link sitemap
4. **JSON-LD `LodgingBusiness`** în root layout:
   - name: BLS HOMES
   - address: Strada Baboi 73, Domnești, Ilfov (+ postalCode, addressCountry RO)
   - geo: coordonatele exacte din Google Maps
   - telephone, email, openingHours, priceRange
   - sameAs: link Facebook (de completat în brand.ts)
5. **JSON-LD `FAQPage`** pe homepage (avem deja 6 Q&A → rich snippet eligibil)
6. **`layout.tsx` pentru `/contact`** cu metadata (pagina e client component)
7. **OG image** `public/og-image.jpg` (1200×630, logo + „Cămin muncitori București & Ilfov") + `openGraph.images`
8. **Twitter card** summary_large_image

### Faza 2 — On-page (conținut)

9. **Title tags** — rescrise cu formula: `{keyword} | BLS HOMES`
   - `/`: „Cămin muncitori București & Ilfov | BLS HOMES Domnești"
   - `/despre-noi`: „Despre căminul nostru | Cazare muncitori Domnești, Ilfov"
   - `/dotari-facilitati`: „Dotări cămin muncitori | Camere 2-4 paturi, Ilfov"
   - `/galerie-foto`: „Galerie foto cămin | BLS HOMES Domnești"
   - `/promotii`: „Promoții cazare muncitori | BLS HOMES Ilfov"
   - `/contact`: „Contact | Cămin muncitori Domnești, lângă București"
10. **H1 homepage**: „Camin cazare muncitori lângă București" (acum e „Cazare pentru muncitori" — nu conține keyword-ul)
11. **Integrare „camin cazare muncitori" în copy** — hero, beneficii, FAQ (natural, nu stuffing). Ex: „Complex nou, construit în 2026" → „Camin nou de cazare pentru muncitori, construit în 2026"
12. **Alt text imagini** cu keywords: „camin muncitori domnesti camera", „complex cazare angajati ilfov" etc.
13. **Secțiune „Zone deservite"** pe homepage — mențiuni naturale: Domnești, Bragadiru, Chiajna, Militari, Sector 4/5/6 București, A0 (acoperă căutările zonale fără doorway pages)
14. **Fix Google Maps embed** — coordonatele exacte Strada Baboi 73, Domnești
15. **NAP consistency** — verificat că telefon/adresă/email sunt identice peste tot (deja centralizate în brand.ts ✓)

### Faza 3 — Off-site / Local

16. **Google Business Profile** — cea mai mare prioritate off-site:
    - Categorie: „Cămin" / „Hostel" / „Servicii de cazare"
    - Adresă + hartă + poze + telefon + program
    - Permite rank în Local Pack („camin muncitori langa mine")
17. **Listare în directoare**: anuntul.ro, publi24, olx.ro (competitorii sunt acolo), bizoo, firme.info
18. **Facebook page** — brand.ts are `social.facebook` gol; util pentru credibilitate + sameAs
19. **Search Console** — verificare proprietate + submit sitemap după deploy

---

## 5. Structura propusă title/H1 per pagină

| Pagină | Title (≤60 chars) | Keyword țintă |
|---|---|---|
| `/` | Camin Cazare Muncitori București & Ilfov \| BLS HOMES | camin cazare muncitori bucuresti + ilfov |
| `/despre-noi` | Despre noi \| Camin Cazare Muncitori Domnești | camin cazare muncitori domnesti |
| `/dotari-facilitati` | Dotări & Facilități \| Camin Cazare Muncitori Ilfov | camin cazare muncitori dotari |
| `/galerie-foto` | Galerie Foto \| Camin Cazare Muncitori Domnești | camin cazare muncitori imagini |
| `/promotii` | Promoții \| Camin Cazare Muncitori Ilfov | camin cazare muncitori promotii |
| `/contact` | Contact \| Camin Cazare Muncitori București | camin cazare muncitori contact |

---

## 6. Următorii pași

- [x] Domeniu confirmat: **caminmuncitori.ro** (EMD — exact match pentru keyword-ul țintă)
- [x] **Faza 1 implementată** (sept 2026): metadataBase + canonical, sitemap.xml, robots.txt, JSON-LD LodgingBusiness + WebSite + FAQPage + BreadcrumbList, OG/Twitter cards, metadata pe toate paginile (inclusiv layout nou pentru /contact)
- [x] **Faza 2 implementată**: H1 „Camin cazare muncitori lângă București", integrare „camin/cămin" în copy, alt-uri cu keywords, zone deservite, link intern FAQ→Contact, hartă Google Maps cu adresa exactă
- [ ] Înlocuire imagini `public/caminmuncitori/` cu poze reale ale complexului + OG image nou (momentan placeholder `caminmuncitori/4.jpg`)
- [x] Coordonatele exacte pentru Strada Baboi 73 (44.3989, 25.927584 — confirmate din Google Maps)
- [ ] Pagină Facebook? → completat `brand.social.facebook` + `sameAs` în JSON-LD
- [ ] Verificat că emailul `contact@blshomes.ro` rămâne valid sau migrat pe domeniul nou
- [ ] Faza 3 — manuală, de către client: Google Business Profile, directoare (anuntul.ro, publi24, olx), Search Console + submit sitemap
