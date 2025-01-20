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
            desc="hai semuanyaa👋!! kenalin nama aku justin. Saat ini, aku merupakan warga kelas XI-4🔛🔝 & diberi kepercayaan untuk menjabat sebagai koordinator OSIS bidang 9👏! Selain di osis, aku juga suka ikut kepanitiaan seperti SAP, TEDx dan yang lainnyaa. Kalo lagi ada waktu luang, aku suka programming, main voli, and nonton filmm ofc. anyway mungkin perkenalanny cukup disini ajaa, kalo masih ada pertanyaan u can find me on ig @revaldoojustin. Have funn di smukie semuanyaa 🎇🤩‼"
          />
        }
        person2={
          <BidangSection
            img={Grant}
            alt="Grant"
            name="Grant Favor Tanudjaja "
            desc="Halo semua, kenalin aku Grant, salah satu anggota Bidang 9. Tahun ini aku duduk di kelas XI5. Hobi aku main golf, main game, main musik, dll. Kalau mau nanya apa-apa atau kenalan dm aja ke @grantfavr"
          />
        }
        person3={
          <BidangSection
            img={Shenny}
            alt="Shenny"
            name="Shenny Pannya Lowis"
            desc="heloo everyonee!! kenalin nama aku Shenny Pannya Lowis, biasa dipanggil Shenny. Tahun ini aku berkesempatan untuk menjabat sebagai anggota OSIS bidang 9 yey. Di waktu luang, aku suka banget nonton film dan juga dengerin musik. Aku juga punya hobii main valorant..jadi kl kalian main juga, ayo gass kita mabar🔥..anyways if you need anything atau mau ngobrol, bisaa cari aku atau dm ajaa di @shennylowis !!  Goodluck n have fun in SMUKIE semua，加油‼️"
          />
        }
        person4={
          <BidangSection
            img={Gisella}
            alt="Gisella"
            name="Joanne Gisella Yusmita"
            desc="helloo everyonee!! kenalin aku Joanne Gisella, tapi biasanya dipanggil Gisel. aku hobi gambar/design, coding, video editing, animating, banyak deh ehehe 🤏🏻 funfact, aku suka bgtt join apapun yang berhubungan sama design, jadi jangan shok kalo lengah dikit bisa ketemuan di desdivv. anyways feel free kalo mau ngobrol atau mutualan yaa, @gisellayusmita"
          />
        }
        Description={true}
        DescBid="Bidang 9, Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK) adalah bidang yang bertanggung jawab mengenai pemanfaatan TIK untuk melancarkan kegiatan-kegiatan ataupun acara di sekolah, seperti menjadi tim multimedia saat ada seminar. Selain itu, bidang 9 menggunakan TIK sebagai sumber informasi bagi para siswa agar dapat mengenal OSIS SMAK 1 lebih dalam lagi. Bidang 9 juga peduli akan talenta siswa-siswi SMAK 1. Salah satu bentuk kepeduliannya adalah dengan mewadahi siswa-siswi yang ingin mengembangkan talentanya di bidang desain dan perfilman dengan Monograph dan Shutterone."
        Program={true}
        ProgramList={[
          //PENDING
          "Website: Situs resmi OSIS SMAK 1 PENABUR Jakarta dimana terdapat informasi mengenai OSIS SMAK 1 dan acara-acara OSIS yang sudah maupun akan diadakan.",
          "Shutterone: Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam video editing dan mendokumentasi foto maupun video dari sebuah acara.",
          "SMAK One Social Network: Sosial media (Instagram, Line, dan Youtube) resmi OSIS SMAK 1 PENABUR Jakarta yang memberikan konten mengenai program OSIS dan tempat untuk lebih berinteraktif antara OSIS dengan warga SMAK 1.",
          "G-Drive: Tempat penyimpanan online (Google Drive) dari OSIS untuk menyimpan prosata, proker, anggaran, dan laporan kegiatan.",
          "Monograph: Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam membuat desain yang akan digunakan untuk acara.",
          "ONE-MEDIA: Tim multimedia OSIS SMAK 1 PENABUR Jakarta yang beranggotakan anggota OSIS Bidang 9 dan Shutterone yang bertugas untuk melancarkan pelaksanaan kegiatan dan acara sekolah dan OSIS.",
          "E-Magazine: Majalah elektronik resmi OSIS SMAK 1 PENABUR Jakarta yang bertujuan untuk menambah wawasan siswa-siswi SMAK1. Ditulis langsung oleh OneJournal dan dapat diakses di website ini.",
          "CodeOne: Sebuah komunitas coder naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam Web-Development dan bertugas membantu keperluan programming OSIS SMAK 1",
          "KRIZA e-Sports: Tim e-Sports SMAK 1 dalam Mobile Legends dan Valorant, yang telah ikut serta dalam berbagai lomba dan memenangkan banyak prestasi.",
        ]}
        dir="/OSIS/bidang10"
      />
    </div>
  );
};

export default OSIS_9;
