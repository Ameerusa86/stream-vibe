// components/Hero.tsx
import React from "react";
import HeroImages from "./HeroSection/HeroImages";

const Hero = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        {/* Top Gradient Overlay */}
        <div className="" />
        <HeroImages />
        <HeroImages />
        <HeroImages />
        <HeroImages />
      </div>

      {/* Text and Button Section */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center z-20 px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
          The Best Streaming Experience
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-lg md:max-w-2xl mx-auto mb-8 drop-shadow-lg">
          Watch your favorite movies, TV shows, and series with our premium
          streaming service.
        </p>
        <button className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-sm md:text-base lg:text-lg">
          Start Watching Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
