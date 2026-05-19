import { useState } from "react";
import Home from "./pages/Home";
import Edukasi from "./pages/Edukasi";
import Quiz from "./pages/Quiz";
import DariFilmKeBuku from "./pages/DariFilmKeBuku"; // ← tambah import ini

function App() {
  const [menu, setMenu] = useState("edukasi");

  const menus = [
    { id: "edukasi",       label: "🎬 Education" },
    { id: "rekomendasi",   label: "🔎 Recommendation" },
    { id: "filmbuku",      label: "📚 Film & Buku" },   // ← menu baru
    { id: "quiz",          label: "🧠 Quiz" },
  ];

  const getBtnStyle = (id) => ({
    background: menu === id ? "#3D6B6D" : "#6BA3A6",
    color: "white",
    border: menu === id ? "2.5px solid #FFB4A2" : "2.5px solid transparent",
    padding: "12px 22px",
    borderRadius: "24px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "all 0.25s ease",
    transform: menu === id ? "scale(1.06)" : "scale(1)",
    fontFamily: "inherit",
  });

  return (
    <div style={{ backgroundColor: "#F8F4FF", minHeight: "100vh", fontFamily: "'Segoe UI', Tahoma, sans-serif" }}>
      <nav style={{
        display: "flex", gap: "12px", justifyContent: "center",
        padding: "16px 20px", background: "#A8DADC",
        flexWrap: "wrap", boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
      }}>
        {menus.map((m) => (
          <button
            key={m.id}
            onClick={() => setMenu(m.id)}
            style={getBtnStyle(m.id)}
            onMouseEnter={(e) => {
              if (menu !== m.id) { e.currentTarget.style.background = "#FFDAC1"; e.currentTarget.style.color = "#3D405B"; }
            }}
            onMouseLeave={(e) => {
              if (menu !== m.id) { e.currentTarget.style.background = "#6BA3A6"; e.currentTarget.style.color = "white"; }
            }}
          >
            {m.label}
          </button>
        ))}
      </nav>

      {menu === "edukasi"     && <Edukasi />}
      {menu === "rekomendasi" && <Home />}
      {menu === "filmbuku"    && <DariFilmKeBuku />}   {/* ← render halaman baru */}
      {menu === "quiz"        && <Quiz />}
    </div>
  );
}

export default App;