// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Factory,
//   ShieldCheck,
//   Globe2,
//   GraduationCap,
//   HeartHandshake,
//   BadgeCheck,
//   MapPin,
//   Clock,
//   Briefcase,
//   ArrowRight,
//   ChevronDown,
//   Search,
//   FileSearch,
//   MessagesSquare,
//   Handshake,
//   PartyPopper,
//   ImageIcon,
//   X,
// } from "lucide-react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// /* ---------------------------------- Data ---------------------------------- */

// type Department =
//   | "Production & Manufacturing"
//   | "Quality & Regulatory Affairs"
//   | "R&D / Product Development"
//   | "Sales, OEM & Exports"
//   | "Mecca Labs (Pharma)"
//   | "Corporate & Support";

// type LocationName =
//   | "Kalol, Gujarat"
//   | "Chattral, Gujarat"
//   | "Boranada, Rajasthan"
//   | "Corporate Office";

// interface Job {
//   id: string;
//   title: string;
//   department: Department;
//   location: LocationName;
//   type: "Full-time" | "Contract";
//   experience: string;
//   blurb: string;
// }

// const DEPARTMENTS: Department[] = [
//   "Production & Manufacturing",
//   "Quality & Regulatory Affairs",
//   "R&D / Product Development",
//   "Sales, OEM & Exports",
//   "Mecca Labs (Pharma)",
//   "Corporate & Support",
// ];

// const LOCATION_FILTERS: LocationName[] = [
//   "Kalol, Gujarat",
//   "Chattral, Gujarat",
//   "Boranada, Rajasthan",
//   "Corporate Office",
// ];

// const JOBS: Job[] = [
//   {
//     id: "prod-supervisor-kalol",
//     title: "Production Supervisor – Extrusion",
//     department: "Production & Manufacturing",
//     location: "Kalol, Gujarat",
//     type: "Full-time",
//     experience: "4–6 years",
//     blurb:
//       "Oversee PVC tube extrusion lines, shift output targets and machine changeovers on our flagship infusion-set line.",
//   },
//   {
//     id: "molding-tech-chattral",
//     title: "Injection Molding Technician",
//     department: "Production & Manufacturing",
//     location: "Chattral, Gujarat",
//     type: "Full-time",
//     experience: "2–4 years",
//     blurb:
//       "Set up and run injection molding machines for connectors, drip chambers and cannula components to tight tolerances.",
//   },
//   {
//     id: "cleanroom-operator-boranada",
//     title: "Cleanroom Assembly Operator",
//     department: "Production & Manufacturing",
//     location: "Boranada, Rajasthan",
//     type: "Full-time",
//     experience: "0–2 years",
//     blurb:
//       "Assemble sterile disposables inside our Class 10,000 cleanroom, following strict gowning and hygiene protocol.",
//   },
//   {
//     id: "qa-executive-kalol",
//     title: "QA Executive – ISO 13485",
//     department: "Quality & Regulatory Affairs",
//     location: "Kalol, Gujarat",
//     type: "Full-time",
//     experience: "3–5 years",
//     blurb:
//       "Own in-process and final inspection records, CAPA tracking and internal audits against ISO 13485:2016.",
//   },
//   {
//     id: "eto-officer-chattral",
//     title: "ETO Sterilization Officer",
//     department: "Quality & Regulatory Affairs",
//     location: "Chattral, Gujarat",
//     type: "Full-time",
//     experience: "3–6 years",
//     blurb: "Run and validate the in-house ETO gas sterilization cycle and maintain biological indicator records.",
//   },
//   {
//     id: "regulatory-affairs-corp",
//     title: "Regulatory Affairs Officer",
//     department: "Quality & Regulatory Affairs",
//     location: "Corporate Office",
//     type: "Full-time",
//     experience: "4–7 years",
//     blurb:
//       "Manage CE, WHO-GMP and state drug licensing renewals, and prepare technical files for new product registrations.",
//   },
//   {
//     id: "rd-engineer-kalol",
//     title: "R&D Engineer – Infusion Devices",
//     department: "R&D / Product Development",
//     location: "Kalol, Gujarat",
//     type: "Full-time",
//     experience: "3–5 years",
//     blurb:
//       "Develop and trial new variants across the Meca Care infusion range, from DFMEA through pilot-batch validation.",
//   },
//   {
//     id: "oem-bd-manager-corp",
//     title: "OEM Business Development Manager",
//     department: "Sales, OEM & Exports",
//     location: "Corporate Office",
//     type: "Full-time",
//     experience: "5–8 years",
//     blurb:
//       "Build relationships with global medical device brands seeking loan-license contract manufacturing partners.",
//   },
//   {
//     id: "export-sales-corp",
//     title: "Export Sales Executive",
//     department: "Sales, OEM & Exports",
//     location: "Corporate Office",
//     type: "Full-time",
//     experience: "2–4 years",
//     blurb:
//       "Manage distributor accounts across CIS, the Middle East, South East Asia and Africa, from RFQ to shipment.",
//   },
//   {
//     id: "pharma-chemist-kalol",
//     title: "Production Chemist – Mecca Labs",
//     department: "Mecca Labs (Pharma)",
//     location: "Kalol, Gujarat",
//     type: "Full-time",
//     experience: "2–5 years",
//     blurb: "Run batch manufacturing for tablets and dry syrups in line with WHO-GMP documentation standards.",
//   },
//   {
//     id: "qc-analyst-kalol",
//     title: "QC Analyst – Pharmaceuticals",
//     department: "Mecca Labs (Pharma)",
//     location: "Kalol, Gujarat",
//     type: "Full-time",
//     experience: "1–3 years",
//     blurb: "Test raw materials and finished pharma products against pharmacopoeial specifications ahead of batch release.",
//   },
//   {
//     id: "hr-executive-corp",
//     title: "HR Executive",
//     department: "Corporate & Support",
//     location: "Corporate Office",
//     type: "Full-time",
//     experience: "2–4 years",
//     blurb: "Handle plant-floor recruitment, onboarding and employee welfare programmes across our three units.",
//   },
// ];

// const WHY_MECCA = [
//   {
//     icon: Factory,
//     title: "48 Years of Stability",
//     desc: "Join a manufacturer that has been building medical devices since 1977 — steady growth, not boom-and-bust cycles.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "ISO-Driven Culture",
//     desc: "Work inside ISO 9001, ISO 13485 and WHO-GMP certified processes where 5S and Kaizen are daily habits.",
//   },
//   {
//     icon: Globe2,
//     title: "Genuinely Global Work",
//     desc: "Your work reaches hospitals across the CIS, Middle East, South East Asia, Africa and Latin America.",
//   },
//   {
//     icon: GraduationCap,
//     title: "Cross-Trained Growth",
//     desc: "Move between extrusion, molding, cleanroom assembly, QA and pharma — built to broaden your skills.",
//   },
//   {
//     icon: HeartHandshake,
//     title: "Care, Compassion, Trust",
//     desc: "Our Global Nursing Skills Demonstration programme reflects a company measuring success beyond output.",
//   },
//   {
//     icon: BadgeCheck,
//     title: "Work That Matters",
//     desc: "Every I.V. set, catheter and tray you help make is trusted by clinicians treating real patients.",
//   },
// ];

// const PROCESS_STEPS = [
//   {
//     icon: FileSearch,
//     title: "Apply",
//     desc: "Send your resume for a role, or reach out directly if nothing posted quite fits.",
//   },
//   {
//     icon: MessagesSquare,
//     title: "Screening Call",
//     desc: "Our HR team calls to discuss your experience and what you're looking for.",
//   },
//   {
//     icon: Handshake,
//     title: "Interview & Plant Visit",
//     desc: "Meet the hiring manager and, for plant roles, walk the floor you'd be working on.",
//   },
//   {
//     icon: PartyPopper,
//     title: "Offer & Onboarding",
//     desc: "We move fast on offers, then get you set up with training before your first day.",
//   },
// ];

// const LOCATIONS = [
//   { name: "Kalol, Gujarat", area: "GIDC, Gandhinagar" },
//   { name: "Chattral, Gujarat", area: "GIDC, Mehsana" },
//   { name: "Boranada, Rajasthan", area: "RIICO Industrial Area, Jodhpur" },
// ];

// /* ------------------------------- Small parts ------------------------------- */

// function Eyebrow({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="eyebrow mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">
//       {children}
//     </div>
//   );
// }

// function PlaceholderPanel({ label, tall = false }: { label: string; tall?: boolean }) {
//   return (
//     <div
//       className={`rounded-xl2 border border-border bg-border/40 flex flex-col items-center justify-center gap-3 text-center px-8 ${
//         tall ? "h-[420px]" : "h-[340px]"
//       }`}
//     >
//       <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-card">
//         <ImageIcon className="w-5 h-5 text-gray" />
//       </div>
//       <p className="text-xs text-gray max-w-[240px]">{label}</p>
//     </div>
//   );
// }

// /* ---------------------------------- Page ---------------------------------- */

// export default function CareersPage() {
//   const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [prefillRole, setPrefillRole] = useState<string>("");

//   const [activeDept, setActiveDept] = useState<Department | "All">("All");
//   const [activeLocation, setActiveLocation] = useState<LocationName | "All">("All");
//   const [query, setQuery] = useState("");

//   const filteredJobs = useMemo(() => {
//     return JOBS.filter((job) => {
//       const matchesDept = activeDept === "All" || job.department === activeDept;
//       const matchesLocation = activeLocation === "All" || job.location === activeLocation;
//       const matchesQuery =
//         query.trim() === "" ||
//         job.title.toLowerCase().includes(query.trim().toLowerCase()) ||
//         job.department.toLowerCase().includes(query.trim().toLowerCase());
//       return matchesDept && matchesLocation && matchesQuery;
//     });
//   }, [activeDept, activeLocation, query]);

//   const openApplyModal = (roleTitle?: string) => {
//     setPrefillRole(roleTitle ?? "");
//     setIsApplyModalOpen(true);
//   };

//   // Close on Escape
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setIsApplyModalOpen(false);
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   // Lock body scroll while modal is open
//   useEffect(() => {
//     document.body.style.overflow = isApplyModalOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isApplyModalOpen]);

//   return (
//     <main className="overflow-x-hidden">
//       <Header />

//       {/* 01 — Hero */}
//       <section className="pt-40 pb-24 bg-white">
//         <div className="container-px grid lg:grid-cols-2 gap-14 items-center">
//           <div>
//             <Eyebrow>Careers at Mecca Healthcare</Eyebrow>

//             <h1 className="font-heading font-extrabold text-navy text-5xl md:text-6xl lg:text-[50px] leading-[0.95] tracking-[-0.03em]">
//               Build the Devices
//               <br />
//               <span className="text-burgundy">Clinicians Trust Since 1977.</span>
//             </h1>

//             <p className="mt-7 text-gray leading-relaxed max-w-lg">
//               We&apos;re a 48-year-old Indian medical device manufacturer with three plants,
//               ISO 13485 and WHO-GMP certified processes, and products that reach hospitals
//               across five global regions. Come build them with us.
//             </p>

//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <a
//                 href="#open-roles"
//                 className="inline-flex items-center rounded-full bg-burgundy-gradient text-white text-sm font-semibold px-6 py-3 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
//               >
//                 View Open Positions →
//               </a>

//               <button
//                 type="button"
//                 onClick={() => openApplyModal()}
//                 className="text-sm font-semibold text-navy hover:text-burgundy transition-colors"
//               >
//                 Send Your Resume
//               </button>
//             </div>
//           </div>

//           <div className="relative h-full min-h-[420px] overflow-hidden rounded-xl2">
//             <img
//               src="/Cleanrrom.jpg"
//               alt="Team working inside a Mecca Healthcare cleanroom"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Quick stats */}
//         <div className="container-px mt-16">
//           <div className="rounded-xl2 border border-border bg-white grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border shadow-sm">
//             {[
//               { value: "48+", label: "Years of Manufacturing" },
//               { value: "30M+", label: "Pieces Made Annually" },
//               { value: "3", label: "Manufacturing Units" },
//               { value: "5+", label: "Export Regions" },
//             ].map((stat) => (
//               <div key={stat.label} className="px-6 py-7 text-center">
//                 <p className="font-heading text-3xl font-extrabold text-burgundy">{stat.value}</p>
//                 <p className="mt-1 text-sm text-gray">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 02 — Why Work With Us */}
//       <section className="section-py bg-bg">
//         <div className="container-px">
//           <div className="max-w-2xl mx-auto text-center mb-16">
//             <Eyebrow>Why Mecca</Eyebrow>
//             <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
//               A Plant Floor Built on Care, Compassion &amp; Trust
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {WHY_MECCA.map((item, i) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="group rounded-xl2 bg-white border border-border p-6 hover:shadow-soft hover:border-transparent transition-all duration-300"
//               >
//                 <div className="w-12 h-12 rounded-full bg-navy/5 group-hover:bg-burgundy-gradient flex items-center justify-center transition-colors duration-300">
//                   <item.icon className="w-5 h-5 text-navy group-hover:text-white transition-colors duration-300" />
//                 </div>
//                 <div className="font-heading font-semibold text-navy mt-4">{item.title}</div>
//                 <p className="text-sm text-gray mt-2 leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 03 — Life at Mecca */}
//       <section className="section-py bg-navy-gradient text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.04]" />
//         <div className="container-px relative">
//           <div className="grid lg:grid-cols-2 gap-14 items-center">
//             <div>
//               <div className="eyebrow mb-4 !text-accent inline-flex items-center gap-1 rounded-full border border-[#f3f4ff]/15 bg-[#dde6ff]/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
//                 Life at Mecca
//               </div>
//               <h2 className="font-heading font-bold text-3xl md:text-4xl leading-tight">
//                 &ldquo;People &amp; products that exude Care, Compassion &amp; Trust.&rdquo;
//               </h2>
//               <p className="mt-5 text-white/60 leading-relaxed max-w-lg">
//                 That&apos;s our founding vision, and it still shapes how we run our plants —
//                 through our Global Nursing Skills Demonstration programme, our 5S and Kaizen
//                 culture, and a genuine focus on the people who make the products, not just
//                 the output they make.
//               </p>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-5">
//               {[
//                 { label: "Established", value: "1977" },
//                 { label: "Manufacturing Units", value: "Kalol · Chattral · Boranada" },
//                 { label: "CSR Programme", value: "Global Nursing Skills Demonstration" },
//                 { label: "Quality System", value: "5S · Kaizen · TQC" },
//               ].map((item, i) => (
//                 <motion.div
//                   key={item.label}
//                   initial={{ opacity: 0, y: 16 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: i * 0.06 }}
//                   className="rounded-xl2 bg-white/5 border border-white/10 backdrop-blur p-6"
//                 >
//                   <p className="text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase">
//                     {item.label}
//                   </p>
//                   <p className="mt-2 font-heading font-semibold text-white">{item.value}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 04 — Open Positions */}
//       <section id="open-roles" className="section-py bg-white scroll-mt-24">
//         <div className="container-px">
//           <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
//             <div className="max-w-2xl">
//               <Eyebrow>Open Positions</Eyebrow>
//               <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
//                 {filteredJobs.length} role{filteredJobs.length === 1 ? "" : "s"} open across our plants
//               </h2>
//             </div>

//             <div className="relative w-full lg:w-80">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray" />
//               <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search roles..."
//                 className="w-full rounded-full border border-border bg-bg pl-11 pr-4 py-3 text-sm text-navy outline-none focus:border-burgundy/50 focus:ring-2 focus:ring-burgundy/10"
//               />
//             </div>
//           </div>

//           {/* Filters */}
//           <div className="flex flex-col gap-4">
//             <FilterRow
//               label="Department"
//               options={["All", ...DEPARTMENTS]}
//               active={activeDept}
//               onChange={(v) => setActiveDept(v as Department | "All")}
//             />
//             <FilterRow
//               label="Location"
//               options={["All", ...LOCATION_FILTERS]}
//               active={activeLocation}
//               onChange={(v) => setActiveLocation(v as LocationName | "All")}
//             />
//           </div>

//           {/* Job list */}
//           <div className="mt-10 grid gap-4">
//             {filteredJobs.length === 0 && (
//               <div className="rounded-xl2 border border-dashed border-border bg-bg py-16 text-center">
//                 <p className="text-gray">
//                   No roles match those filters right now — try clearing a filter, or send us your resume below.
//                 </p>
//               </div>
//             )}

//             {filteredJobs.map((job, i) => (
//               <JobCard key={job.id} job={job} index={i} onApply={() => openApplyModal(job.title)} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 05 — Hiring Process */}
//       <section className="section-py bg-bg">
//         <div className="container-px">
//           <div className="max-w-2xl mx-auto text-center mb-16">
//             <Eyebrow>How Hiring Works</Eyebrow>
//             <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
//               From Application to Your First Shift
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {PROCESS_STEPS.map((step, i) => (
//               <motion.div
//                 key={step.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="relative rounded-xl2 bg-white border border-border p-6"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="w-11 h-11 rounded-full bg-navy/5 flex items-center justify-center">
//                     <step.icon className="w-5 h-5 text-navy" />
//                   </div>
//                   <span className="font-heading text-3xl font-extrabold text-navy/10">
//                     0{i + 1}
//                   </span>
//                 </div>
//                 <div className="font-heading font-semibold text-navy mt-4">{step.title}</div>
//                 <p className="text-sm text-gray mt-2 leading-relaxed">{step.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 06 — Manufacturing Locations */}
//       <section className="section-py bg-white">
//         <div className="container-px">
//           <div className="max-w-2xl mx-auto text-center mb-16">
//             <Eyebrow>Where You&apos;d Work</Eyebrow>
//             <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
//               Three Manufacturing Units. One Integrated Standard.
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {LOCATIONS.map((l, i) => (
//               <motion.div
//                 key={l.name}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="group flex items-start gap-4 rounded-xl2 border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-burgundy/30 hover:shadow-soft"
//               >
//                 <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-navy/5 transition-colors group-hover:bg-burgundy/10">
//                   <Factory className="h-5 w-5 text-navy group-hover:text-burgundy" />
//                 </div>
//                 <div>
//                   <div className="font-heading font-semibold text-navy">{l.name}</div>
//                   <div className="mt-0.5 text-xs text-gray">{l.area}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 07 — Final CTA */}
//       <section className="section-py bg-bg">
//         <div className="container-px">
//           <div className="relative overflow-hidden rounded-[32px] bg-burgundy-gradient px-8 py-14 text-white md:px-14 lg:px-16">
//             <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
//             <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />
//             <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.035]" />

//             <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
//               <div className="max-w-3xl">
//                 <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
//                   Don&apos;t See the Right Role?
//                 </div>

//                 <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
//                   We&apos;re Always Looking for Good People.
//                 </h2>

//                 <p className="mt-5 max-w-2xl leading-relaxed text-white/75">
//                   We&apos;re growing across production, quality, R&amp;D and export sales.
//                   Send us your resume and we&apos;ll reach out when a fitting role opens up.
//                 </p>
//               </div>

//               <div className="relative z-10 flex flex-col gap-3 lg:min-w-[210px]">
//                 <button
//                   type="button"
//                   onClick={() => openApplyModal()}
//                   className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#8B1E2D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//                 >
//                   Apply Now →
//                 </button>

//                 <a
//                   href="/#contact"
//                   className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
//                 >
//                   Talk to HR →
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Application Modal */}
//         <AnimatePresence>
//           {isApplyModalOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsApplyModalOpen(false)}
//               className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 backdrop-blur-sm px-4 py-8"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 24, scale: 0.97 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: 24, scale: 0.97 }}
//                 transition={{ duration: 0.25 }}
//                 onClick={(e) => e.stopPropagation()}
//                 className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[24px] bg-white shadow-[0_25px_70px_rgba(13,34,64,0.25)]"
//               >
//                 <div className="h-2 bg-burgundy-gradient" />

//                 <button
//                   type="button"
//                   onClick={() => setIsApplyModalOpen(false)}
//                   aria-label="Close"
//                   className="absolute right-5 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-bg text-gray hover:bg-burgundy/10 hover:text-burgundy transition-colors"
//                 >
//                   <X className="h-4 w-4" />
//                 </button>

//                 <div className="px-7 pb-8 pt-7 sm:px-9 sm:pb-10">
//                   {isSubmitted ? (
//                     <div className="py-10 text-center">
//                       <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-burgundy/10">
//                         <Handshake className="h-6 w-6 text-burgundy" />
//                       </div>
//                       <h3 className="font-heading text-2xl font-bold text-navy">Thank You</h3>
//                       <p className="mt-3 text-sm leading-6 text-gray max-w-xs mx-auto">
//                         Your application has been received. Our HR team will get back to you
//                         within 24–48 hours.
//                       </p>
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setIsApplyModalOpen(false);
//                           setIsSubmitted(false);
//                         }}
//                         className="mt-7 inline-flex items-center justify-center rounded-full bg-burgundy-gradient px-6 py-2.5 text-sm font-semibold text-white shadow-card hover:shadow-soft transition-all"
//                       >
//                         Close
//                       </button>
//                     </div>
//                   ) : (
//                     <>
//                       <div className="mb-1 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-4 py-1.5 text-xs font-semibold text-[#8B1E2D]">
//                         Careers Application
//                       </div>

//                       <h3 className="mt-3 font-heading text-2xl font-bold text-navy sm:text-[28px]">
//                         Apply to Mecca Healthcare
//                       </h3>
//                       <p className="mt-2 text-sm leading-6 text-gray">
//                         Share your details and our HR team will get back to you about next steps.
//                       </p>

//                       <form
//                         onSubmit={(e) => {
//                           e.preventDefault();
//                           setIsSubmitted(true);
//                         }}
//                         className="mt-6 space-y-4"
//                       >
//                         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                           <div>
//                             <label className="mb-1.5 block text-xs font-semibold text-navy">
//                               Full Name
//                             </label>
//                             <input
//                               required
//                               type="text"
//                               placeholder="Your name"
//                               className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
//                             />
//                           </div>
//                           <div>
//                             <label className="mb-1.5 block text-xs font-semibold text-navy">
//                               Phone
//                             </label>
//                             <input
//                               required
//                               type="tel"
//                               placeholder="+91"
//                               className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
//                             />
//                           </div>
//                         </div>

//                         <div>
//                           <label className="mb-1.5 block text-xs font-semibold text-navy">
//                             Email
//                           </label>
//                           <input
//                             required
//                             type="email"
//                             placeholder="you@example.com"
//                             className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
//                           />
//                         </div>

//                         <div>
//                           <label className="mb-1.5 block text-xs font-semibold text-navy">
//                             Position
//                           </label>
//                           <select
//                             defaultValue={prefillRole}
//                             className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
//                           >
//                             <option value="">General Application</option>
//                             {JOBS.map((job) => (
//                               <option key={job.id} value={job.title}>
//                                 {job.title} — {job.location}
//                               </option>
//                             ))}
//                           </select>
//                         </div>

//                         <div>
//                           <label className="mb-1.5 block text-xs font-semibold text-navy">
//                             Resume Link
//                           </label>
//                           <input
//                             type="url"
//                             placeholder="Link to your resume (Google Drive, LinkedIn, etc.)"
//                             className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
//                           />
//                         </div>

//                         <div>
//                           <label className="mb-1.5 block text-xs font-semibold text-navy">
//                             A Little About You
//                           </label>
//                           <textarea
//                             rows={3}
//                             placeholder="Current role, relevant experience, or anything else worth knowing"
//                             className="w-full resize-none rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
//                           />
//                         </div>

//                         <button
//                           type="submit"
//                           className="mt-2 w-full inline-flex items-center justify-center rounded-xl bg-burgundy-gradient px-6 py-3 text-sm font-semibold text-white shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
//                         >
//                           Submit Application →
//                         </button>

//                         <p className="text-center text-[11px] text-gray">
//                           We typically respond within 24–48 business hours.
//                         </p>
//                       </form>
//                     </>
//                   )}
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </section>

//       <Footer />
//     </main>
//   );
// }

// /* ------------------------------- Job Card ------------------------------- */

// function FilterRow({
//   label,
//   options,
//   active,
//   onChange,
// }: {
//   label: string;
//   options: string[];
//   active: string;
//   onChange: (v: string) => void;
// }) {
//   return (
//     <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//       <span className="text-xs font-bold tracking-[0.1em] text-gray w-24 shrink-0">
//         {label.toUpperCase()}
//       </span>
//       <div className="flex flex-wrap gap-2">
//         {options.map((option) => {
//           const isActive = option === active;
//           return (
//             <button
//               key={option}
//               type="button"
//               onClick={() => onChange(option)}
//               className={`rounded-full px-4 py-2 text-sm font-medium transition-colors border ${
//                 isActive
//                   ? "bg-burgundy-gradient border-transparent text-white"
//                   : "bg-white border-border text-navy/70 hover:border-burgundy/40"
//               }`}
//             >
//               {option}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function JobCard({ job, index, onApply }: { job: Job; index: number; onApply: () => void }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 16 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.05 }}
//       className="rounded-xl2 border border-border bg-white shadow-sm overflow-hidden"
//     >
//       <button
//         type="button"
//         onClick={() => setOpen((o) => !o)}
//         className="w-full flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-left px-6 py-6"
//       >
//         <span className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
//           <Briefcase className="h-5 w-5" />
//         </span>

//         <div className="flex-1 min-w-0">
//           <p className="font-heading font-semibold text-navy text-lg">{job.title}</p>
//           <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray">
//             <span className="inline-flex items-center gap-1.5">
//               <MapPin className="h-3.5 w-3.5" /> {job.location}
//             </span>
//             <span className="inline-flex items-center gap-1.5">
//               <Clock className="h-3.5 w-3.5" /> {job.type}
//             </span>
//             <span>{job.experience}</span>
//           </div>
//         </div>

//         <span className="hidden sm:inline-block rounded-full bg-bg text-navy/60 text-xs font-semibold px-3 py-1.5">
//           {job.department}
//         </span>

//         <ChevronDown
//           className={`h-5 w-5 text-gray shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
//         />
//       </button>

//       {open && (
//         <div className="px-6 pb-6 sm:pl-[92px]">
//           <p className="text-sm leading-relaxed text-gray max-w-2xl">{job.blurb}</p>
//           <button
//             type="button"
//             onClick={onApply}
//             className="mt-5 inline-flex items-center gap-2 rounded-full bg-burgundy-gradient text-white text-sm font-semibold px-6 py-3 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
//           >
//             Apply for this role
//             <ArrowRight className="h-4 w-4" />
//           </button>
//         </div>
//       )}
//     </motion.div>
//   );
// }


"use client";


import { useEffect, useMemo, useState, type ReactNode } from "react";
import { motion, AnimatePresence , useReducedMotion  } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Factory,
  FileSearch,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Headset,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  Search,
  Share2,
  ShieldCheck,
  MessagesSquare,
  Handshake,
  PartyPopper,
  Briefcase,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


/* ---------------------------------- Data ---------------------------------- */


type Department =
  | "Production & Manufacturing"
  | "Quality & Regulatory Affairs"
  | "R&D / Product Development"
  | "Sales, OEM & Exports"
  | "Mecca Labs (Pharma)"
  | "Corporate & Support";


type LocationName =
  | "Kalol, Gujarat"
  | "Chattral, Gujarat"
  | "Boranada, Rajasthan"
  | "Corporate Office";


interface Job {
  id: string;
  title: string;
  department: Department;
  location: LocationName;
  type: "Full-time" | "Contract";
  experience: string;
  blurb: string;
}


const DEPARTMENTS: Department[] = [
  "Production & Manufacturing",
  "Quality & Regulatory Affairs",
  "R&D / Product Development",
  "Sales, OEM & Exports",
  "Mecca Labs (Pharma)",
  "Corporate & Support",
];


const LOCATION_FILTERS: LocationName[] = [
  "Kalol, Gujarat",
  "Chattral, Gujarat",
  "Boranada, Rajasthan",
  "Corporate Office",
];


const JOBS: Job[] = [
  {
    id: "prod-supervisor-kalol",
    title: "Production Supervisor – Extrusion",
    department: "Production & Manufacturing",
    location: "Kalol, Gujarat",
    type: "Full-time",
    experience: "4–6 years",
    blurb:
      "Oversee PVC tube extrusion lines, shift output targets and machine changeovers on our flagship infusion-set line.",
  },
  {
    id: "molding-tech-chattral",
    title: "Injection Molding Technician",
    department: "Production & Manufacturing",
    location: "Chattral, Gujarat",
    type: "Full-time",
    experience: "2–4 years",
    blurb:
      "Set up and run injection molding machines for connectors, drip chambers and cannula components to tight tolerances.",
  },
  {
    id: "cleanroom-operator-boranada",
    title: "Cleanroom Assembly Operator",
    department: "Production & Manufacturing",
    location: "Boranada, Rajasthan",
    type: "Full-time",
    experience: "0–2 years",
    blurb:
      "Assemble sterile disposables inside our Class 10,000 cleanroom, following strict gowning and hygiene protocol.",
  },
  {
    id: "qa-executive-kalol",
    title: "QA Executive – ISO 13485",
    department: "Quality & Regulatory Affairs",
    location: "Kalol, Gujarat",
    type: "Full-time",
    experience: "3–5 years",
    blurb:
      "Own in-process and final inspection records, CAPA tracking and internal audits against ISO 13485:2016.",
  },
  {
    id: "eto-officer-chattral",
    title: "ETO Sterilization Officer",
    department: "Quality & Regulatory Affairs",
    location: "Chattral, Gujarat",
    type: "Full-time",
    experience: "3–6 years",
    blurb: "Run and validate the in-house ETO gas sterilization cycle and maintain biological indicator records.",
  },
  {
    id: "regulatory-affairs-corp",
    title: "Regulatory Affairs Officer",
    department: "Quality & Regulatory Affairs",
    location: "Corporate Office",
    type: "Full-time",
    experience: "4–7 years",
    blurb:
      "Manage CE, WHO-GMP and state drug licensing renewals, and prepare technical files for new product registrations.",
  },
  {
    id: "rd-engineer-kalol",
    title: "R&D Engineer – Infusion Devices",
    department: "R&D / Product Development",
    location: "Kalol, Gujarat",
    type: "Full-time",
    experience: "3–5 years",
    blurb:
      "Develop and trial new variants across the Meca Care infusion range, from DFMEA through pilot-batch validation.",
  },
  {
    id: "oem-bd-manager-corp",
    title: "OEM Business Development Manager",
    department: "Sales, OEM & Exports",
    location: "Corporate Office",
    type: "Full-time",
    experience: "5–8 years",
    blurb:
      "Build relationships with global medical device brands seeking loan-license contract manufacturing partners.",
  },
  {
    id: "export-sales-corp",
    title: "Export Sales Executive",
    department: "Sales, OEM & Exports",
    location: "Corporate Office",
    type: "Full-time",
    experience: "2–4 years",
    blurb:
      "Manage distributor accounts across CIS, the Middle East, South East Asia and Africa, from RFQ to shipment.",
  },
  {
    id: "pharma-chemist-kalol",
    title: "Production Chemist – Mecca Labs",
    department: "Mecca Labs (Pharma)",
    location: "Kalol, Gujarat",
    type: "Full-time",
    experience: "2–5 years",
    blurb: "Run batch manufacturing for tablets and dry syrups in line with WHO-GMP documentation standards.",
  },
  {
    id: "qc-analyst-kalol",
    title: "QC Analyst – Pharmaceuticals",
    department: "Mecca Labs (Pharma)",
    location: "Kalol, Gujarat",
    type: "Full-time",
    experience: "1–3 years",
    blurb: "Test raw materials and finished pharma products against pharmacopoeial specifications ahead of batch release.",
  },
  {
    id: "hr-executive-corp",
    title: "HR Executive",
    department: "Corporate & Support",
    location: "Corporate Office",
    type: "Full-time",
    experience: "2–4 years",
    blurb: "Handle plant-floor recruitment, onboarding and employee welfare programmes across our three units.",
  },
];


const WHY_MECCA = [
  {
    icon: Factory,
    title: "48 Years of Stability",
    desc: "Join a manufacturer that has been building medical devices since 1977 — steady growth, not boom-and-bust cycles.",
  },
  {
    icon: ShieldCheck,
    title: "ISO-Driven Culture",
    desc: "Work inside ISO 9001, ISO 13485 and WHO-GMP certified processes where 5S and Kaizen are daily habits.",
  },
  {
    icon: Globe2,
    title: "Genuinely Global Work",
    desc: "Your work reaches hospitals across the CIS, Middle East, South East Asia, Africa and Latin America.",
  },
  {
    icon: GraduationCap,
    title: "Cross-Trained Growth",
    desc: "Move between extrusion, molding, cleanroom assembly, QA and pharma — built to broaden your skills.",
  },
  {
    icon: HeartHandshake,
    title: "Care, Compassion, Trust",
    desc: "Our Global Nursing Skills Demonstration programme reflects a company measuring success beyond output.",
  },
  {
    icon: BadgeCheck,
    title: "Work That Matters",
    desc: "Every I.V. set, catheter and tray you help make is trusted by clinicians treating real patients.",
  },
];


const PROCESS_STEPS = [
  {
    icon: FileSearch,
    title: "Apply",
    desc: "Send your resume for a role, or reach out directly if nothing posted quite fits.",
  },
  {
    icon: MessagesSquare,
    title: "Screening Call",
    desc: "Our HR team calls to discuss your experience and what you're looking for.",
  },
  {
    icon: Handshake,
    title: "Interview & Plant Visit",
    desc: "Meet the hiring manager and, for plant roles, walk the floor you'd be working on.",
  },
  {
    icon: PartyPopper,
    title: "Offer & Onboarding",
    desc: "We move fast on offers, then get you set up with training before your first day.",
  },
];


const LOCATIONS = [
  { name: "Kalol, Gujarat", area: "GIDC, Gandhinagar" },
  { name: "Chattral, Gujarat", area: "GIDC, Mehsana" },
  { name: "Boranada, Rajasthan", area: "RIICO Industrial Area, Jodhpur" },
];


/* ------------------------------- Small parts ------------------------------- */


function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Floating statistic                                                        */
/* -------------------------------------------------------------------------- */

function FloatingStat({
  value,
  label,
  className,
  animation,
  duration,
}: {
  value: string;
  label: string;
  className: string;
  animation: number[];
  duration: number;
}) {
  return (
    <motion.div
      animate={{
        y: animation,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-20 rounded-2xl border border-white/60 bg-white/85 px-5 py-4 shadow-glass backdrop-blur-xl ${className}`}
    >
      <div className="font-heading text-2xl font-extrabold text-navy">
        {value}
      </div>

      <div className="mt-0.5 whitespace-nowrap text-xs text-gray">
        {label}
      </div>
    </motion.div>
  );
}

/* ---------------------------------- Page ---------------------------------- */


export default function CareersPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [prefillRole, setPrefillRole] = useState<string>("");


  const [activeDept, setActiveDept] = useState<Department | "All">("All");
  const [activeLocation, setActiveLocation] = useState<LocationName | "All">("All");
  const [query, setQuery] = useState("");


  const filteredJobs = useMemo(() => {
    return JOBS.filter((job) => {
      const matchesDept = activeDept === "All" || job.department === activeDept;
      const matchesLocation = activeLocation === "All" || job.location === activeLocation;
      const matchesQuery =
        query.trim() === "" ||
        job.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        job.department.toLowerCase().includes(query.trim().toLowerCase());
      return matchesDept && matchesLocation && matchesQuery;
    });
  }, [activeDept, activeLocation, query]);


  const openApplyModal = (roleTitle?: string) => {
    setPrefillRole(roleTitle ?? "");
    setIsApplyModalOpen(true);
  };


  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsApplyModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);


  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isApplyModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isApplyModalOpen]);


  return (
    <main className="overflow-x-hidden">
      <Header />
{/* ================================================================== */}
{/* HERO / CAREER SECTION                                              */}
{/* ================================================================== */}

<section id="contact-hero"
        className="relative overflow-hidden md:pt-10 md:pb-28">
  {/* Background layers */}

  <div className="absolute inset-0 bg-bg" />

  <div className="absolute inset-0 bg-medical-grid bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

  <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-medblue/10 blur-3xl" />

  <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-burgundy/10 blur-3xl" />

  {/* Hero content */}

  <div className="container-px relative grid items-center gap-16 py-28 lg:grid-cols-2 ">

    {/* LEFT CONTENT */}

    <div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md"
      >
        <Briefcase className="h-4 w-4" />
        We're Hiring — Join Our Team
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl"
      >
        Let's Build Your{" "}

        <span className="relative inline-block text-burgundy">
          Career

          <svg
            className="absolute -bottom-1 left-0 w-full"
            height="10"
            viewBox="0 0 300 10"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M2 6 Q 75 -2 150 6 T 298 6"
              stroke="#C8D8F5"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
            />
          </svg>
        </span>{" "}

        With Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        className="mt-6 max-w-xl text-base leading-relaxed text-gray md:text-lg"
      >
        Whether you're an engineer, a quality specialist, or just
        starting out, join a team driving innovation in nephrology,
        hemodialysis, and critical care devices across our three
        manufacturing plants.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
        }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href="#openings"
          className="group inline-flex items-center gap-2 rounded-full bg-burgundy-gradient px-8 py-4 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
        >
          View Open Positions

          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href="mailto:careers@mhplindia.in"
          className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/70 px-8 py-4 text-sm font-semibold text-navy backdrop-blur transition-colors hover:bg-white"
        >
          <Mail className="h-4 w-4" />
          Email Your Resume
        </a>
      </motion.div>
    </div>

    {/* RIGHT IMAGE */}

    <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="absolute inset-0 overflow-hidden rounded-xl2 shadow-soft"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1681966874224-60e9576e6643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Team members at a Mecca Healthcare manufacturing facility"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
      </motion.div>

      {/* FLOATING STATS */}

      <FloatingStat
        value="3"
        label="Manufacturing Plants"
        className="-right-2 top-1/3 md:-right-8"
        animation={[0, 14, 0]}
        duration={7}
      />

      <FloatingStat
        value="50+"
        label="Export Countries"
        className="bottom-10 left-2 md:-left-6"
        animation={[0, -10, 0]}
        duration={6.5}
      />

      <FloatingStat
        value="Global"
        label="Career Exposure"
        className="bottom-0 right-4 md:right-0"
        animation={[0, 12, 0]}
        duration={7.5}
      />

    </div>
  </div>
</section>
  
      {/* 02 — Why Work With Us */}
      <section className="section-py bg-bg">
        <div className="container-px">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Eyebrow>Why Mecca</Eyebrow>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
              A Plant Floor Built on Care, Compassion &amp; Trust
            </h2>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_MECCA.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-xl2 bg-white border border-border p-6 hover:shadow-soft hover:border-transparent transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-navy/5 group-hover:bg-burgundy-gradient flex items-center justify-center transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="font-heading font-semibold text-navy mt-4">{item.title}</div>
                <p className="text-sm text-gray mt-2 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 03 — Life at Mecca */}
      <section className="section-py bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.04]" />
        <div className="container-px relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="eyebrow mb-4 !text-accent inline-flex items-center gap-1 rounded-full border border-[#f3f4ff]/15 bg-[#dde6ff]/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
                Life at Mecca
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl leading-tight">
                &ldquo;People &amp; products that exude Care, Compassion &amp; Trust.&rdquo;
              </h2>
              <p className="mt-5 text-white/60 leading-relaxed max-w-lg">
                That&apos;s our founding vision, and it still shapes how we run our plants —
                through our Global Nursing Skills Demonstration programme, our 5S and Kaizen
                culture, and a genuine focus on the people who make the products, not just
                the output they make.
              </p>
            </div>


            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { label: "Established", value: "1977" },
                { label: "Manufacturing Units", value: "Kalol · Chattral · Boranada" },
                { label: "CSR Programme", value: "Global Nursing Skills Demonstration" },
                { label: "Quality System", value: "5S · Kaizen · TQC" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-xl2 bg-white/5 border border-white/10 backdrop-blur p-6"
                >
                  <p className="text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase">
                    {item.label}
                  </p>
                  <p className="mt-2 font-heading font-semibold text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* 04 — Open Positions */}
      <section id="open-roles" className="section-py bg-white scroll-mt-24">
        <div className="container-px">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <Eyebrow>Open Positions</Eyebrow>
              <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
                {filteredJobs.length} role{filteredJobs.length === 1 ? "" : "s"} open across our plants
              </h2>
            </div>


            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search roles..."
                className="w-full rounded-full border border-border bg-bg pl-11 pr-4 py-3 text-sm text-navy outline-none focus:border-burgundy/50 focus:ring-2 focus:ring-burgundy/10"
              />
            </div>
          </div>


          {/* Filters */}
          <div className="flex flex-col gap-4">
            <FilterRow
              label="Department"
              options={["All", ...DEPARTMENTS]}
              active={activeDept}
              onChange={(v) => setActiveDept(v as Department | "All")}
            />
            <FilterRow
              label="Location"
              options={["All", ...LOCATION_FILTERS]}
              active={activeLocation}
              onChange={(v) => setActiveLocation(v as LocationName | "All")}
            />
          </div>


          {/* Job list */}
          <div className="mt-10 grid gap-4">
            {filteredJobs.length === 0 && (
              <div className="rounded-xl2 border border-dashed border-border bg-bg py-16 text-center">
                <p className="text-gray">
                  No roles match those filters right now — try clearing a filter, or send us your resume below.
                </p>
              </div>
            )}


            {filteredJobs.map((job, i) => (
              <JobCard key={job.id} job={job} index={i} onApply={() => openApplyModal(job.title)} />
            ))}
          </div>
        </div>
      </section>


      {/* 05 — Hiring Process */}
      <section className="section-py bg-bg">
        <div className="container-px">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Eyebrow>How Hiring Works</Eyebrow>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
              From Application to Your First Shift
            </h2>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-xl2 bg-white border border-border p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-navy/5 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-navy" />
                  </div>
                  <span className="font-heading text-3xl font-extrabold text-navy/10">
                    0{i + 1}
                  </span>
                </div>
                <div className="font-heading font-semibold text-navy mt-4">{step.title}</div>
                <p className="text-sm text-gray mt-2 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 06 — Manufacturing Locations */}
      <section className="section-py bg-white">
        <div className="container-px">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Eyebrow>Where You&apos;d Work</Eyebrow>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
              Three Manufacturing Units. One Integrated Standard.
            </h2>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LOCATIONS.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-4 rounded-xl2 border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-burgundy/30 hover:shadow-soft"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-navy/5 transition-colors group-hover:bg-burgundy/10">
                  <Factory className="h-5 w-5 text-navy group-hover:text-burgundy" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-navy">{l.name}</div>
                  <div className="mt-0.5 text-xs text-gray">{l.area}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 07 — Final CTA */}
      <section className="section-py bg-bg">
        <div className="container-px">
          <div className="relative overflow-hidden rounded-[32px] bg-burgundy-gradient px-8 py-14 text-white md:px-14 lg:px-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.035]" />


            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                  Don&apos;t See the Right Role?
                </div>


                <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                  We&apos;re Always Looking for Good People.
                </h2>


                <p className="mt-5 max-w-2xl leading-relaxed text-white/75">
                  We&apos;re growing across production, quality, R&amp;D and export sales.
                  Send us your resume and we&apos;ll reach out when a fitting role opens up.
                </p>
              </div>


              <div className="relative z-10 flex flex-col gap-3 lg:min-w-[210px]">
                <button
                  type="button"
                  onClick={() => openApplyModal()}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#8B1E2D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Apply Now →
                </button>


                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                >
                  Talk to HR →
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Application Modal */}
        <AnimatePresence>
          {isApplyModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplyModalOpen(false)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 backdrop-blur-sm px-4 py-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[24px] bg-white shadow-[0_25px_70px_rgba(13,34,64,0.25)]"
              >
                <div className="h-2 bg-burgundy-gradient" />


                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(false)}
                  aria-label="Close"
                  className="absolute right-5 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-bg text-gray hover:bg-burgundy/10 hover:text-burgundy transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>


                <div className="px-7 pb-8 pt-7 sm:px-9 sm:pb-10">
                  {isSubmitted ? (
                    <div className="py-10 text-center">
                      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-burgundy/10">
                        <Handshake className="h-6 w-6 text-burgundy" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-navy">Thank You</h3>
                      <p className="mt-3 text-sm leading-6 text-gray max-w-xs mx-auto">
                        Your application has been received. Our HR team will get back to you
                        within 24–48 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setIsApplyModalOpen(false);
                          setIsSubmitted(false);
                        }}
                        className="mt-7 inline-flex items-center justify-center rounded-full bg-burgundy-gradient px-6 py-2.5 text-sm font-semibold text-white shadow-card hover:shadow-soft transition-all"
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-1 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-4 py-1.5 text-xs font-semibold text-[#8B1E2D]">
                        Careers Application
                      </div>


                      <h3 className="mt-3 font-heading text-2xl font-bold text-navy sm:text-[28px]">
                        Apply to Mecca Healthcare
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray">
                        Share your details and our HR team will get back to you about next steps.
                      </p>


                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setIsSubmitted(true);
                        }}
                        className="mt-6 space-y-4"
                      >
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label className="mb-1.5 block text-xs font-semibold text-navy">
                              Full Name
                            </label>
                            <input
                              required
                              type="text"
                              placeholder="Your name"
                              className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                            />
                          </div>
                          <div>
                            <label className="mb-1.5 block text-xs font-semibold text-navy">
                              Phone
                            </label>
                            <input
                              required
                              type="tel"
                              placeholder="+91"
                              className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                            />
                          </div>
                        </div>


                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-navy">
                            Email
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                          />
                        </div>


                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-navy">
                            Position
                          </label>
                          <select
                            defaultValue={prefillRole}
                            className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                          >
                            <option value="">General Application</option>
                            {JOBS.map((job) => (
                              <option key={job.id} value={job.title}>
                                {job.title} — {job.location}
                              </option>
                            ))}
                          </select>
                        </div>


                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-navy">
                            Resume Link
                          </label>
                          <input
                            type="url"
                            placeholder="Link to your resume (Google Drive, LinkedIn, etc.)"
                            className="w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                          />
                        </div>


                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-navy">
                            A Little About You
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Current role, relevant experience, or anything else worth knowing"
                            className="w-full resize-none rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-gray/60 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/10"
                          />
                        </div>


                        <button
                          type="submit"
                          className="mt-2 w-full inline-flex items-center justify-center rounded-xl bg-burgundy-gradient px-6 py-3 text-sm font-semibold text-white shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
                        >
                          Submit Application →
                        </button>


                        <p className="text-center text-[11px] text-gray">
                          We typically respond within 24–48 business hours.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>


      <Footer />
    </main>
  );
}


/* ------------------------------- Job Card ------------------------------- */


function FilterRow({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: string[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <span className="text-xs font-bold tracking-[0.1em] text-gray w-24 shrink-0">
        {label.toUpperCase()}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = option === active;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors border ${
                isActive
                  ? "bg-burgundy-gradient border-transparent text-white"
                  : "bg-white border-border text-navy/70 hover:border-burgundy/40"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}


function JobCard({ job, index, onApply }: { job: Job; index: number; onApply: () => void }) {
  const [open, setOpen] = useState(false);


  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.05 }}
      className="rounded-xl2 border border-border bg-white shadow-sm overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-left px-6 py-6"
      >
        <span className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">  
          <Briefcase className="h-5 w-5" />
        </span>


        <div className="flex-1 min-w-0">
          <p className="font-heading font-semibold text-navy text-lg">{job.title}</p>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {job.type}
            </span>
            <span>{job.experience}</span>
          </div>
        </div>


        <span className="hidden sm:inline-block rounded-full bg-bg text-navy/60 text-xs font-semibold px-3 py-1.5">
          {job.department}
        </span>


        <ChevronDown
          className={`h-5 w-5 text-gray shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>


      {open && (
        <div className="px-6 pb-6 sm:pl-[92px]">
          <p className="text-sm leading-relaxed text-gray max-w-2xl">{job.blurb}</p>
          <button
            type="button"
            onClick={onApply}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-burgundy-gradient text-white text-sm font-semibold px-6 py-3 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all"
          >
            Apply for this role
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </motion.div>
  );
}

