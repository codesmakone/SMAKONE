import React from 'react'

import Jurusan from '../../../Component/Ass1st/Jurusan'

import harvard from '../../../Image/Ass1st/Univ/harvard.webp'
import oxford from '../../../Image/Ass1st/Univ/Oxford.webp'
import monash from '../../../Image/Ass1st/Univ/monash.webp'
import nus from '../../../Image/Ass1st/Univ/NUS.webp'
import snu from '../../../Image/Ass1st/Univ/Seoul.webp'
import tokyo from '../../../Image/Ass1st/Univ/tokyoU.webp'
import ui from '../../../Image/Ass1st/Univ/UI.webp'
import ugm from '../../../Image/Ass1st/Univ/UGM.webp'
import itb from '../../../Image/Ass1st/Univ/ITB.webp'
import farmasi from '../../../Image/Ass1st/pharmacy.webp'

const Farmasi= () => {
    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Farmasi"
                img={farmasi}
                alt="Farmasi"
                desc="Jurusan yang satu ini bisa jadi pilihan yang cocok bagi kamu jika ingin berkecimpung di dunia medis selain menjadi dokter 
                atau perawat. Farmasi merupakan kombinasi antara ilmu kesehatan dengan ilmu kimia dan tentunya sangat diperlukan di dunia 
                medis. Selama kuliah di jurusan Farmasi, kamu akan banyak berkutat dengan senyawa kimia untuk dikembangkan jadi bahan obat. 
                Bukan nggak mungkin kalau suatu saat nanti Kamu bisa saja menjadi salah satu penemu obat penyembuh dari berbagai penyakit. 
                Selain itu, kamu akan mempelajari bagaimana menggunakan obat-obatan secara efektif dalam ilmu kesehatan hingga pengobatan
                 higienis."
                world1img={harvard}
                world2img={oxford}
                world3img={monash}
                world1name="Harvard University (USA)"
                world2name="University of Oxford (England)"
                world3name="Monash University (Australia)"
                asia1img={nus}
                asia2img={snu}
                asia3img={tokyo}
                asia1name="National University of Singapore (Singapore)"
                asia2name="Seoul National University"
                asia3name="The University of Tokyo (Japan)"
                indo1img={ui}
                indo2img={ugm}
                indo3img={itb}
                indo1name="Universitas Indonesia"
                indo2name="Universitas Gajah Mada"
                indo3name="Institut Teknologi Bandung"
                dir="/OSIS/ASS1ST/Keguruan"
            />
        </div>
    )
}

export default Farmasi