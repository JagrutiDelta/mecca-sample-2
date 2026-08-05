// "use client";

// import { motion } from "framer-motion";
// import { FileText, Handshake } from "lucide-react";

// export default function FinalCTA() {
//   return (
//     <section id="contact" className="section-py bg-bg">
//       <div className="container-px">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="rounded-xl2 bg-burgundy-gradient text-white overflow-hidden grid lg:grid-cols-2"
//         >
//           <div className="p-10 md:p-14 flex flex-col justify-center">
//             <h2 className="font-heading font-bold text-3xl md:text-4xl leading-tight">
//               Ready to partner with a certified medical device manufacturer?
//             </h2>
//             <div className="mt-8 flex flex-col sm:flex-row gap-4">
//               <a
//                 href="#contact-form"
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-burgundy text-sm font-semibold px-6 py-3.5 hover:-translate-y-0.5 transition-transform"
//               >
//                 <FileText className="w-4 h-4" />
//                 Request Product Quote
//               </a>
//               <a
//                 href="#contact-form"
//                 className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 text-white text-sm font-semibold px-6 py-3.5 hover:bg-white/10 transition-colors"
//               >
//                 <Handshake className="w-4 h-4" />
//                 Discuss OEM Partnership
//               </a>
//             </div>
//             <p className="mt-8 text-sm text-white/70">
//               No obligation. Our specialists respond within 24 hours.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { FileText, Handshake } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="section-py bg-bg"
    >
      <div className="container-px">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[28px] bg-burgundy-gradient text-white"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 px-8 py-12 md:px-12 md:py-14 lg:px-16">

            {/* LEFT SIDE */}
            <div className="max-w-3xl">

              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                

                <span className="eyebrow mb-4 !text-white inline-flex items-center gap-1 rounded-full border border-[#ffffff]/15 bg-[#ffffff]/10 px-5 py-2 text-sm font-semibold text- [#f7f7f7] backdrop-blur-md">
                  Start Your Project
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-heading text-3xl font-bold leading-tight md:text-[42px]">
                Ready to Partner with a Trusted OEM Manufacturing Leader?
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                Submit your requirements today. Our team responds within
                <span className="font-semibold text-white">
                  {" "}24 hours{" "}
                </span>
                with a detailed proposal and manufacturing timeline.
              </p>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex w-full flex-col gap-4 lg:w-56">

              <motion.a
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                href="#contact-form"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white text-sm font-semibold text-burgundy shadow-md transition-all"
              >
                <FileText className="h-4 w-4" />
                Request a Quote
              </motion.a>

              <motion.a
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                href="#contact-form"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <Handshake className="h-4 w-4" />
                Schedule a Call
              </motion.a>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}