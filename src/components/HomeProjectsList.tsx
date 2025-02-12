"use client";

import Image from "next/image";
import { Tabs } from "./ProjectTabs";

export function HomeProjectsList() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 border border-gray-700 bg-black cursor-pointer">
          <p className="text-xl md:text-3xl font-bold text-white pb-4">
            Product Tab
          </p>
          <Image
            src="/project-image-1.png"
            alt="manoj-project-image-1.png"
            className="rounded-xl"
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 border border-gray-700 bg-black cursor-pointer">
          <p className="text-xl md:text-3xl font-bold text-white pb-4">
            Product Tab
          </p>

          {/* <div className="py-4">
            <div className="w-full h-[1px] bg-white"></div>
            <div>
              <span className="bg-red-dark m-2 inline-block rounded-full border border-gray-700 px-2.5 py-1 text-xs font-medium text-white">
                Danger
              </span>
            </div>
            <div className="w-full h-[1px] bg-white"></div>
          </div> */}

          <Image
            src="/project-image-1.png"
            alt="manoj-project-image-1.png"
            className="rounded-xl"
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 border border-gray-700 bg-black cursor-pointer">
          <p className="text-xl md:text-3xl font-bold text-white pb-4">
            Product Tab
          </p>

          {/* <div className="py-4">
            <div className="w-full h-[1px] bg-white"></div>
            <div>
              <span className="bg-red-dark m-2 inline-block rounded-full border border-gray-700 px-2.5 py-1 text-xs font-medium text-white">
                Danger
              </span>
            </div>
            <div className="w-full h-[1px] bg-white"></div>
          </div> */}

          <Image
            src="/project-image-1.png"
            alt="manoj-project-image-1.png"
            className="rounded-xl"
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 border border-gray-700 bg-black cursor-pointer">
          <p className="text-xl md:text-3xl font-bold text-white pb-4">
            Product Tab
          </p>
          {/* 
          <div className="py-4">
            <div className="w-full h-[1px] bg-white"></div>
            <div>
              <span className="bg-red-dark m-2 inline-block rounded-full border border-gray-700 px-2.5 py-1 text-xs font-medium text-white">
                Danger
              </span>
            </div>
            <div className="w-full h-[1px] bg-white"></div>
          </div> */}

          <Image
            src="/project-image-1.png"
            alt="manoj-project-image-1.png"
            className="rounded-xl"
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 border border-gray-700 bg-black cursor-pointer">
          <p className="text-xl md:text-3xl font-bold text-white pb-4">
            Product Tab
          </p>

          {/* <div className="py-4">
            <div className="w-full h-[1px] bg-white"></div>
            <div>
              <span className="bg-red-dark m-2 inline-block rounded-full border border-gray-700 px-2.5 py-1 text-xs font-medium text-white">
                Danger
              </span>
            </div>
            <div className="w-full h-[1px] bg-white"></div>
          </div> */}

          <Image
            src="/project-image-1.png"
            alt="manoj-project-image-1.png"
            className="rounded-xl"
            width={1000}
            height={1000}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[50rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <Image
//       src="/project-image-1.png"
//       alt="dummy image"
//       width="1000"
//       height="1000"
//       className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//     />
//   );
// };
