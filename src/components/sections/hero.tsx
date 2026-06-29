"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { File, Mail, ChevronDown, ExternalLink, Briefcase, FileText } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import { SiGithub, SiGitlab } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { config } from "@/data/config";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  "Full Stack Developer",
  "AI & ML Engineer",
  "React Native Developer",
  "Open Source Contributor",
  "Researcher",
];

const TECH_STACK = [
  "React", "Next.js", "React Native", "TypeScript",
  "Python", "TensorFlow", "Node.js", "Firebase",
];

const STATS = [
  { value: "3", label: "Internships", icon: <Briefcase size={16} className="text-blue-400" /> },
  { value: "600+", label: "GitHub Contributions", icon: <SiGithub size={16} className="text-slate-200" /> },
  { value: "40+", label: "GitLab Issues", icon: <SiGitlab size={16} className="text-orange-500" /> },
  { value: "2", label: "Research Papers", icon: <FileText size={16} className="text-emerald-400" /> },
];

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <span className="inline-flex items-center gap-1">
      <span className="text-blue-400">{displayed}</span>
      <span className="animate-pulse text-blue-400 font-thin">|</span>
    </span>
  );
}

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY <= 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className={cn("relative w-full min-h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-24 sm:pt-0 sm:pb-20 md:p-16 lg:p-28 xl:p-36"
          )}
        >
          {!isLoading && (
            <>
              {/* Current Role Badge */}
              <BlurIn delay={0.5}>
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-white text-xs font-medium tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span>Full Stack Developer Intern <span className="text-blue-400 font-semibold">@ MyClickBook</span></span>
                </div>
              </BlurIn>

              {/* Name */}
              <BlurIn delay={0.7}>
                <p className="text-slate-400 dark:text-zinc-500 text-sm font-light tracking-widest uppercase ml-1 mb-1">
                  Hi, I am
                </p>
              </BlurIn>

              <BlurIn delay={0.9}>
                <h1 className="font-black leading-none text-left ml-0.5 mb-3">
                  <span className="block text-6xl sm:text-7xl md:text-8xl text-white dark:text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
                    {config.author.split(" ")[0]}
                  </span>
                  <span className="block text-5xl sm:text-6xl md:text-7xl text-slate-300 dark:text-zinc-400 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
                    {config.author.split(" ").slice(1).join(" ")}
                  </span>
                </h1>
              </BlurIn>

              {/* Typing Role */}
              <BlurIn delay={1.1}>
                <p className="text-lg sm:text-xl md:text-2xl font-light text-slate-300 ml-0.5 mb-3 h-8">
                  <TypingRole />
                </p>
              </BlurIn>

              {/* Short Bio */}
              <BlurIn delay={1.3}>
                <p className="text-sm text-slate-400 dark:text-zinc-400 max-w-sm leading-relaxed ml-0.5 mb-5">
                  Building AI-powered mobile apps, scalable web platforms, and intelligent automation systems. Passionate about turning research into real-world products.
                </p>
              </BlurIn>



              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 ml-0.5 w-full max-w-xs">
                <div className="flex gap-3">
                  <BoxReveal delay={1.8} width="auto">
                    <Link href="/resume.pdf" target="_blank">
                      <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 hover:shadow-[0_0_16px_rgba(59,130,246,0.5)]">
                        <File size={16} />
                        Resume
                      </Button>
                    </Link>
                  </BoxReveal>
                  <BoxReveal delay={1.9} width="auto">
                    <Link href="#projects">
                      <Button variant="outline" className="flex items-center gap-2 border-white/20 hover:border-white/40 text-white hover:text-white transition-all">
                        <ExternalLink size={16} />
                        Projects
                      </Button>
                    </Link>
                  </BoxReveal>
                  <BoxReveal delay={2.0} width="auto">
                    <Link href="#contact">
                      <Button variant="outline" className="border-white/20 hover:border-white/40 text-white hover:text-white transition-all">
                        <Mail size={16} />
                      </Button>
                    </Link>
                  </BoxReveal>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 mt-1">
                  <BoxReveal delay={2.1} width="auto">
                    <Tooltip delayDuration={200}>
                      <TooltipTrigger asChild>
                        <Link href={config.social.github} target="_blank">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-9 h-9 rounded-full border border-white/10 text-white hover:text-white hover:bg-white/10 hover:scale-110 hover:rotate-12 transition-all duration-200"
                          >
                            <SiGithub size={18} />
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="bottom"><p>GitHub</p></TooltipContent>
                    </Tooltip>
                  </BoxReveal>
                  <BoxReveal delay={2.2} width="auto">
                    <Tooltip delayDuration={200}>
                      <TooltipTrigger asChild>
                        <Link href={config.social.linkedin} target="_blank">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-9 h-9 rounded-full border border-white/10 text-white hover:text-blue-400 hover:border-blue-400/50 hover:scale-110 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-200"
                          >
                            <FaLinkedin size={18} />
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="bottom"><p>LinkedIn</p></TooltipContent>
                    </Tooltip>
                  </BoxReveal>
                </div>
              </div>

              {/* Stats Row */}
              <BlurIn delay={2.3}>
                <div className="flex flex-wrap gap-6 mt-8 ml-0.5 border-t border-white/10 pt-6">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        {stat.icon}
                        <span className="text-2xl font-black text-white leading-none">{stat.value}</span>
                      </div>
                      <span className="text-xs text-slate-400 leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </BlurIn>
            </>
          )}
        </div>
        <div className="grid col-span-1" />
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="absolute bottom-8 left-[50%] translate-x-[-50%] flex flex-col items-center gap-1 cursor-pointer"
            onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="text-xs text-slate-400 tracking-widest uppercase font-light">
              Scroll to Explore
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={18} className="text-slate-400" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
