import React from 'react'

import Layout from '../../Component/Layout/SeniLayout'
import seni from '../../Image/Home/Kegiatan/Seni.webp'

const Seni = () => {
    return(
        <Layout
            cat = "Kegiatan"
            title = "Seni"
            quote = '"Ekspresikan dirimu lewat cara yang mempesona"'
            latterPar1 = "Didukung dengan fasilitas yang memadai, klub dan ekskul di bidang seni dan musik SMAK 1 PENABUR menyediakan wadah dan komunitas untuk mendukung perkembangan peserta didik yang memiliki minat untuk menjelajahi jiwa kreasinya. Dengan bimbingan yang tepat dan berkualitas, siswa-siswi dengan potensi besar dapat merasakan kesempatan untuk bertanding pada kompetisi musik dan seni bergengsi baik tingkat nasional maupun internasional." 
            img = {seni}
            alt = "Seni"
            latterPar2 = "Beberapa contoh pilihan ekskul dan klub yang menjadi favorit peserta didik, yaitu F1RST (tari), SEREN1TY (Tari), Smukiez Choir (Paduan Suara), CRESSENDO (Band), MASK (Drama), Smukiez Youth Chamber (Mini Orchestra), Manga, dan ShutterOne (Fotografi). Untuk bergabung dalam klub atau ekskul pilihan, beberapa akan mengadakan seleksi pada awal tahun ajaran baru. Masing-masing klub dan ekskul akan mengadakan proses seleksi yang dapat berupa audisi atau/dan wawancara yang bertujuan untuk mengetahui kemampuan dasar serta kepribadian peserta audisi."
            latterPar3= "Secara akumulatif, klub dan ekskul di SMAK 1 PENABUR Jakarta telah mengantarkan nama baik SMAK 1 dalam kancah daerah, nasional, maupun internasional. Selain itu, keberadaan klub dan ekskul juga dapat digunakan sebagai media bagi siswa-siswi untuk mengembangkan berbagai kemampuan non-akademis dan nilai-nilai organisasi."
            name1 = 'Animasi'
            name2 = 'Bahasa Korea'
            name3 = 'Beauty Class'
            name4 = 'Fotografi'
            name5 = 'Manga'
            name6 = 'Master of Ceremony'
            name7 = 'Mini Orchestra'
            name8 = 'Paduan Suara'
            name9 = 'Teater'
            name10 = 'Web Design'
            dir="/Kegiatan/scj"
        />
    )
}

export default Seni