import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CategoryMarquee } from "./components/CategoryMarquee";
import { StoreIntro } from "./components/StoreIntro";
import { TrendingProducts } from "./components/TrendingProducts";
import { ProductSpotlight } from "./components/ProductSpotlight";
import { BeautyPlayground } from "./components/BeautyPlayground";
import { Services } from "./components/Services";
import { BeautyCampaign } from "./components/BeautyCampaign";
import { InstagramGrid } from "./components/InstagramGrid";
import { TeamSection } from "./components/TeamSection";
import { StoreVideo } from "./components/StoreVideo";
import { LocationSection } from "./components/LocationSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/cursor/CustomCursor";

import { ServiceBookingModal } from "./components/modals/ServiceBookingModal";
import { StoreDirectionsModal } from "./components/modals/StoreDirectionsModal";
import { ProductDetailModal } from "./components/modals/ProductDetailModal";
import { StoreService } from "./data/services";
import { ProductItem } from "./data/products";

export default function App() {
  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<StoreService | null>(null);

  const [directionsModalOpen, setDirectionsModalOpen] = useState(false);

  const [productModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Initialize Lenis Smooth Scroll respecting reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    try {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.8
      });

      let animationFrameId: number;
      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      };
      animationFrameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
      };
    } catch (err) {
      console.warn("Smooth scroll initialization fallback", err);
    }
  }, []);

  const handleOpenBooking = (service?: StoreService) => {
    setSelectedService(service || null);
    setBookingModalOpen(true);
  };

  const handleOpenDirections = () => {
    setDirectionsModalOpen(true);
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    setProductModalOpen(true);
  };

  const handleScrollToExplore = () => {
    const target = document.querySelector("#store-intro");
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
    <div className="relative min-h-screen bg-white text-[#231F20] selection:bg-[#EC008C] selection:text-white">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Header Navigation */}
      <Navbar
        onOpenDirections={handleOpenDirections}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Single-Page Website Flow */}
      <main>
        {/* Section 01: Hero */}
        <Hero
          onExploreClick={handleScrollToExplore}
          onDirectionsClick={handleOpenDirections}
        />

        {/* Section 02: Thin Editorial Category Marquee */}
        <CategoryMarquee />

        {/* Section 03: Store Intro (60/40 Asymmetric) */}
        <StoreIntro
          onLearnMore={handleOpenDirections}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 04: Trending Products */}
        <TrendingProducts onSelectProduct={handleSelectProduct} />

        {/* Section 05: Featured Beauty Story */}
        <ProductSpotlight onDiscover={handleOpenDirections} />

        {/* Section 06: The Beauty Playground */}
        <BeautyPlayground />

        {/* Section 07: Confirmed In-Store Services */}
        <Services onBookService={handleOpenBooking} />

        {/* Section 08: Image-Based Beauty Campaign (Collage with Subtle Parallax) */}
        <BeautyCampaign />

        {/* Section 09: Instagram & Real Social Moments */}
        <InstagramGrid />

        {/* Section 10: People Behind the Pink (Staff Portraits) */}
        <TeamSection />

        {/* Section 11: Cinematic Full-Width Store Video */}
        <StoreVideo />

        {/* Section 12 & 13: Store Information & Location Visual */}
        <LocationSection onOpenDirectionsModal={handleOpenDirections} />

        {/* Section 14: Final CTA (Superdrug Pink) */}
        <FinalCTA onOpenDirections={handleOpenDirections} />
      </main>

      {/* Section 15: Footer */}
      <Footer onOpenDirections={handleOpenDirections} />

      {/* Interactive Modals */}
      <ServiceBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedService={selectedService}
      />

      <StoreDirectionsModal
        isOpen={directionsModalOpen}
        onClose={() => setDirectionsModalOpen(false)}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setProductModalOpen(false)}
        onFindDirections={handleOpenDirections}
      />
    </div>
  );
}
