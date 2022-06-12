import React from 'react'



const AlasanCard = (props) => {
  return (
    <div className='m-3'>
      <img src={ props.img } className="w-full  rounded-lg" alt={props.alt} />
            <div className="p-2">
                <p className="font-bold text-left mb-6">{ props.desc }</p>
                <div className="font-medium text-left my-3 text-white underline underline-offset-8">
                  <a>
                    Kenali Lebih Lanjut 
                  </a>
                </div>
            </div>
    </div>
  )
}

export default AlasanCard