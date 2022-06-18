import React from 'react'

const TentangKamiText = (props) =>{
    return(
        <div className="container mx-auto mt-12">
            <div className="text-xl font-bold ml-32 mt-12 text-left pr-36">{ props.title }</div>
            <div className="text-lg ml-32 mt-2 text-left pr-36 font-medium text-gray-500">{ props.text }</div>
        </div>
    )
} 

export default TentangKamiText