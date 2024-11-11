import React from "react";
import Image from "next/image";
import { HiStar } from "react-icons/hi";
import Link from "next/link";
import { Movie, TvShow } from "@/Types/types";

interface MediaCardProps {
  item: Movie | TvShow;
  type: "movie" | "tv";
}

const MediaCard: React.FC<MediaCardProps> = ({ item, type }) => {
  const imageUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : item.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
    : "https://via.placeholder.com/120x180.png?text=No+Image";

  const title =
    type === "movie" && "title" in item
      ? item.title
      : "name" in item
      ? item.name
      : "Unknown";
  const rating = item.vote_average ? item.vote_average.toFixed(1) : "N/A";

  return (
    <Link href={`/movies/${title}`} className="group">
      <div className="bg-black-10 p-4 rounded-lg shadow-lg w-[240px] h-[400px] md:w-[280px] md:h-[450px] flex flex-col justify-between transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
        {/* Poster Image */}
        <div className="relative w-full h-[300px] md:h-[340px] mb-2">
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            alt={`${title} poster`}
            className="rounded-md"
          />
        </div>

        {/* Title and Rating */}
        <div className="flex flex-col items-center justify-between text-center">
          {/* Truncated Title */}
          <h3 className="font-semibold text-base md:text-lg truncate line-clamp-2 leading-tight">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-yellow-400">
            <HiStar size={18} />
            <span className="text-sm md:text-base">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
