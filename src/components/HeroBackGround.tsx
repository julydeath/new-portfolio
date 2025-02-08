"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import HandWritten from "./HandWritten";

export const HeroBackGround = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      {/* SVG (Small height, but large text inside) */}
      <svg
        ref={svgRef}
        width="100%"
        height="200px" // Reduced height to remove gap
        viewBox="0 0 300 50" // Larger viewBox keeps text big
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className="select-none"
      >
        <defs>
          <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
            {hovered && (
              <>
                <stop offset="0%" stopColor="var(--yellow-500)" />
                <stop offset="25%" stopColor="var(--red-500)" />
                <stop offset="50%" stopColor="var(--blue-500)" />
                <stop offset="75%" stopColor="var(--cyan-500)" />
                <stop offset="100%" stopColor="var(--violet-500)" />
              </>
            )}
          </linearGradient>

          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="20%"
            animate={maskPosition}
            transition={{ duration: duration ?? 0, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>
          <mask id="textMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#revealMask)"
            />
          </mask>
        </defs>

        {/* Animated Stroke Text */}
        <motion.text
          x="50%"
          y="50%" // Adjusted to keep text centered
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          fontSize="32px" // Large text size
          className="font-[helvetica] font-bold fill-transparent stroke-neutral-200 dark:stroke-neutral-800"
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          {text}
        </motion.text>

        {/* Masked Text with Gradient */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="0.3"
          fontSize="32px" // Large text size
          mask="url(#textMask)"
          className="font-[helvetica] font-bold fill-transparent"
        >
          {text}
        </text>
      </svg>

      {/* Description (No Extra Gap Now) */}
      <div className="text-lg text-gray-300 max-w-xl mb-2 tracking-widest">
        I&apos;m passionate Full Stack web developer having an experience of web
        applications with Nodejs, React.js, Next.js.
      </div>

      {/* Buttons */}
      <div className="flex gap-6 mt-4">
        <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold border-2 border-black shadow-md hover:shadow-lg transition-all">
          Explore Projects
        </button>
        <button className="px-6 py-3 rounded-xl bg-transparent text-white font-semibold border-2 border-white hover:bg-white hover:text-black transition-all">
          Connect 🖐️
        </button>
      </div>
    </div>
  );
};
