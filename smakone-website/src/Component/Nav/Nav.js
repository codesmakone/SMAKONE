import React from 'react'
import Logo_SMAK1 from "../../Image/Logo_SMAK1.png"
import { NavLink,Link } from 'react-router-dom'

const Nav = () => {

  

  return (
    <>
    <div className='Circle'></div> 
    <nav>
      {/* <div className='flex flex-wrap items-center py-4 px-20 w-full fixed top-0 left-0 right-0 justify-between font-sans'> */}
      <div className='flex flex-wrap items-center py-4 px-20 w-full top-0 left-0 right-0 justify-between'>
        <div>
            <Link to="/" className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">
              <img className='object-scale-down h-8' alt='smakone' src={Logo_SMAK1}/>
            </Link>
        </div>
        <div className='flex justify-center lg:items-center lg:w-auto w-full py-9'>
          <div className='text-xl font-medium'>
            {/* Active style : " ", nanya enrichie ini maunya gmn fixed atau apa */}
            <NavLink to="/tentang_kami" className="px-3 py-2 transition duration-200 border-b-2 border-transparent hover:border-black">
              Tentang Kami
            </NavLink>
            <NavLink to="/osis" className="px-3 py-2 transition duration-200 border-b-2 border-transparent hover:border-black ">
              OSIS
            </NavLink>
            <NavLink to="/kehidupan_smukie" className="px-3 py-2 transition duration-200 border-b-2 border-transparent hover:border-black ">
              Kehidupan Smukiers
            </NavLink>
          </div>
        </div>
      </div> 
    </nav>
    
    </>
  )
}

export default Nav