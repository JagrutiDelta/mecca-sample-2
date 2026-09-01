import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import {
  FileCheck,
  Scale,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
  Truck,
  Globe,
  Building,
  Calendar,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Mecca Healthcare Pvt. Ltd.",
  description:
    "Review the terms of use, medical device product warranties, quotation guidelines, OEM manufacturing agreements, and legal conditions governing Mecca Healthcare Pvt. Ltd.",
};

const SECTIONS = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "medical-disclaimer", title: "2. Medical Device Disclaimer & Intended Use" },
  { id: "orders-quotations", title: "3. Quotations, Pricing & Purchase Orders" },
  { id: "oem-contract-terms", title: "4. OEM, Private Label & Contract Manufacturing" },
  { id: "quality-warranty", title: "5. Quality Assurance, Inspection & Warranty" },
  { id: "shipping-export", title: "6. International Shipping, Customs & Incoterms" },
  { id: "intellectual-property", title: "7. Intellectual Property & Trademarks" },
  { id: "limitation-liability", title: "8. Limitation of Liability" },
  { id: "governing-law", title: "9. Governing Law & Jurisdiction" },
  { id: "contact-legal", title: "10. Inquiries & Legal Notices" },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <UtilityBar />
      <Header />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-navy-gradient text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-medical-grid opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-burgundy/20 blur-3xl pointer-events-none" />

        <div className="container-px relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider backdrop-blur-md mb-6">
              <Scale className="w-4 h-4 text-accent" />
              <span>Legal Agreements</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">
              Terms & Conditions
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              These terms govern the use of our website, product procurement, supply agreements, and OEM / contract manufacturing services provided by Mecca Healthcare Pvt. Ltd.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-accent" />
                Effective Date: January 2026
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                ISO 13485:2016 Certified Manufacturer
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-accent" />
                50+ Export Destinations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-py">
        <div className="container-px">
          <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Sidebar Table of Contents */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28 bg-white border border-border rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border text-navy font-heading font-bold text-base">
                  <FileCheck className="w-5 h-5 text-burgundy" />
                  <span>Sections</span>
                </div>
                <nav className="space-y-1.5 text-sm">
                  {SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block px-3 py-2 rounded-lg text-gray hover:text-burgundy hover:bg-bg transition-colors font-medium text-xs md:text-sm"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-border bg-[#F8FAFC] -mx-6 -mb-6 p-6 rounded-b-2xl">
                  <p className="text-xs text-gray mb-3">Need specialized procurement terms for tenders or OEM?</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-burgundy hover:underline"
                  >
                    Contact Legal & Contracts Team <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <div className="lg:col-span-8 space-y-12 text-ink">
              {/* Key Principles */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl2 border border-border shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-burgundy/10 flex items-center justify-center mb-3 text-burgundy">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-sm mb-1">Medical Compliance</h3>
                  <p className="text-xs text-gray leading-relaxed">
                    All products are manufactured under rigorous ISO 13485:2016 and WHO-GMP audited cleanrooms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl2 border border-border shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center mb-3 text-amber-600">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-sm mb-1">Incoterms Standard</h3>
                  <p className="text-xs text-gray leading-relaxed">
                    Global shipments adhere to standard ICC Incoterms (FOB, CIF, CFR, Ex-Works) as specified in Proforma Invoices.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl2 border border-border shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-3 text-blue-600">
                    <Building className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-sm mb-1">Institutional B2B</h3>
                  <p className="text-xs text-gray leading-relaxed">
                    Transactions are tailored for hospitals, distributors, OEM brand owners, and ministry tenders.
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <article id="acceptance" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  1. Acceptance of Terms
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>
                    By accessing or utilizing the websites, digital catalogs, and procurement facilities of <strong className="text-navy">Mecca Healthcare Pvt. Ltd.</strong> (“MHPL”, “Company”, “we”, or “us”), you agree to be bound by these Terms and Conditions. If you are entering into this agreement on behalf of a hospital, medical distributor, or corporate entity, you represent that you hold the requisite authority to bind such entity.
                  </p>
                </div>
              </article>

              {/* Section 2 */}
              <article id="medical-disclaimer" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4 flex items-center gap-2">
                  2. Medical Device Disclaimer & Intended Use
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs md:text-sm">
                    <p className="font-semibold flex items-center gap-2 mb-1">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" /> Important Clinical Usage Notice
                    </p>
                    Medical devices manufactured by Mecca Healthcare (including IV infusion sets, catheters, endotracheal tubes, urine drainage bags, surgical suction sets) are sterile single-use devices intended for use exclusively by qualified, licensed healthcare professionals.
                  </div>
                  <p>
                    Products must be stored, unpacked, and handled strictly in accordance with labeled Instructions for Use (IFU), storage condition guidelines, and sterilization validity dates. Mecca Healthcare assumes no liability for device misuse, re-sterilization of single-use devices, or off-label clinical applications.
                  </p>
                </div>
              </article>

              {/* Section 3 */}
              <article id="orders-quotations" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  3. Quotations, Pricing & Purchase Orders
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <ul className="list-disc pl-6 space-y-2 text-sm text-gray">
                    <li><strong className="text-navy">Validity of Quotations:</strong> All price quotes, Proforma Invoices, and product pricing schedules remain valid for the period expressly stated therein (typically 30 days), subject to foreign exchange rate fluctuations and raw material (medical grade polymers) indexed variations.</li>
                    <li><strong className="text-navy">Order Confirmation:</strong> A Purchase Order (PO) becomes legally binding only upon written acceptance and formal Order Confirmation issued by Mecca Healthcare Pvt. Ltd.</li>
                    <li><strong className="text-navy">Minimum Order Quantities (MOQ):</strong> Standard bulk export orders and custom OEM production runs are subject to established MOQs per product line and batch cleanroom sizing.</li>
                  </ul>
                </div>
              </article>

              {/* Section 4 */}
              <article id="oem-contract-terms" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  4. OEM, Private Label & Contract Manufacturing
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>
                    For clients engaging Mecca Healthcare under OEM, Loan License, or Private Label arrangements:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-gray">
                    <li><strong className="text-navy">Artwork & Regulatory Approvals:</strong> The client is solely responsible for verifying that all brand names, artwork, barcodes, and local language labeling comply with the medical device regulations of their destination country.</li>
                    <li><strong className="text-navy">Tooling & Mold Ownership:</strong> Custom tooling, dies, and molds funded exclusively by the client remain the property of the client, maintained and stored under strict preventive maintenance protocols in our facilities.</li>
                    <li><strong className="text-navy">Non-Disclosure & Confidentiality:</strong> Both parties shall execute mutual NDAs prior to the exchange of proprietary technical drawings, formulation ratios, or commercial specifications.</li>
                  </ul>
                </div>
              </article>

              {/* Section 5 */}
              <article id="quality-warranty" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  5. Quality Assurance, Inspection & Warranty
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>
                    Mecca Healthcare warrants that all medical devices supplied conform to certified specifications, approved pre-production samples, and applicable standards (ISO 13485:2016, ISO 8536-4 for IV sets, ISO 10555 for catheters, EN 556-1 for sterilization).
                  </p>
                  <p>
                    <strong className="text-navy">Batch Traceability:</strong> Each consignment is issued with a Certificate of Analysis (CoA) and sterilization batch validation reports. In the rare event of verified manufacturing defects reported within thirty (30) days of receipt, Mecca Healthcare will replace the affected batch or issue credit adjustments in accordance with our Quality Management System audit protocols.
                  </p>
                </div>
              </article>

              {/* Section 6 */}
              <article id="shipping-export" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  6. International Shipping, Customs & Incoterms
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>
                    Delivery dates provided are estimates based on production scheduling and shipping line availability. Mecca Healthcare is not liable for freight delays caused by customs clearance holds in the destination country, Force Majeure events, port congestions, or geopolitical disruptions.
                  </p>
                  <p>
                    Title and risk of loss pass to the buyer in accordance with the agreed Incoterm (e.g. FOB Mundra/Nhava Sheva, CIF Destination Port, or Ex-Works Kalol/Chhatral).
                  </p>
                </div>
              </article>

              {/* Section 7 */}
              <article id="intellectual-property" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  7. Intellectual Property & Trademarks
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>
                    All logos, product names (<em className="text-navy">Meca Care</em>, <em className="text-navy">Mecca Labs</em>), product imagery, technical datasheets, and website content are the exclusive intellectual property of Mecca Healthcare Pvt. Ltd. and are protected by applicable trademark and copyright laws. Unauthorized reproduction or commercial redistribution without prior written consent is strictly prohibited.
                  </p>
                </div>
              </article>

              {/* Section 8 & 9 */}
              <article id="limitation-liability" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  8. Limitation of Liability
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>
                    To the maximum extent permitted by applicable law, Mecca Healthcare Pvt. Ltd. shall not be liable for indirect, incidental, consequential, or punitive damages arising out of the purchase, delivery, or clinical application of products, exceeding the net invoice amount paid for the specific goods giving rise to the claim.
                  </p>
                </div>
              </article>

              <article id="governing-law" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  9. Governing Law & Jurisdiction
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>
                    These Terms and Conditions and all commercial transactions shall be governed by and construed in accordance with the substantive laws of the Republic of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Gandhinagar / Ahmedabad, Gujarat, India.
                  </p>
                </div>
              </article>

              {/* Section 10 */}
              <article id="contact-legal" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  10. Inquiries & Legal Notices
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray mb-6">
                  <p>
                    For official legal communications, contract inquiries, or OEM compliance discussions, please contact our Legal & Regulatory Affairs division:
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-border shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-bold text-navy text-base">Mecca Healthcare Pvt. Ltd.</h3>
                    <p className="text-xs text-gray mt-1">Corporate & International Trade Division</p>
                    <p className="text-xs text-navy font-medium mt-1">Kalol, Gandhinagar, Gujarat 382721, India</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-burgundy hover:bg-burgundy-dark text-white text-xs font-semibold px-5 py-2.5 transition-colors shadow-sm"
                  >
                    Contact Legal Department <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
