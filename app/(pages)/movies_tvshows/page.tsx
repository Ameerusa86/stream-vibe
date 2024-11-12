"use client";

import { LoadingComponent } from "@/components/Loading";
import { Movies_Library } from "@/components/StreamLib/MoviesLib";
import { TVShows_Library } from "@/components/StreamLib/TVShowsLib";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import { fetchMovies, fetchTvShows } from "@/services/TMDBapi";
import { CardProps } from "@/Types/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  HiPlay,
  HiOutlineHeart,
  HiOutlineVolumeUp,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

const Movies_TVshows = () => {
  const [media, setMedia] = useState<CardProps | null>(null);
  const [featuredItem, setFeaturedItem] = useState<CardProps | null>(null);
  const [loading, setLoading] = useState(true);

  // Function to load both movies and TV shows and select a random item
  const loadMedia = async () => {
    setLoading(true);
    try {
      const [fetchedMovies, fetchedTvShows] = await Promise.all([
        fetchMovies(),
        fetchTvShows(),
      ]);

      // Wrap fetched data in CardProps format
      setMedia({
        title: "",
        name: "",
        backdrop_path: "",
        overview: "",
        data: [],
        movies: [{ data: fetchedMovies }],
        tvshows: [{ data: fetchedTvShows }],
      });

      // Select a random item from either movies or tvshows
      const combinedMedia = [...fetchedMovies, ...fetchedTvShows];
      const randomItem =
        combinedMedia[Math.floor(Math.random() * combinedMedia.length)];
      setFeaturedItem({
        title: "title" in randomItem ? randomItem.title : "",
        name: "name" in randomItem ? randomItem.name : "",
        backdrop_path: randomItem.backdrop_path || "",
        overview: randomItem.overview || "",
        data: [randomItem],
      }); // Wrap the random item in CardProps format
    } catch (error) {
      console.error("Error loading media:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <LoadingComponent />
      </div>
    );
  }

  // Fallback in case featuredItem is not available
  const featuredImage = featuredItem?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${featuredItem.backdrop_path}`
    : "/default-image.jpg"; // Provide a default image path if needed
  const featuredTitle = featuredItem?.title || featuredItem?.name || "Title";
  const featuredOverview =
    featuredItem?.overview || "No description available.";

  return (
    <Wrapper>
      {/* Hero Section with Featured Random Movie/TV Show */}
      <div className="relative flex flex-col items-center justify-center h-[400px] sm:h-[500px] md:h-[650px] lg:h-[1000px] rounded-lg overflow-hidden">
        <Image
          src={featuredImage}
          width={1600}
          height={835}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover rounded-lg -z-10"
        />

        {/* Text Container */}
        <div className="flex flex-col items-center text-center text-white gap-3 sm:gap-4 md:gap-5 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl px-4 z-50 drop-shadow-lg mt-56 sm:mt-52 md:mt-60 lg:mt-80">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {featuredTitle}
          </h1>
          <p className="font-medium text-sm sm:text-base md:text-lg text-gray-300">
            {featuredOverview}
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
        {/* <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-3 md:gap-4 bg-black bg-opacity-60 px-3 sm:px-4 py-2 rounded-full z-30">
          <button className="bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75">
            <HiChevronLeft size={20} />
          </button>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-600 rounded-full"></div>
          <button className="bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75">
            <HiChevronRight size={20} />
          </button>
        </div> */}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black-06 via-black-12 to-black-15 opacity-75 z-10 pointer-events-none" />
      </div>

      {/* Movies and TV Shows Sections */}
      <div className="mt-8">
        <Movies_Library />
      </div>

      <div className="mt-8">
        <TVShows_Library />
      </div>
    </Wrapper>
  );
};

export default Movies_TVshows;
