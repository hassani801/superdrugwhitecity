import React from "react";
import { Instagram, ArrowUp, ExternalLink, MapPin } from "lucide-react";
import { storeData } from "../data/store";

interface FooterProps {
  onOpenDirections: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDirections }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "STORE", href: "#store-intro" },
    { label: "SERVICES", href: "#services" },
    { label: "TRENDING", href: "#trending" },
    { label: "SOCIAL", href: "#social" },
    { label: "DIRECTIONS", href: "#location" }
  ];

  return (
    <footer className="w-full bg-[#151515] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top zone: Brand & quick navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-baseline font-heading tracking-tight">
              <span className="text-2xl font-black text-white tracking-[-0.04em]">
                SUPERDRUG
              </span>
              <span className="w-2 h-2 rounded-full bg-[#EC008C] ml-1" />
            </div>
            <p className="text-xs text-stone-400 mt-1 uppercase tracking-widest">
              WESTFIELD WHITE CITY · LONDON W12 7GF
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold tracking-widest">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-stone-300 hover:text-[#EC008C] transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#EC008C] hover:text-[#EC008C] transition-colors self-start md:self-auto"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Middle zone: Store Information grid */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-stone-400">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white block mb-2">
              LOCATION
            </span>
            <p className="text-stone-300">Unit 1026, Ground Floor</p>
            <p>Westfield London Shopping Centre</p>
            <p>London, W12 7GF</p>
            <button
              onClick={onOpenDirections}
              className="mt-3 text-[#EC008C] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Get Mall Walking Directions</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white block mb-2">
              CONFIRMED SERVICES
            </span>
            <ul className="space-y-1 text-stone-300">
              <li>· Accessible Ear Piercing</li>
              <li>· Nail Bar & Brow Tinting</li>
              <li>· Superdrug Aesthetic Clinic</li>
              <li>· Pharmacy & Health Screenings</li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white block mb-2">
              STORE HOURS
            </span>
            <p className="text-stone-300">Monday — Saturday: 09:00 — 22:00</p>
            <p className="text-stone-300">Sunday: 12:00 — 18:00</p>
            <p className="mt-2 text-stone-400">Direct Telephone: {storeData.phone}</p>
          </div>
        </div>

        {/* Bottom copyright and legal disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Superdrug Stores plc. Westfield White City Flagship Store Experience.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.superdrug.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors"
            >
              Official Superdrug.com
            </a>
            <a
              href="https://uk.westfield.com/london"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors"
            >
              Westfield London Directory
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
