import React from 'react'

const OsisNav = (props) => {
  return (
    <div className='hover-zoom grid grid-row-2 justify-bar'>
      <img src={props.img} alt={props.alt} className='h-40 w-40'/>
        <div className="mt-4 text-bold text-2xl">
              <h2>{props.Title}</h2>
        </div>
    </div>
  )
}

export default OsisNav