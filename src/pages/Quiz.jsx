import { useState } from "react";

const soalPool = [
  // ── SOAL 1-10 ──
  {
    pertanyaan: "Apa kepanjangan LSF dalam perfilman Indonesia?",
    pilihan: ["Lembaga Sinema Film", "Lembaga Sensor Film", "Lembaga Sertifikasi Film", "Lembaga Standar Film"],
    jawaban: 1,
    pembahasan: "LSF adalah singkatan dari Lembaga Sensor Film, yang bertugas menentukan rating dan kelayakan film sebelum ditayangkan ke publik di Indonesia."
  },
  {
    pertanyaan: "Rating film apa yang artinya aman untuk semua umur?",
    pilihan: ["13+", "17+", "21+", "SU"],
    jawaban: 3,
    pembahasan: "SU singkatan dari 'Semua Umur', artinya film tersebut aman ditonton oleh siapa saja termasuk anak-anak."
  },
  {
    pertanyaan: "Film 'Laskar Pelangi' termasuk genre apa?",
    pilihan: ["Komedi", "Horor", "Drama", "Animasi"],
    jawaban: 2,
    pembahasan: "Laskar Pelangi adalah film drama yang mengangkat kisah nyata perjuangan 10 anak Belitung demi pendidikan."
  },
  {
    pertanyaan: "Genre film yang berlatar teknologi masa depan atau luar angkasa disebut?",
    pilihan: ["Fantasi", "Fiksi Ilmiah", "Petualangan", "Misteri"],
    jawaban: 1,
    pembahasan: "Fiksi Ilmiah (Sci-Fi) mengeksplorasi konsep teknologi futuristik, luar angkasa, robot/AI, atau sains imajiner."
  },
  {
    pertanyaan: "Mana yang BUKAN termasuk unsur analisis film?",
    pilihan: ["Sinematografi", "Akting", "Harga tiket bioskop", "Tema & Pesan"],
    jawaban: 2,
    pembahasan: "Harga tiket bukan bagian dari analisis film. Yang dianalisis adalah sinematografi, akting, musik, tema, dan pesan moral."
  },
  {
    pertanyaan: "Rating berapa yang TIDAK cocok ditonton pelajar SMP?",
    pilihan: ["SU", "13+", "21+", "Semua cocok"],
    jawaban: 2,
    pembahasan: "Rating 21+ hanya untuk orang dewasa penuh dan sama sekali tidak direkomendasikan untuk pelajar SMP."
  },
  {
    pertanyaan: "Film berdasarkan kisah nyata tokoh inspiratif termasuk genre apa?",
    pilihan: ["Dokumenter", "Biografi", "Drama", "Petualangan"],
    jawaban: 1,
    pembahasan: "Genre Biografi (Biopic) khusus untuk film yang dibuat berdasarkan kisah nyata kehidupan seseorang. Contoh: Soekarno, Hidden Figures."
  },
  {
    pertanyaan: "Festival film mana yang memberikan penghargaan bernama Palme d'Or?",
    pilihan: ["Oscars", "Festival Film Indonesia", "Cannes", "Venice"],
    jawaban: 2,
    pembahasan: "Palme d'Or adalah penghargaan tertinggi di Cannes Film Festival, Prancis — festival film paling bergengsi di dunia sejak 1946."
  },
  {
    pertanyaan: "Film 'Enola Holmes' termasuk genre apa?",
    pilihan: ["Fantasi", "Animasi", "Komedi", "Misteri"],
    jawaban: 3,
    pembahasan: "Enola Holmes adalah film misteri yang mengikuti petualangan adik Sherlock Holmes dalam memecahkan kasus."
  },
  {
    pertanyaan: "Apa yang sebaiknya PERTAMA dilakukan sebelum menonton film?",
    pilihan: ["Langsung tonton saja", "Cek rating filmnya dulu", "Tanya teman saja", "Lihat durasinya"],
    jawaban: 1,
    pembahasan: "Selalu cek rating film sebelum menonton agar kamu memastikan film tersebut sesuai dengan usiamu!"
  },

  // ── SOAL 11-20 ──
  {
    pertanyaan: "Film 'Wall-E' termasuk genre apa?",
    pilihan: ["Drama", "Biografi", "Fiksi Ilmiah", "Misteri"],
    jawaban: 2,
    pembahasan: "Wall-E adalah film Fiksi Ilmiah animasi dari Pixar yang berlatar bumi di masa depan, dengan pesan tentang menjaga lingkungan."
  },
  {
    pertanyaan: "Siapa yang disebut sebagai 'bapak sinema' karena menciptakan Cinématographe?",
    pilihan: ["Thomas Edison", "Charlie Chaplin", "Kakak-beradik Lumière", "Steven Spielberg"],
    jawaban: 2,
    pembahasan: "Auguste dan Louis Lumière menciptakan Cinématographe (1895) — alat yang pertama kali memproyeksikan film ke layar besar untuk banyak penonton."
  },
  {
    pertanyaan: "Film bersuara pertama di dunia adalah?",
    pilihan: ["Metropolis", "The Jazz Singer", "Casablanca", "Citizen Kane"],
    jawaban: 1,
    pembahasan: "'The Jazz Singer' (1927) adalah film bersuara pertama — revolusi besar karena penonton pertama kali bisa mendengar aktor berbicara langsung."
  },
  {
    pertanyaan: "Apa singkatan dari CGI dalam dunia film?",
    pilihan: ["Cinema Graphics Industry", "Computer-Generated Imagery", "Creative Graphics Innovation", "Cinematic Group Images"],
    jawaban: 1,
    pembahasan: "CGI (Computer-Generated Imagery) adalah teknik membuat gambar menggunakan komputer. Pertama kali populer lewat film Jurassic Park (1993)."
  },
  {
    pertanyaan: "Teknik kamera yang membuat penonton seolah melihat dari mata karakter disebut?",
    pilihan: ["Wide shot", "Close-up", "POV shot", "Aerial shot"],
    jawaban: 2,
    pembahasan: "POV (Point of View) shot membuat kamera mewakili sudut pandang mata karakter, membuat penonton merasa lebih terlibat dan empati."
  },
  {
    pertanyaan: "Pengambilan gambar yang sangat dekat ke wajah untuk menunjukkan emosi disebut?",
    pilihan: ["Wide shot", "Close-up", "Long shot", "Bird's eye view"],
    jawaban: 1,
    pembahasan: "Close-up adalah pengambilan gambar sangat dekat ke wajah. Digunakan untuk menunjukkan emosi detail — salah satu teknik paling powerful dalam film."
  },
  {
    pertanyaan: "Musik yang dibuat khusus untuk mengiringi adegan film disebut?",
    pilihan: ["Soundtrack", "Film score", "Jingle", "OST"],
    jawaban: 1,
    pembahasan: "Film score adalah musik latar yang dibuat khusus untuk film oleh komposer. Berbeda dengan soundtrack yang bisa berisi lagu populer yang ada di film."
  },
  {
    pertanyaan: "Film 'Moana' dari Disney termasuk genre apa?",
    pilihan: ["Drama", "Misteri", "Petualangan", "Biografi"],
    jawaban: 2,
    pembahasan: "Moana adalah film animasi bergenre Petualangan tentang putri kepala suku Polinesia yang berlayar mengarungi samudra untuk menyelamatkan rakyatnya."
  },
  {
    pertanyaan: "Apa yang dimaksud dengan 'spoiler' dalam dunia film?",
    pilihan: ["Efek suara film", "Bocoran cerita atau ending film", "Teknik pencahayaan", "Nama sutradara"],
    jawaban: 1,
    pembahasan: "Spoiler adalah informasi yang membocorkan bagian penting cerita — terutama twist atau ending. Dalam etika review, spoiler harus dihindari atau diberi peringatan."
  },
  {
    pertanyaan: "Festival film tertua di dunia yang diadakan di Venesia, Italia adalah?",
    pilihan: ["Cannes Film Festival", "Oscars", "Venice Film Festival", "Busan Film Festival"],
    jawaban: 2,
    pembahasan: "Venice Film Festival adalah festival film tertua di dunia, pertama kali diadakan tahun 1932 di Venesia, Italia. Penghargaan tertingginya adalah Golden Lion."
  },

  // ── SOAL 21-30 ──
  {
    pertanyaan: "Penghargaan film 'Piala Citra' diberikan di festival mana?",
    pilihan: ["Oscars", "Cannes", "Festival Film Indonesia (FFI)", "Busan"],
    jawaban: 2,
    pembahasan: "Piala Citra adalah penghargaan tertinggi di Festival Film Indonesia (FFI) yang diselenggarakan sejak 1955 sebagai tolok ukur kualitas perfilman Indonesia."
  },
  {
    pertanyaan: "Genre film yang membangun dunia imajinatif dengan sihir dan makhluk mitos disebut?",
    pilihan: ["Fiksi Ilmiah", "Fantasi", "Petualangan", "Horor"],
    jawaban: 1,
    pembahasan: "Fantasi membangun dunia yang tidak ada di realita — ada sihir, naga, peri. Contoh: Harry Potter, Narnia, Lord of the Rings."
  },
  {
    pertanyaan: "Film 'Hidden Figures' yang menceritakan ilmuwan NASA termasuk genre apa?",
    pilihan: ["Fiksi Ilmiah", "Fantasi", "Biografi", "Misteri"],
    jawaban: 2,
    pembahasan: "Hidden Figures (2016) adalah film Biografi yang mengangkat kisah nyata tiga ilmuwan perempuan kulit hitam yang membantu NASA memenangkan perlombaan luar angkasa."
  },
  {
    pertanyaan: "Orang yang bertanggung jawab atas pengambilan gambar dan pencahayaan film disebut?",
    pilihan: ["Sutradara", "Produser", "Director of Photography (DOP)", "Penulis naskah"],
    jawaban: 2,
    pembahasan: "Director of Photography (DOP) atau Sinematografer bertanggung jawab atas semua aspek visual film — pemilihan lensa, pergerakan kamera, dan pencahayaan."
  },
  {
    pertanyaan: "Platform streaming adalah layanan yang memungkinkan kita menonton film dengan cara?",
    pilihan: ["Harus beli DVD dulu", "Online tanpa perlu mengunduh", "Hanya di bioskop", "Meminjam dari perpustakaan"],
    jawaban: 1,
    pembahasan: "Streaming adalah layanan menonton film secara online tanpa perlu mengunduh. Contoh: Netflix, Disney+, dan Vidio."
  },
  {
    pertanyaan: "Alat pemutar film pertama buatan Thomas Edison yang hanya bisa ditonton satu orang disebut?",
    pilihan: ["Cinématographe", "Kinetoscope", "Phonograph", "Zoetrope"],
    jawaban: 1,
    pembahasan: "Kinetoscope adalah alat pemutar film buatan Thomas Edison (1891) yang hanya bisa ditonton satu orang dengan cara mengintip ke lubang kecil."
  },
  {
    pertanyaan: "Bintang paling terkenal di era film bisu adalah?",
    pilihan: ["Bruce Lee", "Charlie Chaplin", "Tom Hanks", "Leonardo DiCaprio"],
    jawaban: 1,
    pembahasan: "Charlie Chaplin adalah bintang paling terkenal di era film bisu (1890–1920an). Ia dikenal lewat karakter 'The Tramp' yang lucu namun menyentuh hati."
  },
  {
    pertanyaan: "Orang yang memimpin dan mengatur jalannya proses pembuatan film disebut?",
    pilihan: ["Produser", "Aktor", "Sutradara", "Editor"],
    jawaban: 2,
    pembahasan: "Sutradara (Director) adalah orang yang memimpin seluruh proses kreatif pembuatan film — dari pengarahan aktor hingga menentukan gaya visual cerita."
  },
  {
    pertanyaan: "Teks tertulis yang berisi dialog dan arahan dalam sebuah film disebut?",
    pilihan: ["Novel", "Naskah/Skenario", "Sinopsis", "Review"],
    jawaban: 1,
    pembahasan: "Naskah atau Skenario (screenplay) adalah teks tertulis yang berisi semua dialog, arahan akting, dan deskripsi adegan yang digunakan dalam proses produksi film."
  },
  {
    pertanyaan: "Film animasi 'Nussa' berasal dari negara mana?",
    pilihan: ["Malaysia", "Jepang", "Amerika Serikat", "Indonesia"],
    jawaban: 3,
    pembahasan: "Nussa adalah film animasi Indonesia yang diproduksi oleh The Little Giantz. Film ini menampilkan nilai-nilai islami dan budaya Indonesia yang kental."
  },

  // ── SOAL 31-40 ──
  {
    pertanyaan: "Ringkasan singkat isi film tanpa membocorkan cerita disebut?",
    pilihan: ["Review", "Sinopsis", "Trailer", "Spoiler"],
    jawaban: 1,
    pembahasan: "Sinopsis adalah ringkasan singkat isi film yang memberikan gambaran umum tanpa membocorkan twist atau ending. Berbeda dengan spoiler yang membocorkan cerita."
  },
  {
    pertanyaan: "Festival film terbesar di Asia yang diadakan di Korea Selatan adalah?",
    pilihan: ["Tokyo International Film Festival", "Busan International Film Festival", "Shanghai Film Festival", "Hong Kong Film Festival"],
    jawaban: 1,
    pembahasan: "Busan International Film Festival (BIFF) di Korea Selatan adalah festival film terbesar di Asia. Banyak film Korea pertama kali dikenal dunia setelah tayang di sini."
  },
  {
    pertanyaan: "Penghargaan film Academy Awards lebih dikenal dengan nama?",
    pilihan: ["Golden Globe", "Oscars", "BAFTA", "Grammy"],
    jawaban: 1,
    pembahasan: "Academy Awards dikenal luas dengan nama 'Oscars' — penghargaan film paling bergengsi di dunia yang diselenggarakan sejak tahun 1929."
  },
  {
    pertanyaan: "Kecepatan standar pemutaran film adalah berapa frame per detik?",
    pilihan: ["12 fps", "18 fps", "24 fps", "60 fps"],
    jawaban: 2,
    pembahasan: "Standar pemutaran film adalah 24 frame per detik (fps). Kecepatan ini membuat mata manusia melihatnya sebagai gerakan yang mulus dan natural."
  },
  {
    pertanyaan: "Film yang merupakan lanjutan cerita dari film sebelumnya disebut?",
    pilihan: ["Remake", "Prequel", "Sequel", "Reboot"],
    jawaban: 2,
    pembahasan: "Sequel adalah film lanjutan yang meneruskan cerita dari film sebelumnya. Contoh: Iron Man 2 adalah sequel dari Iron Man pertama."
  },
  {
    pertanyaan: "Film yang dibuat ulang dari film lama dengan versi baru disebut?",
    pilihan: ["Sequel", "Remake", "Spin-off", "Prequel"],
    jawaban: 1,
    pembahasan: "Remake adalah film yang dibuat ulang dari film lama dengan pemain, sutradara, atau gaya yang baru. Contoh: The Lion King versi live-action (2019) adalah remake dari versi animasi 1994."
  },
  {
    pertanyaan: "Studio animasi terkenal yang memproduksi Toy Story, Up, dan Finding Nemo adalah?",
    pilihan: ["DreamWorks", "Studio Ghibli", "Pixar", "Walt Disney Animation"],
    jawaban: 2,
    pembahasan: "Pixar Animation Studios adalah studio animasi di balik Toy Story, Up, Finding Nemo, Wall-E, dan banyak film animasi terkenal lainnya."
  },
  {
    pertanyaan: "Studio animasi Jepang terkenal yang memproduksi Spirited Away dan My Neighbor Totoro adalah?",
    pilihan: ["Toei Animation", "Madhouse", "Studio Ghibli", "Bones"],
    jawaban: 2,
    pembahasan: "Studio Ghibli adalah studio animasi Jepang legendaris yang didirikan oleh Hayao Miyazaki. Film-filmnya dikenal dengan animasi indah dan cerita penuh makna."
  },
  {
    pertanyaan: "Film 'Petualangan Sherina' termasuk genre apa?",
    pilihan: ["Drama", "Horor", "Petualangan", "Biografi"],
    jawaban: 2,
    pembahasan: "Petualangan Sherina (2000) adalah film bergenre Petualangan tentang Sherina dan Sadam yang terlibat dalam petualangan seru di perkebunan teh Bandung."
  },
  {
    pertanyaan: "Pengambilan gambar dari jarak jauh yang menampilkan keseluruhan karakter dan lingkungannya disebut?",
    pilihan: ["Close-up", "Medium shot", "Wide shot", "Extreme close-up"],
    jawaban: 2,
    pembahasan: "Wide shot mengambil gambar dari jarak jauh untuk menampilkan keseluruhan karakter dan lingkungannya. Digunakan untuk memperkenalkan lokasi atau menunjukkan skala."
  },

  // ── SOAL 41-50 ──
  {
    pertanyaan: "Film dokumenter berbeda dari film biasa karena?",
    pilihan: ["Selalu berwarna hitam putih", "Berdasarkan kejadian nyata tanpa rekayasa", "Selalu berdurasi pendek", "Tidak memiliki sutradara"],
    jawaban: 1,
    pembahasan: "Film dokumenter merekam dan menyajikan kejadian, orang, atau fenomena nyata tanpa rekayasa cerita. Tujuannya untuk menginformasikan atau mengedukasi penonton."
  },
  {
    pertanyaan: "Apa yang dimaksud dengan 'trailer' sebuah film?",
    pilihan: ["Film versi lengkap", "Cuplikan singkat untuk promosi", "Adegan yang dipotong dari film", "Subtitle film"],
    jawaban: 1,
    pembahasan: "Trailer adalah video promosi singkat (biasanya 2-3 menit) yang menampilkan cuplikan terbaik film untuk menarik minat penonton sebelum film dirilis."
  },
  {
    pertanyaan: "Proses pemberian warna, efek, dan penyesuaian visual film setelah syuting selesai disebut?",
    pilihan: ["Produksi", "Pra-produksi", "Pasca-produksi", "Distribusi"],
    jawaban: 2,
    pembahasan: "Pasca-produksi adalah tahap setelah syuting selesai, meliputi editing, penambahan efek visual (CGI), color grading, pengisian musik, dan dubbing."
  },
  {
    pertanyaan: "Genre film yang bertujuan utama membuat penonton merasa takut dan tegang disebut?",
    pilihan: ["Thriller", "Misteri", "Horor", "Aksi"],
    jawaban: 2,
    pembahasan: "Horor adalah genre film yang dirancang untuk membuat penonton merasa takut, tegang, dan bergidik. Biasanya mengandung unsur supranatural, monster, atau situasi berbahaya."
  },
  {
    pertanyaan: "Film animasi 'Zootopia' dari Disney menyampaikan pesan tentang apa?",
    pilihan: ["Pentingnya menjaga lingkungan", "Prasangka dan diskriminasi harus dihapuskan", "Persaingan dalam olahraga", "Teknologi masa depan"],
    jawaban: 1,
    pembahasan: "Zootopia (2016) menyampaikan pesan kuat tentang prasangka, stereotip, dan diskriminasi — bahwa siapapun bisa menjadi apapun yang mereka impikan tanpa dibatasi latar belakangnya."
  },
  {
    pertanyaan: "Komposer film terkenal yang membuat musik untuk Star Wars dan Harry Potter adalah?",
    pilihan: ["Hans Zimmer", "John Williams", "Ennio Morricone", "Danny Elfman"],
    jawaban: 1,
    pembahasan: "John Williams adalah komposer legendaris yang menciptakan musik ikonik untuk Star Wars, Harry Potter, Jurassic Park, dan Indiana Jones. Salah satu komposer terbesar sepanjang masa."
  },
  {
    pertanyaan: "Sebuah film spin-off adalah?",
    pilihan: ["Film lanjutan dari film sebelumnya", "Film yang menceritakan karakter sampingan dari film utama", "Film yang dibuat ulang", "Film pendek"],
    jawaban: 1,
    pembahasan: "Spin-off adalah film yang berfokus pada karakter atau cerita sampingan dari film utama. Contoh: Minions adalah spin-off dari Despicable Me."
  },
  {
    pertanyaan: "Penghargaan tertinggi di Venice Film Festival disebut?",
    pilihan: ["Palme d'Or", "Piala Citra", "Golden Lion", "Silver Bear"],
    jawaban: 2,
    pembahasan: "Golden Lion (Singa Emas) adalah penghargaan tertinggi di Venice Film Festival, Italia. Festival ini adalah yang tertua di dunia, pertama kali diadakan tahun 1932."
  },
  {
    pertanyaan: "Film 'Kung Fu Panda' diproduksi oleh studio animasi mana?",
    pilihan: ["Pixar", "Studio Ghibli", "DreamWorks Animation", "Walt Disney"],
    jawaban: 2,
    pembahasan: "Kung Fu Panda diproduksi oleh DreamWorks Animation. Film ini bercerita tentang panda bernama Po yang bermimpi menjadi pendekar kung fu dan sarat pesan tentang percaya diri."
  },
  {
    pertanyaan: "Apa fungsi utama rating usia pada sebuah film?",
    pilihan: ["Menentukan harga tiket", "Membantu penonton memilih film sesuai usia", "Menentukan kualitas film", "Menentukan durasi film"],
    jawaban: 1,
    pembahasan: "Rating usia berfungsi untuk membantu penonton — terutama orang tua — memilih film yang sesuai dengan usia anak. Rating dibuat oleh lembaga seperti LSF di Indonesia."
  },
];

const SOAL_PER_SESI = 10; // jumlah soal yang diambil tiap sesi
const abcd = ["A", "B", "C", "D"];

// Ambil n soal secara acak dari pool — dijamin tidak mengulang soal yang sama
function pickRandom(pool, n) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

// ── WARNA PALETTE B ──
const C = {
  teal: "#5C9EA1",
  tealDark: "#3D6B6D",
  card: "#B5EAD7",
  cardBorder: "#9EDDD0",
  apricot: "#FFDAC1",
  peach: "#FFB4A2",
  sage: "#A8DADC",
  text: "#3D405B",
  sub: "#6B7080",
  correct: { bg: "#C8EFE0", border: "#4A8B6F", text: "#2D5A3F" },
  wrong:   { bg: "#FFE4D6", border: "#C0755A", text: "#7A3820" },
  neutral: { bg: "#EAF6F8", border: "#5C9EA1" },
};

// ── CELEBRATION ──
function Celebration({ show }) {
  if (!show) return null;
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    emoji: ["🎉", "⭐", "🏆", "✨", "🎊", "💫", "🌟"][i % 7],
    left: 4 + (i * 4.8) % 91,
    delay: (i * 130) % 1800,
    size: 22 + (i % 3) * 10,
  }));
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 999, overflow: "hidden" }}>
      {particles.map((p) => (
        <div key={p.id} style={{ position: "absolute", left: `${p.left}%`, bottom: "-60px", fontSize: `${p.size}px`, animation: `floatUp 2.4s ease-out ${p.delay}ms forwards` }}>
          {p.emoji}
        </div>
      ))}
      <style>{`@keyframes floatUp { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 85% { opacity: 1; } 100% { transform: translateY(-110vh) rotate(420deg); opacity: 0; } }`}</style>
    </div>
  );
}

function Quiz() {
  const [fase, setFase]           = useState("start");
  const [idx, setIdx]             = useState(0);
  const [jawabans, setJawabans]   = useState([]);
  const [dipilih, setDipilih]     = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [soalAktif, setSoalAktif] = useState([]);
  const [celebrate, setCelebrate] = useState(false);
  const [sesiKe, setSesiKe]       = useState(0); // tracking sesi ke berapa

  const skorSementara = jawabans.filter((j, i) => j === soalAktif[i]?.jawaban).length;

  const mulai = () => {
    const soalBaru = pickRandom(soalPool, SOAL_PER_SESI); // ← ambil 10 soal beda tiap sesi
    setSoalAktif(soalBaru);
    setSesiKe((prev) => prev + 1);
    setFase("quiz");
    setIdx(0);
    setJawabans([]);
    setDipilih(null);
    setShowFeedback(false);
    setCelebrate(false);
  };

  const pilih = (i) => {
    if (dipilih !== null) return;
    setDipilih(i);
    setShowFeedback(true);
  };

  const lanjut = () => {
    const newJawabans = [...jawabans, dipilih];
    setJawabans(newJawabans);
    if (idx + 1 >= soalAktif.length) {
      const finalSkor = newJawabans.filter((j, i) => j === soalAktif[i].jawaban).length;
      setFase("result");
      if (finalSkor >= 7) {
        setCelebrate(true);
        setTimeout(() => setCelebrate(false), 4000);
      }
    } else {
      setIdx(idx + 1);
      setDipilih(null);
      setShowFeedback(false);
    }
  };

  const getInfo = (s) => {
    if (s >= 9) return { emoji: "🏆", pesan: "Luar biasa! Kamu ahli literasi film!", warna: "#4A8B6F", bg: "#B5EAD7" };
    if (s >= 7) return { emoji: "⭐", pesan: "Bagus banget! Kamu paham banyak soal film!", warna: "#5C9EA1", bg: "#A8DADC" };
    if (s >= 5) return { emoji: "👍", pesan: "Lumayan! Coba baca lagi materi Education ya!", warna: "#7A6AA8", bg: "#E8DAFF" };
    return           { emoji: "📖", pesan: "Semangat! Yuk pelajari lagi di halaman Education!", warna: "#B07850", bg: "#FFDAC1" };
  };

  const btnStyle = () => ({
    background: C.teal, color: "white", border: "none",
    padding: "13px 38px", borderRadius: "14px", fontSize: "15px",
    fontWeight: "bold", cursor: "pointer", transition: "0.3s", fontFamily: "inherit",
  });

  const getBtnPilihanStyle = (i) => {
    let bg = "white", border = `2px solid ${C.cardBorder}`, color = C.text;
    if (showFeedback) {
      if (i === soalAktif[idx].jawaban)    { bg = C.correct.bg; border = `2px solid ${C.correct.border}`; color = C.correct.text; }
      else if (i === dipilih)              { bg = C.wrong.bg;   border = `2px solid ${C.wrong.border}`;   color = C.wrong.text; }
    } else if (dipilih === i) {
      bg = C.neutral.bg; border = `2px solid ${C.neutral.border}`;
    }
    return {
      background: bg, border, color,
      padding: "14px 18px", borderRadius: "12px", textAlign: "left", width: "100%",
      cursor: dipilih !== null ? "default" : "pointer",
      fontSize: "15px", fontWeight: "500", transition: "all 0.2s", fontFamily: "inherit",
    };
  };

  // ── LAYAR START ──
  if (fase === "start") return (
    <div style={{ maxWidth: "580px", margin: "0 auto", padding: "70px 24px", textAlign: "center", fontFamily: "'Segoe UI', Tahoma, sans-serif" }}>
      <div style={{ fontSize: "80px", marginBottom: "16px" }}>🧠</div>
      <h1 style={{ color: C.teal, marginBottom: "12px", fontSize: "28px", fontWeight: "800" }}>
        Mini Movie Quiz
      </h1>
      <p style={{ color: C.sub, fontSize: "15px", lineHeight: "1.8", marginBottom: "20px" }}>
        Uji seberapa jauh kamu paham soal film!
      </p>

      <div style={{ background: C.card, borderRadius: "16px", padding: "18px 24px", display: "inline-block", marginBottom: "36px", border: `1.5px solid ${C.peach}` }}>
        <p style={{ margin: 0, color: C.text, fontSize: "14px", lineHeight: "2" }}>
          📋 <b>{SOAL_PER_SESI} soal</b> per sesi &nbsp;|&nbsp;
          🎲 Dipilih acak dari <b>{soalPool.length} soal</b><br />
          💡 Ada pembahasan tiap soal &nbsp;|&nbsp;
          🔄 Soal beda tiap sesi!
        </p>
      </div>
      <br />
      <button
        onClick={mulai}
        style={btnStyle()}
        onMouseEnter={(e) => { e.currentTarget.style.background = C.apricot; e.currentTarget.style.color = C.text; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = C.teal; e.currentTarget.style.color = "white"; }}
      >
        🚀 Mulai Quiz!
      </button>
    </div>
  );

  // ── LAYAR RESULT ──
  if (fase === "result") {
    const skor = jawabans.filter((j, i) => j === soalAktif[i].jawaban).length;
    const info = getInfo(skor);
    return (
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 24px", fontFamily: "'Segoe UI', Tahoma, sans-serif" }}>
        <Celebration show={celebrate} />

        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ fontSize: "80px", marginBottom: "12px", display: "inline-block", animation: skor >= 7 ? "bounce 0.7s ease infinite alternate" : "none" }}>
            {info.emoji}
          </div>
          <h1 style={{ color: C.teal, marginBottom: "6px", fontSize: "26px", fontWeight: "800" }}>Hasil Quizmu!</h1>
          <p style={{ color: C.sub, fontSize: "13px", marginBottom: "18px" }}>Sesi ke-{sesiKe}</p>
          <div style={{ background: info.bg, borderRadius: "22px", padding: "28px 48px", display: "inline-block", boxShadow: "0 6px 24px rgba(0,0,0,0.08)", border: `2px solid ${info.warna}40` }}>
            <p style={{ fontSize: "64px", fontWeight: "800", color: info.warna, margin: 0, lineHeight: 1 }}>
              {skor}<span style={{ fontSize: "28px", color: C.sub, fontWeight: "400" }}>/{soalAktif.length}</span>
            </p>
            <p style={{ margin: "12px 0 0", color: C.text, fontSize: "15px", fontWeight: "700" }}>{info.pesan}</p>
          </div>
        </div>

        <h3 style={{ color: C.teal, marginBottom: "14px", fontSize: "17px", fontWeight: "700" }}>📋 Review Jawaban</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
          {soalAktif.map((s, i) => {
            const benar = jawabans[i] === s.jawaban;
            return (
              <div key={i} style={{ background: benar ? C.correct.bg : C.wrong.bg, borderRadius: "12px", padding: "14px 18px", borderLeft: `5px solid ${benar ? C.correct.border : C.wrong.border}` }}>
                <p style={{ margin: "0 0 5px", fontSize: "14px", color: C.text, fontWeight: "600" }}>
                  Soal {i + 1}: {s.pertanyaan}
                </p>
                <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: "700", color: benar ? C.correct.text : C.wrong.text }}>
                  {benar ? "✅ Benar!" : `❌ Salah — Jawaban: ${s.pilihan[s.jawaban]}`}
                </p>
                {!benar && (
                  <p style={{ margin: 0, fontSize: "13px", color: C.sub, fontStyle: "italic" }}>
                    💡 {s.pembahasan}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Info soal berikutnya */}
        <div style={{ background: C.card, borderRadius: "12px", padding: "14px 18px", marginBottom: "24px", border: `1px solid ${C.cardBorder}`, textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: "13px", color: C.sub }}>
            🎲 Masih ada <b style={{ color: C.teal }}>{soalPool.length - SOAL_PER_SESI}</b> soal lain yang belum kamu kerjakan. Coba lagi untuk soal yang berbeda!
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            onClick={mulai}
            style={btnStyle()}
            onMouseEnter={(e) => { e.currentTarget.style.background = C.apricot; e.currentTarget.style.color = C.text; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = C.teal; e.currentTarget.style.color = "white"; }}
          >
            🔄 Coba Lagi — Soal Baru!
          </button>
        </div>

        <style>{`@keyframes bounce { from { transform: translateY(0); } to { transform: translateY(-14px); } }`}</style>
      </div>
    );
  }

  // ── LAYAR QUIZ ──
  const s = soalAktif[idx];

  return (
    <div style={{ maxWidth: "660px", margin: "0 auto", padding: "32px 24px", fontFamily: "'Segoe UI', Tahoma, sans-serif" }}>

      {/* Progress */}
      <div style={{ marginBottom: "30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: C.sub, marginBottom: "8px" }}>
          <span>Soal <b style={{ color: C.text }}>{idx + 1}</b> dari <b style={{ color: C.text }}>{soalAktif.length}</b></span>
          <span>✅ <b style={{ color: C.correct.text }}>{skorSementara}</b> benar</span>
        </div>
        <div style={{ height: "10px", background: "#E0F0F1", borderRadius: "99px", overflow: "hidden" }}>
          <div style={{ height: "10px", background: `linear-gradient(to right, ${C.sage}, ${C.teal})`, borderRadius: "99px", width: `${(idx / soalAktif.length) * 100}%`, transition: "width 0.5s ease" }} />
        </div>
      </div>

      {/* Kotak soal */}
      <div style={{ background: C.card, borderRadius: "18px", padding: "28px", marginBottom: "22px", boxShadow: "0 4px 16px rgba(0,0,0,0.07)", border: `2px solid ${C.cardBorder}` }}>
        <p style={{ margin: "0 0 10px", fontSize: "12px", color: C.sub, fontWeight: "700", letterSpacing: "1.5px" }}>
          PERTANYAAN {idx + 1}
        </p>
        <h2 style={{ margin: 0, color: C.text, fontSize: "18px", lineHeight: "1.65", fontWeight: "700" }}>
          {s.pertanyaan}
        </h2>
      </div>

      {/* Pilihan */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
        {s.pilihan.map((p, i) => (
          <button key={i} onClick={() => pilih(i)} style={getBtnPilihanStyle(i)}>
            <span style={{ fontWeight: "800", marginRight: "12px", background: C.sage, color: C.tealDark, borderRadius: "6px", padding: "3px 9px", fontSize: "13px" }}>
              {abcd[i]}
            </span>
            {p}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div>
          <div style={{ background: dipilih === s.jawaban ? C.correct.bg : C.wrong.bg, border: `2px solid ${dipilih === s.jawaban ? C.correct.border : C.wrong.border}`, borderRadius: "14px", padding: "16px 20px", marginBottom: "16px" }}>
            <p style={{ margin: "0 0 8px", fontWeight: "700", fontSize: "15px", color: dipilih === s.jawaban ? C.correct.text : C.wrong.text }}>
              {dipilih === s.jawaban ? "✅ Jawaban Benar!" : `❌ Salah! Jawaban yang benar: ${s.pilihan[s.jawaban]}`}
            </p>
            <p style={{ margin: 0, fontSize: "14px", color: C.text, lineHeight: "1.75" }}>
              💡 <b>Pembahasan:</b> {s.pembahasan}
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={lanjut}
              style={btnStyle()}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.apricot; e.currentTarget.style.color = C.text; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = C.teal; e.currentTarget.style.color = "white"; }}
            >
              {idx + 1 >= soalAktif.length ? "Lihat Hasil 🏆" : "Lanjut →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;