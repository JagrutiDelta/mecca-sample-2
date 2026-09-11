"use client";

import Image from "next/image";
import { Download, ArrowDown, ShieldCheck, Layers, PackageCheck, Sparkles } from "lucide-react";
import { Catalogue } from "@/lib/mecca-labs/types";
import { getTotalStats } from "@/lib/mecca-labs";

interface HeroProps {
  catalogue: Catalogue;
}

export default function Hero({ catalogue }: HeroProps) {
  const { totalCategories, totalProducts } = getTotalStats(catalogue);

  const scrollToProducts = () => {
    const el = document.getElementById("catalogue-content");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden rounded-xl2 border border-border bg-white p-6 sm:p-10 lg:p-14 shadow-card">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-burgundy/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-medblue/5 blur-3xl" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16 items-center">
        {/* Left: Text & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="eyebrow">MECCA LABS</span>
            <span className="h-1.5 w-1.5 rounded-full bg-burgundy/40" />
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-medblue uppercase tracking-wider bg-medblue/10 px-3 py-0.5 rounded-full">
              <ShieldCheck className="h-3 w-3" />
              {catalogue.badge}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.12] tracking-tight">
            {catalogue.title}
          </h1>

          <p className="mt-4 font-heading text-base sm:text-lg font-medium text-medblue leading-relaxed">
            {catalogue.subtitle}
          </p>

          <p className="mt-3 text-sm text-gray leading-relaxed max-w-2xl xl:max-w-3xl">
            {catalogue.description}
          </p>

          {/* Key Stat Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-bg/70 px-4 py-2 text-xs font-semibold text-navy shadow-sm">
              <Layers className="h-4 w-4 text-burgundy" />
              <span>
                <strong className="text-burgundy">{totalCategories}</strong> Categories
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-border bg-bg/70 px-4 py-2 text-xs font-semibold text-navy shadow-sm">
              <PackageCheck className="h-4 w-4 text-medblue" />
              <span>
                <strong className="text-medblue">{totalProducts}</strong> Formulated Products
              </span>
            </div>
            {catalogue.compliance.slice(0, 2).map((comp) => (
              <div
                key={comp}
                className="hidden sm:flex items-center gap-1.5 rounded-xl border border-border/80 bg-white px-3.5 py-2 text-xs font-medium text-gray"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span>{comp}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={catalogue.pdfUrl}
              download={catalogue.pdfFileName}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-burgundy px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-burgundy-dark hover:shadow-card hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Download Full Catalogue (PDF)</span>
            </a>

            <button
              type="button"
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:border-burgundy/40 hover:bg-bg hover:text-burgundy"
            >
              <span>Explore Products</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </button>
          </div>
        </div>

        {/* Right: Visual Container */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-lg aspect-square rounded-2xl border border-border bg-gradient-to-br from-bg via-white to-accent/20 p-4 sm:p-6 shadow-soft flex items-center justify-center">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-white shadow-sm flex items-center justify-center">
              <Image
                src={catalogue.heroImage}
                alt={catalogue.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                className="object-contain p-4 transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Floating Top Badge */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-navy shadow-md border border-border/80 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>WHO-GMP Verified</span>
            </div>

            {/* Floating Bottom Badge */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 flex items-center gap-2 rounded-xl bg-navy/95 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>100% Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
