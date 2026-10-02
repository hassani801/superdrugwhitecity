import React from "react";
import { motion } from "motion/react";
import { MapPin, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { SmartImage } from "./ui/SmartImage";
import { storeData } from "../data/store";

interface StoreIntroProps {
  onLearnMore: () => void;
  onOpenBooking: () => void;
}

export const StoreIntro: React.FC<StoreIntroProps> = ({ onLearnMore, onOpenBooking }) => {
  return (
    <section id="store-intro" className="w-full py-20 sm:py-28 bg-[#F8F6F7]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Asymmetric Grid: 60% image left, 40% content right with intentional offset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 60% Image (7 cols) with clip-path mask reveal */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.9 }}
              whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[400px] sm:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(35,31,32,0.06)] bg-white border border-[#E8E3E6]"
            >
              <SmartImage
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80"
                alt="Inside Superdrug Westfield White City Flagship"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
                data-cursor="view"
              />

              {/* In-store experience badge overlay */}
              <div className="absolute top-6 left-6 bg-[#231F20]/90 backdrop-blur-md text-white px-4 py-2 rounded-sm text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EC008C]" />
                <span>IN-STORE BEAUTY PLAYGROUND</span>
              </div>

              {/* Offset quote card overlay */}
              <div className="absolute bottom-6 right-6 max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E8E3E6] shadow-lg hidden sm:block">
                <p className="text-xs font-semibold text-[#231F20] leading-snug">
                  "Step in for your everyday essentials, stay for viral beauty swatches and in-store treatments."
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#707070]">
                  <span>White City Flagship Experience</span>
                  <span className="text-[#EC008C] font-bold">W12</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 40% Content (5 cols) with subtle fade + translateY */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Small eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#EC008C] mb-3"
            >
              WESTFIELD LONDON FLAGSHIP
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-title font-black text-[#231F20] tracking-[-0.035em] mb-5"
            >
              MORE THAN
              <br />
              <span className="text-[#EC008C]">A BEAUTY AISLE.</span>
            </motion.h2>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[#707070] leading-relaxed mb-6"
            >
              Discover beauty, health, new finds and everyday favourites at
              Superdrug White City. Designed with wide open aisles, hands-on
              tester bars, registered aesthetic nurses, and friendly advisors who
              actually know the products.
            </motion.p>

            {/* In-store highlights checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 mb-8 text-xs font-semibold text-[#231F20]"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EC008C] shrink-0" />
                <span>Dedicated Swatch Bar with natural daylight illumination</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EC008C] shrink-0" />
                <span>Private clinical suites for piercing & registered aesthetic nurses</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EC008C] shrink-0" />
                <span>Order online & collect in as little as 30 minutes</span>
              </div>
            </motion.div>

            {/* Small Location Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 rounded-xl bg-white border border-[#E8E3E6] flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-bold text-[#231F20] uppercase tracking-wider">
                  WESTFIELD WHITE CITY
                </p>
                <p className="text-[11px] text-[#707070]">
                  London · W12 7GF · Ground Floor
                </p>
              </div>
              <button
                onClick={onLearnMore}
                className="text-xs font-bold text-[#EC008C] hover:text-[#231F20] transition-colors flex items-center gap-1 uppercase tracking-wider"
              >
                <span>Store Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
