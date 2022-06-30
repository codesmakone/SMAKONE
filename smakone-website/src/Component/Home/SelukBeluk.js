import React from 'react'
import { Link } from 'react-router-dom'

const SelukBeluk = (props) =>{
    return(
        <div className="container flex flex-col lg:flex-row mt-28 align-center my-20">
            <img src={ props.img } className="object-cover w-full lg:w-[40%] h-80 rounded-2xl ml-0 lg:ml-10" alt={ props.title } />
            <div className="leading-normal ml-0 sm:ml-6 md:ml-8 lg:ml-20 mt-6 sm:mt-8 md:mt-10 mr-4 md:mr-8 lg:mr-10 font-bold">
                <div className="text-2xl sm:text-3xl xl:text-4xl">{ props.title }</div>
                <div className="text-xl mt-2">{ props.desc }</div>
                <div className="text-xl mt-12">
                <Link to={props.dir} className="link-underline link-underline-white">
                    Kenali Lebih Lanjut →
                </Link>
                </div>
            </div>
        </div>
    )
}

export default SelukBeluk