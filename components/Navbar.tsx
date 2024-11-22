// components/Navbar.tsx
import { images } from "@/public/images";
import Image from "next/image";
import React from "react";
import Wrapper from "./Wrapper";
import { Navlinks } from "@/constants/Navlinks";
import Link from "next/link";
import { HiOutlineSearch, HiOutlineBell } from "react-icons/hi";

// Navigation Menu
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-between p-4 z-50 relative">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src={images.desktop_logo}
              alt="logo"
              width={150}
              height={45}
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="lg:flex hidden items-center gap-6 bg-black-06 rounded-lg px-4 py-2 border border-black-20 relative">
          <NavigationMenuList className="flex gap-6">
            {Navlinks.map((navItem, index) => (
              <NavigationMenuItem key={index} className="relative">
                {navItem.links ? (
                  <>
                    {/* Dropdown for items with sub-links */}
                    <NavigationMenuTrigger className="text-white px-4 py-2 rounded-md bg-black-06 hover:bg-black-12 transition-colors cursor-pointer">
                      {navItem.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute bg-black-06 rounded-lg shadow-lg z-50 min-w-[200px]">
                      {navItem.links.map((subLink, subIndex) => (
                        <NavigationMenuLink asChild key={subIndex} className="">
                          <Link
                            href={subLink.href}
                            className="block text-white px-4 py-2 rounded-md hover:bg-black-12 transition-colors cursor-pointer"
                          >
                            {subLink.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </>
                ) : (
                  // Direct link for items without sub-links
                  <NavigationMenuLink asChild>
                    <Link
                      href={navItem.href}
                      className="text-white px-4 py-2 rounded-md bg-black-06 hover:bg-black-12 transition-colors cursor-pointer"
                    >
                      {navItem.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Icons */}
        <div className="lg:flex hidden items-center gap-4 text-white">
          <Link href={"/search"}>
            <HiOutlineSearch size={24} className="cursor-pointer" />
          </Link>
          <HiOutlineBell size={24} className="cursor-pointer" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
