import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Tristan from '../../../Image/Osis/Bidang_6/Tristan.webp'
import Doreen from '../../../Image/Osis/Bidang_6/Doreen.webp'
import Ellanor from '../../../Image/Osis/Bidang_6/Ella.webp'
import Jocelyn from '../../../Image/Osis/Bidang_6/Jocelyn.webp'
import Nicole from '../../../Image/Osis/Bidang_6/Nicole.webp'



const OSIS_6 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 6"
        desc="Bidang Kreativitas, Keterampilan, dan Kewirausahaan"

        person1={<BidangSection img={Tristan} alt='Tristan' name='Tristan Axel Kosen' desc='Haii semuanyaa, kenalin nama aku Axel, biasa dipanggil xel. Hobby aku main valo and pubg atau olahraga. Taon ini aku diberi kesempatan untuk menjadi koordinator bidang 6. Taun ini adalah taon kedua aku menjadii anggota osis. Kalau mau chat atau kenalan feel free to contact mee on igg @axl_266. Goodluckk on smukiee!'/>}
        person2={<BidangSection img={Doreen} alt='Doreen' name='Doreen Brigitta Saputra' desc="hii semua👋🏻 kenalin nama aku doreen, biasanya dipanggil doreen🙂 (bacanya dorin). dii waktu luang, aku suka doomscrolling tiktok, ngedit, & main emel😋 (funfact: wr floryn aku 6️⃣7️⃣). kalau mau ngobrol atau mutualan, feel free to follow @doreenbrigitta on insta, goodluckk and have funn di smukiee😼💕"/>}
        person3={<BidangSection img={Ellanor} alt='Ellanor' name='Ellanor Jovanka Huang' desc="#🍓🥭🍎 Haii, perkenalkan aku Ellanor, tahun ini aku bersyukur bisa diberi kesempatan menjadi pengurus OSIS bidang 6️⃣💸💰. Selain itu, aku juga ikut kegiatan kegiatan seperti SOC (❤️ desdivers), dan SCJ Kimia 🧪. Sedikiit tentang akuu, i loovee ballet 🩰 (both dancing & watching)!! Also, aku suka bangeett ngeband 🎸🎹 dan juga lari 👟. I'm a sucker for jazz music ( esp Chet Baker 💘💘 ), the Scream franchise 👻, & photography! Soo if u're searching for a photo hunting buddyy or just reeaaalllyy adorable dog pics, hmu @ellanorhuang on insta 🔥 Thank you for stopping byy, wishing u the most precious time @smukiee 🫀👋"/>}
        person4={<BidangSection img={Jocelyn} alt='Jocelyn' name='Jocelyn Felicia Lisyanto' desc="Haihaiii everyone 👋! Perkenalkan nama aku Jocelyn Felicia Lisyanto, biasanya dipanggil Joce, Joc, Jo 🙋‍♀️ 💕 I'm veryy gratefulll karena tahun ini aku bisa keterima menjadi anggota bidang 6️⃣✨ jujurrr aja akuu agak nolep 💀, but in my free timee I LOVEE to eat 🥘 (yes I'm unfortunately a bigback 🤞), draww 🎨, and nontonn moviee or seriess (MY FAV IS When I Fly Towards You 💥💕). I am alsoo a (lowkey hardcore) Kpop fan 🤩 Like STRAYKIDS AND AESPA‼️‼️ Other than thatt, aku juga suka dengerinn artists like Laufey, Beabadoobee, Lauv, LANY, and Nadin Amizahh 💕💕💕 Kaloo kalian mau mutualan or ngobrol2 about anythinggg, Don't forget to check out @jfellcc 🫰✨ HAVE FUN DI SMUKIEE GUYSS 💕💪"/>}
        person5={<BidangSection img={Nicole} alt='Nicole' name='Nicole Tokyo Liongdra' desc='Stroberi, mangga, apel, haihaii kenalin namaku Nicole Tokyo Liongdra. Kalian bisa panggil aku Nicole atau Kol ajaa 🥬 Engga, aku ga lahir di Tokyo angangang 🤣 Tahun ini aku menjabat sebagai anggota bidang 6. Kalau ada waktu luang aku biasanya suka painting, vlogging, dengerin musik, main puzzle games (kalau kalian liat aku pegang hp, kemungkinan 99% lagi main), sama nyobain makanan baru 😋🍴 Funfact: aku suka semua jenis keju termasuk blue cheese 🐀. Kalau mau tau lebih banyak tentang aku bisa cek @nicoletkyo on ig. Semangat di smukieee 💥💥'/>}


        Description={true}
        DescBid="OSIS Bidang 6 merupakan seksi dalam organisasi OSIS yang bertujuan untuk membina kreativitas, keterampilan, dan kewirausahaan untuk siswa/i SMAK 1 PENABUR Jakarta. Hal ini ditunjukan dalam bentuk program kerja kami yang sekaligus dibangun untuk menggalang dana bagi program OSIS lainnya."
        Program={true}
        ProgramList={
          [
            //UPDATED 2026
            "⁠Secret Admirer - Diselenggarakan pada saat Valentine's Day, menggunakan sistem pre order offline dan online. Produk yang dijual adalah berupa produk yang berkaitan dengan esensi Valentine's Day, seperti coklat, bunga dan ada juga surat dan menfess.",
            '⁠Koperasi Kejujuran - Diadakan secara offline dan ditempatkan di lantai 3 gedung SMAK 1 PENABUR Jakarta. Setiap bulannya, akan ada laporan keuangan yang disetor secara rutin. PIC akan mendata KOPERASI KEJUJURAN setiap harinya. Akan dibuat laporan per minggunya untuk memastikan koperasi tetap rapi dan terurus dengan baik.',
            '⁠BazOne - Berkolaborasi dengan bidang 7. Dilaksanakan bersamaan dengan Smukiez Olympic, di SMAK 1 PENABUR Jakarta dalam bentuk stand bazaar yang didirikan oleh siswa/i SMAK 1 PENABUR Jakarta. Membutuhkan tambahan kepanitiaan yang nantinya akan mengikuti proses seleksi. Pada akhir periode, seluruh panitia akan memperoleh surat keterangan sebagai wujud apresiasi atas partisipasinya dalam membantu BazOne. ',
            '⁠Gradtitude - Diselenggarakan pada saat hari kelulusan, siswa/i bisa memesan pre order produk secara offline dan online. Produk yang dijual adalah produk - produk yang berkaitan dengan esensi kelulusan, seperti boneka wisuda, bunga, dan lain - lain.',
            '⁠Smukiez Market Square - Diselenggarakan pada saat hari h Smukiez Art Performance, akan menyebarkan proposal stand UMKM. Stand akan berada di depan lobby SMAK 1 (di parkiran). Nantinya, penonton Smukiez Art Performance bisa turun melihat - lihat dan membeli sebelum SAP mulai dan pada waktu break (jeda antar scene).',
            '⁠Air Kejujuran - Kegiatan penjualan air kejujuran ini diadakan di lantai 3 Gedung SMAK 1 PENABUR Jakarta. Setiap bulan akan disusun dan diserahkan laporan keuangan secara rutin. Selain itu, akan dibuat laporan mingguan untuk memastikan kegiatan penjualan berjalan tertib, transparan, serta terkelola dengan baik.',
          ]
        }
        dir="/OSIS/bidang7"
      />
    </div>
  )
}

export default OSIS_6