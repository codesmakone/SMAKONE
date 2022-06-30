import React from 'react'
import { Link } from 'react-router-dom'

const Alumni = (props) =>{
    return(
            <div className="container mx-auto flex flex-col sm:flex-row lg:flex-col w-full h-auto mt-6 lg:mt-16 xl:mt-28">
                <img src={ props.img } className="object-cover rounded-2xl w-full sm:w-auto sm:h-40 lg:h-60 xl:h-80 2xl:h-92" alt={ props.title } />
                <div className="leading-normal align-middle ml-6 md:ml-10 mt-4 md:mt-6 lg:mt-12 lg:mr-0 lg:ml-0">
                    <div className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">{ props.title }</div>
                    <div className="font-medium text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl tracking-tighter sm:tracking-normal">{ props.desc }</div>
                    <div className="text-sm sm:mt-2 lg:text-xl lg:mt-8 xl:text-2xl xl:mt-12 2xl:text-2xl">
                    <Link to={props.dir} className="link-underline link-underline-black font-semibold">
                        Kenali Lebih Lanjut →
                    </Link>
                    </div>
                </div>
            </div>
    )
}

export default Alumni