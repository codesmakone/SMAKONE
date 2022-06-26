import React from 'react'
import {magazineList} from '../Data/magazineList'

const EmagzLayout = () => {    
    return(
        <div className="">
            <div className="container w-full h-full mx-auto justify-center pb-12 mb-36">
            <div className='px-20 pt-10 justify-center text-center'>
                <h1 className='text-6xl font-semibold'>E-Magazine</h1>
                <h4 className='text-xl font-medium'>
                    <div className=' text-center px-28 mt-10'>
                    E-Magazine, seperti namanya, adalah program OSIS SMAK 1 PENABUR Jakarta yang berkolaborasi dengan ONE Journal Untuk menerbitkan majalah digital tiap bulannya. Nama dari e-magazine kami adalah "1NSPIRATION" yang memiliki arti "ONE Inspiration, ONE Aspiration for ONE Universe" dimana konten 1NSPIRATION adalah hasil dari kumpulan karya dan aspirasi Smukiers. Tidak 1NSPIRATION juga merupakan wadah informatif yang menyediakan informasi-informasi yang akan menambah pengetahuan umum dan tentunya akan menginspirasi, menambah wawasan, dan meningkatkan tingkat literasi dalam membaca.
                    </div>
                </h4>
            </div>
            </div>
            


            <div className='bg-dark-blue w-full h-auto mt-[-8rem] text-white px-3 py-24'>
                <div className="container mx-auto">
                    <div >
                        <div className='flex justify-center lg:items-center lg:w-auto w-full pt-9 pb-20'>
                            <div className="text-4xl font-black" >
                                Koleksi E-Magazine
                            </div>
                        </div>
                        <div className='container mx-auto'>
                            <div className="grid lg:grid-cols-5 grid-cols-1 gap-16">
                                { magazineList.map((magazine, i) => 
                                    <div>
                                        <a href={ magazine.link } target="blank"><img src={ magazine.img } alt={ magazine.title } className='h-auto w-full justify-center'/></a>
                                        <h4 className="py-4 font-medium text-center">{ magazine.title }</h4>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmagzLayout