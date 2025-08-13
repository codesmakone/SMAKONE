import React from "react";
import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";

import ContentHeader from "../../Component/Content/ContentHeader";
import ContentText from "../../Component/Content/ContentText";

const TentangSMAK1 = () => {
  return (
    <div>
      <Nav />
      <div className="container w-full h-full mx-auto justify-center mt-28">
        <ContentHeader title="Sekilas Tentang SMAK 1" iframe={true} />
        <ContentText
          text="SMAK 1 PENABUR adalah salah satu sekolah Kristen paling bergengsi di Jakarta, yang berlokasi di Tanjung Duren. Dengan reputasi cemerlang di tingkat nasional dan internasional, sekolah ini berlandaskan visi untuk menjadi institusi unggul yang berlandaskan pada iman, ilmu, dan pelayanan. Tujuannya adalah mengembangkan potensi setiap siswa secara optimal dengan meneladani nilai-nilai Kristiani melalui kurikulum nasional yang diperkaya.
"
        />

        <div className="font-black text-left mx-6 sm:ml-16 xl:ml-28 text-2xl xl:text-3xl mt-12">
          Pertanyaan yang Sering Ditanyakan
        </div>

        <ContentText
          title="Seperti apa tingkat kesulitan akademik di SMAK 1?"
          text="Lingkungan akademik di SMAK 1 dirancang untuk menjadi menantang siswa untuk menjadi calon inventor. Mengingat adanya proses seleksi yang ketat, kemampuan dasar akademik siswa dapat dikatakan sangat baik. Ritme pembelajaran yang diterapkan lebih cepat dan disertai dengan materi yang lebih mendalam dibandingkan sekolah pada umumnya. Tingkat kesulitan sangat bergantung pada kemampuan adaptasi dan manajemen waktu setiap siswa sehingga bersifat relatif.
"
        />

        <ContentText
          title="Kurikulum apa yang digunakan? Apakah ada persiapan untuk studi ke luar negeri?
"
          text="SMAK 1 menggunakan Kurikulum Merdeka sebagai basis pembelajarannya. Meskipun demikian, sekolah sangat mendukung siswa yang bercita-cita melanjutkan studi ke luar negeri. Walaupun sekolah saat ini tidak secara langsung menyelenggarakan tes seperti IGCSE, O-Level, atau SAT, sekolah memberikan berbagai dukungan persiapan universitas seperti program bimbingan dan simulasi tes IELTS. Ini adalah langkah strategis untuk membekali siswa dengan salah satu syarat utama pendaftaran di banyak universitas global.
"
        />

        <ContentText
          title=" Apa saja pilihan mata pelajaran lintas minat yang tersedia?"
          text="Siswa diberikan kebebasan untuk memilih lintas minat sesuai dengan bakat dan rencana studi mereka di masa depan. Pilihan yang tersedia adalah: Bahasa: Mandarin, Jerman, dan Jepang.
Teknologi: Teknologi Informasi dan Komunikasi (TIK).
Ilmu Sosial : Ekonomi, Sosiologi, Geografi, Sejarah Minat.
Ilmu Alam: Matematika Minat, Fisika, Kimia, Biologi.
"
        />

        <ContentText
          title="Berapa lama durasi belajar dalam satu hari?
"
          text="Kegiatan belajar mengajar (KBM) dalam satu hari terdiri dari 9 hingga 10 jam pelajaran, di mana setiap jam pelajaran berdurasi 45 menit. Ini setara dengan sekitar 7 hingga 7,5 jam waktu belajar efektif di kelas, belum termasuk waktu istirahat. Hal ini menunjukkan hari yang padat dan menuntut fokus tinggi dari para siswa.
"
        />

        <ContentText
          title="Apakah kehidupan siswa hanya tentang belajar?
"
          text="Sama sekali tidak. Meskipun giat belajar adalah kewajiban, kunci sukses di SMAK 1 adalah kemampuan membagi waktu dengan baik. Sekolah mendorong siswa untuk memiliki kehidupan yang seimbang antara bidang akademik dan non-akademik. Siswa tetap memiliki waktu untuk bermain, bersosialisasi, dan mengejar hobi.

"
        />

        <ContentText
          title="Apa saja kegiatan non-akademik yang bisa diikuti?
"
          text="SMAK 1 menyediakan wadah yang sangat beragam untuk pengembangan diri di luar kelas, menunjukkan komitmen pada pendidikan holistik. Beberapa di antaranya dikategorikan sebagai berikut:
Organisasi & Kepemimpinan: OSIS, Majelis Perwakilan Kelas (MPK), Pramuka, dan menjadi panitia acara besar seperti Smakonecup.
Seni & Budaya: Klub-klub ternama seperti paduan suara Smukiez Choir dan tim tari modern F1RST.
Ekstrakurikuler: Pilihan lainnya yang mencakup berbagai bidang minat.
"
        />

        <ContentText
          title="Bagaimana kualitas guru di SMAK 1?"
          text="Kualitas pengajar adalah salah satu pilar utama SMAK 1. Setiap guru telah melewati proses seleksi yang ketat untuk memastikan mereka adalah pakar di bidangnya masing-masing. Walaupun setiap guru memiliki karakter dan metode mengajar yang unik, semuanya memiliki komitmen yang sama: memastikan siswa memahami materi dan dapat menerapkannya dalam kehidupan sehari-hari. Bahkan, beberapa guru bersedia dihubungi siswa di luar jam pelajaran. Hal ini menunjukkan tingkat dedikasi dan dukungan yang tinggi dari pihak guru untuk siswa-siswi di sini.
"
        />

        <ContentText
          title="Apakah siswa perlu mengikuti bimbingan belajar (bimbel) tambahan?
"
          text="Pada dasarnya, tidak perlu. Kurikulum SMAK 1 telah dirancang secara komprehensif agar pelajaran yang disampaikan mudah dimengerti siswa. Sekolah percaya bahwa asalkan siswa bisa fokus mendengarkan penjelasan guru di kelas dan rajin belajar secara mandiri, siswa tetap dapat meraih hasil yang memuaskan tanpa perlu les tambahan. Selain itu, mengenai persiapan TKA (Tes Kompetensi Akademik) untuk pendaftaran universitas, sekolah pun menyediakan tambahan pelajaran untuk kelas XII pada hari Sabtu yang diharapkan dapat mematangkan persiapan dan kemampuan dari peserta didik.

"
        />

        <ContentText
          title="Bagaimana cara mendaftar di SMAK 1?"
          text={
            <p>
              Informasi mengenai pendaftaran lebih lanjut dapat dilihat pada
              berbagai situs resmi sekolah, seperti:{" "}
              <a
                href="https://psbjakarta.bpkpenabur.or.id/"
                className="font-semibold text-blue-600"
              >
                BPK PENABUR
              </a>{" "}
              atau instagram{" "}
              <a
                href="https://www.instagram.com/smak1penabur/"
                className="font-semibold text-blue-600"
              >
                @smak1penabur
              </a>
            </p>
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default TentangSMAK1;
