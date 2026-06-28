"use client";

import { cn } from "@/lib/utils";

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
        <div className="p-6 md:p-8 rounded-xl bg-white/70 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-zinc-100">
              Full Stack Developer Intern
            </h3>
            <p className="text-sm font-medium text-slate-500 dark:text-zinc-400 md:mt-0 mt-2">
              May 2026 – Present
            </p>
          </div>
          
          <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
            MyClickBook
          </p>
          
          <p className="text-slate-600 dark:text-zinc-300 mb-6 text-sm leading-relaxed">
            Contributed to the development of MyClickBook, a SaaS-based appointment booking and business management platform for salons and service providers. Worked across frontend and backend modules, implementing authentication, onboarding workflows, API integrations, localization, testing, and UI improvements while collaborating in an Agile team using GitLab.
          </p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-slate-800 dark:text-zinc-200 mb-3">Key Contributions & Highlights:</h4>
            <ul className="list-outside list-disc space-y-2 text-sm text-slate-600 dark:text-zinc-400 ml-4">
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
            <h4 className="font-semibold text-slate-800 dark:text-zinc-200 mb-3">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {["React Native", "TypeScript", "Expo", "REST APIs", "GitLab", "Figma", "Firebase", "Google OAuth", "i18n"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
