"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";

const EDUCATION = [
  {
    degree: "B.E. Computer Science (AI & ML)",
    institution: "Sahyadri College of Engineering & Management",
    period: "2023 – 2027",
    icon: <Image src="/assets/Education/sahyadri.png" alt="Sahyadri" width={100} height={100} className="w-full h-full object-cover" />,
  },
  {
    degree: "PUC - Science Stream",
    institution: "St Aloysius PU College, Mangalore",
    period: "2021 – 2023",
    icon: <Image src="/assets/Education/Aloysius.png" alt="Aloysius" width={100} height={100} className="w-full h-full object-cover" />,
  },
  {
    degree: "SSLC",
    institution: "Sarojini Madhusudan Kushe Educational Institution, Mangalore",
    period: "2021",
    icon: <Image src="/assets/Education/madhusudan.png" alt="Madhusudan" width={100} height={100} className="w-full h-full object-cover" />,
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen max-w-7xl mx-auto pt-20">
      <h2
        className="
          relative z-20
          pointer-events-none
          text-5xl md:text-7xl font-black text-center tracking-tight
          text-white
          [text-shadow:0_4px_8px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.8)]
          mb-10 md:mb-16
        "
      >
        EDUCATION
      </h2>

      <div className="space-y-6 px-4 md:px-8 max-w-5xl mx-auto">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="group relative flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-[2rem] bg-zinc-900/40 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden items-start md:items-center"
          >
            {/* Subtle Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Icon Container */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500 shrink-0">
              {edu.icon}
            </div>

            {/* Content Details */}
            <div className="relative z-10 flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                {edu.degree}
              </h3>
              <p className="text-base md:text-lg text-slate-300 font-medium mt-1 drop-shadow-sm">
                {edu.institution}
              </p>
            </div>

            {/* Date Pill */}
            <div className="relative z-10 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 shrink-0 text-sm font-semibold tracking-wider uppercase text-slate-400 group-hover:text-blue-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors duration-300 shadow-sm mt-2 md:mt-0">
              <Calendar className="w-4 h-4" />
              {edu.period}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
