import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "id-ID",
  },
});

// 🎬 GET MOVIE BY GENRE + FILTER RATING LANGSUNG DARI TMDB
export const getMoviesByGenre = async (genreId, page = 1, certificationMax = "PG-13") => {
  try {
    const response = await tmdbApi.get("/discover/movie", {
      params: {
        with_genres: genreId,
        sort_by: "popularity.desc",
        include_adult: false,
        page: page,
        certification_country: "US",       // ← pakai sistem rating US sebagai referensi
        "certification.lte": certificationMax, // ← filter maks rating dari TMDB langsung
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Gagal mengambil data film:", error);
    return [];
  }
};

// 🔍 SEARCH MOVIE
export const searchMovies = async (query) => {
  try {
    const response = await tmdbApi.get("/search/movie", {
      params: {
        query: query,
        include_adult: false,
      },
    });

    // 🔥 filter tambahan biar lebih aman (opsional)
    const safeResults = response.data.results.filter(
      (movie) => !movie.genre_ids.includes(27) // buang horror
    );

    return safeResults;
  } catch (error) {
    console.error("Gagal mencari film:", error);
    return [];
  }
};

// 🎬 DETAIL FILM
export const getMovieDetails = async (movieId) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`, {
      params: {
        append_to_response: "watch/providers,release_dates",
      },
    });

    // 🔥 ambil data US rating
    const usRelease = response.data.release_dates.results.find(
      (r) => r.iso_3166_1 === "US"
    );

    let certification = "Unknown";

    if (usRelease && usRelease.release_dates.length > 0) {
      certification =
        usRelease.release_dates[0].certification || "Unknown";
    }

    return {
      ...response.data,
      ageRating: certification,
    };
  } catch (error) {
    console.error("Gagal mengambil detail film:", error);
    return null;
  }
};

export default tmdbApi;