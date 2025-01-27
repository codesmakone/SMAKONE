import React from "react";

import Image1 from "../../../Image/Clubs/SmukiezChoir/1.png";
import Image2 from "../../../Image/Clubs/SmukiezChoir/2.jpg";
import Image3 from "../../../Image/Clubs/SmukiezChoir/3.jpg";
import Image4 from "../../../Image/Clubs/SmukiezChoir/4.png";
import Image5 from "../../../Image/Clubs/SmukiezChoir/5.jpg";
import Image6 from "../../../Image/Clubs/SmukiezChoir/6.jpg";
import Image7 from "../../../Image/Clubs/SmukiezChoir/7.jpg";
import Image8 from "../../../Image/Clubs/SmukiezChoir/8.jpg";

//Pengaturan Ukuran Gambar

//Start
const imageSizes = {
  Image1: { width: "1500px", height: "600px" },
  Image2: { width: "400px", height: "auto" },
  Image3: { width: "400px", height: "auto" },
  Image4: { width: "1500px", height: "600px" },
  Image5: { width: "400px", height: "auto" },
  Image6: { width: "1500px", height: "600px" },
  Image7: { width: "400px", height: "auto" },
  Image8: { width: "1500px", height: "600px" },
};
//End

const SmukiezChoir = () => {
  return (
    <div className="max-w-[75rem] mx-auto px-6 space-y-10">
      {/* Header Section */}
      <header className="text-center py-8">
        <h6 className="text-4xl font-bold mb-4">Clubs</h6>
        <h1 className="text-5xl font-bold mb-4">Smukiez Choir</h1>
        <hr className="border-t-2 border-gray-300 mb-6" />
        <h3 className="text-3xl font-semibold mb-6">
          Smukiez Choir, Ikon Paduan Suara Indonesia dengan Prestasi Gemilang
        </h3>
      </header>

      <img
        src={Image1}
        alt="Choir Logo"
        className="w-full h-auto max-w-[1500px] mx-auto rounded-lg shadow-md mb-6"
      />

      {/* WHAT IS SC Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">WHAT IS SC</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={Image2}
            alt="Vietnam Award"
            style={imageSizes.Image2}
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-700 text-lg leading-8 text-justify">
            Smukiez Choir, paduan suara yang dimiliki oleh SMAK 1 PENABUR Jakarta, telah
            menjadi ikon di dunia paduan suara sejak didirikan pada tahun 1986. Sepanjang
            perjalanan panjangnya, Smukiez Choir telah berhasil meraih berbagai prestasi
            gemilang, baik di tingkat nasional maupun internasional. Selain itu, mereka juga
            aktif dalam pelayanan di gereja, terutama di Gereja Kristen Indonesia (GKI),
            dengan menyanyikan lagu-lagu rohani dalam paduan suara.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <p className="text-gray-700 text-lg leading-8 text-justify">
            Beberapa prestasi terbesar Smukiez Choir antara lain adalah meraih Gold Diploma
            dan menjadi pemenang kategori di Kompetisi Paduan Suara Internasional Vietnam
            ke-2 pada tahun 2012, serta menjadi Finalis di Hue Choir Prize pada tahun yang
            sama. Tidak hanya itu, Smukiez Choir juga pernah tercatat dalam jajaran 1.000
            Paduan Suara Dunia dalam acara Musica Mundi pada Januari 2008. Di level domestik,
            paduan suara ini sering memenangkan berbagai kejuaraan yang diselenggarakan oleh
            universitas-universitas ternama di Indonesia.
          </p>
          <img
            src={Image3}
            alt="Hue Finalist"
            style={imageSizes.Image3}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
      <p className="text-gray-700 text-lg leading-8 text-justify indent-lg">
        Jika melihat satu tahun terakhir, 
        prestasi paling membanggakan Smukiez Choir diraih dalam ajang Best Students 
        Choir Festival (BSCF) 2024, di mana mereka berhasil meraih Gold Diploma 
        dengan skor tertinggi di kategori Senior High School Choir. Di bulan September 2024, 
        Smukiez Choir juga berhasil meraih Gold Award dalam ajang Paduan Suara 
        PENABUR International Choir Festival (PICF) 2024 yang digelar di Kompleks 
        PENABUR International Kelapa Gading, Jakarta Utara. Dengan berbagai prestasi
        tersebut, Smukiez Choir terus membuktikan eksistensinya sebagai salah satu paduan suara 
        terbaik di Indonesia, yang tidak hanya mengharumkan nama SMAK 1 PENABUR Jakarta, 
        tetapi juga membawa nama Indonesia ke kancah internasional.
      </p>

      {/* WEEKLY PRACTICE Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">WEEKLY PRACTICE</h2>
      <img
          src={Image4}
          alt="Practice"
        className="w-full h-auto max-w-[1500px] mx-auto rounded-lg shadow-md mb-6"
      />
        <p className="text-gray-700 text-lg leading-8 text-justify indent-lg">
          Demi meraih prestasi yang memukau, Smukiez Choir menjalani latihan yang rutin dan
          intensif setiap minggunya. Mengingat tuntutan akademis yang tinggi di sekolah,
          para anggota paduan suara ini harus pandai membagi waktu antara kegiatan belajar
          di sekolah dan latihan paduan suara. Latihan Smukiez Choir dilakukan setelah jam
          sekolah, dengan frekuensi yang disesuaikan dengan kebutuhan setiap penampilan.
        </p>
      </section>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={Image5}
          alt="BSCF Award"
          style={imageSizes.Image5}
          className="rounded-lg shadow-md"
        />
        <p className="text-gray-700 text-lg leading-8 text-justify">
          Selama latihan, Smukiez Choir dibimbing oleh pelatih sekaligus konduktor paduan suara,
           yaitu Paulus Chandra (Ko PC). Latihan mingguan ini tidak hanya diisi dengan proses belajar lagu, 
           tetapi juga diwarnai dengan kebersamaan dan semangat kekeluargaan. Meskipun demikian,
            para anggota tetap menjaga keseriusan dalam mempelajari setiap lagu yang disiapkan. 
            Dalam waktu yang relatif singkat, Smukiez Choir mampu menguasai sebuah lagu hanya dalam beberapa minggu, 
            bahkan termasuk dengan latihan koreografi yang mempercantik penampilan mereka. 
            Standar tinggi dalam penampilan selalu dijaga, 
            menjadikan setiap pertunjukan mereka tak hanya memukau secara vokal, 
            tetapi juga secara visual.
        </p>
      </div>

      {/* BSCF & PICF 2024 Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">BSCF & PICF 2024</h2>
        <img
          src={Image6}
          alt="PICF Award"
          className="w-full h-auto max-w-[1500px] mx-auto rounded-lg shadow-md mb-6"
        />
       <p className="text-gray-700 text-lg leading-8 text-justify indent-lg">
          Seperti yang telah disinggung sebelumnya, kelompok paduan suara kebanggaan 
          SMAK 1 PENABUR Jakarta ini juga baru saja meraih Gold Award dengan nilai 
          85.10 di ajang BEST Students Choir Festival (BSCF) 2024. Prestasi ini 
          menjadi pencapaian luar biasa yang mampu menunjukkan dedikasi, 
          kerja keras, dan talenta dari setiap anggotanya. Dengan persaingan ketat 
          dari berbagai paduan suara tingkat seluruh Sekolah Penabur, Smukiez Choir 
          mampu memukau dewan juri melalui Sound Quality yang baik, penjiwaan lagu 
          yang mendalam, serta Artistic Impression yang indah. Keberhasilan ini 
          menjadi bukti bahwa usaha yang konsisten dalam mengejar kesempurnaan 
          akhirnya berbuah manis.
        </p>
      </section>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={Image7}
          alt="Weekly Practice"
          style={imageSizes.Image7}
          className="rounded-lg shadow-md"
        />
        <p className="text-gray-700 text-lg leading-8 text-justify">
          Selain itu, Smukiez Choir kembali menorehkan prestasi gemilang dengan meraih G
          old Award Level I dengan nilai 83.54 di ajang Penabur International Choir 
          Festival (PICF) 2024. Dengan persiapan yang lebih matang dan latihan yang 
          intensif setiap hari, Smukiez Choir berhasil menampilkan yang terbaik untuk 
          PICF 2024. Penampilan Smukiez Choir di hadapan dewan juri dan peserta dari 
          berbagai sekolah membuktikan kualitas dan dedikasi tinggi dari seluruh anggota, 
          Paulus Chandra (pelatih), serta dukungan penuh dari sekolah. Keberhasilan ini 
          menambah deretan prestasi membanggakan dan semakin memperkuat reputasi Smukiez 
          Choir sebagai salah satu paduan suara terbaik di tingkat nasional maupun internasional.
        </p>
      </div>
      <p className="text-gray-700 text-lg leading-8 text-justify indent-lg">
        Untuk mencapai prestasi-prestasi tersebut, Smukiez Choir menjalani jadwal 
        latihan yang padat hampir setiap hari, terutama menjelang kompetisi BSCF 
        dan PICF 2024. Latihan yang sungguh-sungguh dipimpin oleh Paulus Chandra 
        (pelatih) meliputi teknik vokal, penghayatan lagu, hingga kekompakan gerakan. 
        Meskipun sangat berat, semangat murid-murid yang tinggi serta dukungan 
        dari pelatih dan pihak sekolah menjadi motivasi utama Smukiez Choir angkatan 
        2024-2025. Setiap anggota memberikan komitmen penuh untuk mengatasi berbagai 
        tantangan, termasuk mengorbankan waktu pribadi demi menjaga kualitas penampilan. 
        Kini, keberhasilan mereka di BSCF dan PICF 2024 menjadi inspirasi bagi generasi 
        selanjutnya untuk terus mengharumkan nama Smukiez Choir dan SMAK 1 PENABUR dalam 
        \dunia paduan suara.
      </p>

      {/* PERFORMANCE Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">PERFORMANCE</h2>
        <img
          src={Image8}
          alt="Performance"
          className="w-full h-auto max-w-[1500px] mx-auto rounded-lg shadow-md mb-6"
        />
        <p className="text-gray-700 text-lg leading-8 text-justify indent-lg">
          Selain deretan prestasi gemilang yang berhasil diraih, Smukiez Choir, sebagai 
          salah satu klub seni suara di SMAK 1 PENABUR Jakarta, selalu berhasil memukau 
          penonton dengan harmonisasi indah dalam setiap penampilannya di acara sekolah.
          \Dikenal dengan teknik vokal yang terlatih dan anggota yang berbakat, paduan 
          suara ini mampu membawakan berbagai genre musik, mulai dari lagu tradisional 
          hingga pop, dengan kualitas suara yang luar biasa di setiap event SMAK 1 PENABUR Jakarta.
        </p>
      </section>
      <p className="text-gray-700 text-lg leading-8 text-justify indent-lg">
        Penampilan Smukiez Choir menjadi bagian tak terpisahkan dari acara-acara 
        besar di SMAK 1, seperti Natal, CNYxVALS, Paskah, Independence Day, dan Smukiez 
        Art Performance (SAP). Dalam setiap kesempatan, Smukiez Choir menyesuaikan 
        penampilan paduan suara mereka dengan tema acara. Pada Perayaan Natal dan 
        CNYxVALS, mereka menyajikan lagu-lagu ceria yang mampu memeriahkan suasana Natal, 
        Tahun Baru Imlek dan Valentine. Saat Paskah, Smukiez Choir membawakan lagu 
        rohani yang penuh kedamaian, menciptakan suasana reflektif. Dalam perayaan 
        Independence Day, mereka menghadirkan lagu-lagu nasional yang membangkitkan 
        semangat kebangsaan. Smukiez Choir akan menunjukkan penampilan mereka yang 
        lebih dramatis, dengan menggabungkan musik dan teater dalam pertunjukan yang 
        memukau, setiap kali mereka menjadi pengisi acara Smukiez Art Performance 
        setiap tahunnya. Seluruh penampilan Smukiez Choir tidak hanya menampilkan 
        kemampuan vokal yang luar biasa, tetapi juga membuktikan dedikasi mereka 
        dalam menghidupkan setiap momen spesial di SMAK 1 PENABUR Jakarta.
      </p>
    </div>
  );
};

export default SmukiezChoir;
