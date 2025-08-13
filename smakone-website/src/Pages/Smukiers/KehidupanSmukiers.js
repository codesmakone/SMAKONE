import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import ContentHeader from "../../Component/Content/ContentHeader";
import ContentText from "../../Component/Content/ContentText";
import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";

import kehidupan from "../../Image/Home/Kehidupan/kehidupan.webp";

const KehidupanSmukiers = () => {
  return (
    <div>
      <Nav />
      <div className="container w-full h-full mx-auto justify-center pb-5 mt-28">
        <ContentHeader
          category="Kehidupan Smukiers"
          title="Kehidupan Selama Menjadi SMUKIERS"
          img={kehidupan}
          alt="kehidupan"
        />

        <ContentText
          text="Banyak orang beranggapan bahwa menjadi murid di SMAK 1 Penabur Jakarta terus menerus belajar. Saat membayangkan tentang keseharian siswa SMAK 1, tidak jarang pikiran kita langsung tertuju pada belajar untuk ulangan yang sulit, mengerjakan tugas yang menumpuk, dan jadwal yang padat. Tapi, realita kehidupan para Smukiers jauh lebih beragam dari sekedar belajar saja. SMAK 1 memampukan siswa-siswinya untuk berkembang menjadi pribadi yang cerdas dan berintegritas. Tanpa berlama-lama lagi, mari kita lihat sisi menarik dari SMUKIERS.
"
        />

        <ContentText
          title="Kehidupan Akademik
"
          text="Setiap harinya, siswa-siswi SMAK 1 menjalani 8-9 jam pembelajaran, yang berlangsung selama 45 menit setiap mata pelajaran. Pelajaran  yang disampaikan oleh guru-guru SMAK 1 bervariasi dan bisa disesuaikan oleh minat masing-masing siswa. Pilihannya mencakup seni (vokal, musik, tari, rupa),  serta mata pelajaran pilihan bahasa asing (Mandarin, Jerman, Jepang). Selanjutnya, bagi murid yang memiliki minat pada mata pelajaran biologi, fisika, kimia, ekonomi, geografi, matematika dan informatika serta ingin mengikuti OSN juga dapat bergabung dalam Science Club. Pelatihan untuk klub ini disediakan oleh SMAK 1 setiap minggunya di hari Sabtu. 
"
        />

        <ContentText
          title="Aktivitas Rohani
"
          text="SMAK 1 tidak hanya berfokus pada mengembangkan akademik siswa, tetapi pada kerohanian mereka. Setiap pagi, seluruh kelas mengawali hari dengan mengikuti renungan pagi (morning devotion). Selain itu, SMAK 1 juga rutin menyelenggarakan kebaktian rutin setiap bulan, kebaktian Natal, kebaktian Paskah, kebaktian membuka tahun, kebaktian menutup tahun, persekutuan kelas, dan masih banyak lagi.
"
        />

        <ContentText
          title="Acara yang Meriah
"
          text="Di luar rutinitas pembelajaran, OSIS SMAK 1 juga secara aktif merancang berbagai macam acara. Setiap acara yang diselenggarakan menjadi momen-momen tidak terlupakan yang memperkaya pengalaman bagi murid SMAK 1. Contohnya, Smak One Cup, Smukiez Art Performance, BazOne, dan TEDxSmakOne.

"
        />

        <ContentText
          title="Waktu Ekstrakurikuler & Klub
"
          text="Selain kegiatan akademik, kegiatan non-akademik juga terwadahi dengan baik di SMAK 1. Siswa-siswi SMAK 1 dapat mengikuti beragam ekstrakurikuler yang sesuai dengan minat masing-masing. Beberapa di antaranya adalah MUN (Model United Nations), Manga, Business Plan, Pramuka, PMR, Paskibra, dan Bahasa Korea. Pilihan ekstrakurikuler yang ada pun dapat berganti dari tahun ke tahun. Adapun klub-klub yang bisa diikuti antara lain: club olahraga KR1ZA, club tari F1RST dan Serenity, club paskibra FlashOne, club jurnalistik OneJournal, dan masih banyak lagi. Melalui ekstrakurikuler serta klub- klub ini, SMAK 1 mendorong para murid untuk mengembangkan potensi diri mereka sesuai bakat dan minat yang dimiliki.
"
        />

        <ContentText
          title="Organisasi dan Kepanitiaan
"
          text="SMAK 1 dipenuhi dengan berbagai organisasi serta acara yang menarik dan tidak kalah serunya dengan kegiatan serupa yang ada di luar sekolah. Dengan menjadi bagian dari anggota organisasi atau kepanitiaan, siswa-siswi dapat menambah pengalaman, meningkatkan keterampilan interpersonal, komunikasi, dan belajar bekerja sama secara efektif.
"
        />

        <ContentText
          title="I-Project

"
          text="I-Project merupakan program unggulan yang ada di SMAK 1, dimana para murid menyusun suatu proyek sesuai bidang yang mereka minati. Program ini pun dilaksanakan dengan bimbingan para mentor yang memberikan arahan dan masukan. Melalui I-Project, SMAK 1 melahirkan calon inventor masa depan yang dapat mengembangkan kemampuan berpikir kritis, kreatif, dan menjadi tangguh dengan pembuatan proyek yang bermanfaat bagi orang sekitar.

"
        />

        <ContentText
          title="Waktu Istirahat


"
          text="Kantin SMAK 1 menyediakan beragam jenis makanan dan minuman, mulai dari hidangan berat, camilan, hingga minuman yang menyegarkan. Kemudahan transaksi juga hadir dengan sistem pembayaran non-tunai (cashless). Selain makan saat jam istirahat, banyak pula para Smukiers yang memilih untuk belajar dan membaca buku di perpustakaan. Perpustakaan SMAK 1 menawarkan ruangan yang nyaman, asri, dan tenang. Koleksi buku yang terdapat juga cukup lengkap, dan uniknya, murid-murid dapat mengajukan permintaan untuk mengadakan buku baru. Ditambah lagi, perpustakaan juga dilengkapi dengan beberapa komputer yang bisa digunakan oleh para siswa sesuai dengan kebutuhan belajar mereka. 


"
        />

        <ContentText
          text="Bagaimana? Menarik sekali bukan kehidupan dari para Smukiers? Tertarik untuk bergabung?



"
        />

        <div className="flex justify-between mt-10 px-6 sm:px-24 lg:px-14 xl:px-24">
          <HashLink
            to="/#Kehidupan"
            className="
                        text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-ml-8 lg:ml-0 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Home
          </HashLink>
          <Link
            to="/Kehidupan_smukiers/tips"
            className="
                        text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Artikel Berikutnya
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KehidupanSmukiers;
