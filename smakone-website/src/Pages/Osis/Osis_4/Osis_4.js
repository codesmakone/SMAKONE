import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Grant from '../../../Image/Osis/Bidang_4/Grant.webp'
import BWong from '../../../Image/Osis/Bidang_4/BWong.webp'
import Callista from '../../../Image/Osis/Bidang_4/Callista.webp'

const OSIS_4 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 4"
        desc="Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK)"
        person1={<BidangSection img={Grant} alt="Grant" name="Grant Wendra Halim	" desc="Halo semuanyaa namaku Grant Wendra Halim, biasa dipanggil Grant. Selain OSIS, aku juga bergabung di organisasi lain seperti DA, TEDx, dan SOC. Aku suka makan xiao long bao dan jadi babu perkap smukie. Kalo mau tanya-tanya di ig @granthalim yes"/>}
        person2={<BidangSection img={BWong} alt="BWong" name="Brian Wong Wei Xiang	" desc="Hallo semua! Salam kenal, nama aku Brian Wong Wei Xiang, biasanya dipanggil Bwong. Saat ini aku sedang duduk di kelas 11 MIPA. Hobi aku bervariasi dari nonton, dengerin musik, sampai bermain game, fun fact tentang aku, aku pas pagi selalu masih setengah sadar. Kalo kalian ada pertanyaan mengenai apapun, boleh langsung dm aku di IG @bwooonggg"/>}
        person3={<BidangSection img={Callista} alt="Callista" name="  Callista Princessa Tjhia 	" desc="hello!! Salam kenal semuaa, aku Callista sebagai anggota bidang 4 :) I have lots of hobbies and jalan-jalan adalah salah satunya hehehe… Aku suka banget hunting tempat baru and foto-foto. Kalo kalian punya rekomendasi tempat atau mau explore bareng, yuks don’t hesitate to DM me ajaa @princessa_callista. I’d love to respond to your chats☺️ Have fun and enjoy di SMUKIE!! Semangatt"/>}
        Description={true}
        DescBid="Bidang 4 atau Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK) adalah bidang yang bertanggungjawab dan berkolaborasi dengan sekolah dalam mendukung perkembangan prestasi siswa dan pemanfaatan IPTEK dalam proses belajar. Bidang 4 menyediakan wadah bagi siswa-siswi untuk mencari ilmu di luar jam belajar mengajar di kelas seperti program TTS yang mewadahi siswa untuk belajar dan mengajar teman-teman tentang bahan pelajaran, yang tentunya tidak dikenai biaya tambahan. Selain itu ada juga DollarxCent yang menjadi media bagi siswa/i untuk memperluas wawasan pengetahuan umum dan kemampuan berpikir out of the box. Tidak hanya terbatas pada pengembangan hard skills loh, tapi juga pengembangan soft skills seperti contohnya di TEDxYouth@SmakOne dimana siswa/i berkesempatan untuk menyampaikan ide-ide baru yang akan diperdengarkan kepada masyarakat luas. [ program Uni-assist sama ask away]"
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