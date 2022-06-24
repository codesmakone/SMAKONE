import React from 'react'
import { useNavigate } from 'react-router-dom';

import Dropdown from '../Dropdown'

const EmagzLayout = (props) => {
    const navigate = useNavigate()
    return(
        <div className="">
                { props.def && (
                    <div className="container w-full h-full mx-auto justify-center pb-12 mb-36">
                    <div className='px-20 pt-10 justify-center text-center'>
                        <h1 className='text-6xl font-semibold'>E-Magazine</h1>
                        <h4 className='text-xl font-medium'>
                            <div className=' text-center px-28 mt-10'>
                            E-Magazine, seperti namanya, adalah program OSIS SMAK 1 PENABUR Jakarta yang berkolaborasi dengan ONE Journal Untuk menerbitkan majalah digital tiap bulannya. Nama dari e-magazine kami adalah "1NSPIRATION" yang memiliki arti "ONE Inspiration, ONE Aspiration for ONE Universe" dimana konten 1NSPIRATION adalah hasil dari kumpulan karya dan aspirasi Smukiers. Tidak 1NSPIRATION juga merupakan wadah informatif yang menyediakan informasi-informasi yang akan menambah pengetahuan umum dan tentunya akan menginspirasi, menambah wawasan, dan meningkatkan tingkat literasi dalam membaca.
                            </div>
                            <div className=' text-center px-28 mt-12'>
                            Untuk mulai membaca, bisa klik seri majalah yang diinginkan pada dropdown dibawah layar. Selamat membaca!
                            </div>
                        </h4>
                    </div>
                    </div>
                )}
            <div className='bg-dark-blue w-full h-auto mt-[-8rem] text-white px-3 py-24'>
                <div className="container mx-auto">
                    <div >
                        <div className='flex justify-center lg:items-center lg:w-auto w-full py-9'>
                            <div className='text-2xl font-black'>
                                <Dropdown
                                title='Koleksi E-Magazine'
                                arrowLogo={true}
                                class="px-3 py-2 transition duration-200 border-b-2 hover:border-black" 
                                dir1='/OSIS/Emagz/1stIssue'
                                dir2='/OSIS/Emagz/2ndIssue'
                                dir3='/OSIS/Emagz/3rdIssue'
                                dir4='/OSIS/Emagz/4thIssue'
                                dir5='/OSIS/Emagz/5thIssue'
                                dir6='/OSIS/Emagz/6thIssue'
                                dir7='/OSIS/Emagz/7thIssue'
                                menu1="November's Youth"
                                menu2='Mindful Christmas'
                                menu3='Square One'
                                menu4='Festive February'
                                menu5='Floraison'
                                menu6='Aphrodite April'
                                menu7='Summer Maylodies'
                                />
                            </div>
                        </div>
                        <div className='container mx-auto'>
                            <div className="container mx-auto ">
                            { props.feat && (
                                <h2 className='justify-center text-center text-lg'>Keluaran terbaru</h2>
                            )}
                            { props.title && (
                                <h1 className="justify-center text-center p-2 font-medium text-5xl mb-5">
                                    { props.title }
                                </h1>
                            )}
                            { props.iframe && ( <div>{props.iframe}</div> ) }
                            
                            </div>
                        </div>
                        {props.button &&
                        <div className='flex justify-center mt-10'>
                        <button onClick={ () => navigate(-1) } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                            Kembali
                        </button>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmagzLayout