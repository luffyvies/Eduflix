import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Ganti dengan API Key milikmu
const BASE_URL = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "id-ID", // Data dalam Bahasa Indonesia jika tersedia
  },
});

export const getMoviesByGenre = async (genreId) => {
  try {
    const response = await tmdbApi.get("/discover/movie", {
      params: {
        with_genres: genreId,
        // Filter Utama: Rating PG-13 (cocok untuk usia 13+)
        certification_country: "US",
        "certification.lte": "PG-13",
        sort_by: "popularity.desc",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Gagal mengambil data film:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await tmdbApi.get("/search/movie", {
      params: {
        query: query,
        include_adult: false, // Filter bawaan TMDB untuk memblokir film dewasa
        language: "id-ID",
      },
    });
    // Opsional: Filter tambahan di sisi klien (Client-side) jika ingin lebih ketat
    // Misalnya membuang film horror/thriller yang mungkin lolos
    const safeResults = response.data.results.filter(
      (movie) => !movie.genre_ids.includes(27), // 27 adalah ID untuk Horror
    );

    return safeResults;
  } catch (error) {
    console.error("Gagal mencari film:", error);
    return [];
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`, {
      params: { append_to_response: "watch/providers" },
    });
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil detail film:", error);
    return null;
  }
};

export default tmdbApi;
