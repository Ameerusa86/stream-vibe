"use client";

import { useRef, useState } from "react";
import Wrapper from "@/components/Wrapper";
import { fetchSearchResults } from "@/services/TMDBapi";
import { Movie, TvShow } from "@/Types/types";
import { HiSearch } from "react-icons/hi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MediaCard from "@/components/Cards/MediaCard";
import Image from "next/image";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<{
    movies: Movie[];
    tvShows: TvShow[];
    people: any[];
  }>({ movies: [], tvShows: [], people: [] });
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      setLoading(true);

      try {
        const searchResults = await fetchSearchResults(searchTerm);

        const categorizedResults = {
          movies: searchResults.filter(
            (item): item is Movie => "title" in item
          ),
          tvShows: searchResults.filter(
            (item): item is TvShow => "name" in item && "first_air_date" in item
          ),
          people: searchResults.filter(
            (item) => "known_for_department" in item
          ),
        };

        setResults(categorizedResults);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Wrapper>
      <div className="space-y-8">
        {/* Search Bar */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search for movies, TV shows, or people..."
              className="w-full py-4 pl-12 pr-4 text-lg text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <HiSearch
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"
              size={24}
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && <p className="text-gray-500 text-center">Searching...</p>}

        {/* Results */}
        {!loading && (
          <div className="space-y-10">
            {/* Movies */}
            {results.movies.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Movies</h2>
                <div className="flex gap-3 flex-wrap">
                  {results.movies.map((movie) => (
                    <MediaCard
                      key={movie.id}
                      item={movie}
                      type="movie"
                      slug=""
                    />
                  ))}
                </div>
              </div>
            )}

            {/* TV Shows */}
            {results.tvShows.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">TV Shows</h2>
                <div className="flex gap-3 flex-wrap">
                  {results.tvShows.map((tvShow) => (
                    <MediaCard slug="" item={tvShow} type="tv" />
                  ))}
                </div>
              </div>
            )}

            {/* People */}
            {results.people.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">People</h2>
                <div className="flex gap-3 flex-wrap">
                  {results.people.map((person) => (
                    <div
                      className="flex flex-col items-center text-center"
                      key={person.id}
                    >
                      <Image
                        src={
                          person.profile_path
                            ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                            : "https://via.placeholder.com/120x180.png?text=No+Image"
                        }
                        alt={person.name}
                        className="w-[120px] h-[180px] object-cover rounded-lg"
                        width={120}
                        height={180}
                      />
                      <p className="mt-2 text-base font-medium text-white">
                        {person.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default SearchPage;
