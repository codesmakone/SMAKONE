import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Rayna from '../../../Image/Osis/Bidang_3/Rayna.webp'
import Dimitry from '../../../Image/Osis/Bidang_3/Dimitry.webp'
import Bianca from '../../../Image/Osis/Bidang_3/Bianca.webp'

const OSIS_3 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 3"
        desc="Bidang Pembinaan Kepribadian Unggul, Wawasan Kebangsaan, dan Bela Negara"

        person1={<BidangSection img={Rayna} alt='Rayna' name='Rayna Miyesha Gunawan' desc='haloo semuaa! pekenalkan nama aku Rayna Miyesha Gunawan dan biasa aku dipanggil Rayna. Tahun ini aku menjabat sebagai koordinator bidang 3. funfact tentang aku is that i can’t study with music! kalau mau ngobrol, feel free to hmu di ig aku @raynagnwn. see u around smukie and goodluckk in smukieee!!'/>}
        person2={<BidangSection img={Dimitry} alt='Dimitry' name='Dimitry Marvello' desc='Haloo! Salken semua, nama aku Dimitry Marvello biasa dipanggil Dimitry atau Dimi. Hobi aku main basket ato ga main musik. Kalo mau tau lebih banyak tentang aku bisa cek di ig @dimitrymarvello. Good luck di smukie!'/>}
        person3={<BidangSection img={Rayna} alt='Bianca' name='Bianca Margareth Soetopo ' desc='Hallo semuaa, perkenalkan aku Bianca atau bisa dipanggil bibii juga. Pada tahun ini aku berkesempatan untuk menjadi anggota osis di bidang 3. Fun fact dikit tentang hobby aku, aku suka dance dari kecil dan aku sekarang anggota seren1ty juga, selain dance aku juga suka diving & hiking terutama bareng keluarga/temen. Kalau kalian mau tanya-tanya atau temenan sama aku bisa dm ig aku di @biancasoetopo_ see you and goodluck guys!! 😆'/>}

        Description={true}
        DescBid="Bidang 3 adalah bidang yang bertanggung jawab dalam kegiatan-kegiatan yang bertujuan untuk melatih dan mengembangkan kepribadian dan wawasan kebangsaan peserta didik serta menumbuhkan sikap bela negara. Pengembangan tersebut kami jalankan melalui program-program yang kami adakan seperti Perayaan-perayaan Hari Nasional, Pasukan Pengibar Bendera (Paskibra), Pramuka, dan berbagai program lainnya yang dapat menanamkan rasa cinta tanah air dalam diri peserta didik SMAK 1."
        Program={true}
        ProgramList={
          [
            //UPDATED 2024
            "Upacara Rutin - Upacara Bendera yang dilaksanakan setiap bulan pada hari Kamis, oleh anggota tim paskibra SMAK 1 (FlashOne)",
            "Upacara Hari Besar - Upacara Bendera yang dilaksanakan untuk memperingati hari besar, pada bulan Mei, Agustus, Oktober, dan November",
            "Perayaan HUT RI - Perayaan hari kemerdekaan Indonesia yang diisi dengan berbagai kegiatan untuk menjunjung tinggi bela negara, dan menyadarkan siswa akan pentingnya mengisi kemerdekaan",
            "Perayaan Hari Guru - Pemberian tanda kasih dan acara untuk menghormati para guru yang telah mendidik murid di sekolah",
            "Perayaan Hari Kartini - Perayaan yang diisi upacara sekaligus acara Hari Kartini dalam bentuk workshop yang menghadirkan para wanita hebat dari berbagai profesi",
            "Paskibra (FlashOne) - Anggota Paskibra yang menjadi petugas upacara berintegritas",
            "TOMAT (Tolong, Maaf, Terimakasih) - Konten seperti video dan poster yang bertujuan untuk mengingatkan siswa pentingnya menggunakan Tolong, Maaf, Terimakasih dalam kehidupan sehari-hari",
            "RESTORE - Peserta didik dapat berkunjung ke salah satu destinasi wilayah yang ada di Indonesia untuk memperkenalkan budaya sosial yang ada di Indonesia kepada SMAK 1 PENABUR dengan tujuan agar dapat berperan aktif dalam menjelajahi dan mengenal lebih dalam mengenai budaya-budaya Indonesia",
            "K1SAH - Bekerja sama dengan ekstrakurikuler manga untuk membuat komik singkat setiap perayaan hari-hari besar Indonesia",
            "Lagu Wajib Nasional - Memutarkan lagu wajib Nasional menggunakan radio sekolah untuk menanamkan jiwa nasionalisme dan cinta tanah air peserta didik SMAK 1",
          ]
        }
        dir="/OSIS/bidang4"
      />
    </div>
  )
}

export default OSIS_3
