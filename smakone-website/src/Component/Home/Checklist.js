import React from 'react'
import {IoIosCheckmarkCircle} from "react-icons/io";

const Checklist = (props) => {
  return (
    <div className='container mx-auto'>
        <div className="flex flex-row py-2">
            <div className="self-center px-5">
                <IoIosCheckmarkCircle size={40}/>
            </div>
            <div className='text-2xl leading-normal font-medium'>
            { props.txt }
            </div>
        </div>
    </div>
  )
}

export default Checklist