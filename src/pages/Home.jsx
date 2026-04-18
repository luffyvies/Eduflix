import { useState, useEffect } from "react";
import {
  getMoviesByGenre,
  searchMovies,
  getMovieDetails,
} from "../services/tmdb";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal"; // Import komponen Modal
import "./Home.css";

const GENRES = [
  { id: 28, name: "Action" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 878, name: "Sci-Fi" },
];

// Opsi filter usia tambahan
const AGE_LIMITS = [
  { value: "G", label: "Semua Umur (G)" },
  { value: "PG", label: "Anak & Remaja (PG)" },
  { value: "PG-13", label: "Remaja Maks 15 Thn (PG-13)" },
];

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(28);
  const [searchQuery, setSearchQuery] = useState("");

  // STATE BARU UNTUK LANGKAH 3
  const [ageLimit, setAgeLimit] = useState("PG-13"); // Default usia SMP
  const [selectedMovie, setSelectedMovie] = useState(null); // Data film untuk Modal
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      let data = [];

      if (searchQuery.trim() !== "") {
        data = await searchMovies(searchQuery);
      } else {
        // Kirimkan state activeGenre DAN ageLimit ke API
        data = await getMoviesByGenre(activeGenre, ageLimit);
      }

      setMovies(data);
      setIsLoading(false);
    };

    const delayDebounce = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [activeGenre, searchQuery, ageLimit]); // Tambahkan ageLimit ke array dependency

  // FUNGSI BARU: Menangani klik kartu film
  const handleMovieClick = async (movie) => {
    // Ambil detail lengkap (termasuk info platform streaming) dari API
    const fullDetail = await getMovieDetails(movie.id);
    // Jika API gagal, gunakan data dasar dari kartu. Jika berhasil, gunakan data lengkap.
    setSelectedMovie(fullDetail || movie);
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>🎬 TeenMovie Picks</h1>
        <p>Rekomendasi film paling seru dan aman untuk menemanimu!</p>

        <input
          type="text"
          className="search-bar"
          placeholder="Cari judul film..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>

      {/* Tampilkan filter Usia dan Genre hanya jika tidak sedang mencari */}
      {searchQuery === "" && (
        <div className="filters-container">
          {/* UI Filter Usia */}
          <div className="filter-bar age-filters">
            {AGE_LIMITS.map((age) => (
              <button
                key={age.value}
                className={`filter-btn ${ageLimit === age.value ? "active" : ""}`}
                onClick={() => setAgeLimit(age.value)}
              >
                {age.label}
              </button>
            ))}
          </div>

          {/* UI Filter Genre */}
          <div className="filter-bar genre-filters">
            {GENRES.map((genre) => (
              <button
                key={genre.id}
                className={`filter-btn ${activeGenre === genre.id ? "active" : ""}`}
                onClick={() => setActiveGenre(genre.id)}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="loading-state">Mencari film...</div>
      ) : movies.length === 0 ? (
        <div className="loading-state">Yah, filmnya tidak ditemukan 🤔</div>
      ) : (
        <div className="movie-grid">
          {movies.map(
            (movie) =>
              movie.poster_path && (
                // Bungkus MovieCard dengan div yang memiliki event onClick
                <div key={movie.id} onClick={() => handleMovieClick(movie)}>
                  <MovieCard movie={movie} />
                </div>
              ),
          )}
        </div>
      )}

      {/* RENDER MODAL: Jika ada film yang dipilih, tampilkan komponen MovieModal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
