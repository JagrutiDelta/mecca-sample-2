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
  return ALL_CATALOGUES.find((cat) => cat.slug === slug);
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
