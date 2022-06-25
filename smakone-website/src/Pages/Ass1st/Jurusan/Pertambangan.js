import React from 'react'

import Jurusan from '../../../Component/Ass1st/Jurusan'

import colo from '../../../Image/Ass1st/Univ/Colorado-School-of-mines.jpg'
import curt from '../../../Image/Ass1st/Univ/Curtin.jpg'
import queens from '../../../Image/Ass1st/Univ/Queensland.jpg'
import fahd from '../../../Image/Ass1st/Univ/KingFahdU-of-Petrol-Mineral.jpg'
import cumt from '../../../Image/Ass1st/Univ/ChinaU-Mining-Tech.jpg'
import kyuu from '../../../Image/Ass1st/Univ/Kyushu.jpg'
import trisakti from '../../../Image/Ass1st/Univ/Trisakti.jpg'
import pertamina from '../../../Image/Ass1st/Univ/pertamina.jpg'
import itb from '../../../Image/Ass1st/Univ/ITB-jpg.jpg'
import tambang from '../../../Image/Ass1st/tambang.png'

const Pertambangan = () => {

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Teknik Pertambangan"
                img={tambang}
                alt="Teknik Pertambangan"
                desc="Teknik Pertambangan merupakan bidang ilmu yang mempelajari proses penambangan mineral berharga dan batubara. Fokus dari 
                jurusan Teknik Pertambangan adalah kegiatan eksplorasi, eksploitasi, dan pemrosesan. Jadi, kamu akan belajar banyak soal 
                sifat-sifat mineral yang akan ditambang, kegunaannya, cara menambangnya, sampai proses pengolahannya agar dapat 
                dimanfaatkan oleh manusia. Kamu juga harus memperhitungkan untung-rugi dari proses penambangan itu, lho."
                world1img={colo}
                world2img={curt}
                world3img={queens}
                world1name="Colorado School of Mines (USA)"
                world2name="Curtin Univeristy (Australia)"
                world3name="The University of Queensland (Australia)"
                asia1img={fahd}
                asia2img={cumt}
                asia3img={kyuu}
                asia1name="King Fahd University of Petroleum and Minerals (Saudi Arabia)"
                asia2name="China University of Mining and Technology (China)"
                asia3name="Kyushu University (Japan)"
                indo1img={itb}
                indo2img={trisakti}
                indo3img={pertamina}
                indo1name="Institut Teknologi Bandung"
                indo2name="Universitas Trisakti"
                indo3name="Universitas Pertamina"
            />
        </div>
    )
}

export default Pertambangan