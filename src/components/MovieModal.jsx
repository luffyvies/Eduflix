import { motion, AnimatePresence } from "framer-motion";
import "./MovieModal.css";

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  // Mengambil data platform streaming (misal: region Indonesia 'ID')
  const providers = movie["watch/providers"]?.results?.ID?.flatrate || [];

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          className="modal-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>

          <div className="modal-body">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="modal-text">
              <h2>
                {movie.title} ({movie.release_date?.split("-")[0]})
              </h2>
              <p className="synopsis">
                {movie.overview || "Sinopsis tidak tersedia."}
              </p>

              <div className="platform-section">
                <h4>Tersedia di:</h4>
                <div className="platform-list">
                  {providers.length > 0 ? (
                    providers.map((p) => (
                      <img
                        key={p.provider_id}
                        src={`https://image.tmdb.org/t/p/original${p.logo_path}`}
                        title={p.provider_name}
                        alt={p.provider_name}
                      />
                    ))
                  ) : (
                    <span>Cek di bioskop atau toko digital terdekat.</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
