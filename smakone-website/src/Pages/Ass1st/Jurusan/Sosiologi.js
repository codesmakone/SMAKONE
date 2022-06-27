import React from 'react'

import Jurusan from '../../../Component/Ass1st/Jurusan'

import harvard from '../../../Image/Ass1st/Univ/harvard.jpg'
import oxford from '../../../Image/Ass1st/Univ/Oxford.jpg'
import lse from '../../../Image/Ass1st/Univ/LSE.jpg'
import nus from '../../../Image/Ass1st/Univ/NUS.jpg'
import peking from '../../../Image/Ass1st/Univ/Peking.jpg'
import tokyo from '../../../Image/Ass1st/Univ/tokyoU-jpg.jpg'
import ui from '../../../Image/Ass1st/Univ/UI-jpg.jpg'
import ugm from '../../../Image/Ass1st/Univ/UGM.jpg'
import unpad from '../../../Image/Ass1st/Univ/padjajaran.jpg'
import socio from '../../../Image/Ass1st/socio.jpeg'

const Sosiologi= () => {

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Sosiologi"
                img={socio}
                alt="Sosiologi"
                desc='Komunikasi Sosiologi merupakan ilmu yang membahas perilaku sosial antar individu, antar kelompok, maupun antara individu 
                dan kelompok. Di jurusan ini kamu juga akan membicarakan "apa itu masyarakat." Kamu akan mempelajari struktur dan karakter 
                masyarakat, problematika masyarakat, fenomena sosial, dan gerakan masyarakat. Selain itu, mempelajari metode survei sosial 
                seperti kuisioner dan statistik, serta metode analisis dari hasil survei.dan media.'
                world1img={harvard}
                world2img={oxford}
                world3img={lse}
                world1name="Harvard University (USA)"
                world2name="University of Oxford (England)"
                world3name="The London School of Economics and Political Science (England)"
                asia1img={nus}
                asia2img={peking}
                asia3img={tokyo}
                asia1name="National University of Singapore (Singapore)"
                asia2name="Peking University"
                asia3name="The University of Tokyo (Japan)"
                indo1img={ui}
                indo2img={ugm}
                indo3img={unpad}
                indo1name="Universitas Indonesia"
                indo2name="Universitas Gajah Mada"
                indo3name="Universitas Padjajaran"
                dir="/OSIS/ASS1ST/Akutansi"
            />
        </div>
    )
}

export default Sosiologi