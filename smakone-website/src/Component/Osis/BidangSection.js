import React from 'react'

const BidangSection = (props) => {
  return (
    <div className='mt-4 lg:mt-20'>
      <div className='lg:flex lg:gap-10 grid-rows-2'>
          <img src={props.img} alt={props.alt} className='object-cover sm:h-[50%] sm:w-[50%] md:h-[55%] md:w-[55%] lg:h-[23rem] lg:w-[22rem] xl:h-96 xl:w-80 rounded-3xl sm:mx-auto lg:my-auto xl:m-0'/>
          <div>
            <div className='text-left mt-6 mb-12 lg:mt-0 lg:mb-0 xl:pr-10 xl:mt-6 xl:mb-12'>
              <h1 className='font-semibold text-xl md:text-2xl lg:text-3xl sm:text-center xl:text-left'>{props.name}</h1>
              <p className='font-medium text-justify text-base xl:text-lg leading-relaxed lg:leading-1 xl:leading-relaxed mt-6 lg:mt-3 '>{props.desc}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default BidangSection