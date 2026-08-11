"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Award,
  Globe2,
  HeartPulse,
  BadgeCheck,
  Eye,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ---------------------------------- Data ---------------------------------- */

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  file: string;
};

const CERTIFICATES: Certificate[] = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    issuer: "Quality Management System",
    category: "Quality Management",
    icon: Award,
    image: "/certificates/iso-9001-2015.jpg",
    file: "/certificates/iso-9001-2015.pdf",
  },
  {
    id: "iso-13485",
    title: "ISO 13485:2016",
    issuer: "Medical Devices – QMS",
    category: "Quality Management",
    icon: Globe2,
    image: "/certificates/iso-13485-2016.jpg",
    file: "/certificates/iso-13485-2016.pdf",
  },
  {
    id: "who-gmp",
    title: "WHO–GMP",
    issuer: "Good Manufacturing Practice",
    category: "Regulatory & Compliance",
    icon: HeartPulse,
    image: "/certificates/who-gmp.jpg",
    file: "/certificates/who-gmp.pdf",
  },
  {
    id: "ce-mark",
    title: "CE Mark",
    issuer: "European Conformity",
    category: "Regulatory & Compliance",
    icon: BadgeCheck,
    image: "/certificates/ce-mark.jpg",
    file: "/certificates/ce-mark.pdf",
  },
];

const CATEGORIES = [
  "All",
  "Quality Management",
  "Regulatory & Compliance",
];

/* ------------------------------- Small parts ------------------------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">
      {children}
    </div>
  );
}

/* ---------------------------------- Page ---------------------------------- */

export default function CertificatesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.category === activeCategory);

  const openLightbox = (cert: Certificate) => {
    setLightboxIndex(
      CERTIFICATES.findIndex((c) => c.id === cert.id)
    );
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = () => {
    setLightboxIndex((i) =>
      i === null
        ? null
        : (i - 1 + CERTIFICATES.length) % CERTIFICATES.length
    );
  };

  const showNext = () => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % CERTIFICATES.length
    );
  };

  const activeCert =
    lightboxIndex !== null ? CERTIFICATES[lightboxIndex] : null;

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* 01 — Hero */}
      <section className="pt-40 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.03] pointer-events-none" />

        <div className="container-px relative text-center max-w-3xl mx-auto">
          <Eyebrow>Certificates &amp; QMS</Eyebrow>

          <h1 className="font-heading font-extrabold text-navy text-4xl md:text-5xl lg:text-[52px] leading-[1.05] tracking-[-0.03em]">
            Certified for Global Standards.
            <br />
            <span className="text-burgundy">
              Trusted for Quality.
            </span>
          </h1>

          <p className="mt-6 text-gray leading-relaxed max-w-xl mx-auto">
            Our quality management systems and regulatory certifications
            reflect our ongoing commitment to safe, compliant and reliable
            medical-device manufacturing.
          </p>
        </div>
      </section>

      {/* 02 — Filter + Certificate Grid */}
      <section className="section-py bg-bg">
        <div className="container-px">

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-burgundy-gradient text-white border-transparent shadow-card"
                    : "bg-white text-navy border-border hover:border-burgundy/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Certificate Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cert, i) => {
              const Icon = cert.icon;

              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,34,64,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(15,34,64,0.10)]"
                >
                  {/* Certificate Preview */}
                  <button
                    type="button"
                    onClick={() => openLightbox(cert)}
                    className="relative block w-full aspect-[4/3] overflow-hidden bg-[#F7F7F7]"
                  >
                    <Image
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300">
                      <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Eye className="w-3.5 h-3.5" />
                        View Certificate
                      </span>
                    </div>
                  </button>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-burgundy/10">
                        <Icon className="w-4 h-4 text-burgundy" />
                      </div>

                      <div className="min-w-0">
                        <div className="font-heading font-bold text-navy text-sm truncate">
                          {cert.title}
                        </div>

                        <div className="text-[11px] text-gray truncate">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>

                    {/* Category + PDF */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-burgundy/70">
                        {cert.category}
                      </span>

                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-navy hover:text-burgundy transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        PDF
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 — Trust Strip */}
      <section className="section-py bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.04]" />

        <div className="container-px relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-heading text-3xl md:text-4xl font-extrabold">
              {CERTIFICATES.length}+
            </div>

            <div className="mt-1 text-xs text-white/60 uppercase tracking-[0.14em]">
              Certifications
            </div>
          </div>

          <div>
            <div className="font-heading text-3xl md:text-4xl font-extrabold">
              48+
            </div>

            <div className="mt-1 text-xs text-white/60 uppercase tracking-[0.14em]">
              Years Experience
            </div>
          </div>

          <div>
            <div className="font-heading text-3xl md:text-4xl font-extrabold">
              ISO
            </div>

            <div className="mt-1 text-xs text-white/60 uppercase tracking-[0.14em]">
              Certified Facilities
            </div>
          </div>

          <div>
            <div className="font-heading text-3xl md:text-4xl font-extrabold">
              Global
            </div>

            <div className="mt-1 text-xs text-white/60 uppercase tracking-[0.14em]">
              Regulatory Compliance
            </div>
          </div>
        </div>
      </section>

      {/* 04 — CTA */}
      <section className="section-py bg-bg">
        <div className="container-px">
          <div className="relative overflow-hidden rounded-[32px] bg-burgundy-gradient px-8 py-14 text-white md:px-14 lg:px-16 text-center">

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

            <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.035]" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
                Need a Copy of Our Full Compliance Dossier?
              </h2>

              <p className="mt-4 text-white/75 leading-relaxed">
                Get in touch and our team will share the complete set of
                certificates and regulatory documentation for your due
                diligence.
              </p>

              <a
                href="/#contact"
                className="mt-7 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#8B1E2D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Talk to Our Team →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 backdrop-blur-sm px-4 py-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-[20px] bg-white overflow-hidden shadow-2xl"
            >

              {/* Close */}
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy hover:bg-burgundy hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Previous */}
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous certificate"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy hover:bg-burgundy hover:text-white transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={showNext}
                aria-label="Next certificate"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy hover:bg-burgundy hover:text-white transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Certificate Image */}
              <div className="relative aspect-[4/3] w-full bg-[#F7F7F7]">
                <Image
                  src={activeCert.image}
                  alt={`${activeCert.title} certificate`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Lightbox Footer */}
              <div className="flex items-center justify-between gap-4 px-6 py-4 border-t border-border">
                <div>
                  <div className="font-heading font-bold text-navy text-sm">
                    {activeCert.title}
                  </div>

                  <div className="text-xs text-gray">
                    {activeCert.issuer}
                  </div>
                </div>

                <a
                  href={activeCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-1.5 rounded-full bg-burgundy-gradient px-4 py-2 text-xs font-semibold text-white shadow-card hover:shadow-soft transition-all flex-shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}