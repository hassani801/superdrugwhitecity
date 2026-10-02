import React from "react";
import { motion } from "motion/react";
import { Navigation, Instagram, Sparkles, MapPin } from "lucide-react";

interface FinalCTAProps {
  onOpenDirections: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDirections }) => {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#EC008C] text-white overflow-hidden">
      {/* Subtle Slow Decorative Stars (no particles, no 3D, gentle floating) */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <motion.span
          animate={{ y: [-6, 6, -6], rotate: [0, 45, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-[12%] text-2xl"
        >
          ★
        </motion.span>
        <motion.span
          animate={{ y: [8, -8, 8], rotate: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-[15%] text-xl"
        >
          ★
        </motion.span>
        <motion.span
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[8%] text-sm"
        >
          ★
        </motion.span>
        <motion.span
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[6%] text-lg"
        >
          ★
        </motion.span>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-xs text-[11px] font-bold tracking-[0.2em] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span>WESTFIELD WHITE CITY · LONDON</span>
        </motion.div>

        {/* Headline with clip-path reveal */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-heading font-black tracking-[-0.04em] text-white leading-none mb-6">
          <span className="block overflow-hidden pb-1">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              SEE YOU
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              IN THE PINK.
            </motion.span>
          </span>
        </h2>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-white/90 max-w-xl mx-auto font-normal leading-relaxed mb-10"
        >
          Discover what's new, find your next beauty favourite, and experience
          Superdrug White City for yourself. Open 7 days a week in Westfield London.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onOpenDirections}
            className="px-7 py-4 bg-[#231F20] hover:bg-black text-white text-xs font-bold tracking-[0.18em] uppercase rounded-md transition-colors shadow-lg flex items-center gap-2 group"
            data-cursor="explore"
          >
            <Navigation className="w-4 h-4 text-[#EC008C]" />
            <span>GET DIRECTIONS</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <a
            href="https://www.instagram.com/superdrug"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 bg-white hover:bg-stone-100 text-[#231F20] text-xs font-bold tracking-[0.18em] uppercase rounded-md transition-colors shadow-lg flex items-center gap-2"
          >
            <Instagram className="w-4 h-4 text-[#EC008C]" />
            <span>FOLLOW INSTAGRAM</span>
          </a>
        </motion.div>

        {/* Small bottom footer footnote inside banner */}
        <div className="mt-12 text-xs text-white/70 tracking-widest uppercase">
          Unit 1026, Ground Floor · Westfield London Shopping Centre · W12 7GF
        </div>
      </div>
    </section>
  );
};
