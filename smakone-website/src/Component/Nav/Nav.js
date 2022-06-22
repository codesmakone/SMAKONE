import React from 'react'
import Logo_SMAK1 from '../../Image/Logo_SMAK1.png'
import { NavLink,Link } from 'react-router-dom'

//Import component
import Dropdown from '../Dropdown'


const Nav = () => {
  return (
    <>
    <div className='Circle'></div> 
    <nav>
      {/* <div className='flex flex-wrap items-center py-4 px-20 w-full fixed top-0 left-0 right-0 justify-between font-sans'> */}
      <div className='flex flex-wrap items-center py-4 px-20 w-full justify-between'>
        <div>
            <Link to="/" className="px-3 py-2 rounded-lg">
              <div>
              <img className='object-scale-down h-8' alt='smakone' src={Logo_SMAK1}/>
              </div>
            </Link>
        </div>
        
        <div className='flex justify-center lg:items-center lg:w-auto w-full py-9 leading-normal'>
          <div className='text-xl font-medium'>
            {/* nanya enrichie ini maunya gmn fixed atau apa */}
            <NavLink to="/Tentang_kami" className="px-3 py-[0.65rem] transition duration-200 border-b-2 border-transparent hover:border-black">
              Tentang Kami
            </NavLink>
            <Dropdown
              title='OSIS' 
              dir1='/OSIS'
              dir2='/OSIS/Emagz'
              dir3='/OSIS/ASS1ST'
              menu1='Tentang Kami'
              menu2='E-Magazine'
              menu3='Ass1st' 
            />
            <Dropdown
              title='Kehidupan Smukiers' 
              dir1='/Kehidupan_smukiers'
              dir2='/Kehidupan_smukiers/Tips'
              dir3='/Kehidupan_smukiers/Kegiatan'
              dir4='/Kehidupan_smukiers/Alumni'
              menu1='Kehidupan SMUKIERS'
              menu2='Tips Belajar'
              menu3='Kegiatan Setelah Kelas'
              menu4='Alumni'
            />
          </div>
        </div>
      </div> 
    </nav>
    
    </>
  )
}

export default Nav