import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Obert from '../../../Image/Osis/Bidang_7/Obert.webp' //pending
import Bryan from '../../../Image/Osis/Bidang_7/Bryan.webp' //pending
import Steven from '../../../Image/Osis/Bidang_7/Steven.webp'
import Glenardy from '../../../Image/Osis/Bidang_7/Glenardy.webp'

const OSIS_7 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 7"
        desc="Bidang Pembinaan Kualitas Olahraga, Jasmani, Kesehatan, dan Gizi Berbasis Sumber Gizi Terdiversifikasi"
        person1={<BidangSection img={Obert} alt="Obert" name="Obert Chandra" desc="Halloo semua!! Kenalin, aku Obert dan tahun ini aku ada di kelas 10. Hobi aku itu kalau ga main futsal ya main game. Little about me, aku ini MU loverz banget (GGMU). Kalo masih ada yang mau ditanyain bisa langsung cek ig aku di @chandraobert" />}
        person2={<BidangSection img={Bryan} alt="Bryan" name="Bryan Vegard Suwarno" desc="Heyoo!! Kenalinn aku Bryan Vegard S, pas kecill aku sering dipanggilnya BraVe, klo sekarang seringnya Beve atau Vegard bolee. Taunn ini aku menjabat menjadi anggota dari bidang 7. Hobii aku olahraga semua cabang olahraga mah gaskeun, terutama voli hehe, and suka dengerin musik juga. By the way, kalau ada yang mau tanya tanya, ngobrol, or anything else feel free to dm me di ig @bryanvegard, atau samperin juga ga masalahh ;) soo yeah. Salamm kenal gess!!" />}
        person3={<BidangSection img={Steven} alt='Steven' name='Steven Andrew Wijaya' desc='Halo semuanyaaa!! Perkenalkan nama aku Steven Andrew Wijaya biasa dipanggil Steven atau Steve. Taun inii aku jadi anggota bidang 7 dan hobi aku itu antara tidur atau ga olahraga (apa aja mah gass). Kalo mau tau lebih tentang aku lagi sabi dm di ig @steven.a.wijaya salkennn semuanyaa!!' />}
        person4={<BidangSection img={Glenardy} alt='Glenardy' name='Glenardy Joseph Guantoro' desc='Haloo semua kenalin nama aku Glenardy tapi panggil aja aku Glen. Tahun ini aku berada di kelas X-9. Hobi aku ada banyak tapi yang paling aku sering lakuin itu olahraga, makanya aku daftar bidang 7 hohoho. Funfact tentang aku, aku suka bgt tidur. Kalo kalian ada mau tanya apa" atau mau ngobrol bisa langsung aja ke ig aku @glenardy.joseph, salam kenal semuaa!!' />}
        Description={true}
        DescBid="Bidang 7, Bidang kualitas olahraga, jasmani, kesehatan, dan gizi berbasis sumber gizi terdiversifikasi adalah bidang yang bertanggung jawab atas kegiatan yang berhubungan dengan kesehatan dan olahraga. Kami melaksanakan suatu acara Smukiez Olympic yang merupakan kegiatan olahraga yang dapat meningkatkan sportivitas dan kebersamaan suatu kelas. Kami dari Bidang 7 juga berupaya agar menjadi wadah untuk murid-murid yang ingin mengembangkan potensi dalam dirinya lebih dalam lagi dari kegiatan SMAKONECUP atau yang dikenal dengan sebutan SOC yang memperbolehkan untuk seluruh murid SMAK 1 untuk berpartisipasi daftar dalam kepanitiaan. Bidang 7 juga menjadi wadah untuk murid-murid agar meningkatkan kepedulian terhadap sesama murid SMAK 1 melalui kegiatan Peer Educator dan instagram @Pesmakone. Kami juga berupaya untuk memberikan informasi mengenai kesehatan dan olahraga melalui HEALTH1NFO yang kami post di story instagram @Smukiee. Kami juga menyiapkan program M1STER1 yang berisi kasus kesehatan untuk mengasah kemampuan."
        Program={true}
        ProgramList={
          [
            //UPDATE 2024
            'SMAK ONE CUP - Program terbesar OSIS untuk mengembangkan potensi siswa SMAK 1 di bidang akademik maupun non akademik dan juga untuk mempererat hubungan antar sekolah!',
            'Smukiez Olympics - Pertandingan antar kelas untuk mempererat hubungan antar kelas dan meningkatkan kesehatan siswa melalui perlombaan antar kelas dan pelaksanaanya setelah PAT.',
            'Peer Educator - Tim Peer Educator atau pendidik sebaya untuk mencegah dan mendidik warga SMAK 1 Penabur tentang bahaya NAPZA, PTM, dan HIV AIDS.',
            'NutriONE - Konten informatif dalam bentuk poster yang berisikan kandungan nutrisi makanan-makanan yang sering dikonsumsi oleh murid SMAK 1 PENABUR Jakarta',
          ]
        }
        dir="/OSIS/bidang8"
      />
    </div>
  )
}

export default OSIS_7