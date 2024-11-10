"use client";

import ReviewCard from "@/components/Cards/ReviewCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Wrapper from "@/components/Wrapper";
import { images } from "@/public/images";
import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  HiArrowSmLeft,
  HiArrowSmRight,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineHeart,
  HiOutlineVolumeUp,
  HiPlay,
} from "react-icons/hi";

const MoviesPage = () => {
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
      <div className="relative flex flex-col items-center justify-center h-[400px] sm:h-[500px] md:h-[650px] lg:h-[835px] rounded-lg overflow-hidden">
        {/* Background Image */}
        <Image
          src={images.CTA}
          width={1600}
          height={835}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover rounded-lg -z-10"
        />

        {/* Text Container */}
        <div className="flex flex-col items-center text-center text-white gap-3 sm:gap-4 md:gap-5 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl px-4 z-50 drop-shadow-lg mt-40 sm:mt-52 md:mt-60 lg:mt-80">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Avengers: Endgame
          </h1>
          <p className="font-medium text-sm sm:text-base md:text-lg text-gray-300">
            With the help of remaining allies, the Avengers must assemble once
            more in order to undo Thanos's actions and undo the chaos to the
            universe, no matter what consequences may be in store, and no matter
            who they face... Avenge the fallen.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mt-3 md:mt-5">
            <Button className="bg-red-600 hover:bg-red-500 px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-full text-white flex items-center gap-1 md:gap-2">
              <HiPlay size={20} /> Play Now
            </Button>
            <button className="bg-gray-700 p-2 sm:p-2.5 md:p-3 rounded-full text-white hover:bg-gray-600">
              <HiOutlineHeart size={20} />
            </button>
            <button className="bg-gray-700 p-2 sm:p-2.5 md:p-3 rounded-full text-white hover:bg-gray-600">
              <HiOutlineVolumeUp size={20} />
            </button>
          </div>
        </div>

        {/* Slider Navigation Buttons */}
        <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-3 md:gap-4 bg-black bg-opacity-60 px-3 sm:px-4 py-2 rounded-full z-30">
          <button className="bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75">
            <HiChevronLeft size={20} />
          </button>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-600 rounded-full"></div>
          <button className="bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75">
            <HiChevronRight size={20} />
          </button>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black-06 via-black-12 to-black-15 opacity-75 z-10 pointer-events-none" />
      </div>

      {/* Responsive Movie Details Grid */}
      <div className="w-full h-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {/* Description Section */}
        <div className="bg-black-10 p-4 sm:p-6 md:p-8 rounded-xl col-span-1 sm:col-span-2 lg:col-span-3 row-span-1">
          <h1 className="font-medium text-sm sm:text-base md:text-lg text-gray-400 mb-4">
            Description
          </h1>
          <p className="font-medium text-sm sm:text-base md:text-lg text-white">
            A fiery young man clashes with an unflinching forest officer in a
            south Indian village where spirituality, fate and folklore rule the
            lands.
          </p>
        </div>

        {/* Additional Sections */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-5 bg-black-10 rounded-xl p-4 sm:p-6 md:p-8">
          {/* Placeholder content */}
          <h1 className="font-medium text-sm sm:text-base md:text-lg text-gray-400 mb-4">
            Release Year
          </h1>
          <p className="font-medium text-sm sm:text-base md:text-lg text-white mb-4">
            2024
          </p>
          <h1 className="font-medium text-sm sm:text-base md:text-lg text-gray-400 mb-4">
            Genres
          </h1>
          <div className="flex flex-wrap items-center justify-start gap-4">
            <p className="font-medium text-sm sm:text-base md:text-lg text-white bg-black-12 block rounded-lg px-3 py-2">
              Action
            </p>
            <p className="font-medium text-sm sm:text-base md:text-lg text-white bg-black-12 block rounded-lg px-3 py-2">
              Action
            </p>
          </div>
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2 bg-black-10 rounded-xl p-4 sm:p-6 md:p-8">
          <div className=" flex items-center justify-between">
            <h1 className="font-medium text-sm sm:text-base md:text-lg text-gray-400 mb-4">
              Cast
            </h1>
            {/* arrows */}
            <div className="w-[114px] h-[52px] flex items-center justify-center gap-3">
              {/* Left Arrow */}
              <div
                className="bg-black-12 ring-black-12 p-4 rounded-full hover:bg-black-25 cursor-pointer"
                onClick={handleLeftClick}
              >
                <HiArrowSmLeft size={20} />
              </div>

              {/* Right Arrow */}
              <div
                className="bg-black-12 ring-black-12 p-4 rounded-full  hover:bg-black-25 cursor-pointer"
                onClick={handleRightClick}
              >
                <HiArrowSmRight size={20} />
              </div>
            </div>
          </div>
          {/* Cast Images */}
          <div className="flex items-start justify-start gap-3">
            <Carousel className="mt-10 flex items-center justify-center gap-8 w-full">
              <CarouselContent
                ref={carouselRef}
                className="flex overflow-x-scroll no-scrollbar -ml-1"
              >
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-1 lg:basis-auto ml-3">
                    <div className="shadow-lg rounded-lg">
                      <Image
                        src={"/images/img.png"}
                        width={500}
                        height={500}
                        alt="cast"
                        className="rounded-lg w-[110px] h-[110px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-3 bg-black-10 rounded-xl p-4 sm:p-6 md:p-8">
          <div className=" flex items-center justify-between">
            <h1 className="font-medium text-sm sm:text-base md:text-lg text-gray-400 mb-4">
              Reviews
            </h1>
            {/* arrows */}
            <div className="w-[114px] h-[52px] flex items-center justify-center gap-3">
              {/* Left Arrow */}
              <div
                className="bg-black-12 ring-black-12 p-4 rounded-full hover:bg-black-25 cursor-pointer"
                onClick={handleLeftClick}
              >
                <HiArrowSmLeft size={20} />
              </div>

              {/* Right Arrow */}
              <div
                className="bg-black-12 ring-black-12 p-4 rounded-full  hover:bg-black-25 cursor-pointer"
                onClick={handleRightClick}
              >
                <HiArrowSmRight size={20} />
              </div>
            </div>
          </div>
          {/* Reviews Images */}
          <div className="flex items-start justify-start gap-3">
            <Carousel className="mt-10 flex items-center justify-center gap-8 w-full">
              <CarouselContent
                ref={carouselRef}
                className="flex overflow-x-scroll no-scrollbar -ml-1"
              >
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-1 lg:basis-auto ml-3">
                    <div className="shadow-lg rounded-lg">
                      <ReviewCard
                        profileImage="/images/img.png"
                        username="Ameer Hasan"
                        rating={4}
                        reviewText="Great movie, loved it!"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MoviesPage;
