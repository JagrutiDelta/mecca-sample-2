"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ARTICLES = [
  {
    tag: "Industry Update",
    title: "Navigating new ISO 13485:2016 audit requirements for exporters",
    date: "Jul 2026",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "Healthcare Innovation",
    title: "The shift toward single-use devices in emerging healthcare markets",
    date: "Jun 2026",
    img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=800&auto=format&fit=crop",
  },
  {
    tag: "Manufacturing",
    title: "Inside Mecca's cleanroom expansion at our Chhatral facility",
    date: "May 2026",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
  },
];

export default function News() {
  return (
    <section className="section-py bg-bg">
      <div className="container-px">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <div className="eyebrow mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">Latest News</div>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
              Insights from our industry
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-burgundy inline-flex items-center gap-1">
            View all articles <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((a, i) => (
            <motion.a
              href="#"
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl2 bg-white border border-border overflow-hidden shadow-card hover:shadow-soft transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray">
                  <span className="text-burgundy font-semibold">{a.tag}</span>
                  <span>&middot;</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="font-heading font-semibold text-navy mt-3 leading-snug group-hover:text-burgundy transition-colors">
                  {a.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
