import { useState } from "react";

const data = [
  {
    emoji: "🎞️",
    title: "Apa itu Film?",
    short: "Pengertian dasar film sebagai media audio-visual",
    full: "Film adalah rangkaian gambar diam yang diputar cepat (~[24 frame/detik]) sehingga tampak bergerak. Film merupakan media [audio-visual] yang menggabungkan seni [musik], [teater], dan [sastra] untuk menyampaikan cerita dan emosi kepada penonton. Film juga termasuk bagian dari [literasi digital] yang penting dipahami.",
    terms: {
      "24 frame/detik": "Kecepatan 24 gambar per detik adalah standar perfilman. Mata manusia melihatnya sebagai gerakan mulus karena keterbatasan visual yang disebut 'persistence of vision'.",
      "audio-visual": "Media audio-visual menggabungkan suara (audio) dan gambar (visual) sekaligus. Berbeda dengan buku (hanya visual) atau radio (hanya audio).",
      "musik": "Musik film (film score) berperan besar membangun suasana. Komposer seperti Hans Zimmer (Interstellar, Lion King) bisa membuat penonton lebih terlibat dengan cerita.",
      "teater": "Teater adalah seni pertunjukan langsung di panggung. Film mengadopsi teknik teater seperti akting, blocking, dan penyampaian dialog.",
      "sastra": "Sastra (novel, cerpen, puisi) sering menjadi dasar naskah film. Contoh: Harry Potter diadaptasi dari novel J.K. Rowling.",
      "literasi digital": "Kemampuan memahami, menggunakan, dan mengevaluasi media digital secara kritis — termasuk film, media sosial, dan konten online.",
    }
  },
  {
    emoji: "📜",
    title: "Sejarah Film",
    short: "Perkembangan film dari zaman ke zaman",
    full: "Film bermula dari penemuan [Kinetoscope] oleh [Thomas Edison] (1891), lalu [Cinématographe] oleh [kakak-beradik Lumière] (1895). Era [film bisu] (1890–1920an) → [film bersuara] (1927) → [film berwarna] → [CGI & digital] (1990an) → era [streaming] yang kita nikmati sekarang!",
    terms: {
      "Kinetoscope": "Alat pemutar film buatan Thomas Edison (1891) yang hanya bisa ditonton satu orang dengan cara mengintip ke lubang kecil. Belum bisa diproyeksikan ke layar besar.",
      "Thomas Edison": "Thomas Alva Edison (1847–1931) adalah penemu Amerika yang juga menciptakan bola lampu. Ia mendirikan studio film pertama di dunia bernama 'Black Maria' di New Jersey.",
      "Cinématographe": "Kamera sekaligus proyektor film buatan Lumière bersaudara (1895) — pertama kali memproyeksikan film ke layar besar untuk banyak penonton sekaligus.",
      "kakak-beradik Lumière": "Auguste dan Louis Lumière adalah 'bapak sinema'. Film pertama mereka 'L'Arrivée d'un train' (1895) konon membuat penonton lari ketakutan karena terasa begitu nyata!",
      "film bisu": "Film tanpa suara dialog (1890–1920an). Aktor berakting sangat ekspresif, dan ada teks di layar. Bintang paling terkenal era ini adalah Charlie Chaplin.",
      "film bersuara": "'The Jazz Singer' (1927) adalah film bersuara pertama — revolusi besar karena pertama kali penonton bisa mendengar aktor berbicara langsung.",
      "film berwarna": "Sebelum 1930an semua film hitam-putih. Teknologi Technicolor hadir 1930an. 'The Wizard of Oz' (1939) adalah salah satu film berwarna paling awal yang sangat terkenal.",
      "CGI & digital": "CGI (Computer-Generated Imagery) adalah gambar buatan komputer. 'Jurassic Park' (1993) menjadi tonggak revolusi CGI dengan dinosaurus yang sangat realistis.",
      "streaming": "Layanan nonton film online tanpa perlu mengunduh. Contoh: Netflix, Disney+, Vidio. Streaming mengubah total cara orang menonton film di seluruh dunia.",
    }
  },
  {
    emoji: "🎭",
    title: "Genre Film",
    short: "Jenis-jenis film beserta ciri khasnya",
    full: "Genre adalah kategori film berdasarkan gaya cerita:\n\n🎭 [Drama] — mengangkat kehidupan nyata dengan emosi mendalam.\n😂 [Komedi] — bertujuan menghibur dan membuat tertawa.\n🚀 [Fiksi Ilmiah] — berlatar teknologi masa depan atau luar angkasa.\n🧙 [Fantasi] — dunia imajinatif dengan sihir dan petualangan.\n🔍 [Misteri] — mengajak penonton memecahkan teka-teki.\n🗺️ [Petualangan] — perjalanan seru ke tempat baru.\n📖 [Biografi] — berdasarkan kisah nyata tokoh inspiratif.\n🎨 [Animasi] — dibuat dengan teknik animasi, cocok semua usia.",
    terms: {
      "Drama": "Fokus pada konflik emosional dan hubungan antar manusia. Contoh: Laskar Pelangi, Parasite (Korea). Ciri khas: cerita realistis, akting intens, pesan moral yang kuat.",
      "Komedi": "Membuat penonton tertawa lewat situasi lucu atau dialog jenaka. Ada Komedi Romantis, Slapstick (fisik/konyol), dan Satir (sindiran sosial). Contoh: Home Alone, Petualangan Sherina.",
      "Fiksi Ilmiah": "Sci-Fi mengeksplorasi 'bagaimana jika teknologi berkembang jauh?' Tema umum: perjalanan waktu, robot/AI, alien, luar angkasa. Contoh: Wall-E, Interstellar, Star Wars.",
      "Fantasi": "Membangun dunia yang tidak ada di realita — ada sihir, naga, peri. Berbeda dari Sci-Fi karena tidak menggunakan sains sebagai penjelasan. Contoh: Harry Potter, Narnia.",
      "Misteri": "Berpusat pada teka-teki yang harus dipecahkan. Penonton diajak berpikir mencari pelakunya. Contoh: Enola Holmes, Knives Out.",
      "Petualangan": "Menampilkan perjalanan seru ke tempat baru dengan berbagai rintangan. Sering dikombinasikan genre lain. Contoh: Moana, Indiana Jones, Petualangan Sherina.",
      "Biografi": "Film berdasarkan kisah nyata seseorang. Contoh: Soekarno (2013), Hidden Figures (2016), Bohemian Rhapsody. Sering menginspirasi penonton.",
      "Animasi": "Bisa 2D, 3D/CGI, atau stop-motion. Indonesia punya Nussa dan Jumbo. Studio terkenal: Pixar, Studio Ghibli, DreamWorks.",
    }
  },
  {
    emoji: "🏷️",
    title: "Rating Usia Film",
    short: "Panduan memilih film sesuai usiamu",
    full: "Rating usia dikeluarkan oleh [LSF] Indonesia:\n\n✅ [SU] — Semua Umur, aman untuk siapa saja.\n🔵 [13+] — Cocok untuk remaja SMP ke atas.\n🟠 [17+] — Perlu dampingan orang tua jika ditonton remaja.\n🔴 [21+] — Hanya untuk orang dewasa.\n\nDi luar negeri juga dikenal sistem [MPAA] dari Amerika yang sering muncul di film Hollywood.",
    terms: {
      "LSF": "Lembaga Sensor Film — lembaga negara Indonesia yang bertugas menilai dan menentukan kelayakan film sebelum ditayangkan ke publik, berdasarkan UU No. 33 Tahun 2009.",
      "SU": "SU (Semua Umur) artinya tidak ada konten berbahaya untuk usia manapun. Contoh: Nussa, Moana, Wall-E, dan kebanyakan film animasi anak.",
      "13+": "Boleh mengandung sedikit konflik atau tema lebih kompleks. Cocok untuk remaja SMP. Orang tua tetap disarankan mendampingi jika anak di bawah 13 tahun.",
      "17+": "Mengandung tema dewasa. Untuk pelajar SMP, sebaiknya minta izin dan dampingan orang tua terlebih dahulu.",
      "21+": "Hanya untuk orang dewasa penuh. TIDAK direkomendasikan untuk pelajar SMP dalam kondisi apapun.",
      "MPAA": "Motion Picture Association of America — sistem rating film AS: G (semua umur), PG (Parental Guidance), PG-13 (13+), R (17+), NC-17 (dewasa). Sering kamu lihat di film Hollywood.",
    }
  },
  {
    emoji: "🔍",
    title: "Analisis Film",
    short: "Cara memahami dan mengapresiasi film",
    full: "Menganalisis film bukan hanya soal suka atau tidak. Perhatikan:\n\n🎥 [Sinematografi] — cara kamera bergerak dan pencahayaan.\n🎭 [Akting] — apakah ekspresi dan dialog terasa natural?\n🎵 [Scoring] — apakah musik mendukung suasana film?\n📖 [Tema & Pesan] — apa yang ingin disampaikan sutradara?\n🌍 [Latar] — apakah setting mendukung cerita?\n🎬 Sudut kamera: [close-up], [wide shot], dan [POV] punya makna berbeda!",
    terms: {
      "Sinematografi": "Seni mengambil gambar dalam film — mencakup pemilihan lensa, pergerakan kamera, dan pencahayaan. Orang yang bertanggung jawab disebut Director of Photography (DOP).",
      "Akting": "Seni memerankan karakter secara meyakinkan. Metode: Method Acting (menghayati benar-benar), Stanislavski (teknik umum di sekolah teater), Meisner (fokus pada reaksi alami).",
      "Scoring": "Musik latar yang dibuat khusus untuk film. Komposer terkenal: Hans Zimmer (Interstellar), John Williams (Star Wars, Harry Potter). Musik bisa mengubah suasana scene secara drastis!",
      "Tema & Pesan": "Ide utama yang ingin disampaikan sutradara. Contoh: Wall-E → jaga lingkungan. Laskar Pelangi → semangat belajar meski terbatas. Inilah yang membuat film bermakna lebih dari hiburan.",
      "Latar": "Setting mencakup tempat, waktu, dan suasana cerita berlangsung. Production designer bertugas merancang semua elemen visual setting.",
      "close-up": "Pengambilan gambar sangat dekat, biasanya fokus ke wajah. Digunakan untuk menunjukkan emosi detail — salah satu teknik paling powerful dalam bercerita lewat film.",
      "wide shot": "Mengambil gambar dari jarak jauh untuk menampilkan keseluruhan karakter dan lingkungannya. Digunakan memperkenalkan lokasi baru atau menunjukkan skala.",
      "POV": "Point of View — kamera mewakili sudut pandang mata karakter. Penonton seolah melihat langsung dari mata sang tokoh, membuat lebih empati dan terlibat.",
    }
  },
  {
    emoji: "✍️",
    title: "Menulis Review",
    short: "Cara membuat ulasan film yang baik",
    full: "Review film yang baik terdiri dari:\n\n1️⃣ [Premis] — ringkasan singkat tanpa [spoiler].\n2️⃣ [Kelebihan] — apa yang membuat film ini menarik?\n3️⃣ [Kekurangan] — tidak ada film yang sempurna, jujurlah!\n4️⃣ [Pesan Moral] — apa yang kamu pelajari setelah menonton?\n5️⃣ [Skor/Rating] — berikan nilai dari 1–10!\n\nReviewer legendaris seperti [Roger Ebert] punya pengaruh besar dalam dunia perfilman.",
    terms: {
      "Premis": "Ringkasan singkat 2-3 kalimat tentang film tanpa membocorkan cerita. Contoh premis Moana: 'Putri kepala suku Polinesia berlayar mengarungi samudra untuk menyelamatkan rakyatnya.'",
      "spoiler": "Informasi yang membocorkan bagian penting cerita — terutama twist atau ending. Dalam etika review, spoiler harus dihindari atau diberi peringatan 'SPOILER ALERT!'",
      "Kelebihan": "Bisa berupa akting memukau, sinematografi indah, cerita orisinal, atau musik emosional. Berikan contoh spesifik dari adegan — jangan hanya bilang 'filmnya bagus'.",
      "Kekurangan": "Jujur membuat review-mu lebih dipercaya. Kekurangan bisa berupa plot hole, pacing lambat, dialog tidak natural, atau karakter yang kurang berkembang.",
      "Pesan Moral": "Nilai kehidupan yang bisa diambil dari film. Ini yang membedakan film berkualitas dari film biasa. Contoh: Hidden Figures → tidak ada batasan bagi siapapun untuk berprestasi.",
      "Skor/Rating": "Skala umum: 1-10 atau bintang 1-5. Platform review: IMDb, Rotten Tomatoes, dan Letterboxd — kamu bisa buat akun dan tulis review filmmu sendiri di sana!",
      "Roger Ebert": "Kritikus film Amerika paling berpengaruh (1942–2013). Menulis review film selama 46 tahun. Sistem 'jempol ke atas/bawah' yang ia populerkan masih digunakan secara universal.",
    }
  },
  {
    emoji: "🏆",
    title: "Festival Film",
    short: "Ajang penghargaan film paling bergengsi",
    full: "Festival film adalah bentuk apresiasi karya sinema terbaik:\n\n🌍 [Cannes] — festival paling bergengsi, hadiah utama [Palme d'Or].\n🏆 [Oscars] — penghargaan film Amerika paling terkenal di dunia.\n🦁 [Venice Film Festival] — festival film tertua di dunia sejak 1932.\n🇮🇩 [FFI] — ajang bergengsi untuk perfilman dalam negeri.\n🎌 [Busan] — festival film terbesar di Asia.\n\nMenang festival bisa membuat film dikenal jutaan orang di seluruh dunia!",
    terms: {
      "Cannes": "Cannes Film Festival diselenggarakan tiap tahun di Prancis Selatan sejak 1946. Festival paling bergengsi di dunia — film dari seluruh dunia bersaing mendapat perhatian internasional.",
      "Palme d'Or": "Palme d'Or ('Daun Palem Emas') adalah penghargaan tertinggi di Festival Cannes. Film Asia yang pernah menang: Parasite (2019, Korea) — sejarah karena pertama kali film non-Inggris menang Oscar Best Picture juga.",
      "Oscars": "Academy Awards sejak 1929 — penghargaan film paling terkenal di dunia. Kategori utama: Best Picture, Best Director, Best Actor/Actress. Patung Oscar tingginya 34 cm, berlapis emas.",
      "Venice Film Festival": "Festival film tertua di dunia (1932) di Venesia, Italia. Penghargaan tertinggi: Golden Lion (Singa Emas). Film Asia sering mendapat sorotan besar di sini.",
      "FFI": "Festival Film Indonesia sejak 1955. Penghargaan tertinggi: Piala Citra. FFI menjadi tolok ukur kualitas perfilman Indonesia dan ajang bagi sineas muda berbakat.",
      "Busan": "Busan International Film Festival (BIFF) di Korea Selatan sejak 1996. Festival film terbesar di Asia — banyak film Korea pertama kali dikenal dunia setelah tayang di sini.",
    }
  }
];

// ── WARNA PALETTE B ──
const C = {
  page: "#F8F4FF",
  card: "#B5EAD7",
  cardHover: "#FFDAC1",
  modal: "#F0EBFF",
  keyword: "#FFDAC1",
  keywordText: "#7A4A3C",
  keywordBorder: "#FFB4A2",
  keywordHover: "#A8DADC",
  keywordHoverText: "#2D5A5C",
  bubbleBorder: "#FFB4A2",
  btn: "#5C9EA1",
  btnHoverBg: "#FFDAC1",
  btnHoverText: "#3D405B",
  text: "#3D405B",
  textSub: "#6B7080",
  accent: "#FFB4A2",
  teal: "#5C9EA1",
};

// ── RENDERABLE TEXT dengan kata kunci yang bisa diklik ──
function RenderableText({ text, terms, onClickTerm }) {
  const allMatches = [];
  for (const term of Object.keys(terms)) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\[${escaped}\\]`, "g");
    let match;
    while ((match = regex.exec(text)) !== null) {
      allMatches.push({ index: match.index, length: match[0].length, term });
    }
  }
  allMatches.sort((a, b) => a.index - b.index);

  const renderText = (str, keyPrefix) =>
    str.split("\n").map((line, i, arr) => (
      <span key={`${keyPrefix}-${i}`}>
        {line}
        {i < arr.length - 1 && <br />}
      </span>
    ));

  if (allMatches.length === 0) return <>{renderText(text, "all")}</>;

  const parts = [];
  let lastIndex = 0;
  for (const match of allMatches) {
    const before = text.slice(lastIndex, match.index);
    if (before) parts.push(...renderText(before, `b-${match.index}`));

    parts.push(
      <span
        key={`term-${match.index}`}
        onClick={(e) => { e.stopPropagation(); onClickTerm(match.term, e); }}
        style={{
          background: C.keyword,
          color: C.keywordText,
          borderRadius: "6px",
          padding: "2px 8px",
          cursor: "pointer",
          fontWeight: "700",
          fontSize: "14px",
          border: `1.5px solid ${C.keywordBorder}`,
          display: "inline-block",
          transition: "all 0.15s",
          textDecoration: "underline dotted",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = C.keywordHover;
          e.currentTarget.style.color = C.keywordHoverText;
          e.currentTarget.style.border = "1.5px solid #7ABFBF";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = C.keyword;
          e.currentTarget.style.color = C.keywordText;
          e.currentTarget.style.border = `1.5px solid ${C.keywordBorder}`;
        }}
      >
        {match.term} ✦
      </span>
    );
    lastIndex = match.index + match.length;
  }

  const after = text.slice(lastIndex);
  if (after) parts.push(...renderText(after, "after"));

  return <>{parts}</>;
}

function Edukasi() {
  const [selected, setSelected] = useState(null);
  const [bubble, setBubble]     = useState(null);

  const handleClickTerm = (term, e) => {
    if (bubble && bubble.term === term) { setBubble(null); return; }
    const rect = e.currentTarget.getBoundingClientRect();
    setBubble({
      term,
      explanation: selected.terms[term],
      x: rect.left + window.scrollX,
      y: rect.bottom + window.scrollY + 10,
    });
  };

  const closeModal  = () => { setSelected(null); setBubble(null); };
  const closeBubble = () => setBubble(null);

  return (
    <div style={{ padding: "36px 24px", fontFamily: "'Segoe UI', Tahoma, sans-serif" }}>

      {/* HEADER */}
      <h1 style={{ textAlign: "center", color: C.teal, marginBottom: "6px", fontSize: "30px", fontWeight: "800" }}>
        🎬 Movie Education
      </h1>
      <p style={{ textAlign: "center", color: C.textSub, fontSize: "15px", marginBottom: "10px" }}>
        Klik kartu untuk membaca penjelasan lebih lengkap!
      </p>
      <div style={{ textAlign: "center", marginBottom: "34px" }}>
        <span style={{
          background: C.keyword, borderRadius: "20px", padding: "6px 16px",
          fontSize: "13px", color: C.keywordText, fontWeight: "700",
          border: `1px solid ${C.keywordBorder}`,
        }}>
          ✦ Klik kata berwarna di dalam penjelasan untuk detail lebih lanjut
        </span>
      </div>

      {/* GRID KARTU */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        gap: "20px",
        maxWidth: "1050px",
        margin: "0 auto",
      }}>
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => { setSelected(item); setBubble(null); }}
            style={{
              background: C.card,
              borderRadius: "18px",
              padding: "26px 22px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
              border: "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C.cardHover;
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.12)";
              e.currentTarget.style.border = `2px solid ${C.accent}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = C.card;
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.06)";
              e.currentTarget.style.border = "2px solid transparent";
            }}
          >
            {/* Emoji besar */}
            <div style={{ fontSize: "48px", marginBottom: "14px", lineHeight: 1 }}>
              {item.emoji}
            </div>
            <h2 style={{ margin: "0 0 8px", fontSize: "17px", color: C.text, fontWeight: "700" }}>
              {item.title}
            </h2>
            <p style={{ margin: "0 0 14px", fontSize: "14px", color: C.textSub, lineHeight: "1.6" }}>
              {item.short}
            </p>
            <p style={{ margin: 0, fontSize: "12px", color: C.teal, fontWeight: "700" }}>
              💬 {Object.keys(item.terms).length} kata kunci interaktif →
            </p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0, left: 0, width: "100%", height: "100%",
            background: "rgba(61,64,91,0.5)",
            display: "flex", justifyContent: "center", alignItems: "center",
            animation: "fadeIn 0.3s ease",
            zIndex: 100,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: C.modal,
              padding: "32px",
              borderRadius: "22px",
              maxWidth: "650px",
              width: "92%",
              maxHeight: "83vh",
              overflowY: "auto",
              boxShadow: "0 24px 60px rgba(0,0,0,0.16)",
              animation: "scaleIn 0.3s ease",
              border: `2px solid ${C.accent}`,
            }}
          >
            <div style={{ fontSize: "52px", marginBottom: "12px" }}>{selected.emoji}</div>
            <h2 style={{ color: C.teal, marginTop: 0, fontSize: "23px", fontWeight: "800" }}>
              {selected.title}
            </h2>

            {/* Hint bar */}
            <div style={{
              background: C.keyword, borderRadius: "10px", padding: "10px 16px",
              marginBottom: "20px", fontSize: "13px", color: C.keywordText,
              fontWeight: "700", border: `1px solid ${C.keywordBorder}`,
            }}>
              ✦ Klik kata yang disorot untuk penjelasan lebih detail!
            </div>

            <p style={{ lineHeight: "2.1", fontSize: "15px", color: C.text, margin: 0 }}>
              <RenderableText
                text={selected.full}
                terms={selected.terms}
                onClickTerm={handleClickTerm}
              />
            </p>

            <button
              onClick={closeModal}
              style={{
                marginTop: "24px", background: C.teal, color: "white",
                border: "none", padding: "12px 26px", borderRadius: "12px",
                cursor: "pointer", transition: "0.3s", fontWeight: "700",
                fontSize: "15px", fontFamily: "inherit",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.btnHoverBg; e.currentTarget.style.color = C.btnHoverText; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = C.teal; e.currentTarget.style.color = "white"; }}
            >
              Tutup ✕
            </button>
          </div>
        </div>
      )}

      {/* BUBBLE TOOLTIP */}
      {bubble && (
        <div
          style={{
            position: "absolute",
            top: bubble.y,
            left: Math.min(bubble.x, window.innerWidth - 360),
            width: "335px",
            background: "white",
            border: `2px solid ${C.bubbleBorder}`,
            borderRadius: "16px",
            padding: "18px 20px",
            boxShadow: "0 12px 36px rgba(0,0,0,0.14)",
            zIndex: 200,
            animation: "scaleIn 0.2s ease",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <span style={{
              background: C.keyword, color: C.keywordText,
              padding: "4px 14px", borderRadius: "20px",
              fontWeight: "800", fontSize: "13px",
              border: `1px solid ${C.keywordBorder}`,
            }}>
              ✦ {bubble.term}
            </span>
            <button
              onClick={closeBubble}
              style={{ background: "none", border: "none", fontSize: "22px", cursor: "pointer", color: "#aaa", padding: "0 4px" }}
            >×</button>
          </div>
          <p style={{ margin: 0, fontSize: "14px", color: C.text, lineHeight: "1.75" }}>
            {bubble.explanation}
          </p>
        </div>
      )}

      <style>{`
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.85); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}

export default Edukasi;