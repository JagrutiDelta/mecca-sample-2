"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, DollarSign, TrendingUp, BarChart3, Truck, Layers, Settings, Users2, ShieldCheck, Factory, GitFork } from "lucide-react";

export default function OrganizationChartPage() {
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
              Organization Chart
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Mapping out the structured governance and quality accountability lines across our executive, clinical, and operational teams.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Visual Org Chart Flow */}
      <section className="py-20 lg:py-28 relative">
        <div className="container-px">
          
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="eyebrow mb-3 inline-flex items-center gap-1 rounded-full border border-[#8B1E2D]/15 bg-[#8B1E2D]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8B1E2D]">
              Governance Layout
            </span>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl mt-3">
              Corporate Hierarchy Flow
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm">
              Mecca Healthcare (P) Ltd structural reporting paths from corporate board to plant floor departments.
            </p>
          </div>

          {/* Flowchart Visualization Container */}
          <div className="relative w-full max-w-5xl mx-auto bg-white border border-slate-200/80 shadow-soft rounded-3xl p-6 sm:p-10 lg:p-16 overflow-hidden">
            {/* Background grid texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-60" />

            {/* Chart Core Grid */}
            <div className="relative z-10 flex flex-col items-center">
              
              {/* Node 1: Top Management */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-80 bg-[#0F2740] text-white border-2 border-burgundy rounded-2xl p-6 text-center shadow-lg relative"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-burgundy text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 shadow-sm">
                  Executive Decision Body
                </span>
                <div className="flex justify-center mb-3 text-rose-300">
                  <Users2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-base font-bold">TOP MANAGEMENT</h3>
                <p className="text-xs text-slate-300 font-semibold mt-1">Mecca Healthcare (P) Ltd</p>
              </motion.div>

              {/* Vertical line connecting Top Management and Plant GM */}
              <div className="h-12 w-0.5 bg-slate-300 relative flex justify-center items-center">
                {/* Arrow pointing UP from Plant GM to Top Management */}
                <div className="absolute top-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-slate-400 -translate-y-1/2" />
              </div>

              {/* Middle Section: Side Departments Stack + Plant GM */}
              <div className="grid grid-cols-12 gap-4 w-full items-center relative">
                
                {/* Left Column Stack: Finance, Strategy, Marketing, Supply Chain */}
                <div className="col-span-12 md:col-span-4 flex flex-col gap-4 relative">
                  {/* Vertical connecting bus line for left stack */}
                  <div className="absolute right-0 top-6 bottom-6 w-0.5 bg-slate-300 hidden md:block" />
                  
                  {[
                    { title: "FINANCE", desc: "Capital management & fiscal compliance", icon: DollarSign, color: "text-amber-500 bg-amber-50 border-amber-100" },
                    { title: "STRATEGY", desc: "Corporate scaling & joint ventures", icon: TrendingUp, color: "text-blue-500 bg-blue-50 border-blue-100" },
                    { title: "BUSINESS MARKETING", desc: "Global client relations & branding", icon: BarChart3, color: "text-rose-500 bg-rose-50 border-rose-100" },
                    { title: "SUPPLY CHAIN & LOGISTICS", desc: "Sterile supply routing & transit", icon: Truck, color: "text-indigo-500 bg-indigo-50 border-indigo-100" }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-xs hover:shadow-sm transition-all duration-300 relative group flex items-start gap-3.5"
                      >
                        {/* Horizontal connector line from left card to the vertical bus line */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-slate-300 translate-x-full hidden md:block" />
                        
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center border shrink-0 ${item.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-heading text-xs font-bold text-navy group-hover:text-burgundy transition-colors">{item.title}</h4>
                          <p className="text-[10px] text-slate-500 mt-1 leading-normal">{item.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Horizontal line bridge from side departments bus to the center flow */}
                <div className="hidden md:flex col-span-2 items-center justify-end pr-2 h-full">
                  {/* Line going from left stack's vertical bus line to the Plant GM node */}
                  <div className="w-full h-0.5 bg-slate-300 relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-400" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-slate-300" />
                  </div>
                </div>

                {/* CENTER Node: Plant General Manager */}
                <div className="col-span-12 md:col-span-6 flex items-center justify-center py-6 md:py-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-80 bg-white border-2 border-slate-200 p-6 rounded-2xl shadow-md text-center hover:border-burgundy/30 transition-colors relative"
                  >
                    {/* Connection point/line from left */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-slate-300 -translate-x-full hidden md:block" />
                    
                    {/* Connection point/line going to Top Management */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-300 -translate-y-full hidden md:block" />

                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-100 text-slate-500 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                      Operations Command
                    </span>
                    <div className="flex justify-center mb-3 text-burgundy">
                      <Factory className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-base font-extrabold text-navy">Plant General Manager</h3>
                    <p className="text-xs text-slate-500 font-semibold mt-1">MHPL Boranada</p>
                  </motion.div>
                </div>

              </div>

              {/* Vertical Connector Line from Plant GM down to Bottom Branches Split */}
              <div className="h-12 w-0.5 bg-slate-300 relative" />

              {/* Bottom split horizontal bar */}
              <div className="w-full max-w-2xl border-t-2 border-slate-300 relative flex justify-between">
                <div className="absolute left-0 top-0 h-10 w-0.5 bg-slate-300" />
                <div className="absolute right-0 top-0 h-10 w-0.5 bg-slate-300" />
              </div>

              {/* Bottom Branches Grid */}
              <div className="grid grid-cols-2 gap-8 sm:gap-16 w-full max-w-2xl pt-6">
                
                {/* Branch A: System Development */}
                <div className="flex flex-col items-center gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="w-full bg-slate-50 border border-slate-200/80 p-5 rounded-2xl text-center shadow-xs flex flex-col items-center"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-3">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1">Planning Division</div>
                    <h4 className="font-heading text-xs sm:text-sm font-extrabold text-navy">SYSTEM DEVELOPMENT</h4>
                  </motion.div>
                  
                  {/* Connector */}
                  <div className="h-8 w-0.5 bg-slate-300" />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="w-full bg-[#8B1E2D]/5 border border-burgundy/10 p-5 rounded-2xl text-center shadow-xs flex flex-col items-center"
                  >
                    <h5 className="font-heading text-xs sm:text-sm font-extrabold text-burgundy">CUSTOMER CARE &amp; SATISFACTION</h5>
                    <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                      Continuous customer requirement evaluations &amp; support reviews.
                    </p>
                  </motion.div>
                </div>

                {/* Branch B: Process Implementation */}
                <div className="flex flex-col items-center gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="w-full bg-slate-50 border border-slate-200/80 p-5 rounded-2xl text-center shadow-xs flex flex-col items-center"
                  >
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 mb-3">
                      <Settings className="w-4 h-4" />
                    </div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1">Execution Division</div>
                    <h4 className="font-heading text-xs sm:text-sm font-extrabold text-navy">PROCESS IMPLEMENTATION</h4>
                  </motion.div>
                  
                  {/* Connector */}
                  <div className="h-8 w-0.5 bg-slate-300" />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="w-full bg-emerald-50/40 border border-emerald-200 p-5 rounded-2xl text-center shadow-xs flex flex-col items-center"
                  >
                    <div className="text-emerald-600 mb-1 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-[9px] font-bold uppercase tracking-wider">Certified</span>
                    </div>
                    <h5 className="font-heading text-xs sm:text-sm font-extrabold text-emerald-800">REGULATORY COMPLIANCE</h5>
                    <p className="text-[10px] text-slate-600 mt-2 leading-relaxed">
                      WHO-GMP &amp; ISO 13485 sterile audit controls, validations, and documentation.
                      </p>
                    </motion.div>
                  </div>

                </div>

              </div>
            </div>

        </div>
      </section>

      {/* Footnote */}
      <section className="bg-slate-100 py-16 border-t border-slate-200">
        <div className="container-px mx-auto max-w-4xl text-center">
          <GitFork className="w-10 h-10 text-burgundy mx-auto mb-4" />
          <h4 className="font-heading text-lg font-bold text-navy">Direct Audit Reporting Chain</h4>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-2xl mx-auto">
            To ensure rapid response and total transparency in manufacturing safety, our Regulatory Compliance division has a direct communication link to the Managing Director and Board, ensuring uninhibited resolution of quality reports.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
