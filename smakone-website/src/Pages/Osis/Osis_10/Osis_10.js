import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Marco from '../../../Image/Osis/Bidang_10/Marco.webp'
import Hillary from '../../../Image/Osis/Bidang_10/Hillary.webp'
import JessicaRegina from '../../../Image/Osis/Bidang_10/JessicaRegina.webp'

const OSIS_10 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 10"
        desc="Bidang Pembinaan Komunikasi dalam Bahasa Inggris"
        person1={<BidangSection img={Marco} alt="Marco" name="Marco Sebastian	" desc="Yo! Halo semua, aku Marco Sebastian Tjiong, nama panggilan Marco. Aku sekarang ada di kelas XI MIPA. Hobi aku musiman, tapi ada 2 hobi yang konsisten yaitu main dan tidur. Salam kenal semua 👋👋"/>}
        person2={<BidangSection img={Hillary} alt="Hillary" name="Hillary Abigail 	" desc="Halo semua!! Kenalin, nama aku Hillary, kadang bisa dipanggil Hill, sebagai anggota bidang 10. Sekarang aku lagi duduk di kelas X MIPA 5. Hobiku termasuk dengerin lagu, baca buku, sama nonton. Salam kenal semuanyaa!! "/>}
        person3={<BidangSection img={JessicaRegina} alt="JessicaRegina" name="Jessica Regina Aliudin" desc="haii semuaa !! namaku Jessica, biasa dipanggil jess. aku osis bidang 10, tapi kalo kamu 10/10 <33 hobi aku tuhh gambar, edit video, dengerin musik, main game and um...nonton anime HAHAHA. my favorite game is enstars, i play on jp :] fun fact about me isss julukan myfrenss untuk i tuhh wibu nolep,, sangad menyedihkan tapi ga salah sih jadi gpp WKWKW. ALSOOO kalau kalean mau tanya-tanya orr mo ngobrol, chat aku ajaa di @jessica.aliudin ga digigit kok hehee. salken everyone, have fun in smukie !! <3"/>}
        Description={true}
        DescBid="Bidang 10 adalah bidang yang berperan dalam pembinaan komunikasi dalam Bahasa Inggris. Bidang kami mendorong warga SMAK 1 Penabur untuk menggunakan Bahasa Inggris dalam wilayah sekolah terutama dengan program English Day. Melalui program-program lain seperti One Feed, One FM dan SEED, kami juga berusaha untuk meningkatkan kemampuan warga Smak 1 dalam mendengar, memahami dan berbicara dalam Bahasa Inggris."
        Program={true}
        ProgramList={
          [
            'SEED (Smukie’s English Establisment Day), Sebuah program dimana kita membuat suatu acara yang dijalankan dengan memakai Bahasa Inggris. Melalui SEED, kita mendorong siswa/i Smak 1 untuk mendengarkan dan berinteraksi dengan Bahasa Inggris. Program ini biasanya dijalankan bersamaan dengan perayaan Hari Kartini.',
            'One FM, Di dalam program ini, Bidang 10 memanfaatkan sarana radio sekolah dan memilih beberapa siswa/i untuk menjadi pembawa radio sekolah, dimana mereka bisa memutar lagu dan berbincang-bincang dalam bahasa Inggris. Program ini dijalankan setiap hari Rabu dan Jumat di jam istirahat kedua.',
            'English Service, Program ini merupakan kolaborasi bersama dengan program kebaktian oleh Bidang 1 dimana seluruh warga SMAK 1 menjalankan ibadah rohani dalam Bahasa Inggris setiap semesternya. Bahasa Inggris diterapkan dalam pengangkatan pujian, pembacaan doa, serta pemberitaan khotbah oleh pendeta',
            'English Day, English Day merupakan program yang dilaksanakan secara rutin setiap hari Rabu dan Jumat dimana seluruh warga SMAK 1 dihimbau untuk menggunakan Bahasa Inggris dalam proses belajar-mengajarnya. Bahasa Inggris diterapkan pada doa dan renungan pagi, salam guru, proses pengajar oleh guru, serta percakapan sehari-hari antar warga SMAK 1.'
          ]
        }
        dirHome={true}
      />
    </div>
  )
}

export default OSIS_10