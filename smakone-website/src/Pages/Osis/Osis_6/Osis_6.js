import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Tesalonika from '../../../Image/Osis/Bidang_6/Tesalonika.webp'
import Radoslaw from '../../../Image/Osis/Bidang_6/Radoslaw.webp'
import Annette from '../../../Image/Osis/Bidang_6/Annette.webp'
import Jesslyn from '../../../Image/Osis/Bidang_6/Jesslyn.webp'


const OSIS_6 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 6"
        desc="Bidang Kreativitas, Keterampilan, dan Kewirausahaan"
        person1={<BidangSection img={Tesalonika} alt='Tesalonika' name='Tesalonika Manuela Lay Ginting' desc='halo semuaaa! kenalin, nama aku Tesalonika, biasa dipanggil Tesa, dan di tahun ini, aku menjadi koordinator dari OSIS Bidang 6. hmmm hobi aku banyaak sih, tapi yang paling aku sukaa itu nyanyi sama nonton!! selain di OSIS, aku jugaa ikut beberapa organisasi and club, seperti Dewan Ambalan Pramuka, SOC, BBPB, SOG, dan Smukiez Choir. kalau kalian ada yang mau tanya atau ngobrol ngobrol, ataau mutualan spotify, pokoknya apa ajaa dehh, BOLEH BANGEET bisaaa dm aku di @tesalonikamanuelaa yaa! welcome semua, goodluck di SMUKIE <3' />}
        person2={<BidangSection img={Radoslaw} alt='Radoslaw' name='Radoslaw Aryananda' desc='Salam kenal semua nama aku Radoslaw biasa dipanggil Rado. Aku suka foto dan travelling. Fun fact aku juga suka banget olahraga badminton walaupun gak jago jago banget hehe. Kalo kalian suka sama foto foto juga boleh banget follow ig aku @radoslw_' />}
        person3={<BidangSection img={Annette} alt='Annette' name='Annette Chloe Hidayat' desc="Hii semua!! salam kenal, nama aku Annette Chloe dipanggilnya anet juga si hehe. Tahun ini aku kelas X5 dan aku anggota bidang 6 💥💥. Hobby aku ada banyakk, aku suka nyanyi, dengerin musik sampe ketiduran, nonton especially horror movies dan main sama kucing 🐈🐈 and of course i'm always open to try new thingss. I also enjoy doing things that are beauty related 🫢🫢. Selain OSIS aku juga ikut SOG dan beberapa kepengurusan di gereja. username IG aku @annxttez._ kalau kalian mau ngobrol-ngobrol atau mutualan bolee banget so don't be scared to reach out. semangat teruss di SMUKIE tapi jangan lupa untuk have fun juga 👋👋" />}
        person4={<BidangSection img={Jesslyn} alt='Jesslyn' name='Jesslyn Milkha Hongdiyanto' desc='Hai semuaaa 👋 !  Aku Jesslyn Milkha Hongdiyanto atau yang bisa dipanggil Jess/Jesslyn. Aku tuh pencinta musik, gambar, nonton, dan kamuu (eaa) ❤️. Im also a swiftie at heart because the best people in life are freeeeee ✨️. Aku juga hobi main valorant meski cupu tapi gapapa yang penting have fun ya kansss. Aku orangnya extrovert garis keras so kalau kalian ketemu dan mau nyapa/ngobrol ngobrol, langsung aja ya! Atau lewat dm instagram di @blubambii juga boleh hehe (pasti dibales kokkk) 🫶🏻' />}
        Description={true}
        DescBid="OSIS Bidang 6 merupakan seksi dalam organisasi OSIS yang bertujuan untuk membina kreativitas, keterampilan, dan kewirausahaan untuk siswa/i SMAK 1 PENABUR Jakarta. Kami memiliki beberapa program kerja yang bertujuan untuk meningkatkan kreativitas dan keterampilan siswa serta meningkatkan usaha koperasi siswa."
        Program={true}
        ProgramList={
          [
            //UPDATED 2024
            '⁠Koperasi Kejujuran - Koperasi siswa yang berada di lantai 3 sekolah dengan tujuan untuk meningkatkan kejujuran siswa/i SMAK 1',
            '⁠Secret Admirer - Secret Admirer merupakan sebuah program tahunan OSIS untuk memperingati hari Valentine',
            '⁠Gradtitude - Gradtitude merupakan sebuah program tahunan OSIS untuk memperingati dan juga mengapresiasi kakak - kakak kelas 12 saat hari purnawidya',
            '⁠BazOne - BazOne merupakan salah satu acara besar di SMAK 1. BazOne merupakan acara bazaar terbuka bagi warga SMAK 1, dengan sistem perlombaan antar kelas. BazOne juga memiliki beberapa sesi talkshow dan workshop sesuai dengan minat siswa/i SMAK 1. BazOne dilaksanakan setelah ujian, berkolaborasi dengan Smukiez Olympic',
            '⁠Smukiez Market Square - Sebuah program terbaru dari OSIS bidang 6 yang nantinya akan berkolaborasi dengan bidang 8 (Smukiez Art Perfomance). Smukiez Market Square merupakan bazaar yang akan diisi dengan mengundang UMKM dari luar, dengan tujuan untuk membantu usaha - usaha kecil',
          ]
        }
        dir="/OSIS/bidang7"
      />
    </div>
  )
}

export default OSIS_6