import React from "react";

// Import Component
import BidangSection from "../../../Component/Osis/BidangSection";
import OsisTeam from "../../../Component/Osis/OsisTeam";

// Import Image
import Arabelle from "../../../Image/Osis/Bidang_3/Arabelle.PNG";
import Carlton from "../../../Image/Osis/Bidang_3/Carlton.jpg";
import Bianca from "../../../Image/Osis/Bidang_3/Bianca.jpg";
import Vincent from "../../../Image/Osis/Bidang_3/Vincent.jpg"

const OSIS_3 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 3"
        desc="Bidang Pembinaan Kepribadian Unggul, Wawasan Kebangsaan, dan Bela Negara"
        person1={
          <BidangSection
            img={Bianca}
            alt="Bianca Margareth Soetopo"
            name="Bianca Margareth Soetopo"
            desc="hallo semuaa, perkenalkan aku Bianca atau bisa dipanggil bibii juga. Pada tahun ini aku berkesempatan untuk menjadi koordinator bidang 3. Fun fact dikit tentang hobby aku, aku suka dance dari kecil dan aku sekarang anggota seren1ty, selain dance aku juga suka diving & hiking. Kalau kalian mau tanya-tanya atau temenan sama aku.. bisa langsung aja dm ig aku di @biancasoetopo_ see you guys in smukiee!!!"
          />
        }
        person2={
          <BidangSection
            img={Arabelle}
            alt="Arabelle Soetarso"
            name="Arabelle Soetarso"
            desc="Stroberi mangga apel, hi semuanyaa! Kenalin nama aku Arabelle biasa dipanggil abel 👋. Tahun ini aku di beri kesempatan menjadi anggota di bidang 3️⃣!! Hobi aku nonton film, dengerin lagu, tidur, makan, sama main game angangang 🤣. Kalo mau tanya2 tentang apapun itu ato mau temenan sama aku boleh bgt chat ig aku yeaa @arabelle.ss 💜 have fun in smukie!!"
          />
        }
        person3={
          <BidangSection
            img={Vincent}
            alt="Vincent Valentino"
            name="Vincent Valentino"
            desc="Halo... perkenalkan aku Vincent. Puji Tuhan tahun ini aku menjabat sebagai anggota OSIS bidang 3... Hobi aku berolahraga seperti bulutangkis. Kalo mau contact aku bisa contact aku di ig @vincent.v188. Thanks and have fun in smukie."
          />
        }

        person4={
          <BidangSection
             img={Carlton}
             alt="Carlton Invanio"
             name="Carlton Invanio"
             desc="Halo semua, perkenalkan saya Carlton Invanio. I orang yang very open-minded, dan everything is my hobby dan I suka coba-coba hal baru, apalagi yang belum pernah I coba. I juga suka nonton film, anime, YT ama baca buku. My MBTI is ENTJ dan I suka nebak MBTI orang punya. Kalo mau tanya apapun bisa dm di IG I @carltoninvanio, see you..."
           />
        }

        Description={true}
        DescBid="Bidang 3 adalah bidang yang bertanggung jawab dalam kegiatan-kegiatan yang bertujuan untuk melatih dan mengembangkan kepribadian dan wawasan kebangsaan peserta didik serta menumbuhkan sikap bela negara. Pengembangan tersebut kami jalankan melalui program-program yang kami adakan seperti Perayaan-perayaan Hari Nasional, Pasukan Pengibar Bendera (Paskibra), Pramuka, dan berbagai program lainnya yang dapat menanamkan rasa cinta tanah air dalam diri peserta didik SMAK 1."
        Program={true}
        ProgramList={[
          //UPDATED 2026
          "Upacara Rutin - Upacara Bendera yang dilaksanakan setiap bulan pada hari Kamis oleh anggota tim paskibra SMAK 1 PENABUR (FlashOne)",
          "Upacara Hari Besar - Upacara Bendera yang dilaksanakan untuk memperingati hari besar, pada bulan Mei, Agustus, Oktober, dan November",
          "Perayaan HUT RI - Perayaan hari kemerdekaan Indonesia yang diisi dengan berbagai kegiatan untuk menjunjung tinggi bela negara, dan menyadarkan siswa akan pentingnya mengisi kemerdekaan",
          "Perayaan Hari Guru SMAK 1 PENABUR - Pemberian tanda kasih dan disusun acara untuk menghormati pada guru yang telah mendidik murid di sekolah",
          "Paskibra (FlashOne) - Anggota paskibra yang menjadi petugas upacara berintegritas",
          "TOMAT (Tolong, Maaf, Terimakasih) - Konten seperti vidio dan poster yang bertujuan untuk mengingatkan siswa pentingnya menggunakan kata Tolong, Maaf, dan Terima kasih dalam kehidupan sehari-hari",
          "RESTORE - Peserta didik dapat berkunjung ke salah satu destinasi wilayah yang ada di Indonesia untuk memperkenalkan budaya sosial yang ada di Indonesia kepada siswa/siswi SMAK 1 PENABUR dengan tujuan agar dapat berperan aktif dalam menjelajahi dan mengenal lebih dalam mengenai budaya-budaya di Indonesia",
          "K1SAH - Bekerja sama dengan ektrakurikuler manga untuk membuat komik singkat setiap perayaan hari-hari besar Indonesia",
          "Lagu Wajib Nasional - Memutarkan lagu wajib Nasional menggunakan radio sekolah untuk menanamkan jiwa nasionalisme dan cinta tanah air peserta didik SMAK 1 PENABUR",
        ]}
        dir="/OSIS/bidang4"
      />
    </div>
  );
};

export default OSIS_3;
