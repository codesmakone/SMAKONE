import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Rachelle from '../../../Image/Osis/Bidang_4/Rachelle.webp'
import Jesslyn from '../../../Image/Osis/Bidang_4/Jesslyn.webp'
import Emily from '../../../Image/Osis/Bidang_4/Emily.webp'
import Quirinus from '../../../Image/Osis/Bidang_4/Quirinus.webp'

const OSIS_4 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 4"
        desc="Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK)"

        person1={<BidangSection img={Rachelle} alt='Rachelle' name='Rachelle Larissa Rahardja' desc='Hi everyone! Kenalin aku Rachelle selaku koordinator OSIS bidang 4 di tahun 2025 ini. I can be your hiking buddy, calisthenics salesman, hired singer, reliable MC, debate spar-tner, event organizer, content creator, travel & culinary partner, etc. (depends on requests 🤭). Not sure if it sounds severely un-credible or incredible 😬. But honestly, I’m just a driven visioner who’s eager to learn & to pioneer greatness little by little. If it still seems meretricious to you, check out my instagram (@rachelle.lrs). If interested, I’d have personalized open-trips & adventures tailored just for you (⛰️🥾), hmu! If you’re still here, hope you have a great day and do check out my friend Michelle from bidang 10. '/>}
        person2={<BidangSection img={Jesslyn} alt='Jesslyn' name='Jesslyn Clarissa' desc='Haii semuanyaa! 👋 Perkenalkan nama aku Jesslyn, salam kenal yaa! 🤗 Fun fact, aku suka banget sama penguin 🐧. Menurutku penguin itu cute and unik, bisa dibilang mereka udah jadi bagian dari hidupku hihihi! Di waktu luang, aku suka nonton film khususnya genre thriller. Rasanya seru banget bisa nebak-nebak jalan cerita and plot twist yang bakal muncul. Kalau kalian punya rekomendasi film thriller yang bagus atau mau ngobrol sama aku tentang smukii bolee banget dm and follow @jesslyn_c_t di IG ya! 😊 God Bless y’all'/>}
        person3={<BidangSection img={Emily} alt='Emily' name='Emily Chairmanly Afla' desc='Haii semuanya!👋 Kenalin nama aku Emily, kalian bisa panggil aku emi/mimi juga bolehh. Biasanya, aku suka banget dengerin lagu, apalagi kalauu lagii bosen nungguin sesuatuu. Oh yaa, feel free yaa kalau mau ngobrol" langsung ajaa DM aku di IG @emilychaa_ Good luck in smukie y’all!'/>}
        person4={<BidangSection img={Quirinus} alt='Quirinus' name='Quirinus Lionnel Hanson Kangga' desc='Haloo semua!! Nama aku Quirinus Lionnel, biasanya dipanggil Lionnel. Tahun ini aku menjabat menjadi anggota di bidang 4. Hobi aku, biasanya aku suka main futsal atau main games. Kalau kalian mau tanya-tanya yang lain, feel free buat cek dan tanya IG aku ya di @kzhans_ Salken semua!!'/>}

        Description={true}
        DescBid="Bidang 4 atau Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK) adalah bidang yang bertanggungjawab dan berkolaborasi dengan sekolah dalam mendukung perkembangan prestasi siswa dan pemanfaatan IPTEK dalam proses belajar. Bidang 4 menyediakan wadah bagi siswa-siswi untuk mencari ilmu di luar jam belajar mengajar di kelas seperti program TTS yang mewadahi siswa untuk belajar dan mengajar teman-teman tentang bahan pelajaran, yang tentunya tidak dikenai biaya tambahan. Selain itu ada juga DollarxCent yang menjadi media bagi siswa/i untuk memperluas wawasan pengetahuan umum dan kemampuan berpikir out of the box. Tidak hanya terbatas pada pengembangan hard skills loh, tapi juga pengembangan soft skills seperti contohnya di TEDxYouth@SmakOne dimana siswa/i berkesempatan untuk menyampaikan ide-ide baru yang akan diperdengarkan kepada masyarakat luas. [ program Uni-assist sama ask away]"
        Program={true}
        ProgramList={
          [
            //UPDATED 2025
            'TEDxYouth@SmakOne - TEDxYouth@SmakOne merupakan event kolaborasi SMAK 1 dengan TED, media organisasi Internasional',
            'Dollar x Cent - Merupakan story yang berisi dua pertanyaan yang di mana satu berjudul dollar yang berupa pengetahuan umum dan satunya lagi cent yang berupa teka teki dan riddles yang menuntut kita untuk berpikir outside of the box.',
            'OneFair - Pameran edukasi yang menampilkan karya siswa-siswi SMAK 1 terkait sains dan bahasa yang akan dipresentasikan langsung oleh siswa/i kepada masyarakat luas',
            'Uni Ass1st Vlog - Vlog yang menceritakan mengenai kehidupan mahasiswa alumni SMAK 1 di Universitas, vlog tersebut akan ditampilkan pada saat tertentu di sekolah dan akan di unggah ke YouTube',
            'EduSer1es - Story yang berisi 3 rangkaian konten, yaitu Uni-Ass1st, encycloped1a, dan FSL (Facts, Science, Life), yang memiliki  karakteristik nya masing- masing serta berorientasi kepada pentingnya pendidikan. ',
          ]
        }
        dir="/OSIS/bidang5"
      />
    </div>
  )
}

export default OSIS_4
