import React from 'react'
import {IoIosCheckmarkCircle} from "react-icons/io";

const Checklist = (props) => {
  return (
    <div className='container mx-auto'>
        <div className="flex flex-row py-2">
            <div className="self-center pr-1">
                <IoIosCheckmarkCircle size={35}/>
            </div>
            <div className='text-xl leading-normal font-medium'>
            { props.txt }
            </div>
        </div>
    </div>
  )
}

export default Checklist