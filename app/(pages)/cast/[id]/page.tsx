"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchPersonDetails } from "@/services/TMDBapi";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ActorDetailsPage = () => {
  const { id } = useParams(); // Retrieve actor ID from the route
  const [actor, setActor] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFullBio, setShowFullBio] = useState(false); // Track whether to show full biography

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
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width={300}
                height={450}
                className="rounded-lg shadow-lg"
              />
            )}
            {/* Social Media Icons */}
            <div className="flex items-center justify-start gap-4 mt-4 text-muted-foreground text-2xl">
              <i className="fab fa-twitter cursor-pointer"></i>
              <i className="fab fa-facebook cursor-pointer"></i>
              <i className="fab fa-instagram cursor-pointer"></i>
              <i className="fab fa-youtube cursor-pointer"></i>
              <i className="fab fa-tiktok cursor-pointer"></i>
            </div>
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
            {actor.biography && actor.biography.length > 1000 && (
              <Button
                onClick={() => setShowFullBio(!showFullBio)}
                className="text-accent cursor-pointer bg-blue-900 hover:bg-blue-800 mt-5"
              >
                {showFullBio ? "Show Less" : "Read More"}
              </Button>
            )}

            <div className="flex gap-4 overflow-x-auto mt-4 no-scrollbar">
              {actor.known_for?.map((movie: any, index: number) => (
                <div
                  key={index}
                  className="min-w-[150px] shadow-lg rounded-lg overflow-hidden bg-card"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title || movie.name}
                    width={150}
                    height={225}
                    className="object-cover"
                  />
                  <p className="text-sm font-medium text-center mt-2 text-card-foreground">
                    {movie.title || movie.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Info Section */}
        <div className="mt-12 bg-card p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary">Personal Info</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Known For:</strong> {actor.known_for_department || "N/A"}
            </li>
            <li>
              <strong>Known Credits:</strong> {actor.known_credits || "N/A"}
            </li>
            <li>
              <strong>Gender:</strong> {actor.gender === 1 ? "Female" : "Male"}
            </li>
            <li>
              <strong>Birthday:</strong> {actor.birthday || "N/A"}
            </li>
            <li>
              <strong>Place of Birth:</strong> {actor.place_of_birth || "N/A"}
            </li>
          </ul>
        </div>

        {/* Acting Credits */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary">Acting</h2>
          <div className="mt-4 border-t border-border">
            {actor.movie_credits?.cast?.map((role: any, index: number) => (
              <div
                key={index}
                className="py-4 flex justify-between items-center border-b border-border"
              >
                <div>
                  <p className="text-lg font-medium text-card-foreground">
                    {role.title || role.name}
                  </p>
                  <p className="text-muted-foreground">
                    as {role.character || "Unknown"}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {role.release_date?.split("-")[0] || "N/A"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ActorDetailsPage;
