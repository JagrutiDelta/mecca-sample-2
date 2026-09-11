"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Layers, PackageCheck, ShieldCheck } from "lucide-react";
import { Catalogue } from "@/lib/mecca-labs/types";
import { getTotalStats } from "@/lib/mecca-labs";

interface CategoryCardProps {
  catalogue: Catalogue;
  index: number;
}

export default function CategoryCard({ catalogue, index }: CategoryCardProps) {
  const { totalCategories, totalProducts } = getTotalStats(catalogue);
  const routeHref = `/mecca-labs/${catalogue.slug}`;

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-soft transition-all duration-300 hover:border-burgundy/40 hover:shadow-card hover:-translate-y-1">
      <div>
        {/* Card Header: Category index & Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-heading text-xs font-bold text-burgundy">
            0{index + 1}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-medblue/10 px-2.5 py-0.5 text-[10px] font-bold text-medblue uppercase tracking-wider">
            <ShieldCheck className="h-3 w-3" />
            {catalogue.badge}
          </span>
        </div>

        {/* Product Visual Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-bg via-white to-accent/15 border border-border/70 mb-5 p-4 flex items-center justify-center">
          <Image
            src={catalogue.heroImage}
            alt={catalogue.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Title & Description */}
        <div className="mb-4">
          <Link href={routeHref} className="block">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-navy transition-colors group-hover:text-burgundy leading-snug">
              {catalogue.title}
            </h3>
          </Link>
          <p className="mt-2 text-xs sm:text-sm text-gray leading-relaxed line-clamp-2">
            {catalogue.subtitle}
          </p>
        </div>

        {/* Stats Pill Row */}
        <div className="flex flex-wrap items-center gap-2 mb-6 pt-3 border-t border-border/60">
          <div className="flex items-center gap-1.5 text-xs text-navy font-semibold">
            <Layers className="h-3.5 w-3.5 text-burgundy" />
            <span>{totalCategories} Categories</span>
          </div>
          <span className="text-gray/40">•</span>
          <div className="flex items-center gap-1.5 text-xs text-medblue font-semibold">
            <PackageCheck className="h-3.5 w-3.5 text-medblue" />
            <span>{totalProducts} Products</span>
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="flex items-center gap-3 pt-3 border-t border-border">
        <Link
          href={routeHref}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-burgundy px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-burgundy-dark"
        >
          <span>View Catalogue</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>

        <a
          href={catalogue.pdfUrl}
          download={catalogue.pdfFileName}
          title={`Download ${catalogue.title} PDF`}
          aria-label={`Download ${catalogue.title} PDF`}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-bg text-navy transition-colors hover:border-burgundy/40 hover:bg-burgundy/10 hover:text-burgundy"
        >
          <Download className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
