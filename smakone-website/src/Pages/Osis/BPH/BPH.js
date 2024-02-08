import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

//Import Image
import Valerie from '../../../Image/Osis/Bidang_BPH/Valerie.webp'
import Jessica from '../../../Image/Osis/Bidang_BPH/Jessica.webp'
import Kimberly from '../../../Image/Osis/Bidang_BPH/Kimberly.webp'
import Christabel from '../../../Image/Osis/Bidang_BPH/Christabel.webp'
import Benedict from '../../../Image/Osis/Bidang_BPH/Benedict.webp'

const BPH = () => {
  return (
    <div>
      <OsisTeam
        bidang="Badan Pengurus Harian"
        person1={<BidangSection img={Valerie} alt='Valerie' name='Valerie Althea Kurnia' desc='Haiii semuaa!! Salam kenal yaa, nama aku Valerie, biasa dipanggil Pale 👋🏻 Tahun ini aku dapat kepercayaan untuk menjabat sebagai ketua OSIS smukiee. Aku seneng banget bisa ketemu dan kerja bareng orang-orang baru. That’s why I‘m so glad to be a part of OSIS famm! Selain OSIS, aku juga sering join beberapa kepanitiaan loh, terutama untuk event besar di smukiee like SOC, STN, TedxYouth, Bazone, and many more. Pastinya semuanya seru-seruu bangett, so don’t be afraid to give it a shot 😋 Funfact aku orangnya kinestetik bangett, jadi kalo belajar harus sambil gerakin kaki atau tangan HAHAHAH. Walaupun introvert kalau baru kenal, tapi extrovert banget kalau udah dekett 🤫 so don’t hesitate to reach me out through DM @valerie_althea hihi. Good luck all di smukiee!!'/>}
        person2={<BidangSection img={Benedict} alt='Benedict' name='Benedict Erick Anthony' desc='Halo semuanyaa! Kenalin, aku Benedict Erick Anthony, biasanya dipanggil Erick, dan tahun ini aku menjabat sebagai wakil ketua OSIS. Singkat cerita tentang aku, aku suka banget dengerin lagu dan main game seperti mobile legends. Selain itu, aku juga open banget buat explore hal-hal yang baru dan buat temen-temen baru. Jadi, buat kalian yang mau ngajak mabar atau sekedar ngobrol-ngobrol aja, feel free to hit me up through my ig, @bndct.erick! Other than that, good luck and have fun in SMUKIE!!'/>}
        person3={<BidangSection img={Kimberly} alt='Kimberly' name='Kimberly Audreylian Louise' desc='Hello everyone! Nama aku Kimberly, salam kenal yaaa. 👋 Di OSIS tahun ini, aku berkesempatan menjabat sebagai sekretaris OSIS. In my spare time, aku suka banget maraton k-dramas and movies. Jadi kalo kalian ada recommend k-dramas/film happy ending, mau tanya-tanya seputar smukie, ngobrol, or anything else boleh dm aku di instagram @kimberly.al_ yaa. Good luck and enjoy life in smukie all! '/>}
        person4={<BidangSection img={Christabel} alt='Christabel' name='Christabel Diandra Sandjaya' desc='Haiii semuaa👋🏻 salam kenal nama aku Diandra tapi banyak yg manggil ak Didi. Tahun ini aku menjabat sebagai sekretaris. Hobi aku main badminton, baking, dengerin musik n nyanyi (but ga jago” amat) satu lagi guys aku juga suka nonton drama especially cdrama tp aku jg suka kdrama kokk,,, so if u have any recommend drama/music atau mau kenalan n ngobrol feel free buat dm aku di @diandra.chris yashh. Good luck n have fun in smukiee all!!!✨‼️'/>}
        person5={<BidangSection img={Jessica} alt='Jessica' name='Jessica Regina Aliudin' desc="hi semuaa! perkenalkan namaku jessica, biasa dipanggil jess <3 tahun ini, aku menjabat sebagai Bendahara OSIS ☆☆ so happy and grateful for this chance !! hobby aku tuhh ngedit video, main game, k-pop, debat andd.. nonton anime hehe. about editing, i'm FULLY team after effects and anti capcut bangett ☆☆ fun fact nickname aku tuh 'wibu nolep', wibu karena nonton anime and nolep karena masih kumon ♡ im always open to convos and chats @jessica.aliudin, have fun in smukie!! <3"/>}
        dirBPH= "/OSIS/bidang1"
      />
    </div>
  )
}

export default BPH