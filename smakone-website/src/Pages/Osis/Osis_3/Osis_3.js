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
          'Upacara Rutin Hari Kamis: OSIS Bidang 3 memupuk rasa nasionalisme dan membangun karakter cinta terhadap bangsanya sendiri melalui upacara rutin.',
          'Upacara Hari Nasional: menyediakan wadah bagi siswa-siswi untuk merayakan dan memperingati hari-hari penting seperti Hari Pendidikan Nasional, Hari Lahir Pancasila, Hari Kemerdekaan Indonesia, dan hari-hari penting lainnya.',
          'Perayaan Hari Kemerdekaan Republik Indonesia: OSIS Bidang 3 mengadakan perayaan 17 Agustus menjadi ajang bagi peserta didik untuk memupuk rasa cinta tanah air dan juga mempererat rasa persatuan dan kesatuan yang ada melalui kegiatan-kegiatan yang diadakan.',
          'Paskibra: Pasukan Pengibar Bendera bertugas pada setiap kegiatan Upacara.',
          'Perayaan Hari Kartini: OSIS Bidang 3 membuat perayaan untuk Hari Kartini sebagai ajang bagi peserta didik untuk mengapresiasi jasa Ibu R.A Kartini.',
          'Perayaan Hari Guru: OSIS Bidang 3 mengadakan acara Perayaan Hari Guru sebagai ajang bagi peserta didik untuk memberi penghormatan dan menunjukkan rasa terima kasih kepada para guru yang sudah berjasa bagi mereka.',
          'K1SAH: OSIS Bidang 3 bekerja sama dengan ekstrakurikuler manga untuk membuat komik singkat setiap perayaan hari-hari besar Indonesia.',
          'RESTORE: OSIS Bidang 3 mengadakan program untuk pergi ke salah satu destinasi wilayah yang ada di Indonesia untuk memperkenalkan budaya sosial yang ada di Indonesia kepada siswa/siswi SMAK 1 PENABUR dengan tujuan agar siswa/siswi dapat berperan aktif dalam menjelajahi dan mengenal lebih dalam mengenai budaya-budaya Indonesia.',
          ]
        }
        dir="/OSIS/bidang4"
        />
    </div>
  )
}

export default OSIS_3
