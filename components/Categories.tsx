"use client";

import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Update the active index when left or right arrow is clicked
  const handleLeftClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  return (
    <Wrapper>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Explore our wide variety of categories
          </h1>
          <p className="font-normal text-lg">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="bg-black-06 ring-2 ring-black-12 p-4 rounded-xl flex items-center justify-center gap-3">
          {/* Left Arrow */}
          <div
            className="bg-black-10 ring-black-12 p-4 rounded-lg hover:bg-black-25 cursor-pointer"
            onClick={handleLeftClick}
          >
            <HiArrowSmLeft size={20} />
          </div>
          {/* Indicators */}
          <div
            className={`w-[23px] h-[4px] ${
              activeIndex === 0 ? "bg-red-45" : "bg-black-20"
            } rounded-full`}
          ></div>
          <div
            className={`w-[23px] h-[4px] ${
              activeIndex === 1 ? "bg-red-45" : "bg-black-20"
            } rounded-full`}
          ></div>
          <div
            className={`w-[23px] h-[4px] ${
              activeIndex === 2 ? "bg-red-45" : "bg-black-20"
            } rounded-full`}
          ></div>
          <div
            className={`w-[23px] h-[4px] ${
              activeIndex === 3 ? "bg-red-45" : "bg-black-20"
            } rounded-full`}
          ></div>
          {/* Right Arrow */}
          <div
            className="bg-black-10 ring-black-12 p-4 rounded-lg hover:bg-black-25 cursor-pointer"
            onClick={handleRightClick}
          >
            <HiArrowSmRight size={20} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Categories;
