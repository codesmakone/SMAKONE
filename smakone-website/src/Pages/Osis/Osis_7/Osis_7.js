import React from 'react'

import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

import Valentio from '../../../Image/Osis/Bidang_7/Valentio.webp'
import Willard from '../../../Image/Osis/Bidang_7/Willard.webp'
import Steven from '../../../Image/Osis/Bidang_7/Steven.webp'
import Glenardy from '../../../Image/Osis/Bidang_7/Glenardy.webp'

const OSIS_7 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 7"
        desc="Bidang Pembinaan Kualitas Olahraga, Jasmani, Kesehatan, dan Gizi Berbasis Sumber Gizi Terdiversifikasi"
        
        person1={<BidangSection img={Steven} alt='Steven' name='Steven Andrew Wijaya' desc='Halo semuanya!! Perkenalkan nama aku Steven Andrew Wijaya biasa dipanggil Steven atau Steve. Taun inii aku diberi kesempatan menjadi koordinator bidang 7. Aku bersyukur banget bisa dipercayai guru-guru dan koordinator lama aku untuk mendapatkan jabatan ini. Hobi aku itu antara tidur atau ga olahraga (apa aja gass). Kalo mau tau lebih tentang aku lagi sabi dm di ig @steven.a.wijaya salkennn semuanyaa!!'/>}
        person2={<BidangSection img={Glenardy} alt='Glenardy' name='Glenardy Joseph Guantoro' desc='Haloo semua kenalin nama aku Glenardy tapi panggil aja aku Glen. Tahun ini aku berada di kelas X-9. Hobi aku ada banyak tapi yang paling aku sering lakuin itu olahraga, makanya aku daftar bidang 7. Funfact tentang aku, aku suka bgt tidur. Kalo kalian ada mau tanya apa" atau mau ngobrol bisa langsung aja ke ig aku @glenardy.joseph, salam kenal semuaa!!'/>}
        person3={<BidangSection img={Valentio} alt="Valentio" name="Valentio Jeremy Putra Wanadri" desc='YEURRR wsg yall 👋🏾 salken namaku Valentio Jeremy Putra Wanadri biasanya dipanggil jeremy / jer / tio. Taun nii aku menjabat sebagai salah satu anggota di bidang 7. Diluang waktu, akuu suka main basket, futsal, and musik juga. santai aja i won’t mess with yall broski jadinya kl mau ngobroll/mutualan hmu ajah @vjeremyp 📞 thats it about me, salam kenall yaa! goodluck all in SMUKIE 💪🏾✊🏾'/>}
        person4={<BidangSection img={Willard} alt="Willard" name="Willard Ricxie Phanagara" desc='Haloo semuanyaa!!! Perkenalkan nama aku Willard, bisa dipanggil Will atau Willard bebass. This yearr aku menjabat sebagai anggota bidang 7. Salah satu hobi aku tuhh olahraga, aku kalo olahraga maen sepak bola, futsal, basket, sebenernya semuanya gass aja sihh 😁. Selain dari itu, aku juga hobi dengerin musik, tidurr, dan maen Valorant, rhythm games, dll. Fun fact, tim sepak bola yang aku support tuhh Liverpool #YNWA hehe. Btww, kalo ada yang mau ngajak ngobrol, mabar, or anything else feel free to dm me on ig @willardrphan or just hmu in person hehe. That’s all, salam kenal and have funn in smukiee!!!'/>}
        

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