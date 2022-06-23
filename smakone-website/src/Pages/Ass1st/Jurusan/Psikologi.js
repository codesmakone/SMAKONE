import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Psikologi"
                img={psyc}
                alt="Psikologi"
            />
            <p className="justify-center text-justify p-2">
                Untuk mempelajari tingkah laku manusia, kamu perlu mendalami ilmu Psikologi. Di jurusan ini kamu akan mempelajari “manusia"
                 berdasarkan individu, karena nggak ada manusia yang benar-benar sama dalam ilmu psikologi. Manusia sebenarnya adalah makhluk 
                 yang unik, bahkan ketika diberi stimulus yang sama pun responnya bisa berbeda tergantung pada pengetahuan, pengalaman, 
                 perasaan, harapan, dan banyak faktor penentu lainnya.

            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={harvard} alt="Harvard University (USA)"/>
                    <p className="justify-center text-center p-2">Harvard University (USA)</p>
                </div>
                <div>
                    <img src={stanford} alt="Stanford University (USA)" />
                    <p className="justify-center text-center p-2">Stanford University (USA)</p>
                </div>
                <div>
                    <img src={oxford} alt="The University of Oxford (England)" />
                    <p className="justify-center text-center p-2">The University of Oxford (England)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={nus} alt="National University of Singapore (Singapore)"/>
                    <p className="justify-center text-center p-2">National University of Singapore (Singapore)</p>
                </div>
                <div>
                    <img src={ntu} alt="Nanyang Technological University (Singapore)" />
                    <p className="justify-center text-center p-2">Nanyang Technological University (Singapore)</p>
                </div>
                <div>
                    <img src={hku} alt="The University of Hong Kong" />
                    <p className="justify-center text-center p-2">The University of Hong Kong</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={ugm} alt="Universitas Gajah Mada"/>
                    <p className="justify-center text-center p-2">Universitas Gajah Mada</p>
                </div>
                <div>
                    <img src={ui} alt="Universitas Indonesia" />
                    <p className="justify-center text-center p-2">Universitas Indonesia</p>
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

export default Psikologi