"use client";

import React, { useState, useEffect } from "react";

const HeroImages = () => {
  const [itemsToShow, setItemsToShow] = useState(9);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1750) {
        setItemsToShow(9);
      } else if (window.innerWidth >= 1440) {
        setItemsToShow(6);
      } else if (window.innerWidth >= 1360) {
        setItemsToShow(5);
      } else if (window.innerWidth >= 1280) {
        setItemsToShow(4);
      } else {
        setItemsToShow(3);
      }
    };

    // Update the number of items to show on initial load and when resizing
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  return (
    <div className="flex items-center justify-center py-3 gap-5 w-full px-4">
      {Array.from({ length: itemsToShow }).map((_, index) => (
        <div
          key={index}
          className="bg-red-500 rounded-xl w-full h-52 shadow-lg"
        >
          Content {index + 1}
        </div>
      ))}
    </div>
  );
};

export default HeroImages;
