"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Award,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  FileCheck2,
  ShieldCheck,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_CERTIFICATES, CertificateItem } from "@/lib/certificates";

const CATEGORIES = [
  "All",
  "Quality Management",
  "International & CE",
  "Statutory & Government",
];

export default function CertificatesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? ALL_CERTIFICATES
      : ALL_CERTIFICATES.filter((c) => c.category === activeCategory);

  const openLightbox = (cert: CertificateItem) => {
    setLightboxIndex(ALL_CERTIFICATES.findIndex((c) => c.id === cert.id));
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = () => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + ALL_CERTIFICATES.length) % ALL_CERTIFICATES.length
    );
  };

  const showNext = () => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % ALL_CERTIFICATES.length
    );
  };

  const activeCert =
    lightboxIndex !== null ? ALL_CERTIFICATES[lightboxIndex] : null;

  return (
    <main className="overflow-x-hidden bg-[#FAFAF8]">
      <Header />

      {/* 01 — Hero */}
      <section id="qms" className="pt-40 pb-20 bg-white relative overflow-hidden scroll-mt-24">
        <div className="pointer-events-none absolute inset-0 bg-medical-grid bg-grid opacity-[0.03]" />
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-burgundy/[0.06] via-medblue/[0.04] to-transparent blur-3xl rounded-full" />

        <div className="container-px relative text-center max-w-3xl mx-auto">
          <div className="eyebrow mb-4 inline-flex items-center gap-1.5 rounded-full border border-burgundy/20 bg-burgundy/[0.06] px-5 py-2 text-xs sm:text-sm font-bold tracking-wide uppercase text-burgundy backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-burgundy" />
            Certificates &amp; QMS Dossier
          </div>

          <h1 className="font-heading font-extrabold text-navy text-4xl md:text-5xl lg:text-[54px] leading-[1.08] tracking-tight">
            Certified for Global Standards.
            <br />
            <span className="relative inline-block text-burgundy">
              Trusted for Quality.
              <svg
                className="absolute left-0 -bottom-1.5 w-full overflow-visible"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5 Q 50 1 100 5 T 199 5"
                  stroke="#ff91a0"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Our cleanroom manufacturing environments, sterilization cycles, and sterile medical devices comply with international directives including ISO 13485:2016, ISO 9001:2015, WHO-GMP, and European CE certification.
          </p>
        </div>
      </section>

      {/* 02 — Certificate Grid */}
      <section id="certificates" className="section-py bg-[#FAFAF8] border-t border-slate-200/80 scroll-mt-24">
        <div className="container-px">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? ALL_CERTIFICATES.length
                  : ALL_CERTIFICATES.filter((c) => c.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full border px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-burgundy to-[#9d2433] text-white border-transparent shadow-md shadow-burgundy/25"
                      : "bg-white text-navy border-slate-200 hover:border-burgundy/30"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      activeCategory === cat
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Certificate Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((cert, i) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_6px_25px_rgba(15,34,64,0.04)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(15,34,64,0.10)] overflow-hidden"
              >
                {/* Preview Image with Frame */}
                <button
                  type="button"
                  onClick={() => openLightbox(cert)}
                  className="relative block w-full aspect-[4/3] overflow-hidden rounded-xl border border-slate-200/80 bg-[#F4F6F8] p-2.5 shadow-inner cursor-pointer"
                >
                  <div className="relative h-full w-full rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300">
                      <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-navy opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                        <Eye className="w-3.5 h-3.5 text-burgundy" />
                        View Certificate
                      </span>
                    </div>
                  </div>
                </button>

                {/* Card Content */}
                <div className="mt-4 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-burgundy/10 px-2.5 py-0.5 text-[10px] font-bold text-burgundy">
                        <BadgeCheck className="w-3 h-3 text-burgundy" />
                        {cert.code}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        {cert.category}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-navy text-sm sm:text-base leading-snug group-hover:text-burgundy transition-colors">
                      {cert.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Award className="w-3.5 h-3.5 text-medblue shrink-0" />
                      <span className="truncate">{cert.issuer}</span>
                    </div>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {cert.desc}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openLightbox(cert)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-burgundy hover:text-burgundy-dark transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Document</span>
                    </button>

                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-burgundy transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>HD Image</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Trust Strip */}
      <section className="section-py bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.04]" />

        <div className="container-px relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-heading text-3xl md:text-4xl font-extrabold text-white">
              {ALL_CERTIFICATES.length}
            </div>
            <div className="mt-1 text-xs text-white/70 uppercase tracking-[0.14em]">
              Official Accreditations
            </div>
          </div>

          <div>
            <div className="font-heading text-3xl md:text-4xl font-extrabold text-white">
              48+
            </div>
            <div className="mt-1 text-xs text-white/70 uppercase tracking-[0.14em]">
              Years Clinical Experience
            </div>
          </div>

          <div>
            <div className="font-heading text-3xl md:text-4xl font-extrabold text-white">
              ISO 13485
            </div>
            <div className="mt-1 text-xs text-white/70 uppercase tracking-[0.14em]">
              Certified Cleanrooms
            </div>
          </div>

          <div>
            <div className="font-heading text-3xl md:text-4xl font-extrabold text-white">
              WHO-GMP &amp; CE
            </div>
            <div className="mt-1 text-xs text-white/70 uppercase tracking-[0.14em]">
              International Recognition
            </div>
          </div>
        </div>
      </section>

      {/* 04 — CTA */}
      <section className="section-py bg-[#FAFAF8]">
        <div className="container-px">
          <div className="relative overflow-hidden rounded-[32px] bg-burgundy-gradient px-8 py-14 text-white md:px-14 lg:px-16 text-center shadow-xl">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.035]" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl text-white">
                Need a Copy of Our Full Compliance Dossier?
              </h2>

              <p className="mt-4 text-white/85 leading-relaxed text-sm sm:text-base">
                Connect with Mecca Healthcare to request institutional audit dossiers, batch test certificates, or discuss specialized regulatory requirements.
              </p>

              <a
                href="/contact"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#8B1E2D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                Contact Compliance Team →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/85 backdrop-blur-md p-3 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col w-full max-w-4xl max-h-[92vh] rounded-3xl bg-white shadow-2xl overflow-hidden border border-white/20"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-burgundy px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {activeCert.code}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-sm sm:text-base leading-tight">
                      {activeCert.title}
                    </h3>
                    <p className="text-xs text-slate-500">{activeCert.issuer}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 px-3.5 rounded-full border border-slate-200 bg-white flex items-center gap-1.5 text-xs font-semibold text-navy hover:bg-slate-100 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5 text-burgundy" />
                    <span>Open HD</span>
                  </a>

                  <button
                    type="button"
                    onClick={closeLightbox}
                    aria-label="Close"
                    className="h-9 w-9 rounded-full bg-slate-200/80 hover:bg-burgundy hover:text-white flex items-center justify-center text-navy transition-colors cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="relative flex-1 bg-[#EEF2F6] min-h-[420px] max-h-[68vh] overflow-auto flex items-center justify-center p-4 sm:p-6 select-none">
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous certificate"
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg hover:bg-burgundy hover:text-white transition-all cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="relative w-full h-full max-w-2xl min-h-[400px] flex items-center justify-center">
                  <Image
                    src={activeCert.image}
                    alt={activeCert.title}
                    fill
                    sizes="100vw"
                    className="object-contain drop-shadow-[0_12px_28px_rgba(15,34,64,0.18)]"
                    priority
                  />
                </div>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next certificate"
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg hover:bg-burgundy hover:text-white transition-all cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Footer */}
              <div className="px-6 py-3.5 border-t border-slate-100 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-600">
                  <span className="font-bold text-navy">Scope: </span>
                  <span>{activeCert.desc}</span>
                </div>
                <div className="text-slate-400 shrink-0 font-medium">
                  Document {(lightboxIndex ?? 0) + 1} of {ALL_CERTIFICATES.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}