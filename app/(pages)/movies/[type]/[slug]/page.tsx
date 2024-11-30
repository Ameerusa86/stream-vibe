"use client";

import { use, useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import ReviewCard from "@/components/Cards/ReviewCard";
import { fetchMovieCredits, fetchMovieDetails } from "@/services/TMDBapi";
import { CastMember, Movie, PersonCast } from "@/Types/types";
import {
  HiOutlineHeart,
  HiOutlineVolumeUp,
  HiPlay,
  HiArrowSmLeft,
  HiArrowSmRight,
} from "react-icons/hi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Cast from "@/components/Credits/Cast";
import Link from "next/link";

const MovieDetailsPage = () => {
  const { type, slug } = useParams(); // Destructure `type` and `slug` from useParams
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const castCarouselRef = useRef<HTMLDivElement>(null); // Separate ref for cast
  const [cast, setCast] = useState<CastMember[]>([]);

  const scrollAmount = 300;

  const handleCastLeftClick = () => {
    if (castCarouselRef.current) {
      castCarouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCastRightClick = () => {
    if (castCarouselRef.current) {
      castCarouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (type && slug) {
      const loadMovieDetails = async () => {
        setLoading(true);
        try {
          const movieData = await fetchMovieDetails(slug as string);
          setMovie(movieData);
        } catch (error) {
          console.error("Failed to fetch movie details:", error);
        } finally {
          setLoading(false);
        }
      };

      loadMovieDetails();
    }
  }, [type, slug]);

  useEffect(() => {
    if (movie?.id) {
      const loadCast = async () => {
        try {
          const response = await fetchMovieCredits(movie.id);
          setCast(response.cast);
        } catch (error) {
          console.error("Failed to fetch cast:", error);
        }
      };

      loadCast();
    }
  }, [movie?.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <Wrapper>
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-[400px] sm:h-[500px] md:h-[650px] lg:h-[835px] rounded-lg overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          width={1600}
          height={835}
          alt={`${movie.title} background`}
          className="absolute inset-0 w-full h-full object-cover rounded-lg -z-10"
        />

        {/* Movie Title and Overview */}
        <div className="flex flex-col items-center text-center text-white gap-3 sm:gap-4 md:gap-5 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl px-4 z-50 drop-shadow-lg mt-40 sm:mt-52 md:mt-60 lg:mt-80">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {movie.title}
          </h1>
          <p className="font-medium text-sm sm:text-base md:text-lg text-gray-300">
            {movie.overview}
          </p>

          {/* Play, Favorite, Volume Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mt-3 md:mt-5">
            <button className="bg-red-600 hover:bg-red-500 px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-full text-white flex items-center gap-1 md:gap-2">
              <HiPlay size={20} /> Play Now
            </button>
            <button className="bg-gray-700 p-2 sm:p-2.5 md:p-3 rounded-full text-white hover:bg-gray-600">
              <HiOutlineHeart size={20} />
            </button>
            <button className="bg-gray-700 p-2 sm:p-2.5 md:p-3 rounded-full text-white hover:bg-gray-600">
              <HiOutlineVolumeUp size={20} />
            </button>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black-06 via-black-12 to-black-15 opacity-75 z-10 pointer-events-none" />
      </div>

      {/* Movie Details Section */}
      <div className="w-full h-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {/* Description */}
        <div className="bg-black-10 p-4 sm:p-6 md:p-8 rounded-xl col-span-1 sm:col-span-2 lg:col-span-3">
          <h2 className="font-medium text-lg text-gray-400 mb-4">
            Description
          </h2>
          <p className="text-white">{movie.overview}</p>
        </div>

        {/* Release Year and Genres */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-black-10 p-4 sm:p-6 md:p-8 rounded-xl">
          <h2 className="font-medium text-lg text-gray-400 mb-4">Details</h2>
          <p className="text-white mb-4">
            Release Year:{" "}
            {movie.release_date
              ? new Date(movie.release_date).getFullYear()
              : "N/A"}
          </p>
          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="text-white bg-black-12 px-3 py-2 rounded-lg"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
        {/* Cast Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2 bg-black-10 rounded-xl p-4 sm:p-6 md:p-8">
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-sm sm:text-base md:text-lg text-gray-400 mb-4">
              Cast
            </h1>
            {/* arrows */}
            <div className="w-[114px] h-[52px] flex items-center justify-center gap-3">
              {/* Left Arrow */}
              <div
                className="bg-black-12 ring-black-12 p-4 rounded-full hover:bg-black-25 cursor-pointer"
                onClick={handleCastLeftClick}
              >
                <HiArrowSmLeft size={20} />
              </div>

              {/* Right Arrow */}
              <div
                className="bg-black-12 ring-black-12 p-4 rounded-full  hover:bg-black-25 cursor-pointer"
                onClick={handleCastRightClick}
              >
                <HiArrowSmRight size={20} />
              </div>
            </div>
          </div>
          {/* Cast Images */}
          <div className="flex items-start justify-start gap-3">
            <Carousel className="mt-10 flex items-center justify-center gap-8 w-full">
              <CarouselContent
                ref={castCarouselRef}
                className="flex overflow-x-scroll no-scrollbar -ml-1"
              >
                {cast.map((member, index) => (
                  <CarouselItem key={index} className="pl-1 lg:basis-auto ml-3">
                    <Link href={`/cast/${member.id}`}>
                      <Cast
                        name={member.name}
                        character={member.character || "Unknown"}
                        CastImage={member.profile_path}
                        gender={member.gender}
                      />
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="font-medium text-lg text-gray-400 mb-4">Reviews</h2>
        <div className="flex gap-4 overflow-x-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <ReviewCard
              key={index}
              profileImage="/images/img.png"
              username="User"
              rating={4}
              reviewText="Amazing movie!"
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default MovieDetailsPage;
