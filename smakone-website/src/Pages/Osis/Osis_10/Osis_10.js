import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Hillary from '../../../Image/Osis/Bidang_10/Hillary.webp'
import Catherine from '../../../Image/Osis/Bidang_10/Catherine.webp'
import Michelle from '../../../Image/Osis/Bidang_10/Michelle.webp'


const OSIS_10 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 10"
        desc="Bidang Pembinaan Komunikasi dalam Bahasa Inggris"
        person1={<BidangSection img={Hillary} alt='Hillary' name='Hillary Abigail' desc='Halo semuaa!! Salkenn nama aku Hillary and right now aku lagi di XI MIPA. Jujur, aku ga punya banyak waktu for hobbies, tapi aku suka dengerin musik, baca buku, & nonton film 🫶🏻 My preferences for genre bervariasi n tergantung banget sama my mood 😅 Anyways, kalo ada recs or you just wanna talk, boleh banget reach me out @hillary_abigail26 yaa!!👋🏻👋🏻'/>}
        person2={<BidangSection img={Catherine} alt='Catherine' name='Catherine Nicole Yuen' desc="Did you know the amount of 'y's in someone's 'hey' tells you how interested they are in you? Anyways, heyyyy :) namaku Cath! A bit about me is aku hobi baca novel ato manga, nulis, gambar, nonton anime, main games mobile / board games, sama masak <3 Aku baca all genre, tapi paling suka dystopian sama romance. Walaupun sibuk, hobi2 harus disempetin juga yaa~ if you need help, hmu on LINE (ID: 1324is4231) for the best bad advice and the most lukewarm hot takes :P"/>}
        person3={<BidangSection img={Michelle} alt='Michelle' name='Michelle Huang' desc='Heyy~ kenalinn nama aku Michelle tapi PLEASEEE banget panggil aku elle aja (michelle only berlaku if my parents or guru yang manggil 👍👍) Tahun ini aku menjabat sebagai anggota osis bid 10 🌹 and i’m grateful to be a part of the fam‼️ Hobby aku banyak banget sii 😅 i just like to cobain hal-hal baru in generalll, Tapi i really love music!! Untuk genre juga my taste goes from classic to rock(arctic monkeys girl) so feel free ngobrol” tentang musik ato apapun ke akuu 😋 Funfact tentang aku, aku benci banget sama coklat & matcha (EWW👎👎)'/>}
        Description={true}
        DescBid="Bidang 10 adalah bidang yang berperan dalam pembinaan komunikasi dalam Bahasa Inggris. Bidang kami mendorong warga SMAK 1 Penabur untuk menggunakan Bahasa Inggris dalam wilayah sekolah terutama dengan program English Day. Melalui program-program lain seperti One Feed, One FM dan SEED, kami juga berusaha untuk meningkatkan kemampuan warga Smak 1 dalam mendengar, memahami dan berbicara dalam Bahasa Inggris."
        Program={true}
        ProgramList={
          [
            //PENDING
            'SEED (Smukie’s English Establisment Day), Sebuah program dimana kita membuat suatu acara yang dijalankan dengan memakai Bahasa Inggris. Melalui SEED, kita mendorong siswa/i Smak 1 untuk mendengarkan dan berinteraksi dengan Bahasa Inggris.',
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