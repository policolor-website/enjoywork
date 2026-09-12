"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Users, Building2, Heart } from "lucide-react";
import { brand } from "@/lib/brand";
import { cazareStats } from "@/lib/listings";

const values = [
  { icon: Target, title: "Misiunea noastră", text: "Să oferim companiilor o soluție completă de relocare a angajaților, cu standarde ridicate de confort, siguranță și eficiență." },
  { icon: Users, title: "Oamenii pe primul loc", text: "Calitatea cazării influențează direct productivitatea. De aceea investim în camere moderne, curate și complet utilate." },
  { icon: Building2, title: "Infrastructură nouă", text: "Complex construit în 2026, proiectat pentru a găzdui 80 de persoane în 20 de camere, în condiții optime." },
  { icon: Heart, title: "Parteneriat de lungă durată", text: "Lucrăm cu companii care au strategii de fidelizare a forței de muncă. Oferim contracte flexibile și suport administrativ continuu." },
];

export default function DespreNoiPage() {
  return (
    <main className="pt-20">
      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Despre noi</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">
              Câteva cuvinte pentru a ne <span className="gold-text">cunoaște</span>
            </h1>
            <p className="text-lg text-ash leading-relaxed">
              Criza forței de muncă din România ne-a convins că oamenii sunt cea mai importantă resursă a companiilor. De aceea am construit un spațiu de cazare modern pentru angajații veniți de peste hotare, dar și din țară, oferind camere spațioase, complet utilate, care asigură un nivel ridicat de confort.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 mb-16"
          >
            <p className="text-ash leading-relaxed mb-4">
              BLS Homes oferă soluția de relocare temporară a angajaților, punând la dispoziție un cămin nou, construit în 2026, localizat în Domnești, Ilfov.
            </p>
            <p className="text-ash leading-relaxed">
              Complexul dispune de 80 de locuri de cazare în 20 de camere modern utilate, cu acces facil la București și la toate facilitățile necesare angajaților tăi.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {cazareStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl font-bold gold-text mb-2">{stat.value}</p>
                <p className="text-xs text-ash tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink mb-3">{v.title}</h3>
                  <p className="text-sm text-ash leading-relaxed">{v.text}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Contactează-ne <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
