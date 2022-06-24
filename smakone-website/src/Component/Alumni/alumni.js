import React from 'react'
import { Link } from 'react-router-dom'

const Alumni = (props) =>{
    return(
            <div className="container mx-auto flex flex-row mt-8w">
                <img src={ props.img } className="object-cover h-80 rounded-2xl" alt={ props.title } />
                <div className="leading-normal ml-20 mr-10 mt-10">
                    <div className="text-4xl font-bold">{ props.title }</div>
                    <div className="text-2xl font-medium">{ props.desc }</div>
                    <div className="text-xl mt-12">
                    <Link to={props.dir} className="link-underline link-underline-black font-semibold" >
                        Kenali Lebih Lanjut →
                    </Link>
                    </div>
                </div>
            </div>
    )
}

export default Alumni