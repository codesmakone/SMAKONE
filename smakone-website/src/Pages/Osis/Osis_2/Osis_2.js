import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Louisa from '../../../Image/Osis/Bidang_2/Louisa.webp'
import Stephanie from '../../../Image/Osis/Bidang_2/Stephanie.webp'
import Robert from '../../../Image/Osis/Bidang_2/Robert.webp'
import Regina from '../../../Image/Osis/Bidang_2/Regina.webp'

const OSIS_2 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 2"
        desc="Bidang Pembinaan Budi Pekerti Luhur dan Akhlak Mulia"
        person1={<BidangSection img={Louisa} alt='Louisa' name='Louisa Richelle' desc='Hiii guyss, nama aku Louisa Richelle, panggil aja Sasaa. Biasa aku suka dengerin lagu dan nonton film untuk isi waktu luang. Terutama drakor romance itu seru banget banget banget. Aku juga suka banget pergi main sama temen-temen seru-seruan. Kalo kalian mau tanya-tanya soal smukiee atau ngobrol-ngobrol, boleh banget chat aku yaa @louisarichelle. Salam kenal semuanyaa!' />}
        person2={<BidangSection img={Stephanie} alt='Stephanie' name='Stephanie Dizza Chandranata' desc='Halo semuanyaaa! Perkenalkan nama aku Stephanie Dizza. Biasanya sih dipanggil Dizza, cuman kadang suka diplesetin jadi pizza/dizzy 😔 Hobi aku simple sihh, aku suka nyanyi dan binge-watching. Selain OSIS, aku juga join bbrp club lain seperti SC, MUN, OneJournal, dan beberapa kepanitiaan lain. Oh ya, aku juga suka bgt sama drakor lohh, jadi kalau ada recommend drakor yang bagus or mau ngobrol aja can simply DM ke @stephaniedizza yaa! Salam kenal semuanyaa 🤩' />}
        person3={<BidangSection img={Robert} alt='Robert' name='Robert Nathaniel Wijaya' desc='Halo semua!! Perkenalkan nama aku Robert. Aku sekarang duduk di kelas X. Hobiku ada banyak, mulai dari futsal, main piano, gambar, nyanyi, dll. Kalau lagi waktu luang, biasanya aku pake buat ngelakuin hobi-hobi aku. Trus”aku itu tipikial orang yang bisa dibilang ga bisa hidup kalo gaa sambil dengerin musik hehe. Aku bisa abisin waktu berjam” sambil nugas dan aktivitas lainnya sambil dengerin musik tiap hari. Aku paling sering dengerin musik pop, jazz, rnb, and masi banyak lagi. Aku juga sering nonton netflix kalo lagi bosen. Kalo masii mau tau lebih banyak tentang aku, bisa langsung cek ajaa yaa di instagram aku @robertnathaniel_ , thankk youu' />}
        person4={<BidangSection img={Regina} alt='Regina' name='Regina Lucky Surjadi' desc='Haii guyss! Salam kenal, aku Regina Lucky Surjadi sebagai anggota OSIS bidang 2 ✌🏻. Aku punya banyak banget nickname nihh kadang Regi, Reg, Gina bebas dehh 😋. I have a lot of hobbies like dancing, traveling, listening to music, watercolor painting, and swimming. Aku juga mengikuti berbagai organisasi seperti F1rst, Flashone, TOS, Monograph, EDS, dan banyak lainnya! Emang orangnya workaholic HAHAHAH 😅. Ohh fun fact, aku kalau di foto-foto biasanya keliatan tinggi, tapi aslinya engga 😭. Hopefully I can grow taller 🤞🏻. Btww aku orangnya friendlyy, jadi kalau mau tanya apa aja boleh langsung DM ke my instaa @reginaluckysurjadi! I don’t bite so just reach me out! 🤩' />}
        Description={true}
        DescBid="OSIS Bidang 2 adalah bidang pembinaan budi pekerti luhur dan akhlak mulia, sesuai namanya visi dari seksi bidang 2 adalah untuk menamakan sikap-sikap yang yang sesuai dengan budi pekerti dan nilai-nilai kristiani. Dalam rangka mewujudkan visi tersebut osis bidang 2 membuat beberapa program yaitu Christmas Carol, Quozzy, Spread the Word, dan Tutorial for Others by Smukiers. Jadi kalau teman teman berminat untuk bergabung di OSIS bidang 2 jangan lupa daftar ya saat ada pendaftaran OSIS"
        Program={true}
        ProgramList={
          [
            //UPDATED 2024
            "Tutorial For Others (TOS) - Memberi kesempatan bagi siswa-siswi yang bersedia untuk melakukan pengajaran dan berbagi dengan anak-anak dari Yayasan Sahabat Anak Grogol",
            "Buka Bersama - Kegiatan buka puasa bersama yang dilakukan di kantin SMAK 1 PENABUR Jakarta dan diikuti oleh seluruh karyawan (satpam, cleaning service, gardener, sopir, dan teknisi)",
            "Live In - Kegiatan yang dilaksanakan di desa, untuk memberi para pendaftar (peserta didik) sebuah kesempatan untuk membantu warga-warga di desa dan juga sebagai wadah bagi mereka untuk dapat mengedalikan diri mereka di tempat yang baru",
            "5S - Program Senyum, Salam, Sapa, Sopan, Santun yang dilaksanakan setiap hari oleh OSIS & MPK di depan pintu lobby",
          ]
        }
        dir="/OSIS/bidang3"
      />
    </div>
  )
}

export default OSIS_2