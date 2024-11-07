import React from "react";

const HeroGradient = () => {
  return (
    <>
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[581px] bg-gradient-to-b from-[#141414] to-transparent z-5" />
      <div className="absolute bottom-0 left-0 w-full h-[581px] bg-gradient-to-t from-[#141414] to-transparent z-5" />
    </>
  );
};

export default HeroGradient;
