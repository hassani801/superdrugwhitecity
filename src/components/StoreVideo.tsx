import React from "react";
import { motion } from "motion/react";
import { MapPin, Sparkles } from "lucide-react";

export const StoreVideo: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[460px] max-h-[720px] bg-[#151515] overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        poster="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-with-makeup-looking-at-camera-39826-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle measured contrast gradient (keeps video visible, avoids dark blanket) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50 pointer-events-none" />

      {/* Editorial Overlay Typography */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 mb-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-white/90 uppercase font-heading">
            SUPERDRUG · WESTFIELD WHITE CITY
          </span>
        </motion.div>

        {/* Large Editorial Title */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-[-0.04em] font-heading mb-4">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              COME SAY HI.
            </motion.span>
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-stone-200 max-w-lg mx-auto font-normal leading-relaxed mb-6"
        >
          Whether you need a quick brow thread, a full cosmetic swatch session, or just
          your daily SPF — our White City team is ready to welcome you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold"
        >
          <MapPin className="w-3.5 h-3.5 text-[#EC008C]" />
          <span>Ground Floor · Westfield London (White City)</span>
        </motion.div>
      </div>
    </section>
  );
};
