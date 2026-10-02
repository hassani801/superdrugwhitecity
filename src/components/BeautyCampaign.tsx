import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SmartImage } from "./ui/SmartImage";

export const BeautyCampaign: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax speeds as specified in brief
  const yLarge = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const yDetail = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={containerRef}
      className="w-full py-24 sm:py-32 bg-[#F3EEF1] border-y border-[#E8E3E6] overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Typography */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#EC008C] block mb-2">
            ART-DIRECTED COLLAGE
          </span>
          <h2 className="section-title font-black text-[#231F20] tracking-[-0.035em]">
            THE FORMULA IN FOCUS.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#707070]">
            Textures, shades and finishes captured through real editorial studio photography.
            No CGI. No 3D renderings. Just genuine product craftsmanship.
          </p>
        </div>

        {/* 5-Photo Overlapping Editorial Collage with Subtle Parallax */}
        <div className="relative min-h-[550px] sm:min-h-[680px] w-full">
          {/* 1. Large Central Hero Image (Parallax 0.08) */}
          <motion.div
            style={{ y: yLarge }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[48%] max-w-[500px] aspect-4/5 rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/60 bg-white"
          >
            <SmartImage
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
              alt="Editorial Beauty Campaign Central Hero"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
              data-cursor="view"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest text-[#231F20] uppercase">
              STUDIO CAPTURE 01
            </div>
          </motion.div>

          {/* 2. Secondary Left Image (Parallax 0.14) */}
          <motion.div
            style={{ y: ySecondary }}
            className="absolute left-0 sm:left-4 top-8 sm:top-12 w-[42%] sm:w-[32%] aspect-3/4 rounded-xl overflow-hidden shadow-xl z-20 border border-white/80 bg-white"
          >
            <SmartImage
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
              alt="Liquid Glow Complexion Booster"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
              data-cursor="view"
            />
            <div className="absolute top-3 left-3 bg-[#231F20]/90 text-white px-2.5 py-1 rounded-sm text-[9px] font-mono tracking-widest uppercase">
              DEWY FINISH
            </div>
          </motion.div>

          {/* 3. Secondary Right Image (Parallax 0.14) */}
          <motion.div
            style={{ y: ySecondary }}
            className="absolute right-0 sm:right-6 top-4 sm:top-8 w-[40%] sm:w-[30%] aspect-square rounded-xl overflow-hidden shadow-xl z-20 border border-white/80 bg-white"
          >
            <SmartImage
              src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80"
              alt="Hydrating Lip Glaze Texture"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
              data-cursor="view"
            />
            <div className="absolute bottom-3 right-3 bg-white/90 px-2.5 py-1 rounded-sm text-[9px] font-bold text-[#EC008C] uppercase tracking-wider">
              HIGH SHINE
            </div>
          </motion.div>

          {/* 4. Vertical Crop Detail - Bottom Left (Parallax 0.20) */}
          <motion.div
            style={{ y: yDetail }}
            className="absolute left-4 sm:left-14 bottom-4 sm:bottom-6 w-[36%] sm:w-[26%] aspect-3/4 rounded-lg overflow-hidden shadow-lg z-30 border border-white bg-white hidden xs:block"
          >
            <SmartImage
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
              alt="Hyaluronic Serum Dropper Macro"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
              data-cursor="view"
            />
          </motion.div>

          {/* 5. Detail Shot - Bottom Right (Parallax 0.20) */}
          <motion.div
            style={{ y: yDetail }}
            className="absolute right-2 sm:right-12 bottom-2 sm:bottom-4 w-[38%] sm:w-[28%] aspect-4/3 rounded-lg overflow-hidden shadow-lg z-30 border border-white bg-white"
          >
            <SmartImage
              src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80"
              alt="Perfume Mist Glass Specimen"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
              data-cursor="view"
            />
          </motion.div>
        </div>

        {/* Editorial Subtitle Under Collage */}
        <div className="mt-12 text-center text-xs font-semibold tracking-widest text-[#707070] uppercase">
          SUPERDRUG WHITE CITY EDITORIAL ARCHIVE · LONDON W12
        </div>
      </div>
    </section>
  );
};
