import React from 'react'

const Jurusan = (props) => {
    return (
        <div className="container mx-auto mb-6">
            <div className="px-20 pt-10 justify-center text-center">
                <h2 className='text-xl font-semibold'>{ props.cat }</h2>
                <h1 className="text-6xl font-black">{ props.title }</h1>
                <h4 className="text-xl font-semibold">{ props.subtitle }</h4>
            </div>
            <img src={ props.img } className="object-cover h-[32rem] w-auto mx-auto rounded-3xl mt-6" alt={props.alt}/>
        </div>
    )
}

export default Jurusan