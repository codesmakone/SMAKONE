import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Bethania from '../../../Image/Osis/Bidang_5/Bethania.webp'
import Metta from '../../../Image/Osis/Bidang_5/Metta.webp'
import Reyna from '../../../Image/Osis/Bidang_5/Reyna.webp'

const OSIS_5 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 5"
        desc="Bidang Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial Dalam Konteks Masyarakat Plural"

        person1={<BidangSection img={Bethania} alt='Bethania' name='Bethania Reika Kawanda' desc='Hai semuaaa! 👋 Salam kenal, aku Bethania tapi kalian bisa panggil aku Betha! Funfact, hobiku sebenernya olahraga, tapi kalau lagi ada waktu tanpa mikirin sekolah, aku juga suka spend time nonton and read books. Aku juga sukaaa banget dengerin musik! Tapi yang paling penting, aku suka banget tidur and makan ;D. Aku tipe orang yang punya banyak hobi and suka nyobain hal baru, jadi kalau ada rekomendasi buku, film, ataupun musik (restaurants and cafes juga please), feel free to dm me @betha.kawanda 😉!'/>}
        person2={<BidangSection img={Metta} alt='Mett Nimala' name='Metta Nimmala'desc='haii all!! salkenn nama aku Metta Nimmala, biasanyaa dipanggil metta. Aku suka bangett cooking, baking 👩‍🍳🍳 anddd nonton series🥤. Tahun ini aku menjadi anggota dari bidang 5️⃣. Lastly, kalo kalian ada rekomendasi movies, series, books, games yang baguss, recipes, or anything else, feel free to reach me out @mettanimmala 🙌 goodluckk and have funn!!!'/>}
        person3={<BidangSection img={Reyna} alt='Reyna Chryslene Setyono' name='Reyna Chryslene Setyono' desc='Di Jepang cari koi albino, ga lupa beliin kamu oleh-oleh. Namaku Reyna Setyono, panggil Rey atau sayang juga boleh 🤭🤭 hehehe.. Haii semuaa, salam kenal yaa! Tahun ini aku di bidang 5 🖐🏼 and I’m really grateful for this opportunity. Di waktu luang, aku suka baking (sweet tooth parahh), nonton film (any genre sih but i love horror and romcomss), baca novel, and ofc tidur(an) hehe 😋. Fun fact tentang aku: I’m a dog person and an adventurous eater. Jadii kalau kalian ada rekomendasi makanan unik, recipes, films, or books, atau ngobrolin apa ajaa, feel free to dm me yaah @reynachryslene!! Good luck and have fun in smukiee 🙌🏼'/>}

        Description={true}
        DescBid="Dalam OSIS SMAK 1 Penabur, Bidang 5 adalah Seksi Bidang yang melingkupi Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial dalam Konteks Masyarakat Plural. Program-program dalam bidang ini fokus dalam berbagai hal, seperti meningkatkan kemampuan siswa-siswi SMAK 1 dalam menyampaikan pendapat mereka, meningkatkan kesadaran warga SMAK 1 mengenai masalah lingkungan, dan lain-lain sesuai dengan nama bidang kami!"
        Program={true}
        ProgramList={
          [
            //UPDATED 2024
            'WeCare - Kampanye dan artikel informatif yang ada dalam bentuk video maupun post dalam Instagram story @smukiee. Isu-isu yang dibahas beragam, di mulai dari keadaan lingkungan di sekitar kita sampai membahas juga mengenai kehidupan politik Indonesia',
            'ECOLIT1CS - Podcast Spotify yang bertujuan meningkatkan kesadaran siswa-siswi mengenai isu-isu lingkungan hidup dan politik di yang ada dalam masyarakat',
            'Project Awareness - Program Nasional BPK PENABUR yang bertujuan untuk melestarikan kehijauan lingkungan hidup kita',
            'Green Gallery - Perlombaan pembuatan sebuah karya seni dari bahan-bahan bekas daur ulang yang akan dilaksanakan bersama dengan BazOne',
            'Bye Bye Plastic Bag - Klub yang fokus pada gerakan pengurangan penggunaan plastik di SMAK 1',
          ]
        }
        dir="/OSIS/bidang6"
      />
    </div>
  )
}

export default OSIS_5