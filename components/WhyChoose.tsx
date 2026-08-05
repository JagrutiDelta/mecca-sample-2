"use client";

import { motion } from "framer-motion";
import { CalendarClock, Factory, BadgeCheck, PackageCheck, Globe, Headset } from "lucide-react";

const REASONS = [
  { icon: CalendarClock, title: "48 Years of Expertise", desc: "Nearly five decades of manufacturing discipline behind every device we ship." },
  { icon: Factory, title: "OEM Expertise", desc: "Deep experience delivering contract and private-label programs for global brands." },
  { icon: BadgeCheck, title: "ISO Certified", desc: "ISO 13485, ISO 9001, and WHO GMP compliant across every facility." },
  { icon: PackageCheck, title: "30M+ Production", desc: "Proven capacity to scale from pilot batches to mass production." },
  { icon: Globe, title: "Global Export", desc: "Serving hospitals and distributors across the Middle East, Africa, and beyond." },
  { icon: Headset, title: "Dedicated Support", desc: "A named specialist team for every OEM and distribution partnership." },
];

export default function WhyChoose() {
  return (
    <section className="section-py bg-white">
      <div className="container-px">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">Why Choose Mecca</div>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
            Engineering trust into every unit we manufacture
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-xl2 border border-border bg-bg/60 p-7 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-burgundy-gradient flex items-center justify-center mb-5">
                  <Icon className="w-5.5 h-5.5 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-navy text-lg">{r.title}</h3>
                <p className="text-sm text-gray mt-2 leading-relaxed">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
