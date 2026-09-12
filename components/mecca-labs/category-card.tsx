"use client";

import Link from "next/link";
import {
  ArrowRight,
  Download,
  Eye,
  ExternalLink,
  FileText,
  Layers,
  PackageCheck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Catalogue } from "@/lib/mecca-labs/types";
import { getTotalStats } from "@/lib/mecca-labs";
import { useQuoteModal } from "@/context/QuoteContext";

interface CategoryCardProps {
  catalogue: Catalogue;
  index: number;
}

export default function CategoryCard({ catalogue, index }: CategoryCardProps) {
  const { totalCategories, totalProducts } = getTotalStats(catalogue);
  const { openQuoteModal } = useQuoteModal();
  const routeHref = `/mecca-labs/${catalogue.slug}`;

  const openPdf = () => {
    if (catalogue.pdfUrl) {
      window.open(catalogue.pdfUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article className="group relative w-full overflow-hidden rounded-2xl border border-border bg-white p-5 sm:p-7 shadow-soft transition-all duration-300 hover:border-burgundy/40 hover:shadow-card hover:-translate-y-0.5">
      <div className="flex flex-col gap-6 md:flex-row md:gap-8 items-stretch">
        {/* ─── LEFT: Catalogue Preview / Cover ─── */}
        <div
          role="button"
          tabIndex={0}
          onClick={openPdf}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openPdf();
            }
          }}
          className="group/pdf relative h-[290px] sm:h-[320px] w-full md:w-[230px] lg:w-[250px] shrink-0 cursor-pointer overflow-hidden rounded-xl border border-slate-200/90 bg-gradient-to-br from-slate-900 to-[#0F2740] text-left shadow-md transition-all duration-300 hover:shadow-xl hover:border-burgundy/50"
          aria-label={`Open PDF preview for ${catalogue.title}`}
          title={`Click to open ${catalogue.title} PDF`}
        >
          {catalogue.heroImage ? (
            <div className="relative h-full w-full overflow-hidden">
              {/* eslint-disable-next-js/no-img-element */}
              <img
                src={catalogue.heroImage}
                alt={catalogue.title}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover/pdf:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />

              {/* Overlay document badge & info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-300 block mb-1">
                  Official Publication
                </span>
                <p className="text-xs font-bold leading-snug line-clamp-2 text-white">
                  {catalogue.title}
                </p>
                <span className="text-[10px] text-slate-300 mt-1 inline-flex items-center gap-1">
                  <FileText className="w-3 h-3 text-rose-400" />
                  PDF Catalogue
                </span>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center p-6 text-center text-white">
              <FileText className="w-10 h-10 text-rose-400 mb-2" />
              <span className="text-xs font-bold">{catalogue.title}</span>
            </div>
          )}

          {/* Floating Top Badge on thumbnail */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-border text-[10px] font-bold text-burgundy shadow-xs flex items-center gap-1.5 z-10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>PDF Catalogue</span>
          </div>

          {/* Hover Overlay */}
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-navy/20 backdrop-blur-[1px] transition-all duration-300 group-hover/pdf:bg-navy/50">
            <span className="inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-navy opacity-0 shadow-xl transition-all duration-300 group-hover/pdf:translate-y-0 group-hover/pdf:opacity-100">
              <Eye className="h-3.5 w-3.5 text-burgundy" />
              <span>Open PDF</span>
            </span>
          </div>
        </div>

        {/* ─── RIGHT: Catalogue Information & Action CTAs ─── */}
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div>
            {/* Header: Index number + Division Eyebrow + Compliance Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="font-heading text-xs font-bold text-burgundy bg-burgundy/10 px-2.5 py-0.5 rounded-full border border-burgundy/20">
                0{index + 1}
              </span>
              <span className="eyebrow text-burgundy">MECCA LABS</span>
              <span className="h-1.5 w-1.5 rounded-full bg-burgundy/40" />
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-medblue uppercase tracking-wider bg-medblue/10 px-3 py-0.5 rounded-full border border-medblue/20">
                <ShieldCheck className="h-3 w-3" />
                {catalogue.badge}
              </span>
            </div>

            {/* Title */}
            <Link href={routeHref} className="group/title block">
              <h3 className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-navy transition-colors group-hover/title:text-burgundy leading-snug">
                {catalogue.title}
              </h3>
            </Link>

            {/* Subtitle */}
            <p className="mt-1.5 text-xs sm:text-sm font-heading font-medium text-medblue leading-relaxed">
              {catalogue.subtitle}
            </p>

            {/* Description */}
            <p className="mt-2 text-xs sm:text-sm text-gray leading-relaxed line-clamp-3">
              {catalogue.description}
            </p>

            {/* Stats & Highlights Row */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="flex items-center gap-1.5 rounded-xl border border-border bg-bg/80 px-3 py-1.5 text-xs font-semibold text-navy shadow-xs">
                <Layers className="h-3.5 w-3.5 text-burgundy" />
                <span>
                  <strong className="text-burgundy">{totalCategories}</strong> Categories
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-border bg-bg/80 px-3 py-1.5 text-xs font-semibold text-navy shadow-xs">
                <PackageCheck className="h-3.5 w-3.5 text-medblue" />
                <span>
                  <strong className="text-medblue">{totalProducts}</strong> Formulated Products
                </span>
              </div>
              {catalogue.compliance.slice(0, 3).map((comp) => (
                <div
                  key={comp}
                  className="hidden lg:flex items-center gap-1 rounded-xl border border-border/80 bg-white px-3 py-1.5 text-xs font-medium text-gray"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs Bar */}
          <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center gap-3">
            <Link
              href={routeHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-burgundy px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-burgundy-dark hover:shadow-card hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View Interactive Catalogue</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={catalogue.pdfUrl}
              download={catalogue.pdfFileName}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-navy transition-all hover:border-burgundy/40 hover:bg-bg hover:text-burgundy shadow-2xs"
            >
              <Download className="h-3.5 w-3.5 text-burgundy" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={openPdf}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-white px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-navy transition-all hover:bg-bg"
              title="Open PDF in new tab"
            >
              <ExternalLink className="h-3.5 w-3.5 text-medblue" />
              <span className="hidden sm:inline">Open PDF</span>
            </button>

            <button
              type="button"
              onClick={() => openQuoteModal(catalogue.title)}
              className="sm:ml-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-burgundy/20 bg-burgundy/5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-burgundy transition-all hover:bg-burgundy hover:text-white"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
