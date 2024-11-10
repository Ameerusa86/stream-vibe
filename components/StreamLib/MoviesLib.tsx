"use client";

import React, { useRef, useState } from "react";
import Wrapper from "../Wrapper";
import CategoryCard from "../Cards/CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

export const Movies_Library = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollAmount = 300;

  const handleLeftClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const handleRightClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
    setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  return (
    <Wrapper>
      {/* Container Frame with Movies Button */}
      <div className="relative w-full h-full mx-auto p-6 md:p-8 lg:p-12 border border-black-15 rounded-xl mt-5">
        {/* "Movies" Button Positioned as a Badge */}
        <div className="absolute top-[-20px] left-6 bg-red-600 text-white px-4 py-1 rounded-md font-semibold">
          Movies
        </div>

        {/* Section Header and Controls */}
        <div className="flex items-center justify-between mt-6 mb-6">
          <h1 className="font-semibold text-lg md:text-xl">Our Genres</h1>
          <div className="flex items-center gap-3">
            <div
              className="bg-black-10 ring-black-12 p-3 rounded-lg hover:bg-black-25 cursor-pointer"
              onClick={handleLeftClick}
            >
              <HiArrowSmLeft size={20} />
            </div>
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`w-[23px] h-[4px] ${
                  activeIndex === index ? "bg-red-45" : "bg-black-20"
                } rounded-full`}
              ></div>
            ))}
            <div
              className="bg-black-10 ring-black-12 p-3 rounded-lg hover:bg-black-25 cursor-pointer"
              onClick={handleRightClick}
            >
              <HiArrowSmRight size={20} />
            </div>
          </div>
        </div>

        {/* Carousel Content */}
        <Carousel className="mt-6 flex items-center justify-center gap-8 w-full">
          <CarouselContent
            ref={carouselRef}
            className="flex overflow-x-scroll no-scrollbar -ml-1"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 lg:basis-auto ml-3 mt-3"
              >
                <div className="shadow-lg rounded-lg">
                  <CategoryCard title={`Category ${index + 1}`} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Section Header and Controls */}
        <div className="flex items-center justify-between mt-6 mb-6">
          <h1 className="font-semibold text-lg md:text-xl">Trending</h1>
          <div className="flex items-center gap-3">
            <div
              className="bg-black-10 ring-black-12 p-3 rounded-lg hover:bg-black-25 cursor-pointer"
              onClick={handleLeftClick}
            >
              <HiArrowSmLeft size={20} />
            </div>
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`w-[23px] h-[4px] ${
                  activeIndex === index ? "bg-red-45" : "bg-black-20"
                } rounded-full`}
              ></div>
            ))}
            <div
              className="bg-black-10 ring-black-12 p-3 rounded-lg hover:bg-black-25 cursor-pointer"
              onClick={handleRightClick}
            >
              <HiArrowSmRight size={20} />
            </div>
          </div>
        </div>

        {/* Carousel Content */}
        <Carousel className="mt-6 flex items-center justify-center gap-8 w-full">
          <CarouselContent
            ref={carouselRef}
            className="flex overflow-x-scroll no-scrollbar -ml-1"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 lg:basis-auto ml-3 mt-3"
              >
                <div className="shadow-lg rounded-lg">
                  <CategoryCard title={`Category ${index + 1}`} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Section Header and Controls */}
        <div className="flex items-center justify-between mt-6 mb-6">
          <h1 className="font-semibold text-lg md:text-xl">New Releases</h1>
          <div className="flex items-center gap-3">
            <div
              className="bg-black-10 ring-black-12 p-3 rounded-lg hover:bg-black-25 cursor-pointer"
              onClick={handleLeftClick}
            >
              <HiArrowSmLeft size={20} />
            </div>
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`w-[23px] h-[4px] ${
                  activeIndex === index ? "bg-red-45" : "bg-black-20"
                } rounded-full`}
              ></div>
            ))}
            <div
              className="bg-black-10 ring-black-12 p-3 rounded-lg hover:bg-black-25 cursor-pointer"
              onClick={handleRightClick}
            >
              <HiArrowSmRight size={20} />
            </div>
          </div>
        </div>

        {/* Carousel Content */}
        <Carousel className="mt-6 flex items-center justify-center gap-8 w-full">
          <CarouselContent
            ref={carouselRef}
            className="flex overflow-x-scroll no-scrollbar -ml-1"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 lg:basis-auto ml-3 mt-3"
              >
                <div className="shadow-lg rounded-lg">
                  <CategoryCard title={`Category ${index + 1}`} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Section Header and Controls */}
        <div className="flex items-center justify-between mt-6 mb-6">
          <h1 className="font-semibold text-lg md:text-xl">
            Must - Watch Movies
          </h1>
          <div className="flex items-center gap-3">
            <div
              className="bg-black-10 ring-black-12 p-3 rounded-lg hover:bg-black-25 cursor-pointer"
              onClick={handleLeftClick}
            >
              <HiArrowSmLeft size={20} />
            </div>
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`w-[23px] h-[4px] ${
                  activeIndex === index ? "bg-red-45" : "bg-black-20"
                } rounded-full`}
              ></div>
            ))}
            <div
              className="bg-black-10 ring-black-12 p-3 rounded-lg hover:bg-black-25 cursor-pointer"
              onClick={handleRightClick}
            >
              <HiArrowSmRight size={20} />
            </div>
          </div>
        </div>

        {/* Carousel Content */}
        <Carousel className="mt-6 flex items-center justify-center gap-8 w-full">
          <CarouselContent
            ref={carouselRef}
            className="flex overflow-x-scroll no-scrollbar -ml-1"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 lg:basis-auto ml-3 mt-3"
              >
                <div className="shadow-lg rounded-lg">
                  <CategoryCard title={`Category ${index + 1}`} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Wrapper>
  );
};
