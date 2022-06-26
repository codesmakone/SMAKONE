import React from 'react'

import Jurusan from '../../../Component/Ass1st/Jurusan'

import mit from '../../../Image/Ass1st/Univ/MIT.jpg'
import delft from '../../../Image/Ass1st/Univ/Delft.jpg'
import ntu from '../../../Image/Ass1st/Univ/NTU.jpg'
import nus from '../../../Image/Ass1st/Univ/NUS.jpg'
import tsinghua from '../../../Image/Ass1st/Univ/tsinghua.jpg'
import hkust from '../../../Image/Ass1st/Univ/HKUST.jpg'
import ui from '../../../Image/Ass1st/Univ/UI-jpg.jpg'
import ugm from '../../../Image/Ass1st/Univ/UGM.jpg'
import itb from '../../../Image/Ass1st/Univ/ITB-jpg.jpg'
import sipil from '../../../Image/Ass1st/sipil.jpg'

const Sipil = () => {
    
    return (
        <div className="container mx-auto"> 
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