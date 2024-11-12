import React from "react";
import Image from "next/image";
import { HiOutlineClock, HiOutlineUserGroup } from "react-icons/hi";
import Link from "next/link";

interface LibCardProps {
  item: {
    id: number;
    poster_path: string;
    title?: string;
    name?: string;
    release_date?: string;
    first_air_date?: string;
  };
  type: "movie" | "tv";
}

const LibCard: React.FC<LibCardProps> = ({ item, type }) => {
  const imageUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : "https://via.placeholder.com/200x300.png?text=No+Image";

  const title = type === "movie" ? item.title : item.name;
  const releaseDate =
    type === "movie" ? item.release_date : item.first_air_date;
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : "N/A";

  return (
    <Link href={`/movies/${type}/${item.id}`} className="group">
      <div className="bg-black-10 p-5 rounded-lg shadow-lg w-[200px] sm:w-[240px] lg:w-[280px] h-[400px] mx-auto text-white transform transition-transform duration-300 group-hover:scale-105">
        {/* Poster Image */}
        <div className="relative w-full h-[85%] mb-3 overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt={`${title} poster`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Title and Release Year */}
        <div className="flex items-center justify-between text-base text-gray-400 mt-5 bg-black-06 px-4 py-2 rounded-xl">
          {/* Title */}
          <div className="font-semibold truncate w-full">{title}</div>
          {/* Release Year */}
          <div className="flex items-center justify-center text-gray-400">
            <span>{releaseYear}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LibCard;
