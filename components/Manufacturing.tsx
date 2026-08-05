// "use client";

// import { motion } from "framer-motion";

// const PROCESS = [
//   "Plastic Compounding",
//   "Extrusion",
//   "Injection Moulding",
//   "Cleanroom Assembly",
//   "ETO Sterilization",
//   "Packaging",
// ];

// const METHODOLOGY = [
//   { name: "5S", desc: "Sort, set in order, shine, standardize, sustain — on every line." },
//   { name: "Kaizen", desc: "Continuous, incremental improvement built into daily operations." },
//   { name: "Total Quality Control", desc: "In-line inspection at every stage of production." },
// ];

// const CLIENTS = ["B Braun", "Cipla", "Intas", "Torrent", "Fresenius", "Wockhardt"];

// export default function Manufacturing() {
//   return (
//     <section id="manufacturing" className="section-py bg-navy-gradient text-white relative overflow-hidden">
//       <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.04]" />
//       <div className="container-px relative">
//         <div className="max-w-2xl mb-16">
//           <div className="eyebrow mb-4 !text-accent inline-flex items-center gap-1 rounded-full border border-[#f3f4ff]/15 bg-[#dde6ff]/10 px-5 py-2 text-sm font-semibold text- [#f7f7f7] backdrop-blur-md">Manufacturing Capabilities</div>
//           <h2 className="font-heading font-bold text-3xl md:text-4xl">
//             From raw polymer to sterile, packaged device
//           </h2>
//           <p className="mt-4 text-white/60 leading-relaxed">
//             Every stage of production runs under strict process control — engineered
//             for repeatability at millions of units of scale.
//           </p>
//         </div>

//         {/* Process line */}
//         <div className="relative mb-20">
//           <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/15" />
//           <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4">
//             {PROCESS.map((step, i) => (
//               <motion.div
//                 key={step}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="relative flex flex-col items-center text-center"
//               >
//                 <div className="w-12 h-12 rounded-full bg-burgundy-gradient flex items-center justify-center font-heading font-bold relative z-10 mb-4">
//                   {i + 1}
//                 </div>
//                 <div className="text-sm font-medium text-white/90">{step}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Methodology */}
//         <div className="grid md:grid-cols-3 gap-6 mb-20">
//           {METHODOLOGY.map((m, i) => (
//             <motion.div
//               key={m.name}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="rounded-xl2 bg-white/5 border border-white/10 backdrop-blur p-6"
//             >
//               <div className="font-heading font-bold text-accent text-lg">{m.name}</div>
//               <p className="text-sm text-white/60 mt-2 leading-relaxed">{m.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Client logo marquee */}
//         <div>
//           <div className="text-xs uppercase tracking-[0.18em] text-white/40 mb-6 text-center">
//             Trusted by leading pharmaceutical & healthcare brands
//           </div>
//           <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//             <div className="flex gap-16 animate-marquee w-max">
//               {[...CLIENTS, ...CLIENTS].map((c, i) => (
//                 <span
//                   key={c + i}
//                   className="text-xl font-heading font-semibold text-white/40 whitespace-nowrap"
//                 >
//                   {c}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
 
import { motion } from "framer-motion";
import {
  Blend,
  ArrowRightFromLine,
  Syringe,
  ShieldCheck,
  Wind,
  Package,
} from "lucide-react";
 
const PROCESS = [
  { name: "Plastic Compounding", icon: Blend },
  { name: "Extrusion", icon: ArrowRightFromLine },
  { name: "Injection Moulding", icon: Syringe },
  { name: "Cleanroom Assembly", icon: ShieldCheck },
  { name: "ETO Sterilization", icon: Wind },
  { name: "Packaging", icon: Package },
];
 
const METHODOLOGY = [
  { name: "5S", desc: "Sort, set in order, shine, standardize, sustain — on every line." },
  { name: "Kaizen", desc: "Continuous, incremental improvement built into daily operations." },
  { name: "Total Quality Control", desc: "In-line inspection at every stage of production." },
];
 
const CLIENTS = ["B Braun", "Cipla", "Intas", "Torrent", "Fresenius", "Wockhardt"];
 
export default function Manufacturing() {
  return (
    <section id="manufacturing" className="section-py bg-navy-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-medical-grid bg-grid opacity-[0.04]" />
      <div className="container-px relative">
        <div className="max-w-2xl mb-16">
         <div className="eyebrow mb-4 !text-accent inline-flex items-center gap-1 rounded-full border border-[#f3f4ff]/15 bg-[#dde6ff]/10 px-5 py-2 text-sm font-semibold text- [#f7f7f7] backdrop-blur-md">Manufacturing Capabilities</div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            From raw polymer to sterile, packaged device
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Every stage of production runs under strict process control — engineered
            for repeatability at millions of units of scale.
          </p>
        </div>
 
        {/* Process line */}
        <div className="relative mb-20">
          <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-white/15" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4">
            {PROCESS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-burgundy-gradient ring-4 ring-navy-900/40 flex items-center justify-center relative z-10 mb-4 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <div className="text-[11px] font-semibold tracking-[0.14em] text-accent/80 uppercase mb-1">
                    Step {i + 1}
                  </div>
                  <div className="text-sm font-medium text-white/90 leading-snug max-w-[9rem]">
                    {step.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
 
        {/* Methodology */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {METHODOLOGY.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl2 bg-white/5 border border-white/10 backdrop-blur p-6 transition-colors duration-300 hover:bg-white/[0.08] hover:border-white/20"
            >
              <div className="font-heading font-bold text-accent text-lg">{m.name}</div>
              <p className="text-sm text-white/60 mt-2 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
 
     
      </div>

      {/* Global Clients */}
<div className="py-16">
  {/* Heading */}
  <div className="mb-10 text-center">
    <div className="mb-3 flex items-center justify-center gap-3">
      <span className="h-px w-8 bg-primary/30"></span>
      <span className="eyebrow mb-4 !text-accent inline-flex items-center gap-1 rounded-full border border-[#f3f4ff]/15 bg-[#dde6ff]/10 px-5 py-2 text-sm font-semibold text- [#f7f7f7] backdrop-blur-md">
        Global Clients
      </span>
      <span className="h-px w-8 bg-primary/30"></span>
    </div>

    <h2 className="text-3xl font-heading font-bold text-white-900 md:text-4xl">
      Trusted by Leading Medical Device Companies
    </h2>
  </div>

  {/* Marquee */}
  <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
    <div className="flex w-max min-w-max items-center gap-8 motion-safe:animate-marquee hover:[animation-play-state:paused]">

      {[...CLIENTS, ...CLIENTS].map((logo, index) => (
        <div
          key={index}
          className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
        >
          {/* Image Logo */}
          <img
            src={logo}
            alt="Client Logo"
            className="max-h-10 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
          />

          {/* OR if using text instead of images */}

          {/* <span className="text-lg font-semibold text-gray-500">
              {logo}
          </span> */}
        </div>
      ))}

    </div>
  </div>
</div>
    </section>
  );
}
 