import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Teknik Pertambangan"
                img={tambang}
                alt="Teknik Pertambangan"
            />
            <p className="justify-center text-justify p-2">
                Teknik Pertambangan merupakan bidang ilmu yang mempelajari proses penambangan mineral berharga dan batubara. Fokus dari 
                jurusan Teknik Pertambangan adalah kegiatan eksplorasi, eksploitasi, dan pemrosesan. Jadi, kamu akan belajar banyak soal 
                sifat-sifat mineral yang akan ditambang, kegunaannya, cara menambangnya, sampai proses pengolahannya agar dapat 
                dimanfaatkan oleh manusia. Kamu juga harus memperhitungkan untung-rugi dari proses penambangan itu, lho.
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={colo} alt="Colorado School of Mines (USA)"/>
                    <p className="justify-center text-center p-2">Colorado School of Mines (USA)</p>
                </div>
                <div>
                    <img src={curt} alt="Curtin Univeristy (Australia)" />
                    <p className="justify-center text-center p-2">Curtin Univeristy (Australia)</p>
                </div>
                <div>
                    <img src={queens} alt="The University of Queensland (Australia)" />
                    <p className="justify-center text-center p-2">The University of Queensland (Australia)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={fahd} alt="King Fahd University of Petroleum and Minerals"/>
                    <p className="justify-center text-center p-2">King Fahd University of Petroleum and Minerals (Saudi Arabia)</p>
                </div>
                <div>
                    <img src={cumt} alt="China University of Mining and Technology (China)" />
                    <p className="justify-center text-center p-2">China University of Mining and Technology (China)</p>
                </div>
                <div>
                    <img src={kyuu} alt="Kyushu University (Japan)" />
                    <p className="justify-center text-center p-2">Kyushu University (Japan)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={itb} alt="Institut Teknologi Bandung"/>
                    <p className="justify-center text-center p-2">Institut Teknologi Bandung</p>
                </div>
                <div>
                    <img src={trisakti} alt="Universitas Trisakti" />
                    <p className="justify-center text-center p-2">Universitas Trisakti</p>
                </div>
                <div>
                    <img src={pertamina} alt="Universitas Pertamina" />
                    <p className="justify-center text-center p-2">Universitas Pertamina</p>
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

export default Pertambangan