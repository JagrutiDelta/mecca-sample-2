/**
 * Product data model for <ProductHero />.
 *
 * Merge this into whatever lib/product-data module your project already
 * uses. It intentionally mirrors the shape suggested in the brief
 * (name, category, description, image, badge, highlightedText, stats)
 * with a few small, optional additions needed to make the hero fully
 * data-driven (tagline, imageFit, quote/spec links).
 */

export interface ProductStat {
  /** Short bold value shown on the floating card, e.g. "Sterile", "DEHP Free" */
  value: string;
  /** Supporting label under the value, e.g. "Ready for Clinical Use" */
  label: string;
}

export interface ProductHeroData {
  /** Product name, e.g. "LifeGuard IV Infusion Set" — used in metadata/breadcrumbs */
  name: string;
  /** Product category/type, e.g. "IV Infusion Set" */
  category: string;
  /**
   * Full hero headline, e.g. "Reliable IV Infusion Sets for Better Patient Care".
   * Falls back to `name` if omitted.
   */
  tagline?: string;
  /**
   * Exact substring of `tagline` to render in burgundy with the animated
   * underline (e.g. "IV Infusion Sets"). If it isn't found in `tagline`,
   * the heading renders as plain text with no highlight.
   */
  highlightedText?: string;
  /** Short, concise product description (what/purpose/benefit/use/why reliable) */
  description: string;
  /** Path to the existing product image already in the project — never a stock photo */
  image: string;
  /** Alt text for the product image. Falls back to a generated description. */
  imageAlt?: string;
  /**
   * "cover" (default) for photographic product shots — matches the Contact
   * Hero treatment with a navy gradient overlay.
   * "contain" for transparent PNG/WebP product renders — shows the image on
   * a soft white/gradient showcase backdrop instead of a photo overlay.
   */
  imageFit?: "cover" | "contain";
  /** Eyebrow badge text. Defaults to "Advanced Medical Solution". */
  badge?: string;
  /** Where the primary "Request a Quote" CTA points if no onRequestQuote handler is passed */
  quoteHref?: string;
  /** Where the secondary "View Specifications" CTA points */
  specsHref?: string;
  /**
   * 3–4 trust/spec floating cards. Only include specs that already exist in
   * your product data — this component never invents technical claims.
   */
  stats?: ProductStat[];
}

/**
 * EXAMPLE data only — replace with the real product coming from your
 * existing product-data source. Kept here just to demonstrate the shape
 * and so <ProductHero /> can be dropped in and previewed immediately.
 */
export const sampleProduct: ProductHeroData = {
  name: "LifeGuard IV Infusion Set",
  category: "IV Infusion Set",
  tagline: "Reliable IV Infusion Sets for Better Patient Care",
  highlightedText: "IV Infusion Sets",
  description:
    "Designed for safe, reliable and efficient clinical use, our LifeGuard IV Infusion Set delivers consistent fluid flow while meeting the demanding requirements of modern healthcare environments.",
  image: "/products/lifeguard-iv-infusion-set.png",
  imageAlt: "LifeGuard IV Infusion Set product photo",
  imageFit: "contain",
  badge: "Advanced Medical Solution",
  quoteHref: "#request-quote",
  specsHref: "#specifications",
  stats: [
    { value: "Sterile", label: "Ready for Clinical Use" },
    { value: "DEHP Free", label: "Patient Safety Focused" },
    { value: "Precision Flow", label: "Consistent Fluid Delivery" },
    { value: "Medical Grade", label: "Quality-Assured Materials" },
  ],
};