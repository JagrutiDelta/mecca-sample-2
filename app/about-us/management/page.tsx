"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, ShieldCheck, Cpu, ArrowRight, Activity, Calendar, Landmark } from "lucide-react";

const LEADERS = [
  {
    name: "Mr. O.P. Sharma",
    role: "Founder",
    year: "Founded in 1977",
    bio: "Laid the foundation of Mecca Healthcare (MHPL) in 1977 to resolve the severe bottleneck of expensive, imported medical devices in India, introducing high-quality indigenous manufacturing.",
  },
  {
    name: "Mr. Nitin Sharma",
    role: "Co-Founder",
    year: "Joined in 1989",
    bio: "Holds a B.Sc. degree. Joined in 1989 to steer the group towards automated manufacturing technology and expand client partnerships.",
  },
];

const ACRONYM_ITEMS = [
  { letter: "M", title: "Mechanical", desc: "Precision tooling, mold design, and extrusion engineering." },
  { letter: "E", title: "Electrical", desc: "Automated controls, cleanroom HVAC systems, and power stability." },
  { letter: "C", title: "Civil", desc: "Class 100,000 cleanroom design and plant architecture." },
  { letter: "C", title: "Chemical", desc: "Medical-grade non-toxic polymer compounding and formulations." },
  { letter: "A", title: "Agriculture", desc: "Initial agro-industrial engineering frameworks of the group." },
];

export default function ManagementPage() {
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
              Mecca Leadership
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
              Management &amp; Profile
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              MHPL is headed by highly qualified individuals who hold vast experience in the healthcare industry and have been instrumental in guiding the organization for over 30 years.
            </p>
          </div>
        </div>
      </section>

      {/* Foundation Story Section */}
      <section className="py-20 lg:py-24">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-burgundy/10 px-3 py-1 rounded-full">
                Established 1977
              </span>
              <h2 className="font-heading text-3xl font-bold text-navy mt-4 leading-tight sm:text-4xl">
                The Foundation of Mecca Group
              </h2>
              <div className="mt-6 space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  The foundation of the organization was laid by <strong>Mr. O.P. Sharma</strong> in the year 1977. In those days, availability of affordable, quality medical devices was lacking in INDIA. Most medical devices were imported into the country, making them expensive and difficult to afford for many Indians.
                </p>
                <p>
                  Realizing this critical bottleneck, the idea of establishing an <strong>Indigenous Medical Devices manufacturing unit</strong> offering advanced healthcare solutions occurred to the founders. They envisioned utilizing technical expertise to develop world-class products that help in fast recovery and provide utmost care in patient treatment.
                </p>
              </div>
            </div>

            {/* Right Column: Visual Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0F2740] to-slate-900 text-white rounded-3xl p-8 shadow-md relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B1E2D]/20 rounded-full blur-2xl" />
              <Landmark className="w-10 h-10 text-rose-400 mb-6" />
              <h3 className="font-heading text-xl font-bold">First in Indigenous I.V. Sets</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                With a focus on domestic medical security and import substitution, Mecca Group became one of the <strong>first Indian companies</strong> to manufacture disposable I.V. Sets in the year 1977.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-rose-300 font-semibold uppercase tracking-wider">30+ Years Legacy</span>
                <span className="text-xs text-slate-400">Est. 1977</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The MECCA Acronym Explanation */}
      <section className="bg-slate-100 py-20 lg:py-24 border-y border-slate-200">
        <div className="container-px">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
              What MECCA Stands For
            </h2>
            <p className="mt-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
              The 5 alphabets in the name <strong>MECCA</strong> represent the five core branches of Engineering in INDIA at the time of our founding in 1977:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {ACRONYM_ITEMS.map((item, idx) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-xs"
              >
                <div className="w-12 h-12 rounded-full bg-burgundy-gradient text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-sm">
                  {item.letter}
                </div>
                <h4 className="font-heading text-sm font-bold text-navy">{item.title}</h4>
                <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Bios Section */}
      <section className="py-20 lg:py-24">
        <div className="container-px">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
              Founders &amp; Management History
            </h2>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              Meet the visionary founders who established our quality-first culture.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {LEADERS.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-rose-50 text-burgundy w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      <Calendar className="w-4 h-4 text-burgundy" />
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{member.year}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase mt-1">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subcontracting milestone section */}
      <section className="bg-slate-100 py-16 border-t border-b border-slate-200">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Cpu className="w-10 h-10 text-burgundy mx-auto mb-4" />
          <h4 className="font-heading text-lg sm:text-xl font-bold text-navy">Transition to Core Subcontracting &amp; OEM in 1990</h4>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-2xl mx-auto">
            By 1990, subcontracting and contract manufacturing became the core business of our group. Since then, we command an industry-wide reputation of a manufacturing company deeply conscious about product performance, raw material safety, and conformity to prevalent national and international standards.
          </p>
        </div>
      </section>

      {/* Cross Links to responsibility / commitment / chart */}
      <section className="py-16">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/about-us/management/responsibility"
              className="bg-white border border-slate-200/80 p-6 rounded-2xl hover:border-burgundy/40 shadow-xs hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <h5 className="font-heading text-base font-bold text-navy group-hover:text-burgundy transition-colors">Management Responsibility</h5>
                <p className="text-xs text-slate-500 mt-2">Read our general quality policy and duties to the users and society.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-burgundy mt-4">
                <span>View Policy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              href="/about-us/management/commitment"
              className="bg-white border border-slate-200/80 p-6 rounded-2xl hover:border-burgundy/40 shadow-xs hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <h5 className="font-heading text-base font-bold text-navy group-hover:text-burgundy transition-colors">Management Commitment</h5>
                <p className="text-xs text-slate-500 mt-2">Explore specific quality roles including QA heads and Plant General Managers.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-burgundy mt-4">
                <span>View Commitment</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              href="/about-us/management/organization-chart"
              className="bg-white border border-slate-200/80 p-6 rounded-2xl hover:border-burgundy/40 shadow-xs hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <h5 className="font-heading text-base font-bold text-navy group-hover:text-burgundy transition-colors">Organization Chart</h5>
                <p className="text-xs text-slate-500 mt-2">Inspect our complete departmental reporting line from Board to plant floor.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-burgundy mt-4">
                <span>View Chart</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
