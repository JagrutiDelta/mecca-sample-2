"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye, Compass, ArrowLeft, Heart, ShieldCheck, Target } from "lucide-react";

export default function VisionMissionPage() {
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
              Company Ideals
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
              Vision &amp; Mission Statement
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Discover the core principles, clinical excellence, and long-term goals guiding Mecca Healthcare's global team.
            </p>
          </div>
        </div>
      </section>

      {/* Core Vision & Mission Cards */}
      <section className="py-20 lg:py-28">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto items-stretch">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border-2 border-slate-100 hover:border-blue-500/20 p-8 sm:p-10 rounded-3xl shadow-soft flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 border border-blue-100/50 shadow-xs">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                  Long-Term Aspiration
                </span>
                <h2 className="font-heading text-2xl font-bold text-navy mt-6">Our Vision</h2>
                
                {/* Visual quote line */}
                <div className="mt-6 border-l-4 border-blue-500 pl-4">
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed italic">
                    &ldquo;Our VISION is To be an organisation whose people &amp; products exude CARE, COMPASSION &amp; TRUST towards its customers, business partners and the society at large.&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 text-xs text-slate-400 flex items-center gap-1.5 font-semibold">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Exuding Care &amp; Trust Since 1977</span>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white border-2 border-slate-100 hover:border-[#8B1E2D]/20 p-8 sm:p-10 rounded-3xl shadow-soft flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50/50 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 text-[#8B1E2D] flex items-center justify-center mb-8 border border-rose-100/50 shadow-xs">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B1E2D] bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
                  Five-Year Action Statement
                </span>
                <h2 className="font-heading text-2xl font-bold text-navy mt-6">Our Mission Statement</h2>
                
                {/* Visual quote line */}
                <div className="mt-6 border-l-4 border-burgundy pl-4">
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed italic">
                    &ldquo;Our MISSION for coming five years is To be an organisation whose employees strive for growth and values the contribution made by its founding members, through always keeping in mind the health and safety of the users of its products and thus satisfying the growing needs of the healthcare industry and its customers.&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 text-xs text-slate-400 flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Upholding Safety &amp; Growth First</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Focus banner */}
      <section className="bg-slate-900 text-white py-16 border-t border-b border-slate-800">
        <div className="container-px text-center max-w-4xl mx-auto">
          <Target className="w-10 h-10 text-rose-400 mx-auto mb-4" />
          <h3 className="font-heading text-lg sm:text-xl font-bold">Putting Safety Above All</h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-2xl mx-auto">
            Our mission prioritizes the health and safety of the clinicians and patients who use Mecca products. This duty of care forms our core manufacturing guideline across all Gandhinagar and Jodhpur plants.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
