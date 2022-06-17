import React from 'react'

// Component
import OsisLayout from '../../Component/Osis/OsisLayout'

// Image
import Osis_Image from '../../Image/OSIS_Pelantikan.jpeg'

const Osis = () => {
  return (
    <div className='mx-auto container'>
      <div id='osis'>
      <OsisLayout 
      category="OSIS" 
      title="Tentang Kami"
      desc="OSIS SMAK 1 merupakan satu-satunya organisasi resmi di SMAK 1 PENABUR Jakarta. Sejak awal dibentuk, kami selalu dituntut untuk membuat salah satu sekolah terbaik di Indonesia menjadi lebih baik lagi. Dengan satu tim, satu visi, dan satu misi, OSIS SMAK 1 mengarah ke arah yang benar dengan segudang prestasi termasuk menyelenggarakan ajang SMAK ONE CUP setiap tahunnya. Jalan yang akan dilewati bebas dari hambatan untuk OSIS SMAK 1 terus melebarkan sayapnya."
      img={Osis_Image}
      visi1 ="Menjadikan SMAK 1 PENABUR Jakarta sebagai wadah bagi siswa-siswi untuk mengembangkan potensi dan prestasi, baik secara akademik maupun non-akademik yang berlandaskan pada iman, ilmu, pelayanan dan menjadikan OSIS sebagai sarana untuk menampung inspirasi, aspirasi, serta kreasi siswa."
      visi2 ="Meningkatkan partisipasi siswa-siswi SMAK 1 PENABUR Jakarta dalam berbagai program yang edukatif, kreatif dan inovatif, serta dapat menjalar masyarakat luar, sehingga siswa-siswi SMAK 1 dapat menjadi berkat, baik bagi internal maupun eksternal."
      misi1 ="Memberikan kesempatan seluas-luasnya bagi seluruh peserta didik untuk melakukan pengembangan bakat dan minat melalui program-program yang diadakan OSIS."
      misi2 ="Membuka ruang terbuka bagi peserta didik SMAK 1 untuk bergerak dan berkontribusi secara konkret dalam pelestarian lingkungan hidup."
      misi3 ="Membangun kesadaran peserta didik SMAK 1 untuk berpartisipasi dalam kegiatan-kegiatan yang berorientasi kepada masyarakat, sehingga dapat memberikan dampak yang lebih luas."
      misi4 ="Mengoptimalisasikan kualitas SDM SMAK 1 melalui restorasi organisasi yang disruptif serta pengembangan program yang sudah ada dengan evaluasi secara berkala."
      />
      </div>
      <div id='bidang'>
      </div>
    </div>
  )
}

export default Osis