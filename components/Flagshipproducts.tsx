"use client";

/**
 * Flagship Products section
 * -----------------------------------------------------------------------
 * Drop this file into your project (e.g. components/FlagshipProducts.tsx)
 * and render <FlagshipProducts /> on the page.
 *
 * Setup notes:
 * 1. Images — each product's `image` should point to a valid asset in
 *    the public directory. This project keeps product visuals under
 *    public/products or the category folders under public/<category>/.
 * 2. Font — assumes Inter is already the site's default sans font (e.g.
 *    via next/font/google in your root layout).
 * 3. Links — `href` / `pdfHref` are placeholders; point them at your real
 *    product pages and catalogue PDFs.
 * 4. To add a product, add an object to `flagshipProducts` below — the
 *    filters, grid, and featured strip all read from that one array.
 *    Exactly one entry should have `featured: true`.
 * -----------------------------------------------------------------------
 */

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Droplets,
  Factory,
  HeartPulse,
  Syringe,
  type LucideIcon,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ProductCategory =
  | "Infusion"
  | "Nephrology"
  | "Critical Care"
  | "OEM Manufacturing";

export interface FlagshipProduct {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  certifications: string[];
  href: string;
  pdfHref?: string;
  featured?: boolean;
  featuredDescription?: string;
}

type FilterValue = ProductCategory | "All Products";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const flagshipProducts: FlagshipProduct[] = [
  {
    slug: "iv-infusion-set",
    name: "IV Infusion Set",
    category: "Infusion",
    description:
      "Sterile, single-use infusion set designed for safe fluid delivery, air-stop performance, and reliable blood or drug administration.",
    image: "/Infusion/image1.png",
    certifications: ["CE Marked", "ISO 13485", "Sterile"],
    href: "/products/iv-infusion-set",
    pdfHref: "/catalogues/product-list-2026.pdf",
    featured: true,
    featuredDescription:
      "Our IV infusion set range includes vented and non-vented options for precision fluid delivery, blood transfusion support, and safe clinical administration.",
  },
  {
    slug: "dial-flow-regulator",
    name: "IV Flow Regulator",
    category: "Infusion",
    description:
      "Precision administration device offering consistent flow control and dependable fluid delivery in clinical and critical care settings.",
    image: "/Infusion/image1.png",
    certifications: ["CE Marked", "ISO 13485", "Latex Free"],
    href: "/products/dial-flow-regulator",
    pdfHref: "/catalogues/product-list-2026.pdf",
  },
  {
    slug: "central-venous-catheter",
    name: "Multiple Lumen Catheter",
    category: "Critical Care",
    description:
      "Multi-lumen central venous catheter intended for CVP monitoring, blood sampling, and simultaneous infusion of multiple IV solutions.",
    image: "/Cardiology/image1.png",
    certifications: ["CE Marked", "ISO 13485", "Sterile"],
    href: "/products/central-venous-catheter",
    pdfHref: "/catalogues/central-venous-catheter-kit-details.pdf",
  },
  {
    slug: "endotracheal-tube",
    name: "Endotracheal Tube",
    category: "Critical Care",
    description:
      "Airway management device inserted with a laryngoscope to secure the upper trachea and support safe ventilation.",
    image: "/Anesthesia/image1.png",
    certifications: ["CE Marked", "ISO 13485", "Sterile"],
    href: "/products/endotracheal-tube",
    pdfHref: "/catalogues/product-list-2026.pdf",
  },
  {
    slug: "hemodialysis-catheter-kit",
    name: "Haemodialysis Catheter",
    category: "Nephrology",
    description:
      "Used for exchanging blood to and from the haemodialysis machine, enabling safe and efficient dialysis therapy.",
    image: "/products/hero_medical_products.png",
    certifications: ["CE Marked", "ISO 13485", "Sterile"],
    href: "/products/hemodialysis-catheter-kit",
    pdfHref: "/catalogues/hemodialysis-catheter-kit-flier.pdf",
  },
  {
    slug: "fistula-needle",
    name: "Fistula Needle",
    category: "Nephrology",
    description:
      "Securely connects blood lines with blood vessels during dialysis and is designed for smooth, reliable access in vascular therapy.",
    image: "/Cardiology/image1.png",
    certifications: ["CE Marked", "ISO 13485", "Latex Free"],
    href: "/products/av-fistula-needle",
    pdfHref: "/catalogues/product-list-2026.pdf",
  },
  {
    slug: "foley-catheter",
    name: "Foley Catheter",
    category: "OEM Manufacturing",
    description:
      "Routine drainage catheter designed for urinary bladder access, ensuring direct drainage with a closed, sterile system.",
    image: "/Urology/image1.png",
    certifications: ["CE Marked", "ISO 13485", "Sterile"],
    href: "/products/foley-catheter",
    pdfHref: "/catalogues/product-list-2026.pdf",
  },
  {
    slug: "extension-line-3-way-stopcock",
    name: "Extension Line with 3-Way Stopcock",
    category: "OEM Manufacturing",
    description:
      "Accessory for perfusion systems used for fluid directional control, withdrawal, and pressure monitoring in OEM and custom clinical applications.",
    image: "/Infusion/image1.png",
    certifications: ["CE Marked", "ISO 13485", "Sterile"],
    href: "/products/extension-line-3-way-stopcock",
    pdfHref: "/catalogues/product-list-2026.pdf",
  },
];

const CATEGORY_ICONS: Record<ProductCategory, LucideIcon> = {
  Infusion: Syringe,
  Nephrology: Droplets,
  "Critical Care": HeartPulse,
  "OEM Manufacturing": Factory,
};

const FILTERS: FilterValue[] = [
  "All Products",
  "Infusion",
  "Nephrology",
  "Critical Care",
  "OEM Manufacturing",
];

// ---------------------------------------------------------------------------
// Filter pills
// ---------------------------------------------------------------------------

function FilterPills({
  active,
  onChange,
}: {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}) {
  return (
    <div
      className="flex flex-wrap justify-center gap-3"
      role="tablist"
      aria-label="Filter products by category"
    >
      {FILTERS.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
              isActive
                ? "bg-[#8B1E2D] text-white shadow-sm"
                : "border border-slate-200 bg-white text-[#0F2744] hover:border-[#8B1E2D]/40 hover:text-[#8B1E2D]"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Product card
// ---------------------------------------------------------------------------

function ProductCard({ product }: { product: FlagshipProduct }) {
  const CategoryIcon = CATEGORY_ICONS[product.category];

  return (
    <div className="group flex flex-col overflow-hidden rounded-[24px] border border-transparent bg-white shadow-[0_4px_20px_rgba(15,39,68,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#8B1E2D] hover:shadow-[0_16px_40px_rgba(139,30,45,0.16)]">
      <div className="relative aspect-[5/4] overflow-hidden bg-[#EAF4FF]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#0F2744] backdrop-blur-sm">
          <CategoryIcon className="h-3.5 w-3.5 text-[#8B1E2D]" aria-hidden="true" />
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="line-clamp-2 min-h-[3.25rem] text-lg font-semibold leading-snug text-[#0F2744]">
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">{product.description}</p>

        <ul className="flex flex-wrap gap-1.5">
          {product.certifications.map((cert) => (
            <li
              key={cert}
              className="inline-flex items-center gap-1 rounded-full bg-[#EAF4FF] px-2.5 py-1 text-[11px] font-medium text-[#0F2744]"
            >
              <CheckCircle2 className="h-3 w-3 text-[#8B1E2D]" aria-hidden="true" />
              {cert}
            </li>
          ))}
        </ul>

        <Link
          href={product.href}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-[#8B1E2D]/20 bg-[#8B1E2D]/[0.08] px-5 py-2.5 text-sm font-medium text-[#8B1E2D] transition-colors duration-300 group-hover:border-[#8B1E2D] group-hover:bg-[#8B1E2D] group-hover:text-white"
        >
          View Details
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Featured product strip
// ---------------------------------------------------------------------------

function FeaturedProduct({ product }: { product: FlagshipProduct }) {
  return (
    <div className="mt-16 overflow-hidden rounded-[24px] bg-[#0F2744] shadow-[0_20px_60px_rgba(15,39,68,0.25)] md:mt-24">
      <div className="grid md:grid-cols-2">
        <div className="relative flex items-center justify-center bg-gradient-to-br from-[#EAF4FF] to-white p-10 md:p-16">
          <div className="relative aspect-[5/4] w-full max-w-md">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 p-10 md:p-14">
          <span className="w-fit rounded-full bg-[#8B1E2D] px-3 py-1 text-xs font-semibold tracking-wide text-white">
            FEATURED
          </span>
          <h3 className="text-2xl font-semibold text-white md:text-3xl">{product.name}</h3>
          <p className="text-slate-300">{product.featuredDescription ?? product.description}</p>

          <ul className="flex flex-wrap gap-2">
            {product.certifications.map((cert) => (
              <li
                key={cert}
                className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white"
              >
                <CheckCircle2 className="h-3 w-3 text-[#EAF4FF]" aria-hidden="true" />
                {cert}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Link
              href={product.href}
              className="inline-flex items-center gap-2 rounded-full bg-[#8B1E2D] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#731825]"
            >
              Explore Product
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {product.pdfHref && (
              <Link
                href={product.pdfHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white/50"
                aria-label={`Download ${product.name} spec sheet`}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function FlagshipProducts() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All Products");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "All Products") return flagshipProducts;
    return flagshipProducts.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  const featuredProduct = flagshipProducts.find((product) => product.featured);

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="eyebrow justify-center mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">
            PRODUCT PORTFOLIO
          </span>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
            Our Flagship Products
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Explore our globally trusted portfolio of infusion, nephrology, critical care, and
            OEM medical devices engineered for precision and patient safety.
          </p>
        </div>

        <div className="mt-10">
          <FilterPills active={activeFilter} onChange={setActiveFilter} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))
          ) : (
            <p className="col-span-full py-12 text-center text-slate-500">
              No products in this category yet — try another filter.
            </p>
          )}
        </div>

        {featuredProduct && <FeaturedProduct product={featuredProduct} />}
      </div>
    </section>
  );
}

export default FlagshipProducts;