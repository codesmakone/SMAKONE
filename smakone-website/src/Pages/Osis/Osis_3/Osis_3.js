import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Rayna from '../../../Image/Osis/Bidang_3/Rayna.webp'
import Anthony from '../../../Image/Osis/Bidang_3/Anthony.webp'
import Tiffany from '../../../Image/Osis/Bidang_3/Tiffany.webp'
import Dimitry from '../../../Image/Osis/Bidang_3/Dimitry.webp'

const OSIS_3 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 3"
        desc="Bidang Pembinaan Kepribadian Unggul, Wawasan Kebangsaan, dan Bela Negara"
        person1={<BidangSection img={Tiffany} alt='Tiffany' name='Tiffany Julian Hutagaol' desc='Hi semuaa! salam kenal nama aku Tiffany Julian Hutagaol, biasa dipanggil Tiff. Sekarang, aku berada di kelas XI MIPA. Tahun ini, aku merupakan bagian dari OSIS bidang 3. Di waktu senggang, aku suka baca novel- novel fiksi dan mabar sama teman-teman aku. Berada di OSIS merupakan suatu kesempatan yang sangat berharga, jadii jangan ragu ragu buat jadi a part of us yaa! Kalau mau tanya- tanya seputar SMUKIE atau mau curhat dan main bareng jangan ragu buat reach out ke instagram aku @tiffany.hutagaol Goodluck and jangan lupa buat have fun di SMUKIE semuanyaa!'/>}
        person2={<BidangSection img={Anthony} alt='Anthony' name='Anthony Christian' desc='Halo semuanya 👋🏼 kenalin aku Anthony dari bidang 3!!! Cerita dikit tentang aku, lahir di Jakarta tanggal 30 November 2007. Hobi aku cover" lagu pake gitar, main badmin, dan ngegym ( walaupun gak sering tapi lumayanlah). Pelajaran favorit aku fisika sama pelajarin kamuu, wkwkww canda". Kalau ada mau nanya" hal lainn, boleh banget dm aku di IG @anthonychrist_. Salam kenal semuaa!😃'/>}
        person3={<BidangSection img={Rayna} alt='Rayna' name='Rayna Miyesha Gunawan' desc='Halo semuaa! 大家好! Perkenalkan nama aku Rayna dari bidang 3! Aku seneng banget bisa jadi a part of this family. Fun fact tentang aku, aku nga suka (nga bisa) belajar sambil dengerin musik, dan makanan favorit aku itu apa aja yang ada kejunya! 🧀 aku suka banget makan keju (nga heran si, soalnya shio aku tikus hehe). Aku juga suka main game online lo! jadi kalau mau mabar bolee mampir ke IG aku @raynagnwn! see youu guyss'/>}
        person4={<BidangSection img={Dimitry} alt='Dimitry' name='Dimitry Marvello' desc='Haloo! Salken semua, nama aku Dimitry Marvello biasa dipanggil Dimitry atau Dimi. Hobi aku main basket ato ga main musik. Kalo mau tau tentang aku bisa cek di ig @dimitrymarvello. Good luck guys!'/>}
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