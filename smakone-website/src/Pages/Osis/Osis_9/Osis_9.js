import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Ferdinand from '../../../Image/Osis/Bidang_9/Ferdinand.webp'
import amanda from '../../../Image/Osis/Bidang_9/amanda.webp'
import enrichie from '../../../Image/Osis/Bidang_9/enrichie.webp'

const OSIS_9 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 9"
        desc="Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK)"
        person1={<BidangSection img={Ferdinand} alt="Ferdinand" name="Ferdinand" desc="Halo semua, perkenalkan aku Ferdinand, koordinator OSIS Bidang 9. aku lahir dan besar di Jakarta dan aku sangat menyukai hal-hal yang berhubungan dengan Fisika dan Astronomi. Jadi, bagi ada yang suka sama hal-hal tersebut, feel free untuk chat ke aku ya di @fercananything! Fun fact, aslinya aku pendiam banget lho!"/>}
        person2={<BidangSection img={amanda} alt="Amanda Michelle Setiawan" name="Amanda Michelle Setiawan" desc="Hi everyone! Perkenalkan nama aku Amanda bisa juga dipanggil Manda. Sekarang ada duduk sebagai anggota bidang 9 dan hobiku adalah melukis, membaca buku, dan mendengar lagu. Kalau mau reach out, contact aja di ig aku @amandamchlleee!"/>}
        person3={<BidangSection img={enrichie} alt="Enrichie Gracia" name="Enrichie Gracia" desc="Halo semuanya!!! Perkenalkan namaku Enrichie, kalian bisa panggil aku rich, rici, en, atau enrich. Tahun ini, aku menjabat sebagai anggota pengurus OSIS bidang 9. Di waktu luang, aku suka berenang dan juga membuat karya menggunakan software Blender. Kalau kalian tertarik untuk melihat karya yang sudah dibuat oleh aku, kalian bisa mengunjungi Instagram aku @enrichie_gracia. Selain berkreasi, aku juga suka berenang."/>}
        Description={true}
        DescBid="Bidang 9, Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK) adalah bidang yang bertanggung jawab mengenai pemanfaatan TIK untuk melancarkan kegiatan-kegiatan ataupun acara di sekolah, seperti menjadi tim multimedia saat ada seminar. Selain itu, bidang 9 menggunakan TIK sebagai sumber informasi bagi para siswa agar dapat mengenal OSIS SMAK 1 lebih dalam lagi. Bidang 9 juga peduli akan talenta siswa-siswi SMAK 1. Salah satu bentuk kepeduliannya adalah dengan mewadahi siswa-siswi yang ingin mengembangkan talentanya di bidang desain dan perfilman dengan Monograph dan Shutterone.
        "
        Program={true}
        ProgramList={
          [
            'Website: Website merupakan program situs resmi OSIS SMAK 1 PENABUR Jakarta dimana terdapat informasi mengenai OSIS SMAK 1 dan acara-acara OSIS yang sudah maupun akan diadakan.',
            'Shutter One: Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam video editing dan mendokumentasi foto maupun video dari sebuah acara.',
            'SMAK One Social Network: Sosial media (Instagram, Line, dan Youtube) resmi OSIS SMAK 1 PENABUR Jakarta yang memberikan konten mengenai program OSIS dan tempat untuk lebih berinteraktif antara OSIS dengan warga SMAK 1.',
            'G-Drive: Tempat penyimpanan online (Google Drive) dari OSIS untuk menyimpan prosata, proker, anggaran, dan laporan kegiatan.',
            'Monograph: Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam membuat desain yang akan digunakan untuk acara.',
            'ONE-MEDIA: Tim multimedia OSIS SMAK 1 PENABUR Jakarta yang beranggotakan anggota OSIS Bidang 9 dan Shutterone yang bertugas untuk melancarkan pelaksanaan kegiatan dan acara sekolah dan OSIS.',
            'ONECAST: Podcast resmi OSIS SMAK 1 PENABUR Jakarta yang dibawakan oleh peserta didik SMAK 1 dan dapat didengarkan Spotify.',
            'E-Magazine: Majalah elektronik resmi OSIS SMAK 1 PENABUR Jakarta yang bertujuan untuk menambah wawasan siswa-siswi SMAK1. Ditulis langsung oleh Club OneJournal dan dapat diakses di website https://smakone.org/ .',
            'CodeOne: Sebuah komunitas coder naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam Web-Development dan bertugas membantu keperluan programming OSIS SMAK 1'
          ]
        }
        dir="/OSIS/bidang10"
      />
    </div>
  )
}

export default OSIS_9