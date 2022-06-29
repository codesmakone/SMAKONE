import React from 'react'

const BidangSection = (props) => {
  return (
    <div className='mt-4 lg:mt-16'>
      <div className='lg:flex lg:gap-10 grid-rows-2'>
        <img src={props.img} alt={props.alt} className='object-cover md:h-60 md:w-60 lg:h-84 lg:w-84 xl:h-96 xl:w-80 rounded-3xl'/>
        <div>
          <div className='text-left mt-6 mb-12 lg:pr-10'>
            <h1 className='font-semibold text-xl md:text-2xl lg:text-3xl'>{props.name}</h1>
            <p className='font-medium text-justify text-base lg:text-lg leading-relaxed mt-6'>{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BidangSection