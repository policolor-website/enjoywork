"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BedDouble, Building2, Check, Wifi, Snowflake, Tv, Refrigerator,
  Shirt, ShieldCheck, Car, Camera, Sparkles, ArrowRight, Wind,
} from "lucide-react";
import {
  cazareDotari, cazareFacilitati, dotariFAQ,
} from "@/lib/listings";
import FaqAccordion from "@/components/faq-accordion";
import { faqJsonLd } from "@/lib/seo";

const dotareIcons: Record<string, any> = {
  "Camere cu 2 sau 4 paturi": BedDouble,
  "Baie proprie în fiecare cameră": Wind,
  "Mobilier nou": Building2,
  "Spații de depozitare generoase": Shirt,
  "Televizor și Wi-Fi gratuit": Wifi,
  "Frigider mare cu congelator": Refrigerator,
  "Lenjerie completă (pernă + pilotă)": BedDouble,
  "Aer condiționat": Snowflake,
};

const facilitatiIcons: Record<string, any> = {
  "Bucătării complet utilate (zone comune)": Building2,
  "Spălătorie și uscătorie self-service": Shirt,
  "Curte interioară spațioasă": Sparkles,
  "Parcare gratuită pentru oaspeți": Car,
  "Sistem de supraveghere video 24/7": Camera,
  "Servicii de curățenie camere și zone comune": Check,
  "Acces controlat la clădire": ShieldCheck,
  "Administrare pe loc a problemelor tehnice": Check,
};

export default function DotariFacilitatiPage() {
  return (
    <main className="pt-20">
      <section className="py-20 px-6 bg-section-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Echipare completă</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Dotări și <span className="gold-text">facilități</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Tot ce este necesar pentru un confort optim în căminul de cazare pentru muncitori, atât în cameră, cât și în zonele comune.
            </p>
          </motion.div>

          <div className="space-y-8 mb-16">
            {/* Rând 1: imagine stânga + Dotări camere dreapta */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="glass rounded-2xl p-4 sm:p-6 flex flex-col justify-center"
              >
                <img
                  src="/caminmuncitori/camerablshomes.webp"
                  alt="Plan unitate camin cazare muncitori BLS HOMES — 2 camere cu 4 paturi, 2 băi, hol și spațiu comun"
                  className="w-full h-auto rounded-xl"
                />
                <p className="text-center text-xs text-white/60 mt-4">
                  Plan unitate: 2 camere × 4 persoane, 2 băi, hol cu spațiu comun
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="glass rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <BedDouble size={24} className="text-gold" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white">Dotări camere</h2>
                </div>
                <div className="space-y-4">
                  {cazareDotari.map((d, i) => {
                    const Icon = dotareIcons[d] || Check;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gold/5 flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-gold" />
                        </div>
                        <div className="pt-2">
                          <p className="text-sm text-white">{d}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Rând 2: Facilități cămin stânga + imagine dreapta */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="glass rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Building2 size={24} className="text-gold" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white">Facilități cămin</h2>
                </div>
                <div className="space-y-4">
                  {cazareFacilitati.map((f, i) => {
                    const Icon = facilitatiIcons[f] || Check;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gold/5 flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-gold" />
                        </div>
                        <div className="pt-2">
                          <p className="text-sm text-white">{f}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="glass rounded-2xl overflow-hidden flex items-center"
              >
                <img
                  src="/caminmuncitori/5.webp"
                  alt="Facilități comune camin cazare muncitori BLS HOMES — bucătării, spălătorie, parcare"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="mb-16 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Întrebări frecvente</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold title-gradient">FAQ</h2>
            </motion.div>
            <FaqAccordion items={dotariFAQ} />
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Solicită ofertă <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(dotariFAQ)) }}
      />
    </main>
  );
}
