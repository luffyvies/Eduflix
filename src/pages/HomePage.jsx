import { useState, useEffect } from "react";

const features = [
  {
    icon: "🎬",
    title: "Education",
    desc: "Pelajari dunia film dari dasar — genre, sejarah, rating, sampai cara menulis review.",
    color: "#3D6B6D",
    menuId: "edukasi",
  },
  {
    icon: "🔎",
    title: "Recommendation",
    desc: "Temukan film yang cocok buat kamu berdasarkan mood, genre, dan selera.",
    color: "#6BA3A6",
    menuId: "rekomendasi",
  },
  {
    icon: "📚",
    title: "Book & Movie",
    desc: "Eksplorasi film yang diadaptasi dari buku, dan sebaliknya.",
    color: "#E08C6E",
    menuId: "filmbuku",
  },
  {
    icon: "🧠",
    title: "Quiz",
    desc: "Uji pengetahuan film kamu lewat kuis seru dan interaktif.",
    color: "#A06CA4",
    menuId: "quiz",
  },
];

const floatingItems = ["🎞️", "🍿", "🎭", "⭐", "🎥", "📽️", "🎬", "🏆"];

export default function HomePage({ onNavigate }) {
  const [visible, setVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={styles.wrapper}>
      {/* Floating background emojis */}
      {floatingItems.map((item, i) => (
        <span key={i} style={{ ...styles.floatingEmoji, ...getFloatStyle(i) }}>
          {item}
        </span>
      ))}

      {/* Hero Section */}
      <div
        style={{
          ...styles.hero,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div style={styles.badgePill}>✨ Platform Literasi Film Indonesia</div>

        <h1 style={styles.heroTitle}>
          Selamat Datang di{" "}
          <span style={styles.brandName}>Eduflix</span>
        </h1>

        <p style={styles.heroSub}>
          Tempat belajar, mengeksplorasi, dan mencintai dunia film — dari sejarah
          sinema hingga rekomendasi terbaik untukmu.
        </p>

        <div style={styles.heroBtns}>
          <button
            style={styles.btnSecondary}
            onClick={() => onNavigate("edukasi")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3D6B6D";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#3D6B6D";
            }}
          >
            Mulai Belajar 🎬
          </button>
          <button
            style={styles.btnSecondary}
            onClick={() => onNavigate("rekomendasi")}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3D6B6D";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#3D6B6D";
            }}
          >
            Cari Film 🔎
          </button>
        </div>

        {/* Stats Row */}
        <div style={styles.statsRow}>
          {[
            { num: "7+", label: "Topik Edukasi" },
            { num: "4", label: "Fitur Utama" },
            { num: "∞", label: "Film Seru" },
          ].map((s, i) => (
            <div key={i} style={styles.statItem}>
              <span style={styles.statNum}>{s.num}</span>
              <span style={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider wave */}
      <div style={styles.waveDivider}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" fillOpacity="0.5" />
        </svg>
      </div>

      {/* Feature Cards */}
      <div style={styles.cardsSection}>
        <p style={styles.sectionLabel}>— Apa yang bisa kamu lakukan? —</p>
        <div style={styles.cardsGrid}>
          {features.map((f, i) => (
            <div
              key={f.menuId}
              style={{
                ...styles.card,
                opacity: visible ? 1 : 0,
                transform: visible
                  ? hoveredCard === i
                    ? "translateY(-8px) scale(1.03)"
                    : "translateY(0) scale(1)"
                  : "translateY(30px)",
                transition: `opacity 0.6s ease ${0.15 + i * 0.1}s, transform 0.3s ease`,
                borderTop: `4px solid ${f.color}`,
              }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => onNavigate(f.menuId)}
            >
              <span style={styles.cardIcon}>{f.icon}</span>
              <h3 style={{ ...styles.cardTitle, color: f.color }}>{f.title}</h3>
              <p style={styles.cardDesc}>{f.desc}</p>
              <span style={{ ...styles.cardCta, color: f.color }}>
                Buka fitur →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer tagline */}
      <div style={styles.footer}>
        <span>🎞️ Eduflix — Belajar Film, Lebih Menyenangkan</span>
      </div>
    </div>
  );
}

function getFloatStyle(i) {
  const positions = [
    { top: "8%", left: "4%", animDelay: "0s", size: "2rem", opacity: 0.12 },
    { top: "15%", right: "6%", animDelay: "1.2s", size: "2.6rem", opacity: 0.1 },
    { top: "40%", left: "2%", animDelay: "0.6s", size: "1.8rem", opacity: 0.09 },
    { top: "55%", right: "3%", animDelay: "2s", size: "2.2rem", opacity: 0.11 },
    { top: "70%", left: "8%", animDelay: "0.9s", size: "1.6rem", opacity: 0.08 },
    { top: "80%", right: "10%", animDelay: "1.5s", size: "2.4rem", opacity: 0.1 },
    { top: "25%", left: "88%", animDelay: "0.3s", size: "1.9rem", opacity: 0.09 },
    { top: "62%", left: "92%", animDelay: "1.8s", size: "1.7rem", opacity: 0.08 },
  ];
  return {
    ...positions[i],
    fontSize: positions[i].size,
    opacity: positions[i].opacity,
    animation: `floatDrift 6s ease-in-out ${positions[i].animDelay} infinite alternate`,
  };
}

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    background: "linear-gradient(160deg, #A8DADC 0%, #C9EBF0 35%, #F0F9FF 60%, #FFF4EE 100%)",
    overflow: "hidden",
    fontFamily: "'Segoe UI', Tahoma, sans-serif",
  },
  floatingEmoji: {
    position: "absolute",
    userSelect: "none",
    pointerEvents: "none",
    zIndex: 0,
  },
  hero: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    padding: "72px 24px 48px",
    maxWidth: "720px",
    margin: "0 auto",
  },
  badgePill: {
    display: "inline-block",
    background: "rgba(61,107,109,0.12)",
    color: "#3D6B6D",
    border: "1px solid rgba(61,107,109,0.25)",
    borderRadius: "999px",
    padding: "6px 18px",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "0.03em",
    marginBottom: "22px",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    fontWeight: "800",
    color: "#2C4A4B",
    lineHeight: 1.15,
    margin: "0 0 18px",
    letterSpacing: "-0.02em",
  },
  brandName: {
    color: "#3D6B6D",
    background: "linear-gradient(135deg, #3D6B6D, #6BA3A6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroSub: {
    fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
    color: "#5A7A7C",
    lineHeight: 1.7,
    maxWidth: "560px",
    margin: "0 auto 36px",
  },
  heroBtns: {
    display: "flex",
    gap: "14px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "48px",
  },
  btnPrimary: {
    background: "#3D6B6D",
    color: "white",
    border: "none",
    padding: "14px 32px",
    borderRadius: "999px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(61,107,109,0.3)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    fontFamily: "inherit",
  },
  btnSecondary: {
    background: "transparent",
    color: "#3D6B6D",
    border: "2px solid #3D6B6D",
    padding: "13px 30px",
    borderRadius: "999px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "background 0.2s ease, color 0.2s ease",
    fontFamily: "inherit",
  },
  statsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },
  statNum: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "#3D6B6D",
    lineHeight: 1,
  },
  statLabel: {
    fontSize: "12px",
    color: "#7A9EA0",
    fontWeight: "600",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  waveDivider: {
    position: "relative",
    zIndex: 1,
    marginTop: "-10px",
  },
  cardsSection: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px 80px",
  },
  sectionLabel: {
    textAlign: "center",
    color: "#7A9EA0",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "32px",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "white",
    borderRadius: "20px",
    padding: "28px 24px",
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  cardIcon: {
    fontSize: "2.2rem",
    lineHeight: 1,
  },
  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: "800",
    margin: 0,
  },
  cardDesc: {
    fontSize: "13.5px",
    color: "#6B7E80",
    lineHeight: 1.6,
    margin: 0,
    flex: 1,
  },
  cardCta: {
    fontSize: "13px",
    fontWeight: "700",
    marginTop: "6px",
  },
  footer: {
    textAlign: "center",
    padding: "0 0 32px",
    color: "#7A9EA0",
    fontSize: "13px",
    fontWeight: "500",
    position: "relative",
    zIndex: 1,
  },
};

// Inject float animation keyframes
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes floatDrift {
      0%   { transform: translateY(0px) rotate(0deg); }
      100% { transform: translateY(-18px) rotate(8deg); }
    }
  `;
  document.head.appendChild(style);
}
