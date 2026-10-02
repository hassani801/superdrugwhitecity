import React, { useState, useEffect } from "react";
import { Instagram, MapPin, Menu, X, ArrowUpRight, Clock } from "lucide-react";
import { storeData } from "../data/store";

interface NavbarProps {
  onOpenDirections: () => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDirections, onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "STORE", href: "#store-intro" },
    { label: "BEAUTY", href: "#beauty-playground" },
    { label: "TRENDING", href: "#trending" },
    { label: "SERVICES", href: "#services" },
    { label: "SOCIAL", href: "#social" },
    { label: "VISIT", href: "#location" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E8E3E6] py-3.5 shadow-[0_4px_20px_rgba(35,31,32,0.04)]"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Left: Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group cursor-pointer focus-visible:outline-hidden"
            aria-label="Superdrug Westfield White City Home"
          >
            <div className="flex items-baseline font-heading tracking-tighter">
              <span className="text-xl sm:text-2xl font-black text-[#231F20] tracking-[-0.04em]">
                SUPERDRUG
              </span>
              <span className="w-2 h-2 rounded-full bg-[#EC008C] ml-1 transform group-hover:scale-125 transition-transform" />
            </div>
            <span className="hidden sm:inline-block text-[11px] font-medium text-[#707070] pl-2 border-l border-[#E8E3E6] uppercase tracking-wider">
              White City
            </span>
          </a>

          {/* Center: Clean 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider text-[#231F20]">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative py-1 text-[#231F20]/80 hover:text-[#EC008C] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#EC008C] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* Live Store status pill */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F3EEF1] text-[11px] font-medium text-[#231F20]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open today until 22:00</span>
            </div>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/superdrug"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-[#E8E3E6] text-[#231F20] hover:text-[#EC008C] hover:border-[#EC008C] transition-colors bg-white/80"
              aria-label="Superdrug on Instagram"
              data-cursor="view"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Visit Store CTA Button */}
            <button
              onClick={onOpenDirections}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#231F20] hover:bg-[#EC008C] text-white text-xs font-bold tracking-wider uppercase rounded-md transition-colors shadow-xs"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>VISIT STORE</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md border border-[#E8E3E6] bg-white text-[#231F20]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Full-Height Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white p-7 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#E8E3E6]">
              <span className="font-heading font-black text-xl tracking-tight text-[#231F20]">
                SUPERDRUG
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#EC008C] bg-[#F8F6F7] px-2.5 py-1 rounded-sm">
                White City W12
              </span>
            </div>

            {/* Links list */}
            <nav className="flex flex-col gap-5 pt-8">
              {navLinks.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="group flex items-center justify-between text-2xl font-heading font-bold text-[#231F20] hover:text-[#EC008C] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-[#707070] group-hover:text-[#EC008C]">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-[#E8E3E6] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#EC008C] text-white text-xs font-bold uppercase tracking-wider rounded-md text-center hover:bg-[#d1007b] transition-colors"
              >
                BOOK IN-STORE SERVICE
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDirections();
                }}
                className="w-full py-3 border border-[#231F20] text-[#231F20] text-xs font-bold uppercase tracking-wider rounded-md text-center hover:bg-[#231F20] hover:text-white transition-colors"
              >
                GET STORE DIRECTIONS
              </button>
            </div>
          </div>

          {/* Footer of Drawer */}
          <div className="pt-6 border-t border-[#E8E3E6] text-xs text-[#707070]">
            <p className="font-medium text-[#231F20]">Westfield White City, London</p>
            <p className="mt-1">Mon—Sat: 09:00 — 22:00 · Sun: 12:00 — 18:00</p>
          </div>
        </div>
      </div>
    </>
  );
};
