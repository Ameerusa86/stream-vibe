import {
  ApiResponse,
  CastMember,
  CreditsResponse,
  Movie,
  TvShow,
} from "@/Types/types";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API;

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Fetch popular movies with pagination
export const fetchMovies = async (page: number = 1): Promise<Movie[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Movie>>("/movie/popular", {
      params: { page },
    });
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

// Fetch trending movies with pagination
export const fetchTrendingMovies = async (
  page: number = 1
): Promise<Movie[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Movie>>(
      "/trending/movie/day",
      {
        params: { page },
      }
    );
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

// Fetch trending TV shows with pagination
export const fetchTvShows = async (page: number = 1): Promise<TvShow[]> => {
  try {
    const response = await apiClient.get<ApiResponse<TvShow>>(
      "/trending/tv/day",
      {
        params: { page },
      }
    );
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching TV shows:", error);
    throw error;
  }
};

// Fetch details for a specific movie
export const fetchMovieDetails = async (movieId: number): Promise<Movie> => {
  try {
    const response = await apiClient.get<Movie>(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for movie ID ${movieId}:`, error);
    throw error;
  }
};

// Fetch details for a specific TV show
export const fetchTvShowDetails = async (tvShowId: number): Promise<TvShow> => {
  try {
    const response = await apiClient.get<TvShow>(`/tv/${tvShowId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for TV show ID ${tvShowId}:`, error);
    throw error;
  }
};

// Fetch cast and crew for a specific movie by ID
export const fetchMovieCredits = async (
  movieId: number
): Promise<CreditsResponse> => {
  try {
    const response = await apiClient.get<CreditsResponse>(
      `/movie/${movieId}/credits`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching credits for movie ID ${movieId}:`, error);
    throw error;
  }
};

// Fetch cast and crew for a specific TV show by ID
export const fetchTvShowCredits = async (
  tvShowId: number
): Promise<CreditsResponse> => {
  try {
    const response = await apiClient.get<CreditsResponse>(
      `/tv/${tvShowId}/credits`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching credits for TV show ID ${tvShowId}:`, error);
    throw error;
  }
};

// Get latest movies with pagination
export const fetchLatestMovies = async (page: number = 1): Promise<Movie[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Movie>>(
      "/movie/now_playing",
      {
        params: { page },
      }
    );
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching latest movies:", error);
    throw error;
  }
};

// Search for both movies and TV shows with pagination
export const fetchSearchResults = async (
  query: string,
  page: number = 1
): Promise<(Movie | TvShow)[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Movie | TvShow>>(
      "/search/multi",
      {
        params: {
          query,
          page,
        },
      }
    );
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};

// Fetch details for a specific cast member
export const fetchCastDetails = async (castId: number): Promise<CastMember> => {
  try {
    const response = await apiClient.get<CastMember>(`/person/${castId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for cast ID ${castId}:`, error);
    throw error;
  }
};
