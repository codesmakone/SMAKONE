import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Annette from '../../../Image/Osis/Bidang_6/Annette.webp'
import Jesslyn from '../../../Image/Osis/Bidang_6/Jesslyn.webp'
import Cecylia from '../../../Image/Osis/Bidang_6/Cecylia.webp'
import Tristan from '../../../Image/Osis/Bidang_6/Tristan.webp'


const OSIS_6 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 6"
        desc="Bidang Kreativitas, Keterampilan, dan Kewirausahaan"
        person1={<BidangSection img={Jesslyn} alt='Jesslyn' name='Jesslyn Milkha Hongdiyanto' desc='Haiii! 👋 Kenalin aku Jesslyn, dan tahun ini aku diberi kesempatan untuk menjadi koordinator bidang 6 yeyeyeyey 💥. Selain OSIS, im also a part of berbagai kepanitiaan di smukie, seperti SOC, SNM, Bazone, dsb ✌️ (I LOVE DEKLAP!!!). A few things about me, i LOVE music. Yang biasanya aku dengerin tuh Taylor Swift (basic i knowww), Gracie Abrams, a little bit of Conan Gray and many more. Suka nyanyi dan main gitar jugaaa (meski cupu si). Kalo lagi free, i love watching movies/shows (some of my favorites recently are arcane, stranger things, both of the hauntings, the half of it, house md, and many more) and i play games like valorant, phasmophobia, and basically games yang bisa chill rame rame wkwkwk. I also love art and drawing 💌. Funfact aku orangnya WOA abissss. Im generally a pretty chill and open minded person, jadi kalau mau ngobrol atau nanya nanya FEEL FREE TO REACH OUT YAAAA @Blubambii di instagram hehe 😋. Semangat terus ya di smukie all! 🫶🏻'/>}
        person2={<BidangSection img={Annette} alt='Annette' name='Annette Chloe Hidayat' desc="haloo semua !! salam kenal, nama aku Annette Chloe dan biasanya dipanngil anet / net hehe. Tahun ini aku menjadi anggota bidang 6️⃣ and i'm beyond grateful and excited to be apart of the upcoming journey. Hobby aku ada banyak and i enjoy doing new things tapi aku paling suka nyanyi, dengerin musik, nonton (esp horror), nyemil, main sama kucing 🐈🐈 & i also enjoy things that are beauty related 🤭. selain OSIS aku juga ikut beberapa organisasi / panit seperti SOG. OYAA kalau kalian mau ngobrol atau mutualan feel free to follow @annxttez._ on ig. HAVE FUN DI SMUKIEE 😼"/>}
        person3={<BidangSection img={Cecylia} alt='Cecylia' name='Cecylia Kyrie' desc='hii semuaa! Nama aku Cecylia, bisa dipanggil cecyl atau cyl. Hobi aku banyak dan ganti ganti sii hehe tapi aku paling suka combat sports grappling, nonton movie and tidur😅 kalo kalian mau tanya tanya atau mutualan sama akuu bisa bangett ke ig aku @cecylia.kyriee, salam kenal semua and goodluckk di smukiee‼️'/>}
        person4={<BidangSection img={Tristan} alt='Tristan' name='Tristan Axel Kosen' desc='Halo semuaaanya, kenalin aku Tristan Axel Kosen, biasanyaa dipanggil axel ato xel, anggota dari bidang 6. Di waktu kosong biasanya aku olahragaa baskett atau ga pingpongg, kadang main game jugaa kayak pubg sm valo. '/>}
        Description={true}
        DescBid="OSIS Bidang 6 merupakan seksi dalam organisasi OSIS yang bertujuan untuk membina kreativitas, keterampilan, dan kewirausahaan untuk siswa/i SMAK 1 PENABUR Jakarta. Kami memiliki beberapa program kerja yang bertujuan untuk meningkatkan kreativitas dan keterampilan siswa serta meningkatkan usaha koperasi siswa."
        Program={true}
        ProgramList={
          [
            //UPDATED 2024
          '⁠Koperasi Kejujuran : Koperasi siswa yang berada di lantai 3 sekolah dengan tujuan untuk meningkatkan kejujuran siswa/i SMAK 1.',
          '⁠Secret Admirer : Secret Admirer merupakan sebuah program tahunan OSIS untuk memperingati hari Valentine.',
          '⁠⁠Entrepreneur’s Day : Kegiatan workshop bagi warga SMAK 1 yang diadakan setelah ujian, berkolaborasi dengan Smukiez Olympic. Setelah workshop berakhir, akan diadakan perlombaan untuk siswa yang berkaitan untuk meningkatkan skill entrepreneurship siswa/i. ',
          '⁠Gradtitude : Gradtitude merupakan sebuah program tahunan OSIS untuk memperingati dan juga mengapresiasi kakak - kakak kelas 12 saat hari purnawidya. ',
          '⁠BazOne : BazOne merupakan salah satu acara besar di SMAK 1. BazOne merupakan acara bazaar terbuka bagi warga SMAK 1, dengan sistem perlombaan antar kelas. BazOne juga memiliki beberapa sesi talkshow dan workshop sesuai dengan minat siswa/i SMAK 1. BazOne dilaksanakan setelah ujian, berkolaborasi dengan Smukiez Olympic. ',
          '⁠Smukiez Night Market : Sebuah program terbaru dari OSIS bidang 6 yang nantinya akan berkolaborasi dengan bidang 8 (Smukiez Theatre Night). Smukiez Night Market merupakan bazaar yang akan diisi dengan mengundang UMKM dari luar, dengan tujuan untuk membantu usaha - usaha kecil.',
          ]
        }
        dir="/OSIS/bidang7"
      />
    </div>
  )
}

export default OSIS_6