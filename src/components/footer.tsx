import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { brand } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gold/30 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logoblshome.png"
                alt={brand.name}
                className="h-16 sm:h-20 object-contain shrink-0"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl sm:text-2xl font-bold text-canvas">{brand.name}</span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-canvas/60 mt-1">{brand.tagline}</span>
              </div>
            </div>
            <p className="text-sm text-canvas/70 leading-relaxed mb-6">
              {brand.description}
            </p>
          </div>

          {/* Linkuri utile */}
          <div>
            <h4 className="font-display text-lg text-gold mb-5">Linkuri utile</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-canvas/70 hover:text-gold transition-colors">Acasă</Link></li>
              <li><Link href="/despre-noi" className="text-sm text-canvas/70 hover:text-gold transition-colors">Despre noi</Link></li>
              <li><Link href="/promotii" className="text-sm text-canvas/70 hover:text-gold transition-colors">Promoții</Link></li>
              <li><Link href="/dotari-facilitati" className="text-sm text-canvas/70 hover:text-gold transition-colors">Dotări & facilități</Link></li>
              <li><Link href="/galerie-foto" className="text-sm text-canvas/70 hover:text-gold transition-colors">Galerie foto</Link></li>
              <li><Link href="/contact" className="text-sm text-canvas/70 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Servicii */}
          <div>
            <h4 className="font-display text-lg text-gold mb-5">Servicii</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-canvas/70 hover:text-gold transition-colors">Solicită ofertă</Link></li>
              <li><Link href="/dotari-facilitati" className="text-sm text-canvas/70 hover:text-gold transition-colors">Dotări camere</Link></li>
              <li><Link href="/dotari-facilitati" className="text-sm text-canvas/70 hover:text-gold transition-colors">Facilități complex</Link></li>
              <li><Link href="/galerie-foto" className="text-sm text-canvas/70 hover:text-gold transition-colors">Galerie foto</Link></li>
              <li><Link href="/promotii" className="text-sm text-canvas/70 hover:text-gold transition-colors">Promoții active</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-gold mb-5">Unde ne găsești?</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <p className="text-sm text-canvas/70">{brand.address}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="text-sm text-canvas/70 hover:text-gold transition-colors">{brand.phone}</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                <a href={`mailto:${brand.email}`} className="text-sm text-canvas/70 hover:text-gold transition-colors">{brand.email}</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-gold mt-0.5 shrink-0" />
                <p className="text-sm text-canvas/70">{brand.program}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hairline h-px w-full mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-canvas/50">
            © {new Date().getFullYear()} {brand.name}. Toate drepturile rezervate.
          </p>
          <p className="text-xs text-canvas/50">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
