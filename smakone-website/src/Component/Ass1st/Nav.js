import React from 'react'

const Nav = (props) => {
  return (
    <div className='bg-white hover:bg-gray-200 p-2 md:p-3 rounded-xl flex flex-row gap-1 sm:gap-2 xl:gap-3'>
      <div className='xl:ml-2'>
      <img src={props.img} alt={props.Title} className="h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12"/>        
      </div>
      <div className='text-black font-bold text-sm sm:text-lg lg:text-xl my-auto'>
      {props.Title}
      </div>
    </div>
  )
}

export default Nav