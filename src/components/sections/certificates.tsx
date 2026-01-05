"use client";

import { cn } from "@/lib/utils";

const CertificatesSection = () => {
  return (
    <section
  id="certificates"
  className="relative z-10 min-h-screen max-w-7xl mx-auto pt-20"
>

      {/* Heading */}
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
  CERTIFICATES
</h2>


      {/* Cards */}
      <div
        className="
          grid md:grid-cols-2 gap-6
          -mt-50 md:-mt-2
          relative z-10
        "
      >
        {[
          {
            name: "Introduction to Generative AI Studio",
            issuedBy: "Google Cloud",
            link: "https://drive.google.com/file/d/1_S3I2HY6aQO15Js8Y2jfP9yo1MDg6a5l/view",
          },
          {
            name: "Data Analytics Job Simulation",
            issuedBy: "Deloitte",
            link: "https://drive.google.com/file/d/1AHNb9lCt1INaQt9sKl8NCZkopuDF0rrx/view",
          },
          {
            name:
              "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
            issuedBy: "Oracle",
            link: "https://drive.google.com/file/d/13jLO4mQ6Y13bo-RtIrSsAk5Ef3Jilg2_/view",
          },
          {
            name: "GenAI Powered Data Analytics Job Simulation",
            issuedBy: "TATA",
            link: "https://drive.google.com/file/d/1kfvNRfhqbneuusfNosty59pZ9_UFrV7g/view",
          },
          {
            name: "Database Management Systems",
            issuedBy: "Infosys SpringBoard",
            link: "https://drive.google.com/drive/folders/1CjoMLrSfYoNgUzjEiROzHjvwbyJKvaUW",
          },
          {
            name: "Introduction to Natural Language Processing",
            issuedBy: "Infosys SpringBoard",
            link: "https://drive.google.com/file/d/1KL9wrZnza-XuHbkhhcaUeD_TE5ouC1r7/view",
          },
          {
            name: "Introduction to Deep Learning",
            issuedBy: "Infosys SpringBoard",
            link: "https://drive.google.com/file/d/1kXHmxX8nEAo-XUAGX-vfe6FPSWQoSJ_f/view",
          },
          {
            name: "Python for Data Science",
            issuedBy: "Infosys SpringBoard",
            link: "https://drive.google.com/file/d/1xzbfySZN3FI3iSpBV-JIsmcjeaQmnEem/view",
          },
        ].map((cert, index) => (
          <div
            key={index}
            className="
              relative p-6 rounded-xl
              bg-black/55 dark:bg-black/70
              backdrop-blur-md
              border border-white/10
              hover:border-white/20
              transition-all
            "
          >
            <h3 className="font-semibold text-lg text-white">
              {cert.name}
            </h3>

            <p className="text-sm text-white/70 mt-1">
              Issued by {cert.issuedBy}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                absolute bottom-4 right-4
                text-sm font-medium
                text-blue-400 hover:underline
                flex items-center gap-1
              "
            >
              View Certificate <span>↗</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
