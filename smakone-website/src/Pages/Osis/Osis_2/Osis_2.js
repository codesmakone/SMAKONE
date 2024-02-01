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
        person1={<BidangSection img={Louisa} alt='Louisa' name='Louisa Richelle' desc='Hiii guyss, nama aku Louisa Richelle, panggil aja Sasaa. Biasa aku suka dengerin lagu dan nonton film untuk isi waktu luang. Terutama drakor romance itu seru banget banget banget. Aku juga suka banget pergi main sama temen-temen seru-seruan. Kalo kalian mau tanya-tanya soal smukiee atau ngobrol-ngobrol, boleh banget chat aku yaa @louisarichelle. Salam kenal semuanyaa!'/>}
        person2={<BidangSection img={Stephanie} alt='Stephanie' name='Stephanie Dizza Chandranata' desc='Halo semuanyaaa! Perkenalkan nama aku Stephanie Dizza. Biasanya sih dipanggil Dizza, cuman kadang suka diplesetin jadi pizza/dizzy 😔 Hobi aku simple sihh, aku suka nyanyi dan binge-watching. Selain OSIS, aku juga join bbrp club lain seperti SC, MUN, OneJournal, dan beberapa kepanitiaan lain. Oh ya, aku juga suka bgt sama drakor lohh, jadi kalau ada recommend drakor yang bagus or mau ngobrol aja can simply DM ke @stephaniedizza yaa! Salam kenal semuanyaa 🤩'/>}
        person3={<BidangSection img={Robert} alt='Robert' name='Robert Nathaniel Wijaya' desc='Halo semua!! Perkenalkan nama aku Robert. Aku sekarang duduk di kelas X. Hobiku ada banyak, mulai dari futsal, main piano, gambar, nyanyi, dll. Kalau lagi waktu luang, biasanya aku pake buat ngelakuin hobi-hobi aku. Trus”aku itu tipikial orang yang bisa dibilang ga bisa hidup kalo gaa sambil dengerin musik hehe. Aku bisa abisin waktu berjam” sambil nugas dan aktivitas lainnya sambil dengerin musik tiap hari. Aku paling sering dengerin musik pop, jazz, rnb, and masi banyak lagi. Aku juga sering nonton netflix kalo lagi bosen. Kalo masii mau tau lebih banyak tentang aku, bisa langsung cek ajaa yaa di instagram aku @robertnathaniel_ , thankk youu'/>}
        person4={<BidangSection img={Regina} alt='Regina' name='Regina Lucky Surjadi' desc='Haii guyss! Salam kenal, aku Regina Lucky Surjadi sebagai anggota OSIS bidang 2 ✌🏻. Aku punya banyak banget nickname nihh kadang Regi, Gina, Gigi bebas dehh 😋. I have a lot of hobbies like dancing, listening to music, watercolor painting, and swimming. Aku juga mengikuti berbagai organisasi seperti Flashone, TOS, EDS, dan banyak lainnya! Emang orangnya workaholic HAHAHAH 😅. Ohh fun fact, aku kalau di foto-foto biasanya keliatan tinggi, tapi aslinya engga 😭. Hopefully I can grow taller 🤞🏻. Btww aku orangnya friendlyy, jadi kalau mau tanya apa aja boleh langsung DM ke my instaa @reginaluckysurjadi! I don’t bite so just reach me out! 🤩'/>}
        Description={true}
        DescBid="OSIS Bidang 2 adalah bidang pembinaan budi pekerti luhur dan akhlak mulia, sesuai namanya visi dari seksi bidang 2 adalah untuk menamakan sikap-sikap yang yang sesuai dengan budi pekerti dan nilai-nilai kristiani. Dalam rangka mewujudkan visi tersebut osis bidang 2 membuat beberapa program yaitu Christmas Carol, Quozzy, Spread the Word, dan Tutorial for Others by Smukiers. Jadi kalau teman teman berminat untuk bergabung di OSIS bidang 2 jangan lupa daftar ya saat ada pendaftaran OSIS"
        Program={true}
        ProgramList={
          [
            //UPDATED 2024
          'Tutorial for Others yang adalah program pengajaran bagi anak-anak kurang beruntung yang diadakan bersama Yayasan Sahabat Anak cabang Grogol (SAG), di mana para peserta didik sebagai tutor akan mengajarkan anak-anak di SAG pelajaran seperti bahasa inggris, IPTEK, fun games, dan lain-lain.',
          '5S (Senyum, Sapa, Salam, Sopan, dan Santun) adalah program terjadwal yang melibatkan MPK dan OSIS untuk menanamkan kebiasaan, nilai-nilai sopan santun, dan pengimplementasian karakter BEST kepada seluruh warga sekolah. Program ini dilakukan setiap hari aktif sekolah mulai dari jam 06:00 - 06:25 dengan pembagian tugas 2 orang MPK dan 2 orang OSIS setiap harinya secara bergiliran.',
          'Bukber (Buka Bersama) adalah program yang mewujudkan nilai-nilai toleransi, kepedulian, dan empati di lingkungan komplek SMAK 1, terutama untuk karyawan SMAK 1 sebagai bentuk kasih kami yang dilakukan saat bulan puasa.',
          'Live in adalah program yang dilakukan di lingkungan (rumah-rumah) masyarakat pedesaan dimana setiap peserta mengikuti seluruh kegiatan yang dilakukan oleh masing-masing keluarga yang mereka tempati, mengenal budaya di lingkungan setempat dan melakukan pengabdian masyarakat. Para peserta akan mendapat pengalaman-pengalaman baru yang dapat digunakan untuk kehidupannya di masa depan.',
          'Food Bank adalah program kolaborasi antar bidang 2 dan bidang 5 yang bekerja sama dengan Food Bank Indonesia dalam penyaluran makanan-makanan yang dikumpulkan siswa/i SMAK 1 kepada orang-orang yang membutuhkan yang dilakukan setiap 3 bulan sekali.',
          ]
        }
        dir="/OSIS/bidang3"
        />
    </div>
  )
}

export default OSIS_2