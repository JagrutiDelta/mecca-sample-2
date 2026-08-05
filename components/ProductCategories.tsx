"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Droplets, Syringe, Wind, Scissors, FlaskConical, Factory } from "lucide-react";

const CATEGORIES = [
  {
    name: "OEM Manufacturing",
    desc: "End-to-end contract manufacturing tailored to your brand specifications.",
    icon: Factory,
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    name: "Infusion & Transfusion",
    desc: "IV sets, transfusion sets, and precision extension lines.",
    icon: Droplets,
    img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop",
    span: "",
  },
  {
    name: "Catheters",
    desc: "Foley, IV cannula, and specialized urinary catheters.",
    icon: Syringe,
    img: "https://plus.unsplash.com/premium_photo-1702598680450-21409d22358f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    span: "",
  },
  {
    name: "Airway & Respiratory",
    desc: "Endotracheal tubes, oxygen masks, and breathing circuits.",
    icon: Wind,
    img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800&auto=format&fit=crop",
    span: "",
  },
  {
    name: "General Surgery",
    desc: "Sterile, single-use surgical consumables at scale.",
    icon: Scissors,
    img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800&auto=format&fit=crop",
    span: "",
  },
  {
    name: "Pharma & Specialized",
    desc: "Specialized delivery devices for pharmaceutical partners.",
    icon: FlaskConical,
    img: "https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=800&auto=format&fit=crop",
    span: "",
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
                href="#"
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
