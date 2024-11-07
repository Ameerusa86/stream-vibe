// components/Hero.tsx
import React from "react";
import HeroImages from "./HeroSection/HeroImages";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <HeroImages />
        <HeroImages />
        <HeroImages />
        <HeroImages />
      </div>

      {/* Text and Button Section */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="text-white text-4xl font-semibold mb-4">
          The Best Streaming Experience
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 px-4">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more.
        </p>
        <button className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-full font-medium">
          Start Watching Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
