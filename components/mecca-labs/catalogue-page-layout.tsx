"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import Breadcrumb from "./breadcrumb";
import Hero from "./hero";
import TOC from "./toc";
import SectionHeader from "./section-header";
import ProductTable from "./product-table";
import DownloadButton from "./download-button";
import { Catalogue } from "@/lib/mecca-labs/types";

interface CataloguePageLayoutProps {
  catalogue: Catalogue;
}

export default function CataloguePageLayout({
  catalogue,
}: CataloguePageLayoutProps) {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Mecca Labs", href: "/products/mecca-labs" },
    { label: catalogue.title },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-bg font-body text-navy selection:bg-burgundy selection:text-white">
      <UtilityBar />
      <Header />

      <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="mx-auto max-w-7xl container-px">
          {/* 1. Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* 2. Hero Section */}
          <Hero catalogue={catalogue} />

          {/* 3 & 4. Interactive Catalogue Area (Sticky TOC + Product Categories) */}
          <div
            id="catalogue-content"
            className="mt-12 lg:mt-16 flex flex-col lg:flex-row items-start gap-8 lg:gap-10"
          >
            {/* Sticky TOC */}
            <TOC categories={catalogue.categories} />

            {/* Product Category Sections */}
            <div className="flex-1 min-w-0 w-full">
              {catalogue.categories.map((category) => (
                <section
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-32 mb-14"
                >
                  <SectionHeader category={category} />

                  {category.subgroups.map((subgroup, sgIdx) => (
                    <ProductTable
                      key={`${category.id}-sg-${sgIdx}`}
                      subgroup={subgroup}
                    />
                  ))}
                </section>
              ))}
            </div>
          </div>

          {/* 5. Download Section (Bottom) */}
          <DownloadButton
            title={catalogue.title}
            pdfUrl={catalogue.pdfUrl}
            pdfFileName={catalogue.pdfFileName}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
