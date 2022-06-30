import React from 'react'

const OsisNav = (props) => {
  return (
    <div className='mt-12 hover-zoom '>
      <div className='flex gap-10'>
        <img src={props.img} alt={props.Title} className='h-24 w-24 sm:h-40 sm:w-40 lg:h-44 lg:w-44 xl:w-48 xl:h-48 '/>
          {props.Title === "Badan Pengurus Harian" &&
          <div className='text-left my-auto'>
              <h1 className='font-bold text-lg sm:text-xl lg:text-3xl xl:text-4xl '>{props.Title}</h1>
          </div>
          }

          {props.Title !== "Badan Pengurus Harian" &&
          <div className='my-auto text-left'>
            <h1 className='font-bold text-lg sm:text-xl lg:text-3xl xl:text-4xl'>{props.Title}</h1>
            <p className='hidden sm:block font-bold mt-4 text-lg xl:text-xl'>{props.desc}</p>
          </div>
          }
      </div>
    </div>
    // <div className='hover-zoom grid grid-cols-1 place-items-center'>
    //   <img src={props.img} alt={props.alt} className='h-16 w-16 md:h-20 md:w-20 lg:h-28 lg:w-28 xl:h-36 xl:w-36'/>
    //     <div className="mt-4 text-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
    //           <h2>{props.Title}</h2>
    //     </div>
    // </div>
  )
}

export default OsisNav