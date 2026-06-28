"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";

import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import EducationSection from "@/components/sections/education";
import ExperienceSection from "@/components/sections/experience";
import ResearchSection from "@/components/sections/research";
import CertificatesSection from "@/components/sections/certificates";
import ProjectsSection from "@/components/sections/projects";
import AchievementsSection from "@/components/sections/achievements";
import ContactSection from "@/components/sections/contact";
import BeyondCodingSection from "@/components/sections/beyond-coding";

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
  <ExperienceSection />
  <ResearchSection />
  <EducationSection />
  <CertificatesSection />
  <AchievementsSection />
  <BeyondCodingSection />
  <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
