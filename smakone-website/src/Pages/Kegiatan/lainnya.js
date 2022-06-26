import React from 'react'
import { Link } from 'react-router-dom'

const Lainnya = () => {
    return(
        <div className="">
            <div className="container w-full h-full mx-auto justify-center pb-5">
            <div className='container justify-center'>
                <div className='pt-10 justify-center text-center'>
                    <h2 className='text-xl font-semibold'>Kategori</h2>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black'>Ekstrakulikuler Lainnya</h1>
                </div>
            </div>

                    <div className="pb-12">
                        <div className="text-2xl text-left grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-10 px-10">
                            <div className="border-b-4 border-gray-600 ">{">>"} Business Plan</div>
                            <div className="border-b-4 border-gray-600 ">{">>"} Jurnalistik</div>
                            <div className="border-b-4 border-gray-600 ">{">>"} Multimedia</div>
                            <div className="border-b-4 border-gray-600 ">{">>"} Palang Merah Remaja</div>
                            <div className="border-b-4 border-gray-600 ">{">>"} Paskibra</div>
                            <div className="border-b-4 border-gray-600 ">{">>"} Youth Christian Community</div>
                        </div>
                    </div>
            </div>
            <div className='flex justify-center mt-10'>
                    <Link to="/">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                        Home
                    </button>
                    </Link>
            </div>
        </div>
    )
}

export default Lainnya