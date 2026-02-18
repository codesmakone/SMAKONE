import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Valerie from '../../../Image/Osis/Bidang_5/Valerie.jpg'
import Metta from '../../../Image/Osis/Bidang_5/Metta.png'
import Felisitas from '../../../Image/Osis/Bidang_5/Felisitas.png'

const OSIS_5 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 5"
        desc="Bidang Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial Dalam Konteks Masyarakat Plural"

        person1={<BidangSection img={Valerie} alt='Valerie' name='Valerie Rachel Gunadi' desc='Haiii all!! 🥳👋
        Kenalin, nama aku Valerie Rachel Gunadi. Boleh dipanggil Val, tapiii semenjak di Smukie, panggilan aku jadi Vale 😃💝. Tahun ini aku bersyukur banget karena dikasih kesempatan dan kepercayaan buat jadi bagian dari OSIS 🌟, especially di Bidang 5 🌱. Honestly, it means a lot for me 💕.A little about me: aku suka hal-hal yang bikin aku terus belajar dan termotivasi ✨. I enjoy watching movies 🎬🍿, and I’m a huge fan of animated movies (especially Disney) 🐭✨. Music-wise, I’m a One Direction listener 🎧🎶. I also love travelling 🌍✈️—exploring new places always excites me 💫. Fun fact: aku tipe orang yang cukup expressive dan bisa super excited kalau udah nyaman 😄💬. Sooo, want to know more about me or Smukie life? Don’t forget to contact me on my Instagram yaa 📸💌 👉 @valerie_rachelgunadi. Let’s make our time in Smukie meaningful and memorable 💓.We’ve got this together!  See yaaa!! 😆😆'/>}
        person2={<BidangSection img={Felisitas} alt='Felisitas' name='Felisitas Fiona Fanza'desc='Halo semua, salkenn! Aku Felisitas Fiona Fanza biasa dipanggil Fifi/Feli, whichever you prefer :D 
        Puji Tuhan aku bisa masuk OSIS dan berhasil menjadi anggota sekbid 5 tahun ini untuk menambah pengalaman aku. Aku suka nari, nonton drama, nonton film, baca buku, sama baking👩‍🍳💃. Kalian kalo ada rekomendasi film, drama atau buku atau bahkan resep2 boleh banget kasih tau akuu🎬📚!!! IG aku @felvna_na, kalau mau reach out to ask me anything ato kasih rekomendasi- rekomendasi, boleh banget yaa!! Semangat terus and dont forget to always stay kind 💕💕💕'/>}
        person3={<BidangSection img={Metta} alt='Metta' name='Metta Nimmala' desc='haii all!! salkenn nama aku metta nimmala, biasanyaa dipanggil metta. aku suka bangett cooking, baking 👩‍🍳🍳 anddd nonton series🥤. soo kalo kalian ada rekomendasi movies, series, books, games yang baguss, recipes, or anything else, feel free to reach me out @mettanimmala 😉🙌 goodluckk and have funn!!!'/>}

        Description={true}
        DescBid="Dalam OSIS SMAK 1 Penabur, Bidang 5 adalah Seksi Bidang yang melingkupi Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial dalam Konteks Masyarakat Plural. Program-program dalam bidang ini fokus dalam berbagai hal, seperti meningkatkan kemampuan siswa-siswi SMAK 1 dalam menyampaikan pendapat mereka, meningkatkan kesadaran warga SMAK 1 mengenai masalah lingkungan, dan lain-lain sesuai dengan nama bidang kami!"
        Program={true}
        ProgramList={
          [
            //UPDATED 2026
            'WeCare x FSL (Facts, Science, Life) - Program kampanye informatif yang disajikan dalam bentuk video serta unggahan Instagram Story melalui akun @smukiee. Program ini mengangkat berbagai isu aktual yang dekat dengan kehidupan sehari-hari, mulai dari kondisi lingkungan di sekitar kita dan fenomena sosial.',
            'ECOLIT1CS - Podcast Spotify yang bertujuan meningkatkan kesadaran siswa-siswi mengenai isu-isu lingkungan hidup dan politik di yang ada dalam masyarakat.',
            'Project Awareness - Program Nasional BPK PENABUR yang bertujuan untuk melestarikan kehijauan lingkungan hidup kita.',
            'Green Gallery - Perlombaan pembuatan sebuah karya seni dari bahan-bahan bekas daur ulang yang akan dilaksanakan bersama dengan Smukiez Art Performance.',
            'Z1ROPLAST - Klub yang fokus pada gerakan pengurangan penggunaan plastik di lingkungan SMAK 1.'
          ]
        }
        dir="/OSIS/bidang6"
      />
    </div>
  )
}

export default OSIS_5