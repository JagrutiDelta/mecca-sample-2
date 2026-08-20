"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserCheck, ShieldAlert, Award, Factory, ClipboardCheck, Users, ArrowLeft } from "lucide-react";

const ROLES = [
  {
    title: "The Chairman",
    desc: "Has executive responsibility for the Quality System and is responsible for creating an atmosphere where quality is the highest priority throughout MHPL.",
    icon: Award,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "The Directors",
    desc: "Responsible for overseeing the development, implementation, and maintenance of the Quality System across all company units.",
    icon: UserCheck,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "The Plant General Manager",
    desc: "Serves as the Customer Representative with responsibility for ensuring that customer requirements are effectively established and maintained in accordance with appropriate regulations. Reports & updates Top Management on quality system performance during the Annual Management Review.",
    icon: Factory,
    color: "text-[#8B1E2D]",
    bg: "bg-rose-50",
  },
  {
    title: "The Quality Manager & QA Staff",
    desc: "Directly responsible for ensuring that our quality system is fully maintained, verified, and implemented on the manufacturing floor.",
    icon: ClipboardCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Directors, Managers & Supervisors",
    desc: "Each individual in a leadership capacity is responsible for assuring that Quality Systems are followed in his or her respective operational area.",
    icon: Users,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
];

export default function CommitmentPage() {
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
              Management Commitment
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Communicating and embedding our Quality Policy at every operational level to secure zero-tolerance compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Policy Statement */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="container-px mx-auto max-w-4xl text-center">
          <ShieldAlert className="w-12 h-12 text-[#8B1E2D] mx-auto mb-6" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy leading-snug">
            Quality Policy Ownership
          </h2>
          <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            Management is responsible for communicating our Quality Policy to all employees and for ensuring full understanding of, and commitment to, quality. <strong>Each employee of MHPL is responsible for the quality of his or her work.</strong>
          </p>
        </div>
      </section>

      {/* Roles & Quality Hierarchy */}
      <section className="py-20 lg:py-24">
        <div className="container-px">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="eyebrow mb-3 inline-flex items-center gap-1 rounded-full border border-[#8B1E2D]/15 bg-[#8B1E2D]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8B1E2D]">
              Oversight Division
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy mt-3">
              Quality System Responsibilities
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed text-sm">
              Defining the direct command lines and accountability layers for maintaining quality assurance throughout Mecca Healthcare.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {ROLES.map((role, idx) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${role.bg} flex items-center justify-center border border-slate-100 mb-6`}>
                      <Icon className={`w-6 h-6 ${role.color}`} />
                    </div>
                    <h4 className="font-heading text-base font-bold text-navy">{role.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">{role.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
