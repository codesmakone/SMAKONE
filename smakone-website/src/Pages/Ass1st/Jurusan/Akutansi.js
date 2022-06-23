import React from 'react'
import { useNavigate } from 'react-router-dom'

import Jurusan from '../../../Component/Ass1st/Jurusan'

import harvard from '../../../Image/Ass1st/Univ/harvard.jpg'
import mit from '../../../Image/Ass1st/Univ/MIT.jpg'
import stanford from '../../../Image/Ass1st/Univ/Stanford.jpg'
import nus from '../../../Image/Ass1st/Univ/NUS.jpg'
import tsinghua from '../../../Image/Ass1st/Univ/tsinghua.jpg'
import hkust from '../../../Image/Ass1st/Univ/HKUST.jpg'
import ui from '../../../Image/Ass1st/Univ/UI-jpg.jpg'
import ugm from '../../../Image/Ass1st/Univ/UGM.jpg'
import stan from '../../../Image/Ass1st/Univ/STAN.jpg'
import akuntansi from '../../../Image/Ass1st/accounting.jpg'

const Akutansi = () => {
    const navigate = useNavigate()

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Akutansi"
                img={akuntansi}
                alt="Akutansi"
            />
            <p className="justify-center text-justify p-2">
                Kamu pasti sudah nggak asing dengan jurusan Akuntansi. Bidang studi ini mempelajari materi terkait metode pencatatan dan 
                penyusunan laporan keuangan yang berguna membantu pemangku kepentingan dalam proses pengambilan keputusan. Akuntansi memang 
                dikenal sangat dekat dengan angka, namun seiring perkembangannya akuntansi juga sangat dipengaruhi oleh tingkah laku manusia.
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={harvard} alt="Harvard University (USA)"/>
                    <p className="justify-center text-center p-2">Harvard University (USA)</p>
                </div>
                <div>
                    <img src={mit} alt="Massachusetts Institute of Technology (USA)" />
                    <p className="justify-center text-center p-2">Massachusetts Institute of Technology (USA)</p>
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
                    <img src={hkust} alt="Hong Kong Univeristy of Science and Technology" />
                    <p className="justify-center text-center p-2">Hong Kong Univeristy of Science and Technology (Hong Kong)</p>
                </div>
                <div>
                    <img src={tsinghua} alt="Tsinghua University (China)" />
                    <p className="justify-center text-center p-2">Tsinghua University (China)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={ugm} alt="Universitas Gajah Mada"/>
                    <p className="justify-center text-center p-2">Universitas Gajah Mada</p>
                </div>
                <div>
                    <img src={stan} alt="Politeknik Keuangan Negara STAN" />
                    <p className="justify-center text-center p-2">Politeknik Keuangan Negara STAN</p>
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

export default Akutansi