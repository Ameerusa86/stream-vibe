import { Movies_Library } from "@/components/StreamLib/MoviesLib";
import { TVShows_Library } from "@/components/StreamLib/TVShowsLib";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import { images } from "@/public/images";
import Image from "next/image";
import React from "react";
import {
  HiPlay,
  HiOutlineHeart,
  HiOutlineVolumeUp,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

const Movies_TVshows = () => {
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
      <Movies_Library />
      <TVShows_Library />
    </Wrapper>
  );
};

export default Movies_TVshows;
