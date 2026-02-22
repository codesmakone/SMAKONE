import React from "react";

// Import Component
import BidangSection from "../../../Component/Osis/BidangSection";
import OsisTeam from "../../../Component/Osis/OsisTeam";

// Import Image
import Ivana from "../../../Image/Osis/Bidang_10/ivana.webp";
import Jaclyn from "../../../Image/Osis/Bidang_10/jaclyn.webp";
import Michelle from "../../../Image/Osis/Bidang_10/michelle.webp";
import Mariangelic from "../../../Image/Osis/Bidang_10/mariangelic.webp";
import Gabrielle from "../../../Image/Osis/Bidang_10/gabrielle.webp";

const OSIS_10 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 10"
        desc="Bidang Pembinaan Komunikasi dalam Bahasa Inggris"


        person1={
          <BidangSection
            img={Ivana}
            alt="Ivana"
            name="Ivana Roxanne Subakti"
            desc="Hai guyss, perkenalkan nama aku Ivanaa, biasa dipanggil iv ato ga vana. This year, I am section 10's coordinator and I am grateful for the opportunity. These days my hobbies are watching movies and playing games with my friends. Kalo ada yang mau recommend film ato series boleh banget 🙌🏻 If you guys have any questions or inquiries about anything feel free to hit me up on insta @ivv.rs"
          />
        }
        person2={
          <BidangSection
            img={Jaclyn}
            alt="Jaclyn"
            name="Jaclyn Aditya The"
            desc="Haii semuanyaa!! Kenalin nama aku Jaclyn dari kelas XI3, tapi panggil aja Jac atau Jekii. Tahun ini aku menjabat sebagai anggota OSIS bidang 10 🫡 A little about mee, I have a lot of hobbies like watching movies, listening to music, and baking. Fun fact dikitt, aku suka dengerin genre musik apapunn hehe 😚 tapi my current favorites are Tame Impala and Lana del Rey 🎧 Kalo kalian mau kasih rekomendasi film atau lagu, or even mau ngobrol ajaa, feel free to contact mee di ig @jacc.adity See youu and have fun in Smukiee! 💖💥"
          />
        }
        person3={
          <BidangSection
            img={Mariangelic}
            alt="Mariangelic"
            name="Mariangelic Keshia Manujaya"
            desc="Haiihai!! 👋🏻 Nama aku Mariangelic Keshia Manujaya, biasanya dipanggil keshia/kei. Tahun ini, aku berkesempatan menjadi anggota osis bidang 10! A little bit about me, I LOVEE watching movies, especially a good mystery movie with a mix of thriller 😍 Jadi kalo kalian punya rekomendasi film, bolee banget saling sharing yaa! Selain nonton, aku juga hobi nyanyii dan saat ini aku masuk dalam club Smukiez Choir 🎶! Fun factt, aku tipe orang yang seneng ketemu orang baru, so dont be scared kalo kalian mau ngobrol2/kenal lebih dekat lagii. Feel free to hmu on my ig @keshiamanujaya! Have funn in smukie all!! 🔥🔥"
          />
        }
        person4={
          <BidangSection
            img={Michelle}
            alt="Michelle"
            name="Michelle Christina Nursiman"
            desc="Hii everyonee !!👋👋 My name is Michelle. Right now I'm undergoing my first year of high school 🔟. This year, I'm also a member of section 10! My hobbies would be watching movies and listening to music🎥🎶. I think it's important to always stay kind and empathetic towards each other. If you have any questions regarding our section, feel free to ask me @mcn._.w on Instagram! (๑•̀ㅂ•́)و✧"
          />
        }
        person5={
          <BidangSection
            img={Gabrielle}
            alt="Gabrielle"
            name="Gabrielle Angeline Stephanson Li"
            desc="Hii everyonee!! Kenalin aku Gabrielle, biasanya dipanggil Gaby, warga X4. Tahun ini aku menjabat sebagai anggota bisang 10 🫣. Aku suka debat (ayo join EDS guys it's super fun 😋), baca novel, main badminton, main piano, makeup, tidur, and makan boneless crispy chicken dari Family Mart di seberang sekolah (itu enak banget serius ga boong). Funfact(?) biasanya aku tiap pulang sekolah jalan ke CP sendirian buat belajar di Fore 🥶 (sekarang udah jarang si, soalnya takut uangnya abis). I'm chronically online and looking for a lot of new friends so just hmu at my insta @gabrielle_angeline.123. I hope you enjoy Smukie just as much as I do!!💕"
          />
        }
        Description={true}
        DescBid="Bidang 10 adalah bidang yang berperan dalam pembinaan komunikasi dalam Bahasa Inggris. Bidang kami mendorong warga SMAK 1 Penabur untuk menggunakan Bahasa Inggris dalam wilayah sekolah terutama dengan program English Day. Melalui program-program lain seperti One Feed, One FM dan SEED, kami juga berusaha untuk meningkatkan kemampuan warga Smak 1 dalam mendengar, memahami dan berbicara dalam Bahasa Inggris."
        Program={true}
        ProgramList={
          [
            //PENDING
            'SEED - Suatu acara yang dijalankan dengan memakai Bahasa Inggris. Melalui SEED, kita mendorong siswa/i Smak 1 untuk mendengarkan dan berinteraksi dengan Bahasa Inggris.',
            'One FM - Bidang 10 memanfaatkan sarana radio sekolah dan memilih beberapa siswa/i untuk menjadi pembawa radio sekolah, dimana mereka bisa memutar lagu dan berbincang-bincang dalam bahasa Inggris. Program ini dijalankan setiap hari Rabu di jam istirahat kedua.',
            'NEST - Poster dengan terjemahan bahasa Inggris yang dipajang di dinding toilet untuk meningkatkan literasi bahasa Inggris siswa-siswi.',
            'English Day, English Day merupakan program yang dilaksanakan secara rutin setiap hari Rabu dan Jumat dimana seluruh warga SMAK 1 dihimbau untuk menggunakan Bahasa Inggris dalam proses belajar-mengajarnya. Bahasa Inggris diterapkan pada doa dan renungan pagi, salam guru, proses pengajar oleh guru, serta percakapan sehari-hari antar warga SMAK 1',
            'Smukiez Lounge - Memberi kesempatan bagi siswa-siswi untuk memanfaatkan waktu istirahatnya dengan bermain board games yang berbasis bahasa Inggris, agar dapat membantu dalam meningkatkan skill komunikasi bahas Inggris',
            'Literacy Club - Klub yang berfokus dalam membaca buku, menonton film, dan menulis ulasan buku & film yang akan diunggah di akun instagram REVER1E',
          ]
        }

        dirHome={true}
      />
    </div>
  );
};

export default OSIS_10;
