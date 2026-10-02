import React from "react";
import { motion } from "motion/react";

interface RevealTextProps {
  lines: string[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  styleType?: "line-reveal" | "fade-slide" | "clip-reveal";
}

export const RevealText: React.FC<RevealTextProps> = ({
  lines,
  className = "",
  delay = 0,
  as: Component = "h2",
  styleType = "line-reveal"
}) => {
  if (styleType === "fade-slide") {
    return (
      <Component className={className}>
        {lines.map((line, idx) => (
          <motion.span
            key={idx}
            className="block"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: delay + idx * 0.12,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {line}
          </motion.span>
        ))}
      </Component>
    );
  }

  if (styleType === "clip-reveal") {
    return (
      <Component className={className}>
        {lines.map((line, idx) => (
          <motion.span
            key={idx}
            className="block"
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.8 }}
            whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.9,
              delay: delay + idx * 0.15,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {line}
          </motion.span>
        ))}
      </Component>
    );
  }

  // Default: Style 01 - Line Reveal with overflow-hidden mask
  return (
    <Component className={className}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden pb-1">
          <motion.span
            className="block"
            initial={{ y: "115%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.85,
              delay: delay + idx * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};
