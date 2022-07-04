import React from 'react'

import Jurusan from '../../../Component/Ass1st/Jurusan'

import harvard from '../../../Image/Ass1st/Univ/harvard.webp'
import ucl from '../../../Image/Ass1st/Univ/Oxford.webp'
import uoft from '../../../Image/Ass1st/Univ/UofT.webp'
import hku from '../../../Image/Ass1st/Univ/HKU.webp'
import eduhk from '../../../Image/Ass1st/Univ/EducationUHongKong.webp'
import ntu from '../../../Image/Ass1st/Univ/NTU.webp'
import uny from '../../../Image/Ass1st/Univ/UNYogya.webp'
import upi from '../../../Image/Ass1st/Univ/UnivPendidikanIndo.webp'
import malang from '../../../Image/Ass1st/Univ/UNMalang.webp'
import guru from '../../../Image/Ass1st/guru.webp'

const Keguruan= () => {

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Keguruan dan Pendidikan"
                img={guru}
                alt="Keguruan dan Pendidikan"
                desc="Keguruan dan Pendidikan merupakan bidang ilmu yang menyiapkan lulusannya untuk menjadi seorang Guru. kamu akan dibekali 
                dengan berbagai keterampilan yang dapat menunjang pelaksanaan tugas profesi mulia tersebut. Selain mempelajari suatu bidang 
                studi, kamu juga fokus mempelajari bagaimana proses transfer ilmu yang efektif dari guru kepada murid, bagaimana cara yang 
                tepat untuk mengajar, bagaimana mengelola kelas, bagaimana mengembangkan program pembelajaran di kelas, dan sebagainya. "
                world1img={harvard}
                world2img={ucl}
                world3img={uoft}
                world1name="Harvard University (USA)"
                world2name="University College London (England)"
                world3name="University of Toronto (Canada)"
                asia1img={hku}
                asia2img={ntu}
                asia3img={eduhk}
                asia1name="The University of Hong Kong (Hong Kong)"
                asia2name="Nanyang Technological University (Singapore)"
                asia3name="The Education University of Hong Kong (Hong Kong)"
                indo1img={uny}
                indo2img={upi}
                indo3img={malang}
                indo1name="Universitas Negeri Yogyakarta"
                indo2name="Universitas Pendidikan Indonesia"
                indo3name="Universitas Negeri Malang"
                dir="/OSIS/ASS1ST/Sosiologi"
            />
        </div>
    )
}

export default Keguruan