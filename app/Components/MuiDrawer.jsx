import React from "react";
import { List, ListItemButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCodeWorking, IoHomeOutline } from "react-icons/io5";
import { GrArticle } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

const icons = {
  Home: IoHomeOutline,
  Services: IoCodeWorking,
  Team: GrArticle,
  Contact: FaRegUser,
  About: FaRegUser,
};

const pages = ["Home", "Services", "Team", "Contact", "About"];

const DrawerComponent = () => {
  const [rvalue, setValue] = useState(false);

  return (
    <div className="">
      <Drawer
        className="backdrop-blur-sm "
        open={rvalue}
        onClose={() => setValue(false)}
      >
        <div className=" dark:bg-[#1a1a1a]  dark:text-[#ffffff]">
          <List>
            <div className="flex justify-normal items-center m-4">
              <Image
                className="bg-red-500 m-2 rounded-full cursor-pointer border-4 dark:border-white hover:transform hover:scale-110 transition-transform"
                src="/Logo.jpg"
                width={50}
                height={50}
                alt="Logo"
                priority
              />
              <ul>
                <li>Rua Technology</li>
                <Link
                  target="_blank"
                  href={"mailto:Rohitkumar.Work@outlook.com"}
                >
                  <li className="text-[7px] hover:text-blue-400 cursor-pointer hover:transform hover:scale-105 hover:transition-transform">
                  helpdesk@sparkyedu.in
                  </li>
                </Link>
              </ul>
            </div>

            {pages.map((page, index) => (
              <ListItemButton onClick={() => setValue(false)} key={index}>
                <span className="text-xl  font-semibold dark:text-white ml-4   rounded-md pl-12 pr-12 hover:transform hover:scale-110 hover:transition-transform">
                  <Link className="flex gap-2 items-center " href={`#${page}`}>
                    {React.createElement(icons[page], { size: "1em" })}
                    {page}
                  </Link>
                </span>
              </ListItemButton>
            ))}

            <div className="flex justify-center items-end h-96 pr-6 my-auto ">
              {/* <SocialIcons /> */}
            </div>
          </List>
        </div>
      </Drawer>

      <span
        onClick={() => setValue(!rvalue)}
        className="cursor-pointer text-2xl  text-blue-600"
      >
        ☰
      </span>
    </div>
  );
};

export default DrawerComponent;
