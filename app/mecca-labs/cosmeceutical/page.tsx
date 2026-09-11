import { Metadata } from "next";
import CataloguePageLayout from "@/components/mecca-labs/catalogue-page-layout";
import { cosmeceuticalCatalogue } from "@/lib/mecca-labs";

export const metadata: Metadata = {
  title: "Cosmeceutical Products Catalogue | Dermatological & Intimate Care | Mecca Care",
  description:
    "Explore Mecca Labs' cosmeceutical portfolio featuring human intimate care hygiene products, feminine washes, dermatological creams, and the La Splendra therapeutic beauty range.",
  openGraph: {
    title: "Cosmeceutical Products Catalogue | Mecca Care",
    description:
      "Advanced therapeutic personal hygiene, dermatological care, and clinical aesthetic formulations manufactured under ISO 22716 Cosmetic GMP.",
    url: "https://www.mhplindia.in/mecca-labs/cosmeceutical",
  },
};

export default function CosmeceuticalPage() {
  return <CataloguePageLayout catalogue={cosmeceuticalCatalogue} />;
}
