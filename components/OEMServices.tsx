"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const OEM_CARDS = ["OEM", "Loan License", "Private Label", "White Label", "Custom Packaging"];

const PROCESS = ["Inquiry", "Feasibility", "Sampling", "Mass Production", "Worldwide Delivery"];

export default function OEMServices() {
  return (
    <section id="oem" className="section-py bg-bg">
      <div className="container-px grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="eyebrow mb-4">OEM Services</div>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl leading-tight">
            Contract Manufacturing &amp; Private Label Solutions
          </h2>
          <p className="mt-5 text-gray leading-relaxed max-w-lg">
            Bring your brand to market with a partner that handles feasibility,
            sampling, and mass production under one roof — backed by ISO 13485
            and WHO GMP compliance at every stage.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {OEM_CARDS.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-border bg-white px-5 py-4 text-sm font-semibold text-navy shadow-card"
              >
                {c}
              </motion.div>
            ))}
          </div>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-burgundy-gradient text-white text-sm font-semibold px-8 py-4 shadow-soft hover:-translate-y-0.5 transition-transform"
          >
            Become an OEM Partner
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="relative rounded-xl2 bg-white border border-border shadow-card p-8 md:p-10">
          <h3 className="font-heading font-semibold text-navy text-lg mb-8">Manufacturing Process</h3>
          <div className="space-y-0">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-medblue/10 text-medblue font-heading font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  {i !== PROCESS.length - 1 && <div className="w-px h-10 bg-border" />}
                </div>
                <div className="pt-1.5 pb-2">
                  <div className="font-medium text-navy">{step}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
