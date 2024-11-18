import React from 'react'

const SeleksiGrid = (props) => {
  return (
    <div className='my-8 mx-10'>
      <p className='text-lg font-bold'>{props.title}</p>
      <div className={`grid grid-cols-1 grid-rows-${props.content.length} divide-y-2 border-gray-300 border-2`}>
              <div className='grid grid-cols-10 grid-rows-1 divide-x-2 border-gray-300 bg-slate-50 font-bold'>
                <div className='col-span-2 px-2'>No</div>
                <div className='col-span-6 px-2'>Nama</div>
                <div className='col-span-2 px-2'>Kelas</div>
              </div>
              {props.content.map((item, index) => (
                <div className='grid grid-cols-10 grid-rows-1 divide-x-2'>
                  <p key={index} className="px-2 col-span-2">
                    {item[0]}
                  </p>
                  <p key={index} className="col-span-6 px-2">
                  {item[1]}
                  </p>
                  <p key={index} className="col-span-2 px-2">
                    {item[2]}
                  </p>
                </div>
              ))}
      
      
      </div>
    </div>
  )
}

export default SeleksiGrid