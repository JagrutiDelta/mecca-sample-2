import type { Metadata } from "next";
import Header from "@/components/Header";
import ProductsHero from "@/components/ProductsHero";
import ProductsGrid from "@/components/ProductsGrid";
import OEMServices from "@/components/OEMServices";
import Certifications from "@/components/Certifications";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medical Device Portfolio & Disposables | Mecca Care Healthcare",
  description:
    "Explore Mecca Care's ISO 13485 & CE certified medical disposable portfolio including IV infusion sets, IV cannulas, burette sets, catheters, and respiratory products.",
  openGraph: {
    title: "Precision Medical Device Portfolio | Mecca Care",
    description: "ISO 13485 & WHO-GMP certified clinical medical disposables.",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <ProductsHero />
      <ProductsGrid />
      <OEMServices />
      <Certifications />
      <FinalCTA />
      <Footer />
    </main>
  );
}
