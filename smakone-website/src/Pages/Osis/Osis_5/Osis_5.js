import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Kaitlynn from '../../../Image/Osis/Bidang_5/Kaitlynn.webp'
import Bethania from '../../../Image/Osis/Bidang_5/Bethania.webp'

const OSIS_5 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 5"
        desc="Bidang Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial Dalam Konteks Masyarakat Plural"
        person1={<BidangSection img={Kaitlynn} alt='Kaitlynn' name='Kaitlynn Chen ' desc='hii semuaa! salam kenal,, aku kaitlynn, biasanya dipanggil kait/chen dan sekarang aku duduk di kelas 11 mipa. a little about me, aku juga punya beberapa hobi yaituu aku suka banget dengerin musik, nonton dan REBAHAN! filmnya beragam tapi i love sitcoms!! selain di OSIS, aku juga ada ikut beberapa kepanitiaan seperti SOC, BazOne, STN, and BBPB tentunyaa. fun fact about me itu aku suka banget yang namanya koleksi stationery hehe. kalo kalian ada pertanyaan ato mau ngobrol-ngobrol aja, bisa banget dm aku @_kaitlynnchen yaa.. anyway have fun in smukiee and goodluckk semuaa!!'/>}
        person2={<BidangSection img={Bethania} alt='Bethania' name='Bethania Reika Kawanda' desc='Hai semuaaa! 👋 Salam kenal, aku Bethania tapi kalian bisa panggil aku Betha! atau sebenarnya bebas sih mau manggil apa. Hobi aku sebenernya olahraga LOL, tapi kalau lagi ada waktu tanpa mikirin sekolah, aku lebih suka spend time nonton sama baca buku. Aku juga sukaaa banget dengerin musik! Tapi yang paling penting, aku suka banget tidur and makan ;D. Aku tipe orang yang punya banyak hobi and suka nyobain hal baru, jadi kalau ada rekomendasi buku, film, ataupun musik (restoran juga please), feel free to dm me @betha.kawanda 😋!'/>}
        Description={true}
        DescBid="Dalam OSIS SMAK 1 Penabur, Bidang 5 adalah Seksi Bidang yang melingkupi Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial dalam Konteks Masyarakat Plural. Program-program dalam bidang ini fokus dalam berbagai hal, seperti meningkatkan kemampuan siswa-siswi SMAK 1 dalam menyampaikan pendapat mereka, meningkatkan kesadaran warga SMAK 1 mengenai masalah lingkungan, dan lain-lain sesuai dengan nama bidang kami!"
        Program={true}
        ProgramList={
          [
            //UPDATED 2024
            'WeCare, kampanye dan artikel informatif yang ada dalam bentuk video maupun post dalam Instagram story @smukiee. Isu-isu yang dibahas beragam, di mulai dari keadaan lingkungan di sekitar kita sampai membahas juga mengenai kehidupan politik Indonesia. ',
            '⁠Asp1re, Asp1re merupakan wadah bagi seluruh siswa SMAK 1 untuk menyalurkan aspirasinya terhadap berbagai program OSIS yang berjalan, agar penyelenggaraan program tersebut dapat mengalami perbaikan di tahun-tahun berikutnya. ',
            'Kompetisi Debat, kompetisi debat Bahasa Indonesia yang akan dilaksanakan pada saat perayaan Hari Kartini.',
            'FoodBank, program kolaborasi antar bidang 2 dan bidang 5 yang bekerja sama dengan Food Bank Indonesia dalam penyaluran makanan-makanan yang dikumpulkan siswa/i SMAK 1 kepada orang-orang yang membutuhkan yang dilakukan setiap 3 bulan sekali.',
            'Green Gallery, perlombaan pembuatan sebuah karya seni dari bahan-bahan bekas daur ulang yang akan dilaksanakan bersama dengan BazOne. ',
            'Bye Bye Plastic Bag Jakarta School Club, merupakan club yang fokus pada gerakan pengurangan penggunaan plastik di SMAK 1.',
          ]
        }
        dir="/OSIS/bidang6"
        />
    </div>
  )
}

export default OSIS_5