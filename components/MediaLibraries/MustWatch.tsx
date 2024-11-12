"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CategoryCard from "../Cards/CategoryCard";
import { Movie, TvShow } from "@/Types/types";
import { fetchTopRatedMedia } from "@/services/TMDBapi";
import LibCard from "../Cards/LibCard";
import { LoadingComponent } from "../Loading";

interface TrendingMediaProps {
  type: "movie" | "tv";
}

const MustWatch = ({ type }: TrendingMediaProps) => {
  const [movies, setMovies] = useState<(Movie | TvShow)[]>([]);
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
  const loadTrendingMovies = async () => {
    setLoading(true);
    try {
      const fetchTrendingMoviesData = await fetchTopRatedMedia(type);
      setMovies(fetchTrendingMoviesData);
    } catch (error) {
      console.error("Failed to load trending movies", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrendingMovies();
  }, [type]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      {/* Section Header and Controls */}
      <div className="flex items-center justify-between mt-6 mb-6">
        <h1 className="font-semibold text-lg md:text-xl">
          Must - Watch {type === "movie" ? "Movies" : "TV Shows"}
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
          {movies.map((movie, index) => (
            <CarouselItem key={index} className="pl-1 lg:basis-auto ml-3 mt-3">
              <div className="shadow-lg rounded-lg">
                <LibCard item={movie} type={type} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default MustWatch;
