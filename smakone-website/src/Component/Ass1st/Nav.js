import React from 'react'

const OsisNav = (props) => {
  return (
    <div className='hover-zoom grid grid-cols-1 place-items-center'>
      <img src={props.img} alt={props.alt} className='h-16 w-16 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36'/>
        <div className="mt-4 text-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              <h2>{props.Title}</h2>
        </div>
    </div>
  )
}

export default OsisNav