import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { images } from "@/public/images";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <Wrapper>
      {/* Wrapper */}
      <div className="w-full h-[313px] relative overflow-hidden rounded-xl">
        {/* Image */}
        <Image
          src={images.CTA}
          alt="CTA"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black-08 via-black-06 to-red-45 opacity-50 z-10 pointer-events-none" />

        {/* Text Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
          <h1 className="text-3xl font-bold drop-shadow-xl">
            Your Call to Action
          </h1>
          <p className="mt-2 text-lg drop-shadow-xl">
            Join us for exclusive content and offers!
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <Button className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-full drop-shadow-xl">
              Get Started
            </Button>
            <Button className="bg-white text-red-600 px-6 py-2 rounded-full drop-shadow-xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CTA;
