import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Cheryn from '../../../Image/Osis/Bidang_6/Cheryn_wihono.webp'
import Dasha from '../../../Image/Osis/Bidang_6/Dasha.webp'
import Radoslaw from '../../../Image/Osis/Bidang_6/Radoslaw.webp'
import Tesalonika from '../../../Image/Osis/Bidang_6/Tesalonika.webp'


const OSIS_6 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 6"
        desc="Bidang Kreativitas, Keterampilan, dan Kewirausahaan"
        person1={<BidangSection img={Cheryn} alt="Cheryn" name="Cheryn Wihono	" desc="Hai semua! Perkenalkan, nama aku Cheryn Wihono kalian bisa panggil aku cheryn/cher. Aku lahir pada tanggal 2 November 2006, jadi tahun ini aku 17 tahun. Hobi aku banyak sih, tapi yang utama aku suka nari hehehe. To be in OSIS is a very great opportunity loh, kalian belajar banyak banget dan tentunya seru banget! Bidang 6 sendiri merupakan salah satu dari great opportunitynya. Jadi kalo kalian daftar OSIS jangan lupa daftar di bidang 6!! Username IG aku @cheryn_wihono , boleh tuh di follow 😙. Oh iya fun fact about me, aku takut banget sama kecoa 👎👎."/>}
        person2={<BidangSection img={Dasha} alt="Dasha" name="Dasha Athalia Wiratama" desc="Haiii smua!! Kenalin aku Dasha Athalia Wiratama atau bisa dipanggil Dasha. Selain OSIS, aku juga ikut beberapa organisasi seperti Dewan Ambalan, SOC, Shutterone, + di gereja juga. Sedikit tentang aku, aku suka banget dengerin lagu, pokoknya spotify 24/7! Selain, itu kalau ada waktu luang aku suka nonton film dan rebahan sihh 😋. Oiya, aku juga pecinta bulu tangkis tp bagian nontonnya aja bukan main 😅, BL garis keras HAHAHA. 
        Lasttt kalo ada yang mau ditanya or ngobrol bisa reach out @dashaathalia on instagram yaa <3"/>}
        person3={<BidangSection img={Radoslaw} alt="Radoslaw" name="Radoslaw Aryananda" desc="Halo semuaa! Namaku Radoslaw Aryananda panggil aja Rado/Do. Namaku emang gini, dari polandia, kecee. Hobiku foto foto, semua fotoku ada di instagram @radoslw_ hoho. Aku suka banget sama film yang berbau thrilling atau horror. Fun fact aku, aku kalo tidur harus banget selimutan, kalau gak bakal otakku bakal mikir yang ghoib ghoib. Kalau mau ngobrol ngobrol sama aku, bisa dm instagramkuu."/>}
        person4={<BidangSection img={Tesalonika} alt="Tesalonika" name="Tesalonika Manuela Lay" desc="halo semuaaa! kenalin, nama aku Tesalonika, biasa dipanggil Tesa. hmmm hobi aku banyaak sih, tapi yang paling aku sukaa itu nyanyi sama nonton!! selain di OSIS, aku jugaa ikut beberapa organisasi and club, seperti Dewan Ambalan Pramuka, SOC, BBPB, SOG, dan Smukiez Choir. kalau kalian ada yang mau tanya atau ngobrol ngobrol, ataau mutualan spotify, pokoknya apa ajaa dehh, BOLEH BANGEET bisaaa dm aku di @tesalonikamanuelaa yaa! welcome semua, goodluck di SMUKIE <3"/>}
        Description={true}
        DescBid="OSIS Bidang 6 merupakan seksi dalam organisasi OSIS yang bertujuan untuk membina kreativitas, keterampilan, dan kewirausahaan untuk siswa/i SMAK 1 PENABUR Jakarta. Kami memiliki beberapa program kerja yang bertujuan untuk meningkatkan kreativitas dan keterampilan siswa serta meningkatkan usaha koperasi siswa."
        Program={true}
        ProgramList={
          [
            'BazOne : BazOne merupakan program terbaru dari bidang 6 dan merupakan salah satu acara besar SMAK 1. BazOne merupakan acara bazaar terbuka bagi warga SMAK 1 dan juga masyarakat luas dalam gerakan mendukung UMKM Indonesia dan juga memiliki beberapa sesi talkshow dan workshop sesuai dengan minat siswa/i SMAK 1.',
            'Technopreneur : Technopreneur merupakan workshop dengan tema yang telah dipilih oleh siswa/i SMAK 1 dan akan dilaksanakan pada saat BazOne berlangsung.',
            'Secret Admirer : Secret Admirer merupakan sebuah program tahunan OSIS untuk memperingati hari Valentine.',
            'Entrepreneur’s Day : Entrepreneur’s Day merupakan kegiatan workshop bagi warga SMAK 1 mengenai stock trading. Setelah workshop berakhir, akan diadakan perlombaan stock trading secara tim.',
            'Smukiez Artweek : Smukiez Artweek merupakan pameran seni SMAK 1.',
            'Monopoly : Monopoly merupakan salah satu cabang perlombaan yang diadakan pada perayaan HUT RI di SMAK 1.',
            'Koperasi Kejujuran : Koperasi siswa yang berada di lantai 1 sekolah dengan tujuan untuk meningkatkan kejujuran siswa/i SMAK 1.'
          ]
        }
        dir="/OSIS/bidang7"
      />
    </div>
  )
}

export default OSIS_6