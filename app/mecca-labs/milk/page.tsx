import { Metadata } from "next";
import CataloguePageLayout from "@/components/mecca-labs/catalogue-page-layout";
import { milkCatalogue } from "@/lib/mecca-labs";

export const metadata: Metadata = {
  title: "Milk Products Catalogue | Infant Formula & Sports Nutrition | Mecca Care",
  description:
    "Explore Mecca Labs' complete milk products portfolio featuring staged infant milk formulas, lactose-free blends, maternal nutrition, baby cereals, and 100% pure whey protein isolates.",
  openGraph: {
    title: "Milk Products Catalogue | Mecca Care",
    description:
      "Nutritious dairy formulations for pediatric growth, maternal wellness, diabetes management, and athletic performance.",
    url: "https://www.mhplindia.in/mecca-labs/milk",
  },
};

export default function MilkPage() {
  return <CataloguePageLayout catalogue={milkCatalogue} />;
}
