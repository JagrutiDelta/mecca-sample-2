"use client";

import { ArrowUpRight, CheckCircle2, Download, Eye, FileText } from "lucide-react";
import Link from "next/link";
import { ProductItem } from "@/lib/products";

interface MeccaCatalogueCardProps {
  product: ProductItem;
  onQuote: () => void;
}

export default function MeccaCatalogueCard({
  product,
  onQuote,
}: MeccaCatalogueCardProps) {
  const detailsHref =
    product.id === "pharmaceutical-product-list"
      ? "/products/mecca-labs/pharmaceutical-product-list"
      : product.id === "nutraceuticals-product-list-export"
        ? "/products/mecca-labs/nutraceuticals-product-list-export"
        : product.id === "nutraceutical-product-list-domestic"
          ? "/products/mecca-labs/nutraceutical-product-list-domestic"
      : `/products/${product.id}`;

  const openPdf = () => {
    if (product.pdf) {
      window.open(product.pdf, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_28px_rgba(13,34,64,0.05)] sm:p-5">
      <div className="flex flex-col gap-5 md:flex-row md:gap-6">
        <div
          role="button"
          tabIndex={0}
          onClick={openPdf}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              openPdf();
            }
          }}
          className="group relative h-[250px] w-full shrink-0 cursor-pointer overflow-hidden rounded-xl border border-slate-200/80 bg-gradient-to-br from-[#0F2740] via-[#163659] to-[#0A1A2D] p-5 text-left shadow-md transition-all duration-300 hover:shadow-xl md:h-[270px] md:w-[200px] lg:h-[290px] lg:w-[220px]"
          aria-label={`View PDF for ${product.name}`}
        >
          {/* Subtle medical grid texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-10 [background-size:12px_12px]" />

          {/* Top Brand Tag */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-[#E6B055]">
              <FileText className="h-3 w-3 text-[#E6B055]" />
              <span>Mecca Labs</span>
            </div>
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-[8px] font-bold text-white/80">
              PDF
            </span>
          </div>

          {/* Middle Content */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#800020]">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h4 className="line-clamp-2 text-xs font-bold uppercase leading-snug tracking-wide text-white">
              {product.name}
            </h4>
            <span className="mt-2 inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-[9px] font-semibold text-white/90">
              {product.badge}
            </span>
          </div>

          {/* Bottom Footer Bar */}
          <div className="relative z-10 border-t border-white/10 pt-2 flex items-center justify-between text-[9px] font-medium text-white/70">
            <span>Official Catalogue</span>
            <span className="text-[#E6B055] font-semibold flex items-center gap-0.5">
              Read <ArrowUpRight className="h-2.5 w-2.5" />
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[#0F2740]/85 opacity-0 transition-opacity duration-250 ease-out group-hover:opacity-100 md:group-focus-visible:opacity-100" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-100 transition-all duration-250 ease-out md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0F2740] shadow-xl">
              <Eye className="h-3.5 w-3.5 text-[#800020]" />
              <span>Open PDF</span>
            </span>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex h-7 items-center rounded-full bg-burgundy px-3 text-[10px] font-bold text-white">
              {product.badge}
            </span>
            <span className="inline-flex h-7 items-center rounded-full bg-[#EEF4FA] px-3 text-[10px] font-bold text-medblue">
              <FileText className="mr-1 h-3 w-3" />
              PDF Catalogue
            </span>
          </div>

          <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-burgundy">
            MECCA LABS
          </div>
          <Link
            href={detailsHref}
            className="group/title mt-1 block"
            aria-label={`Open details for ${product.name}`}
          >
            <h3 className="line-clamp-2 font-heading text-xl font-bold leading-tight text-navy transition-colors group-hover/title:text-burgundy sm:text-2xl">
              {product.name}
            </h3>
          </Link>
          <p className="mt-2 line-clamp-3 text-sm leading-[1.65] text-slate-500">
            {product.desc}
          </p>

          <div className="my-5 border-t border-slate-100 pt-4">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-navy">
              Catalogue Highlights
            </h4>
            <div className="grid gap-2 sm:grid-cols-3 sm:gap-4">
              {product.features.slice(0, 3).map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-xs font-medium leading-relaxed text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
              <FileText className="h-3.5 w-3.5" />
              <span>PDF Brochure</span>
            </div>
            <div className="flex w-full items-center gap-2 sm:w-auto">
              {product.pdf && (
                <a
                  href={product.pdf}
                  download
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-burgundy hover:bg-burgundy hover:text-white sm:flex-none"
                  aria-label={`Download PDF for ${product.name}`}
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </a>
              )}
              <Link
                href={`/products/${product.id}`}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-burgundy hover:bg-burgundy hover:text-white sm:flex-none"
              >
                <span>View Details</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <button
                type="button"
                onClick={onQuote}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-burgundy px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-burgundy-dark sm:flex-none"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
