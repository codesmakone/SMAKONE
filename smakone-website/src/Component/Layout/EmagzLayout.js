import React from 'react'
import {magazineList} from '../Data/magazineList'
import Footer from '../../Component/Footer/Footer'

const EmagzLayout = () => {    
    return(
        <div>
            <div className="container w-full h-full mx-auto justify-center pb-12 mb-36 mt-28">
                <div className='px-5 sm:px-10 md:px-20 pt-10 justify-center text-center'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black'>E-Magazine</h1>
                    <h4 className='text-sm sm:text-base md:text-lg font-medium'>
                        <div className=' text-center lg:px-28 mt-10'>
                        E-Magazine, seperti namanya, adalah program OSIS SMAK 1 PENABUR Jakarta yang berkolaborasi dengan ONE Journal untuk menerbitkan majalah digital tiap bulannya. Nama dari e-magazine kami adalah "1NSPIRATION" yang memiliki arti "ONE Inspiration, ONE Aspiration for ONE Universe" dimana konten 1NSPIRATION adalah hasil dari kumpulan karya dan aspirasi Smukiers. 1NSPIRATION juga merupakan wadah informatif yang menyediakan informasi-informasi yang akan menambah pengetahuan umum dan tentunya akan menginspirasi, menambah wawasan, dan meningkatkan tingkat literasi dalam membaca.
                        </div>
                    </h4>
                </div>
            </div>
            


            <div className='bg-dark-blue w-full h-auto mt-[-8rem] text-white px-6 sm:px-8 md:px-12 py-24'>
                <div className="container mx-auto">
                    <div >
                        <div className='flex justify-center lg:items-center lg:w-auto w-full lg:pt-9 pb-20'>
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-black" >
                                Koleksi E-Magazine
                            </div>
                        </div>
                        <div className='container mx-auto'>
                            <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-16">
                                { magazineList.map((magazine, i) => 
                                    <div key={i}>
                                        <a href={ magazine.link } target="blank"><img src={ magazine.img } alt={ magazine.title } className='h-auto w-full justify-center'/></a>
                                        <h4 className="py-4 font-medium text-center">{ magazine.title }</h4>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default EmagzLayout