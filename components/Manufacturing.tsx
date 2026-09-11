"use client";
 
import { motion } from "framer-motion";
import Image from "next/image";
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
 
const CLIENTS = [
  { name: "Cipla", src: "/clients/1.png" },
  { name: "Hetero", src: "/clients/2.jpg" },
  { name: "B. Braun", src: "/clients/3.png" },
  { name: "Hollister", src: "/clients/4.jpg" },
  { name: "Claris", src: "/clients/5.jpg" },
  { name: "Global Partner", src: "/clients/6.png" },
];

const MARQUEE_TRACK = [...CLIENTS, ...CLIENTS, ...CLIENTS];
 
export default function Manufacturing() {
  return (
    <section id="manufacturing" className="section-py bg-navy-gradient text-white relative overflow-hidden">
      <div className="container-px">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="eyebrow mb-4 !text-accent">World-Class Infrastructure</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
            State-of-the-Art <span className="text-accent">Manufacturing</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Our Gujarat &amp; Rajasthan facilities integrate automated injection moulding, extrusion lines,
            and Class 100,000 cleanrooms — delivering high-precision medical devices with zero-defect tolerance.
          </p>
        </div>
 
        {/* Process Flow */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {PROCESS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="relative bg-white/5 border border-white/10 rounded-xl p-5 text-center group hover:bg-white/10 transition-colors"
              >
                <span className="text-xs font-mono text-accent/80 mb-2 block">0{idx + 1}</span>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-white">{p.name}</h4>
              </div>
            );
          })}
        </div>
 
        {/* Methodology Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {METHODOLOGY.map((m) => (
            <div
              key={m.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-accent mb-2">{m.name}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Clients Infinite Marquee */}
      <div className="py-16">
        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary/30"></span>
            <span className="eyebrow mb-4 !text-accent inline-flex items-center gap-1 rounded-full border border-[#f3f4ff]/15 bg-[#dde6ff]/10 px-5 py-2 text-sm font-semibold text-[#f7f7f7] backdrop-blur-md">
              Global Clients
            </span>
            <span className="h-px w-8 bg-primary/30"></span>
          </div>

          <h2 className="text-3xl font-heading font-bold text-white md:text-4xl">
            Trusted by Leading Medical Device Companies
          </h2>
        </div>

        {/* Endless Seamless Marquee */}
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] py-3">
          <div className="flex w-max items-center">
            {/* Track 1 */}
            <div className="flex shrink-0 items-center gap-8 pr-8 animate-marquee group-hover:[animation-play-state:paused]">
              {MARQUEE_TRACK.map((client, index) => (
                <div
                  key={`track1-${client.name}-${index}`}
                  className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  <img
                    src={client.src}
                    alt={client.name}
                    className="max-h-12 w-auto max-w-[140px] object-contain grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              ))}
            </div>

            {/* Track 2 (Identical Duplicate for Perfect Continuous Loop) */}
            <div
              className="flex shrink-0 items-center gap-8 pr-8 animate-marquee group-hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {MARQUEE_TRACK.map((client, index) => (
                <div
                  key={`track2-${client.name}-${index}`}
                  className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  <img
                    src={client.src}
                    alt={client.name}
                    className="max-h-12 w-auto max-w-[140px] object-contain grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}