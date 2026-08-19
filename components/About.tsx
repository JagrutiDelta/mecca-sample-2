"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const TIMELINE = [
  { year: "1977", title: "Foundation", desc: "Mecca Healthcare established with a singular focus on medical disposables." },
  { year: "1995", title: "Manufacturing Excellence", desc: "Expanded into precision injection moulding and extrusion capabilities." },
  { year: "2008", title: "Global Certification", desc: "Achieved ISO 13485 and WHO GMP, opening export markets worldwide." },
  { year: "Today", title: "Global Presence", desc: "Three manufacturing plants serving 50+ countries with 30M+ units produced." },
];

export default function About() {
  return (
    <section id="about" className="section-py bg-white">
      <div className="container-px grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-xl2 overflow-hidden shadow-soft">
            <img
              src = "/About_Section.png"
              alt="Mecca Healthcare manufacturing facility"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-navy text-white rounded-2xl shadow-soft px-6 py-5">
            <div className="font-heading font-extrabold text-3xl">1977</div>
            <div className="text-xs text-white/70">Where it began</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md ">About Mecca Healthcare</div>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl leading-tight">
            Nearly five decades of engineering precision in medical manufacturing
          </h2>
          <p className="mt-5 text-gray leading-relaxed">
            From a single production line in 1977 to three certified manufacturing
            plants exporting across the globe, Mecca Healthcare has built its
            reputation on consistency, compliance, and uncompromising quality —
            the foundation every hospital, distributor, and OEM partner relies on.
          </p>

          <div className="mt-10 space-y-6">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-burgundy flex-shrink-0" />
                  {i !== TIMELINE.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                </div>
                <div className="pb-2">
                  <div className="text-xs font-bold tracking-wide text-burgundy">{t.year}</div>
                  <div className="font-heading font-semibold text-navy mt-0.5">{t.title}</div>
                  <div className="text-sm text-gray mt-1">{t.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
