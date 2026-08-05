"use client";

import { motion } from "framer-motion";
import { Award, Download } from "lucide-react";

const CERTS = [
  { code: "ISO 9001", desc: "Quality management systems certified for consistent process control." },
  { code: "ISO 13485", desc: "Medical devices quality management system compliance." },
  { code: "WHO GMP", desc: "Good manufacturing practice standards for medical products." },
  { code: "CE", desc: "Conformity with European health, safety, and environmental standards." },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-py bg-white">
      <div className="container-px">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">Certifications</div>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
            Compliance built into every facility
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-xl2 border border-border p-6 text-center hover:bg-white/60 hover:backdrop-blur-xl hover:shadow-soft hover:border-transparent transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-navy/5 group-hover:bg-burgundy-gradient flex items-center justify-center transition-colors duration-300">
                <Award className="w-6 h-6 text-navy group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="font-heading font-bold text-navy mt-4">{c.code}</div>
              <p className="text-xs text-gray mt-2 leading-relaxed">{c.desc}</p>
              <button className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-burgundy">
                <Download className="w-3.5 h-3.5" />
                Download
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
