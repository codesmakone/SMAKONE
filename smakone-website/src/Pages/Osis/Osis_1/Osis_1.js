import React from "react";

// Import Component
import BidangSection from "../../../Component/Osis/BidangSection";
import OsisTeam from "../../../Component/Osis/OsisTeam";

// Import Image
import Gabriella from "../../../Image/Osis/Bidang_1/Gabriella.webp";
import Lionel from "../../../Image/Osis/Bidang_1/Lionel.webp";
import Obediah from "../../../Image/Osis/Bidang_1/Obediah.webp";
import Elaene from "../../../Image/Osis/Bidang_1/Elaene.webp";

const OSIS_1 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 1"
        desc="Bidang Pembinaan Keimanan dan Ketakwaan Terhadap Tuhan Yang Maha Esa"
        person1={<BidangSection img={Elaene} alt="Elaene" name="Elaene Lee" desc="haiii semua! kenalin, nama aku Elaene Lee. Biasanya aku dipanggil Ilen atau len, bebass mau panggil yang mana. Aku bersyukur banget udah dikasih kepercayaan untuk jadi koor bid 1. Hobi aku jungkir balik 🤸🏻‍♀️🤸🏻‍♀️ (gymnastic). terus kalau lagi bosen, biasanya aku suka nonton Netflix or dengerin laguu hehehheh. fun factt, aku itu heavy sleeper 😴, jadi seberisik apapun juga aku ga bakal bangun gais. btww, semangat blajar di smukiee and feel freee to dm me on ig @el.aene" />}
        person2={<BidangSection img={Obediah} alt="Obediah" name="Obediah Kurniawan" desc={`Hi Guyss! Kenalin aku Obediah, biasa temen" manggil aku Obed. I'm so gratefull tahun ini Tuhan kasi kesempatan ke aku buat ada di OSIS Bid 1!! Hobby aku mewing AHAHA (jk). Aku suka banget main & denger musik, main futsal, badmin, & other sports! More than that, aku juga suka banget traveling, nonton konser, film, sama nonton bola (Visca Barca!). Oiya, di smukiee aku juga join Cressendo, aku demen banget sama genre pop jazz, rnb & black gospel hehe! Btw, kalo mau ngobrol" sama akuu feel free banget yaa, please hit me up @obediahkurniawan on instagram yaa! Have a fun & blessed journey in smukiee guys!`}/>}
        person3={<BidangSection img={Lionel} alt="Lionel" name="Lionel Keane" desc="Hai haii guysss!! 👋✌️, kenalin aku Lionel. Sekarang aku duduk di kelas X-3. Hobi aku main musikk 🥁🎹 , aku juga suka banget dengerin musikk 🎧 hehehe dan kadang kalo aku lagi bosen, aku suka main gamess 🎮. Mungkin segitu dulu aja perkenalannyaa, feel free kalo mau tanya tanya dm ajaa ig akuu @lionel_keane, good luck and have fun at SMUKIEE alll!!" />}
        person4={<BidangSection img={Gabriella} alt="Gabriella" name="Gabriella Clementine Situmorang" desc="Haii everyonee!! Nama aku Gabriella tapi biasanya dipanggil Gaby. Bersyukur banget tahun ini bisa jadi anggota OSIS bidang 1 di SMUKIE. Selain OSIS aku juga ikut SC, Literacy club, dll. Hobi aku nyanyi sama main musik tapi just for fun😍. Aku juga suka nonton film sama baca buku ESPECIALLY fantasy romancee 💗 Sebenarnya aku lebih ke introvert but if you get to know me I actually yapp alott hehe. So don't be shy if you want to talk or exchange book recs boleh bgtt dm me on ig @gabys.el9. Have fun in SMUKIE guyss!!!" />}
        Description={true}
        DescBid="Bidang 1 adalah bidang yang berperan dan bertanggung jawab dalam pembinaan kegiatan keagamaan Kristen di sekolah, salah satunya melalui kegiatan kebaktian yang rutin diadakan 1x dalam sebulan yang diikuti oleh seluruh guru, karyawan, dan siswa SMAK 1. Selain itu, melalui program kerja lainnya seperti R4G, SOG, dan Bible Trivia pengurus terus berusaha untuk mendorong pertumbuhan rohani seluruh warga SMAK 1."
        Program={true}
        ProgramList={[
          //PENDING
          "Kebaktian Rutin - Kebaktian rutin yang dilaksanakan sehari dalam setiap bulan pada hari Kamis, kebaktian diadakan di aula",
          "Kebaktian Natal - Kebaktian untuk merayakan hari Natal yang dilakukan pada bulan Desember bersamaan dengan aksi sosial",
          "Kebaktian persiapan PAS, PAT, US, TO - Kebaktian yang diadakan sebelum PAS, PAT, US, dan TO untuk memberikan semangat motivasi & penyertaan Tuhan dalam menjalani ujian",
          "Kebaktian Paskah - Kebaktian untuk memperingati hari kematian Tuhan Yesus bagi umatNya, yakni Paskah",
          "R4G (Radio for God) - Membantu siswa-siswi dalam mengenali lagu-lagu rohani, dengan memutarkannya setiap pagi sebelum renungan pagi",
          "SOG (Servant of God) - Wadah bagi siswa-siswi kelas X dan XI yang memiliki kerinduan untuk melayani Tuhan dengan mempersembahkan talenta",
          "Workshop Penatalayan - workshop yang diadakan untuk para pendaftar SOG unutk melayani Tuhan dengan antusias dan baik",
          "One Ins1ght - Konten motivasi harian, fakta-fakta Alkitab & informasi-informasi tentang bidang 1 seperti informasi ibadah yang akan di unggah di instagram",
          "Praise & Bound - Ibadah yang memfokuskan pada pujian dan penyembahan",
        ]}
        dir="/OSIS/bidang2"
      />
    </div>
  );
};

export default OSIS_1;
