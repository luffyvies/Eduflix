import { useState } from "react";

const BASE = "https://perpus-tower.alfalahsby.sch.id/index.php?keywords=";

const daftarFilm = [
  {
    emoji: "⚔️",
    film: "Battle of Surabaya",
    buku: "Battle of Surabaya",
    penulis: "Ary Wahyu Kristianto",
    genre: "Fiksi",
    tahun: 2015,
    warna: "#FFB4A2",
    link: BASE + "battle+of+surabaya&search=Search",
    caraCari: "Cari kata kunci Battle of Surabaya di katalog perpustakaan.",
    sinopsis: "Kisah perjuangan Musa, seorang remaja penyemir sepatu yang terlibat dalam pertempuran heroik 10 November 1945 di Surabaya.",
    beda: [
      "Novel memberikan latar belakang karakter Musa yang lebih mendalam sebelum pertempuran dimulai.",
      "Film menggunakan animasi 2D untuk menggambarkan aksi pertempuran yang lebih sinematik.",
      "Buku menggambarkan suasana kota Surabaya saat itu dengan detail yang lebih kaya.",
      "Pesan nasionalisme dan semangat kemerdekaan terasa lebih personal saat dibaca di novel.",
    ],
    quiz: [
      {
        soal: "Apa pekerjaan tokoh utama Musa di awal cerita?",
        pilihan: ["A. Penjual koran", "B. Penyemir sepatu", "C. Pengantar pos", "D. Tukang becak"],
        jawaban: "B",
        penjelasan: "Musa adalah seorang remaja penyemir sepatu yang kemudian terseret dalam pusaran pertempuran 10 November 1945.",
      },
      {
        soal: "Pertempuran dalam cerita ini terjadi di kota mana?",
        pilihan: ["A. Jakarta", "B. Bandung", "C. Surabaya", "D. Semarang"],
        jawaban: "C",
        penjelasan: "Pertempuran 10 November 1945 terjadi di Surabaya dan menjadi salah satu pertempuran paling heroik dalam sejarah kemerdekaan Indonesia.",
      },
      {
        soal: "Film Battle of Surabaya menggunakan teknik animasi apa?",
        pilihan: ["A. Animasi 3D CGI", "B. Animasi 2D", "C. Stop motion", "D. Live action"],
        jawaban: "B",
        penjelasan: "Film Battle of Surabaya menggunakan animasi 2D yang khas dan menjadi salah satu film animasi kebanggaan Indonesia.",
      },
      {
        soal: "Tanggal berapa pertempuran heroik yang digambarkan dalam cerita ini terjadi?",
        pilihan: ["A. 17 Agustus 1945", "B. 1 Oktober 1945", "C. 10 November 1945", "D. 20 Mei 1908"],
        jawaban: "C",
        penjelasan: "10 November 1945 adalah tanggal Pertempuran Surabaya yang kini diperingati sebagai Hari Pahlawan Nasional Indonesia.",
      },
      {
        soal: "Apa pesan utama yang ingin disampaikan melalui cerita Battle of Surabaya?",
        pilihan: ["A. Kehebatan teknologi militer", "B. Semangat nasionalisme dan perjuangan kemerdekaan", "C. Kritik terhadap pemerintah kolonial", "D. Kisah percintaan di masa perang"],
        jawaban: "B",
        penjelasan: "Pesan utama cerita ini adalah semangat nasionalisme dan perjuangan kemerdekaan yang membara, terutama digambarkan melalui tokoh rakyat biasa seperti Musa.",
      },
    ],
  },
  {
    emoji: "🔎",
    film: "Sherlock Holmes",
    buku: "Sherlock Holmes: A Study in Scarlet",
    penulis: "Arthur Conan Doyle",
    genre: "Fiksi",
    tahun: 2009,
    warna: "#E8DAFF",
    link: BASE + "sherlock+holmes+study+scarlet&search=Search",
    caraCari: "Cari kata kunci Sherlock Holmes atau Arthur Conan Doyle di katalog perpustakaan.",
    sinopsis: "Pertemuan pertama Sherlock Holmes dan Dr. Watson saat menginvestigasi kasus pembunuhan misterius di London.",
    beda: [
      "Novel terbagi dua bagian: investigasi Holmes dan latar belakang pelaku di Utah yang tidak sepenuhnya masuk ke film.",
      "Film modern (2009) menambahkan banyak aksi fisik yang tidak ada di novel aslinya.",
      "Kepribadian Holmes di novel lebih eksentrik dan detail dibanding di adaptasi film manapun.",
      "Buku memberikan penjelasan mendalam tentang metode deduksi Holmes yang hanya disinggung di film.",
    ],
  },
  {
    emoji: "🏐",
    film: "Haikyu!!",
    buku: "Haikyu!! Fly High Volleyball: Pertarungan Si Pengecut Vol. 14",
    penulis: "Haruichi Furudate",
    genre: "Manga/Komik",
    tahun: 2020,
    warna: "#FFDAC1",
    link: BASE + "haikyu&search=Search",
    caraCari: "Cari kata kunci Haikyu di katalog perpustakaan.",
    sinopsis: "Shoyo Hinata, remaja bertubuh kecil, berjuang mewujudkan impiannya menjadi ace voli terhebat bersama tim Karasuno.",
    beda: [
      "Manga volume 14 fokus pada arc pertandingan tertentu yang di anime dibagi menjadi beberapa episode.",
      "Detail ekspresi karakter dan panel aksi di manga memberikan intensitas yang berbeda dari animasi.",
      "Anime menambahkan musik latar dan animasi gerakan yang membuat momen smash terasa lebih epik.",
      "Membaca manga memberi kebebasan menikmati setiap panel dan detail kostum tim secara perlahan.",
    ],
  },
  {
    emoji: "👻",
    film: "Sewu Dino",
    buku: "Sewu Dino",
    penulis: "SimpleMan",
    genre: "Horror",
    tahun: 2023,
    warna: "#3D405B",
    link: BASE + "sewu+dino&search=Search",
    caraCari: "Cari kata kunci Sewu Dino atau SimpleMan di katalog perpustakaan.",
    sinopsis: "Sri Asih merawat seseorang yang terkena santet sewu dino — kutukan mematikan selama seribu hari yang mengancam nyawa.",
    beda: [
      "Novel awalnya adalah cerita Thread Twitter yang viral, memberikan nuansa yang lebih intim dan mencekam.",
      "Film menambahkan efek visual dan jumpscares yang tidak bisa dirasakan dari teks.",
      "Buku membangun ketegangan perlahan melalui deskripsi detail yang sangat atmosferik.",
      "Lore dan aturan santet di novel dijelaskan jauh lebih lengkap dibanding versi filmnya.",
    ],
  },
  {
    emoji: "⚡",
    film: "Frankenstein (Film Klasik)",
    buku: "Frankenstein",
    penulis: "Mary Shelley",
    genre: "Horror",
    tahun: 1931,
    warna: "#A8DADC",
    link: BASE + "frankenstein&search=Search",
    caraCari: "Cari kata kunci Frankenstein atau Mary Shelley di katalog perpustakaan.",
    sinopsis: "Ilmuwan Victor Frankenstein menciptakan makhluk dari bagian tubuh manusia, lalu mengabaikannya — dengan konsekuensi mengerikan.",
    beda: [
      "Novel ditulis dari sudut pandang tiga narator berbeda yang membuat cerita jauh lebih kompleks dari film.",
      "Sang monster di novel bisa berbicara dan berfilsafat — sangat berbeda dari versi film yang bisu dan kasar.",
      "Tema moral tentang tanggung jawab ilmuwan jauh lebih dalam dibahas di novel.",
      "Film klasik 1931 lebih fokus pada aspek horor, sedangkan novel lebih pada tragedi kemanusiaan.",
    ],
  },
  {
    emoji: "🐉",
    film: "Doraemon: Petualangan Nobita ke Dunia Barat",
    buku: "Perjalanan Paralel Nobita ke Dunia Barat",
    penulis: "Fujiko F. Fujio",
    genre: "Manga/Komik",
    tahun: 2007,
    warna: "#B5EAD7",
    link: BASE + "nobita+dunia+barat&search=Search",
    caraCari: "Cari kata kunci Nobita Dunia Barat atau Doraemon di katalog perpustakaan.",
    sinopsis: "Nobita dan teman-teman bertualang ke dunia yang terinspirasi dari kisah Perjalanan ke Barat dengan Doraemon sebagai pemandu.",
    beda: [
      "Manga menampilkan detail komedi dan ekspresi karakter yang lebih kaya dibanding versi film animasinya.",
      "Film menambahkan sekuens aksi yang lebih panjang dan musik yang mendramatisir suasana.",
      "Manga bisa dinikmati panel per panel, memperhatikan detail alat Doraemon yang kreatif.",
      "Alur cerita di manga sedikit berbeda — film biasanya menambahkan atau mengubah beberapa adegan.",
    ],
  },
  {
    emoji: "🦁",
    film: "The Chronicles of Narnia",
    buku: "The Magician's Nephew: Keponakan Penyihir",
    penulis: "C.S. Lewis",
    genre: "Fiksi",
    tahun: 2005,
    warna: "#FFDAC1",
    link: BASE + "magician+nephew+narnia&search=Search",
    caraCari: "Cari kata kunci Narnia atau C.S. Lewis di katalog perpustakaan.",
    sinopsis: "Kisah asal-usul Narnia — bagaimana Digory dan Polly secara tidak sengaja membawa kejahatan ke dunia baru yang baru diciptakan.",
    beda: [
      "Buku ini adalah prekuel Narnia yang menjelaskan asal-usul lemari ajaib dan Narnia itu sendiri.",
      "Film Narnia yang ada di bioskop mengangkat buku kedua (The Lion, the Witch and the Wardrobe), bukan buku ini.",
      "Membaca buku ini memberikan konteks yang sangat memperkaya pengalaman menonton filmnya.",
      "Gaya bercerita C.S. Lewis yang hangat dan langsung menyapa pembaca terasa unik dan tidak tergantikan.",
    ],
  },
  {
    emoji: "🦋",
    film: "Barbie: Mariposa & the Fairy Princess",
    buku: "Barbie: Mariposa & the Fairy Princess",
    penulis: "Geof Smith",
    genre: "Fiksi",
    tahun: 2013,
    warna: "#FFB4A2",
    link: BASE + "barbie+mariposa+fairy&search=Search",
    caraCari: "Cari kata kunci Barbie Mariposa di katalog perpustakaan.",
    sinopsis: "Mariposa sang peri kupu-kupu ditugaskan menjadi duta perdamaian ke kerajaan peri yang bermusuhan dengan kerajaannya.",
    beda: [
      "Buku adalah adaptasi dari film animasinya, jadi film bisa ditonton lebih dulu untuk mengenal ceritanya.",
      "Novel memberikan deskripsi dunia peri yang lebih detail dan imajinatif.",
      "Film menampilkan lagu-lagu yang tidak bisa dirasakan dari buku.",
      "Buku cocok untuk pembaca muda yang ingin menikmati petualangan Mariposa lebih lama.",
    ],
  },
  {
    emoji: "🚪",
    film: "Barbie and the Secret Door",
    buku: "Barbie and the Secret Door",
    penulis: "Tennant Redbank",
    genre: "Fiksi",
    tahun: 2014,
    warna: "#E8DAFF",
    link: BASE + "barbie+secret+door&search=Search",
    caraCari: "Cari kata kunci Barbie Secret Door di katalog perpustakaan.",
    sinopsis: "Alexa yang pemalu menemukan pintu rahasia menuju kerajaan ajaib dan harus menyelamatkannya dari putri yang jahat.",
    beda: [
      "Buku adalah novelisasi dari film animasinya — keduanya bisa dinikmati bersama-sama.",
      "Film menampilkan lagu-lagu yang menjadi daya tarik utama yang tidak ada di buku.",
      "Buku mendeskripsikan dunia ajaib di balik pintu rahasia dengan lebih detail.",
      "Pesan tentang keberanian dan kepercayaan diri terasa lebih personal saat dibaca.",
    ],
  },
  {
    emoji: "🎵",
    film: "High School Musical (Tonton Seri Filmnya!)",
    buku: "High School Musical: Poetry in Motion",
    penulis: "N. B. Grace",
    genre: "Romansa",
    tahun: 2006,
    warna: "#B5EAD7",
    link: BASE + "high+school+musical+poetry&search=Search",
    caraCari: "Cari kata kunci High School Musical di katalog perpustakaan.",
    sinopsis: "Buku spin-off dari seri High School Musical yang mengikuti petualangan baru karakter East High dalam kompetisi puisi.",
    beda: [
      "Ini adalah buku spin-off — bukan adaptasi langsung dari film mana pun dalam seri HSM.",
      "Tonton dulu film High School Musical 1, 2, dan 3 untuk mengenal karakter Troy, Gabriella, dan teman-temannya.",
      "Buku ini cocok dibaca setelah menonton filmnya sebagai cerita tambahan yang menyenangkan.",
      "Film seri HSM lebih seru karena ada musik, koreografi, dan chemistry antar pemain yang tidak bisa digantikan teks.",
    ],
  },
  {
    emoji: "❄️",
    film: "Frozen (Tonton Filmnya!)",
    buku: "Kisah-Kisah dari Arendelle",
    penulis: "Landry Q. Walker",
    genre: "Fiksi",
    tahun: 2014,
    warna: "#A8DADC",
    link: BASE + "arendelle&search=Search",
    caraCari: "Cari kata kunci Arendelle atau Frozen di katalog perpustakaan.",
    sinopsis: "Kumpulan kisah spin-off dari dunia Frozen yang mengikuti petualangan baru Elsa, Anna, dan penghuni Arendelle lainnya.",
    beda: [
      "Ini adalah buku spin-off — bukan adaptasi dari film Frozen manapun.",
      "Tonton dulu film Frozen (2013) dan Frozen II (2019) untuk mengenal karakter dan dunianya.",
      "Buku ini memperluas cerita dunia Arendelle dengan kisah-kisah yang tidak ada di film.",
      "Cocok untuk penggemar Frozen yang ingin lebih banyak petualangan bersama Elsa dan Anna.",
    ],
  },
  {
    emoji: "🌻",
    film: "Detektif Conan: The Sunflowers of Inferno",
    buku: "Detektif Conan Movie: Sun Flowers of Inferno",
    penulis: "Gosho Aoyama",
    genre: "Manga/Komik",
    tahun: 2015,
    warna: "#FFB4A2",
    link: BASE + "detektif+conan+movie&search=Search",
    caraCari: "Cari kata kunci Detektif Conan Sunflowers di katalog perpustakaan.",
    sinopsis: "Conan menginvestigasi pencurian lukisan Van Gogh senilai miliaran yen yang melibatkan organisasi kriminal internasional.",
    beda: [
      "Manga movie memberikan detail investigasi yang lebih rinci yang tidak semuanya masuk ke versi film.",
      "Film memiliki animasi sinematik dan musik orkestra yang membuat momen klimaks lebih dramatis.",
      "Manga bisa dibaca berulang untuk memperhatikan petunjuk tersembunyi yang diletakkan Conan.",
      "Detail tentang lukisan Van Gogh dan dunia seni lebih banyak dijelaskan di versi manga.",
    ],
  },
  {
    emoji: "🕐",
    film: "Ben 10 (Tonton Seri Animasinya!)",
    buku: "Mengungkap Rahasia Ben 10",
    penulis: "Tracey West",
    genre: "Non-Fiksi",
    tahun: 2006,
    warna: "#B5EAD7",
    link: BASE + "rahasia+ben+10&search=Search",
    caraCari: "Cari kata kunci Ben 10 di katalog perpustakaan.",
    sinopsis: "Buku panduan lengkap berisi detail alien, kemampuan, musuh, dan fakta tersembunyi dari semesta Ben 10.",
    beda: [
      "Ini bukan novel — ini buku ensiklopedia/panduan yang berisi detail lengkap dunia Ben 10.",
      "Tonton dulu seri animasi Ben 10 untuk mengenal karakternya, baru baca buku ini untuk fakta-fakta mendalam.",
      "Buku ini sangat berguna untuk fans yang ingin tahu kemampuan detail setiap alien Omnitrix.",
      "Seri animasinya menampilkan aksi dan petualangan, buku ini melengkapi dengan lore dan background cerita.",
    ],
  },
  {
    emoji: "🏛️",
    film: "Filosofi Teras (Dokumenter/Video)",
    buku: "Filosofi Teras: Filsafat Yunani-Romawi Kuno untuk Mental Tangguh Masa Kini",
    penulis: "Henry Manampiring",
    genre: "Non-Fiksi",
    tahun: 2019,
    warna: "#FFDAC1",
    link: BASE + "filosofi+teras&search=Search",
    caraCari: "Cari kata kunci Filosofi Teras atau Henry Manampiring di katalog perpustakaan.",
    sinopsis: "Panduan praktis filsafat Stoisisme untuk menghadapi kecemasan, emosi negatif, dan tekanan hidup zaman modern.",
    beda: [
      "Buku ini diadaptasi menjadi film dokumenter dan konten video yang membahas Stoicism.",
      "Buku jauh lebih mendalam dengan penjelasan konsep, latihan, dan contoh kasus yang tidak bisa diringkas di video.",
      "Format buku memungkinkan pembaca berhenti dan merenungkan setiap konsep secara personal.",
      "Penulis membagikan perjalanan pribadinya menerapkan Stoicism yang terasa sangat jujur dan relatable.",
    ],
  },
  {
    emoji: "🪞",
    film: "Alice Through the Looking Glass",
    buku: "Through the Looking Glass",
    penulis: "Lewis Carroll",
    genre: "Fiksi",
    tahun: 2016,
    warna: "#E8DAFF",
    link: BASE + "through+looking+glass&search=Search",
    caraCari: "Cari kata kunci Alice Looking Glass atau Lewis Carroll di katalog perpustakaan.",
    sinopsis: "Alice kembali ke dunia ajaib melalui cermin ajaib dan bertualang di dunia yang seperti papan catur raksasa.",
    beda: [
      "Ini adalah sekuel dari Alice in Wonderland yang sering diabaikan tapi sangat kaya imajinasi.",
      "Film Alice Through the Looking Glass (2016) terinspirasi dari buku ini meski plotnya sangat berbeda.",
      "Buku asli jauh lebih surreal dan penuh permainan kata serta teka-teki yang cerdas.",
      "Karakter Ratu Merah dan Ratu Putih di buku berbeda signifikan dari versi film Disney.",
    ],
  },
  {
    emoji: "🏹",
    film: "Robin Hood",
    buku: "The Merry Adventures of Robin Hood",
    penulis: "Howard Pyle",
    genre: "Fiksi",
    tahun: 1991,
    warna: "#B5EAD7",
    link: BASE + "merry+adventures+robin+hood&search=Search",
    caraCari: "Cari kata kunci Robin Hood atau Howard Pyle di katalog perpustakaan.",
    sinopsis: "Kumpulan petualangan Robin Hood dan para pengikutnya di Sherwood Forest dalam melawan ketidakadilan Sheriff Nottingham.",
    beda: [
      "Buku klasik ini adalah salah satu versi paling lengkap dari legenda Robin Hood.",
      "Ada banyak adaptasi film Robin Hood — semuanya hanya mengambil sebagian kecil dari kisah di buku ini.",
      "Gaya penulisan abad ke-19 yang megah memberikan suasana epik yang tidak tergantikan.",
      "Banyak karakter dan petualangan di buku yang tidak pernah diadaptasi ke film manapun.",
    ],
  },
  {
    emoji: "🎓",
    film: "High School Musical (Tonton Seri Filmnya!)",
    buku: "High School Musical 3: Senior Year",
    penulis: "N. B. Grace",
    genre: "Romansa",
    tahun: 2008,
    warna: "#FFB4A2",
    link: BASE + "high+school+musical+3&search=Search",
    caraCari: "Cari kata kunci High School Musical 3 di katalog perpustakaan.",
    sinopsis: "Novelisasi spin-off dari momen-momen di tahun senior Troy, Gabriella, dan geng East High sebelum lulus.",
    beda: [
      "Ini adalah buku spin-off dari franchise HSM — bukan novelisasi langsung dari film HSM 3.",
      "Tonton dulu film High School Musical 1, 2, dan 3 untuk mendapatkan konteks penuh cerita.",
      "Buku ini cocok sebagai bacaan tambahan untuk fans yang ingin lebih banyak cerita East High.",
      "Film HSM 3 yang asli jauh lebih seru dengan penampilan musikal live-action yang spektakuler.",
    ],
  },
  {
    emoji: "🧚",
    film: "Tinker Bell and the Pirate Fairy",
    buku: "The Pirate Fairy - Peri Perompak",
    penulis: "Kiki Thorpe",
    genre: "Fiksi",
    tahun: 2014,
    warna: "#A8DADC",
    link: BASE + "pirate+fairy&search=Search",
    caraCari: "Cari kata kunci Pirate Fairy atau Tinker Bell di katalog perpustakaan.",
    sinopsis: "Peri Zarina mencuri butiran fairy dust ajaib dan bergabung dengan bajak laut, memaksa Tinker Bell dan teman-temannya mengejarnya.",
    beda: [
      "Buku adalah novelisasi dari film animasi Disney — film bisa ditonton lebih dulu untuk mengenal ceritanya.",
      "Film memiliki animasi yang indah dan suara karakter yang membuat dunia peri terasa hidup.",
      "Buku memberikan deskripsi dunia Pixie Hollow yang lebih detail dan imajinatif.",
      "Membaca buku memberikan waktu untuk benar-benar membayangkan keajaiban dunia peri.",
    ],
  },
  {
    emoji: "💌",
    film: "Dilan 1990",
    buku: "Dilan: Dia adalah Dilanku Tahun 1990",
    penulis: "Pidi Baiq",
    genre: "Romansa",
    tahun: 2018,
    warna: "#FFB4A2",
    link: BASE + "dilan&search=Search",
    caraCari: "Cari kata kunci Dilan atau Pidi Baiq di katalog perpustakaan.",
    sinopsis: "Kisah cinta remaja Milea dan Dilan di Bandung tahun 1990 yang penuh kenangan manis dan dialog puitis.",
    beda: [
      "Novel ditulis dari sudut pandang Milea sehingga kita bisa membaca pikiran dan perasaannya secara langsung.",
      "Banyak dialog lucu dan puitis Dilan di novel yang tidak semuanya masuk ke film.",
      "Film fokus pada momen visual ikonik, novel lebih kaya detail suasana Bandung tahun 90an.",
      "Beberapa tokoh pendukung di novel kurang mendapat porsi yang cukup di film.",
    ],
  },
  {
    emoji: "🌊",
    film: "Shaka Oh Shaka",
    buku: "Shaka Oh Shaka",
    penulis: "Teguh Sugiarto",
    genre: "Fiksi",
    tahun: 2024,
    warna: "#B5EAD7",
    link: BASE + "shaka+oh+shaka&search=Search",
    caraCari: "Cari kata kunci Shaka Oh Shaka di katalog perpustakaan.",
    sinopsis: "Petualangan seru Shaka dan teman-temannya dalam menghadapi berbagai tantangan dan misteri yang menakjubkan.",
    beda: [
      "Buku memberikan detail cerita dan latar belakang karakter yang lebih lengkap dari versi adaptasinya.",
      "Ilustrasi dan deskripsi dunia di buku memicu imajinasi pembaca secara lebih personal.",
      "Adaptasi visual menambahkan efek suara dan musik yang memperkuat momen-momen penting.",
      "Membaca buku memungkinkan kamu menikmati cerita dengan kecepatan dan imajinasimu sendiri.",
    ],
  },
  {
    emoji: "⚖️",
    film: "Dikta & Hukum (Web Series)",
    buku: "Dikta & Hukum",
    penulis: "Dhia'an Farah",
    genre: "Romansa",
    tahun: 2023,
    warna: "#E8DAFF",
    link: BASE + "dikta+hukum&search=Search",
    caraCari: "Cari kata kunci Dikta Hukum di katalog perpustakaan.",
    sinopsis: "Nadhira terpaksa tinggal bersama Dikta, kakak temannya yang dingin dan misterius — namun keduanya menyimpan rahasia besar.",
    beda: [
      "Novel ini diadaptasi menjadi web series yang bisa ditonton di platform streaming.",
      "Buku awalnya adalah webtoon/cerita online yang sangat populer sebelum diadaptasi.",
      "Web series menampilkan chemistry nyata antar pemain yang memberikan nuansa berbeda dari teks.",
      "Novel jauh lebih detail dalam menggambarkan pikiran dan perasaan Nadhira yang tidak semua masuk web series.",
    ],
  },
  {
    emoji: "🦄",
    film: "My Little Pony",
    buku: "My Little Pony: Petualangan Ajaib",
    penulis: "G.M. Berrow",
    genre: "Fiksi",
    tahun: 2017,
    warna: "#FFB4A2",
    link: BASE + "my+little+pony+petualangan&search=Search",
    caraCari: "Cari kata kunci My Little Pony di katalog perpustakaan.",
    sinopsis: "Twilight Sparkle dan teman-temannya menjalani petualangan ajaib baru di Equestria dalam menghadapi tantangan persahabatan.",
    beda: [
      "Buku adalah novel pendamping dari seri animasi My Little Pony: Friendship is Magic.",
      "Tonton dulu seri animasinya untuk mengenal karakter Twilight, Rainbow Dash, dan teman-temannya.",
      "Buku memperluas cerita dunia Equestria dengan petualangan yang tidak ada di episode animasi.",
      "Pesan tentang persahabatan dan keberanian terasa lebih personal saat dibaca secara langsung.",
    ],
  },
  {
    emoji: "👹",
    film: "Doraemon: Nobita's Great Adventure into the Underworld",
    buku: "Doraemon Petualangan 5: Petualangan Nobita dalam Dunia Setan",
    penulis: "Fujiko F. Fujio",
    genre: "Manga/Komik",
    tahun: 1984,
    warna: "#FFDAC1",
    link: BASE + "doraemon+petualangan+setan&search=Search",
    caraCari: "Cari kata kunci Doraemon Petualangan atau Dunia Setan di katalog perpustakaan.",
    sinopsis: "Nobita membayangkan dunia di mana sihir nyata, lalu Doraemon mewujudkannya — tapi ternyata dunia sihir itu penuh bahaya setan.",
    beda: [
      "Manga menampilkan panel komedi dan ekspresi Nobita yang lebih hidup dan mengundang tawa.",
      "Film animasi menambahkan musik dan dubbing suara yang membuat suasana horor-komedi lebih terasa.",
      "Manga bisa dinikmati dengan lambat — memperhatikan setiap alat Doraemon yang kreatif.",
      "Alur di manga sedikit berbeda dengan versi film — ada adegan yang ditambah atau dikurangi.",
    ],
  },
  {
    emoji: "🧠",
    film: "Inside Out",
    buku: "Inside Out: Sebuah Novel",
    penulis: "Disney Press",
    genre: "Fiksi",
    tahun: 2015,
    warna: "#A8DADC",
    link: BASE + "inside+out+novel&search=Search",
    caraCari: "Cari kata kunci Inside Out di katalog perpustakaan.",
    sinopsis: "Riley dan kelima emosinya — Joy, Sadness, Anger, Fear, Disgust — berjuang menyesuaikan diri setelah pindah ke kota baru.",
    beda: [
      "Buku adalah novelisasi dari film animasi Pixar yang sangat populer.",
      "Film jauh lebih kuat secara emosional karena animasi dan musik Pixar yang luar biasa.",
      "Buku memberikan detail tambahan tentang bagaimana pikiran dan emosi bekerja yang tidak semua masuk film.",
      "Membaca buku cocok untuk yang ingin menikmati cerita Inside Out dengan cara yang lebih tenang.",
    ],
  },
  {
    emoji: "🗡️",
    film: "Solo Leveling",
    buku: "Solo Leveling",
    penulis: "Chugong",
    genre: "Manga/Komik",
    tahun: 2024,
    warna: "#3D405B",
    link: BASE + "solo+leveling&search=Search",
    caraCari: "Cari kata kunci Solo Leveling di katalog perpustakaan.",
    sinopsis: "Sung Jin-Woo, hunter terlemah di dunia, mendapatkan kemampuan unik untuk terus naik level sendirian dan menjadi kekuatan terkuat.",
    beda: [
      "Manhwa (komik Korea) menampilkan panel aksi yang sangat sinematik dan detail desain monster yang luar biasa.",
      "Anime adaptasinya (2024) memberikan animasi dan musik yang membuat momen level-up terasa epik.",
      "Membaca manhwa memberi kepuasan tersendiri karena bisa menikmati artwork yang sangat berkualitas.",
      "Novel web aslinya (light novel) bahkan lebih detail lagi dalam menjelaskan sistem dan lore dunianya.",
    ],
  },
  {
    emoji: "🌿",
    film: "KKN di Desa Penari",
    buku: "KKN di Desa Penari",
    penulis: "SimpleMan",
    genre: "Horror",
    tahun: 2022,
    warna: "#B5EAD7",
    link: BASE + "kkn+desa+penari&search=Search",
    caraCari: "Cari kata kunci KKN Desa Penari atau SimpleMan di katalog perpustakaan.",
    sinopsis: "Enam mahasiswa KKN di desa terpencil terjerat dalam teror supranatural yang bermula dari larangan yang tidak boleh dilanggar.",
    beda: [
      "Buku viral ini awalnya adalah thread Twitter — membacanya memberikan nuansa intim dan mencekam.",
      "Film menambahkan visual horor dan jumpscare yang tidak bisa dirasakan dari teks.",
      "Buku membangun teror secara perlahan melalui detail dan atmosfer yang sangat kuat.",
      "Beberapa detail penting tentang asal-usul kutukan lebih lengkap dijelaskan di buku.",
    ],
  },
  {
    emoji: "😤",
    film: "My Stupid Boss",
    buku: "My Stupid Boss",
    penulis: "Chaos@work",
    genre: "Fiksi",
    tahun: 2016,
    warna: "#FFB4A2",
    link: BASE + "my+stupid+boss&search=Search",
    caraCari: "Cari kata kunci My Stupid Boss di katalog perpustakaan.",
    sinopsis: "Kisah-kisah komedi tentang seorang karyawan yang harus menghadapi bos dengan kelakuan konyol dan tidak masuk akal setiap harinya.",
    beda: [
      "Buku adalah kumpulan kisah berdasarkan pengalaman nyata yang lebih detail dan lucu dari versi filmnya.",
      "Film mengembangkan cerita menjadi satu alur naratif yang lebih dramatik.",
      "Humor di buku terasa lebih segar karena ditulis seperti curhat langsung dari si karyawan.",
      "Film menambahkan unsur drama dan konflik yang tidak ada di versi buku.",
    ],
  },
  {
    emoji: "💪",
    film: "Mashle: Magic and Muscles",
    buku: "Mashle: Magic and Muscles",
    penulis: "Hajime Komoto",
    genre: "Manga/Komik",
    tahun: 2023,
    warna: "#E8DAFF",
    link: BASE + "mashle&search=Search",
    caraCari: "Cari kata kunci Mashle di katalog perpustakaan.",
    sinopsis: "Mash Burnedead hidup di dunia sihir tapi tidak bisa sihir sama sekali — ia menggantikan sihir dengan otot yang luar biasa kuat.",
    beda: [
      "Manga sangat kaya akan ekspresi komedi dan timing visual yang membuat humor lebih meledak.",
      "Anime menambahkan animasi aksi yang sangat smooth dan musik yang membuat pertarungan makin seru.",
      "Membaca manga memungkinkan kamu menikmati panel-panel komedi ikonik Mash secara langsung.",
      "Parodi dunia Harry Potter terasa lebih jelas saat membaca manga dengan perlahan.",
    ],
  },
  {
    emoji: "🌀",
    film: "Jujutsu Kaisen",
    buku: "Jujutsu Kaisen",
    penulis: "Gege Akutami",
    genre: "Manga/Komik",
    tahun: 2023,
    warna: "#3D405B",
    link: BASE + "jujutsu+kaisen&search=Search",
    caraCari: "Cari kata kunci Jujutsu Kaisen di katalog perpustakaan.",
    sinopsis: "Yuji Itadori menelan jari kutukan Ryomen Sukuna dan menjadi wadah iblis terkuat, lalu bergabung dengan jujutsu sorcerers.",
    beda: [
      "Manga menampilkan panel pertarungan yang sangat detail dengan teknik kutukan yang kompleks dan keren.",
      "Anime memberikan animasi MAPPA yang luar biasa — momen Gojo vs Sukuna jadi sangat epik.",
      "Detail tentang teknik dan aturan kutukan lebih jelas dijelaskan di manga.",
      "Membaca manga bisa lebih cepat untuk mengejar cerita terbaru sebelum anime rilis.",
    ],
  },
  {
    emoji: "👗",
    film: "Cinderella",
    buku: "Cinderela: A Night at the Ball - Suatu Malam di Pesta Dansa",
    penulis: "Disney Press",
    genre: "Fiksi",
    tahun: 2015,
    warna: "#A8DADC",
    link: BASE + "cinderela+night+ball&search=Search",
    caraCari: "Cari kata kunci Cinderela Night Ball di katalog perpustakaan.",
    sinopsis: "Kisah klasik Cinderella dalam buku bergambar mewah — malam di pesta dansa yang mengubah segalanya.",
    beda: [
      "Buku ini adalah adaptasi dari film live-action Cinderella (2015) dengan ilustrasi yang indah.",
      "Film live-action memberikan penampilan visual yang megah dan sinematografi yang memukau.",
      "Buku memberikan pengalaman membaca yang lebih intim dan cocok dinikmati bersama.",
      "Ilustrasi gaun biru ikonik Cinderella di buku terasa sangat magical.",
    ],
  },
  {
    emoji: "📚",
    film: "The Midnight Library (Segera Hadir)",
    buku: "The Midnight Library: Perpustakaan Tengah Malam",
    penulis: "Matt Haig",
    genre: "Fiksi",
    tahun: 2020,
    warna: "#E8DAFF",
    link: BASE + "midnight+library&search=Search",
    caraCari: "Cari kata kunci Midnight Library atau Matt Haig di katalog perpustakaan.",
    sinopsis: "Nora Seed menemukan perpustakaan ajaib di antara hidup dan mati yang berisi buku-buku berisi kehidupan alternatif yang bisa ia jalani.",
    beda: [
      "Novel ini sedang dalam proses adaptasi film — artinya membaca bukunya sekarang adalah pengalaman eksklusif!",
      "Detail filosofis tentang penyesalan, pilihan, dan makna hidup jauh lebih dalam di novel.",
      "Pengalaman membaca buku ini sangat personal — setiap pembaca merasakan resonansi yang berbeda.",
      "Gaya penulisan Matt Haig yang hangat dan puitis tidak akan bisa sepenuhnya tertangkap di layar.",
    ],
  },
  {
    emoji: "🧛",
    film: "Scooby-Doo!",
    buku: "Scooby-Doo! dan Vampir Misterius",
    penulis: "James Gelsey",
    genre: "Fiksi",
    tahun: 2000,
    warna: "#FFB4A2",
    link: BASE + "scooby+doo+vampir&search=Search",
    caraCari: "Cari kata kunci Scooby-Doo Vampir di katalog perpustakaan.",
    sinopsis: "Scooby-Doo dan geng Mystery Inc. menginvestigasi kemunculan vampir misterius yang menghantui sebuah kota.",
    beda: [
      "Buku adalah novelisasi petualangan Scooby-Doo yang bisa dinikmati sambil membayangkan suara Scooby yang khas.",
      "Film/serial animasi memberikan animasi, suara karakter, dan musik yang membuat misteri lebih seru.",
      "Buku cocok untuk pembaca muda yang baru mulai belajar membaca cerita misteri.",
      "Twist pengungkapan pelaku di buku bisa lebih dinikmati karena pembaca punya waktu untuk berpikir.",
    ],
  },
  {
    emoji: "⚽",
    film: "Detektif Conan: The Eleventh Striker",
    buku: "Detektif Conan: The Eleventh Striker",
    penulis: "Gosho Aoyama",
    genre: "Manga/Komik",
    tahun: 2012,
    warna: "#B5EAD7",
    link: BASE + "detektif+conan:+the&search=Search",
    caraCari: "Cari kata kunci Detektif Conan Eleventh Striker di katalog perpustakaan.",
    sinopsis: "Conan menginvestigasi serangkaian ancaman bom di stadion sepak bola yang melibatkan pemain dan penonton dalam bahaya besar.",
    beda: [
      "Manga movie memberikan pengalaman membaca misteri dengan panel visual yang membantu memvisualisasikan TKP.",
      "Film memiliki animasi aksi dan ketegangan yang dibangun melalui musik yang membuat klimaks lebih dramatis.",
      "Detail petunjuk dan deduksi Conan lebih rinci di versi manga.",
      "Manga bisa dibaca berulang untuk menemukan petunjuk tersembunyi yang ternyata sudah ada sejak awal.",
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


function QuizBox({ quiz }) {
  const [step, setStep] = useState(0);
  const [dipilih, setDipilih] = useState(null);
  const [sudahJawab, setSudahJawab] = useState(false);
  const [skor, setSkor] = useState(0);
  const [selesai, setSelesai] = useState(false);

  const current = quiz[step];
  const benar = dipilih && dipilih[0] === current.jawaban;

  const handlePilih = (p) => {
    if (sudahJawab) return;
    setDipilih(p);
    setSudahJawab(true);
    if (p[0] === current.jawaban) setSkor((s) => s + 1);
  };

  const handleNext = () => {
    if (step + 1 >= quiz.length) {
      setSelesai(true);
    } else {
      setStep((s) => s + 1);
      setDipilih(null);
      setSudahJawab(false);
    }
  };

  const handleUlang = () => {
    setStep(0);
    setDipilih(null);
    setSudahJawab(false);
    setSkor(0);
    setSelesai(false);
  };

  const skorLabel = () => {
    if (skor === quiz.length) return "Sempurna! Kamu benar-benar sudah baca bukunya! 🎉";
    if (skor >= quiz.length * 0.6) return "Bagus! Coba baca bukunya untuk tahu lebih banyak 📖";
    return "Yuk baca bukunya dulu, pasti makin paham! 😊";
  };

  if (selesai) {
    return (
      <div style={{ background: "#F0EBFF", borderRadius: "12px", padding: "18px", marginBottom: "22px", border: "1px solid #C4B5F4", textAlign: "center" }}>
        <p style={{ fontSize: "32px", margin: "0 0 8px" }}>🏆</p>
        <p style={{ fontWeight: "800", fontSize: "16px", color: "#5A4A8A", margin: "0 0 6px" }}>Skor Kamu: {skor}/{quiz.length}</p>
        <p style={{ fontSize: "13px", color: "#3D405B", margin: "0 0 16px", lineHeight: "1.6" }}>{skorLabel()}</p>
        <button onClick={handleUlang} style={{ background: "#5C9EA1", color: "white", border: "none", borderRadius: "8px", padding: "9px 20px", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}>
          Ulangi Quiz
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: "#F0EBFF", borderRadius: "12px", padding: "16px 18px", marginBottom: "22px", border: "1px solid #C4B5F4" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <p style={{ margin: 0, fontWeight: "800", fontSize: "14px", color: "#5A4A8A" }}>🧠 Quiz Buku</p>
        <span style={{ fontSize: "12px", color: "#6B7080", fontWeight: "700" }}>Soal {step + 1}/{quiz.length}</span>
      </div>
      <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#3D405B", lineHeight: "1.6", fontWeight: "600" }}>{current.soal}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
        {current.pilihan.map((p, i) => {
          let bg = "white", border = "1.5px solid #C4B5F4", color = "#3D405B";
          if (sudahJawab) {
            if (p[0] === current.jawaban) { bg = "#C8EFE0"; border = "1.5px solid #4A8B6F"; color = "#2D5A3F"; }
            else if (p === dipilih && !benar) { bg = "#FFD6D6"; border = "1.5px solid #C0392B"; color = "#7A2828"; }
          }
          return (
            <button key={i} onClick={() => handlePilih(p)}
              style={{ background: bg, border, borderRadius: "8px", padding: "9px 12px", fontSize: "13px", color, fontWeight: "600", cursor: sudahJawab ? "default" : "pointer", textAlign: "left", fontFamily: "inherit", transition: "all 0.2s" }}>
              {p}
            </button>
          );
        })}
      </div>
      {sudahJawab && (
        <>
          <div style={{ background: benar ? "#C8EFE0" : "#FFD6D6", borderRadius: "8px", padding: "10px 14px", marginBottom: "12px", border: benar ? "1.5px solid #4A8B6F" : "1.5px solid #C0392B" }}>
            <p style={{ margin: "0 0 4px", fontWeight: "800", fontSize: "13px", color: benar ? "#2D5A3F" : "#7A2828" }}>{benar ? "✅ Benar!" : "❌ Salah!"}</p>
            <p style={{ margin: 0, fontSize: "12px", color: "#3D405B", lineHeight: "1.6" }}>{current.penjelasan}</p>
          </div>
          <button onClick={handleNext}
            style={{ background: "#5C9EA1", color: "white", border: "none", borderRadius: "8px", padding: "9px 18px", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}>
            {step + 1 >= quiz.length ? "Lihat Skor" : "Soal Berikutnya →"}
          </button>
        </>
      )}
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

          {item.quiz ? (
            <QuizBox key={item.film} quiz={item.quiz} />
          ) : (
            <div style={{ background: "#F0EBFF", borderRadius: "12px", padding: "14px 18px", marginBottom: "22px", border: "1px solid #C4B5F4" }}>
              <p style={{ margin: 0, fontSize: "13px", color: "#5A4A8A", lineHeight: "1.7" }}>
                <b>Tips:</b> Tonton filmnya dulu biar tahu gambaran ceritanya, lalu baca bukunya untuk pengalaman yang jauh lebih lengkap!
              </p>
            </div>
          )}

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
        📚 From Book to Movie
      </h1>
      <p style={{ textAlign: "center", color: WARNA.abu, fontSize: "15px", marginBottom: "28px" }}>
        Film favoritmu berawal dari cerita yang luar biasa. Yuk baca bukunya!
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
