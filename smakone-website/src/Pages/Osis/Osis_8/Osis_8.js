import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Laurensia from '../../../Image/Osis/Bidang_8/Laurensia.webp'
import Grace from '../../../Image/Osis/Bidang_8/Grace.webp'
import Yovela from '../../../Image/Osis/Bidang_8/Yovela.webp'


const OSIS_8 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 8"
        desc="Bidang Pembinaan Sastra dan Budaya"
    
        person1={<BidangSection img={Yovela} alt='Yovela' name='Yovela Dania Hewis' desc='Haiii semuanya!! salken nama aku Yovela Dania Hewis, biasanya dipanggil yovela / pei pei, ato sayang juga boleh.. HAHAHHAHA. Aku suka nari 🕺, baking 👩‍🍳🍪, sama nonton film 🎬🍿. selain menjadi koordinator bidang 8 aku juga tergabung di F1RST, BBPB, REVER1E, dan OneJournal (writer). Jadi kalo F1RST tampil klian wajib banget rusuh!! Kalo mau ngobrol2 & mutualan juga boleh banget dm ig aku @yovelahewis. Have fun di smukiee!!'/>}
        person2={<BidangSection img={Grace} alt='Grace' name='Grace Anindya Septiawan' desc='Hai semuaa! Nama aku Grace Anindya Septiawan, biasa dipanggil grace atau anin juga bolehh. Aku 24/7 on spotify, hobi main musik terutama gitar, and i love chamomile tea. Aku gak suka film horror yang hantunya seremm, tapi aku suka banget film thriller hehe =D. Selain OSIS aku juga gabung di club MASK btw. Kalo mau ngobrol2 bolehh banget dm aku di @as.grc_ yaa. Goodluck di SMUKIE semuanyaa!!'/>}
        person3={<BidangSection img={Laurensia} alt='Laurensia' name='Laurensia Edeline Santosa' desc="Hai haii!!!👋🏻 Nama aku Laurensia Edeline Santosa, biasa dipanggil Laurenn. Aku dari kelas X1 dan bagian dari osis bidang 8✨. Aku suka banget main badminton 🏸 dan baca novell📰, terutama karya-karyanya Tere Liye!!! Selain itu, aku juga suka banget dengerin musik terutama genre R&B dan Pop🎷. Fun fact, aku phobia tinggi dan paling gabisa nonton film hororr 😢😢.  Kalau mau kasih rekomendasi novel seru atau tanya-tanya soal smukie boleh dm ig akuu @laurensiaedeline14. Thank youu<3"/>}
        
        

        Description={true}
        DescBid="Selamat datang di Bidang 8 yaitu Bidang Pembinaan Sastra dan Budaya. Bidang ini bertanggung jawab mengenai kegiatan non-akademik di bidang kesenian, sastra, dan budaya. Bidang 8 juga mendukung siswa-siswi SMAK 1 dalam menyalurkan talenta kesenian pada acara STN ( Smukiez Theatre Night), kemampuan memproduksi short movie pada SMURF, dan bidang jurnalistik pada program PENS1L. Selain itu, bidang 8 juga memantau dan mempersiapkan regenerasi club-club di SMAK 1 serta masih banyak program bidang 8 yang menarik seperti Birthday Calendar, CNYxVals, dan RESONANSI."
        Program={true}
        ProgramList={
          [
            //UPDATE 2024
            'Birthday Calendar - penyampaikan pengumuman ulang tahun bagi setiap warga SMAK 1 secara rutin melalui saluran radio sekolah.',
            'REVER1E - publikasi konten yang merangkup segala macam informasi yang disalurkan melalui beberapa hasil karya siswa dalam bentuk post di media sosial.',
            'CNYxVALS - perayaan harmoni budaya antara hari raya tahun baru Imlek dan Hari Kasih Sayang dengan menghadirkan acara yang menarik dengan nuansa imlek sekaligus romantis Valentines',
            'Smukiez Art Performance (SAP) - Menyelenggarakan pertunjukan seni yang mendalam dan beragam, mengapresiasi seni teater, vokal, musik, tari, dan lukis, membawa penonton dalam perjalanan artistik yang menggugah perasaan, serta memberikan penghormatan terhadap keindahan dan ekspresi kreatif dalam segala bentuk seni.',
            'Lagu Daerah - Pemutaran lagu daerah menggunakan radio SMAK 1 dengan tujuan membantu siswa-siswi dalam mengenali lagu daerah Indonesia',
            "BEAT '8 - Memperkenalkan lagu-lagu Indonesia menggunakan radio sekolah, pada event tertentu seperti Valentine akan dibacakan pesan anonim yang dikirimkan melalui gforms di radio sekolah"
          ]
        }
        dir="/OSIS/bidang9"
      />
    </div>
  )
}

export default OSIS_8