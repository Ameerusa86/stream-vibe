"use client";

import { Movie, TvShow } from "@/Types/types";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const HeroImages = () => {
  const [itemsToShow, setItemsToShow] = useState(9);
  const [moviesImages, setMoviesImages] = useState<Movie[]>([]);

  useEffect(() => {
    // Fetch the movies images from the API
    const fetchMoviesImages = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US&page=1`
        );
        const data = await response.json();
        setMoviesImages(data.results);
      } catch (error) {
        console.error("Error fetching movies images:", error);
      }
    };

    fetchMoviesImages();
  }, []);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1750) {
        setItemsToShow(9);
      } else if (window.innerWidth >= 1440) {
        setItemsToShow(6);
      } else if (window.innerWidth >= 1360) {
        setItemsToShow(5);
      } else if (window.innerWidth >= 1280) {
        setItemsToShow(4);
      } else {
        setItemsToShow(3);
      }
    };

    // Update the number of items to show on initial load and when resizing
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  // Function to get a random image URL from moviesImages
  const getRandomImageUrl = () => {
    if (moviesImages.length > 0) {
      const randomMovie =
        moviesImages[Math.floor(Math.random() * moviesImages.length)];
      return randomMovie.poster_path
        ? `https://image.tmdb.org/t/p/original${randomMovie.poster_path}`
        : "https://via.placeholder.com/120x180.png?text=No+Image";
    }
    return "https://via.placeholder.com/120x180.png?text=No+Image";
  };

  return (
    <div className="w-full">
      {/* Hero Images Grid */}
      <div className="flex items-center justify-center py-3 gap-5 w-full px-4 z-0">
        {Array.from({ length: itemsToShow }).map((_, index) => (
          <div
            key={index}
            className="bg-red-500 rounded-xl w-full h-52 shadow-lg flex"
          >
            <Image
              src={getRandomImageUrl()}
              width={500}
              height={500}
              alt="hero_img"
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroImages;
