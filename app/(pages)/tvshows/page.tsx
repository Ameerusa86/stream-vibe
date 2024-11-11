import MediaCard from "@/components/Cards/MediaCard";
import React from "react";

const TVShowsPage = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2">
      <MediaCard
        posterImage="/images/cta.png"
        title="The Shawshank Redemption"
        rating={8.7}
      />
    </div>
  );
};

export default TVShowsPage;
