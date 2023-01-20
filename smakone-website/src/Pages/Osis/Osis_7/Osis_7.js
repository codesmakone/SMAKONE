import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Fidella from '../../../Image/Osis/Bidang_7/Fidella.webp'
import Bradley from '../../../Image/Osis/Bidang_7/Bradley.webp'
import Obert from '../../../Image/Osis/Bidang_7/Obert.webp'
import Bryan from '../../../Image/Osis/Bidang_7/Bryan.webp'

const OSIS_7 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 7"
        desc="Bidang Pembinaan Kualitas Olahraga, Jasmani, Kesehatan, dan Gizi Berbasis Sumber Gizi Terdiversifikasi"
        person1={<BidangSection img={Fidella} alt="Fidella" name="Fidella Lukita	" desc="Hello semua 👋🏻 Perkenalkan aku Fidella Lukita, just call me Fidel. Sekarang aku berada di kelas XI MIPA. Kalau lagi ada waktu senggang, aku biasanya tidur atau nonton drama. Fun fact, aku kalau pegang mouse pake tangan kiri padahal aku aslinya right-handed. If you wanna know more about me, don't hesitate to reach me out on my IG @fidellalukita !"/>}
        person2={<BidangSection img={Bradley} alt="Bradley" name="Bradley Wilson" desc="Halo semua, perkenalkan nama aku Bradley Wilson, biasanya aku dipanggil BW. Sekarang aku duduk di kelas XI MIPA. Hobi aku antara lain main games seperti valorant, main basket dan dengerin lagu. Kalau mau tau lebih lagi tentang aku langsung aja di cek instagram aku di @bradleywilss."/>}
        person3={<BidangSection img={Obert} alt="Obert" name="Obert Chandra 	" desc="Halloo semua!! Kenalin, aku Obert dan tahun ini aku ada di kelas 10. Hobi aku itu kalau ga main futsal ya main game. Little about me, aku ini MU loverz banget (GGMU). Kalo masih ada yang mau ditanyain bisa langsung cek ig aku di @chandraobert"/>}
        person4={<BidangSection img={Bryan} alt="Bryan" name="Bryan Vegard Suwarno" desc="Heyoo!! Kenalinn aku Bryan Vegard, pas kecill aku sering dipanggilnya BraVe, klo sekarang seringnya Bry atau Vegard bolee. Taunn ini aku menjabat menjadi anggota dari bidang 7. Hobii aku olahraga *semua cabang olahraga mah gaskeun*, juga suka main gitar, nyanyi, ya musik lah intinya. By the way, kalau ada yang mau tanya tanya, ngobrol, or anything else feel free to dm me di ig @bryanvegard, atau samperin juga ga masalahh ;) soo yeah. Salamm kenal gess!!"/>}
        Description={true}
        DescBid="Bidang 7, Bidang kualitas olahraga, jasmani, kesehatan, dan gizi berbasis sumber gizi terdiversifikasi adalah bidang yang bertanggung jawab atas kegiatan yang berhubungan dengan kesehatan dan olahraga. Kami melaksanakan suatu acara Smukiez Olympic yang merupakan kegiatan olahraga yang dapat meningkatkan sportivitas dan kebersamaan suatu kelas. Kami dari Bidang 7 juga berupaya agar menjadi wadah untuk murid-murid yang ingin mengembangkan potensi dalam dirinya lebih dalam lagi dari kegiatan SMAKONECUP atau yang dikenal dengan sebutan SOC yang memperbolehkan untuk seluruh murid SMAK 1 untuk berpartisipasi daftar dalam kepanitiaan. Bidang 7 juga menjadi wadah untuk murid-murid agar meningkatkan kepedulian terhadap sesama murid SMAK 1 melalui kegiatan Peer Educator dan instagram @Pesmakone. Kami juga berupaya untuk memberikan informasi mengenai kesehatan dan olahraga melalui HEALTH1NFO yang kami post di story instagram @Smukiee. Kami juga menyiapkan program M1STER1 yang berisi kasus kesehatan untuk mengasah kemampuan."
        Program={true}
        ProgramList={
          [
            'SMAK ONE CUP, Program terbesar OSIS untuk mengembangkan potensi siswa SMAK 1 di bidang akademik maupun non akademik dan juga untuk mempererat hubungan antar sekolah!',
            'HEALTH1NFO, Konten informatif dan menarik mengenai kesehatan, gizi, dan olahraga yang disebarluaskan melalui media sosial.',
            'Smukiez Olympics, Pertandingan antar kelas untuk mempererat hubungan antar kelas dan meningkatkan kesehatan siswa melalui perlombaan antar kelas dan pelaksanaanya setelah PAT.',
            'Peer Educator, Tim Peer Educator atau pendidik sebaya untuk mencegah dan mendidik warga SMAK 1 Penabur tentang bahaya NAPZA, PTM, dan HIV AIDS.',
            'M1STER1, Case solving games mengenai kasus kesehatan dan psikologi untuk meningkatkan wawasan dan pengetahuan secara kreatif dan interaktif.'
          ]
        }
        dir="/OSIS/bidang8"
      />
    </div>
  )
}

export default OSIS_7