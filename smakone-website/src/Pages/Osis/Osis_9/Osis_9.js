import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import enrichie from '../../../Image/Osis/Bidang_9/enrichie.webp'
import Edward from '../../../Image/Osis/Bidang_9/Edward.webp'
import Michelle from '../../../Image/Osis/Bidang_9/Michelle.webp'

const OSIS_9 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 9"
        desc="Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK)"
        person1={<BidangSection img={enrichie} alt="enrichie" name="Enrichie Gracia" desc="Halo semuanya!!! Perkenalkan namaku Enrichie. Tahun ini, aku menjabat sebagai koordinator bidang 9 dan sebagai salah satu babu smukie wkwkkwkw 😂😂. Di waktu luang, aku suka berenang dan juga membuat karya 3 dimensi menggunakan software Blender dan Unreal Engine 5. Kalau kalian tertarik untuk melihat karya yang sudah dibuat oleh aku, kalian bisa mengunjungi Instagram aku @enrichie_gracia. Satu funfact tentang aku adalah aku kalo minum kopi bukannya malah melek tapi malah makin ngantuk 😴😴😴"/>}
        person2={<BidangSection img={Edward} alt="Edward" name="Edward Putera Rusli" desc="Halo semua! Kenalin nama aku Edward. Sekarang, aku lagi ada di kelas 10 dan menjabat sebagai anggota pengurus OSIS bidang 9. Saat ada waktu luang, aku suka main piano, programming, dan sebagainya. Kalo mau ngechat tentang apapun, langsung contact aja di IG aku, @edward_p_rusli!"/>}
        person3={<BidangSection img={Michelle} alt="Michelle" name="Michelle Liu" desc="Halo semuanya kenalin aku Michelle. Di waktu waktu luang biasanya aku lebih sering mainin laptop sambil dengerin lagu atau ngelukis pemandangan random yang ada di pinterest. Oiya kalo kalian mau kenal aku lebih deket bisa langsung cari aku di  instagram @michele_1iu"/>}
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
            'E-Magazine: Majalah elektronik resmi OSIS SMAK 1 PENABUR Jakarta yang bertujuan untuk menambah wawasan siswa-siswi SMAK1. Ditulis langsung oleh OneJournal dan dapat diakses di website ini.',
            'CodeOne: Sebuah komunitas coder naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam Web-Development dan bertugas membantu keperluan programming OSIS SMAK 1'
          ]
        }
        dir="/OSIS/bidang10"
      />
    </div>
  )
}

export default OSIS_9