import React from 'react'
import { Link } from 'react-router-dom'

const Alumni = (props) =>{
    return(
            <div className="container mx-auto flex flex-row w-full h-auto justify-center sm:mt-16 xl:mt-28">
                <img src={ props.img } className="object-cover rounded-2xl sm:h-40 md:h-44 lg:h-72 xl:h-80 2xl:h-96" alt={ props.title } />
                <div className="leading-normal align-middle sm:ml-10 sm:mt-4 md:mt-6 lg:mt-12 lg:mr-5 xl:ml-20 xl:mt-12 2xl:mr-20">
                    <div className="font-bold sm:text-lg lg:text-3xl xl:text-4xl">{ props.title }</div>
                    <div className="font-medium sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl">{ props.desc }</div>
                    <div className="sm:text-sm sm:mt-2 lg:text-xl lg:mt-8 xl:text-2xl xl:mt-12 2xl:text-2xl">
                    <Link to={props.dir} className="link-underline link-underline-black font-semibold" >
                        Kenali Lebih Lanjut →
                    </Link>
                    </div>
                </div>
            </div>
    )
}

export default Alumni