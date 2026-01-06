"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";

import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import EducationSection from "@/components/sections/education";
import CertificatesSection from "@/components/sections/certificates";
import ProjectsSection from "@/components/sections/projects";
import AchievementsSection from "@/components/sections/achievements";
import ContactSection from "@/components/sections/contact";

function MainPage() {
  return (
    <SmoothScroll>
      <main className={cn("bg-slate-100 dark:bg-transparent")}>
        <div className="top-0 z-0 fixed w-full h-screen">
  <AnimatedBackground />
</div>
  <HeroSection />        {/* Home */}
  <SkillsSection />
  <ProjectsSection />
  <EducationSection />
  <CertificatesSection />
  <AchievementsSection />
  <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
