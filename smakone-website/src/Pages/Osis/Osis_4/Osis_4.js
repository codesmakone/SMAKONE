import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Rachelle from '../../../Image/Osis/Bidang_4/Rachelle.webp'
import Callista from '../../../Image/Osis/Bidang_4/Callista.webp'
import Darlene from '../../../Image/Osis/Bidang_4/Darlene.webp'

const OSIS_4 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 4"
        desc="Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK)"
        person1={<BidangSection img={Callista} alt='Callista' name='Callista Princessa Tjhia' desc='Hi all👋Kenalin aku Callista☺️ Fun fact: I feel the happiest when I bake!! Rasanya kek semua beban keangkat gitu kalo baking hihihi. Anyways, kalo mau tanya-tanya atau simply say hi, don’t hesitate to contact me on IG @princessa_callista ' />}
        person2={<BidangSection img={Darlene} alt='Darlene' name='Darlene Felicia Sutyo' desc='haii semuanyaa! Salam kenal nama aku Darlene. Di waktu luang, biasanya aku suka nonton kdrama atau melukis hal” yang aku sukai sambil denger lagu hehe. Selain OSIS, aku juga join organisasi lain nya, seperti Monograph,Seren1ty, SOC, STN, dll. Fun fact tentang aku, aku suka banget sama matcha, dan aku ga suka duren :) kalau kalian mau ngobrol sama aku tentang smukie, atau hal- hal yang lain bolee banget dm and follow @drlnee_  di insta yaa ! God bless you all!💓' />}
        person3={<BidangSection img={Rachelle} alt='Rachelle' name='Rachelle Larissa Rahardja' desc='Hey y’all! Perkenalkan nama aku Rachelle, panggil Rach atau Chelle boleh, salken ya. In a daily basis aku suka banget nyanyi, hiking, art stuffs, literature, dan terutama kuliner!!! Selain itu, kadang aku masak, bikin short travel/ nature clips, nonton konser, pelayanan gereja and rnb music is my fav. Oiya aku juga pernah karate jadi jangan macem” yaa (hahaha jk). Tahun ini aku ikut dalam club EDS, Cressendo, dan SOG. Yang suka debat/ ngeband daftar ya, aku tunggu. I’m so grateful to be in smukie with all the oppurtunities dan aku harap kalian bakal enjoy jugaa, smangatt!! My canvas is my ig acc, so kalo penasaran check n follow my insta @rachelle.lrs, nanti aku folback. Kalo mau tanya apa”, ajak ngobrol aja irl karena aku prefer ngobrol daripada ngechat. Toodles!' />}
        Description={true}
        DescBid="Bidang 4 atau Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK) adalah bidang yang bertanggungjawab dan berkolaborasi dengan sekolah dalam mendukung perkembangan prestasi siswa dan pemanfaatan IPTEK dalam proses belajar. Bidang 4 menyediakan wadah bagi siswa-siswi untuk mencari ilmu di luar jam belajar mengajar di kelas seperti program TTS yang mewadahi siswa untuk belajar dan mengajar teman-teman tentang bahan pelajaran, yang tentunya tidak dikenai biaya tambahan. Selain itu ada juga DollarxCent yang menjadi media bagi siswa/i untuk memperluas wawasan pengetahuan umum dan kemampuan berpikir out of the box. Tidak hanya terbatas pada pengembangan hard skills loh, tapi juga pengembangan soft skills seperti contohnya di TEDxYouth@SmakOne dimana siswa/i berkesempatan untuk menyampaikan ide-ide baru yang akan diperdengarkan kepada masyarakat luas. [ program Uni-assist sama ask away]"
        Program={true}
        ProgramList={
          [
            //UPDATED 2024
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