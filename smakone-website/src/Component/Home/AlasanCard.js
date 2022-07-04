import React from 'react'
import { Link } from 'react-router-dom'

const AlasanCard = (props) => {
  
  return (
    <div className='m-3 h-auto w-72 text-left flex flex-col'>
      <img src={ props.img } className="object-cover w-full rounded-2xl h-80" alt={props.alt} />
      <p className="font-bold text-xl mb-6 mt-3">{ props.desc }</p>
      <div className="font-bold text-md mt-auto text-white">
        <Link to={props.dir} className="max-w-sm leading-tight">
          <span className='link-underline-alasan link-underline-white'>Kenali Lebih Lanjut →</span>
        </Link>
        </div>
    </div>
  )
}

export default AlasanCard