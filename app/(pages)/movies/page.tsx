"use client";

import MediaCard from "@/components/Cards/MediaCard";
import { fetchMovies } from "@/services/TMDBapi";
import { Movie } from "@/Types/types";
import React, { useEffect, useState } from "react";

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(500);

  const loadMovies = async (page: number) => {
    setLoading(true);
    try {
      const moviesData = await fetchMovies(page);
      setMovies(moviesData);
      console.log("Movies loaded for page:", page);
    } catch (error) {
      console.error("Error loading movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center flex-wrap gap-2">
      {movies.map((movie) => (
        <MediaCard key={movie.id} item={movie} type="movie" />
      ))}
    </div>
  );
};

export default MoviesPage;
