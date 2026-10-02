import React from "react";
import { motion } from "motion/react";
import { ArrowDown, MapPin, Sparkles, Navigation } from "lucide-react";
import { SmartImage } from "./ui/SmartImage";

interface HeroProps {
  onExploreClick: () => void;
  onDirectionsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onDirectionsClick }) => {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] max-h-[1080px] flex flex-col justify-between pt-20 sm:pt-24 pb-6 px-5 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Top / Main Split Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Campaign Typography (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-4 sm:mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#707070] uppercase">
              SUPERDRUG · WESTFIELD WHITE CITY
            </span>
          </motion.div>

          {/* Main Headline - Line by line masked reveal */}
          <h1 className="hero-title font-black text-[#231F20] tracking-[-0.04em] mb-4 sm:mb-6">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block text-[#231F20]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                YOUR NEXT
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block text-[#EC008C]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                BEAUTY
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block text-[#231F20]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                OBSESSION
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block text-[#231F20]/90 text-[0.85em]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                STARTS HERE.
              </motion.span>
            </span>
          </h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#707070] max-w-xl font-normal leading-relaxed mb-6 sm:mb-8"
          >
            Beauty, health, new finds and everyday favourites — all under one roof
            at Westfield White City, London.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <button
              onClick={onExploreClick}
              className="px-6 py-3.5 bg-[#231F20] hover:bg-[#EC008C] text-white text-xs font-bold tracking-[0.15em] uppercase rounded-md transition-all duration-200 flex items-center gap-2 group shadow-sm"
              data-cursor="explore"
            >
              <span>EXPLORE THE STORE</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              onClick={onDirectionsClick}
              className="px-5 py-3.5 border border-[#231F20]/25 hover:border-[#231F20] text-[#231F20] text-xs font-bold tracking-[0.15em] uppercase rounded-md transition-colors bg-white/60 hover:bg-white"
            >
              <span>GET DIRECTIONS</span>
            </button>
          </motion.div>

          {/* Small Location Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 flex items-center gap-4 text-xs text-[#707070] tracking-wider"
          >
            <span className="font-semibold text-[#231F20] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#EC008C]" />
              WESTFIELD WHITE CITY
            </span>
            <span className="text-[#E8E3E6]">/</span>
            <span>LONDON W12 7GF</span>
            <span className="hidden sm:inline text-[#E8E3E6]">/</span>
            <span className="hidden sm:inline text-emerald-600 font-medium">OPEN UNTIL 22:00</span>
          </motion.div>
        </div>

        {/* Right Column: Editorial Portrait Media (5 cols on desktop) */}
        <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[420px] lg:h-[82%] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(35,31,32,0.08)] border border-[#F3EEF1]">
          {/* Subtle background framing */}
          <motion.div
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            <SmartImage
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
              alt="Superdrug White City Beauty Editorial Store Experience"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover object-center"
              data-cursor="view"
            />

            {/* Subtle editorial watermark label on image corner */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-[#E8E3E6]/60 shadow-xs flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#231F20] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
              <span>WHITE CITY BEAUTY EDIT</span>
            </div>

            {/* In-store experience badge at bottom of portrait */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-lg border border-[#E8E3E6] flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-[#231F20] text-xs">Trending Swatch Island</p>
                <p className="text-[11px] text-[#707070]">Ground Floor · Next to The Atrium</p>
              </div>
              <span className="text-[11px] font-bold text-[#EC008C] tracking-wider uppercase">
                EXPLORE NOW
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom: Subtle Animated Scroll Indicator */}
      <div className="pt-2 flex items-center justify-between border-t border-[#E8E3E6]/60 text-[#707070] text-[11px] tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="text-[#231F20] font-semibold">FLAGSHIP DESTINATION</span>
          <span className="text-[#E8E3E6]">·</span>
          <span>4 CONFIRMED IN-STORE CLINICS</span>
        </div>

        <button
          onClick={onExploreClick}
          className="flex items-center gap-2.5 hover:text-[#EC008C] transition-colors group cursor-pointer"
        >
          <span className="font-medium text-[10px] tracking-[0.2em]">SCROLL TO EXPLORE</span>
          <div className="w-3.5 h-6 rounded-full border border-[#707070] group-hover:border-[#EC008C] flex justify-center p-0.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-[#231F20] group-hover:bg-[#EC008C] rounded-full"
            />
          </div>
        </button>
      </div>
    </section>
  );
};
