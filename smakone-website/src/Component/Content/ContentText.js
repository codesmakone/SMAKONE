import React from 'react'

const ContentText = (props) =>{
    return(
        <div className="container mx-auto mt-8">
            {props.title &&
            <div className="text-lg xl:text-xl font-bold ml-12 sm:ml-16 xl:ml-32 mt-12 text-left pr-12 sm:pr-16 xl:pr-36">{ props.title }</div>
            }
            <div className="text-lg ml-12 sm:ml-16 xl:ml-32 mt-2 text-left pr-12 sm:pr-16 xl:pr-36 font-medium text-gray-500">{ props.text }</div>
        </div>
    )
} 

export default ContentText