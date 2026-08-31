import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import CategoryPageClient from "@/components/CategoryPageClient";
import { getCategoryById, CATEGORIES } from "@/lib/products";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.filter((cat) => cat.id !== "all").map((cat) => ({
    category: cat.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const category = getCategoryById(resolvedParams.category);
  if (!category) {
    return { title: "Category Not Found | Mecca Care" };
  }
  return {
    title: `${category.label} Disposables | Medical Portfolio | Mecca Care`,
    description: `Explore Meca Care's clinical grade ${category.label.toLowerCase()} disposable products manufactured in ISO 13485 cleanroom facilities.`,
  };
}

export default async function CategorySubpage({ params }: PageProps) {
  const resolvedParams = await params;
  const category = getCategoryById(resolvedParams.category);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-bg font-body text-navy selection:bg-burgundy selection:text-white">
      <UtilityBar />
      <Header />  

      <div className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <CategoryPageClient category={category} />
      </div>

      <Footer />
    </main>
  );
}
