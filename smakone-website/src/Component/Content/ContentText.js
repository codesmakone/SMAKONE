import React from 'react'

const ContentText = (props) =>{
    return(
        <div className="container mx-auto mt-8 text-justify">
            <div className='px-6 sm:px-16 xl:px-28'>
                {props.title &&
                <div className="text-lg xl:text-xl font-bold mt-12">{ props.title }</div>
                }
                { !props.list && 
                <div className="text-sm sm:text-base md:text-lg mt-2 font-medium text-gray-500">{ props.text }</div>
                }
            </div>
        </div>
    )
} 

export default ContentText