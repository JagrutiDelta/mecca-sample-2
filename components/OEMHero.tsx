"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Handshake,
  ShieldCheck,
  Award,
  Factory,
} from "lucide-react";

export default function OEMHero() {
  return (
    <section
      id="oem-hero"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg" />

      {/* Medical Grid */}
      <div className="absolute inset-0 bg-medical-grid bg-grid opacity-60 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,black,transparent)]" />

      {/* Background Glow */}
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-medblue/10 blur-3xl" />

      <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-burgundy/10 blur-3xl" />

      <div className="container-px relative z-10 grid items-center gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md"
          >
            <Handshake className="h-4 w-4" />
            Global OEM Partnerships
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl"
          >
            Your Product Vision.
            <br />

            <span className="relative inline-block text-burgundy">
              Our Manufacturing

              {/* Animated underline */}
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
            </span>

            <br />

            <span className="text-medblue">
              Expertise.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray md:text-lg"
          >
            Transform your healthcare product vision into reality with
            end-to-end OEM manufacturing solutions — from product development
            and precision manufacturing to private labeling and global supply.
          </motion.p>

          {/* CTA */}
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
              href="#oem-contact"
              className="group inline-flex items-center gap-2 rounded-full bg-burgundy-gradient px-8 py-4 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Start an OEM Conversation

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#oem-models"
              className="group inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/70 px-8 py-4 text-sm font-semibold text-navy backdrop-blur transition-colors hover:bg-white"
            >
              Explore Capabilities

              <ArrowRight className="h-4 w-4 text-gray transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Small Trust Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-navy">
              <ShieldCheck className="h-4 w-4 text-burgundy" />
              Quality-Focused
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-navy">
              <Factory className="h-4 w-4 text-medblue" />
              Advanced Manufacturing
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-navy">
              <Award className="h-4 w-4 text-burgundy" />
              Global Standards
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative h-[430px] sm:h-[520px] lg:h-[600px]">

          {/* Main Image */}
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
              src="/oem/hero_engineers.png"
              alt="Medical manufacturing engineers reviewing OEM product development"
              className="h-full w-full object-cover"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-navy/5 to-transparent" />
          </motion.div>

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.6 },
              x: { duration: 0.6, delay: 0.6 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute -left-4 top-8 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-soft backdrop-blur-xl md:-left-10"
          >
            <div className="font-heading text-2xl font-extrabold text-burgundy">
              OEM
            </div>

            <div className="text-xs text-gray">
              End-to-End Partnership
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-2 top-1/3 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-soft backdrop-blur-xl md:-right-8"
          >
            <div className="font-heading text-2xl font-extrabold text-navy">
              3
            </div>

            <div className="text-xs text-gray">
              Manufacturing Plants
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-2 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-soft backdrop-blur-xl md:-left-6"
          >
            <div className="font-heading text-2xl font-extrabold text-medblue">
              Custom
            </div>

            <div className="text-xs text-gray">
              Product Development
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-4 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-soft backdrop-blur-xl md:right-0"
          >
            <div className="font-heading text-2xl font-extrabold text-burgundy">
              Global
            </div>

            <div className="text-xs text-gray">
              Export Capabilities
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}