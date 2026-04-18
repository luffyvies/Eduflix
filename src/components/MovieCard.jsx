import { motion } from "framer-motion";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  // TMDB hanya memberikan path gambar, kita perlu gabungkan dengan Base URL gambar mereka
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <motion.div
      className="movie-card"
      whileHover={{ scale: 1.05 }} // Efek membesar saat kursor diarahkan
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={imageUrl} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <span className="movie-rating">⭐ {movie.vote_average.toFixed(1)}</span>
      </div>
    </motion.div>
  );
}
