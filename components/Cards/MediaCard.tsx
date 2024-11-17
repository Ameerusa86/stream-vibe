import React from "react";
import Image from "next/image";
import { HiStar } from "react-icons/hi";
import Link from "next/link";
import { Movie, TvShow } from "@/Types/types";

interface MediaCardProps {
  item: Movie | TvShow;
  type: "movie" | "tv";
  slug: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ item, type, slug }) => {
  const imageUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : "https://via.placeholder.com/120x180.png?text=No+Image";

  const title = "title" in item ? item.title : item.name;
  const rating = item.vote_average ? item.vote_average.toFixed(1) : "N/A";

  return (
    <Link href={`/${type}/${slug}`} className="group">
      <div className="bg-black-10 p-4 rounded-lg shadow-lg w-[300px] h-[400px] md:w-[350px] md:h-[400px] flex flex-col justify-between">
        <div className="relative w-full h-[300px] md:h-[340px] mb-2 overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            alt={`${title} poster`}
            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        </div>
        <div className="flex items-center justify-between text-center px-3">
          <h3 className="font-semibold text-base md:text-md truncate line-clamp-2 leading-tight text-wrap">
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
