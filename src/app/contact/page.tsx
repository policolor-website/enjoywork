"use client";

import { Phone, Mail, MapPin, Clock, Send, Building2, Users } from "lucide-react";
import { useState } from "react";
import { brand } from "@/lib/brand";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="pt-20">
      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Contact</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-ink mb-6">
              Contactează-<span className="gold-text">ne</span>
            </h1>
            <p className="text-lg text-ash max-w-2xl mx-auto">
              Pentru orice informație despre serviciile noastre de cazare pentru muncitori, nu ezita să ne contactezi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Date contact */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gold mb-6">Date de contact</h2>
              <div className="space-y-4">
                <div className="glass rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Building2 size={18} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-display text-sm font-bold text-ink mb-1">Companie</h3>
                      <p className="text-sm text-ash">{brand.legalName}</p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-display text-sm font-bold text-ink mb-1">Adresă</h3>
                      <p className="text-sm text-ash">{brand.address}</p>
                      <p className="text-sm text-gold mt-1">{brand.workArea}</p>
                      <a
                        href="https://www.google.ro/maps/dir//Domnesti,+Ilfov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gold hover:underline mt-2 inline-block"
                      >
                        Vezi pe hartă →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Phone size={18} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-display text-sm font-bold text-ink mb-1">Telefon</h3>
                      <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="text-sm text-ash hover:text-gold transition-colors block">{brand.phone}</a>
                      <a href={`tel:${brand.agentPhone}`} className="text-sm text-ash hover:text-gold transition-colors block">Agent: {brand.agentPhone}</a>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Mail size={18} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-display text-sm font-bold text-ink mb-1">Email</h3>
                      <a href={`mailto:${brand.email}`} className="text-sm text-ash hover:text-gold transition-colors block">{brand.email}</a>
                      <a href={`mailto:${brand.agentEmail}`} className="text-sm text-ash hover:text-gold transition-colors block">Agent: {brand.agentEmail}</a>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Clock size={18} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-display text-sm font-bold text-ink mb-1">Program de lucru</h3>
                      <p className="text-sm text-ash">{brand.program}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formular */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gold mb-6">Solicită ofertă</h2>
              {submitted ? (
                <div className="glass rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                    <Send size={24} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-ink mb-2">Cererea a fost trimisă!</h3>
                  <p className="text-ash">Te contactăm în cel mai scurt timp cu oferta personalizată.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="glass rounded-2xl p-8 space-y-5"
                >
                  <div>
                    <label className="block text-sm text-ash mb-2">Nume companie *</label>
                    <input type="text" required className="w-full bg-ink/50 border border-gold/10 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors" placeholder="Compania SRL" />
                  </div>
                  <div>
                    <label className="block text-sm text-ash mb-2">Persoana de contact *</label>
                    <input type="text" required className="w-full bg-ink/50 border border-gold/10 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors" placeholder="Numele tău" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-ash mb-2">Telefon *</label>
                      <input type="tel" required className="w-full bg-ink/50 border border-gold/10 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors" placeholder="07xx xxx xxx" />
                    </div>
                    <div>
                      <label className="block text-sm text-ash mb-2">E-mail *</label>
                      <input type="email" required className="w-full bg-ink/50 border border-gold/10 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors" placeholder="email@companie.ro" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-ash mb-2">Număr angajați *</label>
                      <input type="number" required min="1" className="w-full bg-ink/50 border border-gold/10 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors" placeholder="ex: 20" />
                    </div>
                    <div>
                      <label className="block text-sm text-ash mb-2">Perioada estimată *</label>
                      <select required className="w-full bg-ink/50 border border-gold/10 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors">
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
                    <textarea rows={4} className="w-full bg-ink/50 border border-gold/10 rounded-lg px-4 py-3 text-ink focus:border-gold/40 focus:outline-none transition-colors resize-none" placeholder="Cerințe specifice, data estimată de mutare, etc." />
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" required id="gdpr-contact" className="mt-1" />
                    <label htmlFor="gdpr-contact" className="text-xs text-stone">
                      Sunt de acord cu prelucrarea datelor cu caracter personal conform politicii de confidențialitate.
                    </label>
                  </div>
                  <button type="submit" className="w-full py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors flex items-center justify-center gap-2">
                    Trimite cererea <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Hartă */}
          <div className="glass rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Domnesti+Ilfov&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locație Enjoy Residence"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
