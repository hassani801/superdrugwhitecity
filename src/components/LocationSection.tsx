import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Clock, Navigation, Bus, Train, Car, ExternalLink, Check, Copy } from "lucide-react";
import { storeData } from "../data/store";
import { SmartImage } from "./ui/SmartImage";

interface LocationSectionProps {
  onOpenDirectionsModal: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenDirectionsModal }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedTransportTab, setSelectedTransportTab] = useState<"underground" | "overground" | "bus" | "car">("underground");

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(storeData.phone.replace(/\s+/g, ""));
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="location" className="w-full py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#E8E3E6]">
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#EC008C] mb-2 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>STORE LOCATION & HOURS</span>
            </div>
            <h2 className="section-title font-black text-[#231F20] tracking-[-0.035em]">
              FIND US AT WESTFIELD.
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm sm:text-base text-[#707070] max-w-sm">
            Conveniently situated inside Westfield London White City with direct access from Central Line and Overground.
          </p>
        </div>

        {/* 2-Column Split: Editorial Store Details Left, Premium Location Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (5 cols): Store Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Address & Mall position */}
            <div>
              <h3 className="text-2xl font-heading font-black text-[#231F20] mb-2">
                WESTFIELD WHITE CITY
              </h3>
              <p className="text-sm font-semibold text-[#EC008C] mb-1">
                {storeData.address.line1}
              </p>
              <p className="text-sm text-[#707070]">
                {storeData.address.line2}
              </p>
              <p className="text-sm text-[#707070]">
                {storeData.address.city}, {storeData.address.postcode}
              </p>
              <p className="text-xs text-[#231F20]/75 mt-2 bg-[#F8F6F7] p-2.5 rounded-md border border-[#E8E3E6]">
                📍 {storeData.address.locationInMall}
              </p>
            </div>

            {/* Opening Hours */}
            <div className="p-6 bg-[#F8F6F7] rounded-2xl border border-[#E8E3E6]">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#231F20] mb-4">
                <Clock className="w-4 h-4 text-[#EC008C]" />
                <span>OPENING HOURS</span>
              </div>

              <div className="space-y-3">
                {storeData.openingHours.map((slot, i) => (
                  <div key={i} className="flex items-center justify-between text-sm pb-2.5 border-b border-[#E8E3E6] last:border-0 last:pb-0">
                    <span className="font-semibold text-[#231F20]">{slot.dayRange}</span>
                    <span className="font-mono font-bold text-[#EC008C]">{slot.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8E3E6] flex items-center justify-between text-xs text-[#707070]">
                <span className="flex items-center gap-1.5 font-medium text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open today until 22:00
                </span>
                <span>Pharmacy closes 20:00</span>
              </div>
            </div>

            {/* Phone & Direct Contact */}
            <div className="flex items-center justify-between p-4 bg-white border border-[#E8E3E6] rounded-xl shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EC008C]/10 text-[#EC008C] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#707070]">Direct Store Line</p>
                  <p className="text-sm font-mono font-bold text-[#231F20]">{storeData.phone}</p>
                </div>
              </div>

              <button
                onClick={copyPhoneNumber}
                className="px-3 py-1.5 text-xs font-medium border border-[#E8E3E6] hover:border-[#231F20] rounded-md transition-colors flex items-center gap-1.5"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#707070]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onOpenDirectionsModal}
                className="flex-1 py-3.5 px-6 bg-[#231F20] hover:bg-[#EC008C] text-white text-xs font-bold tracking-widest uppercase rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs"
                data-cursor="explore"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </button>

              <a
                href={`tel:${storeData.phone.replace(/\s+/g, "")}`}
                className="py-3.5 px-5 border border-[#231F20] text-[#231F20] hover:bg-[#231F20] hover:text-white text-xs font-bold tracking-widest uppercase rounded-md transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4" />
                <span>CONTACT STORE</span>
              </a>
            </div>
          </div>

          {/* Right Column (7 cols): Premium Location Visual & Interactive Transit Guide */}
          <div className="lg:col-span-7 space-y-6">
            {/* Visual Location Frame */}
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-lg border border-[#E8E3E6] bg-[#F8F6F7] group">
              <SmartImage
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80"
                alt="Westfield London White City Architecture and Exterior"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                data-cursor="view"
              />

              {/* Minimal Location Marker Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#EC008C]/30 animate-ping absolute" />
                  <div className="w-10 h-10 rounded-full bg-[#EC008C] text-white flex items-center justify-center shadow-xl border-2 border-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2 bg-[#231F20]/95 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg tracking-wider uppercase">
                  SUPERDRUG WHITE CITY
                </div>
              </div>

              {/* Top Banner on visual */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-[#E8E3E6] text-[10px] font-bold uppercase tracking-widest text-[#231F20] shadow-xs">
                WESTFIELD LONDON · W12 7GF
              </div>
            </div>

            {/* Transport tabs & connections */}
            <div className="p-6 bg-[#F8F6F7] rounded-2xl border border-[#E8E3E6]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest uppercase text-[#231F20]">
                  HOW TO GET HERE
                </span>
                <span className="text-[11px] text-[#707070]">London Zone 2</span>
              </div>

              {/* Transport Filter Controls */}
              <div className="flex items-center gap-1.5 p-1 bg-white rounded-lg border border-[#E8E3E6] mb-4">
                <button
                  onClick={() => setSelectedTransportTab("underground")}
                  className={`flex-1 py-1.5 px-3 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    selectedTransportTab === "underground"
                      ? "bg-[#231F20] text-white shadow-xs"
                      : "text-[#707070] hover:text-[#231F20]"
                  }`}
                >
                  <Train className="w-3.5 h-3.5" />
                  <span>Tube</span>
                </button>
                <button
                  onClick={() => setSelectedTransportTab("overground")}
                  className={`flex-1 py-1.5 px-3 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    selectedTransportTab === "overground"
                      ? "bg-[#231F20] text-white shadow-xs"
                      : "text-[#707070] hover:text-[#231F20]"
                  }`}
                >
                  <Train className="w-3.5 h-3.5" />
                  <span>Overground</span>
                </button>
                <button
                  onClick={() => setSelectedTransportTab("bus")}
                  className={`flex-1 py-1.5 px-3 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    selectedTransportTab === "bus"
                      ? "bg-[#231F20] text-white shadow-xs"
                      : "text-[#707070] hover:text-[#231F20]"
                  }`}
                >
                  <Bus className="w-3.5 h-3.5" />
                  <span>Bus</span>
                </button>
                <button
                  onClick={() => setSelectedTransportTab("car")}
                  className={`flex-1 py-1.5 px-3 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    selectedTransportTab === "car"
                      ? "bg-[#231F20] text-white shadow-xs"
                      : "text-[#707070] hover:text-[#231F20]"
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Parking</span>
                </button>
              </div>

              {/* Dynamic content for selected tab */}
              <div className="text-xs text-[#231F20] space-y-2">
                {selectedTransportTab === "underground" && (
                  <div className="space-y-1.5">
                    {storeData.transport.underground.map((line, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                )}
                {selectedTransportTab === "overground" && (
                  <div className="space-y-1.5">
                    {storeData.transport.overground.map((line, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                )}
                {selectedTransportTab === "bus" && (
                  <div className="space-y-1.5">
                    <p className="font-semibold">Buses stopping at White City Bus Station:</p>
                    <p className="text-[#707070]">{storeData.transport.bus[0]}</p>
                  </div>
                )}
                {selectedTransportTab === "car" && (
                  <div className="space-y-1.5">
                    <p className="font-semibold">{storeData.transport.parking}</p>
                    <p className="text-[#707070]">Direct mall entrance from Middle Mall & Ground Floor parking lifts.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
