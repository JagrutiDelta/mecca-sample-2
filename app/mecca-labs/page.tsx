import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import Breadcrumb from "@/components/mecca-labs/breadcrumb";
import CategoryCard from "@/components/mecca-labs/category-card";
import Container from "@/components/Container";
import { ALL_CATALOGUES } from "@/lib/mecca-labs";
import { ShieldCheck, Award, Microscope, FlaskConical, Sparkles, Download, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Mecca Labs Product Catalogues | Pharmaceutical, Nutraceutical, Milk & Cosmeceutical | Mecca Care",
  description:
    "Explore Mecca Labs' complete portfolio of WHO-GMP pharmaceutical formulations, domestic & export nutraceuticals, pediatric & sports milk products, and cosmeceuticals.",
  openGraph: {
    title: "Mecca Labs Catalogues | Mecca Care",
    description:
      "Explore Mecca Labs' complete portfolio of WHO-GMP pharmaceutical formulations, domestic & export nutraceuticals, pediatric & sports milk products, and cosmeceuticals.",
    url: "https://www.mhplindia.in/mecca-labs",
  },
};

export default function MeccaLabsPage() {
  const breadcrumbs = [{ label: "Mecca Labs" }];

  return (
    <main className="min-h-screen flex flex-col bg-bg font-body text-navy selection:bg-burgundy selection:text-white">
      <UtilityBar />
      <Header />

      <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <Container>
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbs} />

          {/* Landing Hero */}
          <section className="relative w-full overflow-hidden rounded-xl2 border border-border bg-white p-6 sm:p-10 lg:p-14 shadow-card mb-14">
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-burgundy/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-medblue/5 blur-3xl" />

            <div className="max-w-3xl lg:max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="eyebrow">FORMULATION SCIENCE & HEALTHCARE</span>
                <span className="h-1.5 w-1.5 rounded-full bg-burgundy/40" />
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="h-3 w-3" />
                  WHO-GMP & FSSAI Certified
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.12] tracking-tight">
                Mecca Labs Product Catalogues
              </h1>

              <p className="mt-4 font-heading text-base sm:text-lg font-medium text-medblue leading-relaxed">
                Precision-formulated pharmaceuticals, clinical nutraceuticals, advanced milk nutrition, and therapeutic cosmeceuticals.
              </p>

              <p className="mt-3 text-sm text-gray leading-relaxed">
                Mecca Labs represents Mecca Healthcare’s specialized formulation and chemical sciences division. Browse all 5 comprehensive product catalogues below, rendered as interactive web listings with complete compositions, strengths, packaging details, and instant original PDF downloads.
              </p>

              {/* Quality Pillars */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold text-navy">
                <div className="flex items-center gap-1.5 rounded-xl border border-border bg-bg/80 px-3.5 py-1.5 shadow-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-burgundy" />
                  <span>5 Dedicated Catalogues</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-xl border border-border bg-bg/80 px-3.5 py-1.5 shadow-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-medblue" />
                  <span>350+ Certified Formulations</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-xl border border-border bg-bg/80 px-3.5 py-1.5 shadow-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>WHO-GMP Cleanrooms</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="eyebrow mb-2">COMPLETE PORTFOLIO</div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
                Select a Catalogue to Explore
              </h2>
            </div>
            <span className="text-xs font-bold text-gray uppercase tracking-wider bg-white border border-border px-3.5 py-1.5 rounded-full shadow-xs">
              5 Product Divisions
            </span>
          </div>

          {/* 5 Product Catalogue Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_CATALOGUES.map((cat, idx) => (
              <CategoryCard key={cat.slug} catalogue={cat} index={idx} />
            ))}
          </div>

          {/* Regulatory Quality Banner */}
          <div className="rounded-xl2 border border-border bg-white p-6 sm:p-8 mt-16 shadow-soft">
            <div className="text-center max-w-2xl mx-auto">
              <div className="eyebrow justify-center mb-2">REGULATORY COMPLIANCE</div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy">
                International Quality & Clinical Certifications
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray leading-relaxed">
                All Mecca Labs facilities and products comply with stringent national and international regulatory frameworks including CDSCO, EU-GMP guidelines, US-FDA cGMP dietary standards, FSSAI, and ISO standards.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {[
                  "WHO-GMP Certified",
                  "FSSAI Approved",
                  "ISO 9001:2015",
                  "ISO 22000 (HACCP)",
                  "ISO 22716 Cosmetic GMP",
                  "CDSCO Licensed",
                  "Halal & Kosher Ready",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-3.5 py-1 text-xs font-semibold text-navy shadow-2xs"
                  >
                    <ShieldCheck className="h-3 w-3 text-burgundy" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  );
}
