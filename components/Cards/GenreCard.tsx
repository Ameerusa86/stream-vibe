import React from "react";
import Link from "next/link";

interface GenreCardProps {
  genre: {
    id: number;
    name: string;
  };
  type: "movie" | "tv";
}

const GenreCard: React.FC<GenreCardProps> = ({ genre, type }) => {
  return (
    <Link href={`/${type}/genre/${genre.id}`} className="group">
      <div className="bg-black-10 p-5 rounded-lg shadow-lg w-[140px] h-[140px] flex items-center justify-center mx-auto text-white transform transition-transform duration-300 group-hover:shadow-xl hover:bg-red-600">
        {/* Genre Name */}
        <h2 className="text-center text-base md:text-lg font-semibold group-hover:text-white transition-colors duration-300">
          {genre.name}
        </h2>
      </div>
    </Link>
  );
};

export default GenreCard;
