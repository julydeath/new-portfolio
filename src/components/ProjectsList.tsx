"use client";

import { cn } from "@/lib/utils";
// import { useEffect, useRef, useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("max-w-3xl mx-auto py-8", className)}>
      <div className="space-y-8">{children}</div>
    </div>
  );
};

export const BentoGridItem = ({
  title,
  description,
  header,
  techStack,
}: {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  techStack?: string[];
}) => {
  return (
    <div className="group relative h-[600px] w-full transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-full w-full bg-black border border-white/[0.2] rounded-xl p-8 transition-all duration-300">
        {header}
        <div className="mt-6">
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-lg text-neutral-300 max-w-2xl">{description}</p>
          <div className="mt-6 flex gap-2 flex-wrap">
            {techStack?.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white/10 text-white text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsList() {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          techStack={item.techStack}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="w-full h-64 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
);

const items = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with Next.js and TypeScript",
    header: <Skeleton />,
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard for social media metrics",
    header: <Skeleton />,
    techStack: ["React", "Firebase", "Chart.js", "Material UI", "Express"],
  },
  {
    title: "AI Chat Application",
    description: "GPT-4 powered chat interface with custom integrations",
    header: <Skeleton />,
    techStack: ["Python", "FastAPI", "React", "OpenAI API", "Docker"],
  },
  // Add more items as needed...
];
