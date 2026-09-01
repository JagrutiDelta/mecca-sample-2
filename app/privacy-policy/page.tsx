import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import {
  ShieldCheck,
  Lock,
  FileText,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Globe,
  Database,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Mecca Healthcare Pvt. Ltd.",
  description:
    "Learn how Mecca Healthcare Pvt. Ltd. collects, protects, and handles your personal and business data across our medical device manufacturing operations and online services.",
};

const SECTIONS = [
  { id: "introduction", title: "1. Introduction & Overview" },
  { id: "information-collected", title: "2. Information We Collect" },
  { id: "use-of-information", title: "3. How We Use Your Information" },
  { id: "oem-confidentiality", title: "4. OEM & Manufacturing Data Protection" },
  { id: "sharing-disclosure", title: "5. Information Sharing & Global Transfers" },
  { id: "data-security", title: "6. Data Security & Storage" },
  { id: "data-retention", title: "7. Data Retention Policy" },
  { id: "your-rights", title: "8. Your Privacy Rights" },
  { id: "cookies", title: "9. Cookies & Tracking Technologies" },
  { id: "contact-dpo", title: "10. Contact & Grievance Officer" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <UtilityBar />
      <Header />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-navy-gradient text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-medical-grid opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-burgundy/20 blur-3xl pointer-events-none" />

        <div className="container-px relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-accent uppercase tracking-wider backdrop-blur-md mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Legal & Compliance</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              At Mecca Healthcare Pvt. Ltd., we are committed to safeguarding the privacy and confidentiality of our clients, healthcare partners, OEM buyers, and website visitors.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-accent" />
                Last Updated: January 2026
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-accent" />
                Applicable Worldwide (50+ Export Markets)
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-400" />
                ISO 13485 & WHO-GMP Compliant Standards
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-py">
        <div className="container-px">
          <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Sidebar Table of Contents (Sticky) */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28 bg-white border border-border rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border text-navy font-heading font-bold text-base">
                  <FileText className="w-5 h-5 text-burgundy" />
                  <span>Table of Contents</span>
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
                  <p className="text-xs text-gray mb-3">Have questions about your privacy or data?</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-burgundy hover:underline"
                  >
                    Contact Privacy Officer <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <div className="lg:col-span-8 space-y-12 text-ink">
              {/* Quick Summary Cards */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl2 border border-border shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-burgundy/10 flex items-center justify-center mb-3 text-burgundy">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-sm mb-1">Zero Unauthorized Sale</h3>
                  <p className="text-xs text-gray leading-relaxed">
                    We never sell or rent your personal contact or proprietary company specifications to third parties.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl2 border border-border shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center mb-3 text-emerald-600">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-sm mb-1">OEM Confidentiality</h3>
                  <p className="text-xs text-gray leading-relaxed">
                    Strict non-disclosure agreement (NDA) standards protect your custom designs, molds, and formulations.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl2 border border-border shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-3 text-blue-600">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-sm mb-1">Full Data Control</h3>
                  <p className="text-xs text-gray leading-relaxed">
                    Request complete access, modification, or erasure of your communication history anytime.
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <article id="introduction" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  1. Introduction & Overview
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>
                    <strong className="text-navy">Mecca Healthcare Pvt. Ltd.</strong> (“MHPL”, “we”, “us”, or “our”) is a certified medical device and healthcare products manufacturer headquartered in Gujarat, India (Corporate & Manufacturing Units in Kalol, Chhatral, and Jodhpur). Since 1977, we have manufactured and exported Class I, IIa, and IIb sterile medical disposables, surgical products, and OEM solutions across 50+ countries.
                  </p>
                  <p>
                    This Privacy Policy details how we handle information collected through our website (<span className="text-navy font-medium">meccacare.com</span> / digital portals), request-for-quote (RFQ) submissions, OEM contract inquiries, job applications, and customer service communications.
                  </p>
                </div>
              </article>

              {/* Section 2 */}
              <article id="information-collected" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  2. Information We Collect
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>Depending on your interaction with Mecca Healthcare, we may collect the following categories of information:</p>
                  
                  <div className="space-y-3 mt-4">
                    <div className="p-4 rounded-xl bg-bg border border-border">
                      <h3 className="font-semibold text-navy text-sm mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-burgundy" /> A. Business & Contact Information
                      </h3>
                      <p className="text-xs md:text-sm text-gray">
                        Name, professional job title, medical institution or company name, country, corporate email address, phone/WhatsApp number, shipping destination, and billing address.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-bg border border-border">
                      <h3 className="font-semibold text-navy text-sm mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-burgundy" /> B. Product & Procurement Requirements
                      </h3>
                      <p className="text-xs md:text-sm text-gray">
                        Product inquiries, catalog download requests, estimated order volumes, regulatory requirements for target import jurisdictions, sterilization preferences (EO/Gamma), and custom packaging specifications.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-bg border border-border">
                      <h3 className="font-semibold text-navy text-sm mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-burgundy" /> C. Career & Recruitment Data
                      </h3>
                      <p className="text-xs md:text-sm text-gray">
                        Curriculum vitae (CV), employment history, academic qualifications, and references submitted through our Careers portal.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-bg border border-border">
                      <h3 className="font-semibold text-navy text-sm mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-burgundy" /> D. Technical & Analytical Data
                      </h3>
                      <p className="text-xs md:text-sm text-gray">
                        IP address, browser type, operating system, pages visited, time spent per page, and referral source collected automatically via standard server logs and cookies to ensure optimal site performance.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Section 3 */}
              <article id="use-of-information" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  3. How We Use Your Information
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>We process your data strictly for legitimate commercial and regulatory purposes, including:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-gray">
                    <li>Providing formal Price Quotations, Proforma Invoices, and product technical data sheets (TDS).</li>
                    <li>Managing manufacturing schedules, cleanroom batch production, quality assurance inspections, and freight logistics.</li>
                    <li>Complying with global medical device vigilance and traceability regulations (ISO 13485:2016, CDSCO, WHO-GMP).</li>
                    <li>Responding to customer support questions, tender inquiries, and dealership / distributorship applications.</li>
                    <li>Evaluating candidates for open positions within Mecca Healthcare.</li>
                    <li>Enhancing website security, preventing fraud, and optimizing user navigation.</li>
                  </ul>
                </div>
              </article>

              {/* Section 4 */}
              <article id="oem-confidentiality" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  4. OEM & Contract Manufacturing Data Protection
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>
                    For our OEM, Private Label, and Contract Manufacturing partners, we enforce rigorous intellectual property and technical data safeguarding:
                  </p>
                  <div className="border-l-4 border-burgundy pl-4 py-2 bg-burgundy/5 rounded-r-xl">
                    <p className="text-sm font-medium text-navy">
                      All CAD drawings, mold designs, custom extrusion profiles, proprietary compound blends, and branded packaging artwork submitted to Mecca Healthcare are treated as strictly confidential under mutually executed Non-Disclosure Agreements (NDAs).
                    </p>
                  </div>
                  <p className="text-sm text-gray">
                    Cleanroom manufacturing records and client formulation parameters are stored on isolated, encrypted servers accessible solely by authorized engineering and QA personnel.
                  </p>
                </div>
              </article>

              {/* Section 5 */}
              <article id="sharing-disclosure" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  5. Information Sharing & Global Transfers
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>
                    We do not sell, trade, or monetize your information. We may share relevant data only under the following lawful circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-gray">
                    <li><strong className="text-navy">Logistics & Shipping Partners:</strong> Trusted international freight forwarders, shipping lines, and customs clearing agents to deliver orders.</li>
                    <li><strong className="text-navy">Accredited Testing Laboratories & Notified Bodies:</strong> For batch certification, sterilization validation, or regulatory compliance documentation when requested by the buyer.</li>
                    <li><strong className="text-navy">Legal & Regulatory Authorities:</strong> When mandated by applicable laws, court orders, or government health authorities (e.g. CDSCO, US FDA, EU notified bodies).</li>
                  </ul>
                </div>
              </article>

              {/* Section 6 & 7 */}
              <article id="data-security" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  6. Data Security & Storage
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>
                    We implement industry-grade technical, physical, and administrative measures to protect your data against unauthorized access, loss, alteration, or misuse. Our digital portals utilize SSL/TLS 256-bit encryption for all data in transit.
                  </p>
                </div>
              </article>

              <article id="data-retention" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  7. Data Retention Policy
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>
                    In accordance with international medical device standards (ISO 13485:2016 Clause 4.2.5), manufacturing batch records, certificates of analysis (CoA), and procurement transaction data are retained for the defined shelf-life of the manufactured devices (plus statutory limitation periods) or as mandated by healthcare regulatory authorities.
                  </p>
                </div>
              </article>

              {/* Section 8 */}
              <article id="your-rights" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  8. Your Privacy Rights
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>Depending on your jurisdiction (such as GDPR in Europe, DPDP Act in India, or equivalent privacy frameworks), you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-gray">
                    <li>Request access to and a copy of personal information we maintain about you.</li>
                    <li>Request correction of inaccurate or incomplete corporate or personal details.</li>
                    <li>Request deletion or restriction of processing of your data, subject to statutory medical device record retention mandates.</li>
                    <li>Withdraw consent for marketing communications or newsletter updates at any time.</li>
                  </ul>
                </div>
              </article>

              {/* Section 9 */}
              <article id="cookies" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  9. Cookies & Tracking Technologies
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray">
                  <p>
                    Our website uses essential and analytical cookies to remember user preferences (such as language translation settings) and analyze traffic patterns. You can adjust your browser settings to refuse cookies or alert you when cookies are being sent.
                  </p>
                </div>
              </article>

              {/* Section 10 */}
              <article id="contact-dpo" className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-card scroll-mt-28">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy mb-4">
                  10. Contact Information & Grievance Officer
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray mb-6">
                  <p>
                    If you have questions, feedback, or wish to exercise your privacy rights, please reach out to our Compliance & Privacy Office:
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="p-5 rounded-xl bg-bg border border-border space-y-2">
                    <div className="flex items-center gap-2 font-semibold text-navy">
                      <MapPin className="w-4 h-4 text-burgundy" /> Corporate Headquarters
                    </div>
                    <p className="text-gray text-xs leading-relaxed">
                      Mecca Healthcare Pvt. Ltd.<br />
                      Kalol / Chhatral Industrial Area,<br />
                      Gandhinagar, Gujarat 382721, India
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-bg border border-border space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-burgundy" />
                      <div>
                        <span className="text-xs text-gray block">Email Compliance</span>
                        <a href="mailto:info@meccacare.com" className="text-navy font-semibold hover:text-burgundy transition-colors">
                          info@meccacare.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-burgundy" />
                      <div>
                        <span className="text-xs text-gray block">Telephone</span>
                        <span className="text-navy font-semibold">+91 (0) 2764 225 000</span>
                      </div>
                    </div>
                  </div>
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
