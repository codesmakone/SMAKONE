import React from 'react'
import { useNavigate } from 'react-router-dom'

import Jurusan from '../../../Component/Ass1st/Jurusan'

import harvard from '../../../Image/Ass1st/Univ/harvard.jpg'
import ucl from '../../../Image/Ass1st/Univ/Oxford.jpg'
import uoft from '../../../Image/Ass1st/Univ/UofT.jpg'
import hku from '../../../Image/Ass1st/Univ/HKU.jpg'
import eduhk from '../../../Image/Ass1st/Univ/EducationUHongKong.jpg'
import ntu from '../../../Image/Ass1st/Univ/NTU.jpg'
import uny from '../../../Image/Ass1st/Univ/UNYogya.jpg'
import upi from '../../../Image/Ass1st/Univ/UnivPendidikanIndo.jpg'
import malang from '../../../Image/Ass1st/Univ/UNMalang.jpg'
import guru from '../../../Image/Ass1st/guru.jpg'

const Keguruan= () => {
    const navigate = useNavigate()

    return (
        <div className="container mx-auto"> 
            <Jurusan
                cat="ASS1ST"
                title="Keguruan dan Pendidikan"
                img={guru}
                alt="Keguruan dan Pendidikan"
            />
            <p className="justify-center text-justify p-2">
                Keguruan dan Pendidikan merupakan bidang ilmu yang menyiapkan lulusannya untuk menjadi seorang Guru. kamu akan dibekali 
                dengan berbagai keterampilan yang dapat menunjang pelaksanaan tugas profesi mulia tersebut. Selain mempelajari suatu bidang 
                studi, kamu juga fokus mempelajari bagaimana proses transfer ilmu yang efektif dari guru kepada murid, bagaimana cara yang 
                tepat untuk mengajar, bagaimana mengelola kelas, bagaimana mengembangkan program pembelajaran di kelas, dan sebagainya.  
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={ucl} alt="University College London (England)"/>
                    <p className="justify-center text-center p-2">University College London (England)</p>
                </div>
                <div>
                    <img src={harvard} alt="Harvard University (USA)" />
                    <p className="justify-center text-center p-2">Harvard University (USA)</p>
                </div>
                <div>
                    <img src={uoft} alt="University of Toronto (Canada)" />
                    <p className="justify-center text-center p-2">University of Toronto (Canada)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={hku} alt="The University of Hong Kong (Hong Kong)"/>
                    <p className="justify-center text-center p-2">The University of Hong Kong (Hong Kong)</p>
                </div>
                <div>
                    <img src={ntu} alt="Nanyang Technological University (Singapore)" />
                    <p className="justify-center text-center p-2">Nanyang Technological University (Singapore)</p>
                </div>
                <div>
                    <img src={eduhk} alt="The Education University of Hong Kong (Hong Kong)" />
                    <p className="justify-center text-center p-2">The Education University of Hong Kong (Hong Kong)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={uny} alt="Universitas Negeri Yogyakarta"/>
                    <p className="justify-center text-center p-2">Universitas Negeri Yogyakarta</p>
                </div>
                <div>
                    <img src={upi} alt="Universitas Pendidikan Indonesia" />
                    <p className="justify-center text-center p-2">Universitas Pendidikan Indonesia</p>
                </div>
                <div>
                    <img src={malang} alt="Universitas Negeri Malang" />
                    <p className="justify-center text-center p-2">Universitas Negeri Malang</p>
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

export default Keguruan