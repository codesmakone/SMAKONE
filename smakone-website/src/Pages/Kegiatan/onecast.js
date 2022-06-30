import React from 'react'

import Layout from '../../Component/Layout/KegiatanLayout'
import OC from '../../Image/Home/Kegiatan/onecast.png'

const OneCast = () => {
    return(
        <Layout
            cat = "Kegiatan"
            title = "ONECAST"
            quote = '"Perluas wawasanmu!"'
            latterPar1 = {
                <p>
                    ONECAST merupakan podcast resmi dari OSIS SMAK 1 PENABUR Jakarta, yang dibawakan oleh peserta didik SMAK 1. Podcast ini dapat didengarkan secara gratis di <a href="https://open.spotify.com/show/19z2XBIe5VEyAx0UvhdTZe?si=HOok4DrNS-O1YKHXb4yceA&dl_branch=1" className="font-semibold text-blue-600">Spotify</a> oleh siapa saja. Topik-topik yang akan dibahas dalam setiap podcast akan beragam dan bergantung pada tema besar dari masing-masing bidang OSIS. Setiap bulan akan rutin mengunggah episode baru dan melihat suatu masalah dari perspektif yang berbeda.
                </p>
            }
            img = {OC}
            alt = "onecast"
            latterPar2 = "Jadwal pengunggahan setiap episode akan bergantung pada masing-masing bidang OSIS. Bagi siswa-siswi SMAK 1 yang ingin menjadi bagian dari ONECAST, dapat mendaftarkan diri di awal tahun ajaran dengan periode kerja 1 tahun."
            dir="/Kegiatan/DoFE"
        />
    )
}

export default OneCast