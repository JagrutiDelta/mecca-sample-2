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
          className="group relative h-[250px] w-full shrink-0 cursor-pointer overflow-hidden rounded-xl bg-slate-100 text-left shadow-sm md:h-[270px] md:w-[200px] lg:h-[290px] lg:w-[220px]"
          aria-label={`View PDF for ${product.name}`}
        >
          {product.pdf ? (
            <iframe
              src={`${product.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title={`${product.name} PDF preview`}
              className="pointer-events-none h-full w-full border-0 bg-white transition-transform duration-250 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <img
              src={product.image}
              alt={`${product.name} catalogue cover`}
              className="h-full w-full object-cover transition-transform duration-250 ease-out group-hover:scale-[1.03]"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-navy/65 opacity-0 transition-opacity duration-250 ease-out group-hover:opacity-100 md:group-focus-visible:opacity-100" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-100 transition-all duration-250 ease-out md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-[11px] font-semibold text-navy shadow-lg">
              <Eye className="h-3.5 w-3.5 text-burgundy" />
              <span>View PDF</span>
            </span>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy/80 to-transparent" />
          <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-semibold text-white">
            <FileText className="h-3.5 w-3.5" />
            <span>PDF Catalogue</span>
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
