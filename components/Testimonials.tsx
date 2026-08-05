"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Mecca's consistency across production batches has made them our default choice for infusion consumables — audits have never flagged a deviation.",
    name: "Procurement Head",
    role: "Multi-specialty Hospital Group",
  },
  {
    quote:
      "Their OEM team took our specification from feasibility to mass production in under twelve weeks, without a single compliance gap.",
    name: "Partnership Director",
    role: "OEM Healthcare Brand",
  },
  {
    quote:
      "Reliable lead times and certified documentation on every shipment — exactly what we need to move products across export markets.",
    name: "Regional Distributor",
    role: "Medical Distribution Partner",
  },
];

export default function Testimonials() {
  return (
    <section className="section-py bg-white">
      <div className="container-px">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">Testimonials</div>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
            What our partners say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl2 border border-border bg-bg/50 p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-burgundy text-burgundy" />
                ))}
              </div>
              <p className="text-ink leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-heading font-semibold text-navy">{t.name}</div>
                <div className="text-xs text-gray mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
