"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 48, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "M+", label: "Products Manufactured" },
  { value: 3, suffix: "", label: "Manufacturing Units" },
  { value: 4, suffix: "+", label: "International Certifications" },
  { value: 5, suffix: "+", label: "Export Regions" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="relative -mt-1">
      <div className="container-px">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 rounded-xl2 bg-white/70 backdrop-blur-xl border border-border shadow-card p-6 md:p-10">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`text-center px-2 py-3 ${
                i !== 0 ? "md:border-l md:border-border" : ""
              }`}
            >
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-burgundy">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs md:text-sm text-gray font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
