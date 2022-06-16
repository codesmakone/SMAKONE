import React from 'react'

const SelukBeluk = (props) =>{
    return(
        <div className="container flex flex-row mt-28">
            <img src={ props.img } className="object-cover w-7/12 h-80 rounded-2xl" alt={ props.title } />
            <div className="leading-normal ml-20 mt-8 font-bold">
                <div className="text-4xl pr-20">{ props.title }</div>
                <div className="text-xl mt-2">{ props.desc }</div>
                <div className="text-xl mt-12"><a href="">Kenali Lebih Lanjut →</a></div>
            </div>
        </div>
    )
}

export default SelukBeluk