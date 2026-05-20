import { useState } from "react";

const BASE = "https://perpus-tower.alfalahsby.sch.id/index.php?keywords=";

const daftarFilm = [
  {
    emoji: "🌈",
    film: "Laskar Pelangi",
    buku: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    genre: "Drama",
    tahun: 2008,
    warna: "#A8DADC",
    link: BASE + "laskar+pelangi&search=Search",
    caraCari: "Cari kata kunci Laskar Pelangi atau Andrea Hirata di katalog perpustakaan.",
    sinopsis: "Kisah 10 anak Belitung yang berjuang demi pendidikan di sekolah paling sederhana di Indonesia.",
    beda: [
      "Novel jauh lebih detail menggambarkan masa kecil Ikal selama bertahun-tahun.",
      "Film hanya mengambil inti cerita SD, sedangkan novel mencakup perjalanan hidup hingga dewasa.",
      "Banyak karakter dan kejadian di novel yang tidak masuk ke film karena keterbatasan durasi.",
      "Emosi di novel lebih dalam karena diceritakan dari sudut pandang orang pertama.",
    ],
  },
  {
    emoji: "💌",
    film: "Dilan 1990",
    buku: "Dilan Dia adalah Dilanku Tahun 1990",
    penulis: "Pidi Baiq",
    genre: "Romansa",
    tahun: 2018,
    warna: "#FFB4A2",
    link: BASE + "dilan&search=Search",
    caraCari: "Cari kata kunci Dilan atau Pidi Baiq di katalog perpustakaan.",
    sinopsis: "Kisah cinta remaja Milea dan Dilan di Bandung tahun 1990 yang penuh kenangan manis.",
    beda: [
      "Novel ditulis dari sudut pandang Milea sehingga kita bisa membaca pikiran dan perasaannya.",
      "Banyak dialog lucu dan puitis Dilan di novel yang tidak semuanya masuk ke film.",
      "Film fokus pada momen visual ikonik, novel lebih kaya detail suasana Bandung tahun 90an.",
      "Beberapa tokoh pendukung di novel kurang mendapat porsi di film.",
    ],
  },
  {
    emoji: "✈️",
    film: "Habibie dan Ainun",
    buku: "Habibie dan Ainun",
    penulis: "B.J. Habibie",
    genre: "Biografi",
    tahun: 2012,
    warna: "#B5EAD7",
    link: BASE + "habibie+ainun&search=Search",
    caraCari: "Cari kata kunci Habibie di bagian non-fiksi perpustakaan.",
    sinopsis: "Kisah nyata cinta dan perjuangan B.J. Habibie dan sang istri tercinta, Ainun.",
    beda: [
      "Buku ditulis langsung oleh Pak Habibie sendiri, sangat personal dan menyentuh.",
      "Film fokus pada kisah romantis, buku juga membahas karier dan politik secara mendalam.",
      "Banyak detail kehidupan di Jerman yang ada di buku namun dipotong di film.",
      "Emosi kehilangan Ainun jauh lebih terasa saat dibaca langsung dari tulisan Habibie.",
    ],
  },
  {
    emoji: "🧙",
    film: "Harry Potter and the Sorcerers Stone",
    buku: "Harry Potter dan Batu Bertuah",
    penulis: "J.K. Rowling",
    genre: "Fantasi",
    tahun: 2001,
    warna: "#FFDAC1",
    link: BASE + "harry+potter&search=Search",
    caraCari: "Cari kata kunci Harry Potter atau Rowling di katalog perpustakaan.",
    sinopsis: "Bocah yatim piatu Harry Potter mengetahui dirinya adalah penyihir dan bersekolah di Hogwarts.",
    beda: [
      "Novel jauh lebih detail menggambarkan dunia sihir dan tradisi Hogwarts.",
      "Karakter Hermione di novel digambarkan lebih kompleks di awal cerita.",
      "Ada sub-plot penting di novel yang dipotong dari film.",
      "Film fokus pada aksi visual, novel kaya akan humor dan detail dunia sihir.",
    ],
  },
  {
    emoji: "💫",
    film: "The Fault in Our Stars",
    buku: "The Fault in Our Stars",
    penulis: "John Green",
    genre: "Romansa",
    tahun: 2014,
    warna: "#E8DAFF",
    link: BASE + "fault+in+our+stars&search=Search",
    caraCari: "Jika tidak ada di perpustakaan, tersedia di Gramedia atau iPusnas.",
    sinopsis: "Dua remaja penderita kanker, Hazel dan Augustus, jatuh cinta dalam perjalanan hidup yang bermakna.",
    beda: [
      "Novel ditulis dari sudut pandang Hazel sehingga pergumulan batinnya sangat terasa.",
      "Banyak refleksi filosofis tentang hidup dan kematian yang lebih dalam di novel.",
      "Dialog cerdas antara Hazel dan Augustus terasa lebih kaya di buku.",
      "Film memangkas beberapa bagian perjalanan ke Amsterdam.",
    ],
  },
  {
    emoji: "🌍",
    film: "Bumi Serial Bumi",
    buku: "Bumi",
    penulis: "Tere Liye",
    genre: "Fantasi",
    tahun: 2023,
    warna: "#A8DADC",
    link: BASE + "bumi+tere+liye&search=Search",
    caraCari: "Cari kata kunci Tere Liye atau Bumi di katalog perpustakaan.",
    sinopsis: "Raib, remaja yang bisa menghilang, terlibat petualangan di dunia paralel yang menakjubkan.",
    beda: [
      "Novel serial Bumi terdiri dari banyak jilid, film baru mencakup buku pertama.",
      "Dunia paralel di novel digambarkan sangat detail dengan aturan yang unik.",
      "Karakter Seli dan Ali mendapat porsi lebih besar dan kompleks di novel.",
      "Banyak adegan aksi di novel yang tidak semua bisa divisualisasikan di film.",
    ],
  },
  {
    emoji: "🚣",
    film: "Perahu Kertas",
    buku: "Perahu Kertas",
    penulis: "Dee Lestari",
    genre: "Romansa",
    tahun: 2012,
    warna: "#FFB4A2",
    link: BASE + "perahu+kertas&search=Search",
    caraCari: "Jika tidak ada di perpustakaan, tersedia di toko buku atau iPusnas.",
    sinopsis: "Kugy dan Keenan, dua jiwa kreatif yang saling jatuh cinta namun terpisah oleh keadaan.",
    beda: [
      "Novel lebih menggali sisi kreatif dan dunia batin Kugy sebagai penulis dongeng.",
      "Film dibagi dua bagian, novel lebih lengkap sebagai satu kesatuan cerita.",
      "Detail dunia seni dan perjalanan hidup karakter lebih kaya di buku.",
      "Nuansa Bandung dan Bali di novel terasa lebih hidup saat dibaca.",
    ],
  },
  {
    emoji: "⛰️",
    film: "5 cm",
    buku: "5 cm",
    penulis: "Donny Dhirgantara",
    genre: "Petualangan",
    tahun: 2012,
    warna: "#B5EAD7",
    link: BASE + "5+cm+donny&search=Search",
    caraCari: "Cari kata kunci 5 cm atau Donny Dhirgantara di katalog perpustakaan.",
    sinopsis: "Lima sahabat mendaki Gunung Semeru untuk menemukan kembali makna persahabatan dan impian.",
    beda: [
      "Novel lebih dalam menggambarkan filosofi hidup dan persahabatan kelima tokoh.",
      "Perjalanan mendaki di novel lebih panjang dan penuh refleksi.",
      "Ada bab latar belakang karakter di novel yang tidak masuk ke film.",
      "Pesan tentang nasionalisme lebih kuat di versi novel.",
    ],
  },
  {
    emoji: "🦁",
    film: "The Chronicles of Narnia",
    buku: "The Lion the Witch and the Wardrobe",
    penulis: "C.S. Lewis",
    genre: "Fantasi",
    tahun: 2005,
    warna: "#FFDAC1",
    link: BASE + "narnia&search=Search",
    caraCari: "Jika tidak ada di perpustakaan, tersedia di toko buku.",
    sinopsis: "Empat kakak-adik masuk ke dunia Narnia melalui lemari ajaib dan melawan Penyihir Putih.",
    beda: [
      "Novel ditulis dengan gaya hangat seolah penulis berbicara langsung kepada anak-anak.",
      "Detail dunia Narnia jauh lebih kaya di buku termasuk sejarah dan makhluknya.",
      "Film menambahkan adegan perang spektakuler yang tidak ada di buku.",
      "Pesan moral di buku terasa lebih eksplisit dibanding di film.",
    ],
  },
  {
    emoji: "🔍",
    film: "Enola Holmes",
    buku: "The Case of the Missing Marquess",
    penulis: "Nancy Springer",
    genre: "Misteri",
    tahun: 2020,
    warna: "#E8DAFF",
    link: BASE + "enola+holmes&search=Search",
    caraCari: "Jika tidak ada di perpustakaan, tersedia di toko buku atau platform digital.",
    sinopsis: "Enola Holmes, adik Sherlock, mencari ibunya yang menghilang sambil membuktikan dirinya sebagai detektif.",
    beda: [
      "Novel lebih singkat dan padat, film mengembangkan cerita dengan sub-plot politik.",
      "Enola di novel lebih muda yaitu 14 tahun dibanding di film.",
      "Film menambahkan kisah Viscount Tewkesbury yang lebih kompleks.",
      "Buku menggunakan teknik unik, Enola kadang berbicara langsung kepada pembaca.",
    ],
  },
  {
    emoji: "🌺",
    film: "Little Women",
    buku: "Little Women",
    penulis: "Louisa May Alcott",
    genre: "Drama",
    tahun: 2019,
    warna: "#FFB4A2",
    link: BASE + "little+women&search=Search",
    caraCari: "Tersedia di toko buku atau iPusnas versi terjemahan Indonesia.",
    sinopsis: "Kisah empat bersaudara March yang tumbuh dewasa penuh perjuangan di era Perang Saudara Amerika.",
    beda: [
      "Novel sangat detail menggambarkan kehidupan keluarga di era Victoria.",
      "Film 2019 memakai struktur maju-mundur yang berbeda dari novel yang kronologis.",
      "Perjuangan Jo sebagai penulis wanita di era patriarki lebih mendalam di novel.",
      "Banyak tradisi keluarga di novel yang tidak muncul di film.",
    ],
  },
  {
    emoji: "📖",
    film: "Matilda the Musical",
    buku: "Matilda",
    penulis: "Roald Dahl",
    genre: "Fantasi",
    tahun: 2022,
    warna: "#B5EAD7",
    link: BASE + "matilda&search=Search",
    caraCari: "Cari kata kunci Matilda atau Roald Dahl di katalog perpustakaan.",
    sinopsis: "Matilda, gadis jenius berkekuatan telekinesis, melawan orang tua dan guru kejam demi keadilan.",
    beda: [
      "Buku punya gaya humor gelap yang khas dan lebih sarkastis dibanding versi musikal.",
      "Film musikal menambahkan banyak lagu yang tidak ada di buku.",
      "Miss Trunchbull di buku digambarkan lebih mengerikan dan ekstrem.",
      "Buku lebih pendek dan cocok dibaca dalam sekali duduk.",
    ],
  },
];

const WARNA = {
  teal: "#5C9EA1",
  gelap: "#3D6B6D",
  kartu: "#B5EAD7",
  peach: "#FFB4A2",
  apricot: "#FFDAC1",
  biru: "#A8DADC",
  teks: "#3D405B",
  abu: "#6B7080",
  modal: "#F0EBFF",
};

function potong(str, maks) {
  if (str.length <= maks) return str;
  return str.slice(0, maks) + "...";
}

function KartuFilm({ item, onKlik }) {
  return (
    <div
      onClick={() => onKlik(item)}
      style={{
        background: "white",
        borderRadius: "18px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.07)";
      }}
    >
      <div
        style={{
          height: "90px",
          background: item.warna,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <span style={{ fontSize: "52px" }}>{item.emoji}</span>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            background: WARNA.gelap,
            color: "white",
            borderRadius: "20px",
            padding: "5px 12px",
            fontSize: "11px",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          Cek Perpus
        </a>
      </div>

      <div style={{ padding: "16px 18px" }}>
        <span
          style={{
            fontSize: "11px",
            background: WARNA.biru,
            color: WARNA.gelap,
            borderRadius: "20px",
            padding: "3px 10px",
            fontWeight: "700",
          }}
        >
          {item.genre}
        </span>
        <h3 style={{ margin: "10px 0 2px", fontSize: "15px", color: WARNA.teks, fontWeight: "800" }}>
          {item.film}
          <span style={{ color: WARNA.abu, fontWeight: "400", fontSize: "13px" }}>
            {" "}({item.tahun})
          </span>
        </h3>
        <p style={{ margin: "0 0 4px", fontSize: "13px", color: WARNA.teal, fontWeight: "700" }}>
          {item.buku}
        </p>
        <p style={{ margin: "0 0 10px", fontSize: "12px", color: WARNA.abu }}>
          {item.penulis}
        </p>
        <p style={{ margin: "0 0 12px", fontSize: "13px", color: WARNA.teks, lineHeight: "1.5" }}>
          {potong(item.sinopsis, 80)}
        </p>
        <p style={{ margin: 0, fontSize: "12px", color: WARNA.teal, fontWeight: "700" }}>
          Klik untuk lihat perbedaan film vs buku
        </p>
      </div>
    </div>
  );
}

function ModalDetail({ item, onTutup }) {
  if (!item) return null;
  return (
    <div
      onClick={onTutup}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(61,64,91,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
        padding: "20px",
        boxSizing: "border-box",
        animation: "fadeIn 0.3s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: WARNA.modal,
          borderRadius: "22px",
          maxWidth: "660px",
          width: "100%",
          maxHeight: "88vh",
          overflowY: "auto",
          boxShadow: "0 24px 60px rgba(0,0,0,0.16)",
          border: "2px solid #FFB4A2",
          animation: "scaleIn 0.3s ease",
        }}
      >
        <div
          style={{
            height: "100px",
            background: item.warna,
            borderRadius: "20px 20px 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
          }}
        >
          <span style={{ fontSize: "56px" }}>{item.emoji}</span>
          <span
            style={{
              background: WARNA.gelap,
              color: "white",
              borderRadius: "20px",
              padding: "6px 16px",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            {item.genre}
          </span>
        </div>

        <div style={{ padding: "24px 28px" }}>
          <h2 style={{ color: WARNA.teal, fontSize: "22px", fontWeight: "800", margin: "0 0 4px" }}>
            {item.film} ({item.tahun})
          </h2>
          <p style={{ margin: "0 0 4px", fontSize: "15px", color: WARNA.teks, fontWeight: "700" }}>
            Novel: {item.buku}
          </p>
          <p style={{ margin: "0 0 18px", fontSize: "13px", color: WARNA.abu }}>
            Penulis: {item.penulis}
          </p>

          <div
            style={{
              background: WARNA.kartu,
              borderRadius: "12px",
              padding: "14px 18px",
              marginBottom: "20px",
              border: "1px solid #9EDDD0",
            }}
          >
            <p style={{ margin: 0, fontSize: "14px", color: WARNA.teks, lineHeight: "1.7" }}>
              <b>Sinopsis:</b> {item.sinopsis}
            </p>
          </div>

          <h3 style={{ color: WARNA.teal, fontSize: "16px", fontWeight: "800", marginBottom: "14px" }}>
            Apa bedanya film dan bukunya?
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "22px" }}>
            {item.beda.map((teks, idx) => (
              <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    background: WARNA.peach,
                    color: "#7A2828",
                    borderRadius: "50%",
                    width: "26px",
                    height: "26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    fontSize: "13px",
                    flexShrink: 0,
                  }}
                >
                  {idx + 1}
                </span>
                <p style={{ margin: 0, fontSize: "14px", color: WARNA.teks, lineHeight: "1.65" }}>
                  {teks}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "#C8EFE0",
              border: "2px solid #4A8B6F",
              borderRadius: "14px",
              padding: "16px 18px",
              marginBottom: "16px",
            }}
          >
            <p style={{ margin: "0 0 8px", fontWeight: "800", fontSize: "14px", color: "#2D5A3F" }}>
              Cek di Perpustakaan SMP Al-Falah Surabaya
            </p>
            <p style={{ margin: "0 0 14px", fontSize: "13px", color: WARNA.teks, lineHeight: "1.65" }}>
              {item.caraCari}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: WARNA.gelap,
                color: "white",
                padding: "10px 22px",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Cari di Katalog Perpustakaan
            </a>
          </div>

          <div
            style={{
              background: "#F0EBFF",
              borderRadius: "12px",
              padding: "14px 18px",
              marginBottom: "22px",
              border: "1px solid #C4B5F4",
            }}
          >
            <p style={{ margin: 0, fontSize: "13px", color: "#5A4A8A", lineHeight: "1.7" }}>
              <b>Tips:</b> Tonton filmnya dulu biar tahu gambaran ceritanya, lalu baca bukunya untuk pengalaman yang jauh lebih lengkap!
            </p>
          </div>

          <button
            onClick={onTutup}
            style={{
              background: WARNA.teal,
              color: "white",
              border: "none",
              padding: "12px 26px",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

function DariFilmKeBuku() {
  const [dipilih, setDipilih] = useState(null);
  const [filter, setFilter]   = useState("Semua");
  const [cari, setCari]       = useState("");

  const semuaGenre = ["Semua", ...new Set(daftarFilm.map((d) => d.genre))];

  const q = cari.toLowerCase();
  const tampil = daftarFilm.filter((d) => {
    const okGenre = filter === "Semua" || d.genre === filter;
    const okCari  = d.film.toLowerCase().includes(q) ||
                    d.buku.toLowerCase().includes(q) ||
                    d.penulis.toLowerCase().includes(q);
    return okGenre && okCari;
  });

  return (
    <div style={{ padding: "36px 24px", fontFamily: "'Segoe UI', Tahoma, sans-serif" }}>

      <h1 style={{ textAlign: "center", color: WARNA.teal, fontSize: "30px", fontWeight: "800", marginBottom: "6px" }}>
        📚 Dari Film ke Buku
      </h1>
      <p style={{ textAlign: "center", color: WARNA.abu, fontSize: "15px", marginBottom: "28px" }}>
        Film favoritmu punya novelnya! Yuk lanjutkan petualangannya lewat buku
      </p>

      <div style={{ maxWidth: "500px", margin: "0 auto 20px" }}>
        <input
          type="text"
          placeholder="Cari judul film, buku, atau penulis..."
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 20px",
            borderRadius: "50px",
            border: "2px solid #FFB4A2",
            fontSize: "14px",
            color: WARNA.teks,
            outline: "none",
            fontFamily: "inherit",
            background: "white",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "10px" }}>
        {semuaGenre.map((g) => (
          <button
            key={g}
            onClick={() => setFilter(g)}
            style={{
              padding: "9px 18px",
              borderRadius: "20px",
              fontFamily: "inherit",
              border: filter === g ? "2px solid #3D6B6D" : "2px solid #9EDDD0",
              background: filter === g ? WARNA.gelap : WARNA.biru,
              color: filter === g ? "white" : WARNA.gelap,
              fontWeight: "700",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            {g}
          </button>
        ))}
      </div>

      <p style={{ textAlign: "center", color: WARNA.abu, fontSize: "13px", marginBottom: "24px" }}>
        Menampilkan <b style={{ color: WARNA.teal }}>{tampil.length}</b> dari {daftarFilm.length} pasangan film dan buku
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {tampil.map((item, i) => (
          <KartuFilm key={i} item={item} onKlik={setDipilih} />
        ))}
      </div>

      <ModalDetail item={dipilih} onTutup={() => setDipilih(null)} />
    </div>
  );
}

export default DariFilmKeBuku;
