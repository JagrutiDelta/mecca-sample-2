"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SinceBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-14 inline-flex items-center gap-5 rounded-2xl bg-white shadow-card border border-border px-6 py-4"
    >
      <div className="w-16 h-16 relative flex-shrink-0">
        <Image
          src="/SinceBadge.png"
          alt="Since 1977"
          fill
          className="object-contain"
          sizes="64px"
        />
      </div>
      <span className="h-10 w-px bg-border" aria-hidden="true" />
      <p className="font-heading font-bold text-navy text-base leading-snug">
        48+ Years of
        <br />
        Manufacturing Excellence
      </p>
    </motion.div>
  );
}