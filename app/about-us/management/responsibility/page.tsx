"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Users, ArrowLeft, HeartPulse, Sparkles, BookOpen } from "lucide-react";

export default function ResponsibilityPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F2740] py-20 lg:py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,30,45,0.15),transparent_50%)]" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-[#8B1E2D]/5 blur-3xl" />
        
        <div className="container-px relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/about-us/management"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-300 hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Management Overview</span>
            </Link>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
              Management Responsibility
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Fostering absolute commitment to patient safety, client expectations, and internal quality benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* General Policy Section */}
      <section className="py-20 lg:py-24">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12 items-stretch">
            
            {/* Left: General Policy Statement Box */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#8B1E2D] to-red-950 text-white rounded-3xl p-8 lg:p-10 shadow-md relative overflow-hidden flex flex-col justify-between border border-rose-900">
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full blur-2xl animate-pulse" />
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-300 bg-white/10 px-3 py-1 rounded-full mb-6">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  General Quality Policy
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  &ldquo;MHPL believes Manufacturing Products is a responsibility &amp; Quality is the responsibility of each employee throughout our organization.&rdquo;
                </h2>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-rose-200">
                Core Governance Policy Statement &mdash; Mecca Healthcare Pvt. Ltd.
              </div>
            </div>

            {/* Right: Responsibility Details */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
              
              {/* Responsibility Point 1 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy">Duty of Care to Stakeholders</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    This responsibility is towards the users, channel partners, and the society at large. Our strength in the healthcare sector is backed by a proven track record of quality products manufacturing for the past 30 years.
                  </p>
                </div>
              </div>

              {/* Responsibility Point 2 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-burgundy" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy">Deep Knowledge &amp; Benchmarking</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    In line with our learning curve, we have acquired deep knowledge of the disposable medical devices sector and have established our own internal benchmarks in manufacturing world-class quality products.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-slate-100 py-16 border-t border-b border-slate-200">
        <div className="container-px mx-auto max-w-4xl text-center">
          <BookOpen className="w-10 h-10 text-burgundy mx-auto mb-4" />
          <h4 className="font-heading text-lg sm:text-xl font-bold text-navy italic">
            &ldquo;Every product we manufacture is a clinical promise of safety, sterility, and structural integrity. Every employee is accountable.&rdquo;
          </h4>
          <p className="text-xs text-slate-400 mt-3 uppercase tracking-wider font-semibold">
            MHPL Management Review Committee
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
