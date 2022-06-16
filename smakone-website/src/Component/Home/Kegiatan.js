import React from 'react'
import { Link } from 'react-router-dom'

const Kegiatan = (props) =>{
    return(
        <div className="container mx-auto flex flex-row mt-28">
            <img src={ props.img } className="object-cover w-7/12 h-80 rounded-2xl" alt={ props.title } />
            <div className="leading-normal ml-20 mt-10 font-bold">
                <div className="text-4xl">{ props.title }</div>
                <div className="text-2xl">{ props.desc }</div>
                <div className="text-xl mt-12">
                    <Link to={props.dir} className="link-underline link-underline-black " >
                        Kenali Lebih Lanjut →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Kegiatan