"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const CERTIFICATES = [
  {
    name: "Introduction to Generative AI Studio",
    issuedBy: "Google Cloud",
    logo: "https://logo.clearbit.com/cloud.google.com",
    link: "https://drive.google.com/file/d/1_S3I2HY6aQO15Js8Y2jfP9yo1MDg6a5l/view",
  },
  {
    name: "Data Analytics Job Simulation",
    issuedBy: "Deloitte",
    logo: "https://logo.clearbit.com/deloitte.com",
    link: "https://drive.google.com/file/d/1AHNb9lCt1INaQt9sKl8NCZkopuDF0rrx/view",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuedBy: "Oracle",
    logo: "https://logo.clearbit.com/oracle.com",
    link: "https://drive.google.com/file/d/13jLO4mQ6Y13bo-RtIrSsAk5Ef3Jilg2_/view",
  },
  {
    name: "GenAI Powered Data Analytics Job Simulation",
    issuedBy: "TATA",
    logo: "https://logo.clearbit.com/tata.com",
    link: "https://drive.google.com/file/d/1kfvNRfhqbneuusfNosty59pZ9_UFrV7g/view",
  },
  {
    name: "Database Management Systems",
    issuedBy: "Infosys SpringBoard",
    logo: "https://logo.clearbit.com/infosys.com",
    link: "https://drive.google.com/drive/folders/1CjoMLrSfYoNgUzjEiROzHjvwbyJKvaUW",
  },
  {
    name: "Introduction to Natural Language Processing",
    issuedBy: "Infosys SpringBoard",
    logo: "https://logo.clearbit.com/infosys.com",
    link: "https://drive.google.com/file/d/1KL9wrZnza-XuHbkhhcaUeD_TE5ouC1r7/view",
  },
  {
    name: "Introduction to Deep Learning",
    issuedBy: "Infosys SpringBoard",
    logo: "https://logo.clearbit.com/infosys.com",
    link: "https://drive.google.com/file/d/1kXHmxX8nEAo-XUAGX-vfe6FPSWQoSJ_f/view",
  },
  {
    name: "Python for Data Science",
    issuedBy: "Infosys SpringBoard",
    logo: "https://logo.clearbit.com/infosys.com",
    link: "https://drive.google.com/file/d/1xzbfySZN3FI3iSpBV-JIsmcjeaQmnEem/view",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="relative z-10 min-h-screen max-w-7xl mx-auto pt-20">
      {/* Heading */}
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
        CERTIFICATES
      </h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6 relative z-10 px-4 md:px-8 max-w-5xl mx-auto pb-20">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="group relative flex flex-col p-6 rounded-[2rem] bg-zinc-900/40 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden"
          >
            {/* Subtle Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 flex items-start gap-5">
              {/* Award Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-inner group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-500 shrink-0">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                  {cert.name}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-sm font-medium text-slate-400">
                    Issued by <span className="text-slate-200">{cert.issuedBy}</span>
                  </p>
                  {/* Company Logo */}
                  <div className="p-0.5 bg-white rounded-sm">
                    <img 
                      src={cert.logo} 
                      alt={cert.issuedBy} 
                      className="w-4 h-4 object-contain rounded-sm"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-6 flex justify-end mt-auto pt-4">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-sm"
              >
                View Certificate
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
