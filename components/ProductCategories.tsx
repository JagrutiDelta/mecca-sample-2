"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Droplets, Syringe, Wind, Scissors, FlaskConical, Factory } from "lucide-react";
import Image from "next/image";

const CATEGORIES = [
  {
    name: "OEM & Contract Manufacturing",
    desc: "Cleanroom Class 100K injection molding, assembly, sterilization & private label packaging.",
    icon: Factory,
    img: "/oem/hero_engineers.png",
    span: "lg:col-span-2 lg:row-span-2",
    href: "/oem-services",
  },
  {
    name: "Infusion / Perfusion Range",
    desc: "12 Certified Products: Vented/non-vented IV sets, BT sets, burette & scalp vein needles.",
    icon: Droplets,
    img: "/Infusion.png",
    span: "",
    href: "/products/infusion",
  },
  {
    name: "Anesthesia",
    desc: "10 Products: Endotracheal tubes, oxygen masks, nebulizers, Guedel airways & stop cocks.",
    icon: Wind,
    img: "/Airway.png",
    span: "",
    href: "/products/anesthesia",
  },
  {
    name: "Urology Solutions",
    desc: "13 Products: Uromesare ICU meters, Foley balloon catheters, urine bags & TUR sets.",
    icon: Syringe,
    img: "/Catheters.png",
    span: "",
    href: "/products/urology",
  },
  {
    name: "General Surgical Disposables",
    desc: "6 Products: Yankauer suction kits, corrugated drainage, close wound vac sets & apparels.",
    icon: Scissors,
    img: "/IV.png",
    span: "",
    href: "/products/surgical",
  },
  {
    name: "Mecca Labs",
    desc: "5 Product Lists: WHO-GMP pharmaceuticals, nutraceuticals, milk derivatives & cosmeceuticals.",
    icon: FlaskConical,
    img: "/Burette_Sets.png",
    span: "",
    href: "/products/mecca-labs",
  },
];

export default function ProductCategories() {
  return (
    <section id="products" className="section-py bg-bg">
      <div className="container-px">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">Product Categories</div>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
            Precision-engineered devices, manufactured at scale
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[260px]">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.a
                href={cat.href}
                key={cat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative rounded-xl2 overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 ${cat.span}`}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-heading font-semibold text-white text-lg leading-tight">
                      {cat.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
                  </div>
                  <p className="text-white/70 text-sm mt-1.5 leading-relaxed">{cat.desc}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
