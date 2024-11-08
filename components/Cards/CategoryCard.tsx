import Image from "next/image";
import React from "react";
import { HiArrowSmRight } from "react-icons/hi";

interface CategoryCardProps {
  title: string;
}

const CategoryCard = ({ title }: CategoryCardProps) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[295px] lg:h-[342px] bg-black-10 rounded-xl ring-black-15 ring-2 p-4 sm:p-5 md:p-6 relative">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-1">
          <Image
            src="/images/img.png"
            width={100}
            height={100}
            className="rounded-lg sm:rounded-xl object-cover"
            alt="img"
          />
          <Image
            src="/images/img.png"
            width={100}
            height={100}
            className="rounded-lg sm:rounded-xl object-cover"
            alt="img"
          />
        </div>
        <div className="flex items-center justify-center gap-1">
          <Image
            src="/images/img.png"
            width={100}
            height={100}
            className="rounded-lg sm:rounded-xl object-cover"
            alt="img"
          />
          <Image
            src="/images/img.png"
            width={100}
            height={100}
            className="rounded-lg sm:rounded-xl object-cover"
            alt="img"
          />
        </div>
        <div className="flex items-center justify-between mt-4 sm:mt-5">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold z-10">
            {title}
          </h1>
          <div className="p-2 rounded-full bg-black-20 hover:bg-black-25 cursor-pointer z-10">
            <HiArrowSmRight size={20} />
          </div>
        </div>
        {/* Gradient Overlay */}
        {/* <div className="absolute bottom-0 left-0 w-full h-20 sm:h-28 md:h-32 lg:h-[252px] bg-gradient-to-t from-black-10 to-transparent rounded-b-xl" /> */}
      </div>
    </div>
  );
};

export default CategoryCard;
