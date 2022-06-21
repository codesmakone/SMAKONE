import React from 'react'
import { NavLink } from 'react-router-dom'

const Emagz = (props) =>{
    return(
        <div className='container mx-auto'>
            <div className='justify-center text-white text-center font-bold px-40'>
                <div className='text-white mb-5 content-center text-lg'>
                    E-Magazine
                </div>
                <div className='text-white text-5xl leading-normal'>
                    <div>E-Magazine Bulan { props.month } Telah Hadir!!!</div>
                </div>
                <div className='px-60 py-12'>
                    <img src={ props.img } alt={ props.alt } className='h-auto w-full justify-center'/>
                </div>
                <button className="py-5 px-16 bg-white rounded-full">
                    <NavLink to='/Emagz' className="link-underline link-underline-black px-3 py-2 text-black text-xl font-black" target="blank">
                    Baca Disini
                    </NavLink>
                </button>
            </div>
        </div>
    )
}

export default Emagz