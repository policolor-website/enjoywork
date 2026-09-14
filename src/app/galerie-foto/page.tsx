"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galerieCazare } from "@/lib/listings";

export default function GalerieFotoPage() {
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Imagini complex</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Galerie <span className="gold-text">foto</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Imagini ale unității noastre de cazare — camere, zone comune și facilități.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galerieCazare.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/70">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/#formular"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Solicită ofertă <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
