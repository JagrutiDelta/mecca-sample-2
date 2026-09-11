import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import ProductDetailClient from "@/app/products/[id]/ProductDetailClient";
import CataloguePageLayout from "@/components/mecca-labs/catalogue-page-layout";
import { getProductById, getRelatedProducts, PRODUCTS } from "@/lib/products";
import { getCatalogueBySlug, ALL_CATALOGUES } from "@/lib/mecca-labs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const meccaProducts = PRODUCTS.filter((p) => p.categoryId === "mecca-labs");
  const productSlugs = meccaProducts.map((product) => ({
    slug: product.id,
  }));
  const catalogueSlugs = ALL_CATALOGUES.map((cat) => ({
    slug: cat.slug,
  }));
  return [...productSlugs, ...catalogueSlugs];
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const catalogue = getCatalogueBySlug(resolvedParams.slug);
  if (catalogue) {
    return {
      title: `${catalogue.title} | Mecca Labs | Mecca Care`,
      description: catalogue.description,
    };
  }

  const product = getProductById(resolvedParams.slug);
  if (product) {
    return {
      title: `${product.name} | Mecca Labs Portfolio | Mecca Care`,
      description: product.desc,
    };
  }
  return { title: "Product Not Found | Mecca Care" };
}

export default async function MeccaLabProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const catalogue = getCatalogueBySlug(resolvedParams.slug);

  if (catalogue) {
    return <CataloguePageLayout catalogue={catalogue} />;
  }

  const product = getProductById(resolvedParams.slug);
  if (!product) {
    notFound();
  }

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
