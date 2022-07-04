import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Shep from '../../../Image/Osis/Bidang_3/Shep1.webp'
import davina from '../../../Image/Osis/Bidang_3/davina.webp'
import Jacqueline from '../../../Image/Osis/Bidang_3/Jacqueline.webp'


const OSIS_3 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 3"
        desc="Bidang Pembinaan Kepribadian Unggul, Wawasan Kebangsaan, dan Bela Negara"
        person1={<BidangSection img={Shep} alt="Sheperd Petra Karauwan" name="Sheperd Petra Karauwan" desc="Halo semua, perkenalkan nama aku Sheperd, koordinator OSIS Bidang 3. Aku lahir di Manado dan menetap di Jakarta semenjak menduduki bangku kelas 2 SD. Aku sangat menggemari hal-hal yang berkaitan dengan dunia sepakbola (Vamos Barca!) dan aku juga sangat gemar menonton film-film perang dan sejarah. Teruslah berusaha dan jangan takut untuk keluar dari zona nyaman kalian. Selalu lakukan yang terbaik dan apapun yang terjadi semuanya pasti akan sesuai kehendak yang Maha Kuasa. Hidup lebih bermakna ketika dijalani bersama-sama, oleh karena itu jadilah teman bagi mereka yang membutuhkan teman dan jadilah pundak bagi mereka yang memerlukan. Jangan takut” untuk contact kita kalau kalian ada masalah atau bingung tentang sesuatu. Oiya satu fun fact tentang aku, aku makan apapun suka yang panas dan hangat :)"/>}
        person2={<BidangSection img={davina} alt="Davina Natasha Ongsono" name="Davina Natasha Ongsono" desc="Haii semuaa!! Perkenalkan namaku Davina, singkatnya boleh dipanggil Dav atau Davi. Tahun ini aku berada di kelas X MIPA dan aku adalah salah satu anggota OSIS bidang 3. Aku menghabiskan waktu luangku membaca novel dan mendengarkan musik. Sebagai pecinta novel, aku sangat menyukai novel remaja bergenre romantis dan fantasi, bahkan aku bisa menghabiskan satu novel dalam waktu yang sangat singkat! Kalau ada yang punya rekomendasi novel menarik atau mau tanya” seputar smukie, jangan ragu untuk contact aku yaa :)"/>}
        person3={<BidangSection img={Jacqueline} alt="Jacqueline Yang" name="Jacqueline Yang" desc="Hii semua! Perkenalkan, nama saya Jacqueline Yang, biasa dipanggil Jacqueline atau Jacq. Tahun ini, saya menjabat sebagai anggota OSIS Bidang 3. Selain OSIS, saya juga bergabung di beberapa organisasi lainnya, seperti Dewan Ambalan Pramuka (DA) dan One MUN (Model United Nation). Saya lahir di Jakarta, pada tanggal 9 Maret tahun 2006. Mendengarkan musik adalah salah satu hobi saya. Saya sangat suka mendengarkan musik saat belajar, terutama musik yang bergenre Jazz/RnB"/>}
        Description={true}
        DescBid="Bidang 3 adalah bidang yang bertanggung jawab dalam kegiatan-kegiatan yang bertujuan untuk melatih dan mengembangkan kepribadian dan wawasan kebangsaan peserta didik serta menumbuhkan sikap bela negara. Pengembangan tersebut kami jalankan melalui program-program yang kami adakan seperti Perayaan-perayaan Hari Nasional, Pasukan Pengibar Bendera (Paskibra), Pramuka, dan berbagai program lainnya yang dapat menanamkan rasa cinta tanah air dalam diri peserta didik SMAK 1."
        Program={true}
        ProgramList={
          [
            'Upacara Rutin Hari Selasa, OSIS Bidang 3 memupuk rasa nasionalisme dan membangun karakter cinta terhadap bangsanya sendiri melalui upacara rutin',
            'Upacara Hari Nasional, menyediakan wadah bagi siswa-siswi untuk merayakan dan memperingati hari-hari penting seperti Hari Kartini, Hari Lahir Pancasila, Hari Kemerdekaan Indonesia, dan hari-hari penting lainnya',
            'Perayaan Hari Kemerdekaan Republik Indonesia, OSIS Bidang 3 mengadakan perayaan 17 Agustus menjadi ajang bagi peserta didik untuk memupuk rasa cinta tanah air dan juga mempererat rasa persatuan dan kesatuan yang ada melalui kegiatan-kegiatan yang diadakan',
            'Paskibra, Pasukan Pengibar Bendera bertugas pada setiap kegiatan Upacara',
            'Perayaan Hari Kartini : OSIS Bidang 3 membuat perayaan untuk Hari Kartini sebagai ajang bagi peserta didik untuk mengapresiasi jasa Ibu R.A Kartini',
            'Perayaan Hari Guru : OSIS Bidang 3 mengadakan acara Perayaan Hari Guru sebagai ajang bagi peserta didik untuk memberi penghormatan dan menunjukkan rasa terima kasih kepada para guru yang sudah berjasa bagi mereka',
            'Memo1rs : OSIS Bidang 3 membuat video pendek mengenai pahlawan-pahlawan Indonesia yang dapat dibilang "anti-mainstream" atau yang belum terlalu dikenal',
            'Hari Batik Nasional : OSIS Bidang 3 membuat perayaan Hari Batik Nasional dalam bentuk lomba sebagai ajang bagi peserta didik untuk melestarikan salah satu kebudayaan Indonesia yaitu Batik',
            'SAHANAYA (Satukan Hati, Nyalakan Budaya) : OSIS Bidang 3 menyediakan wadah bagi klub-klub seni SMAK 1 Penabur Jakarta untuk menyalurkan bakatnya dalam bentuk video setiap 3 bulan sekali',
            'K1SAH : OSIS Bidang 3 bekerja sama dengan eskul manga untuk membuat komik singkat setiap perayaan hari-hari besar Indonesia'
          ]
        }
        dir="/OSIS/bidang4"
        />
    </div>
  )
}

export default OSIS_3