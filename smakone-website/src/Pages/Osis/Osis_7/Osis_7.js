import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import valeska from '../../../Image/Osis/Bidang_7/valeska.webp'
import Jessicav from '../../../Image/Osis/Bidang_7/Jessicav.webp'
import Fidella from '../../../Image/Osis/Bidang_7/Fidella.webp'
import Bradley from '../../../Image/Osis/Bidang_7/Bradley.webp'

const OSIS_7 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 7"
        desc="Bidang Pembinaan Kualitas Olahraga, Jasmani, Kesehatan, dan Gizi Berbasis Sumber Gizi Terdiversifikasi"
        person1={<BidangSection img={valeska} alt="Valeska Theodora Beatrice" name="Valeska Theodora Beatrice" desc="Hello semuanya!! Perkenalkan nama aku Valeska Theodora Beatrice,biasanya aku dipanggil Val. Tahun ini aku kelas XI MIPA. Hobi aku itu main piano, nonton film, and makan. Terakhir, buat kalian yang mau tanya apapun ke aku gausah malu malu ya boleh langsung contact aku aja di ig @valeskatheodoraa."/>}
        person2={<BidangSection img={Jessicav} alt="Jessica Valerie Dewanta" name="Jessica Valerie Dewanta" desc="Hii!! Perkenalkan nama aku Jessica Valerie Dewanta tapi biasa aku dipanggil Jeve. Tahun ini aku kelas XI MIPA. Hobi aku itu main basket, main piano, dan juga nonton film crime. Fun fact tentang aku itu aku suka banget makan pedes. Kalau mau tanya-tanya boleh banget reach me out di instagram aku @jessicadewanta."/>}
        person3={<BidangSection img={Fidella} alt="Fidella Lukita" name="Fidella Lukita" desc="Hello semua 👋🏻 Perkenalkan aku Fidella Lukita, just call me Fidel. Sekarang aku berada di kelas X MIPA. Kalau lagi ada waktu senggang, aku biasanya tidur atau nonton drama. Fun fact, aku kalau pegang mouse pake tangan kiri padahal aku aslinya right-handed. If you wanna know more about me, don't hesitate to reach me out on my IG @fidellalukita !"/>}
        person4={<BidangSection img={Bradley} alt="Bradley Wilson" name="Bradley Wilson" desc="Halo semua, perkenalkan nama aku Bradley Wilson, biasanya aku dipanggil BW. Sekarang aku duduk di kelas X MIPA. Hobi aku antara lain main games seperti valorant, main basket dan dengerin lagu. Kalau mau tau lebih lagi tentang aku langsung aja di cek instagram aku di @bradleywilss."/>}
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