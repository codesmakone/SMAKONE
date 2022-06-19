import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Gillian from '../../../Image/Osis/Bidang_5/Gillian.jpg'
import charmaine from '../../../Image/Osis/Bidang_5/charmaine.jpg'
import florentina from '../../../Image/Osis/Bidang_5/florentina.jpg'

const OSIS_5 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 5"
        desc="Bidang Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial Dalam Konteks Masyarakat Plural"
        person1={<BidangSection img={Gillian} alt="Gillian Season" name="Gillian Season" desc="Helooo, semua! Aku Gillian Season sekarang kelas 11 IPA! Aku masuk OSIS bidang 5 ini karena aku suka berdiskusi soal isu-isu lingkungan dan sosial. Beberapa fun fact tentang diriku, aku hobi banget binge watch tv series! HAHAHA Feel free to reach out to me if you need someone to talk to or if you just want to fangirling film seri bareng <3"/>}
        person2={<BidangSection img={charmaine} alt="Charmaine Dominique" name="Charmaine Dominique" desc="Halo semuaaa! Hai, aku Charmaine, cara bacanya “carmen” aja dan aku kelas 10 MIPA! A little fun fact about me, aku suka hal - hal baru & aku tahan denger 1 lagu sampai 6 jam diulang - ulang lhoo! Jadi pastinya hobiku denger lagu dong ya hehe. Kalau mau ngobrol, bisa chat me through line (usernamenya nama panjangku) / dm me yaa (search for my name di followers ig smukie!)"/>}
        person3={<BidangSection img={florentina} alt="Florentina Gwendolyn" name="Florentina Gwendolyn" desc="Haii semuanyaa🥰! Kenalin aku Floren dan sekarang aku kelas 10 MIPA. Hobby aku nonton film/series (mostly kdrama hihi) dan denger lagu. Kalau mau nanya-nanya atau ngobrol, feel free buat line or dm aku yaa @florentina_0328."/>}
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
        />
    </div>
  )
}

export default OSIS_5