import React from 'react'

import Jurusan from '../../../Component/Ass1st/Jurusan'

import mit from '../../../Image/Ass1st/Univ/MIT.webp'
import delft from '../../../Image/Ass1st/Univ/Delft.webp'
import ntu from '../../../Image/Ass1st/Univ/NTU.webp'
import nus from '../../../Image/Ass1st/Univ/NUS.webp'
import tsinghua from '../../../Image/Ass1st/Univ/tsinghua.webp'
import hkust from '../../../Image/Ass1st/Univ/HKUST.webp'
import ui from '../../../Image/Ass1st/Univ/UI.webp'
import ugm from '../../../Image/Ass1st/Univ/UGM.webp'
import itb from '../../../Image/Ass1st/Univ/ITB.webp'
import sipil from '../../../Image/Ass1st/sipil.webp'

const Sipil = () => {
    
    return (
        <div> 
            <Jurusan
                cat="ASS1ST"
                title="Teknik Sipil"
                img={sipil}
                alt="Teknik Sipil"
                desc="Teknik Sipil merupakan bidang ilmu yang mempelajari perencanaan/perancangan, manufaktur, manajemen/pengelolaan, dan 
                konservasi dari berbagai fasilitas dan sistem untuk mendukung sebuah kota, pedesaan, dan perkotaan. Pilihan topik 
                penelitiannya juga sangat beragam lho, seperti jembatan dan bantaran sungai/tepi laut, desain jalan, teknologi untuk 
                melindungi manusia dari bencana seperti; banjir dan gempa bumi, konservasi lingkungan di suatu wilayah."
                world1img={mit}
                world2img={nus}
                world3img={delft}
                world1name="Massachusetts Institute of Technology (USA)"
                world2name="National University of Singapore (Singapore)"
                world3name="Delft University of Technology (Netherlands)"
                asia1img={ntu}
                asia2img={tsinghua}
                asia3img={hkust}
                asia1name="Nanyang Technological University (Singapore)"
                asia2name="Tsinghua University (China)"
                asia3name="The Hong Kong University of Science and Technology (Hong Kong)"
                indo1img={ui}
                indo2img={ugm}
                indo3img={itb}
                indo1name="Universitas Indonesia"
                indo2name="Universitas Gajah Mada"
                indo3name="Institut Teknologi Bandung"
                dir="/OSIS/ASS1ST/Pertambangan"
            />
        </div>
    )
}

export default Sipil