import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type NavLinksTypes = {
  label: string;
  link: string;
};

const navLinks: NavLinksTypes[] = [
  {
    label: "Home",
    link: "/home",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export const Navbar = () => {
  return (
    <div className="mx-auto mt-6 max-w-3xl px-6 py-2 text-white flex justify-between border-2 border-gray-600 rounded-2xl sticky backdrop-blur-xl">
      <div className="item-center">
        <Image
          alt="manoj-portfolio-logo"
          src="/logo.webp"
          width={40}
          height={40}
          className="rounded-2xl mt-0.5"
        />
      </div>
      <div className="flex gap-6 items-center">
        {navLinks.map((nav, index) => {
          return (
            <div key={index}>
              <Link
                className="text-base text-gray-400 hover:text-white"
                href={nav.link}
              >
                {nav.label}
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <button className="rounded-2xl border-2 border-black bg-white px-5 py-2 text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none flex gap-2 items-center">
          Resume
          <ArrowDownToLine size={18} />
        </button>
      </div>
    </div>
  );
};
