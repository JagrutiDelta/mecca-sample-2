import { Catalogue } from "./types";
import { pharmaceuticalCatalogue } from "./pharmaceutical";
import { domesticCatalogue } from "./domestic";
import { exportCatalogue } from "./export";
import { milkCatalogue } from "./milk";
import { cosmeceuticalCatalogue } from "./cosmeceutical";

export * from "./types";
export { pharmaceuticalCatalogue } from "./pharmaceutical";
export { domesticCatalogue } from "./domestic";
export { exportCatalogue } from "./export";
export { milkCatalogue } from "./milk";
export { cosmeceuticalCatalogue } from "./cosmeceutical";

export const ALL_CATALOGUES: Catalogue[] = [
  pharmaceuticalCatalogue,
  domesticCatalogue,
  exportCatalogue,
  milkCatalogue,
  cosmeceuticalCatalogue,
];

export function getCatalogueBySlug(slug: string): Catalogue | undefined {
  const normalized = (slug || "").toLowerCase().trim();
  if (normalized === "pharmaceutical" || normalized === "pharmaceutical-product-list") {
    return pharmaceuticalCatalogue;
  }
  if (
    normalized === "domestic" ||
    normalized === "nutraceutical-product-list-domestic" ||
    normalized === "nutraceutical-domestic" ||
    normalized === "nutraceuticals-domestic"
  ) {
    return domesticCatalogue;
  }
  if (
    normalized === "export" ||
    normalized === "nutraceuticals-product-list-export" ||
    normalized === "nutraceutical-product-list-export" ||
    normalized === "nutraceutical-export" ||
    normalized === "nutraceuticals-export"
  ) {
    return exportCatalogue;
  }
  if (normalized === "milk" || normalized === "milk-product-list") {
    return milkCatalogue;
  }
  if (normalized === "cosmeceutical" || normalized === "cosmeceutical-product-list") {
    return cosmeceuticalCatalogue;
  }
  return ALL_CATALOGUES.find((cat) => cat.slug === normalized);
}

export function getTotalStats(catalogue: Catalogue) {
  const totalCategories = catalogue.categories.length;
  const totalProducts = catalogue.categories.reduce((acc, cat) => {
    return (
      acc +
      cat.subgroups.reduce((sgAcc, sg) => sgAcc + sg.products.length, 0)
    );
  }, 0);
  return { totalCategories, totalProducts };
}
