"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Palette, PencilLine } from "lucide-react";
import Image from "next/image";

type ArtCategory = "all" | "sketches" | "paintings";

type ArtItem = {
  id: number;
  title: string;
  category: "sketches" | "paintings";
  src: string;
  description?: string;
};

const ART_ITEMS: ArtItem[] = [
  { id: 1, title: "Sketch 1", category: "sketches", src: "/assets/Drawing/s3.jpg" },
  { id: 2, title: "Painting 1", category: "paintings", src: "/assets/Drawing/p8.jpg" },
  { id: 3, title: "Sketch 2", category: "sketches", src: "/assets/Drawing/s11.jpg" },
  { id: 4, title: "Painting 2", category: "paintings", src: "/assets/Drawing/p4.jpg" },
  { id: 5, title: "Sketch 3", category: "sketches", src: "/assets/Drawing/s12.jpg" },
  { id: 6, title: "Painting 3", category: "paintings", src: "/assets/Drawing/p1.jpg" },
  { id: 7, title: "Sketch 4", category: "sketches", src: "/assets/Drawing/s4.jpg" },
  { id: 8, title: "Painting 4", category: "paintings", src: "/assets/Drawing/p9.jpg" },
  { id: 9, title: "Sketch 5", category: "sketches", src: "/assets/Drawing/s5.jpg" },
  { id: 10, title: "Painting 5", category: "paintings", src: "/assets/Drawing/p11.jpg" },
  { id: 11, title: "Sketch 6", category: "sketches", src: "/assets/Drawing/s9.jpg" },
  { id: 12, title: "Painting 6", category: "paintings", src: "/assets/Drawing/p5.jpg" },
  { id: 13, title: "Sketch 7", category: "sketches", src: "/assets/Drawing/s15.jpg" },
  { id: 14, title: "Painting 7", category: "paintings", src: "/assets/Drawing/p10.jpg" },
  { id: 15, title: "Sketch 8", category: "sketches", src: "/assets/Drawing/s2.jpg" },
  { id: 16, title: "Painting 8", category: "paintings", src: "/assets/Drawing/p6.jpg" },
  { id: 17, title: "Sketch 9", category: "sketches", src: "/assets/Drawing/s1.jpg" },
  { id: 18, title: "Painting 9", category: "paintings", src: "/assets/Drawing/p3.jpg" },
  { id: 19, title: "Sketch 10", category: "sketches", src: "/assets/Drawing/s10.jpg" },
  { id: 20, title: "Painting 10", category: "paintings", src: "/assets/Drawing/p7.jpg" },
  { id: 21, title: "Sketch 11", category: "sketches", src: "/assets/Drawing/s13.jpg" },
  { id: 22, title: "Painting 11", category: "paintings", src: "/assets/Drawing/p2.jpg" },
  { id: 23, title: "Sketch 12", category: "sketches", src: "/assets/Drawing/s6.jpg" },
  { id: 24, title: "Painting 12", category: "paintings", src: "/assets/Drawing/p12.jpg" },
  { id: 25, title: "Sketch 13", category: "sketches", src: "/assets/Drawing/s8.jpg" },
  { id: 26, title: "Sketch 14", category: "sketches", src: "/assets/Drawing/s7.jpg" },
  { id: 27, title: "Sketch 15", category: "sketches", src: "/assets/Drawing/s14.jpg" },
];

const CATEGORY_LABELS: { value: ArtCategory; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All", icon: null },
  { value: "sketches", label: "Sketches", icon: <PencilLine size={14} /> },
  { value: "paintings", label: "Paintings", icon: <Palette size={14} /> },
];

const BeyondCodingSection = () => {
  const [activeCategory, setActiveCategory] = useState<ArtCategory>("all");
  const [lightbox, setLightbox] = useState<ArtItem | null>(null);

  const filtered =
    activeCategory === "all"
      ? ART_ITEMS
      : ART_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="beyond-coding" className="relative z-10 min-h-screen max-w-7xl mx-auto pt-20 px-4 md:px-0">
      {/* Heading */}
      <h2
        className="
          relative z-20 pointer-events-none
          text-5xl md:text-7xl font-black text-center tracking-tight
          text-white
          [text-shadow:0_4px_8px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.8)]
          mb-3
        "
      >
        BEYOND CODING
      </h2>
      <p className="text-center text-slate-400 text-sm mb-10 tracking-wide">
        A quiet corner for pencil sketches &amp; paintings
      </p>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 mb-10">
        {CATEGORY_LABELS.map(({ value, label, icon }) => (
          <button
            key={value}
            onClick={() => setActiveCategory(value)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${activeCategory === value
              ? "bg-white text-black border-white"
              : "bg-transparent text-slate-300 border-white/20 hover:border-white/40 hover:text-white"
              }`}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-slate-400 gap-4">
          <PencilLine size={48} className="opacity-30" />
          <p className="text-sm">No artwork here yet — check back soon!</p>
        </div>
      ) : activeCategory === "all" ? (
        <div className="relative w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <motion.div
            className="flex gap-4 w-max px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: filtered.length * 15, // Speed depends on number of items
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Duplicate array to ensure enough items for seamless loop */}
            {[...filtered, ...filtered, ...filtered, ...filtered].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="group relative w-64 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 hover:scale-110 hover:z-10 hover:shadow-2xl transition-all duration-300 shrink-0"
                onClick={() => setLightbox(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                {/* Category Badge */}
                <span className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs border border-white/10">
                  {item.category === "sketches" ? (
                    <PencilLine size={10} />
                  ) : (
                    <Palette size={10} />
                  )}
                  {item.category === "sketches" ? "Sketch" : "Painting"}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.10, zIndex: 10 }}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 hover:shadow-2xl transition-all duration-300"
                onClick={() => setLightbox(item)}
              >
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                </div>
                {/* Category Badge */}
                <span className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs border border-white/10">
                  {item.category === "sketches" ? (
                    <PencilLine size={10} />
                  ) : (
                    <Palette size={10} />
                  )}
                  {item.category === "sketches" ? "Sketch" : "Painting"}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.title}
                  fill
                  className="object-contain"
                />
              </div>
              {/* Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold">{lightbox.title}</p>
                {lightbox.description && (
                  <p className="text-white/60 text-sm">{lightbox.description}</p>
                )}
              </div>
              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BeyondCodingSection;
