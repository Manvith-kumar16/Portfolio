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

// Add your artwork images to /public/assets/art/ and update this list
const ART_ITEMS: ArtItem[] = [
  // Example entries — replace src paths once you add your images
  {
    id: 1,
    title: "Sketch 1",
    category: "sketches",
    src: "/assets/art/sketch-1.jpg",
    description: "Pencil sketch",
  },
  {
    id: 2,
    title: "Painting 1",
    category: "paintings",
    src: "/assets/art/painting-1.jpg",
    description: "Acrylic on canvas",
  },
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
    <section id="beyond-coding" className="min-h-screen max-w-7xl mx-auto pt-20 px-4 md:px-0">
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
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeCategory === value
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
                className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300"
                onClick={() => setLightbox(item)}
              >
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                  <ZoomIn size={28} className="text-white" />
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  {item.description && (
                    <p className="text-white/70 text-xs">{item.description}</p>
                  )}
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
