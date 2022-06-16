import React from 'react'
import { Link,useParams } from 'react-router-dom'

const AlasanCard = (props) => {
  

  return (
    <div className='m-3 h-auto w-72 p-4 text-left'>
      <img src={ props.img } className="object-cover h-80 w-72 rounded-2xl" alt={props.alt} />
            <div className="p-2">
                <p className="font-bold mb-6">{ props.desc }</p>
                <div className="font-bold text-xl my-3 text-white ">
                  <Link to={props.dir} className="max-w-sm leading-tight">
                    <span className='link-underline link-underline-white '>Kenali Lebih Lanjut →</span>
                  </Link>
                </div>
            </div>
    </div>
  )
}

export default AlasanCard