import { Metadata } from "next";
import CataloguePageLayout from "@/components/mecca-labs/catalogue-page-layout";
import { pharmaceuticalCatalogue } from "@/lib/mecca-labs";

export const metadata: Metadata = {
  title: "Pharmaceutical Product Catalogue | Sterile Injectables & Beta-Lactams | Mecca Care",
  description:
    "Explore Mecca Labs' complete WHO-GMP certified pharmaceutical product list featuring sterile pre-filled syringes, beta-lactam antibiotics, general formulations, and large & small volume parenterals.",
  openGraph: {
    title: "Pharmaceutical Product Catalogue | Mecca Care",
    description:
      "WHO-GMP certified pharmaceutical formulations, sterile injectable solutions, intravenous infusions, and finished dosage forms.",
    url: "https://www.mhplindia.in/mecca-labs/pharmaceutical",
  },
};

export default function PharmaceuticalPage() {
  return <CataloguePageLayout catalogue={pharmaceuticalCatalogue} />;
}
