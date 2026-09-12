"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/brand";

const navItems = [
  { href: "/", label: "Acasă" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/promotii", label: "Promoții" },
  { href: "/dotari-facilitati", label: "Dotări & facilități" },
  { href: "/galerie-foto", label: "Galerie foto" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-canvas/95 backdrop-blur-md py-3 border-b border-gold/30"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="px-4 sm:px-6 flex items-center gap-4">
        {/* Logo — fixed width left */}
        <Link
          href="/"
          className="flex items-center gap-3 group shrink-0"
        >
          <img
            src="/enjoyresidence-logo.png"
            alt={brand.name}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0 rounded-full"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl sm:text-2xl font-bold text-ink tracking-tight whitespace-nowrap">
              {brand.name}
            </span>
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-0.5 transition-colors duration-300 whitespace-nowrap ${
                scrolled ? "text-ash" : "text-ink/70"
              }`}
            >
              {brand.tagline}
            </span>
          </div>
        </Link>

        {/* Nav — takes all remaining space, centers content */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide transition-colors duration-300 whitespace-nowrap ${
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href))
                  ? "text-gold"
                  : "text-ink/80 hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Phone — fixed width right */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            className={`flex items-center gap-2 text-sm transition-colors whitespace-nowrap ${
              scrolled ? "text-ash hover:text-gold" : "text-ink/80 hover:text-gold"
            }`}
          >
            <Phone size={14} />
            <span>{brand.phone}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-ink hover:text-gold transition-colors duration-300 ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-canvas/95 mt-3 mx-4 rounded-xl p-6 animate-fade-up border border-gold/30">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ink hover:text-gold text-base block py-2"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${brand.phone}`}
              className="flex items-center gap-2 text-gold text-sm mt-4 pt-4 border-t border-gold/20"
            >
              <Phone size={14} /> {brand.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
