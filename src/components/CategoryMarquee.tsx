import React from "react";
import { Sparkle } from "lucide-react";

export const CategoryMarquee: React.FC = () => {
  const categories = [
    "MAKEUP",
    "SKIN",
    "HAIR",
    "FRAGRANCE",
    "BODY",
    "WELLNESS",
    "HEALTH",
    "BEAUTY",
    "PIERCING",
    "NAILS"
  ];

  return (
    <div className="w-full bg-[#F8F6F7] border-y border-[#E8E3E6] py-3.5 overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Repeat list 4 times for continuous, seamless looping */}
        {[...Array(4)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex items-center gap-8">
            {categories.map((cat, idx) => (
              <React.Fragment key={`${groupIdx}-${idx}`}>
                <span className="text-xs sm:text-sm font-black tracking-[0.25em] text-[#231F20] uppercase font-heading hover:text-[#EC008C] transition-colors cursor-default">
                  {cat}
                </span>
                <span className="text-[#EC008C] font-bold text-xs select-none">
                  ★
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
