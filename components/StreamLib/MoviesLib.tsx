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
import TrendingMovies from "../MediaLibraries/TrendingMedia";
import Genres from "../MediaLibraries/Genres";
import NewReleases from "../MediaLibraries/NewReleases";
import MustWatch from "../MediaLibraries/MustWatch";

export const Movies_Library = () => {
  return (
    <Wrapper>
      {/* Container Frame with Movies Button */}
      <div className="relative w-full h-full mx-auto p-6 md:p-8 lg:p-12 border border-black-15 rounded-xl mt-5">
        {/* "Movies" Button Positioned as a Badge */}
        <div className="absolute top-[-20px] left-6 bg-red-600 text-white px-4 py-1 rounded-md font-semibold">
          Movies
        </div>
        <Genres />
        <TrendingMovies />
        <NewReleases />
        <MustWatch />
      </div>
    </Wrapper>
  );
};
