import { Metadata } from "next";
import CataloguePageLayout from "@/components/mecca-labs/catalogue-page-layout";
import { exportCatalogue } from "@/lib/mecca-labs";

export const metadata: Metadata = {
  title: "Export Nutraceutical Catalogue | High-Potency Global Supplements | Mecca Care",
  description:
    "Explore Mecca Labs' export-grade nutraceutical portfolio featuring tablets, powders, throat sprays, hard and soft gelatin capsules, and omega-3 syrups formulated for global regulatory compliance.",
  openGraph: {
    title: "Export Nutraceutical Catalogue | Mecca Care",
    description:
      "Global export grade nutraceutical formulations adhering to international dietary supplement standards and cGMP guidelines.",
    url: "https://www.mhplindia.in/mecca-labs/export",
  },
};

export default function ExportPage() {
  return <CataloguePageLayout catalogue={exportCatalogue} />;
}
