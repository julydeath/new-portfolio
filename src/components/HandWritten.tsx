"use client";

import { motion } from "motion/react";

interface HandWrittenTitleProps {
  title?: string;
}

export default function HandWritten({
  title = "Hand Written",
}: HandWrittenTitleProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-24">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Reduced SVG size */}
        <motion.svg
          width="60%" // Adjusted size
          height="60%" // Adjusted size
          viewBox="0 0 1200 600"
          initial="hidden"
          animate="visible"
          className="w-[300px] h-[150px] md:w-[300px] md:h-[150px]" // Responsive size
        >
          <title>Full Stack Developer</title>
          <motion.path
            d="M 950 90 
                           C 1250 300, 1050 480, 600 520
                           C 250 520, 150 480, 150 300
                           C 150 120, 350 80, 600 80
                           C 850 80, 950 180, 950 180"
            fill="none"
            strokeWidth="8" // Reduced stroke width
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="text-white opacity-90"
          />
        </motion.svg>
      </div>
      <div className="relative text-center z-10 flex flex-col items-center justify-center">
        <motion.h1
          className="text-lg md:text-lg font-bold text-white tracking-tighter flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
