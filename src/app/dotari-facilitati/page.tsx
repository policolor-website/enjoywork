"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BedDouble, Building2, Check, Wifi, Snowflake, Tv, Refrigerator,
  Shirt, ShieldCheck, Car, Camera, Sparkles, ArrowRight, Wind,
} from "lucide-react";
import {
  cazareDotari, cazareFacilitati,
} from "@/lib/listings";

const dotareIcons: Record<string, any> = {
  "Camere cu 2, 3 sau 4 paturi": BedDouble,
  "Baie proprie în fiecare cameră": Wind,
  "Mobilier nou": Building2,
  "Spații de depozitare generoase": Shirt,
  "Televizor și Wi-Fi gratuit": Wifi,
  "Frigider mare cu congelator": Refrigerator,
  "Lenjerie completă (pernă + pilotă)": BedDouble,
  "Aer condiționat": Snowflake,
  "Plasă de țânțari la ferestre": ShieldCheck,
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
      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Echipare completă</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">
              Dotări și <span className="gold-text">facilități</span>
            </h1>
            <p className="text-lg text-ash max-w-2xl mx-auto">
              Tot ce este necesar pentru un confort optim al angajaților tăi, atât în cameră, cât și în zonele comune.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <BedDouble size={24} className="text-gold" />
                </div>
                <h2 className="font-display text-2xl font-bold text-ink">Dotări camere</h2>
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
                        <p className="text-sm text-ink">{d}</p>
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
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Building2 size={24} className="text-gold" />
                </div>
                <h2 className="font-display text-2xl font-bold text-ink">Facilități complex</h2>
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
                        <p className="text-sm text-ink">{f}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Link
              href="/#formular"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Solicită ofertă <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
