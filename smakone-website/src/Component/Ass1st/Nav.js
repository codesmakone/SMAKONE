import React from 'react'

const OsisNav = (props) => {
  return (
    <div className='hover-zoom'>
      <img src={props.img} alt={props.alt} className='h-48 w-full'/>
        <div className="mt-4 text-bold text-2xl">
              <h2>{props.Title}</h2>
        </div>
    </div>
  )
}

export default OsisNav