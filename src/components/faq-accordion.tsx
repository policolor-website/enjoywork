"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((faq, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="glass rounded-2xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-6 text-left"
            aria-expanded={open === i}
          >
            <h3 className="font-display text-base font-bold text-white">{faq.q}</h3>
            {open === i ? (
              <ChevronUp size={20} className="text-gold shrink-0" />
            ) : (
              <ChevronDown size={20} className="text-gold shrink-0" />
            )}
          </button>
          {open === i && (
            <div className="px-6 pb-6 text-sm text-white/70 leading-relaxed">
              {faq.a}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
