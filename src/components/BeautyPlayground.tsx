import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Play, Sparkles } from "lucide-react";
import { SmartImage } from "./ui/SmartImage";

export const BeautyPlayground: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const panels = [
    {
      id: "panel-01",
      tag: "COMPLEXION & GLOW",
      title: "The Daylight Swatch Bar",
      subtitle: "Find your exact shade match with true 5000K neutral light mirrors.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
      description: "No more buying foundation under yellow retail strip lamps only to find it doesn't match in sunlight. Our White City testing bar has calibrated daylight LED mirrors and sanitised swatch sponges.",
      quote: "Try before you buy on skin, not on the back of your hand."
    },
    {
      id: "panel-02",
      tag: "FRAGRANCE ISLAND",
      title: "The Scent Wardrobe",
      subtitle: "Explore high-street classics and viral body mists side by side.",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      description: "From luxury brand alternatives to Sol de Janeiro Brazilian mists and Ariana Grande gourmand fragrances, sample freely with fresh scent strips and coffee bean resets.",
      quote: "Layering mists with perfume oils is our team's #1 tip."
    },
    {
      id: "panel-03",
      tag: "SKINCARE CLINIC",
      title: "Active Barrier Solutions",
      subtitle: "Dermatological formulas from CeraVe, La Roche-Posay & The Ordinary.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
      description: "Whether you're calming eczema flares or starting a prescription-strength retinoid routine, our qualified skincare advisors recommend routines tailored to London city life.",
      quote: "Gentle hydration always outperforms harsh scrubs."
    },
    {
      id: "panel-04",
      tag: "IN-STORE SERVICES",
      title: "The Beauty Studio",
      subtitle: "Walk-in ear piercing, express gel nails & brow threading.",
      image: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?auto=format&fit=crop&w=1200&q=80",
      description: "Private clinic room tucked peacefully behind the main aisles. Fully licensed, autoclave-sterilised equipment and aftercare appointments included.",
      quote: "Hygienic, certified, and completely stress-free."
    },
    {
      id: "panel-05",
      tag: "HAIR REVOLUTION",
      title: "Salon Gloss at Home",
      subtitle: "Bond-builders, curly hair hydration and anti-humidity treatments.",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
      description: "Stocked with Color Wow, Shea Moisture, Olaplex and Cantu. Test curl creams and shine drops before picking up your routine essentials.",
      quote: "Real solutions for every curl pattern and texture."
    }
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 600 : 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="beauty-playground" className="w-full py-24 sm:py-32 bg-[#F8F6F7]/50 border-b border-[#E8E3E6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#EC008C] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
              <span>INTERACTIVE STORE ZONES</span>
            </div>
            <h2 className="section-title font-black text-[#231F20] tracking-[-0.035em]">
              THE BEAUTY PLAYGROUND.
            </h2>
            <p className="mt-2 text-base text-[#707070] font-normal">
              Come for one thing. Leave with a whole new routine.
            </p>
          </div>

          {/* Navigation Arrows for Horizontal Track */}
          <div className="flex items-center gap-2 mt-6 md:mt-0">
            <button
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full border border-[#231F20]/20 flex items-center justify-center text-[#231F20] hover:bg-[#231F20] hover:text-white transition-colors"
              aria-label="Previous Zone"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full border border-[#231F20]/20 flex items-center justify-center text-[#231F20] hover:bg-[#EC008C] hover:text-white hover:border-[#EC008C] transition-colors"
              aria-label="Next Zone"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {panels.map((panel, idx) => (
            <div
              key={panel.id}
              className="w-[85vw] sm:w-[65vw] lg:w-[50vw] max-w-[680px] shrink-0 snap-start bg-white rounded-2xl overflow-hidden border border-[#E8E3E6] shadow-[0_12px_40px_rgba(35,31,32,0.04)] flex flex-col justify-between group"
            >
              {/* Media Container */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F3EEF1]">
                <SmartImage
                  src={panel.image}
                  alt={panel.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                  data-cursor="view"
                />

                {/* Subtle Zone Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-sm text-[10px] font-bold tracking-widest text-[#231F20] uppercase shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
                  <span>{panel.tag}</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-[#231F20]/80 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-sm">
                  0{idx + 1} / 05
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-[#231F20] mb-2 group-hover:text-[#EC008C] transition-colors">
                    {panel.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#EC008C] mb-3">
                    {panel.subtitle}
                  </p>
                  <p className="text-sm text-[#707070] leading-relaxed mb-6">
                    {panel.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E3E6] flex items-center justify-between text-xs text-[#707070]">
                  <span className="italic font-medium">"{panel.quote}"</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#231F20]">
                    EXPERIENCE IN STORE
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
