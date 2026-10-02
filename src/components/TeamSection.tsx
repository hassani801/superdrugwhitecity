import React from "react";
import { motion } from "motion/react";
import { teamMembers } from "../data/team";
import { SmartImage } from "./ui/SmartImage";
import { Quote } from "lucide-react";

export const TeamSection: React.FC = () => {
  return (
    <section className="w-full py-24 sm:py-32 bg-[#F8F6F7] border-y border-[#E8E3E6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#EC008C] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
            <span>WHITE CITY STORE TEAM</span>
          </div>
          <h2 className="section-title font-black text-[#231F20] tracking-[-0.035em] mb-3">
            THE PEOPLE BEHIND THE PINK.
          </h2>
          <p className="text-base text-[#707070] leading-relaxed">
            Real people. Real recommendations. Real beauty moments.
            Our team tests the viral finds, sterilises every piercing stud, and gives
            honest advice under real daylight.
          </p>
        </div>

        {/* Editorial Staff Portrait Layout: Large portrait + 2 smaller + 1 environmental */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Member 1: Large Portrait (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl overflow-hidden border border-[#E8E3E6] shadow-sm group">
            <div className="relative aspect-4/5 w-full overflow-hidden bg-[#F3EEF1]">
              <SmartImage
                src={teamMembers[0].image}
                alt={teamMembers[0].role}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-104 group-hover:-translate-y-1"
                data-cursor="view"
              />
              <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest text-[#231F20] uppercase shadow-xs">
                {teamMembers[0].yearsAtWhiteCity}
              </div>
            </div>

            <div className="p-6 relative">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#EC008C] mb-1">
                {teamMembers[0].specialty}
              </div>
              <h3 className="text-xl font-heading font-black text-[#231F20] mb-2">
                {teamMembers[0].role}
              </h3>
              <p className="text-xs text-[#707070] italic leading-relaxed mb-4">
                "{teamMembers[0].quote}"
              </p>
              <div className="pt-3 border-t border-[#E8E3E6] flex items-center justify-between text-[11px]">
                <span className="text-[#707070]">Top Recommendation:</span>
                <span className="font-semibold text-[#231F20]">{teamMembers[0].mustHaveProduct}</span>
              </div>
              {/* Expanding pink line on hover */}
              <div className="absolute bottom-0 left-0 h-1 bg-[#EC008C] w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          </div>

          {/* Members 2, 3 & 4 (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Top row: 2 smaller portraits side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {teamMembers.slice(1, 3).map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E8E3E6] shadow-sm group flex flex-col justify-between"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-[#F3EEF1]">
                    <SmartImage
                      src={member.image}
                      alt={member.role}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104 group-hover:-translate-y-1"
                      data-cursor="view"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-sm text-[9px] font-bold tracking-widest text-[#231F20] uppercase shadow-2xs">
                      {member.yearsAtWhiteCity}
                    </div>
                  </div>

                  <div className="p-5 relative flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#EC008C] mb-1">
                        {member.specialty}
                      </div>
                      <h4 className="text-base font-heading font-bold text-[#231F20] mb-2">
                        {member.role}
                      </h4>
                      <p className="text-xs text-[#707070] italic leading-relaxed mb-3">
                        "{member.quote}"
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E8E3E6] text-[10px] text-[#707070]">
                      <span className="block font-medium text-[#231F20]">Pick: {member.mustHaveProduct}</span>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 bg-[#EC008C] w-0 group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom: Environmental Photograph (Pharmacy & Health Lead) */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E3E6] shadow-sm group">
              <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
                <div className="sm:col-span-6 relative aspect-16/10 sm:aspect-square w-full overflow-hidden bg-[#F3EEF1]">
                  <SmartImage
                    src={teamMembers[3].image}
                    alt={teamMembers[3].role}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                    data-cursor="view"
                  />
                  <div className="absolute top-3 left-3 bg-[#231F20]/90 text-white px-2.5 py-1 rounded-sm text-[9px] font-mono tracking-widest uppercase">
                    CLINIC SUITE
                  </div>
                </div>

                <div className="sm:col-span-6 p-6 relative">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#EC008C] mb-1">
                    {teamMembers[3].specialty}
                  </div>
                  <h4 className="text-lg font-heading font-black text-[#231F20] mb-2">
                    {teamMembers[3].role}
                  </h4>
                  <p className="text-xs text-[#707070] italic leading-relaxed mb-4">
                    "{teamMembers[3].quote}"
                  </p>
                  <div className="pt-2 border-t border-[#E8E3E6] text-xs font-semibold text-[#231F20]">
                    Walk-in blood pressure & private health screenings daily
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 bg-[#EC008C] w-0 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
