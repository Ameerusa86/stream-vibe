// components/Navbar.tsx
import { images } from "@/public/images";
import Image from "next/image";
import React from "react";
import Wrapper from "./Wrapper";
import { Navlinks } from "@/constants/Navlinks";
import Link from "next/link";
import { HiOutlineSearch, HiOutlineBell } from "react-icons/hi";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-between p-4 z-1000 relative bg-transparent">
        {/* Logo */}
        <div>
          <Image src={images.desktop_logo} alt="logo" width={150} height={45} />
        </div>

        {/* Nav Links */}
        <div className="lg:flex hidden items-center gap-6 bg-black-06 rounded-lg px-4 py-2 border-4 border-black-20">
          {Navlinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <div className="text-white px-4 py-2 rounded-md hover:bg-black-12 transition-colors cursor-pointer">
                {link.title}
              </div>
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="lg:flex hidden items-center gap-4 text-white">
          <HiOutlineSearch size={24} className="cursor-pointer" />
          <HiOutlineBell size={24} className="cursor-pointer" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
