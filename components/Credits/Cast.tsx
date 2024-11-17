import { images } from "@/public/images";
import Image from "next/image";
import React from "react";

interface CastProps {
  name: string;
  character: string;
  CastImage?: string;
  gender?: number; // 1 for female, 2 for male
}

const Cast = ({ name, character, CastImage, gender }: CastProps) => {
  const imgUrl = "https://image.tmdb.org/t/p/original";

  // Determine the fallback image based on gender
  const fallbackImage =
    gender === 2
      ? images.maleImg // Male fallback image
      : images.femaleImg; // Female fallback image

  return (
    <div className="shadow-lg rounded-lg">
      {/* Render Cast Image or Fallback */}
      <Image
        src={CastImage ? `${imgUrl}${CastImage}` : fallbackImage}
        width={500}
        height={500}
        alt={`${name} image`}
        className="rounded-lg w-[110px] h-[110px] object-cover"
      />

      {/* Cast Name and Character */}
      <div>
        <p className="text-center mt-3 font-bold truncate">{name}</p>
        <p className="text-center mt-1 text-base text-gray-600 truncate">
          {character}
        </p>
      </div>
    </div>
  );
};

export default Cast;
