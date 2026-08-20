"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Compass, Eye, ShieldCheck, Factory, Award, Globe, HelpCircle, ArrowRight } from "lucide-react";

const PLANTS = [
  { name: "Kalol Plant", location: "Dist. Gandhinagar, Gujarat", type: "Compounding & Extrusion" },
  { name: "Chhatral Plant", location: "Dist. Mehsana, Gujarat", type: "Cleanroom Assembly & Molding" },
  { name: "Boranada Plant", location: "RIICO Boranada Ind. Area, Jodhpur, Rajasthan (Set up in 2007)", type: "Specialized Intensive Care, Anesthesia, Urology, Gynecology, & Cardiology lines" }
];

const GOVERNMENT_CLIENTS = [
  "State Government of Gujarat",
  "State Government of Madhya Pradesh",
  "State Government of Maharashtra",
  "State Government of Tamil Nadu"
];

const STRATEGIC_PARTNERS = [
  { name: "B. Braun Melsungen AG", status: "Loan license contract manufacturing" },
  { name: "Fresenius Kabi AG", status: "Loan license contract manufacturing" },
  { name: "Claris Otsuka Ltd", status: "Formerly Core Parenterals (associated since 1988)" }
];

const HISTORICAL_PARTNERS = [
  "Sarabhai Industries", "Cadila Pharmaceuticals", "Tide Pharmaceuticals (Torrent)", 
  "Wockhardt Pharma", "Intas Pharmaceuticals", "Cipla Limited", "Albert David Ltd"
];

const PRODUCT_SECTORS = [
  "Parenteral Drug Delivery Systems", "Blood Bank Equipment", "Urology & Gastro-Enterology",
  "Transfusion & Dialysis", "Anesthesia Range", "Cardiology & Vascular Surgery", "General Surgical Disposables"
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F2740] py-20 lg:py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,30,45,0.15),transparent_50%)]" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-[#8B1E2D]/5 blur-3xl" />
        
        <div className="container-px relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-300">
              Corporate Profile
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
              Organization Profile
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Catering to the healthcare industry since 1977. Discover Mecca Industries' combined manufacturing capacities, strategic partnerships, and global footprints.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview Grid */}
      <section className="py-20 lg:py-24">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
                Mecca Group of Industries
              </span>
              <h2 className="font-heading text-3xl font-bold text-navy mt-4 leading-tight sm:text-4xl">
                Catering to Global Healthcare
              </h2>
              <p>
                <strong>Mecca Group of Industries</strong> is a manufacturing collective established in the year 1977 catering to the healthcare industry. Mecca Industries is among the first Indian companies to begin manufacturing Intravenous Infusion Equipment.
              </p>
              <p>
                The <strong>core business</strong> of the group is Contract Manufacturing on a Loan License Basis &amp; OEM Supply. Today, we are an ISO and WHO GMP compliant concern supplying to varied sectors of the healthcare industry in India and globally.
              </p>
              <div className="p-6 bg-slate-100 rounded-2xl border border-slate-200 mt-6">
                <h4 className="font-heading text-sm font-bold text-navy mb-2">Acronym Representation (1977):</h4>
                <p className="text-xs leading-relaxed text-slate-500">
                  The 5 letters in the name of <strong>M E C C A</strong> represent different branches of engineering at the time of inception: <strong>Mechanical, Electronics, Civil, Chemical, and Agriculture</strong>.
                </p>
              </div>
            </div>

            {/* Right Column: Combined Capacity Stats Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0F2740] to-slate-900 text-white rounded-3xl p-8 shadow-md relative overflow-hidden border border-slate-800 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B1E2D]/20 rounded-full blur-2xl" />
              <div>
                <Factory className="w-10 h-10 text-rose-400 mb-6" />
                <h3 className="font-heading text-xl font-bold">One-Roof Production Power</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  Our manufacturing plants have combined capacities of <strong>over 30 million pieces per annum</strong>. All plants are equipped to perform complete manufacturing processes under one-roof, right from plastic compounding, granulation, extrusion of medical grade PVC tubing, injection molding, cleanroom assembly to ETO gas sterilization &amp; packaging.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between text-xs text-rose-300">
                <span>3 Manufacturing Plants</span>
                <span>30M+ Pcs / Annum Capacity</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Manufacturing Facilities Cards */}
      <section className="bg-slate-100 py-20 lg:py-24 border-y border-slate-200">
        <div className="container-px">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
              Three State-of-the-Art Plants
            </h2>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              Equipped with cleanroom conditions conforming to international manufacturing norms.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PLANTS.map((plant, idx) => (
              <motion.div
                key={plant.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="bg-rose-50 text-burgundy w-8 h-8 rounded-lg flex items-center justify-center font-bold mb-4">
                    <Building2 className="w-4.5 h-4.5" />
                  </span>
                  <h4 className="font-heading text-base font-bold text-navy">{plant.name}</h4>
                  <p className="text-xs font-semibold text-slate-400 mt-0.5">{plant.location}</p>
                  <p className="text-xs text-slate-600 mt-4 leading-relaxed">{plant.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships & Exports Section */}
      <section className="py-20 lg:py-24">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Left: Strategic Partners */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy">Strategic Partnerships</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We work on a loan license contract manufacturing basis with the Indian arms of two of the largest German healthcare companies in the world, as well as domestic leaders:
              </p>
              
              <div className="space-y-4">
                {STRATEGIC_PARTNERS.map((partner) => (
                  <div key={partner.name} className="bg-white border border-slate-200 p-4 rounded-xl flex items-center justify-between shadow-xs">
                    <div>
                      <h4 className="font-heading text-xs sm:text-sm font-bold text-navy">{partner.name}</h4>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5">{partner.status}</p>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-100 px-2.5 py-1 rounded-full font-bold uppercase">Active</span>
                  </div>
                ))}
              </div>

              {/* Historical partners block */}
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                <h4 className="font-heading text-xs font-bold text-navy mb-2">Prior Collaborations:</h4>
                <div className="flex flex-wrap gap-2">
                  {HISTORICAL_PARTNERS.map((partner) => (
                    <span key={partner} className="text-[10px] bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-500 font-medium">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Government Contracts & Global Exports */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* State Contracts */}
              <div className="space-y-3">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy">Government Annual Rate Contracts</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Catering directly to critical state government clinical requirements in India:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {GOVERNMENT_CLIENTS.map((client) => (
                    <div key={client} className="bg-slate-100 border border-slate-200 p-3 rounded-lg text-xs font-bold text-navy text-center">
                      {client}
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Exports */}
              <div className="space-y-3">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy">Global Exports</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Exporting CE-marked products since 1991 to global healthcare markets through contract manufacturing and merchant exports:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["CIS Countries", "Middle Eastern Nations", "South East Asian Countries", "African Nations", "Latin American Countries"].map((region) => (
                    <span key={region} className="text-xs bg-rose-50 text-burgundy border border-burgundy/10 px-3.5 py-1.5 rounded-full font-semibold flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-burgundy" />
                      <span>{region}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Certifications & Sectors */}
      <section className="bg-[#0F2740] text-white py-20 lg:py-24 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,30,45,0.1),transparent_40%)]" />
        <div className="container-px relative z-10">
          
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left: Certifications */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-rose-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Quality Credentials
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">System Compliance</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our manufacturing premises conform to WHO-GMP norms. Mecca Healthcare Pvt. Ltd. holds the following certifications for disposable medical devices:
              </p>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ISO 13485:2016 (Medical Devices QA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ISO 9001:2015 (Quality Management System)</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CE Marked Products (Certified by Notified Body)</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WHO GMP Compliant Manufacturing Facilities</span>
                </li>
              </ul>
            </div>

            {/* Right: Product Sectors */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Active Product Sectors</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Mecca manufactures and markets reliable, sterile medical disposables covering:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {PRODUCT_SECTORS.map((sector) => (
                  <div key={sector} className="bg-white/5 border border-white/10 p-3 rounded-lg text-xs font-semibold text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-burgundy rounded-full" />
                    <span>{sector}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 lg:py-24">
        <div className="container-px">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-bold text-navy">Our Vision</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed italic">
                  &ldquo;To be an organization whose people &amp; products exude CARE, COMPASSION &amp; TRUST towards its customers, business partners and the society at large.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-burgundy flex items-center justify-center mb-6 border border-rose-100">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-bold text-navy">Our Mission</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed italic">
                  &ldquo;To be an organization whose employees strive for growth and values the contribution made by its founding members, through always keeping in mind the health and safety of the users of its products and thus satisfying the growing needs of the healthcare industry and its customers.&rdquo;
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
