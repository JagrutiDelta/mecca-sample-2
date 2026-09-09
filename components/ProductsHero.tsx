"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useQuoteModal } from "@/context/QuoteContext";


/* ------------------------------------------------------------------ */
/* Data model                                                          */
/* ------------------------------------------------------------------ */

export interface ProductStat {
  /** Short bold value shown on a floating card, e.g. "Sterile", "DEHP Free" */
  value: string;
  /** Supporting label under the value, e.g. "Ready for Clinical Use" */
  label: string;
}

export interface ProductHeroData {
  /** Product name, e.g. "LifeGuard IV Infusion Set" */
  name: string;
  /** Product category/type, e.g. "IV Infusion Set" */
  category: string;
  /** Full hero headline. Falls back to `name` if omitted. */
  tagline?: string;
  /**
   * Exact substring of `tagline` to render in burgundy with the animated
   * underline. If it isn't found in `tagline`, the heading renders plain.
   */
  highlightedText?: string;
  /** Short, concise product description (what/purpose/benefit/use/why reliable) */
  description: string;
  /** Path to the existing product image already in the project — defaults to /products.png */
  image?: string;
  /** Alt text for the product image. Falls back to a generated description. */
  imageAlt?: string;
  /**
   * "cover" (default) for photographic shots — navy gradient overlay.
   * "contain" for transparent PNG/WebP renders — soft white showcase backdrop.
   */
  imageFit?: "cover" | "contain";
  /** Eyebrow badge text. Defaults to "Advanced Medical Solution". */
  badge?: string;
  /** Where "Request a Quote" points if no onRequestQuote handler is passed */
  quoteHref?: string;
  /** Where "View Specifications" points */
  specsHref?: string;
  /** 3–4 trust/spec floating cards. Only use specs that already exist in your data. */
  stats?: ProductStat[];
}

/* ------------------------------------------------------------------ */
/* Floating spec card                                                  */
/* ------------------------------------------------------------------ */

interface FloatingSpecCardProps {
  value: string;
  label: string;
  className?: string;
  animation: number[];
  duration: number;
}

function FloatingSpecCard({
  value,
  label,
  className = "",
  animation,
  duration,
}: FloatingSpecCardProps) {
  return (
    <motion.div
      animate={{ y: animation }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={`absolute z-10 rounded-2xl border border-white/60 bg-white/90 px-3 py-2 shadow-soft backdrop-blur-md sm:px-5 sm:py-4 ${className}`}
    >
      <div className="text-sm font-bold text-navy sm:text-lg">{value}</div>
      <div className="mt-1 whitespace-nowrap text-[11px] font-medium text-gray sm:text-xs">
        {label}
      </div>
    </motion.div>
  );
}

/**
 * Fixed slots so the floating cards keep the same rhythm as the Contact
 * Hero. The 4th slot hides below `sm` to avoid crowding small screens.
 */
const SPEC_SLOTS: { className: string; animation: number[]; duration: number }[] = [
  {
    className: "left-0 top-6 sm:-left-4 sm:top-8 md:-left-10",
    animation: [0, -14, 0],
    duration: 6,
  },
  {
    className: "right-0 top-1/3 sm:-right-2 md:-right-8",
    animation: [0, 14, 0],
    duration: 7,
  },
  {
    className: "bottom-8 left-0 sm:bottom-10 sm:left-2 md:-left-6",
    animation: [0, -10, 0],
    duration: 6.5,
  },
  {
    className: "hidden bottom-0 right-4 sm:block md:right-0",
    animation: [0, 12, 0],
    duration: 7.5,
  },
];

/* ------------------------------------------------------------------ */
/* Heading highlight helper                                            */
/* ------------------------------------------------------------------ */

/** Splits `tagline` around `highlight` and wraps the match in the burgundy, underlined span. */
function renderHeading(tagline: string, highlight?: string) {
  if (!highlight) return <>{tagline}</>;

  const index = tagline.indexOf(highlight);
  if (index === -1) return <>{tagline}</>;

  const before = tagline.slice(0, index);
  const after = tagline.slice(index + highlight.length);

  return (
    <>
      {before}
      <span className="relative inline-block text-burgundy">
        {highlight}
        <svg
          className="absolute -bottom-1 left-0 w-full"
          height="10"
          viewBox="0 0 300 10"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M2 6 Q 75 -2 150 6 T 298 6"
            stroke="#C8D8F5"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </svg>
      </span>
      {after}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* ProductHero                                                         */
/* ------------------------------------------------------------------ */

interface ProductHeroProps {
  product?: ProductHeroData;
  /**
   * Wire this to your existing quote modal/context, e.g.:
   *   const { openQuoteModal } = useQuoteModal();
   *   <ProductHero product={product} onRequestQuote={() => openQuoteModal(product.name)} />
   * If omitted, "Request a Quote" falls back to a plain link using product.quoteHref.
   */
  onRequestQuote?: () => void;
}

export default function ProductHero({
  product,
  onRequestQuote,
}: ProductHeroProps) {
  const defaultProduct: ProductHeroData = {
    name: "Medical Products",
    category: "Medical & Healthcare",
    tagline: "Reliable Healthcare Solutions",
    highlightedText: "Healthcare Solutions",
    description:
      "Explore our range of quality medical products designed for safety, reliability, and professional healthcare applications.",
    image: "/products.png",
    imageAlt: "Medical healthcare products",
    imageFit: "cover",
    badge: "Medical & Healthcare Products",
    quoteHref: "#request-quote",
    specsHref: "#specifications",
    stats: [
      {
        value: "Quality",
        label: "Assured Products",
      },
      {
        value: "ISO",
        label: "Quality Standards",
      },
      {
        value: "Trusted",
        label: "Healthcare Solutions",
      },
    ],
  };

  const currentProduct: ProductHeroData = {
    ...defaultProduct,
    ...product,
    image: product?.image || defaultProduct.image,
    imageFit: product?.imageFit ?? defaultProduct.imageFit,
  };

  const {
    name,
    category,
    tagline,
    highlightedText,
    description,
    image = "/products.png",
    imageAlt,
    imageFit = "cover",
    badge = "Advanced Medical Solution",
    quoteHref = "#request-quote",
    specsHref = "#specifications",
    stats = [],
  } = currentProduct;

  const safeTagline = tagline || name;
  const safeImageAlt = imageAlt || `${name} product photo`;

  const visibleStats: ProductStat[] = stats.slice(0, 4);
  const { openQuoteModal } = useQuoteModal();

  const headingText = typeof safeTagline === "string" ? safeTagline : name;

  return (

    <section
      id="product-hero"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-medical-grid bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-medblue/10 blur-3xl" />
      <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-burgundy/10 blur-3xl" />

      <div className="container-px relative grid items-center gap-16 lg:grid-cols-2">
        {/* LEFT — Product information */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md"
          >
            <ShieldCheck className="h-4 w-4" />
            {badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl"
          >
            {renderHeading(headingText, highlightedText)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray md:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {onRequestQuote ? (
              <button
                type="button"
                onClick={onRequestQuote}
                className="group inline-flex items-center gap-2 rounded-full bg-burgundy-gradient px-8 py-4 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            ) : (
              <a
                href={quoteHref}
                onClick={() => openQuoteModal()}
                className="group inline-flex items-center gap-2 rounded-full bg-burgundy-gradient px-8 py-4 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            )}

            <a
              href={specsHref}
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/70 px-8 py-4 text-sm font-semibold text-navy backdrop-blur transition-colors hover:bg-white"
            >
              <FileText className="h-4 w-4" />
              View Specifications
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Product visual */}
        <div className="relative h-[360px] sm:h-[480px] lg:h-[580px] xl:h-[620px] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`absolute inset-0 overflow-hidden rounded-2xl md:rounded-xl2 shadow-2xl border border-slate-200/60 ${
              imageFit === "contain"
                ? "bg-gradient-to-br from-white via-white to-medblue/10"
                : "bg-navy"
            }`}
          >
            <Image
              src={image || "/products.png"}
              alt={safeImageAlt}
              fill
              className={imageFit === "contain" ? "object-contain" : "object-cover object-center w-full h-full"}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />

            {imageFit === "cover" && (
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent pointer-events-none" />
            )}
          </motion.div>

          {/* Floating glass cards */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 md:-left-8 top-8 z-10 bg-white/90 backdrop-blur-xl rounded-2xl shadow-glass border border-white/60 px-5 py-3.5"
          >
            <div className="font-heading font-extrabold text-xl sm:text-2xl text-navy">Quality</div>
            <div className="text-xs font-medium text-gray">Assured Products</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute left-2 md:-left-6 bottom-10 z-10 bg-white/90 backdrop-blur-xl rounded-2xl shadow-glass border border-white/60 px-5 py-3.5"
          >
            <div className="font-heading font-extrabold text-xl sm:text-2xl text-navy">ISO</div>
            <div className="text-xs font-medium text-gray">Quality Standards</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute right-4 md:right-0 bottom-4 z-10 bg-white/90 backdrop-blur-xl rounded-2xl shadow-glass border border-white/60 px-5 py-3.5"
          >
            <div className="font-heading font-extrabold text-xl sm:text-2xl text-navy">Trusted</div>
            <div className="text-xs font-medium text-gray">Healthcare Solutions</div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
