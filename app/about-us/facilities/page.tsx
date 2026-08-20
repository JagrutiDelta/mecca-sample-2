"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Wind, Cpu, Settings, Factory, ArrowLeft, Layers, CheckCircle2 } from "lucide-react";

export default function FacilitiesPage() {
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
              Our Infrastructure
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
              Manufacturing Facilities
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              WHO GMP compliant premises containing Class 10,000 cleanroom environments and fully integrated production chains.
            </p>
          </div>
        </div>
      </section>

      {/* Cleanroom Environment Section */}
      <section className="py-20 lg:py-24">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Column: Visual Assets */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200">
                <img
                  src="/Cleanrrom.jpg"
                  alt="Mecca Industries Class 10,000 Cleanroom Assembly"
                  className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-4 left-4 bg-[#0F2740]/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg backdrop-blur-md">
                  Cleanroom Assembly Unit
                </span>
              </div>
            </div>

            {/* Right Column: Specifications */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
                Certified Air Purity
              </span>
              <h2 className="font-heading text-3xl font-bold text-navy mt-4 leading-tight sm:text-4xl">
                Class 10,000 Cleanrooms
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our manufacturing premises are **WHO GMP compliant** having **CLASS 10,000 (ISO Class 7)** environments. We ensure absolute contamination control through advanced environmental engineering and multi-stage filtering:
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-xs">
                  <span className="block text-xs font-bold text-slate-400 uppercase">Pre-Filter A</span>
                  <span className="block font-heading text-xl font-extrabold text-navy mt-1">20 µm</span>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">Coarse particle capture</p>
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-xs">
                  <span className="block text-xs font-bold text-slate-400 uppercase">Pre-Filter B</span>
                  <span className="block font-heading text-xl font-extrabold text-navy mt-1">5 µm</span>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">Intermediate filtration</p>
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-xs">
                  <span className="block text-xs font-bold text-slate-400 uppercase">HEPA Filter</span>
                  <span className="block font-heading text-xl font-extrabold text-burgundy mt-1">0.3 µm</span>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">99.97% microscopic capture</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* In-Process Controls & Automation */}
      <section className="bg-slate-100 py-20 lg:py-24 border-y border-slate-200">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
                Process Quality Controls
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mt-3">
                In-Process Parameters &amp; Automation
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Mecca, critical manufacturing stages are closely monitored in accordance with specified **in-process control parameters** for each and every product. 
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  "Injection Molding integrity",
                  "Optical inspection of molded components",
                  "Cleanroom assembling protocols",
                  "ETO gas sterilization cycle parameter checks"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#8B1E2D] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mt-6">
                At several stages of product development, our manufacturing processes are **fully automated and computer operated** to eliminate human error and secure absolute standardization.
              </p>
            </div>

            {/* Right Column: Icon List Card */}
            <div className="lg:col-span-5 bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-rose-50 text-burgundy flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-heading text-sm font-bold text-navy">Computerized Controls</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    PLC microprocessors monitor molding pressures, extrusion speeds, and aeration cycle times.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Settings className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-heading text-sm font-bold text-navy">Parametric Monitoring</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Strict QA checks at the compounding, assembling, and final packaging phases.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* One-Roof Manufacturing Advantage */}
      <section className="py-20 lg:py-24">
        <div className="container-px">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Layers className="w-12 h-12 text-[#8B1E2D] mx-auto mb-6 animate-pulse" />
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
              Integrated One-Roof Production
            </h3>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              To guarantee complete batch control and eliminate logistics contamination risks, our entire manufacturing pipeline is performed under one roof:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Compounding & Granulation", desc: "Formulating medical-grade PVC compounds." },
              { step: "02", title: "Precision Molding & Extrusion", desc: "Molding parts & extruding tubing under one roof." },
              { step: "03", title: "Cleanroom Assembly", desc: "Manual & automated assembly in Class 10,000 units." },
              { step: "04", title: "ETO Sterilization & Packing", desc: "Sterilizing with ETO gas and final blister sealing." }
            ].map((phase) => (
              <div key={phase.title} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-center">
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest block mb-2">Phase {phase.step}</span>
                <h4 className="font-heading text-xs sm:text-sm font-bold text-navy">{phase.title}</h4>
                <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
