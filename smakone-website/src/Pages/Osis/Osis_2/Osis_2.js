import React from "react";

// Import Component
import BidangSection from "../../../Component/Osis/BidangSection";
import OsisTeam from "../../../Component/Osis/OsisTeam";

// Import Image
import Elena from "../../../Image/Osis/Bidang_2/Elena.png";
import Valencia from "../../../Image/Osis/Bidang_2/Valencia.png";
import Putu from "../../../Image/Osis/Bidang_2/Putu.JPG";
import Carmeline from "../../../Image/Osis/Bidang_2/Carmeline.jpg";
import Jessica from "../../../Image/Osis/Bidang_2/Jessica.png";

const OSIS_2 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 2"
        desc="Bidang Pembinaan Budi Pekerti Luhur dan Akhlak Mulia"
        person1={
          <BidangSection
            img={Putu}
            alt="Putu"
            name="Putu Acyntia Kanaya Ardani"
            desc="haiii alll! Kenalin, aku Putu Acyntia Kanaya Ardani selaku koordinator bidang 2 ✌️🐰. Kalian bisa panggil aku cyntia/cyn! One thing about me is that I have such an attachment to music 🎶. Aku suka banget nyanyi, main piano n guitar, and religiously listen to songs on spotify 🎧. Kalo kalian mau ngobrol or punya song recs, don't hesitate to hmu on my ig @cyntia_ardani! Have fun and goodluck in smukieee 🤩💕"
          />
        }
        person2={
          <BidangSection
            img={Jessica}
            alt="Jessica"
            name="Jessica Faustine Karnali"
            desc="Haii semuanyaa, kenalinn nama akuu Jessica Faustine Karnali, biasanyaa orang2 panggilnya Jess F, Akuu di osis menjabat sebagai anggotaa bidang 2 🫂🫂, oyaa fun fact tentang akuu, aku suka bgtss desert maniss jadi kl ada yang rekomendasi desert yang enakk kasi tau yah 😉,  Kalauu kalian mau ngobrol/lebih kenal sama aku, bisa dm or follow ig akuu yaah @jessicaftine. Salam kenall guys, enjoy and goodluckk yaa in smukiee 💯🫡😍"
          />
        }
        person3={
          <BidangSection
            img={Elena}
            alt="Elena"
            name="Elena Leticia Hendrawan"
            desc="Hiiii everyonee!!! Salam kenal, nama aku Elena biasa dipanggil el atau ele 😁. Aku suka banget dengerin musik tapi funfact, i don't have a favorite song. Another thing that i love to do is socializing & yapping (dasarnya aja yang emang bawel 😶) soo if you ever walk past me don't hesitate to say hi!! P.s im crazy over matcha!!!!! 🌱 Feel free to hmu on my ig @eln.ltcia if you want to chit chat!!"
          />
        }
        person5={
          <BidangSection
            img={Valencia}
            alt="Valencia"
            name="Valencia Marvelle"
            desc="Haiii semuaa! Kenalinn, aku Valencia Marvelle dari X6👋🏻. Tahun ini aku diberi kesempatan untuk menjadi anggota OSIS bidang✌🏻. Fun factt, aku suka bangett sama hal-hal yang memacu adrenalin, I love challenges and new experiences. Aku juga passionate di dunia lomba dan selalu excited setiap ada kesempatan untuk ikut. Di waktu luang, aku suka banget travelling dan explore hal-hal baru ✈️🌎. Impian terbesarku adalah cobain semua jenis makanan yang ada di dunia🍕🍜🍣. Kalau mau ngobrol santai, kenalan, mabar, etc feel free to hit me up on IG @ciaa_vall! And last but not least, always do your best and keep the faith, God will do the rest‼️"
          />
        }
        person4={
          <BidangSection
            img={Carmeline}
            alt="Carmeline"
            name="Carmeline Japutra"
            desc="Jalan-jalan ke Berlin duluu~ kenalin aku Carmeline, tapi panggil aja Meline yaa 😆🫶🏻 Aku anggota OSIS bidang 2 🫰🏻✌🏻yang aktif tapi tetep santai hehe. Hobiku lumayan banyak sih, mulai dari main game, dengerin musik (yes, Laufey & W2E supremacy 😛🎧), nonton apa aja yang seru, sampai baca-baca. Tapii yang paling aku suka itu baca novel atau komik, kadang sampe lupa waktu 📚✨. Aku orangnya open, dan selalu happy ketemu temen baru. Jadi kalo mau mutualan, ngobrol santai, atau sekadar tukeran rekomendasi lagu, buku, atau komik feel free banget buat DM aku yaa! 💬💖 Don’t be shy, let’s be friends! @mell_linee ✌🏻"
          />
        }
        Description={true}
        DescBid="OSIS Bidang 2 adalah bidang pembinaan budi pekerti luhur dan akhlak mulia, sesuai namanya visi dari seksi bidang 2 adalah untuk menamakan sikap-sikap yang yang sesuai dengan budi pekerti dan nilai-nilai kristiani. Dalam rangka mewujudkan visi tersebut osis bidang 2 membuat beberapa program yaitu Christmas Carol, Quozzy, Spread the Word, dan Tutorial for Others by Smukiers. Jadi kalau teman teman berminat untuk bergabung di OSIS bidang 2 jangan lupa daftar ya saat ada pendaftaran OSIS"
        Program={true}
        ProgramList={[
          //UPDATED 2026
          "Tutorial For Others - Memberi kesempatan bagi siswa-siswi yang berkeinginan untuk berbagi dan menyebarkan kebaikan kepada sesama dengan mengajar anak-anak di Yayasan Sahabat Anak Grogol.",
          "⁠Buka Bersama - Kegiatan buka bersama bagi seluruh karyawan yang dilaksanakan di kantin SMAK 1 PENABUR Jakarta yang ditujukan untuk mempererat kekerabatan.",
          "Live In - Kegiatan yang dilaksanakan di desa, untuk memberi siswa/i kesempatan untuk membantu warga-warga di desa dan juga belajar cara menyesuaikan diri di pola hidup yang berbeda.",
          "5S - Senyum, Sapa, Salam, Sopan dan Santun yang dilaksanakan setiap pagi di depan pintu lobby oleh OSIS dan MPK.",
          "One for Humanity - Memperluas wawasan dan kepekaan siswa-siswi dengan memberi informasi mengenai bencana yang terjadi di Indonesia serta menggalang donasi bagi korban bencana.",
        ]}
        dir="/OSIS/bidang3"
      />
    </div>
  );
};

export default OSIS_2;
