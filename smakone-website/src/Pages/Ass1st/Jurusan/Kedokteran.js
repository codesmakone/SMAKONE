import React from 'react'
import Jurusan from '../../../Component/Ass1st/Jurusan'

import harvard from '../../../Image/Ass1st/Univ/harvard.jpg'
import oxford from '../../../Image/Ass1st/Univ/Oxford.jpg'
import stanford from '../../../Image/Ass1st/Univ/Stanford.jpg'
import nus from '../../../Image/Ass1st/Univ/NUS.jpg'
import snu from '../../../Image/Ass1st/Univ/Seoul-jpg.jpg'
import tokyo from '../../../Image/Ass1st/Univ/tokyoU-jpg.jpg'
import ui from '../../../Image/Ass1st/Univ/UI-jpg.jpg'
import ugm from '../../../Image/Ass1st/Univ/UGM.jpg'
import unpad from '../../../Image/Ass1st/Univ/padjajaran.jpg'
import med from '../../../Image/Ass1st/medschool.jpg'

const Kedokteran = () => {

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Kedokteran"
                img={med}
                alt="Kedokteran"
                desc="Saat berkuliah di Pendidikan Dokter kamu akan mempelajari cara mendiagnosis penyakit yang dialami pasien kemudian mengobati 
                dan mencegah timbulnya kembali penyakit itu. Selama kuliah kamu banyak belajar anatomi tubuh manusia, biologi sel dan 
                molekuler, genetika, biokimia, juga farmakologi. Kamu juga dibekali dengan latihan keterampilan dalam skill lab. Nah setelah
                 fase perkuliahan pre-klinik, kamu bakalan dapat pelatihan dasar di berbagai stase di Rumah Sakit.Setelah itu, baru deh 
                 diputuskan mau langsung ambil program spesialisasi atau bekerja pada institusi kesehatan."
                world1img={harvard}
                world2img={oxford}
                world3img={stanford}
                world1name="Harvard University (USA)"
                world2name="University of Oxford (England)"
                world3name="Stanford University (USA)"
                asia1img={nus}
                asia2img={snu}
                asia3img={tokyo}
                asia1name="National University of Singapore (Singapore)"
                asia2name="Seoul National University"
                asia3name="The University of Tokyo (Japan)"
                indo1img={ui}
                indo2img={ugm}
                indo3img={unpad}
                indo1name="Universitas Indonesia"
                indo2name="Universitas Gajah Mada"
                indo3name="Universitas Padjajaran"
            />
        </div>
    )
}

export default Kedokteran