import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Clock, CheckCircle2, ShieldCheck } from "lucide-react";
import { storeServices, StoreService } from "../data/services";
import { SmartImage } from "./ui/SmartImage";

interface ServicesProps {
  onBookService: (service: StoreService) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  return (
    <section id="services" className="w-full py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#EC008C] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
            <span>CONFIRMED IN-STORE CLINICAL SUITES</span>
          </div>
          <h2 className="section-title font-black text-[#231F20] tracking-[-0.035em] mb-4">
            MORE WAYS TO FEEL GOOD.
          </h2>
          <p className="text-base sm:text-lg text-[#707070] leading-relaxed">
            From sterile ear piercing and express gel manicures to consultations with registered
            nurses and travel vaccines — all hosted in private, certified treatment rooms at
            Westfield White City.
          </p>
        </div>

        {/* Varied Editorial Vertical Layout: 4 distinct compositions */}
        <div className="space-y-16 sm:space-y-24">
          {storeServices.map((service, index) => {
            // Layout 01: Large Horizontal Image (Ear Piercing)
            if (service.layoutStyle === "horizontal") {
              return (
                <div
                  key={service.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group cursor-pointer border-b border-[#E8E3E6] pb-16"
                  onClick={() => onBookService(service)}
                  data-cursor="explore"
                >
                  <div className="lg:col-span-7 relative aspect-16/10 rounded-2xl overflow-hidden bg-[#F8F6F7]">
                    <SmartImage
                      src={service.image}
                      alt={service.title}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-104"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-sm text-xs font-mono font-bold text-[#231F20]">
                      {service.number}
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4 transition-transform duration-300 group-hover:translate-x-1">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#EC008C]">
                      <span>{service.leadTime}</span>
                      <span className="text-[#E8E3E6]">·</span>
                      <span className="text-[#707070]">{service.bookingType}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#231F20] group-hover:text-[#EC008C] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm font-semibold text-[#231F20]/80">
                      {service.subtitle}
                    </p>

                    <p className="text-sm text-[#707070] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-[#231F20]">
                      {service.details.slice(0, 4).map((d, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#EC008C] shrink-0" />
                          <span className="truncate">{d}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-2 text-xs font-bold tracking-widest text-[#231F20] group-hover:text-[#EC008C] transition-colors">
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            }

            // Layout 02: Image Aligned Right (Nail Bar)
            if (service.layoutStyle === "right-aligned") {
              return (
                <div
                  key={service.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group cursor-pointer border-b border-[#E8E3E6] pb-16"
                  onClick={() => onBookService(service)}
                  data-cursor="explore"
                >
                  <div className="lg:col-span-5 order-2 lg:order-1 space-y-4 transition-transform duration-300 group-hover:translate-x-1">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#EC008C]">
                      <span>{service.leadTime}</span>
                      <span className="text-[#E8E3E6]">·</span>
                      <span className="text-[#707070]">{service.bookingType}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#231F20] group-hover:text-[#EC008C] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm font-semibold text-[#231F20]/80">
                      {service.subtitle}
                    </p>

                    <p className="text-sm text-[#707070] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-[#231F20]">
                      {service.details.slice(0, 4).map((d, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#EC008C] shrink-0" />
                          <span className="truncate">{d}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-2 text-xs font-bold tracking-widest text-[#231F20] group-hover:text-[#EC008C] transition-colors">
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                  <div className="lg:col-span-7 order-1 lg:order-2 relative aspect-16/10 rounded-2xl overflow-hidden bg-[#F8F6F7]">
                    <SmartImage
                      src={service.image}
                      alt={service.title}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-104"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-sm text-xs font-mono font-bold text-[#231F20]">
                      {service.number}
                    </div>
                  </div>
                </div>
              );
            }

            // Layout 03: Full-Width Editorial Feature (Aesthetic Clinic)
            if (service.layoutStyle === "full-width") {
              return (
                <div
                  key={service.id}
                  className="relative rounded-3xl overflow-hidden group cursor-pointer border border-[#E8E3E6] shadow-sm bg-[#151515] text-white"
                  onClick={() => onBookService(service)}
                  data-cursor="explore"
                >
                  <div className="relative aspect-21/9 min-h-[360px] w-full">
                    <SmartImage
                      src={service.image}
                      alt={service.title}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover opacity-35 group-hover:opacity-45 transition-opacity duration-500 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/60 to-transparent" />

                    <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#EC008C]">
                          <ShieldCheck className="w-4 h-4" />
                          <span>REGULATED HEALTHCARE CLINIC</span>
                        </div>
                        <span className="font-mono text-sm font-bold text-white/80 bg-white/10 px-3 py-1 rounded-sm backdrop-blur-xs">
                          {service.number}
                        </span>
                      </div>

                      <div className="max-w-2xl space-y-3">
                        <h3 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-white group-hover:text-[#EC008C] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-base text-stone-200">
                          {service.description}
                        </p>
                        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-stone-300">
                          {service.details.map((d, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
                              {d}
                            </span>
                          ))}
                        </div>
                        <div className="pt-3 flex items-center gap-2 text-xs font-bold tracking-widest text-[#EC008C] uppercase">
                          <span>{service.ctaText}</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Layout 04: Split Image & Practical Card (Health Clinic)
            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group cursor-pointer pt-4"
                onClick={() => onBookService(service)}
                data-cursor="explore"
              >
                <div className="lg:col-span-6 relative aspect-4/3 rounded-2xl overflow-hidden bg-[#F8F6F7]">
                  <SmartImage
                    src={service.image}
                    alt={service.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-sm text-xs font-mono font-bold text-[#231F20]">
                    {service.number}
                  </div>
                </div>

                <div className="lg:col-span-6 p-6 sm:p-8 bg-[#F8F6F7] rounded-2xl border border-[#E8E3E6] space-y-4">
                  <div className="text-xs font-bold tracking-widest uppercase text-[#EC008C]">
                    PHARMACIST DIRECT
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#231F20] group-hover:text-[#EC008C] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#231F20]/80">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-[#707070] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#E8E3E6] text-xs text-[#231F20]">
                    {service.details.map((d, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EC008C] shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center justify-between text-xs font-bold tracking-widest text-[#231F20] group-hover:text-[#EC008C] transition-colors uppercase">
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
