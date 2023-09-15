import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Charmaine from '../../../Image/Osis/Bidang_5/charmaine.webp'
import Valerie from '../../../Image/Osis/Bidang_5/Valerie.webp'
import Kaitlynn from '../../../Image/Osis/Bidang_5/Kaitlynn.webp'

const OSIS_5 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 5"
        desc="Bidang Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial Dalam Konteks Masyarakat Plural"
        person1={<BidangSection img={Charmaine} alt="Charmaine" name="Charmaine Dominique" desc="Hi everyone! Aku Charmaine! bisa dipanggil car / char. Di tahun ini, aku kelas XI MIPA dan aku koordinator bidang 5! I like finding out new facts & denger lagu! You could reach me out through @charmainedom on ig (boleh banget kalau mau recommend lagu, I listen to any genre)! Selain OSIS, I'm also a part of ONEMUN, SOC, BAZONE, and of course BBPB! Last but not least, have fun in SMUKIE!! "/>}
        person2={<BidangSection img={Valerie} alt="Valerie" name="Valerie Althea Kurnia" desc="Haiii semuaa!! Aku Valerie, biasanya dipanggil Pale, salam kenal yaa 👋🏻 Aku tipe orang yang suka ngerjain tugas sambil dengerin musik. Di waktu luang, aku juga sering nonton film ataupun series. Kalau kalian gimana?? Oh iya, selain OSIS, aku juga ikut beberapa club dan organisasi loh seperti MASK, SOC, dan BBPB. Aku suka coba hal-hal baru dan ketemu temen-temen baru. Walaupun introvert kalau baru kenal, tapi extrovert banget kalo udah deket. So don’t hesitate to reach me out through DM @valerie_althea hihi. Good luck all di smukii!!"/>}
        person3={<BidangSection img={Kaitlynn} alt="Kaitlynn" name="Kaitlynn Chen" desc="Hello semuaa! Kenalin, nama aku Kaitlynn Chen biasanya dipanggil kaitlynn/kait/chen dan aku sekarang ada di kelas 10 MIPA. Hobby aku basic banget, cuman nonton sama dengerin musik. Aku orangnya suka nonton apa aja! Mostly comedy series sama beberapa anime sih.. Selain itu, aku juga suka banget dengerin musik. My favorite artist itu none other than Taylor Swift ;) sama The 1975! (i like kpop toooo!!). Also a funfact about me, aku orangnya random banget kalo udah temenan deket, kalo ga aku biasanya diem-diem gituu <3. Anyway, if kalian ada some music recs ato mau ngobrol-ngobrol dm aku ajaa @__kaitlynnchen. Itu aja dari akuuu, salken semuaa!!"/>}
        Description={true}
        DescBid="Dalam OSIS SMAK 1 Penabur, Bidang 5 adalah Seksi Bidang yang melingkupi Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial dalam Konteks Masyarakat Plural. Program-program dalam bidang ini fokus dalam berbagai hal, seperti meningkatkan kemampuan siswa-siswi SMAK 1 dalam menyampaikan pendapat mereka, meningkatkan kesadaran warga SMAK 1 mengenai masalah lingkungan, dan lain-lain sesuai dengan nama bidang kami!"
        Program={true}
        ProgramList={
          [
            'EcoVille, Berupa Artikel dan Quiz interaktif mengenai berbagai isu lingkungan hidup. Untuk gambaran yang lebih jelas, bisa check di instagram story kita yaa @smukiee.',
            'We Care merupakan program bidang 5 berupa video kampanye yang menyuarakan berbagai isu kemanusiaan dan lingkungan hidup. Check out video campaign kita di feeds @smukiee!',
            'Aspire, Asp1re merupakan wadah bagi seluruh siswa SMAK 1 untuk menyalurkan aspirasinya terhadap berbagai program OSIS yang berjalan, agar penyelenggaraan program tersebut dapat mengalami perbaikan di tahun-tahun berikutnya.',
            'One Vote, pelaksanaan pemilihan ketua dan wakil ketua OSIS.',
            'Kompetisi Debat, kompetisi debat bahasa Indonesia yang akan dilaksanakan pada saat perayaan 17 Agustus.',
            'Kompetisi Pidato, Kompetisi berpidato yang akan diselenggarakan bersamaan dengan perayaan Hari Pahlawan.',
            'Bye Bye Plastic Bag Jakarta School Club, merupakan club yang fokus pada gerakan pengurangan penggunaan plastik di SMAK 1.'
          ]
        }
        dir="/OSIS/bidang6"
        />
    </div>
  )
}

export default OSIS_5