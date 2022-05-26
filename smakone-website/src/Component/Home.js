import React from 'react'
import Nav from './Nav'


const Home = () => {
  return (
    <div>
      <Nav/>
      <div className='mt-32 col-span-6 bg-white flex flex-col justify-start text-left' >
      <div className='px-20 py-24'>
        <h1 className='text-7xl py-12 font-bold'>We Are SMAK 1</h1>
        <h4 className='text-lg font-bold'>Sekolah terbaik dengan siswa-siswi yang berpresestasi</h4>
      </div>
      </div>
    </div>
  )
}

export default Home