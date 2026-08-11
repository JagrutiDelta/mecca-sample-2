import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import ProductDetailClient from "./ProductDetailClient";
import CategoryPageClient from "@/components/CategoryPageClient";
import {
  getProductById,
  getCategoryById,
  getRelatedProducts,
  PRODUCTS,
  CATEGORIES,
} from "@/lib/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const productParams = PRODUCTS.map((product) => ({
    id: product.id,
  }));
  const categoryParams = CATEGORIES.filter((cat) => cat.id !== "all").map((cat) => ({
    id: cat.id,
  }));
  return [...productParams, ...categoryParams];
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);
  if (product) {
    return {
      title: `${product.name} | Medical Device Portfolio | Mecca Care`,
      description: product.desc,
    };
  }

  const category = getCategoryById(resolvedParams.id);
  if (category) {
    return {
      title: `${category.label} Disposables | Medical Portfolio | Mecca Care`,
      description: `Explore Meca Care's clinical grade ${category.label.toLowerCase()} disposable products manufactured in ISO 13485 cleanroom facilities.`,
    };
  }

  return { title: "Product Not Found | Mecca Care" };
}

export default async function DynamicProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const productId = resolvedParams.id;

  const product = getProductById(productId);
  const category = getCategoryById(productId);

  if (!product && !category) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-bg font-body text-navy selection:bg-burgundy selection:text-white">
      <UtilityBar />
      <Header />

      <div className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        {product ? (
          <ProductDetailClient
            product={product}
            relatedProducts={getRelatedProducts(product.id, 3)}
          />
        ) : category ? (
          <CategoryPageClient category={category} />
        ) : null}
      </div>

      <Footer />
    </main>
  );
}
