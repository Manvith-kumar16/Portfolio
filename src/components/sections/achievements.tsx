"use client";

import { cn } from "@/lib/utils";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="min-h-screen max-w-7xl mx-auto pt-20">
      <h2
        className={cn(
          "text-4xl md:text-6xl font-bold text-center mb-12",
          "bg-clip-text text-transparent",
          "bg-gradient-to-b from-black/80 to-black/50",
          "dark:from-white/80 dark:to-white/20"
        )}
      >
        ACHIEVEMENTS
      </h2>

      <div className="space-y-6">
        <div className="p-6 rounded-xl bg-white/70 dark:bg-black/70 backdrop-blur-sm">
          <h3 className="font-semibold">
            Finalist – Microsoft Imagine Cup
          </h3>
          <p className="text-sm text-muted-foreground">
            Recognized for innovative AI-based solution
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/70 dark:bg-black/70 backdrop-blur-sm">
          <h3 className="font-semibold">
            Open Source Contributor
          </h3>
          <p className="text-sm text-muted-foreground">
            Active contributor to GitHub projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
