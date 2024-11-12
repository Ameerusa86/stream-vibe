// TrendingMedia.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { fetchTrendingMedia } from "@/services/TMDBapi";
import { Movie, TvShow } from "@/Types/types";
import LibCard from "../Cards/LibCard";
import { LoadingComponent } from "../Loading";

interface TrendingMediaProps {
  type: "movie" | "tv";
}

const TrendingMedia: React.FC<TrendingMediaProps> = ({ type }) => {
  const [media, setMedia] = useState<(Movie | TvShow)[]>([]);
  const [loading, setLoading] = useState(true);
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

  const loadTrendingMedia = async () => {
    setLoading(true);
    try {
      const mediaData = await fetchTrendingMedia(type);
      setMedia(mediaData);
    } catch (error) {
      console.error(`Failed to load trending ${type}s`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrendingMedia();
  }, [type]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="mt-6">
      {/* Section Header and Controls */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-semibold text-lg md:text-xl">
          Trending {type === "movie" ? "Movies" : "TV Shows"}
        </h1>
        <div className="flex items-center gap-3">
          {/* Left Arrow */}
          <button
            className="bg-black-10 ring-black-12 p-3 rounded-lg hover:bg-black-25 cursor-pointer"
            onClick={handleLeftClick}
          >
            <HiArrowSmLeft size={20} />
          </button>
          {/* Pagination Indicators */}
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`w-[23px] h-[4px] ${
                activeIndex === index ? "bg-red-45" : "bg-black-20"
              } rounded-full`}
            ></div>
          ))}
          {/* Right Arrow */}
          <button
            className="bg-black-10 ring-black-12 p-3 rounded-lg hover:bg-black-25 cursor-pointer"
            onClick={handleRightClick}
          >
            <HiArrowSmRight size={20} />
          </button>
        </div>
      </div>

      {/* Carousel Content */}
      <Carousel className="mt-6 flex items-center justify-center gap-8 w-full">
        <CarouselContent
          ref={carouselRef}
          className="flex overflow-x-scroll no-scrollbar -ml-1"
        >
          {media.map((item, index) => (
            <CarouselItem key={index} className="pl-1 lg:basis-auto ml-3 mt-3">
              <div className="shadow-lg rounded-lg">
                <LibCard item={item} type={type} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TrendingMedia;
