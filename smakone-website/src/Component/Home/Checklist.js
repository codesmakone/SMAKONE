import React from 'react'
import {IoIosCheckmarkCircle} from "react-icons/io";

const Checklist = (props) => {
  return (
    <div className='container mx-auto'>
        <div className="flex flex-row py-2">
            <div className="self-center pr-3">
                <IoIosCheckmarkCircle size={35}/>
            </div>
            <div className='text-base md:text-lg lg:text-xl leading-normal font-medium place-content-center'>
            { props.txt }
            </div>
        </div>
    </div>
  )
}

export default Checklist