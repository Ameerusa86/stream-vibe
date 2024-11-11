"use client";

import MediaCard from "@/components/Cards/MediaCard";
import { fetchTvShows } from "@/services/TMDBapi";
import { TvShow } from "@/Types/types";
import React, { useEffect, useState } from "react";

const TVShowsPage = () => {
  const [tvshows, setTVShows] = useState<TvShow[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(500);

  const loadTVShows = async (page: number) => {
    setLoading(true);
    try {
      const tvshowsData = await fetchTvShows(page);
      setTVShows(tvshowsData);
      console.log("Movies loaded for page:", page);
    } catch (error) {
      console.error("Error loading movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTVShows(currentPage);
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
      {tvshows.map((tvshow) => (
        <MediaCard key={tvshow.id} item={tvshow} type="tv" />
      ))}
    </div>
  );
};

export default TVShowsPage;
