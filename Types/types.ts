// types/types.ts

// Genre interface representing each genre's structure
export interface Genre {
  id: number;
  name: string;
}

// Movie interface representing the structure of movie data
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview?: string;
  release_date?: string;
  genres?: Genre[];
  backdrop_path?: string;
}

// TvShow interface representing the structure of TV show data
export interface TvShow {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
  overview?: string;
  first_air_date?: string;
  genres?: Genre[];
  backdrop_path?: string;
}

// Generic API response structure, which can be used for various endpoints
export interface ApiResponse<T> {
  genres?: T[]; // Updated for genre responses
  page?: number;
  results?: T[];
  total_pages?: number;
  total_results?: number;
}

// Props for the Header component, including a title string
export interface HeaderProps {
  title: string;
}

// Props for the MovieCard component
export interface MovieCardProps {
  movie: Movie;
}

// Props for the TvShowCard component
export interface TvShowCardProps {
  tvShow: TvShow;
}

// Props for a reusable Card component that can accept either Movie or TvShow arrays
export interface CardProps {
  data: (Movie | TvShow)[];
}

export interface CastMember {
  id: number;
  name: string;
  character?: string;
  profile_path?: string;
}

export interface CreditsResponse {
  id: number;
  cast: CastMember[];
  crew: CastMember[];
}
