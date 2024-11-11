import React from "react";
import Image from "next/image";
import { HiStar } from "react-icons/hi";
import Link from "next/link";

interface MediaCardProps {
  posterImage: string;
  title: string;
  rating?: number;
}

const MediaCard: React.FC<MediaCardProps> = ({
  posterImage,
  title,
  rating = 0,
}) => {
  return (
    <Link href={`/movies/${"dsgfdsf"}`} className="group">
      <div className="bg-black-10 p-4 rounded-lg shadow-lg w-full max-w-xs mx-auto text-white transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
        {/* Poster Image */}
        <div className="relative w-full h-64 mb-4">
          <Image
            src={posterImage}
            layout="fill"
            objectFit="cover"
            alt={`${title} poster`}
            className="rounded-md"
          />
        </div>

        {/* Title and Rating */}
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          <div className="flex items-center gap-1 text-yellow-400">
            <HiStar size={20} />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
