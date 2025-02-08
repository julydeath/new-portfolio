"use client";

import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 h-screen overflow-y-auto hide-scrollbar", // Hide scrollbar
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index,
  scrollPosition,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  index: number;
  scrollPosition: number;
}) => {
  const isActive = index === Math.floor(scrollPosition / 200);

  return (
    <div
      className={cn(
        "sticky top-0 transition-all duration-500 ease-in-out transform",
        {
          "translate-y-0 z-30": isActive, // Active card
          "translate-y-[10%] z-20": index === 1, // Second card
          "translate-y-[20%] z-10": index === 2, // Third card
          "translate-y-[30%] z-0": index >= 3, // Rest of the cards
        },
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-white mb-2 mt-2">{title}</div>
        <div className="font-sans font-normal text-neutral-700 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
