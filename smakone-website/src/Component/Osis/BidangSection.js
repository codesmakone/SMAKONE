import React from 'react'

const BidangSection = (props) => {
  return (
    <div className='mt-16'>
      <div className='flex gap-10'>
        <img src={props.img} alt={props.alt} className='object-cover h-96  w-80 rounded-3xl'/>
        <div>
          <div className='text-left my-10 pr-10'>
          <h1 className='font-semibold text-3xl'>{props.name}</h1>
          <p className='font-medium text-justify text-lg leading-relaxed mt-6'>{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BidangSection