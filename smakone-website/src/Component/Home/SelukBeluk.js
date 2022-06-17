import React from 'react'
import { Link } from 'react-router-dom'

const SelukBeluk = (props) =>{
    return(
        <div className="container flex flex-row mt-28">
            <img src={ props.img } className="object-cover w-6/12 h-80 rounded-2xl" alt={ props.title } />
            <div className="leading-normal ml-20 mt-8 font-bold">
                <div className="text-4xl pr-20">{ props.title }</div>
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