import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Erika from '../../../Image/Osis/Bidang_8/Erika.jpg'
import Czar from '../../../Image/Osis/Bidang_8/Czar.jpg'
import Yoel from '../../../Image/Osis/Bidang_8/Yoel.jpg'


const OSIS_8 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 8"
        desc="Bidang Pembinaan Sastra dan Budaya"
        person1={<BidangSection img={Erika} alt="Erika Gabriella Ramiel" name="Erika Gabriella Ramiel" desc="Halo semuanyaaa, kenalin namaku Erika Gabriella Ramiel, atau singkatnya bisa dipanggil Erika. Selain bergabung di OSIS aku juga ikut beberapa organisasi lainnya, seperti SOC, TEDx, dan Smukiez Choir. Hobi aku dengerin lagu di spotify dan 1 fun fact about me, aku suka banget nonton film horror, yuk nobar kapan-kapan hehe! Salam kenal ya semuaa jangan malu buat nanya and you can reach me out di @erikagabrllarmiel!"/>}
        person2={<BidangSection img={Czar} alt="C'zar Salomo Parlindungan Lumban Gaol" name="C'zar Salomo Parlindungan Lumban Gaol" desc="Halo semuanya! Nama lengkap aku C'zar Salomo Parlindungan Lumban Gaol, biar gampang panggil aja zar. Hobi 'bagus' aku desain, tapi sehari-hari sih sukanya rebahan sambil baca manga & dengerin lagu. Aku juga ngikutin NBA & baru-baru ini NFL. Feel free to ask me anything you want to know on @czar.lg!"/>}
        person3={<BidangSection img={Yoel} alt="Yoel Kyocera Antony" name="Yoel Kyocera Antony" desc="Halo semuanyaa, nama aku Yoel Kyocera Antony atau biasa dipanggil Yoel. Hobi aku itu rebahan dan nonton film “anime”, drakor, serial barat, horror dan apapun itu yang penting film hehe. Salam kenal yaa, kalo ada pertanyaan and other things, you can have me on @yoel_kyocera"/>}
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
      />
    </div>
  )
}

export default OSIS_8