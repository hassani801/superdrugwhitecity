import React, { useState } from "react";

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackText?: string;
  containerClassName?: string;
  priority?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  fallbackText,
  className = "",
  containerClassName = "",
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#F3EEF1] ${containerClassName}`}
    >
      {/* Fallback graphic if image fails or before load */}
      {(!loaded || error) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[#F8F6F7] text-[#707070] transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full border border-[#E8E3E6] flex items-center justify-center mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EC008C] opacity-75 animate-pulse" />
          </div>
          <span className="text-[11px] font-medium tracking-widest uppercase text-stone-500">
            {fallbackText || alt || "Superdrug White City"}
          </span>
        </div>
      )}

      {/* Actual image */}
      {!error && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
            loaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
