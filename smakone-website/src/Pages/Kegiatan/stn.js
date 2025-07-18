import React from 'react'

import Layout from '../../Component/Layout/KegiatanLayout'
import theater from '../../Image/Home/Kegiatan/theater.webp'

const STN = () => {
    return(
        <Layout
            cat = "Kegiatan"
            title = "SMUKIEZ Art Performance"
            quote = '"Saat Berbagai Seni Dipadukan dan Menghasilkan Sebuah Karya yang Memukau"'
            latterPar1 = "Smukiez Art Performance (SAP) adalah sebuah pertunjukan seni yang ditampilkan oleh murid-murid teater untuk siswa-siswi SMAK 1 PENABUR. SAP merupakan wadah bagi siswa-siswi SMAK 1 untuk dapat berkarya dan mengembangkan kreativitas dalam bidang kesenian. SAP diadakan satu tahun sekali."
            img = {theater}
            alt = "smukiez art performance"
            latterPar2 = "Puncak acara SAP adalah pertunjukan dari MASK, klub teater SMAK 1. Namun diluar itu, SAP juga dimeriahkan oleh berbagai pertunjukan lainnya, seperti Crescendo tim band SMAK 1, serta pertunjukan tarian dari Serenity dan First."
            dir="/Kegiatan/KR1ZA"
        />
    )
}

export default STN