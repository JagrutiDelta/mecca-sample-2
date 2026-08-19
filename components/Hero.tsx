"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import SinceBadge from "./SinceBadge";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-medical-grid bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-medblue/10 blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-burgundy/10 blur-3xl" />

      <div className="container-px relative grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4" />
            Trusted Since 1977
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-extrabold text-navy text-4xl sm:text-hero-mobile md:text-hero-tablet xl:text-hero-desktop leading-[1.05] tracking-tight"
          >
            Trusted{" "}
            <span className="relative inline-block text-burgundy">
              Medical Device
              <svg
                className="absolute left-0 -bottom-1 w-full"
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
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </svg>
            </span>{" "}
            Manufacturing &amp;{" "}
            <span className="text-medblue">Global OEM Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base md:text-lg text-gray max-w-xl leading-relaxed"
          >
            Manufacturing world-class medical disposables, infusion systems, OEM
            healthcare solutions, and precision-engineered devices for hospitals,
            distributors, and healthcare brands across the globe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-burgundy-gradient text-white text-sm font-semibold px-8 py-4 shadow-soft hover:-translate-y-0.5 transition-transform"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#oem"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/70 backdrop-blur text-navy text-sm font-semibold px-8 py-4 hover:bg-white transition-colors"
            >
              OEM Partnership
            </a>
          </motion.div>
          <SinceBadge />
          
        </div>

        {/* RIGHT */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 rounded-xl2 overflow-hidden shadow-soft"
          >
            <img
              src="/Homepage_Hero.png"
              alt="Cleanroom medical device manufacturing floor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating glass cards */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 md:-left-10 top-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-glass border border-white/60 px-5 py-4"
          >
            <div className="font-heading font-extrabold text-2xl text-navy">48+</div>
            <div className="text-xs text-gray">Years of Excellence</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-2 md:-right-8 top-1/3 bg-white/80 backdrop-blur-xl rounded-2xl shadow-glass border border-white/60 px-5 py-4"
          >
            <div className="font-heading font-extrabold text-2xl text-navy">30M+</div>
            <div className="text-xs text-gray">Products Manufactured</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute left-2 md:-left-6 bottom-10 bg-white/80 backdrop-blur-xl rounded-2xl shadow-glass border border-white/60 px-5 py-4"
          >
            <div className="font-heading font-extrabold text-2xl text-navy">3</div>
            <div className="text-xs text-gray">Manufacturing Plants</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute right-4 md:right-0 bottom-0 bg-white/80 backdrop-blur-xl rounded-2xl shadow-glass border border-white/60 px-5 py-4"
          >
            <div className="font-heading font-extrabold text-2xl text-navy">50+</div>
            <div className="text-xs text-gray">Export Countries</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
