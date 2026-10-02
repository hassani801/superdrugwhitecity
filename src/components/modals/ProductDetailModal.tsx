import React from "react";
import { motion } from "motion/react";
import { X, MapPin, CheckCircle2, Sparkles, Navigation, Heart } from "lucide-react";
import { ProductItem } from "../../data/products";
import { SmartImage } from "../ui/SmartImage";

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onFindDirections: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onFindDirections
}) => {
  if (!product) return null;

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
        <div className="p-4 sm:p-5 border-b border-[#E8E3E6] flex items-center justify-between bg-[#F8F6F7]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#707070]">
            <span className="font-mono text-[#EC008C]">{product.number}</span>
            <span>·</span>
            <span>{product.brand}</span>
            <span>·</span>
            <span className="text-[#EC008C]">{product.category}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#E8E3E6] bg-white flex items-center justify-center hover:bg-[#F8F6F7] transition-colors"
          >
            <X className="w-4 h-4 text-[#231F20]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Image */}
            <div className="sm:col-span-5 relative aspect-square rounded-xl overflow-hidden bg-[#F8F6F7] border border-[#E8E3E6]">
              <SmartImage
                src={product.image}
                alt={product.name}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-2.5 left-2.5 bg-white/95 text-[#EC008C] font-bold text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-xs shadow-2xs">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Title & Description */}
            <div className="sm:col-span-7 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#EC008C] bg-[#EC008C]/10 px-2 py-0.5 rounded-xs">
                {product.accentNote}
              </span>
              <h3 className="font-heading font-black text-2xl text-[#231F20] leading-snug">
                {product.name}
              </h3>
              <p className="text-xs text-[#707070] leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* In-Store Location Box */}
          <div className="p-4 bg-[#F8F6F7] rounded-xl border border-[#E8E3E6] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold uppercase tracking-wider text-[#231F20] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#EC008C]" />
                <span>Store Aisle Location</span>
              </span>
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {product.inStoreAvailability}
              </span>
            </div>

            <div className="p-3 bg-white rounded-lg border border-[#E8E3E6] text-xs space-y-1.5">
              <p className="font-bold text-[#231F20]">{product.aisle}</p>
              <p className="text-[#707070] text-[11px]">
                Ground Floor · Dedicated daylight testing counter available with sanitised applicator wands and swatches.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onFindDirections();
              }}
              className="flex-1 py-3 px-4 bg-[#231F20] hover:bg-[#EC008C] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>FIND IN WHITE CITY STORE</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-3 border border-[#E8E3E6] hover:border-[#231F20] text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
            >
              DONE
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
