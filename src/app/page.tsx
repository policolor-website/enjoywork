"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Building2, BedDouble, Tag, MapPin, Check, Phone, Mail,
  Send, Users, Wifi, Snowflake, Tv, Refrigerator, Shirt, ShieldCheck,
  Clock, ChevronDown, ChevronUp, Car, Sparkles,
} from "lucide-react";
import BuildingHero3D from "@/components/building-hero-3d";
import { brand } from "@/lib/brand";
import {
  cazareStats, cazareBeneficii, cazareDotari, cazareFacilitati,
  cazareProces, cazareFAQ, galerieCazare,
} from "@/lib/listings";

const iconMap: Record<string, any> = {
  building: Building2,
  bed: BedDouble,
  tag: Tag,
  map: MapPin,
};

const dotareIcons: Record<string, any> = {
  "Camere cu 2, 3 sau 4 paturi": BedDouble,
  "Baie proprie în fiecare cameră": ShieldCheck,
  "Mobilier nou": Building2,
  "Spații de depozitare generoase": Shirt,
  "Televizor și Wi-Fi gratuit": Wifi,
  "Frigider mare cu congelator": Refrigerator,
  "Lenjerie completă (pernă + pilotă)": BedDouble,
  "Aer condiționat": Snowflake,
  "Plasă de țânțari la ferestre": ShieldCheck,
};

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      {/* ============================================ */}
      {/* HERO 3D — Living room animation (400vh container, sticky hero) */}
      {/* Hero stays pinned for 300vh of scroll while animation plays, */}
      {/* then releases and content sections appear below. */}
      {/* ============================================ */}
      <div className="relative" style={{ height: "400vh" }}>
        <section className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center px-6 bg-surface">
          <BuildingHero3D />
        <div className="relative z-10 pointer-events-none w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Belsamen Work</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-ink mb-6 drop-shadow-2xl">
              Cazare pentru <span className="gold-text">muncitori</span>
            </h1>
            <p className="text-lg text-ink/80 max-w-2xl mx-auto mb-8 drop-shadow-lg">
              Complex nou, construit în 2026, în Domnești, Ilfov. 80 de locuri de cazare în camere modern utilate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
              <a
                href="#formular"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
              >
                Solicită ofertă <ArrowRight size={18} />
              </a>
              <a
                href={`tel:${brand.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 px-8 py-4 glass text-ink font-semibold rounded-lg hover:border-gold/50 transition-all duration-300"
              >
                <Phone size={16} /> {brand.phone}
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-gold/80 text-xs tracking-[0.3em] uppercase"
          >
            Scroll pentru a explora
          </motion.div>
        </div>
      </section>
      </div>

      {/* ============================================ */}
      {/* STATISTICI */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cazareStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold gold-text mb-2">{stat.value}</p>
                <p className="text-xs text-ash tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BENEFICII */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">De ce să ne alegi</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">Avantajele cazării noastre</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cazareBeneficii.map((b, i) => {
              const Icon = iconMap[b.icon] || Building2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  className="glass rounded-2xl p-6 hover:border-gold/20 transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <span className="font-display text-2xl font-bold text-stone">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink mb-3">{b.title}</h3>
                  <p className="text-xs text-ash leading-relaxed">{b.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DOTĂRI + FACILITĂȚI */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Echipare completă</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">Dotări și facilități</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <BedDouble size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">Dotări camere</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cazareDotari.map((d, i) => {
                  const Icon = dotareIcons[d] || Check;
                  return (
                    <div key={i} className="flex items-start gap-2 text-sm text-ash">
                      <Icon size={16} className="text-gold mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Building2 size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">Facilități complex</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cazareFacilitati.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-ash">
                    <Check size={16} className="text-gold mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROCES PAS CU PAS */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">De la cerere la cazare</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">Cum funcționează</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cazareProces.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                className="glass rounded-2xl p-6 hover:border-gold/20 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-3xl font-bold gold-text">{step.num}</span>
                  <div className="h-px flex-1 bg-gold/20" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink mb-3">{step.title}</h3>
                <p className="text-xs text-ash leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GALERIE */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Imagini complex</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">Galerie foto</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galerieCazare.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-xl overflow-hidden aspect-square group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/galerie-foto"
              className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all"
            >
              Vezi toate imaginile <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* LOCATIE */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Locație strategică</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
                Domnești, Ilfov — <span className="gold-text">acces facil</span> la București
              </h2>
              <p className="text-lg text-ash leading-relaxed mb-6">
                Complexul se află în Domnești, Ilfov — cu acces direct la transport public și legături rapide către București.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Transport public — 5 min", "Acces auto București — 15 min",
                  "Magazine locale — 5 min", "Stație benzină — 3 min",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-ash">
                    <MapPin size={14} className="text-gold shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.google.ro/maps/dir//Domnesti,+Ilfov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all"
              >
                Cum ajungi? <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="rounded-2xl overflow-hidden glass"
            >
              <img
                src="/belsamen/2.jpg"
                alt="Locație cazare Domnești"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Întrebări frecvente</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">FAQ</h2>
          </motion.div>

          <div className="space-y-4">
            {cazareFAQ.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <h3 className="font-display text-base font-bold text-ink">{faq.q}</h3>
                  {openFAQ === i ? (
                    <ChevronUp size={20} className="text-gold shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gold shrink-0" />
                  )}
                </button>
                {openFAQ === i && (
                  <div className="px-6 pb-6 text-sm text-ash leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FORMULAR OFERTĂ */}
      {/* ============================================ */}
      <section id="formular" className="py-24 px-6 bg-surface">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Ofertă personalizată</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">
              Solicită <span className="gold-text">ofertă</span>
            </h2>
            <p className="text-lg text-ash">
              Completează formularul și primești o propunere adaptată nevoilor companiei tale în 24 de ore.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-2xl p-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <Send size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">Cererea a fost trimisă!</h3>
              <p className="text-ash">Te contactăm în cel mai scurt timp cu oferta personalizată.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="glass rounded-2xl p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-ash mb-2">Nume companie *</label>
                  <input type="text" required className="w-full bg-white border border-gold/30 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors" placeholder="Compania SRL" />
                </div>
                <div>
                  <label className="block text-sm text-ash mb-2">Persoana de contact *</label>
                  <input type="text" required className="w-full bg-white border border-gold/30 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors" placeholder="Numele tău" />
                </div>
                <div>
                  <label className="block text-sm text-ash mb-2">Telefon *</label>
                  <input type="tel" required className="w-full bg-white border border-gold/30 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors" placeholder="07xx xxx xxx" />
                </div>
                <div>
                  <label className="block text-sm text-ash mb-2">E-mail *</label>
                  <input type="email" required className="w-full bg-white border border-gold/30 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors" placeholder="email@companie.ro" />
                </div>
                <div>
                  <label className="block text-sm text-ash mb-2">Număr angajați *</label>
                  <input type="number" required min="1" className="w-full bg-white border border-gold/30 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors" placeholder="ex: 20" />
                </div>
                <div>
                  <label className="block text-sm text-ash mb-2">Perioada estimată *</label>
                  <select required className="w-full bg-white border border-gold/30 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors">
                    <option value="" className="bg-ink">Selectează...</option>
                    <option value="1luna" className="bg-ink">1 lună</option>
                    <option value="3luni" className="bg-ink">3 luni</option>
                    <option value="6luni" className="bg-ink">6 luni</option>
                    <option value="12luni" className="bg-ink">12 luni</option>
                    <option value="nedeterminat" className="bg-ink">Nedeterminată</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-ash mb-2">Detalii suplimentare</label>
                <textarea rows={4} className="w-full bg-white border border-gold/30 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors resize-none" placeholder="Cerințe specifice, data estimată de mutare, etc." />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" required id="gdpr-cazare" className="mt-1" />
                <label htmlFor="gdpr-cazare" className="text-xs text-stone">
                  Sunt de acord cu prelucrarea datelor cu caracter personal conform{" "}
                  <Link href="/contact" className="text-gold hover:underline">politicii de confidențialitate</Link>.
                </label>
              </div>
              <button type="submit" className="w-full py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors flex items-center justify-center gap-2">
                Trimite cererea <Send size={16} />
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA */}
      {/* ============================================ */}
      <section className="py-32 px-6 bg-canvas">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
            Ai întrebări? <span className="gold-text">Sună-ne</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Echipa noastră îți răspunde la orice întrebare despre serviciile de cazare pentru angajați.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-gold text-lg font-bold">
              <Phone size={18} /> {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-gold text-lg font-bold">
              <Mail size={18} /> {brand.email}
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-lg"
          >
            Contactează-ne <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
