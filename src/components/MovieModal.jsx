import { motion, AnimatePresence } from "framer-motion";
import "./MovieModal.css";

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const providers = movie["watch/providers"]?.results?.ID?.flatrate || [];

  const mapRating = (rating) => {
    if (rating === "G") return "Semua Umur (SU)";
    if (rating === "PG" || rating === "PG-13") return "13+";
    if (rating === "R") return "17+";
    if (rating === "NC-17") return "21+";
    return "Tidak diketahui";
  };

  // ✅ Warna badge disesuaikan ke Palette B
  const getColor = (rating) => {
    const mapped = mapRating(rating);
    if (mapped === "Semua Umur (SU)") return { bg: "#B5EAD7", text: "#2D5A3F" }; // sage
    if (mapped === "13+")             return { bg: "#A8DADC", text: "#2D5A5C" }; // aqua
    if (mapped === "17+")             return { bg: "#FFDAC1", text: "#7A3820" }; // apricot
    if (mapped === "21+")             return { bg: "#FFB4A2", text: "#7A2828" }; // peach
    return                                   { bg: "#D3D1C7", text: "#444441" }; // abu-abu
  };

  const ratingColor = getColor(movie.ageRating);

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          className="modal-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ✅ Tombol close disesuaikan Palette B */}
          <button
            className="close-btn"
            onClick={onClose}
            style={{
              position: "absolute",
              top: "14px",
              right: "16px",
              background: "#FFB4A2",
              color: "#7A2828",
              border: "none",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3D6B6D";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFB4A2";
              e.currentTarget.style.color = "#7A2828";
            }}
          >
            &times;
          </button>

          <div className="modal-body">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <div className="modal-text">
              {/* ✅ Judul */}
              <h2 style={{ color: "#3D6B6D", fontSize: "22px", fontWeight: "800", margin: "0 0 12px" }}>
                {movie.title} ({movie.release_date?.split("-")[0]})
              </h2>

              {/* ✅ Badge rating */}
              <p style={{ marginTop: "8px", marginBottom: "12px" }}>
                <strong style={{ color: "#6B7080" }}>Rating Usia: </strong>
                <span
                  style={{
                    backgroundColor: ratingColor.bg,
                    color: ratingColor.text,
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "700",
                    marginLeft: "6px",
                    border: `1px solid ${ratingColor.text}30`,
                  }}
                >
                  {mapRating(movie.ageRating)}
                </span>
              </p>

              {/* ✅ Sinopsis */}
              <p
                className="synopsis"
                style={{ color: "#3D405B", fontSize: "14px", lineHeight: "1.75" }}
              >
                {movie.overview || "Sinopsis tidak tersedia."}
              </p>

              {/* ✅ Platform streaming */}
              <div className="platform-section">
                <h4 style={{ color: "#5C9EA1", fontSize: "14px", fontWeight: "700", margin: "16px 0 10px" }}>
                  Tersedia di:
                </h4>
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
                    <span style={{ color: "#6B7080", fontSize: "13px", fontStyle: "italic" }}>
                      Cek di bioskop atau toko digital terdekat.
                    </span>
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