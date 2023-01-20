import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import CZar from '../../../Image/Osis/Bidang_8/CZar.webp'
import BIG from '../../../Image/Osis/Bidang_8/BIG.webp'
import Krislyn from '../../../Image/Osis/Bidang_8/Krislyn.webp'


const OSIS_8 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 8"
        desc="Bidang Pembinaan Sastra dan Budaya"
        person1={<BidangSection img={CZar} alt="CZar" name="C’zar Salomo Parlindungan" desc="HALLLOOOOOOOOOOO! Salken smua nama aku C’zar, koordinator bidang 8. Aku suka dengerin musik, makan saksang, & jadi budak desain smuki :O. follow ig @czar.lg lesgo"/>}
        person2={<BidangSection img={BIG} alt="BIG" name="Brian Indrawan Gunhardi" desc="Hello gaess!! Salken aku Brian Indrawan Gunhardi, biasanya dipanggil Brian, Bri, ato BIG karena kalo namaku disingkat jadi BIG HAHAH + aku orangnya ya bisa dibilang gede jadi cocok lah ya. Hobi aku sehari-hari nonton, main game, main musik dan kadang-kadang olahraga aja contoh basket tapi gak jago-jago banget. Fun fact about me, aku sebenernya kecil les piano, cuman sekarang disekolah main bass, tapi di rumah main gitar jadi gitu de. Oh aku juga suka denger lagu-lagu fusion. Kalo mau tanya-tanya apa aja bisa contanct aku ya di instagram @brianig_ "/>}
        person3={<BidangSection img={Krislyn} alt="Krislyn" name="Krislyn Winny Riyadi	" desc="Hello everyone! Salam kenal semuanya. Perkenalkan, nama aku Krislyn, biasanya aku dipanggil Ilyn. Saat ini, aku duduk di kelas 10 MIPA dan di angkatan ini, aku adalah anggota OSIS bidang 8. Hobi aku ga ada yang spesifik sih HEHE, tapi aku suka ngobrol, berenang, dan nonton drakor. Jadi kalo kalian ada rekomendasi film atau kalian mau ngobrol/curcol, feel free to reach me out @krislynwryd_ welcome banget ya guys :) Selain OSIS, di SMUKIE juga ada banyak banget loh organisasi dan clubnya. Ayo guys join guyss!! I believe it will be one of the best experiences and learnings you can have. Kalo kalian tertarik buat join, dan mau tanya-tanya seputar SMUKIE, jangan sungkan untuk contact aku yaa. I’d love to share and answer your questions. Last but not least, Let's grow together in SMUKIE <33 Cheers! "/>}
        Description={true}
        DescBid="Selamat datang di Bidang 8 yaitu Bidang Pembinaan Sastra dan Budaya. Bidang ini bertanggung jawab mengenai kegiatan non-akademik di bidang kesenian, sastra, dan budaya. Bidang 8 juga mendukung siswa-siswi SMAK 1 dalam menyalurkan talenta kesenian pada acara STN ( Smukiez Theatre Night), kemampuan memproduksi short movie pada SMURF, dan bidang jurnalistik pada program PENS1L. Selain itu, bidang 8 juga memantau dan mempersiapkan regenerasi club-club di SMAK 1 serta masih banyak program bidang 8 yang menarik seperti Birthday Calendar, CNYxVals, dan RESONANSI."
        Program={true}
        ProgramList={
          [
            'Birthday Calendar, Birthday Calendar merupakan program harian yaitu mengumumkan siswa yang berulang tahun setiap hari efektif masuk sekolah.',
            'PENS1L, PENS1L merupakan pembuatan majalah/ artikel online yang mencakup tema dalam 1 tahun dan disalurkan melalui instagram @PENS1L. Artikel akan ditulis oleh tim jurnalistik SMAK 1.',
            'Valentine’s day + Chinese New Year, CNYxVals adalah hari perayaan Valentine dan tahun baru Imlek melalui serangkaian acara, penampilan, dan lomba yang akan diikuti oleh siswa-siswi SMAK 1. Tema tahun ini adalah Fortitude of Love.',
            'Smukiez Theater Night, Smukiez Theater Night atau yang biasa disingkat STN merupakan program tahunan yang menyelenggarakan sebuah pertunjukkan teater dan pentas seni di SMAK 1.',
            'RESONANSI, RESONANSI atau yang dikenal sebagai program yang lomba musikalisasi puisi dalam rangka merayakan hari Kemerdekaan Indonesia bertujuan untuk meningkatkan apresiasi sastra dalam bentuk puisi.',
            'SMURF, SMURF merupakan singkatan dari Smukiez Rolling Festival yang bertujuan untuk meningkatkan kreativitas murid-murid SMAK 1 dengan mengadakan perlombaan pembuatan film pendek yang dilaksanakan pada hari Batik Nasional.',
            'Kaderisasi club-club SMAK 1 bertujuan untuk memantau kegiatan club seni di SMAK 1 mulai dari perekrutan, pelaksanaan, dan kegiatan besar di tiap kegiatan club.'
          ]
        }
        dir="/OSIS/bidang9"
      />
    </div>
  )
}

export default OSIS_8