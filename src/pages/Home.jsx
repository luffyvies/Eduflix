import { useState, useEffect } from "react";
import {
  getMoviesByGenre,
  searchMovies,
  getMovieDetails,
} from "../services/tmdb";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import "./Home.css";

const GENRES = [
  { id: 28,  name: "Action" },
  { id: 16,  name: "Animation" },
  { id: 35,  name: "Comedy" },
  { id: 878, name: "Sci-Fi" },
];

const AGE_LIMITS = [
  { value: "G",     certMax: "PG",    label: "Semua Umur (SU)" },
  { value: "PG-13", certMax: "PG-13", label: "Remaja (PG-13)" },
];

export default function Home() {
  const [movies, setMovies]           = useState([]);
  const [activeGenre, setActiveGenre] = useState(28);
  const [searchQuery, setSearchQuery] = useState("");
  const [ageLimit, setAgeLimit]       = useState("PG-13");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading]     = useState(false);

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const filterByAge = (movies, ageLimit) => {
    const order = ["G", "PG", "PG-13", "R", "NC-17"];
    const maxIndex = order.indexOf(ageLimit);

    return movies.filter((movie) => {
      if (movie.adult) return false;

      // Kalau tidak ada data rating → percaya filter API, tampilkan ✅
      if (!movie.ageRating || movie.ageRating === "Unknown" || movie.ageRating === "") {
      return true;
    }

    const movieIndex = order.indexOf(movie.ageRating);
      if (movieIndex === -1) return true;
      return movieIndex <= maxIndex;
    });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      let data = [];
      const activeCert = AGE_LIMITS.find((a) => a.value === ageLimit)?.certMax || "PG-13";

      if (searchQuery.trim() !== "") {
        data = await searchMovies(searchQuery);
      } else {
        const randomPage = Math.floor(Math.random() * 5) + 1;
        data = await getMoviesByGenre(activeGenre, randomPage, activeCert);
      }

      const filtered = filterByAge(data, ageLimit);
      const shuffled = shuffleArray(filtered);
      setMovies(shuffled);
      setIsLoading(false);
    };

    const delayDebounce = setTimeout(fetchMovies, 500);
    return () => clearTimeout(delayDebounce);
  }, [activeGenre, searchQuery, ageLimit]);

  const handleMovieClick = async (movie) => {
    const fullDetail = await getMovieDetails(movie.id);
    setSelectedMovie(fullDetail || movie);
  };

  return (
    <div className="home-container">

      {/* HEADER */}
      <header className="header">
        <div className="header-icon">🎬</div>
        <h1 className="header-title">Movie Recommendation</h1>
        <p className="header-sub">Rekomendasi film seru buat kamu!</p>
        <input
          type="text"
          className="search-bar"
          placeholder="🔍  Cari judul film..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>

      {/* FILTER */}
      {searchQuery === "" && (
        <div className="filters-container">
          <div className="filter-section-label">Pilih Rating Usia</div>
          <div className="filter-bar age-filters">
            {AGE_LIMITS.map((age) => (
              <button
                key={age.value}
                className={`filter-btn age-btn ${ageLimit === age.value ? "active" : ""}`}
                onClick={() => setAgeLimit(age.value)}
              >
                {age.label}
              </button>
            ))}
          </div>

          <div className="filter-section-label">Pilih Genre</div>
          <div className="filter-bar genre-filters">
            {GENRES.map((genre) => (
              <button
                key={genre.id}
                className={`filter-btn genre-btn ${activeGenre === genre.id ? "active" : ""}`}
                onClick={() => setActiveGenre(genre.id)}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* KONTEN */}
      {isLoading ? (
        <div className="loading-state">
          <div className="loading-spinner">🎬</div>
          <p>Mencari film untukmu...</p>
        </div>
      ) : movies.length === 0 ? (
        <div className="loading-state">
          <div className="loading-spinner">🤔</div>
          <p>Filmnya tidak ditemukan. Coba kata kunci lain!</p>
        </div>
      ) : (
        <>
          <p className="result-count">
            Menampilkan <b>{movies.length}</b> film
          </p>
          <div className="movie-grid">
            {movies.map(
              (movie) =>
                movie.poster_path && (
                  <div
                    key={movie.id}
                    className="movie-card-wrapper"
                    onClick={() => handleMovieClick(movie)}
                  >
                    <MovieCard movie={movie} />
                  </div>
                )
            )}
          </div>
        </>
      )}

      {/* MODAL */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}