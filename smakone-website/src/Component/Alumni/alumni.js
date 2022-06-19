import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'

const Alumni = (props) =>{
    return(
        <ScrollToTop>
            <div className="container mx-auto flex flex-row mt-28">
                <img src={ props.img } className="object-cover w-6/12 h-80 rounded-2xl" alt={ props.title } />
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
        </ScrollToTop>
    )
}

export default Alumni