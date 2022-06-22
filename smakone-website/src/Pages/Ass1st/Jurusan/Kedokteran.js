import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Kedokteran"
                img={med}
                alt="Kedokteran"
            />
            <p className="justify-center text-justify p-2">
                Saat berkuliah di Pendidikan Dokter kamu akan mempelajari cara mendiagnosis penyakit yang dialami pasien kemudian mengobati 
                dan mencegah timbulnya kembali penyakit itu. Selama kuliah kamu banyak belajar anatomi tubuh manusia, biologi sel dan 
                molekuler, genetika, biokimia, juga farmakologi. Kamu juga dibekali dengan latihan keterampilan dalam skill lab. Nah setelah
                 fase perkuliahan pre-klinik, kamu bakalan dapat pelatihan dasar di berbagai stase di Rumah Sakit.Setelah itu, baru deh 
                 diputuskan mau langsung ambil program spesialisasi atau bekerja pada institusi kesehatan.
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={harvard} alt="Harvard University (USA)"/>
                    <p className="justify-center text-center p-2">Harvard University (USA)</p>
                </div>
                <div>
                    <img src={oxford} alt="University of Oxford (England)" />
                    <p className="justify-center text-center p-2">University of Oxford (England)</p>
                </div>
                <div>
                    <img src={stanford} alt="Stanford University (USA)" />
                    <p className="justify-center text-center p-2">Stanford University (USA)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={nus} alt="National University of Singapore (Singapore)"/>
                    <p className="justify-center text-center p-2">National University of Singapore (Singapore)</p>
                </div>
                <div>
                    <img src={snu} alt="Seoul National University" />
                    <p className="justify-center text-center p-2">Seoul National University (Korea)</p>
                </div>
                <div>
                    <img src={tokyo} alt="The University of Tokyo (Japan)" />
                    <p className="justify-center text-center p-2">The University of Tokyo (Japan)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={ui} alt="Universitas Indonesia"/>
                    <p className="justify-center text-center p-2">Universitas Indonesia</p>
                </div>
                <div>
                    <img src={ugm} alt="Universitas Gajah Mada" />
                    <p className="justify-center text-center p-2">Universitas Gajah Mada</p>
                </div>
                <div>
                    <img src={unpad} alt="Universitas Padjajaran" />
                    <p className="justify-center text-center p-2">Universitas Padjajaran</p>
                </div>
            </div>
            <div className='flex justify-end mt-10'>
            <button onClick={ () => navigate(-1) } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                Go back
            </button>
            </div>
        </div>
    )
}

export default Kedokteran