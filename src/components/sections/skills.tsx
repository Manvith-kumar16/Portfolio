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
    text-5xl md:text-7xl font-black text-center tracking-tight
    text-white
    [text-shadow:0_4px_8px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.8)]
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