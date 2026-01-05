"use client";

import { cn } from "@/lib/utils";

const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen max-w-7xl mx-auto pt-20">
      <h2
       className="
    relative z-20
    pointer-events-none
    text-4xl md:text-6xl font-bold text-center
    bg-clip-text text-transparent
    bg-gradient-to-b from-white via-slate-200 to-slate-400
    mb-10 md:mb-12
  "
>
        EDUCATION
      </h2>

      <div className="space-y-8">
        <div className="p-6 rounded-xl bg-white/70 dark:bg-black/70 backdrop-blur-sm">
          <h3 className="text-xl font-semibold">
            B.E. Computer Science (AI & ML)
          </h3>
          <p className="text-muted-foreground">
            Sahyadri College of Engineering & Management
          </p>
          <p className="text-sm text-muted-foreground">
            2023 – 2027
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/70 dark:bg-black/70 backdrop-blur-sm">
          <h3 className="text-xl font-semibold">
            PUC- Science Stream 
          </h3>
          <p className="text-muted-foreground">
            St Aloysius PU College, Mangalore
          </p>
          <p className="text-sm text-muted-foreground">
            2021 – 2023
          </p>
        </div>

         <div className="p-6 rounded-xl bg-white/70 dark:bg-black/70 backdrop-blur-sm">
          <h3 className="text-xl font-semibold">
            SSLC
          </h3>
          <p className="text-muted-foreground">
            Sarojini Madhusudan Kushe Educational Institution, Mangalore
          </p>
          <p className="text-sm text-muted-foreground">
            2021
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
