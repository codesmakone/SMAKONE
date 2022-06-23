import React from 'react'
import { useNavigate } from 'react-router-dom'

import Jurusan from '../../../Component/Ass1st/Jurusan'

import harvard from '../../../Image/Ass1st/Univ/harvard.jpg'
import oxford from '../../../Image/Ass1st/Univ/Oxford.jpg'
import monash from '../../../Image/Ass1st/Univ/monash.jpg'
import nus from '../../../Image/Ass1st/Univ/NUS.jpg'
import snu from '../../../Image/Ass1st/Univ/Seoul-jpg.jpg'
import tokyo from '../../../Image/Ass1st/Univ/tokyoU-jpg.jpg'
import ui from '../../../Image/Ass1st/Univ/UI-jpg.jpg'
import ugm from '../../../Image/Ass1st/Univ/UGM.jpg'
import itb from '../../../Image/Ass1st/Univ/ITB-jpg.jpg'
import farmasi from '../../../Image/Ass1st/pharmacy.jpg'

const Farmasi= () => {
    const navigate = useNavigate()

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Farmasi"
                img={farmasi}
                alt="Farmasi"
            />
            <p className="justify-center text-justify p-2">
                Jurusan yang satu ini bisa jadi pilihan yang cocok bagi kamu jika ingin berkecimpung di dunia medis selain menjadi dokter 
                atau perawat. Farmasi merupakan kombinasi antara ilmu kesehatan dengan ilmu kimia dan tentunya sangat diperlukan di dunia 
                medis. Selama kuliah di jurusan Farmasi, kamu akan banyak berkutat dengan senyawa kimia untuk dikembangkan jadi bahan obat. 
                Bukan nggak mungkin kalau suatu saat nanti Kamu bisa saja menjadi salah satu penemu obat penyembuh dari berbagai penyakit. 
                Selain itu, kamu akan mempelajari bagaimana menggunakan obat-obatan secara efektif dalam ilmu kesehatan hingga pengobatan
                 higienis.
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={oxford} alt="University of Oxford (England)"/>
                    <p className="justify-center text-center p-2">University of Oxford (England)</p>
                </div>
                <div>
                    <img src={monash} alt="Monash University (Australia)" />
                    <p className="justify-center text-center p-2">Monash University (Australia)</p>
                </div>
                <div>
                    <img src={harvard} alt="Harvard University (USA)" />
                    <p className="justify-center text-center p-2">Harvard University (USA)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={nus} alt="National University of Singapore (Singapore)"/>
                    <p className="justify-center text-center p-2">National University of Singapore (Singapore)</p>
                </div>
                <div>
                    <img src={tokyo} alt="The University of Tokyo (Japan)" />
                    <p className="justify-center text-center p-2">The University of Tokyo (Japan)</p>
                </div>
                <div>
                    <img src={snu} alt="Seoul National University (Korea)" />
                    <p className="justify-center text-center p-2">Seoul National University (Korea)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={itb} alt="Institut Teknologi Bandung"/>
                    <p className="justify-center text-center w-full h-full p-2">Institut Teknologi Bandung</p>
                </div>
                <div>
                    <img src={ugm} alt="Universitas Gajah Mada" />
                    <p className="justify-center text-center p-2">Universitas Gajah Mada</p>
                </div>
                <div>
                    <img src={ui} alt="Universitas Indonesia" />
                    <p className="justify-center text-center p-2">Universitas Indonesia</p>
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

export default Farmasi