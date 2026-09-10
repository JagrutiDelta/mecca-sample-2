import { Category } from "@/lib/mecca-labs/types";
import { Package } from "lucide-react";

interface SectionHeaderProps {
  category: Category;
}

export default function SectionHeader({ category }: SectionHeaderProps) {
  const totalProducts = category.subgroups.reduce((acc, sg) => acc + sg.products.length, 0);

  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
        <div className="inline-flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-burgundy/10 text-xs font-bold text-burgundy border border-burgundy/20 font-heading">
            {category.number}
          </span>
          <span className="eyebrow text-burgundy">CATEGORY {category.number}</span>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-navy shadow-sm">
          <Package className="h-3.5 w-3.5 text-medblue" />
          <span>
            {totalProducts} {totalProducts === 1 ? "Product" : "Products"}
          </span>
        </div>
      </div>

      <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-navy leading-snug">
        {category.title}
      </h2>

      {category.subtitle && (
        <p className="mt-1 text-xs sm:text-sm font-heading font-medium text-medblue">
          {category.subtitle}
        </p>
      )}

      {category.description && (
        <p className="mt-2 text-xs sm:text-sm text-gray leading-relaxed max-w-3xl">
          {category.description}
        </p>
      )}

      <div className="mt-4 h-px w-full bg-gradient-to-r from-border via-border/80 to-transparent" />
    </div>
  );
}
