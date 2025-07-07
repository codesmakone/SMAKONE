import React from "react";

// Import Component
import BidangSection from "../../../Component/Osis/BidangSection";
import OsisTeam from "../../../Component/Osis/OsisTeam";

// Import Image
import Grant from "../../../Image/Osis/Bidang_9/Grant.webp";
import Justin from "../../../Image/Osis/Bidang_9/Justin.webp";
import Gisella from "../../../Image/Osis/Bidang_9/Gisella.webp";
import Shenny from "../../../Image/Osis/Bidang_9/Shenny.webp";

const OSIS_9 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 9"
        desc="Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK)"
        person1={
          <BidangSection
            img={Justin}
            alt="Justin"
            name="Justin Revaldo Widjaja"
            desc="Deadline mepet, tapi tim harus tetap jalan.. hai semuanyaa👋 kenalin nama aku justin, koordinator bidang sembilan. Saat ini, aku merupakan warga kelas XI-4🔛🔝 Selain di osis, aku juga suka ikut kepanitiaan seperti SAP, TEDx dan yang lainnyaa. Kalo lagi ada waktu luang, aku suka programming, main voli, and nonton filmm ofc. anyway mungkin perkenalanny cukup disini ajaa, kalo masih ada pertanyaan u can find me on ig @revaldoojustin. Have funn di smukie semuanyaa 🎇🤩‼"
          />
        }
        person2={
          <BidangSection
            img={Grant}
            alt="Grant"
            name="Grant Favor Tanudjaja "
            desc="Slide ngestuck, MC pura-pura penjelasan.. Halo semua, kenalin aku Grant, salah satu anggota bidang sembilan. Tahun ini aku duduk di kelas XI5. Hobi aku main golf, main game, main musik, dll. Kalau mau nanya apa-apa atau kenalan dm aja ke @grantfavr"
          />
        }
        person3={
          <BidangSection
            img={Shenny}
            alt="Shenny"
            name="Shenny Pannya Lowis"
            desc="Laptop nge-lag, lampu padam, tapi MC udah berdiri di depan....Kenalin aku Shenny, anggota dari bidang sembilann yey ☺️ aku suka banget nonton film, dengerin musik, dan juga punya hobi main valorant!! jdi kl kalian main jugaa, ayo gas kita mabar 😎🔥... If you need anything (mau ngobrol/mutualan/kenalan/dll) bisa dm akuu di @shennylowis 💁🏻‍♀️Kunci sukses acara itu dari tim yang SOLID, jadi jan lupaa check out mulmed-erz lainnyaa yaa!! 🙌🏻 anyways goodluck n have fun in SMUKIE semua, 加油‼️"
          />
        }
        person4={
          <BidangSection
            img={Gisella}
            alt="Gisella"
            name="Joanne Gisella Yusmita"
            desc="Koneksi kentang, tapi acara harus tetap jalan.. Kenalin aku Gisel, anggota dari bidang sembilann 🙌🏻 funfactt, aku suka aktif dalam organisasi n clubs di smukie seperti Monograph, Shutterone, Codeone (yang bantu bikin this website ur seeing rn hihi) and kegiatan kepanitiaan lainnya 👾 My passion are in design, vid editing especially color grading, coding websites, motion graphics and many more 🦆 Dont worry, smukie lengkap banget kok untuk kembangin hobby ato skill kalian! kalo mau masuk divisi Design/FND (Film n Documentation) cari-cari aku yeaa, siapa tau nextnya bisa kerja bareng (●’∇’)♪  Semangat berjuang di smukie ol, kalo mau mutualan/temenan/anythingg bisa ke ig akuu @gisellayusmita 👈🏻 Acara mulus bukan karena satu orang.. tapi satu tim, jadii check out anak mulmed lainnya ya! 🙌 janlupaa pantau kita-kita di balik layar, biar acara nggak bubar 💥"
          />
        }
        Description={true}
        DescBid="Bidang 9, Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK) adalah bidang yang bertanggung jawab mengenai pemanfaatan TIK untuk melancarkan kegiatan-kegiatan ataupun acara di sekolah, seperti menjadi tim multimedia saat ada seminar. Selain itu, bidang 9 menggunakan TIK sebagai sumber informasi bagi para siswa agar dapat mengenal OSIS SMAK 1 lebih dalam lagi. Bidang 9 juga peduli akan talenta siswa-siswi SMAK 1. Salah satu bentuk kepeduliannya adalah dengan mewadahi siswa-siswi yang ingin mengembangkan talentanya di bidang desain dan perfilman dengan Monograph dan Shutterone."
        Program={true}
        ProgramList={[
          //PENDING
          "Website: Situs resmi OSIS SMAK 1 PENABUR Jakarta dimana terdapat informasi mengenai OSIS SMAK 1 dan acara-acara OSIS yang sudah maupun akan diadakan",
          "E-Magazine - Majalah elektronik resmi OSIS SMAK 1 PENABUR Jakarta yang bertujuan untuk menambah wawasan siswa-siswi SMAK1. Ditulis langsung oleh OneJournal dan dapat diakses di website ini",
          "SMAK One Social Network: Sosial media (Instagram, Line, dan Youtube) resmi OSIS SMAK 1 PENABUR Jakarta yang memberikan konten mengenai program OSIS dan tempat untuk lebih berinteraktif antara OSIS dengan warga SMAK 1",
          "Shutterone - Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam video editing dan mendokumentasi foto maupun video dari sebuah acara",
          "Monograph - Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam membuat desain yang akan digunakan untuk acara",
          "CodeOne - Sebuah komunitas coder naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam Web-Development dan bertugas membantu keperluan programming OSIS SMAK 1",
          "KRIZA e-Sports - Tim e-Sports SMAK 1 dalam Mobile Legends dan Valorant, yang telah ikut serta dalam berbagai lomba dan memenangkan banyak prestasi",
          "One Journal - Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam menulis dan memproduksi majalah digital (Emagazine) untuk diunggah di Website Smakone.org",
        ]}
        dir="/OSIS/bidang10"
      />
    </div>
  );
};

export default OSIS_9;
