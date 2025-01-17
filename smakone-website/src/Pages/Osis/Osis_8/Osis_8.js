import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Krislyn from '../../../Image/Osis/Bidang_8/Krislyn.webp'
import Grace from '../../../Image/Osis/Bidang_8/Grace.webp'
import Yovela from '../../../Image/Osis/Bidang_8/Yovela.webp'


const OSIS_8 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 8"
        desc="Bidang Pembinaan Sastra dan Budaya"
        person1={<BidangSection img={Krislyn} alt='Krislyn' name='Krislyn Winny Riyadi' desc="Haii smuaaa! Salken aku Krislyn, biasanya dipanggil Ilyn. Hobi aku banyak sihh... aku suka hangout, berenang, and nonton drakor. Jadi kalo kalian ada rekomendasi film atau kalian mau ngobrol/curcol, feel free to reach me out @krislynwryd_ Selain OSIS, di SMUKIE juga ada banyak banget loh organisasi dan clubnya. Kalo kalian tertarik buat join, dan mau tanya-tanya seputar SMUKIE, jangan sungkan untuk contact aku yaa. I’d love to share and answer your questions. Last but not least, Let's grow together in SMUKIE Cheers!♡"/>}
        person2={<BidangSection img={Grace} alt='Grace' name='Grace Anindya Septiawan' desc='Haloo semuaa!! Nama aku Grace Anindya Septiawan, tahun ini aku anggota bidang 8, kelas X8 (wuih 8-8, jodoh nih). Aku biasa dipanggil Grace atau Anin juga bolehh. Aku 24/7 on spotify, hobi main musik terutama gitar, and i love chamomile tea. Aku gak suka film horror yang hantunya seremm, tapi aku suka banget film thriller hehe =D. Kalo mau ngobrol atau tanya-tanya bisa contanct aku di ig @as.grc_  yaa. Goodluck di SMUKIE semuanyaa!!!'/>}
        person3={<BidangSection img={Yovela} alt='Yovela' name='Yovela Dania Hewis' desc='Haiii semuanya!! salken nama aku Yovela Dania Hewis, biasanya dipanggil yovela / pei pei, ato sayang juga boleh.. HAHAHHAHA. Aku suka nari, baking, sama nonton film. oh iyaa, selain anggota bid 8 aku juga tergabung di F1RST, BBPB, dan OneJournal. Jadi kalo F1RST tampil klian wajib banget rusuh!! Kalo mau ngobrol2 & mutualan juga boleh banget follow ig aku @yovelahewis. Have fun di smukiee!!'/>}
        Description={true}
        DescBid="Selamat datang di Bidang 8 yaitu Bidang Pembinaan Sastra dan Budaya. Bidang ini bertanggung jawab mengenai kegiatan non-akademik di bidang kesenian, sastra, dan budaya. Bidang 8 juga mendukung siswa-siswi SMAK 1 dalam menyalurkan talenta kesenian pada acara STN ( Smukiez Theatre Night), kemampuan memproduksi short movie pada SMURF, dan bidang jurnalistik pada program PENS1L. Selain itu, bidang 8 juga memantau dan mempersiapkan regenerasi club-club di SMAK 1 serta masih banyak program bidang 8 yang menarik seperti Birthday Calendar, CNYxVals, dan RESONANSI."
        Program={true}
        ProgramList={
          [
            //UPDATE 2024
          'Birthday Calendar, penyampaikan pengumuman ulang tahun bagi setiap warga SMAK 1 secara rutin melalui saluran radio sekolah.',
          'REVER1E, publikasi konten yang merangkup segala macam informasi yang disalurkan melalui beberapa hasil karya siswa dalam bentuk post di media sosial.',
          'Chinese New Year + Valentine’s Day (CNYxVals) perayaan harmoni budaya antara hari raya tahun baru Imlek dan Hari Kasih Sayang dengan menghadirkan acara yang menarik dengan nuansa imlek sekaligus romantis Valentines',
          'Smukiez Art Performance (SAP), Menyelenggarakan pertunjukan seni yang mendalam dan beragam, mengapresiasi seni teater, vokal, musik, tari, dan lukis, membawa penonton dalam perjalanan artistik yang menggugah perasaan, serta memberikan penghormatan terhadap keindahan dan ekspresi kreatif dalam segala bentuk seni.',
          ]
        }
        dir="/OSIS/bidang9"
      />
    </div>
  )
}

export default OSIS_8