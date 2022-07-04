import React from 'react'

import Jurusan from '../../../Component/Ass1st/Jurusan'

import harvard from '../../../Image/Ass1st/Univ/harvard.webp'
import oxford from '../../../Image/Ass1st/Univ/Oxford.webp'
import cambridge from '../../../Image/Ass1st/Univ/cambridge.webp'
import nus from '../../../Image/Ass1st/Univ/NUS.webp'
import hku from '../../../Image/Ass1st/Univ/HKU.webp'
import tokyo from '../../../Image/Ass1st/Univ/tokyoU.webp'
import ui from '../../../Image/Ass1st/Univ/UI.webp'
import ugm from '../../../Image/Ass1st/Univ/UGM.webp'
import unair from '../../../Image/Ass1st/Univ/airlangga.webp'
import law from '../../../Image/Ass1st/law.webp'

const Hukum = () => {

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Hukum"
                img={law}
                alt="Hukum"
                desc="Jurusan Ilmu Hukum mempelajari berbagai sistem hukum yang berkaitan dengan kehidupan kemasyarakatan maupun kegiatan bisnis. 
                Di Ilmu Hukum, kamu juga belajar mengenai perundang-undangan termasuk di dalamnya hukum dasar (konstitusi, hukum perdata,
                hukum dagang, hukum tata negara, hukum pidana, hukum tata pidana) hingga hukum internasional dengan cakupan yang cukup luas."
                world1img={harvard}
                world2img={oxford}
                world3img={cambridge}
                world1name="Harvard University (USA)"
                world2name="University of Oxford (England)"
                world3name="University of Cambridge (England)"
                asia1img={nus}
                asia2img={hku}
                asia3img={tokyo}
                asia1name="National University of Singapore (Singapore)"
                asia2name="The University of Hong Kong (Hong Kong)"
                asia3name="The University of Tokyo (Japan)"
                indo1img={ui}
                indo2img={unair}
                indo3img={ugm}
                indo1name="Universitas Indonesia"
                indo2name="Universitas Airlangga"
                indo3name="Universitas Gajah Mada"
                dir="/OSIS/ASS1ST/Psikologi"
            />
        </div>
    )
}

export default Hukum