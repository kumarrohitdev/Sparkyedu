"use client";

import Link from "next/link";
import DrawerComponent from "@/app/Components/MuiDrawer";
import Image from "next/image";
import DarkModeSwitch from "./DarkModeSwitch";

// all page inside our website
const pages = ["Home", "Services", "Team","Contact","About"];

const Navbar = () => {
  return (
    <nav className="flex z-50 justify-between items-center  lg:mx-auto pl-8  pr-8 p-4 bg-white text-[#333333] shadow-[#3498db] shadow-md dark:bg-[#1a1a1a] dark:text-[#ffffff] fixed w-full">
      <span className="lg:hidden md:hidden ">
        <DrawerComponent />
      </span>
      <Link href="/">
        <Image
          className=" rounded-full hover:transform hover:scale-105 hover:transition-transform bg-cover"
          src="/Logo.jpg"
          width="50"
          height="20"
          priority
          alt="logo"
        />
      </Link>

      {/* Using map function to get all page form above */}
      <ul className=" gap-4 justify-end lg:flex md:flex hidden">
        {pages.map((page, index) => (
          <li className="hover:text-amber-500" key={index}>
            <Link href={page === "Home" ? "/" : `/#${page}`}>{page}</Link>
          </li>
        ))}
      </ul>
      <DarkModeSwitch />
    </nav>
  );
};

export default Navbar;
