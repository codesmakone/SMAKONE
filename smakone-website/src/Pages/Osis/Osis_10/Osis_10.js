import React from "react";

// Import Component
import BidangSection from "../../../Component/Osis/BidangSection";
import OsisTeam from "../../../Component/Osis/OsisTeam";

// Import Image
import Michelle from "../../../Image/Osis/Bidang_10/Michelle.jpeg";
import Ivana from "../../../Image/Osis/Bidang_10/Ivana.jpg";
import Jaclyn from "../../../Image/Osis/Bidang_10/Jaclyn.png";

const OSIS_10 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 10"
        desc="Bidang Pembinaan Komunikasi dalam Bahasa Inggris"


        person1={
          <BidangSection
            img={Michelle}
            alt="Michelle"
            name="Michelle Huang"
            desc="Hi everyone! I‘m Michelle but people normally call me Elle!! Currently I‘m section 10‘s coordinator, and I hope you all enjoy our programs! I enjoy travelling, strolling around a park, and being with my family & friends 💌 Probably a small funfact abt me is that i listen to rock lol (scorpions, the police, etc) Btw u can check all my travel moments at @laviestellee !! (Active and always updated!) If you‘re reading this till here, make sure to check out my friend Rachelle from section 4😉"
          />
        }
        person2={
          <BidangSection
            img={Ivana}
            alt="Ivana"
            name="Ivana Roxanne Subakti"
            desc="Hii semuaa 👋🏻, kenalin saya Ivana, boleh manggil vana atau iv aja kokk, tahun ini aku berada di kelas X-1‼️ Hobi aku biasanya nonton filmm 🎥 kalo mau kasih film recommendation boleh banget 🤩 aku si semua genre gas nonton‼️ Aku juga suka dengerin musik kalo lagi nugass, jujur aku gaada favorite artist karena setiap minggu ganti teruss 😥 Anywayss kalo kalian ada any questions about me atau apa aja feel free to hit me up on my instagramm @ivv.rs "
          />
        }
        person3={
          <BidangSection
            img={Jaclyn}
            alt="Jaclyn"
            name="Jaclyn Aditya The"
            desc="Haii semuanyaa!! Kenalin nama aku Jaclyn dari kelas X9, tapi panggil aja Jac atau Jekii. Tahun ini aku menjabat sebagai anggota OSIS bidang 10 🫡 A little about mee, I have a lot of hobbies like watching movies, listening to music, and baking. Fun fact dikitt, aku suka dengerin genre musik apapunn hehe 😚 tapi my current favorites are The Neighborhood and Lana del Rey 🎧 Kalo kalian mau kasih rekomendasi film atau lagu, or even mau ngobrol ajaa, feel free to contact mee di ig @jacc.adity See youu and have fun in Smukiee! 💖💥"
          />
        }
        Description={true}
        DescBid="Bidang 10 adalah bidang yang berperan dalam pembinaan komunikasi dalam Bahasa Inggris. Bidang kami mendorong warga SMAK 1 Penabur untuk menggunakan Bahasa Inggris dalam wilayah sekolah terutama dengan program English Day. Melalui program-program lain seperti One Feed, One FM dan SEED, kami juga berusaha untuk meningkatkan kemampuan warga Smak 1 dalam mendengar, memahami dan berbicara dalam Bahasa Inggris."
        Program={true}
        ProgramList={
          [
            //PENDING
            'SEED - Suatu acara yang dijalankan dengan memakai Bahasa Inggris. Melalui SEED, kita mendorong siswa/i Smak 1 untuk mendengarkan dan berinteraksi dengan Bahasa Inggris.',
            'One FM - Bidang 10 memanfaatkan sarana radio sekolah dan memilih beberapa siswa/i untuk menjadi pembawa radio sekolah, dimana mereka bisa memutar lagu dan berbincang-bincang dalam bahasa Inggris. Program ini dijalankan setiap hari Rabu dan Jumat di jam istirahat kedua.',
            'NEST - Poster dengan terjemahan bahasa Inggris yang dipajang di dinding toilet untuk meingkatkan literasi bahasa Inggris siswa-siswi',
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
