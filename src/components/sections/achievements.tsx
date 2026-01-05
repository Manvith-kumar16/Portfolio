"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const achievements = [
  {
    title: "Inferentia 2.0 – State Level Hackathon",
    description:
      "Successfully participated in a 24-hour AI hackathon conducted by PES University (AURA, AIML Club)",
    image: "/assets/achievements/PSE- Inferentia 2.0.jpg",
    link: "https://drive.google.com/file/d/1SxuBMbmDAo00ooFPoAq9YWIxKA3BsUh1/view?usp=drive_link",
  },
  {
    title: "Finalist – Hack-A-Thon: AI for Education (2025)",
    description:
      "Recognized for innovative AI-based solution conducted by ThinkPlus & SkillU",
    image: "/assets/achievements/ThinkPlus-SkillU.jpg",
    link: "https://drive.google.com/file/d/11c9zH6VHspWpIcUOVx4Q0thCT5Y7Bic8/view?usp=drive_link",
  },
  {
    title: "GSSoC 2025 – Tech Contributor",
    description:
      "Recognized as a technical contributor for open-source contributions",
    image: "/assets/achievements/GSSoC.jpg",
    link: "https://drive.google.com/file/d/1jhD-KqdJcRskb6iu9CqkoZo3II-BfEde/view?usp=drive_link //"
  },
  {
    title: "Active Contributor to GitHub Projects",
    description:
      "Regular contributor to open-source repositories with focus on frontend, AI, and full-stack development",
    link: "https://github.com/Manvith-kumar16", // 🔗 GitHub profile
  },
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="min-h-screen max-w-7xl mx-auto pt-20"
    >
      {/* Section Heading */}
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
  ACHIEVEMENTS
</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="
              flex gap-5 items-start
              bg-black/50 backdrop-blur-sm
              p-5 rounded-xl
              border border-white/10
            "
          >
            {/* Image */}
            {item.image && (
              <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {/* Text */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-white">
                {item.title}
              </h3>

              <p className="text-sm text-white/80">
                {item.description}
              </p>

              {/* View Certificate / Link */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm text-blue-400 hover:underline w-fit"
                >
                  View Certificate ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
