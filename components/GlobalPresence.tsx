// "use client";

// import { motion } from "framer-motion";
// import { MapPin } from "lucide-react";

// const REGIONS = ["Middle East", "Africa", "Latin America", "South East Asia", "CIS"];
// const PLANTS = [
//   { name: "Kalol", detail: "Primary extrusion & moulding facility" },
//   { name: "Chhatral", detail: "Cleanroom assembly & sterilization" },
//   { name: "Jodhpur", detail: "Packaging & distribution hub" },
// ];

// export default function GlobalPresence() {
//   return (
//     <section className="section-py bg-bg overflow-hidden">
//       <div className="container-px grid lg:grid-cols-2 gap-16 items-center">
//         <div>
//           <div className="eyebrow mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">Global Presence</div>
//           <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl leading-tight">
//             Exporting precision to five continents
//           </h2>
//           <p className="mt-5 text-gray leading-relaxed max-w-lg">
//             From three certified plants in India, Mecca Healthcare ships to
//             hospitals and distributors across every major growth region in
//             global healthcare.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-3">
//             {REGIONS.map((r) => (
//               <span
//                 key={r}
//                 className="inline-flex items-center gap-1.5 rounded-full bg-white border border-border px-4 py-2 text-sm font-medium text-navy"
//               >
//                 <MapPin className="w-3.5 h-3.5 text-burgundy" />
//                 {r}
//               </span>
//             ))}
//           </div>

//           <div className="mt-10 grid grid-cols-3 gap-4">
//             {PLANTS.map((p, i) => (
//               <motion.div
//                 key={p.name}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="rounded-xl bg-white border border-border p-4"
//               >
//                 <div className="font-heading font-semibold text-navy">{p.name}</div>
//                 <div className="text-xs text-gray mt-1 leading-snug">{p.detail}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Stylized world map */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="relative rounded-xl2 bg-navy-gradient p-10 h-[420px] flex items-center justify-center overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-medical-grid bg-grid opacity-10" />
//           <svg viewBox="0 0 400 240" className="w-full h-full relative">
//             {[
//               [80, 90], [140, 70], [200, 110], [260, 80], [320, 130], [110, 160], [230, 170],
//             ].map(([x, y], i) => (
//               <g key={i}>
//                 <motion.circle
//                   cx={x}
//                   cy={y}
//                   r="4"
//                   fill="#C8D8F5"
//                   initial={{ opacity: 0.3 }}
//                   animate={{ opacity: [0.3, 1, 0.3] }}
//                   transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
//                 />
//                 <motion.line
//                   x1="200"
//                   y1="120"
//                   x2={x}
//                   y2={y}
//                   stroke="#355A8A"
//                   strokeWidth="1"
//                   strokeDasharray="4 4"
//                   initial={{ pathLength: 0, opacity: 0 }}
//                   whileInView={{ pathLength: 1, opacity: 0.5 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1.2, delay: i * 0.15 }}
//                 />
//               </g>
//             ))}
//             <circle cx="200" cy="120" r="7" fill="#8B1E2D" />
//             <circle cx="200" cy="120" r="12" fill="none" stroke="#8B1E2D" strokeWidth="1" opacity="0.5" />
//           </svg>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  {
    city: "Kalol",
    state: "Gujarat",
    capacity: "12M+ units/year",
    specs: "3 Lines, ISO Class 7",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlml7ygD-J6OCQVH6SpSu0JZjjKU-P1eIcOj-z2G62iM8olVjCXTf5BMZUZmZoOam8ZG_BTqUly0JfoxVnlWGZ85-YCYTCEECTnxrDToxc54KrIuECqSGdxei2sbI_kTWln3ycb=s680-w680-h510-rw",
  },
  {
    city: "Chhatral",
    state: "Gujarat",
    capacity: "10M+ units/year",
    specs: "2 Lines, Class 8",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmacu2AclHkmtHlJ15AG0y68DFWzEDe8hvWhqGi2epBA&s=10",
  },
  {
    city: "Jodhpur",
    state: "Rajasthan",
    capacity: "8M+ units/year",
    specs: "1 Line, Class 8",
    image: "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function GlobalPresence() {
  return (
    <section className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            
            <span className="eyebrow mb-4 inline-flex items-center gap-1 rounded-full border border-[#ff91a0]/15 bg-[#9e3744]/10 px-5 py-2 text-sm font-semibold text-[#8B1E2D] backdrop-blur-md">
              Manufacturing Footprint
            </span>
          </div>

          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl leading-tight">
            Manufacturing Excellence Across India
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {locations.map((item, index) => (

            <motion.div
              key={item.city}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .15
              }}
            >

              {/* Image */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02
                }}
                transition={{
                  duration: .35
                }}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >

                <img
                  src={item.image}
                  alt={item.city}
                  className="h-[280px] w-full object-cover transition duration-700 hover:scale-110"
                />

              </motion.div>

              {/* Info Card */}

              <motion.div

                whileHover={{
                  y: -6
                }}

                className="mt-7 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300"

              >

                <div className="flex items-start gap-3">

                  <div className="mt-1">
                    <MapPin
                      className="w-4 h-4 text-[#8B1E2D]"
                    />
                  </div>

                  <div>

                    <h3 className="font-semibold text-lg text-gray-900">
                      {item.city}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.state}
                    </p>

                  </div>

                </div>

                <div className="my-5 border-t" />

                <div className="space-y-2 text-sm">

                  <p className="text-gray-500">
                    Capacity:
                    <span className="font-semibold text-gray-900 ml-1">
                      {item.capacity}
                    </span>
                  </p>

                  <p className="text-gray-500">
                    Specifications:
                    <span className="font-semibold text-gray-900 ml-1">
                      {item.specs}
                    </span>
                  </p>

                </div>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}