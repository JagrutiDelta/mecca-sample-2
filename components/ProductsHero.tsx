// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
// import { useQuoteModal } from "@/context/QuoteContext";

// export default function ProductsHero() {
//   const { openQuoteModal } = useQuoteModal();
//   return (
//     <section className="relative overflow-hidden bg-bg pt-36 pb-16 lg:pt-48 lg:pb-24 border-b border-border">
//       {/* Background Grid Pattern */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-60 z-0"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23102B46' stroke-width='0.5' stroke-opacity='0.15'/%3E%3C/svg%3E")`,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       <div className="container-px relative z-10">
//         <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-6 flex flex-col items-start">
//             {/* Eyebrow badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="inline-flex items-center gap-2 bg-[#F8EDEF] border border-[#F1D2D6] px-3.5 py-1.5 rounded-full text-burgundy text-xs font-semibold uppercase tracking-wider mb-5"
//             >
//               <ShieldCheck className="w-4 h-4 text-burgundy" />
//               <span>WHO-GMP &amp; ISO 13485 Certified Medical Line</span>
//             </motion.div>

//             {/* Title */}
//             <motion.h1
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="font-heading font-bold text-navy text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl leading-tight mb-5"
//             >
//               Precision Medical Disposables &amp; Advanced Infusion Tech
//             </motion.h1>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 14 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-gray text-sm sm:text-base leading-relaxed max-w-lg mb-8"
//             >
//               Explore Meca Care's comprehensive portfolio of medical disposables,
//               infusion systems, and precision-engineered healthcare products manufactured in ISO 13485 cleanroom facilities.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 14 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
//             >
//               <a
//                 href="#catalog"
//                 className="inline-flex items-center justify-center gap-2 bg-burgundy text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(148,28,43,0.28)] hover:bg-burgundy-dark hover:shadow-xl transition-all group"
//               >
//                 <span>Explore Products</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </a>

//               <button
//                 type="button"
//                 onClick={() => openQuoteModal()}
//                 className="inline-flex items-center justify-center gap-2 bg-white text-navy border border-border font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_2px_8px_rgba(16,43,70,0.08)] hover:bg-slate-50 transition-all group cursor-pointer"
//               >
//                 <span>Request a Quote</span>
//                 <ArrowRight className="w-4 h-4 text-gray group-hover:translate-x-1 transition-transform" />
//               </button>
//             </motion.div>
//           </div>

//           {/* RIGHT HERO IMAGE & FLOATING GLASS CARD */}
//           <div className="lg:col-span-6 relative">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(16,43,70,0.15)] border border-white/80 bg-white"
//             >
//               <img
//                 src="/products/hero_medical_products.png"
//                 alt="Premium medical disposable products"
//                 className="w-full aspect-[4/3] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none" />
//             </motion.div>

//             {/* Floating Glassmorphism Quality Badge */}
//             <motion.div
//               initial={{ opacity: 0, x: -20, y: 10 }}
//               animate={{ opacity: 1, x: 0, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.5 }}
//               className="absolute -bottom-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md border border-border/90 rounded-xl p-4 shadow-[0_8px_24px_rgba(16,43,70,0.12)] flex items-center gap-3 max-w-[280px]"
//             >
//               <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
//                 <ShieldCheck className="w-6 h-6 text-emerald-600" />
//               </div>
//               <div>
//                 <div className="font-heading font-bold text-navy text-xs leading-snug">
//                   100% Quality Inspected
//                 </div>
//                 <div className="text-[11px] text-gray mt-0.5 flex items-center gap-1">
//                   <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
//                   <span>ISO 13485 & CE Compliant</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
  /** Path to the existing product image already in the project */
  image: string;
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
  product: ProductHeroData;
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
  const currentProduct: ProductHeroData = product ?? {
    name: "Medical Products",
    category: "Medical & Healthcare",
    tagline: "Reliable Healthcare Solutions",
    highlightedText: "Healthcare Solutions",
    description:
      "Explore our range of quality medical products designed for safety, reliability, and professional healthcare applications.",
    image: "/images/products/product-hero.jpg",
    imageAlt: "Medical healthcare products",
    imageFit: "contain",
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

  const {
    name,
    category,
    tagline,
    highlightedText,
    description,
    image,
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
            {renderHeading(tagline, highlightedText)}
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
        <div className="relative h-[320px] sm:h-[440px] lg:h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`absolute inset-0 overflow-hidden rounded-xl2 shadow-soft ${
              imageFit === "contain"
                ? "bg-gradient-to-br from-white via-white to-medblue/10"
                : ""
            }`}
          >
           <img
  src="/products.png"
  className="h-full w-full object-cover"
/>

            {imageFit === "cover" && (
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            )}
          </motion.div>

          {/* Floating glass cards */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 md:-left-10 top-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-glass border border-white/60 px-5 py-4"
          >
            <div className="font-heading font-extrabold text-2xl text-navy">Quality</div>
            <div className="text-xs text-gray">Assured Products</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute left-2 md:-left-6 bottom-10 bg-white/80 backdrop-blur-xl rounded-2xl shadow-glass border border-white/60 px-5 py-4"
          >
            <div className="font-heading font-extrabold text-2xl text-navy">ISO</div>
            <div className="text-xs text-gray">Quality Standards</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute right-4 md:right-0 bottom-0 bg-white/80 backdrop-blur-xl rounded-2xl shadow-glass border border-white/60 px-5 py-4"
          >
            <div className="font-heading font-extrabold text-2xl text-navy">Trusted</div>
            <div className="text-xs text-gray">Healthcare Solutions</div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}
