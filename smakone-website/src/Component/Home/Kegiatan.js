import React from 'react'
import { Link } from 'react-router-dom'

const Kegiatan = (props) =>{
    return(
        <div className="container mx-auto flex flex-col lg:flex-row mt-16 lg:mt-28">
            <img src={ props.img } className="object-cover w-full lg:w-6/12 h-80 rounded-2xl" alt={ props.title } />
            <div className="leading-normal ml-0 sm:ml-6 md:ml-8 lg:ml-20 mr-6 md:mr-8 lg:mr-10 mt-4 sm:mt-8 md:mt-10 mx-auto">
                <div className="text-2xl sm:text-4xl font-bold">{ props.title }</div>
                <div className="text-xl md:text-2xl font-medium">{ props.desc }</div>
                <div className="text-lg lg:text-xl mt-4 lg:mt-8">
                <Link to={props.dir} className="link-underline link-underline-black font-semibold" >
                    Kenali Lebih Lanjut →
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Kegiatan