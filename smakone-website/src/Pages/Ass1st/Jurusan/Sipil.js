import React from 'react'
import { useNavigate } from 'react-router-dom'

import Jurusan from '../../../Component/Ass1st/Jurusan'

import mit from '../../../Image/Ass1st/Univ/MIT.jpg'
import delft from '../../../Image/Ass1st/Univ/Delft.jpg'
import ntu from '../../../Image/Ass1st/Univ/NTU.jpg'
import nus from '../../../Image/Ass1st/Univ/NUS.jpg'
import tsinghua from '../../../Image/Ass1st/Univ/tsinghua.jpg'
import hkust from '../../../Image/Ass1st/Univ/HKUST.jpg'
import ui from '../../../Image/Ass1st/Univ/UI-jpg.jpg'
import ugm from '../../../Image/Ass1st/Univ/UGM.jpg'
import itb from '../../../Image/Ass1st/Univ/ITB-jpg.jpg'
import sipil from '../../../Image/Ass1st/sipil.jpg'

const Sipil = () => {
    const navigate = useNavigate()

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Teknik Sipil"
                img={sipil}
                alt="Teknik Sipil"
            />
            <p className="justify-center text-justify p-2">
                Teknik Sipil merupakan bidang ilmu yang mempelajari perencanaan/perancangan, manufaktur, manajemen/pengelolaan, dan 
                konservasi dari berbagai fasilitas dan sistem untuk mendukung sebuah kota, pedesaan, dan perkotaan. Pilihan topik 
                penelitiannya juga sangat beragam lho, seperti jembatan dan bantaran sungai/tepi laut, desain jalan, teknologi untuk 
                melindungi manusia dari bencana seperti; banjir dan gempa bumi, konservasi lingkungan di suatu wilayah.
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={mit} alt="Massachusetts Institute of Technology (USA)"/>
                    <p className="justify-center text-center p-2">Massachusetts Institute of Technology (USA)</p>
                </div>
                <div>
                    <img src={nus} alt="National University of Singapore (Singapore)" />
                    <p className="justify-center text-center p-2">National University of Singapore (Singapore)</p>
                </div>
                <div>
                    <img src={delft} alt="Delft University of Technology (Netherlands)" />
                    <p className="justify-center text-center p-2">Delft University of Technology (Netherlands)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={ntu} alt="Nanyang Technological University (Singapore)"/>
                    <p className="justify-center text-center p-2">Nanyang Technological University (Singapore)</p>
                </div>
                <div>
                    <img src={tsinghua} alt="Tsinghua University (China)" />
                    <p className="justify-center text-center p-2">Tsinghua University (China)</p>
                </div>
                <div>
                    <img src={hkust} alt="The Hong Kong University of Science and Technology (Hong Kong)" />
                    <p className="justify-center text-center p-2">The Hong Kong University of Science and Technology (Hong Kong)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={itb} alt="Institut Teknologi Bandung"/>
                    <p className="justify-center text-center p-2">Institut Teknologi Bandung</p>
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

export default Sipil