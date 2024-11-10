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
      <div className="relative flex flex-col items-center justify-center h-[835px] rounded-lg overflow-hidden">
        {/* Background Image */}
        <Image
          src={images.CTA}
          width={1600}
          height={835}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover rounded-lg -z-10"
        />

        {/* Text Container */}
        <div className="flex flex-col items-center text-center text-white gap-5 max-w-2xl px-4 z-50 drop-shadow-lg mt-80">
          <h1 className="font-bold text-5xl">Avengers: Endgame</h1>
          <p className="font-medium text-lg text-gray-300">
            With the help of remaining allies, the Avengers must assemble once
            more in order to undo Thanos's actions and undo the chaos to the
            universe, no matter what consequences may be in store, and no matter
            who they face... Avenge the fallen.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-5">
            <Button className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-full text-white flex items-center gap-2">
              <HiPlay size={20} /> Play Now
            </Button>
            <button className="bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600">
              <HiOutlineHeart size={20} />
            </button>
            <button className="bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600">
              <HiOutlineVolumeUp size={20} />
            </button>
          </div>
        </div>
        {/* Slider Navigation Buttons */}
        <div className="absolute rounded-xl bottom-6 flex items-center justify-center gap-4 bg-black-10 opacity-70 z-30">
          <button className="bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75">
            <HiChevronLeft size={24} />
          </button>
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <button className="bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75">
            <HiChevronRight size={24} />
          </button>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black-08 via-black-06 to-black-20 opacity-75 z-10 pointer-events-none" />
      </div>
      <Movies_Library />
      <TVShows_Library />
    </Wrapper>
  );
};

export default Movies_TVshows;
