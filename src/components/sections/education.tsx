"use client";

import { cn } from "@/lib/utils";

const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen max-w-7xl mx-auto pt-20">
      <h2
        className={cn(
          "text-4xl md:text-6xl font-bold text-center mb-12",
          "bg-clip-text text-transparent",
          "bg-gradient-to-b from-black/80 to-black/50",
          "dark:from-white/80 dark:to-white/20"
        )}
      >
        EDUCATION
      </h2>

      <div className="space-y-8">
        <div className="p-6 rounded-xl bg-white/70 dark:bg-black/70 backdrop-blur-sm">
          <h3 className="text-xl font-semibold">
            B.E. Computer Science & AI
          </h3>
          <p className="text-muted-foreground">
            Sahyadri College of Engineering & Management
          </p>
          <p className="text-sm text-muted-foreground">
            2022 – 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
