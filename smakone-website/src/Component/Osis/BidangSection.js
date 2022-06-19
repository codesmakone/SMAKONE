import React from 'react'

const BidangSection = (props) => {
  return (
    <div className='mt-16'>
      <div className='flex gap-10'>
        <img src={props.img} alt={props.alt} className='object-cover h-96  w-80 rounded-3xl'/>
        <div>
          <div className='text-left'>
          <h1 className='font-semibold text-3xl'>{props.name}</h1>
          <p className='font-medium text-lg leading-relaxed mt-12'>{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BidangSection