import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full h-screen md:h-[150dvh]">
      <div className="top-[70px] sticky mb-96">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
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
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
      
      </div>
    </section>
  );
};

export default SkillsSection;