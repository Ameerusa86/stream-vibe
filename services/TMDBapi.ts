import {
  ApiResponse,
  CastMember,
  CreditsResponse,
  Genre,
  Movie,
  PersonCast,
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

// Get Movie Genres
export const fetchGenres = async (): Promise<Genre[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Genre>>(
      "/genre/movie/list"
    );
    return response.data.genres || [];
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};

// Fetch trending movies with pagination
export const fetchTrendingMovies = async (
  page: number = 1
): Promise<Movie[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Movie>>(
      `/trending/movie/day`,
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

// Fetch combined Trending Movies and TV Shows per type
export const fetchTrendingMedia = async (
  type: "movie" | "tv",
  page: number = 1
): Promise<(Movie | TvShow)[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Movie | TvShow>>(
      `/trending/${type}/day`,
      {
        params: { page },
      }
    );
    return response.data.results || [];
  } catch (error) {
    console.error(`Error fetching trending ${type}s:`, error);
    throw error;
  }
};

// Fetch details for a specific movie
export const fetchMovieDetails = async (id: string): Promise<Movie> => {
  try {
    const response = await apiClient.get<Movie>(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for movie ID ${id}:`, error);
    throw error;
  }
};

// Fetch details for a specific TV show
export const fetchTvShowDetails = async (id: string): Promise<TvShow> => {
  try {
    const response = await apiClient.get<TvShow>(`/tv/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for TV show ID ${id}:`, error);
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

// Upcoming Movies
export const fetchUpcomingMovies = async (
  page: number = 1
): Promise<Movie[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Movie>>(
      "/movie/upcoming",
      {
        params: { page },
      }
    );
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw error;
  }
};

// Top Rated Movies & Tv shows
export const fetchTopRatedMedia = async (
  type: "movie" | "tv",
  page: number = 1
): Promise<Movie[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Movie>>(
      `/${type}/top_rated`,
      {
        params: { page },
      }
    );
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching top rated movies:", error);
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

// Fetch on the air TV shows with pagination
export const fetchOnTheAirTvShows = async (
  page: number = 1
): Promise<TvShow[]> => {
  try {
    const response = await apiClient.get<ApiResponse<TvShow>>(
      "/tv/on_the_air",
      {
        params: { page },
      }
    );
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching on the air TV shows:", error);
    throw error;
  }
};

// Discover Movies, used for filtering
export const discoverMovies = async (page: number = 1): Promise<Movie[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Movie>>(
      "/discover/movie",
      {
        params: { page },
      }
    );
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

// Discover TV Shows, used for filtering
export const discoverTvShows = async (page: number = 1): Promise<TvShow[]> => {
  try {
    const response = await apiClient.get<ApiResponse<TvShow>>("/discover/tv", {
      params: { page },
    });
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching TV shows:", error);
    throw error;
  }
};

// Search for Cast details for a specific movie and TV show
export const searchPersonDetails = async (
  query: string
): Promise<CreditsResponse> => {
  try {
    const response = await apiClient.get<CreditsResponse>(`/search/person`, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching credits for media ${query}:`, error);
    throw error;
  }
};

// Fetch details for a specific actor, including "Known For" movies
export const fetchPersonDetails = async (personId: number) => {
  try {
    // Fetch the actor's details
    const personDetails = await apiClient.get(`/person/${personId}`);
    // Fetch the actor's movie credits
    const movieCredits = await apiClient.get(
      `/person/${personId}/movie_credits`
    );

    return {
      ...personDetails.data,
      known_for: movieCredits.data.cast.slice(0, 10), // Top 10 movies sorted by popularity
    };
  } catch (error) {
    console.error(`Failed to fetch details for person ID ${personId}:`, error);
    throw new Error("Failed to fetch person details.");
  }
};
