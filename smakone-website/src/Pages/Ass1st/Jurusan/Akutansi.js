import React from 'react'

import Jurusan from '../../../Component/Ass1st/Jurusan'

import harvard from '../../../Image/Ass1st/Univ/harvard.webp'
import mit from '../../../Image/Ass1st/Univ/MIT.webp'
import stanford from '../../../Image/Ass1st/Univ/Stanford.webp'
import nus from '../../../Image/Ass1st/Univ/NUS.webp'
import tsinghua from '../../../Image/Ass1st/Univ/tsinghua.webp'
import hkust from '../../../Image/Ass1st/Univ/HKUST.webp'
import ui from '../../../Image/Ass1st/Univ/UI.webp'
import ugm from '../../../Image/Ass1st/Univ/UGM.webp'
import stan from '../../../Image/Ass1st/Univ/STAN.webp'
import akuntansi from '../../../Image/Ass1st/accounting.webp'

const Akutansi = () => {

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Akutansi"
                img={akuntansi}
                alt="Akutansi"
                desc="Kamu pasti sudah nggak asing dengan jurusan Akuntansi. Bidang studi ini mempelajari materi terkait metode pencatatan dan 
                penyusunan laporan keuangan yang berguna membantu pemangku kepentingan dalam proses pengambilan keputusan. Akuntansi memang 
                dikenal sangat dekat dengan angka, namun seiring perkembangannya akuntansi juga sangat dipengaruhi oleh tingkah laku manusia."
                world1img={harvard}
                world2img={mit}
                world3img={stanford}
                world1name="Harvard University (USA)"
                world2name="Massachusetts Institute of Technology (USA)"
                world3name="Stanford University (USA)"
                asia1img={nus}
                asia2img={hkust}
                asia3img={tsinghua}
                asia1name="National University of Singapore (Singapore)"
                asia2name="Hong Kong Univeristy of Science and Technology"
                asia3name="Tsinghua University (China)"
                indo1img={ugm}
                indo2img={stan}
                indo3img={ui}
                indo1name="Universitas Gajah Mada"
                indo2name="Politeknik Keuangan Negara STAN"
                indo3name="Universitas Indonesia"
                dir="/OSIS/ASS1ST/Hukum"
            />
        </div>
    )
}

export default Akutansi