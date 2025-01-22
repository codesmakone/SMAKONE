import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Valentio from '../../../Image/Osis/Bidang_7/Valentio.webp' //pending
import Willard from '../../../Image/Osis/Bidang_7/Willard.webp' //pending
import Steven from '../../../Image/Osis/Bidang_7/Steven.webp'
import Glenardy from '../../../Image/Osis/Bidang_7/Glenardy.webp'

const OSIS_7 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 7"
        desc="Bidang Pembinaan Kualitas Olahraga, Jasmani, Kesehatan, dan Gizi Berbasis Sumber Gizi Terdiversifikasi"
        
        person1={<BidangSection img={Steven} alt='Steven' name='Steven Andrew Wijaya' desc='Halo semuanyaaa!! Perkenalkan nama aku Steven Andrew Wijaya biasa dipanggil Steven atau Steve. Taun inii aku jadi anggota bidang 7 dan hobi aku itu antara tidur atau ga olahraga (apa aja mah gass). Kalo mau tau lebih tentang aku lagi sabi dm di ig @steven.a.wijaya salkennn semuanyaa!!'/>}
        person2={<BidangSection img={Glenardy} alt='Glenardy' name='Glenardy Joseph Guantoro' desc='Haloo semua kenalin nama aku Glenardy tapi panggil aja aku Glen. Tahun ini aku berada di kelas X-9. Hobi aku ada banyak tapi yang paling aku sering lakuin itu olahraga, makanya aku daftar bidang 7. Funfact tentang aku, aku suka bgt tidur. Kalo kalian ada mau tanya apa" atau mau ngobrol bisa langsung aja ke ig aku @glenardy.joseph, salam kenal semuaa!!'/>}
        person3={<BidangSection img={Valentio} alt="Valentio" name="Valentio Jeremy Putra Wanadri" desc='Haaii guys apa kabss 👋!? Kenalin namaku Valentio Jeremy Putra Wanadri bisaa dipanggil jeremy / jere / jer / seraah kalian mau panggil siapa ajah bolehh! Taun inii aku menjabat menjadi salah satu anggota di bidang 7. Diluang waktu akuu, akuu suka main basket, futsal, game dan juga suka main musikk juga loh!! Santayy ajah aku orangnyaa chill ges (gasuka marah2) jadinya kl mau ngobroll hmu ajah di ig ku @vjeremyp 📞 thats it about me, salam kenall yaa! goodluck all in SMUKIE ✊'/>}
        person4={<BidangSection img={Willard} alt="Willard" name="Willard Ricxie Phanagara" desc='Haloo semuanyaa!!! Perkenalkann nama aku Willard, bisa dipanggil Will atau Willard bebass. This yearr aku menjabat sebagai anggota bidang 7. Hobi akuu kalo olahraga tuhh maen sepak bola, futsal, basket, jogging, ngegymm, sebenernya semuanya gass aja sihh 😁. Selain dari ituu, aku juga hobi dengerin musikk, tidurr, dan maen Valorant, rhythm games, dll. Fun factt, tim sepak bola yang aku support tuhh Liverpool #YNWA hehe. Btww, kalo ada yang mau ngajak ngobrol, mabar, or anything else feel free to dm me on ig @willardrphan or just hmu in person hehe. That’s all, salam kenall and have funn in smukiee!!!'/>}
        

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