import React from "react";
import { motion } from "motion/react";
import { X, Navigation, Train, Bus, Car, MapPin, ExternalLink } from "lucide-react";
import { storeData } from "../../data/store";

interface StoreDirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreDirectionsModal: React.FC<StoreDirectionsModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Superdrug+Westfield+White+City+London+W12+7GF`;
  const appleMapsUrl = `https://maps.apple.com/?q=Superdrug+Westfield+London+W12+7GF`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#E8E3E6] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#E8E3E6] flex items-center justify-between bg-[#F8F6F7]">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#EC008C]">
              <MapPin className="w-3.5 h-3.5" />
              <span>WESTFIELD LONDON (WHITE CITY)</span>
            </div>
            <h3 className="font-heading font-black text-xl text-[#231F20] mt-0.5">
              Store Directions & Transit Guide
            </h3>
            <p className="text-xs text-[#707070]">
              Unit 1026, Ground Floor · London W12 7GF
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#E8E3E6] bg-white flex items-center justify-center hover:bg-[#F8F6F7] transition-colors"
          >
            <X className="w-4 h-4 text-[#231F20]" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Walking in the Mall */}
          <div className="p-4 bg-[#F8F6F7] rounded-xl border border-[#E8E3E6]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#231F20] mb-2 flex items-center gap-1.5">
              <span>📍 Finding the Store Inside Westfield</span>
            </h4>
            <p className="text-xs text-[#707070] leading-relaxed">
              Superdrug is located on the <strong>Ground Floor (Unit 1026)</strong>.
              If entering through the Central Atrium, head towards the Marks & Spencer corridor.
              Our flagship pink storefront and beauty swatch island are directly visible opposite Boots and Next.
            </p>
          </div>

          {/* Tube Stations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#231F20] mb-2 flex items-center gap-1.5">
              <Train className="w-3.5 h-3.5 text-[#EC008C]" />
              <span>London Underground Stations</span>
            </h4>
            <div className="space-y-2 text-xs text-[#231F20]">
              <div className="p-3 bg-white rounded-lg border border-[#E8E3E6]">
                <strong className="text-[#EC008C]">White City (Central Line):</strong>
                <p className="text-[#707070] mt-0.5">3-minute walk via Westfield Way pedestrian boulevard.</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E8E3E6]">
                <strong className="text-[#EC008C]">Shepherd's Bush (Central Line & Overground):</strong>
                <p className="text-[#707070] mt-0.5">Direct covered entrance into the Southern mall interchange.</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E8E3E6]">
                <strong className="text-[#EC008C]">Wood Lane (Circle & Hammersmith):</strong>
                <p className="text-[#707070] mt-0.5">2-minute walk directly across the street from the North entrance.</p>
              </div>
            </div>
          </div>

          {/* Parking */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#231F20] mb-2 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-[#EC008C]" />
              <span>Westfield Car Park</span>
            </h4>
            <p className="text-xs text-[#707070] leading-relaxed">
              Use <strong>Car Park A or Car Park B (Middle Mall)</strong>.
              Take the central lift down to Ground Floor. Over 4,500 spaces with electric vehicle rapid chargers.
            </p>
          </div>

          {/* Action Maps Links */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 bg-[#231F20] hover:bg-[#EC008C] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 text-center"
            >
              <span>OPEN IN GOOGLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={appleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 border border-[#231F20] text-[#231F20] hover:bg-[#231F20] hover:text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 text-center"
            >
              <span>OPEN IN APPLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
