import React from 'react'

const OsisLayout = (props) => {
  return (
    <div>
        <div className='container mx-auto'>
            <div className='px-5 sm:px-10 md:px-20 pt-10 justify-center text-center'>
                <h2 className='text-base sm:text-lg md:text-xl font-semibold'>{ props.category }</h2>
                <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black'>{ props.title }</h1>
                <h4 className='text-sm sm:text-base md:text-lg font-medium'>
                    <div className='text-center lg:px-28 mt-10'>
                    { props.desc }
                    </div>
                </h4>
            </div>
            <div className='text-center pt-12 px-6 md:px-14 lg:px-28  xl:px-24 2xl:px-28'>
                <img src={ props.img } className="object-cover h-auto w-full rounded-xl md:rounded-3xl mt-6" alt={props.alt}/>
                <div className='mt-12 px-6 sm:px-14 md:px-28' id='visi&misi'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold'>Visi Kami</h1>
                    <div className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-500'>
                        <p>{ props.visi1 }</p>
                        <p className='mt-8'>{ props.visi2 }</p>
                    </div>
                </div>
                <div className='mt-12 px-6 sm:px-14 md:px-28'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold'>Misi Kami</h1>
                    <div className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-500'>
                        <p>{ props.misi1 }</p>
                        <p className='mt-8'>{ props.misi2 }</p>
                        <p className='mt-8'>{ props.misi3 }</p>
                        <p className='mt-8'>{ props.misi4 }</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OsisLayout

