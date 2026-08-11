import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import ProductDetailClient from "./ProductDetailClient";
import { getProductById, getRelatedProducts, PRODUCTS } from "@/lib/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);
  if (!product) {
    return { title: "Product Not Found | Mecca Care" };
  }
  return {
    title: `${product.name} | Medical Device Portfolio | Mecca Care`,
    description: product.desc,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, 3);

  return (
    <main className="min-h-screen flex flex-col bg-bg font-body text-navy selection:bg-burgundy selection:text-white">
      <UtilityBar />
      <Header />

      {/* Main Content Area */}
      <div className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      </div>

      <Footer />
    </main>
  );
}
