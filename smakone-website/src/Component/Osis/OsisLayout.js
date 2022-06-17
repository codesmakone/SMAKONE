import React from 'react'

const OsisLayout = (props) => {
  return (
    <div>
        <div className='container mx-auto'>
            <div className='px-20 pt-10 justify-center text-center'>
                <h2 className='text-xl font-medium'>{ props.category }</h2>
                <h1 className='text-6xl font-semibold'>{ props.title }</h1>
                <h4 className='text-xl font-semibold'>
                    <div className=' text-center px-28'>
                    { props.desc }
                    </div>
                </h4>
            </div>
            <div className='pt-12 px-28 text-center'>
                <img src={ props.img } className="object-cover h-auto w-full rounded-3xl mt-6" alt={props.alt}/>
                <div className='mt-12 px-28' id='visi&misi'>
                    <h1 className='text-5xl font-semibold'>Visi Kami</h1>
                    <div className='text-xl font-semibold text-gray-500'>
                        <p>{ props.visi1 }</p>
                        <p className='mt-8'>{ props.visi2 }</p>
                    </div>
                </div>
                <div className='mt-12 px-28'>
                    <h1 className='text-5xl font-semibold'>Misi Kami</h1>
                    <div className='text-xl font-semibold text-gray-500'>
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

