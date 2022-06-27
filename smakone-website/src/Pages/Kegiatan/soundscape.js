import React from 'react'

import Layout from '../../Component/Layout/KegiatanLayout'
import soundscape from '../../Image/Home/Kegiatan/soundscape.jpg'

const Soundscape = () => {
    return(
        <Layout
            cat = "Kegiatan"
            title = "Soundscape"
            quote = '"Pertunjukan Spektakuler di Akhir Smakonecup"'
            latterPar1 = "Setelah sepuluh hari penyelenggaraan Smak One Cup (SOC), SMAK 1 akan menutup SOC dengan pertunjukan musik yang bernama Soundscape sebagai puncak acara."
            img = {soundscape}
            alt = "soundscape"
            latterPar2 = "Soundscape merupakan pertunjukan musik yang diselenggarakan oleh panitia SOC dan terbuka untuk umum. Selama berlangsungnya Soundscape, akan diumumkan pemenang-pemenang dari berbagai lomba yang diadakan saat SOC dan dilengkapi dengan games menarik bagi para penonton. Selain itu, terdapat penampilan oleh siswa dan artis-artis Indonesia, seperti Isyana Sarasvati (2019), Dipha Barus (2019), Kunto Aji (2019), Tulus (2015), Edho Zell (2015), dan masih banyak lagi. Bagi mereka yang bukan siswa SMAK 1, dapat menonton acara ini dengan membeli tiket secara online ataupun on the spot. Sedangkan, siswa SMAK 1 akan mendapatkan tiket tanpa dikenakan biaya. Panitia berharap agar acara ini menjadi media rekreasi dan hiburan di tengah kesibukan sekolah serta menjadi wadah untuk mengekspresikan bakat siswa-siswi terutama dalam bidang non-akademik."
        />
    )
}

export default Soundscape