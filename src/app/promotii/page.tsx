"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import FaqAccordion from "@/components/faq-accordion";
import { promotiiFAQ } from "@/lib/listings";
import { faqJsonLd } from "@/lib/seo";

export default function PromotiiPage() {
  return (
    <main className="pt-20">
      <section className="py-20 px-6 bg-section-gradient">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Oferte speciale</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="gold-text">Promoții</span>
            </h1>
            <p className="text-lg text-white/70">
              Beneficiază de prețurile speciale ale căminului nostru de cazare pentru muncitori, la contracte de durată.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <Sparkles size={24} className="text-gold" />
            </div>
            <h2 className="font-display text-2xl text-white mb-4">
              Momentan nu avem promoții active
            </h2>
            <p className="text-white/70 mb-8">
              Dar ne poți solicita o ofertă personalizată, adaptată numărului de angajați și perioadei de cazare.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Solicită ofertă <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="mt-20">
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
            <FaqAccordion items={promotiiFAQ} />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(promotiiFAQ)) }}
      />
    </main>
  );
}
