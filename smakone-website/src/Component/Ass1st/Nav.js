import React from 'react'

const Nav = (props) => {
  return (
    // <div className='hover-zoom grid grid-cols-1 place-items-center'>
    //   <img src={props.img} alt={props.alt} className='h-16 w-16 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36'/>
    //     <div className="mt-4 text-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
    //           <h2>{props.Title}</h2>
    //     </div>
    // </div>
    <div className='bg-white hover:bg-gray-200 p-3 rounded-xl flex flex-row gap-1 sm:gap-2 xl:gap-3'>
      <div className='xl:ml-2'>
      <img src={props.img} alt={props.Title} className="h-6 w-6 sm:h-8 sm:w-8 xl:h-12 xl:w-12"/>        
      </div>
      <div className='text-black font-bold text-sm sm:text-lg xl:text-xl my-auto'>
      {props.Title}
      </div>
    </div>
  )
}

export default Nav