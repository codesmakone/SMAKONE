import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Michael from '../../../Image/Osis/Bidang_4/Michael.jpg'
import Geoffrey from '../../../Image/Osis/Bidang_4/Geoffrey.jpg'
import Grant from '../../../Image/Osis/Bidang_4/Grant.jpg'

const OSIS_4 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 4"
        desc="Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK)"
        person1={<BidangSection img={Michael} alt="Michael Evan Djunaidi" name="Michael Evan Djunaidi" desc="Halo semuanyaaa, kenalin namaku Michael Evan Djunaidi, atau singkatnya bisa dipanggil ME. Selain bergabung di OSIS aku juga ikut beberapa organisasi lainnya, seperti SOC, dan juga TEDx. Hobi aku main musik dan fun fact about gua, gua harus tidur siang. Kalo mao ada tanya-tanya di @m.evan.d."/>}
        person2={<BidangSection img={Geoffrey} alt="Geoffrey Li" name="Geoffrey Li" desc="Hai semuanya,perkenalkan namaku Geoffrey Li atau biasa dipanggil Gio. Hobi aku itu olahraga dan bermain game. Fun fact tentang aku , kalau kak michael paling suka tidur siang aku paling anti tidur siang hehehehe. Kalau mau tanya-tanya lagi di @geoffrey.gio.li"/>}
        person3={<BidangSection img={Grant} alt="Grant Wendra Halim" name="Grant Wendra Halim" desc="Hai semua, perkenalkan nama aku Grant Wendra Halim, biasanya dipanggil Grant. Saat ini aku lagi duduk di kelas 10 MIPA. Hobi aku main basket, dan main game. Fun fact about aku, aku kalo lagi nulis pasti mulutnya ikutan gerak. Kalau ada yang mau kalian tanyakan, boleh contact aku di IG @granthalim"/>}
        Description={true}
        DescBid="Bidang 4 atau Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK) adalah bidang yang bertanggungjawab dan berkolaborasi dengan sekolah dalam mendukung perkembangan prestasi siswa dan pemanfaatan IPTEK dalam proses belajar. Bidang 4 menyediakan wadah bagi siswa-siswi untuk mencari ilmu di luar jam belajar mengajar di kelas seperti program TTS yang mewadahi siswa untuk belajar dan mengajar teman-teman tentang bahan pelajaran, yang tentunya tidak dikenai biaya tambahan. Selain itu ada juga DollarxCent yang menjadi media bagi siswa/i untuk memperluas wawasan pengetahuan umum dan kemampuan berpikir out of the box. Tidak hanya terbatas pada pengembangan hard skills loh, tapi juga pengembangan soft skills seperti contohnya di TEDxYouth@SmakOne dimana siswa/i berkesempatan untuk menyampaikan ide-ide baru yang akan diperdengarkan kepada masyarakat luas. [tambahin program Uni-assist sama ask away]"
        Program={true}
        ProgramList={
          [
            'TEDxYouth@SmakOne - TEDxYouth@SmakOne merupakan event kolaborasi SMAK 1 dengan TED, media organisasi Internasional',
            'Tutor Teman Sebaya - merupakan kegiatan yang mewadahi murid-murid yang memiliki talenta dalam suatu subjek untuk menyalurkan berkat yang mereka terima.',
            'Dollar x Cent - merupakan story yang berisi dua pertanyaan yang di mana satu berjudul dollar yang berupa pengetahuan umum dan satunya lagi cent yang berupa teka teki dan riddles yang menuntut kita untuk berpikir outside of the box.',
            'UNI-ASS1ST - Memberikan informasi mengenai universitas. Mulai dari sejarah, jurusan, biaya, hingga jalur beasiswa melalui website sehingga murid-murid bisa mendapatkan gambaran yang lebih jelas akan universitas yang akan mereka pilih.',
            'Ask Away - merupakan program talkshow yang mengundang beberapa alumni SMAK 1 untuk berbicara tentang fakultas - fakultas universitas serta kehidupan di universitas nantinya.'
          ]
        }
        dir="/OSIS/bidang5"
        />
    </div>
  )
}

export default OSIS_4