"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen max-w-7xl mx-auto pt-20">
      <h2
        className="
          relative z-20
          pointer-events-none
          text-5xl md:text-7xl font-black text-center tracking-tight
          text-white
          [text-shadow:0_4px_8px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.8)]
          mb-10 md:mb-12
        "
      >
        EXPERIENCE
      </h2>

      <div className="space-y-8 px-4 md:px-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group relative p-6 md:p-10 rounded-[2rem] bg-zinc-900/40 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden"
        >
          {/* Subtle Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                Full Stack Developer Intern
              </h3>
              <p className="text-sm font-semibold tracking-wider uppercase text-slate-400 md:mt-0 mt-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                May 2026 – Present
              </p>
            </div>
            
            <p className="text-lg md:text-xl font-bold text-blue-500 mb-6 drop-shadow-sm">
              MyClickBook
            </p>
            
            <p className="text-slate-300 mb-8 text-sm md:text-base leading-relaxed">
              Contributed to the development of MyClickBook, a SaaS-based appointment booking and business management platform for salons and service providers. Worked across frontend and backend modules, implementing authentication, onboarding workflows, API integrations, localization, testing, and UI improvements while collaborating in an Agile team using GitLab.
            </p>
            
            <div className="mb-8">
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Key Contributions & Highlights:
              </h4>
              <ul className="list-outside list-disc space-y-3 text-sm md:text-base text-slate-300 ml-5 marker:text-blue-500">
                <li>Developed and enhanced React Native features for the Vendor application, translating Figma designs into responsive mobile interfaces.</li>
                <li>Built complete onboarding workflows, including role selection, phone authentication, OTP verification, business setup, staff onboarding, portfolio management, weekly schedules, and goal selection.</li>
                <li>Implemented Google Sign-In, authentication flows, user profile updates, and resolved login and username synchronization issues.</li>
                <li>Integrated and tested REST APIs for authentication, vendor management, onboarding, inventory, and business workflows.</li>
                <li>Implemented application localization (i18n) and updated localization test cases to support multilingual functionality.</li>
                <li>Developed vendor profile management features, including portfolio galleries, salon services, staff management, and inventory UI.</li>
                <li>Completed 35+ GitLab issues and feature requests across multiple modules during the internship.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest text-slate-400">Tech Stack</h4>
              <div className="flex flex-wrap gap-2.5">
                {["React Native", "TypeScript", "Expo", "REST APIs", "GitLab", "Figma", "Firebase", "Google OAuth", "i18n"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-xs font-bold tracking-wide rounded-full bg-white/5 border border-white/10 text-slate-300 backdrop-blur-md group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-white transition-all duration-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
