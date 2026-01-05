"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <Link href={"#projects"}>
        <h2
          className="
            relative z-20 pointer-events-none
            text-4xl md:text-6xl font-bold text-center
            bg-clip-text text-transparent
            bg-gradient-to-b from-white via-slate-200 to-slate-400
            mb-10 md:mb-12
          "
        >
          Projects
        </h2>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Modall key={project.src} project={project} />
        ))}
      </div>
    </section>
  );
};

const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn">
          <div
            className="
              relative w-[400px] rounded-xl overflow-hidden
              border border-white/10
              transition-all duration-500 ease-out
              group-hover/modal-btn:border-cyan-400/90
              group-hover/modal-btn:shadow-[0_0_25px_4px_rgba(56,189,248,0.35)]
            "
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover/modal-btn:scale-[1.05]"
            />

            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none">
              <div className="flex flex-col h-full justify-end p-6">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <span className="mt-1 text-xs bg-white text-black rounded-md w-fit px-2 py-0.5">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </ModalTrigger>

        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>

          <ModalFooter className="gap-4">
            <button className="px-3 py-1 bg-gray-200 text-black dark:bg-black dark:text-white border rounded-md text-sm w-28">
              Cancel
            </button>
            <Link href={project.live} target="_blank">
              <button className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black border rounded-md text-sm w-28">
                Visit
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl font-bold text-center mb-8 text-neutral-700 dark:text-neutral-100">
        {project.title}
      </h4>

      <div className="flex flex-col md:flex-row md:justify-evenly gap-8">
        <div className="flex flex-row md:flex-col-reverse items-center gap-2">
          <p className="text-sm text-neutral-500">Frontend</p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>

        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse items-center gap-2">
            <p className="text-sm text-neutral-500">Backend</p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>

      {project.content}
    </>
  );
};
