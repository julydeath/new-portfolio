// "use client";
// import React, { useState } from "react";

// export const TorchBackground = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Handle mouse movement
//   const handleMouseMove = (e: React.MouseEvent) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   return (
//     <div
//       className="relative h-screen bg-black overflow-hidden"
//       onMouseMove={handleMouseMove}
//       style={{ cursor: "none" }}
//     >
//       {/* Background image (hidden by default) */}
//       <div
//         className="absolute inset-0 bg-center bg-cover opacity-40 hover:opacity-80 transition-opacity duration-300"
//         style={{
//           backgroundImage: "url('/floating-code-boxes.svg')",
//           mask: `radial-gradient(
//             circle at ${mousePosition.x}px ${mousePosition.y}px,
//             rgba(0, 0, 0, 1) 40%,
//             rgba(0, 0, 0, 0) 40%
//           )`,
//           WebkitMask: `radial-gradient(
//             circle at ${mousePosition.x}px ${mousePosition.y}px,
//             rgba(0, 0, 0, 1) 10%,
//             rgba(0, 0, 0, 0) 20%
//           )`,
//         }}
//       />
//     </div>
//   );
// };

"use client";
import React, { useState, useEffect, useRef } from "react";
import { HeroBackGround } from "./HeroBackGround";
import Image from "next/image";

export const TorchHero = ({ text }: { text: string }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textBounds, setTextBounds] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const textRef = useRef<HTMLDivElement>(null);

  // Update the torch effect position
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setTextBounds({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
      });
    }
  }, []);

  return (
    <div
      className="relative h-screen bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Torch Background */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-40 transition-opacity duration-300"
        style={{
          backgroundImage: "url('/floating-code-boxes.svg')",
          mask: `radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            ${
              isInsideText(mousePosition, textBounds)
                ? "rgba(0,0,0,1)"
                : "rgba(0,0,0,0)"
            } 40%,
            rgba(0, 0, 0, 0) 60%
          )`,
          WebkitMask: `radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            ${
              isInsideText(mousePosition, textBounds)
                ? "rgba(0,0,0,1)"
                : "rgba(0,0,0,0)"
            } 10%,
            rgba(0, 0, 0, 0) 20%
          )`,
        }}
      />
      <Image
        className="item-center"
        alt="manoj-portfolio-blue"
        src="blue-gradient.svg"
        layout="fill"
      />

      {/* Hero Background with text */}
      <div ref={textRef} className="absolute inset-0 flex justify-center">
        <HeroBackGround text={text} />
      </div>
    </div>
  );
};

// Helper function to check if the mouse is inside the text bounds
const isInsideText = (
  mouse: { x: number; y: number },
  bounds: { x: number; y: number; width: number; height: number }
) => {
  return (
    mouse.x >= bounds.x &&
    mouse.x <= bounds.x + bounds.width &&
    mouse.y >= bounds.y &&
    mouse.y <= bounds.y + bounds.height
  );
};
