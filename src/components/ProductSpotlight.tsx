import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { featuredHeroProduct } from "../data/products";
import { SmartImage } from "./ui/SmartImage";

interface ProductSpotlightProps {
  onDiscover: () => void;
}

export const ProductSpotlight: React.FC<ProductSpotlightProps> = ({ onDiscover }) => {
  return (
    <section className="w-full py-20 sm:py-28 bg-[#F8F6F7] border-y border-[#E8E3E6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Campaign Editorial Text (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#EC008C]">
                {featuredHeroProduct.category}
              </span>
              <span className="text-[#E8E3E6]">·</span>
              <span className="text-xs text-[#707070] font-medium">WHITE CITY EXCLUSIVE EDIT</span>
            </div>

            <h2 className="section-title font-black text-[#231F20] tracking-[-0.035em] mb-4">
              THE BEAUTY FIND
              <br />
              <span className="text-[#EC008C]">YOU DIDN'T KNOW</span>
              <br />
              YOU NEEDED.
            </h2>

            <p className="text-base text-[#707070] leading-relaxed mb-6">
              {featuredHeroProduct.description}
            </p>

            {/* Quick stats strip */}
            <div className="grid grid-cols-3 gap-4 py-5 my-3 border-y border-[#E8E3E6]">
              {featuredHeroProduct.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl sm:text-3xl font-heading font-black text-[#231F20]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-[#707070] uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onDiscover}
                className="px-6 py-3.5 bg-[#231F20] hover:bg-[#EC008C] text-white text-xs font-bold tracking-widest uppercase rounded-md transition-colors flex items-center gap-2.5 shadow-sm"
                data-cursor="explore"
              >
                <span>DISCOVER IN STORE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-[#707070] font-medium hidden sm:inline">
                Ground Floor · White City
              </span>
            </div>
          </motion.div>

          {/* Right: Large Real Product Image with scale 0.96 -> 1 animation (6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(35,31,32,0.08)] bg-white border border-[#E8E3E6]"
            >
              <SmartImage
                src={featuredHeroProduct.image}
                alt="Superdrug White City Beauty Editorial Still Life"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
                data-cursor="view"
              />

              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-[#E8E3E6] text-[10px] font-bold tracking-wider text-[#231F20] uppercase shadow-xs">
                WESTFIELD WHITE CITY TESTER BAR
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
