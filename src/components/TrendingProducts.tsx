import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { trendingProducts, ProductItem } from "../data/products";
import { SmartImage } from "./ui/SmartImage";

interface TrendingProductsProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const TrendingProducts: React.FC<TrendingProductsProps> = ({ onSelectProduct }) => {
  return (
    <section id="trending" className="w-full py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#E8E3E6]">
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#EC008C] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
              <span>WHITE CITY CURATION</span>
            </div>
            <h2 className="section-title font-black text-[#231F20] tracking-[-0.035em]">
              WHAT'S TRENDING?
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm sm:text-base text-[#707070] max-w-sm">
            Beauty finds worth knowing about — tested, restocked, and trending in our Westfield store.
          </p>
        </div>

        {/* Horizontal Editorial Product Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {trendingProducts.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              onClick={() => onSelectProduct(item)}
              className="group cursor-pointer flex flex-col justify-between"
              data-cursor="explore"
            >
              <div>
                {/* Large Product Image Container */}
                <div className="relative aspect-4/5 w-full bg-[#F8F6F7] rounded-xl overflow-hidden mb-6">
                  <SmartImage
                    src={item.image}
                    alt={item.name}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-104"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px]">
                    <span className="font-mono text-xs font-bold text-[#231F20] bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-sm shadow-xs">
                      {item.number}
                    </span>
                    {item.badge && (
                      <span className="font-bold text-[10px] tracking-wider uppercase text-[#EC008C] bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-sm shadow-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* In-store location hint badge */}
                  <div className="absolute bottom-3 left-3 bg-[#231F20]/80 backdrop-blur-xs text-white text-[10px] font-medium px-2.5 py-1 rounded-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MapPin className="w-3 h-3 text-[#EC008C]" />
                    <span>{item.aisle}</span>
                  </div>
                </div>

                {/* Editorial Metadata */}
                <div className="space-y-2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                  <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-[#707070]">
                    <span>{item.brand}</span>
                    <span className="text-[#E8E3E6]">·</span>
                    <span className="text-[#EC008C]">{item.category}</span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#231F20] leading-snug group-hover:text-[#EC008C] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#707070] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Magazine Style Discover Link + Growing Pink Accent Line */}
              <div className="mt-5 pt-4 border-t border-[#E8E3E6]/60 relative">
                <div className="flex items-center justify-between text-xs font-bold tracking-widest text-[#231F20] group-hover:text-[#EC008C] transition-colors uppercase">
                  <span>DISCOVER IN STORE</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-out text-[#EC008C]" />
                </div>
                {/* Pink accent line grows 0 -> 100% on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-[#EC008C] w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
