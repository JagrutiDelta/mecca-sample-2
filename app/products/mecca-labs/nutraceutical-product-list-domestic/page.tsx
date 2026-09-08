import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import ProductDetailClient from "@/app/products/[id]/ProductDetailClient";
import { getProductById, getRelatedProducts } from "@/lib/products";

export const metadata = {
  title: "NUTRACEUTICAL PRODUCT LIST (Domestic) | Mecca Labs | Mecca Care",
  description:
    "Premium domestic nutritional supplements, dietary formulations, vitamin blends, and wellness solutions registered with FSSAI.",
};

export default function DomesticNutraceuticalProductListPage() {
  const product = getProductById("nutraceutical-product-list-domestic")!;
  return (
    <main className="min-h-screen flex flex-col bg-bg font-body text-navy selection:bg-burgundy selection:text-white">
      <UtilityBar />
      <Header />

      <div className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <ProductDetailClient
          product={product}
          relatedProducts={getRelatedProducts(product.id, 3)}
        />
      </div>

      <Footer />
    </main>
  );
}
