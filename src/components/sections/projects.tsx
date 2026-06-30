"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative z-10 max-w-7xl mx-auto py-24 px-4 md:px-0 min-h-screen">
      <Link href={"#projects"}>
        <h2
          className="
            relative z-20
            pointer-events-none
            text-5xl md:text-7xl font-black text-center tracking-tight
            text-white
            [text-shadow:0_4px_8px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.8)]
            mb-16
          "
        >
          PROJECTS
        </h2>
      </Link>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        {projects.map((project, index) => (
          <motion.div key={project.src} variants={itemVariants}>
            <Modall project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const cardThemes = [
  {
    gradient: "from-black from-20% via-purple-950/90 via-60% to-transparent",
    magicGradient: "bg-gradient-to-br from-purple-500 via-fuchsia-500 to-blue-500",
  },
  {
    gradient: "from-black from-20% via-emerald-950/90 via-60% to-transparent",
    magicGradient: "bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400",
  },
  {
    gradient: "from-black from-20% via-blue-950/90 via-60% to-transparent",
    magicGradient: "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    gradient: "from-black from-20% via-rose-950/90 via-60% to-transparent",
    magicGradient: "bg-gradient-to-br from-rose-500 via-pink-500 to-orange-400",
  },
];

const Modall = ({ project, index }: { project: Project; index: number }) => {
  const theme = cardThemes[index % cardThemes.length];

  return (
    <Modal>
      <ModalTrigger className="w-full h-full block bg-transparent text-left p-0 border-none !overflow-visible">
        <motion.div
          whileHover={{ y: -6 }}
          className="group relative w-full aspect-[4/5] rounded-3xl transition-all duration-300 z-10"
        >
          {/* Magic Glow Aura */}
          <div className={`absolute -inset-[2px] rounded-[1.6rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${theme.magicGradient}`} />
          
          {/* Magic Gradient Border */}
          <div className={`absolute -inset-[2px] rounded-[1.6rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${theme.magicGradient}`} />

          {/* Inner Card Content */}
          <div className="absolute inset-0 bg-zinc-950 rounded-3xl overflow-hidden flex flex-col shadow-xl z-10">
            {/* Background Image (fills entire card) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

          {/* Live Badge */}
          {project.live && (
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center gap-2 border border-white/10 z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_2px_rgba(239,68,68,0.8)]"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-white drop-shadow-sm mt-[1px]">Live</span>
            </div>
          )}

          {/* Gradient Overlay for the entire card (stronger at bottom) */}
          <div className={`absolute inset-x-0 bottom-0 h-[85%] bg-gradient-to-t ${theme.gradient} transition-opacity duration-300 z-10 pointer-events-none`} />

          {/* Spacer to push content to the bottom */}
          <div className="flex-1 relative z-20 pointer-events-none" />

          {/* Bottom Content Section */}
          <div className="relative z-20 p-6 flex flex-col justify-end">
            <div className="flex justify-between items-start gap-4 mb-3">
              <h3 className="text-xl font-bold text-white leading-snug line-clamp-2 drop-shadow-md">
                {project.title}
              </h3>
            </div>
            
            <p className="text-sm text-slate-300 line-clamp-2 mb-4">
              Explore this amazing project showcasing modern web development techniques and AI integrations.
            </p>

            {/* Tech Stack (Infinite Marquee) */}
            <div 
              className="flex items-center mb-4 overflow-hidden whitespace-nowrap w-full py-3"
              style={{ 
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)', 
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)' 
              }}
            >
              <motion.div
                className="flex items-center gap-2.5 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: Math.max([...(project.skills.frontend || []), ...(project.skills.backend || [])].length * 4, 15),
                }}
              >
                {[
                  ...(project.skills.frontend || []), ...(project.skills.backend || []),
                  ...(project.skills.frontend || []), ...(project.skills.backend || []),
                  ...(project.skills.frontend || []), ...(project.skills.backend || []),
                  ...(project.skills.frontend || []), ...(project.skills.backend || [])
                ].map((skill, i) => {
                  const origLength = [...(project.skills.frontend || []), ...(project.skills.backend || [])].length || 1;
                  const colors = [
                    "bg-blue-500/20 border-blue-400/30 shadow-[0_0_12px_rgba(59,130,246,0.3)]",
                    "bg-purple-500/20 border-purple-400/30 shadow-[0_0_12px_rgba(168,85,247,0.3)]",
                    "bg-emerald-500/20 border-emerald-400/30 shadow-[0_0_12px_rgba(16,185,129,0.3)]",
                    "bg-rose-500/20 border-rose-400/30 shadow-[0_0_12px_rgba(244,63,94,0.3)]",
                    "bg-amber-500/20 border-amber-400/30 shadow-[0_0_12px_rgba(245,158,11,0.3)]",
                    "bg-cyan-500/20 border-cyan-400/30 shadow-[0_0_12px_rgba(6,182,212,0.3)]",
                  ];
                  const colorClass = colors[(i % origLength) % colors.length];
                  
                  return (
                    <div 
                      key={i} 
                      className={`flex items-center gap-1.5 shrink-0 px-2.5 py-1.5 backdrop-blur-md border rounded-full ${colorClass}`}
                    >
                      <span className="flex items-center justify-center w-3 h-3 text-white drop-shadow-sm [&>svg]:w-full [&>svg]:h-full [&>img]:w-full [&>img]:h-full">
                        {skill.icon}
                      </span>
                      <span className="text-[11px] font-semibold text-white tracking-wide drop-shadow-sm">{skill.title}</span>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto flex items-center gap-3">
              {project.live && (
                <div 
                  onClick={(e) => { e.stopPropagation(); window.open(project.live, '_blank'); }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-slate-900 font-bold text-[13px] hover:bg-slate-200 transition-colors shadow-lg cursor-pointer"
                >
                  <ExternalLink size={16} />
                  View Website
                </div>
              )}
              {project.github && (
                <div 
                  onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white font-bold text-[13px] hover:bg-white/20 transition-colors shadow-lg border border-white/20 backdrop-blur-md cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </div>
              )}
            </div>
          </div>
          </div>
        </motion.div>
      </ModalTrigger>

      <ModalBody className="md:max-w-4xl md:max-h-[85%] overflow-auto rounded-[2rem] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl">
        <SmoothScroll isInsideModal>
          <ModalContent className="p-6 md:p-10">
            <ProjectContents project={project} />
          </ModalContent>
        </SmoothScroll>

        <ModalFooter className="gap-4 border-t border-black/10 dark:border-white/10 p-6 bg-slate-50 dark:bg-zinc-900/50">
          <button className="px-5 py-2.5 bg-zinc-200 hover:bg-zinc-300 text-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white rounded-xl text-sm font-semibold transition-colors">
            Cancel
          </button>
          {project.live && (
            <Link href={project.live} target="_blank">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5">
                <ExternalLink size={16} />
                Visit Live
              </button>
            </Link>
          )}
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-2xl md:text-4xl font-black text-center mb-10 text-slate-800 dark:text-zinc-100 tracking-tight">
        {project.title}
      </h4>

      <div className="flex flex-col md:flex-row md:justify-evenly gap-10 mb-10">
        {project.skills.frontend?.length > 0 && (
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-widest">Frontend</p>
            <FloatingDock items={project.skills.frontend} />
          </div>
        )}

        {project.skills.backend?.length > 0 && (
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-widest">Backend</p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>

      <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-zinc-300">
        {project.content}
      </div>
    </>
  );
};
