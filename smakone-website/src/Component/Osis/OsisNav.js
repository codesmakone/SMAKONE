import React from 'react'

const OsisNav = (props) => {
  return (
    <div className='mt-12'>
      <div className='flex gap-10'>
        <img src={props.img} alt={props.alt} className='h-40'/>
        <div>
          <div className='text-left'>
          <h1 className='font-bold text-3xl'>{props.Title}</h1>
          <p className='font-bold text-xl mt-4'>{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OsisNav