import React from 'react'

import ContentHeaderImage from '../../Component/Content/ContentHeaderImage'
import ContentText from '../../Component/Content/ContentText'

const Emagz = () => {
    return(
        <div className="">
            <div className="container w-full h-full mx-auto justify-center pb-5">
                <ContentHeaderImage
                    category = 'OSIS'
                    title = 'E-Magazine'
                />

                <ContentText
                    text = 'E-magazine, seperti namanya, adalah program OSIS SMAK 1 PENABUR Jakarta yang berkolaborasi dengan ONE Journal Untuk menerbitkan majalah digital tiap bulannya. Nama dari e-magazine kami adalah "1NSPIRATION" yang memiliki arti "ONE Inspiration, ONE Aspiration for ONE Universe" dimana konten 1NSPIRATION adalah hasil dari kumpulan karya dan aspirasi Smukiers. Tidak hanya itu, 1NSPIRATION juga merupakan wadah informatif yang menyediakan informasi-informasi yang akan menambah pengetahuan umum dan entunya akan menginspirasi, menambah wawasan, dan meningkatakn tingkat literasi dalam membaca.'
                />

                <ContentText
                    title = ""
                    text = ""
                />
            </div>
        </div>
    )
}

export default Emagz