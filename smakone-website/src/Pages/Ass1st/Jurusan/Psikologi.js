import React from 'react'

import Jurusan from '../../../Component/Ass1st/Jurusan'

import harvard from '../../../Image/Ass1st/Univ/harvard.jpg'
import oxford from '../../../Image/Ass1st/Univ/Oxford.jpg'
import stanford from '../../../Image/Ass1st/Univ/Stanford.jpg'
import nus from '../../../Image/Ass1st/Univ/NUS.jpg'
import ntu from '../../../Image/Ass1st/Univ/NTU.jpg'
import hku from '../../../Image/Ass1st/Univ/HKU.jpg'
import ui from '../../../Image/Ass1st/Univ/UI-jpg.jpg'
import ugm from '../../../Image/Ass1st/Univ/UGM.jpg'
import unpad from '../../../Image/Ass1st/Univ/padjajaran.jpg'
import psyc from '../../../Image/Ass1st/psikol.jpg'

const Psikologi = () => {

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Psikologi"
                img={psyc}
                alt="Psikologi"
                desc='Untuk mempelajari tingkah laku manusia, kamu perlu mendalami ilmu Psikologi. Di jurusan ini kamu akan mempelajari “manusia"
                berdasarkan individu, karena nggak ada manusia yang benar-benar sama dalam ilmu psikologi. Manusia sebenarnya adalah makhluk 
                yang unik, bahkan ketika diberi stimulus yang sama pun responnya bisa berbeda tergantung pada pengetahuan, pengalaman, 
                perasaan, harapan, dan banyak faktor penentu lainnya.'
                world1img={harvard}
                world2img={oxford}
                world3img={stanford}
                world1name="Harvard University (USA)"
                world2name="University of Oxford (England)"
                world3name="Stanford University (USA)"
                asia1img={nus}
                asia2img={ntu}
                asia3img={hku}
                asia1name="National University of Singapore (Singapore)"
                asia2name="Nanyang Technological University (Singapore)"
                asia3name="The University of Hong Kong"
                indo1img={ui}
                indo2img={ugm}
                indo3img={unpad}
                indo1name="Universitas Indonesia"
                indo2name="Universitas Gajah Mada"
                indo3name="Universitas Padjajaran"
                dir="/OSIS/ASS1ST/Teknik_sipil"
            />
        </div>
    )
}

export default Psikologi