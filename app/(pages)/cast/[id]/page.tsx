"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchPersonDetails } from "@/services/TMDBapi";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";

const ActorDetailsPage = () => {
  const { id } = useParams(); // Retrieve actor ID from the route
  const [actor, setActor] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFullBio, setShowFullBio] = useState(false); // Track whether to show full biography

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 5,
      spacing: 16,
    },
  });

  const [type, setType] = useState<"movie" | "tv">("movie");

  useEffect(() => {
    if (id) {
      const loadActorDetails = async () => {
        try {
          setLoading(true);
          const actorData = await fetchPersonDetails(Number(id));
          setActor(actorData);
        } catch (error) {
          console.error("Failed to fetch actor details:", error);
          setActor(null);
        } finally {
          setLoading(false);
        }
      };

      loadActorDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  if (!actor) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
        <p className="text-lg font-medium">Actor/Actress not found.</p>
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-foreground">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            {actor.profile_path && (
              <Image
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={actor.name}
                width={350}
                height={525}
                className="rounded-lg shadow-lg object-cover"
              />
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white">{actor.name}</h1>
            <h2 className="text-xl font-medium text-muted mt-2">Biography</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              {showFullBio
                ? actor.biography
                : `${actor.biography.substring(0, 1000)}...`}
            </p>
            {actor.biography && actor.biography.length > 500 && (
              <Button
                onClick={() => setShowFullBio(!showFullBio)}
                className="text-accent cursor-pointer bg-blue-900 hover:bg-blue-800 mt-5"
              >
                {showFullBio ? "Show Less" : "Read More"}
              </Button>
            )}
          </div>
        </div>

        {/* Known For Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white">Known For</h2>
          {actor.known_for?.length > 0 ? (
            <div
              ref={sliderRef}
              className="keen-slider mt-4 flex overflow-hidden"
            >
              {actor.known_for.map((movie: any, index: number) => (
                <div
                  key={index}
                  className="keen-slider__slide bg-card rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
                >
                  <Link
                    href={`/movies/${type === "movie" ? "movies" : "tvshows"}/${
                      movie.id
                    }`}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original${
                        movie.poster_path || movie.backdrop_path
                      }`}
                      alt={movie.title || "Untitled"}
                      width={500}
                      height={500}
                      className="rounded-t-lg object-cover w-full"
                    />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground mt-4">No movies found.</p>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ActorDetailsPage;
