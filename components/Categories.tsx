"use client";

import React, { useState, useRef, useEffect } from "react";
import Wrapper from "./Wrapper";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import CategoryCard from "./Cards/CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Genre } from "@/Types/types";
import { LoadingComponent } from "./Loading";
import GenreCard from "./Cards/GenreCard";
import { fetchGenres } from "@/services/TMDBapi";

const Categories = () => {
  const [movies, setMovies] = useState<Genre[]>([]);
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
      const fetchTrendingMoviesData = await fetchGenres();
      setMovies(fetchTrendingMoviesData);
    } catch (error) {
      console.error("Failed to load trending movies", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <Wrapper>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Explore our wide variety of categories
          </h1>
          <p className="font-normal text-lg">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="bg-black-06 ring-2 ring-black-12 p-4 rounded-xl flex items-center justify-center gap-3">
          {/* Left Arrow */}
          <div
            className="bg-black-10 ring-black-12 p-4 rounded-lg hover:bg-black-25 cursor-pointer"
            onClick={handleLeftClick}
          >
            <HiArrowSmLeft size={20} />
          </div>
          {/* Indicators */}
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`w-[23px] h-[4px] ${
                activeIndex === index ? "bg-red-45" : "bg-black-20"
              } rounded-full`}
            ></div>
          ))}
          {/* Right Arrow */}
          <div
            className="bg-black-10 ring-black-12 p-4 rounded-lg hover:bg-black-25 cursor-pointer"
            onClick={handleRightClick}
          >
            <HiArrowSmRight size={20} />
          </div>
        </div>
      </div>

      <Carousel className="mt-10 flex items-center justify-center gap-8 w-full">
        <CarouselContent
          ref={carouselRef}
          className="flex overflow-x-scroll no-scrollbar -ml-1"
        >
          {movies.map((genre, index) => (
            <CarouselItem key={index} className="pl-1 lg:basis-auto ml-3 mt-3">
              <div className="shadow-lg rounded-lg">
                <GenreCard genre={genre} type="movie" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Wrapper>
  );
};

export default Categories;
