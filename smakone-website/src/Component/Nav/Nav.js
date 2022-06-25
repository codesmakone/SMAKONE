import React from 'react'
import Logo_SMAK1 from '../../Image/Logo_SMAK1.png'
import { Link } from 'react-router-dom'
import { useScrollPosition } from '../../Hooks';

//Import component
import Dropdown from '../Dropdown'


const Nav = () => {

  function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
  
  const scrollPosition = useScrollPosition();
  
  
  return (
    <>
    <div className='Circle'></div> 
    <nav className=''>
      <div className={classNames(
        scrollPosition > 0 ? 'bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]' : '',
        'flex flex-wrap items-center pt-3 px-20 w-full fixed top-0 left-0 justify-between z-50 transition-all duration-200'
      )}>
        <div>
            <Link to="/" className="py-px rounded-lg">
              <div>
              <img className='object-scale-down h-7' alt='smakone' src={Logo_SMAK1}/>
              </div>
            </Link>
        </div>
        
        <div className='flex justify-center lg:items-center lg:w-auto w-full py-5 leading-normal'>
          <div className='text-xl font-medium'>
            {/* nanya enrichie ini maunya gmn fixed atau apa */}
            <Dropdown
            title="Tentang SMAK 1"
            class="px-3 py-2 transition duration-200 border-b-2 border-transparent hover:border-black"
            />
            <Dropdown
              title='OSIS'
              class="px-3 py-2 transition duration-200 border-b-2 border-transparent hover:border-black" 
              dir1='/OSIS'
              dir2='/OSIS/Emagz'
              dir3='/OSIS/ASS1ST'
              menu1='Tentang Osis'
              menu2='E-Magazine'
              menu3='Ass1st' 
            />
            <Dropdown
              title='Kehidupan SMUKIERS'
              class="px-3 py-2 transition duration-200 border-b-2 border-transparent hover:border-black" 
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