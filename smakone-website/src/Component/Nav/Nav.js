import React from 'react'
import Logo_SMAK1 from "../../Image/Logo_SMAK1.png"

const Nav = () => {
  return (
    <>
    <div className='Circle'></div> 
    {/* <div className='flex flex-wrap items-center py-4 px-20 w-full fixed top-0 left-0 right-0 justify-between font-sans'> */}
    <div className='flex flex-wrap items-center py-4 px-20 w-full top-0 left-0 right-0 justify-between font-sans'>
      <div>
        <a href='/'class="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900" >
          <img className='object-scale-down h-8' alt='smakone' src={Logo_SMAK1}/>
        </a>
      </div>
      <div className='flex justify-center lg:items-center lg:w-auto w-full py-9'>
        <nav className='font-black text-lg'>
          <a href="/tentang_kami" class="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Tentang Kami</a>
          <a href="/OSIS" class="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">OSIS</a>
          <a href="/kehidupan_smukie" class="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Kehidupan Smukiers</a>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Nav