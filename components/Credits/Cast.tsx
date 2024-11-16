import { images } from "@/public/images";
import Image from "next/image";
import React from "react";

interface CastProps {
  name: string;
  character: string;
  CastImage?: string;
  gender?: number;
}

const Cast = ({ name, character, CastImage, gender }: CastProps) => {
  const imgUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="shadow-lg rounded-lg">
      {gender === 0 ? (
        CastImage ? (
          <Image
            src={imgUrl + CastImage}
            width={500}
            height={500}
            alt="cast"
            className="rounded-lg w-[110px] h-[110px] object-cover"
          />
        ) : (
          <Image
            src={images.maleImg}
            width={500}
            height={500}
            alt="cast"
            className="rounded-lg w-[110px] h-[110px] object-cover"
          />
        )
      ) : CastImage ? (
        <Image
          src={imgUrl + CastImage}
          width={500}
          height={500}
          alt="cast"
          className="rounded-lg w-[110px] h-[110px] object-cover"
        />
      ) : (
        <Image
          src={images.femaleImg}
          width={500}
          height={500}
          alt="cast"
          className="rounded-lg w-[110px] h-[110px] object-cover"
        />
      )}

      <div>
        <p className="text-center mt-3 font-bold">{name}</p>
        <p className="text-center mt-1 text-base">{character}</p>
      </div>
    </div>
  );
};

export default Cast;
