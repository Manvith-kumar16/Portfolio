"use client";
import { ExternalLink } from "lucide-react";

const ResearchSection = () => {
  const papers = [
    {
      number: "01",
      title:
        "Multimodal Deep Learning for Feature-Level Fusion in Automated Arecanut Quality Classification Using RGB and X-ray Imaging",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6992593&__cf_chl_f_tk=SAXhhbkV0YcSAhCbGPWCClpaQt38hCStSxC7Vm3wjNg-1782759609-1.0.1.1-m3JFdRir3o8fO0UUcw5nsYA9v1lDH49bcSjBvU6tBaA",
      type: "SSRN Preprint",
      year: "2026",
      status: "Published",
      statusColor: "emerald",
      authors: "Manvith Kumar Ullal, et al.",
      overview:
        "Designed a novel multimodal deep learning framework for automated arecanut quality classification by combining RGB surface images with X-ray imaging, enabling simultaneous analysis of external appearance and internal structural defects. The study systematically evaluated four multimodal learning paradigms and demonstrated the effectiveness of feature-level fusion for agricultural quality assessment.",
      highlights: [
        "Developed a multimodal AI pipeline integrating 11,123 RGB and 10,076 X-ray images for non-destructive quality grading.",
        "Evaluated four deep learning strategies: feature-level fusion, domain adaptation, multimodal learning, and ensemble learning.",
        "Achieved 99.80% classification accuracy and 99.81% Macro F1-score using an independent encoder feature-fusion architecture.",
        "Performed statistical validation using Stratified 5-Fold Cross Validation, paired t-tests, bootstrap testing, and Wilcoxon signed-rank tests.",
      ],
      tags: [
        "TensorFlow",
        "PyTorch",
        "MobileNetV3",
        "EfficientNetV2",
        "ConvNeXt",
        "Swin Transformer",
        "OpenCV",
        "CUDA",
        "Python",
      ],
      publication: "SSRN Preprint (2026)",
    },
    {
      number: "02",
      title:
        "An End-to-End Deep Learning Framework for Handwritten Tulu Lipi Recognition and AI-Assisted Script Learning",
      type: "Research Paper",
      year: "2026",
      status: "Manuscript",
      statusColor: "amber",
      authors: "Manvith Kumar Ullal, Arshith, Preran Rai, Thushar",
      overview:
        "Proposed an AI-powered educational platform for preserving the Tulu language through handwritten character recognition and interactive script learning. The system combines a CNN-based recognition model with a Flask inference API and a React-based learning platform to provide real-time handwriting evaluation and learner feedback.",
      highlights: [
        "Expanded a handwritten Tulu dataset from 9,959 to approximately 30,000 images using advanced data augmentation techniques.",
        "Designed and trained a custom CNN-based handwriting recognition model integrated with a Flask REST API for real-time inference.",
        "Built an AI-assisted learning platform featuring handwriting evaluation, pronunciation support, learner progress tracking, and interactive feedback.",
        "Developed a modular architecture using React, Node.js, Flask, and TensorFlow for scalable deployment and real-time predictions.",
      ],
      tags: [
        "Python",
        "TensorFlow",
        "Keras",
        "Flask",
        "React",
        "Node.js",
        "OpenCV",
        "NumPy",
        "Pillow",
        "CNN",
      ],
      publication: "Research Manuscript (2026)",
    },
  ];

  return (
    <section id="research" className="min-h-screen max-w-7xl mx-auto pt-20">
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
        RESEARCH
      </h2>

      <div className="space-y-8 px-4 md:px-0">
        {papers.map((paper, i) => (
          <div
            key={i}
            className="group p-6 md:p-8 rounded-2xl bg-white/70 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300"
          >
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-black text-zinc-200 dark:text-zinc-700 leading-none select-none">
                  {paper.number}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-zinc-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
                    {paper.authors}
                  </p>
                </div>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end gap-2 shrink-0">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    paper.statusColor === "emerald"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400"
                  }`}
                >
                  {paper.status}
                </span>
                <span className="text-xs text-slate-500 dark:text-zinc-500 font-medium">
                  {paper.type} • {paper.year}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-100 dark:border-zinc-800 my-4" />

            {/* Overview */}
            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-5">
              {paper.overview}
            </p>

            {/* Highlights */}
            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-3">
                Key Highlights
              </h4>
              <ul className="space-y-2">
                {paper.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-zinc-400"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags and Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
              <div className="flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {paper.link && (
                <a 
                  href={paper.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 border border-blue-500/20 rounded-xl transition-colors shrink-0"
                >
                  View Paper
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchSection;
