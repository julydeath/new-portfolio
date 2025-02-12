"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const HeroBackGround = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
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
      <svg
        ref={svgRef}
        width="100%"
        height="200px"
        viewBox="0 0 300 50"
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
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.5"
          fontSize="32px"
          className="font-[helvetica] font-bold stroke-neutral-200"
          initial={{
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
            fill: "transparent",
          }}
          animate={{
            strokeDashoffset: 0,
            transition: { duration: 3, ease: "easeInOut" },
          }}
        >
          {text}
        </motion.text>

        {/* Masked Text with Gradient & Fill Animation */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="0.5"
          fontSize="32px"
          mask="url(#textMask)"
          className="font-[helvetica] font-bold"
          initial={{ fill: "transparent" }}
          animate={{
            fill: hovered ? "url(#textGradient)" : "white",
            transition: { delay: 3, duration: 0.5, ease: "easeInOut" },
          }}
        >
          {text}
        </motion.text>
      </svg>

      <div className="text-lg text-gray-300 max-w-xl mb-2 tracking-widest">
        I&apos;m a passionate Full Stack web developer with experience in
        Node.js, React.js, and Next.js.
      </div>

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
