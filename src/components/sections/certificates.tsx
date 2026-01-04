"use client";

import { cn } from "@/lib/utils";

const CertificatesSection = () => {
  return (
    <section id="certificates" className="min-h-screen max-w-7xl mx-auto pt-20">
      <h2
        className={cn(
          "text-4xl md:text-6xl font-bold text-center mb-12",
          "bg-clip-text text-transparent",
          "bg-gradient-to-b from-black/80 to-black/50",
          "dark:from-white/80 dark:to-white/20"
        )}
      >
        CERTIFICATES
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          "Google Data Analytics",
          "AWS Cloud Practitioner",
          "React Developer Certification",
        ].map((cert) => (
          <div
            key={cert}
            className="p-6 rounded-xl bg-white/70 dark:bg-black/70 backdrop-blur-sm"
          >
            <h3 className="font-semibold">{cert}</h3>
            <p className="text-sm text-muted-foreground">
              Issued by recognized platform
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
