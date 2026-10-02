import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view" | "play" | "explore">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports touch or fine pointer
    const checkTouch = () => {
      if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
        setIsTouch(true);
      }
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Inspect target to determine cursor type
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      if (cursorAttr === "play") {
        setCursorType("play");
      } else if (cursorAttr === "explore") {
        setCursorType("explore");
      } else if (cursorAttr === "view") {
        setCursorType("view");
      } else if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']")
      ) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const isTextCursor = cursorType === "view" || cursorType === "play" || cursorType === "explore";

  return (
    <div
      className="pointer-events-none fixed z-9999 transition-transform duration-75 ease-out select-none hidden md:block"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: `translate(-50%, -50%)`
      }}
    >
      {/* Default dot */}
      {cursorType === "default" && (
        <div className="w-2.5 h-2.5 bg-[#EC008C] rounded-full transition-transform duration-150 scale-100 shadow-[0_0_10px_rgba(236,0,140,0.4)]" />
      )}

      {/* Button hover ring */}
      {cursorType === "hover" && (
        <div className="w-8 h-8 rounded-full border-1.5 border-[#EC008C] bg-[#EC008C]/10 backdrop-blur-xs transition-all duration-200 scale-100 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
        </div>
      )}

      {/* Interactive contextual cursor badges */}
      {isTextCursor && (
        <div className="px-3 py-1 rounded-full bg-[#231F20] text-white text-[10px] font-semibold tracking-widest uppercase shadow-md flex items-center gap-1 border border-white/20 scale-100 transition-all duration-150">
          {cursorType === "play" && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C] animate-pulse" />
          )}
          <span>{cursorType.toUpperCase()}</span>
        </div>
      )}
    </div>
  );
};
