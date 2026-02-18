import React from "react";

// Import Component
import BidangSection from "../../../Component/Osis/BidangSection";
import OsisTeam from "../../../Component/Osis/OsisTeam";

// Import Image
import Lionel from "../../../Image/Osis/Bidang_1/kin.webp";
import Gaby from "../../../Image/Osis/Bidang_1/gaby.webp";
import Abed from "../../../Image/Osis/Bidang_1/abed.webp";
import Fabiola from "../../../Image/Osis/Bidang_1/fabiola.webp";
import Beverly from "../../../Image/Osis/Bidang_1/bev.webp";

const OSIS_1 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 1"
        desc="Bidang Pembinaan Keimanan dan Ketakwaan Terhadap Tuhan Yang Maha Esa"
        person1={
          <BidangSection
            img={Lionel}
            alt="Lionel Keane"
            name="Lionel Keane"
            desc="Hai haii guyss!!, kenalin aku Lionel Keane, biasa dipanggil Lionel atau Keane. Sekarang aku duduk di kelas XI-2. Aku sendiri suka banget main musik,  Mungkin segitu dulu aja perkenalannyaa, feel free kalo mau tanya tanya dm ajaa ig akuu @lionel_keane, good luck and have fun at SMUKIEE all!! #S"
          />
        }
        person2={
          <BidangSection
            img={Gaby}
            alt="Gaby"
            name="Gabriella Clementine Situmorang "
            desc="Haii everyonee!! Nama aku Gabriella tapi biasanya dipanggil Gaby atau ella. Selain OSIS aku juga ikut club SC dan panit2 di smukie. Hobi aku nyanyi sama main musik tapi just for fun😉. Aku juga suka nonton film sama baca buku ESPECIALLY fantasy romance💗‼️Funfact sebenarnya aku lebih ke introvert but if you get to know me I actually yapp alott hehe🫨. So don't be shy if you want to talk or exchange book recs boleh bgtt dm me on ig @gabys.el9. Have fun in SMUKIE guyss!!! #I"
          />
        }
        person3={
          <BidangSection
            img={Abed}
            alt="Abed"
            name="Abednego Putra Pratama"
            desc="Hey guys! Salkenn aku Abednego Putra Pratama, kalian bisa panggil aku Abed. Puji Tuhan, tahun ini aku dikasih kepercayaan buat jadi anggota Bidang 1. I’m really grateful for this opportunity karna aku jadi bisa makin aktif lagi di sekolah dan tentunya upgrade myself day by day! In my free times, aku suka banget dengerin musik (especially RnB). Selain itu, aku juga suka main musik (masih belajar), main games, photography, nonton romcoms and also films like thriller, mystery, etc. Kalo mau kenalan atau ngobrol-ngobrol feel free to hit me up on ig @abdputraa 🙌🏻. Semangat di smukiee, don’t forget to enjoy your highschool times and God Bless You! #G"
          />
        }
        person4={
          <BidangSection
            img={Beverly}
            alt="Beverly"
            name="Beverly Tanzil"
            desc="Haii everyone! Salam kenal nama aku Beverly Tanzil, biasa dipanggil beverly / bev / bevy. Puji Tuhan tahun ini aku diberikan kesempatan untuk jadi anggota OSIS Bidang 1 ✨ !! Selain menjadi anggota OSIS di smukie, I’m also a part of pelayanan di gereja as anggota kepengurusan. Ohh yaa selain itu aku juga tergabung dari beberapa club seperti F1RST 💃, Literacy Club 📖, dan beberapa kepanitiaan di smukiee. Hobiku menari 🕺 dan baking 👩‍🍳🧁. Selain ituu aku juga suka bangett dengerin musik, especially music genre R&B and Pop ⭐️ Fun fact tentang akuu, first impression orang” ke aku kadang berpikir aku “judes” PADAHALL aku suka banget lohh kenalan sama ngobrol dgn temen baru !! Jadi kalo mau ngobrol” & mutualan boleh bangett dm aku di ig @bevytz. Semangatt di smukie everyonee 🫶. #M"
          />
        }
        person5={
          <BidangSection
            img={Fabiola}
            alt="Fabiola"
            name="Fabiola Jane Susanto"
            desc="Haii semua!! 👋🏻 Salam kenal nama aku Fabiola Jane Susanto, biasanya dipanggil Jane. Puji Tuhan, tahun ini aku diberi kesempatan untuk menjadi bagian dari OSIS bidang 1️⃣ and I’m so grateful for this opportunity. Fun fact aku suka banget nyobain hal-hal baru yang unik and making friends with new peoplee 😆. Besides that, aku punya beberapa hobi seperti menggambar 🎨, main musik 🎶, main badmin 🏸, and nyanyi 🎤. Sebenernya, aku tipe orang yang suka ngomongin hal-hal random loh 😋! HAHAHA. Jadi kalau mau ngobrol, mutualan, atau nanya-nanya feel free buat dm aku di ig yaa @fabiolaajane. Itu aja perkenalan dari aku, good luck and have fun guyss!! (๑•᎑•๑) #A"
          />
        }
        Description={true}
        DescBid="Bidang 1 adalah bidang yang berperan dan bertanggung jawab dalam pembinaan kegiatan keagamaan Kristen di sekolah, salah satunya melalui kegiatan kebaktian yang rutin diadakan 1x dalam sebulan yang diikuti oleh seluruh guru, karyawan, dan siswa SMAK 1. Selain itu, melalui program kerja lainnya seperti R4G, SOG, dan One Ins1ght pengurus terus berusaha untuk mendorong pertumbuhan rohani seluruh warga SMAK 1."
        Program={true}
        ProgramList={[
          //PENDING
          "Kebaktian Rutin - Kebaktian rutin yang dilaksanakan sehari dalam setiap bulan pada hari Kamis, kebaktian diadakan di aula",
          "Kebaktian Natal - Kebaktian untuk merayakan hari Natal yang dilakukan pada bulan Desember bersamaan dengan aksi sosial",
          "Kebaktian persiapan PAS, PAT, US, TO - Kebaktian yang diadakan sebelum PAS, PAT, US, dan TO untuk memberikan semangat motivasi & penyertaan Tuhan dalam menjalani ujian",
          "Kebaktian Paskah - Kebaktian untuk memperingati hari kematian Tuhan Yesus bagi umatNya, yakni Paskah",
          "R4G (Radio for God) - Membantu siswa-siswi dalam mengenali lagu-lagu rohani, dengan memutarkannya setiap pagi sebelum renungan pagi",
          "SOG (Servant of God) - Wadah bagi siswa-siswi kelas X dan XI yang memiliki kerinduan untuk melayani Tuhan dengan mempersembahkan talenta",
          "Workshop Penatalayan - Workshop yang diadakan untuk para pendaftar SOG untuk melayani Tuhan dengan antusias dan baik",
          "Praise & Bound - Ibadah yang memfokuskan pada pujian dan penyembahan",
        ]}
        dir="/OSIS/bidang2"
      />
    </div>
  );
};

export default OSIS_1;
