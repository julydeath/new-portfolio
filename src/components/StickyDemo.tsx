"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Languages",
    description:
      "The core programming languages I use for development, ranging from low-level systems programming to high-level scripting.",
    content: (
      <div className="flex flex-wrap gap-3 p-4 text-white">
        {["C", "C++", "Python", "JavaScript", "TypeScript", "HTML", "CSS"].map(
          (lang) => (
            <div
              key={lang}
              className="flex items-center gap-2 border border-zinc-700 px-4 py-2 rounded-md"
            >
              <Image
                src={`/skills/${lang.toLowerCase()}.svg`}
                width={24}
                height={24}
                alt={lang}
              />
              {lang}
            </div>
          )
        )}
      </div>
    ),
  },
  {
    title: "Frameworks & Libraries",
    description:
      "A collection of powerful frameworks and libraries I leverage to build modern web applications efficiently.",
    content: (
      <div className="flex flex-wrap gap-3 p-4 text-white">
        {[
          "React",
          "Next",
          "Redux",
          "ReactQuery",
          "TailwindCSS",
          "Node",
          "Express",
          "Hono",
          "ShadCN",
        ].map((framework) => (
          <div
            key={framework}
            className="flex items-center gap-2 border border-zinc-700 px-4 py-2 rounded-md"
          >
            <Image
              src={`/skills/${framework.toLowerCase()}.svg`}
              width={24}
              height={24}
              alt={framework}
            />
            {framework}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Databases",
    description:
      "Reliable and scalable databases I use for managing structured and unstructured data in applications.",
    content: (
      <div className="flex flex-wrap gap-3 p-4 text-white">
        {["Firebase", "MongoDB", "Postgres", "MySQL", "Supabase", "Redis"].map(
          (db) => (
            <div
              key={db}
              className="flex items-center gap-2 border border-zinc-700 px-4 py-2 rounded-md"
            >
              <Image
                src={`/skills/${db.toLowerCase()}.svg`}
                width={24}
                height={24}
                alt={db}
              />
              {db}
            </div>
          )
        )}
      </div>
    ),
  },
  {
    title: "Tools",
    description:
      "Essential tools and utilities that help streamline my development process and improve efficiency.",
    content: (
      <div className="flex flex-wrap gap-3 p-4 text-white">
        {["VSCode", "ChatGPT", "Git", "Linux", "Postman", "Docker"].map(
          (tool) => (
            <div
              key={tool}
              className="flex items-center gap-2 border border-zinc-700 px-4 py-2 rounded-md"
            >
              <Image
                src={`/skills/${tool.toLowerCase()}.svg`}
                width={24}
                height={24}
                alt={tool}
              />
              {tool}
            </div>
          )
        )}
      </div>
    ),
  },
  {},
];

export default function StickyDemo() {
  return (
    <div className="my-64 md:my-72">
      <div className="text-white flex justify-center text-6xl font-semibold pb-4">
        Tech Stack
      </div>
      <div className="text-center text-gray-600 text-base mb-8">
        Peek into my software toolbox and preferred technology stacks
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
