import { Metadata } from "next";
import CataloguePageLayout from "@/components/mecca-labs/catalogue-page-layout";
import { domesticCatalogue } from "@/lib/mecca-labs";

export const metadata: Metadata = {
  title: "Domestic Nutraceutical Catalogue | Dietary & Bioactive Supplements | Mecca Care",
  description:
    "Explore Mecca Labs' domestic FSSAI-registered nutraceutical product list featuring 26 specialized categories spanning calcium, omega-3, vitamins, protein powders, joint care, and immunity boosters.",
  openGraph: {
    title: "Domestic Nutraceutical Catalogue | Mecca Care",
    description:
      "26 specialized categories of FSSAI-registered nutritional supplements and dietary wellness formulations.",
    url: "https://www.mhplindia.in/products/mecca-labs/nutraceutical-product-list-domestic",
  },
};

export default function DomesticNutraceuticalProductListPage() {
  return <CataloguePageLayout catalogue={domesticCatalogue} />;
}
